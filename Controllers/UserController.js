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
    // res.status(200).json({message: 'Hello'});
    // console.log('Hello');
    // let id = {id: req.params.id};
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
}

exports.deleteSubscriber = function(req, res) {
    
}


const sendMail = function(req, res) {
    // Model.find({}, '-_id -preferenceId -_v', function(err, users) {
        // if(err) res.json({err: err, message: 'error occurs'});
        // for(user of users) {
            const mailOptions = {
                from: 'comicgallery2018@gmail.com',
                to: req.body.email,
                subject: 'latest Update of comic',
                html: `<h1>New Updates</h1>
                <a href="#"><button style='background-color:red' onclick=>Unsubscribe</button></a>`
            }

            transporter.sendMail(mailOptions, function (err) {
                if(err) {
                    console.log(err);
                    res.json({err: 'There is error'});
                } else {
                    console.log('succesfully sent mail');
                }
            });
        // }
    // });
}