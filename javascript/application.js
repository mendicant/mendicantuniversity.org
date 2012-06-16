$(function() {
  DecorateTime.eachIn($('p'), function(data) {
    var formattedStart, dataStart, dataEnd, openingTag, closingTag;

    formattedStart = data.local.month + " " + data.local.date + ", " + data.local.start

    dataStart      = 'data-start="'  + formattedStart    + '"';
    dataEnd        = 'data-end="'    + data.local.end    + '"';
    dataOffset     = 'data-offset="' + data.local.offset + '"';

    openingTag = '<span class="date-time" ' + dataStart + ' ' + dataEnd + ' ' + dataOffset + '>';
    closingTag = '</span>';

    return openingTag + data.text + closingTag;
  });

  $('.date-time').on('mouseover', function() {
    var $el    = $(this).first()
        start  = $el.data('start'),
        end    = $el.data('end'),
        offset = $el.data('offset');

	$el.html('Local time: ' + start + ' - ' + end + ' ' + offset);
  });

  $('.date-time').on('mouseout', function() {
    // $('#local-date-time').remove();
  });
});
