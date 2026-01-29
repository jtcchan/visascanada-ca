import type { Metadata } from 'next';
import QuestionnairePage from '@/components/QuestionnairePage';

export const metadata: Metadata = {
  title: 'Start Your Study Permit Renewal/Extension Questionnaire | VisasCanada.ca',
};

export default function StudyPermitQuestionnaire() {
  return <QuestionnairePage typeformId="01HVQ32K4H5Y79P52FVWVC6K5W" />;
}
