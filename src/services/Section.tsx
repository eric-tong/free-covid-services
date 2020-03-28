import React from "react";
import Service from "./Service";

export default function Section({ section }: { section: Section }) {
  return (
    <section>
      <h2>{section.name}</h2>
      {section.subsections.map(subsection => (
        <Subsection subsection={subsection} />
      ))}
    </section>
  );
}

function Subsection({ subsection }: { subsection: Subsection }) {
  return (
    <>
      <h3>{subsection.name}</h3>
      {subsection.services.map(service => (
        <Service service={service} />
      ))}
    </>
  );
}
