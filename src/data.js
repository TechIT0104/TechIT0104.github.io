// ============================================================================
//  EDIT YOUR CONTENT HERE
//  Anything marked  // TODO:  is a placeholder — replace with your real value.
// ============================================================================

// Prefixes a path in /public with the correct base URL (works for any deploy base).
// Usage: asset('images/headshot.jpg')  → '/images/headshot.jpg'
const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export const profile = {
  name: 'Dhruv Samdani',
  roles: [
    'Software Engineer',
    'Backend & Distributed Systems',
    'Machine Learning Engineer',
    'Competitive Programmer',
  ],
  tagline:
    'I build scalable backends, distributed systems, and ML-powered products — from a C++ NoSQL engine to multilingual NER pipelines.',
  location: 'Prayagraj, Uttar Pradesh, India',
  email: 'dhruv010604@gmail.com',
  altEmail: 'iit2023090@iiita.ac.in',
  phone: '+91 78986 82871',
  // Headshot shown in the hero/about. Save the file at: public/images/headshot.jpg
  // Leave as null to show an animated "DS" monogram instead.
  photo: asset('images/headshot.jpg'),
  resumeUrl: asset('Dhruv_Samdani_Resume.pdf'), // drop your PDF at public/Dhruv_Samdani_Resume.pdf
}

export const socials = {
  github: 'https://github.com/TechIT0104',
  githubAlt: 'https://github.com/CosmikBlunder',
  linkedin: 'https://www.linkedin.com/in/dhruv-samdani-9a2352293/',
  leetcode: 'https://leetcode.com/u/KIReQzEOLP/',
  codechef: 'https://www.codechef.com/users/sam0104',
}

export const about = [
  "I'm a B.Tech Information Technology student at IIIT Allahabad (CGPA 8.64), focused on backend engineering, distributed systems, and applied machine learning.",
  "I enjoy going deep on systems — writing a NoSQL key-value store in modern C++17, designing thread-safe REST APIs, and benchmarking multilingual entity-linking models across 9 languages.",
  "Outside of building, I'm a competitive programmer (LeetCode Knight, rating 1915) and have led teams at national-level events.",
]

export const education = [
  {
    school: 'Indian Institute of Information Technology, Allahabad',
    degree: 'B.Tech in Information Technology',
    detail: 'CGPA: 8.64 / 10.00',
    period: 'Aug 2023 – May 2027',
    place: 'Prayagraj, UP',
  },
  {
    school: 'Green Field Public School, Manasa',
    degree: 'Class XII, CBSE',
    detail: '96.0%',
    period: 'Apr 2020 – May 2022',
    place: 'Madhya Pradesh',
  },
]

export const experience = [
  {
    role: 'Full-Stack Development Intern',
    company: 'ADY Infratech',
    period: 'Apr 2026 – Jun 2026',
    points: [
      'Engineered a real-time ERP system for 2 mixing plants, raising vehicle-tracking accuracy from 70% to 90%.',
      'Built order and billing modules processing 1,200+ invoices/week 30% faster, cutting billing errors by 25%.',
      "Designed an internal reconciliation tool that reduced manual data-entry errors by 30%, now the firm's official workflow.",
    ],
  },
]

// Skill groups — drives the animated skills section
export const skills = [
  {
    group: 'Languages',
    items: ['C++', 'C', 'Java', 'Python', 'JavaScript / TypeScript', 'SQL'],
  },
  {
    group: 'Backend & Systems',
    items: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Crow (C++)',
      'REST API Design',
      'Multithreading & Concurrency',
      'OOP / LLD',
    ],
  },
  {
    group: 'CS Fundamentals',
    items: ['DSA', 'System Design', 'Operating Systems', 'Computer Networks', 'DBMS'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Indexing & Caching'],
  },
  {
    group: 'ML & AI',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Hugging Face', 'NLP', 'RL'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes', 'Apache Kafka', 'CI/CD', 'Git', 'Linux'],
  },
]

