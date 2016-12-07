/* global $*/

$(document).ready(function()
{
    $("#search").on("click",function(){
        var q = $("#query").val();
        var link = "https://info2180-lab6-terieka20.c9users.io/request.php?q="+q;
        
        $.ajax(link,
        {method: 'GET',}).done(function(e){
            $("#result").html(e);
        }).fail(function(y){
            $("#result").html(y);
        });
        
    $("#all").on("click",function(){
        var link = "https://info2180-lab6-terieka20.c9users.io/request.php?q=&all=true";
        $.ajax(link,{
            method:'GET',
        }).done(function(e){
            $("#result").html(e);
        }).fail(function(y){
            $("#result").html(y);
        });
    });
    });
});