function createHeader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  const inboxSec = document.createElement('ul');
  inboxSec.setAttribute('id', 'inbox');
  header.appendChild(inboxSec);

  const homeLi = document.createElement('li');
  const homeIcon = document.createElement('img');
  homeIcon.src = '../icons/home.svg';
  homeIcon.alt = 'Home Icon';
  homeLi.appendChild(homeIcon);
  inboxSec.appendChild(homeLi);

  const searchLi = document.createElement('li');
  searchLi.innerHTML = '<img src="icons/search.svg" alt=""><input type="text" value="" placeholder="Search">';
  inboxSec.appendChild(searchLi);

  return header;
}

export default function loadPage() {
  const content = document.getElementById('content');

  const header = createHeader();
  content.appendChild(header);
}
