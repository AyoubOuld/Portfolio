const PIXELS_PER_SECOND = [40, 30];
const GAP = 12;

function setSpeeds(root) {
  root.querySelectorAll(".chapter").forEach((chapter) => {
    chapter.querySelectorAll(".track").forEach((track, index) => {
      const speed = PIXELS_PER_SECOND[index % PIXELS_PER_SECOND.length];
      track.style.setProperty("--duration", `${track.scrollWidth / 2 / speed}s`);
    });
  });
}

function placePopover(popover, pill) {
  const rect = pill.getBoundingClientRect();
  const width = popover.offsetWidth;
  const height = popover.offsetHeight;

  let x = rect.right + GAP;
  let y = rect.top + rect.height / 2 - height / 2;

  if (x + width > innerWidth - GAP) x = rect.left - width - GAP;
  if (x < GAP) {
    x = Math.min(Math.max(GAP, rect.left), innerWidth - width - GAP);
    y = rect.bottom + GAP;
  }

  popover.style.left = `${x}px`;
  popover.style.top = `${Math.max(GAP, y)}px`;
}

export function initSkillCarousel(root, popover) {
  if (!root || !popover) return;

  const title = popover.querySelector("[data-title]");
  const body = popover.querySelector("[data-body]");
  let current = null;
  let lastPointer = "mouse";

  const hide = () => {
    if (!current) return;
    current.closest(".chapter").classList.remove("paused");
    current.classList.remove("active");
    popover.classList.remove("show");
    popover.hidden = true;
    current = null;
  };

  const show = (pill) => {
    hide();
    current = pill;
    pill.closest(".chapter").classList.add("paused");
    pill.classList.add("active");
    title.textContent = pill.textContent.trim();
    body.textContent = pill.dataset.detail;
    popover.hidden = false;
    placePopover(popover, pill);
    requestAnimationFrame(() => popover.classList.add("show"));
  };

  root.addEventListener("pointerover", (event) => {
    const pill = event.target.closest(".pill");
    if (pill && event.pointerType === "mouse" && pill !== current) show(pill);
  });

  root.addEventListener("pointerout", (event) => {
    const pill = event.target.closest(".pill");
    if (pill && event.pointerType === "mouse" && !pill.contains(event.relatedTarget)) hide();
  });

  root.addEventListener("pointerdown", (event) => {
    lastPointer = event.pointerType;
  });

  root.addEventListener("click", (event) => {
    const pill = event.target.closest(".pill");
    if (!pill || lastPointer === "mouse") return;
    if (pill === current) hide();
    else show(pill);
  });

  root.addEventListener("focusin", (event) => {
    const pill = event.target.closest(".pill");
    if (pill) show(pill);
  });

  root.addEventListener("focusout", hide);

  document.addEventListener("pointerdown", (event) => {
    if (current && !event.target.closest(".pill")) hide();
  });

  window.addEventListener("scroll", hide, { passive: true });
  window.addEventListener("resize", () => setSpeeds(root));
  window.addEventListener("load", () => setSpeeds(root));
  setSpeeds(root);
}
