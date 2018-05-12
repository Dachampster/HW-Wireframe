$("#magic").on("click", function(event) {
    event.preventDefault();
    var btext = $("#animal").val().trim();
    var animButt = $("<button>");
    animButt.text(btext);
    animButt.addClass("butt");
    $("#buttons").prepend(animButt);
});

$('#buttons').on('click', '.butt', function(event) {
    event.preventDefault();
    console.log("button clicked. grabbing your gif...");
    var search = $(this).text();
    giphy(search);
});

function giphy(search){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=p0cSic3YEDtZWHwUdV9Jvy6w6PKRN2mt&tag=" + search;

  //
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  //
  .done(function(response) {
    console.log(response);
    //
    var imageUrl = response.data.image_original_url;

    //
    var catImage = $("<img>");

    //
    catImage.attr("src", imageUrl);
    catImage.attr("width", 200);
    catImage.attr("alt", "cat image");

    //
    $("body").prepend(catImage);
  });
}