const loginForm = document.getElementById("loginForm");
const errorDisplay = document.getElementById("error-message");

loginForm.addEventListener("submit", async (event) => {
  // 1. Prevent the page from refreshing
  event.preventDefault();

  // 2. Get the values from the input fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    // 3. Make the API call
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional
      }),
    });

    // 4. Check if the response is successful (status 200-299)
    if (response.ok) {
      const data = await response.json();
      console.log("Login Successful!", data);

      // Success! Take them to the index page
      window.location.href = "index.html";
    } else {
      // 5. If it failed, show the error from the API
      const errorData = await response.json();
      errorDisplay.innerText = errorData.message || "Invalid Credentials";
    }
  } catch (error) {
    // This catches network errors (like no internet)
    errorDisplay.innerText = "Connection error. Please try again.";
  }
});
