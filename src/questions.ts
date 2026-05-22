import type { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    topic: 'Service concepts',
    prompt:
      'An employee is given usage rights for an internal file-sharing platform. Which concept fits best?',
    answers: ['Warranty', 'Goods', 'Utility', 'Access to resources'],
    correctAnswerIndex: 3,
    explanation:
      'Access to resources means that consumers can use provider resources under agreed conditions.',
  },
  {
    topic: 'Service concepts',
    prompt: 'A support engineer helps a user configure a laptop. What is this?',
    answers: ['Transfer of goods', 'Service action', 'Sustainability', 'Access to resources'],
    correctAnswerIndex: 1,
    explanation: 'This support is a service action, meaning an action performed by the provider.',
  },
  {
    topic: 'Value',
    prompt: 'When is a service perceived as valuable by the consumer?',
    answers: [
      'When provider costs are minimal',
      'When many providers are involved',
      'When positive effects outweigh negative effects',
      'When a lot is invested in resources',
    ],
    correctAnswerIndex: 2,
    explanation:
      'Value is subjective and is created through utility, outcomes, and optimized costs and risks.',
  },
  {
    topic: 'Sustainability',
    prompt:
      'Recycling, reduced emissions, and transparent supply chains primarily refer to which concept?',
    answers: ['Utility', 'Warranty', 'User experience', 'Sustainability'],
    correctAnswerIndex: 3,
    explanation:
      'Sustainability includes environmental, social, and economic responsibility.',
  },
  {
    topic: 'Four dimensions',
    prompt: 'Which dimension covers roles, culture, competencies, and communication?',
    answers: [
      'Partners and suppliers',
      'Value streams and processes',
      'Information and technology',
      'Organizations and people',
    ],
    correctAnswerIndex: 3,
    explanation:
      'Organizations and people covers structure, culture, skills, and responsibilities.',
  },
  {
    topic: 'Four dimensions',
    prompt: 'Which dimension covers workflows and activities across organizational boundaries?',
    answers: [
      'Partners and suppliers',
      'Information and technology',
      'Organizations and people',
      'Value streams and processes',
    ],
    correctAnswerIndex: 3,
    explanation:
      'Value streams and processes shows how work is organized to create value.',
  },
  {
    topic: 'Guiding principles',
    prompt: 'What is the core idea of focus on value?',
    answers: [
      'Align everything with value for the organization, customers, and stakeholders',
      'Only increase revenue',
      'Only measure employee satisfaction',
      'Maximize market share',
    ],
    correctAnswerIndex: 0,
    explanation: 'All activities should contribute directly or indirectly to value.',
  },
  {
    topic: 'Guiding principles',
    prompt: 'Why is start where you are important?',
    answers: [
      'So that automation is never used',
      'So that everything always starts from scratch',
      'So that existing capabilities and resources are not wasted',
      'So that feedback is avoided',
    ],
    correctAnswerIndex: 2,
    explanation:
      'Existing resources should be assessed and used before building something new.',
  },
  {
    topic: 'Guiding principles',
    prompt: 'What is the correct order for optimize and automate?',
    answers: [
      'Automate first, then optimize',
      'Optimize first, then automate',
      'Automate everything immediately',
      'Replace people completely',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Automating inefficient processes often only makes the problem bigger.',
  },
  {
    topic: 'Governance',
    prompt:
      'Which governance activity checks whether performance and behavior align with strategy and policies?',
    answers: ['Evaluate', 'Direct', 'Monitor', 'Discover'],
    correctAnswerIndex: 2,
    explanation:
      'Monitor tracks performance and compliance with the strategic direction.',
  },
  {
    topic: 'Lifecycle',
    prompt:
      'Which activity aligns product capabilities with consumer needs and strategy?',
    answers: ['Discover', 'Build', 'Operate', 'Support'],
    correctAnswerIndex: 0,
    explanation:
      'Discover identifies and prioritizes needs, opportunities, and strategic fit.',
  },
  {
    topic: 'Lifecycle',
    prompt: 'Which activity creates prototypes and specifications?',
    answers: ['Design', 'Deliver', 'Support', 'Transition'],
    correctAnswerIndex: 0,
    explanation: 'Design defines functionality, user experience, and requirements in detail.',
  },
  {
    topic: 'Lifecycle',
    prompt: 'Which activity procures and allocates the required resources?',
    answers: ['Support', 'Acquire', 'Deliver', 'Design'],
    correctAnswerIndex: 1,
    explanation: 'Acquire provides resources and supplier services.',
  },
  {
    topic: 'Lifecycle',
    prompt:
      'Which activity moves new or changed products into the live environment?',
    answers: ['Build', 'Transition', 'Deliver', 'Operate'],
    correctAnswerIndex: 1,
    explanation:
      'Transition ensures a smooth move into operation.',
  },
  {
    topic: 'Lifecycle',
    prompt:
      'Which activity monitors and maintains digital products and supporting systems?',
    answers: ['Deliver', 'Support', 'Operate', 'Transition'],
    correctAnswerIndex: 2,
    explanation:
      'Operate focuses on monitoring, operation, and reliability.',
  },
  {
    topic: 'Lifecycle',
    prompt: 'Which activity helps users and minimizes the impact of incidents?',
    answers: ['Transition', 'Operate', 'Support', 'Design'],
    correctAnswerIndex: 2,
    explanation:
      'Support identifies and resolves incidents and supports recovery.',
  },
  {
    topic: 'Concepts',
    prompt: 'What is an incident?',
    answers: [
      'A relevant change of state',
      'An unplanned interruption or reduction in the quality of a service',
      'The cause of one or more incidents',
      'An error or vulnerability',
    ],
    correctAnswerIndex: 1,
    explanation:
      'An incident is an unplanned service interruption or reduction in service quality.',
  },
  {
    topic: 'Concepts',
    prompt: 'What is a problem?',
    answers: [
      'An unplanned service interruption',
      'A cause or potential cause of one or more incidents',
      'A standard service request',
      'A particularly critical incident',
    ],
    correctAnswerIndex: 1,
    explanation: 'Problem management looks for causes, not just symptoms.',
  },
  {
    topic: 'Value streams',
    prompt: 'What is the main purpose of value stream mapping?',
    answers: [
      'To automate monitoring',
      'To identify and prioritize improvement opportunities',
      'To control external stakeholders',
      'To replace SLA targets',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Mapping visualizes the flow of value and makes improvements visible.',
  },
  {
    topic: 'DevOps',
    prompt:
      'How does DevOps complement ITIL in digital product and service management?',
    answers: [
      'ITIL provides the framework, DevOps provides practical methods and techniques',
      'DevOps replaces ITIL',
      'DevOps is only relevant for coding',
      'DevOps is governance above ITIL',
    ],
    correctAnswerIndex: 0,
    explanation: 'ITIL and DevOps are complementary.',
  },
  {
    topic: 'AI',
    prompt: 'What is the main purpose of the ITIL AI Capability Model?',
    answers: [
      'To certify AI tools as a market standard',
      'To classify AI use cases and identify improvement areas',
      'To fully automate governance decisions',
      'To sort investments only by ROI',
    ],
    correctAnswerIndex: 1,
    explanation:
      'The model helps classify and communicate AI capabilities and supports governance.',
  },
  {
    topic: 'SLA',
    prompt: 'What best describes a service level agreement?',
    answers: [
      'A pure supplier contract with penalties',
      'A documented agreement between provider and customer about services and service levels',
      'An informal expectations conversation',
      'An internal IT document without a customer perspective',
    ],
    correctAnswerIndex: 1,
    explanation:
      'An SLA documents services and agreed performance levels.',
  },
];
