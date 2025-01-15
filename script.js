

const product = [
    { 
        id: "1", 
        category: "គឿងសម្ភារៈក្នុងផ្ទះ", 
        name: "ឆ្នាំងអគ្គិសនី មិនបាច់ប្រើខ្លាញ់",
        price: "46$",
        photo: "./img/product/camel.png",
        gender: "Electronics",
        address: "Apple Store",
        phone: "123-456-7890",
    },
    { 
        id: "1", 
        category: "គឿងសម្ភារៈក្នុងផ្ទះ", 
        name: "ឆ្នាំងអគ្គិសនី មិនបាច់ប្រើខ្លាញ់",
        price: "46$",
        photo: "./img/product/camel.png",
        gender: "Electronics",
        address: "Apple Store",
        phone: "123-456-7890",
    },
    { 
        id: "1", 
        category: "គឿងសម្ភារៈក្នុងផ្ទះ", 
        name: "ឆ្នាំងអគ្គិសនី មិនបាច់ប្រើខ្លាញ់",
        price: "46$",
        photo: "./img/product/camel.png",
        gender: "Electronics",
        address: "Apple Store",
        phone: "123-456-7890",
    },
    { 
        id: "1", 
        category: "គឿងសម្ភារៈក្នុងផ្ទះ", 
        name: "ឆ្នាំងអគ្គិសនី មិនបាច់ប្រើខ្លាញ់",
        price: "46$",
        photo: "./img/product/camel.png",
        gender: "Electronics",
        address: "Apple Store",
        phone: "123-456-7890",
    },
    { 
        id: "1", 
        category: "គឿងសម្ភារៈក្នុងផ្ទះ", 
        name: "ឆ្នាំងអគ្គិសនី មិនបាច់ប្រើខ្លាញ់",
        price: "46$",
        photo: "./img/product/camel.png",
        gender: "Electronics",
        address: "Apple Store",
        phone: "123-456-7890",
    },
    { 
        id: "1", 
        category: "គឿងសម្ភារៈក្នុងផ្ទះ", 
        name: "ឆ្នាំងអគ្គិសនី មិនបាច់ប្រើខ្លាញ់",
        price: "46$",
        photo: "./img/product/camel.png",
        gender: "Electronics",
        address: "Apple Store",
        phone: "123-456-7890",
    },

    // អ្នកអាចបន្ថែមទិន្នន័យផ្សេងៗនៅទីនេះ
];

const menuWrapper = document.querySelector(".menu-wrapper");

// Generate product cards
menuWrapper.innerHTML = product.map(item => `
    <div class="card" onclick="showDetails('${item.id}')">
        <img src="${item.photo}" alt="${item.name}">
        <h3 class="card-heading">${item.name}</h3>
        <span class="price">Price: ${item.price}</span>
    </div>
`).join("");

function showDetails(productId) {
    const item = product.find(p => p.id === productId);
    if (item) {
        document.getElementById("modalPhoto").src = item.photo;
        document.getElementById("modalName").textContent = item.name;
        document.getElementById("modalId").textContent = item.id;
        document.getElementById("modalGender").textContent = item.gender;
        document.getElementById("modalDob").textContent = item.dob;
        document.getElementById("modalAddress").textContent = item.address;
        document.getElementById("modalPhone").textContent = item.phone;
        document.getElementById("modalFacebook").href = item.facebook;
        document.getElementById("modalTelegram").href = item.telegram;
        document.getElementById("studentModal").style.display = "block";
    }
}

document.getElementById("closeModal").onclick = function () {
    document.getElementById("studentModal").style.display = "none";
};

// Search functionality
document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = product.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.id.includes(searchTerm) ||
        item.dob.includes(searchTerm) ||
        item.gender.toLowerCase().includes(searchTerm) ||
        item.address.toLowerCase().includes(searchTerm)
    );

    menuWrapper.innerHTML = filteredProducts.map(item => `
        <div class="card" onclick="showDetails('${item.id}')">
            <img src="${item.photo}" alt="${item.name}">
            <h3 class="card-heading">${highlightText(item.name, searchTerm)}</h3>
            <span class="price">${highlightText("Price: " + item.price, searchTerm)}</span>
        </div>
    `).join("");

    if (filteredProducts.length === 0) {
        menuWrapper.innerHTML = `<p class="find" style="color:white; text-align:center;">គ្មានលទ្ធផលស្វែងរក</p>`;
    }
});

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}


// Get the target list element-----------------------------------------
    const list = document.getElementById('dynamic-list');

    // Generate list items A = 0 to Z = 25
    for (let i = 0; i <= 25; i++) {
        const char = String.fromCharCode(65 + i); // Convert ASCII code to letter
        const li = document.createElement('li'); // Create <li> element
        li.textContent = `${char} = ${i}`; // Set text content
        list.appendChild(li); // Append to <ul>
    }

    // Add the last item
    const finalLi = document.createElement('li');
    finalLi.textContent = 'បម្លែងតែមួយអក្សរដំបូងទៅជាលេខក៏បាន😂';
    list.appendChild(finalLi);


// Select the image and modal---------------------------------------------------
const image = document.getElementById("modalPhoto");

// Toggle the 'enlarged' class on click
image.addEventListener("click", function() {
    image.classList.toggle("enlarged");
});

// Optional: Close the modal when clicking outside the image
const modal = document.getElementById("studentModal");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
