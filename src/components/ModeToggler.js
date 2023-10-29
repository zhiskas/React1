
const ModeToggler = ()=>{

    let darkModeOn = true
    const darkMode = <h1>Dark Mode on </h1>
    const lightMode = <h1>Light Mode on </h1>

    const handleIt = ()=>{
        darkModeOn = !darkModeOn
        if (darkModeOn===true){
            console.log("Dark")
        }
        else {
            console.log("Light") 
        }
    }

return (
    <div>
        {/* Conditional Rendering */}
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleIt}>
                Preview
        </button>
    </div>
)

}

export default ModeToggler;