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
  const $tweet = `
  <article class="tweet dropshadow">
    <header class="tweet">
      <img src="${tweet}.user.avatars" class="tweet">
      <span class="${tweet}.user.name"></span>
      <span class="${tweet}.user.handle"></span>
    </header>
    <textarea name="${tweet}.content.text maxlength="140" class="tweetbody"></textarea>
    <footer class="tweet">
      <span class="${tweet}.created_at"></span>
      <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `
  // returns the tweet article
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.




