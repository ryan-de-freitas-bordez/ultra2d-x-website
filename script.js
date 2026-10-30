const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("open", !expanded);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

const copyButton = document.querySelector("#copy-code");
if (copyButton) {
  const snippet = `#include <ultra2d.hpp>

USING_NS_UL;

int main()
{
    App::run(ULMain());
}

void ULMain()
{
    if (!ULInit())
        return false;

    auto text = ULLabelBMFont(ULPath("../assets/pusab.fnt"), "Hello World");
    text->setBMFontSize(18);
}`;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      copyButton.innerHTML = "Copied ✓";
      window.setTimeout(() => copyButton.innerHTML = 'Copy snippet <span>↗</span>', 1600);
    } catch {
      copyButton.textContent = "Clipboard unavailable";
      window.setTimeout(() => copyButton.innerHTML = 'Copy snippet <span>↗</span>', 1800);
    }
  });
}
