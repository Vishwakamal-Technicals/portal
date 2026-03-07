export { budgetOptions, timelineOptions } from "@/lib/contact";

export type Capability = {
  id: string;
  title: string;
  technicalExplanation: string;
  businessValue: string;
  useCases: {
    title: string;
    summary: string;
    imageUrl: string;
    imageAlt: string;
  }[];
  outcomes: string;
};

export type Industry = {
  title: string;
  challenges: string[];
  approach: string;
  stack: string[];
  outcomes: string[];
  imageUrl: string;
  imageAlt: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  problem: string;
  architecture: string;
  transformation: string;
  outcomes: string[];
  stack: string[];
};

export type TeamMember = {
  name: string;
  title: string;
  vision: string;
  imageUrl: string;
  imageAlt: string;
};

export const navLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "About Us", href: "#about-us" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Engagement Model", href: "#engagement-model" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" }
];

export const principles = [
  {
    title: "Strategic Alignment",
    description:
      "We align technology architectures directly with your business objectives, ensuring every investment drives measurable ROI."
  },
  {
    title: "Engineering Excellence",
    description:
      "Clean code, test-driven development, and scalable architectures are not optional—they are the foundation of everything we build."
  },
  {
    title: "Resilient by Design",
    description:
      "Security and stability built-in from day one. Our enterprise systems handle unexpected spikes and threat vectors seamlessly."
  },
  {
    title: "Agile Execution",
    description:
      "Iterative delivery loops that bring products to market faster while maintaining rigorous enterprise quality standards."
  },
  {
    title: "AI-Accelerated Delivery",
    description:
      "We embed practical AI across engineering workflows, decision systems, and product features to increase execution speed without compromising governance."
  }
];

export const lifecycle = [
  {
    title: "Business-First Technology Alignment",
    detail:
      "We map architecture decisions directly to measurable business outcomes so roadmap investments translate into clear operational and revenue impact."
  },
  {
    title: "Modular System Blueprinting",
    detail:
      "We define domain boundaries, API contracts, and composable service layers to reduce coupling and keep platforms adaptable as priorities evolve."
  },
  {
    title: "AI-Enabled Delivery Workflows",
    detail:
      "We apply AI-assisted engineering workflows for planning, implementation, and quality assurance to accelerate iterations without lowering standards."
  },
  {
    title: "Continuous Optimization Discipline",
    detail:
      "Security, reliability, and performance are managed as ongoing operating priorities with structured observability, proactive hardening, and regular tuning."
  }
];

