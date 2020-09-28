import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import "./VideoPlayer.css"

const VideoPlayer = ({ url, width, number })  => {
      return (
        <div className='player-wrapper'>
         
          <ReactPlayer
            className='react-player'
            url = { url }
            width = { width }
            number = { number }
            height='100%'
            controls={true}
          />
          
        </div>
      )
    }
  

  export default VideoPlayer;

