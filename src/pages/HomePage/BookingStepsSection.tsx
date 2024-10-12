import React from "react";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import {
  CheckCircleTwoTone,
  DollarTwoTone,
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";

const steps = [
  {
    title: "Select a Room",
    description: "Browse our rooms collection to find the perfect fit.",
    icon: "./icons/selective.gif",
  },
  {
    title: "Choose Date & Time",
    description: "Pick the date and time that suits your schedule.",
    icon: "./icons/calendar.gif",
  },
  {
    title: "Confirm Booking",
    description: "Finalize your booking and get instant confirmation.",
    icon: "./icons/heart.gif",
  },
];

const BookingStepsSection: React.FC = () => {
  return (
    <div style={{ margin: "100px 0px" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title="Easy Peasy Lemon Squeezy!"
          subTitle="Simple steps to book your room less than a minute!"
        />
      </motion.div>

      <Row gutter={[30, 30]} align="middle" justify="center">
        {steps.map((step, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="border-2 px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-100 py-3 rounded text-center flex flex-col items-center">
                <img
                  src={step.icon}
                  className="h-20 w-20 rounded-full"
                  alt="service icons"
                />
                <h3 className=" my-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
      <Steps
        className="mt-6"
        items={[
          {
            title: "Login",
            status: "finish",
            icon: <UserOutlined />,
          },
          {
            title: "Verification",
            status: "finish",
            icon: <CheckCircleTwoTone />
          },
          {
            title: "Pay",
            status: "finish",
            icon: <DollarTwoTone />
          },
          {
            title: "Done",
            status: "finish",
            icon: <SmileOutlined />,
          },
        ]}
      />
    </div>
  );
};

export default BookingStepsSection;
