import React from "react";
import Heading from "./Heading";
import Tools from "./Tools";
import Card from "./Card";
import Footer from "./Footer";
import BuilderCard from "./BuilderCard";
import SignUp from "../components/SignUp";
import Features from "../components/Features";
import image1 from "../assets/Trophy.png";
import image2 from "../assets/IMAGE.png";

const Main = () => {
  const data = [
    {
      slNo: 1,
      image: image2,

      bestChoice: "Best Choice",
      name: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores",
      color: "(Black/Blue)",
      isDiscount: false,
      whatYouGet:
        "[What You Get]:Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    },
    {
      slNo: 2,
      name: "Builder",
      image: image1,
      bestChoice: "Best Value",

      title: "SiteCraft 68-Inch Ultimate Web Design Studio",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms",
      color: "(Green/White)",
      isDiscount: false,
      whatYouGet:
        "[What You Get]:Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    },
    {
      slNo: 3,
      name: "Builder 1",

      title: "WixPro 72-Inch Responsive Website Builder",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores",
      color: "(Black/Blue)",
      isDiscount: false,
      whatYouGet:
        "[What You Get]:Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    },
    {
      slNo: 4,
      name: "CDK",

      title: "CDK Resposive Builder",
      description:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      color: "",
      isDiscount: true,
      whatYouGet: <Features />,
    },
  ];
  return (
    <>
      <div className="main ">
        <div>
          <Heading />
          
          <Tools />
          <div className="w-96 mx-auto flex-col sm:w-full md:w-full flex justify-center items-center">
            {data.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>

          <p className="text-[32px] text-[#2C384A] pt-12 pb-6  ">
            Related deals you might like for
          </p>
          <div className="flex flex-col items-center gap-6 md:flex-row  sm:flex-row lg:flex-row">
            <BuilderCard />
            <BuilderCard />
            <BuilderCard />
          </div>
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default Main;
