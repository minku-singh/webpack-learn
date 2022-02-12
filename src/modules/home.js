import './../style.css';

function home(){
    let homeContent = document.createElement("div");
    homeContent.classList.add("home")
    
    let h2 = document.createElement("h2");
    h2.innerText = "Welcome to Kha Lo!";
    h2.classList.add("welcome")
    
    let p = document.createElement("p");
    p.classList.add("welcome-p");
    p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ea, voluptates pariatur saepe quis, et veritatis cupiditate neque enim fugiat porro ad, quaerat culpa aliquam? Repudiandae aliquam iste eligendi at."

    homeContent.appendChild(h2);
    homeContent.appendChild(p);
    return homeContent;
}

export default home;