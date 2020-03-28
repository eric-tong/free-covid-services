import { servicesTable } from "./database";
import { useState } from "react";

export default function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  servicesTable
    .select({
      view: "Grid view"
    })
    .firstPage()
    .then(records => records.map(record => record.fields))
    .then(setServices);
  return services;
}
