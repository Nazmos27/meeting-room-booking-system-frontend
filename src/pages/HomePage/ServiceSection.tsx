import React from "react";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import "../../styles/style.css";
import SectionHeader from "../../components/ui/SectionHeader";

const Service: React.FC = () => {
  const services = [
    {
        title: "Easy Room Booking",
        description: "Book rooms with just a few clicks, no paperwork or hassle required.",
      },
      {
        title: "Real-Time Info",
        description: "Get real-time updates on room availability to make swift booking decisions.",
      },
      {
        title: "Cancellation Flexibility",
        description: "Cancel or modify bookings easily, with clear and simple options.",
      },
      {
        title: "24/7 Support",
        description: "Get assistance anytime with our round-the-clock customer support."
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
              <div
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  textAlign: "center",
                  height: "100%",
                }}
                className="roomCard"
              >
                <h3 style={{ color: "#003366", fontSize: "20px" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "16px" }}>{service.description}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Service;
