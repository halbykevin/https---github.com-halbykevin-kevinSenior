document.getElementById("search-button").addEventListener("click", function () {
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

// dark-light mode
document.addEventListener("DOMContentLoaded", function () {
  // Set dark theme colors as default on page load
  document.documentElement.style.setProperty("--primary-bg-color", "#171a21");
  document.documentElement.style.setProperty("--secondary-bg-color", "#1b2838");
  document.documentElement.style.setProperty("--text-color", "#ffffff");

  const toggleSwitch = document.getElementById("darkmode-toggle");
  toggleSwitch.addEventListener("change", switchTheme, false);

  function switchTheme(e) {
    if (e.target.checked) {
      // Apply light theme when moon is showing
      document.documentElement.style.setProperty(
        "--primary-bg-color",
        "#2a475e"
      );
      document.documentElement.style.setProperty(
        "--secondary-bg-color",
        "#66c0f4"
      );
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#ffffff"
      );
    } else {
      // Apply dark theme when sun is showing
      document.documentElement.style.setProperty(
        "--primary-bg-color",
        "#171a21"
      );
      document.documentElement.style.setProperty(
        "--secondary-bg-color",
        "#1b2838"
      );
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#000000"
      );
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("darkmode-toggle");

  toggleSwitch.addEventListener("change", switchTheme, false);

  function switchTheme(e) {
    const body = document.body;
    const productInfos = document.querySelectorAll(".product-info");

    if (e.target.checked) {
      body.style.background = "linear-gradient(to right, #2a475e, #66c0f4)";
      body.style.color = "#000000";

      productInfos.forEach((info) => {
        info.style.backgroundColor = "white";
        info.style.color = "black";
      });
    } else {
      body.style.background = "linear-gradient(to right, #171a21, #1b2838)";
      body.style.color = "#ffffff";

      productInfos.forEach((info) => {
        info.style.backgroundColor = "black";
        info.style.color = "white";
      });
    }
  }

  // Initialize theme based on toggle's current state
  const isDarkMode = toggleSwitch.checked;
  switchTheme({ target: { checked: isDarkMode } });
});

// fix dark mode button while scrolling
window.addEventListener("scroll", function () {
  var darkModeToggle = document.querySelector(".darkThemeBtn");
  var scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 100) {
    // Adjust this value based on when you want the toggle to fix
    darkModeToggle.style.position = "fixed";
  } else {
    darkModeToggle.style.position = "absolute";
  }
});
