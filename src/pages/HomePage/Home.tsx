import React from "react";
import BannerSection from "./BannerSection";
import CustomContainer from "../../components/CustomContainer";
import ServiceSection from "./ServiceSection";
import FeaturedSection from "./FeaturedSection";
import WhyUsSection from "./WhyUsSection";
import BookingStepsSection from "./BookingStepsSection";
import TestimonialSection from "./TestimonialSection";
import { Helmet } from "react-helmet-async";


const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Reserve It | Home</title>
      </Helmet>
      <BannerSection />
      <CustomContainer>
        <ServiceSection />
        <FeaturedSection />
        <WhyUsSection />
        <BookingStepsSection />
        <TestimonialSection />
      </CustomContainer>
    </div>
  );
};

export default Home;
