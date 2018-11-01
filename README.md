# ui-picker
A ui picker to select a value from given list

How to use?
  
  1.add picker.js script to the html
  
  2.create a array of json with text and value 
    
    example:
    
      var animals = [{text: "Lion", value:"001"}, {text:"Tiger", value:"002"}]
    
  3.in your app initiate the picker along with a Dom element
  
    var picker = uiPicker(document.querySelector("#animals"), {
    
      data: animals,
      visibleNos: 5,
      itemHeight: 35
      
    })
    
  4. you can set and values 
  
      picker.setValue("009");
      
      picker.getValue(); //returns selected value
      
  
