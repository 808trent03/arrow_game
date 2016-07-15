document.onkeydown = checkKey;

var points = 0;

function checkKey(e) {

    e = e || window.event;

    console.log(e.keyCode);

    if(e.keyCode == '37') {
        points++;
        document.getElementById('display').innerHTML = ""+points;
        document.getElementById('div2').style.backgroundColor = "yellow";
            document.getElementById('div2').innerHTML = ""
            setTimeout(function(){
                document.getElementById("div2").innerHTML = ""; }, 500);
    }
    else if (e.keyCode == '40') {
        points++;
        document.getElementById('display').innerHTML = ""+points;
        document.getElementById('div05').style.backgroundColor = "yellow";
            document.getElementById('div05').innerHTML = ""
            setTimeout(function(){
                document.getElementById("div05").innerHTML = ""; }, 500);
            
    }
    else if (e.keyCode == '38') {
        points++;
       document.getElementById('display').innerHTML = ""+points;
       document.getElementById('div08').style.backgroundColor = "yellow";
            document.getElementById('div08').innerHTML = ""
            setTimeout(function(){
                document.getElementById("div08").innerHTML = ""; }, 500);
            
    }
    else if (e.keyCode == '39') {
        points++;
       document.getElementById('display').innerHTML = ""+points;
       document.getElementById('div011').style.backgroundColor = "yellow";
           document.getElementById('div011').innerHTML = ""
            setTimeout(function(){
                document.getElementById("div011").innerHTML = ""; }, 500);
    }


}

