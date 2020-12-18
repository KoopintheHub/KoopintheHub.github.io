const playerParams = new URLSearchParams(window.location.search);

function bootPlayer() {
  $.get('./webassets/htmlplayer/gameinfos/' + playerParams.get('name') + '.name', function(name) {
	  $('#HTMLPlayer_Name').text(name);
  });
  $.get('./webassets/htmlplayer/gameinfos/' + playerParams.get('description') + '.desc', function(description) {
	  $('#HTMLPlayer_Desc').text(description);
  });
  $.get('./webassets/htmlplayer/gameinfos/' + playerParams.get('author') + '.author', function(author) {
	  $('#HTMLPlayer_Author').text(author);
  });
  document.getElementById('HTMLPlayer').src = playerParams.get('src');
}

var keys = {};
window.addEventListener("keydown", function(e) {
	keys[e.keyCode] = true;
	switch(e.keyCode) {
		case 37: case 39: case 38:  case 40: // Arrow keys
		case 32: e.preventDefault(); break; // Space
		default: break; // do not block other keys
	}
}, false);
