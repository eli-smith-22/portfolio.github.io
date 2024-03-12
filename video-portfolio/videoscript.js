console.log("hello world");
$(document).ready(function () {
    $(".video-gallery").magnificPopup({
      delegate: "a",
      type: "iframe",
      gallery: {
        enabled: true
      }
    });
  });
  
  