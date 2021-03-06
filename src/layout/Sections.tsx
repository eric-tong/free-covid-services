import React from "react";
import Section from "../services/Section";
import { getColorsFromIndex } from "../utils/colors";
import useSections from "../data/useSections";

const MAIN_ID = "sections";

export default function Sections() {
  const sections = useSections();

  if (sections.length) {
    return (
      <main id={MAIN_ID}>
        {sections.map((section, i) => (
          <Section
            key={section.name}
            section={section}
            color={getColorsFromIndex(i)}
          />
        ))}
      </main>
    );
  } else {
    const preloadedElement = document.getElementById(MAIN_ID);
    return (
      preloadedElement && (
        <main
          id={MAIN_ID}
          dangerouslySetInnerHTML={{
            __html: preloadedElement?.innerHTML.toString()
          }}
        />
      )
    );
  }
}
