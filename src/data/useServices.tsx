import Airtable from "airtable";
import { useState } from "react";

const airtable = new Airtable({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
});
const base = airtable.base(process.env.REACT_APP_AIRTABLE_BASE_ID as string);
const servicesTable = base("Services") as Airtable.Table<Service>;

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
