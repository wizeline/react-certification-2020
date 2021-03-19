import React from 'react'
import styled from 'styled-components'
import mockData from '../../youtube-videos-mock.json'
import VideosList from '../../components/VideosList'

const HomeStyled = styled.div`
	padding: 20px;
`
const Title = styled.h1`
	text-align: center;
`

const Home = () => {
	return (
		<HomeStyled>
			<Title>Videos List</Title>
			<VideosList items={mockData.items} />
		</HomeStyled>
	)
}

export default Home
