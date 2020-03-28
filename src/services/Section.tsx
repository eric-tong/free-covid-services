import "../styles/section.scss";

import React from "react";
import Service from "./Service";

export default function Section({
  section,
  color
}: {
  section: Section;
  color: string;
}) {
  return (
    <section style={{ background: color }}>
      <h2>{section.name}</h2>
      {section.subsections.map(subsection => (
        <Subsection key={subsection.name} subsection={subsection} />
      ))}
    </section>
  );
}

function Subsection({ subsection }: { subsection: Subsection }) {
  return (
    <>
      <h3>{subsection.name}</h3>
      {subsection.services.map(service => (
        <Service key={service.name} service={service} />
      ))}
    </>
  );
}
