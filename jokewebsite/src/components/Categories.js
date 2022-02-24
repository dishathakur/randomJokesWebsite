import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

function Categories({ setCategory }) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(e => e.json())
            .then(res => setData(res))
    }, [])

    const getCategory = (name) => {
        console.log(name)
        // setCategory(name)
    }

    return (
        <>
            {data.map(e =>
                <div
                    className='categories-container'
                    onClick={() => setCategory(e)}
                    key={e}
                >
                    <Link to={`/joke/category/${e}`}>
                        <p>
                            {e}
                        </p>
                    </Link>
                </div>
            )}
        </>
    )
}

export default Categories