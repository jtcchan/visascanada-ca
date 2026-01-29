import Script from 'next/script';

interface QuestionnairePageProps {
  typeformId: string;
}

export default function QuestionnairePage({ typeformId }: QuestionnairePageProps) {
  return (
    <section className="min-h-[80vh] bg-gray-50">
      <div 
        data-tf-live={typeformId}
        className="w-full min-h-[80vh]"
      />
      <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />
    </section>
  );
}
