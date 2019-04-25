
var input =[-1,5,"cat",false,10.2,true,"dog"];

var result;

//create result object
function array_to_object(input){
    result ={
        strings:[],
        numbers:[],
        booleans:[]
    };

    //sort the array values according to type
    for (var i = 0; i < input.length ; i++) {
        if (typeof input[i] == "number") {
            result.numbers.push(input[i]);
        } else if (typeof input[i] == "boolean") {
            result.booleans.push(input[i]);
        } else {
            result.strings.push(input[i]);
        }
    }

    //write to the html page
    var write_html = document.getElementById("write");
    write_html.innerHTML = "<p>"+ "var result = {"+"</p>"
    write_html.innerHTML += "<p>"+ "Strings: [ " + result.strings + " ]," + "</p>";
    write_html.innerHTML += "<p>"+ "Numbers: [ " + result.numbers + " ]," + "</p>";
    write_html.innerHTML += "<p>"+ "Boolean: [ " + result.booleans + " ]," + "</p>";
    write_html.innerHTML += "};"
}
array_to_object(input);