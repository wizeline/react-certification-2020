import React from 'react';
import Player from "./videoplayer.jsx";
import ReadElements from "./ReadVideoListElements.jsx";
import {Container} from './components/VideoPlayer.js';

function PlayerBody(){

    return( 
        <Container>
            <Player />
            <ReadElements />
        </Container>    
    )
}
export default PlayerBody;