export const capabilities: Capability[] = [
  {
    id: "product-engineering",
    title: "Product Engineering",
    technicalExplanation:
      "From 0-to-1 MVP builds to legacy system modernization, we assemble cross-functional pods that deliver robust, user-centric software with clear architecture ownership.",
    businessValue:
      "This compresses time-to-market, reduces product risk, and ensures software quality scales with user growth and platform complexity.",
    useCases: [
      {
        title: "Web & Mobile Applications",
        summary:
          "Cross-platform application development with scalable frontend architecture, robust API contracts, and performance-focused release cycles.",
        imageUrl: "/images/usecases/web-mobile.png",
        imageAlt: "Web and mobile application engineering team"
      },
      {
        title: "UX/UI Design & Prototyping",
        summary:
          "High-clarity user journeys, interactive prototypes, and component-driven design systems validated before full implementation.",
        imageUrl: "/images/usecases/ux-ui-prototyping.png",
        imageAlt: "UX and UI prototyping workflow"
      },
      {
        title: "Legacy Modernization",
        summary:
          "Incremental modernization strategy to refactor monolith bottlenecks and migrate critical paths without business disruption.",
        imageUrl: "/images/usecases/legacy-modernization.png",
        imageAlt: "Legacy platform modernization and infrastructure upgrade"
      },
      {
        title: "Microservices Architecture",
        summary:
          "Domain-oriented service decomposition with reliable inter-service contracts, observability, and resilient deployment patterns.",
        imageUrl: "/images/usecases/microservices-architecture.png",
        imageAlt: "Microservices architecture and distributed system model"
      }
    ],
    outcomes:
      "Teams gain predictable delivery velocity, stronger user adoption, and durable architecture foundations."
  },
  {
    id: "ai-data-systems",
    title: "Artificial Intelligence & Data Systems",
    technicalExplanation:
      "Turn fragmented data into competitive advantage. We build intelligent pipelines and integrate generative AI directly into operational workflows and product experiences.",
    businessValue:
      "Organizations unlock faster decision-making, reduce manual analysis bottlenecks, and create differentiated intelligence capabilities across business units.",
    useCases: [
      {
        title: "LLM Integration & RAG",
        summary:
          "Enterprise-grade LLM workflows with grounded retrieval pipelines for accurate, auditable, context-aware responses.",
        imageUrl: "/images/usecases/llm-rag.png",
        imageAlt: "LLM integration and retrieval augmented generation architecture"
      },
      {
        title: "Data Warehousing (Snowflake, BigQuery)",
        summary:
          "Centralized analytical data layers with governed schemas, high-throughput ingestion, and query-ready business intelligence foundations.",
        imageUrl: "/images/usecases/data-warehousing.png",
        imageAlt: "Cloud data warehouse and analytics platform"
      },
      {
        title: "Predictive Analytics",
        summary:
          "Forecasting and anomaly detection models trained on operational data to support proactive planning and risk reduction.",
        imageUrl: "/images/usecases/predictive-analytics.png",
        imageAlt: "Predictive analytics graph and model visualization"
      },
      {
        title: "Business Intelligence Dashboards",
        summary:
          "Executive and operational dashboards designed for fast insight discovery, KPI tracking, and decision visibility.",
        imageUrl: "/images/usecases/bi-dashboards.png",
        imageAlt: "Business intelligence dashboard interface"
      }
    ],
    outcomes:
      "Leaders move from reactive reporting to proactive forecasting powered by governed, production-grade AI systems."
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    technicalExplanation:
      "Optimize for scale and cost. We design multi-cloud infrastructures with automated deployment pipelines to support high availability and operational consistency.",
    businessValue:
      "This reduces infrastructure waste, improves deployment reliability, and enables zero-downtime releases under enterprise load conditions.",
    useCases: [
      {
        title: "Cloud Migration (AWS, GCP, Azure)",
        summary:
          "Structured migration programs with risk-managed cutover plans, security baselines, and platform readiness checkpoints.",
        imageUrl: "/images/usecases/cloud-migration.png",
        imageAlt: "Cloud migration and data center strategy map"
      },
      {
        title: "CI/CD Pipeline Automation",
        summary:
          "Automated build-test-deploy workflows that reduce release friction and improve deployment consistency across environments.",
        imageUrl: "/images/usecases/cicd-automation.png",
        imageAlt: "CI CD pipeline automation and DevOps operations"
      },
      {
        title: "Infrastructure as Code (Terraform)",
        summary:
          "Version-controlled infrastructure templates for repeatable environments, policy enforcement, and controlled scaling.",
        imageUrl: "/images/usecases/iac-terraform.png",
        imageAlt: "Infrastructure as code Terraform project structure"
      },
      {
        title: "Kubernetes & Containerization",
        summary:
          "Container-native orchestration and workload management for resilient, horizontally scalable production systems.",
        imageUrl: "/images/usecases/kubernetes-containerization.png",
        imageAlt: "Container orchestration and Kubernetes operations"
      }
    ],
    outcomes:
      "Engineering organizations gain resilient, cost-aware platforms that scale without operational fragility."
  },
  {
    id: "enterprise-integrations",
    title: "Enterprise Integrations",
    technicalExplanation:
      "Connect fragmented silos with secure, high-throughput middleware that synchronizes data across your software ecosystem.",
    businessValue:
      "This improves data integrity, reduces reconciliation overhead, and supports unified workflows across critical systems.",
    useCases: [
      {
        title: "API Development & Management",
        summary:
          "Secure API design with lifecycle governance, versioning strategy, and observability for internal and partner ecosystems.",
        imageUrl: "/images/usecases/api-development.png",
        imageAlt: "API development and integration interface"
      },
      {
        title: "ERP/CRM Integrations",
        summary:
          "Bi-directional synchronization across operational platforms to maintain consistency across finance, sales, and support workflows.",
        imageUrl: "/images/usecases/erp-crm-integrations.png",
        imageAlt: "ERP and CRM system integration architecture chart"
      },
      {
        title: "Event-Driven Architectures",
        summary:
          "Asynchronous, stream-first integration patterns that improve scalability and decouple high-volume enterprise processes.",
        imageUrl: "/images/usecases/event-driven-architectures.png",
        imageAlt: "Event-driven architecture and streaming system design"
      },
      {
        title: "Identity & Access Management",
        summary:
          "Role-based access controls, identity federation, and policy enforcement for secure enterprise platform access.",
        imageUrl: "/images/usecases/iam-security.png",
        imageAlt: "Identity and access management security operations"
      }
    ],
    outcomes:
      "Enterprises operate with cleaner interoperability and stronger governance across departments and external partners."
  }
];

