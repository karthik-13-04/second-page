// Cinema data
const cinemas = [
    {
      name: "Kameswari & Kinnera AC Laser 4K Projection",
      features: "Dolby Atmos & 7.1 Ultrasound, Vizag",
      showtimes: ["09:45 PM", "10:00 PM"],
      nonCancellable: true,
    },
    {
      name: "Sree Leelamahal AC Dolby Atmos",
      features: "IMAX Experience, Hyderabad",
      showtimes: ["08:30 PM", "09:00 PM"],
      nonCancellable: false,
    }
    // Add more cinemas as needed
  ];
  
  // Function to render cinema items
  function renderCinemas() {
    const cinemaList = document.getElementById("cinema-list");
    cinemaList.innerHTML = ""; // Clear previous content
  
    cinemas.forEach((cinema) => {
      const cinemaItem = document.createElement("div");
      cinemaItem.className = "cinema-item";
  
      const cinemaTitle = document.createElement("h2");
      cinemaTitle.textContent = cinema.name;
  
      const cinemaFeatures = document.createElement("p");
      cinemaFeatures.textContent = cinema.features;
  
      const showtimesDiv = document.createElement("div");
      showtimesDiv.className = "showtimes";
      cinema.showtimes.forEach((time) => {
        const showtimeSpan = document.createElement("span");
        showtimeSpan.textContent = time;
        showtimesDiv.appendChild(showtimeSpan);
      });
  
      const actionsDiv = document.createElement("div");
      actionsDiv.className = "actions";
      const directionsButton = document.createElement("button");
      directionsButton.textContent = "Get Directions";
      const moreInfoButton = document.createElement("button");
      moreInfoButton.textContent = "More Info";
      actionsDiv.appendChild(directionsButton);
      actionsDiv.appendChild(moreInfoButton);
  
      const nonCancellableP = document.createElement("p");
      nonCancellableP.textContent = cinema.nonCancellable
        ? "Non-Cancellable"
        : "Cancellable";
  
      cinemaItem.appendChild(cinemaTitle);
      cinemaItem.appendChild(cinemaFeatures);
      cinemaItem.appendChild(showtimesDiv);
      cinemaItem.appendChild(actionsDiv);
      cinemaItem.appendChild(nonCancellableP);
  
      cinemaList.appendChild(cinemaItem);
    });
  }
  
  // Call the function to render cinemas
  renderCinemas();
  