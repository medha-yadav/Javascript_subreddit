 
const REDDIT_JS_JSON_URL="https://www.reddit.com/r/javascript.json";


function getDataFromUrl(url){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


function display(element)
{
    for(var i=0;i<26;i++)
    {
    
    //create new div and set the desired attributes
    var newDiv = document.createElement("div");
    newDiv.setAttribute("style","padding:20px;margin:20px;font-family:monospace;font-size:150%;background: #3090C7;display: block;color:#FFFFFF;");




    //similarly creating other elements and appending to div
    var br = document.createElement('br');
    var a=document.createElement('a');
    a.href=element[i].data.url;
    a.innerHTML=">>     " + element[i].data.title;
    a.setAttribute("style","color:#FFFFFF;font-size:xx-large;font:monospace");
    newDiv.appendChild(a);
    newDiv.appendChild(br);


    var br = document.createElement('br');
    var newups = document.createTextNode("::Submitted by    " +element[i].data.author);
    newDiv.appendChild(newups);
    newDiv.appendChild(br);


    var br = document.createElement('br');
    var newups = document.createTextNode("Upvotes  "+element[i].data.ups);
    newDiv.appendChild(newups);
    newDiv.appendChild(br);
     
    document.body.appendChild(newDiv);
    
}
}



let json_obj=JSON.parse(getDataFromUrl(REDDIT_JS_JSON_URL));

// console.log(json_obj);
// console.log(typeof(json_obj));
// console.log(typeof(json_obj.data));
// console.log(typeof(json_obj.data.children));
//console.log(json_obj.data.children[0].data);




const element=json_obj.data.children;

if(element.length>0)
{
    display(element);
}
else
{
alert("Empty Response");
}




