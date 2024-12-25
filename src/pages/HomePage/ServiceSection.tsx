import React from "react";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import "../../styles/style.css";
import SectionHeader from "../../components/ui/SectionHeader";

const ServiceSection: React.FC = () => {
  const services = [  
    {
      icon: "./icons/easy-peasy.gif",
      description:
        "Book rooms with just a few clicks, no paperwork or hassle required.",
    },
    {
      icon: "./icons/time.gif",
      description:
        "Get real-time updates on availbale room, for swift booking decisions.",
    },
    {
      icon: "./icons/cancel.gif",
      description:
        "Cancel or modify bookings easily, with clear and simple options.",
    },
    {
      icon: "./icons/phone.gif",
      description:
        "Get assistance anytime with our round-the-clock customer support.",
    },
  ];
  return (
    <div style={{ margin: "100px 0px" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title="Our Services"
          subTitle="Explore how we simplify and enhance your experience."
        />
      </motion.div>

      <Row gutter={[30, 70]} align="stretch" justify="space-between">
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ height: "100%" }}
            >
              
                <div className="border-2 px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-100 py-3 rounded text-center flex flex-col items-center">
                  <img
                    src={service.icon}
                    className="h-20 w-20 rounded-full"
                    alt="service icons"
                  />
                  <h3 className=" my-2">
                    {service.description}
                  </h3>
                </div>
                {/* <h3 style={{ color: "#003366", fontSize: "20px" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "16px" }}>{service.description}</p> */}
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServiceSection;
