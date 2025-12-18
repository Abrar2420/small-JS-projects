import {
  fetchCategories,
  fetchAllProducts,
  productCardDisplay,
  showProductSkeleton,
  showCategorySkeleton,
} from "./helper.js";

const list = document.querySelector("#list");
const productCard = document.querySelector("#productCard");

const getCategories = () => {
  return new Promise(fetchCategories);
};

const getAllProducts = () => {
  return new Promise(fetchAllProducts);
};

list.innerHTML = showCategorySkeleton();
productCard.innerHTML = showProductSkeleton();

window.addEventListener("load", (event) => {
  getCategories()
    .then((categoryList) => {
      // console.log(categoryList);

      let listContent = ``;
      categoryList.forEach((listItem) => {
        listContent += `<li class="list-item">
          <a
            href="javascript:void(0)"
            class="text-slate-700 font-medium text-[15px] block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
          >
            ${listItem}
          </a>
        </li>`;
      });
      return listContent;
    })
    .then((listContent) => {
      list.innerHTML = listContent;
    })
    .then(() => {
      getAllProducts()
        .then((AllProducts) => {
          return productCardDisplay(AllProducts.products);
        })
        .then((productCards) => {
          //   console.log(productCards);
          productCard.innerHTML = productCards;
        })
        .then(() => {
          // const detailsBtn = document.querySelector("#detailsBtn");
          // console.log(detailsBtn);
          productCard.addEventListener("click", (e) => {
            let id = e.target.dataset.id;
            if (e.target.classList.contains("detailsBtn")) {
              window.location.href = `http://127.0.0.1:5500/API%20app/productDetails.html?id=${id}`;
            }
          });
        });
    });
});
