$(document).ready(function(){
    $("#search").click(function(){
        var searchContent = $("#searchContent").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchContent +"&format=json&callback=?";
        
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data){
                $("#output").html("");
                for(var i = 0; i < data[1].length; i++){
                     $("#output").append("<li> <a href = " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }
                $("#searchContent").val("");

            },
            error: function(errorMessage){
                alert("error!");
            }
        });
    });

    $("#searchContent").keypress(function(e){
      if(e.which===13){
            $("#search").click();
      }
    });
});


