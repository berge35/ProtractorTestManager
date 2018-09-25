import { Component, OnInit } from '@angular/core';
class PageObject{
  name: String;
  description: String;
  elements: element[];
  functions: any[];
} 
class element {
  name: String;
  type: String;
  idType: String;
  identifier: String;
}
class action {
  element: element;
  type: String;
}

class func{
  name: String;
  actions: action[] = new Array();
}

@Component({
  selector: 'app-page-object-builder',
  templateUrl: './page-object-builder.component.html',
  styleUrls: ['./page-object-builder.component.css']
})
export class PageObjectBuilderComponent implements OnInit {
  elements: element[] = new Array();
  newElement: element = new element();
  pageObject: PageObject = new PageObject();

  functions: func[] = new Array();
  newFunc: func = new func();
  newAction: action = new action();
  selectedElement: element = new element();
  actionTypes = ["Send Keys", "Click", "Select"];
  currType: String;

  constructor() { }

  ngOnInit() {
    this.newElement.name = "sadfsdfdf"
  }

  addElement(){
    var copy = this.newElement;
    this.elements.push(copy);
    this.newElement = new element();
  }

  addFunction(){
    var copy = this.newFunc;
    this.functions.push(copy);
    this.newFunc = new func();
  }

  addAction(func: func, action: action){
    func.actions.push(action);
  }

  setActions(element: element){
    console.log(element.type)
    this.currType = element.type;
    if(this.currType == "Input"){
      this.actionTypes = ["Click", "Send Keys"];
    }else if(this.currType == "Select"){
      this.actionTypes = ["Select"];
    }else if(this.currType == "Button" || "Link"){
      this.actionTypes = ["Click"];
    }
  }

  constructPageObject(){
    this.pageObject.elements = this.elements;
    var data = "//" +  this.pageObject.name + " Dynamically generated Page Object File\n";
    data += "//" + this.pageObject.description + "\n\n";
    data += "var basicsModule = require('../helpers/basics');\n\n"
    data += "var " + this.pageObject.name + " = function() {\n";
    data += " var basics = new basicsModule();\n\n"
    data += "//Page elements found\n";
    this.elements.forEach(element => {
      if(element.idType == "XPath"){
        data += "   this." + element.name + " = element(By.xpath(\'" + element.identifier +  "\'));\n";
      } else if(element.idType == "ID"){
        data += "   this." + element.name + " = element(by.id(\'" + element.identifier + "\'));\n" ;
      }else if(element.idType == "Name"){
        data += "   this." + element.name + " = element(by.name(\'" + element.identifier + "\'));\n" 
      }else if(element.idType == "CSS"){
        data += "   this." + element.name + " = element(by.css(\'" + element.identifier + "\'));\n" 
      }
    });
    data += "}\n\n";



    download(data, this.pageObject.name + ".js", "application/javascript")
  }

}

// Function to download data to a file
function download(data, filename, type) {
  var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}