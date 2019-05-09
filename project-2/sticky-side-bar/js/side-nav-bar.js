function initializeChapterSidebar() {

  function onScrollEventHandler(ev) {
    // --- Sticky Sidebar ---

    var sidebar = document.querySelector('.chapter-sidebar');
    var header = document.querySelector('.page-header');
    var headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom <= 42) {
      // Make it sticky
      addClass(sidebar, 'chapter-sidebar--sticky');
    } else {
      // Make it not stick
      removeClass(sidebar, 'chapter-sidebar--sticky');
    }


    // --- Sidebar Link Highlight ---

    // Reset the highlighted sidebar link(s)
    var highlightedLinks = document.querySelectorAll('.sidebar__link--highlight');
    for (var i=0; i<highlightedLinks.length; i++) {
      removeClass(highlightedLinks[i], 'sidebar__link--highlight');
    }

    var headings = document.querySelectorAll('.subheading__heading');
    for (var i=headings.length-1; i>=0; i--) {
      var heading = headings[i];
      var rect = heading.getBoundingClientRect();

      // -40 is for .subheading top padding
      if (rect.top < window.innerHeight - window.innerHeight/2 - 40) {
        // Go find the matching element in the sidebar and highlight it
        // Get the first visible one (need to subtract window height)
        var headingID = heading.getAttribute('id');
        var sidebarLinks = document.querySelectorAll('.sidebar__link');
        for (var j=0; j<sidebarLinks.length; j++) {
          var sidebarLink = sidebarLinks[j];
          var href = sidebarLink.getAttribute('href').substring(1);
          if (href === headingID) {
            // Found it
            addClass(sidebarLink, 'sidebar__link--highlight');
          }
        }
        break;
      }
    }
  }

  if(window.addEventListener) {
    window.addEventListener('scroll', throttle(onScrollEventHandler, 15), false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', throttle(onScrollEventHandler, 15));
  }
}
