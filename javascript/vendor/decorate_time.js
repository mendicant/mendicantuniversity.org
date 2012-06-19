(function() {
  var DecorateTime,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  DecorateTime = {
    monthsLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    daysLong: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    daysShort: ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'],
    dateTimeRegExp: function() {
      var daysLong, daysShort, monthsLong, monthsShort, time;
      monthsLong = this.monthsLong.join("|");
      monthsShort = this.monthsShort.join("|");
      daysLong = this.daysLong.join("|");
      daysShort = this.daysShort.join("|");
      time = "(\\d+:\\d+)";
      return RegExp("(?:(?:(" + daysLong + "|" + daysShort + "),\\s+)?(" + monthsLong + "|" + monthsShort + "|\\d+)(?:[,\\s+])?(" + monthsLong + "|" + monthsShort + "|\\d+)(?:[^\\d]+))?(" + time + "(?:.*?)" + time + "?)\\s+(UTC)", "ig");
    },
    eachIn: function(elements, callback) {
      var currentHtml, dateTime, dateTimes, element, newHtml, newText, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = elements.length; _i < _len; _i++) {
        element = elements[_i];
        element = $(element);
        dateTimes = this.findDateTimeExpressions(element.html());
        _results.push((function() {
          var _j, _len1, _results1;
          _results1 = [];
          for (_j = 0, _len1 = dateTimes.length; _j < _len1; _j++) {
            dateTime = dateTimes[_j];
            currentHtml = element.html();
            newText = callback(dateTime);
            if (!this.alreadyReplaced(currentHtml, newText)) {
              newHtml = currentHtml.replace(RegExp("" + dateTime.utc.text, "g"), newText);
              _results1.push(element.html(newHtml));
            } else {
              _results1.push(void 0);
            }
          }
          return _results1;
        }).call(this));
      }
      return _results;
    },
    alreadyReplaced: function(html, text) {
      return html.indexOf(text) > 0;
    },
    findDateTimeExpressions: function(text) {
      var match, matches, _i, _len, _results;
      matches = text.match(this.dateTimeRegExp());
      if (matches === null) {
        return [];
      }
      _results = [];
      for (_i = 0, _len = matches.length; _i < _len; _i++) {
        match = matches[_i];
        _results.push(this.buildDateTimeObject(match));
      }
      return _results;
    },
    buildDateTimeObject: function(dateTimeString) {
      var localData, utcData;
      utcData = this.extractUtcData(dateTimeString);
      localData = this.convertToLocalData(utcData);
      return {
        utc: utcData,
        local: localData
      };
    },
    extractUtcData: function(dateTimeString) {
      var data, split;
      split = this.dateTimeRegExp().exec(dateTimeString);
      console.log(split);
      data = {
        text: dateTimeString,
        month: this.findMonth(split[2], split[3]),
        date: this.findDate(split[2], split[3]),
        year: this.findYear(split[0]),
        start: this.findStartHour(split[4]),
        end: this.findEndHour(split[4])
      };
      return this.sanitizeData(data);
    },
    convertToLocalData: function(utcData) {
      var date, day, end, endDate, month, offset, start, startDate, text, year;
      startDate = this.initializeDate(utcData, utcData.start);
      endDate = this.initializeDate(utcData, utcData.end);
      month = this.monthsLong[startDate.getMonth()];
      day = this.daysLong[startDate.getDay()];
      date = startDate.getDate().toString();
      year = startDate.getFullYear().toString();
      start = this.timeStringFromDate(startDate);
      end = this.timeStringFromDate(endDate);
      offset = this.findLocalOffset();
      text = utcData.text.replace(utcData.day, day).replace(utcData.date, date).replace(utcData.month, month).replace(utcData.start, start).replace(utcData.end, end).replace('UTC', offset);
      return {
        text: text,
        month: month,
        date: date,
        year: year,
        start: start,
        end: end,
        offset: offset
      };
    },
    sanitizeData: function(data) {
      if (data.month === void 0) {
        data.month = this.monthsLong[this.currentMonth()];
        data.date = this.currentDate();
        data.year = this.currentYear();
      }
      return data;
    },
    initializeDate: function(data, hour, timezone) {
      if (timezone == null) {
        timezone = 'UTC';
      }
      if (hour === null) {
        return '';
      }
      return new Date("" + data.month + " " + data.date + " " + data.year + " " + hour + " " + timezone);
    },
    findLocalOffset: function() {
      var offset;
      offset = ((new Date).getTimezoneOffset() / 60) * -1;
      return "UTC" + (offset.toString());
    },
    timeStringFromDate: function(date) {
      var hour, minutes;
      if (date === '') {
        return null;
      }
      hour = date.getHours().toString();
      minutes = date.getMinutes().toString();
      if (hour.length === 1) {
        hour = "0" + hour;
      }
      if (minutes.length === 1) {
        minutes = "0" + minutes;
      }
      return "" + hour + ":" + minutes;
    },
    findMonth: function(possibleSource, otherPossibleSource) {
      if (__indexOf.call(this.monthsLong, possibleSource) >= 0 || __indexOf.call(this.monthsShort, possibleSource) >= 0) {
        return possibleSource;
      } else {
        return otherPossibleSource;
      }
    },
    findDate: function(possibleSource, otherPossibleSource) {
      var matches;
      if (possibleSource == null) {
        possibleSource = '';
      }
      if (otherPossibleSource == null) {
        otherPossibleSource = '';
      }
      matches = possibleSource.match(/\d+/);
      if (matches) {
        return possibleSource;
      } else {
        return otherPossibleSource;
      }
    },
    findYear: function(fullText) {
      var matches;
      matches = fullText.match(/\d{4}/) || [];
      return matches[0] || this.currentYear();
    },
    findStartHour: function(timePortion) {
      var matches;
      matches = timePortion.match(/\d+:\d+/);
      return matches[0];
    },
    findEndHour: function(timePortion) {
      var matches;
      matches = timePortion.match(/\d+:\d+/g);
      return matches[1] || null;
    },
    currentYear: function() {
      return (new Date).getFullYear().toString();
    },
    currentMonth: function() {
      return (new Date).getMonth().toString();
    },
    currentDate: function() {
      return (new Date).getDate().toString();
    }
  };

  window.DecorateTime = DecorateTime;

}).call(this);
