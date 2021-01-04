document.addEventListener("DOMContentLoaded", 
function(){
    /* document.body.onload = addElement;

    function addElement () {
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode('Hi there and greetings!');
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);

    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
    } */

    class Ligne {
        constructor (nom, longueur) {
            this.nom = nom;
            this.longueur = longueur;
        }
        taile() {
            document.getElementById('p1').innerHTML +=
            'Longueur de ' + this.nom + ' : ' + this.longueur + '<br>'
            }
    }
    const geo1 = new Ligne ('geo1', 10)
    const geo2 = new Ligne ('geo2', 5)
    geo1.taile()
    geo2.taile()
})