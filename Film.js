const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://raw.githubusercontent.com/GillesCLL/420-4c5-ll-bd_securite/master/Film.json';

request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType = 'json';
request.send();

request.onload= MaFonctionCallBack;

function MaFonctionCallBack(){
    const Film = this.response;     // emmagasiner les données JSON dans une variable. La réponse est envoyée  this 
    ConstruireEntete(Film);            // Appel de la fonction qui va créer un entête et un paragraphe html
    AfficherAuteur(Film);              // Appel de la fonction qui vas récupérer les éléments du tableau Vedette pour remplir notre page html
}

// Fonction pour construire l'entête de notre page    

function ConstruireEntete(jsonObj) {
    const myH1 = document.createElement('h1');  // Créer un entête élément de type h1m(l'élément est créé mais non associer a notre page pour le moment)
    myH1.textContent=jsonObj['Titre'];    // Utiliser la valeur de la propriété JSON 'Titre' retourné par le serveur pour initialiser le texte de notre entête h1
    header.appendChild(myH1);             // Assigner(associer) notre entête à l'entête de notre page HTML

    const myPara1 = document.createElement('p'); // Créer un élément de type paragraphe
    myPara1.textContent=  'Directeur: ' + jsonObj['directeur'] + ' // Auteur: ' + jsonObj['Auteur']; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
    header.appendChild(myPara1);
    const myPara2 = document.createElement('p'); // Créer un autre paragraphe pour la date
    myPara2.textContent=  'Date: ' + jsonObj['Date']; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
    header.appendChild(myPara2);
}

// Fonction pour afficher les informations sur le film

function AfficherAuteur(jsonObj) {
    const Vedette = jsonObj['Vedette']; //Emmagasiner la valeur de la propriété JSON 'Vedette' dans la varaible tableau heroes 

    // Récupérer les éléments du tableau Vedette pour remplir notre page html

    for (var i = 0; i < Vedette.length; i++) {
        const myArticle = document.createElement('article');// Pour chaque vedette, créer un article ('article'), une entête h2 ('h2'), 1 paragraphe ('p')
        const Nom = document.createElement('article'); 
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');

        myH2.textContent = Vedette[i].Nom; // Utiliser la valeur de la propriété JSON 'Nom' retourné par le serveur pour initialiser le texte de notre entête h2
        myPara1.textContent = 'Personnage: ' + Vedette[i].Personnage; // Utiliser la valeur de la propriété JSON 'Personnage' retourné par le serveur pour initialiser le paragraphe

        // Assigner(associer) l'entête myH2 et le paragraphes myPara1 à l'article myArticle

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        section.appendChild(myArticle); // Associer notre article a notre section de la page HTML
    }
}