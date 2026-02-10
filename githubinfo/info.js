  
    const btn = document.getElementById('button')
    const img = document.getElementById('avatar')
    const h2 = document.getElementById('followers')
     const h22 = document.getElementById('repo')
     const card = document.getElementById('card')
    btn.addEventListener('click',function(e){
     const username=document.getElementById('url').value.trim();
      if (!username) {
        alert('Enter a username')
        return
    }
    const urlreq=`https://api.github.com/users/${username}`;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',urlreq);
     
   xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText)
             card.classList.toggle("show");
            img.src = data.avatar_url
          h2.textContent = `Followers: ${data.followers}`
          h22.textContent=`public repos:${data.public_repos}`
        }
    }
     xhr.send()
        
    })