const renderTweets = function (tweets) {
  $('.tweet-container').empty();
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.tweet-container').prepend($tweet);
  }
}

const createdAt = function(time) {
  const timeDiff = Date.now() - time;
  if (timeDiff >= 31556952000) {
    return `${Math.floor(timeDiff / 31556952000)} years`;
  } else if (timeDiff >= 2592000000) {
    return `${Math.floor(timeDiff / 2592000000)} months`;
  } else if (timeDiff >= 604800000) {
    return `${Math.floor(timeDiff / 604800000)} weeks`;
  } else if (timeDiff >= 86400000) {
    return `${Math.floor(timeDiff / 86400000)} days`;
  } else if (timeDiff >= 3600000) {
    return `${Math.floor(timeDiff / 3600000)} hours`;
  } else if (timeDiff >= 60000) {
    return `${Math.floor(timeDiff / 60000)} minutes`;
  } else {
    return `${Math.floor(timeDiff / 1000)} seconds`;
  }
};

const createTweetElement = function (tweet) {
  let $tweet = $("<article>").addClass("tweet");

  $tweet.append(`
    <header class="tweet">
      <img src="${tweet.user.avatars}">
      <div class="user">
      <span class="name">${tweet.user.name}</span>
      <span class="handle">${tweet.user.handle}</span>
      </div>
    </header>
    <textarea>${tweet.content.text}</textarea>
    <footer class="tweet">
      <span>${createdAt(tweet.created_at)} ago</span>
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
