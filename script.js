document.addEventListener('DOMContentLoaded', () => {
    const recipeGrid = document.getElementById('recipeGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');

    // Display recipes
    function displayRecipes(filteredRecipes = recipes) {
        recipeGrid.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                <div class="recipe-info">
                    <h3 class="recipe-title">${recipe.name}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                </div>
            `;
            card.addEventListener('click', () => showRecipeDetails(recipe));
            recipeGrid.appendChild(card);
        });
    }

    // Show recipe details in modal
    function showRecipeDetails(recipe) {
        modalContent.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}" style="max-width: 100%; height: auto;">
            <p><strong>Preparation Time:</strong> ${recipe.prepTime}</p>
            <p><strong>Cooking Time:</strong> ${recipe.cookTime}</p>
            <p><strong>Servings:</strong> ${recipe.servings}</p>
            <h3>Ingredients:</h3>
            <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
            <h3>Instructions:</h3>
            <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
        `;
        modal.style.display = 'block';
    }

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    // Category filter
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            const filteredRecipes = category === 'all' 
                ? recipes 
                : recipes.filter(recipe => recipe.category === category);
            displayRecipes(filteredRecipes);
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initial display
    displayRecipes();
}); 