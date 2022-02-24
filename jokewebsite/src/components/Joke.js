import React, { useEffect, useState } from 'react';

function Joke({ categoryName }) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${categoryName}`)
            .then(e => e.json())
            .then(res => {
                setData(res)
            })
    }, [])

    const getNewJoke = () => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${categoryName}`)
            .then(e => e.json())
            .then(res => {
                setData(res)
            })
    }

    return (
        <div>
            <p><strong>Category:</strong> {data.categories}</p>
            <p><strong>Joke:</strong> {data.value}</p>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}

export default Joke