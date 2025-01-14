


// const students = [
//     {
//         id: "001",
//         name: "ផាន់ ច័ន្ទដារ័ត្ន \n PHAN_CHANDAROTH",
//         gender: "ប្រុស",
//         dob: "03-01-1994",
//         address: "ស្នងការដ្ឋានកំពង់ចាម",
//         phone: "",
//         facebook: "https://www.facebook.com/khun.sarawat.1?mibextid=ZbWKwL",
//         telegram: "",
//         photo: "./img/daroth.png",
//     },
// ];

        const menuWrapper = document.querySelector(".menu-wrapper");
        menuWrapper.innerHTML = students.map(student => `
            <div class="card" onclick="showDetails('${student.id}')">
                <img src="${student.photo}" alt="${student.name}">
                <h3 class="card-heading">${student.name}</h3>
                <span class="price">ID: ${student.id}</span>
            </div>
        `).join("");

        function showDetails(studentId) {
            const student = students.find(s => s.id === studentId);
            if (student) {
                document.getElementById("modalPhoto").src = student.photo;
                document.getElementById("modalName").textContent = student.name;
                document.getElementById("modalId").textContent = student.id;
                document.getElementById("modalGender").textContent = student.gender;
                document.getElementById("modalDob").textContent = student.dob;
                document.getElementById("modalAddress").textContent = student.address;
                document.getElementById("modalPhone").textContent = student.phone;
                document.getElementById("modalFacebook").href = student.facebook;
                document.getElementById("modalTelegram").href = student.telegram;
                document.getElementById("studentModal").style.display = "block";
            }
        }

        document.getElementById("closeModal").onclick = function () {
            document.getElementById("studentModal").style.display = "none";
        };

// Search functionality--------------------------------------------------------
document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase(); // Convert to lowercase for case-insensitive search
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm) ||  // Search by name
        student.id.includes(searchTerm) ||                 // Search by ID
        student.dob.includes(searchTerm) ||                // Search by DOB
        student.gender.toLowerCase().includes(searchTerm) ||// Search by gender
        student.address.toLowerCase().includes(searchTerm)  // Search by address
    );

// Update menu-wrapper with filtered results------------------------------------------
    menuWrapper.innerHTML = filteredStudents.map(student => `
        <div class="card" onclick="showDetails('${student.id}')">
            <img src="${student.photo}" alt="${student.name}">
            <h3 class="card-heading">${highlightText(student.name, searchTerm)}</h3>
            <span class="price">${highlightText("ID: " + student.id, searchTerm)}</span>
        </div>
    `).join("");

// Show "No results found" message if no matches--------------------------------------
    if (filteredStudents.length === 0) {
        menuWrapper.innerHTML = `<p class="find" style="color:white; text-align:center;">គ្មានលទ្ធផលស្វែងរក</p>`;
    }
});


// Function to highlight the text-------------------------------------
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Regex to find search term and ignore case
    return text.replace(regex, '<span class="highlight">$1</span>'); // Wrap found text in a span
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