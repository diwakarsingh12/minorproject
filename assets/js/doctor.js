// Get elements
const addDoctorBtn = document.getElementById("addDoctorBtn");
const doctorName = document.getElementById("doctorName");
const specialization = document.getElementById("specialization");
const contact = document.getElementById("contact");
const doctorTableBody = document.querySelector("#doctorTable tbody");

// Load doctors from localStorage
let doctors = JSON.parse(localStorage.getItem("doctors")) || [];

// Function to display doctors
function renderDoctors() {
  doctorTableBody.innerHTML = "";
  doctors.forEach((doc, index) => {
    const row = `
      <tr>
        <td>${doc.name}</td>
        <td>${doc.specialization}</td>
        <td>${doc.contact}</td>
        <td><button onclick="deleteDoctor(${index})">Delete</button></td>
      </tr>`;
    doctorTableBody.innerHTML += row;
  });
}

// Add doctor
addDoctorBtn.addEventListener("click", () => {
  const name = doctorName.value.trim();
  const spec = specialization.value.trim();
  const cont = contact.value.trim();

  if (!name || !spec || !cont) {
    alert("Please fill all fields!");
    return;
  }

  doctors.push({ name, specialization: spec, contact: cont });
  localStorage.setItem("doctors", JSON.stringify(doctors));

  doctorName.value = specialization.value = contact.value = "";
  renderDoctors();
});

// Delete doctor
function deleteDoctor(index) {
  doctors.splice(index, 1);
  localStorage.setItem("doctors", JSON.stringify(doctors));
  renderDoctors();
}

// Show doctors on load
renderDoctors();
