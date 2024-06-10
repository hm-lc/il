const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too";
  gif.src =
    "https://imgs.search.brave.com/I1XcR0qucfR7Q1R0DauysVUqTgSGdHcmMk8dEKsLkwM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTAuZ2lwaHkuY29t/L21lZGlhL25GTXNy/V01sTzNHNEFqUDBo/Vi9naXBoeS5naWY_/Y2lkPTc5MGI3NjEx/ZmJscGtxbWNqZWE5/YXJzbm9weDMxZXFz/aHNjOXd6azUyZTBu/MGlkMSZlcD12MV9n/aWZzX3NlYXJjaCZy/aWQ9Z2lwaHkuZ2lm/JmN0PWc.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});