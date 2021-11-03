
const Users = require('../models/userModel')
const nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'developer.students.clubs.epi@gmail.com',
        pass:'password123@episup2021'
    }
});


const userCtrl = {
    register: async (req, res) => {
        try {
            
            //const {name, email, level, tel} = req.body
            //res.json({msg: "Register Test"})
            
            const form = new Users ({
                name: req.body.name,
                email: req.body.email,
                level: req.body.level,
                tel: req.body.tel
            });

           
            form 
            .save(form)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "error"
                });
            });
            
            var mailOption = {
                from: 'developer.students.clubs.epi@gmail.com',
                to: form.email,
                subject:'Hello from GDSC',
                html: `
                <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                    <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the GDSC EPI Community</h2>
                    <p> Hi <span style="text-transform:uppercase; color:red;" > ${form.name} </span> !  
                    <br/> You're a member of google developer student club - EPI chapter.</p>
                </div>`
            };

            transporter.sendMail(mailOption, function (error, info){
                if(error){
                    console.log(error);
                }else {
                    console.log('Email sent:'+ info.response)
                }
            });
            
        } catch (err) {
            return res.status(500).json({msg:err.messag})
        }
    }
}

module.exports = userCtrl