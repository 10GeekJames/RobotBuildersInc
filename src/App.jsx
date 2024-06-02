import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/features/Features'
import Values from './components/values/Values'
import Tesitmonials from './components/testimonials/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import LightDarkToggle from './components/Shared/LightDarkToggle'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

  const handleThemeChange = (e) => {
    console.log(e);
    if (e === "dark") {
      setTheme("dark");
    } else if (e === "light") {
      setTheme("light");
    } else {
      setTheme(e.target.value);
    }

  };

  useEffect(() => {
    console.log(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className='absolute right-4 top-20 z-[1]'>
        <LightDarkToggle theme={theme} handleThemeChange={handleThemeChange} />
      </div>
      <Header />
      <Hero />
      <Features />
      <Values />
      <Tesitmonials />
      <CallToAction />
      <Footer theme={theme} handleThemeChange={handleThemeChange} />
    </>
  )
}

export default App
