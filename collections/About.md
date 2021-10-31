---
title: Themensammlung
author: Mika Reich
description: Wie schreibe ich eine Themensammlung in Markdown und worauf muss ich achten?
date: 2020-19-09
color: blue
lang: de
---

# Themensammlung

Die Idee hinter diesem Projekt ist es, in der Schule behandelte Themen zu sammeln und dann in einer Themensammlung zu veröffentlichen. So soll wichtiger Schulstoff besser verstanden und verbreitet werden. Um eine Themensammlung zu erstellen, muss jeder Autor Dateien nach einem bestimmten Schema erstellen. Diese werden dann hochgeladen und auf dieser Website dargestellt. Diese Dateien sind öffentlich zugänglich und können von jedem bearbeitet werden.

## Wie schreibe ich eine Themensammlung?

Die Datei einer Themensammlung besteht immer aus zwei Teilen, den **Metainformationen** und dem **Inhalt**. Wird einer dieser Teile nicht vollständig oder nicht korrekt geschrieben, kann die gesamte Themensammlung eventuell nicht erstellt werden. Konkret würde eine Themensammlung-Datei wie folgt aussehen:

```Markdown
<!-- Metainformationen -->

---
title: Test
author: Max Mustermann
description: Eine Test-Themensammlung
date: 2020-09-09
lang: de
color: red
---

<!-- Inhalt -->

# Test

Lorem ipsum ...

```

### Metainformationen

Die Metainformationen sind der sensibelste Teil der Themensammlung. Werden hier wichtige Informationen ausgelassen, kann es passieren, dass die komplete Themensammlung nicht erstellt werden kann.
Deshalb ist es wichtig, auf folgende Informationen unbedingt zu achten: **Titel**, **Autor**, **Beschreibung** und **Datum**. Außerdem kann noch eine Sprache und eine gewünschte Farbe angegeben werden, in der die Themensammlung dargestellt werden soll. In der Themensammlung-Datei wird der Teil für Metainformationen mit drei Bindestrichen über und unter dem Teil gekennzeichnet. Die einzelne Information an sich besteht immer aus einem **"key"** und einem **"value"**. Betrachtet man folgendes Beispiel `title: Test`, wäre `title` der **"key"** und `Test` der **"value"**. Alle Metainformationen und deren Werte im folgenden:

| key           | value                                                                                                                                                                                                                                                                                                     | Beschreibung                    | <nobr>Erforderlich</nobr> |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | :-----------------------: |
| `title`       | Einfache Zeichenkette                                                                                                                                                                                                                                                                                     | Titel der Themensammlung        |            ✅             |
| `author`      | Einfache Zeichenkette                                                                                                                                                                                                                                                                                     | Autor der Themensammlung        |            ✅             |
| `description` | Einfache Zeichenkette                                                                                                                                                                                                                                                                                     | Beschreibung der Themensammlung |            ✅             |
| `date`        | YYYY-MM-DD                                                                                                                                                                                                                                                                                                | Veröffentlichungsdatum          |            ✅             |
| `lang`        | [ISO-Code](https://www.w3schools.com/tags/ref_country_codes.asp) (Normalerweise: "en")                                                                                                                                                                                                                    | Sprach der Themensammlung       |            ❌             |
| `color`       | <span class="text-red-500">red</span>, <span class="text-yellow-500">yellow</span>, <span class="text-green-500">green</span>, <span class="text-blue-500">blue</span>, <span class="text-indigo-500">indigo</span>, <span class="text-purple-500">purple</span>, <span class="text-pink-500">pink</span> | Sprach der Themensammlung       |            ❌             |

Ein Beispiel für einen gültigen Metainformationen-Teil:

```Markdown
---
title: Test
author: Max Mustermann
description: Eine Test-Themensammlung
date: 2020-09-09
lang: de
color: red
---
```

### Inhalt

Der wichtigste Teil der Themensammlung ist der Inhalt. Hier nutzt der Autor die Syntax von Markdown. Markdown ist eine sehr simple Art, Texte zu gestalten. Dafür gibt es nur wenige Befehle, die schnell und einfach verstanden werden können, und trotzdem eine Vielzahl an Darstellungsmöglichkeiten bieten. Um zum Beispiel ein Wort _kursiv_ zu schreiben, müssen einfach nur Unterstriche (`_`) vor und nach dem Wort eingefügt werden (`_kursiv_`). Ein weiteres Beispiel sind durchgestrichene ~Wörter~ (`~Wörter~`). Hier eine kleine Übersicht wichtiger Befehle:

| Gestalltungsmittel | Syntax                 | Beispiel                        |
| ------------------ | ---------------------- | ------------------------------- |
| kursiv             | `_Text_`               | _Text_                          |
| fett               | `__Text__`             | **Text**                        |
| durchgestrichen    | `~Text~`               | ~Text~                          |
| Link               | `[Link-Text](Adresse)` | [Link-Text](https://google.com) |

So könnte der Inhalt einer Themensammlung aussehen:

```Markdown

# Test

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Morbi quis ornare neque. Ut _feugiat_,
nulla nec [bibendum](https://google.com).

## Bla bla

Pellentesque maximus nisi sit amet felis tincidunt
efficitur non quis lectus. Quisque posuere dui
massa, a dapibus nisi sollicitudin egestas.

```
