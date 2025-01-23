import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function expertise() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".expertise")
  );
  elements.forEach((element) => {
    const navLinks = Array.from(
      element.querySelectorAll<HTMLElement>(".expertise__nav-card")
    );
    const tabItems = Array.from(
      element.querySelectorAll<HTMLElement>(".expertise__tabs-item")
    );

    const setActive = (index: number) => {
      navLinks.forEach((link) => link.classList.remove("active"));
      tabItems.forEach((item) => item.classList.remove("active"));
      navLinks[index]?.classList.add("active");
      tabItems[index]?.classList.add("active");
      ScrollTrigger.refresh();
    };

    setActive(0);

    navLinks.forEach((link, linkIndex) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        setActive(linkIndex);
        if (window.matchMedia("(max-width: 640px)").matches) {
          link.scrollIntoView({
            behavior: "smooth",
            inline: "start",
          });
        }
      });
    });
  });
}
