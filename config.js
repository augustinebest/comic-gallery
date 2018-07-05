var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'augustusbest00@gmail.com',
        pass: 'uzurdinma'
    }
});

exports.sendMail = function() {
    
}


const mailOptions = {
  from: 'augustusbest00@gmail.com', // sender address
  to: 'josephinechika94@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Hello</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});

module.exports = transporter;



const BookSchema = mongoose.Schema({
    date: Date.now(),
    coverImg: String,
    body: String,
    views: Number,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    categoryId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
});

module.exports = mongoose.model('Book', BookSchema);

exports.sendMail = function(req, res) {
    // Model.find({}, '-_id -preferenceId -_v', function(err, users) {
        // if(err) res.json({err: err, message: 'error occurs'});
        // for(user of users) {
            const mailOptions = {
                from: 'comicgallery2018@gmail.com',
                to: 'augustusbest00@gmail.com',
                subject: 'latest Update of comic',
                html: '<h1>New Updates</h1>'
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