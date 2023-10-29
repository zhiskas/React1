

export default function Btn(){
    const clickHandler = () =>{
        console.log("Clicked!")
    }
    const mouse = ()=>{
        console.log("Moved!")

    }

    return (
        <button onClick={clickHandler} onMouseOver={mouse}>Click me !</button>
    )
}