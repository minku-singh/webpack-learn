function eachMenu(food, price){
    let div = document.createElement("div");
    
    let h2 = document.createElement("h2");
    h2.innerText = food;

    let p = document.createElement("p");
    p.innerText = `Price: ${price}`;

    // div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);

    return div;
}

function menu(){
    let div = document.createElement("div");
    
    let food1 = eachMenu("Pani Puri", 433);
    let food2 = eachMenu("Samosa", 100000);
    let food3 = eachMenu("lorem", 100);
    let food4 = eachMenu("Ipsum", 322);

    div.appendChild(food1);
    div.appendChild(food2);
    div.appendChild(food3);
    div.appendChild(food4);
    return div;
}

export default menu;