/** @format */
/** @format */

import React from 'react'
import { withRouter } from 'react-router-dom'

import NavBar from '../Common/Navbar'
import Footer from '../Common/Footer'

const Layout = (props) => {
	return (
		<React.Fragment>
			<NavBar />
			{props.children}
			<Footer />
		</React.Fragment>
	)
}

export default withRouter(Layout)
