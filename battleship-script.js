function reset(){
    localStorage.clear()
}
function Setting(){
    let user1=document.getElementById("ime1").value
    let user2=document.getElementById("ime2").value
    localStorage.setItem("ime1",user1)
    localStorage.setItem("ime2",user2)
    window.open("battleship-setup.html","_self")
}
var pl14polja=1
var pl13polja=2
var pl12polja=3
var pl11polja=4

var pl24polja=1
var pl23polja=2
var pl22polja=3
var pl21polja=4
function pisi(){
    document.getElementById("data1").innerHTML=" brod 4 polja:"+pl14polja+"<br>brod 3 polja:"+pl13polja+"<br> brod 2 polja:"+pl12polja+"<br> brod 1 polje"+pl11polja
   // document.getElementById("data2").innerHTML=" brod 4 polja:"+pl24polja+"<br>brod 3 polja:"+pl23polja+"<br> brod 2 polja:"+p122polja+"<br> brod 1 polje"+pl21polja
}
function pisi2(){
    document.getElementById("player2stats").innerHTML=" brod 4 polja:"+pl24polja+"<br>brod 3 polja:"+pl23polja+"<br> brod 2 polja:"+pl22polja+"<br> brod 1 polje"+pl21polja
}
var a1=new Array(10)
var a2=new Array(10)
function generate(){
    document.getElementById("user1").innerHTML= localStorage.getItem("ime1")
    document.getElementById("user2").innerHTML= localStorage.getItem("ime2")
    for(let i=0;i<10;i++){
        a1[i]=new Array(10)
        a2[i]=new Array(10)
    }
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
                a1[i][j]=0
                a2[i][j]=0
        }
    }
    document.getElementById("player2stats").style.visibility="hidden"
    document.getElementById("user2").style.visibility="hidden"
    pisi()
    pisi2()
    pl14polja=1
    pl13polja=2
    pl12polja=3
    pl11polja=4

    pl24polja=1
    pl23polja=2
    pl22polja=3
    pl21polja=4
    document.getElementById("pl2").style.visibility="hidden"
}
function writematrix(){
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
           document.write(localStorage.getItem(i.toString()+j.toString()))
        }
    }
}
function savematrix(){
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            localStorage.setItem((i.toString()+j.toString()),a1[i][j])
    }
}
}
function savematrix2(){
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            localStorage.setItem((i.toString()+j.toString()+"y"),a2[i][j])
    }
}
}
var mousdwnx=-1,mousdwny=-1
var mousupx=-1,mousupy=-1
function proverabrod1(){
    let s=0
    s=pl11polja+pl12polja+pl13polja+pl14polja;
    return s;
}
function mousdwn(px,py){
    mousdwnx=px;
    mousdwny=py;
}
function GameStart(){
    if(proverabrod1()==0 && proverabrod2()==0){
        alert("Igra pocinje!!!")
        window.open("battleship-game.html","_self")
    }
    else
    return;
}
function wait(ms){
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}
function colorrow(){
    let i=mousdwnx
    let br=0
    let s1=0
    for(let j=mousdwny;j<=mousupy;j++)
    s1+=a1[i][j]
    if(s1){
        alert("Brodovi se preklapaju")
        return
    }
    for(let j=mousdwny;j<=mousupy;j++)
    br++
    if(br>4){
        alert("Pogresan broj polja")
        return;
    }
    if(proverabrod1()==0){
        alert("nemate vise brodova")
    }
    if(br==4 && pl14polja!=0){
        pl14polja--
    }
    else if(br==3 && pl13polja!=0)
        pl13polja--
    
    else if(br==2 && pl12polja!=0)
        pl12polja--
    else if(br==1 && pl11polja!=0)
        pl11polja--
    else{
        alert("nema broda sa"+br+" polja")
        return;
    }
    for(let j=mousdwny;j<=mousupy;j++){
       document.getElementById(i.toString()+j.toString()).style.backgroundColor="red"
        a1[i][j]=1
    }

      savematrix();
//    wait(1500)
     if(proverabrod1()==0){
        document.getElementById("player2stats").style.visibility="visible"
        document.getElementById("user2").style.visibility="visible"
        document.getElementById("pl2").style.visibility="visible"
        document.getElementById("pl1").style.visibility="hidden"
        document.getElementById("data1").style.visibility="hidden"
        document.getElementById("user1").style.visibility="hidden"
  }
        pisi()  
       GameStart()
}
function colorcol(){
    let j=mousdwny;
    let br=0
    let s1=0
    for(let i=mousdwnx;i<=mousupx;i++)
        s1+=a1[i][j]
    if(s1){
        alert("Brodovi se preklapaju")
        return
    }    
    for(let i=mousdwnx;i<=mousupx;i++)
    br++
    if(br>4){
        alert("Pogresan broj polja")
        return;
    }
    if(proverabrod1()==0){
        alert("nemate vise brodova")
    }
    if(br==4 && pl14polja!=0){
        pl14polja--
    }
    else if(br==3 && pl13polja!=0)
        pl13polja--
    
    else if(br==2 && pl12polja!=0)
        pl12polja--
    else if(br==1 && pl11polja!=0)
        pl11polja--
    else{
        alert("nema broda sa"+br+" polja")
        return;
    }
    for(let i=mousdwnx;i<=mousupx;i++){
        document.getElementById(i.toString()+j.toString()).style.backgroundColor="red"
        a1[i][j]=1;
    }
    pisi()
    savematrix();
//    wait(1500)
if(proverabrod1()==0){
    document.getElementById("player2stats").style.visibility="visible"
    document.getElementById("user2").style.visibility="visible"
    document.getElementById("pl2").style.visibility="visible"
    document.getElementById("pl1").style.visibility="hidden"
    document.getElementById("data1").style.visibility="hidden"
    document.getElementById("user1").style.visibility="hidden"
}
    
  //  GameStart()
}
function mousup(p1,p2){
   mousupx=p1
   mousupy=p2
   if(mousupx==mousdwnx&& mousupy!=mousdwny){
       colorrow()
   }
   else if(mousupx==mousdwnx&& mousupy==mousdwny){
       colorrow();
   }
   else if(mousupx!=mousdwnx&& mousupy==mousdwny){
       colorcol()
   }
   else
   alert("ne moze");

}

