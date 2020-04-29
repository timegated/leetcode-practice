/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:

  1. Create a "Foods" class or constructor that will take two arguements: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list

  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
/

*/
// DO NOT MODIFY 
const rootElement = document.querySelector('.foods');

const foodData = [{
        id: 1,
        image: ':taco:',
        name: 'taco'
    },
    {
        id: 2,
        image: ':hamburger:',
        name: 'burger'
    },
    {
        id: 3,
        image: ':eggplant:',
        name: 'eggplant'
    },
    {
        id: 4,
        image: ':apple:',
        name: 'apple'
    },
    {
        id: 5,
        image: ':pancakes:',
        name: 'pancakes'
    },
];
// DO NOT MODIFY 

class Foods {
    constructor(root, data) {
        this.data = data;
        this.root = root;
    };

    renderFoodItems = () => {
        // Creating an element for the individual foods

        const foodItemElementList = document.createElement('ul');
        foodItemElementList.style = `
        margin-top: 12rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        `;
        this.root.append(foodItemElementList);

        this.data.map(item => {
            const foodItem = document.createElement('li');
            foodItem.style = `
            font-family: monospace;
            font-weight: bold;
            font-size: 2rem;
            list-style: none;
            cursor: pointer;
            `;
            foodItem.innerText = `${item.name} `;
            foodItem.setAttribute('value', item.id);
            foodItemElementList.appendChild(foodItem);
        });
    };

    deleteFoodItem = (e) => {
        const { target } = e;
        target.remove()
    };
};

const foods = new Foods(rootElement, foodData);
foods.renderFoodItems();
rootElement.addEventListener('click', foods.deleteFoodItem)