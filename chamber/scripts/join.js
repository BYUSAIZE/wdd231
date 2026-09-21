document.addEventListener("DOMContentLoaded", () => {
  // Set Timestamp
  const timestampInput = document.querySelector("#timestamp");
  if (timestampInput) {
    timestampInput.value = new Date().toISOString();
  }

  // Handle Modals
  const modalButtons = document.querySelectorAll(".open-modal");
  modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const dialog = document.getElementById(modalId);
      if (dialog) dialog.showModal();
    });
  });

  const closeButtons = document.querySelectorAll(".close-modal");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (dialog) dialog.close();
    });
  });
});