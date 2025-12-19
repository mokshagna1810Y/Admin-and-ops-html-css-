
setTimeout(getdata,2500);
function getdata(){
    document.querySelector('.image').innerHTML='<img src="../images/im.jpg   ">';
    document.querySelector('.data').innerHTML = `
    <p>name</p>
    <p>bio..........................................................................</p>
  `;
}