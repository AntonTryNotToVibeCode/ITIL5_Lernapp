# Agent Guidelines

Diese Datei definiert, wie KI-Agenten in diesem Repository arbeiten sollen. Ziel ist ein wartbarer, modularer und ressourcenschonender Codebestand, der sich langfristig leicht erweitern, testen und austauschen laesst.

## Grundprinzipien

- Arbeite in kleinen, nachvollziehbaren Schritten.
- Bevorzuge einfache Loesungen vor komplexen Abstraktionen.
- Schreibe Code so, dass er von Menschen schnell verstanden und sicher geaendert werden kann.
- Halte Aenderungen eng am angefragten Feature oder Bugfix.
- Veraendere keine fachlich fremden Bereiche ohne klaren Grund.
- Nutze vorhandene Projektmuster, bevor neue Muster eingefuehrt werden.
- Vermeide unnoetige Dependencies. Jede neue Abhaengigkeit braucht einen klaren Nutzen.

## Architektur

- Programmiere nach modernen, modularen Architekturmustern.
- Trenne Verantwortlichkeiten klar:
  - UI-Komponenten enthalten moeglichst wenig Fachlogik.
  - Fachlogik gehoert in eigene Funktionen, Services oder Module.
  - Datenmodelle und Typen werden zentral und wiederverwendbar definiert.
- Module sollen austauschbar bleiben und moeglichst wenig voneinander wissen.
- Vermeide globale Seiteneffekte, versteckte Abhaengigkeiten und stark gekoppelte Strukturen.
- Bevorzuge explizite Schnittstellen gegenueber implizitem Verhalten.
- Halte Dateien klein genug, damit Zweck und Verantwortlichkeit sofort erkennbar bleiben.

## TypeScript und JavaScript

- Wenn JavaScript noetig waere, bevorzuge TypeScript.
- Neue produktive Logik soll in TypeScript geschrieben werden.
- Nutze praezise Typen statt `any`.
- Verwende `unknown` nur, wenn Daten wirklich unbekannt sind, und validiere sie vor der Nutzung.
- Typen sollen Fachkonzepte ausdruecken, nicht nur technische Datenformen.
- Vermeide ueberkomplizierte Generics, wenn einfache Typen ausreichen.

## Clean Code

- Nutze sprechende Namen fuer Variablen, Funktionen, Komponenten und Dateien.
- Funktionen sollen eine klare Aufgabe haben.
- Vermeide Duplikate, aber fuehre Abstraktionen erst ein, wenn sie wirklich vereinfachen.
- Schreibe kurze Kommentare nur dort, wo sie Kontext liefern, den der Code selbst nicht klar zeigt.
- Entferne toten Code, Debug-Ausgaben und ungenutzte Imports.
- Bevorzuge fruehe Rueckgaben gegenueber tief verschachtelten Bedingungen.
- Fehlerfaelle sollen bewusst behandelt werden.

## Dependencies

- Fuege keine neue Library hinzu, wenn die Aufgabe mit Bordmitteln oder vorhandenen Abhaengigkeiten sauber loesbar ist.
- Pruefe vor jeder neuen Dependency:
  - Ist sie aktiv gepflegt?
  - Ist sie klein genug fuer den Nutzen?
  - Passt sie zum bestehenden Tech-Stack?
  - Reduziert sie reale Komplexitaet?
- Committe `package-lock.json`, wenn sich Dependencies aendern.
- Committe niemals `node_modules/`.

## Frontend

- Baue nutzbare Oberflaechen statt reiner Demo- oder Marketing-Screens.
- Komponenten sollen wiederverwendbar, fokussiert und gut benannt sein.
- Zustand soll so lokal wie moeglich gehalten werden.
- Hebe State nur an, wenn mehrere Komponenten ihn wirklich teilen muessen.
- Achte auf responsive Layouts, lesbare Typografie und klare Bedienbarkeit.
- Vermeide visuelles Durcheinander, unnoetige Animationen und schwer wartbare Inline-Stile.

## Tests und Qualitaet

- Fuehre vorhandene Tests, Builds oder Lints aus, wenn Aenderungen das Projektverhalten betreffen.
- Wenn es noch keine Tests gibt, halte die Implementierung besonders klein und leicht pruefbar.
- Teste riskante Fachlogik bevorzugt isoliert.
- Bei UI-Aenderungen pruefe mindestens, dass die App baut und die Hauptansicht nicht bricht.
- Dokumentiere im Abschluss, was geprueft wurde und was nicht geprueft werden konnte.

## Git Workflow

- Arbeite pro Feature oder Bugfix auf einem eigenen Branch.
- Branch-Namen sollen kurz und beschreibend sein, bevorzugt mit `codex/` Prefix.
- Committe nur Dateien, die zur Aufgabe gehoeren.
- Ungetrackte oder fremde lokale Dateien duerfen nicht ungefragt mitcommittet werden.
- Push den Feature-Branch nach GitHub, wenn die Aenderung fertig ist.
- Merge nur, wenn der Benutzer es ausdruecklich sagt.

## Ressourcenschonendes Arbeiten

- Lies zuerst die relevanten Dateien, statt das ganze Projekt blind zu veraendern.
- Nutze bestehende Struktur und vorhandene Patterns.
- Bevorzuge kleine, gezielte Edits.
- Vermeide grosse Refactorings ohne direkten Nutzen fuer die Aufgabe.
- Erklaere wichtige Entscheidungen kurz, aber ohne unnoetige Laenge.
- Liefere am Ende einen knappen Status: geaendert, geprueft, offen.
