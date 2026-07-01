import type { FAQ, Service } from "@/types";

export const site = {
  name: "Brightwater Family Law",
  description:
    "A boutique Australian family law firm helping clients resolve separation, parenting, property and mediation matters with calm, practical guidance.",
  url: "https://brightwater-family-law.vercel.app",
  phone: "(08) 6144 4744",
  email: "hello@brightwaterfamilylaw.com.au",
  address: "Level 25, 1 Spring Street, Perth WA 6000",
  hours: "Monday to Friday, 8:30am - 5:30pm"
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export const serviceLinks = [
  { label: "Family Law", href: "/services/family-law" },
  { label: "Divorce", href: "/services/divorce" },
  { label: "Property Settlement", href: "/services/property-settlement" },
  { label: "Parenting Arrangements", href: "/services/parenting-arrangements" },
  { label: "Child Custody", href: "/services/child-custody" },
  { label: "Mediation", href: "/services/mediation" }
];

export const images = {
  hero:
    "/images/hero/landing.jpg",
  consultation:
    "/images/services/consultation.jpg",
  office:
    "/images/office/office.jpg",
  team:
    "/images/services/consultation.jpg",
  mediation:
    "/images/services/mediator.jpg",
  family:
    "/images/hero/landing.jpg",
  waiting:
    "/images/services/consultation.jpg"
};

export const services: Service[] = [
  {
    slug: "family-law",
    title: "Family Law",
    shortTitle: "Family Law",
    intro: "Clear legal advice for separation, family change and the decisions that follow.",
    description:
      "Family law is rarely just a legal problem. It involves homes, children, money, routines and the future people hoped they were building. Brightwater helps clients understand their options, make steady decisions and resolve matters with dignity wherever possible.",
    image: images.consultation,
    imageAlt: "A family lawyer taking notes during a calm client consultation",
    commonIssues: [
      "Understanding rights and responsibilities after separation",
      "Choosing between negotiation, mediation and court pathways",
      "Managing communication when emotions are high",
      "Making interim arrangements while a final agreement is prepared"
    ],
    howWeHelp: [
      "We explain the legal position in plain English and map the next practical steps.",
      "We identify the quickest constructive path while preserving your ability to act firmly.",
      "We prepare agreements, correspondence and court documents with care and precision."
    ],
    process: [
      { title: "Listen", description: "We begin with the family context, risks and priorities." },
      { title: "Clarify", description: "We outline your legal options, timing and likely trade-offs." },
      { title: "Resolve", description: "We negotiate, document or represent you through the right forum." }
    ],
    faqs: [
      {
        question: "Do I need to go to court?",
        answer:
          "Many family law matters resolve through negotiation, mediation or consent orders. Court is available when needed, but it is not the only pathway."
      },
      {
        question: "Can I get advice before separating?",
        answer:
          "Yes. Early advice can help you plan safely, understand financial disclosure and avoid decisions that make resolution harder later."
      }
    ]
  },
  {
    slug: "divorce",
    title: "Divorce",
    shortTitle: "Divorce",
    intro: "A careful, efficient divorce process that keeps the paperwork from becoming the story.",
    description:
      "Divorce formally ends a marriage, but it does not automatically finalise property, parenting or child support arrangements. We help clients understand what divorce does, what it does not do, and how it fits within the broader separation process.",
    image: images.office,
    imageAlt: "A quiet professional office prepared for a family law meeting",
    commonIssues: [
      "Confirming eligibility and the 12-month separation requirement",
      "Navigating separation under one roof",
      "Coordinating divorce with property settlement time limits",
      "Preparing documents where children are under 18"
    ],
    howWeHelp: [
      "We prepare and file the divorce application with careful supporting material.",
      "We explain timing, service requirements and court attendance obligations.",
      "We ensure related property and parenting matters are not overlooked."
    ],
    process: [
      { title: "Eligibility", description: "We confirm separation dates, jurisdiction and supporting details." },
      { title: "Application", description: "We prepare, file and arrange service where required." },
      { title: "Finalisation", description: "We track the order and advise on any next deadlines." }
    ],
    faqs: [
      {
        question: "How long do I need to be separated before applying?",
        answer:
          "In Australia, you generally need to be separated for at least 12 months before filing for divorce."
      },
      {
        question: "Does divorce divide our property?",
        answer:
          "No. Property settlement is a separate legal process with its own steps and deadlines."
      }
    ]
  },
  {
    slug: "property-settlement",
    title: "Property Settlement",
    shortTitle: "Property",
    intro: "Practical advice for dividing assets, liabilities and financial responsibilities fairly.",
    description:
      "A property settlement should give both people clarity about what comes next. We help clients identify the asset pool, understand contributions and future needs, negotiate constructively and document agreements so they are legally binding.",
    image: images.waiting,
    imageAlt: "A warm waiting room with calm seating and natural light",
    commonIssues: [
      "Identifying assets, liabilities, superannuation and business interests",
      "Financial disclosure and valuation questions",
      "Urgent concerns about mortgage payments, savings or asset disposal",
      "Turning an agreement into consent orders or a binding financial agreement"
    ],
    howWeHelp: [
      "We build a clear picture of the property pool and the evidence required.",
      "We advise on realistic settlement ranges and negotiation strategy.",
      "We draft documents that bring certainty and reduce future disputes."
    ],
    process: [
      { title: "Disclosure", description: "Collect documents and confirm the financial picture." },
      { title: "Advice", description: "Assess contributions, needs and settlement options." },
      { title: "Agreement", description: "Negotiate and formalise the outcome in binding terms." }
    ],
    faqs: [
      {
        question: "Is property always split 50/50?",
        answer:
          "No. The law considers contributions, future needs and whether the proposed outcome is just and equitable."
      },
      {
        question: "Can we settle property before divorce?",
        answer:
          "Yes. Property settlement can often be resolved before a divorce order is made."
      }
    ]
  },
  {
    slug: "parenting-arrangements",
    title: "Parenting Arrangements",
    shortTitle: "Parenting",
    intro: "Child-focused arrangements that bring structure, predictability and care to family routines.",
    description:
      "Parenting arrangements work best when they reflect children's needs and the realities of daily life. We help parents move from uncertainty to practical agreements covering time, communication, decision-making and special occasions.",
    image: images.family,
    imageAlt: "A parent and child sharing a quiet moment outdoors",
    commonIssues: [
      "Time arrangements during school terms and holidays",
      "Changeovers, travel, communication and special occasions",
      "Major long-term decisions such as education and health",
      "Parenting plans, consent orders and dispute resolution"
    ],
    howWeHelp: [
      "We keep the focus on children's best interests and workable routines.",
      "We prepare parenting plans and consent orders with clear language.",
      "We support negotiation or court steps when cooperation has broken down."
    ],
    process: [
      { title: "Priorities", description: "Understand the children, routines and areas of concern." },
      { title: "Framework", description: "Create a practical structure for time and decision-making." },
      { title: "Document", description: "Record the arrangement in the right legal format." }
    ],
    faqs: [
      {
        question: "What is the difference between a parenting plan and consent orders?",
        answer:
          "A parenting plan is a written agreement, while consent orders are approved by the court and legally enforceable."
      },
      {
        question: "Do children decide where they live?",
        answer:
          "Children's views can be relevant, depending on age and maturity, but decisions are based on their best interests."
      }
    ]
  },
  {
    slug: "child-custody",
    title: "Child Custody",
    shortTitle: "Child Custody",
    intro: "Steady guidance for sensitive parenting disputes and decisions about children's care.",
    description:
      "The language has changed from custody to parenting arrangements, but the concern is the same: children need safety, stability and meaningful relationships. We help parents respond to urgent issues, reduce uncertainty and pursue durable arrangements.",
    image: images.team,
    imageAlt: "A lawyer and client reviewing documents across a meeting table",
    commonIssues: [
      "Concerns about safety, risk or withheld time",
      "Relocation, school changes and communication breakdowns",
      "Supervised time or staged reintroduction",
      "Court applications where urgent parenting orders are needed"
    ],
    howWeHelp: [
      "We identify risk carefully and act quickly where urgent steps are required.",
      "We prepare evidence and proposals that remain focused on the child.",
      "We help clients communicate firmly without escalating conflict unnecessarily."
    ],
    process: [
      { title: "Risk Review", description: "Assess safety, urgency and available evidence." },
      { title: "Plan", description: "Set a pathway for negotiation, mediation or court." },
      { title: "Orders", description: "Prepare clear interim or final arrangements." }
    ],
    faqs: [
      {
        question: "Is custody still the legal term?",
        answer:
          "Australian family law now usually refers to parenting arrangements, parental responsibility and time with children."
      },
      {
        question: "What if I am worried about my child's safety?",
        answer:
          "Seek legal advice promptly. Urgent pathways may be available where there are genuine safety concerns."
      }
    ]
  },
  {
    slug: "mediation",
    title: "Mediation",
    shortTitle: "Mediation",
    intro: "A guided process for difficult conversations when direct communication is no longer working.",
    description:
      "Mediation gives separating people a structured forum to listen, reality-test options and make informed decisions. Brightwater prepares clients carefully so mediation can be purposeful, respectful and grounded in practical outcomes.",
    image: images.mediation,
    imageAlt: "A small group seated around a table in a professional mediation setting",
    commonIssues: [
      "Deadlocked communication and repeated arguments",
      "Preparing for family dispute resolution",
      "Resolving parenting, property or combined issues",
      "Documenting agreements reached in mediation"
    ],
    howWeHelp: [
      "We prepare you for the conversation, the documents and the likely pressure points.",
      "We help keep proposals realistic and legally informed.",
      "We convert agreed outcomes into clear next steps or binding documents."
    ],
    process: [
      { title: "Preparation", description: "Clarify goals, documents and negotiation boundaries." },
      { title: "Session", description: "Work through issues in a structured and respectful forum." },
      { title: "Outcome", description: "Record agreements and plan the legal follow-through." }
    ],
    faqs: [
      {
        question: "Can mediation cover both parenting and property?",
        answer:
          "Yes. Mediation can address parenting, property or both, depending on preparation and the suitability of the matter."
      },
      {
        question: "What happens if mediation does not resolve everything?",
        answer:
          "Partial agreement can still narrow the issues. We then advise on negotiation, further mediation or court options."
      }
    ]
  }
];

export const homeFaqs: FAQ[] = [
  {
    question: "Will I speak directly with a lawyer?",
    answer:
      "Yes. Your first consultation is designed to give you clear legal guidance and a practical view of next steps."
  },
  {
    question: "Do you offer fixed fees?",
    answer:
      "Where the scope is clear, we provide transparent fixed-fee options. If a matter is uncertain, we explain likely stages and costs before work begins."
  },
  {
    question: "Can you help if we want to avoid court?",
    answer:
      "Yes. We regularly help clients resolve matters through negotiation, mediation and consent orders while preserving the ability to act decisively if needed."
  }
];

export const team = [
  {
    name: "Susan Hewitt",
    role: "Principal Lawyer and Accredited Mediator",
    bio:
      "Susan brings a calm, collaborative approach to complex family law matters, with experience across mediation, co-parenting, property division and conflict-aware negotiation.",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Tim Cohen",
    role: "Client Relationship and Practice Manager",
    bio:
      "Tim is often the first steady voice clients hear. He helps families understand timing, process and the practical steps that make the legal journey feel more manageable.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85"
  }
];

export const testimonials = [
  {
    quote:
      "The advice was clear, measured and kind. I came in overwhelmed and left knowing exactly what needed to happen next.",
    name: "Former client",
    detail: "Parenting and property matter"
  },
  {
    quote:
      "They helped us settle without turning a hard chapter into a drawn-out fight. The process felt respectful from start to finish.",
    name: "Former client",
    detail: "Mediation client"
  },
  {
    quote:
      "Every cost, document and decision was explained. That transparency made an enormous difference.",
    name: "Former client",
    detail: "Divorce and settlement"
  }
];

export const values = [
  "Reduce conflict wherever possible",
  "Give clear advice before legal language takes over",
  "Protect children from avoidable uncertainty",
  "Make costs and process transparent",
  "Resolve matters with dignity and momentum"
];
