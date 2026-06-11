import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Clock,
  FileLock2,
  FileCheck2,
  FileText,
  Headphones,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Upload,
  UserCheck,
  WalletCards,
  Zap
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const contact = {
  phone: "03241434737",
  email: "top@asaanfiler.com",
  whatsapp:
    "https://wa.me/923241434737?text=Assalamualaikum%2C%20I%20want%20NTN%20Registration%20and%20Tax%20Filing%20service.",
  address:
    "1st Floor, Building 2C, 12th Commercial Street, DHA Phase II Extension Commercial Area, Karachi, Pakistan 75500"
};

export const benefits = [
  {
    title: "Affordable Pricing",
    description: "A clear Rs. 1,000 total package with NTN registration and tax filing support.",
    icon: Banknote
  },
  {
    title: "Fast Processing",
    description: "A streamlined online process that helps you move from documents to filing quickly.",
    icon: Zap
  },
  {
    title: "Expert Assistance",
    description: "Guidance from people who understand FBR filing requirements and documentation.",
    icon: Headphones
  },
  {
    title: "Secure Information",
    description: "Personal details and documents are handled with privacy-first, secure workflows.",
    icon: FileLock2
  },
  {
    title: "Dedicated Support",
    description: "Get WhatsApp support from application start through document guidance and filing.",
    icon: MessageCircle
  },
  {
    title: "Simple Process",
    description: "Plain-language steps that make NTN Registration Pakistan and tax filing easier.",
    icon: Sparkles
  }
];

export const steps = [
  { title: "Submit Information", icon: FileText },
  { title: "Upload Documents", icon: Upload },
  { title: "Make Payment", icon: WalletCards },
  { title: "Application Processing", icon: FileCheck2 },
  { title: "Become a Filer", icon: BadgeCheck }
];

export const faqs = [
  {
    question: "What is NTN?",
    answer:
      "NTN stands for National Tax Number. It is used by FBR to identify taxpayers in Pakistan."
  },
  {
    question: "What is included in tax filing?",
    answer:
      "The Asaan Filer package includes NTN registration support, tax filing assistance, WhatsApp support, and document guidance."
  },
  {
    question: "How long does processing take?",
    answer:
      "Timing depends on document readiness and FBR processing, but our workflow is designed for fast submission."
  },
  {
    question: "Which documents are required?",
    answer:
      "Typically CNIC, phone number, email address, income details, bank details, and any relevant tax or salary documents are required."
  }
];

export const testimonials = [
  {
    name: "Verified Client",
    role: "Salaried Individual",
    quote:
      "The process was simple, the Rs. 1,000 pricing was clear, and WhatsApp support made every step easy."
  },
  {
    name: "Verified Client",
    role: "Freelancer",
    quote:
      "I understood exactly what documents were needed and got professional guidance for NTN registration."
  },
  {
    name: "Verified Client",
    role: "Business Owner",
    quote:
      "Asaan Filer felt trustworthy and fast. The team explained filing requirements in a clear way."
  }
];

export const documentGroups = [
  {
    title: "For Salaried Individuals",
    icon: ReceiptText,
    items: ["CNIC Front", "CNIC Back", "Salary Slip"]
  },
  {
    title: "For Freelancers",
    icon: UserCheck,
    items: ["CNIC Front", "CNIC Back", "Bank Statement"]
  },
  {
    title: "For Business Owners",
    icon: BriefcaseBusiness,
    items: ["CNIC Front", "CNIC Back", "Business Information"]
  }
];

export const filerBenefits = [
  "Lower withholding taxes",
  "Better financial profile",
  "Easier property transactions",
  "Reduced taxes on vehicle purchases",
  "Lower banking transaction taxes",
  "Compliance with FBR regulations",
  "Better financial credibility"
];

export const contactMethods = [
  { label: contact.phone, title: "WhatsApp", icon: Phone },
  { label: contact.email, title: "Email", icon: Mail },
  { label: contact.address, title: "Office", icon: MapPin },
  { label: "Protected document handling", title: "Privacy", icon: LockKeyhole }
];
