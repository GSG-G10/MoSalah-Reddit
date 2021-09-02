const popularPosts = document.querySelector('.popular-posts');

const createElement = (tagName, className, parentNode, textContent) => {
  const elementName = document.createElement(tagName);
  elementName.classList.add(className);
  parentNode.appendChild(elementName);
  elementName.textContent = textContent;
  return elementName;
};

fetch('/posts')
  .then((posts) => posts.json())
  .then((data) => {
    data.forEach((element) => {
      const post = createElement('article', 'post', popularPosts);
      const sectionVoteIcon = createElement('article', 'vote-icon', post);
      createElement('span', 'counter-icon', sectionVoteIcon, element.votes);
      const sectiontPostContent = createElement('article', 'post-content', post);
      const topSection = createElement('div', 'top-section', sectiontPostContent);
      const sectiontInfoUser = createElement('div', 'info-user', topSection);
      createElement('span', 'user-name', sectiontInfoUser, `${element.user_name}  `);
      createElement('span', 'time', sectiontInfoUser, element.data_created);
      createElement('h3', 'post-title', topSection, element.title);
      createElement('p', 'img-post', topSection, element.content);
    });
  })
  .catch((err) => console.log(err));