// Featured projects. `repo` = GitHub link, `demo` = live URL (optional).
// `accent` cycles the card glow color: 'cyan' | 'violet' | 'green'.
export const projects = [
  {
    title: 'RetailSense',
    subtitle: 'Privacy-First Vision Retail CRM',
    stack: ['Python', 'PyTorch', 'YOLOv8', 'DeepSORT', 'FastAPI', 'AWS'],
    points: [
      'Privacy-first retail CRM using cloth-changing person re-ID (body shape & gait, no face recognition) to track returning customers across cameras and visits — DPDP Act 2023 compliant.',
      'Edge-to-cloud pipeline: YOLOv8 detection + DeepSORT tracking + a 512-D re-ID gallery on-device, streaming only derived events to a Kafka + TimescaleDB backend (~99% less bandwidth).',
      'On-device Phi-3 Mini SLM answers owner queries in Hindi/Hinglish and powers real-time churn alerts, with machine-unlearning for customer "right to be forgotten".',
    ],
    repo: 'https://github.com/TechIT0104/retailsense',
    demo: null,
    accent: 'cyan',
    featured: true,
  },
  {
    title: 'Historical Entity Linking',
    subtitle: 'Multilingual NER & Disambiguation',
    stack: ['Python', 'PyTorch', 'XGBoost', 'BLINK', 'mReFinED', 'Transformers'],
    points: [
      'Reproduced BLINK and mReFinED baselines, benchmarking multilingual linking on MEWSLI-9 across 9 languages.',
      'Engineered MHEL-LLaMo, an XGBoost confidence router reaching 82% routing accuracy (+12% over baseline).',
      'Ran systematic FP/FN error analysis and offset-validation fixes, improving single-GPU reproducibility.',
    ],
    repo: 'https://github.com/TechIT0104/Final-Entity-Linking',
    demo: null,
    accent: 'violet',
    featured: true,
  },
  {
    title: 'DynamicKV',
    subtitle: 'Scalable NoSQL Key-Value Store',
    stack: ['C++17', 'Crow', 'Robin-Hood Hashing', 'Bloom Filters', 'REST API'],
    points: [
      'NoSQL engine in modern C++17 with a custom Robin-Hood hashing HashMap for fast in-memory lookups.',
      'Segmented on-disk storage layer with per-segment Bloom filters and tunable sizing.',
      'Thread-safe REST API over HTTP via the Crow framework for concurrent reads and writes.',
    ],
    repo: 'https://github.com/CosmikBlunder/DynamicKV',
    demo: null,
    accent: 'green',
    featured: true,
  },
  {
    title: 'NyayaSetu',
    subtitle: 'AI-Powered Legal Intelligence Platform',
    stack: ['Next.js', 'React', 'TypeScript', 'Gemini 2.0 Flash', 'Speech-to-Text'],
    points: [
      'Legal-research assistant surfacing the 5 most relevant Supreme Court precedents per query.',
      'Judgment predictor + NyayKaksh: a real-time English-to-Hindi speech translator with per-sentence AI analysis.',
      'Integrated Google Gemini 2.0 Flash for case analysis and follow-up Q&A behind a Next.js + TypeScript interface.',
    ],
    repo: 'https://github.com/TechIT0104/Masterblasters', // TODO: confirm repo
    demo: null,
    accent: 'cyan',
    featured: true,
  },
  {
    title: 'InvestorPulse / FinTeQ',
    subtitle: 'Stock Performance & Recommendation Platform',
    stack: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Yahoo Finance API'],
    points: [
      'Full-stack fintech platform serving explainable, risk-labelled stock recommendations to retail investors.',
      'FastAPI backend with Yahoo Finance integration + a Next.js dashboard, containerized with Docker, Postgres, Redis.',
      'Implemented a 5-level risk model with SHAP-based explanations, deployed to Vercel and Render.',
    ],
    repo: 'https://github.com/CosmikBlunder/FinTeQ',
    demo: null, // TODO: add live Vercel/Render URL if available
    accent: 'violet',
    featured: false,
  },
  {
    title: 'Amazon ML Challenge 2025',
    subtitle: 'Smart Product Pricing — Top ~150',
    stack: ['Python', 'Pandas', 'NLP', 'Computer Vision', 'Multimodal ML'],
    points: [
      'Amazon ML Challenge 2025 "Smart Product Pricing": predicted e-commerce prices from catalog text (titles, descriptions, pack size) and product images — a multimodal regression task.',
      'Built a pipeline fusing NLP text features with product-image features over 75K listings, optimised for SMAPE.',
      'Finished in the top ~150 on the national challenge leaderboard.',
    ],
    repo: 'https://github.com/TechIT0104/MLChallange',
    demo: null,
    accent: 'cyan',
    hackathon: true,
    featured: false,
  },
  {
    title: 'GPAI',
    subtitle: 'Citation-Grounded STEM Tutor (RAG)',
    stack: ['Python', 'Streamlit', 'RAG', 'ChromaDB', 'Sentence-Transformers', 'Ollama'],
    points: [
      'GPAI Case-Based Hackathon submission: a STEM tutor that answers strictly from a student\'s own uploaded textbooks, notes, and slides, citing exact [doc | page | chunk] sources.',
      'RAG pipeline — PyMuPDF / Tesseract ingestion, sentence-transformer embeddings in ChromaDB, and LLM answers verified with SymPy math validation.',
      'Runs fully private on local Ollama (OpenAI / Gemini optional) and exports solutions to PDF / PPT.',
    ],
    repo: 'https://github.com/TechIT0104/GPAI',
    demo: null,
    accent: 'green',
    hackathon: true,
    featured: false,
  },
  {
    title: 'EmotiSense',
    subtitle: 'Multi-Modal Emotion Recognition System',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'Raspberry Pi'],
    points: [
      'Real-time emotion recognition fusing facial expressions, ECG, and GSR data — 96.45% accuracy across 4 states.',
      'ML pipeline with 10 biosignal features, Random Forest classifier (96.39%), real-time inference at 10–15 FPS, <115ms latency.',
      'Adaptive hardware layer on Raspberry Pi 4 with automatic sensor detection (multi-modal ↔ FER-only modes).',
    ],
    repo: 'https://github.com/TechIT0104/EmotiSense',
    demo: null,
    accent: 'green',
    featured: false,
  },
  {
    title: 'Dark-Web Marketplace Fraud Detection',
    subtitle: 'Economics Term Paper — Fraud Analytics',
    stack: ['Python', 'scikit-learn', 'NLP', 'node2vec', 'Streamlit'],
    points: [
      'Economics term-paper project: multi-modal fraud detection across 109,598 Agora dark-web listings (104 categories, 2,815 vendors).',
      'Fused NLP (TF-IDF + Logistic Regression, 98.9% AUC), node2vec graph embeddings, and Isolation Forest anomaly detection over 1,099 engineered features.',
      'Added blockchain enrichment (BlockCypher API) and a weighted ensemble to surface explainable, prioritised fraud alerts at 78% precision.',
    ],
    repo: 'https://github.com/TechIT0104/ECO_TERM_PAPER',
    demo: null,
    accent: 'green',
    featured: false,
  },
  {
    title: 'Advait',
    subtitle: 'One Nation, One Platform',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Cheerio'],
    points: [
      'Full-stack "One Nation, One Platform" web app (Node.js, Express, MongoDB, EJS) with KYC-based signup and bcrypt + session authentication.',
      'Recommendation engine using Axios + Cheerio to scrape services.india.gov.in and match users to government schemes by state, education, and occupation.',
      "NEKI — a gamified module rewarding users' good deeds with points and a live leaderboard to drive civic engagement.",
    ],
    repo: 'https://github.com/CosmikBlunder/Advait',
    demo: null,
    accent: 'cyan',
    featured: false,
  },
]

