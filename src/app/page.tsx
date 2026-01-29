import Link from 'next/link';

const services = [
  'Work Permits',
  'Study Permits',
  'Visitor Visas',
  'Sponsorships',
  'Permanent Residency',
  'Renewals & Extensions',
];

const stats = [
  { value: '8+', label: 'Years of Experience' },
  { value: '95%', label: 'Success Rate' },
  { value: '18+', label: 'Countries Served' },
  { value: '✭', label: '4.8 Star Reviews' },
  { value: '®', label: 'Certified RCIC' },
];

const ourBenefits = [
  'Just book a time to tell us your story, we\'ll follow up and handle the rest',
  'We\'ll help you find the best path based on your unique situation',
  'We can apply based on past successful applications',
  'We\'ll handle everything until you receive results, including re-submissions if needed',
  'Application submitted within 5 business days guaranteed. Or rushed, if needed.',
  'Hassle-free and painless. Our team speaks multiple languages.',
  'We can help you determine if your application timelines are normal or have potential issues based on past successful applications.',
];

const diyDrawbacks = [
  'Many hours of research, paperwork, admin tasks, and monitoring required',
  'You\'ll need to determine the best program available for your situation',
  'You\'ll need to be up to date with program changes and requirements',
  'No or limited support from your family and friends',
  'Based on your availability and potential delays if the application gets rejected',
  'Can be quite difficult or confusing, especially if language is a barrier',
  'Can be very frustrating when you\'re unsure if the application\'s timeline is normal. Or if there are issues and your application needs to be resubmitted.',
];

const steps = [
  {
    title: 'Reach out to our team',
    description: 'It\'s free to do an assessment to determine your eligibility. We\'ll work with you to determine what type of application is likely to succeed based on your situation.',
  },
  {
    title: 'Gather your documents',
    description: 'Once you\'re ready to apply, we\'ll guide you on how to prepare your documents.',
  },
  {
    title: 'We submit your application',
    description: 'Once your hand your documents over to us, we\'ll take care of the rest.',
  },
  {
    title: 'Wait for your results',
    description: 'Our team will keep track of the application and be available for any questions.',
  },
];

const faqs = [
  {
    question: 'How much does the service cost?',
    answer: 'Our rates depend on the type of application, number of applicants, and the complexity. It is priced against current industry standards and can range from a few hundred to few thousand. For a more accurate price for your unique situation, just speak to one of our experts—it\'s completely free for an assessment.',
  },
  {
    question: 'How long does it typically take to process the application?',
    answer: 'Once documents are ready, our team submits your application within 5 business days—guaranteed. Processing times for applications depend on a number of factors that\'s out of our control—such as the type of permit, visa, or status you\'re seeking, and the number of applications being processed by the Canadian government. Generally, processing times can be as quick as a few weeks or up to several months.',
  },
  {
    question: 'What are the eligibility requirements for Canadian permanent residency?',
    answer: 'Eligibility for Canadian permanent residency is determined by factors such as education, work experience, language proficiency, and ability to adapt to life in Canada. Common pathways to permanent residency include the Express Entry system, Provincial Nominee Programs, and Family Sponsorship.',
  },
  {
    question: 'Can I work in Canada while my immigration application is being processed?',
    answer: 'Depending on the type of immigration application and your current immigration status, you may be eligible to work in Canada while your application is being processed. Work permits may be available for individuals with pending immigration applications, provided they meet certain criteria.',
  },
  {
    question: 'What documentation do I need to provide for a study permit application?',
    answer: 'Documentation requirements for a study permit application typically include proof of acceptance from a Canadian educational institution, evidence of financial support, a valid passport, and any additional documents required by the Canadian government, such as medical exams or police certificates.',
  },
  {
    question: 'How does the common-law sponsorship process work?',
    answer: 'The common-law sponsorship process allows individuals in a committed relationship with a Canadian citizen or permanent resident to apply for sponsorship to live and work in Canada. Applicants must provide evidence of their genuine relationship, such as shared finances or cohabitation, and meet other eligibility criteria set by Immigration, Refugees and Citizenship Canada (IRCC).',
  },
  {
    question: 'What options are available for family members to join me in Canada?',
    answer: 'Family members of Canadian citizens and permanent residents may be eligible to immigrate to Canada through family sponsorship programs. These programs allow sponsors to bring spouses, common-law partners, dependent children, parents, and grandparents to Canada, subject to certain requirements and sponsorship obligations.',
  },
  {
    question: 'What services does your firm provide to assist with the Canadian immigration process?',
    answer: 'Our firm offers a wide range of services to assist individuals and families with the Canadian immigration process. Moving can be very emotional and stressful—and we\'d love to help you make this as stress-free and painless as possible. This includes personalized consultation and assessment, assistance with visa and permit applications, representation in sponsorship and economic immigration cases, and ongoing support to ensure a smooth transition to a welcomed and new life in Canada.',
  },
];

