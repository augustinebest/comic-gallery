const Model = require('../Models/Users');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'comicgallery2018@gmail.com',
        pass: 'GROUP14SCRUM'
    }
})

exports.addSubscriber = function(req, res) {
    
    var model = new Model ({
        // name: req.body.name,
        email: req.body.email,
        preferenceId: req.body.preferenceId
    });
    model.save()
    .then(result => {
        console.log(result);
        res.status(200).send(sendMail(req, res));
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err: err});
    });
    // res.json({message: 'Hello'});
  
}

exports.deleteSubscriber = function(req, res) {
    const email = req.params.email;
    Model.remove({email: email}, function(err) {
        if(err) res.status(500).json({err: err, message: "There exists an error"});
        res.status(200).json({message: "This User have unsubscribe"});
    });
}


const sendMail = function(req, res) {
            const mailOptions = {
                from: 'comicgallery2018@gmail.com',
                to: req.body.email,
                subject: 'latest Update of comic',
                html: `<h1>New Updates</h1>
                <a href="https://whispering-reaches-99821.herokuapp.com/unsubscribe/${req.body.email}"><button style='background-color:red' onclick=>Unsubscribe</button></a>`
            }

            transporter.sendMail(mailOptions, function (err) {
                if(err) {
                    console.log(err);
                    res.json({err: 'There is error'});
                } else {
                    console.log('succesfully sent mail');
                }
            });
        
}

//get Subscriber
exports.getSubscriber = function(req, res) {
    Model.find({}, function(err, result) {
        if(err) res.status(500).json({err: err});
        res.status(200).json(result);
    });
}