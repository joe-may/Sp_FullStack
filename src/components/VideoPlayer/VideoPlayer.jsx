import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import "./VideoPlayer.css"

const VideoPlayer = ({ url, width, number })  => {
      return (
        <div className='player-wrapper'>
         
          <ReactPlayer
            className='react-player'
            url = "https://www.youtube.com/watch?v=5WvtAWoNc00"
            width = "100%"
            number = { number }
            height='100%'
            controls={true}
            // playing="true"
          />
          
        </div>
      )
    }
  

  export default VideoPlayer;

