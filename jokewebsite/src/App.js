import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Categories from './components/Categories';
import Joke from './components/Joke';
import { useState } from 'react';

function App() {
    const [category, setCategory] = useState("");

    const getCategory = (name) => {
        setCategory(name)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Categories setCategory={getCategory} />} />
                <Route path="/joke/category/:name" element={<Joke categoryName={category} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
