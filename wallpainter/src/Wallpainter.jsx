import { useEffect, useReducer, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

// import pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
// import Profile from './pages/Profile';
import Search from './pages/Search';
import { data } from './data.jsx';

const initialState = data

function reducer(state, action) {
  switch(action.type) {
    case 'categoryFilter': return {...state, categories: state.categories.map(category => {
      return {...category, enabled: category.name.toLowerCase().includes(action.payload.query) }
    })}
    case 'login': return {...state, isLogedIn: true}
    case 'like': return {...state, wallpapers: state.wallpapers.map(wallpaper => wallpaper.id === action.payload.id ? {...wallpaper, liked: !wallpaper.liked} : wallpaper) }
  }
}

function Wallpainter() {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    console.log(state);
  }, [state])
  // console.log(state);

  return (
    <>
     <Routes>
      <Route index element={<Homepage isLogedIn={state.isLogedIn} categories={state.categories} dispatch={dispatch} />} />
      <Route path='/login' element={<Login dispatch={dispatch} />} />
      {/* <Route path='profile' element={<Profile />} /> */}
      <Route path='/search' element={<Search dispatch={dispatch} state={state} />}  />
     </Routes>
    </>
  )
}

export default Wallpainter
