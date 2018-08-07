console.log("Hi");
$("#find-movie").on("click", function(event){
    event.preventDefault();
    var movie = $("#movie-input").val();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    $.ajax({
        url : queryURL,
        method : "GET"
    }).then (function(response){
        console.log(response);
        //console.log(JSON.parse(response));
        console.log(JSON.stringify(response));
        var body =$("#movie-information");
       var row = $("<tr>");
       var title =$("<td>").text(response.Title);
       row.append(title);
       body.append(row);

    })
    $("#movie-input").val("");
})