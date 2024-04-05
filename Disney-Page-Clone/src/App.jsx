import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Cartoons from './components/cartoon/Cartoons'
import News from './components/news/News'
import Disneys from './components/disney/Disneys'
import SectionFive from './components/character/Characters'
import SectionFour from './components/good/Goods'
import SectionSix from './components/icons/Icons'
import SectionSeven from './components/special/Specials'

function App() {
  
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Cartoons></Cartoons>
    <News></News>
    <Disneys></Disneys>
    <SectionFour></SectionFour>
    <SectionFive></SectionFive>
    <SectionSix></SectionSix>
    <SectionSeven></SectionSeven>
    
      
    </>
  )
}

export default App
