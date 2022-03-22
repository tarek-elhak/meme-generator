import React,{useState,useEffect} from "react"
import "./Meme.css"

export default function Meme()
{

    const [memesData,setMemesData] = useState([])
    const [meme, setMeme] = useState({memeURL: "https://i.imgflip.com/1bij.jpg", topText:"", bottomText: ""});

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
        setMeme(prevMeme => {
            return {...prevMeme,memeURL: memesData[randomIndex].url}
        })
    }

    function handleChange(event)
    {
        const {name,value} = event.target;

        setMeme(prevMeme => {
            return {...prevMeme,[name]:value}
        })
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form__input" placeholder="Top Text" value={meme.topText} name="topText" onChange={handleChange}/>
                <input type="text" className="form__input" placeholder="Bottom Text" value={meme.bottomText} name="bottomText" onChange={handleChange}/>
                <button type="submit" className="form__btn" onClick={showMeme}>Get a new meme image 🖼</button>
                <div className="meme">
                    <h2 className="text top__text">{meme.topText}</h2>
                    <img src={meme.memeURL} alt="meme" className="meme__img"/>
                    <h2 className="text bottom__text">{meme.bottomText}</h2>
                </div>

            </div>
        </main>
    )
}