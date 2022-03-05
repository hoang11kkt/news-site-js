$(document).ready(function(){
    // get data top headlines with language japanese
    fetch('https://gnews.io/api/v4/top-headlines?lang=ja&token=b10e7641a78d042edd2095091d1d2944')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // insert data in page
            const myArray = data.articles;
            for(var i = 0; i < myArray.length; i++){
                var htm = '<div class="row"><img class="col-4" src="' + myArray[i].image + '" alt=""><a class="col-8 content" href="'
                 + myArray[i].url + '" target="_blank">' + myArray[i].title + '</a><span class="col-8 publishedAt">'
                  + myArray[i].publishedAt + '</span><p class="col-8 description">'
                   + myArray[i].description + '</p></div>';
                $("#main").append(htm);
                $("#loading").hide();
            }
        });
    
// search function
    $("#search").click(function(){
        $(".formS, .backDrop").toggle();
    })
    
    $("#btnS").click(function(){
        // get search data
        var txtS = $("#txtS").val();
        var dateS = $("#dateS").val() + "T00:00:00Z";

        $(".formS, .backDrop").hide();

        $("#main").html("");// delete old data

        var urlS ="https://gnews.io/api/v4/search?q=" + txtS + "&to=" + dateS + "&token=b10e7641a78d042edd2095091d1d2944"
        fetch(urlS)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // insert new data by search results 
            const myArray = data.articles;
            for(var i = 0; i < myArray.length; i++){
                var htm = '<div class="row"><img class="col-4" src="' + myArray[i].image + '" alt=""><a class="col-8 content" href="'
                 + myArray[i].url + '" target="_blank">' + myArray[i].title + '</a><span class="col-8 publishedAt">'
                  + myArray[i].publishedAt + '</span><p class="col-8 description">'
                   + myArray[i].description + '</p></div>';
                $("#main").append(htm);
            }
        });
    })
// close form search
    $("#closeS, .backDrop").click(function(){
        $(".formS, .backDrop").toggle();
    })
})