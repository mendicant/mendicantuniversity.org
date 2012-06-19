$(function() {
  DecorateTime.eachIn($('p'), function(data) {
    var localText, utcText, dataLocal, dataUtc, dataOffset, dataAttrs,
		openingTag, contents, timeZoneTag, closingTag;

    localText = data.local.text.replace(/\s+UTC[\-+]\d+/, '')
    utcText   = data.utc.text.replace(/\s+UTC/, '')

    dataLocal   = 'data-local="'   + localText + '"';
    dataUtc     = 'data-utc="'     + utcText   + '"';
    dataOffset  = 'data-offset="' + data.local.offset + '"';
    dataAttrs   =  dataLocal + ' ' + dataUtc + ' ' + dataOffset

    openingTag  = '<span class="date-time">';
    contents    = '<span class="text"' + dataAttrs + '>' + utcText + '</span>';
    timeZoneTag = '<span class="time-zone utc">UTC</span>';
    closingTag  = '</span>';

    return openingTag + contents + timeZoneTag + closingTag;
  });

  $('.date-time .time-zone').on('click', function() {
    var $clickedTimeZone = $(this),
		$allTimeZones    = $('.time-zone');

    if ($clickedTimeZone.hasClass('utc')) {
      $allTimeZones.trigger('local');
     } else {
      $allTimeZones.trigger('utc');
     }
  });

  $('.date-time .time-zone').on('local', function() {
    var $timeZone = $(this),
        $text     = $(this).siblings('.text').first();

	  $timeZone.removeClass('utc');
	  $timeZone.addClass('local');

	  $text.html($text.data('local'));
	  $timeZone.html($text.data('offset'));
  });

  $('.date-time .time-zone').on('utc', function() {
    var $timeZone = $(this),
        $text     = $(this).siblings('.text').first();

    $timeZone.removeClass('local');
    $timeZone.addClass('utc');

    $text.html($text.data('utc'));
    $timeZone.html('UTC');
  });
});
