import React from "react";
import useServices from "../data/useServices";

export default function Services() {
  const services = useServices();
  return (
    <>
      {services.map(service => (
        <p>{service.name}</p>
      ))}
    </>
  );
}
