// ============================================
// directory.js — fetch members.json, render cards,
// and toggle between grid and list views
// ============================================

const membershipLabels = {
    1: 'Member',
    2: 'Silver',
    3: 'Gold'
};

async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error loading member data:', error);
        document.getElementById('member-container').innerHTML =
            '<p>Sorry, member information could not be loaded right now.</p>';
    }
}

function displayMembers(members) {
    const container = document.getElementById('member-container');
    container.innerHTML = '';

    members.forEach((member) => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <div class="card-body">
                <span class="membership-badge level-${member.membership}">
                    ${membershipLabels[member.membership]}
                </span>
                <h3>${member.name}</h3>
                <p>${member.tagline}</p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
            </div>
        `;

        container.appendChild(card);
    });
}

// ---- Grid / List view toggle ----
const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');
const memberContainer = document.getElementById('member-container');

gridButton.addEventListener('click', () => {
    memberContainer.classList.remove('list-view');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
});

listButton.addEventListener('click', () => {
    memberContainer.classList.add('list-view');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
});

getMembers();