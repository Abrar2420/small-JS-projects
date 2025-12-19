const baseURL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}";
const submitBtn = document.querySelector(".submitBtn"); // the submit button
// console.log(submitBtn);
const dropdown = document.querySelectorAll(".select"); // both select elements as an array
// console.log(dropdown);
const msg = document.querySelector(".msg"); // the message field

// for each is looping through both the selects
// run all the code for select1 then select2
dropdown.forEach((select) => {
  // countryList is an object containing all the country code and currency code in pairs
  // for in will loop through
  // for every oobject property in countryList
  for (currencyCode in countryList) {
    // creating n option elements for adding all the currency code to both selects
    let newOptions = document.createElement("option");
    newOptions.innerText = currencyCode;
    newOptions.value = currencyCode;

    // default selecting USD & BDT
    // we are checking first for the which select it is
    // then when the option reaches "USD" country name in loop
    // set selected = "selected" for that option element
    if (select.name === "from" && currencyCode === "USD") {
      newOptions.selected = "selected";
    } else if (select.name === "to" && currencyCode === "BDT") {
      newOptions.selected = "selected";
    }
    select.append(newOptions); // appending all the options to both of the selects
  }

  // updating the flag matching the currency code
  const updateFlag = (element) => {
    // the parameter is the slected option in the select
    let currencyCode = element.value; // geting the currency code
    let countryCode = countryList[currencyCode]; // geting the country code from the countryList object
    // we are storing the flag src with the country code dynamically added to the url
    let imgSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; //
    let img = element.parentElement.querySelector("img"); // getting the image tags
    img.src = imgSrc; // setting its src to our dynamic src
    //   console.log(currencyCode, countryCode);
  };
  // here we are calling the updateFlag fucntion
  // when ever there is a change in the selected option
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
});

// getting our converted rate when we click on the button
submitBtn.addEventListener("click", async (event) => {
  event.preventDefault(); // preventing the default reload
  let amount = document.querySelector(".amount input"); // getting the input tag
  let amountValue = amount.value; // input value
  //   console.log(amountValue);
  // checking if the input provided is valid
  if (amountValue === "" || amountValue < 1 || isNaN(amountValue)) {
    // setting input value to 1 in case of invalid input
    amountValue = 1;
    amount.value = "1";
  }

  // getting the value form the select on the left side
  const fromCurrency = document
    .querySelector("select[name='from']") // attribute selector
    .value.toLowerCase(); // converting to samll letter for matching the api format
  // getting the value form the select on the right side
  const toCurrency = document
    .querySelector("select[name='to']")
    .value.toLowerCase();

  // getting the current in this (yyyy-mm-dd) format
  const currentDate = new Date().toISOString().split("T")[0]; // usinsg split() get the first part of the returned date

  // storing the dynamic url for the api
  // date & currency has been put in in the api as per the current date, & and select value
  const URL = `https://${currentDate}.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`;
  //   console.log(fromCurrency, toCurrency);
  try {
    const response = await fetch(URL); // fecthing the data at the mentioned url
    const data = await response.json(); // converting to json
    console.log(data);

    //& main Logic
    // storing the rate which is
    // the data object > currency > ie. usd: {bdt: 122.23}
    const rate = data[fromCurrency][toCurrency];
    console.log(rate);

    // input * exchange rate
    const finalAmount = (amountValue * rate).toFixed(2);

    // updating the message text with the correct data
    msg.innerText = `${amountValue} ${fromCurrency.toUpperCase()} = ${finalAmount} ${toCurrency.toUpperCase()}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate";
    console.error(error);
  }
});
