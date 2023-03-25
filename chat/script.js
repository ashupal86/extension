const list=["1234","new123","hello","world","why123","kite12","jupyter"];
const rand=Math.round(Math.random()*list.length);
const randitem=list[rand]
console.log(randitem);
const newurl="https://hack.chat/?(" +randitem+")";
const body='<iframe id="frame" src="'+newurl+'" frameborder="0" width="500px" height="400px"></iframe><h4 >Paste it in your browser</h4><p id="p">'+newurl+'<a id="a" href="'+newurl+' target="_blank">Share</a></p>';

document.write(body);