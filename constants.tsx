import { Job, Education, Skill, Project, SocialLink } from './types';
import { 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  Globe, 
  LayoutDashboard, 
  ShieldCheck, 
  Briefcase
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Muhammad Moammar",
  title: "Lead Financial Analytics & Controls | Chartered Accountant",
  summary: "Highly experienced Chartered Accountant with over a decade in finance, specializing in financial control, reporting, and analytics. Proven impact in performance management, process automation, and operating model redesign across Qatar Foundation and Big 4 firms. Skilled in IFRS, financial analytics, Oracle Fusion ERP, and leading high-performing teams to drive executive-level decisions.",
  location: "Doha, State of Qatar",
  phone: "+974 5524 5481",
  email: "mmm.isb@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-moammar-867860290/"
};

export const CONTACT_LINKS: SocialLink[] = [
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail, text: PERSONAL_INFO.email },
  { platform: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: Linkedin, text: "LinkedIn Profile" },
  { platform: "Phone", url: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`, icon: Phone, text: PERSONAL_INFO.phone },
  { platform: "Location", url: "#", icon: MapPin, text: PERSONAL_INFO.location },
];

export const WORK_HISTORY: Job[] = [
  {
    id: "job1",
    title: "Lead Financial Analytics & Controls",
    company: "Qatar Foundation",
    period: "Mar 2025 - Present",
    description: "Qatar Foundation is a non-profit organization with a $30B+ asset base and 100+ entities.",
    responsibilities: [
      "Partner with cross-functional teams to enhance financial accounting, reporting, and closing processes.",
      "Apply data analysis and visualization tools to analyze cost performance, providing actionable insights.",
      "Lead process improvement initiatives to optimize reporting, reconciliations, and data management within the ERP system.",
      "Drive automation efforts to reduce manual tasks and improve operational efficiency across financial operations.",
      "Lead finance system health checks to identify and recommend areas for optimization.",
      "Leverage internal controls expertise to ensure robust financial system governance (Oracle Fusion).",
      "Ensure compliance with financial laws, regulations, tax laws, and IFRS.",
      "Provide training and guidance to internal and external stakeholders."
    ]
  },
  {
    id: "job2",
    title: "Senior Financial Accountant (QF Group)",
    company: "Qatar Foundation",
    period: "Nov 2022 - Feb 2025",
    responsibilities: [
      "Preparation of consolidated financial statements of the group using Oracle FCCS and Narrative reporting tools.",
      "Proactively research and document conclusions on accounting issues (IFRS compliance).",
      "Ownership and timely execution of month-end tasks, including pre-close and post-close activities.",
      "Acting as focal point for internal & external audit for accounting areas.",
      "Ensuring accurate fund Accounting i.e. Capital projects and Government funds with restrictions."
    ]
  },
  {
    id: "job3",
    title: "Senior Accounts Receivable Accountant",
    company: "Qatar Foundation",
    period: "Apr 2018 - Oct 2022",
    responsibilities: [
      "Leading data cleansing, mapping, and migration activities during ERP transition (Oracle R12 → Fusion).",
      "Ensuring that all customer transactions are processed accurately and in a timely manner.",
      "Enhancing finance policies and procedures to align departmental goals with strategic objectives.",
      "Leading all financial projects endorsed for implementation.",
      "Liaising with customers for timely payments and resolution of any issues."
    ]
  },
  {
    id: "job4",
    title: "Financial Compliance Analyst (Secondment)",
    company: "QatarEnergy LNG",
    period: "Apr 2015 - Jul 2015",
    description: "Temporary assignment during employment with KPMG Qatar.",
    responsibilities: [
      "Tracking of Audit Gaps identified by internal and external audits including state audits.",
      "Assisting the business to close all identified audit gaps within agreed timeline.",
      "Managing controls process for the department.",
      "Reporting of Controls Training records."
    ]
  },
  {
    id: "job5",
    title: "Deputy Manager",
    company: "KPMG Qatar",
    period: "Dec 2014 - Mar 2018",
    responsibilities: [
      "Carrying out audit field work and managing team members of about 3-10 people.",
      "Review of future projections, discounted cash flows (DCF), NPV, and IRR analysis.",
      "Involved in decision making process of various accounting, auditing, client handling and team management challenges.",
      "Identifying control deficiencies and advising corrective actions.",
      "Developing team members through counseling and on-the-job training."
    ]
  },
  {
    id: "job6",
    title: "Assistant Manager",
    company: "PwC Pakistan",
    period: "Nov 2010 - Nov 2014",
    responsibilities: [
      "Worked at progressively increasing levels of responsibility starting from 2010.",
      "Promoted to Assistant Manager upon completion of Chartered Accountancy in May 2014.",
      "Roles and responsibilities similar to the role at KPMG Qatar."
    ]
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    id: "edu1",
    degree: "Chartered Accountant",
    institution: "Institute of Chartered Accountants of Pakistan",
    year: "2014",
    link: "https://www.icap.org.pk",
    logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.icap.org.pk&size=128" 
  },
  {
    id: "edu2",
    degree: "Finance Business Partner",
    institution: "HEC Paris in Qatar",
    year: "2021",
    link: "https://www.qatar.exed.hec.edu",
    logo: "https://www.smartcertificate.com/assets-v3/assets/logo-clients/hec.png"
  },
  {
    id: "edu3",
    degree: "Data Science Bootcamp",
    institution: "Atomcamp",
    year: "2024",
    link: "https://www.atomcamp.com",
    logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.atomcamp.com&size=128"
  }
];

export const SKILLS: Skill[] = [
  { name: "IFRS", category: "Professional", level: 95 },
  { name: "Financial Consolidation", category: "Professional", level: 90 },
  { name: "Internal Controls", category: "Professional", level: 85 },
  { name: "Risk Analysis", category: "Professional", level: 85 },
  { name: "External Audits", category: "Professional", level: 90 },
  { name: "Encumbrance Accounting", category: "Professional", level: 80 },
  { name: "Restricted Fund Accounting", category: "Professional", level: 85 },
  { name: "Oracle Fusion & R12", category: "IT", level: 95, logo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg" },
  { name: "Oracle EPM (FCCS & NR)", category: "IT", level: 90, logo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg" },
  { name: "Power Query & Power BI", category: "IT", level: 85, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/600px-New_Power_BI_Logo.svg.png" },
  { name: "Python", category: "IT", level: 75, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png" },
  { name: "Machine Learning", category: "IT", level: 70 },
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Power BI Dashboard",
    description: "Designed and implemented Power BI dashboard for 100+ finance users, enhancing real-time visibility.",
    icon: LayoutDashboard
  },
  {
    id: "proj2",
    title: "ERP Implementation",
    description: "Lead the ERP implementation and changeover process from Oracle R12 to Fusion for AR and GL modules.",
    icon: Database
  },
  {
    id: "proj3",
    title: "Chart of Accounts Design",
    description: "Designed the new Chart of Accounts and customer database structure for QF Head Office.",
    icon: FileSpreadsheet
  },
  {
    id: "proj4",
    title: "Oracle EPM Admin",
    description: "Serving as administrator for Oracle Financial Consolidation & Close (FCCS) and Narrative Reporting tools.",
    icon: ShieldCheck
  },
  {
    id: "proj5",
    title: "Payment Portal",
    description: "Designed customer facing payment portal to streamline receivables.",
    icon: Globe
  },
  {
    id: "proj6",
    title: "Process Improvement",
    description: "Enhanced the AR invoice and receipt format of the organization and member of Digital Transformation Taskforce.",
    icon: BarChart3
  }
];

export const CHART_DATA = [
  { subject: 'Financial Analysis', A: 95, fullMark: 100 },
  { subject: 'ERP Systems', A: 95, fullMark: 100 },
  { subject: 'Data Science', A: 75, fullMark: 100 },
  { subject: 'Leadership', A: 85, fullMark: 100 },
  { subject: 'Compliance', A: 90, fullMark: 100 },
  { subject: 'Auditing', A: 90, fullMark: 100 },
];