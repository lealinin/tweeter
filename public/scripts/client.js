/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Array of tweet objects
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

const renderTweets = function (tweets) {
  // deletes the hardcoded article at top
  $('.tweet-container').empty();
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.tweet-container').append($tweet);
  }
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
  const $form = $('.tweet-post');
  $form.on('submit', function(event) {
    console.log('Form clicked, performing ajax call...');
    event.preventDefault();
    console.log($(this).serialize());
    $.ajax('/tweets', {method: 'GET'})
    .then(function (data) {
      console.log('Success: ', data);
    });
  });
});

// AJAX Example
    // $(function () {
    //   const $button = $('#load-more-posts');
    //   $button.on('click', function () {
    //     console.log('Button clicked, performing ajax call...');
    //     $.ajax('more-posts.html', { method: 'GET' })
    //       .then(function (morePostsHtml) {
    //         console.log('Success: ', morePostsHtml);
    //         $button.replaceWith(morePostsHtml);
    //       });
    //   });
    // });



