function about(){
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText = "About Us";
    let p = document.createElement("p");
    p.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, minus!"

    div.appendChild(h2);
    div.appendChild(p);

    return div;
}

export default about;
