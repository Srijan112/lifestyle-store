const password = document.querySelector('.password');
const show_btn = document.querySelector('.show');
show_btn.addEventListener('click',()=>{
    if(password.type === 'password'){
        password.type = 'text';
        show_btn.innerText = "Hide"
    }else{
        password.type = 'password'
        show_btn.innerText= 'Show';
    }
})