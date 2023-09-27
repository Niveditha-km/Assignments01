document.addEventListener("DOMContentLoaded", () => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const jsonDataContainer = document.getElementById("jsonDataContainer");

    fetchDataButton.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        const apiUrl = "https://jsonplaceholder.typicode.com/users";

        xhr.open("GET", apiUrl, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const jsonData = JSON.parse(xhr.responseText);
                jsonDataContainer.textContent = JSON.stringify(jsonData, null, 2);
            } else {
                console.error("Error loading JSON data:", xhr.status, xhr.statusText);
                jsonDataContainer.textContent = "Error fetching data.";
            }
        };

        xhr.send();
    });
});
