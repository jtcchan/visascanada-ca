import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | VisasCanada.ca',
  description: 'Privacy Policy for VisasCanada.ca immigration services.',
};

export default function PrivacyPolicy() {
  return (
    <section className="py-16 px-4 bg-gray-50 min-h-[60vh]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-bitter text-gray-900 mb-4 text-center">
          Privacy Policy
        </h1>
        <div className="hr-divider" />
        
        <div className="prose prose-gray max-w-none mt-10 bg-white p-8 rounded-lg shadow-sm">
          <p className="text-gray-600">
            This Privacy Policy describes how VisasCanada.ca (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, 
            uses, and shares information about you when you use our website and services.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600">
            We collect information you provide directly to us, such as when you fill out a form, 
            request an assessment, or contact us for services. This may include your name, email 
            address, phone number, citizenship status, and other information relevant to your 
            immigration application.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect to provide, maintain, and improve our services; 
            process your applications and requests; communicate with you about our services; 
            and comply with legal obligations.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Information Sharing</h2>
          <p className="text-gray-600">
            We do not sell your personal information. We may share your information with licensed 
            immigration professionals who assist with your application, and as required by law.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us through our website.
          </p>
        </div>
      </div>
    </section>
  );
}
