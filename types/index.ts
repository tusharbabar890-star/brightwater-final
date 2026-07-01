export type ServiceSlug =
  | "family-law"
  | "divorce"
  | "property-settlement"
  | "parenting-arrangements"
  | "child-custody"
  | "mediation";

export type FAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  intro: string;
  description: string;
  image: string;
  imageAlt: string;
  commonIssues: string[];
  howWeHelp: string[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: FAQ[];
};

export type AppointmentPayload = {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceRequired: string;
  message: string;
  consent: boolean;
};
