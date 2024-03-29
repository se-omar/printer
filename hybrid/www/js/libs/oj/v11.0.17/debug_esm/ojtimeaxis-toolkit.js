/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { Obj, BaseComponentDefaults, CSSStyle, Agent, Container, ClipPath, Path, PathUtils, ToolkitUtils, Stroke, OutputText, TextUtils, BaseComponent } from 'ojs/ojdvt-toolkit';

var DvtTimeAxisCalendar = function(options)
{
  this.Init(options);
};

Obj.createSubclass(DvtTimeAxisCalendar, Obj);

DvtTimeAxisCalendar.prototype.Init = function()
{
  this._dayInMillis = 1000 * 60 * 60 * 24;
  this._firstDayOfWeek = 0; // sunday; locale based
};

/**
 * Sets the first day of the week, which is locale based.
 * @param {number} firstDayOfWeek Numeric day of the week: 0 for Sunday, 1 for Monday, etc.
 */
DvtTimeAxisCalendar.prototype.setFirstDayOfWeek = function(firstDayOfWeek)
{
  this._firstDayOfWeek = firstDayOfWeek;
};

DvtTimeAxisCalendar.prototype.getFirstDayOfWeek = function()
{
  return this._firstDayOfWeek;
};

DvtTimeAxisCalendar.prototype.adjustDate = function(date, scale)
{
  var _adjustedDate = new Date(date.getTime());
  if (scale === 'weeks')
  {
    _adjustedDate.setHours(0, 0, 0, 0);
    var roll_amt = (date.getDay() - this.getFirstDayOfWeek() + 7) % 7;
    if (roll_amt > 0) {
      // Work with date instead of time in ms to avoid daylight savings issues
      _adjustedDate.setDate(_adjustedDate.getDate() - roll_amt);
    }
  }
  else if (scale === 'months')
  {
    _adjustedDate.setDate(1);
    _adjustedDate.setHours(0, 0, 0, 0);
  }
  else if (scale === 'days')
  {
    _adjustedDate.setHours(0, 0, 0, 0);
  }
  else if (scale === 'hours')
  {
    _adjustedDate.setMinutes(0, 0, 0);
  }
  else if (scale === 'minutes')
  {
    _adjustedDate.setSeconds(0, 0);
  }
  else if (scale === 'seconds')
  {
    _adjustedDate.setMilliseconds(0);
  }
  else if (scale === 'quarters')
  {
    var quarter = Math.floor((_adjustedDate.getMonth()) / 3);
    _adjustedDate.setDate(1);
    _adjustedDate.setHours(0, 0, 0, 0);
    _adjustedDate.setMonth(quarter * 3);
  }
  else if (scale === 'years')
  {
    _adjustedDate.setMonth(0);
    _adjustedDate.setDate(1);
    _adjustedDate.setHours(0, 0, 0, 0);
  }

  return _adjustedDate;
};

/**
 * Gets the next or previous date an interval away from the specified time based on a given scale.
 * @param {number} time The time in question in milliseconds
 * @param {string} scale
 * @param {string} direction Either 'next' or 'previous'
 * @return {Date} The adjacent date
 */
DvtTimeAxisCalendar.prototype.getAdjacentDate = function(time, scale, direction)
{
  var directionSign = direction === 'next' ? 1 : -1;

  if (scale === 'seconds')
    return new Date(time + directionSign * 1000);
  else if (scale === 'minutes')
    return new Date(time + directionSign * 60000);
  else if (scale === 'hours')
    return new Date(time + directionSign * 3600000);
  // for larger scales, no set amount of time can be added
  var _adjacentDate = new Date(time);
  if (scale === 'days')
    _adjacentDate.setDate(_adjacentDate.getDate() + directionSign * 1);
  else if (scale === 'weeks')
    _adjacentDate.setDate(_adjacentDate.getDate() + directionSign * 7);
  else if (scale === 'months')
    _adjacentDate.setMonth(_adjacentDate.getMonth() + directionSign * 1);
  else if (scale === 'quarters')
    _adjacentDate.setMonth(_adjacentDate.getMonth() + directionSign * 3);
  else if (scale === 'years')
    _adjacentDate.setFullYear(_adjacentDate.getFullYear() + directionSign * 1);
  else
  {
    // circuit breaker
    _adjacentDate.setYear(_adjacentDate.getYear() + directionSign * 1);
  }
  return _adjacentDate;
};

var DvtTimeAxisDefaults = function(context)
{
  this.Init({'alta': DvtTimeAxisDefaults.VERSION_1}, context);
};

Obj.createSubclass(DvtTimeAxisDefaults, BaseComponentDefaults);

/**
 * Contains overrides for version 1.
 * @const
 */
DvtTimeAxisDefaults.VERSION_1 = {
  'backgroundColor': 'rgba(255,255,255,0)',
  'borderColor': '#d9dfe3',
  'separatorColor': '#bcc7d2',
  'labelStyle': new CSSStyle(BaseComponentDefaults.FONT_FAMILY_ALTA_12 + 'color: #333333;')
};

/**
 * @override
 */
DvtTimeAxisDefaults.prototype.getNoCloneObject = function () {
  return {
    // Don't clone areas where app may pass in an instance of DvtTimeComponentScales
    // If the instance is a class, class methods may not be cloned for some reason.
    scale: true,
    zoomOrder: true
  };
};

var DvtTimeAxisParser = function() {};

Obj.createSubclass(DvtTimeAxisParser, Obj);

/**
 * Parses the specified data options and returns the root node of the time axis
 * @param {object} options The data options describing the component.
 * @return {object} An object containing the parsed properties
 */
DvtTimeAxisParser.prototype.parse = function(options)
{
  this._startTime = new Date(options['start']);
  this._endTime = new Date(options['end']);

  var ret = this.ParseRootAttributes();
  ret.inlineStyle = options['style'];
  ret.id = options['id'];
  ret.shortDesc = options['shortDesc'];
  ret.itemPosition = options['_ip'];
  ret.customTimeScales = options['_cts'];
  ret.customFormatScales = options['_cfs'];

  ret.scale = options['scale'];
  ret.converter = options['converter'];
  ret.zoomOrder = options['zoomOrder'] ? options['zoomOrder'] : null;

  ret.orientation = options['orientation'] ? options['orientation'] : 'horizontal';

  return ret;
};

/**
 * Parses the attributes on the root node.
 * @return {object} An object containing the parsed properties
 * @protected
 */
DvtTimeAxisParser.prototype.ParseRootAttributes = function()
{
  var ret = new Object();

  ret.start = this._startTime.getTime();
  ret.end = this._endTime.getTime();

  return ret;
};

/**
 * Style related utility functions for TimeAxis.
 * @class
 */
var DvtTimeAxisStyleUtils = new Object();

