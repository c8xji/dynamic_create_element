export const body = document.querySelector(".body");
export const header = document.createElement("div");

header.classList.add("info_block");

body.appendChild(header);

const bio_pic = document.createElement("div");
const bio_info = document.createElement("div");

bio_pic.classList.add("bio_pic");
bio_info.classList.add("bio_info");

const hr = document.createElement("hr");


header.appendChild(bio_pic);
header.appendChild(bio_info);
header.appendChild(hr);