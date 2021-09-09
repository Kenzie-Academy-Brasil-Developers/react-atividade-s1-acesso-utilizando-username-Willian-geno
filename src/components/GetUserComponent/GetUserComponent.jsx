import { useState } from "react";
import "../WelcomePage/style.css"

function GetUserComponent (props) {
    
    const [userInput, setUserInput] = useState("")

    const HandleLogin = () =>{
        props.setUser(userInput)
        props.setIsLoggedIn(true)
    } 

    return(
        <div>
            <form className = "divMain" action="">
                <input
                    type="text"
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}/> 
                    <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>

            </form>
        </div>
    )
}

export default GetUserComponent;