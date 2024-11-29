document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

    // Check screen width or user agent
    function forceDesktopMode() {
      const isMobile = window.innerWidth < 1024 || /Mobi|Android/i.test(navigator.userAgent);
      if (isMobile) {
        // Change the viewport to mimic a desktop layout
        document.querySelector('meta[name="viewport"]').setAttribute("content", "width=1024");
      }
    }

    // Run the function on load and resize
    window.addEventListener("load", forceDesktopMode);
    window.addEventListener("resize", forceDesktopMode);
 
