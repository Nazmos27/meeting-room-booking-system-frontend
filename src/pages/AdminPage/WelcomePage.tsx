import React from "react";
import welcomeAnimation from "../../assets/welcomeAdmin.json";
import Lottie from "lottie-react";
import SectionHeader from "../../components/ui/SectionHeader";

const WelcomePage: React.FC = () => {
  return (
    <div>
      <SectionHeader title="Welcome Back" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          margin: "2rem auto",
          maxWidth: "100%",
        }}
      >
        <Lottie animationData={welcomeAnimation} loop={true} />
      </div>
    </div>
  );
};

export default WelcomePage;
