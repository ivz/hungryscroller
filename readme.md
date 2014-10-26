#Hungry Scroller
The automatic jQuery scroller that conveniently accompanies long web pages by allowing your users to have a hands-off experience. 

##Getting Started
- Download the zip files
- Open in Text Editor
- Include the stylesheet in the head section of HTML:
```html
<link rel="stylesheet" type="text/css" href="css/jquery.hungryscroller.css">
```    
- Link to jQuery: 
```html
 <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
```
- Link to Mousetrap (for keybindings):
```html
 <script type="text/javascript" src="js/mousetrap.min.js"></script>
```
- Link to HungryScroller: 
```html
 <script type="text/javascript" src="js/hungryscroller.js"></script> 
```      
<br>      
      
##Including Hungry Scroller in HTML
Add a scroll tab to allow users to start/stop HungryScroller and choose their own speed setting:
<br>

```html
<ul class="scroller">
  <li class="scroll">Start Scroll</li>
    <ul class="speeds">
      <li class="slow">Famished-Slow</li>
      <li class="med">Peckish-Med</li>
      <li class="fast">Bite Size-Fast</li>
    </ul>
  </li>
</ul>
```
    
Add the discrete munchkin images and audio:
<br>

```html
<audio id="munch" src="audio/muncha.mp3" type="audio/mp3"></audio>
<img src="img/munch1.png" alt="" class="munch munch-top">
<img src="img/munch2.png" alt="" class="munch munch-bottom">
```
    
This a secret animation of an animated monster taking a bite of the user's screen, triggered when the user types: <br>"m u n c h"
<br>

##Example
[See Hungry Scroller in action](http://ivz.github.io/hungryscroller/).
<br>      
      
##Adjusting Scroll Speed Settings
Speed will depend on the height of each individual page (longer pages will appear to scroll through faster than shorter ones):
<br>

```js
$(function(){
  $('body,html').hungryscroller({
    slowSpeed: 25000, //scrolls through the page in 25 seconds
    medSpeed: 12000, //scrolls through the page in 12 seconds
    fastSpeed: 8000 ////scrolls through the page in 8 seconds
  });
});
```
	
<br>      
      






