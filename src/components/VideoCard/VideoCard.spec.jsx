import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';
import { VideoCardMock } from '../../mocks/VideoCardMock';

describe('VideoCard', () => {
  it('renders provided properties', () => {
    render(<BrowserRouter><VideoCard {...VideoCardMock} /></BrowserRouter>);

    expect(screen.getByText(VideoCardMock.videoTitle)).toBeTruthy();
    expect(screen.getByText(VideoCardMock.videoDescription)).toBeTruthy();
    expect(screen.getByTestId('image').getAttribute('src')).toBe(VideoCardMock.videoThumbnail);
  });
});
