(function() {
  var msgDiv = document.createElement('div');
  msgDiv.id = 'youshouldprobably-msgdiv';
  msgDiv.className += 'youshouldprobably-msgdiv';
  msgDiv.innerHTML = '<div class="youshouldprobably-msg">You should probably read a book.' +
                     '  <span class="youshouldprobably-close" id="youshouldprobably-close">close</span>' +
                     '</div>';

  var body = document.getElementsByTagName('body')[0];
  body.insertBefore(msgDiv, body.childNodes[0]);
  
  var closeBtn = document.getElementById('youshouldprobably-close');
  closeBtn.addEventListener('click', function() {
    msgDiv.style.opacity = 0;
  });
})();