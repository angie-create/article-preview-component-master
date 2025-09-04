# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![Desktop Design](./design/desktop-design.jpg)
![Mobile Design](./design/mobile-design.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://github.com/angie-create/article-preview-component-master)
- Live Site URL: [GitHub Pages](https://angie-create.github.io/article-preview-component-master/)

## My process


### What I learned

This project taught me several important concepts:


**Complex State Management**: Implemented different behaviors for desktop and mobile using JavaScript
```js
function toggleSharePopup() {
  const isDesktop = window.innerWidth >= 768;
  if (isDesktop) {
    sharePopup.classList.toggle('active');
  } else {
    card.classList.toggle('share-active');
  }
}
```

**Responsive Flexbox Layouts**: Created layouts that transform completely between mobile and desktop
```css
.card.share-active .card__author {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-grey-900);
}
```

**CSS Specificity and Clean Code**: Learned to write maintainable CSS without overusing `!important`

### Continued development

Areas I want to continue focusing on:
- TypeScript for better JavaScript code quality

## Author

- Website - [Angie P](https://surf-spray-98102403.figma.site/)
- Frontend Mentor - [@angie-create](https://www.frontendmentor.io/profile/angie-create)