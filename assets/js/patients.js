// Get elements
const addPatientBtn = document.getElementById("addPatientBtn");
const patientName = document.getElementById("patientName");
const age = document.getElementById("age");
const disease = document.getElementById("disease");
const doctorSelect = document.getElementById("assignedDoctor");
const patientTableBody = document.querySelector("#patientTable tbody");

// Load data
let patients = JSON.parse(localStorage.getItem("patients")) || [];
let doctors = JSON.parse(localStorage.getItem("doctors")) || [];

// Fill doctor dropdown
function loadDoctorDropdown() {
  doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
  doctors.forEach((doc) => {
    const option = document.createElement("option");
    option.value = doc.name;
    option.textContent = doc.name;
    doctorSelect.appendChild(option);
  });
}

// Display patients
function renderPatients() {
  patientTableBody.innerHTML = "";
  patients.forEach((p, index) => {
    const row = `
      <tr>
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>${p.disease}</td>
        <td>${p.doctor}</td>
        <td><button onclick="deletePatient(${index})">Delete</button></td>
      </tr>`;
    patientTableBody.innerHTML += row;
  });
}

// Add patient
addPatientBtn.addEventListener("click", () => {
  const name = patientName.value.trim();
  const a = age.value.trim();
  const d = disease.value.trim();
  const doc = doctorSelect.value;

  if (!name || !a || !d || !doc) {
    alert("Please fill all fields!");
    return;
  }

  patients.push({ name, age: a, disease: d, doctor: doc });
  localStorage.setItem("patients", JSON.stringify(patients));

  patientName.value = age.value = disease.value = "";
  doctorSelect.value = "";
  renderPatients();
});

// Delete patient
function deletePatient(index) {
  patients.splice(index, 1);
  localStorage.setItem("patients", JSON.stringify(patients));
  renderPatients();
}

// Initialize
loadDoctorDropdown();
renderPatients();
