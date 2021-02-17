import React from 'react';
import './TweetBox.css';
import {Avatar,  Button  } from "@material-ui/core";

function TweetBox() {
 return (
  <div className="tweetBox">
   <form>
    <div className="tweetBox_input">
     <Avatar src="https://i.pinimg.com/736x/1b/7a/87/1b7a87815254a8e789e812ba34df03d0.jpg"/>
      <input placeholder="what's happening?" text="text"/>
    </div>
      <input className="tweetBox_imageIput" placeholder="Enter Image URL" type="text"/>
    <Button className="tweetBox_tweetButton">Tweet</Button>
   </form>
  </div>
 )
}

export default TweetBox
