import type { FAQItem, BrandLogo } from '../types/sections';

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Clarivue?",
    answer: "Clarivue is an AI-powered interview assistant that joins your live interviews to capture responses, suggest real-time follow-up questions, analyze tone and confidence, and auto-score candidates against your job description — all so you can make better hiring decisions, faster."
  },
  {
    question: "How does Clarivue work during interviews?",
    answer: "Clarivue integrates with your preferred video conferencing tools (like Zoom or Google Meet). Once enabled, it silently observes the conversation, takes structured notes, detects sentiment, recommends follow-up questions on the fly, and generates a complete scorecard and summary after the interview."
  },
  {
    question: "Is Clarivue secure and compliant?",
    answer: "Yes. Clarivue is built with enterprise-grade security and is fully compliant with major data protection regulations like GDPR and CCPA. We offer encrypted data handling, customizable retention policies, and role-based access controls to keep your data safe."
  },
  {
    question: "Do candidates know that Clarivue is in the interview?",
    answer: "Absolutely. We believe in transparency and fairness. Candidates are notified that Clarivue is assisting in the interview process — and that it's there to ensure a more consistent and equitable evaluation."
  },
  {
    question: "Can Clarivue integrate with my ATS?",
    answer: "Yes. Clarivue connects with popular applicant tracking systems (ATS) to sync notes, scorecards, and interview insights directly into your hiring workflow — no manual copy-pasting required."
  },
  {
    question: "How accurate is Clarivue's scoring?",
    answer: "Clarivue generates custom scorecards based on your job description and uses advanced natural language processing and behavior signals to assess candidate responses. While it's not a replacement for human judgment, it provides structured, unbiased inputs to support confident decision-making."
  },
  {
    question: "Can I customize what Clarivue captures or scores?",
    answer: "Yes. You can configure Clarivue to align with your company's competencies, evaluation criteria, and interview structure. You stay in control — Clarivue just makes it easier."
  },
  {
    question: "Who is Clarivue for?",
    answer: "Clarivue is built for fast-moving hiring teams — from startups to scaling enterprises — who want to streamline interviews, improve consistency, and reduce bias in hiring without slowing down their process."
  }
];

export const BRAND_LOGOS: BrandLogo[] = [
  { text: "Brex", color: "gray.300", weight: "700" },
  { text: "Quora", color: "white", weight: "700" },
  { text: "PEO", color: "white", weight: "700" },
  { text: "CHRESN", color: "white", weight: "400" },
  { text: "IMPROBABLE", color: "white", weight: "400" },
  { text: "SAngelList", color: "gray.300", weight: "700" },
  { text: "Engine", color: "gray.400", weight: "700" }
]; 