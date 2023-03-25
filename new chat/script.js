




function enter(){
    

    if (!localStorage.getItem("url")==" "){
        document.getElementById("frame").remove();
        document.getElementById("pa").remove();
        document.getElementById("an").remove();
        document.getElementById("div").remove();

        
    const roomid=prompt("Enter room id:");
    

        if (roomid==""){
            alert("Enter room id")
            
        }
        else if(!roomid==""){
            var enurl="https://hack.chat/?("+roomid+")";
            
            const iframe=document.createElement("iframe");
            const div=document.createElement("div");
            const p=document.createElement("p");
            const a=document.createElement("a");
            p.setAttribute("id","pa");
            p.innerHTML="Room id:  "+roomid;
            iframe.setAttribute("src",enurl);
            iframe.setAttribute("width","400px");
            iframe.setAttribute("height","450px");
            a.setAttribute("id","an");
            a.setAttribute("href",enurl);
            a.setAttribute("target","_blank");
            a.innerHTML="Share";
            iframe.setAttribute('id',"frame");
            div.setAttribute("id","div");
            div.appendChild(iframe);
            div.appendChild(p);
            div.appendChild(a);
            document.body.appendChild(div);
            
        
        
        
            document.getElementById("frame").style.width="400px";
            document.getElementById("frame").style.height="450px";
            
            localStorage.setItem("url",enurl)
            localStorage.setItem("id",roomid)
        }

    }
    else{
        
    const roomid=prompt("Enter room id");
    if (roomid==""){
        alert("Enter room id")
        
    }
    else if(!roomid==""){
        var enurl="https://hack.chat/?("+roomid+")";
        
        const iframe=document.createElement("iframe");
        const div=document.createElement("div");
        const p=document.createElement("p");
        const a=document.createElement("a");
        p.setAttribute("id","pa");
        p.innerHTML="Room id:  "+roomid;
        iframe.setAttribute("src",enurl);
        iframe.setAttribute("width","400px");
        iframe.setAttribute("height","450px");
        a.setAttribute("id","an");
        a.setAttribute("href",enurl);
        a.setAttribute("target","_blank");
        a.innerHTML="Share";
        iframe.setAttribute('id',"frame");
        div.appendChild(iframe);
        div.setAttribute("id","div");
        div.appendChild(p);
        div.appendChild(a);
        document.body.appendChild(div);
        
    
    
    
        document.getElementById("frame").style.width="400px";
        document.getElementById("frame").style.height="450px";
        
        localStorage.setItem("url",enurl)
        localStorage.setItem("id",roomid)
    }
    }
    
}



function create(){
    const list=["1234","new123","hello","world","why123","kite12","jupyter"];
const rand=Math.round(Math.random()*list.length);
const randitem=list[rand]
if (!localStorage.getItem("url")==" "){

    document.getElementById("frame").remove();
        document.getElementById("pa").remove();
        document.getElementById("an").remove();
        document.getElementById("div").remove();





var crurl="https://hack.chat/?("+randitem+")";
    alert("Your room id:  "+randitem)
   
    const iframe=document.createElement("iframe");
    const div=document.createElement("div");
    const p=document.createElement("p");
    const a=document.createElement("a");
    p.setAttribute("id","pa");
    p.innerHTML="Room id:  "+randitem;
    iframe.setAttribute("src",crurl);
    iframe.setAttribute("width","400px");
    iframe.setAttribute("height","450px");
    a.setAttribute("id","an");
    a.setAttribute("href",crurl);
    a.setAttribute("target","_blank");
    a.innerHTML="Share";
    iframe.setAttribute('id',"frame");
    div.appendChild(iframe);
    div.setAttribute("id","div");
    div.appendChild(p);
    div.appendChild(a);
    document.body.appendChild(div);
    



    document.getElementById("frame").style.width="400px";
    document.getElementById("frame").style.height="450px";
    
    localStorage.setItem("url",crurl)
    localStorage.setItem("id",randitem)
}else{
    var crurl="https://hack.chat/?("+randitem+")";
    alert("Your room id:  "+randitem)
   
    const iframe=document.createElement("iframe");
    const div=document.createElement("div");
    const p=document.createElement("p");
    const a=document.createElement("a");
    p.setAttribute("id","pa");
    p.innerHTML="Room id:  "+randitem;
    iframe.setAttribute("src",crurl);
    iframe.setAttribute("width","400px");
    iframe.setAttribute("height","450px");
    a.setAttribute("id","an");
    a.setAttribute("href",crurl);
    a.setAttribute("target","_blank");
    a.innerHTML="Share";
    iframe.setAttribute('id',"frame");
    div.appendChild(iframe);
    div.setAttribute("id","div");
    div.appendChild(p);
    div.appendChild(a);
    document.body.appendChild(div);
    



    document.getElementById("frame").style.width="400px";
    document.getElementById("frame").style.height="450px";
    
    localStorage.setItem("url",crurl)
    localStorage.setItem("id",randitem)
}


}



document.getElementById("enter").addEventListener('click',enter);
document.getElementById("create").addEventListener('click',create);


window.onload=function(){
    const url=localStorage.getItem("url")
    if (!localStorage.getItem("url")==""){
        const iframe=document.createElement("iframe");
    const div=document.createElement("div");
    const p=document.createElement("p");
    const a=document.createElement("a");
    p.setAttribute("id","pa");
    p.innerHTML="Room id:  "+localStorage.getItem("id");
    iframe.setAttribute("src",url);
    iframe.setAttribute("width","400px");
    iframe.setAttribute("height","450px");
    a.setAttribute("id","an");
    a.setAttribute("href",url);
    a.setAttribute("target","_blank");
    a.innerHTML="Share";
    iframe.setAttribute('id',"frame");
    div.appendChild(iframe);
    div.setAttribute("id","div");
    div.appendChild(p);
    div.appendChild(a);
    document.body.appendChild(div);
    



    document.getElementById("frame").style.width="400px";
    document.getElementById("frame").style.height="450px";
    
    localStorage.setItem("url",url)

    }
    
    

}