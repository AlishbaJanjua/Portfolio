export type Project = {
  slug: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  github: string;
  overview: string;
  problem: string;
  solution: string;
  workflow: string[];
  techStack: string[];
};

const GH = "https://github.com/AlishbaJanjua/";

export const projects: Project[] = [
  {
    slug: "german-driving-school-ai-assistant",
    name: "German Driving School AI Assistant",
    description:
      "AI chatbot helping driving students get instant, knowledge-based answers.",
    category: "AI Chatbot",
    tags: ["AI", "RAG", "LLM", "Automation"],
    github: GH,
    overview:
      "A conversational assistant for a German driving school that answers student questions about theory, rules, and scheduling using a curated knowledge base.",
    problem:
      "Students repeatedly asked the same theory and logistics questions, overloading staff and slowing down responses outside working hours.",
    solution:
      "A retrieval-augmented chatbot grounds every answer in the school's own material, providing accurate, 24/7 responses and escalating only when needed.",
    workflow: [
      "Ingest driving-school documents and FAQs into a vector store",
      "Embed the student question and retrieve the most relevant chunks",
      "Generate a grounded answer with the LLM, citing source context",
      "Fall back to human handoff for out-of-scope requests",
    ],
    techStack: ["OpenAI API", "LangChain", "Vector Databases", "n8n", "REST APIs"],
  },
  {
    slug: "restaurant-ai-ordering-assistant",
    name: "Restaurant AI Ordering Assistant",
    description:
      "AI-powered assistant automating customer interaction and ordering support.",
    category: "AI Automation",
    tags: ["n8n", "Chatbots", "APIs"],
    github: GH,
    overview:
      "An automated ordering assistant that guides customers through the menu, captures orders, and routes them to the kitchen without manual entry.",
    problem:
      "Manual order-taking created bottlenecks during peak hours and led to errors in relaying orders to staff.",
    solution:
      "A workflow-driven chatbot understands natural-language orders, confirms details, and pushes structured orders into the restaurant's system automatically.",
    workflow: [
      "Customer starts a chat and browses the menu",
      "Assistant parses the order into structured JSON",
      "Order is validated and confirmed with the customer",
      "n8n dispatches the order to the kitchen and logs it",
    ],
    techStack: ["n8n", "OpenAI API", "Webhooks", "REST APIs", "JSON"],
  },
  {
    slug: "linkedin-content-automation-engine",
    name: "LinkedIn Content Automation Engine",
    description:
      "Automated AI workflow for generating and scheduling LinkedIn content.",
    category: "Content Automation",
    tags: ["n8n", "AI Agents", "Automation"],
    github: GH,
    overview:
      "An end-to-end pipeline that ideates, drafts, and queues LinkedIn posts on a consistent schedule with a human approval step.",
    problem:
      "Publishing consistently on LinkedIn is time-consuming, and ad-hoc posting leads to inconsistent quality and cadence.",
    solution:
      "An agentic workflow generates on-brand drafts from topic prompts, formats them, and schedules approved posts automatically.",
    workflow: [
      "Pull topic ideas from a content backlog",
      "AI agent drafts and refines the post copy",
      "Draft is sent for quick human approval",
      "Approved posts are scheduled and published",
    ],
    techStack: ["n8n", "OpenAI API", "LangChain", "Webhooks", "Airtable"],
  },
  {
    slug: "ai-resume-screening-system",
    name: "AI Resume Screening System",
    description:
      "Automated resume analysis that streamlines the HR screening process.",
    category: "HR Automation",
    tags: ["AI", "NLP", "Automation"],
    github: GH,
    overview:
      "A screening workflow that parses resumes, extracts key qualifications, and ranks candidates against a role's requirements.",
    problem:
      "Manually reviewing large volumes of resumes is slow, inconsistent, and prone to bias and fatigue.",
    solution:
      "The system extracts structured data from each resume, scores candidates on relevant criteria, and produces a ranked shortlist for recruiters.",
    workflow: [
      "Ingest resumes and parse text from multiple formats",
      "Extract skills, experience, and education fields",
      "Score and rank against the job description",
      "Output a shortlist with match explanations",
    ],
    techStack: ["Python", "OpenAI API", "FastAPI", "Pandas", "REST APIs"],
  },
  {
    slug: "customer-feedback-automation",
    name: "Customer Feedback Automation",
    description:
      "Workflow automation for collecting and processing customer feedback.",
    category: "Business Automation",
    tags: ["n8n", "Workflow Design", "APIs"],
    github: GH,
    overview:
      "A pipeline that gathers customer feedback across channels, classifies sentiment, and routes insights to the right teams.",
    problem:
      "Feedback was scattered across channels and rarely analyzed, so recurring issues went unnoticed.",
    solution:
      "An automated flow centralizes feedback, tags themes and sentiment, and pushes summaries to stakeholders in real time.",
    workflow: [
      "Collect feedback from forms, email, and chat",
      "Classify sentiment and detect recurring themes",
      "Aggregate results into a live summary",
      "Notify the relevant team of critical issues",
    ],
    techStack: ["n8n", "OpenAI API", "Webhooks", "Airtable", "JSON"],
  },
  {
    slug: "seesight-tours-financial-dashboard",
    name: "SeeSight Tours Financial Dashboard",
    description:
      "Interactive financial dashboard for analyzing business performance.",
    category: "Business Intelligence",
    tags: ["Data Visualization", "Analytics", "Dashboards"],
    github: GH,
    overview:
      "An interactive dashboard that consolidates financial metrics into clear visuals for faster, data-driven decisions.",
    problem:
      "Financial data lived in disconnected spreadsheets, making performance trends hard to see and slow to report.",
    solution:
      "A single dashboard unifies revenue, cost, and margin metrics with interactive filters and trend views for stakeholders.",
    workflow: [
      "Clean and consolidate financial datasets",
      "Model KPIs and calculated measures",
      "Design interactive visuals and filters",
      "Publish a shareable, refreshable dashboard",
    ],
    techStack: ["Power BI", "Power Query", "SQL", "Excel", "Python"],
  },
  {
    slug: "medaxis-diabetes-prediction",
    name: "MedAxis Diabetes Prediction",
    description: "Machine learning model predicting diabetes risk from health data.",
    category: "Machine Learning",
    tags: ["Python", "ML", "Data Science"],
    github: GH,
    overview:
      "A supervised learning model that estimates diabetes risk from patient health indicators to support early screening.",
    problem:
      "Early diabetes risk often goes undetected without proactive, data-driven screening tools.",
    solution:
      "A trained classification model evaluates health metrics and outputs a calibrated risk score with the most influential factors.",
    workflow: [
      "Clean and preprocess the healthcare dataset",
      "Engineer features and handle class imbalance",
      "Train and compare classification models",
      "Evaluate metrics and interpret key drivers",
    ],
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    slug: "jj-dental-clinic-management-system",
    name: "JJ Dental Clinic Management System",
    description:
      "Business management system organizing clinic operations and workflows.",
    category: "Business Software",
    tags: ["Database", "Management Systems", "CRUD"],
    github: GH,
    overview:
      "A management system that organizes patients, appointments, and records for a dental clinic in one place.",
    problem:
      "Paper-based and fragmented records made scheduling and patient management error-prone and slow.",
    solution:
      "A CRUD application centralizes patients, appointments, and treatment records with a clean, role-based interface.",
    workflow: [
      "Model patients, appointments, and records",
      "Build CRUD flows for daily operations",
      "Add scheduling and search capabilities",
      "Secure access with authentication",
    ],
    techStack: ["Python", "PostgreSQL", "FastAPI", "React", "TypeScript"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
