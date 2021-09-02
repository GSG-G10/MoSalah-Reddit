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
