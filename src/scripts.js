// display time as hh:mm
const options = {
    timeZone:"America/Toronto",
    hour12 : false,
    hour:  "2-digit",
    minute: "2-digit",
}

var today = new Date();

var time = today.toLocaleTimeString("en-US", options);

document.getElementById("time").textContent = time;