'use strict'

/*
The goal of module is looking for link and call user function to do smth with it
params:
option - is object with string to parse and may be some option
searchCallback - user function to be call when link was found
replaceCallback - user function to be call to replace link after search
geturlCallback - user function to be call get url of link
usage:
var text = "to ream more click http://google.com";

function httpSearch(startLinkIndex, linkLength) {
  //do smth may be save startLinkIndex and linkLength
}
function httpReplace() {
  // replace link on startLinkIndex to what we need
  // use httpGeturl to get url
}
function httpGeturl(url) {
  // this function is useful in httpReplace()
}
var httpLink = new Autolink( { src: text } );
httpLink.search( httpSearch );
httpLink.replace();

*/
function Autolink(option) {
  this.src = option.src;
  this.startLink = 0;
  this.endLink = 0;
  this.lengthLink = 0;
  this.currentLink = undefined;
}

Autolink.prototype.search = function (callback) {
  this.url = undefined;
  this.startLink = this.src.indexOf("http");
  this.lengthLink = "http".length;
  this.endLink = this.startLink+this.lengthLink;
  if ( typeof callback === 'function' ) {
    callback(this.startLink, this.lengthLink);
  }
};

Autolink.prototype.replace = function () {
};

Autolink.prototype.getUrl = function () {
};

module.exports = Autolink;
