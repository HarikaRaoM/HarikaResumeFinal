function LoadJson(file,callback){
  var a=new XMLHttpRequest();
  a.overrideMimeType("application/json")
  a.open("GET",file,true);
  a.onreadystatechange=function(){
    if(a.readyState===4 && a.status=="200"){
      callback(a.responseText);
    }
  }
  a.send();
}
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  careerObject(data.co);
  education(data.education1Qualification);
  technicalskills(data.technicals);
  achive(data.Achive);
  console.log(data.Achive);
});
 var right= document.getElementById('right');
 //career:
 function careerObject(careerdata) {
   var career=document.createElement("h4");
   career.textContent="career oject:";
   career.appendChild(document.createElement("HR"));
   var para=document.createElement("p");
   para.textContent=careerdata;
   right.appendChild(career);
   right.appendChild(para);
 }
//Educational Qualification:
function education(edu){
var Educational=document.createElement("h4");
Educational.textContent="Educational Qualification :";
Educational.appendChild(document.createElement("hr"));
right.appendChild(Educational);
var para1=document.createElement("p");
var li="";
for (i in edu) {
 li+="<strong>"+edu[i].name+"</strong>" + edu[i].inst+"<br>";
}
para1.innerHTML=(li);
right.appendChild(para1);
}
//technicals:
function technicalskills(tec){
  var techniacal=document.createElement("h4");
  techniacal.textContent="Technical Skills:";
  techniacal.appendChild(document.createElement("hr"));
  right.appendChild(techniacal);
  var para2=document.createElement("p");
  var li="";
  for (j in tec) {
    li+="<strong>"+tec[j].name+"</strong>"+tec[j].value+"<br>";
  }
  para2.innerHTML=li;
  right.appendChild(para2);
}

function achive(ach) {
  var abc=document.createElement("h4");
  abc.textContent="Acivements";
  abc.appendChild(document.createElement("hr"));
  right.appendChild(abc);
  var para3=document.createElement("p");
  para3.textContent=ach.details;
  right.appendChild(para3);
}
