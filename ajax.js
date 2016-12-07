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
        
    $("#sall").on("click",function(){
        var link = "https://info2180-lab6-terieka20.c9users.io/request.php?q=&all=true";
        $.ajax(link,{
            method:'GET',
            datatype: "xml" ,
        }).done(function(e){
            var d =$(e).find('definition');
            $("#result").append("<ol></ol>");
            $(d).each(function(){
                var x = '<h3>'+$(this).attr('name')+'</h3>';
                var t = '<p>'+$(this).text()+'</p>';
              var s = '<p> -'+$(this).attr('author')+'</p>';
                $("#result ol").append('<li>'+x+t+s+'</li>');
            });
        }).fail(function(y){
            $("#result").html(y);
        });
    });
    });
});