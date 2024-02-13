let count =0;
document.getElementById("d4").onclick = function(){
    count-=1;
    document.getElementById("d3").innerHTML = count;
}
document.getElementById("d5").onclick = function(){
    count=0;
    document.getElementById("d3").innerHTML = count;
}
document.getElementById("d6").onclick = function(){
    count+=1;
    document.getElementById("d3").innerHTML = count;
}