function signUpForm() {
    console.log('signUpForm()');

    let form = document.sign_up_form;
    if (form.m_id.value === '') {
        alert('INPUT ID!!');
        form.m_id.focus();

    } else if (form.m_pw.value === '') {
        alert('INPUT PW!!');
        form.m_pw.focus();

    } else if (form.m_mail.value === '') {
        alert('INPUT MAIL!!');
        form.m_mail.focus();
        
    } else if (form.m_phone.value === '') {
        alert('INPUT PHONE!!');
        form.m_phone.focus();
        
    } else {
        form.submit();

    }

}

function signInForm() {
    console.log('signInForm()');

    let form = document.sign_in_form;
    if (form.m_id.value === '') {
        alert('INPUT ID!!');
        form.m_id.focus();

    } else if (form.m_pw.value === '') {
        alert('INPUT PW!!');
        form.m_pw.focus();

    } else {
        form.submit();

    }

}

function modifyForm() {
    console.log('modifyForm()');

    let form = document.modify_form;
    if (form.m_mail.value === '') {
        alert('INPUT MAIL!!');
        form.m_mail.focus();
        
    } else if (form.m_phone.value === '') {
        alert('INPUT PHONE!!');
        form.m_phone.focus();
        
    } else {
        form.submit();

    }

}
