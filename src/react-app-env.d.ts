/// <reference types="react-scripts" />

declare type Service = {
  name: string;
  description: string;
  url: string;
  type: "free" | "discount";
  startDate?: string;
};

declare type Section = Map<string, Service[]>;
