import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Professional Assistance to Apply for Work Permit in Canada | VisasCanada.ca',
  description: 'Looking to work in Canada? Let our team guide you through the work permit application process with our 8 years of expertise and RCIC certification.',
};

export default function WorkPermitApply() {
  return (
    <PermitLandingPage
      headline="Need a Work Permit in Canada? We can help."
      subheadline="Looking to work in Canada? Let our team guide you through the work permit application process."
    />
  );
}
