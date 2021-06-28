/** @format */

import React, { useEffect, useState } from 'react'

import './style.css'

const Categories = (props) => {
	const [isCategorie, setCategorie] = useState(null)
	useEffect(() => {
		setCategorie(props.match.params.id)
	}, [props.match.params.id])

	return (
		<div className='coder-global-container'>
			<div className='coder-categories-main-container'>
				{isCategorie && <h3>Categoría: {isCategorie}</h3>}
			</div>
		</div>
	)
}

export default Categories