Obj.createSubclass(DvtTimeAxisStyleUtils, Obj);

/**
 * The default Axis border-width.
 * @const
 */
DvtTimeAxisStyleUtils.DEFAULT_BORDER_WIDTH = 1;

/**
 * The default Axis separator width.
 * @const
 */
DvtTimeAxisStyleUtils.DEFAULT_SEPARATOR_WIDTH = 1;

/**
 * The default Axis interval width.
 * @const
 */
DvtTimeAxisStyleUtils.DEFAULT_INTERVAL_WIDTH = 50;

/**
 * The default Axis interval height.
 * @const
 */
DvtTimeAxisStyleUtils.DEFAULT_INTERVAL_HEIGHT = 21;

/**
 * The default Axis interval padding.
 * @const
 */
DvtTimeAxisStyleUtils.DEFAULT_INTERVAL_PADDING = 2;

/**
 * Gets the axis style.
 * @param {object} options The object containing data and specifications for the component.
 * @return {string} The axis style.
 */
DvtTimeAxisStyleUtils.getAxisStyle = function(options)
{
  var axisStyles = '';
  var style = DvtTimeAxisStyleUtils.getBackgroudColor(options);
  if (style)
    axisStyles = axisStyles + 'background-color:' + style + ';';
  style = DvtTimeAxisStyleUtils.getBorderColor(options);
  if (style)
    axisStyles = axisStyles + 'border-color:' + style + ';';
  style = DvtTimeAxisStyleUtils.getBorderWidth();
  if (style)
    axisStyles = axisStyles + 'border-width:' + style + ';';
  return axisStyles;
};

/**
 * Gets the axis background-color.
 * @param {object} options The object containing data and specifications for the component.
 * @return {string} The axis background-color.
 */
DvtTimeAxisStyleUtils.getBackgroudColor = function(options)
{
  return options['backgroundColor'];
};

/**
 * Gets the axis border-color.
 * @param {object} options The object containing data and specifications for the component.
 * @return {string} The axis border-color.
 */
DvtTimeAxisStyleUtils.getBorderColor = function(options)
{
  return options['borderColor'];
};

/**
 * Gets the axis border-width.
 * @return {string} The axis border-width.
 */
DvtTimeAxisStyleUtils.getBorderWidth = function()
{
  return DvtTimeAxisStyleUtils.DEFAULT_BORDER_WIDTH;
};

/**
 * Gets the axis label style.
 * @param {object} options The object containing data and specifications for the component.
 * @return {dvt.CSSStyle} The axis label style.
 */
DvtTimeAxisStyleUtils.getAxisLabelStyle = function(options)
{
  return options['labelStyle'];
};

/**
 * Gets the axis separator color.
 * @param {object} options The object containing data and specifications for the component.
 * @return {string} The axis separator color.
 */
DvtTimeAxisStyleUtils.getSeparatorColor = function(options)
{
  return options['separatorColor'];
};

/**
 * Gets the axis separator style.
 * @param {object} options The object containing data and specifications for the component.
 * @return {string} The axis separator style.
 */
DvtTimeAxisStyleUtils.getAxisSeparatorStyle = function(options)
{
  var separatorStyles = '';
  var style = DvtTimeAxisStyleUtils.getSeparatorColor(options);
  if (style)
    separatorStyles = separatorStyles + 'color:' + style + ';';
  return separatorStyles;
};

/**
 * Gets the axis class.
 * @param {object} options The object containing data and specifications for the component.
 * @return {string|undefined} The axis class.
 */
DvtTimeAxisStyleUtils.getAxisClass = function(options)
{
  return options['_resources'] ? options['_resources']['axisClass'] : undefined;
};

/**
 * Gets the axis label class.
 * @param {object} options The object containing data and specifications for the component.
 * @return {string|undefined} The axis label class.
 */
DvtTimeAxisStyleUtils.getAxisLabelClass = function(options)
{
  return options['_resources'] ? options['_resources']['axisLabelClass'] : undefined;
};

/**
 * Gets the axis separator class.
 * @param {object} options The object containing data and specifications for the component.
 * @return {string|undefined} The axis separator class.
 */
DvtTimeAxisStyleUtils.getAxisSeparatorClass = function(options)
{
  return options['_resources'] ? options['_resources']['axisSeparatorClass'] : undefined;
};

/**
 * Utility functions for TimeAxis.
 * @class
 */
const TimeAxisUtils = {
  /**
   * Returns true if rendering on a touch device.
   * @return {boolean}
   */
  supportsTouch: function () {
    return Agent.isTouchDevice();
  },

  /**
   * Converts time to position given time range and width of the range
   * @param {number} startTime The start time in millis
   * @param {number} endTime The end time in millis
   * @param {number} time The time in question
   * @param {number} width The width of the time range
   * @return {number} The position relative to the width of the element
   */
  getDatePosition: function (startTime, endTime, time, width) {
    var number = (time - startTime) * width;
    var denominator = (endTime - startTime);
    if (number === 0 || denominator === 0)
      return 0;

    return number / denominator;
  },

  /**
   * Converts position to time given the time range and width of the range
   * @param {number} startTime The start time in millis
   * @param {number} endTime The end time in millis
   * @param {number} pos The position in question
   * @param {number} width The width of the time range
   * @return {number} time in millis
   */
  getPositionDate: function (startTime, endTime, pos, width) {
    var number = pos * (endTime - startTime);
    if (number === 0 || width === 0)
      return startTime;

    return (number / width) + startTime;
  },
};

/**
 * Renderer for TimeAxis.
 * @class
 */
const DvtTimeAxisRenderer = {};

Obj.createSubclass(DvtTimeAxisRenderer, Obj);

/**
 * Renders the given viewport of the time axis (top left corner at (0,0)).
 * @param {TimeAxis} timeAxis The timeAxis being rendered.
 * @param {number} viewStartTime The start time of the viewport.
 * @param {number} viewEndTime The end time of the viewport.
 * @param {boolean=} throttle Whether to throttle the rendering with requestAnimationFrame. Default false.
 *    Throttling is useful on high fire rate interactions such as scroll.
 *    I notice it's slightly smoother on across Chrome/Safari/Firefox compared to without
 *    On Firefox, if this is not done, mouse wheel zoom bugs out sometimes and scrolls the page, so throttling is a must.
 */
