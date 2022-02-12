import nav from "./modules/nav";
import footer from './modules/footer';
import home from './modules/home';
import './style.css';

let content = document.querySelector("#content");

// let homeBtn = document.querySelector("#home");
// let menuBtn = document.querySelector("#menu");
// let aboutBtn = document.querySelector("#about");

content.classList.add("bgcolor");

content.appendChild(nav());
content.appendChild(home());
content.appendChild(footer());
// content.appendChild(eachMenu());
// content.appendChild(about());
