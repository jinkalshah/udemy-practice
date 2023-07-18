$(function(){
    var pages = ['index', 'About', 'contact'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function(i){
        if(pathname.includes(pages[i])){
            $(this).addClass('active');
            $(this).attr('aria-current', 'page');
        }else if(this.className.includes('active')){
            $(this).removeClass('active');
        }
    });
});
function buttonClicked(){
    alert('I am clicked');
}

function buttonToChangeTextClicked(){
    document.getElementById('targetTag').innerHTML = "Javascript text";
}