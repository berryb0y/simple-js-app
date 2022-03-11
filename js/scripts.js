// height - meters
// weight - pounds

let pokemonRepository = (function (){
let pokemonList = [
    {name: "Bulbasaur",
    number: "001",
    height: "0.7",
    weight: "15.2", 
    type: ["grass", "poison"]},
    
    {name: "Charmander",
    number: "004",
    height: "0.6",
    weight: "18.7",
    type: "fire"},
   
    {name: "Charizard",
    number: "006",
    height: "1.7",
    weight: "199.5",
    type: "water"},
   
    {name: "Squirtle",
    number: "007",
    height: "0.6",
    weight: "19.8",
    type: "water"}];


    function add(pokemon){
        pokemonList.push(pokemon);
    }

    function getAll(){
        return pokemonList;
    }

    return{
        add: add,
        getAll: getAll
    };
})();




pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height > 1.5){
        document.write(pokemon.name + " " + pokemon.height + "m " + " This is a big pokemon!! <br/>")
    }
    else if (pokemon.height > 0.5 && pokemon.height < 1.5){
            document.write(pokemon.name + " " + pokemon.height + "m <br/>")
    }
    else {
        document.write(pokemon.name + " " + pokemon.height + "m <br/>")};
});










// let pokemonList1 = {
//     name: "Bulbasaur",
//     number: "001",
//     height: "0.7",
//     weight: "15.2", 
//     type: ["grass", "poison"]
// };

// Object.keys(pokemonList1.forEach(function(property) {
//     document.write(pokemonList1[property]);
// });

// function printArrayDetails(list){
//     for (let i = 0; i < list.length; i++){
//         if (list[i].height > 1.5){
//         document.write(list[i].name + " " + list[i].height + "m " + " This is a big pokemon!! <br/>")
//         }else if (list[i].height > 0.5 && list[i].height < 1.5){
//         document.write(list[i].name + " " + list[i].height + "m <br/>")
//          }else {document.write(list[i].name + " " + list[i].height + "m <br/>")};
//     }
// }   
// printArrayDetails(pokemonList);


