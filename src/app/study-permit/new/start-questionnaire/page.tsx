import type { Metadata } from 'next';
import QuestionnairePage from '@/components/QuestionnairePage';

export const metadata: Metadata = {
  title: 'New Study Permit - Start Questionnaire | VisasCanada.ca',
};

export default function NewStudyPermitQuestionnaire() {
  return <QuestionnairePage typeformId="01HXFW3EET0ZWHXG8715M80C90" />;
}
