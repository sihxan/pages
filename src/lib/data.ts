// ============================================================
// data.ts — Portfolio data for Kim Sihwan (김시환)
// AI Researcher @ KDST Lab, Kyung Hee University
// ============================================================

export const PERSON = {
  nameEn: "Kim Sihwan",
  nameKo: "김시환",
  role: "Undergraduate AI Researcher",
  affiliation: "Kyung Hee University",
  department: "Department of Artificial Intelligence",
  school: "School of Computer Science and Engineering",
  lab: "KDST Lab",
  labFull: "KDST Lab — Deep Learning Research Lab",
  location: "Suwon, South Korea",
  email: "shani03@khu.ac.kr",
  github: "https://github.com/",
  heroLine: "I study how models learn, fail, and generalize through experiments.",
  heroCopy: [
    "Studying how machines see,",
    "learn, and remember.",
  ],
  about: [
    "I'm an undergraduate researcher at KDST Lab,",
    "a deep learning research lab at Kyung Hee University.",
    "",
    "I study how deep learning models learn from data,",
    "form internal representations, and generalize",
    "to unseen conditions.",
  ],
  aboutLong: `I am interested in understanding how deep learning models learn from data, form internal representations, generalize to unseen conditions, and fail in real-world scenarios. My work moves between reading papers, implementing models, running experiments, and turning research ideas into working systems.`,
  fieldNote: `I collect small clues from experiments and papers,\nand turn them into systems, visual languages,\nand working implementations.\nMy research often begins with a question\nthat feels too small to be serious.`,
  fieldNoteId: "NO.251109",
};

export const EDUCATION = [
  {
    school: "Kyung Hee University",
    period: "2022 – Present",
    dept: "School of Computer Science and Engineering",
    major: "Department of Artificial Intelligence",
  },
];

