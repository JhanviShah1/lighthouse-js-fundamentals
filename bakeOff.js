/*We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.*/


const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  var item = '';
  for(let i=0;i<bakeryA.length;i++){
    for(let j=0;j<bakeryB.length; j++){
      for(let r=0; r<recipes.length;r++){
        // console.log(bakeryA[i], bakeryB[j]);
        if(bakeryA[i]===recipes[r].ingredients[0] || bakeryA[i]===recipes[r].ingredients[1]){
          if(bakeryB[j]===recipes[r].ingredients[0] || bakeryB[j]===recipes[r].ingredients[1]){
            item+=recipes[r].name;
          }
        }    
      }
    }
  }
  return item;  
};
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];
console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

