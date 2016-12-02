window.onload = function()
{
    document.getElementById("search").addEventListener("click",function(){
        var test = new XMLHttpRequest();
         test.open("GET","request.php?q=definition");
        test.onload=function(){
            
            
                if (test.status===200)
                {
                    alert(test.responseText);
                }
            else{
                alert("error");
            }
            
        };
       
        test.send();
    });
};