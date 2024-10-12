import React from "react";

type THeadingProps = {
  title: string;
  subTitle?: string;
};

const SectionHeader: React.FC<THeadingProps> = ({ title, subTitle }) => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
    >
      {title && <h2 style={{ fontSize: "32px", color: "#002349" }}>{title}</h2>}
      {subTitle && <h3 style={{ fontSize: "24px" }}>{subTitle}</h3>}
      <hr className="border-2 border-[#957C3D] w-11/12 mx-auto my-4"/>
    </div>
  );
};

export default SectionHeader;
