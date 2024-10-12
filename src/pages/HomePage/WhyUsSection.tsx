import React from "react";
import {  Collapse } from "antd";
import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import type { CollapseProps } from 'antd';
import Lottie from "lottie-react";
import whyUs from "../../../public/whyUs.json"



const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '🎯 Tailored for Your Needs',
    children: <p>Customizable booking options to match your unique schedule and preferences. Whether it's a short meeting or an all-day conference, we've got you covered.</p>,
  },
  {
    key: '2',
    label: '⚡️ Fast & Reliable',
    children: <p>Enjoy lightning-fast booking with a system designed for efficiency and reliability. Say goodbye to delays and enjoy a seamless reservation experience every time.</p>,
  },
  {
    key: '3',
    label: '💰 Transparent Pricing',
    children: <p>No hidden fees or surprise charges. You get clear, upfront pricing with every booking, so you always know exactly what you're paying for. Honest and fair, just the way you want it.</p>,
  },
  {
    key: '4',
    label: '🤝 Exceptional Customer Support',
    children: <p>Our dedicated support team is available 24/7 to assist with all your booking needs. Whether it's troubleshooting, room changes, or just advice, we're here for you around the clock.</p>,
  },
  {
    key: '5',
    label: '🔄 Flexible Cancellations',
    children: <p>Plans changed? No problem! Easily cancel or modify your bookings with no hassle. Our flexible cancellation policies are designed to give you the freedom to adjust your schedule stress-free.</p>,
  },
  {
    key: '6',
    label: '🏆 Trusted by Professionals',
    children: <p>Join countless businesses and professionals who rely on us to handle their meeting room needs effortlessly. We're the trusted partner for those who demand excellence.</p>,
  },
  {
    key: '7',
    label: '🏢 Comprehensive Room Details',
    children: <p>Get detailed insights into room features, including size, amenities, and availability. From seating capacity to tech equipment, make informed decisions to ensure the perfect fit for your needs.</p>,
  },
  {
    key: '8',
    label: '🔒 Secure Transactions',
    children: <p>Your data and payments are safe with us. We utilize advanced encryption and secure protocols to ensure every transaction is protected and worry-free.</p>,
  },
];






const WhyUsSection: React.FC = () => {
  return (
    <div style={{ margin: "100px 0px" }}>
      <SectionHeader title="Why Choose Us"/>
      <div className="md: flex md:justify-center md:items-center">
        <div className="w-1/2"><Lottie animationData={whyUs}></Lottie></div>
        <Collapse accordion items={items} className="w-1/2 text-[#002349] md:text-xl"/>
      </div>
    </div>
  );
};

export default WhyUsSection;
