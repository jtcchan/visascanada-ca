import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Expert Assistance for Canada Visitor Visa Applications | VisasCanada.ca',
  description: 'Looking to visit Canada? Let our team guide you through the visitor visa application process with our 8 years of expertise and RCIC certification.',
};

export default function VisitorVisaApply() {
  return (
    <PermitLandingPage
      headline="Looking to apply for a Visitor Visa in Canada? We can help."
      subheadline="Looking to visit Canada? Let our team guide you through the visitor visa application process."
    />
  );
}
