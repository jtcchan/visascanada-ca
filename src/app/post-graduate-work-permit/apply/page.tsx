import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Post-Graduate Work Permit Application Assistance | VisasCanada.ca',
  description: 'Secure your Post-Graduate Work Permit with expert help from VisasCanada.ca. Trusted by thousands for successful applications since 2015.',
};

export default function PostGraduateWorkPermitApply() {
  return (
    <PermitLandingPage
      headline="Need help applying for your Post-Graduate Work Permit? We can help."
      subheadline="Looking to work in Canada after graduation? Let our team guide you through the post-graduate work permit application process."
    />
  );
}
