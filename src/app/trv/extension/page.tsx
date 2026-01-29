import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'TRV Extension Assistance | Expert Visa Consultation | VisasCanada.ca',
  description: 'Extend your Temporary Resident Visa (TRV) with expert help from VisasCanada.ca. Trusted by thousands for successful applications since 2015.',
};

export default function TRVExtension() {
  return (
    <PermitLandingPage
      headline="Looking to extend your Temporary Resident Visa (TRV)? We can help."
      subheadline="Extend your TRV with ease."
    />
  );
}