// Achievements grouped by category. Each card renders `group` + a list of `items`.
export const achievements = [
  {
    group: 'Competitive Programming',
    items: [
      'LeetCode Knight — rating 1915; ranked 237 / 28,244 in Weekly Contest 455 (top 1%).',
      'CodeChef — 3-star, rating 1681; ranked 618 / 18,797 in Starters 193D.',
      '700+ problems solved across LeetCode, CodeChef and other platforms.',
    ],
  },
  {
    group: 'Hackathons',
    items: [
      'Amazon ML Challenge 2025 — top ~150 nationally.',
      'Tata AI Challenge 2026 — ranked 134.',
      'Flipkart GRID 7.0 — semifinalist.',
      'GPAI Case-Based Hackathon — citation-grounded RAG tutor.',
    ],
  },
  {
    group: 'Academics',
    items: [
      'JEE Mains — AIR 4,071 (top 0.5%).',
      'JEE Advanced — AIR 8,418.',
      'Class XII (CBSE) — 96%.',
      'Class X (CBSE) — 96.4%.',
    ],
  },
  {
    group: 'Leadership',
    items: [
      'Led the team across multiple hackathons — Tata AI Challenge, Flipkart GRID, Amazon ML Challenge & GPAI.',
      "Overall Coordinator, Effervescence'25 — IIIT-A's annual cultural fest.",
      'Organizing team, TEDxIIITA 2023.',
      'Represented Madhya Pradesh in the Know Your Country competition by Gandhi Global Family.',
    ],
  },
  {
    group: 'Communication & Public Speaking',
    items: [
      'Winner, IIIT-A Model UN 2023.',
      "3× state-level winner, 'Bharat Ko Jano' national quiz.",
      'Performed original poetry before an audience of 3,000+.',
      'Write Hindi poetry.',
    ],
  },
  {
    group: 'Sports',
    items: [
      'State-level volleyball player (Madhya Pradesh).',
      'Division-level chess player (Ujjain Division).',
      'Division-level table tennis player.',
    ],
  },
]

