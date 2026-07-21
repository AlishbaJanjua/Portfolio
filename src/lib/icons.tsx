import type { ComponentType, CSSProperties } from "react";
import {
  siPython,
  siPandas,
  siNumpy,
  siScikitlearn,
  siTensorflow,
  siKeras,
  siPytorch,
  siScipy,
  siMysql,
  siPostgresql,
  siSqlite,
  siMongodb,
  siRedis,
  siSupabase,
  siPlotly,
  siJupyter,
  siGooglecolab,
  siFastapi,
  siFlask,
  siNodedotjs,
  siExpress,
  siPostman,
  siSwagger,
  siOpenapiinitiative,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siBootstrap,
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siGit,
  siGithub,
  siGithubactions,
  siDocker,
  siNpm,
  siVercel,
  siLangchain,
  siHuggingface,
  siOllama,
  siN8n,
  siAirtable,
  siGooglegemini,
  siClaude,
  siPerplexity,
  siGithubcopilot,
  siMlflow,
  siGoogle,
  type SimpleIcon,
} from "simple-icons";
import {
  BarChart3,
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  FileSpreadsheet,
  GitBranch,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Network,
  Sparkles,
  Table,
  TerminalSquare,
  TreeDeciduous,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

type IconSpec =
  | { kind: "si"; icon: SimpleIcon }
  | { kind: "lucide"; icon: LucideIcon; color?: string };

const si = (icon: SimpleIcon): IconSpec => ({ kind: "si", icon });
const lu = (icon: LucideIcon, color = "#8b5cf6"): IconSpec => ({
  kind: "lucide",
  icon,
  color,
});

// Central registry: skill/tool name -> icon spec.
export const ICONS: Record<string, IconSpec> = {
  // --- Brand tools (Simple Icons) ---
  Python: si(siPython),
  Pandas: si(siPandas),
  NumPy: si(siNumpy),
  "Scikit-Learn": si(siScikitlearn),
  TensorFlow: si(siTensorflow),
  Keras: si(siKeras),
  PyTorch: si(siPytorch),
  SciPy: si(siScipy),
  MySQL: si(siMysql),
  PostgreSQL: si(siPostgresql),
  SQLite: si(siSqlite),
  MongoDB: si(siMongodb),
  Redis: si(siRedis),
  Supabase: si(siSupabase),
  Plotly: si(siPlotly),
  "Jupyter Notebook": si(siJupyter),
  "Google Colab": si(siGooglecolab),
  FastAPI: si(siFastapi),
  Flask: si(siFlask),
  "Node.js": si(siNodedotjs),
  "Express.js": si(siExpress),
  Postman: si(siPostman),
  "Swagger/OpenAPI": si(siOpenapiinitiative),
  Swagger: si(siSwagger),
  React: si(siReact),
  "Next.js": si(siNextdotjs),
  "Tailwind CSS": si(siTailwindcss),
  Bootstrap: si(siBootstrap),
  HTML5: si(siHtml5),
  CSS3: si(siCss),
  JavaScript: si(siJavascript),
  TypeScript: si(siTypescript),
  Git: si(siGit),
  GitHub: si(siGithub),
  "GitHub Actions": si(siGithubactions),
  Docker: si(siDocker),
  npm: si(siNpm),
  Vercel: si(siVercel),
  LangChain: si(siLangchain),
  "Hugging Face": si(siHuggingface),
  Ollama: si(siOllama),
  n8n: si(siN8n),
  Airtable: si(siAirtable),
  Gemini: si(siGooglegemini),
  Claude: si(siClaude),
  Perplexity: si(siPerplexity),
  "GitHub Copilot": si(siGithubcopilot),
  MLflow: si(siMlflow),
  "Google Workspace APIs": si(siGoogle),

  // --- Tools without brand icons (Lucide fallback) ---
  "OpenAI API": lu(Sparkles),
  "ChatGPT API": lu(Sparkles),
  ChatGPT: lu(Sparkles),
  LangGraph: lu(Network),
  "Vector Databases": lu(Database),
  Pinecone: lu(Database, "#0ea5e9"),
  ChromaDB: lu(Database, "#22c55e"),
  FAISS: lu(Database, "#f59e0b"),
  "REST APIs": lu(Network),
  Webhooks: lu(Zap, "#f59e0b"),
  JSON: lu(Code2),
  XGBoost: lu(TreeDeciduous, "#16a34a"),
  LightGBM: lu(Zap, "#84cc16"),
  Excel: lu(FileSpreadsheet, "#22c55e"),
  "Power Query": lu(Table, "#f59e0b"),
  "Power BI": lu(BarChart3, "#f2c811"),
  Tableau: lu(LineChart, "#3b82f6"),
  Matplotlib: lu(LineChart, "#3b82f6"),
  Seaborn: lu(BarChart3, "#3b82f6"),
  SQL: lu(Database, "#38bdf8"),
  "AWS Basics": lu(Cloud, "#ff9900"),

  // --- Core / conceptual skills (Lucide) ---
  "AI Automation": lu(Workflow),
  "AI Agents": lu(Bot),
  "LLM Applications": lu(Brain),
  "Prompt Engineering": lu(MessageSquare),
  "AI Workflow Design": lu(Workflow),
  "AI Chatbot Development": lu(Bot),
  "Retrieval Augmented Generation (RAG)": lu(Database),
  "Conversational AI": lu(MessageSquare),
  "Knowledge Base Automation": lu(Brain),
  "Business Process Automation": lu(Workflow),
  "Data Analysis": lu(LineChart),
  "Business Analytics": lu(BarChart3),
  "Data Visualization": lu(BarChart3),
  "Dashboard Development": lu(LayoutDashboard),
  "KPI Reporting": lu(LineChart),
  "Data Cleaning": lu(Table),
  "Exploratory Data Analysis": lu(LineChart),
  "Statistical Analysis": lu(BarChart3),
  "Predictive Analytics": lu(Brain),
  "Business Insights": lu(Sparkles),
  "Machine Learning": lu(Brain),
  "Supervised Learning": lu(Brain),
  "Classification Models": lu(Network),
  "Regression Models": lu(LineChart),
  "Predictive Modeling": lu(Brain),
  "Feature Engineering": lu(Workflow),
  "Model Evaluation": lu(BarChart3),
  "Data Preprocessing": lu(Table),
  "Model Deployment": lu(Cloud),
  "Backend Development": lu(TerminalSquare),
  "API Development": lu(Network),
  "System Integration": lu(Network),
  "Authentication Systems": lu(GitBranch),
  "Database Connectivity": lu(Database),
  "Server-side Logic": lu(TerminalSquare),
  "Database Design": lu(Database),
  "Data Modeling": lu(Database),
  "CRUD Applications": lu(Table),
  "Database Optimization": lu(Zap),
  "Data Storage Architecture": lu(Database),
  "Business Process Modeling": lu(Workflow),
  "Workflow Optimization": lu(Workflow),
  "CRM Automation": lu(Bot),
  "Management Systems": lu(LayoutDashboard),
  "Operational Analytics": lu(BarChart3),
  "Digital Transformation": lu(Sparkles),
  "Version Control": lu(GitBranch),
  "Software Development": lu(Code2),
  Debugging: lu(TerminalSquare),
  Documentation: lu(Code2),
  Deployment: lu(Cloud),
  "Responsive Design": lu(LayoutDashboard),
  "User Interface Development": lu(LayoutDashboard),
  "Interactive Dashboards": lu(LayoutDashboard),
  "Data Visualization Interfaces": lu(BarChart3),
  "VS Code": lu(Code2, "#3b82f6"),
};

// Brand glyphs for social links (removed from lucide-react & simple-icons).
export function GithubIcon({
  className = "",
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={siGithub.path} />
    </svg>
  );
}

export function LinkedinIcon({
  className = "",
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const FALLBACK: IconSpec = lu(Sparkles);

export function getIcon(name: string): IconSpec {
  return ICONS[name] ?? FALLBACK;
}

export function SkillIcon({
  name,
  className = "",
  colored = false,
}: {
  name: string;
  className?: string;
  colored?: boolean;
}) {
  const spec = getIcon(name);

  if (spec.kind === "si") {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill={colored ? `#${spec.icon.hex}` : "currentColor"}
        aria-hidden="true"
      >
        <path d={spec.icon.path} />
      </svg>
    );
  }

  const Comp: ComponentType<{
    className?: string;
    strokeWidth?: number;
    style?: CSSProperties;
  }> = spec.icon;
  return (
    <Comp
      className={className}
      strokeWidth={1.75}
      style={colored && spec.color ? { color: spec.color } : undefined}
    />
  );
}