export const industries: Industry[] = [
  {
    title: "Healthcare",
    challenges: [
      "Regulatory compliance and protected health data handling",
      "Interoperability across fragmented healthcare systems",
      "Latency-sensitive clinical workflows"
    ],
    approach:
      "We deliver FHIR-centric architectures, security-first design, and controlled integration pipelines that preserve uptime for patient-critical workflows.",
    stack: ["Node.js", "Java", "FHIR/HL7", "AWS", "PostgreSQL", "Kafka", "LLM Triage Assistants", "Vector Search"],
    outcomes: [
      "Improved interoperability across providers",
      "Lower manual reconciliation effort",
      "Faster delivery of digital care features"
    ],
    imageUrl: "/images/sectors/healthcare.png",
    imageAlt: "Healthcare technology and digital clinical systems"
  },
  {
    title: "FinTech",
    challenges: [
      "High transaction integrity requirements",
      "Fraud and risk monitoring at scale",
      "Regulatory and audit constraints"
    ],
    approach:
      "We engineer event-driven payment and ledger systems with robust observability, deterministic processing, and secure API contracts.",
    stack: ["Go", "Node.js", "Redis", "Kafka", "PostgreSQL", "AWS", "Fraud ML Models", "Real-Time Risk Scoring"],
    outcomes: [
      "Higher transaction throughput",
      "Reduced processing errors",
      "Improved auditability and risk posture"
    ],
    imageUrl: "/images/sectors/fintech.png",
    imageAlt: "Financial technology interface and analytics"
  },
  {
    title: "Government",
    challenges: [
      "Legacy systems with low interoperability",
      "Procurement-driven delivery complexity",
      "Security and data sovereignty requirements"
    ],
    approach:
      "We modernize integration layers incrementally, prioritize security controls, and deliver transparent engineering governance for mission-critical programs.",
    stack: ["Java", "Python", "API Gateway", "Terraform", "Kubernetes", "PostgreSQL", "Document AI", "NLP Search"],
    outcomes: [
      "Reliable digital service delivery",
      "Reduced dependency on legacy bottlenecks",
      "Clear operational accountability"
    ],
    imageUrl: "/images/sectors/government.png",
    imageAlt: "Government technology forum session"
  },
  {
    title: "Enterprise SaaS",
    challenges: [
      "Rapid feature expansion with stable uptime",
      "Tenant isolation and scaling complexity",
      "Growing infrastructure costs"
    ],
    approach:
      "We optimize platform architecture for multi-tenant scale, introduce performance observability, and align engineering roadmaps with product growth milestones.",
    stack: ["React", "Next.js", "Node.js", "AWS", "Redis", "Kubernetes", "LLM Copilots", "Usage Intelligence Models"],
    outcomes: [
      "Improved release velocity",
      "Stable platform performance under growth",
      "Lower cost per transaction"
    ],
    imageUrl: "/images/sectors/enterprise-saas.png",
    imageAlt: "Software development workflow board"
  },
  {
    title: "AgriTech",
    challenges: [
      "Distributed operational data from field to warehouse",
      "Forecasting variability and demand shifts",
      "Workflow fragmentation across partners"
    ],
    approach:
      "We implement real-time data capture, predictive planning models, and integrated logistics orchestration for end-to-end visibility.",
    stack: ["Python", "Node.js", "Kafka", "PostgreSQL", "AWS Lambda", "GIS APIs", "Forecasting Models", "Computer Vision QA"],
    outcomes: [
      "Better supply-demand alignment",
      "Reduced operational delays",
      "More accurate forecasting"
    ],
    imageUrl: "/images/sectors/agritech.png",
    imageAlt: "Smart farming and agriculture technology"
  }
  ,
  {
    title: "E-commerce",
    challenges: [
      "High-traffic seasonality and checkout performance pressure",
      "Catalog, pricing, and fulfillment synchronization complexity",
      "Personalization and conversion optimization at scale"
    ],
    approach:
      "We build resilient commerce architecture, event-driven order flows, and data-backed personalization systems to improve conversion and retention.",
    stack: ["React", "Node.js", "Redis", "Kafka", "PostgreSQL", "AWS", "Recommendation Models", "Vision-Based Catalog Tagging"],
    outcomes: [
      "Faster checkout and reduced abandonment",
      "Reliable inventory-order consistency",
      "Improved customer lifetime value"
    ],
    imageUrl: "/images/sectors/ecommerce.png",
    imageAlt: "E-commerce packaging and logistics workflow"
  },
  {
    title: "Augmented Reality",
    challenges: [
      "Low-latency rendering and device fragmentation across iOS, Android, and web AR",
      "Inconsistent image quality for object segmentation and background removal pipelines",
      "Asset optimization for real-time overlays without degrading user experience"
    ],
    approach:
      "We build AR-ready processing pipelines with computer vision modules for background removal, object segmentation, and asset enhancement, then connect them to scalable rendering services.",
    stack: [
      "WebXR",
      "Three.js",
      "Unity",
      "OpenCV",
      "PyTorch",
      "ONNX Runtime",
      "Background Removal Models",
      "Edge Inference APIs"
    ],
    outcomes: [
      "Faster AR asset preparation workflows",
      "Cleaner visual overlays through automated background extraction",
      "Higher user engagement with real-time interactive experiences"
    ],
    imageUrl: "/images/sectors/augmented-reality.png",
    imageAlt: "Augmented reality headset and mixed reality visualization"
  }
];

