/** @format */

import React from 'react'

import BannersSection from './components/BannersSection'

import './style.css'

const PageHome = () => {
	return (
		<div className='coder-global-container'>
			<div className='coder-home-main-container'>
				<BannersSection
					item={{
						title: 'Seccion de Banners',
						subtitle: 'Componente para Colocar el banner principal',
					}}
				/>
			</div>
		</div>
	)
}

export default PageHome
