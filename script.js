let main = document.querySelector("main");
const logo = document.getElementById("logo");

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function generatePost(post) {
  const section = document.createElement("section"); 
  section.classList.add("post"); 

  section.innerHTML = `
    <div class="about">
      <img src="${post.avatar}" alt="${post.name}" class="avatar"/>
      <h3>${post.name}</h3>
      <h4>${post.location}</h4>
    </div>

    <div class="content">
      <img src="${post.post}" alt="post" />
    </div>

    <div class="icons">
      <button class="btn-like"><img src="/images/icon-heart.png" alt="icon-heart" /></button>
      <button><img src="/images/icon-comment.png" alt="icon-comment" /></button>
      <button><img src="/images/icon-dm.png" alt="icon-dm" /></button>
      <p class="likes">Likes: ${post.likes}</p> <!-- Like count element -->
      <h5><strong>${post.username}</strong> <span>${post.comment}</span></h5>
    </div>
  `;

  section.querySelector(".btn-like").addEventListener("click", function(){
    const likesElement = section.querySelector(".likes");
    post.likes++;
    likesElement.textContent = `Likes: ${post.likes}`;
  });

  main.appendChild(section);
}

posts.forEach(post => {
    generatePost(post);
});

logo.addEventListener("click", function(){
    window.location.reload();
    window.scrollTo(0, 0);
})