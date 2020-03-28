import Airtable from "airtable";

const airtable = new Airtable({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
});
const base = airtable.base(process.env.REACT_APP_AIRTABLE_BASE_ID as string);

export const servicesTable = base("Services") as Airtable.Table<Service>;
