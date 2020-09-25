import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import "./VideoPlayer.css"

const VideoPlayer = ({ url, width })  => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url = { url }
            width = { width }
            height='100%'
            controls={true}
          />
        </div>
      )
    }
  

  export default VideoPlayer;

