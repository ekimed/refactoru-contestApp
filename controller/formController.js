var data = require('/Users/EuniceKim/projects/contestApp/models/submissionData.js');


module.exports = {
	form: function(req, res) {
		res.render('submission');
	},
	post: function(req, res){
		var body = req.body;
		var id = data.getYouTubeId(body.videoUrl);
		var submit = data.submitRequester(data.dataArray, body.name, body.videoUrl, body.title, id);
		if(!submit) {
			res.send('<h1>Number of submissions have exceeded.</h1>');
		}
		else{
			res.render('submission');
		}	
	},

	displaySubmitted: function(req,res){
		res.render('display',
			{data: data.dataArray
		});
	},

}