

// Submission constructor
var Submission = function(name, url, title, id){
	this.name = name,
	this.url = url,
	this.title = title,
	this.id = id
}
// creates new submission request object 
// if dataArray is < to 8 (limits submissions to 8 max)
var submitRequester = function(dataArray, name, url, title, id){
	if (dataArray.length < 9) {
		var newSubmit = new Submission(name, url, title, id);
		dataArray.push(newSubmit);
		return true;
	}
	else {
		console.error('Submission posts exceeded');
		return false;
	}
}

//checks youtube links structure (watch, share, embed)
//extract YouTube video id
var getYouTubeId = function(url) {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length==11){
    	console.log(match[7]);
        return match[7];
	}
	else{
		return "error";
	}
}

module.exports = {
	Submission: Submission,

	dataArray: [],

	submitRequester: submitRequester,

	getYouTubeId: getYouTubeId

} 