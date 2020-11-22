const playerParams = new URLSearchParams(window.location.search);

function bootPlayer() {
	// Get info of the game
  $.get('./webassets/htmlplayer/gameinfos/' + playerParams.get('name') + '.name', function(name) {
	  $('#HTMLPlyer_Name').text(name);
  });
}