export const engagementSteps = [
  {
    title: "Discovery & Audit",
    detail:
      "Deep-dive into your existing architecture, codebases, and business goals to identify gaps and opportunities."
  },
  {
    title: "Blueprint Design",
    detail:
      "Creation of a comprehensive technical specification, UX wireframes, and a predictable delivery roadmap."
  },
  {
    title: "Agile Sprints",
    detail:
      "Transparent, bi-weekly delivery cycles where you see working software frequently and can provide rapid feedback."
  },
  {
    title: "Support & Scale",
    detail:
      "Post-launch SLA-backed maintenance, monitoring, and iterative scaling to support sustained user and transaction growth."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "healthcare-hl7-fhir-ehr-integration",
    title: "Healthcare HL7/FHIR Interoperability Modernization",
    industry: "Healthcare Technology",
    problem:
      "A multi-facility provider group needed a unified clinical workflow across cardiology diagnostics and core EHR systems, but data remained fragmented between GE MUSE and Epic EHR, creating delayed clinician decisions and duplicate manual entry.",
    architecture:
      "We delivered a Java Spring Boot integration backbone with HL7 v2 parsers, FHIR resource mapping services, and event-driven synchronization using Kafka. Redis was introduced for low-latency session state and deduplication buffers, while PostgreSQL maintained auditable clinical message lineage.",
    transformation:
      "Clinical and diagnostic data began flowing bi-directionally between GE MUSE and Epic with consistent semantic mapping, enabling care teams to access synchronized patient records in near real time.",
    outcomes: [
      "74% reduction in manual reconciliation between systems",
      "52% faster cardiology report availability in EHR workflows",
      "99.99% message delivery reliability across integration channels"
    ],
    stack: ["Java", "Spring Boot", "HL7 v2", "FHIR", "Kafka", "Redis", "PostgreSQL", "AWS"]
  },
  {
    slug: "ecommerce-platform-scale-optimization",
    title: "E-commerce Platform Scale Optimization",
    industry: "E-commerce",
    problem:
      "A growth-stage commerce brand faced checkout slowdowns during peak traffic, inconsistent inventory updates, and delayed cart recovery journeys.",
    architecture:
      "We rebuilt the commerce core using Node.js microservices and a React storefront layer, introduced Kafka for order/inventory event propagation, Redis for cart/session acceleration, and PostgreSQL for transactional consistency. CI/CD pipelines were tuned for safe high-frequency releases.",
    transformation:
      "The platform shifted from batch-driven operations to real-time commerce events, improving customer journey continuity from browsing through fulfillment.",
    outcomes: [
      "61% improvement in p95 checkout response time",
      "43% increase in successful cart-to-order conversion",
      "68% reduction in inventory mismatch incidents"
    ],
    stack: ["Node.js", "React", "Kafka", "Redis", "PostgreSQL", "TypeScript", "AWS"]
  },
  {
    slug: "genai-knowledge-automation-platform",
    title: "Gen AI Knowledge Automation Platform",
    industry: "Gen AI",
    problem:
      "An enterprise support organization had scattered documentation and inconsistent knowledge retrieval, leading to long resolution cycles and repeated escalations.",
    architecture:
      "We implemented a Python-first Gen AI platform with RAG pipelines, vector indexing, prompt orchestration, and policy guardrails. Kafka handled document ingestion streams, Redis cached semantic retrieval sessions, and Python services exposed governed inference APIs to internal tools.",
    transformation:
      "Support and operations teams moved from keyword search to context-aware AI assistance with source-cited responses and controlled model behavior.",
    outcomes: [
      "57% reduction in mean time to resolution for L2 support",
      "3.4x increase in knowledge retrieval accuracy on priority intents",
      "42% lower escalation volume for repetitive operational issues"
    ],
    stack: ["Python", "FastAPI", "RAG", "Vector Database", "Kafka", "Redis", "PostgreSQL", "OpenAI"]
  },
  {
    slug: "augmented-reality-media-enhancement-suite",
    title: "Augmented Reality Media Enhancement Suite",
    industry: "Augmented Reality",
    problem:
      "A digital experience brand needed scalable media preparation for AR campaigns, including fast background removal from product photos and dynamic video enhancement with contextual overlays.",
    architecture:
      "We built a Python computer-vision pipeline using segmentation and enhancement models, then integrated the output with WebXR/Three.js rendering services. Background removal, object cut-outs, and component overlays were processed through asynchronous queues with Redis-backed job orchestration.",
    transformation:
      "Creative and campaign teams could generate AR-ready assets faster, with consistent output quality and significantly less manual editing effort.",
    outcomes: [
      "69% reduction in manual photo background editing time",
      "46% faster turnaround for AR-ready campaign assets",
      "2.2x increase in interactive media output per sprint"
    ],
    stack: ["Python", "OpenCV", "PyTorch", "ONNX Runtime", "WebXR", "Three.js", "Redis", "AWS"]
  },
  {
    slug: "banking-core-backend-modernization",
    title: "Banking Core Backend Modernization",
    industry: "Banking & Financial Services",
    problem:
      "A mid-sized bank struggled with slow batch-heavy settlement workflows, fragile integrations, and limited observability across critical transaction services.",
    architecture:
      "We modernized the backend with Java Spring Boot domain services, Kafka event streams for transaction lifecycle states, Redis for low-latency read acceleration, and strict API governance for partner channels. The platform introduced resilient retry patterns and full audit traceability.",
    transformation:
      "Core banking workflows moved from brittle synchronous bottlenecks to resilient event-driven services with stronger operational control.",
    outcomes: [
      "63% reduction in transaction processing latency for priority flows",
      "58% fewer production incidents tied to integration timeouts",
      "99.98% service availability across core settlement services"
    ],
    stack: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "AWS"]
  }
];

