// js/events.js

document.addEventListener("DOMContentLoaded", () => {
  // ======= EVENT DATA =======
  // To add a new event, simply add an object to this array.
  // To show "No events planned", leave this array empty: []
  const eventsData = [
     {
      title: "Annual Hackathon 2026",
      date: "April 15-17, 2026",
      time: "Starts at 10:00 AM",
      location: "Main Auditorium, TSA College",
      description:
        "Join us for our biggest event of the year! A 48-hour coding marathon where you form teams, solve real-world problems, and build amazing projects from scratch. Mentors will be available, and free food is provided.",
      registrationLink: "#register-hackathon",
      isOpen: true, // Set to false to disable the register button
    },
    {
      title: "Intro to React Workshop",
      date: "May 5, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 3",
      description:
        "A beginner-friendly workshop deep diving into modern web development with React. You'll learn about components, state, hooks, and build your first functioning single-page application.",
      registrationLink: "#register-react",
      isOpen: true,
    },
    {
      title: "Cybersecurity CTF",
      date: "May 20, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Virtual & Lab 1",
      description:
        "Test your security skills in our Capture The Flag competition. Challenges range from web exploitation to reverse engineering. Prizes for the top 3 teams.",
      registrationLink: "#register-ctf",
      isOpen: false, // E.g., Registration closed
    },
  ];

  /* 
    To test the "No Events" state, comment out the array above 
    and uncomment this empty array:
    const eventsData = [];
  */

  // ======= RENDERING LOGIC =======
  const eventsContainer = document.getElementById("events-container");

  if (!eventsContainer) return; // Exit if container not found

  if (eventsData.length === 0) {
    // Render "No Events" state
    eventsContainer.innerHTML = `
      <div class="no-events-message">
        No Events Planned Currently
      </div>
    `;
  } else {
    // Render the events
    let htmlContent = "";

    eventsData.forEach((event, index) => {
      // Calculate a slight delay for staggered entrance animation
      const delay = index * 0.15;

      const buttonHtml = event.isOpen
        ? `<a href="${event.registrationLink}" class="event-btn">Register Now</a>`
        : `<span class="event-btn disabled">Registration Closed</span>`;

      htmlContent += `
        <div class="event-card" style="animation-delay: ${delay}s">
          <div class="event-header">
            <div class="event-title-group">
              <h2>${event.title}</h2>
              <div class="event-location">
                <span>📍</span> ${event.location}
              </div>
            </div>
            <div class="event-date-badge">
              <span class="date">${event.date}</span>
              <span class="time">${event.time}</span>
            </div>
          </div>
          <div class="event-description">
            <p>${event.description}</p>
          </div>
          <div class="event-footer">
            ${buttonHtml}
          </div>
        </div>
      `;
    });

    eventsContainer.innerHTML = htmlContent;
  }
});
