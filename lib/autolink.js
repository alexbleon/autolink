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
var httpLink = autolink( { src: text }, httpSearch, httpReplace, httpGeturl);
httpLink.search();
httpLink.replace();

*/
module.exports = function autolink(option, searchCallback, replaceCallback, geturlCallback) {
  var src = option.src;
  var startLink = 0;
  var endLink = 0;
  var lengthLink = 0;
  var url = undefined;
  return {
    function search() {
      url = undefined;
      startLink = src.indexOf("http");
      lengthLink = "http".length;
      endLink = startLink+lengthLink;
      if ( typeof searchCallback === 'function' )
        searchCallback(startLink, lengthLink);
      return startLink;
    }
    function replace() {
      if ( typeof replaceCallback === 'function' ) 
        replaceCallback(); 
    }
    function getUrl() {
      if (url !== undefined) url = src.substring(startLink, lengthLink);
      if ( typeof geturlCallback === 'function' ) 
        geturlCallback(url);
    }
  };
}
