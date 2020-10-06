import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoDetailCard from './VideoDetailCard.component';
import { VideoContextMock } from '../../mocks/VideoCardMock';
import VideoContext from '../../store/VideoContext';

describe('VideoCard', () => {
  it('renders provided properties', () => {
    render(<VideoContext.Provider value={VideoContextMock}><VideoDetailCard /></VideoContext.Provider>);

    expect(screen.getByText(VideoContextMock.currentVideo.videoTitle)).toBeTruthy();
    expect(screen.getByText(VideoContextMock.currentVideo.videoDescription)).toBeTruthy();
  });
});
