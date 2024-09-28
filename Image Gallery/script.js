var fullimgbox=document.getElementById('fullimgbox');
var fullimg1=document.getElementById('fullimg1');

function openimg(src){
    fullimgbox.style.display='flex';
    fullimg1.src=src;
}

function closeImg(){
    fullimgbox.style.display='none';
}
