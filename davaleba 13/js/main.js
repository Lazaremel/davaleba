
    const color = "blue";       
    const text  = "გამარჯობა"; 

    document.addEventListener("DOMContentLoaded", () => {
      const box = document.getElementById("box");
      box.textContent = text; 
      box.style.backgroundColor = color;
      box.style.color = "white";
      box.style.width = "200px";
      box.style.height = "200px";
      box.style.display = "flex";
      box.style.alignItems = "center";
      box.style.justifyContent = "center";
      box.style.margin = "auto";
      box.style.textAlign = "center";
      box.style.boxShadow = "0px 0px 10px 1px rgba(48, 48, 48, 1)";
      box.style.borderRadius = "5px";
    });
