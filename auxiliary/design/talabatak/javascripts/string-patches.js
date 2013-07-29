//-Patching string class to contain getWidth() function based on number of chars and char
//-width and to get the count of a character ---------------------------------------
String.prototype.getWidth = function(styleObject){
  var test = document.createElement("span");
  document.body.appendChild(test);
  test.style.visibility = "hidden";
  for(var i in styleObject){
    test.style[i] = styleObject[i];
  }
  test.innerHTML = this;
  var w = test.offsetWidth;
  document.body.removeChild(test);
  return w;
};

String.prototype.count = function(s1) {
  return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length;
};

String.prototype.titlize = function(sep) {
  if(this == undefined || this == null)
    return "";
  if(sep == undefined)
    sep = this.indexOf("_") > -1 ? "_" : " ";
  return this.split(sep).map(function(s){ return s.charAt(0).toUpperCase() + s.slice(1); }).join(" ");
};
//----------------------------------------------------------------------------------