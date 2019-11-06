import React from 'react';

const audio = '../gettinby.mp3';
const title = "Gettin' By - Caleborate";


const player = withCustomAudio(props => {
    const { title } = props;
    return(
        <div>
            <h2>{title}</h2>
        </div>
    );
});

export default player;