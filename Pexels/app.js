$.ajaxSetup({ //HTTP Authorization header that contains API Key
  headers : {   
    'Authorization' : '563492ad6f9170000100000193046fdca41348108891ac7aebe30ee3'
  }
});
$.getJSON('https://api.pexels.com/v1/search?query=books+query&per_page=20&page=1/', function (data){ // API request for Pexels 'search photos to return images specifies in the query = books.
 console.log(data); 

 $.each(data, function(index, value) { // To view the data individually. get closer to the data
 console.log(value); 

 var image = value;
 var imageURL = value.url; //obtaining the image urls
 console.log(imageURL);

       $('.grid').append('<div class="image"><img src="'+ imageURL +'"></div>'); // appending the images to the html, grid layout.

});
});
