export const SITE = {
  NAME: 'Clarivue - AI Interview Assistant',
  DESCRIPTION: 'AI-powered interview assistant that captures responses, suggests follow-up questions, analyzes tone and confidence, and auto-scores candidates against your job description.',
  URL: 'https://clarivue.ai',
  IMAGE: '/og-image.png',
  SOCIAL: {
    TWITTER: '@clarivue',
    LINKEDIN: 'https://linkedin.com/company/clarivue',
  }
} as const;

export const CONTACT = {
  EMAIL: 'hello@clarivue.ai',
  SALES: 'sales@clarivue.ai',
  SUPPORT: 'support@clarivue.ai'
} as const;

export const ROUTES = {
  HOME: '/',
  FEATURES: '/features',
  PRICING: '/pricing',
  ABOUT: '/about',
  CONTACT: '/contact'
} as const; 