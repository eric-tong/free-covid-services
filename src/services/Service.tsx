import React from "react";

export default function Service({ service }: { service: Service }) {
  return (
    <>
      <h4>{service.name}</h4>
      <p>{service.description}</p>
    </>
  );
}
