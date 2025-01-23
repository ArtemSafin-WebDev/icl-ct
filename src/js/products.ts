import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function products() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".products")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".products__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".products__arrow--next"
        ),
      },
    });
  });
}
