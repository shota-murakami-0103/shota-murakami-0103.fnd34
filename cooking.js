const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const commentList = document.querySelector('#comment-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const message = messageInput.value;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = name + ': ';
  li.appendChild(span);
  li.appendChild(document.createTextNode(message));
  commentList.appendChild(li);

  nameInput.value = '';
  messageInput.value = '';
});
