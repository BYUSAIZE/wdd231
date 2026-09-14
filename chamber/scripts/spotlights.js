// ============================================
// spotlights.js — fetch members.json, pick 2-3 gold/silver
// members at random, and render spotlight cards
// ============================================

const membershipLabels = {
    1: 'Member',
    2: 'Silver',
    3: 'Gold'
};

async function getSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        const eligible = members.filter((member) => member.membership === 2 || member.membership === 3);
        const chosen = pickRandom(eligible, eligible.length >= 3 ? 3 : 2);
        displaySpotlights(chosen);
    } catch (error) {
        console.error('Error loading spotlight data:', error);
        document.getElementById('spotlight-container').innerHTML =
            '<p>Sorry, spotlight information could not be loaded right now.</p>';
    }
}

function pickRandom(array, count) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function displaySpotlights(members) {
    const container = document.getElementById('spotlight-container');
    container.innerHTML = '';

    members.forEach((member) => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <div class="card-body">
                <span class="membership-badge level-${member.membership}">
                    ${membershipLabels[member.membership]}
                </span>
                <h3>${member.name}</h3>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <p><a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
            </div>
        `;

        container.appendChild(card);
    });
}

getSpotlights();