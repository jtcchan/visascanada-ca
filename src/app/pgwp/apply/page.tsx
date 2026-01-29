import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'PGWP Work Permit Application Assistance | VisasCanada.ca',
  description: 'Secure your PGWP with expert help from VisasCanada.ca. Trusted by thousands for successful applications since 2015.',
};

export default function PGWPApply() {
  return (
    <PermitLandingPage
      headline="Need help applying for your Post-Graduation Work Permit (PGWP)? We can help."
      subheadline="Looking to work in Canada? Let our team guide you through the PGWP work permit application process."
    />
  );
}