export const stats = [
  { value: '8.64', label: 'CGPA / 10' },
  { value: '1915', label: 'LeetCode Rating' },
  { value: 'Top 1%', label: 'Contest 455' },
  { value: '10+', label: 'Shipped Projects' },
]

// Oracle certifications. `image` = path to the certificate (save in public/certs/).
// `verifyUrl` = optional public verification link (leave null if none).
export const certifications = [
  {
    title: 'OCI AI Foundations Associate',
    issuer: 'Oracle',
    image: asset('certs/oci-ai-foundations.jpg'),
    verifyUrl: null, // TODO: paste Oracle verification URL if you have one
  },
  {
    title: 'OCI Foundations Associate',
    issuer: 'Oracle',
    image: asset('certs/oci-foundations.jpg'),
    verifyUrl: null, // TODO
  },
]

// "Beyond code" photo gallery (leadership / events / stage).
// Save each file in public/images/gallery/ with the names below.
// Remove any entry you don't want to show; the section hides itself if empty.
export const gallery = [
  { src: asset('images/gallery/g1.jpg'), caption: 'Speaking at Model UN' },
  { src: asset('images/gallery/g2.jpg'), caption: 'Model UN — in committee' },
  { src: asset('images/gallery/g3.jpg'), caption: 'On the main stage' },
  { src: asset('images/gallery/g4.jpg'), caption: "Hosting Effervescence'25" },
  { src: asset('images/gallery/g5.jpg'), caption: 'Anchoring an event' },
  { src: asset('images/gallery/g6.jpg'), caption: 'Performing on stage' },
  { src: asset('images/gallery/g7.jpg'), caption: 'Addressing the audience' },
  { src: asset('images/gallery/g8.jpg'), caption: 'A crowd of thousands' },
]
