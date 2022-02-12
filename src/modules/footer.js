import './../style.css';
function footer(){
    let renderedFooter = document.createElement("footer");
    renderedFooter.classList.add("footer")
    let small = document.createElement("small");
    small.innerText = "Built with ♥ by Minku";

    renderedFooter.appendChild(small);
    return renderedFooter;
}

export default footer;