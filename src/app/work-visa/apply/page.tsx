import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Expert Assistance for Canada Work Visa Applications | VisasCanada.ca',
  description: 'Looking to work in Canada? Let our team guide you through the work visa application process with our 8 years of expertise and RCIC certification.',
};

export default function WorkVisaApply() {
  return (
    <PermitLandingPage
      headline="Looking to apply for a Work Visa in Canada? We can help."
      subheadline="Looking to work in Canada? Let our team guide you through the work visa application process."
    />
  );
}
