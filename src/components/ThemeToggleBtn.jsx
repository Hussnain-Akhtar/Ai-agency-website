import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {

const prefersDarkMode = window.matchMedia ('(prefers-color-scheme: dark)').

matches;

setTheme (theme || (prefersDarkMode ? 'dark': 'light'))
}, [])
  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark'? 'light' : 'dark') // 1 button toggles both ways
  }

  return (
    <button onClick={toggleTheme}>
      <img
        src={theme === 'dark'? assets.sun_icon : assets.moon_icon} // 1 img, src changes
        className='size-8.5 p-1.5 border-gray-500 rounded-full'
        alt="toggle theme"
      />
    </button>
  )
}
export default ThemeToggleBtn