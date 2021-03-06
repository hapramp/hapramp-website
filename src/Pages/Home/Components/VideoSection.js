import React from 'react'

import videoillustration from '../statics/img/flat_tv.png'

const VideoSection = () => (
  // <!--Reward Starts-->
  <section className="video-section">
    <div className="uk-container">
      <div className="uk-padding width-100"></div>
      <h3 className='section-title uk-text-center'>Still have confusion? Watch the video</h3>
      <div className="uk-padding-small width-100"></div>

      <div className="uk-grid uk-margin-large-bottom">
        {/*<div className="uk-width-1-4@l"></div>*/}

        <div className="uk-width-1-1@m uk-width-1-2@l uk-text-center uk-margin-auto-left uk-margin-auto-right">
          {/*<div className="video-bg"></div>*/}
          <img src={videoillustration} alt=""/>
        </div>

      </div>
      <div className="uk-padding width-100"></div>
      <div className="uk-padding-small width-100"></div>
    </div>
  </section>
);

export default VideoSection