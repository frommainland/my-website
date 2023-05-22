import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import './Header.css'

import { useNavigate } from 'react-router-dom'
import { NavButtonContext } from '../context/NavButtonContext'

function Stat({ name, number }) {
	return (
		<div className="stat-item">
			<div className="stat-item-text">{name}</div>
			<div className="stat-item-number">{number}</div>
		</div>
	)
}

export default function Header() {
	let nav = useNavigate()
	// const { articleClicked, setArticleClicked } = useContext(NavButtonContext)
	// const { projectClicked, setProjectClicked } = useContext(NavButtonContext)
	const { setArticleClicked } = useContext(NavButtonContext)
	const { setProjectClicked } = useContext(NavButtonContext)

	const animateUp = { y: -10 }

	return (
		<div className="header">
			<div
				className="logo"
				onClick={() => {
					nav('/work')
					setArticleClicked(false)
					setProjectClicked(false)
				}}>
				<motion.div className="logo-phone" whileHover={animateUp}>
					<div></div>
				</motion.div>
				<motion.div className="logo-web" whileHover={animateUp}>
					<div></div>
				</motion.div>
				<motion.div className="logo-circle" whileHover={animateUp} />
			</div>
			<div className="stat">
				<Stat name="项目" number="13" />
				<Stat name="文章" number="2" />
				<Stat name="个人" number="1" />
			</div>
		</div>
	)
}
