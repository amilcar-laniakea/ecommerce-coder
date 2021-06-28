/** @format */

import { Link } from 'react-router-dom'

import { ShoppingCartOutlined } from '@ant-design/icons'

import './style.css'

const CartIcon = () => {
	return (
		<Link to='/cart'>
			<ShoppingCartOutlined className='coder-cart-main-icon' />
		</Link>
	)
}

export default CartIcon
