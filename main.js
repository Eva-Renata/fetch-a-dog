const dogImg = document.getElementById('dog');
let dogsList = [];
let dogNumber = 0;
getRandomDog();

function getRandomDog(){
    fetch('https://dog.ceo/api/breeds/image/random/30')
    //parse svar som json hvis fetch bliver resolved
    // Vent på at svar parses som json
    .then(response => response.json())
    // Vent på at data logges i konsollen
    .then(data => {
        dogsList = data.message;
        const randomElement = Math.floor(Math.random() * dogsList.length);
        dogImg.src = dogsList[randomElement];
        dogNumber = randomElement;
        // const randomElement = array[Math.floor(Math.random() * array.length)];
    } )
    // Vis fejl hvis der er en
    .catch(err => console.error(err))
}

//making onclick function for the back button
function back(){
    //if the dog number is 1 or bigger *0 is not number, than 
    if(dogNumber){
        dogNumber--;   //we decrease with one
        dogImg.src = dogsList[dogNumber]; //displaying the dogimg
    }else {
        //if the image is 0
        dogNumber = dogsList.length-1; // we take the last image in array
        dogImg.src = dogsList[dogNumber];//and display it
    }
}
//function for forward button
function forward() {
    //if the picture arrived to the end of the array
    if(dogNumber == dogsList.length-1){
        dogNumber = 0; //the first picture
        dogImg.src = dogsList[0]; //than we display it
        
    } else {
        dogNumber++;//or else we are just adding one to the current number
        dogImg.src = dogsList[dogNumber]; //and we display
       
    }
}