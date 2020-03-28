import { useEffect, useState } from "react";

import { servicesTable } from "./database";

export default function useSections() {
  const services = useServices();
  const sections = groupServicesIntoSections(services);

  return sections;
}

function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    servicesTable
      .select({
        fields: [
          "name",
          "subsection",
          "section",
          "description",
          "url",
          "type",
          "startDate",
          "endDate"
        ],
        filterByFormula: "enabled",
        sort: ["section", "subsection", "name"].map(field => ({ field }))
      })
      .firstPage()
      .then(records => records.map(record => record.fields))
      .then(setServices)
      .catch(console.error);
  }, []);
  return services;
}

function groupServicesIntoSections(services: Service[]): Section[] {
  const sections = new Map<string, Map<string, Service[]>>();
  services.forEach(service => {
    if (!sections.has(service.section)) {
      sections.set(service.section, new Map());
    }
    const section = sections.get(service.section);
    if (!section) throw new Error("Invalid section");

    if (!section.has(service.subsection)) {
      section.set(service.subsection, [service]);
    } else {
      section.get(service.subsection)?.push(service);
    }
  });
  return Array.from(sections.entries()).map(([sectionName, subsection]) => ({
    name: sectionName,
    subsections: Array.from(
      subsection.entries()
    ).map(([subsectionName, services]) => ({ name: subsectionName, services }))
  }));
}
