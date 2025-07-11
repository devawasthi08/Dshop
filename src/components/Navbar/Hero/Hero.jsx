import React from 'react';
import Slider from "react-slick";
import Image1 from "../../../assets/headphone.png";
import Image2 from "../../../assets/macbook.png";
import Image3 from "../../../assets/vr.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description: "Feel the music like never before."
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Apple MacBook",
    title: "M2 Chip",
    title2: "Power Performance",
    description: "Powerful performance in a sleek design."
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Oculus VR",
    title: "Virtual",
    title2: "Reality",
    description: "Step into a new dimension of experience."
  }
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <section className='home' id='home'>
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bg-gradient-to-br from-gray-100 to-gray-300 flex items-center">
        <div className="w-full">
  
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-10">
    
                  <div className="text-section">
                    <p className="text-gray-500">{data.subtitle}</p>
                    <h1 className="text-3xl font-bold">
                      {data.title} <br /> {data.title2}
                    </h1>
                    <p className="text-gray-400 mt-2">{data.description}</p>
                    <div className="mt-4">
                      <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                        Shop Now
                      </button>
                    </div>
                  </div>

                
                  <div className="image-section flex justify-center items-center">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
