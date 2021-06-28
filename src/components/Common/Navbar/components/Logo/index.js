/** @format */

import { Link } from 'react-router-dom'

import Image from '../../../Image'

import imgLogo from '../../../../../assets/img/ark-store-white.png'

import './style.css'

const Logo = () => {
	return (
		<Link to='/'>
			<Image
				ImgContainer={'coder-main-logo-image-container'}
				classImg={'coder-main-logo-image'}
				image={imgLogo}
				alt={'Ark Store'}
				title={'ArkStore'}
			/>
		</Link>
	)
}

export default Logo
