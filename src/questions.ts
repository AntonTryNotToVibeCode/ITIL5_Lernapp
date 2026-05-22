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
  {
    topic: 'Service concepts',
    prompt: 'What are goods in ITIL?',
    answers: [
      'Actions performed by a service provider',
      'Ownership of an object transferred or provided to a consumer',
      'A service that relies on digital products',
      'A set of metrics for service quality',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Goods are associated with ownership of objects, such as a notebook or other tangible item.',
  },
  {
    topic: 'Service concepts',
    prompt: 'What best describes a product?',
    answers: [
      'A combination of resources configured to offer value to consumers',
      'Only a technical system used by internal teams',
      'A contract between a provider and a supplier',
      'A single activity performed by a support team',
    ],
    correctAnswerIndex: 0,
    explanation:
      'A product combines resources in a way that is designed to offer value to consumers.',
  },
  {
    topic: 'Service concepts',
    prompt: 'What best describes a service?',
    answers: [
      'A means of enabling value co-creation by facilitating outcomes',
      'A physical item whose ownership is transferred',
      'A list of internal IT tasks',
      'A governance body that directs an organization',
    ],
    correctAnswerIndex: 0,
    explanation:
      'A service enables value co-creation by helping consumers achieve desired outcomes.',
  },
  {
    topic: 'Digital products',
    prompt: 'What is a digital product?',
    answers: [
      'A formal description of one or more services designed for consumer needs',
      "Access to a provider's resources under agreed conditions",
      "A combination of an organization's resources based on digital technology and designed to offer value",
      'Actions performed by a service provider or jointly with a consumer',
    ],
    correctAnswerIndex: 2,
    explanation:
      'A digital product combines organizational resources based on digital technology to offer value to consumers.',
  },
  {
    topic: 'Digital services',
    prompt: 'What is a digital service?',
    answers: [
      'A service that fully or largely relies on digital products',
      'A combination of technology resources without a consumer outcome',
      'The transfer of goods from provider to consumer',
      'A catalogue of services for consumers',
    ],
    correctAnswerIndex: 0,
    explanation:
      'A digital service depends fully or largely on digital products.',
  },
  {
    topic: 'Service offerings',
    prompt: 'What is a service offering?',
    answers: [
      'An informal conversation about consumer expectations',
      'A formal description of one or more services designed for a target consumer group',
      'A governing body for product and service management',
      'A recurring activity used to improve internal policies',
    ],
    correctAnswerIndex: 1,
    explanation:
      'A service offering formally describes one or more services that address the needs of a target consumer group.',
  },
  {
    topic: 'Outcomes and outputs',
    prompt: 'What is the difference between an output and an outcome?',
    answers: [
      'An output is a result for a stakeholder, while an outcome is a deliverable',
      'An output is a tangible or intangible deliverable, while an outcome is a result enabled by outputs',
      'Outputs only exist in governance, while outcomes only exist in support',
      'There is no difference in ITIL',
    ],
    correctAnswerIndex: 1,
    explanation:
      'An output is a deliverable of an activity; an outcome is a result for a stakeholder enabled by one or more outputs.',
  },
  {
    topic: 'Risk and value',
    prompt: 'What is risk?',
    answers: [
      'A guaranteed negative result',
      'A possible event that could cause harm, loss, or make objectives harder to achieve',
      'The perceived benefits and usefulness of something',
      'A service level metric that measures availability only',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Risk is a possible event that could cause harm or loss, or make it more difficult to achieve objectives.',
  },
  {
    topic: 'Risk and value',
    prompt: 'What best describes value?',
    answers: [
      'The perceived benefits, usefulness, and importance of something',
      'The amount of money a provider invests in technology',
      'The number of services in a catalogue',
      'The operational cost of a provider team',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Value is based on perceived benefits, usefulness, and importance.',
  },
  {
    topic: 'Value co-creation',
    prompt: 'What is value co-creation?',
    answers: [
      'A provider creating value without consumer involvement',
      'A collaborative stakeholder process using products and services to achieve desired outcomes',
      'A financial method for reducing supplier costs',
      'A governance activity for monitoring compliance',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Value co-creation happens when stakeholders collaborate through products and services to achieve desired outcomes.',
  },
  {
    topic: 'Service relationships',
    prompt: 'What is an organization in ITIL?',
    answers: [
      'A person or group with its own functions, responsibilities, authorities, and relationships',
      'Only a commercial service provider',
      'A technical system used to automate workflows',
      'A set of service metrics defined in an SLA',
    ],
    correctAnswerIndex: 0,
    explanation:
      'An organization can be a person or group that has its own functions, responsibilities, authorities, and relationships.',
  },
  {
    topic: 'Service relationships',
    prompt: 'Which role authorizes the budget for service consumption?',
    answers: ['User', 'Customer', 'Sponsor', 'Service provider'],
    correctAnswerIndex: 2,
    explanation:
      'The sponsor is the role that authorizes budget for service consumption.',
  },
  {
    topic: 'Service relationships',
    prompt: 'Which role defines requirements and takes responsibility for outcomes of service consumption?',
    answers: ['User', 'Customer', 'Sponsor', 'Vendor'],
    correctAnswerIndex: 1,
    explanation:
      'The customer defines requirements for products and services and takes responsibility for outcomes.',
  },
  {
    topic: 'Service relationships',
    prompt: 'Which role uses the service?',
    answers: ['Sponsor', 'Customer', 'User', 'Governing body'],
    correctAnswerIndex: 2,
    explanation:
      'The user is the role that uses the service.',
  },
  {
    topic: 'Service relationships',
    prompt: 'Which type of service relationship typically focuses on support and efficiency?',
    answers: [
      'Basic relationship',
      'Cooperative relationship',
      'Collaborative relationship',
      'Partner relationship',
    ],
    correctAnswerIndex: 0,
    explanation:
      'A basic relationship often focuses on support and efficiency, such as commercial off-the-shelf services.',
  },
  {
    topic: 'Service relationships',
    prompt: 'Which type of service relationship typically focuses on improvement and effectiveness?',
    answers: [
      'Basic relationship',
      'Cooperative relationship',
      'Collaborative relationship',
      'Vendor relationship',
    ],
    correctAnswerIndex: 1,
    explanation:
      'A cooperative relationship usually focuses on improvement and effectiveness, often with more advanced SLAs.',
  },
  {
    topic: 'Service relationships',
    prompt: 'Which type of service relationship typically focuses on innovation and growth?',
    answers: [
      'Basic relationship',
      'Cooperative relationship',
      'Collaborative relationship',
      'Commodity relationship',
    ],
    correctAnswerIndex: 2,
    explanation:
      'A collaborative relationship focuses on innovation and growth, often through bespoke or outcome-based agreements.',
  },
  {
    topic: 'Service journey',
    prompt: 'What is a service journey?',
    answers: [
      'The sum of activities and interactions performed by organizations in service relationships',
      'A list of all support tickets for one user',
      'A provider-only view of internal process steps',
      'A release plan for a digital product',
    ],
    correctAnswerIndex: 0,
    explanation:
      'A service journey covers the activities and interactions performed by organizations engaged in service relationships.',
  },
  {
    topic: 'Service relationships',
    prompt: 'What is the band of visibility?',
    answers: [
      'Only the provider activities visible to the consumer',
      'Only the consumer activities visible to the provider',
      'The aspects visible between provider and consumer organizations',
      'The complete path of the customer service journey',
    ],
    correctAnswerIndex: 2,
    explanation:
      'The band of visibility represents the aspects visible between provider and consumer organizations.',
  },
  {
    topic: 'Service quality',
    prompt: 'What is service quality?',
    answers: [
      'The total number of services in a catalogue',
      'The sum of service characteristics relevant to satisfying stated and implied needs',
      'A budget approved by the sponsor',
      'A provider-only measure of technical uptime',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Service quality is based on the characteristics relevant to satisfying stated and implied needs.',
  },
  {
    topic: 'Service quality',
    prompt: 'What is a service level?',
    answers: [
      'A set of metrics that define expected or achieved service quality',
      'A list of all products owned by a customer',
      'A single support action performed by a provider',
      'A type of collaborative service relationship',
    ],
    correctAnswerIndex: 0,
    explanation:
      'A service level is defined through metrics that describe expected or achieved service quality.',
  },
  {
    topic: 'Service quality',
    prompt: 'What does utility describe?',
    answers: [
      'The assurance that requirements will be met',
      'The functionality offered by a product or service to meet a need',
      'The environmental responsibility of a service',
      'The documented agreement between provider and customer',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Utility describes what the service does; it means the service is fit for purpose.',
  },
  {
    topic: 'Service quality',
    prompt: 'What does warranty describe?',
    answers: [
      'The functionality offered to meet a practical need',
      'The assurance that a product or service will meet agreed requirements',
      'The total number of service requests fulfilled',
      'The ownership of a physical object',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Warranty describes assurance that agreed requirements will be met; it means the service is fit for use.',
  },
  {
    topic: 'ITIL Value System',
    prompt: 'What is the purpose of the ITIL Value System?',
    answers: [
      'To ensure organizations continually create value with stakeholders through products and services',
      'To replace governance with automated AI decisions',
      'To define only the technical architecture of digital products',
      'To document supplier contracts and penalties',
    ],
    correctAnswerIndex: 0,
    explanation:
      'The ITIL Value System explains how organizations continually create value with stakeholders through products and services.',
  },
  {
    topic: 'ITIL Value System',
    prompt: 'Which set correctly lists components of the ITIL Value System?',
    answers: [
      'Value streams, projects, releases, incidents, changes',
      'Guiding principles, governance, value chain, management practices, continual improvement',
      'Products, services, customers, suppliers, partners',
      'Discover, build, transition, operate, support',
    ],
    correctAnswerIndex: 1,
    explanation:
      'The ITIL Value System includes guiding principles, governance, the value chain, management practices, and continual improvement.',
  },
  {
    topic: 'ITIL Value System',
    prompt: 'What are management practices?',
    answers: [
      'Universal recommendations for decisions and actions',
      'A set of organizational capabilities designed for accomplishing objectives',
      'Only operational procedures for incident handling',
      'A list of supplier contracts used by governance',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Management practices are organizational capabilities designed to perform work or accomplish objectives.',
  },
  {
    topic: 'Continual improvement',
    prompt: 'What is continual improvement?',
    answers: [
      'A recurring activity to ensure the organization meets stakeholder expectations',
      'A one-time transition into live operation',
      'A service action performed only by users',
      'A metric that defines expected service quality',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Continual improvement is recurring work used to help meet stakeholder expectations.',
  },
  {
    topic: 'Governance',
    prompt: 'What best describes governance?',
    answers: [
      'The system by which an organization is directed and controlled',
      'The daily operation of a service desk',
      'A collection of training materials for users',
      'A digital product based on provider resources',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Governance is the system by which an organization is directed and controlled.',
  },
  {
    topic: 'Governance',
    prompt: 'What is the role of a governing body?',
    answers: [
      'It is accountable for performance and compliance at the highest level',
      'It handles all day-to-day support requests',
      'It directly manages every technical detail of digital products',
      'It focuses only on financial reporting',
    ],
    correctAnswerIndex: 0,
    explanation:
      'A governing body is accountable for performance and compliance at the highest level.',
  },
  {
    topic: 'Governance',
    prompt: 'What happens during the governance activity direct?',
    answers: [
      'Policies and strategies are established and modified',
      'Incidents are diagnosed and resolved',
      'Service catalogues are deleted',
      'Outputs are converted into physical goods',
    ],
    correctAnswerIndex: 0,
    explanation:
      'During direct, policies and strategies are established and modified.',
  },
  {
    topic: 'Guiding principles',
    prompt: 'What are the ITIL guiding principles?',
    answers: [
      'Universal recommendations that guide decisions and actions in all circumstances',
      'A list of mandatory technical standards',
      'A catalogue of service requests',
      'Supplier contracts used for financial penalties',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Guiding principles are universal recommendations that can guide organizations regardless of goals, strategy, work, or structure.',
  },
  {
    topic: 'Guiding principles',
    prompt: 'Which option is one of the seven ITIL guiding principles?',
    answers: [
      'Focus on value',
      'Maximize governance paperwork',
      'Avoid stakeholder visibility',
      'Automate before optimizing',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Focus on value is one of the seven ITIL guiding principles.',
  },
  {
    topic: 'Guiding principles',
    prompt: 'What is the core idea of keep it simple and practical?',
    answers: [
      'Minimize the number of steps needed to achieve an objective',
      'Add as many controls as possible',
      'Document every possible edge case before acting',
      'Avoid eliminating low-value activities',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Keep it simple and practical means minimizing steps and eliminating anything that does not increase value or produce a useful outcome.',
  },
  {
    topic: 'Operating model',
    prompt: 'What does an operating model describe?',
    answers: [
      'How an organization co-creates value and how it runs itself',
      'Only the technical deployment process of a product',
      'The ownership transfer of goods',
      'A set of metrics for expected service quality',
    ],
    correctAnswerIndex: 0,
    explanation:
      'An operating model represents how an organization co-creates value with stakeholders and how it operates internally.',
  },
];
