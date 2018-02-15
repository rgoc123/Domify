class DOMNodeCollection{
  constructor(nodeListArray){
    this.nodeListArray = nodeListArray;
  }

  _eachElement(callback){
    this.nodeListArray.forEach( (el) => {
      callback(el);
    });
  }

  html(string){
    if (string === undefined) {
      return this.nodeListArray[0].innerHTML;
    } else {
      for (let i = 0; i < this.nodeListArray.length; i++) {
        this.nodeListArray[i].innerHTML = string;
      }
      return true;
    }
  }

  val(parameter){
    if(typeof parameter === 'string'){
      this.nodeListArray[0].value = parameter;
    }
    return this.nodeListArray[0].value;
  }

  empty(){
    this.html('');
  }

  append(elementToAppend){
    if (elementToAppend instanceof DOMNodeCollection) {
      let outerHtmlList = '';
      for (let i = 0; i < elementToAppend.nodeListArray.length; i++) {
        outerHtmlList += elementToAppend.nodeListArray[i].outerHTML;
      }
      for (let i = 0; i < this.nodeListArray.length; i++) {
        this.nodeListArray[i].innerHTML += outerHtmlList;
      }
    } else if (typeof elementToAppend === 'string') {
      for (let i = 0; i < this.nodeListArray.length; i++) {
        this.nodeListArray[i].innerHTML += elementToAppend;
      }
    } else {
      for (let i = 0; i < this.nodeListArray.length; i++) {
        this.nodeListArray[i].appendChild(elementToAppend);
      }
    }
  }

  attr(attributeName, attributeValue){
    if(attributeValue === undefined){
      return this.nodeListArray[0].getAttribute(attributeName);
    } else {
      this.nodeListArray[0].setAttribute(attributeName, attributeValue);
    }
  }

  addClass(className){
    this.nodeListArray.forEach( (htmlElement) => {
      htmlElement.classList.add(className);
    });
  }

  removeClass(className){
    this.nodeListArray.forEach( (htmlElement) => {
      htmlElement.classList.remove(className);
    });
  }


  // TRAVERSAL

  children(){

    let childArray = [];

    this.nodeListArray.forEach((parentNode) => {

      Array.from(parentNode.children).forEach((child) => {
        if(!childArray.includes(child)){
          childArray.push(child);
        }
      });
    });
    return new DOMNodeCollection(childArray);
  }

  parent(){

    let parentArray = [];
    this._eachElement(childNode => {
      if(!parentArray.includes(childNode.parentNode)){
        parentArray.push(childNode.parentNode);
      }
    });

    return new DOMNodeCollection(parentArray);
  }

  find(selector){
    let myArray = [];
    this.nodeListArray.forEach( (node) => {
      node.querySelectorAll(selector).forEach(ele => {
        if (!myArray.includes(ele)) {
          myArray.push(ele);
        }
      });
    });
    return new DOMNodeCollection(myArray);
  }

  remove(){
    this.nodeListArray.forEach( (node) => {
      node.remove();
    });

    this.empty();
    return this;
  }

  on(eventType, callback){
    this.nodeListArray.forEach (node => {
      node.addEventListener(eventType, callback);
      node[eventType] = callback;
    });
  }

  off(eventType){
    this.nodeListArray.forEach (node => {
      node.removeEventListener(eventType, node[eventType]);
    });
  }

}


export default DOMNodeCollection;
