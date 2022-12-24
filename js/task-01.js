const elemListCateg = document.querySelector('#categories');
console.log(`Number of categories: ${elemListCateg.children.length} `);

const allItems = document.querySelectorAll('.item');
allItems.forEach((element) => {
const elementTitle = element.querySelector('h2').textContent;
const elementList = element.querySelectorAll('li').length;
    
  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${elementList}`);

});


