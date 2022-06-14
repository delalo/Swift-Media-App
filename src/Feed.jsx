import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post 
         profilePic="https://images.unsplash.com/photo-1654512541705-4652c8649eb2?ix
         lib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=for
         mat&fit=crop&w=500&q=60"
         message=" Wow this works"
         timestamp="this is a time stamp"
         username="Bernard"
         image="https://images.unsplash.com/photo-1654512541705-4652c8649eb2?ix
         lib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=for
         mat&fit=crop&w=500&q=60"

        />

        <Post 
         profilePic="https://images.unsplash.com/photo-1654512541705-4652c8649eb2?ix
         lib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=for
         mat&fit=crop&w=500&q=60"
         message=" Wow this works"
         timestamp="this is a time stamp"
         username="Bernard"
         image="https://images.unsplash.com/photo-1654512541705-4652c8649eb2?ix
         lib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=for
         mat&fit=crop&w=500&q=60"

        />

        <Post 
         profilePic="https://images.unsplash.com/photo-1654512541705-4652c8649eb2?ix
         lib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=for
         mat&fit=crop&w=500&q=60"
         message=" Wow this works"
         timestamp="this is a time stamp"
         username="Bernard"
         image="https://images.unsplash.com/photo-1654512541705-4652c8649eb2?ix
         lib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=for
         mat&fit=crop&w=500&q=60"

        />
        
    </div>
  )
}

export default Feed