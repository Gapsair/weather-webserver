import React, {useState, useEffect} from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post'
import db from './firebase';


function Feed() {
 const [posts, setPosts] = useState([]);
 useEffect(() => {
  db.collection('posts').onSnapShot(snapshot => (
   setPosts(snapshot.docs.map(doc => doc.data()))
  ))
 },[])
 return (
  <div className="feed">
   {/* header */}
   <div className="feed_header">
   <h2>Home</h2>
   </div>

   < TweetBox />
   <Post displayName="Gaps Reuel Lyon" username="reuwelscode" verified={true} text="Great Job" 
   avatar="https://i.pinimg.com/736x/1b/7a/87/1b7a87815254a8e789e812ba34df03d0.jpg" 
   image="https://lh3.googleusercontent.com/proxy/Xg-YjieGu4oRz2U1J__nzzEPo2pyTdAj7oQ3w4j5fMHOUGQFRrWy3tVWW9I64GH3ayJFhrZ98i5ggCzJuBqkeGM56fQ42go"/>
   <Post />
   <Post />
   <Post />
   

  </div>
 )
}

export default Feed
