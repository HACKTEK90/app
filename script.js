 function launchFullscreen() {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }

    // Trigger fullscreen on first tap/click anywhere
    document.addEventListener("click", function () {
      launchFullscreen();
    }, { once: true }); // Only trigger once
