(function($){
    $(function(){
        $('#quicktabs-b_ng_x_p_h_ng .quicktabs-tabpage').each(function () {
            var i=1;
            $(this).find('.node-audio').each(function(){
                $(this).find('h2').prepend('<span class="index">'+i + '. </span>');
                i++;
            })
        })
    })
})(jQuery)