var mousdwnx2=-1,mousdwny2=-1
var mousupx2=-1,mousupy2=-1
function mousdwn2(px2,py2){
    mousdwnx2=px2;
    mousdwny2=py2;
}
function proverabrod2(){
    let s=0
    s=pl21polja+pl22polja+pl23polja+pl24polja
    return s;
}
function colorrow2(){
    let i=mousdwnx2
    let br=0;
    let s2=0;
    for(let j=mousdwny2;j<=mousupy2;j++)
        s2+=a2[i][j]
    if(s2){
        alert("Brodovi se preklapaju")
        return
    }
    for(let j=mousdwny2;j<=mousupy2;j++)
        br++
    if(br>4){
        alert("Pogresan broj polja")
        return;
    }
    if(proverabrod2()==0){
        alert("nemate vise brodova")
    }
    if(br==4 && pl24polja!=0){
        pl24polja--
    }
    else if(br==3 && pl23polja!=0)
        pl23polja--
    else if(br==2 && pl22polja!=0)
        pl22polja--
    else if(br==1 && pl21polja!=0)
        pl21polja--
    else{
        alert("nema broda sa"+br+" polja")
        return;
    }
    for(let j=mousdwny2;j<=mousupy2;j++){
        document.getElementById(i.toString()+j.toString()+"y").style.backgroundColor="green"
        a2[i][j]=1    
    }
    pisi2()
    //wait(1500)
    savematrix2()
    GameStart()
}
function colorcol2(){
   let j=mousdwny2
   let br=0;
   let s2=0;
   for(let i=mousdwnx2;i<=mousupx2;i++)
   s2+=a2[i][j]
   if(s2){
    alert("Brodovi se preklapaju")
    return
}
   for(let i=mousdwnx2;i<=mousupx2;i++)
   br++;
   if(br>4){
    alert("Pogresan broj polja")
    return;
}
    if(proverabrod2()==0){
        alert("nemate vise brodova")
    }
    if(br==4 && pl24polja!=0){
        pl24polja--
    }
    else if(br==3 && pl23polja!=0)
        pl23polja--
    else if(br==2 && pl22polja!=0)
        pl22polja--
    else if(br==1 && pl21polja!=0)
        pl21polja--
    else{
        alert("nema broda sa"+br+" polja")
        return;
    }
   for(let i=mousdwnx2;i<=mousupx2;i++){
    document.getElementById(i.toString()+j.toString()+"y").style.backgroundColor="green"
    a2[i][j]=1
}
    pisi2()
    //wait(1500) 
    savematrix2()
    GameStart()
}
function mousup2(px1,py2){
   mousupx2=px1
   mousupy2=py2
   if(mousupx2==mousdwnx2&& mousupy2!=mousdwny2){
       colorrow2()
   }
   else if(mousupx2==mousdwnx2&& mousupy2==mousdwny2){
       colorrow2();
   }
   else if(mousupx2!=mousdwnx2&& mousupy2==mousdwny2){
       colorcol2()
   }
   else
   alert("ne moze");
}
var a11=new Array(10)
var a22=new Array(10)
function restorematrix(){
    document.getElementById("user1").innerHTML= localStorage.getItem("ime1")+"'s boats"
    document.getElementById("user2").innerHTML= localStorage.getItem("ime2")+"'s boats"
    for(let i=0;i<10;i++){
        a11[i]=new Array(10)
        a22[i]=new Array(10)
    }
        for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            a11[i][j]=parseInt((localStorage.getItem((i.toString()+j.toString()))))
            a22[i][j]=parseInt(localStorage.getItem((i.toString()+j.toString()+"y")))
        }
    }
    document.getElementById("pl2").style.visibility="hidden"
}
function sum1(){
    let s=0;
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            s+=a11[i][j]      
        }
    }  
    return s
}
function sum2(){
    let s=0;
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            s+=a22[i][j]      
        }
    }  
    return s
}
function winner(){
    if(sum1()==0){
        alert("Pobednik je igrac:"+localStorage.getItem("ime2"))
        document.getElementById("pl1").style.visibility="hidden"
        document.getElementById("pl2").style.visibility="hidden"
    }
    if(sum2()==0){
        alert("Pobednik je igrac:"+localStorage.getItem("ime1"))
        document.getElementById("pl1").style.visibility="hidden"
        document.getElementById("pl2").style.visibility="hidden"
    }
}

function fire(pxx1,pyy1){
    if(a11[pxx1][pyy1]==1){
        a11[pxx1][pyy1]=0
        document.getElementById(pxx1.toString()+pyy1).style.backgroundColor="red"
    }
    else{
        document.getElementById((pxx1.toString()+pyy1.toString())).innerHTML="X"
        document.getElementById("pl1").style.visibility="hidden"
        document.getElementById("pl2").style.visibility="visible"
    }
    winner()
}
function fire2(pxx2,pyy2){
    if(a22[pxx2][pyy2]==1){
        a22[pxx2][pyy2]=0
        document.getElementById(pxx2.toString()+pyy2.toString()+"y").style.backgroundColor="green"
    }
    else{
 //       wait(1500)
        document.getElementById(pxx2.toString()+pyy2.toString()+"y").innerHTML="X"
        document.getElementById("pl2").style.visibility="hidden"
        document.getElementById("pl1").style.visibility="visible"
    }
    winner()
}