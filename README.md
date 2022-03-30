# Front End for ICBS Website

After experimenting with [Editor.js](https://github.com/codex-team/editor.js) in this [test project](https://github.com/sethvan/react_editorjs_test)
I decided to implement it as a CMS for my local church  
so that they could have a website where they could display and share content. This is the front end for their  
site [bautistasinai.com](https://www.bautistasinai.com) which I deployed on Digital Ocean. To update the
site I modify here and then run build,  
paste to [back end](https://github.com/sethvan/IglesiaCristianaBautistaSinai), push back end to GitHub and pull
from GitHub inside of Digital Ocean Droplet.  
  
This is my first MERN stack site of my own and first REACT app. Since it was in part an opportunity for learning  
I used both class and function components. As well I used React Router 5 (it was what I learned with) and Redux.  

Redux I used to authenticate admin and to limit unnecessary HTTP requests (specifically for the entirety of the  
MongoDB collections) from the back end. Kind of overkill maybe but it irked me on the user side to see it being   
done in different places multiple times when I could just use Redux to limit it, plus it was a learning opportunity.  
  
  
<p>Here are some cell screenshots of the admin view:</p> 
<br/>
<div >
  <img src="https://live.staticflickr.com/65535/51970688515_c10f24c543_c.jpg" height="550" width="250" >
  <span>&emsp;&emsp;</span>
  <img src="https://live.staticflickr.com/65535/51969124382_23013b7e62_c.jpg" height="550" width="250" >
  <span>&emsp;&emsp;</span>
  <img src="https://live.staticflickr.com/65535/51970125126_1363a5074b_c.jpg" height="550" width="250" >
  <span>&emsp;&emsp;</span>
  <img src="https://live.staticflickr.com/65535/51969124702_5672f09eb1_c.jpg" height="550" width="250" >
  <span>&emsp;&emsp;</span>
  <img src="https://live.staticflickr.com/65535/51970415374_2db0b20f20_c.jpg" height="550" width="250" >
</div>

