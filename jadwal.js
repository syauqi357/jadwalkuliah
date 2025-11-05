async function loadJadwal() {
  try {
    const response = await fetch('jadwal-ujian.json');
    const data = await response.json();
    
    const container = document.querySelector('.bodyjadwalcard');
    const iconTemplate = document.getElementById('calendar-icon');
    
    data.jadwal.forEach(day => {
      // Create card
      const card = document.createElement('div');
      card.className = 'card-dock-jadwal';
      
      // Create ddt-container
      const ddtContainer = document.createElement('div');
      ddtContainer.className = 'ddt-container';
      
      // Create daydueDate
      const dateDiv = document.createElement('div');
      dateDiv.className = 'daydueDate';
      
      const iconSpan = document.createElement('span');
      iconSpan.className = 'icon';
      iconSpan.innerHTML = iconTemplate.innerHTML;
      
      const dateP = document.createElement('p');
      dateP.textContent = day.tanggal;
      
      dateDiv.appendChild(iconSpan);
      dateDiv.appendChild(dateP);
      
      // Create room-t
      const roomDiv = document.createElement('div');
      roomDiv.className = 'room-t';
      const roomP = document.createElement('p');
      roomP.textContent = day.ruang;
      roomDiv.appendChild(roomP);
      
      ddtContainer.appendChild(dateDiv);
      ddtContainer.appendChild(roomDiv);
      card.appendChild(ddtContainer);
      
      // Create ujian divs
      day.ujian.forEach(ujian => {
        const ujianDiv = document.createElement('div');
        ujianDiv.className = 'jadwal-ujian1';
        
        const matkulDiv = document.createElement('div');
        matkulDiv.className = 'matkul';
        matkulDiv.textContent = ujian.matkul;
        
        const dosenDiv = document.createElement('div');
        dosenDiv.className = 'dosen';
        dosenDiv.textContent = ujian.dosen;
        
        ujianDiv.appendChild(matkulDiv);
        ujianDiv.appendChild(dosenDiv);
        card.appendChild(ujianDiv);
      });
      
      container.appendChild(card);
    });
    
  } catch (error) {
    console.error('Error loading jadwal:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadJadwal);