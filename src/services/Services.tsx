import React from "react";
import useSections from "../data/useSections";

export default function Services() {
  const sections = useSections();
  return (
    <div className="middle">
      {sections.map(section => (
        <>
          <h2>{section.name}</h2>
          {section.subsections.map(subsection => (
            <>
              <h3>{subsection.name}</h3>
              {subsection.services.map(service => (
                <>
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                </>
              ))}
            </>
          ))}
        </>
      ))}
    </div>
  );
}