DvtTimeAxisRenderer.renderTimeAxis = function (timeAxis, viewStartTime, viewEndTime, throttle) {
  if (!timeAxis.hasValidOptions()) {
    return;
  }

  const render = function () {
    // Start fresh; possible future improvement is to do efficient diffing
    timeAxis.removeChildren();

    DvtTimeAxisRenderer._renderBackground(timeAxis);
    const tickLabelsContainer = new Container(timeAxis.getCtx());

    // dates.length >= 2 always, because there's always the first and last tick.
    const dates = timeAxis.getViewportDates(timeAxis.getScale(), viewStartTime, viewEndTime);
    const datePositions = dates.map(function (date) {
      return {
        date: date,
        pos: TimeAxisUtils.getDatePosition(
          timeAxis._start, timeAxis._end, date.getTime(), timeAxis._contentLength)
      };
    });

    DvtTimeAxisRenderer._renderTicks(tickLabelsContainer, timeAxis, datePositions);

    // We don't need the label of the last tick.
    const labelTexts = timeAxis.getDateLabelTexts(dates,
      timeAxis.getScale()).slice(0, dates.length - 1);
    DvtTimeAxisRenderer._renderLabels(tickLabelsContainer, timeAxis, datePositions, labelTexts);

    timeAxis._axis.addChild(tickLabelsContainer);
  };

  if (throttle) {
    // Modelled after https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event#Example
    if (!timeAxis.__isRendering) {
      requestAnimationFrame(function () {
        render();
        // eslint-disable-next-line no-param-reassign
        timeAxis.__isRendering = false;
      });
      // eslint-disable-next-line no-param-reassign
      timeAxis.__isRendering = true;
    }
  } else {
    render();
  }
};

/**
 * Renders the time axis block, draws a border around it.
 * @param {TimeAxis} timeAxis The timeAxis being rendered.
 * @private
 */
DvtTimeAxisRenderer._renderBackground = function (timeAxis) {
  const axisStart = 0;
  const axisSize = timeAxis.getSize();
  const context = timeAxis.getCtx();

  if (timeAxis._axis) {
    timeAxis._axis.setClipPath(null);
  }
  const cp = new ClipPath();
  if (timeAxis.isVertical()) {
    // eslint-disable-next-line no-param-reassign
    timeAxis._axis = new Path(context,
      PathUtils.roundedRectangle(
        axisStart,
        -timeAxis.getBorderWidth('top'),
        axisSize,
        timeAxis.getAxisLength(),
        0, 0, 0, 0
      ),
      'axis'
    );
    cp.addRect(axisStart, 0, axisSize, timeAxis._contentLength);
  } else {
    // eslint-disable-next-line no-param-reassign
    timeAxis._axis = new Path(context,
      PathUtils.roundedRectangle(
        -timeAxis.getBorderWidth('left'),
        axisStart,
        timeAxis.getAxisLength(),
        axisSize,
        0, 0, 0, 0
      ),
      'axis'
    );
    cp.addRect(0, axisStart, timeAxis._contentLength, axisSize);
  }
  timeAxis._axis.setCSSStyle(timeAxis._axisStyle);
  // setCSSStyle doesn't actually apply styles for dvt.Path. Adopt the logic from dvt.Rect:
  const elem = timeAxis._axis.getElem();
  let val = timeAxis._axisStyle.getStyle('background-color');
  if (val) {
    ToolkitUtils.setAttrNullNS(elem, 'fill', val);
  }
  val = timeAxis._axisStyle.getStyle('border-color');
  if (val) {
    ToolkitUtils.setAttrNullNS(elem, 'stroke', val);
  }
  val = timeAxis._axisStyle.getStyle('border-width');
  if (val) {
    ToolkitUtils.setAttrNullNS(elem, 'stroke-width', val);
  }

  timeAxis._axis.setPixelHinting(true);
  timeAxis._axis.setClipPath(cp);

  timeAxis.addChild(timeAxis._axis);

  const axisClass = DvtTimeAxisStyleUtils.getAxisClass(timeAxis.Options) || '';
  timeAxis._axis.getElem().setAttribute('class', axisClass);

  // apply stroke dash array to turn on/off border sides accordingly
  timeAxis._axis.getElem().setAttribute('stroke-dasharray', timeAxis.calcStrokeDashArray());
};

/**
 * Renders the tick marks at the given the dates/positions.
 * @param {dvt.Container} container The container to render into.
 * @param {TimeAxis} timeAxis The timeAxis being rendered.
 * @param {Array} datePositions Array of objects representing the date and position for each tick, each of shape { date: Date, pos: number }. Length must be >= 2.
 * @private
 */
DvtTimeAxisRenderer._renderTicks = function (container, timeAxis, datePositions) {
  // Build Path command of tick marks
  const context = timeAxis.getCtx();
  const isRTL = Agent.isRightToLeft(context);
  const axisSizeStart = timeAxis.isVertical() ? timeAxis.getBorderWidth('left') : timeAxis.getBorderWidth('top');
  const axisSizeEnd = axisSizeStart + timeAxis.getContentSize();

  let cmds = '';
  // Overall first/last date can be before/past or on the overall start/end time
  // Skip last date tick; if last date tick is on the overall end, then it will interfere with the border
  // If not, the last date tick will show up as the start tick as the user pans, so it's not noticable.
  for (let i = 0; i < datePositions.length - 1; i++) {
    if (timeAxis.isVertical()) {
      cmds += PathUtils.moveTo(axisSizeStart, datePositions[i].pos)
        + PathUtils.horizontalLineTo(axisSizeEnd);
    } else if (!isRTL) {
      cmds += PathUtils.moveTo(datePositions[i].pos, axisSizeStart)
        + PathUtils.verticalLineTo(axisSizeEnd);
    } else {
      cmds += PathUtils.moveTo(timeAxis._contentLength - datePositions[i].pos, axisSizeStart)
        + PathUtils.verticalLineTo(axisSizeEnd);
    }
  }

  // Render ticks as a single giant Path
  const ticks = new Path(timeAxis.getCtx(), cmds);
  const separatorStyle = new CSSStyle(
    DvtTimeAxisStyleUtils.getAxisSeparatorStyle(timeAxis.Options));
  ticks.setStroke(new Stroke(separatorStyle.getStyle(CSSStyle.COLOR)));
  ticks.setPixelHinting(true);

  const separatorClass = DvtTimeAxisStyleUtils.getAxisSeparatorClass(timeAxis.Options) || '';
  ticks.getElem().setAttribute('class', separatorClass);

  container.addChild(ticks);
};

/**
 * Renders labels given the tick dates/positions and corresponding label strings.
 * @param {dvt.Container} container The container to render into.
 * @param {TimeAxis} timeAxis The timeAxis being rendered.
 * @param {Array} datePositions Array of objects representing the date and position for each tick, each of shape { date: Date, pos: number }. Length must be >= 2.
 * @param {Array} labelTexts Array of label strings.
 * @private
 */
