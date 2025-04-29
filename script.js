document.addEventListener("DOMContentLoaded", () => {
    const aboutText = document.getElementById("about-text");
    const changeTextBtn = document.getElementById("changeTextBtn");
    const toggleParaBtn = document.getElementById("toggleParaBtn");
    const products = document.getElementById("products");
  
    let promoMessage = null;
  
    changeTextBtn.addEventListener("click", () => {
      aboutText.textContent = "StrideShoes now ships worldwide! Find your perfect pair today.";
      aboutText.style.color = "#007f00";
      aboutText.style.fontWeight = "bold";
    });
  
    toggleParaBtn.addEventListener("click", () => {
      if (!promoMessage) {
        promoMessage = document.createElement("p");
        promoMessage.textContent = "Limited Time Offer: Get 20% off all shoes this week only!";
        promoMessage.style.backgroundColor = "#e6f7ff";
        promoMessage.style.padding = "10px";
        promoMessage.style.border = "1px solid #0077cc";
        promoMessage.style.borderRadius = "5px";
        products.appendChild(promoMessage);
      } else {
        promoMessage.remove();
        promoMessage = null;
      }
    });
  });
  