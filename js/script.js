const trigger = document.querySelector('.trigger');
trigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active');
});

const triggerTwo = document.querySelector('.triggerTwo');
triggerTwo.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active');
});
