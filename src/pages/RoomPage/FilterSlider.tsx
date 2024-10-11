import { Button, Col, Drawer, Row } from "antd";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CForm from "../../components/form/CForm";
import CInputField from "../../components/form/CInputField";
import CSelectField from "../../components/form/CSelectField";

type TDrawerProps = {
  onClose: ((e: React.MouseEvent | React.KeyboardEvent) => void) | undefined;
  openDrawer: boolean;
  onSubmit: SubmitHandler<FieldValues>;
};

const FilterSlider: React.FC<TDrawerProps> = ({
  onClose,
  openDrawer,
  onSubmit,
}) => {
  return (
    <Drawer
      title="Filter Rooms"
      width={720}
      onClose={onClose}
      open={openDrawer}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
    >
      <CForm onSubmit={onSubmit}>
        <Row gutter={20}>
          <Col span={12} lg={{ span: 6 }}>
            <CInputField type="text" name="minCapacity" label="Min Capacity" />
          </Col>
          <Col span={12} lg={{ span: 6 }}>
            <CInputField type="text" name="minPrice" label="Min Price" />
          </Col>
          <Col span={12} lg={{ span: 6 }}>
            <CInputField type="text" name="maxPrice" label="Max Price" />
          </Col>
          <Col span={12} lg={{ span: 6 }}>
            <CSelectField
              name="sortOrder"
              label="Sort By"
              options={[
                { value: "pricePerSlot", label: "Price: Low to High" },
                { value: "-pricePerSlot", label: "Price: High to Low" },
              ]}
            />
          </Col>
          <Button htmlType="submit">Filter</Button>
        </Row>
      </CForm>
    </Drawer>
  );
};

export default FilterSlider;
