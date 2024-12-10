document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `<img src="${img.src}" alt="${img.alt}"><span class="close">×</span>`;
        document.body.appendChild(popup);

        popup.querySelector(".close").addEventListener("click", () => {
            popup.remove();
        });
    });
});
