import React from 'react';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

function Post({id, username, userImg, img, caption}) {
  return (
    <div>
      {/* {Header} */}
      <div>
        <img src={userImg} alt=""/>
        <p>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>

      {/* {img} */}


      {/* {button} */}


      {/* {caption} */}


      {/* {comment} */}


      {/* {input} */}


    </div>
  )
}

export default Post