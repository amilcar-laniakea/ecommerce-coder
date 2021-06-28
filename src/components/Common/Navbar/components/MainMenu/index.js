/** @format */

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Dropdown, Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import './style.css'

const MainMenu = () => {
	const [isVisible, setVisible] = useState(false)

	const handleCloseMenu = (item) => {
		setVisible(item)
	}

	return (
		<>
			<ul className='coder-navbar-menu-main-container'>
				<li className='coder-navbar-menu-item'>Nosotros</li>
				<li className='coder-navbar-menu-item'>Productos</li>
			</ul>
			<Dropdown
				overlayClassName=''
				placement='topCenter'
				onVisibleChange={handleCloseMenu}
				visible={isVisible}
				overlay={
					<Menu onClick={() => handleCloseMenu(false)}>
						<Menu.Item key='1'>
							<Link to={'/categorias/anime'}>Anime</Link>
						</Menu.Item>
						<Menu.Item key='2'>
							<Link to={'/categorias/ilustraciones'}>Ilustraciones</Link>
						</Menu.Item>
						<Menu.Item key='3'>
							<Link to={'/categorias/logos'}>Logos</Link>
						</Menu.Item>
					</Menu>
				}
				trigger={['click']}>
				<Button
					className='coder-navbar-menu-categories-button'
					onClick={(e) => e.preventDefault()}>
					Categorías <DownOutlined />
				</Button>
			</Dropdown>
		</>
	)
}

export default MainMenu
