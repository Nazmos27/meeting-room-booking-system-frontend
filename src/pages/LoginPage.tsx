import React from "react";
import { Link } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import { toast } from "sonner";
import CInputField from "../components/form/CInputField";
import CForm from "../components/form/CForm";

const LoginPage: React.FC = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    toast.loading("Loading...");

    console.log("Form submitted");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
      className="login-container"
    >
      <div className="login-content">
        <h1 style={{ textAlign: "center" }}>Login</h1>

        <div>
          <CForm onSubmit={onSubmit}>
            <Row>
              <Col span={24}>
                <CInputField type="email" label="Email" name="email" />
              </Col>
              <Col span={24}>
                <CInputField type="text" label="Password" name="password" />
              </Col>
            </Row>
            <Button
              htmlType="submit"
              type="primary"
              style={{ backgroundColor: "blue" }}
            >
              Login
            </Button>
          </CForm>
        </div>
        <Divider>
          New user? please <Link to={"/signup"}>Signup</Link>
        </Divider>
      </div>
    </div>
  );
};

export default LoginPage;
