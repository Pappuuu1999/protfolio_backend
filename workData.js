// backend/mywork_data.js

const mywork_data = [
  {
    id: 1,
    name: "Web design",
    w_img: "/assets/project_1.jpg", // backend assets folder
    link: "https://absolutemobility.com.pk",
    category: "web-design",
    description:
      "Professional web design services creating modern, responsive websites that deliver exceptional user experiences and drive business growth.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Modern UI/UX",
      "Cross-browser Compatible",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    projects: [
      { name: "E-commerce Platform", img: "/assets/project_1.jpg", link: "https://absolutemobility.com.pk" },
      { name: "Corporate Website", img: "/assets/project_2.svg" },
      { name: "Portfolio Site", img: "/assets/project_3.svg" },
    ],
  },
  {
    id: 2,
    name: "Graphics design",
    w_img: "/assets/project_2.svg",
    category: "graphics-design",
    description:
      "Creative graphic design solutions including logos, branding, marketing materials, and visual content that makes your brand stand out.",
    features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics", "Marketing Materials"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "CorelDRAW"],
    projects: [
      { name: "Brand Identity Package", img: "/assets/project_2.svg" },
      { name: "Logo Design Collection", img: "/assets/project_3.svg" },
      { name: "Marketing Campaign", img: "/assets/project_4.svg" },
    ],
  },
  {
    id: 3,
    name: "Social media",
    w_img: "/assets/project_3.svg",
    category: "social-media",
    description:
      "Comprehensive social media management and content creation to build your online presence and engage with your audience effectively.",
    features: ["Content Creation", "Social Media Strategy", "Community Management", "Analytics & Reporting", "Paid Advertising"],
    technologies: ["Facebook Ads", "Instagram Marketing", "LinkedIn", "Twitter", "TikTok"],
    projects: [
      { name: "Instagram Campaign", img: "/assets/project_3.svg" },
      { name: "Facebook Business Page", img: "/assets/project_4.svg" },
      { name: "LinkedIn Strategy", img: "/assets/project_5.svg" },
    ],
  },
];

export default mywork_data;
