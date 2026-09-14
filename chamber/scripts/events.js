// ============================================
// events.js — fetch events.json and render current events
// ============================================

async function getEvents() {
    try {
        const response = await fetch('data/events.json');
        const events = await response.json();
        displayEvents(events);
    } catch (error) {
        console.error('Error loading events:', error);
        document.getElementById('events-container').innerHTML =
            '<p>Sorry, event information could not be loaded right now.</p>';
    }
}

function displayEvents(events) {
    const container = document.getElementById('events-container');
    container.innerHTML = '';

    events.forEach((event) => {
        const card = document.createElement('article');
        card.classList.add('event-card');

        const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        card.innerHTML = `
            <h3>${event.title}</h3>
            <p class="event-date">${formattedDate}</p>
            <p class="event-location">${event.location}</p>
            <p>${event.description}</p>
        `;

        container.appendChild(card);
    });
}

getEvents();