var navegacaocard = function () {
    $(document).on('keyup', function (e) {
        let up = 38;
        let left = 37;
        let down = 40;
        let right = 39;
        let check = 101;

        let input = 0;
        let index = 1;
        let proximo = 1;
        let qtinput = 0;
        let checked = false;

        if ($('main').hasClass('em-uso'))
            return;

        if (e.keyCode === right || e.keyCode === left) {
            $.each($('.card'), function () {
                if ($(this).hasClass('selecionado')) {
                    switch (e.keyCode) {
                        case right:
                            proximo += index;
                            break;
                        case left:
                            proximo = index - 1;
                            break;
                    };
                };
                index ++;
            });
            index = 1;

            if (proximo > $('.card').length)
                proximo = 1
            else
                if (proximo < 1 )
                    proximo = $('.card').length

            $.each($('.card'), function () {
                $(this).removeClass('selecionado');
                if (index === proximo) {
                    $(this).addClass('selecionado');
                    $('.selecionado').find('input:checkbox').eq(0).focus();
                };
                index++;
            });
        };

        if (e.keyCode === down) {
            qtinput = $('.selecionado').find('input:checkbox').length;
            $('.selecionado').find('input:checkbox').each(function () {
                $(':focus').each(function() {
                    input = parseInt(this.id);
                    $(this).addClass('text');
                });
            });

            $('.selecionado').find('input:checkbox').eq(input).focus();

            if (qtinput == input)
                $('.selecionado').find('input:checkbox').eq(0).focus();
        };

        if (e.keyCode === up) {
            $('.selecionado').find('input:checkbox').each(function () {
                $(':focus').each(function(){
                    input = (parseInt(this.id) - 2);
                });
            });            
            $('.selecionado').find('input:checkbox').eq(input).focus();
        };
                
        if (e.keyCode == check) {
            $('.selecionado').find('input:checkbox').each(function () {
                $(':focus').each(function () {
                    checked = ($(':focus').prop('checked'))
                });
            });
            $(':focus').attr('checked', !checked);
        };
    });
}();