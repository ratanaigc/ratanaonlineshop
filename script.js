
const menuWrapper = document.querySelector(".menu-wrapper");

// Generate product cards
menuWrapper.innerHTML = product.map(item => `
    <div class="card" onclick="showDetails('${item.id}')">
        <img src="${item.photo}" alt="${item.name}">
        <h3 class="card-heading">${item.name}</h3>
        <span class="price">Price: ${item.price}</span>
    </div>
`).join("");

// Show product details in modal
function showDetails(productId) {
    const item = product.find(p => p.id === productId);
    if (item) {
        document.getElementById("modalPhoto").src = item.photo;
        document.getElementById("modalName").textContent = item.name;
        document.getElementById("modalCategory").textContent = item.category;
        document.getElementById("modalPrice").textContent = item.price;
        document.getElementById("modalDetail").textContent = item.detail;
        document.getElementById("modalAddress").textContent = item.address;
        document.getElementById("modalPhone").textContent = item.phone;
        document.getElementById("studentModal").style.display = "flex";
    }
}

// Close modal
document.getElementById("closeModal").onclick = function () {
    document.getElementById("studentModal").style.display = "none";
};

// Search functionality
document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = product.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );

    menuWrapper.innerHTML = filteredProducts.map(item => `
        <div class="card" onclick="showDetails('${item.id}')">
            <img src="${item.photo}" alt="${item.name}">
            <h3 class="card-heading">${highlightText(item.name, searchTerm)}</h3>
            <span class="price">${highlightText("Price: " + item.price, searchTerm)}</span>
        </div>
    `).join("");

if (filteredProducts.length === 0) {
    menuWrapper.innerHTML = `<p class="no-result">គ្មានលទ្ធផលស្វែងរក</p>`;
}
});

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// conect info --------------------------------------------------

// Select the connect button and the info section
const connectButton = document.querySelector(".conect");
const infoBox = document.querySelector(".info");

// Set initial display state of the info box
infoBox.style.display = "none"; // Start with it hidden

// Add an event listener for the connect button
connectButton.addEventListener("click", function() {
    // Toggle the visibility of the info box
    if (infoBox.style.display === "none" || infoBox.style.display === "") {
        infoBox.style.display = "block"; // Show the info box
        infoBox.style.maxHeight = "1000px"; // Optionally, you can animate height
        infoBox.style.padding = "20px"; // Add padding when visible (optional)
    }
    infoBox.style.padding = "0 20px"; // Remove padding when hidden (optional)
// Smooth scroll to the info section when it is revealed
infoBox.scrollIntoView({ behavior: "smooth", block: "start" });
});
