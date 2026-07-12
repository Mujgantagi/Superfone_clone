const wishlistContainer = document.getElementById("wishlist-container");
const emptyMessage = document.getElementById("empty-message");

function renderWishlistPage() {
  const wishlistIds = getWishlist();

  const wishlistProducts = products.filter((product) =>
    wishlistIds.includes(product.id)
  );

  if (wishlistProducts.length === 0) {
    emptyMessage.classList.remove("hidden");
    wishlistContainer.innerHTML = "";
    return;
  }

  emptyMessage.classList.add("hidden");

  let html = "";
  for (let i = 0; i < wishlistProducts.length; i++) {
    const p = wishlistProducts[i];
    const imgSrc = p.image ? p.image : "img/qulaqliq.jpg";

    html += `
      <div class="relative flex flex-col border border-gray-200 rounded-xl p-3 md:p-4 hover:shadow-lg transition-shadow">
        <span class="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">Yeni</span>
        <button class="wishlist-btn absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full border border-red-300 bg-white text-red-500 z-10" data-id="${p.id}" aria-label="Bəyən">
          <i class="fa-solid fa-heart pointer-events-none"></i>
        </button>
        <a href="${p.link}" class="flex items-center justify-center h-40 md:h-52 mb-4">
          <img src="${imgSrc}" alt="${p.name}" class="max-h-full object-contain">
        </a>
        <a href="${p.link}" class="text-sm md:text-base text-slate-800 mb-4 line-clamp-2 hover:text-orange-600 transition-colors min-h-[2.5rem]">
          ${p.name}
        </a>
        <div class="mt-auto flex items-center justify-between gap-2">
          <span class="text-lg md:text-xl font-bold text-slate-900">${p.price} ₼</span>
          <button class="add-to-cart-btn shrink-0 w-11 h-11 flex items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors" data-id="${p.id}" aria-label="Səbətə at">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    `;
  }
  wishlistContainer.innerHTML = html;
}

renderWishlistPage();

document.addEventListener("click", (e) => {
  if (e.target.closest(".wishlist-btn")) {
    setTimeout(renderWishlistPage, 0);
  }
});