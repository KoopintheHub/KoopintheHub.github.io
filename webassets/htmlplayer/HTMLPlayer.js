const playerParams = new URLSearchParams(window.location.search);

function bootPlayer() {
  $.get('./webassets/htmlplayer/gameinfos/' + playerParams.get('name') + '.name', function(name) {
	  $('#HTMLPlyer_Name').text(name);
  });
  $.get('./webassets/htmlplayer/gameinfos/' + playerParams.get('description') + '.desc', function(description) {
	  $('#HTMLPlyer_Desc').text(description);
  });
  $.get('./webassets/htmlplayer/gameinfos/' + playerParams.get('author') + '.author', function(author) {
	  $('#HTMLPlyer_Author').text(author);
  });
}
