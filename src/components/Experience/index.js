import { Center, Loader } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // eslint-disable-next-line no-unused-vars
    const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
          {
            isPending &&
        <Center style={{ height: "80vh", width: "100%" }}>
            <Loader variant="dots" color="#2255ff" size="lg" />
        </Center>
        }
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['J', 'o', 'b', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
          <p style={{color: '#fff'}}>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p style={{color: '#fff'}} align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p style={{color: '#fff'}}>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
      </div>
    </>
  )
} 

export default Experience