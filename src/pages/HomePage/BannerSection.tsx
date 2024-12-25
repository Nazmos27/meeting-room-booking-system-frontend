import { Button } from "antd";
import { Link } from "react-router-dom";
import CustomContainer from "../../components/CustomContainer";

const BannerSection = () => {
  return (
    <div>
      <CustomContainer>
        <div className="flex items-center justify-center mt-28 gap-10">
          <div className="w-1/2">
            <h1 className="text-5xl pl-16">Your Perfect </h1>
            <br />
            <p className="border-black border-2 rounded-full text-center text-5xl px-4 py-4">
              Meeting Space
            </p>
            <br />{" "}
            <p className="text-4xl pl-16">
              Just a{" "}
              <Link to="/rooms">
                <button className="bg-green-300 hover:bg-green-500 py-2 px-4 rounded-full">
                  Click
                </button>
              </Link>{" "}
              away
            </p>
            <hr className="mt-6 border-2" />
            <p>
              Efficient, hassle-free room booking for all your meeting needs.
              Just Select, Pay and Enjoy
            </p>
            <div className="">
            <div className="gallery">
	<img src="https://picsum.photos/id/1028/800/600" alt="a forest after an apocalypse"/>
	<img src="https://picsum.photos/id/15/800/600" alt="a waterfall and many rocks"/>
	<img src="https://picsum.photos/id/1040/800/600" alt="a house on a mountain"/>
	<img src="https://picsum.photos/id/106/800/600" alt="sime pink flowers"/>
	{/* <img src="https://picsum.photos/id/136/800/600" alt="big rocks with some trees"/> */}
</div>
            </div>
          </div>
          <div className="">
            <img
              src="https://i.ibb.co.com/mT2t0Kc/ec0dc51a-ae78-44b4-975c-972a51f4cf73.jpg"
              alt="bannerImg"
              className="rounded-3xl"
            />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerSection;

// https://i.ibb.co.com/B37SP2P/9eafc898-73c5-449e-9184-8997ec94f32a.jpg
// https://i.ibb.co.com/mT2t0Kc/ec0dc51a-ae78-44b4-975c-972a51f4cf73.jpg
// https://i.ibb.co.com/BrZ3pjX/ce7875fa-1ccb-40a6-aeda-a35afb6d66e2.jpg
// https://i.ibb.co.com/Kw7Rs7Z/IT.jpg
// https://i.ibb.co.com/4WZ3BYN/Smart-office-and-coworking-place-Krasnodar-1.jpg
// https://i.ibb.co.com/B6zZxkb/Orange-Poland-Offices-Warsaw-Office-Snapshots.jpg
// https://i.ibb.co.com/Fg52m0F/Smart-office-and-coworking-place-Krasnodar.jpg

