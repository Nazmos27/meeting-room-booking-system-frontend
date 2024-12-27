import { Link } from "react-router-dom";
import CustomContainer from "../../components/CustomContainer";
import { Avatar, Tooltip } from "antd";
import { AntDesignOutlined, ArrowRightOutlined, StarFilled, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import type { GetProps } from 'antd';
import { FaMagnifyingGlass } from "react-icons/fa6";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const BannerSection = () => {
  return (
    <div>
      <CustomContainer>
        <div className="flex items-center justify-center mt-36 gap-10">
          <div className="w-1/2">
            <h1 className="text-4xl pl-6 text-center">Reserve Your Perfect </h1>
            <br />
            <p className="border-black border-2 rounded-full text-center text-4xl  py-2 mx-16">
              Meeting Space
            </p>
            <br />{" "}
            <p className="text-3xl text-center">
              Just a{" "}
              <Link to="/rooms">
                <button className="bg-green-300 hover:bg-green-500 py-2 px-4 rounded-full">
                  Click
                </button>
              </Link>{" "}
              away
            </p>
            <hr className="mt-6 border-2" />
            <p className="my-3">
              Efficient, hassle-free room booking for all your meeting needs.
              Just Select, Pay and Enjoy
            </p>
            <div className="">
              <div className="gallery">
                <img
                  src="https://i.ibb.co.com/B37SP2P/9eafc898-73c5-449e-9184-8997ec94f32a.jpg"
                  alt="a forest after an apocalypse"
                />
                <img
                  src="https://i.ibb.co.com/Fg52m0F/Smart-office-and-coworking-place-Krasnodar.jpg"
                  alt="a waterfall and many rocks"
                />
                <img
                  src="https://i.ibb.co.com/B6zZxkb/Orange-Poland-Offices-Warsaw-Office-Snapshots.jpg
"
                  alt="a house on a mountain"
                />
                <img
                  src="https://i.ibb.co.com/Kw7Rs7Z/IT.jpg"
                  alt="sime pink flowers"
                />
                {/* <img src="https://picsum.photos/id/136/800/600" alt="big rocks with some trees"/> */}
              </div>
            </div>
          </div>
          <div className="space-y-3 flex flex-col justify-start items-start">
            <img
              src="https://i.ibb.co.com/mT2t0Kc/ec0dc51a-ae78-44b4-975c-972a51f4cf73.jpg"
              alt="bannerImg"
              className="rounded-3xl"
            />
            <div className="flex justify-center items-center gap-4">
              <Avatar.Group
              size={{ xs: 20, sm: 26, md: 30, lg: 36, xl: 44, xxl: 100 }}
              >
                <Tooltip title="Levi Ackerman" placement="top">
                <Avatar src="https://i.pinimg.com/736x/41/21/53/412153ead9ced3dd624d98f4297ec011.jpg" />
                </Tooltip>
                <Tooltip title="Serlock Holmes" placement="top">
                <Avatar src="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2020/05/22/benedict_cumberbatch_0.png"/>
                </Tooltip>
                <Tooltip title="Elezabeth Olsen" placement="top">
                  <Avatar
                    src="https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/504774/ElizabethOlsen-2022_r.jpg"
                  />
                </Tooltip>
                <Tooltip title="Kianu Rieves" placement="top">
                <Avatar
                  src="https://img.devrant.com/devrant/rant/c_3842640_QZJUe.jpg"
                />
                </Tooltip>
                
                <Avatar style={{ backgroundColor: "#f56a00" ,fontSize : 15}}>1k+</Avatar>
              </Avatar.Group>
              <p>Trusted by 1000+ happy customers!</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <p className="border-black border-2 px-2 py-1 rounded-full">4.5 <StarFilled/></p>
              <a href='#reviews'><button className="border-black border-2 px-4 py-1 rounded-full">Client Reviews <ArrowRightOutlined/></button></a>
              <div className="flex justify-center items-center">
              <input type="text" className="w-64 h-9 border-black border-2 rounded-full pl-4" placeholder="Search here" />
              <FaMagnifyingGlass className="relative right-8"/>
              </div>
              

            </div>
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
