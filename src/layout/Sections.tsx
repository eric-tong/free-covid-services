import React from "react";
import Section from "../services/Section";
import useSections from "../data/useSections";

const MAIN_ID = "sections";

export default function Sections() {
  const sections = useSections();

  if (sections.length) {
    return (
      <main id={MAIN_ID} className="middle">
        {sections.map(section => (
          <Section section={section} />
        ))}
      </main>
    );
  } else {
    const preloadedElement = document.getElementById(MAIN_ID);
    return (
      preloadedElement && (
        <section
          id={MAIN_ID}
          dangerouslySetInnerHTML={{
            __html: preloadedElement?.innerHTML.toString()
          }}
        />
      )
    );
  }
}
