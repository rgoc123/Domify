import DOMNodeCollection from './domify_dom_node_collection.js';

const $l = arg => {

  if (typeof arg === 'string') {
    const nodeList = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(nodeList));
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(arg));
  } else if (typeof arg === 'function'){
    document.addEventListener("DOMContentLoaded", arg);
  }
};

window.$l = $l;

$l.ajaxConstant = function(){
  return {
    type:'GET',
    url: window.location.href,
    success(){console.log('success');},
    failure(){console.log('failure');}
  };
};

$l.extend = function(...JSObjects){
  const extendObj = {};
  JSObjects.forEach((object)=>{
    for(let element in object){
      extendObj[element] = object[element];
    }
  });
  return extendObj;
};

$l.ajax = function(options){
  const ajaxParams = $l.extend($l.ajaxConstant(), options);
  const xhr = new XMLHttpRequest();
  xhr.open(ajaxParams.type, ajaxParams.url);
  xhr.onload = function(){
    if(xhr.status === 200){
      ajaxParams.success(xhr.response);
    } else {
      ajaxParams.failure(xhr.response);
    }
  };
  xhr.send(ajaxParams.data);
};
