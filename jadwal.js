// async function to load jadwal data from JSON and populate the HTML
async function loadJadwal() {
  try {
    // Fetch jadwal data from JSON file
    const response = await fetch("jadwal-ujian.json");
    // waiting for the response and parsing it as JSON
    const data = await response.json();

    // Get the container element to hold the jadwal cards
    const container = document.querySelector(".bodyjadwalcard");
    // Get the icon template
    const iconTemplate = document.getElementById("calendar-icon");

    // Iterate over each day's jadwal
    data.jadwal.forEach((day) => {
      // Create card
      const card = document.createElement("div");
      card.className = "card-dock-jadwal";

      // Create ddt-container
      const ddtContainer = document.createElement("div");
      ddtContainer.className = "ddt-container";

      // Create daydueDate
      const dateDiv = document.createElement("div");
      dateDiv.className = "daydueDate";

      //   Create icon span
      const iconSpan = document.createElement("span");
      iconSpan.className = "icon";
      iconSpan.innerHTML = iconTemplate.innerHTML;

      const dateP = document.createElement("p");
      dateP.textContent = day.tanggal;

      //   Append icon and date to dateDiv
      dateDiv.appendChild(iconSpan);
      dateDiv.appendChild(dateP);

      // Create room-t
      const roomDiv = document.createElement("div");
      roomDiv.className = "room-t";
      const roomP = document.createElement("p");
      roomP.textContent = day.ruang;
      roomDiv.appendChild(roomP);

      //   Append dateDiv and roomDiv to ddtContainer
      ddtContainer.appendChild(dateDiv);
      ddtContainer.appendChild(roomDiv);
      card.appendChild(ddtContainer);

      // Create ujian divs
      day.ujian.forEach((ujian) => {
        const ujianDiv = document.createElement("div");
        ujianDiv.className = "jadwal-ujian1";

        const matkulDiv = document.createElement("div");
        matkulDiv.className = "matkul";
        matkulDiv.textContent = ujian.matkul;

        const dosenDiv = document.createElement("div");
        dosenDiv.className = "dosen";
        dosenDiv.textContent = ujian.dosen;

        ujianDiv.appendChild(matkulDiv);
        ujianDiv.appendChild(dosenDiv);
        card.appendChild(ujianDiv);
      });

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading jadwal:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadJadwal);