DvtTimeAxisRenderer._renderLabels = function (container, timeAxis, datePositions, labelTexts) {
  const context = timeAxis.getCtx();
  const axisStart = timeAxis.isVertical() ? timeAxis.getBorderWidth('left') : timeAxis.getBorderWidth('top');
  const axisEnd = axisStart + timeAxis.getContentSize();
  const isRTL = Agent.isRightToLeft(context);
  const labelStyle = DvtTimeAxisStyleUtils.getAxisLabelStyle(timeAxis.Options);
  const labelClass = DvtTimeAxisStyleUtils.getAxisLabelClass(timeAxis.Options) || '';

  for (let i = 0; i < datePositions.length - 1; i++) {
    const currentPos = datePositions[i].pos;
    const nextPos = datePositions[i + 1].pos;

    const timePos = !isRTL
      ? currentPos + ((nextPos - currentPos) / 2)
      : timeAxis._contentLength - (currentPos + ((nextPos - currentPos) / 2));
    const sizePos = axisStart + ((axisEnd - axisStart) / 2);

    const x = timeAxis.isVertical() ? sizePos : timePos;
    const y = timeAxis.isVertical() ? timePos : sizePos;
    const maxSize = timeAxis.getContentSize();
    const maxLength = nextPos - currentPos;
    const maxLabelWidth = timeAxis.isVertical() ? maxSize : maxLength;
    const maxLabelHeight = timeAxis.isVertical() ? maxLength : maxSize;

    const label = new OutputText(context, labelTexts[i], x, 0);
    label.setCSSStyle(labelStyle);
    label.getElem().setAttribute('class', labelClass);
    label.alignCenter();
    TextUtils.centerTextVertically(label, y);
    TextUtils.fitText(label, maxLabelWidth, maxLabelHeight, container);

    // Truncate first/last labels overlapping overall start/end if needed
    if (!timeAxis.isVertical()) {
      if (i === 0 && datePositions[i].date.getTime() < timeAxis._start) {
        if (label.isTruncated()) {
          label.setTextString(label.getUntruncatedTextString());
        }
        const labelWidth = label.getDimensions().w;
        const adjustedMaxLength = nextPos - Math.max(0, ((nextPos - currentPos - labelWidth) / 2));
        // Can't simply take center of inter-tick region and alignCenter() for first label treatment if the label is going to be truncated
        // Instead, align right and manually calculate label placement
        const horizPos = Math.max(0, adjustedMaxLength);
        if (!isRTL) {
          label.alignRight();
          label.setX(horizPos);
        } else {
          label.alignLeft();
          label.setX(timeAxis._contentLength - horizPos);
        }
        const fit = TextUtils.fitText(label, adjustedMaxLength, maxLabelHeight, container);
        if (label.isTruncated() && fit) {
          // label truncated from the back at this point. Since truncation from the start is desired,
          // manually move the ellipsis to the front and add/remove characters accordingly
          const textString = label.getTextString();
          const untruncatedTextString = label.getUntruncatedTextString();
          if (textString !== untruncatedTextString) {
            const numTruncatedChars = label.getTextString().length - 1;
            const indexEnd = untruncatedTextString.length;
            const indexStart = Math.max(0, indexEnd - numTruncatedChars);
            const truncatedStartString = OutputText.ELLIPSIS
              + untruncatedTextString.substring(indexStart, indexEnd);
            label.setTextString(truncatedStartString);
          }
        }
      } else if (i === datePositions.length - 2
        && datePositions[i + 1].date.getTime() > timeAxis._end) {
        if (label.isTruncated()) {
          label.setTextString(label.getUntruncatedTextString());
        }
        const labelWidth = label.getDimensions().w;
        const adjustedMaxLength = timeAxis._contentLength
          - currentPos
          - Math.max(0, ((nextPos - currentPos - labelWidth) / 2));
        // Can't simply take center of inter-tick region and alignCenter() for last label treatment if the label is going to be truncated
        // Instead, align right and manually calculate label placement
        const horizPos = Math.max(currentPos,
          (currentPos + ((nextPos - currentPos) / 2)) - (labelWidth / 2));
        if (!isRTL) {
          label.alignLeft();
          label.setX(horizPos);
        } else {
          label.alignRight();
          label.setX(timeAxis._contentLength - horizPos);
        }
        TextUtils.fitText(label, adjustedMaxLength, maxLabelHeight, container);
      }
    }
  }
};

/**
 * TimeAxis component. Use the newInstance function to instantiate.
 * @param {dvt.Context} context The rendering context.
 * @param {function} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @class
 * @constructor
 * @extends {dvt.BaseComponent}
 */
const TimeAxis = function(context, callback, callbackObj)
{
  this.Init(context, callback, callbackObj);
};

Obj.createSubclass(TimeAxis, BaseComponent);

/**
 * The string representing vertical orientation.
 * @const
 */
TimeAxis.ORIENTATION_VERTICAL = 'vertical';

/**
 * Returns a new instance of TimeAxis.
 * @param {dvt.Context} context The rendering context.
 * @param {function} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {TimeAxis}
 */
TimeAxis.newInstance = function(context, callback, callbackObj)
{
  return new TimeAxis(context, callback, callbackObj);
};

/**
 * Attribute for valid scales.
 * @const
 * @private
 */
TimeAxis._VALID_SCALES = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'quarters', 'years'];

/**
 * Initializes the component.
 * @param {dvt.Context} context The rendering context.
 * @param {function} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @protected
 */
TimeAxis.prototype.Init = function(context, callback, callbackObj)
{
  TimeAxis.superclass.Init.call(this, context, callback, callbackObj);

  this._calendar = new DvtTimeAxisCalendar();
  this._borderWidth = DvtTimeAxisStyleUtils.DEFAULT_BORDER_WIDTH;
  this.setBorderVisibility(false, false, false, false);
  this._dateToIsoWithTimeZoneConverter = context.getLocaleHelpers()['dateToIsoWithTimeZoneConverter'];

  // Create the defaults object
  this.Defaults = new DvtTimeAxisDefaults(context);
};

/**
 * @override
 */
TimeAxis.prototype.SetOptions = function(options)
{
  // Combine the user options with the defaults and store
  this.Options = this.Defaults.calcOptions(options);
};

/**
 * Parses options object.
 * @param {object} options The object containing specifications and data for this component.
 * @return {object} properties object.
 */
TimeAxis.prototype.Parse = function(options)
{
  this._parser = new DvtTimeAxisParser();
  return this._parser.parse(options);
};

/**
 * Applies the specified properties on the component.
 * @param {object} props The properties object
 * @private
 */
TimeAxis.prototype._applyParsedProperties = function(props)
{
  var orientation = props.orientation;
  if (orientation && orientation === TimeAxis.ORIENTATION_VERTICAL)
    this._isVertical = true;
  else
    this._isVertical = false;

  this.setIsVertical(this._isVertical);

  this._shortDesc = props.shortDesc;

  // zoom implementation handles shortest value first,
  // so zoom order needs to be reversed.
  // Due to custom timescales, zoomOrder is no longer (deep) cloned, so we need to reverse a shallow clone.
  this._zoomOrder = props.zoomOrder ? props.zoomOrder.slice().reverse() : [props.scale]; // else no zooming. set zoom order to only have 1 scale.

  this._customTimeScales = props.customTimeScales;
  this._customFormatScales = props.customFormatScales;

  this._start = props.start;
  this._end = props.end;

  this._inlineStyle = props.inlineStyle;

  this._scale = props.scale;
  this._converter = props.converter;

  this.applyStyleValues();
};

