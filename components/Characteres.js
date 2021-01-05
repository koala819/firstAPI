document.addEventListener("DOMContentLoaded", 
function(){
    
    class Characteres {
        
        constructor (characteres) {
            this.characteres = [];
        }

        rendu() {
            document.getElementById('p1').innerHTML +=
            '<div>' + this.characteres.map( character => ( +
                '<p>' + {character.name}+ '</p>' +
                 )) + '</div>'
        }
    }
    getCharacteres = () => {
        fetch ('https://miadil.github.io/starwars-api/api/all.json')
        .then(res => res.json())
        .then(res => console.log(res))
    }

    /* taile() {
            document.getElementById('p1').innerHTML +=
            'Longueur de ' + this.nom + ' : ' + this.longueur + '<br>'
            } */
    
            

    getCharacteres()
    const geo1 = new Characteres ('geo1', 10)
    const geo2 = new Characteres ('geo2', 5)
    geo1.taile()
    geo2.taile()
})