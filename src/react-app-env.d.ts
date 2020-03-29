/// <reference types="react-scripts" />

declare type Service = {
  name: string;
  subsection: string;
  section: string;
  description: string;
  icon: string;
  url: string;
  type: "free" | "discount";
  startDate?: string;
  endDate?: string;
};
declare type Subsection = {
  name: string;
  services: Service[];
};
declare type Section = {
  name: string;
  icon: string;
  subsections: Subsection[];
};
declare type Color = {
  primary: string;
  background: string;
};
