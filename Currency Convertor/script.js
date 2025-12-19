const formSubmit = document.querySelector(".form");
// console.log(formSubmit);
const dropdown = document.querySelectorAll(".select");
// console.log(dropdown);

dropdown.forEach((select) => {
  for (currencyCode in countryList) {
    //   console.log(code, countryList[code]);
    let newOptions = document.createElement("option");
    newOptions.innerText = currencyCode;
    newOptions.value = currencyCode;
    if (select.name === "from" && currencyCode === "USD") {
      newOptions.selected = "selected";
    } else if (select.name === "to" && currencyCode === "BDT") {
      newOptions.selected = "selected";
    }
    select.append(newOptions);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
});

const updateFlag = (element) => {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let imgSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = imgSrc;
  //   console.log(currencyCode, countryCode);
};

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
});
