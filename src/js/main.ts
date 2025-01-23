import "virtual:svg-icons-register";
import "../scss/style.scss";
import products from "./products";
import realisedProjects from "./realisedProjects";
import career from "./career";
import expertise from "./expertise";
import whyUs from "./whyUs";
import menu from "./menu";
import modals from "./modals";
import fancybox from "./fancybox";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  modals();
  products();
  realisedProjects();
  career();
  expertise();
  whyUs();
  fancybox();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
