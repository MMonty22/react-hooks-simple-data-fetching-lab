// create your App component here
import React, {useEffect, useState} from "react"

function App() {
    const [dogImage, setDogImage] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((data) => {
            setDogImage(data.message)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
        <div>
            <img alt="A Random Dog" src={dogImage}/>
        </div>
    )
}

export default App