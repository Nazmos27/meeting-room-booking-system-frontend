import { Button, Col, message, Row, Spin } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateRoomMutation } from "../../redux/features/admin/roomManagement.api";
import { primaryButton } from "../../config/themeConfig";
import { useGetSingleRoomQuery } from "../../redux/features/user/userAccess.api";
import uploadImage from "../../utils/uploadImage";
import CForm from "../../components/form/CForm";
import { roomSchema } from "../../schemas/roomValidationSchema";
import CInputField from "../../components/form/CInputField";
import CFileInput from "../../components/form/CFileInput";

const UpdateRoom = () => {
  const navigate = useNavigate();
  const [updateRoom] = useUpdateRoomMutation();
  const [loading, setLoading] = useState(false);

  const { roomId } = useParams();

  const {
    data: roomData,
    isLoading: roomInfoLoading,
    isFetching: roomInfoFetching,
  } = useGetSingleRoomQuery(roomId as string);
  // const roomInfo: TRoom = roomData?.data?;
  const defaultData = {
    amenities: roomData?.data?.amenities.join(","),
    capacity: String(roomData?.data?.capacity),
    floorNo: String(roomData?.data?.floorNo),
    name: roomData?.data?.name,
    pricePerSlot: String(roomData?.data?.pricePerSlot),
    roomNo: String(roomData?.data?.roomNo),
  };

  // Submit handler
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);

    try {
      const { img, detailImages, ...restValues } = values;

      // Upload main image
      let mainImageUrl;
      if (img) {
        const mainImageFormData = new FormData();
        mainImageFormData.append("file", img);
        mainImageFormData.append("upload_preset", "meetingspot");

        const mainImageResponse = await uploadImage(mainImageFormData);
        mainImageUrl = mainImageResponse.secure_url;
      }

      // Upload detail images
      let detailImagesUrls;
      if (detailImages) {
        detailImagesUrls = await Promise.all(
          detailImages.map(async (imageFile: File) => {
            const formData = new FormData();
            formData.append("file", imageFile);
            formData.append("upload_preset", "meetingspot");

            const response = await uploadImage(formData);
            return response.secure_url;
          })
        );
      }

      // Prepare final data to send to the backend
      const roomData = {
        ...restValues,
        ...(mainImageUrl && { img: mainImageUrl }),
        ...(detailImagesUrls && { detailImages: detailImagesUrls }),
        amenities: restValues.amenities, // Transformed amenities
      };
      console.log(roomData);

      // Send the data to the API
      const res = await updateRoom({ id: roomId, data: roomData });
      console.log(res);
      if (res.data.success) {
        message.success("Room updated successfully!");
        navigate("/dashboard/room-management");
      }
    } catch (error) {
      message.error("Failed to update room.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Update Room</h2>
      {roomInfoFetching || roomInfoLoading ? (
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        ""
      )}
      {roomData?.data ? (
        <CForm
          onSubmit={onSubmit}
          resolver={zodResolver(roomSchema.updateRoomSchema)}
          defaultValues={defaultData}
        >
          <Row gutter={[30, 30]}>
            <Col sm={24} lg={12}>
              <CInputField label="Room Name" name="name" type="text" />
            </Col>

            <Col sm={24} lg={12}>
              <CInputField label="Room No." name="roomNo" type="number" />
            </Col>

            <Col sm={24} lg={12}>
              <CInputField label="Floor No." name="floorNo" type="number" />
            </Col>

            <Col sm={24} lg={12}>
              <CInputField label="Capacity" name="capacity" type="number" />
            </Col>

            <Col sm={24} lg={12}>
              <CInputField
                label="Price Per Slot"
                name="pricePerSlot"
                type="number"
              />
            </Col>

            <Col sm={24} lg={12}>
              <CInputField
                label="Amenities"
                name="amenities"
                type="text"
                placeholder=" Separate every amenity with comma ( , )"
              />
            </Col>
          </Row>

          {/* Single image upload */}
          <CFileInput label="Main Image" name="img" accept="image/*" />

          {/* Multiple image upload */}
          <CFileInput
            label="Detail Images"
            name="detailImages"
            accept="image/*"
            multiple
          />

          <div style={{ marginTop: "16px" }}>
            <Button
              type="primary"
              style={primaryButton}
              htmlType="submit"
              disabled={loading}
            >
              {loading ? <Spin /> : "Update Room"}
            </Button>
          </div>
        </CForm>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              textAlign: "center",
              marginTop: "100px",
              color: "gray",
              marginBottom: "20px",
            }}
          >
            Room Data Not Found
          </h1>
          <Link
            style={{ marginTop: "10px", textAlign: "center" }}
            to={"/dashboard/room-management"}
          >
            <Button type="primary" style={primaryButton}>
              Manage Rooms
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UpdateRoom;
