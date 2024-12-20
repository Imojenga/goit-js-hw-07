const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(cat => {
  console.log(`Category: ${cat.querySelector('h2').textContent}`);
  console.log(`Elements: ${cat.querySelectorAll('li').length}`);
});
