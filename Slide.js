import React, { Component } from "react";
import Slide from './Slide';

var image=[]
var i=0;
var time=3000;
var src=image;

image[0]='memory';
image[1]='memory2';
image[2]='memory3';

function ChangeImage(){
React.render(<Slide/>, document.Slide.src = image[i]);
if (i< image.length){
    i++;
}else{
    i=0;
}

setTimeout("ChangeImage()", time);

window.onload=ChangeImage;

}


export default ChangeImage;