function CheckIcon() {
  return (
    <svg className="check-icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 19.5C7.85775 19.5 4.5 16.1422 4.5 12C4.5 7.85775 7.85775 4.5 12 4.5C16.1422 4.5 19.5 7.85775 19.5 12C19.5 16.1422 16.1422 19.5 12 19.5ZM11.2522 15L16.5547 9.69675L15.4942 8.63625L11.2522 12.879L9.1305 10.7572L8.07 11.8177L11.2522 15Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="x-icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 19.5C7.85775 19.5 4.5 16.1422 4.5 12C4.5 7.85775 7.85775 4.5 12 4.5C16.1422 4.5 19.5 7.85775 19.5 12C19.5 16.1422 16.1422 19.5 12 19.5ZM12 10.9395L9.879 8.81775L8.81775 9.879L10.9395 12L8.81775 14.121L9.879 15.1822L12 13.0605L14.121 15.1822L15.1822 14.121L13.0605 12L15.1822 9.879L14.121 8.81775L12 10.9395Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ServiceCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
      {services.map((service) => (
        <Link
          key={service}
          href="/start-your-application"
          className="service-card"
        >
          <p className="font-bold text-gray-800">{service}</p>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bitter text-gray-900 mb-6">
            Looking to study, work, or live in Canada? We can help.
          </h1>
          <div className="hr-divider" />
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Since 2015, we&apos;ve helped thousands of successful applicants with work permits,
            study permits, visitor visas, and immigration applications.{' '}
            <strong>Today is your turn.</strong>
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-10">
          <p className="text-center text-gray-500 italic mb-6">
            What are you looking for today?
          </p>
          <ServiceCards />
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            <strong>Not sure what you need?</strong> Just{' '}
            <Link href="/start-your-application" className="text-[#2E735F] underline hover:no-underline">
              speak with one of our experts
            </Link>{' '}
            for free and we can help you determine what&apos;s the best path for you.
            It&apos;s completely free for an assessment.
          </p>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="bg-gray-50 py-10 px-4">
        <p className="text-center text-gray-500 italic mb-8">— About Our Team —</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="credibility-card">
              <div className="credibility-icon">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-bitter text-gray-900 mb-4">
            Why work with us?
          </h2>
          <div className="hr-divider" />
          <p className="text-gray-600 mb-12">
            Canadian immigrations rules are complex. And your situation is unique. Our team of
            experts can make this process easy and painless.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Our Service */}
          <div className="comparison-card recommended">
            <h3 className="font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
              VisasCanada.ca
            </h3>
            <div className="space-y-4">
              {ourBenefits.map((benefit, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckIcon />
                  <p className="text-gray-600 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DIY */}
          <div className="comparison-card not-recommended">
            <h3 className="font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
              Applying Yourself
            </h3>
            <div className="space-y-4">
              {diyDrawbacks.map((drawback, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <XIcon />
                  <p className="text-gray-600 text-sm">{drawback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-bitter text-gray-900 mb-4 text-center">
            How it works
          </h2>
          <div className="hr-divider" />

          <div className="space-y-8 mt-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="step-counter">{i + 1}</div>
                <div>
                  <p className="text-gray-700">
                    <strong>{step.title}.</strong> {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-bitter text-gray-900 mb-4">
            What we can help with
          </h2>
          <div className="hr-divider" />
          <p className="text-gray-500 italic mb-8">What are you looking for today?</p>
          <ServiceCards />
          <p className="text-gray-500 italic mt-8">
            Space is limited. Applications are processed on a first-come, first-served basis.
          </p>
          <p className="text-gray-600 mt-6">
            <strong>Not sure what you need?</strong> Just{' '}
            <Link href="/start-your-application" className="text-[#2E735F] underline hover:no-underline">
              speak with one of our experts
            </Link>{' '}
            for free and we can help you determine what&apos;s the best path for you. No payments required.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-bitter text-gray-900 mb-4 text-center">
            Commonly Asked Questions
          </h2>
          <div className="hr-divider" />

          <div className="mt-10 space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <p className="font-bold text-gray-800 mb-2">{faq.question}</p>
                <p className="text-gray-600">
                  <em>Answer:</em> {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center bg-white p-6 rounded-lg">
            <p className="text-gray-600">
              <strong className="italic">Don&apos;t see your question answered?</strong>
              <br />
              <em>
                Feel free to{' '}
                <Link href="/start-your-application" className="text-[#2E735F] underline hover:no-underline">
                  reach out to one of our experts
                </Link>
                . They can help answer you based on your unique situation. It&apos;s free to get started.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-bitter text-gray-900 mb-4">
            Get started today
          </h2>
          <div className="hr-divider" />
          <p className="text-gray-500 italic mb-8">What are you looking for today?</p>
          <ServiceCards />
          <p className="text-gray-500 italic mt-8">
            Space is limited. Applications are processed on a first-come, first-served basis.
          </p>
        </div>
      </section>
    </>
  );
}
