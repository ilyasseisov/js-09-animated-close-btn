// Variables

const trigger = document.querySelector('.trigger');

// Functions

const iconToggle = (event) => {
  event.currentTarget.classList.toggle('active');
};

// Event Listeners

trigger.addEventListener('click', iconToggle);
