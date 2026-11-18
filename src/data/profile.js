export const about = {
  intro:
    "Business informatics graduate with hands-on experience across marketing, data, web and quality documentation in the medical diagnostics industry.",
  facts: [
    { value: "Ranked 1st", label: "MSc Business Informatics cohort, Óbuda University" },
    { value: "FinTech", label: "Specialisation, on a Stipendium Hungaricum scholarship" },
    { value: "Co-founder", label: "MarhbaBik, a cultural tourism platform" },
  ],
  paragraphs: [
    "I sit between the business side and the technical side, and translate in both directions.",
    "My MSc in Business Informatics at Óbuda University focused on FinTech. For my thesis I applied social media intelligence (SOCMINT) to predict stock market trends, which taught me how to turn noisy, unstructured signals into something a decision-maker can use.",
    "As Marketing Manager and Application Specialist at Diamond Diagnostics, part of the Laboratory Advanced Solutions (LAS) group, I worked across marketing, data analytics, web and SEO, QA document control and merger communications. The common thread was the same: find where the process breaks, fix it, and make the result measurable.",
    "Before that, I co-founded MarhbaBik, worked as a business analyst on a Budapest open-data housing project with Demola, and led communication and web development for the Google Developer Student Club at the University of Boumerdes.",
  ],
};

export const strengths = [
  { title: "Business analysis", text: "Mapping processes, finding the bottlenecks and writing the requirements that IT and the business both understand." },
  { title: "Data & BI", text: "Cleaning, analysing and visualising data so teams can see what is happening and why." },
  { title: "Digital & web", text: "SEO, site structure, redirects, email campaigns and front-end work that supports business goals." },
  { title: "Process & quality", text: "Documentation, SOPs and change control that keep regulated work consistent and auditable." },
];

export const work = [
  {
    featured: true,
    tags: ["Data analytics", "CRM"],
    title: "Diagnosing a sudden lead surge",
    text: "The CRM showed a sharp jump in inbound leads in one month. Instead of celebrating, I traced where the leads came from and how they were routed.",
    outcome: { label: "Result", text: "found a form resubmission bug and spam being misrouted as real leads, and delivered cleaned datasets so sales could work from accurate numbers." },
  },
  {
    tags: ["SEO", "Web", "Merger"],
    title: "Website routing and rebrand audit",
    text: "Planned the routing and redirect strategy for legacy category pages, and audited the group website for content that still carried the old brand after the merger.",
    outcome: { label: "Result", text: "a clear scope of work for the rebrand and protected search traffic during the transition." },
  },
  {
    tags: ["Communications", "Multilingual"],
    title: "Merger announcement campaign",
    text: "Built the HTML email campaign announcing the merger, with versions in Spanish, French and Portuguese for international customers.",
    outcome: { label: "Result", text: "one consistent message delivered to every market in its own language." },
  },
  {
    tags: ["Systems", "Customer experience"],
    title: "Multilingual phone system",
    text: "Worked on the IVR phone system so callers could be served in Hungarian, Spanish, French and German.",
    outcome: { label: "Result", text: "callers reach the right team faster, in their own language." },
  },
  {
    tags: ["Quality", "Documentation"],
    title: "Training SOP document control",
    text: "Coordinated QA and IT to correct training SOPs for two laboratory instruments in the document control system.",
    outcome: { label: "Result", text: "accurate, controlled documentation for regulated training records." },
  },
  {
    tags: ["Startup", "Data"],
    title: "MarhbaBik",
    text: "Co-founded a cultural tourism platform and handled its data analysis, from understanding users to shaping the product.",
    outcome: { label: "Role", text: "co-founder and data analyst." },
  },
];

export const toolbox = [
  { group: "Consulting & business", items: ["Business analysis", "Problem framing", "Process mapping", "Stakeholder workshops", "Project management", "Agile / Scrum", "Change control", "Documentation & SOPs"] },
  { group: "Data & BI", items: ["Exploratory data analysis", "Dashboard design", "Power BI", "Tableau", "Advanced Excel", "Google Analytics", "Looker Studio", "RapidMiner", "Sentiment analysis", "Predictive analytics", "SOCMINT"] },
  { group: "Programming", items: ["SQL", "Python", "R", "JavaScript", "TypeScript", "C / C++", "HTML & CSS"] },
  { group: "Frameworks & platforms", items: ["React", "Angular", "Node.js", "Flask", ".NET", "Firebase", "Tailwind", "Bootstrap", "Chart.js"] },
  { group: "Marketing & design", items: ["SEO", "CRM", "Email campaigns", "LinkedIn strategy", "UI/UX", "Adobe Illustrator", "LaTeX"] },
  { group: "Languages", items: ["Berber · native", "Arabic · fluent", "English · fluent", "French · advanced"] },
];
