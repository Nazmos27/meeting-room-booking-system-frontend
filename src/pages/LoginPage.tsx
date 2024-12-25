import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { TUser } from "../types/user.types";
import { primaryButton } from "../config/themeConfig";
import { verifyToken } from "../utils/verifyToken";
import CForm from "../components/form/CForm";
import CInputField from "../components/form/CInputField";
import { loginSchema } from "../schemas/userValidationSchema";
const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await login(data as { email: string; password: string });

      if (res.error) {
        console.log(res.error?.data?.message);
        toast.error(`Something went wrong - ${res.error?.data?.message}`, { id: toastId });
      } else if (res.data.token) {
        const user = verifyToken(res.data.token) as TUser;
        dispatch(setUser({ user: res?.data?.data, token: res.data.token }));
        if (user.role === "admin") {
          toast.success(res.data.message, { id: toastId });
          navigate("/dashboard");
        } else {
          toast.success(res.data.message, { id: toastId });
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId });
    }
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
          <CForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
            <Row>
              <Col span={24}>
                <CInputField type="email" label="Email" name="email" />
              </Col>
              <Col span={24}>
                <CInputField type="text" label="Password" name="password" />
              </Col>
            </Row>
            <Button htmlType="submit" type="primary" style={primaryButton}>
              Login
            </Button>
          </CForm>
        </div>
        <Divider>
          New user? please <Link to={"/signup"} className="text-teal-600">Signup</Link>
        </Divider>
      </div>
    </div>
  );
};

export default Login;
