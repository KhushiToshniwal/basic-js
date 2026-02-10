const inse=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
    inse.innerHTML=`
    <div class='color'>
       <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
    </div>
    `
})