import type { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    topic: 'Service concepts',
    prompt:
      'Ein Mitarbeiter bekommt Nutzungsrechte fuer eine interne Filesharing-Plattform. Welches Konzept passt am besten?',
    answers: ['Warranty', 'Goods', 'Utility', 'Access to resources'],
    correctAnswerIndex: 3,
    explanation:
      'Access to resources bedeutet, dass Konsumenten Provider-Ressourcen unter vereinbarten Bedingungen nutzen.',
  },
  {
    topic: 'Service concepts',
    prompt: 'Ein Support Engineer hilft einem User bei der Laptop-Konfiguration. Was ist das?',
    answers: ['Transfer of goods', 'Service action', 'Sustainability', 'Access to resources'],
    correctAnswerIndex: 1,
    explanation: 'Die Unterstuetzung ist eine Service action, also eine Handlung des Providers.',
  },
  {
    topic: 'Value',
    prompt: 'Wann wird ein Service vom Konsumenten als wertvoll wahrgenommen?',
    answers: [
      'Wenn Providerkosten minimal sind',
      'Wenn viele Provider beteiligt sind',
      'Wenn positive Effekte negative Effekte ueberwiegen',
      'Wenn viel in Ressourcen investiert wird',
    ],
    correctAnswerIndex: 2,
    explanation:
      'Value ist subjektiv und entsteht durch Nutzen, Outcomes sowie optimierte Kosten und Risiken.',
  },
  {
    topic: 'Sustainability',
    prompt:
      'Recycling, reduzierte Emissionen und transparente Lieferketten stehen vor allem fuer welches Konzept?',
    answers: ['Utility', 'Warranty', 'User experience', 'Sustainability'],
    correctAnswerIndex: 3,
    explanation:
      'Sustainability umfasst Umwelt, soziale Verantwortung und wirtschaftliche Nachhaltigkeit.',
  },
  {
    topic: 'Four dimensions',
    prompt: 'Welche Dimension betrifft Rollen, Kultur, Kompetenzen und Kommunikation?',
    answers: [
      'Partners and suppliers',
      'Value streams and processes',
      'Information and technology',
      'Organizations and people',
    ],
    correctAnswerIndex: 3,
    explanation:
      'Organizations and people betrachtet Struktur, Kultur, Skills und Verantwortlichkeiten.',
  },
  {
    topic: 'Four dimensions',
    prompt: 'Welche Dimension behandelt Workflows und Aktivitaeten ueber Organisationsgrenzen hinweg?',
    answers: [
      'Partners and suppliers',
      'Information and technology',
      'Organizations and people',
      'Value streams and processes',
    ],
    correctAnswerIndex: 3,
    explanation:
      'Value streams and processes zeigt, wie Arbeit organisiert wird, um Wert zu erzeugen.',
  },
  {
    topic: 'Guiding principles',
    prompt: 'Was sagt Focus on value im Kern?',
    answers: [
      'Alles auf Wert fuer Organisation, Kunden und Stakeholder ausrichten',
      'Nur Umsatz steigern',
      'Nur Mitarbeiterzufriedenheit messen',
      'Marktanteile maximieren',
    ],
    correctAnswerIndex: 0,
    explanation: 'Alle Aktivitaeten sollten direkt oder indirekt auf Value einzahlen.',
  },
  {
    topic: 'Guiding principles',
    prompt: 'Warum ist Start where you are wichtig?',
    answers: [
      'Damit man nie automatisiert',
      'Damit man immer neu startet',
      'Damit vorhandene Faehigkeiten und Ressourcen nicht verschwendet werden',
      'Damit Feedback vermieden wird',
    ],
    correctAnswerIndex: 2,
    explanation:
      'Bestehendes soll bewertet und genutzt werden, bevor man neu baut.',
  },
  {
    topic: 'Guiding principles',
    prompt: 'Was ist bei Optimize and automate die richtige Reihenfolge?',
    answers: [
      'Erst automatisieren, dann optimieren',
      'Erst optimieren, dann automatisieren',
      'Alles sofort automatisieren',
      'Menschen komplett ersetzen',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Ineffiziente Prozesse zu automatisieren vergroessert oft nur das Problem.',
  },
  {
    topic: 'Governance',
    prompt:
      'Welche Governance-Aktivitaet prueft, ob Leistung und Verhalten zur Strategie und zu Policies passen?',
    answers: ['Evaluate', 'Direct', 'Monitor', 'Discover'],
    correctAnswerIndex: 2,
    explanation:
      'Monitor ueberwacht Performance und Compliance mit strategischer Richtung.',
  },
  {
    topic: 'Lifecycle',
    prompt:
      'Welche Aktivitaet richtet Produktfaehigkeiten an Konsumentenbedarfen und Strategie aus?',
    answers: ['Discover', 'Build', 'Operate', 'Support'],
    correctAnswerIndex: 0,
    explanation:
      'Discover identifiziert und priorisiert Bedarfe, Chancen und strategischen Fit.',
  },
  {
    topic: 'Lifecycle',
    prompt: 'Welche Aktivitaet erstellt Prototypen und Spezifikationen?',
    answers: ['Design', 'Deliver', 'Support', 'Transition'],
    correctAnswerIndex: 0,
    explanation: 'Design konkretisiert Funktionalitaet, UX und Anforderungen.',
  },
  {
    topic: 'Lifecycle',
    prompt: 'Welche Aktivitaet beschafft und alloziert benoetigte Ressourcen?',
    answers: ['Support', 'Acquire', 'Deliver', 'Design'],
    correctAnswerIndex: 1,
    explanation: 'Acquire stellt Ressourcen und Supplier-Leistungen bereit.',
  },
  {
    topic: 'Lifecycle',
    prompt:
      'Welche Aktivitaet bringt neue oder geaenderte Produkte in die Live-Umgebung?',
    answers: ['Build', 'Transition', 'Deliver', 'Operate'],
    correctAnswerIndex: 1,
    explanation:
      'Transition sorgt fuer den reibungslosen Uebergang in den Betrieb.',
  },
  {
    topic: 'Lifecycle',
    prompt:
      'Welche Aktivitaet ueberwacht und erhaelt digitale Produkte und unterstuetzende Systeme?',
    answers: ['Deliver', 'Support', 'Operate', 'Transition'],
    correctAnswerIndex: 2,
    explanation:
      'Operate fokussiert Monitoring, Betrieb und Zuverlaessigkeit.',
  },
  {
    topic: 'Lifecycle',
    prompt: 'Welche Aktivitaet hilft Usern und minimiert Auswirkungen von Incidents?',
    answers: ['Transition', 'Operate', 'Support', 'Design'],
    correctAnswerIndex: 2,
    explanation:
      'Support identifiziert und loest Incidents und unterstuetzt Recovery.',
  },
  {
    topic: 'Concepts',
    prompt: 'Was ist ein Incident?',
    answers: [
      'Eine relevante Zustandsaenderung',
      'Ungeplante Unterbrechung oder Qualitaetsminderung eines Service',
      'Ursache eines oder mehrerer Incidents',
      'Ein Fehler oder eine Schwachstelle',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Ein Incident ist eine ungeplante Service-Unterbrechung oder Qualitaetsreduzierung.',
  },
  {
    topic: 'Concepts',
    prompt: 'Was ist ein Problem?',
    answers: [
      'Ungeplante Serviceunterbrechung',
      'Ursache oder potenzielle Ursache eines oder mehrerer Incidents',
      'Standard-Serviceanfrage',
      'Ein besonders kritischer Incident',
    ],
    correctAnswerIndex: 1,
    explanation: 'Problem Management sucht Ursachen, nicht nur Symptome.',
  },
  {
    topic: 'Value streams',
    prompt: 'Was ist der Hauptzweck von Value Stream Mapping?',
    answers: [
      'Monitoring automatisieren',
      'Verbesserungsmoeglichkeiten erkennen und priorisieren',
      'Externe Stakeholder kontrollieren',
      'SLA-Ziele ersetzen',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Mapping visualisiert den Wertfluss und macht Verbesserungen sichtbar.',
  },
  {
    topic: 'DevOps',
    prompt:
      'Wie ergaenzt DevOps ITIL im digitalen Produkt- und Servicemanagement?',
    answers: [
      'ITIL liefert den Rahmen, DevOps praktische Methoden und Techniken',
      'DevOps ersetzt ITIL',
      'DevOps ist nur fuer Coding relevant',
      'DevOps ist Governance ueber ITIL',
    ],
    correctAnswerIndex: 0,
    explanation: 'ITIL und DevOps sind komplementaer.',
  },
  {
    topic: 'AI',
    prompt: 'Wozu dient das ITIL AI Capability Model vor allem?',
    answers: [
      'AI-Tools als Marktstandard zertifizieren',
      'AI-Einsatzmoeglichkeiten einordnen und Verbesserungsfelder erkennen',
      'Governance-Entscheidungen voll automatisieren',
      'Investitionen nur nach ROI sortieren',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Das Modell hilft, AI-Funktionen zu klassifizieren, zu kommunizieren und Governance zu unterstuetzen.',
  },
  {
    topic: 'SLA',
    prompt: 'Was beschreibt ein Service Level Agreement am besten?',
    answers: [
      'Reiner Lieferantenvertrag mit Strafen',
      'Dokumentierte Vereinbarung zwischen Provider und Kunde zu Services und Service Levels',
      'Informelles Erwartungsgespraech',
      'Internes IT-Dokument ohne Kundensicht',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Ein SLA dokumentiert Services und vereinbarte Leistungsniveaus.',
  },
];
