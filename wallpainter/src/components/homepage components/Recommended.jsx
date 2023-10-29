import { Link } from "react-router-dom"
import { useEffect, useState,  } from 'react'
import HomeSearch from "./HomeSearch"

function Recommended({ categories, dispatch }) {

    // const [categoriesToUse, setCategoriesToUse] = useState(categories)

    function toTitle(str) {
        const newStr = str.charAt(0).toUpperCase() + str.slice(1)
        return newStr
    }

    function handleSearch(event) {
        const query = event.target.value.toLowerCase();
        // if (!query) 
        dispatch({type: 'categoryFilter', payload: {query}});
    }

    useEffect(function () {
        dispatch({type: 'categoryFilter', payload: {query: ''}});
    }, [])

    return (
        <div className="homepage-recommended-container">

            <p className="homepage-recommended-title">Categories</p>
            <HomeSearch handleSearch={handleSearch} />
                
                
            <div className="cards-container">
              {
                    categories.map(category => 
                        
                    <Link key={Math.floor(Math.random() * 10000000000)} className={`card ${!category.enabled ? 'disabled' : ''}`} to={`/search?query=${category.name}`}>
                        <img src={`./src/images/logo.png`} alt={category.name} />
                        <p>{category.name}</p>
                    </Link>) 
                }  
                </div>
            
        </div>
    )
}

export default Recommended
