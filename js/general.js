export const body = document.querySelector(".body");
export const header = document.createElement("div");

header.classList.add("info_block");

body.appendChild(header);

const bio_pic = document.createElement("div");
const bio_info = document.createElement("div");

bio_pic.classList.add("bio_pic");
bio_info.classList.add("bio_info");

//const hr = document.createElement("");


header.appendChild(bio_pic);
header.appendChild(bio_info);
//header.appendChild(hr);

const bio_img = '<img src=./images/bio_pic.jpeg>';
//bio_img.classList.add("bio_img");

bio_pic.innerHTML = bio_img;

const info_title = document.createElement("div");
const info_data = document.createElement("div");
const info_introduction = document.createElement("div");

info_title.classList.add("title");
info_data.classList.add("data");
info_introduction.classList.add("introduction");

bio_info.appendChild(info_title);
bio_info.appendChild(info_data);
bio_info.appendChild(info_introduction);

const username = document.createElement("div");
const button = document.createElement("div");

username.classList.add("name");
button.classList.add("button_block");

info_title.appendChild(username);
info_title.appendChild(button);

const username_text = document.createTextNode("16v0_0v16");
username.appendChild(username_text);

const following = document.createElement("div");
const messenge = document.createElement("div");
const setting = document.createElement("div");

following.classList.add("button");
messenge.classList.add("button");
setting.classList.add("setting");

const following_text = document.createTextNode("追蹤中");
const messenge_text = document.createTextNode("發送訊息");
const setting_text = document.createTextNode("‧‧‧");

following.appendChild(following_text);
messenge.appendChild(messenge_text);
setting.appendChild(setting_text);

button.appendChild(following);
button.appendChild(messenge);
button.appendChild(setting);

const posts = document.createElement("div");
const fans = document.createElement("div");
const followers = document.createElement("div");

const posts_text = document.createTextNode("124 貼文");
const fans_text = document.createTextNode("4.1萬位粉絲");
const followers_text = document.createTextNode("149 追蹤中");

posts.classList.add("data_text");
fans.classList.add("data_text");
followers.classList.add("data_text");

posts.appendChild(posts_text);
fans.appendChild(fans_text);
followers.appendChild(followers_text);

info_data.appendChild(posts);
info_data.appendChild(fans);
info_data.appendChild(followers);

info_introduction.innerHTML = `
<div><b>十六</b></div>
<div>影片創作者</div>
<div>Wednesday is English day</div>
<div>youtube.com/@1v0_0v6</div>
<div>jks_fu、bbffmf和其他12人都在追蹤</div>
`