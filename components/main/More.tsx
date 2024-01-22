import React from 'react'
import Image from 'next/image'
import YouTube, { YouTubeProps } from 'react-youtube';
const More = () => {

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '550',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div id='More' className='w-screen h-auto gap-5 flex flex-col items-center md:mb-[120px]'>
        <div className='py-4 px-2 mt-[30px] text-center max-w-[450px] md:max-w-[750px] '>
            <h1 className='items-center justify-center  uppercase underline underline-offset-8 text-[35px] md:text-[65px] font-bold'>more offers</h1>
            <h2 className=' text-[25px] uppercase'>@ nice prices</h2>
            <p className=' text-1xl'>Whether you're a solo artist, a small team, or a larger group, our array of specialized studios ensures that every creative endeavor finds its ideal space. Immerse yourself in an environment that supports your artistic journey and unlocks the full potential of your projects. contact us via tel:0711023728 for any special request.Here is an example of our editting  work</p>
            </div> 
            <div className=' '>
              <YouTube videoId="aHfqM5MpJiQ" opts={opts} onReady={onPlayerReady} className=' md:max-w-[800px]' />
            </div>
    </div>
  )
}

export default More
