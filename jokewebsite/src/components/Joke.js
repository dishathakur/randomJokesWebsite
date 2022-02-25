import React, { useEffect, useState } from 'react';
import './Joke.css';


function Joke({ categoryName }) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${categoryName}`)
            .then(e => e.json())
            .then(res => {
                setData(res)
            })
    }, [categoryName])

    const getNewJoke = () => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${categoryName}`)
            .then(e => e.json())
            .then(res => {
                setData(res);
                console.log(res)
            })
    }

    return (
        <div className='joke-container'>
            <div className='joke-header'>
                <h5>Selected Category: <span className='category-name'>{data.categories}</span>
                </h5>
            </div>
            <div className='joke-content'>
                <h5>{data.value}</h5>
            </div>
            <div className='button-container'>
                <button className='new-button' onClick={getNewJoke}>New Joke</button>
            </div>
        </div>
    )
}

export default Joke