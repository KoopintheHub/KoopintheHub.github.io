const playerParams = new URLSearchParams(window.location.search);

function bootPlayer() {
  $.get('./webassets/htmlplayer/gameinfos/' + playerParams.get('name') + '.name', function(name) {
	  $('#HTMLPlyer_Name').text(name);
  });
}
