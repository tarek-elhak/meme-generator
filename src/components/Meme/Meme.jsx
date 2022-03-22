import React,{useState,useEffect} from "react"
import "./Meme.css"

export default function Meme()
{

    const [memesData,setMemesData] = useState([])
    const [memeURL, setMemeURL] = useState("https://i.imgflip.com/1bij.jpg");

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(response => {
                response.json()
                    .then(data => {
                        setMemesData(data.data.memes);
                    })
            })
            .catch(error => {
                console.log(`Error: ${error}`)
            })
    },[])

    function showMeme()
    {
        const randomIndex = Math.floor(Math.random() * memesData.length)
        setMemeURL(memesData[randomIndex].url)
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form__input" placeholder="Top Text"/>
                <input type="text" className="form__input" placeholder="Bottom Text"/>
                <button type="submit" className="form__btn" onClick={showMeme}>Get a new meme image 🖼</button>
                <div className="meme">
                    <img src={memeURL} alt="meme" className="meme__img"/>
                </div>

            </div>
        </main>
    )
}