import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import HomeLogo from "../components/homepage components/HomeLogo"
import HomeSearch from "../components/homepage components/HomeSearch"
import Recommended from "../components/homepage components/Recommended"
function Homepage({ isLogedIn, categories, dispatch }) {

    const navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="homepage-login">
                <Link to='/login'>{!isLogedIn ? "Login" :  '' }</Link>
            </div>
            <HomeLogo />
            <Recommended categories={categories} dispatch={dispatch} />
        </div>
    )
}

export default Homepage
