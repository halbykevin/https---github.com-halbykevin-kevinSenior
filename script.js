document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("search-button")
    .addEventListener("click", function () {
      // Get the value of the search bar
      var query = document.getElementById("search-bar").value.toLowerCase();

      // Select all product cards
      var productCards = document.querySelectorAll(".product-card");

      // Iterate over each product card
      productCards.forEach(function (card) {
        // Get the product name from the h3 element
        var productName = card.querySelector("h3").textContent.toLowerCase();

        // Check if the product name includes the search query
        if (productName.includes(query)) {
          // If it does, display the product card
          card.style.display = "block";
        } else {
          // Otherwise, hide the product card
          card.style.display = "none";
        }
      });
    });
});

// dark-light mode
document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("darkmode-toggle");

  toggleSwitch.addEventListener("change", switchTheme, false);

  function switchTheme(e) {
    const body = document.body;
    const productInfos = document.querySelectorAll(".product-info");

    if (e.target.checked) {
      body.style.background = "linear-gradient(to right, #2a475e, #66c0f4)";
      body.style.color = "#000000";

      // Assuming productInfos is an array of elements
      productInfos.forEach((info) => {
        info.style.background = "linear-gradient(to top, #c7d5e0, #ffffff)"; // Adjust as needed
        info.style.color = "black";
      });
    } else {
      body.style.background = "linear-gradient(to right, #171a21, #1b2838)";
      body.style.color = "#ffffff";

      // Assuming productInfos is an array of elements
      productInfos.forEach((info) => {
        info.style.background = "linear-gradient(to top, #171a21, #1b2838)"; // Adjust as needed
        info.style.color = "white";
      });
    }
  }

  // Initialize theme based on toggle's current state
  const isDarkMode = toggleSwitch.checked;
  switchTheme({ target: { checked: isDarkMode } });
});

// fix dark mode button while scrolling
// window.addEventListener("scroll", function () {
//   var darkModeToggle = document.querySelector(".darkThemeBtn");
//   var scrollY = window.scrollY || window.pageYOffset;

//   if (scrollY > 100) {
//     // Adjust this value based on when you want the toggle to fix
//     darkModeToggle.style.position = "fixed";
//   } else {
//     darkModeToggle.style.position = "absolute";
//   }
// });
