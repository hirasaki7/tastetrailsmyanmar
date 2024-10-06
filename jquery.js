// Search Function

// Theme Change

function toggleTheme() {
    if ($('.input').is(':checked')) {
        $('body').css({
            'background-color': '#656565',
        })
        $('.header, .menu, #content').css({
            'background-color': 'var(--darkbg)',
            'color': '',
            'transition': '0.5s',
        });
        $('.btn, .orderbtn').css({
            'background-color': 'var(--darkbg)',
            'border': '1px solid white',
            'color': 'var(--lightText)',
        });
        $('#intro, .purchase, .type').css({
            'background-color': 'var(--darkbg)',
            'color': 'var(--lightText)',
        });
        $('.btn, .purchase, .type, .orderbtn').hover(function () {
            $(this).css({
                'background-color': 'var(--lightbg)',
                'color': 'var(--darkText)'
                })
            }, function () {
                $(this).css({
                'background-color': 'var(--darkText)',
                'color': 'var(--lightbg)'
            });
        });
        $('#order-list').css({
            'background-color': 'var(--darkbg)',
            'color': 'var(--lightText)',
        });
        $('.card').css({
            'background-color': '#3d3d3d',
            'color': 'white',
            'transition': '0.5s',
        })
        $('.card h3').css({
            'background-color': 'var(--lightbg)',
            'color': 'var(--darkText)',
            'transition': '0.5s',
        })
        $('.cost, .card p').css({
            'background-color': 'var(--darkbg)',
            'color': 'var(--lightText)',
            'transition': '0.5s',
        })
    } 
    else {
        $('body').css({
            'background-color': '',
        })
        $('.header, .menu, #content').css({
            'background-color': '',
            'color': 'var(darkText)',
            'transition': '0.5s',
        });
        $('.btn').css({
            'background-color': '',
            'border': '',
            'color': 'var(--darkText)',
        });
        $('.purchase, .type, .orderbtn').css({
            'background-color': '',
            'color': 'var(--darkText)',
        });
        $('.btn, .purchase, .type, .orderbtn').hover(function () {
            $(this).css({
                'background-color': 'var(--darkText)',
                'color': 'var(--lightbg)'
                })
            }, function () {
                $(this).css({
                'background-color': 'var(--lightbg)',
                'color': 'var(--darkText)'
            });
        });
        $('#order-list').css({
            'background-color': '',
            'color': '',
        });
        $('#intro, .card, .card h3, .cost, .card p').css({
            'background-color': '',
            'color': '',
        })
    }
}

//Filter

function showAll() {
    $('.card').css({'display': 'flex'});
}

function showCurry() {
    $('.curry').css({'display': 'flex'});
    $('.dessert, .drink, .FG, .noodle, .salad, .staple').css({'display': 'none'});
}

function showDesserts() {
    $('.dessert').css({'display': 'flex'});
    $('.curry, .drink, .FG, .noodle, .salad, .staple').css({'display': 'none'});

}

function showDrinks() {
    $('.drink').css({'display': 'flex'});
    $('.curry, .dessert, .FG, .noodle, .salad, .staple').css({'display': 'none'});

}

function showFG() {
    $('.FG').css({'display': 'flex'});
    $('.curry, .dessert, .drink,.noodle, .salad, .staple').css({'display': 'none'});

}

function showNoodle() {
    $('.noodle').css({'display': 'flex'});
    $('.curry, .dessert, .drink, .FG, .salad, .staple').css({'display': 'none'});

}

function showSalads() {
    $('.salad').css({'display': 'flex'});
    $('.curry, .dessert, .drink, .FG, .noodle, .staple').css({'display': 'none'});

}

function showStaples() {
    $('.staple').css({'display': 'flex'});
    $('.curry, .dessert, .drink, .FG, .noodle, .salad').css({'display': 'none'});

}

