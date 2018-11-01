var uiPicker = function picker(elem, prop){
	"use strict";
	
		//intializing variables
		prop.visibleNos = (prop.visibleNos - 1 + (prop.visibleNos % 2)) || 5 //must be an odd number
		prop.vOffset = Math.floor(prop.visibleNos/2);

		//intializing html variables
		var list = document.createElement('ul');
		list.setAttribute('class', 'picker');
		for(var i=0; i<prop.data.length; i++){
			{
				var li = document.createElement('li');
				li.textContent = prop.data[i].text;
				li.setAttribute('class', 'item');
				li.setAttribute('data-value', prop.data[i].value);
				list.appendChild(li);
			}
		}
		var item  = list.querySelectorAll('li.item'),
		frame = document.createElement('div');
		frame.setAttribute('class', 'picker-frame');
		elem.appendChild(frame);
		elem.setAttribute('class', 'picker-wrapper');

		//appending the dynamic element to the passed elem
		elem.appendChild(list, list);

		//setting dynamic styles
		for(var i=0; i<list.length; i++){
			item[i].style.height = prop.itemHeight + "px";
		}
		list.style.height = (prop.visibleNos * prop.itemHeight) + "px";
		frame.style.height = prop.itemHeight + "px";
		frame.style.top = (prop.vOffset * prop.itemHeight) + "px";
		item[0].style.paddingTop = (prop.vOffset * prop.itemHeight) + "px";
		item[item.length - 1].style.paddingBottom = (prop.vOffset * prop.itemHeight) + "px";

		//Event Handling
		list.addEventListener("click", function(e){
			e.stopPropagation();
			if(e.target.tagName === "LI")
				scrollTo(Array.prototype.indexOf.call(item, e.target) || 0);
		});

		var scrolled;
		list.addEventListener("wheel", function(e){
			clearTimeout(scrolled);
			scrolled = setTimeout(function(){
				scrollTo(Math.round(list.scrollTop / prop.itemHeight));
			}, 300)
		});

		//function declarations
		var currID = 0;
		function scrollTo(index){
			easeAnim(list, "scrollTop", list.scrollTop, index * prop.itemHeight, function(){
				setBold(index);
    			currID = index;
			})
		}scrollTo(0); //defaulting to first value

		function setBold(targetID){
			item[currID].style.fontWeight = "Normal";
			item[targetID].style.fontWeight = "Bold";
		}


	//easing function
	function easeAnim(target, property, startValue, endValue, callback){
	    var initAnimInterval = 10, stepAbs = 2, easeIn = 0,
	        step = startValue <= endValue ? stepAbs : stepAbs * -1;

	    easeIn = setInterval(function(){
	      if(Math.abs(target[property] - endValue) <= 2){
	        clearInterval(easeIn);
	        callback();
	      }
	      else{
	        target[property] = target[property] + step;
	      }
	      initAnimInterval = initAnimInterval * 15;
	    }, initAnimInterval);
	}

	//returning object
	const pickerObject = {
		getLength : function(){
			console.log(prop.data.length);
		},
		setValue : function(id){

		}
	}
	return pickerObject;
}
