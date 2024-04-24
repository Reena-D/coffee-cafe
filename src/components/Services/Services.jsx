import React from "react";
import man from "../../assets/man.png";
import mix from "../../assets/mix.png";
import zin from "../../assets/zin.png";
import gold from "../../assets/gold.png";
import liquimix from "../../assets/liquimix.png";
import spread from "../../assets/spread-on.png";

const ServicesData = [
  {
    id: 1,
    img: zin,
    name: "Daksha-ZIN",
    // description:
    //   "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: man,
    name: "Daksha-MAN",
    // description:
    //   "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: mix,
    name: "Daksha-MIX",
    // description:
    //   "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];

const ProductsData = [
  {
    id: 1,
    img: gold,
    name: "Bloom-Gold",
    // description:
    //   "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: liquimix,
    name: "",
    // description:
    //   "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: spread,
    name: "",
    // description:
    //   "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="products"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-gray-800">
              Products
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group w-[300px] h-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/><br/><br/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ProductsData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group w-[250px] h-[250px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
