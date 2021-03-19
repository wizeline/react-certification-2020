import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import VideoCard from '../VideoCard'

const VideosListStyled = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
`

export default function VideosList({ items }) {
	return (
		<VideosListStyled>
			{items.map(item => (
				<VideoCard key={uuidv4()} item={item} />
			))}
			)
		</VideosListStyled>
	)
}
