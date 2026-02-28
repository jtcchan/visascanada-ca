import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Terms of Service | VisasCanada.ca',
  description: 'Terms of Service for VisasCanada.ca immigration services.',
};

export default function TermsOfService() {
  return (
    <ContentPage title="Terms of Service">
      <p>
        These Terms of Service govern your use of VisasCanada.ca and the services we provide. By
        using our website and services, you agree to these terms.
      </p>

      <h2>Services</h2>
      <p>
        VisasCanada.ca provides immigration consulting services through licensed Regulated Canadian
        Immigration Consultants (RCICs). Our services include assistance with work permits, study
        permits, visitor visas, and permanent residency applications.
      </p>

      <h2>No Guarantee of Outcome</h2>
      <p>
        While we strive for the best outcomes for our clients, we cannot guarantee the approval of
        any immigration application. Final decisions are made by Immigration, Refugees and
        Citizenship Canada (IRCC) or other relevant government authorities.
      </p>

      <h2>Client Responsibilities</h2>
      <p>
        Clients are responsible for providing accurate and complete information for their
        applications. Any false or misleading information may result in application denial or other
        consequences.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        VisasCanada.ca shall not be liable for any damages arising from the use of our services,
        except as required by law.
      </p>
    </ContentPage>
  );
}
