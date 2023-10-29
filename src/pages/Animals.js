
import AnimalList from '../components/AnimalList';
import AnimalProvider from '../components/AnimalProvider';


const Animals = ()=>{

    return (
        <div>
            <AnimalProvider>
                <AnimalList/>
            </AnimalProvider>
        </div>

    )
}


export default Animals