import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Post-Graduate Work Permit Extension Assistance | VisasCanada.ca',
  description: 'Extend your Post-Graduate Work Permit with expert help from VisasCanada.ca. Trusted by thousands for successful applications since 2015.',
};

export default function PostGraduateWorkPermitExtension() {
  return (
    <PermitLandingPage
      headline="Looking to extend your Post-Graduate Work Permit? We can help."
      subheadline="Extend your post-graduate work permit with ease."
    />
  );
}
