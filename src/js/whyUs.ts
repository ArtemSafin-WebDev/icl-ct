import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function whyUs() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".why-us")
  );
  elements.forEach((element) => {
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".why-us__cards-list-item")
    );
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".why-us__card")
    );

    const OFFSET = 30;

    if (!items.length) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 641px)", () => {
      cards.forEach((card, cardIndex) => {
        ScrollTrigger.create({
          trigger: card,
          pin: true,
          pinSpacing: false,
          start: () => `top top+=${(cardIndex + 1) * OFFSET}`,
          endTrigger: items.at(-1),
          end: `top top+=${cards.length * OFFSET}`,
          onEnter: () => {
            cards.forEach((card) => card.classList.remove("active"));
            card.classList.add("active");
          },
          onLeaveBack: () => {
            cards.forEach((card) => card.classList.remove("active"));
            card.classList.add("active");
          },
        });
      });
    });
  });
}
