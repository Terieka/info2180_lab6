window.onload = function()
{
    document.getElementById("search").addEventListener("click",function(){
        var test = new XMLHttpRequest();
        test.onreadystatechange=function(){
            if(test.readyState===XMLHttpRequest.DONE)
            {
                if (test.status===200)
                {
                    alert(test.responseText);
                }
            else{
                alert("error");
            }
            }
        };
        test.open("GET","request.php",true);
        test.send();
    });
};