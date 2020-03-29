import React from "react";

export default function Service({ service }: { service: Service }) {
  return (
    <div className="service">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <div className="tags">{service.type === "Free" && <Tag />}</div>
      <a
        className="button"
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </a>
    </div>
  );
}

function Tag() {
  return <div className="tag">Free</div>;
}
