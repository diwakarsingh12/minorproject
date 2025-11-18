const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

searchBtn.addEventListener("click", () => {
  const name = searchInput.value.trim().toLowerCase();
  if (!name) {
    alert("Please enter a patient name!");
    return;
  }

  const patients = JSON.parse(localStorage.getItem("patients")) || [];
  const found = patients.find((p) => p.name.toLowerCase() === name);

  if (found) {
    searchResult.innerHTML = `
      <div class="result-card">
        <p><strong>👤 Name:</strong> ${found.name}</p>
        <p><strong>🦠 Disease:</strong> ${found.disease}</p>
        <p><strong>👨‍⚕️ Doctor:</strong> ${found.doctor}</p>
      </div>
    `;
  } else {
    searchResult.innerHTML = `<p>No patient found with that name.</p>`;
  }
});
