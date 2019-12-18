/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Define a function createTweetElement 
// takes in a tweet object
// returns a tweet <article> element with HTML structure of tweet

// createTweetElement function here

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const createTweetElement = function (tweet) {
  // creates a template for all elements of the article
  let $tweet = $("<article>").addClass("tweet");
  
  $tweet.append(`
    <header class="tweet">
      <img src="${tweet.user.avatars}">
      <span>${tweet.user.name}</span>
      <span>${tweet.user.handle}</span>
    </header>
    <textarea>${tweet.content.text}</textarea>
    <footer class="tweet">
      <span>${tweet.created_at}</span>
      <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  `)
   // returns the tweet article
  return $tweet;
}


$(document).ready(function() {

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('.tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});


