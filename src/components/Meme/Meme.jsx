import "./Meme.css";

export default function Meme()
{
    return(
        <main>
            <form className="form">
                <input type="text" className="form__input" placeholder="Top Text"/>
                <input type="text" className="form__input" placeholder="Bottom Text"/>
                <button type="submit" className="form__btn">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}