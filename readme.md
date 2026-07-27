# Calorie Counter

## Project Overview

The Calorie Counter is a web-based application that allows users to track their daily calorie intake by adding food items and their corresponding calorie values. The application dynamically updates the list of foods consumed and calculates the total calories for the day. Users can also delete individual food items, reset the day's records, and retain their data even after refreshing the page through the use of `localStorage`.

This project was developed as a JavaScript practice project to strengthen understanding of DOM manipulation, event handling, arrays, objects, functions, local storage, and the Fetch API.

---

## Features

* Add food items with their calorie count.
* Display all foods added during the day.
* Automatically calculate the total calories consumed.
* Delete individual food items.
* Reset the entire calorie log.
* Save food data using `localStorage`.
* Reload saved data automatically when the page is refreshed.
* Demonstrate the use of the Fetch API.
* Responsive user interface built with Tailwind CSS.

---

## Technologies Used

* HTML5
* Tailwind CSS
* JavaScript (ES6)
* DOM Manipulation
* Local Storage API
* Fetch API
* Git & GitHub


### Adding Food

The user enters the food name and its calorie value into the form. When the **Add Food** button is clicked, JavaScript prevents the page from refreshing, creates a food object, stores it in an array, updates the displayed food list, recalculates the total calories, and saves the updated data to `localStorage`.

---

### Displaying Foods

Every food item stored in the array is dynamically displayed inside an unordered list (`<ul>`). The list is regenerated every time a change occurs to ensure the interface always reflects the current data.

---

### Calculating Calories

Whenever a food item is added or deleted, the application loops through the food array and calculates the total calorie intake before displaying it on the page.

---

### Deleting Food

Each food item includes a **Delete** button. Clicking it removes the selected item from the array, refreshes the displayed list, updates the calorie total, and saves the changes.

---

### Resetting the Day

The **Reset Day** button clears all food records, resets the total calorie count to zero, updates the interface, and removes the saved data from local storage.

---

### Data Persistence

The application uses the browser's `localStorage` to save food records. When the page is opened again, previously saved food items are automatically loaded and displayed.

---

## JavaScript Concepts Demonstrated

* Variables and Constants
* Arrays
* Objects
* Functions
* Event Listeners
* DOM Manipulation
* Array Methods (`push()`, `forEach()`, `splice()`)
* Template Literals
* Local Storage
* JSON (`JSON.stringify()` and `JSON.parse()`)
* Fetch API
* Dynamic Element Creation

---

## Installation

1. Clone the repository.

```bash
git clone https://github.com/your-username/calorie-counter.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

Alternatively, use the VS Code Live Server extension.

---

## Future Improvements

* Search food items.
* Edit existing food entries.
* Add food categories.
* Display calorie statistics using charts.
* Connect to a real nutrition API for automatic calorie lookup.
* Add daily calorie goals with progress tracking.
* Improve mobile responsiveness and accessibility.

---

## Learning Outcomes

Through this project, I gained practical experience in:

* Building interactive web applications with JavaScript.
* Manipulating the DOM dynamically.
* Working with arrays and objects.
* Handling user input using forms and event listeners.
* Persisting data with local storage.
* Using the Fetch API to retrieve external data.
* Structuring JavaScript into reusable functions.
* Debugging common JavaScript errors.

---

## Author

Developed by SAMUEL MAINA as part of a JavaScript learning project.
