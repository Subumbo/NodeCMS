jQuery.post("/api/users", {
  "email": "pat",
  "password": "pat"
}, function (data, textStatus, jqXHR) {
    console.log("Post resposne:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
});


jQuery.get("/api/users", function (data, textStatus, jqXHR) {
    console.log("Get resposne:");
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
});


jQuery.ajax({
    url: "/api/users/5048ceda43bfa348d7000001",
    type: "PUT",
    data: {
      "email": "Patrick NEW",
      "password": "new Pssword"
    },
    success: function (data, textStatus, jqXHR) {
        console.log("Post resposne:");
        console.dir(data);
        console.log(textStatus);
        console.dir(jqXHR);
    }
});

jQuery.ajax({
    url: "/api/users/5048ceda43bfa348d7000001", 
    type: "DELETE",
    success: function (data, textStatus, jqXHR) { 
        console.log("Post resposne:"); 
        console.dir(data); 
        console.log(textStatus); 
        console.dir(jqXHR); 
    }
});
