import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Hero'
import Section1 from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { Section4 } from './Section4'
import { Footer } from './Footer'
import { useRef } from 'react'
export const HomePage = () => {
  const component2Ref = useRef(null);

  const scrollToComponent2 = () => {
    component2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
        <Navbar onClick={()=>scrollToComponent2()} />
        <HeroSection onClick={()=>scrollToComponent2()}/>
        <Section1 onClick={()=>scrollToComponent2()}/>
        <Section2/>
        <Section3/>
        <div ref={component2Ref}>
        <Section4/>
        </div>
        <Footer/>
    </div>
  )
}
