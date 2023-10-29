import React, {useState, createContext, useContext} from "react";

const AnimalContext = createContext();

const todaysAnimals = ["Cats", "Dogs","Zebras","Kangaroo's","Girafees"];

const AnimalProvider = ({children})=>{

    const [animals, setAnimalList] = useState(todaysAnimals);
    console.log("Hey", animals)
    return (
        <AnimalContext.Provider value={{animals, setAnimalList}}>
            {children}
        </AnimalContext.Provider>
    )
}

export const useAnimalContext = () => {
    return useContext(AnimalContext)
};

export default AnimalProvider;