const shareBtn = document.querySelector('.share-btn');
const sharePopup = document.querySelector('.share-popup');
const cardAuthor = document.querySelector('.card__author');
const card = document.querySelector('.card');

function toggleSharePopup() {
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      // Desktop: show popup above button
      sharePopup.classList.toggle('active');
      shareBtn.classList.toggle('active');
    } else {
      // Mobile: replace author section
      card.classList.toggle('share-active');
    }
  }

function closeSharePopup() {
    sharePopup.classList.remove('active');
    shareBtn.classList.remove('active');
    card.classList.remove('share-active');
}

//click event listener
shareBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleSharePopup();
});

//outside click handler
document.addEventListener('click', function(e) {
    if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target)) {
      closeSharePopup();
    }
});

//keyboard handler
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSharePopup();
    }
});

//resize handler
window.addEventListener('resize', function() {
    closeSharePopup();
});