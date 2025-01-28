const likeButton = document.getElementById("like-button");
const heart = document.getElementById("heart");
const likeCount = document.getElementById("like-count");

let count = 0;

likeButton.addEventListener("click", () => {
  count++;
  likeCount.textContent = `${count} Likes`;

  likeButton.classList.toggle("active");

  setTimeout(() => {
    likeButton.classList.toggle("active");
  }, 300); 
});