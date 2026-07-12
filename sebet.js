const cartItems = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const cartContent = document.getElementById("cart-content");
const summaryCount = document.getElementById("summary-count");
const summaryTotal = document.getElementById("summary-total");

function renderCartPage() {
  const cart = getCart(); 

  
  if (cart.length === 0) {
    cartEmpty.classList.remove("hidden");
    cartContent.classList.add("hidden");
    return;
  }

  cartEmpty.classList.add("hidden");
  cartContent.classList.remove("hidden");

  let html = "";
  let totalCount = 0;
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const p = products.find((product) => product.id === cart[i].id);
    if (!p) continue;

    const qty = cart[i].qty;
    const lineTotal = Number(p.price) * qty;  

    totalCount += qty;
    totalPrice += lineTotal;

    const imgSrc = p.image ? p.image : "img/qulaqliq.jpg";

    html += `
      <div class="flex items-center gap-4 border border-gray-200 rounded-xl p-4">
        <!-- sekil -->
        <img src="${imgSrc}" alt="${p.name}" class="w-20 h-20 object-contain shrink-0">

        <!-- ad + qiymet -->
        <div class="flex-1 min-w-0">
          <p class="text-sm md:text-base text-slate-800 line-clamp-2">${p.name}</p>
          <p class="text-sm text-gray-500">${p.price} ₼</p>
        </div>

        <!-- say artir/azalt -->
        <div class="flex items-center gap-2 shrink-0">
          <button class="cart-minus w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100" data-id="${p.id}">
            <i class="fa-solid fa-minus text-xs pointer-events-none"></i>
          </button>
          <span class="w-6 text-center font-semibold">${qty}</span>
          <button class="cart-plus w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100" data-id="${p.id}">
            <i class="fa-solid fa-plus text-xs pointer-events-none"></i>
          </button>
        </div>

        <!-- setir cemi -->
        <div class="w-24 text-right font-bold text-slate-900 shrink-0">${lineTotal.toFixed(2)} ₼</div>

        <!-- sil -->
        <button class="cart-remove text-gray-400 hover:text-red-500 shrink-0" data-id="${p.id}">
          <i class="fa-solid fa-trash pointer-events-none"></i>
        </button>
      </div>
    `;
  }

  cartItems.innerHTML = html;
  summaryCount.textContent = totalCount;
  summaryTotal.textContent = totalPrice.toFixed(2);
}

document.addEventListener("click", (e) => {
  const plusBtn = e.target.closest(".cart-plus");
  const minusBtn = e.target.closest(".cart-minus");
  const removeBtn = e.target.closest(".cart-remove");

  let cart = getCart();

  if (plusBtn) {
    const id = Number(plusBtn.dataset.id);
    const item = cart.find((c) => c.id === id);
    if (item) item.qty += 1;
  } else if (minusBtn) {
    const id = Number(minusBtn.dataset.id);
    const item = cart.find((c) => c.id === id);
    if (item) {
      item.qty -= 1;
      
      if (item.qty <= 0) {
        cart = cart.filter((c) => c.id !== id);
      }
    }
  } else if (removeBtn) {
    const id = Number(removeBtn.dataset.id);
    cart = cart.filter((c) => c.id !== id);
  } else {
    return;  
  }

  saveCart(cart);
  renderCartPage();      
  updateCartHeader();     
});

renderCartPage();