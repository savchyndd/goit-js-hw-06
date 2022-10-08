const NumberOfCategories = document.querySelector('#categories').childElementCount;
const categoriesRef = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${NumberOfCategories}`);
for (const obj of categoriesRef) {
  console.log(
    `Category: ${obj.firstElementChild.textContent}\n` +
      `Elements: ${obj.lastElementChild.children.length}\n`
  );
}
