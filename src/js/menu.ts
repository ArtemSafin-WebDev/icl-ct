export default function menu() {
  const burger = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );
  burger?.addEventListener("click", (event) => {
    event.preventDefault();
    const modals = Array.from(
      document.querySelectorAll<HTMLElement>(".js-modal")
    );
    modals.forEach((modal) => modal.classList.remove("active"));
    document.body.classList.remove("modal-open");
    document.body.classList.toggle("menu-open");
  });
}