export const testimonials = [
  {
    quote:
      "Vishwakamal Technicals did not operate as an external vendor. They embedded with our architecture council, challenged weak assumptions, and rebuilt our platform foundation for sustainable scale. In six months, deployment lead time dropped by 60% and incident recovery improved materially.",
    name: "Neha Arora",
    title: "CTO",
    companyType: "Digital Health Platform",
    outcome: "60% faster deployment cycles with improved release stability"
  },
  {
    quote:
      "Their team translated our growth goals into a practical system roadmap. Instead of patching symptoms, they resolved core design bottlenecks across data, APIs, and infrastructure. We now onboard enterprise clients with confidence.",
    name: "Rahul Menon",
    title: "Founder & CEO",
    companyType: "B2B FinTech SaaS",
    outcome: "3x onboarding capacity for enterprise customers"
  },
  {
    quote:
      "We needed a technical partner that could manage mission-critical complexity with governance discipline. Vishwakamal Technicals delivered measurable process automation and provided engineering transparency our stakeholders could trust.",
    name: "Ananya Kulkarni",
    title: "Director of Engineering",
    companyType: "Public Sector Transformation Program",
    outcome: "55% reduction in workflow cycle time with full auditability"
  },
  {
    quote:
      "They brought rare depth in architecture and operations. Our product roadmap accelerated because platform reliability stopped being a constraint. Their ownership model made collaboration effective from strategy through execution.",
    name: "Siddharth Bose",
    title: "VP, Platform Engineering",
    companyType: "Enterprise SaaS Provider",
    outcome: "99.99% uptime architecture and 40% performance optimization"
  },
  {
    quote:
      "The engagement was defined by technical rigor and business alignment. Their team established clear operating metrics, reduced unplanned work, and created a modernization path our internal teams could continue long-term.",
    name: "Meera Iyer",
    title: "Chief Digital Officer",
    companyType: "Agri Supply Chain Network",
    outcome: "42% operational efficiency gain through system modernization"
  }
];

