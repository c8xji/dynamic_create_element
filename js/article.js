const body = document.querySelector(".body");
export const content = document.createElement("div");

content.classList.add("content");

body.appendChild(content);

const post1 = document.createElement("div");
const post2 = document.createElement("div");
const post3 = document.createElement("div");
const post4 = document.createElement("div");
const post5 = document.createElement("div");
const post6 = document.createElement("div");
const post7 = document.createElement("div");
const post8 = document.createElement("div");
const post9 = document.createElement("div");

const posts = [post1, post2, post3, post4, post5, post6, post7, post8, post9];
posts.forEach(function(post) {
  post.classList.add("post");
  content.appendChild(post);
})

const post_img1 = `<img src="./images/post1.jpg">`
const post_img2 = `<img src="./images/post2.jpg">`
const post_img3 = `<img src="./images/post3.jpg">`
const post_img4 = `<img src="./images/post4.jpg">`
const post_img5 = `<img src="./images/post5.jpg">`
const post_img6 = `<img src="./images/post6.jpg">`
const post_img7 = `<img src="./images/post7.jpg">`
const post_img8 = `<img src="./images/post8.jpg">`
const post_img9 = `<img src="./images/post9.jpg">`

const post_imgs = [post_img1, post_img2, post_img3, post_img4, post_img5, post_img6, post_img7, post_img8, post_img9 ];

posts.forEach(function(post, index) {
  post.innerHTML = post_imgs[index];
})