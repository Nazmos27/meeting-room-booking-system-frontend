import React from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import aboutUs from "../../public/aboutUs.json";
import SectionHeader from "../components/ui/SectionHeader";
import CustomContainer from "../components/CustomContainer";
const AboutPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Reserve It | About</title>
      </Helmet>
      <CustomContainer>
        <div className="md:flex border-2 my-20 min-h-svh md:justify-between md:p-20 p-10 md:items-center">
          <div className="md:w-1/2 w-full">
            <Lottie animationData={aboutUs}></Lottie>
          </div>
          <div className="md:w-1/2 space-y-4">
            <SectionHeader title="About us" subTitle=""></SectionHeader>
            <p className="text-sm md:text-lg">
              In 2024, fueled by the desire to simplify the process of booking
              meeting spaces,
              <b>ReserveIt</b> was born. Our mission is to provide individuals
              and businesses with a streamlined platform for reserving rooms
              that fit their exact needs. This vision became the foundation for
              a service that takes the stress out of booking meetings, ensuring
              convenience and efficiency.
            </p>
            <p className="text-sm md:text-lg">
              Committed to harnessing the latest technology and a user-centric
              design, ReserveIt strives to set the gold standard for room
              booking solutions. We aim to deliver a seamless, fast, and
              reliable experience, helping users manage their bookings
              effortlessly while promoting productivity and collaboration in
              every meeting.
            </p>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default AboutPage;
