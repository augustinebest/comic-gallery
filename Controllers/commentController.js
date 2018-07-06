var model = require('../Models/comments')

exports.addComment = function(req, res){
        // res.send('Yay');
    var data = {
        time:Date.now(),
        commentBody:req.body.commentBody,
        user:req.body.user,
        post:req.body.post
    }
    model.create(data, function(err){
        if(err) res.json({err:err, message:'Error encountered During Comment Process'});
        res.json({message:'Comment Successfully made'});

    });
}

exports.viewComments = function(req,res){
    var post = req.params.post
    model.find({post:post},'commentBody',function(err, data){
        if(err) res.json({err:err, message:'Error in Viewing Comments'});
        res.json({message: data});

    })


}

exports.deleteComment = function(req, res){
    var options = {_id: req.params.id}
    model.remove(options, function(err){
        if(err) res.json({err:err, message:'Error Deleting Comments'});
        res.json({message:'Comment Deleted successfully'});
    })
}