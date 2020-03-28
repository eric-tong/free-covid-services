import { useEffect, useState } from "react";

import { servicesTable } from "./database";

export default function useServices() {
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
        filterByFormula: "enabled"
      })
      .firstPage()
      .then(records => records.map(record => record.fields))
      .then(setServices);
  }, []);

  return services;
}
