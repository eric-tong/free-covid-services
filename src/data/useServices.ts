import { useEffect, useState } from "react";

import { servicesTable } from "./database";

export default function useServices() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    servicesTable
      .select({
        view: "Grid view"
      })
      .firstPage()
      .then(records => records.map(record => record.fields))
      .then(setServices);
  }, []);

  return services;
}
