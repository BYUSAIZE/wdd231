// js/modal.js

export function initModal() {
    const dialog = document.getElementById("product-dialog");
    if (!dialog) return;

    // Close when clicking outside the modal box (on the backdrop)
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
}

// Helper function to open the modal with dynamic product details
export function openProductModal(product) {
    const dialog = document.getElementById("product-dialog");
    const dialogContent = document.getElementById("dialog-content");
    if (!dialog || !dialogContent) return;

    // Populate the modal inner HTML (including a close button with id="close-dialog")
    dialogContent.innerHTML = `
        <button id="close-dialog" class="close-button" aria-label="Close modal">&times;</button>
        <div class="modal-product-layout">
            <img src="${product.image}" alt="${product.name}" class="modal-image">
            <div class="modal-details">
                <span class="eyebrow">${product.category}</span>
                <h2>${product.name}</h2>
                <p class="modal-price">$${product.price.toFixed(2)}</p>
                <p>${product.description}</p>
                <button class="button" id="save-favorite" style="margin-top: 1rem;">Save to Favorites</button>
            </div>
        </div>
    `;

    // Wire up the close button inside the newly injected content
    const closeBtn = dialogContent.querySelector("#close-dialog");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            dialog.close();
        });
    }

    // Show the modal
    dialog.showModal();
}