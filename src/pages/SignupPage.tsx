import React from "react";
import { Link } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";
import { primaryButton } from "../config/themeConfig";
import CForm from "../components/form/CForm";
import CInputField from "../components/form/CInputField";
import { signupSchema } from "../schemas/userValidationSchema";

const SignUp: React.FC = () => {
  const [signUp] = useSignUpMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await signUp(data);

      if (res.error) {
        toast.error("Something went wrong", { id: toastId });
      } else {
        toast.success("User created successfully", { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div
      className="login-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div className="login-content">
        <h1 style={{ textAlign: "center" }}>Signup as New User</h1>

        <div>
          <CForm onSubmit={onSubmit} resolver={zodResolver(signupSchema)}>
            <Row gutter={20}>
              <Col span={24} lg={{ span: 12 }}>
                <CInputField type="text" label="Name" name="name" />
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <CInputField type="email" label="Email" name="email" />
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <CInputField type="text" label="Phone" name="phone" />
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <CInputField type="text" label="Password" name="password" />
              </Col>
              <Col span={24}>
                <CInputField type="text" label="Address" name="address" />
              </Col>
            </Row>
            <Button htmlType="submit" type="primary" style={primaryButton}>
              Signup
            </Button>
          </CForm>
        </div>
        <Divider>
          Already Have an account? please <Link to={"/login"}>Login</Link>
        </Divider>
      </div>
    </div>
  );
};

export default SignUp;
