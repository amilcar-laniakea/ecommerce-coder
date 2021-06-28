/** @format */

import React from 'react'

import './style.css'

const PageFooter = () => {
	const date = new Date().getFullYear()
	return (
		<div className='coder-footer-global-container'>
			<div className='coder-footer-main-container'>
				<h3 className='coder-footer-title'>@{date} Amilcar Barahona</h3>
			</div>
		</div>
	)
}

export default PageFooter
