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
