import "./style.css";

function WelcomePage (props) {
    const HandleLogout = () => props.setIsLoggedIn(false);

    return(
        <div className = 'divMain'>
            <div>Bem vindo, {props.user} </div>  
            <button onClick = {HandleLogout}>Sair</button>
        </div>
    )
}

export default WelcomePage;