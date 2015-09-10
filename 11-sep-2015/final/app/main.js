
chrome.app.runtime.onLaunched.addListener(start);

function start() {
  var
    screenWidth = screen.availWidth,
    screenHeight = screen.availHeight,
    width = 500,
    height = 300,
    windowSettings = {
      id: "mainWindow",
      outerBounds: {
        width: width,
        height: height,
        left: Math.round((screenWidth - width) / 2),
        top: Math.round((screenHeight - height) / 2)
      }
    };

  chrome.app.window.create('main.html', windowSettings);
}




