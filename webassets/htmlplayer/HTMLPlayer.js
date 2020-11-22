const playerParams = new URLSearchParams(window.location.search);

function bootPlayer() {
  $.get('./gameinfos/' + playerParams.get('name') + '.name', function(name) {
	  $('#HTMLPlyer_Name').text(name);
  });
}
