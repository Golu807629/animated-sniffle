/*index page end*/
function invalue(){
    var x=document.getElementById("in_range").value;
    var a=document.getElementById("in_input");
    
    var b=2;
    a.style.height=b*x+"px";
    a.style.fontSize=x+"px";
    var c= document.getElementById("in_rangevalue");
    c.innerHTML="Font-size : "+x+"px";
}
/*index page end*/
 

/*image page start*/
function upload(){
    var file=document.getElementById("im_input").files[0];
    var reader=new FileReader();
    reader.onload=function(e){
        var x=e.target.result;
        var a=document.getElementById("im_image");
        a.src=x;
        window.alert(x);
    }
    reader.readAsDataURL(file);
}

function contrast(){
    var y=document.getElementById("im_input-contrast").value;
    var c=document.getElementById("im_image");
    c.style.filter="contrast("+y+"%)";
   var d=document.getElementById("contrast-value").innerHTML="Contrast : "+y+"%";
}

function saturate(){
    var l=document.getElementById("im_input-saturate").value;
    var m=document.getElementById("im_image");
    m.style.filter="saturate("+l+"%)";
    var n=document.getElementById("saturate-value");
    n.innerHTML="Saturate : "+l+"%";
}

 

 /*image page end*/
 
/*calculator page start*/
 
var c=document.getElementById("c_answer-box");
function add(){
    var a=Number(document.getElementById("c_input-firstno").value);
    var b=Number(document.getElementById("c_input-secondno").value);
    var a1=a+b;
    c.innerHTML="Answer :- "+a1;
}
function subtract(){
    var a= Number(document.getElementById("c_input-firstno").value);
    var b=Number(document.getElementById("c_input-secondno").value);
    var a1=a-b;
    c.innerHTML="Answer :- "+a1;
}
function multiply(){
    var a= Number(document.getElementById("c_input-firstno").value);
    var b=Number(document.getElementById("c_input-secondno").value);
    var a1=a*b;
    c.innerHTML="Answer :- "+a1;
}
function divide(){
    var a= Number(document.getElementById("c_input-firstno").value);
    var b=Number(document.getElementById("c_input-secondno").value);
    var a1=a/b;
    c.innerHTML="Answer :- "+a1;
}
function remainder(){
    var a= Number(document.getElementById("c_input-firstno").value);
    var b=Number(document.getElementById("c_input-secondno").value);
    var a1=a%b;
    c.innerHTML="Answer :- "+a1;
}
function cleari(){
    c.innerHTML="Answer :- "+0;
}

/*calculator page end*/


