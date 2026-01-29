import type { Metadata } from 'next';
import QuestionnairePage from '@/components/QuestionnairePage';

export const metadata: Metadata = {
  title: 'Start Your Open Work Permit Questionnaire | VisasCanada.com',
};

export default function WorkPermitQuestionnaire() {
  return <QuestionnairePage typeformId="01HVSG2JFX9M0WGSN65YJV3TQJ" />;
}
