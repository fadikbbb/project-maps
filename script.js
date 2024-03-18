let left = document.querySelector(".fa-arrow-left");
let right = document.querySelector(".fa-arrow-right");
let cardScroll = document.querySelector(".cards");
let cardContainer = document.querySelector(".card-container");
let cardWidth = 200; // Set card width to 200px
let i = 0;

right.onclick = () => {
  if (i < cardScroll.children.length - 1) {
    i++;
    cardScroll.scrollTo({
        left: i * cardWidth,
        behavior: "smooth",
        
    });
    cardScroll.scrollIntoView({
        block:"center"
    })
    highlightCard();
}
};

left.onclick = () => {
    if (i > 0) {
        i--;
        cardScroll.scrollTo({
            left: i * cardWidth,
            behavior: "smooth",

        });
        cardScroll.scrollIntoView({
            block:"center"
        })
    highlightCard();
  }
};

function highlightCard() {
  cardScroll.querySelectorAll(".card").forEach((c, index) => {
    c.style.boxShadow = index === i ? "0 0 10px 1px black" : "0 0 5px 1px gray";
  });
}
