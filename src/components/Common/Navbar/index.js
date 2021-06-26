/** @format */

import React from 'react'

import Spacer from '../Spacer'

import Logo from './components/Logo'
import MainMenu from './components/MainMenu'

import './style.css'

const NavBar = () => {
	return (
		<>
			<div className='coder-navbar-vertical-spacer'></div>
			<div className='coder-navbar-global-container'>
				<div className='coder-navbar-main-container'>
					<Logo />
					<Spacer />
					<MainMenu />
				</div>
			</div>
		</>
	)
}

export default NavBar
