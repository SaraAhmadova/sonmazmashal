document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("header");
      nav.classList.toggle("sticky-navbar", window.scrollY > nav.offsetHeight);
    });
  
    const menuBtn = document.getElementById("menu-btn");
    menuBtn.addEventListener("click", function () {
      var menu = document.getElementById("menu");
      menu.classList.toggle("show-menu");
    });
  });

 document.addEventListener('DOMContentLoaded', function () {
  const reportList = document.getElementById('reportList');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  const items = document.querySelectorAll('.reportList li');
  const itemsPerPage = 6;

  function showItems(index) {
    const startIndex = index * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, i) => {
      item.style.display = i >= startIndex && i < endIndex ? 'flex' : 'none';
    });
  }

  function nextItems() {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    currentIndex = (currentIndex + 1) % totalPages;
    showItems(currentIndex);
  }

  function prevItems() {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    currentIndex = (currentIndex - 1 + totalPages) % totalPages;
    showItems(currentIndex);
  }

  // Show the initial items
  showItems(currentIndex);

  // Add event listeners to buttons
  nextBtn.addEventListener('click', nextItems);
  prevBtn.addEventListener('click', prevItems);
});
  

document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.getElementById('cardsContainer');
  const showMoreBtn = document.getElementById('showMoreBtn');
  const cards = document.querySelectorAll('.card');

  // Set the initial number of visible cards
  const initialVisibleCards = 6;
  let visibleCardCount = initialVisibleCards;

  // Function to toggle visibility of cards
  function toggleCardVisibility() {
    cards.forEach((card, index) => {
      card.style.display = index < visibleCardCount ? 'flex' : 'none';
    });

    // Toggle the "Show More" button visibility
    showMoreBtn.style.display = visibleCardCount < cards.length ? 'flex' : 'none';
  }

  // Show the initial set of cards
  toggleCardVisibility();

  // Function to handle "Show More" button click
  function showMore() {
    visibleCardCount += initialVisibleCards;
    toggleCardVisibility();
  }

  // Add event listener to the "Show More" button
  showMoreBtn.addEventListener('click', showMore);
});