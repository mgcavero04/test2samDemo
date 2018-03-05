var SrchSubmit = function()
{
//console.log('hellow'); 
var searchforthis=document.getElementById("_fid_25").value;
//url="_DBID_TEST_2?a=s&query=({'7'.CT.'" + searchforthis + "'})";
//location.href = url;
var dbid = "bgfg6wqss";
var apptoken = "cifmjznbdjzcandiwkwr2cn3twbp";
var query = "{21.EX." + searchforthis +"}";
$.ajaxSetup({data: {apptoken: apptoken}});
var promise = $.get(dbid, 
{
  act: "API_DoQuery",
  query: query
});
$.when(promise).then(function(xml) 
{
	console.dirxml(xml);
	txt = "";
	studentID="";
  	x = xml.getElementsByTagName("record");
  	for (i = 0; i< x.length; i++) 
	{
    		//txt += x[i].childNodes[i].nodeValue + ",";
		studentID=x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
		txt += "<tr><td><button>generate new element</button></td><td><a id='searchHere'>" +  x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</a></td><td>" +    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +"</td></tr>";
		

  	}
  	document.getElementById("search").innerHTML = txt;
});
}
$("#_fid_25").attr('oninput', 'SrchSubmit()');
//
var counter = 0;
$("button").click(function() 
{
    $("p#textHere").append("<p class='test'>click me " + (++counter) + "</p>")
});
// With on():

