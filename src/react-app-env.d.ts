/// <reference types="react-scripts" />

declare type Service = {
  name: string;
  description: string;
  url: string;
  startDate?: string;
};

declare type Section = Map<string, Service[]>;
