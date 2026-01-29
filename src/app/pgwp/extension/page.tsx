import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'PGWP Extension Assistance | VisasCanada.ca',
  description: 'Extend your Post-Graduation Work Permit with expert help from VisasCanada.ca. Trusted by thousands for successful applications since 2015.',
};

export default function PGWPExtension() {
  return (
    <PermitLandingPage
      headline="Looking to extend your Post-Graduation Work Permit (PGWP)? We can help."
      subheadline="Extend your PGWP with ease."
    />
  );
}
