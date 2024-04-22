document.addEventListener("DOMContentLoaded", function () {
    const monitoringGrid = document.getElementById("monitoringGrid");

    // Function to create and append monitoring item
    function createMonitoringItem(location, pm25, pm10, o3, co) {
        const item = document.createElement("div");
        item.classList.add("monitoring-item");

        const content = `
            <h3>${location}</h3>
            <p>PM2.5: <span id="${location}-pm25">${pm25}</span> µg/m³</p>
            <p>PM10: <span id="${location}-pm10">${pm10}</span> µg/m³</p>
            <p>O3: <span id="${location}-o3">${o3}</span> ppb</p>
            <p>CO: <span id="${location}-co">${co}</span> ppm</p>
        `;
        item.innerHTML = content;

        monitoringGrid.appendChild(item);
    }

    // Simulate data updates every 5 seconds
    setInterval(updateData, 5000);

    // Function to update simulated air quality data
    function updateData() {
        // Loop through each monitoring item and update values
        monitoringItems.forEach(item => {
            const pm25 = getRandomInt(30, 60);
            const pm10 = getRandomInt(40, 80);
            const o3 = getRandomInt(10, 40);
            const co = (Math.random() * (1.5 - 2.5) + 1.5).toFixed(1);

            // Update the HTML content with new values
            document.getElementById(`${item}-pm25`).textContent = pm25;
            document.getElementById(`${item}-pm10`).textContent = pm10;
            document.getElementById(`${item}-o3`).textContent = o3;
            document.getElementById(`${item}-co`).textContent = co;
        });
    }

    // Generate a random integer between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Dummy monitoring locations
    const monitoringItems = [
        "Downtown",
        "Industrial Area",
        "Residential Area",
        "Park",
        "School",
        "Hospital",
        "Office Building",
        "Shopping Mall"
    ];

    // Populate the monitoring grid with initial data
    monitoringItems.forEach(item => {
        createMonitoringItem(item, getRandomInt(30, 60), getRandomInt(40, 80), getRandomInt(10, 40), (Math.random() * (1.5 - 2.5) + 1.5).toFixed(1));
    });
});
