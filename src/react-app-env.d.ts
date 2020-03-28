/// <reference types="react-scripts" />

declare type Service = {
  name: string;
  subsection: string;
  section: string;
  description: string;
  url: string;
  type: "free" | "discount";
  startDate?: string;
  endDate?: string;
};
