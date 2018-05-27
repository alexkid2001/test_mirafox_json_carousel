$(function() {

	$(document).ready(function() {

		var owl = $("#owl-dynamic");

		// Assign handlers immediately after making the request,
		// and remember the jqxhr object for this request
		var jqxhr = $.getJSON( "json/customData.json", function(json) {
		  console.log( "success" );
		})
		  .done(function(data) {
		    console.log( "second success" );
		    var content = "";
		    for(var i in data["items"]){
		       
		      var img = data["items"][i].img;
		      var desc = data["items"][i].desc;
					var user_name = data["items"][i].user_name;
					var rating = data["items"][i].rating;
					var price = data["items"][i].price;


					content += '<div class="card_item"><a class="card_link" href="#"><div class="item_wrap"><div class="card_item_img">';
					content += '<img class="owl-lazy" data-src="' +img+ '" alt="Alt"></div>';
					content += '<div class="card_item_content"><span class="card_item_desc">'+ desc +'</span>';
					content += '<div class="card_item_footer_top"><div class="user_name">';
					content += '<i class="fas fa-circle"></i>' + user_name +'</div>';
					content += '<div class="rating"><i class="fas fa-star"></i>' + rating + '<span>(260)</span></div>';
					content += '</div><hr><div class="card_item_footer_bottom"><div class="likes"><i class="fas fa-heart"></i></div>';
					content += '<div class="price">'+ price + '<i class="fas fa-ruble-sign"></i></div>';
					content += '</div></div></div></a></div>';

		    }
		    owl.html(content);
		    //owl.trigger('refresh.owl.carousel');
		   	owl.owlCarousel({
		   		margin: 10,
			    items:4,
			    lazyLoad:true,
			    loop:true,
			    margin:10,
			    responsive: {
			    	0:{
			    		items:1,
			    	},
			    	480: {
			    		items: 2
			    	},
			    	680: {
			    		items: 3
			    	},
			    	988: {
			    		items: 4
			    	},
			    	1200: {
			    		items: 5,
			    		center: true
			    	}

			    }
			  });
//		    console.log('Обновил');

		    var str = $('.card_item_desc').html();
		   	$('.card_item_desc').html(str.substring(0, 60) +'...');
//		  	console.log("Обрезал");

		  })
		  .fail(function() {
		    console.log( "error" );
		  })
		  .always(function() {
		    console.log( "complete" );
		  });


		  	var str = $('.card_item_desc').html();
		   	$('.card_item_desc').html(str.substring(0, 60) +'...');
//		  	console.log("Обрезал");
 
		$(".next").click(function(){
		  owl.trigger('next.owl.carousel');
		})
		$(".prev").click(function(){
		  owl.trigger('prev.owl.carousel');
		})  

 	});

});
