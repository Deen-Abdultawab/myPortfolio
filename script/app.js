import {mainProjects, otherProjects} from '../utils/data.js';

console.log(mainProjects)

function getElement(selection){
  const element = document.querySelector(selection)
  if(selection){
    return element;
  } else {
    throw new Error(`selection does not exist`);
  }
}

const navToggle = getElement('.nav-toggle');
const sidebar = getElement('.overlay');
const closeBtn = getElement('.close-btn');
const scrollLink = getElement('.nav-links');
const navBar = getElement('.nav-bar');
const mobileMenu = getElement('.mobile-menu');

navToggle.addEventListener('click', ()=>{
  sidebar.classList.add('show');
})

closeBtn.addEventListener('click', ()=>{
  sidebar.classList.remove('show');
})

scrollLink.addEventListener('click', (e)=>{
  e.preventDefault();
  let targetElement = e.target;
  let targetParent = targetElement.parentElement;
  const navHeight = navBar.getBoundingClientRect().height;
  if(targetParent.classList.contains('scroll-link')){
    scrollFunction(targetElement, navHeight);
  }
})

mobileMenu.addEventListener('click', (e)=>{
  e.preventDefault();
  let targetElement = e.target;
  const navHeight = navBar.getBoundingClientRect().height;
  sidebar.classList.remove('show');
  if(targetElement.classList.contains('scroll-link')){
    scrollFunction(targetElement, navHeight);
  }
  
})

function scrollFunction (targetElement, navHeight){
  let id;
  if(targetElement.classList.contains('fa-solid')){
      id = targetElement.parentElement.getAttribute('href').slice(1);
    } else {
      id = targetElement.getAttribute('href').slice(1);
    }
    const element = document.getElementById(id);
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    })
}