export const EXPERIENCE = [
  {
    role: "Undergraduate Researcher",
    org: "KDST Lab, Kyung Hee University",
    period: "November 2025 – Present",
    activities: [
      "Conducting research on Dataset Distillation, VideoLLM, and Transformer-based architectures",
      "Working on a diffusion model-based VTON research project with Rewake / Sunicon Inc.",
      "Participating in multimodal AI study groups",
      "Organizing and participating in paper-reading groups focused on fundamental AI research",
      "Collaborating in lab seminars and technical discussions",
    ],
  },
  {
    role: "Student Council Member / Acting Department Lead",
    org: "School of Computing, Kyung Hee University",
    period: "January 2025 – December 2025",
    activities: [
      "Secured and managed nearly 20 partnerships with vendors and external companies through outreach, proposals, and follow-up communication",
      "Served as acting department lead near the end of the second semester, coordinating event planning and execution",
      "Planned and operated student-facing events while aligning schedules, partner benefits, budgets, and on-site operations",
      "Coordinated between students, school offices, and partner organizations to turn partnership ideas into executable programs",
    ],
  },
  {
    role: "Startup Member / AI Service Development",
    org: "Allmize",
    url: "https://allmize.com",
    period: "February 2025 – August 2025",
    activities: [
      "Built AI service features including RAG-based workflows and application logic",
      "Reviewed service direction and proposed product and technical improvements",
      "Participated in AI feature development and service implementation as an early startup member",
    ],
  },
  {
    role: "KHUDA 2nd Member",
    org: "KHUDA, Data Analysis Club, Kyung Hee University",
    period: "July 2022 – January 2023",
    activities: [
      "Studied foundational machine learning and deep learning concepts",
      "Built a book recommendation system through a recommendation systems project",
      "Conducted an NLP project for profanity detection and masking",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Grand Prize, 2nd Place",
    event: "2023 Defense AI Competition, General Track",
    year: "2023",
  },
  {
    title: "ADsP Certification",
    event: "Advanced Data Analytics Semi-Professional, Korea Data Agency",
    year: "2024",
  },
];

export const RESEARCH_INTERESTS = [
  "Dataset Distillation",
  "Diffusion Models",
  "Variational Autoencoders",
  "Generative AI",
  "Computer Vision",
  "Natural Language Processing",
  "Large Language Models",
  "Multimodal AI",
  "Vision-Language Models",
  "Video Large Language Models",
  "Trustworthy AI",
  "Efficient Learning",
];

export interface Work {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  area: string;
  tag: string;
  tagColor: string;
  tagTextColor: string;
  tagBorder?: string;
  date: string;
  img: string;
  status: string;
  collab?: string;
  highlights: string[];
  keywords: string[];
}

const IMG_AI_VISION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663642895111/7Z7P982mkUA4XH57GZYEhs/project-ai-vision-YmWipafgMZNQk7rYXiCwJW.webp";
const IMG_NLP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663642895111/7Z7P982mkUA4XH57GZYEhs/project-nlp-4AWztwCeSWzrccWAads3DE.webp";
const IMG_DATA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663642895111/7Z7P982mkUA4XH57GZYEhs/project-data-7gUSgXgvWFVCKeJT9c52HY.webp";
const IMG_RL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663642895111/7Z7P982mkUA4XH57GZYEhs/project-rl-EoGwKJuQJebFm5UHVU3c49.webp";
const IMG_GENERATIVE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663642895111/7Z7P982mkUA4XH57GZYEhs/project-generative-6tcDNW76JckbUa4X9D2vSv.webp";

export const WORKS: Work[] = [
  {
    id: "01",
    slug: "vton-diffusion",
    title: "Diffusion-based Virtual Try-On",
    subtitle: "Industry-academic research with Rewake / Sunicon Inc.",
    desc: "Applying diffusion models to Virtual Try-On tasks in an industry-academic collaboration.",
    longDesc: `This project is an industry-academic research collaboration with Rewake / Sunicon Inc., focusing on applying diffusion models to Virtual Try-On (VTON) tasks.\n\nThe goal is to synthesize realistic try-on images by conditioning diffusion models on garment and person representations. The research explores how generative models can handle complex spatial alignment, texture transfer, and body pose variation in a controllable way.\n\nKey challenges include maintaining garment fidelity across diverse body shapes, handling occlusion, and ensuring perceptual realism without overfitting to training distribution.`,
    area: "Computer Vision / Generative AI / Diffusion Models",
    tag: "RESEARCH",
    tagColor: "#1a3a8f",
    tagTextColor: "white",
    date: "2025.11 – Present",
    img: IMG_AI_VISION,
    status: "In Progress",
    collab: "Rewake / Sunicon Inc.",
    highlights: [
      "Diffusion model conditioning for garment-person synthesis",
      "Spatial alignment and texture transfer research",
      "Industry-academic collaboration pipeline",
      "Perceptual realism evaluation framework",
    ],
    keywords: ["Diffusion Models", "Computer Vision", "Generative AI", "VTON", "Image Synthesis"],
  },
  {
    id: "02",
    slug: "dataset-distillation",
    title: "Dataset Distillation Research",
    subtitle: "How compact datasets preserve learning signals",
    desc: "Independent research on how compact or synthetic datasets preserve the learning signal of larger datasets.",
    longDesc: `Dataset Distillation asks a fundamental question: can we compress a large dataset into a small synthetic set such that models trained on the distilled data perform comparably to those trained on the full dataset?\n\nThis independent research project explores the theoretical foundations and practical implementations of dataset distillation methods, including distribution matching, trajectory matching, and gradient-based approaches.\n\nThe work focuses on understanding what information is truly necessary for a model to generalize — and what can be discarded without meaningful loss of performance.`,
    area: "Deep Learning / Computer Vision / Efficient Learning",
    tag: "RESEARCH",
    tagColor: "#1a3a8f",
    tagTextColor: "white",
    date: "2025.11 – Present",
    img: IMG_DATA,
    status: "In Progress",
    highlights: [
      "Distribution matching and trajectory matching methods",
      "Gradient-based dataset compression techniques",
      "Analysis of learning signal preservation",
      "Benchmarking on standard CV datasets",
    ],
    keywords: ["Dataset Distillation", "Efficient Learning", "Deep Learning", "Data Compression"],
  },
  {
    id: "03",
    slug: "multimodal-ai-study",
    title: "Multimodal AI Study",
    subtitle: "Visual, textual, and temporal intelligence",
    desc: "Studying models that connect visual, textual, and temporal information through deep learning architectures.",
    longDesc: `This study group project explores the frontier of multimodal AI — systems that can reason across vision, language, and time simultaneously.\n\nThe work covers Vision-Language Models (VLMs), Video Large Language Models (VideoLLMs), and the architectural patterns that enable cross-modal understanding. Through paper reading, implementation, and discussion, the goal is to build a deep understanding of how these models represent and align information across modalities.\n\nParticular attention is given to how temporal reasoning emerges in video models and how language grounding shapes visual representations.`,
    area: "Multimodal AI / VLM / VideoLLM",
    tag: "STUDY",
    tagColor: "transparent",
    tagTextColor: "#1a1410",
    tagBorder: "1.5px solid #1a1410",
    date: "2025.11 – Present",
    img: IMG_NLP,
    status: "Ongoing",
    highlights: [
      "Vision-Language Model architectures (CLIP, LLaVA, etc.)",
      "Video Large Language Model temporal reasoning",
      "Cross-modal alignment and representation learning",
      "Paper reading and implementation sessions",
    ],
    keywords: ["Multimodal AI", "VLM", "VideoLLM", "Vision-Language", "Temporal Reasoning"],
  },
  {
    id: "04",
    slug: "generative-ai-notes",
    title: "Generative AI Reading & Implementation",
    subtitle: "VAEs, Diffusion Models, and Generative Architectures",
    desc: "Reading, implementing, and analyzing generative model architectures to understand how they represent and synthesize data.",
    longDesc: `A personal research log and implementation notebook covering the landscape of generative AI — from Variational Autoencoders to modern Diffusion Models.\n\nEach entry combines paper reading with hands-on implementation, aiming to understand not just what these models do, but why they work. The focus is on the mathematical intuitions behind latent space learning, score matching, denoising objectives, and sampling procedures.\n\nThis work serves as both a learning record and a foundation for more applied research projects.`,
    area: "VAE / Diffusion Models / Generative Models",
    tag: "NOTES",
    tagColor: "#c0392b",
    tagTextColor: "white",
    date: "2024 – Present",
    img: IMG_GENERATIVE,
    status: "Ongoing",
    highlights: [
      "Variational Autoencoder theory and implementation",
      "DDPM, DDIM, and score-based generative models",
      "Latent diffusion and conditioning mechanisms",
      "Mathematical foundations of generative modeling",
    ],
    keywords: ["VAE", "Diffusion Models", "Generative AI", "Deep Learning", "Implementation"],
  },
  {
    id: "05",
    slug: "defense-ai-competition",
    title: "Defense AI Competition",
    subtitle: "Grand Prize (2nd Place), General Track",
    desc: "Awarded Grand Prize (2nd Place) at the 2023 Defense AI Competition, General Track.",
    longDesc: `Participated in the 2023 Defense AI Competition and achieved Grand Prize (2nd Place) in the General Track.\n\nThe competition involved applying machine learning and computer vision techniques to defense-related AI challenges. The work required rapid prototyping, model selection, and optimization under competition constraints.\n\nThis experience reinforced practical skills in end-to-end ML pipeline construction, evaluation metric optimization, and working under time pressure.`,
    area: "Applied AI / Computer Vision / Competition",
    tag: "AWARD",
    tagColor: "#d4a017",
    tagTextColor: "white",
    date: "2023",
    img: IMG_RL,
    status: "Completed",
    highlights: [
      "Grand Prize, 2nd Place — General Track",
      "Applied CV and ML to defense AI challenges",
      "End-to-end ML pipeline under competition constraints",
      "Rapid prototyping and model optimization",
    ],
    keywords: ["Competition", "Computer Vision", "Applied AI", "Machine Learning"],
  },
];

export const SKILLS_GROUPS = [
  {
    label: "Modeling",
    items: [
      { name: "Python", bg: "#1a3a8f", color: "white" },
      { name: "PyTorch", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
      { name: "TensorFlow", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
      { name: "Hugging Face", bg: "#d4a017", color: "white" },
      { name: "Transformers", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
      { name: "Scikit-learn", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
    ],
  },
  {
    label: "Data & Experiment",
    items: [
      { name: "NumPy", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
      { name: "Pandas", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
      { name: "Matplotlib", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
      { name: "Jupyter", bg: "#d4a017", color: "white" },
      { name: "OpenCV", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Linux", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
      { name: "Git", bg: "#1a3a8f", color: "white" },
      { name: "SLURM", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
      { name: "CUDA", bg: "#27ae60", color: "white" },
      { name: "GPU Server", bg: "transparent", color: "#1a1410", border: "1.5px solid #1a1410" },
    ],
  },
];
