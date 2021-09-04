const container = document.querySelector('.container');

const createElement = (tagName, className, parentNode, textContent) => {
  const elementName = document.createElement(tagName);
  elementName.classList.add(className);
  parentNode.appendChild(elementName);
  elementName.textContent = textContent;
  return elementName;
};

fetch('/profiles')
  .then((result) => result.json())
  .then((userdata) => {
    userdata.forEach((element) => {
      const card = createElement('section', 'info-user', container);
      createElement('span', 'name-user', card, `Name: ${element.user_name}`);
      createElement('span', 'email-user', card, `Email : ${element.email}`);
    });
  });

fetch('/userpost')
  .then((result) => result.json())
  .then((userpost) => {
    userpost.forEach((element) => {
      const card = createElement('section', 'user-post', container);
      const post = createElement('div', 'posts', card);
      createElement('h3', 'title', post, element.title);
      createElement('p', 'content', post, element.content);
      createElement('span', 'votes', post, element.votes);
      createElement('span', 'data', post, element.data_created);
    });
  });
