import React,{useState,useEffect} from "react"
import "./Meme.css"

export default function Meme()
{

    const [memesData,setMemesData] = useState({})

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(response => {
                response.json()
                    .then(data => {
                        setMemesData(data);
                    })
            })
            .catch(error => {
                console.log(`Error: ${error}`)
            })
    },[])


    return(
        <main>
            <div className="form">
                <input type="text" className="form__input" placeholder="Top Text"/>
                <input type="text" className="form__input" placeholder="Bottom Text"/>
                <button type="submit" className="form__btn">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}