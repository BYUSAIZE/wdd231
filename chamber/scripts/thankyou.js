document.addEventListener("DOMContentLoaded", () => {
  const formData = new URLSearchParams(window.location.search);
  const resultsContainer = document.querySelector("#results");

  if (resultsContainer && formData.has("fname")) {
    const formattedDate = formData.get("timestamp") 
      ? new Date(formData.get("timestamp")).toLocaleString() 
      : "N/A";

    resultsContainer.innerHTML = `
      <p><strong>First Name:</strong> ${formData.get("fname") || ""}</p>
      <p><strong>Last Name:</strong> ${formData.get("lname") || ""}</p>
      <p><strong>Email Address:</strong> ${formData.get("email") || ""}</p>
      <p><strong>Mobile Phone:</strong> ${formData.get("phone") || ""}</p>
      <p><strong>Business / Organization:</strong> ${formData.get("organization") || ""}</p>
      <p><strong>Date Loaded:</strong> ${formattedDate}</p>
    `;
  } else if (resultsContainer) {
    resultsContainer.innerHTML = "<p>No form submission details found.</p>";
  }
});