$(function() {
  DecorateTime.eachIn($('p'), function(data) {
    var localTet, utcText, dataLocal, dataUtc, dataOffset, openingTag, closingTag;

    localText = data.local.text.replace(/\s+UTC[\-+]\d+/, '')
    utcText   = data.utc.text.replace(/\s+UTC/, '')

    dataLocal   = 'data-local="'   + localText + '"';
    dataUtc     = 'data-utc="'     + utcText   + '"';
    dataOffset  = 'data-offset="' + data.local.offset + '"';
    dataAttrs   =  dataLocal + ' ' + dataUtc + ' ' + dataOffset

    openingTag  = '<span class="date-time">';
    contents    = '<span class="text"' + dataAttrs + '>' + utcText + '</span>';
    timezoneTag = '<span class="time-zone utc">UTC</span>';
    closingTag  = '</span>';

    return openingTag + contents + timezoneTag + closingTag;
  });

  $('.date-time .time-zone').on('click', function() {
    var $text       = $(this).siblings('.text').first(),
        $timeZone   = $(this),
        utc         = $text.data('utc'),
        local       = $text.data('local'),
        localOffset = $text.data('offset');

    if ($timeZone.hasClass('utc')) {
      $timeZone.removeClass('utc');
      $timeZone.addClass('local');

      $text.html(local);
      $timeZone.html(localOffset);
     } else {
      $timeZone.removeClass('local');
      $timeZone.addClass('utc');

      $text.html(utc);
      $timeZone.html('UTC');
     }
  });
});