/**
 * Sets the length of the content.
 * @param {number} length The new content length
 * @param {number=} minLength The minimum content length
 */
TimeAxis.prototype.setContentLength = function(length, minLength)
{
  if (typeof minLength === 'undefined' || minLength === null)
    minLength = this._canvasLength;
  if (minLength < length)
    this._contentLength = length;
  else
    this._contentLength = minLength;
};

/**
 * Gets axis length as used in renderer.
 * @return {number} The axis length.
 */
TimeAxis.prototype.getAxisLength = function()
{
  return this._axisLength;
};

/**
 * Returns whether in RTL mode
 * @return {boolean}
 */
TimeAxis.prototype.isRTL = function()
{
  return Agent.isRightToLeft(this.getCtx());
};

/**
 * Returns whether in vertical orientation
 * @return {boolean} true if vertical orientation, false if horizontal
 */
TimeAxis.prototype.isVertical = function()
{
  return this._isVertical;
};

/**
 * Renders the component with the specified data.  If no data is supplied to a component
 * that has already been rendered, the component will be rerendered to the specified size.
 * Regarding options parameter:
 *     Standalone component:
 *         1. Initial render: options is available.
 *         2. Rerenders (e.g. due to resize): options is null.
 *     Inside Gantt/Timeline:
 *         1. Initial render: options only contains _viewStartTime and _viewEndTime that defines the visible viewport.
 *              and _throttle to signify whether render should be throttled with requestAnimationFrame.
 *         2. Rerenders: Same, options contains only _viewStartTime, _viewEndTime, _throttle.
 * @param {object} options The object containing specifications and data for this component.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 */
TimeAxis.prototype.render = function(options, width, height)
{
  // Whether this is a standalone component render/resize
  var isComponentRender = options && options._viewStartTime == null;
  var isResizeRender = options == null;

  this.Width = width;
  this.Height = height;
  this._prepareCanvasViewport();

  if (isComponentRender) {
    this.getPreferredLength(options, this._canvasLength);
  }

  this.setContentLength(this._canvasLength);
  this._setAxisDimensions();

  var viewStartTime = options && options._viewStartTime ? options._viewStartTime : this._start;
  var viewEndTime = options && options._viewEndTime ? options._viewEndTime : this._end;
  var throttle = (options && options._throttle) || false;
  DvtTimeAxisRenderer.renderTimeAxis(this, viewStartTime, viewEndTime, throttle);

  // Done rendering...fire the ready event for standalone component case
  if (isComponentRender || isResizeRender) {
    this.RenderComplete();
  }
};

/**
 * Helper method to decide whether or not the options are valid.
 * @return {boolean} Whether this timeAxis has valid options.
 */
TimeAxis.prototype.hasValidOptions = function()
{
  var hasValidScale = this._scale && (TimeAxis._VALID_SCALES.indexOf(this._scale) !== -1 || this.isTimeComponentScale(this._scale));
  var hasValidCustomScale = this._scale && this._customTimeScales && this._customTimeScales[this._scale];
  var hasValidStartAndEnd = this._start && this._end && (this._end > this._start);

  return (hasValidScale || hasValidCustomScale) && hasValidStartAndEnd;
};

/**
 * Helper method to decide whether or not the scale is an instance of the DvtTimeComponentScale interface
 * @return {boolean} Whether this scale is an instance of the DvtTimeComponentScale interface
 */
TimeAxis.prototype.isTimeComponentScale = function(scale)
{
  return scale.getNextDate != null && scale.getPreviousDate != null && scale.formatter != null && scale.name != null;
};

/**
 * Helper method to decide whether or not the scale is an instance of the DvtTimeComponentScale interface
 * @return {boolean} Whether this scale is an instance of the DvtTimeComponentScale interface
 */
TimeAxis.prototype.isEqualScale = function(scale1, scale2)
{
  return scale1 === scale2 ||
  (scale1.name != null && scale2 != null
    && scale1.name === scale2.name);
};

/**
 * Applies style on the axis.
 */
TimeAxis.prototype.applyStyleValues = function()
{
  this._axisStyle = new CSSStyle(DvtTimeAxisStyleUtils.getAxisStyle(this.Options));
  this._axisStyle.parseInlineStyle(this._inlineStyle);

  // double border width to account for stroke width rendering
  var axisBorderWidth = this._axisStyle.getBorderWidth();
  var borderStyle = 'border:' + axisBorderWidth * 2 + 'px;';
  this._axisStyle.parseInlineStyle(borderStyle);

  this.setBorderWidth(axisBorderWidth);
};

/**
 * Calculate orientation indepedent canvas dimensions.
 * @private
 */
TimeAxis.prototype._prepareCanvasViewport = function()
{
  if (this._isVertical)
  {
    // The size of the canvas viewport
    this._canvasLength = this.Height;
    this._canvasSize = this.Width;
  }
  else
  {
    // The size of the canvas viewport
    this._canvasLength = this.Width;
    this._canvasSize = this.Height;
  }
};

/**
 * Finalize axis dimensions with border/separator widths and any missing size dimensions.
 * @private
 */
TimeAxis.prototype._setAxisDimensions = function()
{
  if (this._canvasSize !== null)
    this.setContentSize(this._canvasSize - this.getSizeBorderWidth());
  this._axisLength = this._contentLength + this.getSizeBorderWidth() - DvtTimeAxisStyleUtils.DEFAULT_SEPARATOR_WIDTH;
};

/**
 * Returns the preferred content/axis length given the minimum viewport length (canvas width if
 * horizontal, canvas height if vertical).
 * @param {object} options The object containing specifications and data for this component.
 * @param {number} minViewPortLength The minimum viewport length.
 * @return {number} The suggested TimeAxis length.
 */
