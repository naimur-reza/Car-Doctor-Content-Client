import React, { useEffect } from "react";
import img1 from "../../assets/images/about_us/parts.jpg";
import img2 from "../../assets/images/about_us/person.jpg";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="hero min-h-screen  my-contain">
        <div className="hero-content flex-col lg:flex-row justify-between gap-32">
          <div className="relative">
            {" "}
            <div className="w-96 h-80 relative">
              {" "}
              <img
                src={img2}
                className="   rounded-lg shadow-2xl h-full w-full"
              />
            </div>
            <img
              src={img1}
              className="absolute top-1/2 lg:left-1/2 left-1/3 border-4 h-60 border-white w-72 rounded-lg shadow-2xl "
            />
          </div>
          <div className="max-w-lg space-y-4">
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            <p className="text-gray-600">
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
