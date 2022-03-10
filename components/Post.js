import React from 'react';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

function Post({id, username, userImg, img, caption}) {
  const {data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* {Header} */}
      <div className='flex items-center p-5'>
        <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-3' alt=""/>
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>

      {/* {img} */}
      <img src={img} className='object-cover w-full' alt=""/>


      {/* {button} */}
      {session && (
        <div className='flex justify-between px-4 pt-4'> 
          <div className='flex space-x-4'>
            <HeartIcon className='btn' />
            <ChatIcon className='btn'/>
            <PaperAirplaneIcon className='btn'/>
          </div>

        <BookmarkIcon className='btn' />
      </div>
      )}
      

      {/* {caption} */}
      <p className='p-5 truncate'>
        <span className='font-bold m-2'>{username}</span>
        {caption}
      </p>


      {/* {comment} */}


      {/* {input} */}
      {session && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon  className='h-7'/>
          <input 
          type="text" 
          value ={comment}
          onChange={e => setComments(e.target.value)}
          placeholder="Add comment..." 
          className="border-none flex-1 focus:ring-0 outline-none" />

          <button 
          type='submit' 
          disabled={!comment.trim()} 
          onClick={sendComment} 
          className="font-semibold text-blue-500" >Post</button>
        </form>
      )}
      
    </div>
  )
}

export default Post;

// session => only if user log in will show the icon or input 