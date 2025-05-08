
export interface Company {
  id: string;
  name: string;
  logo: string;
  website: string;
  location: string;
  description: string;
  industry: string;
  size: string;
  founded: number;
}

export interface Job {
  id: string;
  title: string;
  company: Company;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote" | "Internship";
  description: string;
  requirements: string[];
  salary: string;
  posted: string;
}

export const companies: Company[] = [
  {
    id: "1",
    name: "TechNova",
    logo: "https://via.placeholder.com/150",
    website: "https://www.technova.com",
    location: "San Francisco, CA",
    description: "TechNova is a leading software development company specializing in cloud solutions and AI-driven applications. We help businesses transform their operations through innovative technology.",
    industry: "Technology",
    size: "500-1000 employees",
    founded: 2010
  },
  {
    id: "2",
    name: "GreenEarth",
    logo: "https://via.placeholder.com/150",
    website: "https://www.greenearth.org",
    location: "Portland, OR",
    description: "GreenEarth is an environmental non-profit focused on sustainable development and conservation efforts worldwide. We work with communities, governments, and businesses to create a greener future.",
    industry: "Non-profit",
    size: "100-250 employees",
    founded: 1998
  },
  {
    id: "3",
    name: "FinEdge",
    logo: "https://via.placeholder.com/150",
    website: "https://www.finedge.com",
    location: "New York, NY",
    description: "FinEdge is a fintech startup revolutionizing personal finance through AI-powered advisory and investment services. Our platform helps individuals make smarter financial decisions.",
    industry: "Finance",
    size: "50-100 employees",
    founded: 2019
  },
  {
    id: "4",
    name: "MediCare Plus",
    logo: "https://via.placeholder.com/150",
    website: "https://www.medicareplus.com",
    location: "Boston, MA",
    description: "MediCare Plus develops healthcare technology solutions to improve patient care and streamline medical operations. Our software is used by hospitals and clinics across the country.",
    industry: "Healthcare",
    size: "250-500 employees",
    founded: 2005
  },
  {
    id: "5",
    name: "CreativeMinds",
    logo: "https://via.placeholder.com/150",
    website: "https://www.creativeminds.design",
    location: "Austin, TX",
    description: "CreativeMinds is a digital design agency creating stunning brand experiences for businesses of all sizes. We combine creativity with strategic thinking to deliver impactful results.",
    industry: "Design",
    size: "10-50 employees",
    founded: 2015
  }
];

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: companies[0],
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for an experienced Frontend Developer to join our team. You'll be responsible for building user interfaces for our web applications using React and TypeScript. The ideal candidate has experience with modern frontend frameworks and a passion for creating exceptional user experiences.",
    requirements: [
      "5+ years of experience in frontend development",
      "Proficient with React, TypeScript, and modern CSS",
      "Experience with state management libraries like Redux",
      "Understanding of responsive design and cross-browser compatibility",
      "Ability to work in an agile environment"
    ],
    salary: "$120,000 - $150,000",
    posted: "2025-04-15"
  },
  {
    id: "2",
    title: "Environmental Project Manager",
    company: companies[1],
    location: "Portland, OR",
    type: "Full-time",
    description: "GreenEarth is seeking a passionate Environmental Project Manager to lead conservation initiatives in the Pacific Northwest. You'll be responsible for developing and implementing environmental projects, coordinating with stakeholders, and ensuring compliance with regulations.",
    requirements: [
      "Bachelor's degree in Environmental Science or related field",
      "3+ years of experience in environmental project management",
      "Knowledge of environmental regulations and policies",
      "Strong communication and leadership skills",
      "Experience in grant writing and fundraising is a plus"
    ],
    salary: "$85,000 - $100,000",
    posted: "2025-04-20"
  },
  {
    id: "3",
    title: "Machine Learning Engineer",
    company: companies[2],
    location: "Remote",
    type: "Remote",
    description: "Join our AI team at FinEdge to develop machine learning models for financial analysis and prediction. You'll work on cutting-edge algorithms to provide personalized financial recommendations to our users.",
    requirements: [
      "Master's or PhD in Computer Science, Statistics, or related field",
      "Experience with ML frameworks like TensorFlow or PyTorch",
      "Strong programming skills in Python",
      "Knowledge of financial markets is a plus",
      "Excellent problem-solving abilities"
    ],
    salary: "$130,000 - $160,000",
    posted: "2025-04-22"
  },
  {
    id: "4",
    title: "Healthcare Software Developer",
    company: companies[3],
    location: "Boston, MA",
    type: "Full-time",
    description: "MediCare Plus is looking for a skilled Software Developer with experience in healthcare systems. You'll be part of a team developing solutions to improve patient care and hospital operations.",
    requirements: [
      "Bachelor's degree in Computer Science or similar field",
      "3+ years of experience in software development",
      "Knowledge of healthcare data standards (HL7, FHIR)",
      "Experience with C# and .NET framework",
      "Understanding of HIPAA compliance requirements"
    ],
    salary: "$100,000 - $130,000",
    posted: "2025-04-18"
  },
  {
    id: "5",
    title: "UI/UX Designer",
    company: companies[4],
    location: "Austin, TX",
    type: "Full-time",
    description: "CreativeMinds is searching for a talented UI/UX Designer to create beautiful and functional interfaces for our clients. You'll be involved in the entire design process from concept to implementation.",
    requirements: [
      "Bachelor's degree in Design or equivalent experience",
      "Portfolio demonstrating UI/UX projects",
      "Proficiency with design tools like Figma and Adobe Creative Suite",
      "Understanding of user-centered design principles",
      "Experience working with development teams"
    ],
    salary: "$80,000 - $110,000",
    posted: "2025-04-25"
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: companies[0],
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join TechNova as a DevOps Engineer and help us build and maintain our cloud infrastructure. You'll be responsible for CI/CD pipelines, infrastructure automation, and ensuring system reliability.",
    requirements: [
      "Experience with cloud platforms like AWS or Azure",
      "Knowledge of container orchestration (Kubernetes)",
      "Proficiency with infrastructure as code tools like Terraform",
      "Understanding of CI/CD principles",
      "Strong troubleshooting and problem-solving skills"
    ],
    salary: "$115,000 - $145,000",
    posted: "2025-04-30"
  },
  {
    id: "7",
    title: "Content Writer",
    company: companies[1],
    location: "Remote",
    type: "Part-time",
    description: "GreenEarth is looking for a talented Content Writer to create compelling stories about our environmental initiatives. You'll be responsible for blog posts, social media content, and educational materials.",
    requirements: [
      "Excellent writing skills with attention to detail",
      "Knowledge of environmental issues and sustainability",
      "Experience creating content for diverse audiences",
      "Ability to research and fact-check information",
      "Portfolio of previous writing samples"
    ],
    salary: "$25 - $35 per hour",
    posted: "2025-05-01"
  },
  {
    id: "8",
    title: "Financial Analyst",
    company: companies[2],
    location: "New York, NY",
    type: "Full-time",
    description: "FinEdge is seeking a Financial Analyst to join our team. You'll be analyzing market trends, evaluating investment opportunities, and providing insights to enhance our financial advisory platform.",
    requirements: [
      "Bachelor's degree in Finance, Economics, or related field",
      "CFA certification or progress toward it is preferred",
      "Strong analytical skills and attention to detail",
      "Experience with financial modeling and data analysis",
      "Knowledge of investment strategies and markets"
    ],
    salary: "$90,000 - $120,000",
    posted: "2025-05-02"
  }
];
