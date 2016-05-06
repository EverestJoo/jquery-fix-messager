    ;(function($) {
    $.extend({
        "showMessage":function(message){

            var $divToRemove = $('.jquery-fix-messager');
            if($divToRemove.length > 0)
                $divToRemove.remove();

            var messagerDom = '<div class="jquery-fix-messager"><div>';
            $(document.body).append(messagerDom);
            var $messageDiv = $('.jquery-fix-messager');
            $messageDiv.hide(0);
            $messageDiv.html(message);
            $messageDiv.fadeIn(800).delay(3000);

            $messageDiv.fadeOut(800);
        },

        "showSuccess":function(message) {
            var $divToRemove = $('.jquery-fix-messager');
            if($divToRemove.length > 0)
                $divToRemove.remove();

            var messagerDom = '<div class="jquery-fix-messager"><div>';
            $(document.body).append(messagerDom);
            var $messageDiv = $('.jquery-fix-messager');
            $messageDiv.hide(0);
            message = '<span class="jquery-fix-messager-success">&#xf058;</span> ' + message;
            $messageDiv.html(message);
            $messageDiv.fadeIn(800).delay(3000);

            $messageDiv.fadeOut(800);
        },
        
        "showWarning": function (message) {
            var $divToRemove = $('.jquery-fix-messager');
            if($divToRemove.length > 0)
                $divToRemove.remove();

            var messagerDom = '<div class="jquery-fix-messager"><div>';
            $(document.body).append(messagerDom);
            var $messageDiv = $('.jquery-fix-messager');
            $messageDiv.hide(0);
            message = '<span class="jquery-fix-messager-warning">&#xf071;</span> ' + message;
            $messageDiv.html(message);
            $messageDiv.fadeIn(800).delay(3000);

            $messageDiv.fadeOut(800);
        },

        "showError" : function(message) {
            var $divToRemove = $('.jquery-fix-messager');
            if($divToRemove.length > 0)
                $divToRemove.remove();

            var messagerDom = '<div class="jquery-fix-messager"><div>';
            $(document.body).append(messagerDom);
            var $messageDiv = $('.jquery-fix-messager');
            $messageDiv.hide(0);
            message = '<span class="am-text-danger">&#xf00d;</span> ' + message;
            $messageDiv.html(message);
            $messageDiv.fadeIn(800).delay(3000);

            $messageDiv.fadeOut(800);
        }
    });
})(jQuery);