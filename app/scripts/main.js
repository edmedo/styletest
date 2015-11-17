/**
 *  sasstest
 *  (c) Admedo <ed@admedo.com>
 */
(function($) {
    'use strict';

    $('.polaroid').each(function(i) {
        var randomName = faker.name.findName();
        var randomPhoto = faker.image.image();
        $(this).find('img').prop('src', randomPhoto);
        $(this).find('h3').html(randomName);
    });

})(jQuery);
