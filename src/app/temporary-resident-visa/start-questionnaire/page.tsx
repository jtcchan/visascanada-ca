import type { Metadata } from 'next';
import QuestionnairePage from '@/components/QuestionnairePage';

export const metadata: Metadata = {
  title: 'Start Your Temporary Resident Visa Questionnaire | VisasCanada.ca',
};

// Uses the main Typeform for TRV applications
export default function TemporaryResidentVisaQuestionnaire() {
  return <QuestionnairePage typeformId="01HRG7MC65CZ3KFA96EEFE47F1" />;
}
