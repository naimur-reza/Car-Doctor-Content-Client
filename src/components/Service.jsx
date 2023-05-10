import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("../../public/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="py-14">
      <div className="space-y-3">
        {" "}
        <h1 className="font-bold text-error text-center"> Services</h1>
        <h1 className="text-4xl text-center font-semibold">
          Our Services Area
        </h1>
        <p className=" px-80 text-center tracking-wide">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-6xl mx-auto gap-5 place-items-center  lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service?.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;