import React from 'react'
import Post from './Post';

const posts = [
  {
    id: "1",
    username: "FirstOne",
    userImg: "http://links.papareact.com/3ke",
    img: "http://links.papareact.com/jjm",
    caption: "This is the first post for instagram"
  },
  {
    id: "2",
    username: "secondOne",
    userImg: "http://links.papareact.com/3ke",
    img: "https://images.peekyou.com/4713/9244/jeffrey_schoemaker_471392449.jpg",
    caption: "This is the first post for instagram"
  },

]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post 
        key={post.id}
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts