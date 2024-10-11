import React from "react";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
const features = [
  {
    title: "Tailored for Your Needs",
    description:
      "Customizable booking options to match your unique schedule and preferences.",
  },
  {
    title: "Fast & Reliable",
    description:
      "Enjoy lightning-fast booking with a system built for efficiency and dependability.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees. You get clear, upfront pricing for all room bookings.",
  },
  {
    title: "Exceptional Customer Support",
    description:
      "Our dedicated support team is available 24/7 to assist with all your booking needs.",
  },
  {
    title: "Flexible Cancellations",
    description:
      "Plans changed? Easily cancel or modify your bookings with no hassle.",
  },
  {
    title: "Trusted by Professionals",
    description:
      "Join countless businesses that trust us to handle their meeting room needs effortlessly.",
  },
  {
    title: "Comprehensive Room Details",
    description:
      "Get detailed information on room features, ensuring you choose the perfect space.",
  },
];

const WhyUsSection: React.FC = () => {
  return (
    <div style={{ margin: "100px 0px" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title="Why Choose Us?"
          subTitle="We offer exceptional features for a superior experience"
        />
      </motion.div>

      <Row gutter={[30, 70]} align="stretch">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ height: "100%" }} // Ensures the div stretches to fill height
            >
              <div
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  textAlign: "center",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column", // Ensure vertical alignment
                  justifyContent: "space-between",
                  height: "100%", // Make sure all cards have equal height
                }}
              >
                <h3 style={{ color: "#003366", fontSize: "20px" }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "16px" }}>{feature.description}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhyUsSection;
