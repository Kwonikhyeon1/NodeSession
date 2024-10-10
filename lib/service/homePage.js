const homePage = {
    
    home: (req, res) => {
        res.render('home', {signinedMember: req.session.signinedMember});

    }

}

module.exports = homePage;