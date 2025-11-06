// Set your target date here (YYYY, MM-1, DD, HH, MM, SS)
const targetDate = new Date(2025, 11, 31, 23, 59, 59).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("timer").textContent = "00:00:00:000";
    return;
  }

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(distance % 1000);

  const timeString =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(milliseconds).padStart(3, "0");

  document.getElementById("timer").textContent = timeString;
}

updateCountdown();
setInterval(updateCountdown, 10);
