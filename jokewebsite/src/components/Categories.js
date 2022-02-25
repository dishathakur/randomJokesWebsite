import React, { useEffect, useState } from 'react';
//css
import './Categories.css';
//components
import Header from './Header';
import Joke from './Joke';

function Categories() {

    const [data, setData] = useState([])
    const [categoryName, setCategoryName] = useState("")

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(e => e.json())
            .then(res => setData(res))

    }, [])

    return (
        <div className='page-container'>
            <Header title="Chuck Norries" />
            <div className='content-container'>
                <div className='grid-container'>
                    {data.map(e =>
                        <div
                            className='categories-container'
                            onClick={() => setCategoryName(e)}
                            key={e}
                        >
                            {e}
                        </div>
                    )}
                </div>
                {categoryName !== "" ? <Joke categoryName={categoryName} /> : ""}
            </div>
        </div>
    )
}

export default Categories