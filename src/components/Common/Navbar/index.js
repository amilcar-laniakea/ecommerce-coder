/** @format */

import React from 'react'

import Spacer from '../Spacer'

import Logo from './components/Logo'
import MainMenu from './components/MainMenu'
import CartIcon from './components/CartIcon'

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
					<CartIcon />
				</div>
			</div>
		</>
	)
}

export default NavBar
