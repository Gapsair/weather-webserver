import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed,} from "react-twitter-embed"

function Widgets() {
 return (
  <div className="widgets">
   <div className="widgets_input">
   <SearchIcon className="widgets_searchIcon"/>
   <input type="text" placeholder="search Twitter"/>
   </div>
   <div className="widgets_widgetContainer">
    <h2>What's happening?</h2>
     <TwitterTweetEmbed tweetId={"1355193175867064320"}/>
     
      <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Reuwelscode"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/ReuelGap's"}
          options={{ text: "#reactjs is awesome", via: "Reuwelscode" }}
        />
   </div>
  </div>
 )
}

export default Widgets
