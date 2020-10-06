import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import VideoCardPanel from './VideoCardPanel.component';
import { videosMock } from '../../mocks/VideoCardMock';

describe('VideoCardPanel', () => {
  it('renders provided properties', () => {
    render(<BrowserRouter><VideoCardPanel videos={videosMock} /></BrowserRouter>);

    expect(screen.getAllByTestId('video-card')).toHaveLength(3);
  });
});
