import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | VisasCanada.ca',
  description: 'Terms of Service for VisasCanada.ca immigration services.',
};

export default function TermsOfService() {
  return (
    <section className="py-16 px-4 bg-gray-50 min-h-[60vh]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-bitter text-gray-900 mb-4 text-center">
          Terms of Service
        </h1>
        <div className="hr-divider" />
        
        <div className="prose prose-gray max-w-none mt-10 bg-white p-8 rounded-lg shadow-sm">
          <p className="text-gray-600">
            These Terms of Service govern your use of VisasCanada.ca and the services we provide. 
            By using our website and services, you agree to these terms.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Services</h2>
          <p className="text-gray-600">
            VisasCanada.ca provides immigration consulting services through licensed Regulated 
            Canadian Immigration Consultants (RCICs). Our services include assistance with work 
            permits, study permits, visitor visas, and permanent residency applications.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">No Guarantee of Outcome</h2>
          <p className="text-gray-600">
            While we strive for the best outcomes for our clients, we cannot guarantee the approval 
            of any immigration application. Final decisions are made by Immigration, Refugees and 
            Citizenship Canada (IRCC) or other relevant government authorities.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Client Responsibilities</h2>
          <p className="text-gray-600">
            Clients are responsible for providing accurate and complete information for their 
            applications. Any false or misleading information may result in application denial 
            or other consequences.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600">
            VisasCanada.ca shall not be liable for any damages arising from the use of our services, 
            except as required by law.
          </p>
        </div>
      </div>
    </section>
  );
}
