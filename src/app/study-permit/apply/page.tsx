import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Get Your Canadian Study Permit with Expert Help | VisasCanada.ca',
  description: 'Looking to study in Canada? Let our team guide you through the study permit application process with our 8 years of expertise and RCIC certification.',
};

export default function StudyPermitApply() {
  return (
    <PermitLandingPage
      headline="Need a Study Permit in Canada? We can help."
      subheadline="Looking to study in Canada? Let our team guide you through the study permit application process."
    />
  );
}
