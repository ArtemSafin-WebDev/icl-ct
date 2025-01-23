import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function mediacenter() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".mediacenter")
  );

  elements.forEach((element) => {
    const sliders = Array.from(
      element.querySelectorAll<HTMLElement>(".mediacenter__slider")
    );
    const arrowLayers = Array.from(
      element.querySelectorAll<HTMLElement>(".mediacenter__arrows-layer")
    );
    const tabItems = Array.from(
      element.querySelectorAll<HTMLElement>(".mediacenter__tabs-item")
    );
    const navLinks = Array.from(
      element.querySelectorAll<HTMLElement>(".mediacenter__nav-card")
    );

    const setActive = (index: number) => {
      arrowLayers.forEach((layer) => layer.classList.remove("active"));
      tabItems.forEach((item) => item.classList.remove("active"));
      navLinks.forEach((link) => link.classList.remove("active"));

      arrowLayers[index]?.classList.add("active");
      tabItems[index]?.classList.add("active");
      navLinks[index]?.classList.add("active");
    };

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

    setActive(0);

    sliders.forEach((slider, sliderIndex) => {
      const container = slider.querySelector<HTMLElement>(".swiper");
      if (!container) return;
      new Swiper(container, {
        slidesPerView: "auto",
        speed: 600,
        modules: [Navigation],
        navigation: {
          prevEl: arrowLayers[sliderIndex]?.querySelector<HTMLButtonElement>(
            ".mediacenter__arrow--prev"
          ),
          nextEl: arrowLayers[sliderIndex]?.querySelector<HTMLButtonElement>(
            ".mediacenter__arrow--next"
          ),
        },
      });
    });
  });
}
