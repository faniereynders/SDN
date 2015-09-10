(function () {

  document.querySelector('#buttonHello').addEventListener("click", sayHello);

  function getNotificationId() {
    var id = Math.floor(Math.random() * 9007199254740992) + 1;
    return id.toString();
  }

  function sayHello(e) {
    chrome.notifications.create(getNotificationId(), {
      title: 'SDN Event',
      iconUrl: 'assets/icon-128.png',
      type: 'basic',
      message: "Hello there SDN!"
    }, function () { });
  }
})();