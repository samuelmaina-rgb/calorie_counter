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
        listItem.innerHTML = `
        <div class="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
        <span>${food.name}: ${food.calories} calories</span> <button onclick = "deleteFood(${index})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
        </div>`;
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