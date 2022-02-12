import nav from "./modules/nav";
import footer from './modules/footer';
import home from './modules/home';

function firstLoad(){
    let content = document.querySelector("#content");
    content.appendChild(nav());
    content.appendChild(footer());
    content.appendChild(home());

    return content
}

export default firstLoad;