TimeAxis.prototype.getPreferredLength = function(options, minViewPortLength)
{
  // ensure options is updated
  this.SetOptions(options);

  this._resources = this.Options['_resources'] ? this.Options['_resources'] : [];
  this._locale = this.Options['_locale'] ? this.Options['_locale'] : 'en-US';

  // default to sunday
  var firstDayOfWeek = this._resources['firstDayOfWeek'] ? this._resources['firstDayOfWeek'] : 0;
  this._calendar.setFirstDayOfWeek(firstDayOfWeek);

  if (!this._dateToIsoWithTimeZoneConverter)
    this._dateToIsoWithTimeZoneConverter = this.getCtx().getLocaleHelpers()['dateToIsoWithTimeZoneConverter'];

  var props = this.Parse(this.Options);
  this._applyParsedProperties(props);

  if (this.hasValidOptions())
  {
    this.setConverter(this._converter);

    if (this._isVertical) {
      this.setDefaultConverter(this._resources['converterVert']);
    } else {
      this.setDefaultConverter(this._resources['converter']);
    }

    this._zoomLevelLengths = this._zoomOrder.map(function () { return 0; });
    // update dimensions for all zoom levels, by sampling dates across the entire time range
    var allZoomLevelOrders = this._zoomOrder.map(function (_, i) { return i; });
    // In the horizontal case, we can sparsely sample, and estimate the largests label width
    // This should work in many cases, and even if we're wrong and cause a label truncation,
    // users can manually zoom in further to see the full label.
    // In the vertical case however, we still need to compute ALL labels to determine the
    // time axis width that would fit all the labels. We need to be 100% sure because if a label
    // is truncated, there's no way to see the full label in the vertical case.
    var samplingStrategy = this._isVertical
      ? {
        type: 'range',
        params: { startTime: this._start, endTime: this._end }
      }
      : {
        type: 'sparse',
        // 4 sections and 10 interval sections is arbitrary, which samples some labels at every quarter.
        // This is more than enough for the current default scales and labels because they're very equally spaced.
        // but this may not work well with weird custom scales such as reptitions of [3 weeks, 7 days, 2 months]
        // for a span of 1 year, in which case we may only see weeks and months in our sample, but not days,
        // and we underestimate the content lengths.
        // But even then, users may still be able to zoom in sufficiently to see everything they need.
        // If it turns out this doesn't work well for some common cases, we can bump these params up
        // to cover more intervals in the future.
        params: { numSections: 4, numIntervalsPerSection: 10 }
      };
    this._maxContentLength = minViewPortLength; // will be updated in updateDimensions();
    this.updateDimensions(allZoomLevelOrders, samplingStrategy, minViewPortLength);

    if (this._canvasSize !== null) {
      // standalone timeaxis case
      this._zoomLevelLengths[this._zoomLevelOrder] = minViewPortLength;
    }
  }

  return this._contentLength;
};

/**
 * Updates the time axis dimensions (content size, content length at each given zoom level, max content size)
 * using the given sampling strategy to obtain the dates to derive these dimensions from.
 * E.g. the exact dimensions can be obtained by considering ALL dates and labels in the axis time range
 * or approximations can be obtained by considering only a subset of the possible dates and labels.
 * @param {Array} zoomlevelOrders Array of zoom level indices
 * @param {object} samplingStrategy Object defining the sample strategy, either {type: 'range', params: {startTime: number, endTime: number}}
 * which means consider only dates within the given range, or {type: 'global', params: {numSections: number, numIntervalsPerSection: number}}
 * which means divide up the entire time axis into sections, and sample only some dates within those sections. See also _sampleIntervals().
 * @param {number=} minViewPortLength The minimum viewport length.
 */
TimeAxis.prototype.updateDimensions = function(zoomLevelOrders, samplingStrategy, minViewPortLength)
{
  for (var i = 0; i < zoomLevelOrders.length; i++) {
    var zoomLevelOrder = zoomLevelOrders[i];
    if (zoomLevelOrder >= 0 && zoomLevelOrder < this._zoomOrder.length) {
      var scale = this._zoomOrder[zoomLevelOrder];
      if (this.isEqualScale(scale, this._scale)) {
        this._zoomLevelOrder = zoomLevelOrder;
      }
      var intervals;
      if (samplingStrategy.type === 'sparse') {
        // Rather than computing all dates (and labels) to obtain exact dimensions,
        // heuristically sample a subset of dates for better performance.
        // Assumption is that in many usecases, label widths have small variance.
        // Even if our estimation is off and cause a label trunction, users can manually zoom in to see the full label.
        intervals = this._sampleIntervals(scale, samplingStrategy.params.numSections,
          samplingStrategy.params.numIntervalsPerSection);

        // Estimate maxContentLength
        var intervalStartTimes = Object.keys(intervals);
        var avgTimePerInterval = intervalStartTimes.reduce(function (sum, prevTime) {
          return sum + (intervals[prevTime] - prevTime);
        }, 0) / intervalStartTimes.length;
        var estNumIntervals = (this._end - this._start) / avgTimePerInterval;
        this._maxContentLength = Math.max(this._maxContentLength,
          estNumIntervals * minViewPortLength);
      } else {
        // Estimate dimensions from ALL dates and labels
        intervals = {};
        var viewportDates = this.getViewportDates(scale,
          samplingStrategy.params.startTime,
          samplingStrategy.params.endTime);
        for (var k = 0; k < viewportDates.length - 1; k++) {
          intervals[viewportDates[k].getTime()] = viewportDates[k + 1].getTime();
        }
        this._maxContentLength = Math.max(this._maxContentLength,
          Object.keys(intervals).length * minViewPortLength);
      }
      this._updateZoomLevelLength(zoomLevelOrder, intervals);
    }
  }

  this.setContentLength(this._zoomLevelLengths[this._zoomLevelOrder], minViewPortLength);
};

/**
 * Computes and updates the time axis dimensions for the given zoom level order, using the
 * given set of date intervals.
 * @param {number} zoomLevelOrder The zoom level index.
 * @param {object} representativeIntervals Object representing intervals of shape { [start time number]: end time number }
 * @private
 */
TimeAxis.prototype._updateZoomLevelLength = function(zoomLevelOrder, representativeIntervals)
{
  var context = this.getCtx();
  var cssStyle = DvtTimeAxisStyleUtils.getAxisLabelStyle(this.Options);
  var contentPadding = DvtTimeAxisStyleUtils.DEFAULT_INTERVAL_PADDING * 2;
  var maxIntervalHeight = TextUtils.getTextStringHeight(this.getCtx(), cssStyle) + contentPadding;
  var scale = this._zoomOrder[zoomLevelOrder];

  var maxIntervalWidth = DvtTimeAxisStyleUtils.DEFAULT_INTERVAL_WIDTH;
  var minTimeDimFactor = Infinity;
  var minHeightDimFactor = Infinity;

  Object.keys(representativeIntervals).forEach(function (prevTime) {
    var currTime = representativeIntervals[prevTime];
    var labelText = this.formatDate(new Date(currTime), null, 'axis', scale);
    var contentWidth = TextUtils.getTextStringWidth(context, labelText, cssStyle) + contentPadding;
    maxIntervalWidth = Math.max(maxIntervalWidth, contentWidth);
    minTimeDimFactor = Math.min(minTimeDimFactor, (currTime - prevTime) / maxIntervalWidth);
    minHeightDimFactor = Math.min(minHeightDimFactor, (currTime - prevTime) / maxIntervalHeight);
  }, this);

  var minLengthFactor = this._isVertical ? minHeightDimFactor : minTimeDimFactor;
  var zoomLevelLength = ((this._end - this._start) / minLengthFactor);
  this._zoomLevelLengths[zoomLevelOrder] = zoomLevelLength;

  this.setContentSize(this._isVertical ? maxIntervalWidth : maxIntervalHeight);
};

