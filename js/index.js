document.getElementById("hero-img").addEventListener('mouseover', (event) => {
    event.target.style.transform = "scale(1.1)";
});

document.getElementById("hero-img").addEventListener('mouseout', (event) => {
    event.target.style.transform = "scale(1)";
});
document.getElementById("lets-go-img").addEventListener('dblclick', (event) => {
    document.getElementById("adventure-img").style.display = "block";
    alert("Congrats you're the 1st visitor! You've just won $1,000!");
    
});
document.getElementById("adventure-img").addEventListener('click', (event) => {
    event.target.style.display = "none";
});
document.getElementById("fun-bus").addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.target.classList.toggle("logo-style")
});
document.getElementById("fun-bus").addEventListener('mousedown', (event) => {
    event.target.classList.toggle("logo-style2");
});
  document.addEventListener("keydown", event => {
      const h2 = document.querySelectorAll('h2')
      h2.forEach(function(el){
        if (event.keyCode === 49) {
          el.style.color = '#d500f9'
        }
        else if (event.keyCode === 50){
            el.style.color = "#3d5afe"
        }
        else if (event.keyCode === 51){
            el.style.color = "#ff9100"
        }
        else if (event.keyCode === 52){
            el.style.color = "#00e676"
        }
        else {
            el.style.color = "inherit"
            document.getElementById("fun-bus").classList.remove("logo-style", "logo-style2")
        }
      })
    
  });
