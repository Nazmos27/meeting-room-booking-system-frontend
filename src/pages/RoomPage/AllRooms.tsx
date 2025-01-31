import React, { useEffect, useState } from "react";
import { useGetAllRoomsQuery } from "../../redux/features/user/userAccess.api";
import { Button, Col, Input, Pagination, Row, Spin } from "antd";
import RoomCard from "../../components/ui/RoomCard";
import CustomContainer from "../../components/CustomContainer";
import { TbFilterEdit } from "react-icons/tb";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TRoom } from "../../types/user.types";
import FilterSlider from "./FilterSlider";
import { Helmet } from "react-helmet-async";

const AllRooms: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [minCapacity, setMinCapacity] = useState<number | undefined>(undefined);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<string | undefined>(undefined);

  // debounce the search functionality
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    // timeout cleanup function
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  // Filter out query params undefined value
  const queryParams = [
    { name: "page", value: currentPage },
    { name: "limit", value: 9 },
    { name: "searchTerm", value: debouncedSearch },
    { name: "capacity", value: minCapacity },
    { name: "minPrice", value: minPrice },
    { name: "maxPrice", value: maxPrice },
    { name: "sort", value: sortOrder },
  ].filter((item) => item.value !== undefined);
  // Fetch Room Data with pagination and search
  const {
    data: allRoomsData,
    isLoading,
    isFetching,
  } = useGetAllRoomsQuery(queryParams);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  const clearFilters = () => {
    setSearch("");
    setMinCapacity(undefined);
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSortOrder(undefined);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.minCapacity) {
      setMinCapacity(Number(data.minCapacity));
    } else if (data.minCapacity === undefined) {
      setMinCapacity(undefined);
    }

    if (data.minPrice) {
      setMinPrice(Number(data.minPrice));
    } else if (data.minPrice === undefined) {
      setMinPrice(undefined);
    }

    if (data.maxPrice) {
      setMaxPrice(Number(data.maxPrice));
    } else if (data.maxPrice === undefined) {
      setMaxPrice(undefined);
    }

    if (data.sortOrder) {
      setSortOrder(data.sortOrder);
    } else if (data.sortOrder === undefined) {
      setSortOrder(undefined);
    }
    // close modal
    onClose();
  };
  if (isLoading || isFetching) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large"></Spin>
      </div>
    );
  }
  return (
    <div style={{ margin: "70px 0px", minHeight: "100vh" }}>
      <Helmet>
        <title>Reserve It | Room</title>
      </Helmet>
      {/* Drawer */}
      <FilterSlider
        onClose={onClose}
        openDrawer={openDrawer}
        onSubmit={onSubmit}
      />

      {/* Main Content of the room page */}
      <CustomContainer>
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            Browse all meeting rooms
          </h1>
          <Row gutter={[20, 20]}>
            <Col span={24} md={{ span: 16 }} lg={{ span: 18 }}>
              <Input
                placeholder="Search rooms"
                value={search}
                size="middle"
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: "20px" }}
              />
            </Col>
            <Col span={12} md={{ span: 4 }} lg={{ span: 3 }}>
              {" "}
              <Button onClick={showDrawer} block={true}>
                Filter <TbFilterEdit />
              </Button>{" "}
            </Col>
            <Col span={12} md={{ span: 4 }} lg={{ span: 3 }}>
              <Button onClick={clearFilters} block={true}>
                Clear Filter
              </Button>{" "}
            </Col>
          </Row>
          {/* Loading animation */}
          {isLoading ||
            (isFetching && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spin size="large"></Spin>
              </div>
            ))}

          <div style={{ margin: "30px 0px" }}>
            <Row gutter={[30, 30]}>
              {allRoomsData?.data?.result?.map((room: TRoom) => (
                <Col
                  span={24}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  key={room._id}
                >
                  <RoomCard room={room} />
                </Col>
              ))}
            </Row>
          </div>
          <Pagination
            responsive={true}
            hideOnSinglePage={true}
            onChange={(value) => setCurrentPage(value)}
            align="start"
            defaultCurrent={1}
            pageSize={10}
            total={allRoomsData?.data?.meta?.total}
          />
        </div>
      </CustomContainer>
    </div>
  );
};

export default AllRooms;
