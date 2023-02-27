const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('nav--visible');
  });
});

// tabs  2
const infoTabsBtn = document.querySelectorAll(".info-block__tabs-btn");
const infoTabsItem = document.querySelectorAll(".info-block__tabs-item");

infoTabsBtn.forEach(onTabClick);

function onTabClick(items) {
    items.addEventListener("click", function() {
        let currentBtn = items;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            infoTabsBtn.forEach(function(items) {
                items.classList.remove('active');
            });
    
            infoTabsItem.forEach(function(items) {
                items.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}
