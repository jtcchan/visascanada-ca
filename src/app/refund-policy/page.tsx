import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | VisasCanada.ca',
  description: 'Refund Policy for VisasCanada.ca immigration services.',
};

export default function RefundPolicy() {
  return (
    <section className="py-16 px-4 bg-gray-50 min-h-[60vh]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-bitter text-gray-900 mb-4 text-center">
          Refund Policy
        </h1>
        <div className="hr-divider" />
        
        <div className="prose prose-gray max-w-none mt-10 bg-white p-8 rounded-lg shadow-sm">
          <p className="text-gray-600">
            This Refund Policy outlines the terms under which refunds may be issued for services 
            provided by VisasCanada.ca.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Assessment Fees</h2>
          <p className="text-gray-600">
            Initial assessments are provided free of charge. No refund is applicable as no 
            payment is required for this service.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Service Fees</h2>
          <p className="text-gray-600">
            Service fees are generally non-refundable once work has commenced on your application. 
            This includes time spent on document review, preparation, and submission.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Government Fees</h2>
          <p className="text-gray-600">
            Government fees paid to IRCC or other authorities are non-refundable by VisasCanada.ca. 
            Refund policies for government fees are determined by the respective government agencies.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Cancellation</h2>
          <p className="text-gray-600">
            If you wish to cancel services before work has begun, please contact us immediately. 
            Partial refunds may be available depending on the stage of service delivery.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            For refund inquiries, please contact us through our website with your service details.
          </p>
        </div>
      </div>
    </section>
  );
}
