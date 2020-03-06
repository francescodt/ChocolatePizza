function german() {
    alert('Kein Teilen erlaubt!');
}

function goDark() {
    var whatColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--first-color');
        console.log(whatColor);
    
    if (whatColor === '#transparent') {
            document.documentElement.style
          .setProperty('--first-color', 'black');
            document.documentElement.style
            .setProperty('--second-color', 'white');
        } else {
            document.documentElement.style
            .setProperty('--first-color', '#transparent');
            document.documentElement.style
            .setProperty('--second-color', 'black');
        }   
    }

    function switchPic() {
        pictureNode = document.getElementById('chocolatePizza');
        pictureNode.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dr._Oetker_Chocolate_pizza_%28Ristorante_-_2017_assortment%29_02.jpg/800px-Dr._Oetker_Chocolate_pizza_%28Ristorante_-_2017_assortment%29_02.jpg')
    }
    