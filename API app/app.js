const list = document.querySelector("#list");

const fetchCategories = (resolve, reject) => {
  fetch("https://dummyjson.com/products/category-list")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
};

const getCategories = () => {
  return new Promise(fetchCategories);
};

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
    });
});
