document.addEventListener("DOMContentLoaded", () => {
    const fetchDataButton = document.getElementById("fetchData");
    const jsonDataContainer = document.getElementById("jsonData");
    
    fetchDataButton.addEventListener("click", () => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users"; 
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); 
            })
            .then((data) => {
                jsonDataContainer.textContent = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                jsonDataContainer.textContent = "Error fetching data.";
            });
    });
});
