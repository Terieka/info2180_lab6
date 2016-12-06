window.onload = function()
{
    document.getElementById("search").addEventListener("click",function(){
        var query = $("#query").val();
        var link = "https://info2180-lab6-terieka20.c9users.io/request.php?q="+query;
        
        $.ajax(link,
        {method: 'GET',}).done(function(e){
            $("#result").html(e);
        }).fail(function(y){
            $("#result").html(y);
        });
    });
};