/**
 * Returns a set of date intervals sampled using the following procedure:
 * 1. Divide up the time range into numSections sections
 * 2. For each section, take the first numIntervalsPerSection intervals from the start,
 *    plus the last interval of the section.
 * 3. Consolidate all of them and return
 * @param {string} scale The scale.
 * @param {number} numSections Number of sections
 * @param {number} numIntervalsPerSection Number of intervals per section
 * @return {object} Object representing intervals of shape { [start time number]: end time number }
 */
TimeAxis.prototype._sampleIntervals = function(scale, numSections, numIntervalsPerSection)
{
  // key: interval start time, value: interval end time
  // Use object key/value store to prevent duplicate intervals
  var intervals = {};

  var sectionInterval = Math.floor((this._end - this._start) / numSections);
  for (var i = 0; i < numSections; i++) {
    var sectionStartTime = this._start + (sectionInterval * i);
    var sectionEndTime = Math.min(this._start + (sectionInterval * (i + 1)), this._end);

    var prevTime = this.adjustDate(sectionStartTime, scale).getTime();
    for (var j = 0; j < numIntervalsPerSection; j++) {
      if (prevTime >= sectionEndTime) {
        break;
      }
      var currTime = this.getNextDate(prevTime, scale).getTime();
      intervals[prevTime] = currTime;
      prevTime = currTime;
    }

    // Also consider last label at the end of the section
    prevTime = this.adjustDate(sectionEndTime - 1, scale).getTime();
    intervals[prevTime] = this.getNextDate(prevTime, scale).getTime();
  }

  return intervals;
};

/**
 * Returns an array of dates in the specified scale and viewport.
 * @param {string} scale The scale.
 * @param {number} viewStartTime The viewport start time in ms.
 * @param {number} viewEndTime The viewport end time in ms.
 * @return {Array<Date>} The array of dates in the viewport.
 */
TimeAxis.prototype.getViewportDates = function(scale, viewStartTime, viewEndTime)
{
  const dates = [this.adjustDate(viewStartTime, scale)];
  while (dates[dates.length - 1].getTime() < viewEndTime) {
    dates.push(this.getNextDate(dates[dates.length - 1].getTime(), scale));
  }
  return dates;
};

/**
 * Returns an array of formatted date strings given an array of dates.
 * @param {Array<Date>} dates Array of dates.
 * @param {string} scale The scale.
 * @return {Array<string>} Corresponding formatted date strings.
 */
TimeAxis.prototype.getDateLabelTexts = function(dates, scale)
{
  return dates.map(function (date) {
    return this.formatDate(date, null, 'axis', scale);
  }, this);
};

/**
 * Sets the current scale.
 * @param {string} scale The new scale.
 */
TimeAxis.prototype.setScale = function(scale)
{
  this._scale = scale;
};

/**
 * Gets current scale.
 * @return {string} The current scale.
 */
TimeAxis.prototype.getScale = function()
{
  return this._scale;
};

/**
 * Increases current scale by an order.
 * @return {boolean} whether successful
 */
TimeAxis.prototype.increaseScale = function()
{
  for (var s = 0; s < this._zoomOrder.length - 1; s++)
  {
    if (this.isEqualScale(this._zoomOrder[s], this._scale)) {
      this._scale = this._zoomOrder[s + 1];
      return true;
    }
  }
  return false;
};

/**
 * Decreases current scale by an order.
 * @return {boolean} whether successful
 */
TimeAxis.prototype.decreaseScale = function()
{
  for (var s = 1; s < this._zoomOrder.length; s++)
  {
    if (this._zoomOrder[s] === this._scale)
    {
      this._scale = this._zoomOrder[s - 1];
      return true;
    }
  }
  return false;
};

/**
 * Sets the converter.
 * @param {object} converter The new converter.
 */
TimeAxis.prototype.setConverter = function(converter)
{
  this._converter = converter;
};

/**
 * Sets the default converter.
 * @param {object} defaultConverter The default converter.
 */
TimeAxis.prototype.setDefaultConverter = function(defaultConverter)
{
  this._defaultConverter = defaultConverter;
};

/**
 * Gets the TimeAxis content size.
 * @return {number}
 */
TimeAxis.prototype.getContentSize = function()
{
  return this._contentSize;
};

/**
 * Sets the TimeAxis content size.
 * @param {number} contentSize The TimeAxis content size
 */
TimeAxis.prototype.setContentSize = function(contentSize)
{
  if (contentSize > this._contentSize)
    this._contentSize = contentSize;
};

/**
 * Sets the border width
 * @param {number} borderWidth The new border width
 */
TimeAxis.prototype.setBorderWidth = function(borderWidth)
{
  this._borderWidth = borderWidth;
};

/**
 * Turns border sections on or off.
 * @param {boolean} top whether border top should be on/visible
 * @param {boolean} right whether border right should be on/visible
 * @param {boolean} bottom whether border bottom should be on/visible
 * @param {boolean} left whether border left should be on/visible
 */
TimeAxis.prototype.setBorderVisibility = function(top, right, bottom, left)
{
  this._borderTopWidth = (top | 0) * this._borderWidth;
  this._borderRightWidth = (right | 0) * this._borderWidth;
  this._borderBottomWidth = (bottom | 0) * this._borderWidth;
  this._borderLeftWidth = (left | 0) * this._borderWidth;
};

/**
 * Calculates the appropriate stroke dasharray that reflects the border visibility.
 * @return {string} The stroke dasharray.
 */
TimeAxis.prototype.calcStrokeDashArray = function()
{
  if (this._isVertical)
  {
    var borderLengths = {
      'top': this.getSize(),
      'right': this.getAxisLength(),
      'bottom': this.getSize(),
      'left': this.getAxisLength()
    };
  }
  else
  {
    borderLengths = {
      'top': this.getAxisLength(),
      'right': this.getSize(),
      'bottom': this.getAxisLength(),
      'left': this.getSize()
    };
  }

  var dashArray = [];
  var currentDashLength = 0;
  var currentDashState = true;
  var sideEvalOrder = ['top', 'right', 'bottom', 'left'];
  for (var i = 0; i < sideEvalOrder.length; i++)
  {
    var sideVisibility = this.getBorderWidth(sideEvalOrder[i]) > 0;
    if (sideVisibility === currentDashState)
    {
      currentDashLength += borderLengths[sideEvalOrder[i]];
    }
    else
    {
      dashArray.push(currentDashLength);
      currentDashLength = borderLengths[sideEvalOrder[i]];
      currentDashState = !currentDashState;
    }
  }
  dashArray.push(currentDashLength);
  return dashArray.toString();
};

