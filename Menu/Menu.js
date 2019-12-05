/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'Send Igor Money' // step 6
];

// Step 1
const createMenu = items => {
  const outer = ce('div')
  const menu = ce('div')
  const ul = ce('ul')

  outer.classList.add('outer')
  menu.classList.add('menu')

  // Step 2
  const liArr = items.map(item => {
    const li = document.createElement('li')
    li.textContent = item
    return li
  })

  // Step 3
  const menuBtn = document.querySelector('.menu-button')

  // Step 4
  // menuBtn.addEventListener('click', e => {
  //   menu.classList.toggle('menu--open')
  // })

  appendChildren(liArr, ul)
  menu.appendChild(ul)
  outer.appendChild(menu)

  // Step 5
  return outer
}

const body = document.querySelector('body')
body.appendChild(createMenu(menuItems))

// Menu animation stretch
const menuAnimation = new TimelineMax({ paused: false, reversed: false })
menuAnimation.to(".menu", 0.75, { x: "-350px", ease: Power2.easeInOut })

document.querySelector('.menu-button').addEventListener('click', e => {
  menuAnimation.reversed() ? menuAnimation.play() : menuAnimation.reverse();
})



/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/
