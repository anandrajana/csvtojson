(function(){
	function handleFileSelect(evt) {
		var files = evt.target.files; // FileList object
		var file = files[0];

		var reader = new FileReader();
		reader.onloadend = function(event){
			var p = Papa.parse(event.target.result);
			var properties = p.data[0];
			p.data.shift();
			var values = p.data;
			var candidates = [];
			for (var i = 0; i < values.length; i++) {
				var candidate = new Candidate();
					for (var j = 0; j < properties.length; j++) {
						Object.defineProperty(candidate, properties[j],{
								enumerable: true,
								configurable: false,
								writable: false,
								value: values[i][j]
							});
					};
				candidates.push(candidate);
			};
			console.log(JSON.stringify(candidates));
		}
		reader.readAsText(file);
	}
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
})()


function Candidate(){

}