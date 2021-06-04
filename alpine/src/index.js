import 'alpinejs';
import './style.scss';

window.updateSelected = function( e ) {
    Array.from(e.target.closest('ul').querySelectorAll('input')).forEach((input)=>{
        input.removeAttribute('checked'); // remove the old checked
        console.log(input)
    });
    e.target.closest('li').querySelector('input').toggleAttribute('checked');
    return e.target.closest('li').textContent;
}
