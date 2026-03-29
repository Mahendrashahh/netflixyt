

function stopAllVideos(){
document.querySelectorAll(".video-card iframe").forEach(frame=>{
let parent = frame.parentElement;

frame.remove();

let thumb = parent.querySelector(".thumbnail");
let btn = parent.querySelector(".play-button");

if(thumb) thumb.style.display="block";
if(btn) btn.style.display="block";
});
}

document.querySelectorAll('.video-card').forEach(card=>{

card.addEventListener('click',function(){

stopAllVideos();


if(card.querySelector('iframe')) return;

const videoId = card.getAttribute('data-id');



const iframe = document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
iframe.allow="autoplay;encrypted-media";
iframe.allowFullscreen=true;
iframe.style.width="100%";
iframe.style.height="100%";
iframe.style.border="0";



card.querySelector(".thumbnail").style.display="none";
card.querySelector(".play-button").style.display="none";


card.appendChild(iframe);







});

});

