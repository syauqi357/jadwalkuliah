// async function to load jadwal data from JSON and populate the HTML
async function loadJadwal() {
  try {
    // Fetch jadwal data from JSON file
    const response = await fetch("data/jadwal-ujian.json");
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

      // parent terluar dari tag div card-dock-jadwal
      card.className = "card-dock-jadwal";

      // Create ddt-container
      const ddtContainer = document.createElement("div");
      // parent terluar dari tag div daydueDate dan room-t
      ddtContainer.className = "ddt-container";

      // Create daydueDate
      const dateDiv = document.createElement("div");
      // parent terluar dari tag span icon dan p tanggal
      dateDiv.className = "daydueDate";

      // Create icon span
      const iconSpan = document.createElement("span");
      iconSpan.className = "icon";
      iconSpan.innerHTML = iconTemplate.innerHTML;

      const dateP = document.createElement("p");
      dateP.textContent = day.tanggal;


      // Append icon and date to dateDiv
      // memasukkan icon dan tanggal ke dalam daydueDate supaya bersebelahan dan terstruktur
      dateDiv.appendChild(iconSpan);
      dateDiv.appendChild(dateP);

      // Create room-t

      // parent terluar dari tag p ruang
      const roomDiv = document.createElement("div");
      roomDiv.className = "room-t";
      // Create room p
      // parent terluar dari tag p ruang
      const roomP = document.createElement("p");
      roomP.textContent = day.ruang;

      // memasukkan ruang ke dalam room-t supaya terstruktur
      roomDiv.appendChild(roomP);

      // Append dateDiv and roomDiv to ddtContainer
      // memasukkan daydueDate dan room-t ke dalam ddt-container supaya bersebelahan dan terstruktur
      ddtContainer.appendChild(dateDiv);
      ddtContainer.appendChild(roomDiv);
// memasukkan ddt-container ke dalam card-dock-jadwal dan di wrap keseluruhan
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

        // Append matkul and dosen to ujianDiv
        // memasukkan matkul dan dosen ke dalam jadwal-ujian1
        ujianDiv.appendChild(matkulDiv);
        ujianDiv.appendChild(dosenDiv);
        // Append ujianDiv to card
        // memasukkan jadwal-ujian1 ke dalam card-dock-jadwal dan mewrap keseluruhan
        card.appendChild(ujianDiv);
      });

      // Append card to container
      // memasukkan card-dock-jadwal ke dalam bodyjadwalcard sebagai wadah utama
      container.appendChild(card);
    });
  } catch (error) {
    // Handle errors
    // menangani error jika terjadi kesalahan saat memuat jadwal
    console.error("Error loading jadwal:", error);
  }
}

// Load jadwal when the DOM is fully loaded
// mengaksekusi fungsi loadJadwal saat konten DOM sudah dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", loadJadwal);

// tambahin ges
