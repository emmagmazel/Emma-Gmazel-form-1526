let fm = document.querySelector('form');
let fn = document.getElementById('fullname')
let em = document.getElementById('email');
let me = document.getElementById('message')
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let fb = document.querySelector(' .feedback');
let err = docuent.querySelector(' .errors');

function handleForm(){

    e.preventDefault();

    let data = {};
    let errors = [];

    if (em.value !== ''){

        if (regex.test(em.value)){
            data.email = em.value;
        } else {
            errors.push ('please enter your email');
        }
    } else {
        errors.push('Email is empty. Please enter your email.')
    }

    if (errors.length === 0) {
        console.log(data);
        fm.reset();
    } else {
        console.log(errors);
    }
}

if (fn.value !== ''){

    if (regex.test(fn.value)){
        data.fullname = fn.value;
    } else {
        errors.push ('please enter your Full name');
    }
} else {
    errors.push('Fullname is empty. Please enter your Full name.')
}

if (errors.length === 0) {
    console.log(data);
    fm.reset();
} else {
    console.log(errors);
}

if (me.value !== ''){

    if (regex.test(me.value)){
        data.email = me.value;
    } else {
        errors.push ('please enter a message');
    }
} else {
    errors.push('message is empty. Please enter a message.')
}

if (errors.length === 0) {
    console.log(data);
    fm.reset();
} else {
    console.log(errors);
}



fm.addEventListener('submit', handleForm);