export const featuredProjects = [
  {
    name: "PulseBridge Clinical Connect",
    industry: "Healthcare Technology",
    stack: "Java, Spring Boot, HL7/FHIR, Kafka, Redis, AWS",
    summary: "Integrated GE MUSE and Epic EHR through secure HL7/FHIR interoperability services.",
    slug: "healthcare-hl7-fhir-ehr-integration"
  },
  {
    name: "CartFlow Commerce Fabric",
    industry: "E-commerce",
    stack: "Node.js, React, Kafka, Redis, PostgreSQL",
    summary: "Re-architected checkout and inventory flows for high-traffic commerce reliability.",
    slug: "ecommerce-platform-scale-optimization"
  },
  {
    name: "InsightPilot GenAI Hub",
    industry: "Gen AI",
    stack: "Python, RAG, Vector DB, Kafka, Redis",
    summary: "Delivered source-grounded AI knowledge automation for enterprise support operations.",
    slug: "genai-knowledge-automation-platform"
  },
  {
    name: "AR Media Studio Engine",
    industry: "Augmented Reality",
    stack: "Python, OpenCV, PyTorch, WebXR, Three.js",
    summary: "Automated background removal and smart video enhancement for AR campaign assets.",
    slug: "augmented-reality-media-enhancement-suite"
  },
  {
    name: "BankCore Event Grid",
    industry: "Banking & Financial Services",
    stack: "Java, Spring Boot, Kafka, Redis, Kubernetes",
    summary: "Modernized core banking backend for low-latency event-driven transaction processing.",
    slug: "banking-core-backend-modernization"
  }
];

export const proofMetrics = [
  "10+ Enterprise Projects Delivered",
  "99.99% Uptime Architectures",
  "40% Average Performance Optimization",
  "3x Scaling Enablement for Growth Clients"
];

