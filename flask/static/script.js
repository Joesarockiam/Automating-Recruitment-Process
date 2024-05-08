// Get all the like buttons
const likeButtons = document.querySelectorAll('.post-activity-link img[src="images/like.png"]');

// Add event listener to each like button
for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function() {
    // Get the post container
    const postContainer = this.parentNode.parentNode.parentNode.parentNode;

    // Toggle the liked class on the post container
    postContainer.classList.toggle('liked');

    // Update the liked users count
    const likedUsersElement = postContainer.querySelector('.liked-users');
    let likedUsersCount = parseInt(likedUsersElement.textContent.split(' ')[1]);
    if (postContainer.classList.contains('liked')) {
      likedUsersCount++;
    } else {
      likedUsersCount--;
    }
    likedUsersElement.textContent = `Liked by ${likedUsersCount} users`;
  });
}

// Get all the share buttons
const shareButtons = document.querySelectorAll('.post-activity-link img[src="images/share.png"]');

// Add event listener to each share button
for (let i = 0; i < shareButtons.length; i++) {
  shareButtons[i].addEventListener('click', function() {
    // Get the post container
    const postContainer = this.parentNode.parentNode.parentNode.parentNode;

    // Share the post to social media
    // TODO: Implement social media sharing functionality
    alert('Post shared successfully!');
  });
}

// Get all the comment buttons
const commentButtons = document.querySelectorAll('.post-activity-link img[src="images/comment.png"]');

// Add event listener to each comment button
for (let i = 0; i < commentButtons.length; i++) {
  commentButtons[i].addEventListener('click', function() {
    // Get the post container
    const postContainer = this.parentNode.parentNode.parentNode.parentNode;

    // Toggle the comments section
    const commentsSection = postContainer.querySelector('.post-activity');
    commentsSection.classList.toggle('hidden');

    // TODO: Implement comment submission functionality
  });
}
