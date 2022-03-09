import React from 'react'
import Post from './Post';

const posts = [
  {
    id: "1",
    username: "Jacob Elordi",
    userImg: "http://links.papareact.com/3ke",
    img: "https://i.insider.com/61a692362ff9830018d5f8fb?width=700",
    caption: "This is the first post for instagram"
  },
  {
    id: "2",
    username: "Jacob Elordi",
    userImg: "http://links.papareact.com/3ke",
    img: "https://content.api.news/v3/images/bin/355f466658505cf8f53d6eef3623bb60",
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