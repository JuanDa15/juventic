// Donwload Button setup
const btn_download = document.getElementById('download');

btn_download.addEventListener('click', () => {
  window.print()
});
// Donwload Button setup

// Show plates
const pictures = [
  "menu1@2x.png",
  "menu2@2x.png",
  "menu3@2x.png",
  "menu4@2x.png",
  "foto1@2x.png",
  "menu5@2x.png",
  "menu1@2x.png",
  "menu2@2x.png",
  "menu3@2x.png",
  "menu4@2x.png",
  "foto1@2x.png",
  "menu5@2x.png"
];
const des = 'Adipisicing tempore tempora voluptatibus';
const des2 = 'Consectetur dignissimos dolorum quaerat';

const plates = document.getElementById('menu-items');

const num_items = 12;

const showItems = (items, wrapper, items_per_page, description) => {
  wrapper.innerHTML = '';

  for (let i = 0; i < items_per_page; i++) {

    let item = document.createElement('button');
    item.classList.add('showmodal');
    item.innerHTML = `
      <img class="menu_img" src="assets/img/${items[i]}" width="200" height="158.531" alt="">
      <span class="menu_label">${description}</span>
    `;

    if (i <= 3 || i > 7) {
      if (i % 2 === 0) {
        item.classList.add('par');
      } else {
        item.classList.add('impar');
      }
    } else {
      if (i % 2 === 0) {
        item.classList.add('impar');
      } else {
        item.classList.add('par');
      }
    }

    wrapper.appendChild(item);
  }
};

const screen_width = screen.width;
showItems(pictures, plates, num_items, des);
// Show plates

// Show modal window
const modal_window = document.getElementById('modal-container');

const showModal = modal_to_show => {
  const btn_items = document.querySelectorAll('button.showmodal');
  btn_items.forEach(btn => {
    btn.addEventListener('click', () => {
      modal_to_show.classList.add('show');
    });
  });
};

showModal(modal_window);
// Show modal window

// Close modal
const btn_close_modal = document.getElementById('close-modal');
btn_close_modal.addEventListener('click', () => {
  modal_window.classList.remove('show');
});
// Close modal

// Pagination
const btn_next = document.getElementById('next');
const btn_prev = document.getElementById('previous');

btn_next.addEventListener('click', () => {
  showItems(pictures, plates, num_items, des2);
  showModal(modal_window);
});
btn_prev.addEventListener('click', () => {
  showItems(pictures, plates, num_items, des);
  showModal(modal_window);
});
// Pagination
