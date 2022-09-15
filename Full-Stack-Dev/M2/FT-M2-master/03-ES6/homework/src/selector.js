var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let elementsFound = traverseDomAndCollectElements(matchFunc, child)
    resultSet = [...resultSet, ...elementsFound];
  }
  return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") return 'id';

  if (selector[0] === ".") return 'class';

  if (selector.split('.').length === 2) return 'tag.class';

  if(selector.includes(">")) {
    return 'childCombinator';
  } 

  if(selector.includes(" ")) {
    return 'descendantCombinator';
  }
  
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  // element (ELEMENT HTML) tiene el id que estoy buscando
  if (selectorType === "id") { 
    matchFunction = function(element){
      return `#${element.id}` === selector;
    }

  // element (ELEMENT HTML) tiene la class que estoy buscando
  } else if (selectorType === "class") {
    matchFunction = function(element){
      let classes = element.classList;
      for (let i = 0; i < classes.length; i++) {
        if (`.${classes[i]}` === selector){
          return true;
        }
      }
      return false;
    }

  // element (ELEMENT HTML) tiene el tag y la clase que estoy buscando
  } else if (selectorType === "tag.class") {
    matchFunction = function(element){
      let [t,c] = selector.split('.');
      return matchFunctionMaker(t)(element) && matchFunctionMaker(`.${c}`)(element);
    }

  // element (ELEMENT HTML) tiene el tag que estoy buscando  
  } else if (selectorType === "tag") {
    matchFunction = function(element){
      return element.tagName === selector.toUpperCase();
    }
  }
  
// Extra test

  // En caso de que nos pasen un elemento con un ascendente directo: <div><span></span></div>
  if (selectorType === "childCombinator") {
    matchFunction = function(element){

      // e.g: ["div > span"] // ["div", ">", "span"] // ["div>span"] // ["div", "span"]
      let [father, child] = selector.toUpperCase().split(" > "); // ["div", "span"]

      //retorna true si el padre del elemento html es igual al padre del selector y si el elemento html es igual al hijo del selector
      return (element.parentNode.tagName === father) && (element.tagName === child);
    }
  }

  // En caso de que nos pasen un elemento con un ascendente: <div><span><li></li></span></div>
  if (selectorType === "descendantCombinator") {//si es descendantCombinator
    matchFunction = function(element){//element es el elemento html

      // e.g: ["div li"] // ["div", "li"]
      var [rootFather, descendant] = selector.toUpperCase().split(" ");//separa el selector en rootFather y descendant
      let father = false;//inicializa la variable father en false

      if (element.parentNode) {//si el padre del elemento html existe
        father = element.parentNode;//father es igual al padre del elemento html
        while (father) {//mientras father exista
          if (father.tagName === rootFather) break//si el padre del elemento html es igual al rootFather, se rompe el ciclo
          father = father.parentNode;//father es igual al padre del padre del elemento html
        }
      }
      //retorna true si el padre del elemento html es igual al rootFather y si el elemento html es igual al descendant
      return father && father.tagName === rootFather && element.tagName === descendant;
    }
  }

  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
