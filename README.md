# New York Times Clone

Questo progetto è una replica della homepage del sito del New York Times, costruita utilizzando React e l'API del New York Times per ottenere le notizie. L'obiettivo è replicare la struttura e il design della homepage del NYT, mantenendo un'interfaccia utente pulita e responsiva.

## Descrizione del Progetto

Il progetto è composto da diversi componenti React, ognuno con un ruolo specifico:

### App

Il componente `App` è il componente principale che organizza la struttura della pagina e include tutti gli altri componenti. Gestisce il layout generale e l'ordine di visualizzazione dei componenti come Navbar, TopHeader, HeroBlockArticles, ecc. Contiene e organizza i principali componenti della pagina, implementando la struttura responsive per adattarsi a schermi di diverse dimensioni.

### Navbar

Il componente `Navbar` è la barra di navigazione principale del sito. Contiene il logo del sito e una serie di link che permettono la navigazione tra le diverse sezioni del sito. In modalità mobile, si trasforma in un menu hamburger per risparmiare spazio.

### TopHeader

Il componente `TopHeader` è la barra informativa in cima alla pagina. Include elementi come la data corrente, link a diverse edizioni internazionali e opzioni di accesso/abbonamento.

### Footer

Il componente `Footer` si trova alla fine della pagina e contiene informazioni utili come link a varie sezioni del sito, newsletter e informazioni legali.

### HeroBlockArticles

Il componente `HeroBlockArticles` visualizza un gruppo di articoli principali in una sezione prominente della pagina. Questo blocco è solitamente utilizzato per evidenziare le notizie più importanti. Include un articolo principale con una grande immagine e descrizione, e articoli secondari in una disposizione a griglia.

### OneArticleBlock

Il componente `OneArticleBlock` visualizza un singolo articolo con una grande immagine, titolo e descrizione. Viene utilizzato per mettere in risalto articoli individuali in diverse sezioni della pagina.

### TwoArticlesBlock

Il componente `TwoArticlesBlock` visualizza due articoli affiancati. È utile per mettere a confronto due articoli o per mostrare due notizie rilevanti in una sezione compatta.

### ThreeArticlesBlock

Il componente `ThreeArticlesBlock` visualizza tre articoli in una disposizione a griglia. È ideale per sezioni che necessitano di mostrare una serie di notizie correlate.

## Componenti di Servizio

### FetchTopStories

La funzione `fetchTopStories` è un servizio che gestisce il recupero degli articoli principali dall'API del New York Times. Effettua una chiamata all'API per ottenere gli articoli principali di una determinata sezione, gestisce gli errori che possono verificarsi durante la chiamata all'API e fornisce i dati degli articoli ai componenti che ne hanno bisogno attraverso le proprietà.

### API Service

Il servizio API centralizza le chiamate all'API del New York Times. Questo approccio semplifica la gestione delle chiamate API e facilita la manutenzione del codice. Fornisce funzioni per chiamate API specifiche come `fetchTopStories`, gestisce configurazioni comuni come la gestione delle chiavi API, e implementa meccanismi di caching e gestione degli errori per migliorare le prestazioni e l'affidabilità delle chiamate API.

## Struttura del Progetto

- **src/components/Navbar.jsx**: Contiene il componente Navbar.
- **src/components/TopHeader.jsx**: Contiene il componente TopHeader.
- **src/components/Footer.jsx**: Contiene il componente Footer.
- **src/components/HeroBlockArticles.jsx**: Contiene il componente HeroBlockArticles.
- **src/components/OneArticleBlock.jsx**: Contiene il componente OneArticleBlock.
- **src/components/TwoArticlesBlock.jsx**: Contiene il componente TwoArticlesBlock.
- **src/components/ThreeArticlesBlock.jsx**: Contiene il componente ThreeArticlesBlock.
- **src/services/api.js**: Contiene le funzioni di servizio per le chiamate all'API.

## Link Diretto
https://nytimescopy.netlify.app/


## Installazione

1. Clona il repository:
    ```sh
    git clone https://github.com/tuo-utente/nyt-clone.git
    ```

2. Installa le dipendenze:
    ```sh
    cd nyt-clone
    npm install
    ```

3. Avvia il progetto:
    ```sh
    npm start
    ```

## Utilizzo

Assicurati di avere una chiave API del New York Times. Puoi ottenere una chiave API [qui](https://developer.nytimes.com/get-started). Crea un file `.env` nella radice del progetto e aggiungi la tua chiave API:

```env
REACT_APP_NYT_API_KEY=la-tua-chiave-api
