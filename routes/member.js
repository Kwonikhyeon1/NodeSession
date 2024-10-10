const express = require('express');
const router = express.Router();
const memberPage = require('../lib/service/memberPage');

router.get('/sign_up_form', (req, res) => {
    console.log('/member/sign_up_form');
    memberPage.sign_up_form(req, res);

});

router.post('/sign_up_confirm', (req, res) => {
    console.log('/member/sign_up_confirm');
    memberPage.sign_up_confirm(req, res);

});

router.get('/sign_in_form', (req, res) => {
    console.log('/member/sign_in_form');
    memberPage.sign_in_form(req, res);

});

router.post('/sign_in_confirm', (req, res) => {
    console.log('/member/sign_in_form');
    memberPage.sign_in_confirm(req, res);

});

router.get('/sign_out_confirm', (req, res) => {
    console.log('/member/sign_out_confirm');
    memberPage.sign_out_confirm(req, res);

});

router.get('/modify_form', (req, res) => {
    console.log('/member/modify_form');
    memberPage.modify_form(req, res);

});

router.post('/modify_confirm', (req, res) => {
    console.log('/member/modify_confirm');
    memberPage.modify_confirm(req, res);

});

router.get('/delete_confirm', (req, res) => {
    console.log('/member/delete_confirm');
    memberPage.delete_confirm(req, res);

});

module.exports = router;