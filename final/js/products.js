// js/products.js
import { openProductModal } from "./modal.js";

export async function initProducts() {
    const grid = document.getElementById("product-grid");
    const categoryFilter = document.getElementById("category-filter");
    const sortSelect = document.getElementById("sort-products");

    if (!grid) return;

    let products = [];

    try {
       const response = await fetch("./data/products.json");
        if (!response.ok) throw new Error("Failed to load products");
        products = await response.json();
    } catch (error) {
        grid.innerHTML = `<p class="error">Could not load products at this time. Please try again later.</p>`;
        console.error(error);
        return;
    }

    function displayProducts(items) {
        if (items.length === 0) {
            grid.innerHTML = `<p>No products found in this category.</p>`;
            return;
        }

        grid.innerHTML = items.map(product => `
            <article class="product-card" data-id="${product.id}" style="cursor: pointer;">
                <img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="300">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3>${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p class="product-desc">${product.description}</p>
                </div>
            </article>
        `).join("");

        // Attach click event listeners to each product card to open the modal
        const cards = grid.querySelectorAll(".product-card");
        cards.forEach(card => {
            card.addEventListener("click", () => {
                const productId = card.getAttribute("data-id");
                const selectedProduct = products.find(p => p.id === productId);
                if (selectedProduct) {
                    openProductModal(selectedProduct);
                }
            });
        });
    }

    function filterAndSortProducts() {
        let result = [...products];
        const category = categoryFilter ? categoryFilter.value : "all";
        const sortBy = sortSelect ? sortSelect.value : "name";

        // Filter by category
        if (category && category !== "all") {
            result = result.filter(p => p.category === category);
        }

        // Sort items
        if (sortBy === "name") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "low") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === "high") {
            result.sort((a, b) => b.price - a.price);
        }

        displayProducts(result);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener("change", filterAndSortProducts);
    }
    if (sortSelect) {
        sortSelect.addEventListener("change", filterAndSortProducts);
    }

    // Initial render
    displayProducts(products);
}