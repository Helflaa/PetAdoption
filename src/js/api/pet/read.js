import {API_PETS} from "../constants.js";
import {headers} from "../headers.js";

export async function getAllPets(){
    const myHeader=headers();

    try{
     const response = await fetch(API_PETS, {
         method: "GET",
         headers: myHeader,
     });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.errors?.[0]?.message || "An unknown error occurred";
            throw new Error(errorMessage);
        }

        return await response.json()
    }catch (error){
        console.error(error);
        throw error;
    }
}