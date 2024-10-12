import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card } from "antd";
import SectionHeader from "../../components/ui/SectionHeader";

const testimonials = [
  {
    name: "Benedict Cumberbatch",
    role: "Detective",
    testimonial:
      "This booking system is incredible! The process is smooth and straightforward. I was able to book a meeting room in just a few clicks.",
    image:
      "https://cdn.britannica.com/96/173696-050-7070A29D/Benedict-Cumberbatch-British-stage-screen.jpg",
  },
  {
    name: "Elezabeth Olsen",
    role: "Actress",
    testimonial:
      "Absolutely love the user experience. The real-time availability feature is a game-changer. It’s so easy to find the perfect room.",
    image:
      "https://cdn.britannica.com/47/217047-050-4EBEFEBA/American-actress-Elizabeth-Olsen-2009.jpg",
  },
  {
    name: "Pattrick Bateman",
    role: "Actor",
    testimonial:
      "Efficient, intuitive, and reliable. The support team is also very responsive. Highly recommend this service!",
    image:
      "https://i.scdn.co/image/ab67616d00001e0202e86742376be76f5ba43a7a",
  },
  {
    name: "Levi Ackerman",
    role: "Squad Captain, Scout Regiment",
    testimonial:
      "Secure transactions and seamless booking. I can book rooms quickly and focus on my meetings. Great service!",
    image:
      "https://i.pinimg.com/236x/46/01/67/46016776db919656210c75223957ee39.jpg",
  },

  
];

const TestimonialSection: React.FC = () => {
  return (
    <div style={{ margin: "100px 0px" }}>
      <SectionHeader
        title="Client Testimonials"
        subTitle="Experience from our valuable clents"
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card
              style={{
                textAlign: "center",
                padding: "40px",
                borderRadius: "10px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="testimonialCard">
                <div className="testimonialImg">
                  <img
                    src={testimonial.image}
                    style={{
                      marginBottom: "20px",
                      width: "400px",
                      height: "400px",
                      margin: "0px auto",
                      borderRight: "5px solid orange",
                      borderRadius: "5px",
                      paddingRight: "3px",
                    }}
                  />
                </div>
                <div className="testimonialContent">
                  <h3 style={{ fontSize: "22px", color: "#003366" }}>
                    {testimonial.name}
                  </h3>
                  <p style={{ fontSize: "16px", fontStyle: "italic" }}>
                    {testimonial.role}
                  </p>
                  <p style={{ fontSize: "16px", marginTop: "10px" }}>
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