export const techStack = [
  { category: "Backend", items: ["Java", "Go", "Node.js", "Python"] },
  { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
  {
    category: "Cloud",
    items: ["AWS EC2", "S3", "Lambda", "VPC", "Application Load Balancers"]
  },
  { category: "Data", items: ["PostgreSQL", "Redis", "Kafka"] },
  { category: "AI", items: ["Vector Databases", "OpenAI", "LLM Frameworks"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "CI/CD"] }
];

export const differentiators = [
  "Engineering ownership from architecture decisions to production reliability",
  "Deep system design expertise for distributed, high-scale enterprise environments",
  "Enterprise architecture mindset aligned with business and governance realities",
  "Security-first implementation with controlled integration boundaries",
  "Transparent communication with measurable milestones and accountability",
  "AI-ready solutions designed for rapid model integration, governed data flows, and production-safe enterprise rollout"
];

export const leadershipMembers: TeamMember[] = [
  {
    name: "Sameer Gupta",
    title: "Managing Director",
    vision:
      "Sameer leads Vishwakamal Technicals with a long-term vision to build a trusted, high-impact technology organization that solves real business problems with practical, scalable systems clients can confidently grow on.",
    imageUrl: "/images/team/sameer-gupta.png",
    imageAlt: "Stylized avatar for Sameer Gupta"
  },
  {
    name: "Sachin Gupta",
    title: "Chief Financial Officer (CFO)",
    vision:
      "Sachin drives financial strategy with disciplined capital planning, delivery-linked budgeting, and risk-aware growth governance so every major technology investment contributes to durable profitability and operational resilience.",
    imageUrl: "/images/team/sachin-gupta.png",
    imageAlt: "Stylized avatar for Sachin Gupta"
  },
  {
    name: "Sarthak Mehrotra",
    title: "Legal Advisor",
    vision:
      "Sarthak anchors legal strategy across contracts, compliance, and data governance, helping the company and its clients execute large digital programs with clarity, trust, and defensible legal foundations.",
    imageUrl: "/images/team/sarthak-mehrotra.png",
    imageAlt: "Stylized avatar for Sarthak Mehrotra"
  },
  {
    name: "Gunjan Ahuja",
    title: "Head HR",
    vision:
      "Gunjan leads people strategy with a focus on thoughtful hiring, strong internal culture, and scalable team structures so the company can grow without losing execution quality, accountability, or human connection.",
    imageUrl: "/images/team/gunjan-ahuja.png",
    imageAlt: "Stylized avatar for Gunjan Ahuja"
  }
];

export const technicalTeamMembers: TeamMember[] = [
  {
    name: "Ayush Trivedi",
    title: "Practice Head Backend",
    vision:
      "Ayush leads backend practice execution with a focus on robust service design, resilient integrations, and scalable architecture patterns that hold up in production.",
    imageUrl: "/images/team/ayush-trivedi.png",
    imageAlt: "Stylized avatar for Ayush Trivedi"
  },
  {
    name: "Prabhav Tewari",
    title: "Practice Head Frontend",
    vision:
      "Prabhav drives frontend excellence through performance-first UI engineering, modular design systems, and user experiences that stay clean even as complexity grows.",
    imageUrl: "/images/team/prabhav-tewari.png",
    imageAlt: "Stylized avatar for Prabhav Tewari"
  },
  {
    name: "Riya Gupta",
    title: "Practice Head QA",
    vision:
      "Riya leads quality engineering with structured testing strategy, release validation discipline, and automation practices that protect reliability at scale.",
    imageUrl: "/images/team/riya-gupta.png",
    imageAlt: "Stylized avatar for Riya Gupta"
  },
  {
    name: "Stuti Chabra",
    title: "Practice Head CRM",
    vision:
      "Stuti leads CRM-focused delivery by aligning platform workflows with customer lifecycle goals and ensuring integrations support measurable business operations.",
    imageUrl: "/images/team/stuti-chabra.png",
    imageAlt: "Stylized avatar for Stuti Chabra"
  },
  {
    name: "Rakshit Kaushik",
    title: "Practice Head Python and Automation",
    vision:
      "Rakshit leads Python and automation initiatives with a focus on building reliable data workflows, automation-first delivery pipelines, and intelligent backend systems that improve speed, consistency, and operational efficiency.",
    imageUrl: "/images/team/rakshit-kaushik.png",
    imageAlt: "Stylized avatar for Rakshit Kaushik"
  },
  {
    name: "Vipul Bishnoi",
    title: "Practice Head AI",
    vision:
      "Vipul leads the AI practice by combining practical machine learning, LLM integration patterns, and production-grade MLOps, ensuring intelligent features move beyond pilots into governed, measurable business outcomes.",
    imageUrl: "/images/team/vipul-bishnoi.png",
    imageAlt: "Stylized avatar for Vipul Bishnoi"
  },
  {
    name: "Tarandeep Singh Wasu",
    title: "Practice Head Data Science",
    vision:
      "Tarandeep leads the data science practice with a focus on production-ready analytics, model lifecycle governance, and decision intelligence systems that convert complex datasets into measurable business action.",
    imageUrl: "/images/team/tarandeep-singh-wasu.png",
    imageAlt: "Stylized avatar for Tarandeep Singh Wasu"
  }
];
