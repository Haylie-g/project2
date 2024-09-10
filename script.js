document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('recipe-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the values from the input fields
        const recipeName = document.getElementById('recipe-name').value || 'Delicious Recipe';
        const ingredients = document.getElementById('ingredients').value;
        const directions = document.getElementById('directions').value;

        // Display the recipe in the output area
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `
            <h3>${recipeName}</h3>
            <h4>Ingredients</h4>
            <p>${ingredients.replace(/\n/g, '<br>')}</p>
            <h4>Directions</h4>
            <p>${directions.replace(/\n/g, '<br>')}</p>
        `;

        // Clear the input fields after displaying the recipe
        document.getElementById('recipe-name').value = '';
        document.getElementById('ingredients').value = '';
        document.getElementById('directions').value = '';
    });
});