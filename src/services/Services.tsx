import React from "react";
import useSections from "../data/useSections";

const SECTION_ID = "services";

export default function Services() {
  const sections = useSections();
  if (sections.length) {
    return (
      <section id={SECTION_ID} className="middle">
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
      </section>
    );
  } else {
    const preloadedElement = document.getElementById(SECTION_ID);
    return (
      preloadedElement && (
        <section
          id={SECTION_ID}
          dangerouslySetInnerHTML={{
            __html: preloadedElement?.innerHTML.toString()
          }}
        />
      )
    );
  }
}
