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
