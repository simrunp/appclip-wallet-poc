document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("verify-btn") as HTMLButtonElement;
  const resultDiv = document.getElementById("result") as HTMLDivElement;

  button.addEventListener("click", () => {
    // Mocked response
    const mockData = {
      name: "Simrun Parulekar",
      dob: "2006-02-14",
      licenseNumber: "X12345678",
      verified: true
    };

    resultDiv.innerHTML = `
      <h2>Verification Result</h2>
      <p><strong>Name:</strong> ${mockData.name}</p>
      <p><strong>Date of Birth:</strong> ${mockData.dob}</p>
      <p><strong>License Number:</strong> ${mockData.licenseNumber}</p>
      <p><strong>Status:</strong> ✅ Verified</p>
    `;
  });
});