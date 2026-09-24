// This file is used to resize the iframe height based on the content height
// of the iframe. This is used for the search page.
// powered by https://hellorubric.com/
window.addEventListener("message", (event) => {
  // Make sure the message is from a trusted origin
  if (event.data.type == "resize-iframe") {
    //$("#iframe-height").css("height", event.data.height + "px");
    console.log("event", event.data);
    var iframe_src = event.data.iframe_src;
    var iframeElement = document.querySelector(
      'iframe[src="' + iframe_src + '"]'
    );
    if (iframeElement==null){
        iframe_src = iframe_src.replace("campus.hellorubric.com","clubs.getqpay.com");
        iframeElement = document.querySelector(
            'iframe[src="' + iframe_src + '"]'
        );

    }
    var parentDiv = iframeElement.parentElement
    // parentDiv.style.height = event.data.height + "px";
    // document.getElementById("iframe-height").style.height =
    //   event.data.height + "px";
  }
});
