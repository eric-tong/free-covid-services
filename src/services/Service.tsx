import React from "react";

export default function Service({ service }: { service: Service }) {
  return (
    <div className="service">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
}
