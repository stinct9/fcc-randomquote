$(function() {

		var httpRequest;
		document.getElementById("ajaxButton").addEventListener('click', makeRequest);


	function makeRequest() {
		$.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        //console.log($(post.content).text());
        $('#quote-content').html(post.content);
        $('#tweet').attr('href', ' https://twitter.com/intent/tweet?text='+'Found an interesting quote by ' +post.title + ' that says ' + $(post.content).text());

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }

        console.log(post.title);
      },
      cache: false
    });

	}

});
	
