const foodForm = document.getElementById("foodForm");
const foodName = document.getElementById("foodName");
const calories = document.getElementById("calories");
const foodList = document.getElementById("foodList");
const totalCalories = document.getElementById("totalCalories");
const resetBtn = document.getElementById("resetBtn");

let foods =[];

foodForm.addEventListener("submit", addFood);
function addFood(event){
    event.preventDefault();
    const food = foodName.value;
    const calorieCount = Number(calories.value);
    foodName.value = "";
calories.value = "";

    /*console.log(food);
    console.log(calorieCount);*/

    const foodItem = {
        name: food,
        calories: calorieCount
    };
    foods.push(foodItem)
    displayFoods();
    updateCalories();
    foodName.focus();
    saveFoods();
}

function displayFoods(){
    foodList.innerHTML = "";
    foods.forEach(function(food, index){
        const listItem = document.createElement("li");
        listItem.textContent = `${food.name}: ${food.calories} calories <button onclick = "deleteFood(${index})">Delete</button>`;
        foodList.appendChild(listItem);
    })
}

function deleteFood(index){
    foods.splice(index, 1);
    displayFoods();
    updateCalories();
    saveFoods();

}



function updateCalories(){
    let total = 0;
    foods.forEach(function(food){
        total += food.calories;
       
    });
     totalCalories.textContent = total;
}

resetBtn.addEventListener("click", resetDay);
function resetDay(){
    foods = [];
    displayFoods();
    updateCalories();
    saveFoods();
}

function saveFoods(){
    localStorage.setItem("foods", JSON.stringify(foods));
}
function loadFoods(){
    const saveFoods = localStorage.getItem("foods");
    if(savedFoods){
    foods = JSON.parse(savedFoods);

    displayFoods();
    updateTotalCalories();
}
}
loadFoods();