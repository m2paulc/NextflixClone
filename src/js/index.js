import '../scss/main.scss';

// Tab Items
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Event listener for tabItems
tabItems.forEach(item => item.addEventListener('click', selectItem));

// Select tab content item
function selectItem(e) {
  //remove border from all items before adding
  tabItems.forEach(item => item.classList.remove('tab-border'));

  //remove the class 'show' on all content before adding
  tabContentItems.forEach(item => item.classList.remove('show'));

  // add border to current tab
  this.classList.add('tab-border');

  //grab the correct content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add class 'show' to the selected item
  tabContentItem.classList.add('show');
}
