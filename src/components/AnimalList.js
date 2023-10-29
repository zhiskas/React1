import { useAnimalContext } from './AnimalProvider';

const AnimalList = ()=>{
    const {animals} = useAnimalContext();
    console.log(animals)

    return (
        <div>
            <h1>Animal List using Context API</h1>
            {animals.map((animal, index)=>(

                <h2 key={index}>{animal}</h2>
            ))}
        </div>
    );
}


export default AnimalList;