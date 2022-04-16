import React from 'react'
import { Header } from '.'
import {Footer} from '.'
import About from './About'

import ResponsiveMenu from './ResponsiveMenu'
const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}   

export default Layout