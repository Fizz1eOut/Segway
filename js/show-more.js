const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.accessories-products__item').length;
let items = 3

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.accessories-products__body').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if(visItems.length === productsLength) {
        showMore.style.display = 'none';
    }
});