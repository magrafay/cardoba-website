export type IconName =
  | "cart"
  | "chip"
  | "briefcase"
  | "building"
  | "flag"
  | "shield"
  | "chart"
  | "wrench"
  | "document"
  | "calendar";

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  points: string[];
};

export const intro =
  "We offer a comprehensive range of professional services designed to support businesses, investors, and individuals. Our services include E-Commerce Solutions, IT Consultancy, Business Consultancy, Real Estate Consultancy, Real Estate Representative Office Services, Risk Management, Management Consultancy, Facilities Management, Document Preparation Services, and Event Organizing and Management. We are committed to providing reliable, efficient, and customized solutions that simplify business operations, support growth, manage risks, and create value for our clients through professionalism, transparency, and quality service.";

export const services: Service[] = [
  {
    slug: "e-commerce",
    title: "E-Commerce Solutions",
    icon: "cart",
    summary:
      "Launch and grow your online business with end-to-end e-commerce setup, platform guidance and digital sales strategy.",
    points: ["Online store setup", "Payment & logistics integration", "Digital sales strategy"],
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    icon: "chip",
    summary:
      "Practical technology advice that aligns your IT systems with your business goals, from infrastructure to software selection.",
    points: ["IT strategy & planning", "Systems & software selection", "Digital transformation"],
  },
  {
    slug: "business-consultancy",
    title: "Business Consultancy",
    icon: "briefcase",
    summary:
      "Expert guidance on business setup, planning and operations to help you start right and scale with confidence.",
    points: ["Business setup support", "Business plans & feasibility", "Operational improvement"],
  },
  {
    slug: "real-estate-consultancy",
    title: "Real Estate Consultancy",
    icon: "building",
    summary:
      "Informed advice for buying, selling, leasing and investing in property, backed by market insight.",
    points: ["Investment advisory", "Market & property analysis", "Buying, selling & leasing support"],
  },
  {
    slug: "real-estate-representative-office",
    title: "Real Estate Representative Office Services",
    icon: "flag",
    summary:
      "Local representation for real estate companies and investors, acting on your behalf with clients and authorities.",
    points: ["Local representation", "Client & partner liaison", "Market presence support"],
  },
  {
    slug: "risk-management",
    title: "Risk Management",
    icon: "shield",
    summary:
      "Identify, assess and mitigate the risks facing your business so you can protect value and make confident decisions.",
    points: ["Risk assessment", "Mitigation planning", "Compliance support"],
  },
  {
    slug: "management-consultancy",
    title: "Management Consultancy",
    icon: "chart",
    summary:
      "Strategy, structure and performance improvement that helps leadership teams run organisations more effectively.",
    points: ["Strategy development", "Organisational structure", "Performance improvement"],
  },
  {
    slug: "facilities-management",
    title: "Facilities Management",
    icon: "wrench",
    summary:
      "Reliable management of your buildings and workplaces, keeping operations safe, efficient and well maintained.",
    points: ["Maintenance coordination", "Vendor management", "Workplace services"],
  },
  {
    slug: "document-preparation",
    title: "Document Preparation Services",
    icon: "document",
    summary:
      "Accurate, professional preparation of business and personal documents, saving you time and avoiding delays.",
    points: ["Business documentation", "Applications & forms", "Document review"],
  },
  {
    slug: "event-management",
    title: "Event Organizing and Management",
    icon: "calendar",
    summary:
      "From corporate gatherings to special occasions, we plan and manage events from concept to completion.",
    points: ["Event planning", "Vendor & venue coordination", "On-site management"],
  },
];
