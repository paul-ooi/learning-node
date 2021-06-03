import 'alpinejs';
import './style.scss';

document.addEventListener('DOMContentLoaded', ()=>{

    let app = document.querySelector('#app');
    
    let options = app.querySelectorAll('input[name="item"]');
    options.forEach( (option) =>{
        option.addEventListener('click', (e)=>{
            console.log(app.querySelector('input[name="item"]:checked ~ label').textContent)
                document.querySelector('#seclectTitle').textContent = app.querySelector('input[name="item"]:checked ~ label').textContent;
            
        })
    })
})
