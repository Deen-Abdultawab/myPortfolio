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
const sidebar = getElement('.overlay')
const closeBtn = getElement('.close-btn')

navToggle.addEventListener('click', ()=>{
  sidebar.classList.add('show');
})

closeBtn.addEventListener('click', ()=>{
  sidebar.classList.remove('show')
})

