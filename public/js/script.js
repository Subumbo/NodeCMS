/* Author: Patrick Wolleb	
	
*/

var page = (function(){
	
	var datal
	
	$("select, input[type=radio],  input[type=submit], a.button, button").uniform();
	
	window.ondragover = function () { 		
		$('#drop').css('background-color', '#ee3122'); 
		return false; 
	};
	window.ondragend = function () { 
		$('#drop').css('background-color', '#dddddd'); 
		return false; 
	};
	window.ondrop = function (e) {
	 	$('#drop').remove();
		e.stopPropagation();
		e.preventDefault();

		var file = e.dataTransfer.files[0];
		
		
			
		var fd = new FormData();
        fd.append("swf", file);
        var xhr = new XMLHttpRequest();
        //xhr.upload.addEventListener("progress", uploadProgress, false);
       	xhr.addEventListener("load", uploadComplete, false);
        //xhr.addEventListener("error", uploadFailed, false);
        //xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "/upload");
        xhr.send(fd);




		return false;


	};
	
	function uploadComplete() {
		data = JSON.parse(this.responseText);
		document.getElementById('format').style.display = 'block';
		document.getElementById('format').onsubmit = function(e) {
			e.preventDefault()
  			data.format = getCheckedValue($("input[type='radio'][name='format']"));
  			data.numFrames = getCheckedValue($("input[type='radio'][name='frames']"));
			if(data.format && data.numFrames) {
				data.width = data.format.substr(0, data.format.indexOf('x'));
				data.height = data.format.substr(data.format.indexOf('x') + 1);	
				data.link =  data.name.substr(0, data.name.lastIndexOf('.'));
				document.getElementById('format').style.display = 'none';
				$.ajax({
    url: "/save",
    type: "POST",
    data: {data:data},
    cache: false,
    timeout: 5000,
    complete: function() {
      //called when complete
      console.log('process complete');
    },

    success: function(response) {
    	
		window.location.href = data.link;	     	
   },

    error: function() {
      console.log('process error');
    },
  });
				
			}else {
				alert('Please select format and total frames');
			}
		}
	}
	
	function render() {
		
		document.getElementById('title').innerHTML = data.name.substr(0, data.name.indexOf('.'));
		
		var i = 0;
		var l = data.numFrames;
		for(; i < l; ++i) {
			var div = document.createElement('div');
			div.className = 'item_' + data.format;
			var obj = document.createElement('object');
			div.appendChild(obj);
			obj.data = data.url+ '?renderFrame=' +  (11 + i);
			obj.type = 'application/x-shockwave-flash';
			obj.width = data.width;
			obj.height = data.height;
			document.getElementById('main').appendChild(div);
			
		}
		
		
	}
	
	
	function getCheckedValue( radios ) {
	    for( i = 0; i < radios.length; i++ ) {
	        if( radios[i].checked ) {
	            return radios[i].value;
	        }
	    }
	    return null;
	}    

	function _setData(d) {
		data = d;
	}

	
	return {
		
		display: render,
		
		setData: _setData
	}
	
})();