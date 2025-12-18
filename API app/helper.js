export const fetchCategories = (resolve, reject) => {
  fetch("https://dummyjson.com/products/category-list")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
};

export const fetchAllProducts = (resolve, reject) => {
  fetch("https://dummyjson.com/products ")
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

const getRatingStar = (rating) => {
  const fullStar = `★`;
  const emptyStar = `☆`;
  const totalStars = 5;

  const fullStarCount = Math.round(rating);

  let star = ``;
  for (let i = 0; i < totalStars; i++) {
    if (i < fullStarCount) {
      star += `<span class="text-yellow-400 text-[26px] ">${fullStar}</span>`;
    } else {
      star += `<span class="text-grey-400 text-[26px]">${emptyStar}</span>`;
    }
  }
  return star;
};

export const productCardDisplay = (product) => {
  console.log(product);
  let producCardContent = ``;
  product.forEach((item) => {
    producCardContent += `        <div
          class="bg-white flex flex-col rounded-sm overflow-hidden shadow-md hover:scale-[1.01] transition-all relative"
        >
          <a href="javascript:void(0)" class="block">
            <div class="w-full">
              <img
                src="${item.images[0]}"
                alt="Product-1"
                class="w-full aspect-[18/24] object-cover object-top"
              />
            </div>
            <div class="p-4">
              <h5
                class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2"
              >
                ${item.title}
              </h5>
              <h5
                class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2"
              >
                ${getRatingStar(item.rating)}
              </h5>
              <div class="mt-2 flex items-center flex-wrap gap-2">
                <h6 class="text-sm sm:text-base font-semibold text-slate-900">
                  $1${item.price}
                </h6>
                <div
                  class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto"
                  title="Wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    class="fill-slate-800 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <div class="min-h-[50px] p-4 !pt-0">
            <button data-id = ${item.id}
      class=" detailsBtn absolute left-0 right-0 bottom-3 cursor-pointer max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded-sm"
    >
      Product details
    </button>
          </div>
        </div>`;
  });
  return producCardContent;
};

export const showProductSkeleton = () => {
  let skeletonContent = ``;
  let count = [...new Array(8)];

  count.map((_, index) => {
    skeletonContent += `<!-- Product Card Skeleton -->
<div
  class="bg-white flex flex-col rounded-sm overflow-hidden shadow-md relative animate-pulse"
>
  <div class="w-full">
    <div class="w-full aspect-[18/24] bg-slate-200"></div>
  </div>

  <div class="p-4 space-y-3">
    <!-- Title -->
    <div class="h-4 bg-slate-200 rounded w-3/4"></div>
    <div class="h-4 bg-slate-200 rounded w-2/5"></div>

    <!-- Wishlist icon -->
    <div class="flex items-center gap-2 mt-2">
      <div class="h-6 w-16 bg-slate-200 rounded"></div>
      <div class="ml-auto h-8 w-8 bg-slate-200 rounded-full"></div>
    </div>
  </div>

  <div class="min-h-[50px] p-4 !pt-0">
    <!-- Button -->
    <div class="h-10 bg-slate-200 rounded-sm w-full"></div>
  </div>
</div>
`;
  });

  return skeletonContent;
};

export const showCategorySkeleton = () => {
  let skeletonContent = ``;
  let count = [...new Array(20)];

  count.map(() => {
    skeletonContent += `<li class="list-item animate-pulse">
  <div class="block rounded px-4 py-2">
    <div class="h-4 bg-slate-200 rounded w-3/5"></div>
  </div>
</li>

`;
  });

  return skeletonContent;
};
