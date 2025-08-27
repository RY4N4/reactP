import airbnbLogo from "/src/airbnb.png"; 
import reactbackground from "/src/react.jpg";

export default function Appp(){
    return(
    <>
        <NavBar />
        <Hero />
    </>
    )
}

function NavBar(){
    return (
        <>
        <div id="img-airBNB-logo">
            <img src={airbnbLogo} alt="AirBnb"/>
        </div>
        </>
    )
}

function Hero(){
    return(
        <>
            <div>
                <img src={reactbackground} alt="BackgroundImage" className="background-image"/>
            </div>
        </>
    )
}



