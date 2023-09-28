var img = null;     
            function init(){      
               img = document.getElementById('myimg');    
               img.style.position = 'relative';         
               img.style.left = '50px';       
            }         
            function moveRight(){      
               img.style.left = parseInt(    
               img.style.left) + 100 + 'px';      
            }      
            window.onload = init;      