/**
 * Gets the size dimension taken up by border width.
 * @return {number}
 */
TimeAxis.prototype.getSizeBorderWidth = function()
{
  return this._borderTopWidth + this._borderBottomWidth;
};

/**
 * Gets the border width.
 * @param {string=} side The border side of interest.
 * @return {number}
 */
TimeAxis.prototype.getBorderWidth = function(side)
{
  switch (side)
  {
    case 'top': return this._borderTopWidth;
    case 'right': return this._borderRightWidth;
    case 'bottom': return this._borderBottomWidth;
    case 'left': return this._borderLeftWidth;
    default: return this._borderWidth;
  }
};

/**
 * Gets the total TimeAxis size (content size with border).
 * @return {number}
 */
TimeAxis.prototype.getSize = function()
{
  return this._contentSize + this.getSizeBorderWidth();
};

/**
 * Finds the closest date to the time scale of the specified date.
 * @param {Date | string | number} date The date in question.
 * @param {string=} scale The scale (optional). If not specified, the current scale is used.
 * @return {Date} date The date closest to the time scale of the date in question.
 */
TimeAxis.prototype.adjustDate = function(date, scale)
{
  var scaleVal = scale || this._scale;
  if (this.isTimeComponentScale(scaleVal)) {
    return new Date(scaleVal.getPreviousDate(new Date(date)));
  }
  return this._calendar.adjustDate(new Date(date), scaleVal);
};

/**
 * Gets the next date an interval away from the specified time based on current scale.
 * @param {number} time The time in question in milliseconds
 * @param {string=} scale The scale (optional). If not specified, the current scale is used.
 * @return {Date} The next date
 */
TimeAxis.prototype.getNextDate = function(time, scale)
{
  var scaleVal = scale || this._scale;
  if (this.isTimeComponentScale(scaleVal)) {
    return new Date(scaleVal.getNextDate(new Date(time)));
  }
  return this.getAdjacentDate(time, scaleVal, 'next');
};

/**
 * Gets the next or previous date an interval away from the specified time based on a given scale.
 * @param {number} time The time in question in milliseconds
 * @param {string | Object} scale
 * @param {string} direction Either 'next' or 'previous'
 * @return {Date} The adjacent date
 */
TimeAxis.prototype.getAdjacentDate = function(time, scale, direction)
{
  var scaleVal = scale || this._scale;
  if (this.isTimeComponentScale(scaleVal)) {
    let nextDate = new Date(scaleVal.getNextDate(new Date(time)));
    if (direction === 'next') {
      return nextDate;
    } else {
      return new Date(time*2 - nextDate);
    }
  }
  return this._calendar.getAdjacentDate(time, scale, direction);
};

/**
 * Formats specified date. Two modes are supported: axis date formatting, and general purpose date formatting (controlled using converterType param).
 * An optional converter can be passed in. Otherwise, a default converter is used.
 * @param {Date} date The query date
 * @param {object=} converter Optional custom converter.
 * @param {string=} converterType Optional; 'axis' if for formatting axis labels, 'general' if for general date formatting. Defaults to 'axis'.
 * @param {string= | Object} scale Options; defaults to current scale
 * @return {string} The formatted date string
 */
TimeAxis.prototype.formatDate = function(date, converter, converterType, scale)
{
  var scaleVal = scale || this.getScale(); // default to current scale
  if (this.isTimeComponentScale(scaleVal)) {
    return scaleVal.formatter((this._dateToIsoWithTimeZoneConverter ? this._dateToIsoWithTimeZoneConverter(date) : date));
  }

  converterType = converterType || 'axis'; // default converterType 'axis'

  if (converterType === 'axis')
  {
    converter = converter || this._converter; // if no converter passed in, try to use axis converter from options
    if (converter)
    {
      if (converter[scaleVal])
        converter = converter[scaleVal];
      else if (converter['default'])
        converter = converter['default'];
    }
    // Use default scale converter (if available), if no converter available, or if the converter not usable for this scale.
    if ((!converter || !converter['format']) && this._defaultConverter && this._defaultConverter[scaleVal])
      converter = this._defaultConverter[scaleVal];
  }
  else // general formatting
  {
    if (!converter)
    {
      // Retrieves converters passed in from the JET side (which should always be available).
      // The converters are automatically app locale aware and works on all supported browsers.
      var defaultDateTimeConverter = this._resources['defaultDateTimeConverter'];
      var defaultDateConverter = this._resources['defaultDateConverter'];
      if (scaleVal === 'hours' || scaleVal === 'minutes' || scaleVal === 'seconds')
      {
        converter = defaultDateTimeConverter;
      }
      else
      {
        converter = defaultDateConverter;
      }
    }
  }

  return converter['format'](this._dateToIsoWithTimeZoneConverter ? this._dateToIsoWithTimeZoneConverter(date) : date);
};

/**
 * Gets zoom order.
 * @return {string[]} current zoom order
 */
TimeAxis.prototype.getZoomOrder = function()
{
  return this._zoomOrder;
};

/**
 * Sets content size based on orientation.
 * @param {boolean} isVertical Whether orientation is vertical.
 */
TimeAxis.prototype.setIsVertical = function(isVertical)
{
  if (isVertical)
    this._contentSize = DvtTimeAxisStyleUtils.DEFAULT_INTERVAL_WIDTH;
  else
    this._contentSize = DvtTimeAxisStyleUtils.DEFAULT_INTERVAL_HEIGHT;
};

/**
 * Sets canvas size.
 * @param {number} canvasSize The new canvas size
 */
TimeAxis.prototype.setCanvasSize = function(canvasSize)
{
  this._canvasSize = canvasSize;
};

/**
 * Gets zoom level lengths.
 * @return {number[]} zoom level lengths
 */
TimeAxis.prototype.getZoomLevelLengths = function()
{
  return this._zoomLevelLengths;
};

/**
 * Gets max content length.
 * @return {number} The max content length
 */
TimeAxis.prototype.getMaxContentLength = function()
{
  return this._maxContentLength;
};

/**
 * Gets current zoom order index.
 * @return {number} The current zoom order index
 */
TimeAxis.prototype.getZoomLevelOrder = function()
{
  return this._zoomLevelOrder;
};

/**
 * Sets zoom order index.
 * @param {number} zoomLevelOrder The new zoom order index
 */
TimeAxis.prototype.setZoomLevelOrder = function(zoomLevelOrder)
{
  this._zoomLevelOrder = zoomLevelOrder;
};

export { TimeAxis, TimeAxisUtils };
