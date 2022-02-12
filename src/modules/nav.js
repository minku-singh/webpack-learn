import './../style.css';

function nav(){
    let renderedNav = document.createElement("nav");
    renderedNav.classList.add("nav")

    // navbar - brand
    let h1 = document.createElement("h1");
    h1.innerText = "Kha Lo!"

    // navbar - home, menu, about
    let ul = document.createElement("ul");
    ul.classList.add("nav-ul")

    // home 
    let liHome = document.createElement("li");
    liHome.innerText = "Home";
    ul.appendChild(liHome);
    liHome.classList.add("nav-li")

    // menu 
    let liMenu = document.createElement("li");
    liMenu.id = "menu";
    liMenu.innerText = "Menu";
    ul.appendChild(liMenu);
    liMenu.classList.add("nav-li")

    // about 
    let liAbout = document.createElement("li");
    liAbout.id = "about";
    liAbout.innerText = "About";
    ul.appendChild(liAbout);
    liAbout.classList.add("nav-li")

    renderedNav.appendChild(h1);
    renderedNav.appendChild(ul);

    return renderedNav;
}

export default nav;