$('#login').submit(function() {
	$.post("/login", $(this).serialize(), function(data, textStatus, jqXHR) {
		console.log(data);
	});
	return false;
});


$('#signup').submit(function() {

	$.post("/api/users", $(this).serialize(), function(data, textStatus, jqXHR) {
		console.log("Post resposne:");
		console.dir(data);
		console.log(textStatus);
		console.dir(jqXHR);
	});
	return false;
});

