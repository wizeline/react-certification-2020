import React from 'react'
import styled from 'styled-components'

const VideoCardStyled = styled.div`
	width: 18%;
	margin: 20px 10px;
	border-radius: 5px;
	overflow: hidden;
	@media only screen and (max-width: 1400px) {
		width: 23%;
	}
	@media only screen and (max-width: 1100px) {
		width: 30%;
	}
	@media only screen and (max-width: 768px) {
		width: 45%;
	}
	@media only screen and (max-width: 475px) {
		width: 100%;
	}
`
const VideoThumbnail = styled.img`
	width: 100%;
	height: 120px;
	object-fit: cover;
	display: block;
`
const VideoInfo = styled.div``

const VideoTitle = styled.span`
	font-size: 14px;
	font-weight: 800;
	color: #444;
	padding: 5px;
	display: block;
`
const VideoDescription = styled.p`
	color: #888;
	font-size: 12px;
	font-style: italic;
	margin: 0;
	padding: 0 5px;
`

export default function VideoCard({ item }) {
	return (
		<VideoCardStyled>
			<VideoThumbnail src={item.snippet.thumbnails.default.url} alt="thumbnail" />
			<VideoInfo>
				<VideoTitle>{item.snippet.title}</VideoTitle>
				<VideoDescription>{item.snippet.description}</VideoDescription>
			</VideoInfo>
		</VideoCardStyled>
	)
}
