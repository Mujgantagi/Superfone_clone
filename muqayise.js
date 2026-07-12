const compareContainer = document.getElementById("compare-container");
const compareEmpty = document.getElementById("compare-empty");

const compareRows = [
  ["Rəng", "color"],
  ["Brend", "brand"],
  ["Kateqoriya", "category"],
  ["Qiymət", "price"],
  ["Stok", "in_stock"],
];

function renderComparePage() {
  const compareIds = getCompare();
  const items = products.filter((p) => compareIds.includes(p.id));

  if (items.length === 0) {
    compareEmpty.classList.remove("hidden");
    compareContainer.innerHTML = "";
    return;
  }
  compareEmpty.classList.add("hidden");

  let head = `<div class="flex gap-4 min-w-max">`;
  head += `<div class="w-40 shrink-0"></div>`;

  for (let i = 0; i < items.length; i++) {
    const p = items[i];
    const imgSrc = p.image ? p.image : "img/qulaqliq.jpg";
    head += `
      <div class="w-56 shrink-0 border border-gray-200 rounded-xl p-4 text-center">
        <img src="${imgSrc}" alt="${p.name}" class="h-32 mx-auto object-contain mb-3">
        <p class="text-sm text-slate-800 line-clamp-2 mb-2 min-h-[2.5rem]">${p.name}</p>
        <p class="font-bold text-slate-900 mb-3">${p.price} ₼</p>
        <button class="compare-remove w-full bg-slate-900 text-white text-sm py-2 rounded-lg hover:bg-slate-800" data-id="${p.id}">
          Müqayisədən sil
        </button>
      </div>
    `;
  }
  head += `</div>`;

  
  let rows = "";
  for (let r = 0; r < compareRows.length; r++) {
    const label = compareRows[r][0];   
    const field = compareRows[r][1];   

    rows += `<div class="flex gap-4 min-w-max border-t border-gray-100">`;
    
    rows += `<div class="w-40 shrink-0 py-3 font-medium text-orange-600">${label}</div>`;

    
    for (let i = 0; i < items.length; i++) {
      let value = items[i][field];
      
      if (field === "in_stock") value = value ? "Var" : "Yoxdur";
      if (field === "price") value = value + " ₼";

      rows += `<div class="w-56 shrink-0 py-3 text-center text-gray-700">${value}</div>`;
    }
    rows += `</div>`;
  }

  
  compareContainer.innerHTML = `
    ${head}
    <div class="mt-4">
      <h3 class="font-bold text-slate-900 mb-2">Parametrlər</h3>
      ${rows}
    </div>
  `;
}

renderComparePage();

// silme
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".compare-remove");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  let compare = getCompare();
  compare = compare.filter((item) => item !== id);
  saveCompare(compare);
  renderComparePage();
  updateCompareCount();
});