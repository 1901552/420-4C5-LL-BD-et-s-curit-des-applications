let requestURL = 'https://raw.githubusercontent.com/1901552/420-4C5-LL-BD-et-s-curit-des-applications/master/Film.json';

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
    const Films = jsonObj['Films'];
    
    for (var i = 0; i < Films.length; i++) {
        var section = document.createElement('section');
        section.id = 'section' + i;
        document.body.appendChild(section);

        for (var j = 0; j < 2; j++){
            var div = document.createElement('div');

            if (j == 0) {
                div.className = 'topdiv';
            } else {
                div.className = 'downdiv';
            }

            document.getElementById('section' + i).appendChild(div)
        }

        var topdiv = document.getElementById('section' + i).firstChild;

        // var header = document.getElementsByTagName('HEADER')[i];

        const myH1 = document.createElement('h1');  // Créer un entête élément de type h1m(l'élément est créé mais non associer a notre page pour le moment)
        myH1.textContent = Films[i].Titre;    // Utiliser la valeur de la propriété JSON 'Titre' retourné par le serveur pour initialiser le texte de notre entête h1
        topdiv.appendChild(myH1);             // Assigner(associer) notre entête à l'entête de notre page HTML
    
        const myPara1 = document.createElement('p'); // Créer un élément de type paragraphe
        myPara1.textContent=  'Directeur: ' + Films[i].directeur + ' // Auteur: ' + Films[i].Auteur; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
        topdiv.appendChild(myPara1);
    
        const myPara2 = document.createElement('p'); // Créer un autre paragraphe pour la date
        myPara2.textContent=  'Date: ' + Films[i].Date; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
        topdiv.appendChild(myPara2);
    }
}

// Fonction pour afficher les informations sur le film

function AfficherAuteur(jsonObj) {
    const Films = jsonObj['Films'];

    for (var j = 0; j < Films.length; j++) {
        // var section = document.getElementsByTagName('SECTION')[j];

        var downdiv = document.getElementById('section' + j).lastChild;

        const Vedette = Films[j].Vedette; //Emmagasiner la valeur de la propriété JSON 'Vedette' dans la varaible tableau heroes 
        
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
            downdiv.appendChild(myArticle); // Associer notre article a notre section de la page HTML
            
        }
    }
}