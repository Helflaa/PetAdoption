import { getAllPets } from "../../api/pet/read.js";

export async function renderAllPetsCard() {
    const container = document.querySelector(".pet-cards-container");

    try {
        const response = await getAllPets();
        const pets = response.data;

        console.log("Response from getAllPets:", response);

        if (!pets || pets.length === 0) {
            container.innerHTML = "<p>No pets found</p>";
            return;
        }
        console.log(pets)

        container.innerHTML = "";
        pets.forEach((pet) => {
            container.innerHTML += `
        <div class="pet-card card mb-3">
          <div class="card-body">
            <h5 class="card-title">${pet.name}</h5>
            <p class="card-text">Breed: ${pet.breed}</p>
            <p class="card-text">Species: ${pet.species}</p>
            <p class="card-text">Status: ${pet.adoptionStatus}</p>
            <a href="/pet/index.html?id=${pet.id}" class="btn btn-primary">View More</a>
          </div>
        </div>
      `;
        });

    } catch (error) {
        console.error("Error rendering pets:", error);
        container.innerHTML = "<p>Failed to load pets. Please try again later.</p>";
    }
}
