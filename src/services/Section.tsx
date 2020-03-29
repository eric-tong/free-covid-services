import "../styles/section.scss";

import React from "react";
import Service from "./Service";

export default function Section({
  section,
  color: { primary, background }
}: {
  section: Section;
  color: Color;
}) {
  return (
    <section
      style={
        {
          "--primary": primary,
          "--background": background
        } as React.CSSProperties
      }
    >
      <h1>
        {section.icon} {section.name}
      </h1>
      {section.subsections.map(subsection => (
        <Subsection key={subsection.name} subsection={subsection} />
      ))}
    </section>
  );
}

function Subsection({ subsection }: { subsection: Subsection }) {
  return (
    <>
      <h2>{subsection.name}</h2>
      <div className="grid">
        {subsection.services.map(service => (
          <Service key={service.name} service={service} />
        ))}
      </div>
    </>
  );
}
