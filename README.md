# 🦍 React TS intro

En introduktionsuppgift där du kommer lära dig att bygga ett projekt med Vites React template samt hur du använder JSX, components och state för att bygga effektiva och lättlästa webbapplikationer.

**Denna uppgift är en del i en serie uppgifter som går ut på att bygga din första React-app i TypeScript**

(Du behöver inte göra en fork eller klon av denna repo då ditt React-projekt kommer skapas i en separat mapp.)

## 🎯 Delmål

## 👷 1. Bestäm vad du ska bygga

- [ ] **Genomförd**

### Försök att designa utifrån mobile first-approachen

Du har fria händer men försök hålla det till en småskalig app där du åtminstone kan bygga en MVP (Minimum viable product) inom loppet av två veckor. Använd dig av sidor som [dribbble](https://dribbble.com/) för att hitta mock-ups och idéer för hur UI:t ska se ut.

### ‼️ Förslag

### Todo-lista

En klassiker av en anledning. Det är ett utmärkt sätt att bekanta sig med React och få övning i webbutveckling i allmänhet. Den kan också byggas vidare med möjlighet att lägga till egna todos, implementera drag & drop-funktionalitet m.m.

[Designexempel](https://dribbble.com/shots/26627635-Simple-To-Do-List-Mobile-App)

### Quiz-app

Ett tillfälle att öva på både på statehantering och objektmetoder. Börja smått med ett par kategorier av frågor där spelaren kryssar i ett av flera svarsalternativ. Bygg sedan vidare med fritext, multiple choice, tidsbegränsningar per fråga, versus mode etc.

[Designexempel](https://dribbble.com/shots/19036723-Quiz-mobile-app-concept)

### Scorekeeper/Leaderboard

En bra introduktion till statehantering om du bygger in filtreringsfunktionalitet eller möjlighet till att uppdatera poäng/plats på leaderboarden.

[Designexempel](https://dribbble.com/shots/26823365-Mobile-App-Interface-Leaderboard-and-Performance)
[Designexempel](https://dribbble.com/shots/15399499-A-Sample-UI-For-A-Leaderboard)

### Visuell roman/Choose your own adventure

För den som vill skapa något mer spel- eller underhållningsrelaterat. Statehantering kommer att krävas för att hålla koll på användarens val. Alla visuella assets går altid att AI-generera om man inte har tillgång till sådana.

[Designexempel](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQr1KKWjziEklah-D_TbC7bLGQ-mPZ04M2F3QXfdHj01YOw_COosd2BoLHDrUEbD6MjYn5XHB9iZivb5fBOB-oV_6fAWy1CBcrWY6AxnkScrIMXTACapgcxWGnWvFKS-7x7aoOKHURxewhRuiwASQS568rMnFZre-M1WMY7Mi7_h3e4xy7bmQFZRsbQw/s1280/3.jpg)

## 2. 👩‍🔬 Tekniska förberedelser

- [ ] **Genomförd**

1. Öppna terminalen
2. Öppna en mapp (T.ex. om du har en som heter "repos", "uppgifter" eller liknande) som du vill spara projektet i

   **NPM-kommandot nedan kommer skapa en ny mapp med namnet på din React-app. Undvik att ha identiska mappar i varandra - Exempelvis `user/to-do-app-react/to-do-app-react`**

3. Använd följande skript men byt ut "my-react-app"-delen till vad ditt projekt faktiskt ska heta `npm create vite@latest my-react-app -- --template react-ts`

   **Om du just skapade en mapp som heter "my-react-app" har du gjort fel. Gör om och läs extra noga.**

4. Öppna mappen och inspektera `.tsx`-filerna i `src`
   - Mycket borde vara bekant från Vite templates för vanilla JavaScript och TypeScript, men syntaxen skiljer sig avsevärt. Använd [Reacts dokumentation](http://react.dev/learn/javascript-in-jsx-with-curly-braces) för extra vägledning.
5. Nu har du allt du behöver för att påbörja ditt första React-projekt! 🎉

## 3. Bestäm vilka dependencies som ska användas

- [ ] **Genomförd**

Bestäm om du ska använda TailWind eller vanlig CSS, om du ska bygga alla UI-element själv eller prova på bilbiotek som [Radix UI](https://www.radix-ui.com/) eller [Base UI](https://base-ui.com/) etc. innan du börjar bygga. Det går såklart att lägga till och justera saker under arbetets gång, men försök alltid att vara konsekvent i ditt arbetssätt. Utnyttja Reacts enorma ekosystem av populära bibliotek för att kunna åstadkomma mer med mindre jobb.

## 4. Skapa en mapp- och filstruktur

- [ ] **Genomförd**

Separera components, views och pages. Eftersom allt i slutändan består av JavaScript-funktioner behöver du inte separera dynamiska och statiska filer, även om vissa filer kommer sakna eget state.

(Den här delen är inte kritisk. Du skulle kunna börja med att bygga allt i `App.tsx` och sen bryta ut saker när du märker att filen börjar bli lång och rörig.)

## 5. Använd `useState`

- [ ] **Genomförd**

Bekanta dig med `useState` och andra React hooks som kan tänkas behövas i ditt projekt. "State" är ett essentiellt koncept inom frontendutveckling eftersom det är det som omvandlar en statisk webbsida till en interaktiv webbapplikation. State-variabler används i alla sammanhang där en komponent måste renderas om baserat på användarinteraktion. Varje gång värdet i en state-variabel uppdateras renderas komponenten den ligger i om.
