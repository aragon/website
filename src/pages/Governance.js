import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import backgroundImage from '../components/Project/assets/governance-background.png'
import Section from '../components/General/Section'
import Hero from '../components/Governance/Hero'
import { Button } from '@aragon/ui'
import About from '../components/Governance/About'
import Timeline from '../components/Governance/Timeline'
import Modules from '../components/Governance/Modules'

const Governance = () => (
  <Page path="/project/governance">
    <SecondaryNavbar page="governance"/>
    <Hero />
    <About />
    <Timeline />
    <Modules/>
  </Page>
)


export default Governance
