import React, { useState } from 'react'
import styled from 'styled-components'
import MENU_ICON from '../../assets/img/svg/menu.svg'
import USER_ICON from '../../assets/img/svg/user.svg'

const HeaderStyled = styled.header`
	padding: 20px;
	display: flex;
	justify-content: space-between;
	background-color: #ed553b;
`

const MenuButton = styled.button`
	padding: 5px 10px 0 0px;
	background: none;
	border: none;
	cursor: pointer;
	img {
		width: 70%;
	}
`
const HeaderLeft = styled.div`
	display: grid;
	grid-template-columns: 40px auto;
	width: 300px;
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`
const InputSearch = styled.input`
	display: block;
	border: none;
	height: 35px;
	background-color: #ad2d17;
	color: white;
	padding: 0 10px;
	&:focus {
		border: 0;
		outline: 0;
	}
	&::placeholder {
		color: white;
		opacity: 1;
	}
`
const HeaderRight = styled.div`
	display: flex;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`
const Avatar = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	overflow: hidden;
	border: 2px solid white;
	img {
		width: 100%;
	}
`
const SwitchToggle = styled.label`
	position: relative;
	display: inline-block;
	width: 50px;
	height: 15px;
	margin-top: 10px;
	margin-right: 20px;
	input {
		opacity: 0;
		width: 0;
		height: 0;
		&:checked + span {
			background-color: #ad2d17;
		}
		&:focus + span {
			box-shadow: 0 0 1px #ad2d17;
		}
		&:checked + span:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}
	}
	span {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
		&:before {
			position: absolute;
			content: '';
			height: 26px;
			width: 26px;
			left: -1px;
			bottom: -5px;
			background-color: white;
			-webkit-transition: 0.4s;
			transition: 0.4s;
			border-radius: 50%;
		}
	}
`
const Header = () => {
	const [checkDarkMode, setcheckDarkMode] = useState(false)
	return (
		<>
			<HeaderStyled>
				<HeaderLeft>
					<MenuButton>
						<img src={MENU_ICON} alt="menu" />
					</MenuButton>
					<InputSearch type="text" placeholder="Search" />
				</HeaderLeft>
				<HeaderRight>
					<SwitchToggle>
						<input
							type="checkbox"
							checked={checkDarkMode}
							onChange={() => setcheckDarkMode(!checkDarkMode)}
						/>
						<span />
					</SwitchToggle>
					<Avatar>
						<img src={USER_ICON} alt="avatar" />
					</Avatar>
				</HeaderRight>
			</HeaderStyled>
		</>
	)
}

export default Header
