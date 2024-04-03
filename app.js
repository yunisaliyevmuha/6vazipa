import data from "./data.js";

const template = document.querySelector(".job__template");

const divi = document.querySelector(".list");

data.forEach((job) => {
  const {
    company,
    location,
    position,
    postedAt,
    logo,
    contract,
    languages,
    level,
    role,
    tools,
  } = job;
  const div = template.content.cloneNode(true);

  const image = div.querySelector(".job__img-1");
  image.src = logo;

  const com = div.querySelector(".job__name-button-t");
  com.textContent = company;

  const loc = div.querySelector(".job__location");
  loc.textContent = location;

  const pos = div.querySelector(".job__position");
  pos.textContent = position;

  const post = div.querySelector(".job__posted");
  post.textContent = postedAt;

  const con = div.querySelector(".job__contract");
  con.textContent = contract;

  const lan = div.querySelector(".job__languages");
  lan.textContent = languages;

  const lev = div.querySelector(".job__level");
  lev.textContent = level;

  const rol = div.querySelector(".job__role");
  rol.textContent = role;

  const tol = div.querySelector(".job__tool");
  tol.textContent = tools;
  divi.appendChild(div);
});
