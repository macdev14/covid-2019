$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click do Menu */
    $toggleCollapse.click(function (){
        $nav.toggleClass('collapse');
    });
})