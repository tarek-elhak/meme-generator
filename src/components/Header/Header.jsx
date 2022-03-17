import "./Header.css";
import Logo from "../../assets/Logo.png"

export default function Header()
{
    return (
        <header>
            <img src={Logo} alt="Meme Generator Logo" className="Logo"/>
            <h3 className="Author">
                tarek@abdelhak
            </h3>
        </header>

    );
}