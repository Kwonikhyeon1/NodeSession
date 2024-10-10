const DB = require('../db/db');
const bcrypt = require('bcrypt');

const memberPage = {

    sign_up_form: (req, res) => {
        res.render('member/sign_up_form', {signinedMember: req.session.signinedMember});

    },

    sign_up_confirm: (req, res) => {
        let post = req.body;

        DB.query(
            `
                INSERT INTO TBL_MEMBER(M_ID, M_PW, M_MAIL, M_PHONE) 
                VALUES(?, ?, ?, ?)
            `,
            [post.m_id, bcrypt.hashSync(post.m_pw, 10), post.m_mail, post.m_phone],
            (error, result) => {

                if (error) {
                    res.render('member/sign_up_ng', {signinedMember: req.session.signinedMember});
                } else {
                    res.render('member/sign_up_ok', {signinedMember: req.session.signinedMember});
                }

            }
        );

    },

    sign_in_form: (req, res) => {
        res.render('member/sign_in_form', {signinedMember: req.session.signinedMember});

    },

    sign_in_confirm: (req, res) => {
        let post = req.body;

        DB.query(
            `
                SELECT * FROM TBL_MEMBER WHERE M_ID = ?
            `,
            [post.m_id],
            (error, member) => {

                if (error) res.render('member/sign_in_ng', {signinedMember: req.session.signinedMember});

                if (member.length > 0) {

                    if (bcrypt.compareSync(post.m_pw, member[0].M_PW)) {
                        req.session.signinedMember = member[0];
                        res.render('member/sign_in_ok', {signinedMember: req.session.signinedMember});

                    } else {
                        res.render('member/sign_in_ng', {signinedMember: req.session.signinedMember});

                    }

                } else {
                    res.render('member/sign_in_ng', {signinedMember: req.session.signinedMember});

                }

            }
        );

    },

    sign_out_confirm: (req, res) => {
        req.session.destroy(() => {
            res.redirect('/');

        });
    },

    modify_form: (req, res) => {

        if (req.session.signinedMember === undefined) {
            res.redirect('/member/sign_in_form');

        } else {
            res.render('member/modify_form', {signinedMember: req.session.signinedMember});

        }
        
    },

    modify_confirm: (req, res) => {
        let post = req.body;
        
        DB.query(
            `
            UPDATE 
                TBL_MEMBER 
            SET 
                M_MAIL = ?, 
                M_PHONE = ?, 
                M_MOD_DATE= NOW()
            WHERE
                M_NO = ?
            `,
            [post.m_mail, post.m_phone, post.m_no],
            (error, result) => {

                if (error) {
                    res.render('member/modify_ng');

                } else {
                    DB.query(
                        `
                            SELECT * FROM TBL_MEMBER WHERE M_NO = ?
                        `,
                        [post.m_no], 
                        (error, member) => {
                            req.session.signinedMember = member[0];
                            res.render('member/modify_ok');
                        }
                    );
                    
                }

            }
        );

    },

    delete_confirm: (req, res) => {

        if (req.session.signinedMember === undefined) {
            res.redirect('/member/sign_in_form');

        } else {
            DB.query(
                `
                DELETE FROM TBL_MEMBER WHERE M_NO = ?
                `,
                [req.session.signinedMember.M_NO],
                (error, result) => {

                    if (error) {
                        res.render('member/delete_ng', {signinedMember: req.session.signinedMember});

                    } else {
                        req.session.destroy(() => {
                            res.render('member/delete_ok');

                        });

                    }

                }
            );

        }

    },

}

module.exports = memberPage;