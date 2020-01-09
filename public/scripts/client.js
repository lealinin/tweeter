/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function (tweets) {
  $('.tweet-container').empty();
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.tweet-container').prepend($tweet);
  }
}

const createTweetElement = function (tweet) {
  let $tweet = $("<article>").addClass("tweet");

  $tweet.append(`
    <header class="tweet">
      <img src="${tweet.user.avatars}">
      <div class="user">
      <span>${tweet.user.name}</span>
      <span>${tweet.user.handle}</span>
      </div>
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
  return $tweet;
}

$(document).ready(function () {
  const $form = $('.tweet-post');
  $('#error-message').hide();
  $form.on('submit', function (event) {
    console.log('Tweet form clicked, performing ajax call...');
    event.preventDefault();
    let tweetField = $(this).find('textarea').val();
    if (tweetField.length > 140) {
      $('#error-message').html('Your tweet is too looong.').slideDown();
      return;
    }
    if (tweetField === '' || tweetField === null) {
      $('#error-message').html('You forgot to type in your tweet.').slideDown();
      return;
    }

    const data = $(this).serialize();
    return $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data
    })
      .then(function () {
        console.log('Success: ', data);
        loadTweets();
        $('#error-message').slideUp();
      });
  });
});

const loadTweets = function () {
  $.ajax({
    url: '/tweets',
    method: 'GET'
  })
    .then(renderTweets);
}

loadTweets();

$('.new-tweet').hide();
$('.arrow-button').click(function () {
  $('.new-tweet').slideToggle();
});
