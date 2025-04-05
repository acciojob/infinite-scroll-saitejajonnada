const list = document.getElementById('infi-list');
let itemCount = 1;
const maxItems = 100; // you can change this for endless scroll

function loadMoreItems(count = 10) {
  for (let i = 0; i < count; i++) {
    if (itemCount > maxItems) return;

    const li = document.createElement('li');
    li.textContent = `Item ${itemCount++}`;
    list.appendChild(li);
  }
}

// Initial load
loadMoreItems();

// Infinite scroll handler
list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    loadMoreItems();
  }
});
