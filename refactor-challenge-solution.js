/*
This is my solution to refactor: refactor-challenge.js
*/


var html = '';
var red;
var green;
var blue;
var rgbColor;

function circles() {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return html += '<div style="background-color:' + rgbColor + '"></div>';
  }
for (var i = 0; i < 10; i += 1) {
circles()
}
document.write(html);
