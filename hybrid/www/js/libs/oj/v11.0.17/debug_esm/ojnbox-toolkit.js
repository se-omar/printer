/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { Obj, Point, Rectangle, OutputText, GradientParser, LinearGradientFill, ArrayUtils, EventFactory, ResourceUtils, Displayable, KeyboardEvent, Agent, KeyboardHandler, EventManager, BlackBoxAnimationHandler, CSSStyle, JsonUtils, DataAnimationHandler, Container, TextUtils, Rect, Stroke, ColorUtils, ImageMarker, SimpleMarker, PatternFill, ToolkitUtils, ClipPath, AnimMoveTo, Playable, CustomAnimation, SolidFill, Animator, AnimMoveBy, AnimFadeOut, SelectionEffectUtils, MouseEvent, KeyboardFocusEffect, SimpleScrollableContainer, IconButton, AnimFadeIn, Shadow, AnimScaleTo, PathUtils, Path, Matrix, Automation, BaseComponentDefaults, CategoryRolloverHandler, BaseComponent, BaseComponentCache, SelectionHandler } from 'ojs/ojdvt-toolkit';
import { getTranslatedString } from 'ojs/ojtranslation';

/**
 * NBox Constants
 * @class
 */
const NBoxConstants = {};

Obj.createSubclass(NBoxConstants, Obj);

/**
 * @const
 */
NBoxConstants.COLUMN = 'column';

/**
 * @const
 */
NBoxConstants.COLUMNS = 'columns';

/**
 * @const
 */
NBoxConstants.COLUMNS_TITLE = 'columnsTitle';

/**
 * @const
 */
NBoxConstants.COLUMNS_TITLE_STYLE = 'columnsTitleStyle';

/**
 * @const
 */
NBoxConstants.COLUMN_LABEL_STYLE = 'columnLabelStyle';

/**
 * @const
 */
NBoxConstants.MAXIMIZED_COLUMN = 'maximizedColumn';

/**
 * @const
 */
NBoxConstants.ROW = 'row';

/**
 * @const
 */
NBoxConstants.ROWS = 'rows';

/**
 * @const
 */
NBoxConstants.ROWS_TITLE = 'rowsTitle';

/**
 * @const
 */
NBoxConstants.ROWS_TITLE_STYLE = 'rowsTitleStyle';

/**
 * @const
 */
NBoxConstants.ROW_LABEL_STYLE = 'rowLabelStyle';

/**
 * @const
 */
NBoxConstants.MAXIMIZED_ROW = 'maximizedRow';

/**
 * @const
 */
NBoxConstants.CELL = 'cell';

/**
 * @const
 */
NBoxConstants.CELLS = 'cells';

/**
 * @const
 */
NBoxConstants.CELL_DEFAULTS = 'cellDefaults';

/**
 * @const
 */
NBoxConstants.NODES = 'nodes';

/**
 * @const
 */
NBoxConstants.NODE_DEFAULTS = 'nodeDefaults';

/**
 * @const
 */
NBoxConstants.CATEGORIES = 'categories';

/**
 * @const
 */
NBoxConstants.ICON = 'icon';

/**
 * @const
 */
NBoxConstants.ICON_DEFAULTS = 'iconDefaults';

/**
 * @const
 */
NBoxConstants.INITIALS = 'initials';

/**
 * @const
 */
NBoxConstants.BACKGROUND = 'background';

/**
 * @const
 */
NBoxConstants.INDICATOR = 'indicator';

/**
 * @const
 */
NBoxConstants.INDICATOR_ICON = 'indicatorIcon';

/**
 * @const
 */
NBoxConstants.INDICATOR_ICON_DEFAULTS = 'indicatorIconDefaults';

/**
 * @const
 */
NBoxConstants.INDICATOR_COLOR = 'indicatorColor';

/**
 * @const
 */
NBoxConstants.X_PERCENTAGE = 'xPercentage';

/**
 * @const
 */
NBoxConstants.Y_PERCENTAGE = 'yPercentage';

/**
 * @const
 */
NBoxConstants.SELECTION = 'selection';

/**
 * @const
 */
NBoxConstants.SELECTION_MODE = 'selectionMode';

/**
 * @const
 */
NBoxConstants.SELECTION_INFO = 'selectionInfo';

/**
 * @const
 */
NBoxConstants.HAS_SELECTION_LISTENER = 'hasSelectionListener';

/**
 * @const
 */
NBoxConstants.HIGHLIGHTED_CATEGORIES = 'highlightedCategories';

/**
 * @const
 */
NBoxConstants.HIGHLIGHT_MATCH = 'highlightMatch';

/**
 * @const
 */
NBoxConstants.HIDDEN_CATEGORIES = 'hiddenCategories';

/**
 * @const
 */
NBoxConstants.HOVER_BEHAVIOR = 'hoverBehavior';

/**
 * @const
 */
NBoxConstants.GROUP_CATEGORY = 'groupCategory';

/**
 * @const
 */
NBoxConstants.GROUP_ATTRIBUTES = 'groupAttributes';

/**
 * @const
 */
NBoxConstants.GROUP_BEHAVIOR = 'groupBehavior';

/**
 * @const
 */
NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL = 'withinCell';

/**
 * @const
 */
NBoxConstants.GROUP_BEHAVIOR_ACROSS_CELLS = 'acrossCells';

/**
 * @const
 */
NBoxConstants.OTHER_COLOR = 'otherColor';

/**
 * @const
 */
NBoxConstants.OTHER_THRESHOLD = 'otherThreshold';

/**
 * @const
 */
NBoxConstants.ANIMATION_ON_DATA_CHANGE = 'animationOnDataChange';

/**
 * @const
 */
NBoxConstants.ANIMATION_ON_DISPLAY = 'animationOnDisplay';

/**
 * @const
 */
NBoxConstants.ANIMATION_DURATION = 'animationDuration';

/**
 * @const
 */
NBoxConstants.DRAWER = '_drawer';

/**
 * @const
 */
NBoxConstants.ID = 'id';

/**
 * @const
 */
NBoxConstants.LABEL = 'label';

/**
 * @const
 */
NBoxConstants.LABEL_STYLE = 'labelStyle';

/**
 * @const
 */
NBoxConstants.LABEL_HALIGN = 'labelHalign';

/**
 * @const
 */
NBoxConstants.SECONDARY_LABEL = 'secondaryLabel';

/**
 * @const
 */
NBoxConstants.SECONDARY_LABEL_STYLE = 'secondaryLabelStyle';

/**
 * @const
 */
NBoxConstants.SHORT_DESC = 'shortDesc';

/**
 * @const
 */
NBoxConstants.SHOW_COUNT = 'showCount';

/**
 * @const
 */
NBoxConstants.STYLE = 'style';

/**
 * @const
 */
NBoxConstants.STYLE_DEFAULTS = 'styleDefaults';

/**
 * @const
 */
NBoxConstants.BORDER_COLOR = 'borderColor';

/**
 * @const
 */
NBoxConstants.BORDER_RADIUS = 'borderRadius';

/**
 * @const
 */
NBoxConstants.BORDER_WIDTH = 'borderWidth';

/**
 * @const
 */
NBoxConstants.COLOR = 'color';

/**
 * @const
 */
NBoxConstants.PATTERN = 'pattern';

/**
 * @const
 */
NBoxConstants.OPACITY = 'opacity';

/**
 * @const
 */
NBoxConstants.SHAPE = 'shape';

/**
 * @const
 */
NBoxConstants.SOURCE = 'source';

/**
 * @const
 */
NBoxConstants.HEIGHT = 'height';

/**
 * @const
 */
NBoxConstants.WIDTH = 'width';

/**
 * Utility functions for NBox.
 * @class
 */
var DvtNBoxUtils = {
  /**
   * Helper methods that gets keyboardBoundingBox for an nbox displayable object
   * @param {DvtNBoxCategoryNode|DvtNBoxCell|DvtNBoxDrawer|DvtNBoxNode} obj A displayable object that needs keyboard bounding box
   * @param {dvt.Displayable=} targetCoordinateSpace The displayable defining the target coordinate space
   * @return {dvt.Rectangle} the bounding box for this object relative to the target coordinate space
   */
  getKeyboardBoundingBox: function(obj, targetCoordinateSpace) {
    var bounds = obj.getDimensions();
    var stageP1 = obj.localToStage(new Point(bounds.x, bounds.y));
    var stageP2 = obj.localToStage(new Point(bounds.x + bounds.w, bounds.y + bounds.h));
    return new Rectangle(stageP1.x, stageP1.y, stageP2.x - stageP1.x, stageP2.y - stageP1.y);
  },

  /**
   * Creates a text element
   *
   * @param {dvt.Context} ctx the rendering context
   * @param {string} strText the text string
   * @param {dvt.CSSStyle} style the style object to apply to the test
   * @param {string} halign the horizontal alignment
   * @param {string} valign the vertical alignment
   *
   * @return {dvt.OutputText} the text element
   */
  createText: function(ctx, strText, style, halign, valign) {
    var text = new OutputText(ctx, strText, 0, 0);
    text.setCSSStyle(style);
    text.setHorizAlignment(halign);
    text.setVertAlignment(valign);
    return text;
  },

  /**
   * Gets a matrix that can be used to reparent a displayable at the top level without changing its position
   *
   * @param {dvt.Displayable} displayable the displayable to be reparented
   * @return {dvt.Matrix} a matrix that will maintain the child's position when reparented
   */
  getGlobalMatrix: function(displayable) {
    var matrix = displayable.getMatrix();
    var current = displayable.getParent();
    while (current) {
      var currentMatrix = current.getMatrix();
      matrix = matrix.translate(currentMatrix.getTx(), currentMatrix.getTy());
      current = current.getParent();
    }
    return matrix;
  },

  /**
   * Helper function to position text
   *
   * @param {dvt.OutputText} text The text to position
   * @param {number} x The x coordinate
   * @param {number} y The y coordinate
   * @param {number} angle The optional angle to rotate by
   */
  positionText: function(text, x, y, angle) {
    text.setX(x);
    text.setY(y);
    if (angle) {
      var matrix = text.getMatrix();
      matrix = matrix.translate(-x, -y);
      matrix = matrix.rotate(angle);
      text.setMatrix(matrix.translate(x, y));
    }
  },

  /**
   * Sets a fill (which may be a solid color or linear-gradient) on a displayable
   *
   * @param {dvt.Displayable} displaylable the displayable to fill
   * @param {string} fillString the string description of the fill
   */
  setFill: function(displayable, fillString) {
    if (fillString.indexOf('linear-gradient') == 0) {
      var linearGradient = GradientParser.parseCSSGradient(fillString);
      if (linearGradient) {
        displayable.setFill(new LinearGradientFill(linearGradient.getAngle(),
            linearGradient.getColors(),
            linearGradient.getAlphas(),
            linearGradient.getRatios()));
      }
    }
    else {
      // color
      displayable.setSolidFill(fillString);
    }
  },

  /**
   * Sets the rendered displayable on the corresponding data object
   *
   * @param {NBox} nbox the NBox component
   * @param {object} dataObject the data object
   * @param {dvt.Displayable} displayable the rendered displayable
   * @param {string} key an optional key (if storing more than one displayable)
   */
  setDisplayable: function(nbox, dataObject, displayable, key) {
    var displayables = nbox.getDisplayables();
    var fullKey = key ? '__displayable:' + key : '__displayable';
    // If the dataObject has an id, use an external cache instead of writing directly into the object
    var id = dataObject['__cacheId'] == null ? dataObject['id'] : dataObject['__cacheId'];
    var cache = nbox.getOptions()['__displayableCache'];
    var displayableIndex = (id == null) ? dataObject[fullKey] : cache.getFromCachedMap(id, fullKey);
    if (displayableIndex != null) {
      displayables[displayableIndex] = displayable;
    }
    else {
      if (id == null) {
        dataObject[fullKey] = displayables.length;
      }
      else {
        cache.putToCachedMap(id, fullKey, displayables.length);
      }
      displayables.push(displayable);
    }
  },


  /**
   * Gets the rendered displayable from the corresponding data object
   *
   * @param {NBox} nbox the NBox component
   * @param {object} dataObject the data object
   * @param {string} key an optional key (if storing more than one displayable)
   * @return {dvt.Displayable} the rendered displayable
   */
  getDisplayable: function(nbox, dataObject, key) {
    if (!dataObject) {
      return null;
    }
    var fullKey = key ? '__displayable:' + key : '__displayable';
    // If the dataObject has an id, index is in an external cache rather than directly in the object
    var id = dataObject['__cacheId'] == null ? dataObject['id'] : dataObject['__cacheId'];
    var cache = nbox.getOptions()['__displayableCache'];
    var index = (id == null) ? dataObject[fullKey] : cache.getFromCachedMap(id, fullKey);
    var displayables = nbox.getDisplayables();
    return index == null ? null : displayables[index];
  }
};

/**
 * Data related utility functions for NBox.
 * @class
 */
var DvtNBoxDataUtils = new Object();

Obj.createSubclass(DvtNBoxDataUtils, Obj);


/**
 * Processes the data object.  Generates and sorts cells if not specified
 * @param {NBox} nbox the nbox component
 */
DvtNBoxDataUtils.processDataObject = function(nbox) {
  // If no data or unusable data, return
  if (!DvtNBoxDataUtils.hasValidData(nbox))
    return;

  var options = nbox.getOptions();
  var cells = options[NBoxConstants.CELLS];
  var cellMap = {};
  if (cells) {
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var row = cell[NBoxConstants.ROW];
      if (!cellMap[row]) {
        cellMap[row] = {};
      }
      var column = cell[NBoxConstants.COLUMN];
      cellMap[row][column] = cell;
    }
  }
  var newCells = [];
  var rowMap = {};
  var columnMap = {};
  // Process rows
  for (var r = 0; r < DvtNBoxDataUtils.getRowCount(nbox); r++) {
    var rowObj = DvtNBoxDataUtils.getRow(nbox, r);
    rowObj['__cacheId'] = 'row:' + rowObj['id'];
    rowMap[rowObj[NBoxConstants.ID]] = r;
  }
  options['__rowMap'] = rowMap;

  // Process columns
  for (var c = 0; c < DvtNBoxDataUtils.getColumnCount(nbox); c++) {
    var columnObj = DvtNBoxDataUtils.getColumn(nbox, c);
    columnObj['__cacheId'] = 'column:' + columnObj['id'];
    columnMap[columnObj[NBoxConstants.ID]] = c;
  }
  options['__columnMap'] = columnMap;

  // Process cells
  for (var r = 0; r < DvtNBoxDataUtils.getRowCount(nbox); r++) {
    var rowObj = DvtNBoxDataUtils.getRow(nbox, r);
    var row = rowObj[NBoxConstants.ID];
    for (var c = 0; c < DvtNBoxDataUtils.getColumnCount(nbox); c++) {
      var columnObj = DvtNBoxDataUtils.getColumn(nbox, c);
      var column = columnObj[NBoxConstants.ID];
      if (cellMap[row] && cellMap[row][column]) {
        var cellObj = cellMap[row][column];
        newCells.push(cellObj);
      }
      else {
        newCells.push({'row': row, 'column': column});
      }
    }
  }
  options[NBoxConstants.CELLS] = newCells;
  var ctx = nbox.getCtx();
  var nodeMap = new ctx.ojMap();
  var grouping = false;
  for (var n = 0; n < DvtNBoxDataUtils.getNodeCount(nbox); n++) {
    var nodeObj = DvtNBoxDataUtils.getNode(nbox, n);
    nodeMap.set(nodeObj[NBoxConstants.ID], n);
    if (!grouping &&
        (nodeObj[NBoxConstants.GROUP_CATEGORY] ||
         nodeObj['_groupCategories'] ||
         nodeObj['_groupLabels']))
      grouping = true;
  }
  options['__nodeMap'] = nodeMap;
  options['__grouping'] = options[NBoxConstants.GROUP_BEHAVIOR] != 'none' ? grouping : false;

  // Disable maximize if we're grouping across cells
  if (DvtNBoxDataUtils.getGrouping(nbox) && DvtNBoxDataUtils.getGroupBehavior(nbox) == NBoxConstants.GROUP_BEHAVIOR_ACROSS_CELLS) {
    options[NBoxConstants.MAXIMIZED_ROW] = null;
    DvtNBoxDataUtils.fireOptionChangeEvent(nbox, NBoxConstants.MAXIMIZED_ROW, null);
    options[NBoxConstants.MAXIMIZED_COLUMN] = null;
    DvtNBoxDataUtils.fireOptionChangeEvent(nbox, NBoxConstants.MAXIMIZED_COLUMN, null);
  }
  // Disable maximize if either row or column is invalid
  if ((options[NBoxConstants.MAXIMIZED_ROW] && isNaN(rowMap[options[NBoxConstants.MAXIMIZED_ROW]])) ||
      (options[NBoxConstants.MAXIMIZED_COLUMN] && isNaN(columnMap[options[NBoxConstants.MAXIMIZED_COLUMN]]))) {
    options[NBoxConstants.MAXIMIZED_ROW] = null;
    DvtNBoxDataUtils.fireOptionChangeEvent(nbox, NBoxConstants.MAXIMIZED_ROW, null);
    options[NBoxConstants.MAXIMIZED_COLUMN] = null;
    DvtNBoxDataUtils.fireOptionChangeEvent(nbox, NBoxConstants.MAXIMIZED_COLUMN, null);
  }
};

/**
 * Returns true if the specified nbox has valid row and column data.
 * @param {NBox} nbox the nbox component
 * @return {boolean} true if nbox has row and column data
 */
DvtNBoxDataUtils.hasValidData = function(nbox) {
  var options = nbox.getOptions();
  //Check if NBox has row and column data
  if (!options || !options[NBoxConstants.ROWS] || options[NBoxConstants.ROWS].length < 1 ||
      !options[NBoxConstants.COLUMNS] || options[NBoxConstants.COLUMNS].length < 1) {
    return false;
  }
  return true;
};

/**
 * Gets the number of columns in the nbox
 *
 * @param {NBox} nbox the nbox component
 * @return {number} the number of columns in the nbox
 */
DvtNBoxDataUtils.getColumnCount = function(nbox) {
  return nbox.getOptions()[NBoxConstants.COLUMNS].length;
};


/**
 * Gets the number of rows in the nbox
 *
 * @param {NBox} nbox the nbox component
 * @return {number} the number of rows in the nbox
 */
DvtNBoxDataUtils.getRowCount = function(nbox) {
  return nbox.getOptions()[NBoxConstants.ROWS].length;
};

/**
 * Get the NBox column label for column value
 *
 * @param {NBox} nbox the nbox component
 * @param {String} colValue nbox column value
 * @return {String} nbox column label
 */
DvtNBoxDataUtils.getColumnLabel = function(nbox, colValue) {
  var col = DvtNBoxDataUtils.getColumn(nbox, DvtNBoxDataUtils.getColumnIndex(nbox, colValue));
  if (col && col[NBoxConstants.LABEL])
    return col[NBoxConstants.LABEL];
  return null;
};

/**
 * Get the NBox row label for row value
 *
 * @param {NBox} nbox the nbox component
 * @param {String} rowValue nbox row value
 * @return {String} nbox row label
 */
DvtNBoxDataUtils.getRowLabel = function(nbox, rowValue) {
  var row = DvtNBoxDataUtils.getRow(nbox, DvtNBoxDataUtils.getRowIndex(nbox, rowValue));
  if (row && row[NBoxConstants.LABEL])
    return row[NBoxConstants.LABEL];
  return null;
};

/**
 * Get the NBox cell for row value and column value
 *
 * @param {NBox} nbox the nbox component
 * @param {String} rowValue nbox row value
 * @param {String} columnValue nbox column value
 * @return {DvtNBoxCell}  nbox cell object
 */
DvtNBoxDataUtils.getCellByRowColumn = function(nbox, rowValue, columnValue) {
  var cell = DvtNBoxDataUtils.getCell(nbox, DvtNBoxDataUtils.getCellIndexByRowColumn(nbox, rowValue, columnValue));
  if (cell)
    return DvtNBoxUtils.getDisplayable(nbox, cell);
  return null;
};

/**
 * Get the NBox cell index for row value and column value
 *
 * @param {NBox} nbox the nbox component
 * @param {String} rowValue nbox row value
 * @param {String} columnValue nbox column value
 * @return {Number} nbox cell index
 */
DvtNBoxDataUtils.getCellIndexByRowColumn = function(nbox, rowValue, columnValue) {
  return DvtNBoxDataUtils.getColumnIndex(nbox, columnValue) +
      (DvtNBoxDataUtils.getRowIndex(nbox, rowValue) * DvtNBoxDataUtils.getColumnCount(nbox));
};

/**
 * Gets the data for the specified column index
 *
 * @param {NBox} nbox the nbox component
 * @param {number} columnIndex the column index
 * @return {object} the data for the specified column index
 */
DvtNBoxDataUtils.getColumn = function(nbox, columnIndex) {
  return nbox.getOptions()[NBoxConstants.COLUMNS][columnIndex];
};


/**
 * Gets the data for the specified row index
 *
 * @param {NBox} nbox the nbox component
 * @param {number} rowIndex the row index
 * @return {object} the data for the specified row index
 */
DvtNBoxDataUtils.getRow = function(nbox, rowIndex) {
  return nbox.getOptions()[NBoxConstants.ROWS][rowIndex];
};


/**
 * Gets the value of the maximized row
 *
 * @param {NBox} nbox the nbox component
 * @return {string} the value of the maximized row
 */
DvtNBoxDataUtils.getMaximizedRow = function(nbox) {
  return nbox.getOptions()[NBoxConstants.MAXIMIZED_ROW];
};


/**
 * Gets the value of the maximized column
 *
 * @param {NBox} nbox the nbox component
 * @return {string} the value of the maximized column
 */
DvtNBoxDataUtils.getMaximizedColumn = function(nbox) {
  return nbox.getOptions()[NBoxConstants.MAXIMIZED_COLUMN];
};


/**
 * Gets the index for the specified row value
 *
 * @param {NBox} nbox the nbox component
 * @param {string} row the row value
 * @return {number} the row index
 */
DvtNBoxDataUtils.getRowIndex = function(nbox, row) {
  return nbox.getOptions()['__rowMap'][row];
};


/**
 * Gets the index for the specified column value
 *
 * @param {NBox} nbox the nbox component
 * @param {string} column the column value
 * @return {number} the column index
 */
DvtNBoxDataUtils.getColumnIndex = function(nbox, column) {
  return nbox.getOptions()['__columnMap'][column];
};


/**
 * Gets the data for the specified cell index.  Note that after DvtNBoxDataUtils.processDataObject
 * has been called, cells are sorted in row-major order
 * @param {NBox} nbox the nbox component
 * @param {number} cellIndex the cell index
 * @return {object} the data for the specified cell index
 */
DvtNBoxDataUtils.getCell = function(nbox, cellIndex) {
  return nbox.getOptions()[NBoxConstants.CELLS][cellIndex];
};


/**
 * Gets the number of nodes in the nbox
 *
 * @param {NBox} nbox the nbox component
 * @return {number} the number of nodes in the nbox
 */
DvtNBoxDataUtils.getNodeCount = function(nbox) {
  return nbox.getOptions()[NBoxConstants.NODES] ? nbox.getOptions()[NBoxConstants.NODES].length : 0;
};


/**
 * Gets the data for the specified node index
 * @param {NBox} nbox the nbox component
 * @param {number} nodeIndex the node index
 * @return {object} the data for the specified node index
 */
DvtNBoxDataUtils.getNode = function(nbox, nodeIndex) {
  return nbox.getOptions()[NBoxConstants.NODES][nodeIndex];
};


/**
 * Gets the index for the specified node id
 *
 * @param {NBox} nbox the nbox component
 * @param {string} id the node id
 * @return {number} the node index
 */
DvtNBoxDataUtils.getNodeIndex = function(nbox, id) {
  var nodeMap = nbox.getOptions()['__nodeMap'];
  return nodeMap ? nodeMap.get(id) : -1;
};


/**
 * Gets the cell index for the specified node
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data
 * @return {number} the cell index for the specified node
 */
DvtNBoxDataUtils.getCellIndex = function(nbox, node) {
  var nodeRowIndex = DvtNBoxDataUtils.getRowIndex(nbox, node[NBoxConstants.ROW]);
  var nodeColumnIndex = DvtNBoxDataUtils.getColumnIndex(nbox, node[NBoxConstants.COLUMN]);
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  return nodeColumnIndex + nodeRowIndex * columnCount;
};

/**
 * Gets the selected items for the nbox
 * @param {NBox} nbox the nbox component
 * @return {array} the list of selected items
 */
DvtNBoxDataUtils.getSelectedItems = function(nbox) {
  return nbox.getOptions()[NBoxConstants.SELECTION];
};


/**
 * Sets the selected items for the nbox
 * @param {NBox} nbox the nbox component
 * @param {array} selectedItems the list of selected items
 */
DvtNBoxDataUtils.setSelectedItems = function(nbox, selectedItems) {
  nbox.getOptions()[NBoxConstants.SELECTION] = selectedItems;
};


/**
 * Gets the highlighted items for the nbox
 * @param {NBox} nbox the nbox component
 * @return {array} the list of highlighted items
 */
DvtNBoxDataUtils.getHighlightedItems = function(nbox) {
  var items;
  var categories = nbox.getOptions()[NBoxConstants.HIGHLIGHTED_CATEGORIES];
  if (categories && categories.length > 0) {
    items = [];
    for (var n = 0; n < DvtNBoxDataUtils.getNodeCount(nbox); n++) {
      var node = DvtNBoxDataUtils.getNode(nbox, n);
      if (DvtNBoxDataUtils.isNodeHighlighted(nbox, node)) {
        items.push(node);
      }
    }
  }
  return items;
};

/**
 * Gets the attribute groups currently being grouped by
 *
 * @param {NBox} nbox the nbox component
 * @return {array} An array containing the visual attributes to apply to the group nodes.
 */
DvtNBoxDataUtils.getGrouping = function(nbox) {
  return nbox.getOptions()['__grouping'];
};


/**
 * Gets the visual attributes currently used in grouping
 *
 * @param {NBox} nbox the nbox component
 * @return {array} An array containing the visual attributes to apply to the group nodes.
 */
DvtNBoxDataUtils.getGroupAttributes = function(nbox) {
  return nbox.getOptions()[NBoxConstants.GROUP_ATTRIBUTES];
};


/**
 * Gets the grouping behavior.  Valid values are 'none', NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL, and
 * NBoxConstants.GROUP_BEHAVIOR_ACROSS_CELLS
 *
 * @param {NBox} nbox the nbox component
 * @return {string} the grouping behavior
 */
DvtNBoxDataUtils.getGroupBehavior = function(nbox) {
  return nbox.getOptions()[NBoxConstants.GROUP_BEHAVIOR];
};


/**
 * Gets the group id for the specified node.
 *
 * @param {object} node the node data
 * @return {string} the group id for the specified node
 */
DvtNBoxDataUtils.getNodeGroupId = function(node) {
  if (node[NBoxConstants.GROUP_CATEGORY])
    return node[NBoxConstants.GROUP_CATEGORY];
  var categories = node['_groupCategories'];
  if (categories && categories.length > 0) {
    return categories.join(';');
  }
  return null;
};


/**
 * Gets the x percentage value for the specified node to be used as part of the position average when grouping across
 * cells
 *
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data
 * @return {number} the x percentage value
 */
DvtNBoxDataUtils.getXPercentage = function(nbox, node) {
  if (!isNaN(node[NBoxConstants.X_PERCENTAGE])) {
    return node[NBoxConstants.X_PERCENTAGE];
  }
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  var columnIndex = DvtNBoxDataUtils.getColumnIndex(nbox, node[NBoxConstants.COLUMN]);
  return (columnIndex + 0.5) / columnCount;
};


/**
 * Gets the y percentage value for the specified node to be used as part of the position average when grouping across
 * cells
 *
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data
 * @return {number} the y percentage value
 */
DvtNBoxDataUtils.getYPercentage = function(nbox, node) {
  if (!isNaN(node[NBoxConstants.Y_PERCENTAGE])) {
    return node[NBoxConstants.Y_PERCENTAGE];
  }
  var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
  var rowIndex = DvtNBoxDataUtils.getRowIndex(nbox, node[NBoxConstants.ROW]);
  return (rowIndex + 0.5) / rowCount;
};


/**
 * Gets the other threshold value for the nbox.  Represents a percentage of the collection size (0-1)
 *
 * @param {NBox} nbox the nbox component
 * @return {number} the other threshold value
 */
DvtNBoxDataUtils.getOtherThreshold = function(nbox) {
  return nbox.getOptions()[NBoxConstants.OTHER_THRESHOLD];
};


/**
 * Gets the color for the aggregate group node representing any groups that fall below the other threshold
 *
 * @param {NBox} nbox the nbox component
 * @return {string} the other threshold color
 */
DvtNBoxDataUtils.getOtherColor = function(nbox) {
  return nbox.getOptions()[NBoxConstants.OTHER_COLOR];
};


/**
 * Gets the data associated with the currently open group
 *
 * @param {NBox} nbox the nbox component
 * @return {object} the data associated with the currently open group
 */
DvtNBoxDataUtils.getDrawer = function(nbox) {
  return nbox.getOptions()[NBoxConstants.DRAWER];
};


/**
 * Returns the category node data for the specified id
 *
 * @param {NBox} nbox the nbox component
 * @param {string} id the id of the category node
 * @return {object} the category node data
 */
DvtNBoxDataUtils.getCategoryNode = function(nbox, id) {
  var groupBehavior = DvtNBoxDataUtils.getGroupBehavior(nbox);
  var groups = nbox.getOptions()['__groups'];
  var groupId = id;
  if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
    var cell = id.substring(0, id.indexOf(':'));
    groupId = id.substring(id.indexOf(':') + 1);
    groups = groups[cell];
  }
  return groups ? groups[groupId] : null;
};


/**
 * @param {NBox} nbox the NBox component
 * @param {object} categoryNode the category node data object
 *
 * @return {array} array of category labels
 */
DvtNBoxDataUtils.getCategoryNodeLabels = function(nbox, categoryNode) {
  if (categoryNode['__labels'])
    return categoryNode['__labels'];

  // Grab any node to get groupCategory or _groupCategories
  var node = DvtNBoxDataUtils.getNode(nbox, categoryNode['nodeIndices'][0]);

  if (node[NBoxConstants.GROUP_CATEGORY])
    return categoryNode['__labels'] = [node[NBoxConstants.GROUP_CATEGORY]];

  // Set labels to group categories
  categoryNode['__labels'] = [];

  // Replace with any labels defined in top level label map
  if (node['_groupCategories']) {
    var labelMap = nbox.getOptions()['_groupLabels'];
    for (var i = 0; i < node['_groupCategories'].length; i++) {
      if (labelMap && labelMap[node['_groupCategories'][i]])
        categoryNode['__labels'][i] = labelMap[node['_groupCategories'][i]];
      else
        categoryNode['__labels'][i] = node['_groupCategories'][i];
    }
  }
  return categoryNode['__labels'];
};

/**
 * Returns whether or not maximize gesture is enabled.
 *
 * @param {NBox} nbox the NBox component.
 * @return {boolean} whether or not maximize gesture is enabled.
 */
DvtNBoxDataUtils.isMaximizeEnabled = function(nbox) {
  var maximize = nbox.getOptions()['cellMaximize'];
  return maximize != 'off';
};


/**
 * Returns the type of content rendered in cells. Possible values are:
 * 'auto': Nodes or body counts rendered, depending on size of cell.
 * 'counts': Body counts always rendered, regardless of size.
 *
 * @param {NBox} nbox the NBox component.
 * @return {string} the type of content rendered.
 */
DvtNBoxDataUtils.getCellContent = function(nbox) {
  var content = nbox.getOptions()['cellContent'];
  return content == 'counts' ? 'counts' : 'auto';
};


/**
 * Returns whether or not the specified cell is minimized
 *
 * @param {NBox} nbox the nbox component
 * @param {number} cellIndex the index of the specified cell
 * @return {boolean} true if the cell is minimized, false otherwise
 */
DvtNBoxDataUtils.isCellMinimized = function(nbox, cellIndex) {
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(nbox);
  if (!maximizedRow && !maximizedColumn) {
    // if nothing is maximized, nothing is minimized
    return false;
  }
  var cell = DvtNBoxDataUtils.getCell(nbox, cellIndex);
  var cellRow = cell[NBoxConstants.ROW];
  var cellColumn = cell[NBoxConstants.COLUMN];
  if (maximizedRow && maximizedColumn) {
    // if a single cell is maximized, all other cells are minimized
    return maximizedRow != cellRow || maximizedColumn != cellColumn;
  }
  // if a single row OR column is maximized, all cells outside of that row/column are minimized
  return maximizedRow != cellRow && maximizedColumn != cellColumn;
};


/**
 * Returns whether or not the specified cell is maximized
 *
 * @param {NBox} nbox the nbox component
 * @param {number} cellIndex the index of the specified cell
 * @return {boolean} true if the cell is maximized, false otherwise
 */
DvtNBoxDataUtils.isCellMaximized = function(nbox, cellIndex) {
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(nbox);
  var cell = DvtNBoxDataUtils.getCell(nbox, cellIndex);
  var cellRow = cell[NBoxConstants.ROW];
  var cellColumn = cell[NBoxConstants.COLUMN];
  return (maximizedRow == cellRow && maximizedColumn == cellColumn);
};


/**
 * Determines whether the specified node has been hidden (e.g. via legend filtering)
 *
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data object
 * @return {boolean} true if the node has been hidden, false otherwise
 */
DvtNBoxDataUtils.isNodeHidden = function(nbox, node) {
  var options = nbox.getOptions();
  if (options[NBoxConstants.HIDDEN_CATEGORIES] && !options['__hiddenMap']) {
    options['__hiddenMap'] = ArrayUtils.createBooleanMap(options[NBoxConstants.HIDDEN_CATEGORIES]);
  }
  // Null checking done by util function
  return ArrayUtils.hasAnyMapItem(options['__hiddenMap'], node[NBoxConstants.CATEGORIES]);
};

/**
 * Determines whether the specified node has been highlighted (e.g. via legend filtering)
 *
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data object
 * @return {boolean} true if the node has been highlighted, false otherwise
 */
DvtNBoxDataUtils.isNodeHighlighted = function(nbox, node) {
  var options = nbox.getOptions();
  if (options[NBoxConstants.HIGHLIGHTED_CATEGORIES] && !options['__highlightedMap']) {
    options['__highlightedMap'] = ArrayUtils.createBooleanMap(options[NBoxConstants.HIGHLIGHTED_CATEGORIES]);
  }
  // Null checking done by util functions
  if (options[NBoxConstants.HIGHLIGHT_MATCH] == 'all')
    return ArrayUtils.hasAllMapItems(options['__highlightedMap'], node[NBoxConstants.CATEGORIES]);
  else
    return ArrayUtils.hasAnyMapItem(options['__highlightedMap'], node[NBoxConstants.CATEGORIES]);
};

/**
 * Returns the DvtSimpleScrollable container the given node
 * resides in, if it exists.
 *
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data object
 * @return {dvt.SimpleScrollableContainer} scrollable container
 */
DvtNBoxDataUtils.getNodeScrollableContainer = function(nbox, node) {
  if (!node)
    return null;

  var drawerData = DvtNBoxDataUtils.getDrawer(nbox);
  if (drawerData) {
    var drawer = DvtNBoxUtils.getDisplayable(nbox, drawerData);
    if (drawer)
      return drawer.getChildContainer();
  }
  var cellIndex = DvtNBoxDataUtils.getCellIndex(nbox, node.getData());
  if (DvtNBoxDataUtils.isCellMaximized(nbox, cellIndex)) {
    var cell = DvtNBoxDataUtils.getCell(nbox, cellIndex);
    return DvtNBoxUtils.getDisplayable(nbox, cell).getChildContainer();
  }
  return null;
};

/**
 * Fires an option event to the nbox
 *
 * @param {NBox} nbox the nbox component
 * @param {string} key the property name
 * @param {object} value the property value
 */
DvtNBoxDataUtils.fireOptionChangeEvent = function(nbox, key, value) {
  var event = EventFactory.newOptionChangeEvent(key, value);
  nbox.processEvent(event);
};


/**
 * Gets a cell index for the maximized cell
 *
 * @param {NBox} nbox the nbox component
 * @return {?number} the index for the maximized cell or null if such cell does not exist
 */
DvtNBoxDataUtils.getMaximizedCellIndex = function(nbox) {
  var maximizedCellIndex = null;
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(nbox);
  if (maximizedRow && maximizedColumn) {
    var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
    maximizedCellIndex = DvtNBoxDataUtils.getColumnIndex(nbox, maximizedColumn) + columnCount * DvtNBoxDataUtils.getRowIndex(nbox, maximizedRow);
  }
  return maximizedCellIndex;
};


/**
 * Check whether a specified drawer is selected - all nodes that belong to the drawer are selected
 *
 * @param {NBox} nbox the nbox component
 * @param {DvtNBoxCategoryNode} categoryNode the category node that represents the drawer
 * @return {boolen} true if the drawer is selected
 */
DvtNBoxDataUtils.isDrawerSelected = function(nbox, categoryNode) {
  var selected = false;
  var selectedItems = DvtNBoxDataUtils.getSelectedItems(nbox);
  if (selectedItems) {
    var selectedMap = {};
    for (var i = 0; i < selectedItems.length; i++)
      selectedMap[selectedItems[i]] = true;

    var nodeIndices = categoryNode.getData()['nodeIndices'];
    selected = true;
    for (var j = 0; j < nodeIndices.length; j++) {
      var node = DvtNBoxDataUtils.getNode(nbox, nodeIndices[j]);
      if (!selectedMap[node[NBoxConstants.ID]]) {
        selected = false;
        break;
      }
    }
  }
  return selected;
};


/**
 * Builds a description used for the aria-label attribute
 * @param {NBox} nbox the nbox component
 * @param {DvtNBoxNode|DvtNBoxCategoryNode|DvtNBoxDrawer} object an object that need a description
 * @param {string} datatip a datatip to use as part of description
 * @param {boolean} selected true if the object is selected
 * @param {function} context shortDesc Context object
 * @return {string} aria-label description for the object
 */
 DvtNBoxDataUtils.buildAriaDesc = function(nbox, object, datatip, selected, context) {
  var translations = nbox.getOptions().translations;
  var baseDesc = (object.nboxType === 'categoryNode' || object.nboxType === 'drawer') ?
      ResourceUtils.format(translations.labelAndValue, [translations.labelGroup, datatip]) :
      datatip;

  var states = [];
  if (selected)
    states.push(translations.stateSelected);
  else
    states.push(translations.stateUnselected);

  if (object.nboxType === 'categoryNode') {
    var nodeCount = object.getData()['nodeIndices'].length;
    states.push(translations.stateCollapsed);
    states.push(ResourceUtils.format(translations.labelAndValue, [translations.labelSize, nodeCount]));
  }
  else if (object.nboxType === 'drawer') {
    var categoryNodeData = DvtNBoxDataUtils.getCategoryNode(nbox, object.getData()[NBoxConstants.ID]);
    var nodeCount = categoryNodeData['nodeIndices'].length;
    states.push(translations.stateExpanded);
    states.push(ResourceUtils.format(translations.labelAndValue, [translations.labelSize, nodeCount]));
  }

  return Displayable.generateAriaLabel(baseDesc, states, context);
};

/**
 * Finds first individual node in the container
 * @param {NBox} nbox The owning NBox component
 * @param {dvt.Container} container parent container
 * @return {DvtNBoxNode|DvtNBoxNodeOverflow} The first object in the container that can get keyboard focus
 */
DvtNBoxDataUtils.getFirstNavigableNode = function(nbox, container) {
  var navigable = null;
  if (container.getNumChildren() > 0) {
    //find first displayable object
    navigable = container.getChildAt(0);
    var prevNavigable;
    do {
      if (navigable.nboxType === 'node' || navigable.nboxType === 'overflow') {
        prevNavigable = navigable.previousNavigable;
      }
      navigable = prevNavigable || navigable;
    } while (prevNavigable);
  }
  return navigable;
};


/**
 * Finds last individual node in the container
 * @param {NBox} nbox The owning NBox component
 * @param {dvt.Container} container parent container
 * @return {DvtNBoxNode|DvtNBoxNodeOverflow} The last object in the container that can get keyboard focus
 */
DvtNBoxDataUtils.getLastNavigableNode = function(nbox, container) {
  var navigable = null;
  var childCnt = container.getNumChildren();
  if (childCnt > 0) {
    //get last displayable object
    navigable = container.getChildAt(childCnt - 1);
    var nextNavigable;
    do {
      if (navigable.nboxType === 'node') {
        nextNavigable = navigable.nextNavigable;
      }
      else {
        nextNavigable = null;
      }
      navigable = nextNavigable || navigable;
    } while (nextNavigable);
  }
  return navigable;
};


/**
 * Finds next navigable node based on direction
 * @param {NBox} nbox The owning NBox component
 * @param {DvtNBoxNode|DvtNBoxNodeOverflow} object current object that has get keyboard focus
 * @param {dvt.KeyboardEvent} event keyboard event
 * @return {DvtNBoxNode|DvtNBoxNodeOverflow} next object can get keyboard focus
 */
DvtNBoxDataUtils.getNextNavigableNode = function(nbox, object, event) {
  var bNext = (event.keyCode == KeyboardEvent.RIGHT_ARROW || event.keyCode == KeyboardEvent.DOWN_ARROW) ? true : false;
  var nextNavigable;
  if (object.nboxType === 'node') {
    nextNavigable = bNext ? object.nextNavigable : object.previousNavigable;
  }
  else if (object.nboxType === 'overflow') {
    nextNavigable = bNext ? null : object.previousNavigable;
  }
  return nextNavigable || object;
};

/**
 * Returns the number of nodes (highlighted and total) for each cell
 * @param {NBox} nbox The nbox component
 * @return {object} Two keys ('highlighted' and 'total') which each map to an array of cell counts by cell index
 */
DvtNBoxDataUtils.getCellCounts = function(nbox) {
  return nbox.getOptions()['__cellCounts'] || DvtNBoxDataUtils._calculateCellCounts(nbox);
};

/**
 * Counts the number of nodes (highlighted and total) for each cell
 * @param {NBox} nbox The nbox component
 * @return {object} Two keys ('highlighted' and 'total') which each map to an array of cell counts by cell index
 */
DvtNBoxDataUtils._calculateCellCounts = function(nbox) {
  var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  var cellCount = rowCount * columnCount;
  var total = [];
  var highlighted = null;
  var highlightedItems = DvtNBoxDataUtils.getHighlightedItems(nbox);
  var highlightedMap = {};
  if (highlightedItems) {
    highlighted = [];
    for (var i = 0; i < highlightedItems.length; i++) {
      highlightedMap[highlightedItems[i][NBoxConstants.ID]] = true;
    }
  }
  for (var i = 0; i < cellCount; i++) {
    total[i] = 0;
    if (highlighted) {
      highlighted[i] = 0;
    }
  }
  var nodeCount = DvtNBoxDataUtils.getNodeCount(nbox);
  for (var i = 0; i < nodeCount; i++) {
    var node = DvtNBoxDataUtils.getNode(nbox, i);
    if (!DvtNBoxDataUtils.isNodeHidden(nbox, node)) {
      var cellIndex = DvtNBoxDataUtils.getCellIndex(nbox, node);
      total[cellIndex]++;
      if (highlighted && highlightedMap[node[NBoxConstants.ID]]) {
        highlighted[cellIndex]++;
      }
    }
  }
  var retVal = {};
  retVal['total'] = total;
  if (highlighted) {
    retVal['highlighted'] = highlighted;
  }
  nbox.getOptions()['__cellCounts'] = retVal;
  return retVal;
};

/**
 * Returns the dimensions of the specified nbox row
 * @param {NBox} the nbox component
 * @param {number} rowIndex the index of the specified row
 * @param {dvt.Rectangle} availSpace the dimensions of the available space
 * @param {dvt.Rectangle} the dimensions of the specified nbox row
 */
DvtNBoxDataUtils.getRowDimensions = function(nbox, rowIndex, availSpace) {
  var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
  var rowHeight = availSpace.h / rowCount;

  var y = availSpace.y + (rowCount - rowIndex - 1) * rowHeight;
  var h = rowHeight;

  return new Rectangle(availSpace.x, y, availSpace.w, h);
};


/**
 * Returns the dimensions of the specified nbox column
 * @param {NBox} the nbox component
 * @param {number} columnIndex the index of the specified column
 * @param {dvt.Rectangle} availSpace the dimensions of the available space
 * @param {dvt.Rectangle} the dimensions of the specified nbox column
 */
DvtNBoxDataUtils.getColumnDimensions = function(nbox, columnIndex, availSpace) {
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  var columnWidth = availSpace.w / columnCount;
  var rtl = Agent.isRightToLeft(nbox.getCtx());

  var x = availSpace.x + (rtl ? availSpace.w - columnWidth : 0) + (rtl ? -1 : 1) * columnIndex * columnWidth;
  var w = columnWidth;

  return new Rectangle(x, availSpace.y, w, availSpace.h);
};

/**
 * Static comparator function for sorting category nodes by size (descending).
 * @param {object} a data for first category node
 * @param {object} b data for second category node
 *
 * @return {number}
 */
DvtNBoxDataUtils.compareCategoryNodeSize = function(a, b) {
  var alength = a['nodeIndices'].length;
  var blength = b['nodeIndices'].length;
  return alength == blength ? 0 : alength < blength ? 1 : -1;
};

/**
 * Keyboard handler for the NBox component
 * @param {dvt.EventManager} manager The owning dvt.EventManager
 * @param {NBox} nbox The owning NBox component
 * @class DvtNBoxKeyboardHandler
 * @constructor
 * @extends {dvt.KeyboardHandler}
 */
var DvtNBoxKeyboardHandler = function(manager, nbox)
{
  this.Init(manager, nbox);
};

Obj.createSubclass(DvtNBoxKeyboardHandler, KeyboardHandler);


/**
 * @override
 */
DvtNBoxKeyboardHandler.prototype.Init = function(manager, nbox) {
  DvtNBoxKeyboardHandler.superclass.Init.call(this, manager);
  this._nbox = nbox;
};


/**
 * @override
 */
DvtNBoxKeyboardHandler.prototype.processKeyDown = function(event) {
  var keyCode = event.keyCode;

  if (keyCode == KeyboardEvent.TAB) {
    var currentNavigable = this._eventManager.getFocus();
    var next = null;
    EventManager.consumeEvent(event);
    if (!currentNavigable) {
      var drawerData = DvtNBoxDataUtils.getDrawer(this._nbox);
      if (drawerData) { //drawer
        next = DvtNBoxUtils.getDisplayable(this._nbox, drawerData);
      }
      else if (DvtNBoxDataUtils.getGroupBehavior(this._nbox) == NBoxConstants.GROUP_BEHAVIOR_ACROSS_CELLS) {
        //find first group node
        var groups = this._nbox.getOptions()['__groups'];
        if (groups) {
          var groupNodes = [];
          for (var id in groups) {
            var displayable = DvtNBoxUtils.getDisplayable(this._nbox, groups[id]);
            if (displayable)
              groupNodes.push(displayable);
          }
          next = DvtNBoxKeyboardHandler.getNextNavigableCategoryNode(null, event, groupNodes);
        }
      }
      if (!next) {
        var index = DvtNBoxDataUtils.getColumnCount(this._nbox) * (DvtNBoxDataUtils.getRowCount(this._nbox) - 1);
        next = DvtNBoxUtils.getDisplayable(this._nbox, DvtNBoxDataUtils.getCell(this._nbox, index));
      }
    }
    else {
      next = currentNavigable;
    }
    return next;
  }
  return DvtNBoxKeyboardHandler.superclass.processKeyDown.call(this, event);
};


/**
 * @override
 */
DvtNBoxKeyboardHandler.prototype.isSelectionEvent = function(event)
{
  if (event.keyCode == KeyboardEvent.TAB)
    return false;
  else
    return this.isNavigationEvent(event) && !event.ctrlKey;
};


/**
 * @override
 */
DvtNBoxKeyboardHandler.prototype.isMultiSelectEvent = function(event)
{
  return event.keyCode == KeyboardEvent.SPACE && event.ctrlKey;
};


/**
 * @override
 */
DvtNBoxKeyboardHandler.prototype.isNavigationEvent = function(event)
{
  var retVal = false;
  switch (event.keyCode) {
    case KeyboardEvent.OPEN_BRACKET:
    case KeyboardEvent.CLOSE_BRACKET:
      retVal = true; break;
    default:
      retVal = DvtNBoxKeyboardHandler.superclass.isNavigationEvent.call(this, event);
  }
  return retVal;
};


/**
 * Finds next navigable category node based on node size and direction  among sorted category nodes
 * @param {DvtKeyboardNavigable} curr current navigable item with keyboard focus (optional).
 * @param {dvt.KeyboardEvent} event
 * @param {Array} navigableItems An array of items that could receive focus next
 * @return {DvtNBoxCategoryNode} The object that can get keyboard focus as a result of the keyboard event.
 */
DvtNBoxKeyboardHandler.getNextNavigableCategoryNode = function(curr, event, navigableItems) {
  if (!navigableItems || navigableItems.length <= 0)
    return null;

  if (navigableItems[0].nboxType === 'categoryNode') {
    navigableItems.sort(function(a, b) {return DvtNBoxDataUtils.compareCategoryNodeSize(a.getData(), b.getData())});
  }

  // get default node
  if (curr == null) {
    return navigableItems[0];
  }

  var next = curr;
  var bNext = (event.keyCode == KeyboardEvent.RIGHT_ARROW || event.keyCode == KeyboardEvent.DOWN_ARROW) ? true : false;
  var itemCount = navigableItems.length;
  for (var i = 0; i < itemCount; i++) {
    var testObj = navigableItems[i];
    if (testObj === curr) {
      var nextIndex = bNext ?
          i + 1 < itemCount ? i + 1 : i
                        : i - 1 >= 0 ? i - 1 : i;
      next = navigableItems[nextIndex];
      break;
    }
  }
  return next;
};

/**
 * Style related utility functions for NBox.
 * @class
 */
var DvtNBoxStyleUtils = new Object();

Obj.createSubclass(DvtNBoxStyleUtils, Obj);


/**
 * Returns the display animation for the specified nbox.
 * @param {NBox} nbox
 * @return {string}
 */
DvtNBoxStyleUtils.getAnimationOnDisplay = function(nbox) {
  if (!nbox.isAnimationAllowed())
    return 'none';
  var animationOnDisplay = nbox.getOptions()[NBoxConstants.ANIMATION_ON_DISPLAY];
  if (animationOnDisplay == 'auto') {
    animationOnDisplay = BlackBoxAnimationHandler.ALPHA_FADE;
  }
  return animationOnDisplay;
};


/**
 * Returns the data change animation for the specified nbox.
 * @param {NBox} nbox
 * @return {string}
 */
DvtNBoxStyleUtils.getAnimationOnDataChange = function(nbox) {
  if (!nbox.isAnimationAllowed())
    return 'none';
  return nbox.getOptions()[NBoxConstants.ANIMATION_ON_DATA_CHANGE];
};


/**
 * Returns the animation duration in seconds for the specified nbox.  This duration is
 * intended to be passed to the animation handler, and is not in the same units
 * as the API.
 * @param {NBox} nbox
 * @return {number} The animation duration in seconds.
 */
DvtNBoxStyleUtils.getAnimationDuration = function(nbox) {
  return CSSStyle.getTimeMilliseconds(nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.ANIMATION_DURATION]) / 1000;
};


/**
 * Returns the label style for the specified column index
 * @param {NBox} nbox
 * @param {number} columnIndex the specified column index
 * @return {dvt.CSSStyle} the label style for the specified column index
 */
DvtNBoxStyleUtils.getColumnLabelStyle = function(nbox, columnIndex) {
  var options = nbox.getOptions();
  var defaults = options[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.COLUMN_LABEL_STYLE];
  var column = DvtNBoxDataUtils.getColumn(nbox, columnIndex);
  if (column[NBoxConstants.LABEL_STYLE]) {
    return JsonUtils.merge(new CSSStyle(column[NBoxConstants.LABEL_STYLE]), defaults);
  }
  return defaults;
};


/**
 * Returns the label style for the specified row index
 * @param {NBox} nbox
 * @param {number} rowIndex the specified row index
 * @return {dvt.CSSStyle} the label style for the specified row index
 */
DvtNBoxStyleUtils.getRowLabelStyle = function(nbox, rowIndex) {
  var options = nbox.getOptions();
  var defaults = options[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.ROW_LABEL_STYLE];
  var row = DvtNBoxDataUtils.getRow(nbox, rowIndex);
  if (row[NBoxConstants.LABEL_STYLE]) {
    return JsonUtils.merge(new CSSStyle(row[NBoxConstants.LABEL_STYLE]), defaults);
  }
  return defaults;
};


/**
 * Returns the cell style css for the specified cell index
 * @param {NBox} nbox the nbox displayable
 * @param {number} cellIndex the specified cell index
 * @return {dvt.CSSStyle} the cell style for the specified cell index
 */
DvtNBoxStyleUtils.getCellStyle = function(nbox, cellIndex) {
  var options = nbox.getOptions();
  var styleKeys = DvtNBoxStyleUtils._getCellStyleKeys(nbox, cellIndex);
  var cellStyleOption = DvtNBoxStyleUtils._getCellStyleOption(nbox, cellIndex, styleKeys[0], styleKeys[1]);
  var nBoxCellDefault = options[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS]['_' + styleKeys[0]];

  var cellStyle = new CSSStyle();
  DvtNBoxStyleUtils._getCellStyleProperties().forEach(function(entry) {
    var attribute = CSSStyle.cssStringToObjectProperty(entry);
    //Pick the value from cell style options or from cell style default
    var value = (cellStyleOption && cellStyleOption[attribute] != null) ? cellStyleOption[attribute] :
        nBoxCellDefault.getStyle(entry);
    cellStyle.setStyle(entry, value);
  });

  return cellStyle;
};

/**
 * Returns the cell style object for the specified cell index
 * @param {NBox} nbox the nbox displayable
 * @param {number} cellIndex the specified cell index
 * @return {object} the cell style object for the specified cell index
 */
DvtNBoxStyleUtils.getCellStyleObject = function(nbox, cellIndex) {
  var styleKeys = DvtNBoxStyleUtils._getCellStyleKeys(nbox, cellIndex);
  var cellStyleOption = DvtNBoxStyleUtils._getCellStyleOption(nbox, cellIndex, styleKeys[0], styleKeys[1]);
  if (cellStyleOption) {
    DvtNBoxStyleUtils._getCellStyleProperties().forEach(function(entry) {
      delete cellStyleOption[CSSStyle.cssStringToObjectProperty(entry)];
    });
  }

  return cellStyleOption;
};

/**
 * Returns the cell style keys based on the state of the cell
 * @param {NBox} nbox the nbox displayable
 * @param {number} cellIndex the specified cell index
 * @return {Array} style keys based on the state of the cell
 * @private
 */
DvtNBoxStyleUtils._getCellStyleKeys = function(nbox, cellIndex) {
  var styleKey = NBoxConstants.STYLE;
  var svgStyleKey = 'svgStyle';
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(nbox);
  if (DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex)) {
    styleKey = 'minimizedStyle';
    svgStyleKey = 'minimizedSvgStyle';
  }
  else if ((maximizedRow || maximizedColumn) && !DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex)) {
    styleKey = 'maximizedStyle';
    svgStyleKey = 'maximizedSvgStyle';
  }
  return [styleKey, svgStyleKey];
};

/**
 * Get the Cell option object for the given cell index
 * This merges the properties of cell public default style with cell styles
 * @param {NBox} nbox the nbox displayable
 * @param {number} cellIndex the specified cell index
 * @param {string} styleKey  style key based on the state of the cell
 * @param {string} svgStyleKey  svg style key based on the state of the cell
 * @return {object} object representing cell style attributes
 * @private
 */
DvtNBoxStyleUtils._getCellStyleOption = function(nbox, cellIndex, styleKey, svgStyleKey) {
  var options = nbox.getOptions();
  var cell = DvtNBoxDataUtils.getCell(nbox, cellIndex);

  //Cell style properites from public defaults
  var cellStyleDefaults = options[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS];
  var cellDefault = cellStyleDefaults[svgStyleKey] || cellStyleDefaults[styleKey];
  if (cellDefault && !(cellDefault instanceof Object)) {
    cellDefault = CSSStyle.cssStringToObject(cellDefault);
  }
  //Merge the properties from public defaults with cell style properties
  var cellStyle = cell[svgStyleKey] || cell[styleKey];
  if (cellStyle) {
    if (!(cellStyle instanceof Object))
      cellStyle = CSSStyle.cssStringToObject(cellStyle);
    cellStyle = JsonUtils.merge(cellStyle, cellDefault);
  } else if (cellDefault) {
    cellStyle = JsonUtils.clone(cellDefault);
  }
  return cellStyle;
};

/**
 * Returns the cell style properties
 * @return {array}  Array of cell style properties
 * @private
 */
DvtNBoxStyleUtils._getCellStyleProperties = function() {
  return [CSSStyle.BACKGROUND,
    CSSStyle.BACKGROUND_COLOR,
    CSSStyle.BORDER_STYLE,
    CSSStyle.BORDER_COLOR,
    CSSStyle.BORDER_WIDTH];
};

/**
 * Returns the cell className for the specified cell index to directly set the class on cell
 * @param {NBox} nbox the nbox displayable
 * @param {number} cellIndex the specified cell index
 * @return {string} the cell class name
 */
DvtNBoxStyleUtils.getCellClassName = function(nbox, cellIndex) {
  var className = 'className';
  var svgClassName = 'svgClassName';
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(nbox);
  if (DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex)) {
    className = 'minimizedClassName';
    svgClassName = 'minimizedSvgClassName';
  }
  else if ((maximizedRow || maximizedColumn) && !DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex)) {
    className = 'maximizedClassName';
    svgClassName = 'maximizedSvgClassName';
  }
  var cell = DvtNBoxDataUtils.getCell(nbox, cellIndex);
  return (cell[svgClassName] || cell[className]);
};


/**
 * Returns the label style for the specified cell index
 * @param {NBox} nbox
 * @param {number} cellIndex the specified cell index
 * @return {dvt.CSSStyle} the label style for the specified cell index
 */
DvtNBoxStyleUtils.getCellLabelStyle = function(nbox, cellIndex) {
  var options = nbox.getOptions();
  var labelStyle = DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex) ? '_labelMinimizedStyle' : NBoxConstants.LABEL_STYLE;
  var defaults = options[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS][labelStyle];
  var cell = DvtNBoxDataUtils.getCell(nbox, cellIndex);
  if (cell[NBoxConstants.LABEL_STYLE]) {
    return JsonUtils.merge(new CSSStyle(cell[NBoxConstants.LABEL_STYLE]), defaults);
  }
  return defaults;
};

/**
 * Returns whether to show cell node count
 * @param {NBox} nbox
 * @param {object} cell the cell data
 * @return {boolean} whether to show cell node count
 */
DvtNBoxStyleUtils.getCellShowCount = function(nbox, cell) {
  return cell[NBoxConstants.SHOW_COUNT] ? cell[NBoxConstants.SHOW_COUNT] :
      nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS][NBoxConstants.SHOW_COUNT];
};


/**
 * Returns the count label style for nbox cells
 * @param {NBox} nbox
 * @param {number} cellIndex the specified cell index
 * @return {dvt.CSSStyle} the count label style for nbox cells
 */
DvtNBoxStyleUtils.getCellCountLabelStyle = function(nbox, cellIndex) {
  var labelStyle = DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex) ? '_labelMinimizedStyle' : 'countLabelStyle';
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS][labelStyle];
};

/**
 * Returns the border radius for cells
 * @param {NBox} nbox
 * @return {number} the border radius
 */
DvtNBoxStyleUtils.getCellBorderRadius = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS]['_' + NBoxConstants.BORDER_RADIUS];
};

/**
 * Returns the body count label style for nbox cells
 * @param {NBox} nbox
 * @return {dvt.CSSStyle} the count label style for nbox cells
 */
DvtNBoxStyleUtils.getCellBodyCountLabelStyle = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS]['bodyCountLabelStyle'];
};


/**
 * Returns the drop target style for nbox cells
 * @param {NBox} nbox
 * @return {dvt.CSSStyle} the drop target style for nbox cells
 */
DvtNBoxStyleUtils.getCellDropTargetStyle = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS]['dropTargetStyle'];
};

/**
 * Returns the dvt.OutputText node label
 * Creates it if it does not already exist
 *
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data object
 * @return {dvt.OutputText} label
 */
DvtNBoxStyleUtils.getNodeLabel = function(nbox, node) {
  if (!node[NBoxConstants.LABEL]) {
    return null;
  }
  var label = DvtNBoxUtils.getDisplayable(nbox, node, NBoxConstants.LABEL);
  if (label) {
    return label;
  }

  var rtl = Agent.isRightToLeft(nbox.getCtx());
  var halign = rtl ? OutputText.H_ALIGN_RIGHT : OutputText.H_ALIGN_LEFT;
  label = DvtNBoxUtils.createText(nbox.getCtx(), node[NBoxConstants.LABEL], DvtNBoxStyleUtils.getNodeLabelStyle(nbox, node), halign, OutputText.V_ALIGN_CENTRAL);
  if (node[NBoxConstants.SECONDARY_LABEL]) {
    label.setClassName('oj-typography-semi-bold');
  }
  DvtNBoxUtils.setDisplayable(nbox, node, label, NBoxConstants.LABEL);
  return label;
};


/**
 * Returns the dvt.OutputText node secondary label
 * Creates it if it does not already exist
 *
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data object
 * @return {dvt.OutputText} secondary label
 */
DvtNBoxStyleUtils.getNodeSecondaryLabel = function(nbox, node) {
  if (!node[NBoxConstants.SECONDARY_LABEL]) {
    return null;
  }
  var secondaryLabel = DvtNBoxUtils.getDisplayable(nbox, node, NBoxConstants.SECONDARY_LABEL);
  if (secondaryLabel) {
    return secondaryLabel;
  }

  var rtl = Agent.isRightToLeft(nbox.getCtx());
  var halign = rtl ? OutputText.H_ALIGN_RIGHT : OutputText.H_ALIGN_LEFT;
  secondaryLabel = DvtNBoxUtils.createText(nbox.getCtx(), node[NBoxConstants.SECONDARY_LABEL], DvtNBoxStyleUtils.getNodeSecondaryLabelStyle(nbox, node), halign, OutputText.V_ALIGN_CENTRAL);
  DvtNBoxUtils.setDisplayable(nbox, node, secondaryLabel, NBoxConstants.SECONDARY_LABEL);
  return secondaryLabel;
};

/**
 * Returns the label style for the specified node
 * @param {NBox} nbox
 * @param {object} node the specified node data
 * @return {dvt.CSSStyle} the label style for the specified node
 */
DvtNBoxStyleUtils.getNodeLabelStyle = function(nbox, node) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.LABEL_STYLE];
};


/**
 * Returns the secondary label style for the specified node
 * @param {NBox} nbox
 * @param {object} node the specified node data
 * @return {dvt.CSSStyle} the secondary label style for the specified node
 */
DvtNBoxStyleUtils.getNodeSecondaryLabelStyle = function(nbox, node) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.SECONDARY_LABEL_STYLE];
};


/**
 * Returns the color for the specified node
 * @param {NBox} nbox
 * @param {object} node the specified node data
 * @return {string} the color for the specified node
 */
DvtNBoxStyleUtils.getNodeColor = function(nbox, node) {
  if (node[NBoxConstants.COLOR])
    return node[NBoxConstants.COLOR];
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.COLOR];
};


/**
 * Returns the border color for the specified node
 * @param {NBox} nbox
 * @param {object} node the specified node data
 * @return {string} the border color for the specified node
 */
DvtNBoxStyleUtils.getNodeBorderColor = function(nbox, node) {
  var color = node[NBoxConstants.BORDER_COLOR] ? node[NBoxConstants.BORDER_COLOR] :
      nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.BORDER_COLOR];
  return color ? color : null;
};


/**
 * Returns the border width for the specified nodeb
 * @param {NBox} nbox
 * @param {object} node the specified node data
 * @return {number} the border width for the specified node
 */
DvtNBoxStyleUtils.getNodeBorderWidth = function(nbox, node) {
  var width = node[NBoxConstants.BORDER_WIDTH] ? node[NBoxConstants.BORDER_WIDTH] :
      nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.BORDER_WIDTH];
  return width ? width : null;
};


/**
 * Returns the indicator color for the specified node
 * @param {NBox} nbox
 * @param {object} node the specified node data
 * @return {string} the indicator color for the specified node
 */
DvtNBoxStyleUtils.getNodeIndicatorColor = function(nbox, node) {
  if (node[NBoxConstants.INDICATOR_COLOR])
    return node[NBoxConstants.INDICATOR_COLOR];
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.INDICATOR_COLOR];
};

/**
 * Gets the icon for the specified node
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data
 * @return {object} the icon data for the specified node
 */
DvtNBoxStyleUtils.getIcon = function(nbox, node) {
  if (node[NBoxConstants.ICON]) {
    return DvtNBoxStyleUtils.getStyledIcon(nbox, node[NBoxConstants.ICON]);
  }
  return null;
};


/**
 * Gets the indicator icon for the specified node
 * @param {NBox} nbox the nbox component
 * @param {object} node the node data
 * @return {object} the indicator icon data for the specified node
 */
DvtNBoxStyleUtils.getIndicatorIcon = function(nbox, node) {
  if (node[NBoxConstants.INDICATOR_ICON])
    return DvtNBoxStyleUtils.getStyledIndicatorIcon(nbox, node[NBoxConstants.INDICATOR_ICON]);
  return null;
};

/**
 * Fills out any default style properties for the specified icon
 * @param {NBox} nbox
 * @param {object} icon the specified icon data
 * @return {object} the icon data, including default style properties
 */
DvtNBoxStyleUtils.getStyledIcon = function(nbox, icon) {
  return JsonUtils.merge(icon, nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.ICON_DEFAULTS]);
};


/**
 * Fills out any default style properties for the specified indicator icon
 * @param {NBox} nbox
 * @param {object} indicatorIcon the specified indicator data
 * @return {object} the indicator icon data, including default style properties
 */
DvtNBoxStyleUtils.getStyledIndicatorIcon = function(nbox, indicatorIcon) {
  return JsonUtils.merge(indicatorIcon, nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.INDICATOR_ICON_DEFAULTS]);
};


/**
 * Returns the alpha value for non-highlighted nodes.
 * @param {NBox} nbox
 * @return {number} the alpha value for non-highlighted nodes.
 */
DvtNBoxStyleUtils.getFadedNodeAlpha = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS]['alphaFade'];
};


/**
 * Returns a map containing scrollbar styles
 * @param {NBox} nbox
 * @return {object} a map containing scrollbar styles
 */
DvtNBoxStyleUtils.getScrollbarStyleMap = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS]['__scrollbar'];
};


/**
 * Returns the color for the specified category node
 * @param {NBox} nbox
 * @param {object} categoryNode the specified category node data
 * @return {string} the color for the specified node
 */
DvtNBoxStyleUtils.getCategoryNodeColor = function(nbox, categoryNode) {
  if (DvtNBoxDataUtils.getGroupBehavior(nbox) == 'none' ||
      (DvtNBoxDataUtils.getGroupAttributes(nbox) && DvtNBoxDataUtils.getGroupAttributes(nbox).indexOf('color') == -1)) {
    return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.COLOR];
  }
  if (categoryNode['otherNode']) {
    return DvtNBoxDataUtils.getOtherColor(nbox);
  }
  // if all nodes have same color, return that value, otherwise return default.
  var nodeIndices = categoryNode['nodeIndices'];
  var color = DvtNBoxDataUtils.getNode(nbox, nodeIndices[0])[NBoxConstants.COLOR];
  if (!color)
    return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.COLOR];

  for (var i = 1; i < nodeIndices.length; i++) {
    var node = DvtNBoxDataUtils.getNode(nbox, nodeIndices[i]);
    if (color != node[NBoxConstants.COLOR])
      return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.COLOR];
  }
  return color;
};


/**
 * Returns the indicator color for the specified node
 * @param {NBox} nbox
 * @param {object} categoryNode the specified category node data
 * @return {string} the indicator color for the specified node
 */
DvtNBoxStyleUtils.getCategoryNodeIndicatorColor = function(nbox, categoryNode) {
  if (DvtNBoxDataUtils.getGroupBehavior(nbox) == 'none' ||
      (DvtNBoxDataUtils.getGroupAttributes(nbox) && DvtNBoxDataUtils.getGroupAttributes(nbox).indexOf('indicatorColor') == -1)) {
    return null;
  }
  // if all nodes have same indicator color, return that value, otherwise return default.
  var nodeIndices = categoryNode['nodeIndices'];
  var color = DvtNBoxDataUtils.getNode(nbox, nodeIndices[0])[NBoxConstants.INDICATOR_COLOR];
  if (!color)
    return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.INDICATOR_COLOR];

  for (var i = 1; i < nodeIndices.length; i++) {
    var node = DvtNBoxDataUtils.getNode(nbox, nodeIndices[i]);
    if (color != node[NBoxConstants.INDICATOR_COLOR])
      return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.INDICATOR_COLOR];
  }
  return color;
};


/**
 * Gets the styled indicator icon (if any) for the specified category node
 * @param {NBox} nbox
 * @param {object} categoryNode the category node data
 * @return {object} the styled indicator icon data
 */
DvtNBoxStyleUtils.getStyledCategoryIndicatorIcon = function(nbox, categoryNode) {
  if (DvtNBoxDataUtils.getGroupBehavior(nbox) == 'none')
    return null;

  // if not styling group nodes by any of the indicatorIcon attributes return null
  if (DvtNBoxDataUtils.getGroupAttributes(nbox) &&
      DvtNBoxDataUtils.getGroupAttributes(nbox).indexOf('indicatorIconShape') == -1 &&
      DvtNBoxDataUtils.getGroupAttributes(nbox).indexOf('indicatorIconColor') == -1 &&
      DvtNBoxDataUtils.getGroupAttributes(nbox).indexOf('indicatorIconPattern') == -1)
    return null;


  var indicatorIcon = {};
  var nodeIndices = categoryNode['nodeIndices'];

  var baseIcon = DvtNBoxDataUtils.getNode(nbox, nodeIndices[0])[NBoxConstants.INDICATOR_ICON];
  if (!baseIcon)
    return null;

  // Border properties
  if (baseIcon['width']) indicatorIcon['width'] = baseIcon['width'];
  if (baseIcon['height']) indicatorIcon['height'] = baseIcon['height'];
  if (baseIcon['borderWidth']) indicatorIcon['borderWidth'] = baseIcon['borderWidth'];
  if (baseIcon['borderStyle']) indicatorIcon['borderStyle'] = baseIcon['borderStyle'];
  if (baseIcon['borderColor']) indicatorIcon['borderColor'] = baseIcon['borderColor'];
  if (baseIcon['borderRadius']) indicatorIcon['borderRadius'] = baseIcon['borderRadius'];

  if (baseIcon['style']) indicatorIcon['style'] = baseIcon['style'];
  if (baseIcon['className']) indicatorIcon['className'] = baseIcon['className'];

  // Shape
  var match = true;
  if (!DvtNBoxDataUtils.getGroupAttributes(nbox) || DvtNBoxDataUtils.getGroupAttributes(nbox).indexOf('indicatorIconShape') != -1) {
    var shape = baseIcon[NBoxConstants.SHAPE];
    for (var i = 1; i < nodeIndices.length; i++) {
      var nodeIcon = DvtNBoxDataUtils.getNode(nbox, nodeIndices[i])[NBoxConstants.INDICATOR_ICON];
      if (nodeIcon && shape != nodeIcon[NBoxConstants.SHAPE])
        match = false;
    }
    indicatorIcon[NBoxConstants.SHAPE] = match ? shape : nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.INDICATOR_ICON_DEFAULTS][NBoxConstants.SHAPE];
  }

  // Color
  match = true;
  if (!DvtNBoxDataUtils.getGroupAttributes(nbox) || DvtNBoxDataUtils.getGroupAttributes(nbox).indexOf('indicatorIconColor') != -1) {
    var color = baseIcon[NBoxConstants.COLOR];
    for (var j = 1; j < nodeIndices.length; j++) {
      var nodeIcon = DvtNBoxDataUtils.getNode(nbox, nodeIndices[j])[NBoxConstants.INDICATOR_ICON];
      if (nodeIcon && color != nodeIcon[NBoxConstants.COLOR])
        match = false;
    }
    indicatorIcon[NBoxConstants.COLOR] = match ? color : nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.INDICATOR_ICON_DEFAULTS][NBoxConstants.COLOR];
  }

  // Pattern
  match = true;
  if (!DvtNBoxDataUtils.getGroupAttributes(nbox) || DvtNBoxDataUtils.getGroupAttributes(nbox).indexOf('indicatorIconPattern') != -1) {
    var pattern = baseIcon[NBoxConstants.PATTERN];
    for (var k = 1; k < nodeIndices.length; k++) {
      var nodeIcon = DvtNBoxDataUtils.getNode(nbox, nodeIndices[k])[NBoxConstants.INDICATOR_ICON];
      if (nodeIcon && pattern != nodeIcon[NBoxConstants.PATTERN])
        match = false;
    }
    indicatorIcon[NBoxConstants.PATTERN] = match ? pattern : nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.INDICATOR_ICON_DEFAULTS][NBoxConstants.PATTERN];
  }
  return JsonUtils.merge(indicatorIcon, nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS][NBoxConstants.INDICATOR_ICON_DEFAULTS]);
};


/**
 * Returns the background for the drawer
 * @param {NBox} nbox
 * @return {string} the background for the drawer
 */
DvtNBoxStyleUtils.getDrawerBackground = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS]['_drawerDefaults']['background'];
};


/**
 * Returns the header background for the drawer
 * @param {NBox} nbox
 * @return {string} the header background for the drawer
 */
DvtNBoxStyleUtils.getDrawerHeaderBackground = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS]['_drawerDefaults']['headerBackground'];
};


/**
 * Returns the border color for the drawer
 * @param {NBox} nbox
 * @return {string} the border color for the drawer
 */
DvtNBoxStyleUtils.getDrawerBorderColor = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS]['_drawerDefaults'][NBoxConstants.BORDER_COLOR];
};


/**
 * Returns the border radius for the drawer
 * @param {NBox} nbox
 * @return {number} the border radius for the drawer
 */
DvtNBoxStyleUtils.getDrawerBorderRadius = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS]['_drawerDefaults'][NBoxConstants.BORDER_RADIUS];
};


/**
 * Returns the label style for the drawer
 * @param {NBox} nbox
 * @return {dvt.CSSStyle} the label style for the drawer
 */
DvtNBoxStyleUtils.getDrawerLabelStyle = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS]['_drawerDefaults'][NBoxConstants.LABEL_STYLE];
};


/**
 * Returns the count label style the drawer
 * @param {NBox} nbox
 * @return {dvt.CSSStyle} the count label style the drawer
 */
DvtNBoxStyleUtils.getDrawerCountLabelStyle = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS]['_drawerDefaults']['countLabelStyle'];
};


/**
 * Returns the count border radius for the drawer
 * @param {NBox} nbox
 * @return {number} the count border radius for the drawer
 */
DvtNBoxStyleUtils.getDrawerCountBorderRadius = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS]['_drawerDefaults']['countBorderRadius'];
};


/**
 * Returns the label style for category nodes
 * @param {NBox} nbox
 * @return {dvt.CSSStyle} the label style for category nodes
 */
DvtNBoxStyleUtils.getCategoryNodeLabelStyle = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS]['_categoryNodeDefaults']['labelStyle'];
};


/**
 * Returns the border radius for nodes
 * @param {NBox} nbox
 * @return {number} the border radius
 */
DvtNBoxStyleUtils.getNodeBorderRadius = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS]['_' + NBoxConstants.BORDER_RADIUS];
};


/**
 * Returns the hover color for nodes
 * @param {NBox} nbox
 * @return {string} the hover color
 */
DvtNBoxStyleUtils.getNodeHoverColor = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS]['hoverColor'];
};


/**
 * Returns the selection color for nodes
 * @param {NBox} nbox the nbox component
 * @return {string} the selection color
 */
DvtNBoxStyleUtils.getNodeSelectionColor = function(nbox) {
  return nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS]['selectionColor'];
};


/**
 * Returns a left/center/right halign value based upon the current reading direction
 *
 * @param {NBox} nbox the nbox component
 * @param {object} data for object with a label
 *
 * @return {string} the reading-direction-aware halign value
 */
DvtNBoxStyleUtils.getLabelHalign = function(nbox, data) {
  var halign = data[NBoxConstants.LABEL_HALIGN];
  if (!halign)
    halign = nbox.getOptions()[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS][NBoxConstants.LABEL_HALIGN];
  var rtl = Agent.isRightToLeft(nbox.getCtx());
  if (halign == 'end') {
    return rtl ? OutputText.H_ALIGN_LEFT : OutputText.H_ALIGN_RIGHT;
  }
  else if (halign == 'center') {
    return OutputText.H_ALIGN_CENTER;
  }
  else { // halign == "start"
    return rtl ? OutputText.H_ALIGN_RIGHT : OutputText.H_ALIGN_LEFT;
  }
};

/**
 * Animation handler for NBox
 * @param {dvt.Context} context the platform specific context object
 * @param {dvt.Container} deleteContainer the container where deletes should be moved for animation
 * @param {object} an object representing the old nbox state
 * @param {NBox} the nbox component
 * @class DvtNBoxDataAnimationHandler
 * @constructor
 */
var DvtNBoxDataAnimationHandler = function(context, deleteContainer, oldNBox, newNBox) {
  this.Init(context, deleteContainer, oldNBox, newNBox);
};

Obj.createSubclass(DvtNBoxDataAnimationHandler, DataAnimationHandler);

DvtNBoxDataAnimationHandler.DELETE = 0;
DvtNBoxDataAnimationHandler.UPDATE = 1;
DvtNBoxDataAnimationHandler.INSERT = 2;


/**
 * Initialization method called by the constructor
 *
 * @param {dvt.Context} context the platform specific context object
 * @param {dvt.Container} deleteContainer the container where deletes should be moved for animation
 * @param {object} an object representing the old nbox state
 * @param {NBox} the nbox component
 */
DvtNBoxDataAnimationHandler.prototype.Init = function(context, deleteContainer, oldNBox, newNBox) {
  DvtNBoxDataAnimationHandler.superclass.Init.call(this, context, deleteContainer);
  this._oldNBox = oldNBox;
  this._newNBox = newNBox;
};


/**
 * Returns the old NBox state
 *
 * @return {object} an object representing the old nbox state
 */
DvtNBoxDataAnimationHandler.prototype.getOldNBox = function() {
  return this._oldNBox;
};


/**
 * Returns the new NBox state
 *
 * @return {NBox} the nbox component
 */
DvtNBoxDataAnimationHandler.prototype.getNewNBox = function() {
  return this._newNBox;
};


/**
 * Gets the animation duration
 *
 * @return {number} the animation duration
 */
DvtNBoxDataAnimationHandler.prototype.getAnimationDuration = function() {
  return DvtNBoxStyleUtils.getAnimationDuration(this._oldNBox);
};

/**
 * Renderer for DvtNBoxNode.
 * @class
 */
var DvtNBoxNodeRenderer = new Object();

Obj.createSubclass(DvtNBoxNodeRenderer, Obj);

/** @private **/
DvtNBoxNodeRenderer._MIN_CORNER_RADIUS = 2.5;
/** @private **/
DvtNBoxNodeRenderer._ASPECT_RATIO_SCALING = 'xMidYMid slice';

/**
 * Renders the nbox node.
 * @param {NBox} nbox The nbox component
 * @param {object} nodeData the node data being rendered
 * @param {DvtNBoxNode} nodeContainer The container to render into.
 * @param {object} nodeLayout An object containing properties related to the sizes of the various node subsections
 */
DvtNBoxNodeRenderer.render = function(nbox, nodeData, nodeContainer, nodeLayout) {
  DvtNBoxNodeRenderer._renderNodeBackground(nbox, nodeData, nodeContainer, nodeLayout);
  DvtNBoxNodeRenderer._renderNodeIndicator(nbox, nodeData, nodeContainer, nodeLayout);
  DvtNBoxNodeRenderer._renderNodeIcon(nbox, nodeData, nodeContainer, nodeLayout);
  DvtNBoxNodeRenderer._renderNodeLabels(nbox, nodeData, nodeContainer, nodeLayout);
  DvtNBoxNodeRenderer._addAccessibilityAttributes(nbox, nodeContainer);

  var childContainer = nodeContainer.getChildContainer();
  if (childContainer)
    DvtNBoxNodeRenderer._clipIfNecessary(nbox, childContainer, nodeLayout);
};


/**
 * Calculates sizes related to node layout, based upon the first specified node
 * (Assumes that the nodes are specified homogeneously)
 * @param {NBox} nbox the nbox component
 * @param {object} cellNodes object containing node rendering order for each cell
 * @return {object} an object containing the calculated sizes
 */
DvtNBoxNodeRenderer.calculateNodeLayout = function(nbox, cellNodes) {
  var options = nbox.getOptions();
  var gridGap = parseInt(options['__layout']['gridGap']);
  var nodeStartLabelGap = options['__layout']['nodeStartLabelGap'];
  var nodeLabelOnlyStartLabelGap = options['__layout']['nodeLabelOnlyStartLabelGap'];
  var nodeEndLabelGap = options['__layout']['nodeEndLabelGap'];
  var nodeSwatchSize = options['__layout']['nodeSwatchSize'];
  var maximumLabelWidth = parseInt(options['__layout']['maximumLabelWidth']);

  var simpleLayout = DvtNBoxNodeRenderer._calculateSimpleNodeLayout(nbox);
  var nodeHeight = simpleLayout['nodeHeight'];
  var indicatorSectionWidth = simpleLayout['indicatorSectionWidth'];
  var iconSectionWidth = simpleLayout['iconSectionWidth'];
  var startLabelGap = (indicatorSectionWidth || iconSectionWidth) ? nodeStartLabelGap : nodeLabelOnlyStartLabelGap;

  var node = DvtNBoxDataUtils.getNode(nbox, 0);
  var indicatorIcon = DvtNBoxStyleUtils.getIndicatorIcon(nbox, node);
  var icon = DvtNBoxStyleUtils.getIcon(nbox, node);

  var labelSectionWidth = 0;
  var cellLayouts = [];
  var cellRows = 0;
  var cellColumns = 0;
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(nbox);
  var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  for (var r = 0; r < rowCount; r++) {
    for (var c = 0; c < columnCount; c++) {
      cellLayouts.push({'cellRows': 0, 'cellColumns': 0, 'overflow': false});
    }
  }
  var nodeCounts = [];
  var nodeCount = DvtNBoxDataUtils.getNodeCount(nbox);
  for (var i = 0; i < nodeCount; i++) {
    var n = DvtNBoxDataUtils.getNode(nbox, i);
    if (!DvtNBoxDataUtils.isNodeHidden(nbox, n)) {
      var nodeCellIndex = DvtNBoxDataUtils.getCellIndex(nbox, n);
      if (isNaN(nodeCounts[nodeCellIndex])) {
        nodeCounts[nodeCellIndex] = 0;
      }
      nodeCounts[nodeCellIndex]++;
    }
  }
  if (maximizedRow && maximizedColumn) {
    var maximizedCellIndex = DvtNBoxDataUtils.getColumnIndex(nbox, maximizedColumn) + columnCount * DvtNBoxDataUtils.getRowIndex(nbox, maximizedRow);
    var cellData = DvtNBoxDataUtils.getCell(nbox, maximizedCellIndex);
    var cellArea = cellData['__childArea'];

    labelSectionWidth = simpleLayout['labelSectionWidth'];
    if (labelSectionWidth == null) {
      if (options['labelTruncation'] != 'ifRequired') {
        labelSectionWidth = maximumLabelWidth + startLabelGap + nodeEndLabelGap;
      }
      else {
        var nodes = cellNodes[maximizedCellIndex];
        labelSectionWidth = Math.max(maximumLabelWidth, DvtNBoxNodeRenderer._getMaxLabelWidth(nbox, nodes)) + startLabelGap + nodeEndLabelGap;
      }
      labelSectionWidth = Math.min(labelSectionWidth, cellArea.w - indicatorSectionWidth - iconSectionWidth);
    }
    cellColumns = Math.floor((cellArea.w + gridGap) / (indicatorSectionWidth + iconSectionWidth + labelSectionWidth + gridGap));

    // check if labels are visible at calculated width
    if (node[NBoxConstants.LABEL]) {
      // temp container for checking if labels are visible
      var container = new Container();
      var labelVisible = false;
      var label = DvtNBoxStyleUtils.getNodeLabel(nbox, node);
      var labelHeight = label.getDimensions().h;
      if (TextUtils.fitText(label, labelSectionWidth - startLabelGap - nodeEndLabelGap, labelHeight, container)) {
        labelVisible = true;
      }
      if (node[NBoxConstants.SECONDARY_LABEL]) {
        var secondaryLabel = DvtNBoxStyleUtils.getNodeSecondaryLabel(nbox, node);
        var secondaryLabelHeight = secondaryLabel.getDimensions().h;
        if (TextUtils.fitText(secondaryLabel, labelSectionWidth - startLabelGap - nodeEndLabelGap, secondaryLabelHeight, container)) {
          labelVisible = true;
        }
      }
      if (!labelVisible) {
        labelSectionWidth = 0;
        if (node[NBoxConstants.COLOR]) {
          if ((!indicatorIcon || DvtNBoxStyleUtils.getNodeIndicatorColor(nbox, node)) &&
              (!icon || icon[NBoxConstants.SOURCE])) {
            // Swatch needed
            labelSectionWidth = Math.max(0, Math.min(nodeSwatchSize, cellArea.w - indicatorSectionWidth - iconSectionWidth));
          }
        }
      }
    }

    // calculate how much of the node indicator and node icon we have space for. limit if necessary
    if (cellArea.w - indicatorSectionWidth - iconSectionWidth < 0) {
      var iconWidth = iconSectionWidth;
      iconSectionWidth = Math.max(0, cellArea.w - indicatorSectionWidth);
    }
    if (cellArea.w - indicatorSectionWidth < 0) {
      indicatorSectionWidth = cellArea.w;
    }
    cellLayouts[maximizedCellIndex] = {'cellRows': -1, 'cellColumns': cellColumns, 'overflow': false};
  }
  else {
    // gather non-minimized cells
    var cellIndices = [];
    if (maximizedRow) {
      var maximizedRowIndex = DvtNBoxDataUtils.getRowIndex(nbox, maximizedRow);
      for (var c = 0; c < columnCount; c++) {
        cellIndices.push(c + maximizedRowIndex * columnCount);
      }
    }
    else if (maximizedColumn) {
      var maximizedColumnIndex = DvtNBoxDataUtils.getColumnIndex(nbox, maximizedColumn);
      for (var r = 0; r < rowCount; r++) {
        cellIndices.push(maximizedColumnIndex + r * columnCount);
      }
    }
    else {
      for (var i = 0; i < cellLayouts.length; i++) {
        cellIndices.push(i);
      }
    }

    // if node size is fixed, calculate cellRows and cellColumns
    if (simpleLayout['labelSectionWidth'] != null) {
      labelSectionWidth = simpleLayout['labelSectionWidth'];
      var cell = DvtNBoxDataUtils.getCell(nbox, cellIndices[0]);
      var cellArea = cell['__childArea'];
      cellRows = Math.floor((cellArea.h + gridGap) / (nodeHeight + gridGap));
      cellColumns = Math.floor((cellArea.w + gridGap) / (indicatorSectionWidth + iconSectionWidth + labelSectionWidth + gridGap));
    }
    else {
      var maxCellIndex = 0;
      // find most populated non-minimized cell to calculate node size
      for (var ci = 0; ci < cellIndices.length; ci++) {
        if (typeof(nodeCounts[cellIndices[ci]]) == 'number' && (nodeCounts[cellIndices[ci]] > nodeCounts[maxCellIndex] || typeof(nodeCounts[maxCellIndex]) != 'number')) {
          maxCellIndex = cellIndices[ci];
        }
      }
      if (options['labelTruncation'] != 'ifRequired') {

        var cell = DvtNBoxDataUtils.getCell(nbox, maxCellIndex);
        var cellArea = cell['__childArea'];
        var maxRows = Math.floor((cellArea.h + gridGap) / (nodeHeight + gridGap));
        var maxColumns = Math.floor((cellArea.w + gridGap) / (indicatorSectionWidth + iconSectionWidth + parseInt(options['__layout']['minimumLabelWidth']) + startLabelGap + nodeEndLabelGap + gridGap));
        if (maxRows * maxColumns < nodeCounts[maxCellIndex]) {
          labelSectionWidth = Math.floor(Math.min(parseInt(options['__layout']['maximumLabelWidth']) + startLabelGap + nodeEndLabelGap, (cellArea.w + gridGap) / maxColumns - (indicatorSectionWidth + iconSectionWidth + gridGap)));
          cellRows = maxRows;
          cellColumns = maxColumns;
        }
        else {
          var columnsPerRow = maxColumns;
          labelSectionWidth = Math.floor(Math.min(parseInt(options['__layout']['maximumLabelWidth']) + startLabelGap + nodeEndLabelGap, (cellArea.w + gridGap) / columnsPerRow - (indicatorSectionWidth + iconSectionWidth + gridGap)));
          while (labelSectionWidth < (parseInt(options['__layout']['maximumLabelWidth']) + startLabelGap + nodeEndLabelGap)) {
            if ((columnsPerRow - 1) * maxRows >= nodeCounts[maxCellIndex]) {
              columnsPerRow--;
              labelSectionWidth = Math.floor(Math.min(parseInt(options['__layout']['maximumLabelWidth']) + startLabelGap + nodeEndLabelGap, (cellArea.w + gridGap) / columnsPerRow - (indicatorSectionWidth + iconSectionWidth + gridGap)));
            }
            else {
              break;
            }
          }
          cellRows = maxRows;
          cellColumns = columnsPerRow;
        }
      }
      else {
        // with label truncation off, need to find width that fully displays all labels

        var cell = DvtNBoxDataUtils.getCell(nbox, cellIndices[0]);
        var cellArea = cell['__childArea'];
        var maxRows = Math.floor((cellArea.h + gridGap) / (nodeHeight + gridGap));
        var maxColumns = Math.floor((cellArea.w + gridGap) / (indicatorSectionWidth + iconSectionWidth + parseInt(options['__layout']['minimumLabelWidth']) + startLabelGap + nodeEndLabelGap + gridGap));

        // use all vertical space to allow more horizontal space for labels
        cellRows = maxRows;
        cellColumns = 0;

        // keep track of widest label encountered
        var widestLabel = 0;

        // keep track of how many nodes we've checked for each cell
        var startIndex = 0;

        // find number of columns we can show without truncating.  start at 1, build up.
        while (cellColumns <= maxColumns) {
          cellColumns++;

          // max label width for given # of columns
          var maxLabelWidth = Math.floor((cellArea.w + gridGap) / cellColumns - (indicatorSectionWidth + iconSectionWidth + gridGap));
          // if a wider label has already been found, previous # of columns is all we can fit
          if (widestLabel > maxLabelWidth) {
            cellColumns = Math.max(cellColumns - 1, 1);
            break;
          }

          // number of nodes that can be displayed in each cell for given # of columns
          var maxNodes = cellColumns * cellRows;

          var nodeArray = [];
          for (var r = 0; r < rowCount; r++) {
            for (var c = 0; c < columnCount; c++) {
              var cellIndex = DvtNBoxDataUtils.getColumnIndex(nbox, c) + columnCount * DvtNBoxDataUtils.getRowIndex(nbox, r);
              var nodes = cellNodes[cellIndex];
              // skip cell if no nodes
              if (!nodes || !nodes.length) {
                continue;
              }


              // number of nodes displayed in this cell given # of columns
              var numNodes = Math.min(nodes.length, maxNodes);
              // subtract 1 for overflow
              if (nodes.length > maxNodes)
                numNodes--;

              for (var n = startIndex; n < numNodes; n++) {
                nodeArray.push(nodes[n]);
              }
            }
          }

          widestLabel = Math.max(widestLabel, Math.ceil(DvtNBoxNodeRenderer._getMaxLabelWidth(nbox, nodeArray) + startLabelGap + nodeEndLabelGap));

          if (widestLabel > maxLabelWidth) {
            cellColumns = Math.max(cellColumns - 1, 1);
            break;
          }

          // stop increasing columns if we can already fit all nodes
          if (maxNodes >= nodeCounts[maxCellIndex]) {
            break;
          }

          // update start index to avoid checking same labels
          startIndex = maxNodes;
        }

        // recalculate max width for final # of columns
        maxLabelWidth = Math.floor((cellArea.w + gridGap) / cellColumns - (indicatorSectionWidth + iconSectionWidth + gridGap));
        // if widest label can't fit, use maximum
        if (widestLabel > maxLabelWidth) {
          labelSectionWidth = maxLabelWidth;
        }
        // otherwise extend label, up to maximumLabelWidth
        else {
          labelSectionWidth = Math.max(widestLabel, Math.min(maxLabelWidth, maximumLabelWidth + startLabelGap + nodeEndLabelGap));
        }

        if (labelSectionWidth < parseInt(options['__layout']['minimumLabelWidth'])) {
          cellColumns = 0;
        }
      }
    }
    for (var ci = 0; ci < cellIndices.length; ci++) {
      var cellIndex = cellIndices[ci];
      var overflow = false;
      if (nodeCounts[cellIndex] > cellRows * cellColumns) {
        overflow = true;
      }
      cellLayouts[cellIndex] = {'cellRows': cellRows, 'cellColumns': cellColumns, 'overflow': overflow};
    }
  }


  var nodeLayout = {'nodeHeight': nodeHeight,
    'indicatorSectionWidth': indicatorSectionWidth,
    'iconSectionWidth': iconSectionWidth,
    'iconWidth': iconWidth,
    'labelSectionWidth': labelSectionWidth,
    'cellLayouts': cellLayouts};
  options['__layout']['__nodeLayout'] = nodeLayout;
  return nodeLayout;
};


/**
 * Calculates sizes related to node layout, based upon the first specified node
 * (Assumes that the nodes are specified homogeneously)
 * @param {NBox} nbox the nbox component
 * @param {object} data the drawer data
 * @param {array} nodes drawer nodes
 * @return {object} an object containing the calculated sizes
 */
DvtNBoxNodeRenderer.calculateNodeDrawerLayout = function(nbox, data, nodes) {
  var options = nbox.getOptions();
  var gridGap = parseInt(options['__layout']['gridGap']);
  var nodeStartLabelGap = options['__layout']['nodeStartLabelGap'];
  var nodeLabelOnlyStartLabelGap = options['__layout']['nodeLabelOnlyStartLabelGap'];
  var nodeEndLabelGap = options['__layout']['nodeEndLabelGap'];
  var nodeSwatchSize = options['__layout']['nodeSwatchSize'];
  var maximumLabelWidth = parseInt(options['__layout']['maximumLabelWidth']);


  var node = DvtNBoxDataUtils.getNode(nbox, 0);
  var indicatorIcon = DvtNBoxStyleUtils.getIndicatorIcon(nbox, node);
  var icon = DvtNBoxStyleUtils.getIcon(nbox, node);

  var simpleLayout = DvtNBoxNodeRenderer._calculateSimpleNodeLayout(nbox);
  var nodeHeight = simpleLayout['nodeHeight'];
  var indicatorSectionWidth = simpleLayout['indicatorSectionWidth'];
  var iconSectionWidth = simpleLayout['iconSectionWidth'];
  var startLabelGap = (indicatorSectionWidth || iconSectionWidth) ? nodeStartLabelGap : nodeLabelOnlyStartLabelGap;
  var labelSectionWidth;
  var childArea = data['__childArea'];

  labelSectionWidth = simpleLayout['labelSectionWidth'];
  if (labelSectionWidth == null) {
    if (options['labelTruncation'] != 'ifRequired') {
      labelSectionWidth = maximumLabelWidth + startLabelGap + nodeEndLabelGap;
    }
    else {
      labelSectionWidth = Math.max(maximumLabelWidth, DvtNBoxNodeRenderer._getMaxLabelWidth(nbox, nodes)) + startLabelGap + nodeEndLabelGap;
    }
    labelSectionWidth = Math.min(labelSectionWidth, childArea.w - indicatorSectionWidth - iconSectionWidth);
  }
  var columns = Math.floor((childArea.w + gridGap) / (indicatorSectionWidth + iconSectionWidth + labelSectionWidth + gridGap));

  // check if labels are visible at calculated width
  if (node[NBoxConstants.LABEL]) {
    // temp container for checking if labels are visible
    var container = new Container();
    var labelVisible = false;
    var label = DvtNBoxStyleUtils.getNodeLabel(nbox, node);
    var labelHeight = label.getDimensions().h;
    if (TextUtils.fitText(label, labelSectionWidth - startLabelGap - nodeEndLabelGap, labelHeight, container)) {
      labelVisible = true;
    }
    if (node[NBoxConstants.SECONDARY_LABEL]) {
      var secondaryLabel = DvtNBoxStyleUtils.getNodeSecondaryLabel(nbox, node);
      var secondaryLabelHeight = secondaryLabel.getDimensions().h;
      if (TextUtils.fitText(secondaryLabel, labelSectionWidth - startLabelGap - nodeEndLabelGap, secondaryLabelHeight, container)) {
        labelVisible = true;
      }
    }
    if (!labelVisible) {
      labelSectionWidth = 0;
      if (node[NBoxConstants.COLOR]) {
        if ((!indicatorIcon || DvtNBoxStyleUtils.getNodeIndicatorColor(nbox, node)) &&
            (!icon || icon[NBoxConstants.SOURCE])) {
          // Swatch needed
          labelSectionWidth = Math.max(0, Math.min(nodeSwatchSize, childArea.w - indicatorSectionWidth - iconSectionWidth));
        }
      }
    }
  }

  // calculate how much of the node indicator and node icon we have space for. limit if necessary
  if (childArea.w - indicatorSectionWidth - iconSectionWidth < 0) {
    var iconWidth = iconSectionWidth;
    iconSectionWidth = Math.max(0, childArea.w - indicatorSectionWidth); }
  if (childArea.w - indicatorSectionWidth < 0) {
    indicatorSectionWidth = childArea.w;
  }
  var nodeDrawerLayout = {'nodeHeight': nodeHeight,
    'indicatorSectionWidth': indicatorSectionWidth,
    'iconSectionWidth': iconSectionWidth,
    'iconWidth': iconWidth,
    'labelSectionWidth': labelSectionWidth,
    'drawerLayout': {'rows': -1, 'columns': columns}};
  options['__layout']['__nodeDrawerLayout'] = nodeDrawerLayout;
  return nodeDrawerLayout;

};


/**
 * @private
 * Calculates sizes related to node layout, based upon the first specified node
 * (Assumes that the nodes are specified homogeneously)
 * @param {NBox} nbox the nbox component
 * @return {object} an object containing the calculated sizes
 */
DvtNBoxNodeRenderer._calculateSimpleNodeLayout = function(nbox) {
  var options = nbox.getOptions();
  var nodeIndicatorGap = options['__layout']['nodeIndicatorGap'];
  var nodeSingleLabelGap = parseInt(options['__layout']['nodeSingleLabelGap']);
  var nodeDualLabelGap = parseInt(options['__layout']['nodeDualLabelGap']);
  var nodeInterLabelGap = options['__layout']['nodeInterLabelGap'];
  var nodeSwatchSize = options['__layout']['nodeSwatchSize'];

  var node = DvtNBoxDataUtils.getNode(nbox, 0);
  var nodeHeight = 0;
  var indicatorSectionWidth = 0;
  var iconSectionWidth = 0;
  var labelSectionWidth = null;
  var indicatorIcon = DvtNBoxStyleUtils.getIndicatorIcon(nbox, node);
  var indicatorColor = DvtNBoxStyleUtils.getNodeIndicatorColor(nbox, node);
  var icon = DvtNBoxStyleUtils.getIcon(nbox, node);
  if (indicatorIcon) {
    var indicatorIconWidth = indicatorIcon[NBoxConstants.WIDTH];
    var indicatorIconHeight = indicatorIcon[NBoxConstants.HEIGHT];
    indicatorSectionWidth = indicatorIconWidth + 2 * nodeIndicatorGap;
    nodeHeight = Math.max(nodeHeight, indicatorIconHeight + 2 * nodeIndicatorGap);
  }
  else if (indicatorColor) {
    indicatorSectionWidth = nodeSwatchSize;
  }
  if (node[NBoxConstants.LABEL]) {
    var label = DvtNBoxStyleUtils.getNodeLabel(nbox, node);
    var labelHeight = label.getDimensions().h;
    nodeHeight = Math.max(nodeHeight, labelHeight + 2 * nodeSingleLabelGap);
    if (node[NBoxConstants.SECONDARY_LABEL]) {
      var secondaryLabel = DvtNBoxStyleUtils.getNodeSecondaryLabel(nbox, node);
      var secondaryLabelHeight = secondaryLabel.getDimensions().h;
      nodeHeight = Math.max(nodeHeight, labelHeight + secondaryLabelHeight + 2 * nodeDualLabelGap + nodeInterLabelGap);
    }
  }
  else {
    labelSectionWidth = 0;
    // Is there a data color to show?
    if (node[NBoxConstants.COLOR]) {
      if ((!indicatorIcon || DvtNBoxStyleUtils.getNodeIndicatorColor(nbox, node)) &&
          (!icon || icon[NBoxConstants.SOURCE])) {
        // Swatch needed
        labelSectionWidth = indicatorSectionWidth ? indicatorSectionWidth : nodeSwatchSize;
      }
    }
  }
  if (icon) {
    var preferredSize = Math.max(nodeHeight, node[NBoxConstants.LABEL] ? (Agent.isTouchDevice() ? icon['preferredSizeTouch'] : icon['preferredSize']) : parseInt(icon['preferredSizeNoLabel']));
    var padding = (icon[NBoxConstants.SOURCE] ? icon['sourcePaddingRatio'] : icon['shapePaddingRatio']) * preferredSize;
    var iconWidth = (icon[NBoxConstants.WIDTH] ? icon[NBoxConstants.WIDTH] : preferredSize - 2 * padding);
    var iconHeight = (icon[NBoxConstants.HEIGHT] ? icon[NBoxConstants.HEIGHT] : preferredSize - 2 * padding);
    iconSectionWidth = iconWidth + 2 * padding;
    nodeHeight = Math.max(nodeHeight, iconHeight + 2 * padding);
  }
  return {'nodeHeight': nodeHeight,
    'indicatorSectionWidth': indicatorSectionWidth,
    'iconSectionWidth': iconSectionWidth,
    'labelSectionWidth': labelSectionWidth};
};


/**
 * @private
 * Renders the node background
 * @param {NBox} nbox
 * @param {object} node the node data being rendered
 * @param {DvtNBoxNode} nodeContainer the container for the node contents
 * @param {object} nodeLayout an object containing dimensions of the various node sections
 */
DvtNBoxNodeRenderer._renderNodeBackground = function(nbox, node, nodeContainer, nodeLayout) {
  var width = nodeLayout['indicatorSectionWidth'] + nodeLayout['iconSectionWidth'] + nodeLayout['labelSectionWidth'];

  var height = nodeLayout['nodeHeight'];
  var borderRadius = DvtNBoxStyleUtils.getNodeBorderRadius(nbox);

  var hoverColor = DvtNBoxStyleUtils.getNodeHoverColor(nbox);
  var selectionColor = DvtNBoxStyleUtils.getNodeSelectionColor(nbox);

  var selectionRect = new Rect(nbox.getCtx(),
      0,
      0,
      width,
      height);
  selectionRect.setFill(null);
  if (borderRadius) {
    selectionRect.setRx(borderRadius);
    selectionRect.setRy(borderRadius);
  }
  selectionRect.setHoverStroke(new Stroke(hoverColor, 1, 2), new Stroke(selectionColor, 1, 4));
  selectionRect.setSelectedStroke(new Stroke(selectionColor, 1, 4), null);
  selectionRect.setSelectedHoverStroke(new Stroke(hoverColor, 1, 2), new Stroke(selectionColor, 1, 6));
  nodeContainer.addChild(selectionRect);
  nodeContainer.setSelectionShape(selectionRect);
  var nodeRect = new Rect(nbox.getCtx(),
      0,
      0,
      width,
      height);
  if (borderRadius) {
    nodeRect.setRx(borderRadius);
    nodeRect.setRy(borderRadius);
  }
  var color = DvtNBoxStyleUtils.getNodeColor(nbox, node);
  nodeRect.setSolidFill(color);
  if (DvtNBoxStyleUtils.getNodeBorderColor(nbox, node) && DvtNBoxStyleUtils.getNodeBorderWidth(nbox, node))
    nodeRect.setSolidStroke(DvtNBoxStyleUtils.getNodeBorderColor(nbox, node), null, DvtNBoxStyleUtils.getNodeBorderWidth(nbox, node));
  var style = node['svgStyle'] || node['style'];
  var className = node['svgClassName'] || node['className'];
  nodeRect.setStyle(style).setClassName(className);
  nodeContainer.addChild(nodeRect);
  DvtNBoxUtils.setDisplayable(nbox, node, nodeRect, 'background');
};


/**
 * @private
 * Renders the node indicator
 * @param {NBox} nbox
 * @param {object} node the node data being rendered
 * @param {DvtNBoxNode} nodeContainer the container for the node contents
 * @param {object} nodeLayout an object containing dimensions of the various node sections
 */
DvtNBoxNodeRenderer._renderNodeIndicator = function(nbox, node, nodeContainer, nodeLayout) {
  var color = DvtNBoxStyleUtils.getNodeColor(nbox, node);
  var contrastColor = ColorUtils.getContrastingTextColor(color);

  var rtl = Agent.isRightToLeft(nbox.getCtx());
  var indicatorX = rtl ? nodeLayout['labelSectionWidth'] + nodeLayout['iconSectionWidth'] : 0;

  var indicatorColor = DvtNBoxStyleUtils.getNodeIndicatorColor(nbox, node);
  if (indicatorColor) {
    // Render the indicator background swatch
    contrastColor = ColorUtils.getContrastingTextColor(indicatorColor);
    var bgRect = new Rect(nbox.getCtx(), indicatorX, 0, nodeLayout['indicatorSectionWidth'], nodeLayout['nodeHeight']);
    bgRect.setSolidFill(indicatorColor);
    DvtNBoxNodeRenderer._clipIfNecessary(nbox, bgRect, nodeLayout);
    nodeContainer.addChild(bgRect);
    DvtNBoxUtils.setDisplayable(nbox, node, bgRect, NBoxConstants.INDICATOR);
  }
  var indicatorIcon = DvtNBoxStyleUtils.getIndicatorIcon(nbox, node);
  if (indicatorIcon) {
    var indicatorIconWidth = indicatorIcon[NBoxConstants.WIDTH];
    var indicatorIconHeight = indicatorIcon[NBoxConstants.HEIGHT];
    var indicatorIconX = indicatorX + nodeLayout['indicatorSectionWidth'] / 2;
    var indicatorIconY = nodeLayout['nodeHeight'] / 2;
    var indicatorIconWidthWithStroke = indicatorIconWidth;


    var indicatorIconColor = indicatorIcon[NBoxConstants.COLOR] ? indicatorIcon[NBoxConstants.COLOR] : contrastColor;
    var indicatorMarker;
    var indicatorIconBorderColor = indicatorIcon[NBoxConstants.BORDER_COLOR];
    var indicatorIconBorderWidth = indicatorIcon[NBoxConstants.BORDER_WIDTH];
    var indicatorIconBorderRadius = indicatorIcon[NBoxConstants.BORDER_RADIUS];
    var indicatorIconPattern = indicatorIcon[NBoxConstants.PATTERN];
    if (indicatorIcon[NBoxConstants.SOURCE]) {
      indicatorMarker = new ImageMarker(nbox.getCtx(),
          indicatorIconX, indicatorIconY,
          indicatorIconWidth, indicatorIconHeight,
          indicatorIconBorderRadius,
          indicatorIcon[NBoxConstants.SOURCE]);
      indicatorMarker.setPreserveAspectRatio(DvtNBoxNodeRenderer._ASPECT_RATIO_SCALING);
    }
    else {
      indicatorMarker = new SimpleMarker(nbox.getCtx(),
          indicatorIcon[NBoxConstants.SHAPE],
          indicatorIconX, indicatorIconY,
          indicatorIconWidth, indicatorIconHeight,
          indicatorIconBorderRadius);

      if (indicatorIconBorderWidth > 0) indicatorIconWidthWithStroke += indicatorIconBorderWidth;
    }

    if (indicatorIconBorderWidth)
      indicatorMarker.setSolidStroke(indicatorIconBorderColor, null, indicatorIconBorderWidth);

    if (indicatorIconPattern != 'none')
      indicatorMarker.setFill(new PatternFill(indicatorIconPattern, indicatorIconColor, color));
    else
      indicatorMarker.setSolidFill(indicatorIconColor);

    //Set the Indicator marker custom style and class name
    var style = indicatorIcon['svgStyle'] || indicatorIcon['style'];
    var className = indicatorIcon['svgClassName'] || indicatorIcon['className'];
    indicatorMarker.setStyle(style).setClassName(className);

    // If indicatorIcon is too wide, add clip path
    if (indicatorIconWidthWithStroke > nodeLayout['indicatorSectionWidth']) {
      // If we need 2 clip paths, add to node childContainer
      if (indicatorIconBorderRadius && indicatorIcon[NBoxConstants.SOURCE]) {
        var childContainer = nodeContainer.getChildContainer(true);
        childContainer.addChild(indicatorMarker);
      }
      else {
        DvtNBoxNodeRenderer._clipIfNecessary(nbox, indicatorMarker, nodeLayout);
        nodeContainer.addChild(indicatorMarker);
      }
    }
    else {
      nodeContainer.addChild(indicatorMarker);
    }

    DvtNBoxUtils.setDisplayable(nbox, node, indicatorMarker, NBoxConstants.INDICATOR_ICON);
  }
};


/**
 * @private
 * Renders the node icon
 * @param {NBox} nbox
 * @param {object} node the node data being rendered
 * @param {DvtNBoxNode} nodeContainer the container for the node contents
 * @param {object} nodeLayout an object containing dimensions of the various node sections
 */
DvtNBoxNodeRenderer._renderNodeIcon = function(nbox, node, nodeContainer, nodeLayout) {
  var options = nbox.getOptions();
  var color = DvtNBoxStyleUtils.getNodeColor(nbox, node);
  var contrastColor = ColorUtils.getContrastingTextColor(color);

  var rtl = Agent.isRightToLeft(nbox.getCtx());

  var icon = DvtNBoxStyleUtils.getIcon(nbox, node);
  if (icon) {
    var padding = (icon[NBoxConstants.SOURCE] || icon[NBoxConstants.INITIALS] ? icon['sourcePaddingRatio'] : icon['shapePaddingRatio']) * nodeLayout['nodeHeight'];

    var iconWidth = icon[NBoxConstants.WIDTH] ? icon[NBoxConstants.WIDTH] : nodeLayout['iconWidth'] ? nodeLayout['iconWidth'] : (nodeLayout['iconSectionWidth'] - 2 * padding);
    var iconHeight = icon[NBoxConstants.HEIGHT] ? icon[NBoxConstants.HEIGHT] : (nodeLayout['nodeHeight'] - 2 * padding);
    var iconX = nodeLayout[rtl ? 'labelSectionWidth' : 'indicatorSectionWidth'] + Math.max(nodeLayout['iconSectionWidth'] / 2, nodeLayout['iconWidth'] ? nodeLayout['iconWidth'] / 2 : 0);
    var iconY = nodeLayout['nodeHeight'] / 2;

    var iconColor = icon[NBoxConstants.COLOR] ? icon[NBoxConstants.COLOR] : contrastColor;
    var iconMarker;
    var iconInitials;
    var iconBorderColor = icon[NBoxConstants.BORDER_COLOR];
    var iconBorderWidth = icon[NBoxConstants.BORDER_WIDTH];
    var iconBorderRadius = icon[NBoxConstants.BORDER_RADIUS];
    var iconPattern = icon[NBoxConstants.PATTERN];
    var iconSource = icon[NBoxConstants.SOURCE];
    var iconBackground = options['_resources']['background_' + icon[NBoxConstants.BACKGROUND]];
    if (iconSource) {
      iconMarker = new ImageMarker(nbox.getCtx(),
          iconX,
          iconY,
          iconWidth,
          iconHeight,
          iconBorderRadius,
          iconSource);
      iconMarker.setPreserveAspectRatio(DvtNBoxNodeRenderer._ASPECT_RATIO_SCALING);
    }
    else if(icon[NBoxConstants.INITIALS]) {
      var iconBackgroundSrc= iconBackground['src'];
      var hasSource = ToolkitUtils.getImageUrl(nbox.getCtx(), iconBackgroundSrc).includes('.');
      iconMarker = new SimpleMarker(nbox.getCtx(),
          null,
          iconX,
          iconY,
          iconWidth,
          iconHeight);
        var bgColor = icon[NBoxConstants.BACKGROUND];
        iconMarker.setClassName('oj-nbox-node-initials-bg-color' +
          (bgColor === 'neutral' ? ' oj-nbox-node-initials-neutral'
          : ' oj-avatar-bg-' + bgColor + ' oj-nbox-node-initials-' + bgColor));
      if (hasSource) {
        var iconContainer = new Container(nbox.getCtx());
        var iconBackgroundSize = icon['backgroundSize'];
        var backgroundMarker =  new ImageMarker(nbox.getCtx(),
          iconX,
          iconY,
          parseInt(iconBackgroundSize),
          parseInt(iconBackgroundSize),
          iconBorderRadius,
          iconBackground['src']);
        backgroundMarker.setClipPath(DvtNBoxNodeRenderer._getIconClipPath(nbox, iconX, iconY, iconWidth, iconHeight));
        iconContainer.addChild(iconMarker);
        iconContainer.addChild(backgroundMarker);
        backgroundMarker.setClassName('oj-nbox-node-initials-background-pattern');
        iconMarker = iconContainer;
      }

      iconInitials = DvtNBoxUtils.createText(nbox.getCtx(), icon[NBoxConstants.INITIALS], null, OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_CENTRAL);
      DvtNBoxUtils.positionText(iconInitials, iconX, iconY);
      // Use small initials if there's only primary label or no height specified for no labels
      (node[NBoxConstants.LABEL] && !node[NBoxConstants.SECONDARY_LABEL]) ||
        (!node[NBoxConstants.LABEL] && parseInt(options[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.NODE_DEFAULTS]['height']) > 0)
      ? iconInitials.setClassName('oj-nbox-node-initials') : iconInitials.setClassName('oj-nbox-node-initials oj-nbox-node-initials-lg');
    }
    else {
      iconMarker = new SimpleMarker(nbox.getCtx(),
          icon[NBoxConstants.SHAPE],
          iconX,
          iconY,
          iconWidth - iconBorderWidth,
          iconHeight - iconBorderWidth,
          iconBorderRadius);
    }

    if (iconBorderWidth)
      iconMarker.setSolidStroke(iconBorderColor, null, iconBorderWidth);

    if (iconPattern != 'none')
      iconMarker.setFill(new PatternFill(iconPattern, iconColor, color));
    else
      iconMarker.setSolidFill(iconColor);

    if(!icon[NBoxConstants.INITIALS]) {
      //set the Icon Marker custom style and class name only if initials are not applied
      var style = icon['svgStyle'] || icon['style'];
      var className = icon['svgClassName'] || icon['className'];
      iconMarker.setStyle(style).setClassName(className);
    }

    // If icon is on one of the ends, add clip path
    if (nodeLayout['indicatorSectionWidth'] == 0 || nodeLayout['labelSectionWidth'] == 0) {
      // If we need 2 clip paths, add to node childContainer
      if (iconBorderRadius && icon[NBoxConstants.SOURCE]) {
        var childContainer = nodeContainer.getChildContainer(true);
        childContainer.addChild(iconMarker);
      }
      else {
        DvtNBoxNodeRenderer._clipIfNecessary(nbox, iconMarker, nodeLayout);
        nodeContainer.addChild(iconMarker);
      }
    }
    else {
      nodeContainer.addChild(iconMarker);
    }

    DvtNBoxUtils.setDisplayable(nbox, node, iconMarker, NBoxConstants.ICON);
    if(iconInitials) {
      nodeContainer.addChild(iconInitials);
    }
  }
};


/**
 * @private
 * Renders the node labels
 * @param {NBox} nbox
 * @param {object} node the node data being rendered
 * @param {DvtNBoxNode} nodeContainer the container for the node contents
 * @param {object} nodeLayout an object containing dimensions of the various node sections
 */
DvtNBoxNodeRenderer._renderNodeLabels = function(nbox, node, nodeContainer, nodeLayout) {
  var options = nbox.getOptions();
  var nodeInterLabelGap = options['__layout']['nodeInterLabelGap'];
  var nodeLabelOnlyStartLabelGap = options['__layout']['nodeLabelOnlyStartLabelGap'];
  var nodeStartLabelGap = options['__layout']['nodeStartLabelGap'];
  var nodeEndLabelGap = options['__layout']['nodeEndLabelGap'];
  var startLabelGap = nodeLayout['indicatorSectionWidth'] || nodeLayout['iconSectionWidth'] ? nodeStartLabelGap : nodeLabelOnlyStartLabelGap;
  var color = DvtNBoxStyleUtils.getNodeColor(nbox, node);
  var contrastColor = ColorUtils.getContrastingTextColor(color);

  var rtl = Agent.isRightToLeft(nbox.getCtx());
  var labelX = rtl ? nodeLayout['labelSectionWidth'] - startLabelGap : nodeLayout['indicatorSectionWidth'] + nodeLayout['iconSectionWidth'] + startLabelGap;

  if (node[NBoxConstants.LABEL]) {
    var label = DvtNBoxStyleUtils.getNodeLabel(nbox, node);
    var labelHeight = label.getDimensions().h;
    if (TextUtils.fitText(label, nodeLayout['labelSectionWidth'] - startLabelGap - nodeEndLabelGap, labelHeight, nodeContainer)) {
      DvtNBoxUtils.positionText(label, labelX, nodeLayout['nodeHeight'] / 2);
      (label.getCSSStyle() && label.getCSSStyle().getStyle('color')) ?
          label.setSolidFill(label.getCSSStyle().getStyle('color')) : label.setSolidFill(contrastColor);
      DvtNBoxUtils.setDisplayable(nbox, node, label, NBoxConstants.LABEL);
    }
    if (node[NBoxConstants.SECONDARY_LABEL]) {
      var secondaryLabel = DvtNBoxStyleUtils.getNodeSecondaryLabel(nbox, node);
      var secondaryLabelHeight = secondaryLabel.getDimensions().h;
      if (TextUtils.fitText(secondaryLabel, nodeLayout['labelSectionWidth'] - startLabelGap - nodeEndLabelGap, secondaryLabelHeight, nodeContainer)) {
        var yOffset = (nodeLayout['nodeHeight'] - labelHeight - secondaryLabelHeight - nodeInterLabelGap) / 2;
        DvtNBoxUtils.positionText(label, labelX, yOffset + labelHeight / 2);
        DvtNBoxUtils.positionText(secondaryLabel, labelX, yOffset + labelHeight + nodeInterLabelGap + secondaryLabelHeight / 2);
        (secondaryLabel.getCSSStyle() && secondaryLabel.getCSSStyle().getStyle('color')) ?
            secondaryLabel.setSolidFill(secondaryLabel.getCSSStyle().getStyle('color')) : secondaryLabel.setSolidFill(contrastColor);
        DvtNBoxUtils.setDisplayable(nbox, node, secondaryLabel, NBoxConstants.SECONDARY_LABEL);
      }
    }
  }
};


/**
 * @private
 * Returns max label width of given nodes
 * @param {NBox} nbox
 * @param {array} nodes the array of DvtNBoxNodes to check labels for
 *
 * @return {nnumber} max label width
 */
DvtNBoxNodeRenderer._getMaxLabelWidth = function(nbox, nodes) {
  var nodeLabels = [];
  for (var n = 0; n < nodes.length; n++) {
    var node = nodes[n];
    nodeLabels.push(DvtNBoxStyleUtils.getNodeLabel(nbox, node));
    nodeLabels.push(DvtNBoxStyleUtils.getNodeSecondaryLabel(nbox, node));
  }
  return TextUtils.getMaxTextDimensions(nodeLabels).w;
};

/**
 * @private
 * Conditionally adds a clip path to the specified displayable if a border radius has been specified.
 *
 * @param {NBox} nbox
 * @param {dvt.Displayable} displayable
 * @param {object} nodeLayout an object containing dimensions of the various node sections
 */
DvtNBoxNodeRenderer._clipIfNecessary = function(nbox, displayable, nodeLayout) {
  var clipPath = nbox.getNodeClipPath();
  if (!clipPath) {
    var borderRadius = DvtNBoxStyleUtils.getNodeBorderRadius(nbox);
    borderRadius = borderRadius < DvtNBoxNodeRenderer._MIN_CORNER_RADIUS ? 0 : borderRadius;
    if (!borderRadius) {
      return;
    }
    var nodeWidth = nodeLayout['indicatorSectionWidth'] + nodeLayout['iconSectionWidth'] + nodeLayout['labelSectionWidth'];
    var nodeHeight = nodeLayout['nodeHeight'];
    var clipPath = new ClipPath();
    clipPath.addRect(0, 0, nodeWidth, nodeHeight, borderRadius, borderRadius);
    nbox.setNodeClipPath(clipPath);
  }
  displayable.setClipPath(clipPath);
};

/**
 * @private
 * Returns the Icon Background Clip Path
 *
 * @param {NBox} nbox
 * @param {number} x center of the clippath
 * @param {number} y center of the clippath
 * @param {number} width
 * @param {number} height
 * @return {dvt.clipPath} node icon clip path
 */
DvtNBoxNodeRenderer._getIconClipPath = function(nbox, x, y, width, height) {
  var clipPath = nbox.getNodeIconClipPath();
  if (!clipPath) {
    clipPath = new ClipPath();
    clipPath.addRect(x - (width / 2), y - (height / 2), width, height);
    nbox.setNodeIconClipPath(clipPath);
  }
  return clipPath;
};

/**
 * @override
 */
DvtNBoxNodeRenderer.animateUpdate = function(animationHandler, oldNode, newNode) {
  var oldNBox = animationHandler.getOldNBox();
  var newNBox = animationHandler.getNewNBox();

  var oldGlobalMatrix = DvtNBoxUtils.getGlobalMatrix(oldNode);
  var newGlobalMatrix = DvtNBoxUtils.getGlobalMatrix(newNode);
  var newMatrix = newNode.getMatrix();
  var parent = newNode.getParent();
  oldNode.setAlpha(0);
  animationHandler.getNewNBox().addChild(newNode);
  newNode.setMatrix(oldGlobalMatrix);


  var oldScrollContainer = DvtNBoxDataUtils.getNodeScrollableContainer(oldNBox, oldNode);
  var newScrollContainer = DvtNBoxDataUtils.getNodeScrollableContainer(newNBox, newNode);
  if (oldScrollContainer || newScrollContainer) {
    var clipPath = new ClipPath();
    var rect;
    if (oldScrollContainer) {
      var oldScrollMatrix = DvtNBoxUtils.getGlobalMatrix(oldScrollContainer);
      var oldScrollRect = new Rectangle(oldScrollMatrix.getTx(), oldScrollMatrix.getTy(), oldScrollContainer.getWidth(), oldScrollContainer.getHeight());

      var oldCellIndex = DvtNBoxDataUtils.getCellIndex(oldNBox, oldNode.getData());
      var oldCell = DvtNBoxDataUtils.getCell(oldNBox, oldCellIndex);
      var oldCellBackground = DvtNBoxUtils.getDisplayable(oldNBox, oldCell, 'background');
      var oldCellMatrix = DvtNBoxUtils.getGlobalMatrix(oldCellBackground);
      var oldCellRect = new Rectangle(oldCellMatrix.getTx(), oldCellMatrix.getTy(), oldCellBackground.getWidth(), oldCellBackground.getHeight());

      rect = oldScrollRect.getUnion(oldCellRect);
    }

    if (newScrollContainer) {
      var newScrollMatrix = DvtNBoxUtils.getGlobalMatrix(newScrollContainer);
      var newScrollRect = new Rectangle(newScrollMatrix.getTx(), newScrollMatrix.getTy(), newScrollContainer.getWidth(), newScrollContainer.getHeight());

      var newCellIndex = DvtNBoxDataUtils.getCellIndex(newNBox, newNode.getData());
      var newCell = DvtNBoxDataUtils.getCell(newNBox, newCellIndex);
      var newCellBackground = DvtNBoxUtils.getDisplayable(newNBox, newCell, 'background');
      var newCellMatrix = DvtNBoxUtils.getGlobalMatrix(newCellBackground);
      var newCellRect = new Rectangle(newCellMatrix.getTx(), newCellMatrix.getTy(), newCellBackground.getWidth(), newCellBackground.getHeight());

      var newRect = newScrollRect.getUnion(newCellRect);
      rect = rect ? rect.getUnion(newRect) : newRect;
    }

    if (rect) {
      clipPath.addRect(rect.x, rect.y, rect.w, rect.h);
      newNode.setClipPath(clipPath);
    }
  }

  var movePlayable = new AnimMoveTo(newNode.getCtx(), newNode, new Point(newGlobalMatrix.getTx(), newGlobalMatrix.getTy()), animationHandler.getAnimationDuration());
  Playable.appendOnEnd(movePlayable, function() {parent.addChild(newNode); newNode.setMatrix(newMatrix); newNode.setClipPath(null);});
  animationHandler.add(movePlayable, DvtNBoxDataAnimationHandler.UPDATE);

  // Colors
  var playable = new CustomAnimation(newNBox.getCtx(), newNode, animationHandler.getAnimationDuration());
  DvtNBoxNodeRenderer._animateFill(playable, oldNBox, newNBox, oldNode, newNode, 'background');
  DvtNBoxNodeRenderer._animateFill(playable, oldNBox, newNBox, oldNode, newNode, NBoxConstants.LABEL);
  DvtNBoxNodeRenderer._animateFill(playable, oldNBox, newNBox, oldNode, newNode, NBoxConstants.SECONDARY_LABEL);
  DvtNBoxNodeRenderer._animateFill(playable, oldNBox, newNBox, oldNode, newNode, NBoxConstants.INDICATOR);
  DvtNBoxNodeRenderer._animateFill(playable, oldNBox, newNBox, oldNode, newNode, NBoxConstants.INDICATOR_ICON);
  DvtNBoxNodeRenderer._animateFill(playable, oldNBox, newNBox, oldNode, newNode, NBoxConstants.ICON);
  animationHandler.add(playable, DvtNBoxDataAnimationHandler.UPDATE);
};


/**
 * @private
 * Helper to animate between fills
 *
 * @param {dvt.Playable} playable The playable to add the animation to
 * @param {object} oldNBox an object representing the old NBox state
 * @param {NBox} newNBox the new NBox
 * @param {DvtNBoxNode} oldNode the old node
 * @param {DvtNBoxNode} newNode the new node
 * @param {string} displayableKey the key to use for looking up the sub displayable
 */
DvtNBoxNodeRenderer._animateFill = function(playable, oldNBox, newNBox, oldNode, newNode, displayableKey) {
  var oldDisplayable = DvtNBoxUtils.getDisplayable(oldNBox, oldNode.getData(), displayableKey);
  var newDisplayable = DvtNBoxUtils.getDisplayable(newNBox, newNode.getData(), displayableKey);
  if (oldDisplayable && newDisplayable && newDisplayable.getFill() instanceof SolidFill && !newDisplayable.getFill().equals(oldDisplayable.getFill())) {
    playable.getAnimator().addProp(Animator.TYPE_FILL, newDisplayable, newDisplayable.getFill, newDisplayable.setFill, newDisplayable.getFill());
    newDisplayable.setFill(oldDisplayable.getFill());
  }
};


/**
 * @override
 */
DvtNBoxNodeRenderer.animateDelete = function(animationHandler, oldNode) {
  var animationPhase = DvtNBoxDataAnimationHandler.DELETE;

  var oldNBox = animationHandler.getOldNBox();
  var newNBox = animationHandler.getNewNBox();

  var nodeLayout = oldNBox.getOptions()['__layout']['__nodeLayout'];
  if (!nodeLayout) {
    return;
  }

  var oldData = oldNode.getData();
  var id = oldData[NBoxConstants.ID];
  var newNodeIndex = DvtNBoxDataUtils.getNodeIndex(newNBox, id);

  if (!isNaN(newNodeIndex)) {
    var newNode = DvtNBoxDataUtils.getNode(newNBox, newNodeIndex);
    if (!DvtNBoxDataUtils.isNodeHidden(newNBox, newNode)) {
      // Node wasn't "really" deleted, just not visible.
      animationPhase = DvtNBoxDataAnimationHandler.UPDATE;
      // Should it move into a group?
      if (DvtNBoxDataUtils.getGrouping(newNBox)) {
        var groups = newNBox.getOptions()['__groups'];
        var groupBehavior = DvtNBoxDataUtils.getGroupBehavior(newNBox);
        if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
          groups = groups[DvtNBoxDataUtils.getCellIndex(newNBox, newNode)];
        }
        var group = groups[DvtNBoxDataUtils.getNodeGroupId(newNode)];
        if (group) {
          var groupNode = DvtNBoxUtils.getDisplayable(newNBox, group);
          if (groupNode) {
            var centerMatrix = DvtNBoxUtils.getGlobalMatrix(groupNode);
            var centerOffset = new Point((nodeLayout['indicatorSectionWidth'] + nodeLayout['iconSectionWidth'] + nodeLayout['labelSectionWidth']) / 2, nodeLayout['nodeHeight'] / 2);
            animationHandler.add(new AnimMoveTo(newNBox.getCtx(), oldNode, new Point(centerMatrix.getTx() - centerOffset.x, centerMatrix.getTy() - centerOffset.y), animationHandler.getAnimationDuration()), animationPhase);
          }
        }
      }
      // Should it move to a different cell?
      else if (oldData[NBoxConstants.ROW] != newNode[NBoxConstants.ROW] ||
          oldData[NBoxConstants.COLUMN] != newNode[NBoxConstants.COLUMN]) {

        var oldGlobalMatrix = DvtNBoxUtils.getGlobalMatrix(oldNode);
        var oldDims = oldNode.getDimensions();
        animationHandler.getNewNBox().addChild(oldNode);
        oldNode.setMatrix(oldGlobalMatrix);

        var newCell = DvtNBoxDataUtils.getCellByRowColumn(newNBox, newNode[NBoxConstants.ROW], newNode[NBoxConstants.COLUMN]);
        var overflow = DvtNBoxUtils.getDisplayable(newNBox, newCell.getData(), 'overflow');
        if (overflow) {
          var overflowMatrix = DvtNBoxUtils.getGlobalMatrix(overflow);
          animationHandler.add(new AnimMoveTo(newNBox.getCtx(), oldNode, new Point(overflowMatrix.getTx(), overflowMatrix.getTy()), animationHandler.getAnimationDuration()), DvtNBoxDataAnimationHandler.UPDATE);
        }
        else {
          var cellMatrix = DvtNBoxUtils.getGlobalMatrix(newCell);
          var cellDimensions = newCell.getDimensions();
          var centerOffset = new Point((nodeLayout['indicatorSectionWidth'] + nodeLayout['iconSectionWidth'] + nodeLayout['labelSectionWidth']) / 2, nodeLayout['nodeHeight'] / 2);
          animationHandler.add(new AnimMoveTo(newNBox.getCtx(), oldNode, new Point(cellMatrix.getTx() + cellDimensions.w / 2 - centerOffset.x, cellMatrix.getTy() + cellDimensions.h / 2 - centerOffset.y), animationHandler.getAnimationDuration()), DvtNBoxDataAnimationHandler.UPDATE);
        }
        var scaleAnim = new CustomAnimation(newNBox.getCtx(), newNode, animationHandler.getAnimationDuration());
        scaleAnim.getAnimator().addProp(Animator.TYPE_NUMBER, oldNode, oldNode.getScaleX, oldNode.setScaleX, .01);
        scaleAnim.getAnimator().addProp(Animator.TYPE_NUMBER, oldNode, oldNode.getScaleY, oldNode.setScaleY, .01);
        Playable.appendOnEnd(scaleAnim, function() {newNBox.getDeleteContainer().addChild(oldNode);});

        animationHandler.add(scaleAnim, DvtNBoxDataAnimationHandler.INSERT);
        animationHandler.add(new AnimMoveBy(newNBox.getCtx(), oldNode, new Point(oldDims.w / 2, oldDims.h / 2), animationHandler.getAnimationDuration()), DvtNBoxDataAnimationHandler.INSERT);
        animationHandler.add(new AnimFadeOut(newNBox.getCtx(), oldNode, animationHandler.getAnimationDuration()), DvtNBoxDataAnimationHandler.INSERT);

        return;
      }
    }
  }
  oldNode.setMatrix(DvtNBoxUtils.getGlobalMatrix(oldNode));
  var scrollContainer = DvtNBoxDataUtils.getNodeScrollableContainer(oldNBox, oldNode);
  if (scrollContainer) {
    var clipPath = new ClipPath();
    var scrollMatrix = DvtNBoxUtils.getGlobalMatrix(scrollContainer);
    var rect = new Rectangle(scrollMatrix.getTx(), scrollMatrix.getTy(), scrollContainer._width, scrollContainer._height);
    clipPath.addRect(rect.x, rect.y, rect.w, rect.h);
    oldNode.setClipPath(clipPath);
  }
  animationHandler.add(new AnimFadeOut(newNBox.getCtx(), oldNode, animationHandler.getAnimationDuration()), animationPhase);
  newNBox.getDeleteContainer().addChild(oldNode);

};



/**
 * @override
 */
DvtNBoxNodeRenderer.animateInsert = function(animationHandler, newNode) {
  var animationPhase = DvtNBoxDataAnimationHandler.INSERT;

  var oldNBox = animationHandler.getOldNBox();
  var newNBox = animationHandler.getNewNBox();

  var nodeLayout = newNBox.getOptions()['__layout']['__nodeLayout'];
  if (!nodeLayout) {
    return;
  }

  var id = newNode.getData()[NBoxConstants.ID];
  var oldNodeIndex = DvtNBoxDataUtils.getNodeIndex(oldNBox, id);
  if (!isNaN(oldNodeIndex)) {
    var oldNode = DvtNBoxDataUtils.getNode(oldNBox, oldNodeIndex);
    if (!DvtNBoxDataUtils.isNodeHidden(oldNBox, oldNode)) {
      // Node wasn't "really" inserted, just not visible.
      animationPhase = DvtNBoxDataAnimationHandler.UPDATE;
      // Should it move out of a group?
      if (DvtNBoxDataUtils.getGrouping(oldNBox)) {
        var groups = oldNBox.getOptions()['__groups'];
        var groupBehavior = DvtNBoxDataUtils.getGroupBehavior(oldNBox);
        if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
          groups = groups[DvtNBoxDataUtils.getCellIndex(oldNBox, oldNode)];
        }
        var group = groups[DvtNBoxDataUtils.getNodeGroupId(oldNode)];
        if (group) {
          var groupNode = DvtNBoxUtils.getDisplayable(oldNBox, group);
          if (groupNode) {
            var childMatrix = newNode.getMatrix();
            var parent = newNode.getParent();
            var finalMatrix = DvtNBoxUtils.getGlobalMatrix(newNode);
            var centerMatrix = DvtNBoxUtils.getGlobalMatrix(groupNode);
            var centerOffset = new Point((nodeLayout['indicatorSectionWidth'] + nodeLayout['iconSectionWidth'] + nodeLayout['labelSectionWidth']) / 2, nodeLayout['nodeHeight'] / 2);
            newNBox.addChild(newNode);
            newNode.setMatrix(centerMatrix.translate(-centerOffset.x, -centerOffset.y));
            var movePlayable = new AnimMoveTo(newNBox.getCtx(), newNode, new Point(finalMatrix.getTx(), finalMatrix.getTy()), animationHandler.getAnimationDuration());
            Playable.appendOnEnd(movePlayable, function() {newNode.setMatrix(childMatrix); parent.addChild(newNode);});
            animationHandler.add(movePlayable, animationPhase);
          }
        }
      }
    }
  }
  var fadeAnim = new CustomAnimation(newNBox.getCtx(), newNode, animationHandler.getAnimationDuration());
  fadeAnim.getAnimator().addProp(Animator.TYPE_NUMBER, newNode, newNode.getAlpha, newNode.setAlpha, newNode.getAlpha());
  animationHandler.add(fadeAnim, animationPhase);
  newNode.setAlpha(0);
};


/**
 * @private
 * Adds accessibility attributes to the object
 * @param {NBox} nbox the nbox
 * @param {DvtNBoxNode} object the object that should be updated with accessibility attributes
 */
DvtNBoxNodeRenderer._addAccessibilityAttributes = function(nbox, object) {
  object.setAriaRole('img');
  if (!Agent.deferAriaCreation()) {
    var desc = object.getAriaLabel();
    if (desc)
      object.setAriaProperty(NBoxConstants.LABEL, desc);
  }
};

/**
 * An NBox node.
 * @param {NBox} nbox the parent nbox
 * @param {object} data the data for this node
 * @class
 * @constructor
 */
var DvtNBoxNode = function(nbox, data) {
  this.Init(nbox, data);
};

Obj.createSubclass(DvtNBoxNode, Container);

DvtNBoxNode.prototype.nboxType = 'node';

/**
 * Initializes this component
 *
 * @param {NBox} nbox the parent nbox
 * @param {object} data the data for this node
 *
 * @protected
 */
DvtNBoxNode.prototype.Init = function(nbox, data) {
  DvtNBoxNode.superclass.Init.call(this, nbox.getCtx(), null, data[NBoxConstants.ID]);
  this._nbox = nbox;
  this._data = data;
  this._nbox.registerObject(this);
  var selectionMode = this._nbox.getOptions()[NBoxConstants.SELECTION_MODE];
  if (selectionMode == 'single' || selectionMode == 'multiple') {
    this.setCursor(SelectionEffectUtils.getSelectingCursor());
  }
  this._maxAlpha = 1;
};


/**
 * Gets the data object
 *
 * @return {object} the data object
 */
DvtNBoxNode.prototype.getData = function() {
  return this._data;
};

/**
 * Renders the nbox node
 * @param {dvt.Container} container the container to render into
 * @param {object} nodeLayout An object containing properties related to the sizes of the various node subsections
 */
DvtNBoxNode.prototype.render = function(container, nodeLayout) {
  DvtNBoxNodeRenderer.render(this._nbox, this._data, this, nodeLayout);
  container.addChild(this);
  DvtNBoxUtils.setDisplayable(this._nbox, this._data, this);
  this._nbox.EventManager.associate(this, this);
};


/**
 * Returns true if this object is selectable.
 * @return {boolean} true if this object is selectable.
 */
DvtNBoxNode.prototype.isSelectable = function() {
  return true;
};


/**
 * Returns true if this object is selected.
 * @return {boolean} true if this object is selected.
 */
DvtNBoxNode.prototype.isSelected = function() {
  return this.getSelectionShape().isSelected();
};


/**
 * Specifies whether this object is selected.
 * @param {boolean} selected true if this object is selected.
 * @protected
 */
DvtNBoxNode.prototype.setSelected = function(selected) {
  this.getSelectionShape().setSelected(selected);
  this.UpdateAccessibilityAttributes();
};


/**
 * Displays the hover effect.
 */
DvtNBoxNode.prototype.showHoverEffect = function() {
  this.getSelectionShape().showHoverEffect();
};


/**
 * Hides the hover effect.
 */
DvtNBoxNode.prototype.hideHoverEffect = function() {
  this.getSelectionShape().hideHoverEffect();
};


/**
 * Sets the shape that should be used for displaying selection and hover feedback
 *
 * @param {dvt.Shape} selectionShape the shape that should be used for displaying selection and hover feedback
 */
DvtNBoxNode.prototype.setSelectionShape = function(selectionShape) {
  this._selectionShape = selectionShape;
};


/**
 * Gets the shape that should be used for displaying selection and hover feedback
 *
 * @return {dvt.Shape} the shape that should be used for displaying selection and hover feedback
 */
DvtNBoxNode.prototype.getSelectionShape = function() {
  return this._selectionShape;
};


/**
 * @override
 */
DvtNBoxNode.prototype.getDatatip = function(target, x, y) {

  // Custom Tooltip Support
  // Custom Tooltip via Function
  var customTooltip = this._nbox.getOptions()['tooltip'];
  var tooltipFunc = customTooltip ? customTooltip['renderer'] : null;
  if (tooltipFunc) {
    var dataContext = {
      'id': this._data['id'],
      'label': this._data['label'],
      'secondaryLabel': this._data['secondaryLabel'],
      'row': this._data['row'],
      'column': this._data['column'],
      'color': DvtNBoxStyleUtils.getNodeColor(this._nbox, this._data),
      'indicatorColor': DvtNBoxStyleUtils.getNodeIndicatorColor(this._nbox, this._data)
    };
    return this._nbox.getCtx().getTooltipManager().getCustomTooltip(tooltipFunc, dataContext);
  }
  return this.getShortDesc();
};


/**
 * Gets the shortDesc value for the node.
 * @return {string} the shortDesc
 */
DvtNBoxNode.prototype.getShortDesc = function() {
  return this._data[NBoxConstants.SHORT_DESC];
};


/**
 * Returns the border color of the datatip for this object.
 * @return {string} The datatip border color.
 */
DvtNBoxNode.prototype.getDatatipColor = function() {
  return DvtNBoxStyleUtils.getNodeColor(this._nbox, this._data);
};


/**
 * Sets the maximium alpha value for this node.  Immediately impacts the current alpha value
 * @param {number} maxAlpha the maximum alpha value for this node
 */
DvtNBoxNode.prototype.setMaxAlpha = function(maxAlpha) {
  this._maxAlpha = maxAlpha;
  this.setAlpha(this.getAlpha());
};


/**
 * Gets the maximium alpha value for this node.
 * @return {number} the maximum alpha value for this node
 */
DvtNBoxNode.prototype.getMaxAlpha = function() {
  return this._maxAlpha;
};


/**
 * @override
 */
DvtNBoxNode.prototype.setAlpha = function(alpha) {
  DvtNBoxNode.superclass.setAlpha.call(this, Math.min(alpha, this._maxAlpha));
};


/**
 * @override
 */
DvtNBoxNode.prototype.animateUpdate = function(animationHandler, oldNode) {
  DvtNBoxNodeRenderer.animateUpdate(animationHandler, oldNode, this);
};


/**
 * @override
 */
DvtNBoxNode.prototype.animateDelete = function(animationHandler, deleteContainer) {
  DvtNBoxNodeRenderer.animateDelete(animationHandler, this);

};


/**
 * @override
 */
DvtNBoxNode.prototype.animateInsert = function(animationHandler) {
  DvtNBoxNodeRenderer.animateInsert(animationHandler, this);
};


/**
 * @override
 */
DvtNBoxNode.prototype.isDoubleClickable = function() {
  return true;
};


/**
 * @override
 */
DvtNBoxNode.prototype.handleDoubleClick = function() {
  this._getParentContainer().handleDoubleClick();
};


/**
 * @override
 */
DvtNBoxNode.prototype.isDragAvailable = function(clientIds) {
  return this._nbox.__isDragAvailable(clientIds);
};


/**
 * @override
 */
DvtNBoxNode.prototype.getDragTransferable = function(mouseX, mouseY) {
  return this._nbox.__getDragTransferable(this);
};


/**
 * @override
 */
DvtNBoxNode.prototype.getDragFeedback = function(mouseX, mouseY) {
  return this._nbox.__getDragFeedback();
};


/**
 * Helper method that gets a displayable host object that contains the node - a cell or a drawer
 * @return {DvtNBoxCell|DvtNBoxDrawer} a parent container for the node
 * @private
 */
DvtNBoxNode.prototype._getParentContainer = function() {
  var container;
  var drawerData = DvtNBoxDataUtils.getDrawer(this._nbox);
  if (drawerData) { //drawer
    container = DvtNBoxUtils.getDisplayable(this._nbox, drawerData);
  }
  else { //cell
    var cellIndex = DvtNBoxDataUtils.getCellIndex(this._nbox, this._data);
    var cellData = DvtNBoxDataUtils.getCell(this._nbox, cellIndex);
    container = DvtNBoxUtils.getDisplayable(this._nbox, cellData);
  }
  return container;
};


/**
 * @protected
 * Updates accessibility attributes on selection event
 */
DvtNBoxNode.prototype.UpdateAccessibilityAttributes = function() {
  if (!Agent.deferAriaCreation()) {
    var desc = this.getAriaLabel();
    if (desc)
      this.setAriaProperty(NBoxConstants.LABEL, desc);
  }
};


/**
 * @override
 */
DvtNBoxNode.prototype.getAriaLabel = function() {
  return DvtNBoxDataUtils.buildAriaDesc(this._nbox, this, this.getShortDesc(), this.isSelected());
};

/**
 * @override
 */
 DvtNBoxNode.prototype.getAriaLabel = function() {
  return DvtNBoxDataUtils.buildAriaDesc(this._nbox, this, this.getShortDesc(), this.isSelected(), () => DvtNBoxNode.getShortDescContext(this));
};

/**
 * Returns the shortDesc Context of the node.
 * @param {DvtNBoxNode} node
 * @return {object} The shortDesc Context object
 */
 DvtNBoxNode.getShortDescContext = function(node) {
  var data = node.getData();
  return {
    'id': data['id'],
    'label': data['label'],
    'secondaryLabel': data['secondaryLabel'],
    'row': data['row'],
    'column': data['column']
  };
};

/**
 * Gets the highlight/filter categories for this node.
 * @return {array} categories
 */
DvtNBoxNode.prototype.getCategories = function() {
  return this.getData()[NBoxConstants.CATEGORIES] ? this.getData()[NBoxConstants.CATEGORIES] : [];
};


//---------------------------------------------------------------------//
// Keyboard Support: DvtKeyboardNavigable impl                        //
//---------------------------------------------------------------------//
/**
 * @override
 */
DvtNBoxNode.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace)
{
  return DvtNBoxUtils.getKeyboardBoundingBox(this, targetCoordinateSpace);
};

/**
 * @override
 */
DvtNBoxNode.prototype.getTargetElem = function()
{
  return this.getElem();
};

/**
 * @override
 */
DvtNBoxNode.prototype.showKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = true;
  this.showHoverEffect();
  var scrollContainer = DvtNBoxDataUtils.getNodeScrollableContainer(this._nbox, this);
  if (scrollContainer)
    scrollContainer.scrollIntoView(this);
};


/**
 * @override
 */
DvtNBoxNode.prototype.hideKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = false;
  this.hideHoverEffect();
};


/**
 * @override
 */
DvtNBoxNode.prototype.isShowingKeyboardFocusEffect = function() {
  return this._isShowingKeyboardFocusEffect;
};


/**
 * @override
 */
DvtNBoxNode.prototype.getNextNavigable = function(event)
{
  var next = null;
  if (event.keyCode == KeyboardEvent.SPACE && event.ctrlKey) {
    // multi-select node with current focus; so we navigate to ourself and then let the selection handler take
    // care of the selection
    return this;
  }
  else if (this._nbox.EventManager.getKeyboardHandler().isNavigationEvent(event)) {
    if (event.keyCode == KeyboardEvent.CLOSE_BRACKET) {
      next = this._getParentContainer();
    }
    else if (event.keyCode == KeyboardEvent.OPEN_BRACKET) {
      next = this;
    }
    else {
      next = DvtNBoxDataUtils.getNextNavigableNode(this._nbox, this, event);
    }
  }
  else if (event.type == MouseEvent.CLICK) {
    next = this;
  }
  return next;
};

/**
 * Process a keyboard event
 * @param {dvt.KeyboardEvent} event
 */
DvtNBoxNode.prototype.HandleKeyboardEvent = function(event) {
  //use ENTER to drill down the cell and ESCAPE to drill up
  var drawerData = DvtNBoxDataUtils.getDrawer(this._nbox);
  if (drawerData && event.keyCode == KeyboardEvent.ESCAPE) { //drawer
    this.handleDoubleClick();
  }
  else {
    var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(this._nbox);
    var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(this._nbox);

    var isCellMaximized = (maximizedRow == this._data[NBoxConstants.ROW] && maximizedColumn == this._data[NBoxConstants.COLUMN]) ? true : false;

    if (!isCellMaximized && event.keyCode == KeyboardEvent.ENTER ||
        isCellMaximized && event.keyCode == KeyboardEvent.ESCAPE) {
      this.handleDoubleClick();
    }
  }
};


/**
 * Returns the node displayable (itself).
 *
 * @return {dvt.Displayable} displayable
 */
DvtNBoxNode.prototype.getDisplayable = function() {
  return this;
};


/**
 * Returns the displayable that should receive the keyboard focus
 *
 * @return {dvt.Displayable} displayable to receive keyboard focus
 */
DvtNBoxNode.prototype.getKeyboardFocusDisplayable = function() {
  var node = DvtNBoxDataUtils.getNode(this._nbox, DvtNBoxDataUtils.getNodeIndex(this._nbox, this.getData()[NBoxConstants.ID]));
  if (node) {
    // return the node if it's still displayed
    var displayable = DvtNBoxUtils.getDisplayable(this._nbox, node);
    if (displayable)
      return displayable;

    // return the overflow node if there is one
    var cellData = DvtNBoxDataUtils.getCell(this._nbox, DvtNBoxDataUtils.getCellIndex(this._nbox, node));
    var cell = DvtNBoxUtils.getDisplayable(this._nbox, cellData);
    var lastNode = DvtNBoxDataUtils.getLastNavigableNode(this._nbox, cell.getChildContainer());
    if (lastNode.nboxType === 'overflow')
      return lastNode;

    // return the group node if there is one
    var drawer = this._getParentDrawer();
    if (drawer)
      return drawer.getKeyboardFocusDisplayable();

    // return the cell
    return cell.getKeyboardFocusDisplayable();
  }
  return null;
};

/**
 * Finds and returns containing drawer, if it exists
 * @return {DvtNBoxDrawer} drawer
 * @private
 */
DvtNBoxNode.prototype._getParentDrawer = function() {
  var ancestor = this;
  while (ancestor && ancestor.getParent) {
    ancestor = ancestor.getParent();
    if (ancestor.nboxType === 'drawer') {
      return ancestor;
    }
  }
  return null;
};

/**
 * Gets the container that child elements should be added to.
 * Can create new container if create param is set true.
 * Only used in when necessary (e.g. icon clip paths for border radius).
 *
 * @param {boolean} create whether or not to create child container if it doesn't exist
 * @return {dvt.Container} the container that child elements should be added to
 */
DvtNBoxNode.prototype.getChildContainer = function(create) {
  if (!create || this._childContainer) return this._childContainer;

  this._childContainer = new Container(this.getCtx());
  this.addChild(this._childContainer);

  return this._childContainer;
};

/**
 * Sets the container that child elements should be added to.
 * Only used in when necessary (e.g. icon clip paths for border radius).
 *
 * @param {dvt.Container} container the container that child elements should be added to
 */
DvtNBoxNode.prototype.setChildContainer = function(container) {
  this._childContainer = container;
};

/**
 * Renderer for DvtNBoxCell.
 * @class
 */
var DvtNBoxCellRenderer = new Object();

Obj.createSubclass(DvtNBoxCellRenderer, Obj);


/**
 * Renders the nbox cell into the available space.
 * @param {NBox} nbox The nbox component
 * @param {object} cellData The cell data being rendered
 * @param {DvtNBoxCell} cellContainer The container to render into
 * @param {dvt.Rectangle} availSpace The available space
 */
DvtNBoxCellRenderer.render = function(nbox, cellData, cellContainer, availSpace) {
  var options = nbox.getOptions();
  var cellGap = parseInt(options['__layout']['cellGap']);
  var cellPadding = parseInt(options['__layout']['cellInnerPadding']);

  var cellLayout = DvtNBoxCellRenderer.getCellLayout(nbox);

  var r = DvtNBoxDataUtils.getRowIndex(nbox, cellData[NBoxConstants.ROW]);
  var c = DvtNBoxDataUtils.getColumnIndex(nbox, cellData[NBoxConstants.COLUMN]);

  var cellDims = DvtNBoxCellRenderer.getCellDimensions(nbox, r, c, availSpace);

  cellContainer.setTranslate(cellDims.x + cellGap / 2, cellDims.y + cellGap / 2);
  var cellIndex = r * DvtNBoxDataUtils.getColumnCount(nbox) + c; // cells are in sorted row-major order
  var cellRect = new Rect(nbox.getCtx(), 0, 0, Math.max(cellDims.w - cellGap, 0), Math.max(cellDims.h - cellGap, 0));
  cellRect.setPixelHinting(true);
  var style = DvtNBoxStyleUtils.getCellStyle(nbox, cellIndex);
  DvtNBoxCellRenderer._applyStyleToRect(cellRect, style);
  var borderRadius = DvtNBoxStyleUtils.getCellBorderRadius(nbox);
  cellRect.setRx(borderRadius);
  cellRect.setRy(borderRadius);

  //Apply the custom style and classname on the cell
  var styleObj = DvtNBoxStyleUtils.getCellStyleObject(nbox, cellIndex);
  cellRect.setStyle(styleObj);
  var className = DvtNBoxStyleUtils.getCellClassName(nbox, cellIndex);
  cellRect.setClassName(className);

  cellContainer.addChild(cellRect);

  var filter = nbox.getCellFilter();
  if (filter === undefined) {
    filter = DvtNBoxCellRenderer._createShadow(options[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.CELL_DEFAULTS]['_panelShadow']);
    nbox.setCellFilter(filter);
  }
  if(filter) {
    cellRect.addDrawEffect(filter);
  }

  DvtNBoxUtils.setDisplayable(nbox, cellData, cellRect, 'background');

  var keyboardFocusEffect = new KeyboardFocusEffect(nbox.getCtx(), cellContainer, new Rectangle(-1, -1, cellRect.getWidth() + 2, cellRect.getHeight() + 2));
  DvtNBoxUtils.setDisplayable(nbox, cellData, keyboardFocusEffect, 'focusEffect');

  DvtNBoxCellRenderer.renderHeader(nbox, cellData, cellContainer, false);

  var cellMaximized = DvtNBoxDataUtils.isCellMaximized(nbox, cellIndex);
  var headerSize = cellMaximized ? cellLayout['maximizedHeaderSize'] : cellLayout['headerSize'];
  var labelHeight = cellMaximized ? cellLayout['maximizedLabelHeight'] : cellLayout['labelHeight'];

  var childContainer = cellMaximized ?
      new SimpleScrollableContainer(nbox.getCtx(), cellRect.getWidth(), cellRect.getHeight() - headerSize) :
      new Container(nbox.getCtx());

  cellContainer.addChild(childContainer);
  cellContainer.setChildContainer(childContainer);

  var childArea = null;
  if (labelHeight) {
    if (DvtNBoxCellRenderer._isLabelVertical(nbox, cellData)) {
      childArea = new Rectangle(headerSize, cellPadding, cellRect.getWidth() - headerSize - cellPadding, cellRect.getHeight() - cellPadding - cellPadding);
    }
    else {
      childArea = new Rectangle(cellPadding, headerSize, cellRect.getWidth() - cellPadding - cellPadding, cellRect.getHeight() - headerSize - cellPadding);
    }
    if (childContainer instanceof SimpleScrollableContainer)
      childContainer.setTranslate(0, headerSize);
  }
  else {
    childArea = new Rectangle(cellPadding, cellPadding, cellRect.getWidth() - cellPadding - cellPadding, cellRect.getHeight() - cellPadding - cellPadding);
  }
  childArea.w = Math.max(childArea.w, 0);
  childArea.h = Math.max(childArea.h, 0);
  cellData['__childArea'] = childArea;
};


/**
 * Renders the nbox cell header
 * @param {NBox} nbox The nbox components
 * @param {object} cellData The cell data
 * @param {DvtNBoxCell} cellContainer The container to render into.
 * @param {boolean} noCount Indicates whether the count label should be suppressed
 * @return {boolean} true if a header was rendered, false otherwise
 */
DvtNBoxCellRenderer.renderHeader = function(nbox, cellData, cellContainer, noCount) {
  var oldLabel = DvtNBoxUtils.getDisplayable(nbox, cellData, NBoxConstants.LABEL);
  if (oldLabel) {
    oldLabel.getParent().removeChild(oldLabel);
    DvtNBoxUtils.setDisplayable(nbox, cellData, null, NBoxConstants.LABEL);
  }
  var oldCountLabel = DvtNBoxUtils.getDisplayable(nbox, cellData, 'countLabel');
  if (oldCountLabel) {
    oldCountLabel.getParent().removeChild(oldCountLabel);
    DvtNBoxUtils.setDisplayable(nbox, cellData, null, 'countLabel');
  }
  var oldClose = DvtNBoxUtils.getDisplayable(nbox, cellData, 'closeButton');
  if (oldClose) {
    oldClose.getParent().removeChild(oldClose);
    DvtNBoxUtils.setDisplayable(nbox, cellData, null, 'closeButton');
  }
  var addedHeader = false;
  if (cellData) {
    var options = nbox.getOptions();
    var countLabelGap = options['__layout']['countLabelGap'];
    var cellCloseGap = options['__layout']['cellCloseGap'];
    var cellPadding = parseInt(options['__layout']['cellInnerPadding']);

    var cellLayout = DvtNBoxCellRenderer.getCellLayout(nbox);
    var cellCounts = DvtNBoxDataUtils.getCellCounts(nbox);

    var cellRect = DvtNBoxUtils.getDisplayable(nbox, cellData, 'background');

    var r = DvtNBoxDataUtils.getRowIndex(nbox, cellData[NBoxConstants.ROW]);
    var c = DvtNBoxDataUtils.getColumnIndex(nbox, cellData[NBoxConstants.COLUMN]);
    var cellIndex = r * DvtNBoxDataUtils.getColumnCount(nbox) + c; // cells are in sorted row-major order

    var rtl = Agent.isRightToLeft(nbox.getCtx());

    var cellCloseWidthWithGap = 0;
    if (DvtNBoxDataUtils.isCellMaximized(nbox, cellIndex)) {
      var close = options['_resources']['close'];
      var closeWidth = close['width'];
      if (cellRect.getWidth() - cellPadding - cellPadding > closeWidth) {
        var context = nbox.getCtx();
        var iconStyle = ToolkitUtils.getIconStyle(context, close['class']);
        var closeButton = new IconButton(context, 'borderless', {style: iconStyle, size: closeWidth}, null, null, cellContainer.handleDoubleClick, cellContainer);

        // Center/hide close button if cell too thin for normal rendering
        var closeButtonX = rtl ? Math.min((cellRect.getWidth() - closeWidth) / 2, cellPadding) : Math.max((cellRect.getWidth() - closeWidth) / 2, cellRect.getWidth() - cellPadding - closeWidth);
        closeButton.setTranslate(closeButtonX,
                                 cellPadding);
        cellContainer.addChild(closeButton);
        cellCloseWidthWithGap = closeWidth + cellCloseGap;
        DvtNBoxUtils.setDisplayable(nbox, cellData, closeButton, 'closeButton');
        addedHeader = true;
      }
    }
    if (cellData[NBoxConstants.LABEL]) {
      var labelHeight = cellLayout['labelHeight'];
      var skipLabel = false;
      var halign = DvtNBoxStyleUtils.getLabelHalign(nbox, cellData);
      var countLabelWidth = 0;
      var countLabelWidthWithGap = 0;
      var countLabel = null;
      var countLabelX = 0;
      var countLabelY = 0;
      var countText = null;
      var showCount = DvtNBoxStyleUtils.getCellShowCount(nbox, cellData);
      if (!noCount && showCount != 'off') {
        var cellCountLabel = DvtNBoxUtils.getDisplayable(nbox, cellData).getCountLabel();
        if (cellCountLabel)
          countText = cellCountLabel;
        else if (showCount == 'on') {
          countText = '' + cellCounts['total'][cellIndex];
          if (cellCounts['highlighted']) {
            countText = ResourceUtils.format(options.translations.highlightedCount, [cellCounts['highlighted'][cellIndex], countText]);
          }
        }
      }
      if (DvtNBoxCellRenderer._isLabelVertical(nbox, cellData)) {
        // Vertical Label
        if (countText) {
          countLabel = DvtNBoxUtils.createText(nbox.getCtx(), countText, DvtNBoxStyleUtils.getCellCountLabelStyle(nbox, cellIndex), OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_CENTRAL);
          countLabel.setClassName('oj-typography-semi-bold');
          if (TextUtils.fitText(countLabel, cellRect.getHeight() - cellPadding - cellPadding, cellRect.getWidth() - 2 * cellPadding, cellContainer)) {
            DvtNBoxUtils.setDisplayable(nbox, cellData, countLabel, 'countLabel');
            addedHeader = true;
            countLabelWidth = countLabel.getDimensions().w;
            countLabelWidthWithGap = countLabelWidth + countLabelGap;
            // Count label will get offset after rendering the cell label
            countLabelY = cellRect.getHeight() / 2;
            countLabelX = cellRect.getWidth() / 2;
          }
          else {
            skipLabel = true;
          }
        }
        var countLabelOffset = 0;
        if (!skipLabel) {
          var label = DvtNBoxUtils.createText(nbox.getCtx(), cellData[NBoxConstants.LABEL], DvtNBoxStyleUtils.getCellLabelStyle(nbox, cellIndex), OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_CENTRAL);
          if (TextUtils.fitText(label, cellRect.getHeight() - cellPadding - cellPadding - countLabelWidthWithGap, cellRect.getWidth() - 2 * cellPadding, cellContainer)) {
            DvtNBoxUtils.setDisplayable(nbox, cellData, label, NBoxConstants.LABEL);
            var labelWidth = label.getDimensions().w;
            addedHeader = true;
            DvtNBoxUtils.positionText(label, cellRect.getWidth() / 2, (cellRect.getHeight() + countLabelWidthWithGap) / 2, rtl ? Math.PI / 2 : -Math.PI / 2);
            countLabelOffset = (labelWidth + countLabelGap) / 2;
          }
        }
        if (countLabel) {
          countLabelY -= countLabelOffset;
          DvtNBoxUtils.positionText(countLabel, countLabelX, countLabelY, rtl ? Math.PI / 2 : -Math.PI / 2);
        }
      }
      else {
        if (countText) {
          countLabel = DvtNBoxUtils.createText(nbox.getCtx(), countText, DvtNBoxStyleUtils.getCellCountLabelStyle(nbox, cellIndex), halign, OutputText.V_ALIGN_CENTRAL);
          countLabel.setClassName('oj-typography-semi-bold');
          if (TextUtils.fitText(countLabel, cellRect.getWidth() - cellPadding - cellPadding - cellCloseWidthWithGap, cellRect.getHeight() - 2 * cellPadding, cellContainer)) {
            DvtNBoxUtils.setDisplayable(nbox, cellData, countLabel, 'countLabel');
            addedHeader = true;
            countLabelWidth = countLabel.getDimensions().w;
            countLabelWidthWithGap = countLabelWidth + countLabelGap;
            // Count label will get offset after rendering the cell label
            if (halign == OutputText.H_ALIGN_CENTER) {
              countLabelX = cellRect.getWidth() / 2;
            }
            else if (halign == OutputText.H_ALIGN_RIGHT) {
              countLabelX = cellRect.getWidth() - cellPadding;
            }
            else { // halign == dvt.OutputText.H_ALIGN_LEFT
              countLabelX = cellPadding;
            }
            countLabelY = DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex) ? cellRect.getHeight() / 2 : cellPadding + labelHeight / 2;
            DvtNBoxUtils.positionText(countLabel, countLabelX, countLabelY);
          }
          else {
            skipLabel = true;
          }
        }
        var countLabelOffset = 0;
        if (!skipLabel) {

          var label = DvtNBoxUtils.createText(nbox.getCtx(), cellData[NBoxConstants.LABEL], DvtNBoxStyleUtils.getCellLabelStyle(nbox, cellIndex), halign, OutputText.V_ALIGN_CENTRAL);
          if (TextUtils.fitText(label, cellRect.getWidth() - cellPadding - cellPadding - cellCloseWidthWithGap - countLabelWidthWithGap, cellRect.getHeight() - 2 * cellPadding, cellContainer)) {
            DvtNBoxUtils.setDisplayable(nbox, cellData, label, NBoxConstants.LABEL);
            var labelWidth = label.getDimensions().w;
            addedHeader = true;
            var labelX;
            if (halign == OutputText.H_ALIGN_CENTER) {
              labelX = (cellRect.getWidth() - (rtl ? -1 : 1) * countLabelWidthWithGap) / 2;
              countLabelOffset = (rtl ? -1 : 1) * (labelWidth + countLabelGap) / 2;
            }
            else if (halign == OutputText.H_ALIGN_RIGHT) {
              labelX = cellRect.getWidth() - cellPadding - (rtl ? 0 : 1) * countLabelWidthWithGap;
              countLabelOffset = (rtl ? -1 : 0) * (labelWidth + countLabelGap);
            }
            else { // halign == dvt.OutputText.H_ALIGN_LEFT
              labelX = cellPadding + (rtl ? 1 : 0) * countLabelWidthWithGap;
              countLabelOffset = (rtl ? 0 : 1) * (labelWidth + countLabelGap);
            }
            var labelY = DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex) ? cellRect.getHeight() / 2 : cellPadding + labelHeight / 2;
            DvtNBoxUtils.positionText(label, labelX, labelY);
          }
        }
        if (countLabel && countLabelOffset) {
          DvtNBoxUtils.positionText(countLabel, countLabelX + countLabelOffset, countLabelY);
        }
      }
    }
  }
  DvtNBoxCellRenderer._addAccessibilityAttributes(nbox, cellData, cellContainer);
  return addedHeader;
};


/**
 * Renders the body countLabels for the specified cells
 * @param {NBox} nbox The nbox components
 * @param {array} cellIndices The indices of the cells
 */
DvtNBoxCellRenderer.renderBodyCountLabels = function(nbox, cellIndices) {
  var cellPadding = parseInt(nbox.getOptions()['__layout']['cellInnerPadding']);

  var cellLayout = DvtNBoxCellRenderer.getCellLayout(nbox);
  var cellCounts = DvtNBoxDataUtils.getCellCounts(nbox);

  var headerFontSize = Number.MAX_VALUE;
  var removeHeaders = false;

  // calculate header font sizes
  var cellData = DvtNBoxDataUtils.getCell(nbox, cellIndices[0]);
  var headerLabel = DvtNBoxUtils.getDisplayable(nbox, cellData, NBoxConstants.LABEL);
  var headerCount = DvtNBoxUtils.getDisplayable(nbox, cellData, 'countLabel');
  var headerLabelSize = headerLabel && headerLabel.getCSSStyle() ? headerLabel.getCSSStyle().getFontSize() : null;
  var headerCountSize = headerCount && headerCount.getCSSStyle() ? headerCount.getCSSStyle().getFontSize() : null;
  // parse out 'px'
  headerLabelSize = isNaN(headerLabelSize) ? parseFloat(headerLabelSize) : headerLabelSize;
  headerCountSize = isNaN(headerCountSize) ? parseFloat(headerCountSize) : headerCountSize;
  if (!isNaN(headerLabelSize) || !isNaN(headerCountSize))
    headerFontSize = isNaN(headerLabelSize) ? headerCountSize : (isNaN(headerCountSize) ? headerLabelSize : Math.max(headerLabelSize, headerCountSize));

  // Separate maximized cells from minimized. If maximizedRow and maximizedColumn are unset,
  // all indices will be placed into maximizedCellIndices.
  var maximizedCellIndices = [];
  var minimizedCellIndices = [];
  for (var i = 0; i < cellIndices.length; i++) {
    cellIndex = cellIndices[i];
    DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex) ? minimizedCellIndices.push(cellIndex) : maximizedCellIndices.push(cellIndex);
  }

  // create labels
  var maximizedLabels = [];
  var minimizedLabels = [];
  for (var i = 0; i < maximizedCellIndices.length; i++) {
    var cellIndex = maximizedCellIndices[i];
    var count = cellCounts['total'][cellIndex];
    maximizedLabels[i] = DvtNBoxUtils.createText(nbox.getCtx(), '' + count, DvtNBoxStyleUtils.getCellBodyCountLabelStyle(nbox), OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_CENTRAL);
  }
  for (var i = 0; i < minimizedCellIndices.length; i++) {
    var cellIndex = minimizedCellIndices[i];
    var count = cellCounts['total'][cellIndex];
    minimizedLabels[i] = DvtNBoxUtils.createText(nbox.getCtx(), '' + count, DvtNBoxStyleUtils.getCellBodyCountLabelStyle(nbox), OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_CENTRAL);
  }

  // remove headers if either of the following:
  // 1) calculated body countLabel font size is less than header font size
  // 2) count is the only thing in the cell header (no label)
  var maximizedFontSize = DvtNBoxCellRenderer.getBodyCountLabelsFontSize(nbox, maximizedCellIndices, maximizedLabels);
  if (maximizedFontSize <= headerFontSize || (headerCount && !headerLabel)) {
    removeHeaders = true;
  }
  var minimizedFontSize = DvtNBoxCellRenderer.getBodyCountLabelsFontSize(nbox, minimizedCellIndices, minimizedLabels);
  if (minimizedFontSize <= headerFontSize || (headerCount && !headerLabel)) {
    removeHeaders = true;
  }

  if (removeHeaders) {
    for (var i = 0; i < cellIndices.length; i++) {
      cellData = DvtNBoxDataUtils.getCell(nbox, cellIndices[i]);
      headerLabel = DvtNBoxUtils.getDisplayable(nbox, cellData, NBoxConstants.LABEL);
      headerCount = DvtNBoxUtils.getDisplayable(nbox, cellData, 'countLabel');
      var childArea = cellData['__childArea'];
      var headerRemoved = false;
      if (headerLabel) {
        headerLabel.getParent().removeChild(headerLabel);
        DvtNBoxUtils.setDisplayable(nbox, cellData, null, NBoxConstants.LABEL);
        headerRemoved = true;
      }
      if (headerCount) {
        headerCount.getParent().removeChild(headerCount);
        DvtNBoxUtils.setDisplayable(nbox, cellData, null, 'countLabel');
        headerRemoved = true;
      }
      // reallocate header space to childArea if a header element has been removed
      if (headerRemoved) {
        if (DvtNBoxCellRenderer._isLabelVertical(nbox, cellData)) {
          childArea.x -= (cellLayout['headerSize'] - cellPadding);
          childArea.w += (cellLayout['headerSize'] - cellPadding);
        }
        else {
          childArea.y -= (cellLayout['headerSize'] - cellPadding);
          childArea.h += (cellLayout['headerSize'] - cellPadding);
        }
        cellData['__childArea'] = childArea;
      }
    }

    // recalculate font sizes
    maximizedFontSize = DvtNBoxCellRenderer.getBodyCountLabelsFontSize(nbox, maximizedCellIndices, maximizedLabels);
    minimizedFontSize = DvtNBoxCellRenderer.getBodyCountLabelsFontSize(nbox, minimizedCellIndices, minimizedLabels);
  }

  for (var i = 0; i < maximizedCellIndices.length; i++) {
    cellIndex = maximizedCellIndices[i];
    cellData = DvtNBoxDataUtils.getCell(nbox, cellIndex);
    var cellContainer = DvtNBoxUtils.getDisplayable(nbox, cellData);
    var childArea = cellData['__childArea'];

    maximizedLabels[i].setFontSize(maximizedFontSize);
    if (TextUtils.fitText(maximizedLabels[i], childArea.w, childArea.h, cellContainer)) {
      if (!removeHeaders)
        DvtNBoxCellRenderer.renderHeader(nbox, cellData, cellContainer, true);
      DvtNBoxUtils.positionText(maximizedLabels[i], childArea.x + childArea.w / 2, childArea.y + childArea.h / 2);
    }
  }
  for (var i = 0; i < minimizedCellIndices.length; i++) {
    cellIndex = minimizedCellIndices[i];
    cellData = DvtNBoxDataUtils.getCell(nbox, cellIndex);
    var cellContainer = DvtNBoxUtils.getDisplayable(nbox, cellData);
    var childArea = cellData['__childArea'];

    minimizedLabels[i].setFontSize(minimizedFontSize);
    if (TextUtils.fitText(minimizedLabels[i], childArea.w, childArea.h, cellContainer)) {
      if (!removeHeaders)
        DvtNBoxCellRenderer.renderHeader(nbox, cellData, cellContainer, true);
      DvtNBoxUtils.positionText(minimizedLabels[i], childArea.x + childArea.w / 2, childArea.y + childArea.h / 2);
    }
  }
};


/**
 * Calculate thes font size for the body countLabels for the specified cells
 * @param {NBox} nbox The nbox components
 * @param {array} cellIndices The indices of the cells
 * @param {array} labels The body countLabels for the specified cells
 * @return {number} computed font size of body countLabels
 */
DvtNBoxCellRenderer.getBodyCountLabelsFontSize = function(nbox, cellIndices, labels) {
  var fontSize = Number.MAX_VALUE;
  for (var i = 0; i < cellIndices.length; i++) {
    var childArea = DvtNBoxDataUtils.getCell(nbox, cellIndices[i])['__childArea'];
    fontSize = Math.min(fontSize, parseInt(TextUtils.getOptimalFontSize(labels[i].getCtx(), labels[i].getTextString(), labels[i].getCSSStyle(), childArea)));
  }
  return fontSize;
};


/**
 * Gets whether the labels for the specified cell should be rendered vertically
 *
 * @param {NBox} nbox the nbox component
 * @param {object} cellData the cell data
 * @return whether the labels for the specified cell should be rendered vertically
 */
DvtNBoxCellRenderer._isLabelVertical = function(nbox, cellData) {
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(nbox);
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(nbox);
  return ((maximizedColumn && maximizedColumn != cellData[NBoxConstants.COLUMN]) && (!maximizedRow || (maximizedRow == cellData[NBoxConstants.ROW]))) ? true : false;
};


/**
 * Calculates the dimensions for the specified cell
 *
 * @param {NBox} nbox The nbox components
 * @param {number} rowIndex the row index of the specified cell
 * @param {number} columnIndex the column index of the specified cell
 * @param {dvt.Rectangle} availSpace The available space.
 *
 * @return {dvt.Rectangle} the dimensions for the specified cell
 */
DvtNBoxCellRenderer.getCellDimensions = function(nbox, rowIndex, columnIndex, availSpace) {
  var options = nbox.getOptions();
  var cellGap = parseInt(options['__layout']['cellGap']);
  var cellLayout = DvtNBoxCellRenderer.getCellLayout(nbox);

  var rtl = Agent.isRightToLeft(nbox.getCtx());

  var minimizedSize = cellGap + parseInt(cellLayout['minimumCellSize']);
  var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  var defaultRowDimensions = DvtNBoxDataUtils.getRowDimensions(nbox, rowIndex, availSpace);
  var defaultColumnDimensions = DvtNBoxDataUtils.getColumnDimensions(nbox, columnIndex, availSpace);
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(nbox);

  var columnX = defaultColumnDimensions.x;
  var rowY = defaultRowDimensions.y;
  var columnW = defaultColumnDimensions.w;
  var rowH = defaultRowDimensions.h;

  var processColumn = true;

  if (maximizedRow) {
    var maximizedRowIndex = DvtNBoxDataUtils.getRowIndex(nbox, maximizedRow);

    // Ensure maximized row takes at least 2/3 of available height.  Split remaining height across minimized rows.
    // minimizedRowSize * number of minimized rows will be at most 1/3 available height.
    var minimizedRowSize = Math.min(availSpace.h / (3 * (rowCount - 1)) , minimizedSize);

    if (rowIndex < maximizedRowIndex) {
      rowY = availSpace.y + availSpace.h - (rowIndex + 1) * minimizedRowSize;
      rowH = minimizedRowSize;
      processColumn = false;
    }
    else if (rowIndex == maximizedRowIndex) {
      rowY = availSpace.y + (rowCount - rowIndex - 1) * minimizedRowSize;
      rowH = availSpace.h - (rowCount - 1) * minimizedRowSize;
    }
    else { // rowIndex > maximizedRowIndex
      rowY = availSpace.y + (rowCount - rowIndex - 1) * minimizedRowSize;
      rowH = minimizedRowSize;
      processColumn = false;
    }
  }

  if (maximizedColumn && processColumn) {
    var maximizedColumnIndex = DvtNBoxDataUtils.getColumnIndex(nbox, maximizedColumn);

    // Ensure maximized column takes at least 2/3 of available width.  Split remaining width across minimized columns.
    // minimizedColumnSize * number of minimized columns will be at most 1/3 available width.
    var minimizedColumnSize = Math.min(availSpace.w / (3 * (columnCount - 1)) , minimizedSize);
    if (columnIndex < maximizedColumnIndex) {
      columnW = minimizedColumnSize;
      columnX = availSpace.x + (rtl ? availSpace.w - minimizedColumnSize : 0) + (rtl ? -1 : 1) * columnIndex * minimizedColumnSize;
    }
    else if (columnIndex == maximizedColumnIndex) {
      columnW = availSpace.w - (columnCount - 1) * minimizedColumnSize;
      columnX = availSpace.x + (rtl ? availSpace.w - columnW : 0) + (rtl ? -1 : 1) * columnIndex * minimizedColumnSize;
    }
    else { // columnIndex > maximizedColumnIndex
      columnW = minimizedColumnSize;
      columnX = availSpace.x + (rtl ? -minimizedColumnSize : availSpace.w) + (rtl ? 1 : -1) * (columnCount - columnIndex) * minimizedColumnSize;
    }
  }
  return new Rectangle(columnX, rowY, columnW, rowH);
};

/**
 * Calculates sizes related to cell layout, based upon the first specified cell
 * (Assumes that the cells are specified homogeneously)
 * @param {NBox} nbox the nbox component
 * @return {object} an object containing the calculated sizes
 */
DvtNBoxCellRenderer.getCellLayout = function(nbox) {
  return nbox.getOptions()['__layout']['__cellLayout'] || DvtNBoxCellRenderer._calculateCellLayout(nbox);
};

/**
 * @private
 * Calculates sizes related to cell layout, based upon the first specified cell
 * (Assumes that the cells are specified homogeneously)
 * @param {NBox} nbox the nbox component
 * @return {object} an object containing the calculated sizes
 */
DvtNBoxCellRenderer._calculateCellLayout = function(nbox) {
  var options = nbox.getOptions();
  var cellCounts = DvtNBoxDataUtils.getCellCounts(nbox);
  var cellPadding = parseInt(options['__layout']['cellInnerPadding']);
  var cellLabelGap = options['__layout']['cellLabelGap'];
  var minimumCellSize = parseInt(options['__layout']['minimumCellSize']);

  var labelHeight = 0;
  var maximizedLabelHeight = 0;
  var cellCount = DvtNBoxDataUtils.getRowCount(nbox) * DvtNBoxDataUtils.getColumnCount(nbox);
  for (var i = 0; i < cellCount; i++) {
    var cellData = DvtNBoxDataUtils.getCell(nbox, i);
    if (cellData && cellData[NBoxConstants.LABEL]) {
      var halign = cellData[NBoxConstants.LABEL_HALIGN];
      var label = DvtNBoxUtils.createText(nbox.getCtx(), cellData[NBoxConstants.LABEL], DvtNBoxStyleUtils.getCellLabelStyle(nbox, i), halign, OutputText.V_ALIGN_CENTRAL);
      var cellLabelHeight = label.getDimensions().h;
      if (DvtNBoxStyleUtils.getCellShowCount(nbox, cellData) == 'on') {
        var count = DvtNBoxUtils.createText(nbox.getCtx(), cellCounts['total'][i], DvtNBoxStyleUtils.getCellCountLabelStyle(nbox, i), halign, OutputText.V_ALIGN_CENTRAL);
        var countLabelHeight = count.getDimensions().h;
        cellLabelHeight = Math.max(cellLabelHeight, countLabelHeight);
      }
      labelHeight = Math.max(labelHeight, cellLabelHeight);
    }
  }
  if (DvtNBoxDataUtils.getMaximizedRow(nbox) && DvtNBoxDataUtils.getMaximizedColumn(nbox)) {
    maximizedLabelHeight = Math.max(labelHeight, options['_resources']['close']['height']);
  }

  var minimizedHeaderSize = labelHeight + cellPadding + cellPadding;
  var headerSize = labelHeight + cellPadding + cellLabelGap;
  var maximizedHeaderSize = maximizedLabelHeight + cellPadding + cellLabelGap;
  minimumCellSize = Math.max(minimizedHeaderSize, minimumCellSize);
  var cellLayout = {'labelHeight': labelHeight, 'headerSize': headerSize, 'maximizedLabelHeight': maximizedLabelHeight, 'maximizedHeaderSize': maximizedHeaderSize, 'minimumCellSize': minimumCellSize};
  options['__layout']['__cellLayout'] = cellLayout;
  return cellLayout;
};


/**
 * @override
 */
DvtNBoxCellRenderer.animateUpdate = function(animationHandler, oldCell, newCell) {
  var oldNBox = animationHandler.getOldNBox();
  var newNBox = animationHandler.getNewNBox();
  var playable = new CustomAnimation(newNBox.getCtx(), newCell, animationHandler.getAnimationDuration());

  // Promote the child container first so that nodes that position themselves correctly
  var childContainer = newCell.getChildContainer();
  var childMatrix = childContainer.getMatrix();
  childContainer.setMatrix(DvtNBoxUtils.getGlobalMatrix(childContainer));
  var cellParent = newCell.getParent();
  cellParent.addChildAt(childContainer, cellParent.getChildIndex(newCell) + 1);

  // Grab cell translation
  var cellTx = newCell.getTranslateX();
  var cellTy = newCell.getTranslateY();

  // Position
  playable.getAnimator().addProp(Animator.TYPE_MATRIX, newCell, newCell.getMatrix, newCell.setMatrix, newCell.getMatrix());
  newCell.setMatrix(oldCell.getMatrix());

  // Background
  var oldBackground = DvtNBoxUtils.getDisplayable(oldNBox, oldCell.getData(), 'background');
  var newBackground = DvtNBoxUtils.getDisplayable(newNBox, newCell.getData(), 'background');

  var rtl = Agent.isRightToLeft(newNBox.getCtx());
  var widthDiff = rtl ? 0 : newBackground.getWidth() - oldBackground.getWidth();

  if (!newBackground.getFill().equals(oldBackground.getFill())) {
    playable.getAnimator().addProp(Animator.TYPE_FILL, newBackground, newBackground.getFill, newBackground.setFill, newBackground.getFill());
    newBackground.setFill(oldBackground.getFill());
  }
  playable.getAnimator().addProp(Animator.TYPE_NUMBER, newBackground, newBackground.getWidth, newBackground.setWidth, newBackground.getWidth());
  newBackground.setWidth(oldBackground.getWidth());
  playable.getAnimator().addProp(Animator.TYPE_NUMBER, newBackground, newBackground.getHeight, newBackground.setHeight, newBackground.getHeight());
  newBackground.setHeight(oldBackground.getHeight());


  // Keyboard focus effect
  if (newCell.isShowingKeyboardFocusEffect()) {
    var effect = DvtNBoxUtils.getDisplayable(newNBox, newCell.getData(), 'focusEffect').getEffect();
    if (effect) {
      playable.getAnimator().addProp(Animator.TYPE_NUMBER, effect, effect.getWidth, effect.setWidth, effect.getWidth());
      effect.setWidth(oldBackground.getWidth() + 2);
      playable.getAnimator().addProp(Animator.TYPE_NUMBER, effect, effect.getHeight, effect.setHeight, effect.getHeight());
      effect.setHeight(oldBackground.getHeight() + 2);
    }
  }

  // Labels
  DvtNBoxCellRenderer._animateLabels(animationHandler, oldCell, newCell, 'countLabel');
  DvtNBoxCellRenderer._animateLabels(animationHandler, oldCell, newCell, NBoxConstants.LABEL);

  // Close button
  var oldClose = DvtNBoxUtils.getDisplayable(oldNBox, oldCell.getData(), 'closeButton');
  var newClose = DvtNBoxUtils.getDisplayable(newNBox, newCell.getData(), 'closeButton');
  if (oldClose) {
    if (newClose) {
      playable.getAnimator().addProp(Animator.TYPE_MATRIX, newClose, newClose.getMatrix, newClose.setMatrix, newClose.getMatrix());
      newClose.setMatrix(oldClose.getMatrix());
    }
    else {
      var oldCloseStart = DvtNBoxUtils.getGlobalMatrix(oldClose);
      oldClose.setTranslate(oldClose.getTranslateX() + widthDiff + cellTx, oldClose.getTranslateY() + cellTy);

      animationHandler.add(new AnimFadeOut(newNBox.getCtx(), oldClose, animationHandler.getAnimationDuration()), DvtNBoxDataAnimationHandler.UPDATE);
      playable.getAnimator().addProp(Animator.TYPE_MATRIX, oldClose, oldClose.getMatrix, oldClose.setMatrix, oldClose.getMatrix());
      oldClose.setMatrix(oldCloseStart);
      newNBox.getDeleteContainer().addChild(oldClose);
    }
  }
  else if (newClose) {
    animationHandler.add(new AnimFadeIn(newNBox.getCtx(), newClose, animationHandler.getAnimationDuration()), DvtNBoxDataAnimationHandler.UPDATE);
    playable.getAnimator().addProp(Animator.TYPE_MATRIX, newClose, newClose.getMatrix, newClose.setMatrix, newClose.getMatrix());
    newClose.setTranslate(newClose.getTranslateX() - widthDiff, newClose.getTranslateY());
    newClose.setAlpha(0);

  }

  Playable.appendOnEnd(playable, function() {newCell.addChild(childContainer); childContainer.setMatrix(childMatrix);});
  animationHandler.add(playable, DvtNBoxDataAnimationHandler.UPDATE);
};

DvtNBoxCellRenderer._animateLabels = function(animationHandler, oldCell, newCell, labelKey) {
  var oldNBox = animationHandler.getOldNBox();
  var newNBox = animationHandler.getNewNBox();
  var oldLabel = DvtNBoxUtils.getDisplayable(oldNBox, oldCell.getData(), labelKey);
  var newLabel = DvtNBoxUtils.getDisplayable(newNBox, newCell.getData(), labelKey);
  var oldVerticalLabel = DvtNBoxCellRenderer._isLabelVertical(oldNBox, oldCell.getData());
  var newVerticalLabel = DvtNBoxCellRenderer._isLabelVertical(newNBox, newCell.getData());
  if (oldLabel || newLabel) {
    if (oldLabel && newLabel && (oldVerticalLabel == newVerticalLabel)) {
      var playable = new CustomAnimation(newNBox.getCtx(), newLabel, animationHandler.getAnimationDuration());
      var oldAlign = oldLabel.getHorizAlignment();
      oldAlign = oldAlign == 'left' ? -1 : oldAlign == 'center' ? 0 : 1;
      var newAlign = newLabel.getHorizAlignment();
      newAlign = newAlign == 'left' ? -1 : newAlign == 'center' ? 0 : 1;
      var alignOffset = (newAlign - oldAlign) * newLabel.getDimensions().w / 2;
      playable.getAnimator().addProp(Animator.TYPE_NUMBER, newLabel, newLabel.getX, newLabel.setX, newLabel.getX());
      newLabel.setX(oldLabel.getX() + alignOffset);
      playable.getAnimator().addProp(Animator.TYPE_NUMBER, newLabel, newLabel.getY, newLabel.setY, newLabel.getY());
      newLabel.setY(oldLabel.getY());
      playable.getAnimator().addProp(Animator.TYPE_MATRIX, newLabel, newLabel.getMatrix, newLabel.setMatrix, newLabel.getMatrix());
      newLabel.setMatrix(oldLabel.getMatrix());
      animationHandler.add(playable, DvtNBoxDataAnimationHandler.UPDATE);

      if (labelKey == 'countLabel' && oldLabel.getTextString() != newLabel.getTextString()) {
        newLabel.setAlpha(0);
        newCell.addChild(oldLabel);

        var fadeOutAnim = new AnimFadeOut(newNBox.getCtx(), oldLabel, animationHandler.getAnimationDuration());
        var fadeInAnim = new AnimFadeIn(newNBox.getCtx(), newLabel, animationHandler.getAnimationDuration());
        animationHandler.add(fadeOutAnim, DvtNBoxDataAnimationHandler.UPDATE);
        animationHandler.add(fadeInAnim, DvtNBoxDataAnimationHandler.INSERT);

        Playable.appendOnEnd(fadeOutAnim, function() {newNBox.getDeleteContainer().addChild(oldLabel);});
      }
    }
    else {
      if (oldLabel) {
        oldLabel.setMatrix(DvtNBoxUtils.getGlobalMatrix(oldLabel));
        newNBox.getDeleteContainer().addChild(oldLabel);
        animationHandler.add(new AnimFadeOut(newNBox.getCtx(), oldLabel, animationHandler.getAnimationDuration()), DvtNBoxDataAnimationHandler.UPDATE);
      }
      if (newLabel) {
        newLabel.setAlpha(0);
        animationHandler.add(new AnimFadeIn(newNBox.getCtx(), newLabel, animationHandler.getAnimationDuration()), DvtNBoxDataAnimationHandler.UPDATE);
      }
    }
  }
};


/**
 * @override
 */
DvtNBoxCellRenderer.animateDelete = function(animationHandler, oldCell) {
  var nbox = animationHandler.getNewNBox();
  // Reparent the child container if any
  var childContainer = oldCell.getChildContainer();
  if (childContainer) {
    var globalMatrix = DvtNBoxUtils.getGlobalMatrix(childContainer);
    var cellParent = oldCell.getParent();
    cellParent.addChildAt(childContainer, cellParent.getChildIndex(oldCell) + 1);
    childContainer.setMatrix(globalMatrix);
  }
  // Add the cell to the delete container and fade out
  nbox.getDeleteContainer().addChild(oldCell);
  animationHandler.add(new AnimFadeOut(nbox.getCtx(), oldCell, animationHandler.getAnimationDuration()), DvtNBoxDataAnimationHandler.UPDATE);
};


/**
 * @override
 */
DvtNBoxCellRenderer.animateInsert = function(animationHandler, newCell) {
  var nbox = animationHandler.getNewNBox();
  // Reparent the child container if any
  var childContainer = newCell.getChildContainer();
  var childMatrix = null;
  if (childContainer) {
    childMatrix = childContainer.getMatrix();
    var globalMatrix = DvtNBoxUtils.getGlobalMatrix(newCell);
    var cellParent = newCell.getParent();
    cellParent.addChildAt(childContainer, cellParent.getChildIndex(newCell) + 1);
    childContainer.setMatrix(globalMatrix);
  }
  // Fade in the cell
  newCell.setAlpha(0);
  var playable = new AnimFadeIn(nbox.getCtx(), newCell, animationHandler.getAnimationDuration());
  if (childContainer) {
    Playable.appendOnEnd(playable, function() {newCell.addChild(childContainer); childContainer.setMatrix(childMatrix);});
  }
  animationHandler.add(playable, DvtNBoxDataAnimationHandler.UPDATE);
};


/**
 * Renders the drop site feedback for the specified cell
 *
 * @param {NBox} nbox the nbox component
 * @param {DvtNBoxCell} cell the cell
 * @return {dvt.Displayable} the drop site feedback
 */
DvtNBoxCellRenderer.renderDropSiteFeedback = function(nbox, cell) {
  var background = DvtNBoxUtils.getDisplayable(nbox, cell.getData(), 'background');
  var dropSiteFeedback = new Rect(nbox.getCtx(), background.getX(), background.getY(), background.getWidth(), background.getHeight());
  dropSiteFeedback.setPixelHinting(true);
  var style = DvtNBoxStyleUtils.getCellDropTargetStyle(nbox);
  DvtNBoxCellRenderer._applyStyleToRect(dropSiteFeedback, style);
  cell.addChildAt(dropSiteFeedback, cell.getChildIndex(background) + 1);
  return dropSiteFeedback;
};


/**
 * Applies CSS properties to a dvt.Rect (placed here to avoid changing the behavior of dvt.Rect.setCSSStyle)
 *
 * @param {dvt.Rect} rect the dvt.Rect
 * @param {dvt.CSSStyle} style  the dvt.CSSStyle
 */
DvtNBoxCellRenderer._applyStyleToRect = function(rect, style) {
  var bgFill = style.getStyle(CSSStyle.BACKGROUND);
  var colorFill = style.getStyle(CSSStyle.BACKGROUND_COLOR);
  var fill = bgFill ? bgFill : colorFill;
  if (fill) {
    DvtNBoxUtils.setFill(rect, fill);
  }
  var borderStyle = style.getStyle(CSSStyle.BORDER_STYLE);
  if (borderStyle == 'solid') {
    var borderColor = style.getStyle(CSSStyle.BORDER_COLOR);
    borderColor = borderColor ? borderColor : '#000000';
    var borderWidth = style.getStyle(CSSStyle.BORDER_WIDTH);
    borderWidth = borderWidth == null ? 1 : parseFloat(borderWidth);
    rect.setSolidStroke(borderColor, null, borderWidth);
  }
};


/**
 * @private
 * Adds accessibility attributes to the object
 * @param {NBox} nbox The nbox component
 * @param {object} cellData the cell data
 * @param {DvtNBoxCell} cellContainer the object that should be updated with accessibility attributes
 */
DvtNBoxCellRenderer._addAccessibilityAttributes = function(nbox, cellData, cellContainer) {
  var object = Agent.isTouchDevice() ? DvtNBoxUtils.getDisplayable(nbox, cellData, 'background') : cellContainer;
  object.setAriaRole('img');
  if (!Agent.deferAriaCreation()) {
    var desc = cellContainer.getAriaLabel();
    if (desc)
      object.setAriaProperty(NBoxConstants.LABEL, desc);
  }
};

DvtNBoxCellRenderer._createShadow = function(shadowStyle) {
  if (shadowStyle && shadowStyle.length > 0 && shadowStyle !== 'none') {
    // Different browsers return either:
    // Case 1: 'color h-offset v-offset blur spread'
    // Case 2: 'h-offset v-offset blur spread color'
    var tokens = shadowStyle.match(/\S+\([^\)]+\)|\S+/g);
    var firstChar = shadowStyle.charAt(0);
    if (firstChar >= '0' && firstChar <= '9') {
      // Case 2
      return new Shadow(parseInt(tokens[0]), parseInt(tokens[1]), parseInt(tokens[2])/2, tokens[4]);
    }
    else {
      // Case 1
      return new Shadow(parseInt(tokens[1]), parseInt(tokens[2]), parseInt(tokens[3])/2, tokens[0]);
    }
  }
  return null;
};

var DvtNBoxCell = function() {};

Obj.createSubclass(DvtNBoxCell, Container);

DvtNBoxCell.prototype.nboxType = 'cell';

/**
 * Returns a new instance of DvtNBoxCell
 *
 * @param {NBox} nbox the parent nbox
 * @param {object} data the data for this cell
 *
 * @return {DvtNBoxCell} the nbox cell
 */
DvtNBoxCell.newInstance = function(nbox, data) {
  var component = new DvtNBoxCell();
  component.Init(nbox, data);
  return component;
};


/**
 * Initializes this component
 *
 * @param {NBox} nbox the parent nbox
 * @param {object} data the data for this cell
 *
 * @protected
 */
DvtNBoxCell.prototype.Init = function(nbox, data) {
  var r = DvtNBoxDataUtils.getRowIndex(nbox, data[NBoxConstants.ROW]);
  var c = DvtNBoxDataUtils.getColumnIndex(nbox, data[NBoxConstants.COLUMN]);
  DvtNBoxCell.superclass.Init.call(this, nbox.getCtx(), null, 'c:' + r + ',' + c);
  this._nbox = nbox;
  this._data = data;
  this._data['__cacheId'] = 'cell:' + this.getId();
  this._scrollContainer = false;
};


/**
 * Gets the data object
 *
 * @return {object} the data object
 */
DvtNBoxCell.prototype.getData = function() {
  return this._data;
};


/**
 * Renders the nbox cell into the available space.
 * @param {dvt.Container} container the container to render into
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxCell.prototype.render = function(container, availSpace) {
  container.addChild(this);
  DvtNBoxUtils.setDisplayable(this._nbox, this._data, this);
  DvtNBoxCellRenderer.render(this._nbox, this._data, this, availSpace);
  this._nbox.EventManager.associate(this, this);
};


/**
 * Gets the container that child nodes should be added to
 *
 * @return {dvt.Container} the container that child nodes should be added to
 */
DvtNBoxCell.prototype.getChildContainer = function() {
  return this._childContainer;
};


/**
 * Sets the container that child nodes should be added to
 *
 * @param {dvt.Container} container the container that child nodes should be added to
 */
DvtNBoxCell.prototype.setChildContainer = function(container) {
  this._childContainer = container;
};


/**
 * @override
 */
DvtNBoxCell.prototype.animateUpdate = function(animationHandler, oldCell) {
  DvtNBoxCellRenderer.animateUpdate(animationHandler, oldCell, this);
};


/**
 * @override
 */
DvtNBoxCell.prototype.animateDelete = function(animationHandler, deleteContainer) {
  DvtNBoxCellRenderer.animateDelete(animationHandler, this);

};


/**
 * @override
 */
DvtNBoxCell.prototype.animateInsert = function(animationHandler) {
  DvtNBoxCellRenderer.animateInsert(animationHandler, this);
};


/**
 * @override
 */
DvtNBoxCell.prototype.isDoubleClickable = function() {
  return DvtNBoxDataUtils.isMaximizeEnabled(this._nbox);
};


/**
 * @override
 */
DvtNBoxCell.prototype.handleDoubleClick = function() {
  if (!this.isDoubleClickable())
    return;

  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(this._nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(this._nbox);
  DvtNBoxDataUtils.fireOptionChangeEvent(this._nbox, NBoxConstants.DRAWER, null);
  if (maximizedRow == this._data[NBoxConstants.ROW] && maximizedColumn == this._data[NBoxConstants.COLUMN]) {
    DvtNBoxDataUtils.fireOptionChangeEvent(this._nbox, NBoxConstants.MAXIMIZED_ROW, null);
    DvtNBoxDataUtils.fireOptionChangeEvent(this._nbox, NBoxConstants.MAXIMIZED_COLUMN, null);
  }
  else {
    DvtNBoxDataUtils.fireOptionChangeEvent(this._nbox, NBoxConstants.MAXIMIZED_ROW, this._data[NBoxConstants.ROW]);
    DvtNBoxDataUtils.fireOptionChangeEvent(this._nbox, NBoxConstants.MAXIMIZED_COLUMN, this._data[NBoxConstants.COLUMN]);
  }

  var otherCell;
  var oldFocus = this._nbox.EventManager.getFocus();
  // if no keyboard focus, set to cell
  if (!oldFocus)
    this._nbox.EventManager.setFocusObj(this);
  else {
    if (oldFocus.nboxType === 'node')
      otherCell = this.getCellIndex() != DvtNBoxDataUtils.getCellIndex(this._nbox, oldFocus.getData());
    else if (oldFocus.nboxType === 'overflow')
      otherCell = this != oldFocus.getParentCell();
    else if (oldFocus.nboxType === 'cell')
      otherCell = this.getCellIndex() != oldFocus.getCellIndex();
    else if (oldFocus.nboxType === 'categoryNode')
      otherCell = this.getCellIndex() != oldFocus.getData()['cell'];
  }

  // if keyboard focus on object in another cell, give focus to current cell.
  if (otherCell) {
    this._nbox.EventManager.setFocusObj(this);
    this._nbox.EventManager.setFocused(false);
  }

  this._nbox.processEvent(EventFactory.newRenderEvent());
};


/**
 * Determines whether the specified coordinates are contained by this cell
 *
 * @param {number} x the x coordinate
 * @param {number} y the y coordinate
 * @return {boolean} true if the coordinates are contained by this cell, false otherwise
 */
DvtNBoxCell.prototype.contains = function(x, y) {
  var background = DvtNBoxUtils.getDisplayable(this._nbox, this._data, 'background');
  var minX = this.getTranslateX() + background.getX();
  var minY = this.getTranslateY() + background.getY();
  var maxX = minX + background.getWidth();
  var maxY = minY + background.getHeight();
  return minX <= x && x <= maxX && minY <= y && y <= maxY;
};


/**
 * Renders the drop site feedback for this cell
 *
 * @return {dvt.Displayable} the drop site feedback
 */
DvtNBoxCell.prototype.renderDropSiteFeedback = function() {
  return DvtNBoxCellRenderer.renderDropSiteFeedback(this._nbox, this);
};


/**
 * Process a keyboard event
 * @param {dvt.KeyboardEvent} event
 */
DvtNBoxCell.prototype.HandleKeyboardEvent = function(event) {
  //use ENTER to drill down the cell and ESCAPE to drill up
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(this._nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(this._nbox);
  var isCellMaximized = (maximizedRow == this._data[NBoxConstants.ROW] && maximizedColumn == this._data[NBoxConstants.COLUMN]) ? true : false;

  if (!isCellMaximized && event.keyCode == KeyboardEvent.ENTER ||
      isCellMaximized && event.keyCode == KeyboardEvent.ESCAPE) {
    this.handleDoubleClick();
  }
};


/**
 * @override
 */
DvtNBoxCell.prototype.getAriaLabel = function() {
  var cellIndex = this.getCellIndex();
  var states = [];
  var translations = this._nbox.getOptions().translations;
  if (DvtNBoxDataUtils.isCellMaximized(this._nbox, cellIndex))
    states.push(translations.stateMaximized);
  else if (DvtNBoxDataUtils.isCellMinimized(this._nbox, cellIndex))
    states.push(translations.stateMinimized);
  states.push([translations.labelSize, this.getNodeCount()]);
  return Displayable.generateAriaLabel(this.getData()['shortDesc'], states);
};


//---------------------------------------------------------------------//
// Keyboard Support: DvtKeyboardNavigable impl                        //
//---------------------------------------------------------------------//
/**
 * @override
 */
DvtNBoxCell.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace)
{
  return DvtNBoxUtils.getKeyboardBoundingBox(this, targetCoordinateSpace);
};


/**
 * @override
 */
DvtNBoxCell.prototype.getTargetElem = function()
{
  return this.getElem();
};

/**
 * @override
 */
DvtNBoxCell.prototype.showKeyboardFocusEffect = function() {
  this._isShowingKeyboardFocusEffect = true;
  DvtNBoxUtils.getDisplayable(this._nbox, this.getData(), 'focusEffect').show();
};


/**
 * @override
 */
DvtNBoxCell.prototype.hideKeyboardFocusEffect = function() {
  this._isShowingKeyboardFocusEffect = false;
  DvtNBoxUtils.getDisplayable(this._nbox, this.getData(), 'focusEffect').hide();
};


/**
 * @override
 */
DvtNBoxCell.prototype.isShowingKeyboardFocusEffect = function() {
  return this._isShowingKeyboardFocusEffect;
};


/**
 * @override
 */
DvtNBoxCell.prototype.getNextNavigable = function(event)
{
  var next = null;
  if (this._nbox.EventManager.getKeyboardHandler().isNavigationEvent(event)) {
    if (event.keyCode == KeyboardEvent.OPEN_BRACKET) {
      next = this._getFirstNavigableChild(event);
    }
    else {
      next = this._getNextSibling(event);
    }
  }
  return next;
};


/**
 * @private
 * Gets next sibling cell based on direction
 * @param {dvt.KeyboardEvent} event
 * @return {DvtKeyboardNavigable} a sibling cell
 */
DvtNBoxCell.prototype._getNextSibling = function(event) {
  var cells = [];
  var cellCount = DvtNBoxDataUtils.getRowCount(this._nbox) * DvtNBoxDataUtils.getColumnCount(this._nbox);
  for (var i = 0; i < cellCount; i++)
    cells.push(DvtNBoxUtils.getDisplayable(this._nbox, DvtNBoxDataUtils.getCell(this._nbox, i)));
  return KeyboardHandler.getNextNavigable(this, event, cells);
};


/**
 * @private
 * Gets a first navigable child node based on direction
 * @param {dvt.KeyboardEvent} event
 * @return {DvtKeyboardNavigable} a sibling cell
 */
DvtNBoxCell.prototype._getFirstNavigableChild = function(event) {
  //node or drawer
  var childObj = null;
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(this._nbox);
  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(this._nbox);
  var drawerData = DvtNBoxDataUtils.getDrawer(this._nbox);
  if (drawerData && maximizedRow == this.getData()[NBoxConstants.ROW] && maximizedColumn == this.getData()[NBoxConstants.COLUMN]) {
    childObj = DvtNBoxUtils.getDisplayable(this._nbox, drawerData);
  }
  else {
    var container = this.getChildContainer();
    if (container.getScrollingPane)
      container = container.getScrollingPane();
    if (container.getNumChildren() > 0 && (container.getChildAt(0).nboxType === 'node' || container.getChildAt(0).nboxType === 'overflow')) {
      //find first individual node
      childObj = DvtNBoxDataUtils.getFirstNavigableNode(this._nbox, container);
    }
    else {
      // find first category node
      var nodes = [];
      for (var i = 0; i < container.getNumChildren(); i++) {
        var child = container.getChildAt(i);
        if (child.nboxType === 'categoryNode')
          nodes.push(child);
      }
      childObj = DvtNBoxKeyboardHandler.getNextNavigableCategoryNode(null, event, nodes);
    }
  }
  return childObj;
};

/**
 * Get the current cell index
 * @return {Number} cell index
 */
DvtNBoxCell.prototype.getCellIndex = function() {
  return DvtNBoxDataUtils.getCellIndexByRowColumn(this._nbox, this.getData()[NBoxConstants.ROW], this.getData()[NBoxConstants.COLUMN]);
};

/**
 * Get the cell label
 * @return {String} cell label
 */
DvtNBoxCell.prototype.getLabel = function() {
  var label = this.getData()[NBoxConstants.LABEL];
  return (label ? label : null);
};

/**
 * Get the cell count label
 * @return {String} cell count label
 */
DvtNBoxCell.prototype.getCountLabel = function() {
  var data = this.getData();
  // Custom count label support
  // Custom count label via function
  var countLabelFunc = this._nbox.getOptions()['countLabel'];
  if (countLabelFunc) {
    var dataContext = {
      'row' : data['row'],
      'column' : data['column'],
      'nodeCount' : this.getNodeCount(),
      'highlightedNodeCount' : this.getHighlightedNodeCount(),
      'totalNodeCount' : DvtNBoxDataUtils.getNodeCount(this._nbox)
    };
    return countLabelFunc(dataContext);
  }
  return data['countLabel'];
};

/**
 * Get the cell background
 * @return {String} cell background
 */
DvtNBoxCell.prototype.getBackground = function() {
  var style = DvtNBoxStyleUtils.getCellStyle(this._nbox, this.getCellIndex());
  var bgFill = style.getStyle(CSSStyle.BACKGROUND);
  var colorFill = style.getStyle(CSSStyle.BACKGROUND_COLOR);
  return bgFill ? bgFill : colorFill;
};

/**
 * Returns whether the cell has overflow indicator
 * @return {boolean} whether the cell has overflow indicator
 */
DvtNBoxCell.prototype.hasOverflowIndicator = function() {
  var options = this._nbox.getOptions();
  if (options && options['__layout'] && options['__layout']['__nodeLayout'] && options['__layout']['__nodeLayout']['cellLayouts']) {
    var index = this.getCellIndex();
    var cellLayout = options['__layout']['__nodeLayout']['cellLayouts'][index];
    if (cellLayout)
      return cellLayout['overflow'];
  }
  return false;
};

/**
 * Get the number of nodes in the cell
 * @return {Number} number of nodes in the cell
 */
DvtNBoxCell.prototype.getNodeCount = function() {
  var cellCounts = DvtNBoxDataUtils.getCellCounts(this._nbox);
  return cellCounts['total'][this.getCellIndex()];
};


/**
 * Get the number of highlighted nodes in the cell
 * @return {Number} number of highlighted nodes in the cell
 */
DvtNBoxCell.prototype.getHighlightedNodeCount = function() {
  var cellCounts = DvtNBoxDataUtils.getCellCounts(this._nbox);
  if (cellCounts['highlighted'])
    return cellCounts['highlighted'][this.getCellIndex()];
  return null;
};

/**
 * Get the node at the specific index
 * @param {Number} index  node index
 * @return {DvtNBoxNode} node object
 */
DvtNBoxCell.prototype.getNode = function(index) {
  var nodes = this._nbox.getOptions()[NBoxConstants.NODES];
  if (nodes) {
    var nodeIndex = 0;
    for (var idx = 0; idx < nodes.length; idx++) {
      if (this.getData()[NBoxConstants.ROW] == nodes[idx][NBoxConstants.ROW] && this.getData()[NBoxConstants.COLUMN] == nodes[idx][NBoxConstants.COLUMN]
         && !DvtNBoxDataUtils.isNodeHidden(this._nbox, nodes[idx])) {
        if (index == nodeIndex)
          return nodes[idx];
        nodeIndex++;
      }
    }
  }
  return null;
};


/**
 * Returns the cell displayable (itself)
 *
 * @return {dvt.Displayable} displayable
 */
DvtNBoxCell.prototype.getDisplayable = function() {
  return this;
};

/**
 * Returns the displayable that should receive the keyboard focus
 *
 * @return {dvt.Displayable} displayable to receive keyboard focus
 */
DvtNBoxCell.prototype.getKeyboardFocusDisplayable = function() {
  // return the cell
  if (DvtNBoxDataUtils.getGroupBehavior(this._nbox) != NBoxConstants.GROUP_BEHAVIOR_ACROSS_CELLS ||
      !this._nbox.getOptions()['__groups']) {
    return DvtNBoxUtils.getDisplayable(this._nbox, DvtNBoxDataUtils.getCell(this._nbox, DvtNBoxDataUtils.getCellIndex(this._nbox, this.getData())));
  }
  return null;
};

/**
 * Renderer for DvtNBoxCategoryNode.
 * @class
 */
var DvtNBoxCategoryNodeRenderer = new Object();

Obj.createSubclass(DvtNBoxCategoryNodeRenderer, Obj);


/**
 * Renders the nbox category node.
 * @param {NBox} nbox The nbox component
 * @param {object} nodeData the category node data being rendered
 * @param {DvtNBoxCategoryNode} nodeContainer The container to render into.
 * @param {number} scale The number of pixels per unit (used to determine the size of this category node based on its node count)
 * @param {number} gap The number of pixels to shrink this node (to leave padding in the force layout)
 */
DvtNBoxCategoryNodeRenderer.render = function(nbox, nodeData, nodeContainer, scale, gap) {
  DvtNBoxCategoryNodeRenderer._renderNodeBackground(nbox, nodeData, nodeContainer, scale, gap);
  var rendered = DvtNBoxCategoryNodeRenderer._renderNodeIndicator(nbox, nodeData, nodeContainer, scale, gap);
  DvtNBoxCategoryNodeRenderer._renderNodeCount(nbox, nodeData, nodeContainer, scale, rendered, gap);
  DvtNBoxCategoryNodeRenderer._addAccessibilityAttributes(nbox, nodeContainer);
};


/**
 * Renders the node background
 * @param {NBox} nbox
 * @param {object} node the category node data being rendered
 * @param {DvtNBoxCategoryNode} nodeContainer the container for the node contents
 * @param {number} scale The number of pixels per unit (used to determine the size of this category node based on its node count)
 * @param {number} gap The number of pixels to shrink this node (to leave padding in the force layout)
 */
DvtNBoxCategoryNodeRenderer._renderNodeBackground = function(nbox, node, nodeContainer, scale, gap) {
  node['__scale'] = scale;
  node['__gap'] = gap;
  var side = Math.max(0, DvtNBoxCategoryNodeRenderer.getSideLength(node));
  var borderRadius = DvtNBoxStyleUtils.getNodeBorderRadius(nbox);
  var hoverColor = DvtNBoxStyleUtils.getNodeHoverColor(nbox);
  var selectionColor = DvtNBoxStyleUtils.getNodeSelectionColor(nbox);

  var selectionRect = new Rect(nbox.getCtx(),
      -side / 2,
      -side / 2,
      side,
      side);
  selectionRect.setFill(null);
  if (borderRadius) {
    selectionRect.setRx(borderRadius);
    selectionRect.setRy(borderRadius);
  }
  selectionRect.setHoverStroke(new Stroke(hoverColor, 1, 2), new Stroke(selectionColor, 1, 4));
  selectionRect.setSelectedStroke(new Stroke(selectionColor, 1, 4), null);
  selectionRect.setSelectedHoverStroke(new Stroke(hoverColor, 1, 2), new Stroke(selectionColor, 1, 6));
  nodeContainer.addChild(selectionRect);
  nodeContainer.setSelectionShape(selectionRect);

  var nodeRect = new Rect(nbox.getCtx(),
      -side / 2,
      -side / 2,
      side,
      side);
  if (borderRadius) {
    nodeRect.setRx(borderRadius);
    nodeRect.setRy(borderRadius);
  }
  var color = DvtNBoxStyleUtils.getCategoryNodeColor(nbox, node);
  nodeRect.setSolidFill(color);
  nodeContainer.addChild(nodeRect);
};


/**
 * Gets the length of a side of the specified category node
 *
 * @param {object} the category node data
 *
 * @return {number} the side length
 */
DvtNBoxCategoryNodeRenderer.getSideLength = function(node) {
  return node['__scale'] * Math.sqrt(node['nodeIndices'].length) - node['__gap'];
};


/**
 * Renders the node indicator
 * @param {NBox} nbox
 * @param {object} node the node data being rendered
 * @param {DvtNBoxCategoryNode} nodeContainer the container for the node contents
 * @param {number} scale The number of pixels per unit (used to determine the size of this category node based on its node count)
 * @param {number} gap The number of pixels to shrink this node (to leave padding in the force layout)
 */
DvtNBoxCategoryNodeRenderer._renderNodeIndicator = function(nbox, node, nodeContainer, scale, gap) {
  var retVal = false;
  var options = nbox.getOptions();
  var markerGap = options['__layout']['markerGap'];

  var rtl = Agent.isRightToLeft(nbox.getCtx());

  var side = scale * Math.sqrt(node['nodeIndices'].length) - gap;

  var color = DvtNBoxStyleUtils.getCategoryNodeColor(nbox, node);
  var contrastColor = ColorUtils.getContrastingTextColor(color);

  var indicatorWidth = side / 4;
  var indicatorIconScale = 1;
  var indicatorX = rtl ? side / 2 - indicatorWidth : -side / 2;
  var indicatorIcon = DvtNBoxStyleUtils.getStyledCategoryIndicatorIcon(nbox, node);
  if (indicatorIcon) {
    var indicatorIconWidth = indicatorIcon[NBoxConstants.WIDTH];
    var indicatorIconHeight = indicatorIcon[NBoxConstants.HEIGHT];
    var xScale = indicatorWidth / (indicatorIconWidth + 2 * markerGap);
    var yScale = side / (indicatorIconHeight + 2 * markerGap);
    indicatorIconScale = Math.min(xScale, yScale);
  }

  var indicatorColor = DvtNBoxStyleUtils.getCategoryNodeIndicatorColor(nbox, node);
  if (indicatorColor) {
    // Render the indicator background swatch
    contrastColor = ColorUtils.getContrastingTextColor(indicatorColor);
    var bgRect = new Rect(nbox.getCtx(), indicatorX, -side / 2, indicatorWidth, side);
    bgRect.setSolidFill(indicatorColor);
    nodeContainer.addChild(bgRect);
    retVal = true;
  }

  if (indicatorIcon) {
    var indicatorIconColor = indicatorIcon[NBoxConstants.COLOR] ? indicatorIcon[NBoxConstants.COLOR] : contrastColor;
    var indicatorMarker = new SimpleMarker(nbox.getCtx(),
        indicatorIcon[NBoxConstants.SHAPE],
        (rtl ? 1 : -1) * (side - indicatorWidth) / 2,
        0,
        indicatorIcon[NBoxConstants.WIDTH] * indicatorIconScale,
        indicatorIcon[NBoxConstants.HEIGHT] * indicatorIconScale,
        indicatorIcon[NBoxConstants.BORDER_RADIUS]);

    if (indicatorIcon[NBoxConstants.BORDER_WIDTH])
      indicatorMarker.setSolidStroke(indicatorIcon[NBoxConstants.BORDER_COLOR], null, indicatorIcon[NBoxConstants.BORDER_WIDTH]);

    if (indicatorIcon[NBoxConstants.PATTERN] && indicatorIcon[NBoxConstants.PATTERN] != 'none') {
      indicatorMarker.setFill(new PatternFill(indicatorIcon[NBoxConstants.PATTERN], indicatorIconColor, color));
    }
    else {
      indicatorMarker.setSolidFill(indicatorIconColor);
    }
    //Set the Indicator marker custom style and class name
    indicatorMarker.setStyle(indicatorIcon['style']).setClassName(indicatorIcon['className']);

    nodeContainer.addChild(indicatorMarker);
    DvtNBoxUtils.setDisplayable(nbox, node, indicatorMarker, NBoxConstants.INDICATOR_ICON);
    retVal = true;
  }
  return retVal;
};


/**
 * Renders the node count
 * @param {NBox} nbox
 * @param {object} node the node data being rendered
 * @param {DvtNBoxCategoryNode} nodeContainer the container for the node contents
 * @param {number} scale The number of pixels per unit (used to determine the size of this category node based on its node count)
 * @param {boolean} bIndicator true if an indicator was rendered, false otherwise
 * @param {number} gap The number of pixels to shrink this node (to leave padding in the force layout)
 */
DvtNBoxCategoryNodeRenderer._renderNodeCount = function(nbox, node, nodeContainer, scale, bIndicator, gap) {
  var options = nbox.getOptions();
  var labelGap = options['__layout']['categoryNodeLabelGap'];

  var rtl = Agent.isRightToLeft(nbox.getCtx());

  var alphaFade = DvtNBoxStyleUtils.getFadedNodeAlpha(nbox);
  var highlightedItems = DvtNBoxDataUtils.getHighlightedItems(nbox);
  var label = DvtNBoxUtils.getDisplayable(nbox, node, 'label');
  var count;
  if (highlightedItems) {
    count = node['highlightedCount'];
    if (count == 0) {
      if (label)
        label.setTextString('');
      nodeContainer.setAlpha(alphaFade);
      return;
    }
  }
  else {
    count = node['nodeIndices'].length;
  }
  var side = scale * Math.sqrt(node['nodeIndices'].length) - gap;
  var width = bIndicator ? .75 * side : side;
  var countX = (rtl ? -1 : 1) * (side - width) / 2;
  var color = DvtNBoxStyleUtils.getCategoryNodeColor(nbox, node);
  var contrastColor = ColorUtils.getContrastingTextColor(color);
  var labelBounds = new Rectangle(0, 0, width - 2 * labelGap, side - 2 * labelGap);
  if (label)
    label.setTextString('' + count);
  else {
    label = DvtNBoxUtils.createText(nbox.getCtx(), '' + count, DvtNBoxStyleUtils.getCategoryNodeLabelStyle(nbox), OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_CENTRAL);
    DvtNBoxUtils.setDisplayable(nbox, node, label, 'label');
  }
  var fontSize = TextUtils.getOptimalFontSize(label.getCtx(), label.getTextString(), label.getCSSStyle(), labelBounds);
  label.setFontSize(fontSize);
  if (TextUtils.fitText(label, width - 2 * labelGap, side - 2 * labelGap, nodeContainer)) {
    DvtNBoxUtils.positionText(label, countX, 0);
    label.setSolidFill(contrastColor);
  }
};


/**
 * @override
 */
DvtNBoxCategoryNodeRenderer.animateUpdate = function(animationHandler, oldNode, newNode) {
  var oldGlobalMatrix = DvtNBoxUtils.getGlobalMatrix(oldNode);
  var newGlobalMatrix = DvtNBoxUtils.getGlobalMatrix(newNode);
  var newMatrix = newNode.getMatrix();
  var parent = newNode.getParent();
  oldNode.setAlpha(0);
  animationHandler.getNewNBox().addChild(newNode);
  newNode.setMatrix(oldGlobalMatrix);
  var playable = new AnimMoveTo(newNode.getCtx(), newNode, new Point(newGlobalMatrix.getTx(), newGlobalMatrix.getTy()), animationHandler.getAnimationDuration());
  Playable.appendOnEnd(playable, function() {parent.addChild(newNode); newNode.setMatrix(newMatrix);});
  animationHandler.add(playable, DvtNBoxDataAnimationHandler.UPDATE);
};


/**
 * @override
 */
DvtNBoxCategoryNodeRenderer.animateDelete = function(animationHandler, oldNode) {
  var animationPhase = DvtNBoxDataAnimationHandler.UPDATE;

  var oldNBox = animationHandler.getOldNBox();
  var newNBox = animationHandler.getNewNBox();

  if (DvtNBoxCategoryNodeRenderer.isMaximizeEqual(oldNBox, newNBox) && DvtNBoxCategoryNodeRenderer.isGroupingEqual(oldNBox, newNBox)) {
    // The grouping didn't change so the nodes represented these nodes were actually inserted/unhidden
    animationPhase = DvtNBoxDataAnimationHandler.DELETE;
  }

  var scalePlayable = new AnimScaleTo(newNBox.getCtx(), oldNode, new Point(.01, .01), animationHandler.getAnimationDuration());
  animationHandler.add(scalePlayable, animationPhase);

  var fadePlayable = new AnimFadeOut(newNBox.getCtx(), oldNode, animationHandler.getAnimationDuration());
  animationHandler.add(fadePlayable, animationPhase);

  oldNode.setMatrix(DvtNBoxUtils.getGlobalMatrix(oldNode));
  newNBox.getDeleteContainer().addChild(oldNode);
};


/**
 * @override
 */
DvtNBoxCategoryNodeRenderer.animateInsert = function(animationHandler, newNode) {
  var animationPhase = DvtNBoxDataAnimationHandler.UPDATE;

  var oldNBox = animationHandler.getOldNBox();
  var newNBox = animationHandler.getNewNBox();

  if (DvtNBoxCategoryNodeRenderer.isMaximizeEqual(oldNBox, newNBox) && DvtNBoxCategoryNodeRenderer.isGroupingEqual(oldNBox, newNBox)) {
    // The grouping didn't change so the nodes represented these nodes were actually inserted/unhidden
    animationPhase = DvtNBoxDataAnimationHandler.INSERT;
  }

  newNode.setScaleX(0.01);
  newNode.setScaleY(0.01);
  var scalePlayable = new AnimScaleTo(newNBox.getCtx(), newNode, new Point(1, 1), animationHandler.getAnimationDuration());
  animationHandler.add(scalePlayable, animationPhase);

  var fadeAnim = new CustomAnimation(newNBox.getCtx(), newNode, animationHandler.getAnimationDuration());
  fadeAnim.getAnimator().addProp(Animator.TYPE_NUMBER, newNode, newNode.getAlpha, newNode.setAlpha, newNode.getAlpha());
  animationHandler.add(fadeAnim, animationPhase);

  newNode.setAlpha(0);

};


/**
 * Determines whether the grouping is the same between two nbox states
 *
 * @param {object} oldNBox an object representing the old NBox state
 * @param {NBox] newNBox the new NBox
 *}
 * @return {boolean} true if the grouping is the same, false otherwise
 */
DvtNBoxCategoryNodeRenderer.isGroupingEqual = function(oldNBox, newNBox) {
  var oldGroupBehavior = DvtNBoxDataUtils.getGroupBehavior(oldNBox);
  var newGroupBehavior = DvtNBoxDataUtils.getGroupBehavior(newNBox);

  var oldNodeCount = DvtNBoxDataUtils.getNodeCount(oldNBox);
  var newNodeCount = DvtNBoxDataUtils.getNodeCount(newNBox);

  var identical = false;
  if (oldGroupBehavior == newGroupBehavior && oldNodeCount == newNodeCount) {
    identical = true;
    for (var i = 0; i < oldNodeCount; i++) {
      var oldCategory = DvtNBoxDataUtils.getNodeGroupId(DvtNBoxDataUtils.getNode(oldNBox, i));
      var newCategory = DvtNBoxDataUtils.getNodeGroupId(DvtNBoxDataUtils.getNode(newNBox, i));
      if (oldCategory != newCategory) {
        identical = false;
        break;
      }
    }
  }
  return identical;
};


/**
 * Determines whether the maximize is the same between two nbox states
 *
 * @param {object} oldNBox an object representing the old NBox state
 * @param {NBox} newNBox the new NBox
 *
 * @return {boolean} true if the maximize is the same, false otherwise
 */
DvtNBoxCategoryNodeRenderer.isMaximizeEqual = function(oldNBox, newNBox) {
  var oldMaximizedRow = DvtNBoxDataUtils.getMaximizedRow(oldNBox);
  var oldMaximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(oldNBox);
  var newMaximizedRow = DvtNBoxDataUtils.getMaximizedRow(newNBox);
  var newMaximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(newNBox);

  return oldMaximizedRow == newMaximizedRow && oldMaximizedColumn == newMaximizedColumn;
};


/**
 * @private
 * Adds accessibility attributes to the object
 * @param {NBox} nbox the nbox
 * @param {DvtNBoxCategoryNode} object the object that should be updated with accessibility attributes
 */
DvtNBoxCategoryNodeRenderer._addAccessibilityAttributes = function(nbox, object) {
  object.setAriaRole('img');
  if (!Agent.deferAriaCreation()) {
    var desc = object.getAriaLabel();
    if (desc)
      object.setAriaProperty(NBoxConstants.LABEL, desc);
  }
};

/**
 * Renderer for DvtNBoxDrawer.
 * @class
 */
var DvtNBoxDrawerRenderer = new Object();

Obj.createSubclass(DvtNBoxDrawerRenderer, Obj);


/**
 * Renders the nbox drawer
 * @param {NBox} nbox The nbox component
 * @param {object} data the data associated with the currently open group
 * @param {DvtNBoxDrawer} drawerContainer The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxDrawerRenderer.render = function(nbox, data, drawerContainer, availSpace) {
  var drawerBounds = DvtNBoxDrawerRenderer.getDrawerBounds(nbox, data, availSpace);
  data['__drawerBounds'] = drawerBounds;
  drawerContainer.setTranslate(drawerBounds.x, drawerBounds.y);

  var keyboardFocusEffect = new KeyboardFocusEffect(nbox.getCtx(), drawerContainer, new Rectangle(-1, -1, drawerBounds.w + 2, drawerBounds.h + 2));
  DvtNBoxUtils.setDisplayable(nbox, data, keyboardFocusEffect, 'focusEffect');

  DvtNBoxDrawerRenderer._renderBody(nbox, data, drawerContainer);
  DvtNBoxDrawerRenderer._renderHeader(nbox, data, drawerContainer);
  DvtNBoxDrawerRenderer._addAccessibilityAttributes(nbox, data, drawerContainer);
};


/**
 * Renders the nbox drawer header
 * @param {NBox} nbox The nbox component
 * @param {object} data the data associated with the currently open group
 * @param {DvtNBoxDrawer} drawerContainer The container to render into.
 * @private
 */
DvtNBoxDrawerRenderer._renderHeader = function(nbox, data, drawerContainer) {
  var options = nbox.getOptions();
  var drawerButtonGap = options['__layout']['drawerButtonGap'];
  var drawerStartGap = options['__layout']['drawerStartGap'];
  var drawerLabelGap = options['__layout']['drawerLabelGap'];
  var drawerCountHGap = options['__layout']['drawerCountHorizontalGap'];
  var drawerCountVGap = options['__layout']['drawerCountVerticalGap'];
  var drawerHeaderHeight = options['__layout']['drawerHeaderHeight'];
  var indicatorGap = options['__layout']['nodeIndicatorGap'];
  var swatchSize = options['__layout']['nodeSwatchSize'];

  var rtl = Agent.isRightToLeft(nbox.getCtx());

  var categoryNode = DvtNBoxDataUtils.getCategoryNode(nbox, data[NBoxConstants.ID]);
  var nodeCount = categoryNode['nodeIndices'].length;

  var drawerBounds = data['__drawerBounds'];

  // Render the close button
  var close = options['_resources']['close'];
  var closeWidth = close['width'];
  if (drawerBounds.w > closeWidth) {
    var closeHeight = close['height'];
    var context = nbox.getCtx();
    var iconStyle = ToolkitUtils.getIconStyle(context, close['class']);
    var closeButton = new IconButton(context, 'borderless', {style: iconStyle, size: closeWidth}, null, null, drawerContainer.closeDrawer, drawerContainer);

    // Center/hide close button if drawer too thin for normal rendering
    var closeButtonX = rtl ? Math.min((drawerBounds.w - closeWidth) / 2, drawerButtonGap) : Math.max((drawerBounds.w - closeWidth) / 2, drawerBounds.w - drawerButtonGap - closeWidth);
    closeButton.setTranslate(closeButtonX,
                             drawerHeaderHeight / 2 - closeHeight / 2);
    drawerContainer.addChild(closeButton);
  }


  // Render the count indicator
  var countColor = DvtNBoxStyleUtils.getCategoryNodeColor(nbox, categoryNode);
  var contrastColor = ColorUtils.getContrastingTextColor(countColor);
  var indicatorColor = DvtNBoxStyleUtils.getCategoryNodeIndicatorColor(nbox, categoryNode);
  var indicatorIconColor = indicatorColor ? ColorUtils.getContrastingTextColor(indicatorColor) : contrastColor;
  var indicatorIcon = DvtNBoxStyleUtils.getStyledCategoryIndicatorIcon(nbox, categoryNode);
  var indicatorIconWidth = swatchSize;
  var scale = 1;
  if (indicatorIcon) {
    var indicatorIconW = indicatorIcon[NBoxConstants.WIDTH];
    var indicatorIconH = indicatorIcon[NBoxConstants.HEIGHT];
    scale = swatchSize / indicatorIconH;
    indicatorIconWidth = scale * indicatorIconW;
    indicatorIconColor = indicatorIcon[NBoxConstants.COLOR] ? indicatorIcon[NBoxConstants.COLOR] : indicatorIconColor;
  }

  var countBorderRadius = DvtNBoxStyleUtils.getDrawerCountBorderRadius(nbox);

  var halign = rtl ? OutputText.H_ALIGN_RIGHT : OutputText.H_ALIGN_LEFT;
  var countLabel = DvtNBoxUtils.createText(nbox.getCtx(), '' + nodeCount, DvtNBoxStyleUtils.getDrawerCountLabelStyle(nbox), halign, OutputText.V_ALIGN_CENTRAL);
  var countLabelDims = countLabel.getDimensions();
  var countLabelWidth = countLabelDims.w;
  var countLabelHeight = countLabelDims.h;
  var countIndicatorHeight = countLabelHeight + 2 * drawerCountVGap;
  var countIndicatorSectionWidth = indicatorIcon ? indicatorIconWidth + 2 * indicatorGap : (indicatorColor ? swatchSize : 0);
  var countLabelSectionWidth = countLabelWidth + 2 * drawerCountHGap;
  var countIndicatorWidth = countIndicatorSectionWidth + countLabelSectionWidth;
  var countIndicatorShape;
  if (drawerBounds.w - closeWidth - 2 * drawerButtonGap - drawerStartGap > countIndicatorWidth) {
    var countIndicatorPath = PathUtils.roundedRectangle(0, 0, countIndicatorWidth, countIndicatorHeight, countBorderRadius, countBorderRadius, countBorderRadius, countBorderRadius);
    countIndicatorShape = new Path(nbox.getCtx(), countIndicatorPath);
    countIndicatorShape.setSolidFill(countColor);
    drawerContainer.addChild(countIndicatorShape);

    var indicatorX = rtl ? countLabelSectionWidth : 0;
    if (countIndicatorSectionWidth > 0) {
      if (indicatorColor) {
        var indicatorSectionPath = PathUtils.roundedRectangle(indicatorX,
            0,
            countIndicatorSectionWidth,
            countIndicatorHeight,
            rtl ? 0 : countBorderRadius,
            rtl ? countBorderRadius : 0,
            rtl ? countBorderRadius : 0,
            rtl ? 0 : countBorderRadius);
        var indicatorSection = new Path(nbox.getCtx(), indicatorSectionPath);
        indicatorSection.setSolidFill(indicatorColor);
        countIndicatorShape.addChild(indicatorSection);
      }
      if (indicatorIcon) {
        var indicatorMarker = new SimpleMarker(nbox.getCtx(),
            indicatorIcon[NBoxConstants.SHAPE],
            indicatorX + countIndicatorSectionWidth / 2,
            countIndicatorHeight / 2,
            indicatorIcon[NBoxConstants.WIDTH] * scale,
            indicatorIcon[NBoxConstants.HEIGHT] * scale,
            indicatorIcon[NBoxConstants.BORDER_RADIUS]);

        if (indicatorIcon[NBoxConstants.BORDER_WIDTH])
          indicatorMarker.setSolidStroke(indicatorIcon[NBoxConstants.BORDER_COLOR], null, indicatorIcon[NBoxConstants.BORDER_WIDTH]);

        if (indicatorIcon[NBoxConstants.PATTERN] && indicatorIcon[NBoxConstants.PATTERN] != 'none') {
          indicatorMarker.setFill(new PatternFill(indicatorIcon[NBoxConstants.PATTERN], indicatorIconColor, indicatorColor ? indicatorColor : countColor));
        }
        else {
          indicatorMarker.setSolidFill(indicatorIconColor);
        }
        //Set the Indicator marker custom style and class name
        indicatorMarker.setStyle(indicatorIcon['style']).setClassName(indicatorIcon['className']);

        countIndicatorShape.addChild(indicatorMarker);
      }
    }

    countIndicatorShape.addChild(countLabel);
    countLabel.setSolidFill(contrastColor);
    var countLabelX = rtl ? countLabelSectionWidth - drawerCountHGap : countIndicatorSectionWidth + drawerCountHGap;
    DvtNBoxUtils.positionText(countLabel, countLabelX, countIndicatorHeight / 2);
  }

  // Render the category label
  var categoryText = DvtNBoxUtils.getDisplayable(nbox, categoryNode).getLabel();
  var categoryLabel = DvtNBoxUtils.createText(nbox.getCtx(), categoryText, DvtNBoxStyleUtils.getDrawerLabelStyle(nbox), halign, OutputText.V_ALIGN_CENTRAL);
  var labelOffset = 0;
  if (TextUtils.fitText(categoryLabel, drawerBounds.w - drawerStartGap - drawerLabelGap - countIndicatorWidth - 2 * drawerButtonGap - closeWidth, drawerHeaderHeight, drawerContainer)) {
    var labelX = rtl ? drawerBounds.w - drawerStartGap : drawerStartGap;
    DvtNBoxUtils.positionText(categoryLabel, labelX, drawerHeaderHeight / 2);
    var categoryLabelDims = categoryLabel.getDimensions();
    labelOffset = categoryLabelDims.w + drawerLabelGap;
  }

  // Position the count indicator
  if (countIndicatorShape) {
    var countIndicatorX = rtl ? drawerBounds.w - drawerStartGap - countIndicatorWidth - labelOffset : drawerStartGap + labelOffset;
    countIndicatorShape.setTranslate(countIndicatorX, (drawerHeaderHeight - countIndicatorHeight) / 2);
  }

};


/**
 * Renders the nbox drawer body
 * @param {NBox} nbox The nbox component
 * @param {object} data the data associated with the currently open group
 * @param {DvtNBoxDrawer} drawerContainer The container to render into.
 * @private
 */
DvtNBoxDrawerRenderer._renderBody = function(nbox, data, drawerContainer) {
  var options = nbox.getOptions();
  var gridGap = parseInt(options['__layout']['gridGap']);
  var drawerHeaderHeight = options['__layout']['drawerHeaderHeight'];
  var drawerBounds = data['__drawerBounds'];

  var rtl = Agent.isRightToLeft(nbox.getCtx());

  // Render the body shape
  var borderRadius = DvtNBoxStyleUtils.getDrawerBorderRadius(nbox);
  var borderColor = DvtNBoxStyleUtils.getDrawerBorderColor(nbox);

  var bodyPath = PathUtils.roundedRectangle(0, 0, drawerBounds.w, drawerBounds.h, borderRadius, borderRadius, borderRadius, borderRadius);
  var body = new Path(nbox.getCtx(), bodyPath);
  DvtNBoxUtils.setFill(body, DvtNBoxStyleUtils.getDrawerBackground(nbox));
  body.setSolidStroke(borderColor);
  body.setPixelHinting(true);
  drawerContainer.addChild(body);
  DvtNBoxUtils.setDisplayable(nbox, data, body, 'background');

  // Render the nodes
  data['__childArea'] = new Rectangle(gridGap, drawerHeaderHeight + gridGap, Math.max(drawerBounds.w - 2 * gridGap, 0), Math.max(drawerBounds.h - drawerHeaderHeight - 2 * gridGap, 0));
  var scrollContainer = new SimpleScrollableContainer(nbox.getCtx(), drawerBounds.w, drawerBounds.h - drawerHeaderHeight);
  scrollContainer.setTranslate(0, drawerHeaderHeight);
  drawerContainer.addChild(scrollContainer);
  drawerContainer.setChildContainer(scrollContainer);

  var alphaFade = DvtNBoxStyleUtils.getFadedNodeAlpha(nbox);
  var highlightedItems = DvtNBoxDataUtils.getHighlightedItems(nbox);
  var highlightedMap = {};
  if (highlightedItems) {
    for (var i = 0; i < highlightedItems.length; i++) {
      highlightedMap[highlightedItems[i][NBoxConstants.ID]] = true;
    }
  }

  var nodes = DvtNBoxDrawerRenderer.calculateNodeOrders(nbox, data);
  var nodeLayout = DvtNBoxNodeRenderer.calculateNodeDrawerLayout(nbox, data, nodes);
  var hGridSize = nodeLayout['indicatorSectionWidth'] + nodeLayout['iconSectionWidth'] + nodeLayout['labelSectionWidth'] + gridGap;
  var vGridSize = nodeLayout['nodeHeight'] + gridGap;

  var container = DvtNBoxUtils.getDisplayable(nbox, data).getChildContainer();
  for (var n = 0; n < nodes.length; n++) {
    var node = nodes[n];
    if (nodeLayout['drawerLayout'][NBoxConstants.COLUMNS] != 0 && nodeLayout['drawerLayout'][NBoxConstants.ROWS] != 0) {
      var nodeContainer = new DvtNBoxNode(nbox, node);
      var gridXOrigin = data['__childArea'].x + (data['__childArea'].w - nodeLayout['drawerLayout'][NBoxConstants.COLUMNS] * hGridSize + gridGap) / 2;
      var gridYOrigin = gridGap;
      var gridColumn = (n % nodeLayout['drawerLayout'][NBoxConstants.COLUMNS]);
      if (rtl) {
        gridColumn = nodeLayout['drawerLayout'][NBoxConstants.COLUMNS] - gridColumn - 1;
      }
      var gridRow = Math.floor((n / nodeLayout['drawerLayout'][NBoxConstants.COLUMNS]));
      nodeContainer.setTranslate(gridXOrigin + hGridSize * gridColumn, gridYOrigin + vGridSize * gridRow);
      nodeContainer.render(container.getScrollingPane(), nodeLayout);
      if (highlightedItems && !highlightedMap[node[NBoxConstants.ID]]) {
        nodeContainer.setAlpha(alphaFade);
      }

      //keyboard navigation
      var prevNodeData = n > 0 ? nodes[n - 1] : null;
      if (prevNodeData) {
        var prevNodeContainer = DvtNBoxUtils.getDisplayable(nbox, prevNodeData);
        nodeContainer.previousNavigable = prevNodeContainer;
        prevNodeContainer.nextNavigable = nodeContainer;
      }
    }
  }
  container.prepareContentPane();
};


/**
 * Calculates the order to render the nodes in, taking into account selection/highlighting state.
 * @param {NBox} nbox The nbox component
 * @param {object} data the data associated with the currently open group
 * @return {array} array of node objects in rendering order
 */
DvtNBoxDrawerRenderer.calculateNodeOrders = function(nbox, data) {
  // If no nodes are highlighted, make a single pass through the nodes for rendering
  // If some nodes are highlighted, make two passes, first rendering the highlighted nodes, then the unhighlighted nodes
  var orderPasses = ['normal'];
  var highlightedItems = DvtNBoxDataUtils.getHighlightedItems(nbox);
  var highlightedMap = {};
  if (highlightedItems) {
    for (var i = 0; i < highlightedItems.length; i++) {
      highlightedMap[highlightedItems[i][NBoxConstants.ID]] = true;
    }
  }

  var selectedItems = DvtNBoxDataUtils.getSelectedItems(nbox);
  var selectedMap = {};
  if (selectedItems) {
    for (var i = 0; i < selectedItems.length; i++) {
      selectedMap[selectedItems[i]] = true;
    }
  }

  if (highlightedItems) {
    if (selectedItems)
      orderPasses = ['highlighted-selected', 'highlighted-unselected', 'unhighlighted-selected', 'unhighlighted-unselected'];
    else
      orderPasses = ['highlighted-unselected', 'unhighlighted-unselected'];
  }
  else if (selectedItems) {
    orderPasses = ['unhighlighted-selected', 'unhighlighted-unselected'];
  }

  var nodes = [];
  var categoryNode = DvtNBoxDataUtils.getCategoryNode(nbox, data[NBoxConstants.ID]);
  var nodeCount = categoryNode['nodeIndices'].length;
  for (var p = 0; p < orderPasses.length; p++) {
    for (var n = 0; n < nodeCount; n++) {
      var node = DvtNBoxDataUtils.getNode(nbox, categoryNode['nodeIndices'][n]);
      if (orderPasses[p] == 'normal' ||
          (orderPasses[p] == 'highlighted-selected' && highlightedMap[node[NBoxConstants.ID]] && selectedMap[node[NBoxConstants.ID]]) ||
          (orderPasses[p] == 'highlighted-unselected' && highlightedMap[node[NBoxConstants.ID]] && !selectedMap[node[NBoxConstants.ID]]) ||
          (orderPasses[p] == 'unhighlighted-selected' && !highlightedMap[node[NBoxConstants.ID]] && selectedMap[node[NBoxConstants.ID]]) ||
          (orderPasses[p] == 'unhighlighted-unselected' && !highlightedMap[node[NBoxConstants.ID]] && !selectedMap[node[NBoxConstants.ID]])) {
        nodes.push(node);
      }
    }
  }
  return nodes;
};


/**
 * Gets the drawer bounds
 *
 * @param {NBox} nbox The nbox component
 * @param {object} data the data associated with the currently open group
 * @param {dvt.Rectangle} availSpace The available space.
 *
 * @return {dvt.Rectangle} the drawer bounds
 */
DvtNBoxDrawerRenderer.getDrawerBounds = function(nbox, data, availSpace) {
  var options = nbox.getOptions();
  var gridGap = parseInt(options['__layout']['gridGap']);
  var cellLayout = DvtNBoxCellRenderer.getCellLayout(nbox);
  var drawerBounds = new Rectangle(availSpace.x + gridGap, availSpace.y + gridGap, Math.max(availSpace.w - 2 * gridGap, 0), Math.max(availSpace.h - 2 * gridGap, 0));
  var groupBehavior = DvtNBoxDataUtils.getGroupBehavior(nbox);
  if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
    var cellIndex = parseInt(data['id'].substring(0, data[NBoxConstants.ID].indexOf(':')));
    if (DvtNBoxDataUtils.isCellMaximized(nbox, cellIndex)) {
      var cell = DvtNBoxDataUtils.getCell(nbox, cellIndex);
      var r = DvtNBoxDataUtils.getRowIndex(nbox, cell[NBoxConstants.ROW]);
      var c = DvtNBoxDataUtils.getColumnIndex(nbox, cell[NBoxConstants.COLUMN]);
      var cellDims = DvtNBoxCellRenderer.getCellDimensions(nbox, r, c, availSpace);
      drawerBounds = new Rectangle(cellDims.x + gridGap, cellDims.y + gridGap + cellLayout['maximizedHeaderSize'], Math.max(cellDims.w - 2 * gridGap, 0), Math.max(cellDims.h - cellLayout['maximizedHeaderSize'] - 2 * gridGap, 0));
    }
  }
  return drawerBounds;
};


/**
 * @override
 */
DvtNBoxDrawerRenderer.animateUpdate = function(animationHandler, oldDrawer, newDrawer) {
  // TODO
  //console.log('********************* DvtNBoxDrawerRenderer.animateUpdate *********************');
};


/**
 * @override
 */
DvtNBoxDrawerRenderer.animateDelete = function(animationHandler, oldDrawer) {
  var animationPhase = DvtNBoxDataAnimationHandler.UPDATE;

  var newNBox = animationHandler.getNewNBox();
  var drawerBounds = oldDrawer.getData()['__drawerBounds'];
  var id = oldDrawer.getData()[NBoxConstants.ID];
  var group = DvtNBoxDataUtils.getCategoryNode(newNBox, id);
  if (group) {
    var sideLength = DvtNBoxCategoryNodeRenderer.getSideLength(group);
    var scaleX = sideLength / drawerBounds.w;
    var scaleY = sideLength / drawerBounds.h;
    var groupNode = DvtNBoxUtils.getDisplayable(newNBox, group);
    if (groupNode) {
      var centerMatrix = DvtNBoxUtils.getGlobalMatrix(groupNode);
      var finalMatrix = new Matrix(scaleX, 0, 0, scaleY, centerMatrix.getTx() - sideLength / 2, centerMatrix.getTy() - sideLength / 2);
      var playable = new CustomAnimation(newNBox.getCtx(), oldDrawer, animationHandler.getAnimationDuration());
      playable.getAnimator().addProp(Animator.TYPE_MATRIX, oldDrawer, oldDrawer.getMatrix, oldDrawer.setMatrix, finalMatrix);
      animationHandler.add(playable, animationPhase);
    }
  }
  newNBox.getDeleteContainer().addChild(oldDrawer);
  var fadePlayable = new AnimFadeOut(newNBox.getCtx(), oldDrawer, animationHandler.getAnimationDuration());
  animationHandler.add(fadePlayable, animationPhase);
};


/**
 * @override
 */
DvtNBoxDrawerRenderer.animateInsert = function(animationHandler, newDrawer) {
  var animationPhase = DvtNBoxDataAnimationHandler.UPDATE;

  var newNBox = animationHandler.getNewNBox();
  var drawerBounds = newDrawer.getData()['__drawerBounds'];
  var id = newDrawer.getData()[NBoxConstants.ID];
  var group = DvtNBoxDataUtils.getCategoryNode(newNBox, id);
  if (group) {
    var sideLength = DvtNBoxCategoryNodeRenderer.getSideLength(group);
    var scaleX = sideLength / drawerBounds.w;
    var scaleY = sideLength / drawerBounds.h;
    var groupNode = DvtNBoxUtils.getDisplayable(newNBox, group);
    if (groupNode) {
      var centerMatrix = DvtNBoxUtils.getGlobalMatrix(groupNode);
      var initMatrix = new Matrix(scaleX, 0, 0, scaleY, centerMatrix.getTx() - sideLength / 2, centerMatrix.getTy() - sideLength / 2);
      var playable = new CustomAnimation(newNBox.getCtx(), newDrawer, animationHandler.getAnimationDuration());
      playable.getAnimator().addProp(Animator.TYPE_MATRIX, newDrawer, newDrawer.getMatrix, newDrawer.setMatrix, newDrawer.getMatrix());
      var parent = newDrawer.getParent();
      newNBox.addChild(newDrawer);
      Playable.appendOnEnd(playable, function() {parent.addChild(newDrawer);});
      newDrawer.setMatrix(initMatrix);
      animationHandler.add(playable, animationPhase);
    }
  }
  newDrawer.setAlpha(0);
  var fadePlayable = new AnimFadeIn(newNBox.getCtx(), newDrawer, animationHandler.getAnimationDuration());
  animationHandler.add(fadePlayable, animationPhase);
};


/**
 * @private
 * Adds accessibility attributes to the object
 * @param {NBox} nbox The nbox component
 * @param {object} data the data associated with the currently open group
 * @param {DvtNBoxDrawer} drawerContainer the object that should be updated with accessibility attributes
 */
DvtNBoxDrawerRenderer._addAccessibilityAttributes = function(nbox, data, drawerContainer) {
  var object = Agent.isTouchDevice() ? DvtNBoxUtils.getDisplayable(nbox, data, 'background') : drawerContainer;
  object.setAriaRole('img');
  if (!Agent.deferAriaCreation()) {
    var desc = drawerContainer.getAriaLabel();
    if (desc)
      object.setAriaProperty(NBoxConstants.LABEL, desc);
  }
};

var DvtNBoxDrawer = function() {};

Obj.createSubclass(DvtNBoxDrawer, Container);

DvtNBoxDrawer.prototype.nboxType = 'drawer';

/**
 * Returns a new instance of DvtNBoxDrawer
 *
 * @param {string} nbox the parent nbox
 * @param {object} data the data associated with the currently open group
 *
 * @return {DvtNBoxDrawer} the nbox category node
 */
DvtNBoxDrawer.newInstance = function(nbox, data) {
  var component = new DvtNBoxDrawer();
  component.Init(nbox, data);
  return component;
};


/**
 * Initializes this component
 *
 * @param {NBox} nbox the parent nbox
 * @param {object} data the data associated with the currently open group
 *
 * @protected
 */
DvtNBoxDrawer.prototype.Init = function(nbox, data) {
  DvtNBoxDrawer.superclass.Init.call(this, nbox.getCtx(), null, data['id'] + '_d');
  this._nbox = nbox;
  this._data = data;
  this._data['__cacheId'] = 'drawer:' + this.getId();
  this._nbox.registerObject(this);
};


/**
 * Gets the data object
 *
 * @return {object} the data object
 */
DvtNBoxDrawer.prototype.getData = function() {
  return this._data;
};


/**
 * Renders the drawer
 * @param {dvt.Container} container the container to render into
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxDrawer.prototype.render = function(container, availSpace) {
  container.addChild(this);
  DvtNBoxUtils.setDisplayable(this._nbox, this._data, this);
  DvtNBoxDrawerRenderer.render(this._nbox, this._data, this, availSpace);
  this._nbox.EventManager.associate(this, this);
};


/**
 * Gets the container that child nodes should be added to
 *
 * @return {dvt.Container} the container that child nodes should be added to
 */
DvtNBoxDrawer.prototype.getChildContainer = function() {
  return this._childContainer;
};


/**
 * Sets the container that child nodes should be added to
 *
 * @param {dvt.Container} container the container that child nodes should be added to
 */
DvtNBoxDrawer.prototype.setChildContainer = function(container) {
  this._childContainer = container;
};


/**
 * @override
 */
DvtNBoxDrawer.prototype.isDoubleClickable = function() {
  return true;
};


/**
 * @override
 */
DvtNBoxDrawer.prototype.handleDoubleClick = function() {
  this.closeDrawer();
};


/**
 * Closes this drawer
 */
DvtNBoxDrawer.prototype.closeDrawer = function() {
  DvtNBoxDataUtils.fireOptionChangeEvent(this._nbox, NBoxConstants.DRAWER, null);
  this._nbox.processEvent(EventFactory.newRenderEvent());
};


/**
 * @override
 */
DvtNBoxDrawer.prototype.animateUpdate = function(animationHandler, oldDrawer) {
  DvtNBoxDrawerRenderer.animateUpdate(animationHandler, oldDrawer, this);
};


/**
 * @override
 */
DvtNBoxDrawer.prototype.animateDelete = function(animationHandler, deleteContainer) {
  DvtNBoxDrawerRenderer.animateDelete(animationHandler, this);

};


/**
 * @override
 */
DvtNBoxDrawer.prototype.animateInsert = function(animationHandler) {
  DvtNBoxDrawerRenderer.animateInsert(animationHandler, this);
};


/**
 * Process a keyboard event
 * @param {dvt.KeyboardEvent} event
 */
DvtNBoxDrawer.prototype.HandleKeyboardEvent = function(event) {
  if (event.keyCode == KeyboardEvent.ESCAPE) {
    this.closeDrawer();
  }
};


/**
 * @protected
 * Updates accessibility attributes on selection event
 */
DvtNBoxDrawer.prototype.UpdateAccessibilityAttributes = function() {
  if (!Agent.deferAriaCreation()) {
    var desc = this.getAriaLabel();
    if (desc) {
      var object = Agent.isTouchDevice() ? DvtNBoxUtils.getDisplayable(this._nbox, this.getData(), 'background') : this;
      object.setAriaProperty('label', desc);
    }
  }
};


/**
 * @override
 */
DvtNBoxDrawer.prototype.getAriaLabel = function() {
  var categoryNode = DvtNBoxUtils.getDisplayable(this._nbox, DvtNBoxDataUtils.getCategoryNode(this._nbox, this.getData()['id']));
  var selected = DvtNBoxDataUtils.isDrawerSelected(this._nbox, categoryNode);
  return DvtNBoxDataUtils.buildAriaDesc(this._nbox, this, categoryNode.getShortDesc(), selected);
};


//---------------------------------------------------------------------//
// Keyboard Support: DvtKeyboardNavigable impl                        //
//---------------------------------------------------------------------//
/**
 * @override
 */
DvtNBoxDrawer.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace)
{
  return DvtNBoxUtils.getKeyboardBoundingBox(this, targetCoordinateSpace);
};

/**
 * @override
 */
DvtNBoxDrawer.prototype.getTargetElem = function()
{
  return this.getElem();
};

/**
 * @override
 */
DvtNBoxDrawer.prototype.showKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = true;
  DvtNBoxUtils.getDisplayable(this._nbox, this.getData(), 'focusEffect').show();
};


/**
 * @override
 */
DvtNBoxDrawer.prototype.hideKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = false;
  DvtNBoxUtils.getDisplayable(this._nbox, this.getData(), 'focusEffect').hide();
};


/**
 * @override
 */
DvtNBoxDrawer.prototype.isShowingKeyboardFocusEffect = function() {
  return this._isShowingKeyboardFocusEffect;
};


/**
 * @override
 */
DvtNBoxDrawer.prototype.getNextNavigable = function(event)
{
  var next = null;
  if (this._nbox.EventManager.getKeyboardHandler().isNavigationEvent(event)) {
    if (event.keyCode == KeyboardEvent.OPEN_BRACKET) {
      //find first individual node
      var container = this.getChildContainer();
      if (container.getScrollingPane)
        container = container.getScrollingPane();
      var next = DvtNBoxDataUtils.getFirstNavigableNode(this._nbox, container);
    }
    else if (event.keyCode == KeyboardEvent.CLOSE_BRACKET) {
      //find parent cell
      var maximizedCellIndex = DvtNBoxDataUtils.getMaximizedCellIndex(this._nbox);
      next = DvtNBoxUtils.getDisplayable(this._nbox, DvtNBoxDataUtils.getCell(this._nbox, maximizedCellIndex));
    }
  }
  return next;
};


/**
 * Returns the drawer displayable (itself).
 *
 * @return {dvt.Displayable} displayable
 */
DvtNBoxDrawer.prototype.getDisplayable = function() {
  return this;
};


/**
 * Returns the displayable that should receive the keyboard focus
 *
 * @return {dvt.Displayable} displayable to receive keyboard focus
 */
DvtNBoxDrawer.prototype.getKeyboardFocusDisplayable = function() {
  if (this._nbox.getOptions()['_drawer'])
    return this;

  // return the associated group node associated when closing the drawer
  var groupNodeData = DvtNBoxDataUtils.getCategoryNode(this._nbox, this.getData()[NBoxConstants.ID]);
  if (groupNodeData)
    return DvtNBoxUtils.getDisplayable(this._nbox, groupNodeData);
  return null;
};

var DvtNBoxNodeOverflow = function() {};

Obj.createSubclass(DvtNBoxNodeOverflow, Container);

DvtNBoxNodeOverflow.prototype.nboxType = 'overflow';

/**
 * Returns a new instance of DvtNBoxNodeOverflow
 *
 * @param {NBox} nbox the parent nbox
 * @param {DvtNBoxCell} cell the cell for this object
 *
 * @return {DvtNBoxNodeOverflow} the node oveflow object
 */
DvtNBoxNodeOverflow.newInstance = function(nbox, cell) {
  var component = new DvtNBoxNodeOverflow();
  component.Init(nbox, cell);
  return component;
};


/**
 * Initializes this component
 *
 * @param {NBox} nbox the parent nbox
 * @param {DvtNBoxCell} cell the cell for this object
 *
 * @protected
 */
DvtNBoxNodeOverflow.prototype.Init = function(nbox, cell) {
  DvtNBoxNodeOverflow.superclass.Init.call(this, nbox.getCtx());
  this._nbox = nbox;
  this._cell = cell;
  this._button;
};


/**
 * Renders the nbox overflow object
 * @param {dvt.Container} container the container to render into
 * @param {number} width the width of the overflow button
 * @param {number} height the height of the overflow button
 */
DvtNBoxNodeOverflow.prototype.render = function(container, width, height) {
  var ctx = this._nbox.getCtx();
  var options = this._nbox.getOptions();
  var overflow = options['_resources']['overflow'];

  var w = overflow['width'];
  var h = overflow['height'];
  var iconStyle = ToolkitUtils.getIconStyle(ctx, overflow['class']);

  var scale = 1;
  if (width < w || height < h) {
    scale = Math.min((width) / w,
                     (height) / h);
  }

  // Image dimensions
  w = scale * w;
  h = scale * h;
  // image will be centered at (Math.max(w, h) / 2, Math.max(w, h) / 2)
  var c = Math.max(w, h) / 2;
  var x = c - width / 2;
  var y = c - height / 2;

  var background = new Rect(ctx, 0, 0, width, height);

  this._button = new IconButton(ctx, 'borderless', {style: iconStyle, size: Math.max(w, h), pos: {x: width / 2, y: height / 2}}, background, null, this.HandleClick, this);

  if (!DvtNBoxDataUtils.isMaximizeEnabled(this._nbox)) {
    this._button.setEnabled(false);
  }

  this.addChild(this._button);
  var keyboardFocusEffect = new KeyboardFocusEffect(this._nbox.getCtx(), this, new Rectangle(-1, -1, width + 2, height + 2));
  DvtNBoxUtils.setDisplayable(this._nbox, this, keyboardFocusEffect, 'focusEffect');
  container.addChild(this);
  this._addAccessibilityAttributes();
  this._nbox.EventManager.associate(this, this);
};

/**
 * Gets a cell object that contains the overflow object
 * @return {DvtNBoxCell} a parent cell for the overflow
 */
DvtNBoxNodeOverflow.prototype.getParentCell = function() {
  return this._cell;
};

/**
 * Gets the overflow button
 * @return {dvt.IconButton} button for the overflow
 */
DvtNBoxNodeOverflow.prototype.getButton = function() {
  return this._button;
};

/**
 * Process a click event
 * @param {dvt.MouseEvent} event
 */
DvtNBoxNodeOverflow.prototype.HandleClick = function(event) {
  EventManager.consumeEvent(event);
  this._cell.handleDoubleClick(true);
};


/**
 * Process a keyboard event
 * @param {dvt.KeyboardEvent} event
 */
DvtNBoxNodeOverflow.prototype.HandleKeyboardEvent = function(event) {
  if (event.keyCode == KeyboardEvent.ENTER) {
    this._cell.handleDoubleClick();
  }
};


/**
 * @private
 * Adds accessibility attributes to the object
 */
DvtNBoxNodeOverflow.prototype._addAccessibilityAttributes = function() {
  this.setAriaRole('button');
  if (!Agent.deferAriaCreation()) {
    var desc = this.getAriaLabel();
    if (desc)
      this.setAriaProperty(NBoxConstants.LABEL, desc);
  }
};


/**
 * @override
 */
DvtNBoxNodeOverflow.prototype.getDatatip = function(target, x, y) {
  return this._nbox.getOptions().translations.labelAdditionalData;
};


/**
 * @override
 */
DvtNBoxNodeOverflow.prototype.getAriaLabel = function() {
  return this.getDatatip();
};


//---------------------------------------------------------------------//
// Keyboard Support: DvtKeyboardNavigable impl                        //
//---------------------------------------------------------------------//
/**
 * @override
 */
DvtNBoxNodeOverflow.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace)
{
  return DvtNBoxUtils.getKeyboardBoundingBox(this, targetCoordinateSpace);
};


/**
 * @override
 */
DvtNBoxNodeOverflow.prototype.getTargetElem = function()
{
  return this.getElem();
};


/**
 * @override
 */
DvtNBoxNodeOverflow.prototype.showKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = true;
  DvtNBoxUtils.getDisplayable(this._nbox, this, 'focusEffect').show();
};


/**
 * @override
 */
DvtNBoxNodeOverflow.prototype.hideKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = false;
  DvtNBoxUtils.getDisplayable(this._nbox, this, 'focusEffect').hide();
};


/**
 * @override
 */
DvtNBoxNodeOverflow.prototype.isShowingKeyboardFocusEffect = function() {
  return this._isShowingKeyboardFocusEffect;
};


/**
 * @override
 */
DvtNBoxNodeOverflow.prototype.getNextNavigable = function(event)
{
  var next = null;
  if (this._nbox.EventManager.getKeyboardHandler().isNavigationEvent(event)) {
    if (event.keyCode == KeyboardEvent.CLOSE_BRACKET) {
      next = this.getParentCell();
    }
    else {
      next = DvtNBoxDataUtils.getNextNavigableNode(this._nbox, this, event);
    }
  }
  return next;
};


/**
 * Returns the node overflow displayable (itself).
 *
 * @return {dvt.Displayable} displayable
 */
DvtNBoxNodeOverflow.prototype.getDisplayable = function() {
  return this;
};


/**
 * Returns the displayable that should receive the keyboard focus
 *
 * @return {dvt.Displayable} displayable to receive keyboard focus
 */
DvtNBoxNodeOverflow.prototype.getKeyboardFocusDisplayable = function() {
  // return first hidden node when maximizing the cell
  var oldPrevNodeData = this.previousNavigable.getData();
  var newPrevNodeData = DvtNBoxDataUtils.getNode(this._nbox, DvtNBoxDataUtils.getNodeIndex(this._nbox, oldPrevNodeData[NBoxConstants.ID]));
  var newPrevNode = DvtNBoxUtils.getDisplayable(this._nbox, newPrevNodeData);
  return newPrevNode.nextNavigable;
};

/**
 *  Provides automation services for a DVT nBox component.
 *  @class  DvtNBoxAutomation
 *  @param {NBox} dvtComponent
 *  @implements {dvt.Automation}
 *  @constructor
 */
var DvtNBoxAutomation = function(dvtComponent) {
  this.Init(dvtComponent);
};

Obj.createSubclass(DvtNBoxAutomation, Automation);

/**
 * Initializes this automation object
 * @param {NBox} dvtComponent
 */
DvtNBoxAutomation.prototype.Init = function(dvtComponent) {
  this._nBox = dvtComponent;
};

/**
 * Valid subIds:
 * <ul>
 * <li>node[index]</li>
 * <li>cell[row,col]</li>
 * <li>cell[row,col]#overflow</li>
 * <li>cell[row,col]#node[index]</li>
 * <li>cell[row,col]#groupNode{id1:val1,...,idN:valN}</li>
 * <li>cell[row,col]#groupNode[groupCategory]</li>
 * <li>cell[row,col]#closeButton</li>
 * <li>groupNode{id1:val1,...,idN:valN}</li>
 * <li>groupNode[groupCategory]</li>
 * <li>dialog</li>
 * <li>dialog#closeButton</li>
 * <li>dialog#node[index]</li>
 * <li>tooltip</li>
 * </ul>
 *
 * @param {dvt.Displayable} displayable
 * @return {string} subId
 *
 * @override
 */
DvtNBoxAutomation.prototype.GetSubIdForDomElement = function(displayable) {
  var cell = this._getParentObject(displayable, DvtNBoxCell);
  var drawer = this._getParentObject(displayable, DvtNBoxDrawer);

  while (displayable && !(displayable.nboxType === 'nbox')) {
    var nBox = this.getComponent();
    var component;
    var action;
    var values;

    if (displayable.nboxType === 'node') {
      var index = DvtNBoxDataUtils.getNodeIndex(nBox, displayable.getData()['id']);
      values = this._createBrackets([index]);
      component = 'node' + values;
      return this._createSubId(component, action);
    }

    if (cell) {
      var r = cell.getData()['row'];
      var c = cell.getData()['column'];
      var container = cell.getChildContainer();
      if (container.getScrollingPane) {
        container = container.getScrollingPane();
      }
      values = this._createBrackets([r, c]);
      component = 'cell' + values;

      // cell
      if (displayable.nboxType === 'cell') {
        return this._createSubId(component, action);
      }

      // cell#overflow
      // cell#closeButton
      if (displayable instanceof IconButton) {
        if (this._getParentObject(displayable, DvtNBoxNodeOverflow)) {
          action = 'overflow';
          return this._createSubId(component, action);
        }
        if (displayable == DvtNBoxUtils.getDisplayable(nBox, cell.getData(), 'closeButton')) {
          action = 'closeButton';
          return this._createSubId(component, action);
        }
      }

      // cell#node
      // nodes always return node[index] form subId

      //cell#groupNode
      if (displayable.nboxType === 'categoryNode') {
        var id = displayable.getData()['id'];
        action = 'groupNode';
        if (DvtNBoxDataUtils.getNode(nBox, displayable.getData()['nodeIndices'][0])['groupCategory'])
          action += this._createBrackets([id]);
        else
          action += this._createBraces(id.split(';'));
        return this._createSubId(component, action);
      }
    }
    if (drawer) {
      component = 'dialog';

      // dialog
      if (displayable.nboxType === 'drawer') {
        return this._createSubId(component, action);
      }

      // dialog#closeButton
      if (displayable instanceof IconButton) {
        action = 'closeButton';
        return this._createSubId(component, action);
      }

      // dialog#node
      // nodes always return node[index] form subId

    }

    // groupNode
    if (displayable.nboxType === 'categoryNode') {
      var id = displayable.getData()['id'];
      component = 'groupNode';
      if (DvtNBoxDataUtils.getNode(nBox, displayable.getData()['nodeIndices'][0])['groupCategory'])
        component += this._createBrackets([id]);
      else
        component += this._createBraces(id.split(';'));
      return this._createSubId(component, action);
    }
    displayable = displayable.getParent();
  }
  return null;
};

/**
 * Creates a subId out of given component and action parts
 *
 * @param {string} component
 * @param {string} action
 * @return {string} subId
 *
 * @private
 */
DvtNBoxAutomation.prototype._createSubId = function(component, action) {
  var subId = component;
  if (action) {
    subId += '#' + action;
  }
  return subId;
};

/**
 * Valid subIds
 * <ul>
 * <li>node[index]</li>
 * <li>cell[row,col]</li>
 * <li>cell[row,col]#overflow</li>
 * <li>cell[row,col]#node[index]</li>
 * <li>cell[row,col]#groupNode{id1:val1,...,idN:valN}</li>
 * <li>cell[row,col]#groupNode[groupCategory]</li>
 * <li>cell[row,col]#closeButton</li>
 * <li>groupNode{id1:val1,...,idN:valN}</li>
 * <li>groupNode[groupCategory]</li>
 * <li>dialog</li>
 * <li>dialog#closeButton</li>
 * <li>dialog#node[index]</li>
 * <li>tooltip</li>
 * </ul>
 *
 * @param {string} subId
 * @return {dvt.Displayable}
 * @override
 */
DvtNBoxAutomation.prototype.getDomElementForSubId = function(subId) {
  var nBox = this.getComponent();
  if (subId == Automation.TOOLTIP_SUBID)
    return this.GetTooltipElement(nBox);

  var parsedId = this._parseSubId(subId);
  var component = parsedId['component'];
  var action = parsedId['action'];
  var values = null;

  var container = null;
  var displayable = null;

  if (component.lastIndexOf('node', 0) === 0) {
    values = this._parseBrackets(component, true);
    var data = DvtNBoxDataUtils.getNode(nBox, values[0]);
    displayable = DvtNBoxUtils.getDisplayable(nBox, data);
  }

  if (component.lastIndexOf('cell', 0) === 0) {
    values = this._parseBrackets(component);
    var index = this._getCellIndexFromValues(values);
    var data = DvtNBoxDataUtils.getCell(nBox, index);
    if (!data) {
      return null;
    }
    var cell = DvtNBoxUtils.getDisplayable(nBox, data);

    if (action) {
      container = cell.getChildContainer();
      if (container.getScrollingPane) {
        container = container.getScrollingPane();
      }

      // cell#overflow
      if (action == 'overflow') {
        for (var i = container.getNumChildren(); i > 0; i--) {
          if (container.getChildAt(i - 1).nboxType === 'overflow') {
            displayable = container.getChildAt(i - 1).getButton();
            break;
          }
        }
      }

      // cell#closeButton
      if (action == 'closeButton') {
        displayable = DvtNBoxUtils.getDisplayable(nBox, cell.getData(), 'closeButton');
      }

      // cell#node
      if (action.lastIndexOf('node', 0) === 0) {
        values = this._parseBrackets(action, true);
        var nodeIndex = values[0];
        if (nodeIndex < 0) {
          return null;
        }
        var node = DvtNBoxDataUtils.getFirstNavigableNode(nBox, container);
        var count = 0;
        while (node.nboxType === 'node') {
          if (count == nodeIndex) {
            displayable = node;
            break;
          }
          node = node.nextNavigable;
          count++;
        }
      }

      // cell#groupNode
      if (action.lastIndexOf('groupNode', 0) === 0) {
        var value;
        if (action.indexOf('{') > -1)
          values = this._parseBraces(action);
        else
          // grab category node id from brackets
          value = action.substring(action.indexOf('[') + 1, action.indexOf(']'));
        var node;
        var id;
        for (var i = 0; i < container.getNumChildren(); i++) {
          node = container.getChildAt(i);
          if (node.nboxType === 'categoryNode') {
            id = node.getData()['id'];
            if (values && this._compareCategories(values, id.split(';'))) {
              displayable = node;
              break;
            }
            else if (value && value == id) {
              displayable = node;
              break;
            }
          }
        }
      }
    }

    // cell
    else {
      displayable = cell;
    }
  }

  // groupNode
  else if (component.lastIndexOf('groupNode', 0) === 0) {
    container = nBox.getChildContainer();
    var value;
    if (component.indexOf('{') > -1)
      values = this._parseBraces(component);
    else
      // grab category node id from brackets
      value = component.substring(component.indexOf('[') + 1, component.indexOf(']'));
    var node;
    var id;
    for (var i = 0; i < container.getNumChildren(); i++) {
      node = container.getChildAt(i);
      if (node.nboxType === 'categoryNode') {
        id = node.getData()['id'];
        if (values && this._compareCategories(values, id.split(';'))) {
          displayable = node;
          break;
        }
        else if (value && value == id) {
          displayable = node;
          break;
        }
      }
    }
  }

  else if (component === 'dialog') {
    container = nBox.getChildContainer();
    if (container) {
      for (var i = 0; i < container.getNumChildren(); i++) {
        if (container.getChildAt(i).nboxType === 'drawer') {
          var dialog = container.getChildAt(i);
          if (action) {

            // dialog#closeButton
            if (action == 'closeButton') {
              for (var j = 0; j < dialog.getNumChildren(); j++) {
                if (dialog.getChildAt(j) instanceof IconButton) {
                  displayable = dialog.getChildAt(j);
                }
              }
            }

            // dialog#node
            if (action.lastIndexOf('node', 0) === 0) {
              var dialogContainer = dialog.getChildContainer().getScrollingPane();
              values = this._parseBrackets(action, true);
              var nodeIndex = values[0];
              if (nodeIndex < 0) {
                return null;
              }
              var node = DvtNBoxDataUtils.getFirstNavigableNode(nBox, dialogContainer);
              var count = 0;
              while (node.nboxType === 'node') {
                if (count == nodeIndex) {
                  displayable = node;
                  break;
                }
                node = node.nextNavigable;
                count++;
              }
            }
          }

          // dialog
          else {
            displayable = dialog;
          }
          break;
        }
      }
    }
  }
  return displayable ? displayable.getElem() : null;
};

/**
 * Breaks subId into component, action parts
 *
 * @param {string} subId
 * @return {object}
 *
 * @private
 */
DvtNBoxAutomation.prototype._parseSubId = function(subId) {
  var component = null;
  var action = null;

  var hashIndex = subId.indexOf('#');
  if (hashIndex !== -1) {
    component = subId.substring(0, hashIndex);
    action = subId.substring(hashIndex + 1);
  }
  else {
    component = subId;
  }
  return {'component': component, 'action': action};
};


/**
 * Gets the component
 * @return {NBox} the component
 */
DvtNBoxAutomation.prototype.getComponent = function() {
  return this._nBox;
};

/**
 * Takes component/action string and extracts the values in brackets.
 * @param {string} str component or action string with [ ]
 * @param {boolean} bParseInt whether or not to call parseInt on values before returning
 * @return {array} array of values within brackets
 *
 * @private
 */
DvtNBoxAutomation.prototype._parseBrackets = function(str, bParseInt) {
  var strBrackets = str.substring(str.indexOf('[') + 1, str.indexOf(']'));
  var values = strBrackets.split(',');

  if (bParseInt) {
    for (var i = 0; i < values.length; i++) {
      values[i] = parseInt(values[i]);
    }
  }
  return values.length > 0 ? values : null;
};

/**
 * Takes list of values and surrounds them with brackets
 * @param {array} values List of values to be put in brackets
 * @return {string} String of bracket surrounded values
 *
 * @private
 */
DvtNBoxAutomation.prototype._createBrackets = function(values) {
  return values.length > 0 ? '[' + values.join(',') + ']' : '';
};

/**
 * Takes component/action string and extracts the values in braces.
 *
 * @param {string} str component or action string with { }
 * @return {array} array representing values within braces
 *
 * @private
 */
DvtNBoxAutomation.prototype._parseBraces = function(str) {
  var strBraces = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));
  return strBraces.split(',');
};

/**
 * Takes list of values and surrounds them with braces
 * @param {array} values List of values to be put in brackets
 * @return {string} String of bracket surrounded values
 *
 * @private
 */
DvtNBoxAutomation.prototype._createBraces = function(values) {
  var str = '{';
  for (var i = 0; i < values.length; i++) {
    str += values[i].trim() + ',';
  }
  return str.substring(0, str.length - 1) + '}';
};

/**
 * Compares two javascript arrays to see if they contain same values.
 * Used to compare NBoxCategoryNode categories to given subId categories.
 *
 * @param {array} arr1 first object
 * @param {array} arr2 second object
 * @return {boolean} true if same, false if not
 *
 * @private
 */
DvtNBoxAutomation.prototype._compareCategories = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  arr1.sort();
  arr2.sort();
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i].trim() != arr2[i].trim()) {
      return false;
    }
  }
  return true;
};

/**
 * Get nBox cell from row/col values
 *
 * @param {array} values [columnVal, rowVal]
 * @return {DvtNBoxCell} cell
 *
 * @private
 */
DvtNBoxAutomation.prototype._getCellIndexFromValues = function(values) {
  var nBox = this.getComponent();
  if (DvtNBoxDataUtils.hasValidData(nBox)) {
    var colCount = DvtNBoxDataUtils.getColumnCount(nBox);

    var rowIndex = DvtNBoxDataUtils.getRowIndex(nBox, values[0]);
    var colIndex = DvtNBoxDataUtils.getColumnIndex(nBox, values[1]);

    if (colIndex != null && rowIndex != null) {
      return colIndex + colCount * rowIndex;
    }
  }
  return null;
};

/**
 * Look for an object of given type in ancestry
 *
 * @param {dvt.Displayable} displayable
 * @param {object} type
 * @return {DvtNBoxCell} ancestor cell
 *
 * @private
 */
DvtNBoxAutomation.prototype._getParentObject = function(displayable, type) {
  var parent = displayable;
  while (parent) {
    if (parent instanceof type) {
      return parent;
    }
    else {
      parent = parent.getParent();
    }
  }
  return null;
};

/**
 * Get NBox property for the passed key and attribute
 * @param {String} key  NBox property key
 * @param {String} attribute  NBox property attribute
 * @return {String} NBox property value for the key and attribute
 */
DvtNBoxAutomation.prototype.getData = function(key, attribute) {
  if (this._nBox && DvtNBoxDataUtils.hasValidData(this._nBox)) {
    if (key == 'rowsTitle') {
      //rows title
      if (this._nBox.getOptions()['rowsTitle'])
        return this._nBox.getOptions()['rowsTitle'];
    } else if (key == 'rowCount') {
      //row count
      var rows = this._nBox.getOptions()['rows'];
      if (rows)
        return rows.length;
    } else if (key == 'row') {
      //Check if row exists
      if (DvtNBoxDataUtils.getRowIndex(this._nBox, attribute) >= 0) {
        var data = {};
        //row label
        data['label'] = DvtNBoxDataUtils.getRowLabel(this._nBox, attribute);
        return data;
      }
    } else if (key == 'columnsTitle') {
      //columns title
      if (this._nBox.getOptions()['columnsTitle'])
        return this._nBox.getOptions()['columnsTitle'];
    } else if (key == 'columnCount') {
      //column count
      var cols = this._nBox.getOptions()['columns'];
      if (cols)
        return cols.length;
    } else if (key == 'column') {
      //Check if column exists
      if (DvtNBoxDataUtils.getColumnIndex(this._nBox, attribute) >= 0) {
        var data = {};
        //column label
        data['label'] = DvtNBoxDataUtils.getColumnLabel(this._nBox, attribute);
        return data;
      }
    } else if (key == 'groupBehavior') {
      return DvtNBoxDataUtils.getGroupBehavior(this._nBox);
    }
  }
  return null;
};

/**
 * Get group node data from nbox for the passed group map
 * @param {Map|String} groupInfo  map or string containing the grouping info
 * @return {Object}  Group node data object
 */
DvtNBoxAutomation.prototype.getGroupNode = function(groupInfo) {
  if (groupInfo && DvtNBoxDataUtils.getGrouping(this._nBox)
  && DvtNBoxDataUtils.getGroupBehavior(this._nBox) == NBoxConstants.GROUP_BEHAVIOR_ACROSS_CELLS) {
    if (typeof groupInfo === 'string')
      return this._getGroupNodeData(groupInfo);
    var groupData = '';
    for (var key in groupInfo) {
      if (groupInfo[key])
        groupData += key + ':' + groupInfo[key] + ';';
      else
        groupData += key + ';';
    }
    return this._getGroupNodeData(groupData.substring(0, groupData.length - 1));
  }
  return null;
};

/**
 * @private
 * Get group node data for the passed group info
 * @param {String} groupData  Key containing the grouping info
 * @return {Object}  Group node data object
 */
DvtNBoxAutomation.prototype._getGroupNodeData = function(groupData) {
  var categoryData = DvtNBoxDataUtils.getCategoryNode(this._nBox, groupData);
  if (categoryData) {
    var categoryNode = DvtNBoxUtils.getDisplayable(this._nBox, categoryData);
    if (categoryNode) {
      var data = {};
      data['selected'] = categoryNode.isSelected();
      data['color'] = DvtNBoxStyleUtils.getCategoryNodeColor(this._nBox, categoryData);
      data['indicatorColor'] = DvtNBoxStyleUtils.getCategoryNodeIndicatorColor(this._nBox, categoryData);
      data['tooltip'] = categoryNode.getShortDesc();
      data['size'] = categoryData['nodeIndices'] ? categoryData['nodeIndices'].length : -1;
      var indicatorIcon = DvtNBoxUtils.getDisplayable(this._nBox, categoryData, 'indicatorIcon');
      data['indicatorIcon'] = this._getMarkerData(indicatorIcon);

      return data;
    }
  }
  return null;
};

/**
 * Get the NBox cell for the row and column value
 * @param {String} rowValue NBox row value
 * @param {String} columnValue NBox column value
 * @return {Object} NBox cell data object
 */
DvtNBoxAutomation.prototype.getCell = function(rowValue, columnValue) {
  if (this._nBox && DvtNBoxDataUtils.hasValidData(this._nBox)) {
    var cellObj = DvtNBoxDataUtils.getCellByRowColumn(this._nBox, rowValue, columnValue);
    if (cellObj) {
      var cellIndex = cellObj.getCellIndex();
      var data = {};
      data['label'] = cellObj.getLabel();
      data['background'] = cellObj.getBackground();
      data['getNodeCount'] = function() {return cellObj.getNodeCount();};
      data['rowValue'] = rowValue;
      data['columnValue'] = columnValue;
      data['cellIndex'] = cellIndex;
      return data;
    }
  }
  return null;
};

/**
 * Get node from cell for the passed node index
 * @param {Object} cellData  Cell data object
 * @param {Number} nodeIndex  node index
 * @return {Object} node data object
 */
DvtNBoxAutomation.prototype.getCellNode = function(cellData, nodeIndex) {
  //If nodes are grouped then don't get node by index
  if (this._nBox && DvtNBoxDataUtils.hasValidData(this._nBox) && !DvtNBoxDataUtils.getGrouping(this._nBox)) {
    var cellObj = DvtNBoxDataUtils.getCellByRowColumn(this._nBox, cellData['rowValue'], cellData['columnValue']);
    var nodeData = cellObj.getNode(nodeIndex);
    return this._getNode(nodeData);
  }
  return null;
};


/**
 * Get node at given index in node collection
 * @param {Number} nodeIndex  node index
 * @return {Object} node data object
 */
DvtNBoxAutomation.prototype.getNode = function(nodeIndex) {
  var nodeData = DvtNBoxDataUtils.getNode(this._nBox, nodeIndex);
  return this._getNode(nodeData);
};


/**
 * @private
 * Get automation node data object
 * @param {Object} nodeData  node data
 * @return {Object} automation node data
 */
DvtNBoxAutomation.prototype._getNode = function(nodeData) {
  if (nodeData) {
    var node = DvtNBoxUtils.getDisplayable(this._nBox, nodeData);
    if (node) {
      var data = {};
      data['selected'] = node.isSelected();
      data['tooltip'] = node.getShortDesc();
      data['color'] = DvtNBoxStyleUtils.getNodeColor(this._nBox, nodeData);
      data['indicatorColor'] = DvtNBoxStyleUtils.getNodeIndicatorColor(this._nBox, nodeData);
      if (nodeData['label']) {
        data['label'] = nodeData['label'];
      }
      if (nodeData['secondaryLabel']) {
        data['secondaryLabel'] = nodeData['secondaryLabel'];
      }
      var icon = DvtNBoxUtils.getDisplayable(this._nBox, nodeData, 'icon');
      data['icon'] = this._getMarkerData(icon);
      var indicatorIcon = DvtNBoxUtils.getDisplayable(this._nBox, nodeData, 'indicatorIcon');
      data['indicatorIcon'] = this._getMarkerData(indicatorIcon);
      return data;
    }
  }
  return null;
};

/**
 * Get group node data from cell for the passed group map
 * @param {Object} cellData  Cell data object
 * @param {Map|String} groupInfo  map or string containing the grouping info
 * @return {Object}  Group node data object
 */
DvtNBoxAutomation.prototype.getCellGroupNode = function(cellData, groupInfo) {
  if (groupInfo && DvtNBoxDataUtils.getGrouping(this._nBox)
      && DvtNBoxDataUtils.getGroupBehavior(this._nBox) == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
    if (typeof groupInfo === 'string')
      return this._getGroupNodeData(cellData['cellIndex'] + ':' + groupInfo);
    var groupData = cellData['cellIndex'] + ':';
    for (var key in groupInfo) {
      if (groupInfo[key])
        groupData += key + ':' + groupInfo[key] + ';';
      else
        groupData += key + ';';
    }
    return this._getGroupNodeData(groupData.substring(0, groupData.length - 1));
  }
  return null;
};

/**
 * @private
 * Get marker data from marker
 * @param {dvt.SimpleMarker|dvt.ImageMarker} marker Displayable marker object
 * @return {Object} Marker data object
 */
DvtNBoxAutomation.prototype._getMarkerData = function(marker) {
  if (marker) {
    var data = {};
    // public api expects image markers to return a shape of 'none'
    data['shape'] = (marker instanceof SimpleMarker ? marker.getType() : 'none');
    if (marker.getFill())
      data['color'] = marker.getFill().getColor();
    return data;
  }
  return null;
};

/**
 * Get current NBox dialog data
 * @return {object}  NBox dialog data object
 */
DvtNBoxAutomation.prototype.getDialog = function() {
  var drawer = DvtNBoxDataUtils.getDrawer(this._nBox);
  if (drawer) {
    var categoryData = DvtNBoxDataUtils.getCategoryNode(this._nBox, drawer.id);
    if (categoryData) {
      var categoryNode = DvtNBoxUtils.getDisplayable(this._nBox, categoryData);
      var data = {};
      data['label'] = categoryNode.getLabel();
      data['getNodeCount'] = function() {return categoryData['nodeIndices'] ? categoryData['nodeIndices'].length : -1;};
      var groupInfo = {};
      var categories = categoryData.id.split(';');
      for (var idx = 0; idx < categories.length; idx++) {
        var row = categories[idx].split(':');
        if (row && row.length == 2)
          groupInfo[row[0]] = row[1];
      }
      data['groupInfo'] = groupInfo;
      return data;
    }
  }
  return null;
};

/**
 * Get node data from NBox dialog
 * @param {Number} nodeIndex  Node index
 * @return {Object} automation node data
 */
DvtNBoxAutomation.prototype.getDialogNode = function(nodeIndex) {
  var drawer = DvtNBoxDataUtils.getDrawer(this._nBox);
  if (drawer) {
    var categoryData = DvtNBoxDataUtils.getCategoryNode(this._nBox, drawer.id);
    if (categoryData && categoryData['nodeIndices'] && categoryData['nodeIndices'][nodeIndex] != null) {
      var nodeData = DvtNBoxDataUtils.getNode(this._nBox, categoryData['nodeIndices'][nodeIndex]);
      return this._getNode(nodeData);
    }
  }
  return null;
};


/**
 * Get node id from index
 * @param {Number} index node index
 * @return {string} node id
 */
DvtNBoxAutomation.prototype.getNodeIdFromIndex = function(index) {
  return DvtNBoxDataUtils.getNode(this._nBox, index)['id'];
};

/**
 * Get node index from id
 * @param {string} id node id
 * @return {Number} node index
 */
DvtNBoxAutomation.prototype.getNodeIndexFromId = function(id) {
  return DvtNBoxDataUtils.getNodeIndex(this._nBox, id);
};

/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @param {dvt.Context} context The rendering context.
 * @extends {dvt.BaseComponentDefaults}
 */
var DvtNBoxDefaults = function(context) {
  this.Init({'alta': DvtNBoxDefaults.SKIN_ALTA}, context);
};

Obj.createSubclass(DvtNBoxDefaults, BaseComponentDefaults);

/**
 * Defaults for version 1.
 */
DvtNBoxDefaults.SKIN_ALTA = {
  'skin': CSSStyle.SKIN_ALTA,
  'selectionMode': 'multiple',
  'animationOnDataChange': 'none',
  'animationOnDisplay': 'none',
  'cellMaximize' : 'on',
  'cellContent' : 'auto',
  'groupBehavior': 'withinCell',
  'otherColor': '#636363',
  'otherThreshold': 0,
  'hoverBehavior': 'none',
  'highlightMatch' : 'all',
  'highlightedCategories' : [],
  'touchResponse': 'auto',
  '_statusMessageStyle': new CSSStyle(),
  'styleDefaults': {
    'animationDuration': 500,
    'hoverBehaviorDelay': 200,
    'columnLabelStyle': new CSSStyle(),
    'rowLabelStyle': new CSSStyle(),
    'columnsTitleStyle': new CSSStyle(),
    'rowsTitleStyle' : new CSSStyle(),
    'cellDefaults' : {'_style': new CSSStyle(),
      '_borderRadius': 0,
      '_maximizedStyle': new CSSStyle(),
      '_minimizedStyle': new CSSStyle(),
      'labelStyle': new CSSStyle(),
      '_labelMinimizedStyle': new CSSStyle(),
      '_labelMaximizedStyle': new CSSStyle(),
      'countLabelStyle': new CSSStyle(),
      'bodyCountLabelStyle': new CSSStyle(),
      'dropTargetStyle': new CSSStyle('background-color:rgba(217, 244, 250, .75);border-color:#ccf6ff'),
      'showCount': 'auto',
      'showMaximize': 'on',
      '_panelShadow':'none'},
    '__scrollbar' : {'scrollbarBackground': 'linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)',
      'scrollbarBorderColor': '#dce2e7',
      'scrollbarHandleColor': '#abb0b4',
      'scrollbarHandleHoverColor' : '#333333',
      'scrollbarHandleActiveColor' : '#333333'},
    '_drawerDefaults' : {'background': '#e9e9e9',
      'borderColor': '#bcc7d2',
      'borderRadius': 1,
      'headerBackground': 'linear-gradient(to bottom, #f5f5f5 0%, #f0f0f0 100%)',
      'labelStyle': new CSSStyle(),
      'countLabelStyle': new CSSStyle(),
      'countBorderRadius': 1},
    'nodeDefaults' : {'color': '#FFFFFF',
      'labelStyle': new CSSStyle(),
      'secondaryLabelStyle': new CSSStyle(),
      'alphaFade': 0.2,
      '_borderRadius': 1,
      'hoverColor': '#FFFFFF',
      'selectionColor': '#000000',
      'iconDefaults': {'preferredSize': 19,
        'preferredSizeTouch': 34,
        'shapePaddingRatio': .15,
        'sourcePaddingRatio': 0,
        'opacity': 1,
        'pattern': 'none',
        'borderColor': '#000000',
        'borderWidth': 0,
        'borderRadius' : 0,
        'shape': SimpleMarker.CIRCLE,
        'background': 'neutral',
        'backgroundSize': 196
      },
      'indicatorIconDefaults': {'width': 10,
        'height': 10,
        'opacity': 1,
        'pattern': 'none',
        'borderColor': '#000000',
        'borderWidth': 0,
        'borderRadius' : 0,
        'shape': SimpleMarker.CIRCLE}},
    '_categoryNodeDefaults' : {'labelStyle': new CSSStyle()}
  },
  '__layout': {
    'componentGap': 8,
    'titleGap': 4,
    'titleComponentGap': 4,
    'nodeLabelOnlyStartLabelGap': 5,
    'nodeStartLabelGap': 3,
    'nodeEndLabelGap': 5,
    'nodeSingleLabelGap': 2,
    'nodeDualLabelGap': 2,
    'nodeInterLabelGap': 0,
    'nodeIndicatorGap': 3,
    'nodeSwatchSize': 10,
    'categoryNodeLabelGap': 5,
    'minimumCellSize': 34,
    'cellGap': 3,
    'gridGap': 6,
    'cellInnerPadding': 6,
    'cellLabelGap': 6,
    'cellCloseGap': 6,
    'countLabelGap': 10,
    'markerGap': 3,
    'minimumLabelWidth': 55,
    'maximumLabelWidth': 148,
    'drawerButtonGap': 6,
    'drawerCountHorizontalGap': 5,
    'drawerCountVerticalGap': 3,
    'drawerStartGap': 6,
    'drawerLabelGap': 6,
    'drawerHeaderHeight': 31
  }
};

/**
 * @override
 */
 DvtNBoxDefaults.prototype.getNoCloneObject = function() {
  return {'data': true, 'nodes': true};
};

/**
 * Category rollover handler for NBox
 * @param {function} callback A function that responds to component events.
 * @param {object} callbackObj The object instance that the callback function is defined on.
 * @class DvtNBoxCategoryRolloverHandler
 * @extends {dvt.CategoryRolloverHandler}
 * @constructor
 */
var DvtNBoxCategoryRolloverHandler = function(callback, callbackObj) {
  DvtNBoxCategoryRolloverHandler.superclass.constructor.call(this, callback, callbackObj);
  this._nbox = callbackObj;
};

Obj.createSubclass(DvtNBoxCategoryRolloverHandler, CategoryRolloverHandler);

/**
 * @override
 */
DvtNBoxCategoryRolloverHandler.prototype.GetRolloverCallback = function(event, objs, bAnyMatched, customAlpha) {
  var callback = function() {
    this.SetHighlightMode(true);
    this._nbox.processEvent(event);

    // Fire the event to the component's callback if specified.
    if (this._callback)
      this._callback.call(this._callbackObj, event, this._source);
  };
  return callback.bind(this);
};

/**
 * @override
 */
DvtNBoxCategoryRolloverHandler.prototype.GetRolloutCallback = function(event, objs, bAnyMatched, customAlpha) {
  var callback = function() {
    this.SetHighlightModeTimeout();
    this._nbox.processEvent(event);

    // Fire the event to the component's callback if specified.
    if (this._callback)
      this._callback.call(this._callbackObj, event, this._source);
  };
  return callback.bind(this);
};

/**
 * Event Manager for NBox.
 * @param {NBox} nbox NBox component
 * @class
 * @extends {dvt.EventManager}
 * @constructor
 */
var DvtNBoxEventManager = function(nbox) {
  this.Init(nbox.getCtx(), nbox.processEvent, nbox, nbox);
  this._nbox = nbox;
};

Obj.createSubclass(DvtNBoxEventManager, EventManager);

/**
 * @override
 */
DvtNBoxEventManager.prototype.OnClickInternal = function(event) {
  var obj = this.GetLogicalObject(event.target);

  // Only open drawer if category node not selectable. If selectable, open using double click.
  if (obj.nboxType === 'categoryNode' && !obj.isSelectable())
    obj.openDrawer();
};

/**
 * @override
 */
DvtNBoxEventManager.prototype.OnDblClickInternal = function(event) {
  this._handleDblClick(event.target);
};


/**
 * @override
 */
DvtNBoxEventManager.prototype.HandleTouchDblClickInternal = function(event) {
  this._handleDblClick(event.target);
};

/**
 * @override
 */
DvtNBoxEventManager.prototype.HandleTouchClickInternal = function(event) {
  var obj = this.GetLogicalObject(event.target);

  // Only open drawer if category node not selectable. If selectable, open using double click.
  if (obj.nboxType === 'categoryNode' && !obj.isSelectable())
    obj.openDrawer();
};

/**
 * Handler for mouse or touch double click actions
 *
 * @param {dvt.Displayable} displayable the event target
 * @private
 */
DvtNBoxEventManager.prototype._handleDblClick = function(displayable) {
  var logicalObject = this.GetLogicalObject(displayable);
  if (logicalObject && logicalObject.isDoubleClickable && logicalObject.isDoubleClickable() && logicalObject.handleDoubleClick) {
    logicalObject.handleDoubleClick();
  }
};


/**
 * @override
 */
DvtNBoxEventManager.prototype.ProcessKeyboardEvent = function(event)
{
  var eventConsumed = false;
  var keyCode = event.keyCode;
  var navigable = this.getFocus(); // the item with current keyboard focus

  if (keyCode == KeyboardEvent.ENTER || keyCode == KeyboardEvent.ESCAPE) { //drill up and down
    if (navigable && navigable.HandleKeyboardEvent)
      navigable.HandleKeyboardEvent(event);
    navigable = null;
  }
  else if (event.keyCode == KeyboardEvent.SPACE && event.ctrlKey) { //multi-select event
    if (navigable.nboxType === 'categoryNode' || navigable.nboxType === 'node')
      eventConsumed = DvtNBoxEventManager.superclass.ProcessKeyboardEvent.call(this, event);
  }
  else
    eventConsumed = DvtNBoxEventManager.superclass.ProcessKeyboardEvent.call(this, event);

  return eventConsumed;
};

/**
 * Processes a rollover action on the specified logical object.
 * @param {dvt.BaseEvent} event The event that caused the rollover.
 * @param {DvtLogicalObject} obj The logical object that was the target of the event.
 * @param {boolean} bOver True if this is a rollover, false if this is a rollout.
 * @protected
 */
DvtNBoxEventManager.prototype.ProcessRolloverEvent = function(event, obj, bOver) {
  // Don't continue if not enabled
  var options = this._nbox.getOptions();
  if (options['hoverBehavior'] != 'dim')
    return;

  // Compute the new highlighted categories and update the options
  var categories = obj.getCategories ? obj.getCategories() : [];
  options['highlightedCategories'] = bOver ? categories.slice() : null;

  // Fire the event to the rollover handler, who will fire to the component callback.
  var rolloverEvent = EventFactory.newCategoryHighlightEvent(options['highlightedCategories'], bOver);
  var hoverBehaviorDelay = CSSStyle.getTimeMilliseconds(options['styleDefaults']['hoverBehaviorDelay']);
  this.RolloverHandler.processEvent(rolloverEvent, this._nbox.getNodeDisplayables(), hoverBehaviorDelay, options['highlightMatch'] == 'any');
};

/**
 * @override
 */
DvtNBoxEventManager.prototype.CreateCategoryRolloverHandler = function(callback, callbackObj) {
  return new DvtNBoxCategoryRolloverHandler(callback, callbackObj);
};

/**
 * @override
 */
DvtNBoxEventManager.prototype.GetTouchResponse = function() {
  var options = this._nbox.getOptions();
  var drawerData = DvtNBoxDataUtils.getDrawer(this._nbox);
  var cellData = DvtNBoxDataUtils.getCell(this._nbox, DvtNBoxDataUtils.getMaximizedCellIndex(this._nbox));
  if ((drawerData && DvtNBoxUtils.getDisplayable(this._nbox, drawerData).getChildContainer().hasScrollingContent()) ||
      (cellData && DvtNBoxUtils.getDisplayable(this._nbox, cellData).getChildContainer().hasScrollingContent()))
    return EventManager.TOUCH_RESPONSE_TOUCH_HOLD;
  else if (options['touchResponse'] === EventManager.TOUCH_RESPONSE_TOUCH_START)
    return EventManager.TOUCH_RESPONSE_TOUCH_START;
  return EventManager.TOUCH_RESPONSE_AUTO;
};

var DvtNBoxCategoryNode = function() {};

Obj.createSubclass(DvtNBoxCategoryNode, Container);

DvtNBoxCategoryNode.prototype.nboxType = 'categoryNode';

/**
 * Returns a new instance of DvtNBoxCategoryNode
 *
 * @param {NBox} nbox the parent nbox
 * @param {object} data the data for this category node
 *
 * @return {DvtNBoxCategoryNode} the nbox category node
 */
DvtNBoxCategoryNode.newInstance = function(nbox, data) {
  var component = new DvtNBoxCategoryNode();
  component.Init(nbox, data);
  return component;
};


/**
 * Initializes this component
 *
 * @param {NBox} nbox the parent nbox
 * @param {object} data the data for this category node
 *
 * @protected
 */
DvtNBoxCategoryNode.prototype.Init = function(nbox, data) {
  DvtNBoxCategoryNode.superclass.Init.call(this, nbox.getCtx(), null,
                                           isNaN(data[NBoxConstants.CELL]) ? data[NBoxConstants.ID] : data[NBoxConstants.CELL] + ':' + data[NBoxConstants.ID]);// TODO for : Passing non container params weird
  this._nbox = nbox;
  this._data = data;
  this._data['__cacheId'] = 'categoryNode:' + this.getId();
  this._nbox.registerObject(this);
  this.setCursor(SelectionEffectUtils.getSelectingCursor());
  this._maxAlpha = 1;
};


/**
 * Returns the data object for this category node
 *
 * @return {object} the data object for this category node
 */
DvtNBoxCategoryNode.prototype.getData = function() {
  return this._data;
};


/**
 * Renders the nbox node
 * @param {dvt.Container} container the container to render into
 * @param {number} scale The number of pixels per unit (used to determine the size of this category node based on its node count)
 * @param {number} gap The number of pixels to shrink this node (to leave padding in the force layout)
 */
DvtNBoxCategoryNode.prototype.render = function(container, scale, gap) {
  DvtNBoxCategoryNodeRenderer.render(this._nbox, this._data, this, scale, gap);
  container.addChild(this);
  DvtNBoxUtils.setDisplayable(this._nbox, this._data, this);
  this._nbox.EventManager.associate(this, this);
};


/**
 * Returns true if this object is selectable.
 * @return {boolean} true if this object is selectable.
 */
DvtNBoxCategoryNode.prototype.isSelectable = function() {
  var selectionMode = this._nbox.getOptions()[NBoxConstants.SELECTION_MODE];
  return selectionMode == 'multiple';
};


/**
 * Returns true if this object is selected.
 * @return {boolean} true if this object is selected.
 */
DvtNBoxCategoryNode.prototype.isSelected = function() {
  return this.getSelectionShape().isSelected();
};


/**
 * Specifies whether this object is selected.
 * @param {boolean} selected true if this object is selected.
 * @protected
 */
DvtNBoxCategoryNode.prototype.setSelected = function(selected) {
  this.getSelectionShape().setSelected(selected);
  this.UpdateAccessibilityAttributes();
};


/**
 * Displays the hover effect.
 */
DvtNBoxCategoryNode.prototype.showHoverEffect = function() {
  this.getSelectionShape().showHoverEffect();
};


/**
 * Hides the hover effect.
 */
DvtNBoxCategoryNode.prototype.hideHoverEffect = function() {
  this.getSelectionShape().hideHoverEffect();
};


/**
 * Sets the shape that should be used for displaying selection and hover feedback
 *
 * @param {dvt.Shape} selectionShape the shape that should be used for displaying selection and hover feedback
 */
DvtNBoxCategoryNode.prototype.setSelectionShape = function(selectionShape) {
  this._selectionShape = selectionShape;
};


/**
 * Gets the shape that should be used for displaying selection and hover feedback
 *
 * @return {dvt.Shape} the shape that should be used for displaying selection and hover feedback
 */
DvtNBoxCategoryNode.prototype.getSelectionShape = function() {
  return this._selectionShape;
};


/**
 * Returns the label for this node
 *
 * @return {string} the label for this category node
 */
DvtNBoxCategoryNode.prototype.getLabel = function() {
  var separator = getTranslatedString('oj-converter.plural-separator');
  return DvtNBoxDataUtils.getCategoryNodeLabels(this._nbox, this._data).join(separator);
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.getDatatip = function(target, x, y) {
  // Custom Tooltip Support
  // Custom Tooltip via Function
  var customTooltip = this._nbox.getOptions()['tooltip'];
  var tooltipFunc = customTooltip ? customTooltip['renderer'] : null;
  if (tooltipFunc) {
    var dataContext = {
      'id': this._data['id'],
      'color': DvtNBoxStyleUtils.getCategoryNodeColor(this._nbox, this._data),
      'indicatorColor': DvtNBoxStyleUtils.getCategoryNodeIndicatorColor(this._nbox, this._data),
      'size': this._data['nodeIndices'].length
    };
    if (DvtNBoxDataUtils.getGroupBehavior(this._nbox) == 'withinCell') {
      dataContext['row'] = DvtNBoxDataUtils.getCell(this._nbox, this._data['cell'])['row'];
      dataContext['column'] = DvtNBoxDataUtils.getCell(this._nbox, this._data['cell'])['column'];
    }
    return this._nbox.getCtx().getTooltipManager().getCustomTooltip(tooltipFunc, dataContext);
  }
  var translations = this._nbox.getOptions().translations;
  return this.getShortDesc() + '\n' + ResourceUtils.format(translations.labelAndValue, [translations.labelSize, this._data['nodeIndices'].length]);
};

/**
 * Gets the shortDesc value for the category node.
 * @return {string} the shortDesc
 */
DvtNBoxCategoryNode.prototype.getShortDesc = function() {
  return DvtNBoxDataUtils.getCategoryNodeLabels(this._nbox, this._data).join('\n');
};

/**
 * Returns the border color of the datatip for this object.
 * @return {string} The datatip border color.
 */
DvtNBoxCategoryNode.prototype.getDatatipColor = function() {
  return DvtNBoxStyleUtils.getCategoryNodeColor(this._nbox, this._data);
};


/**
 * Sets the maximium alpha value for this node.  Immediately impacts the current alpha value
 * @param {number} maxAlpha the maximum alpha value for this node
 */
DvtNBoxCategoryNode.prototype.setMaxAlpha = function(maxAlpha) {
  this._maxAlpha = maxAlpha;
  this.setAlpha(this.getAlpha());
};


/**
 * Gets the maximium alpha value for this node.
 * @return {number} the maximum alpha value for this node
 */
DvtNBoxCategoryNode.prototype.getMaxAlpha = function() {
  return this._maxAlpha;
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.setAlpha = function(alpha) {
  DvtNBoxCategoryNode.superclass.setAlpha.call(this, Math.min(alpha, this._maxAlpha));
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.isDoubleClickable = function() {
  return this.isSelectable();
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.handleDoubleClick = function() {
  if (this.isSelectable())
    this.openDrawer();
};


/**
 * Opens nBox drawer.  Triggered on single click with selection disabled, double click with selection enabled.
 */
DvtNBoxCategoryNode.prototype.openDrawer = function() {
  DvtNBoxDataUtils.fireOptionChangeEvent(this._nbox, NBoxConstants.DRAWER, {id: this.getId()});
  this._nbox.processEvent(EventFactory.newRenderEvent());
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.animateUpdate = function(animationHandler, oldNode) {
  DvtNBoxCategoryNodeRenderer.animateUpdate(animationHandler, oldNode, this);
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.animateDelete = function(animationHandler, deleteContainer) {
  DvtNBoxCategoryNodeRenderer.animateDelete(animationHandler, this);

};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.animateInsert = function(animationHandler) {
  DvtNBoxCategoryNodeRenderer.animateInsert(animationHandler, this);
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.isDragAvailable = function(clientIds) {
  return this._nbox.__isDragAvailable(clientIds);
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.getDragTransferable = function(mouseX, mouseY) {
  return this._nbox.__getDragTransferable(this);
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.getDragFeedback = function(mouseX, mouseY) {
  return this._nbox.__getDragFeedback();
};


/**
 * Process a keyboard event
 * @param {dvt.KeyboardEvent} event
 */
DvtNBoxCategoryNode.prototype.HandleKeyboardEvent = function(event) {
  if (event.keyCode == KeyboardEvent.ENTER) {
    this.openDrawer();
  }
  else if (event.keyCode == KeyboardEvent.ESCAPE &&
      DvtNBoxDataUtils.getGroupBehavior(this._nbox) == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
    var cellData = DvtNBoxDataUtils.getCell(this._nbox, this._data.cell);
    var cell = DvtNBoxUtils.getDisplayable(this._nbox, cellData);
    cell.HandleKeyboardEvent(event);
  }
};


/**
 * @protected
 * Updates accessibility attributes on selection event
 */
DvtNBoxCategoryNode.prototype.UpdateAccessibilityAttributes = function() {
  if (!Agent.deferAriaCreation()) {
    var desc = this.getAriaLabel();
    if (desc)
      this.setAriaProperty(NBoxConstants.LABEL, desc);
  }
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.getAriaLabel = function() {
  return DvtNBoxDataUtils.buildAriaDesc(this._nbox, this, this.getShortDesc(), this.isSelected());
};

/**
 * Gets the highlight/filter categories for this category node.
 * @return {array} categories
 */
DvtNBoxCategoryNode.prototype.getCategories = function() {
  var categories = this.getData()[NBoxConstants.CATEGORIES];
  if (!categories) {
    var intersect = function(a, b) {
      return a.filter(function(n) {
        return b.indexOf(n) > -1;
      });
    };
    var indices = this.getData()['nodeIndices'];
    categories = null;
    for (var i = 0; i < indices.length; i++) {
      var nodeCategories = DvtNBoxDataUtils.getNode(this._nbox, indices[i])[NBoxConstants.CATEGORIES];
      if (!nodeCategories) {
        categories = [];
        break;
      }
      categories = categories == null ? nodeCategories : intersect(categories, nodeCategories);
    }
    this.getData()[NBoxConstants.CATEGORIES] = categories;
  }
  return categories;
};

//---------------------------------------------------------------------//
// Keyboard Support: DvtKeyboardNavigable impl                        //
//---------------------------------------------------------------------//
/**
 * @override
 */
DvtNBoxCategoryNode.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace)
{
  return DvtNBoxUtils.getKeyboardBoundingBox(this, targetCoordinateSpace);
};

/**
 * @override
 */
DvtNBoxCategoryNode.prototype.getTargetElem = function()
{
  return this.getElem();
};

/**
 * @override
 */
DvtNBoxCategoryNode.prototype.showKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = true;
  this.showHoverEffect();

};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.hideKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = false;
  this.hideHoverEffect();
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.isShowingKeyboardFocusEffect = function() {
  return this._isShowingKeyboardFocusEffect;
};


/**
 * @override
 */
DvtNBoxCategoryNode.prototype.getNextNavigable = function(event)
{
  var next = null;
  if (event.keyCode == KeyboardEvent.SPACE && event.ctrlKey)
  {
    // multi-select node with current focus; so we navigate to ourself and then let the selection handler take
    // care of the selection
    return this;
  }
  else if (event.keyCode == KeyboardEvent.CLOSE_BRACKET &&
          DvtNBoxDataUtils.getGroupBehavior(this._nbox) == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
    //get parent cell if the node is in the cell
    var cellData = DvtNBoxDataUtils.getCell(this._nbox, this.getData()[NBoxConstants.CELL]);
    next = DvtNBoxUtils.getDisplayable(this._nbox, cellData);
  }
  else if (event.keyCode == KeyboardEvent.CLOSE_BRACKET || event.keyCode == KeyboardEvent.OPEN_BRACKET) {
    next = this; //do nothing
  }
  else if (this._nbox.EventManager.getKeyboardHandler().isNavigationEvent(event)) {
    //get sibling category node
    if (DvtNBoxDataUtils.getGroupBehavior(this._nbox) == NBoxConstants.GROUP_BEHAVIOR_ACROSS_CELLS) {
      var groups = this._nbox.getOptions()['__groups'];
      var groupNodes = [];
      for (var id in groups) {
        var displayable = DvtNBoxUtils.getDisplayable(this._nbox, groups[id]);
        if (displayable)
          groupNodes.push(displayable);
      }
      next = DvtNBoxKeyboardHandler.getNextNavigableCategoryNode(this, event, groupNodes);
    }
    else {
      var container = this.getParent();
      var nodes = [];
      for (var i = 0; i < container.getNumChildren(); i++) {
        if (container.getChildAt(i).nboxType === 'categoryNode')
          nodes.push(container.getChildAt(i));
      }
      next = DvtNBoxKeyboardHandler.getNextNavigableCategoryNode(this, event, nodes);
    }
  }
  else if (event.type == MouseEvent.CLICK) {
    next = this;
  }
  return next;
};


/**
 * Returns the category node displayable (itself).
 *
 * @return {dvt.Displayable} displayable
 */
DvtNBoxCategoryNode.prototype.getDisplayable = function() {
  return this;
};


/**
 * Returns the displayable that should receive the keyboard focus
 *
 * @return {dvt.Displayable} displayable to receive keyboard focus
 */
DvtNBoxCategoryNode.prototype.getKeyboardFocusDisplayable = function() {
  // return the drawer when expanding a group node
  var drawerData = DvtNBoxDataUtils.getDrawer(this._nbox);
  if (drawerData)
    return DvtNBoxUtils.getDisplayable(this._nbox, drawerData);

  if (DvtNBoxDataUtils.getGrouping(this._nbox)) {
    var groupNodeData = DvtNBoxDataUtils.getCategoryNode(this._nbox, this.getId());
    if (groupNodeData)
      return DvtNBoxUtils.getDisplayable(this._nbox, groupNodeData);
  }
  return null;
};

/**
 * Vector math utilities.
 * @class DvtVectorUtils
 */
var DvtVectorUtils = {
  /**
   * Creates a vector from the origin to the specified coordinate
   *
   * @param {number} x the x coordinate of the vector
   * @param {number} y the y coordinate of the vector
   * @return {object} an object with x and y properties representing the vector
   */
  create: function(x, y) {
    return {x: x, y: y};
  },

  /**
   * Adds two vectors
   *
   * @param {object} v1 an object with x and y properties representing the first addend
   * @param {object} v2 an object with x and y properties representing the second addend
   * @return {object} an object with x and y properties representing the sum
   */
  add: function(v1, v2) {
    return DvtVectorUtils.create(v1.x + v2.x, v1.y + v2.y);
  },


  /**
   * Subtracts two vectors
   *
   * @param {object} v1 an object with x and y properties representing the minuend
   * @param {object} v2 an object with x and y properties representing the subtrahend
   * @return {object} an object with x and y properties representing the difference
   */
  subtract: function(v1, v2) {
    return DvtVectorUtils.create(v1.x - v2.x, v1.y - v2.y);
  },

  /**
   * Scales a vector
   *
   * @param {object} v an object with x and y properties representing the vector
   * @param {number} s the scalar by which to scale the vector
   * @return {object} an object with x and y properties representing the scaled vector
   */
  scale: function(v, s) {
    return DvtVectorUtils.create(v.x * s, v.y * s);
  },

  /**
   * Scales a vector
   *
   * @param {object} v an object with x and y properties representing the vector
   * @return {number} the magnitude of the vector
   */
  getMagnitude: function(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }
};

/**
 * Renderer for NBox.
 * @class
 */
var DvtNBoxRenderer = new Object();

Obj.createSubclass(DvtNBoxRenderer, Obj);


/**
 * Renders the nbox contents into the available space.
 * @param {NBox} nbox The nbox being rendered.
 * @param {dvt.Container} container The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxRenderer.render = function(nbox, container, availSpace) {
  DvtNBoxRenderer._renderBackground(nbox, container, availSpace);
  if (DvtNBoxDataUtils.hasValidData(nbox)) {
    DvtNBoxRenderer._adjustAvailSpace(availSpace);

    DvtNBoxRenderer._renderTitles(nbox, container, availSpace);
    DvtNBoxRenderer._adjustAvailSpace(availSpace);
    DvtNBoxRenderer._renderCells(nbox, container, availSpace);
    DvtNBoxRenderer._renderNodes(nbox, container, availSpace);
    DvtNBoxRenderer._renderInitialSelection(nbox);
  } else {
    //Render empty text
    DvtNBoxRenderer._renderEmptyText(nbox, container, availSpace);
  }
};


/**
 * Renders the nbox background.
 * @param {NBox} nbox The nbox being rendered.
 * @param {dvt.Container} container The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxRenderer._renderBackground = function(nbox, container, availSpace) {
  // NBox background: Apply invisible background for interaction support
  var rect = new Rect(nbox.getCtx(), availSpace.x, availSpace.y, availSpace.w, availSpace.h);
  rect.setInvisibleFill();
  container.addChild(rect);
  var clipPath = new ClipPath();
  clipPath.addRect(availSpace.x, availSpace.y, availSpace.w, availSpace.h);
  container.setClipPath(clipPath);
};

/**
 * Renders the nbox titles and updates the available space.
 * @param {NBox} nbox The nbox being rendered.
 * @param {dvt.Container} container The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxRenderer._renderTitles = function(nbox, container, availSpace) {
  var options = nbox.getOptions();
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  var rowCount = DvtNBoxDataUtils.getRowCount(nbox);

  var componentGap = options['__layout']['componentGap'];
  var titleGap = options['__layout']['titleGap'];
  var titleComponentGap = options['__layout']['titleComponentGap'];
  var rtl = Agent.isRightToLeft(nbox.getCtx());

  availSpace.x += componentGap;
  availSpace.y += componentGap;
  availSpace.w -= 2 * componentGap;
  availSpace.h -= 2 * componentGap;

  var maximizedColumn = DvtNBoxDataUtils.getMaximizedColumn(nbox);
  var maximizedColumnIndex = maximizedColumn ? DvtNBoxDataUtils.getColumnIndex(nbox, maximizedColumn) : -1;
  var maximizedRow = DvtNBoxDataUtils.getMaximizedRow(nbox);
  var maximizedRowIndex = maximizedRow ? DvtNBoxDataUtils.getRowIndex(nbox, maximizedRow) : -1;

  var columnsTitle = null;
  var rowsTitle = null;
  var columnLabels = [];
  var rowLabels = [];
  var columnsTitleHeight = 0;
  var rowsTitleWidth = 0;
  var rowTitleGap = 0;
  var columnTitleGap = 0;
  var columnLabelsHeight = 0;
  var rowLabelsWidth = 0;
  var rowTitleComponentGap = 0;
  var columnTitleComponentGap = 0;

  if (options[NBoxConstants.COLUMNS_TITLE]) {
    columnsTitle = DvtNBoxUtils.createText(nbox.getCtx(), options[NBoxConstants.COLUMNS_TITLE],
                                              options[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.COLUMNS_TITLE_STYLE],
                                              OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_MIDDLE);
    container.addChild(columnsTitle);
    columnsTitleHeight = columnsTitle.getDimensions().h;
  }
  if (options[NBoxConstants.ROWS_TITLE]) {
    rowsTitle = DvtNBoxUtils.createText(nbox.getCtx(), options[NBoxConstants.ROWS_TITLE],
                                           options[NBoxConstants.STYLE_DEFAULTS][NBoxConstants.ROWS_TITLE_STYLE],
                                           OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_MIDDLE);
    container.addChild(rowsTitle);
    rowsTitleWidth = rowsTitle.getDimensions().h;
  }

  for (var i = 0; i < columnCount; i++) {
    var column = DvtNBoxDataUtils.getColumn(nbox, i);
    if (column[NBoxConstants.LABEL]) {
      var columnLabel = DvtNBoxUtils.createText(nbox.getCtx(), column[NBoxConstants.LABEL], DvtNBoxStyleUtils.getColumnLabelStyle(nbox, i), OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_MIDDLE);
      columnLabelsHeight = Math.max(columnLabelsHeight, columnLabel.getDimensions().h);
      if (!maximizedColumn || maximizedColumn == column[NBoxConstants.ID]) {
        columnLabels[i] = columnLabel;
        container.addChild(columnLabels[i]);
      }
    }
  }

  for (var i = 0; i < rowCount; i++) {
    var row = DvtNBoxDataUtils.getRow(nbox, i);
    if (row[NBoxConstants.LABEL]) {
      var rowLabel = DvtNBoxUtils.createText(nbox.getCtx(), row[NBoxConstants.LABEL], DvtNBoxStyleUtils.getRowLabelStyle(nbox, i), OutputText.H_ALIGN_CENTER, OutputText.V_ALIGN_MIDDLE);
      rowLabelsWidth = Math.max(rowLabelsWidth, rowLabel.getDimensions().h);
      if (!maximizedRow || maximizedRow == row[NBoxConstants.ID]) {
        rowLabels[i] = rowLabel;
        container.addChild(rowLabels[i]);
      }
    }
  }

  if (rowsTitleWidth || rowLabelsWidth) {
    rowTitleComponentGap = titleComponentGap;
    if (rowsTitleWidth && rowLabelsWidth) {
      rowTitleGap = titleGap;
    }
  }
  if (columnsTitleHeight || columnLabelsHeight) {
    columnTitleComponentGap = titleComponentGap;
    if (columnsTitleHeight && columnLabelsHeight) {
      columnTitleGap = titleGap;
    }
  }

  var rowHeaderWidth = rowsTitleWidth + rowTitleGap + rowLabelsWidth + rowTitleComponentGap;
  var columnHeaderHeight = columnsTitleHeight + columnTitleGap + columnLabelsHeight + columnTitleComponentGap;

  availSpace.x += rtl ? 0 : rowHeaderWidth;
  availSpace.w -= rowHeaderWidth;
  availSpace.h -= columnHeaderHeight;

  if (columnsTitle) {
    if (TextUtils.fitText(columnsTitle, availSpace.w, columnsTitleHeight, container)) {
      DvtNBoxUtils.positionText(columnsTitle, availSpace.x + availSpace.w / 2, availSpace.y + availSpace.h + columnHeaderHeight - columnsTitleHeight / 2);
      DvtNBoxUtils.setDisplayable(nbox, nbox.getOptions(), columnsTitle, NBoxConstants.COLUMNS_TITLE);
    }
  }
  if (rowsTitle) {
    if (TextUtils.fitText(rowsTitle, availSpace.h, rowsTitleWidth, container)) {
      DvtNBoxUtils.positionText(rowsTitle,
                                   availSpace.x + (rtl ? availSpace.w : 0) + (rtl ? 1 : -1) * (rowHeaderWidth - rowsTitleWidth / 2),
                                   availSpace.y + availSpace.h / 2,
                                   rtl ? Math.PI / 2 : -Math.PI / 2);
      DvtNBoxUtils.setDisplayable(nbox, nbox.getOptions(), rowsTitle, NBoxConstants.ROWS_TITLE);
    }
  }
  for (var i = 0; i < columnCount; i++) {
    if (columnLabels[i]) {
      var cellDims = DvtNBoxCellRenderer.getCellDimensions(nbox, maximizedRowIndex == -1 ? 0 : maximizedRowIndex, i, availSpace);
      if (TextUtils.fitText(columnLabels[i], cellDims.w, columnLabelsHeight, container)) {
        DvtNBoxUtils.positionText(columnLabels[i], cellDims.x + cellDims.w / 2, availSpace.y + availSpace.h + columnTitleComponentGap + columnLabelsHeight / 2);
        DvtNBoxUtils.setDisplayable(nbox, DvtNBoxDataUtils.getColumn(nbox, i), columnLabels[i], NBoxConstants.LABEL);
      }
    }
  }
  for (var i = 0; i < rowCount; i++) {
    if (rowLabels[i]) {
      var cellDims = DvtNBoxCellRenderer.getCellDimensions(nbox, i, maximizedColumnIndex == -1 ? 0 : maximizedColumnIndex, availSpace);
      if (TextUtils.fitText(rowLabels[i], cellDims.h, rowLabelsWidth, container)) {
        DvtNBoxUtils.positionText(rowLabels[i],
                                     availSpace.x + (rtl ? availSpace.w : 0) + (rtl ? 1 : -1) * (rowTitleComponentGap + rowLabelsWidth / 2),
                                     cellDims.y + cellDims.h / 2,
                                     rtl ? Math.PI / 2 : -Math.PI / 2);
        DvtNBoxUtils.setDisplayable(nbox, DvtNBoxDataUtils.getRow(nbox, i), rowLabels[i], NBoxConstants.LABEL);
      }
    }
  }
};

/**
 * Renders cells
 * @param {NBox} nbox The nbox being rendered.
 * @param {dvt.Container} container The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxRenderer._renderCells = function(nbox, container, availSpace) {
  var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  for (var r = 0; r < rowCount; r++) {
    for (var c = 0; c < columnCount; c++) {
      var cell = DvtNBoxDataUtils.getCell(nbox, r * columnCount + c);
      var cellContainer = DvtNBoxCell.newInstance(nbox, cell);
      cellContainer.render(container, availSpace);
    }
  }
};

/**
 * Calculates the order to render the nodes in, taking into account selection/highlighting state.
 * @param {NBox} nbox The nbox component
 *
 * @return {object} object mapping cells to arrays of node objects in rendering order
 */
DvtNBoxRenderer.calculateNodeOrders = function(nbox) {
  var orderPasses = ['normal'];

  var highlightedItems = DvtNBoxDataUtils.getHighlightedItems(nbox);
  var highlightedMap = {};
  if (highlightedItems) {
    for (var i = 0; i < highlightedItems.length; i++) {
      highlightedMap[highlightedItems[i][NBoxConstants.ID]] = true;
    }
  }

  var selectedItems = DvtNBoxDataUtils.getSelectedItems(nbox);
  var selectedMap = {};
  if (selectedItems) {
    for (var i = 0; i < selectedItems.length; i++) {
      selectedMap[selectedItems[i]] = true;
    }
  }

  if (highlightedItems) {
    if (selectedItems)
      orderPasses = ['highlighted-selected', 'highlighted-unselected', 'unhighlighted-selected', 'unhighlighted-unselected'];
    else
      orderPasses = ['highlighted-unselected', 'unhighlighted-unselected'];
  }
  else if (selectedItems) {
    orderPasses = ['unhighlighted-selected', 'unhighlighted-unselected'];
  }

  // calculate rendering order of nodes in each cell
  var cellNodes = {};
  var nodeCount = DvtNBoxDataUtils.getNodeCount(nbox);
  for (var p = 0; p < orderPasses.length; p++) {
    for (var n = 0; n < nodeCount; n++) {
      var node = DvtNBoxDataUtils.getNode(nbox, n);
      if (!DvtNBoxDataUtils.isNodeHidden(nbox, node)) {
        if (orderPasses[p] == 'normal' ||
            (orderPasses[p] == 'highlighted-selected' && highlightedMap[node[NBoxConstants.ID]] && selectedMap[node[NBoxConstants.ID]]) ||
            (orderPasses[p] == 'highlighted-unselected' && highlightedMap[node[NBoxConstants.ID]] && !selectedMap[node[NBoxConstants.ID]]) ||
            (orderPasses[p] == 'unhighlighted-selected' && !highlightedMap[node[NBoxConstants.ID]] && selectedMap[node[NBoxConstants.ID]]) ||
            (orderPasses[p] == 'unhighlighted-unselected' && !highlightedMap[node[NBoxConstants.ID]] && !selectedMap[node[NBoxConstants.ID]])) {
          var cellIndex = DvtNBoxDataUtils.getCellIndex(nbox, node);
          if (!DvtNBoxDataUtils.isCellMinimized(nbox, cellIndex)) {
            if (!cellNodes[cellIndex]) {
              cellNodes[cellIndex] = [];
            }
            cellNodes[cellIndex].push(node);
          }
        }
      }
    }
  }
  return cellNodes;
};

/**
 * Renders nodes
 * @param {NBox} nbox The nbox being rendered.
 * @param {dvt.Container} container The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxRenderer._renderNodes = function(nbox, container, availSpace) {
  if (DvtNBoxDataUtils.getNodeCount(nbox) > 0) {
    // skip rendering nodes if rendering counts only.
    if (DvtNBoxDataUtils.getCellContent(nbox) == 'counts') {
      var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
      var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
      var bodyCountLabels = [];
      for (var r = 0; r < rowCount; r++) {
        for (var c = 0; c < columnCount; c++) {
          bodyCountLabels.push(r * columnCount + c);
        }
      }
      DvtNBoxCellRenderer.renderBodyCountLabels(nbox, bodyCountLabels);
      return;
    }

    if (DvtNBoxDataUtils.getGrouping(nbox)) {
      DvtNBoxRenderer._renderCategoryNodes(nbox, container, availSpace);
      DvtNBoxRenderer._renderDrawer(nbox, container, availSpace);
    }
    else {
      DvtNBoxRenderer._renderIndividualNodes(nbox, container, availSpace);
    }
    nbox.setNodeClipPath(null);
    nbox.setNodeIconClipPath(null);
  }
};


/**
 * Renders individual nodes (no grouping)
 * @param {NBox} nbox The nbox being rendered.
 * @param {dvt.Container} container The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxRenderer._renderIndividualNodes = function(nbox, container, availSpace) {
  var options = nbox.getOptions();
  var gridGap = parseInt(options['__layout']['gridGap']);

  var rtl = Agent.isRightToLeft(nbox.getCtx());

  // If no nodes are highlighted/selected, make a single pass through the nodes for ordering
  // If some nodes are highlighted/selected, make additional passes, ensuring highlighted/selected nodes come first in render order

  var alphaFade = DvtNBoxStyleUtils.getFadedNodeAlpha(nbox);
  var highlightedItems = DvtNBoxDataUtils.getHighlightedItems(nbox);
  var highlightedMap = {};
  if (highlightedItems) {
    for (var i = 0; i < highlightedItems.length; i++) {
      highlightedMap[highlightedItems[i][NBoxConstants.ID]] = true;
    }
  }

  var cellNodes = DvtNBoxRenderer.calculateNodeOrders(nbox);

  var nodeLayout = DvtNBoxNodeRenderer.calculateNodeLayout(nbox, cellNodes);
  var hGridSize = nodeLayout['indicatorSectionWidth'] + nodeLayout['iconSectionWidth'] + nodeLayout['labelSectionWidth'] + gridGap;
  var vGridSize = nodeLayout['nodeHeight'] + gridGap;

  var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  for (var r = 0; r < rowCount; r++) {
    for (var c = 0; c < columnCount; c++) {
      var cellIndex = r * columnCount + c;
      var nodes = cellNodes[cellIndex];
      if (!nodes || !nodes.length) {
        continue;
      }
      var cell = DvtNBoxDataUtils.getCell(nbox, cellIndex);
      var cellLayout = nodeLayout['cellLayouts'][cellIndex];
      var cellRows = cellLayout['cellRows'];
      var cellColumns = cellLayout['cellColumns'];
      var skipNodes = cellRows == 0 || cellColumns == 0 || (cellRows == 1 && cellColumns == 1 && cellLayout['overflow']);
      if (!skipNodes) {
        var maxNodes = cellRows * cellColumns - (cellLayout['overflow'] ? 1 : 0);
        for (var n = 0; n < nodes.length; n++) {
          var node = nodes[n];
          if (maxNodes < 0 || n < maxNodes) {
            var cellContainer = DvtNBoxUtils.getDisplayable(nbox, cell).getChildContainer();
            var scrolling = cellContainer instanceof SimpleScrollableContainer;
            var nodeContainer = new DvtNBoxNode(nbox, node);
            var gridXOrigin = cell['__childArea'].x + (cell['__childArea'].w - cellLayout['cellColumns'] * hGridSize + gridGap) / 2;
            var gridYOrigin = scrolling ? gridGap : cell['__childArea'].y;
            var gridColumn = n % cellColumns;
            if (rtl) {
              gridColumn = cellColumns - gridColumn - 1;
            }
            var gridRow = Math.floor(n / cellColumns);
            nodeContainer.setTranslate(gridXOrigin + hGridSize * gridColumn,
                gridYOrigin + vGridSize * gridRow);
            nodeContainer.render(scrolling ? cellContainer.getScrollingPane() : cellContainer, nodeLayout);
            if (highlightedItems && !highlightedMap[node[NBoxConstants.ID]]) {
              nodeContainer.setAlpha(alphaFade);
            }

            //keyboard navigation
            var prevNodeData = n > 0 ? nodes[n - 1] : null;
            if (prevNodeData) {
              var prevNode = DvtNBoxUtils.getDisplayable(nbox, prevNodeData);
              nodeContainer.previousNavigable = prevNode;
              prevNode.nextNavigable = nodeContainer;
            }
          }
        }
      }
    }
  }
  // Render overflow indicators and set content size for scrolling.
  var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
  var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
  var bodyCountLabels = [];
  for (var r = 0; r < rowCount; r++) {
    for (var c = 0; c < columnCount; c++) {
      var ci = r * columnCount + c;
      if (!DvtNBoxDataUtils.isCellMinimized(nbox, ci)) {
        var cellData = DvtNBoxDataUtils.getCell(nbox, ci);
        var cell = DvtNBoxUtils.getDisplayable(nbox, cellData);
        var cellLayout = nodeLayout['cellLayouts'][ci];
        if (cellLayout['overflow']) {
          var cellRows = cellLayout['cellRows'];
          var cellColumns = cellLayout['cellColumns'];
          var skipOverflow = cellRows == 0 || cellColumns == 0 || (cellRows == 1 && cellColumns == 1 && cellLayout['overflow']);
          if (!skipOverflow) {
            var overflowContainer = DvtNBoxNodeOverflow.newInstance(nbox, cell);
            //keyboard navigation
            var prevNode = DvtNBoxDataUtils.getLastNavigableNode(nbox, cell.getChildContainer());
            if (prevNode && prevNode.nboxType === 'node') {
              overflowContainer.previousNavigable = prevNode;
              prevNode.nextNavigable = overflowContainer;
            }
            DvtNBoxUtils.setDisplayable(nbox, overflowContainer, overflowContainer);
            DvtNBoxUtils.setDisplayable(nbox, cellData, overflowContainer, 'overflow');

            var gridXOrigin = cellData['__childArea'].x + (cellData['__childArea'].w - cellLayout['cellColumns'] * hGridSize + gridGap) / 2;
            var gridYOrigin = cellData['__childArea'].y;
            var gridColumn = cellLayout['cellColumns'] - 1;
            if (rtl) {
              gridColumn = 0;
            }
            var gridRow = cellLayout['cellRows'] - 1;
            overflowContainer.setTranslate(gridXOrigin + hGridSize * gridColumn,
                gridYOrigin + vGridSize * gridRow);
            overflowContainer.render(cell.getChildContainer(), hGridSize - gridGap, vGridSize - gridGap);
          }
          else {
            bodyCountLabels.push(ci);
          }
        }
      }
      if (DvtNBoxDataUtils.isCellMaximized(nbox, ci)) {
        var cellContainer = DvtNBoxUtils.getDisplayable(nbox, DvtNBoxDataUtils.getCell(nbox, ci)).getChildContainer();
        cellContainer.prepareContentPane();
      }
    }
  }
  if (bodyCountLabels.length > 0) {
    DvtNBoxCellRenderer.renderBodyCountLabels(nbox, bodyCountLabels);
  }
};


/**
 * Renders category nodes
 * @param {NBox} nbox The nbox being rendered.
 * @param {dvt.Container} container The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxRenderer._renderCategoryNodes = function(nbox, container, availSpace) {
  var groups = {};
  var nodeCount = DvtNBoxDataUtils.getNodeCount(nbox);
  var groupBehavior = DvtNBoxDataUtils.getGroupBehavior(nbox);

  var rtl = Agent.isRightToLeft(nbox.getCtx());

  var highlightedItems = DvtNBoxDataUtils.getHighlightedItems(nbox);
  var highlightedMap = {};
  if (highlightedItems) {
    for (var i = 0; i < highlightedItems.length; i++) {
      highlightedMap[highlightedItems[i][NBoxConstants.ID]] = true;
    }
  }
  for (var n = 0; n < nodeCount; n++) {
    var node = DvtNBoxDataUtils.getNode(nbox, n);
    if (!DvtNBoxDataUtils.isNodeHidden(nbox, node)) {
      var groupContainer = groups;
      if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
        var groupId = DvtNBoxDataUtils.getCellIndex(nbox, node) + '';
        groupContainer = groups[groupId];
        if (!groupContainer) {
          groupContainer = {};
          groups[groupId] = groupContainer;
        }
      }
      var groupId = DvtNBoxDataUtils.getNodeGroupId(node);
      var group = groupContainer[groupId];
      if (!group) {
        group = {};
        group[NBoxConstants.ID] = groupId;
        if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
          group[NBoxConstants.CELL] = DvtNBoxDataUtils.getCellIndex(nbox, node);
        }
        group['nodeIndices'] = [];
        group['highlightedCount'] = 0;
        groupContainer[groupId] = group;
      }
      group['nodeIndices'].push(n);
      if (highlightedMap[DvtNBoxDataUtils.getNode(nbox, n)[NBoxConstants.ID]]) {
        group['highlightedCount']++;
      }
    }
  }
  // Process other threshold
  var otherGroups;
  if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
    otherGroups = {};
    for (var cellId in groups) {
      otherGroups[cellId] = DvtNBoxRenderer._processOtherThreshold(nbox, groups[cellId]);
    }
  }
  else {
    otherGroups = DvtNBoxRenderer._processOtherThreshold(nbox, groups);
  }
  var groups = otherGroups;
  nbox.getOptions()['__groups'] = groups;
  if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_ACROSS_CELLS) {
    // Sort groups by size
    var sortedGroups = [];
    for (var group in groups) {
      sortedGroups.push(group);
    }
    sortedGroups.sort(function(a,b) {return DvtNBoxDataUtils.compareCategoryNodeSize(groups[a], groups[b])});
    var scale = Math.sqrt(.15 * (availSpace.w * availSpace.h) / nodeCount);
    for (var i = 0; i < sortedGroups.length; i++) {
      var group = sortedGroups[i];
      var xPos = 0;
      var yPos = 0;
      var nodeCount = groups[group]['nodeIndices'].length;
      for (var j = 0; j < nodeCount; j++) {
        var node = DvtNBoxDataUtils.getNode(nbox, groups[group]['nodeIndices'][j]);
        xPos += DvtNBoxDataUtils.getXPercentage(nbox, node);
        yPos += DvtNBoxDataUtils.getYPercentage(nbox, node);
      }
      xPos /= nodeCount;
      yPos /= nodeCount;

      var nodeContainer = DvtNBoxCategoryNode.newInstance(nbox, groups[group]);
      nodeContainer.setTranslate(availSpace.x + (rtl ? (1 - xPos) : xPos) * availSpace.w, availSpace.y + (1 - yPos) * availSpace.h);
      nodeContainer.render(container, scale, 0);
      nodeContainer.setMaxAlpha(.8);
    }
  }
  else if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
    var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
    var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
    var cellCount = rowCount * columnCount;
    var layouts = [];
    for (var i = 0; i < cellCount; i++) {
      if (groups[i] && !DvtNBoxDataUtils.isCellMinimized(nbox, i)) {
        var cell = DvtNBoxDataUtils.getCell(nbox, i);
        layouts[i] = DvtNBoxRenderer._forceLayoutGroups(groups[i], cell['__childArea'].w, cell['__childArea'].h);
      }
    }
    var scale = 40; // Maximum amount to scale by
    for (var i = 0; i < cellCount; i++) {
      if (groups[i] && !DvtNBoxDataUtils.isCellMinimized(nbox, i)) {
        scale = Math.min(scale, layouts[i]['scale']);
      }
    }
    for (var i = 0; i < cellCount; i++) {
      if (groups[i] && !DvtNBoxDataUtils.isCellMinimized(nbox, i)) {
        var positions = layouts[i]['positions'];
        var center = layouts[i]['center'];
        var cell = DvtNBoxDataUtils.getCell(nbox, i);
        var childContainer = DvtNBoxUtils.getDisplayable(nbox, cell).getChildContainer();
        var scrolling = childContainer instanceof SimpleScrollableContainer;
        for (var group in positions) {
          var nodeContainer = DvtNBoxCategoryNode.newInstance(nbox, groups[i][group]);
          nodeContainer.setTranslate(cell['__childArea'].x + cell['__childArea'].w / 2 + scale * (positions[group].x - center.x),
                                     (scrolling ? 0 : cell['__childArea'].y) + cell['__childArea'].h / 2 + scale * (positions[group].y - center.y));
          nodeContainer.render(scrolling ? childContainer.getScrollingPane() : childContainer, scale, 3);
        }
      }
    }
  }
};

/**
 * Helper function that adjusts the input rectangle to the closest pixel.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxRenderer._adjustAvailSpace = function(availSpace) {
  // : Adjust the bounds to the closest pixel to prevent antialiasing issues.
  availSpace.x = Math.round(availSpace.x);
  availSpace.y = Math.round(availSpace.y);
  availSpace.w = Math.round(availSpace.w);
  availSpace.h = Math.round(availSpace.h);
};

/**
 * Renders the initial selection state
 *
 * @param {NBox} nbox the nbox component
 */
DvtNBoxRenderer._renderInitialSelection = function(nbox) {
  if (nbox.isSelectionSupported()) {
    var selectedMap = {};
    var selectedIds = [];
    var selectedItems = DvtNBoxDataUtils.getSelectedItems(nbox);
    if (selectedItems) {
      for (var i = 0; i < selectedItems.length; i++) {
        selectedMap[selectedItems[i]] = true;
      }
      var objects = nbox.getObjects();
      // Process category nodes
      if (DvtNBoxDataUtils.getGrouping(nbox)) {
        for (var i = 0; i < objects.length; i++) {
          if (objects[i].nboxType === 'categoryNode') {
            var data = objects[i].getData();
            var nodeIndices = data['nodeIndices'];
            var selected = true;
            for (var j = 0; j < nodeIndices.length; j++) {
              var node = DvtNBoxDataUtils.getNode(nbox, nodeIndices[j]);
              if (!selectedMap[node[NBoxConstants.ID]]) {
                selected = false;
                break;
              }
            }
            if (selected) {
              // : unless the drawer is open, we don't want category node children marked as selected
              var drawer = DvtNBoxDataUtils.getDrawer(nbox);
              if (!drawer || drawer[NBoxConstants.ID] !== objects[i].getId()) {
                for (j = 0; j < nodeIndices.length; j++) {
                  node = DvtNBoxDataUtils.getNode(nbox, nodeIndices[j]);
                  selectedMap[node[NBoxConstants.ID]] = false;
                }
                selectedIds.push(objects[i].getId());
              }
            }
          }
        }
      }
      for (var id in selectedMap) {
        if (selectedMap[id]) {
          selectedIds.push(id);
        }
      }
    }
    nbox.getSelectionHandler().processInitialSelections(selectedIds, objects);
  }
};


/**
 * Performs layout of group nodes within a cell
 *
 * @param {array} groups A map of groupId to an array of nodeIndices (only used for size)
 * @param {number} width The width of the cell childArea (used to determine aspect ratio)
 * @param {number} height The height of the cell childArea (used to determine aspect ratio)
 *
 * @return {object} An object containing two properties: 'positions' a map from group id to position and 'scale' which
 * indicates the maximum that these nodes can be scaled by while still fitting in the cell
 */
DvtNBoxRenderer._forceLayoutGroups = function(groups, width, height) {
  var sortedGroups = [];
  for (var group in groups) {
    sortedGroups.push(group);
  }
  sortedGroups.sort(function(a,b) {return DvtNBoxDataUtils.compareCategoryNodeSize(groups[a], groups[b])});
  var positions = {};
  // Initial Positions
  var thetaStep = 2 * Math.PI / sortedGroups.length;
  for (var i = 0; i < sortedGroups.length; i++) {
    var x = i * Math.cos(thetaStep * i);
    var y = i * Math.sin(thetaStep * i);
    positions[sortedGroups[i]] = DvtVectorUtils.create(x, y);
  }
  // Force iterations
  var alpha = 1;
  var alphaDecay = .98;
  var alphaLimit = .005;
  // Apply gravity inversely proportional to
  var xGravity = -.25 * height / Math.max(width, height);
  var yGravity = -.25 * width / Math.max(width, height);
  while (alpha > alphaLimit) {
    var displacement = {};
    for (var i = 0; i < sortedGroups.length; i++) {
      var iGroup = sortedGroups[i];
      var iPos = positions[iGroup];
      var iSize = groups[iGroup]['nodeIndices'].length;
      // Gravity
      displacement[iGroup] = DvtVectorUtils.create(alpha * xGravity * iPos.x, alpha * yGravity * iPos.y);
      for (var j = 0; j < sortedGroups.length; j++) {
        if (i != j) {
          // Repulsion
          var jGroup = sortedGroups[j];
          var jPos = positions[jGroup];
          var jSize = groups[jGroup]['nodeIndices'].length;
          var difference = DvtVectorUtils.subtract(iPos, jPos);
          var distance = DvtVectorUtils.getMagnitude(difference);
          var angle = Math.atan2(difference.y, difference.x);
          // every PI/2 interval is the same, shift so that 0 < angle < PI/2
          while (angle < 0) {
            angle += Math.PI / 2;
          }
          while (angle >= Math.PI / 2) {
            angle -= Math.PI / 2;
          }
          var minimumDistance; // to avoid collision based upon the current angle
          if (angle < Math.PI / 4) {
            minimumDistance = .5 * (Math.sqrt(iSize) + Math.sqrt(jSize)) / Math.cos(angle);
          }
          else {
            minimumDistance = .5 * (Math.sqrt(iSize) + Math.sqrt(jSize)) / Math.sin(angle);
          }
          if (distance < minimumDistance) {
            // Shift the current node backwards (bigger nodes move proportionally less than smaller nodes)
            var repulsion = (jSize / (iSize + jSize)) * ((minimumDistance - distance) / distance);
            displacement[iGroup] = DvtVectorUtils.add(displacement[iGroup], DvtVectorUtils.scale(difference, (1 - alpha) * repulsion));
          }
        }
      }
    }
    // Apply displacement
    for (var i = 0; i < sortedGroups.length; i++) {
      var iGroup = sortedGroups[i];
      positions[iGroup] = DvtVectorUtils.add(positions[iGroup], displacement[iGroup]);
    }
    alpha *= alphaDecay;
  }
  var left = Number.MAX_VALUE;
  var right = -Number.MAX_VALUE;
  var top = Number.MAX_VALUE;
  var bottom = -Number.MAX_VALUE;
  for (var i = 0; i < sortedGroups.length; i++) {
    var group = sortedGroups[i];
    var side = Math.sqrt(groups[group]['nodeIndices'].length);
    var position = positions[group];
    left = Math.min(left, position.x - side / 2);
    right = Math.max(right, position.x + side / 2);
    top = Math.min(top, position.y - side / 2);
    bottom = Math.max(bottom, position.y + side / 2);
  }
  var xScale = width / (right - left);
  var yScale = height / (bottom - top);
  var scale = Math.min(xScale, yScale);
  var cx = (left + right) / 2;
  var cy = (top + bottom) / 2;
  return {'scale': scale, 'center': new Point(cx, cy), 'positions': positions};
};


/**
 * Aggregates any groups that fall below the other threshold
 *
 * @param {NBox} nbox the nbox component
 * @param {object} groups a map of groups (may either represent groups across the entire nbox or within a single cell)
 * @return {object} a map of groups with any groups that fall below the other threshold aggregated into a single 'other' group
 */
DvtNBoxRenderer._processOtherThreshold = function(nbox, groups) {
  var nodeCount = DvtNBoxDataUtils.getNodeCount(nbox);
  var otherCount = DvtNBoxDataUtils.getOtherThreshold(nbox) * nodeCount;
  if (otherCount <= 1) {
    return groups;
  }
  var processedGroups = {};
  var otherGroup = {};
  var groupBehavior = DvtNBoxDataUtils.getGroupBehavior(nbox);
  if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
    for (var groupId in groups) {
      var group = groups[groupId];
      otherGroup['cell'] = group['cell'];
      break;
    }
  }
  otherGroup['id'] = 'other';
  otherGroup['nodeIndices'] = [];
  otherGroup['otherNode'] = true;
  for (var groupId in groups) {
    var group = groups[groupId];
    if (group['nodeIndices'].length < otherCount) {
      for (var i = 0; i < group['nodeIndices'].length; i++) {
        otherGroup['nodeIndices'].push(group['nodeIndices'][i]);
      }
    }
    else {
      processedGroups[groupId] = group;
    }
  }
  if (otherGroup['nodeIndices'].length > 0) {
    processedGroups['other'] = otherGroup;
  }
  return processedGroups;
};


/**
 * Renders the open group, if any
 * @param {NBox} nbox The nbox being rendered.
 * @param {dvt.Container} container The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 */
DvtNBoxRenderer._renderDrawer = function(nbox, container, availSpace) {
  var drawerData = DvtNBoxDataUtils.getDrawer(nbox);
  if (drawerData) {
    var categoryNode = DvtNBoxDataUtils.getCategoryNode(nbox, drawerData['id']);
    if (categoryNode) {
      var drawer = DvtNBoxDrawer.newInstance(nbox, drawerData);
      drawer.render(container, availSpace);
    }
    else {
      // We have stale drawer data, null it out
      var options = nbox.getOptions();
      options[NBoxConstants.DRAWER] = null;
      DvtNBoxDataUtils.fireOptionChangeEvent(nbox, NBoxConstants.DRAWER, null);
    }
  }
};

/**
 * Animates an update between NBox states
 *
 * @param {DvtNBoxDataAnimationHandler} animationHandler the animation handler
 * @param {object} oldNBox an object representing the old NBox state
 * @param {NBox} newNBox the new NBox state
 */
DvtNBoxRenderer.animateUpdate = function(animationHandler, oldNBox, newNBox) {
  DvtNBoxRenderer._animateCells(animationHandler, oldNBox, newNBox);
  DvtNBoxRenderer._animateNodes(animationHandler, oldNBox, newNBox);
  var oldDrawer = DvtNBoxDataUtils.getDrawer(oldNBox);
  oldDrawer = oldDrawer ? oldDrawer['id'] : null;
  var newDrawer = DvtNBoxDataUtils.getDrawer(newNBox);
  newDrawer = newDrawer ? newDrawer['id'] : null;
  if (oldDrawer != newDrawer) {
    DvtNBoxRenderer._animateDrawer(animationHandler, oldNBox, newNBox);
  }
  //DvtNBoxRenderer._animateTitles(animationHandler, oldNBox, newNBox);
};


/**
 * Animates the cells on NBox update
 *
 * @param {DvtNBoxDataAnimationHandler} animationHandler the animation handler
 * @param {object} oldNBox an object representing the old NBox state
 * @param {NBox} newNBox the new NBox state
 */
DvtNBoxRenderer._animateCells = function(animationHandler, oldNBox, newNBox) {
  var oldRowCount = DvtNBoxDataUtils.getRowCount(oldNBox);
  var newRowCount = DvtNBoxDataUtils.getRowCount(newNBox);
  var oldColumnCount = DvtNBoxDataUtils.getColumnCount(oldNBox);
  var newColumnCount = DvtNBoxDataUtils.getColumnCount(newNBox);
  var oldCellCount = oldRowCount * oldColumnCount;
  var newCellCount = newRowCount * newColumnCount;
  var oldCells = [];
  var newCells = [];
  for (var i = 0; i < oldCellCount; i++) {
    oldCells.push(DvtNBoxUtils.getDisplayable(oldNBox, DvtNBoxDataUtils.getCell(oldNBox, i)));
  }
  for (var i = 0; i < newCellCount; i++) {
    newCells.push(DvtNBoxUtils.getDisplayable(newNBox, DvtNBoxDataUtils.getCell(newNBox, i)));
  }
  if (oldRowCount == newRowCount && oldColumnCount == newColumnCount) {
    var identical = true;
    for (var i = 0; i < newRowCount; i++) {
      var oldRowValue = DvtNBoxDataUtils.getRow(oldNBox, i)[NBoxConstants.ID];
      var newRowValue = DvtNBoxDataUtils.getRow(newNBox, i)[NBoxConstants.ID];
      if (oldRowValue != newRowValue) {
        identical = false;
        break;
      }
    }
    if (identical) {
      for (var i = 0; i < newColumnCount; i++) {
        var oldColumnValue = DvtNBoxDataUtils.getColumn(oldNBox, i)[NBoxConstants.ID];
        var newColumnValue = DvtNBoxDataUtils.getColumn(newNBox, i)[NBoxConstants.ID];
        if (oldColumnValue != newColumnValue) {
          identical = false;
          break;
        }
      }
    }
    if (identical) {
      // Same set of cells, let them animate themselves
      animationHandler.constructAnimation(oldCells, newCells);
      return;
    }
  }
  // Different set of cells, fade out the old, fade in the new
  animationHandler.constructAnimation(oldCells, []);
  animationHandler.constructAnimation([], newCells);
};


/**
 * Animates the nodes on NBox update
 *
 * @param {DvtNBoxDataAnimationHandler} animationHandler the animation handler
 * @param {object} oldNBox an object representing the old NBox state
 * @param {NBox} newNBox the new NBox state
 */
DvtNBoxRenderer._animateNodes = function(animationHandler, oldNBox, newNBox) {
  var oldNodeCount = DvtNBoxDataUtils.getNodeCount(oldNBox);
  var newNodeCount = DvtNBoxDataUtils.getNodeCount(newNBox);
  var oldNodes = [];
  var newNodes = [];
  for (var i = 0; i < oldNodeCount; i++) {
    oldNodes.push(DvtNBoxUtils.getDisplayable(oldNBox, DvtNBoxDataUtils.getNode(oldNBox, i)));
  }
  for (var i = 0; i < newNodeCount; i++) {
    newNodes.push(DvtNBoxUtils.getDisplayable(newNBox, DvtNBoxDataUtils.getNode(newNBox, i)));
  }
  animationHandler.constructAnimation(oldNodes, newNodes);

  var oldDrawer = DvtNBoxDataUtils.getDrawer(oldNBox);
  var newDrawer = DvtNBoxDataUtils.getDrawer(newNBox);
  // If drawer open, don't animate any category nodes since they will be covered by it
  if (!newDrawer) {
    var oldGroupNodes = DvtNBoxRenderer._getSortedGroups(oldNBox);
    var newGroupNodes = DvtNBoxRenderer._getSortedGroups(newNBox);

    // Drawer is closing
    if (oldDrawer) {
      // Cell is de-maximizing
      if (DvtNBoxDataUtils.getMaximizedCellIndex(oldNBox) != DvtNBoxDataUtils.getMaximizedCellIndex(newNBox)) {
        // Don't animate nodes in the maximized cell since those nodes were covered by drawer
        // Other nodes were not covered and should run animateInsert
        oldGroupNodes = oldGroupNodes.filter(function(node) {
          return node.getData()['cell'] != DvtNBoxDataUtils.getMaximizedCellIndex(oldNBox);
        });
        newGroupNodes = newGroupNodes.filter(function(node) {
          return node.getData()['cell'] != DvtNBoxDataUtils.getMaximizedCellIndex(oldNBox);
        });
      }
      // Don't animate any nodes since they were all covered by drawer
      else {
        oldGroupNodes = null;
        newGroupNodes = null;
      }
    }
    animationHandler.constructAnimation(oldGroupNodes, newGroupNodes);
  }

};


/**
 * Gets the list of DvtNBoxCategoryNodes (sorted by id)
 *
 * @param {NBox} nbox the nbox component
 * @return {array} the list of DvtNBoxCategoryNodes, sorted by id
 */
DvtNBoxRenderer._getSortedGroups = function(nbox) {
  var groupBehavior = DvtNBoxDataUtils.getGroupBehavior(nbox);
  var groupInfo = nbox.getOptions()['__groups'];
  var groupNodes = [];
  if (groupInfo) {
    if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
      var rowCount = DvtNBoxDataUtils.getRowCount(nbox);
      var columnCount = DvtNBoxDataUtils.getColumnCount(nbox);
      var cellCount = rowCount * columnCount;
      for (var i = 0; i < cellCount; i++) {
        var cellGroups = groupInfo[i + ''];
        var cellGroupNodes = DvtNBoxRenderer._getSortedGroupsFromContainer(nbox, cellGroups);
        for (var j = 0; j < cellGroupNodes.length; j++) {
          groupNodes.push(cellGroupNodes[j]);
        }
      }
    }
    else {
      groupNodes = DvtNBoxRenderer._getSortedGroupsFromContainer(nbox, groupInfo);
    }
  }
  return groupNodes;
};


/**
 * Gets the list of DvtNBoxCategoryNodes (sorted by id) from a map of category node data
 *
 * @param {NBox} nbox the nbox component
 * @param {object} container a map of category node data
 * @return {array} the list of DvtNBoxCategoryNodes, sorted by id
 */
DvtNBoxRenderer._getSortedGroupsFromContainer = function(nbox, container) {
  var groupNodes = [];
  for (var id in container) {
    var displayable = DvtNBoxUtils.getDisplayable(nbox, container[id]);
    if (displayable) {
      groupNodes.push(displayable);
    }
  }
  groupNodes.sort(function(a,b) {var aId = a.getId(); var bId = b.getId(); return aId == bId ? 0 : (aId < bId ? -1 : 1)});
  return groupNodes;
};


/**
 * Animates the drawer on NBox update
 *
 * @param {DvtNBoxDataAnimationHandler} animationHandler the animation handler
 * @param {object} oldNBox an object representing the old NBox state
 * @param {NBox} newNBox the new NBox state
 */
DvtNBoxRenderer._animateDrawer = function(animationHandler, oldNBox, newNBox) {
  var oldDrawer = DvtNBoxDataUtils.getDrawer(oldNBox);
  oldDrawer = oldDrawer ? [DvtNBoxUtils.getDisplayable(oldNBox, oldDrawer)] : null;
  var newDrawer = DvtNBoxDataUtils.getDrawer(newNBox);
  newDrawer = newDrawer ? [DvtNBoxUtils.getDisplayable(newNBox, newDrawer)] : [];

  animationHandler.constructAnimation(oldDrawer, newDrawer);
};

/**
 * Ensures nodes are in correct DOM order following animations.  Saves order of nodes prior
 * to animation, then returns a function that corrects the order afterwards.
 *
 * @param {NBox} nbox the nbox component
 * @return {function} function called post-animation to reorder nodes
 */
DvtNBoxRenderer.getNodeOrderFunction = function(nbox) {
  var orders = [];
  var newDrawer = DvtNBoxDataUtils.getDrawer(nbox);
  if (newDrawer) {
    var drawerContainer = DvtNBoxUtils.getDisplayable(nbox, newDrawer).getChildContainer().getScrollingPane();
    for (var i = 0; i < drawerContainer.getNumChildren(); i++)
      orders.push(drawerContainer.getChildAt(i));
  }
  else {
    var cellCount = DvtNBoxDataUtils.getRowCount(nbox) * DvtNBoxDataUtils.getColumnCount(nbox);
    for (var c = 0; c < cellCount; c++) {
      var cellOrder = [];
      var cell = DvtNBoxDataUtils.getCell(nbox, c);
      var cellContainer = DvtNBoxUtils.getDisplayable(nbox, cell).getChildContainer();
      if (cellContainer instanceof SimpleScrollableContainer)
        cellContainer = cellContainer.getScrollingPane();
      for (var n = 0; n < cellContainer.getNumChildren(); n++)
        cellOrder.push(cellContainer.getChildAt(n));
      orders.push(cellOrder);
    }
  }
  return function() {
    if (!orders.length)
      return;
    else if (orders[0] && isNaN(orders[0].length)) {
      var drawerData = DvtNBoxDataUtils.getDrawer(nbox);
      if (drawerData) {
        var drawerContainer = DvtNBoxUtils.getDisplayable(nbox, drawerData).getChildContainer().getScrollingPane();
        for (var n = 0; n < orders.length; n++) {
          drawerContainer.addChild(orders[n]);
        }
      }
    }
    else {
      for (var c = 0; c < orders.length; c++) {
        var cellOrder = orders[c];
        var cellData = DvtNBoxDataUtils.getCell(nbox, c);
        if (cellOrder.length && cellData) {
          var cellContainer = DvtNBoxUtils.getDisplayable(nbox, cellData).getChildContainer();
          if (cellContainer instanceof SimpleScrollableContainer)
            cellContainer = cellContainer.getScrollingPane();
          for (var n = 0; n < cellOrder.length; n++) {
            cellContainer.addChild(cellOrder[n]);
          }
        }
      }
    }
  };
};

/**
 * Renders the empty text for the component.
 * @param {NBox} nbox the nbox component
 * @param {dvt.Container} container The container to render into.
 * @param {dvt.Rectangle} availSpace The available space.
 * @private
 */
DvtNBoxRenderer._renderEmptyText = function(nbox, container, availSpace) {
  // Get the empty text string
  var options = nbox.getOptions();
  var emptyTextStr = options.translations.labelInvalidData;

  nbox.renderEmptyText(container, emptyTextStr,
      new Rectangle(availSpace.x, availSpace.y, availSpace.w, availSpace.h),
      nbox.getEventManager(), options['_statusMessageStyle']);
};

/**
 * NBox component.  This nbox should never be instantiated directly.  Use the
 * newInstance function instead.
 * @param {dvt.Context} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @class
 * @constructor
 * @extends {dvt.BaseComponent}
 */
const NBox = function(context, callback, callbackObj) {
  this.Init(context, callback, callbackObj);
};

Obj.createSubclass(NBox, BaseComponent);

NBox.prototype.nboxType = 'nbox';

/**
 * Returns a new instance of NBox.
 * @param {dvt.Context} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {NBox}
 */
NBox.newInstance = function(context, callback, callbackObj) {
  return new NBox(context, callback, callbackObj);
};


/**
 * Returns a copy of the default options for the specified skin.
 * @param {string} skin The skin whose defaults are being returned.
 * @return {object} The object containing defaults for this component.
 */
NBox.getDefaults = function(skin) {
  return (new DvtNBoxDefaults()).getDefaults(skin);
};


/**
 * @override
 */
NBox.prototype.Init = function(context, callback, callbackObj) {
  NBox.superclass.Init.call(this, context, callback, callbackObj);

  // Create the defaults object
  this.Defaults = new DvtNBoxDefaults(context);

  // Create the event handler and add event listeners
  this.EventManager = new DvtNBoxEventManager(this);
  this.EventManager.addListeners(this);

  // Drag and drop support - not used in JET
  // this._dragSource = new dvt.DragSource(context);
  // this.EventManager.setDragSource(this._dragSource);

  // Set up keyboard handler on non-touch devices
  if (!Agent.isTouchDevice())
    this.EventManager.setKeyboardHandler(this.CreateKeyboardHandler(this.EventManager));

  // Make sure the object has an id for clipRect naming
  this.setId('nbox' + 1000 + Math.floor(Math.random() * 1000000000));//@RandomNumberOK

  /**
   * The array of logical objects for this nbox.
   * @private
   */
  this._peers = [];

  /**
   * Flag for disabling all animation
   * @private
   */
  this._animationAllowed = true;
};


/**
 * @override
 */
NBox.prototype.SetOptions = function(options) {
  if (!options)
    options = this.getSanitizedOptions();

  if (options) {
    // Combine the user options with the defaults and store
    this.Options = this.Defaults.calcOptions(options);

    // Process the data to add bulletproofing
    DvtNBoxDataUtils.processDataObject(this);

    if (Agent.isEnvironmentTest()) {
      this.Options[NBoxConstants.ANIMATION_ON_DISPLAY] = 'none';
      this.Options[NBoxConstants.ANIMATION_ON_DATA_CHANGE] = 'none';
    }
  }
  else if (!this.Options) // No object has ever been provided, copy the defaults
    this.Options = this.GetDefaults();
  this._displayables = [];
  this.Options['__displayableCache'] = new BaseComponentCache();

  // Initialize the selection handler
  var selectionMode = this.Options[NBoxConstants.SELECTION_MODE];
  if (selectionMode == 'single')
    this._selectionHandler = new SelectionHandler(this.getCtx(), SelectionHandler.TYPE_SINGLE);
  else if (selectionMode == 'multiple')
    this._selectionHandler = new SelectionHandler(this.getCtx(), SelectionHandler.TYPE_MULTIPLE);
  else
    this._selectionHandler = null;

  // Pass to event handler
  this.EventManager.setSelectionHandler(this._selectionHandler);
};


/**
 * @override
 */
NBox.prototype.render = function(options, width, height) {
  //  If datachange animation, save nbox info before rendering for later use.
  var animationOnDataChange = DvtNBoxStyleUtils.getAnimationOnDataChange(this);
  var oldNBox = null;

  if (this.Options && animationOnDataChange !== 'none') {
    oldNBox = {'options': this.Options,
                'getOptions': function() {return this['options'];},
                'displayables': this._displayables,
                'getDisplayables': function() {return this['displayables'];},
                'id': this.getId(),
                'getId': function() {return this['id']}};

    // Also expose getOptions directly, since it will be called by internal code that is renamed.
    oldNBox.getOptions = oldNBox['getOptions'];
    oldNBox.getDisplayables = oldNBox['getDisplayables'];
    oldNBox.getId = oldNBox['getId'];
  }

  // Cleanup objects from the previous render
  this.__cleanUp();

  // Update if a new options object has been provided or initialize with defaults if needed.
  this.SetOptions(options);

  // Update the width and height if provided
  if (!isNaN(width) && !isNaN(height)) {
    this.Width = width;
    this.Height = height;
  }

  // Create a new container and render the component into it
  var container = new Container(this.getCtx());
  this.addChild(container);
  DvtNBoxRenderer.render(this, container, new Rectangle(0, 0, this.Width, this.Height));

  // if no keyboard focus, set to drawer if present
  if (options && DvtNBoxDataUtils.getDrawer(this) && DvtNBoxDataUtils.getGrouping(this)) {
    var drawer = DvtNBoxUtils.getDisplayable(this, DvtNBoxDataUtils.getDrawer(this));
    this.EventManager.setFocus(drawer);
    this.EventManager.setFocused(false);
  }

  // Update keyboard focus
  this._updateKeyboardFocusEffect();

  // Animation Support
  // Stop any animation in progress
  this.StopAnimation();

  // Construct the new animation playable
  var animationOnDisplay = DvtNBoxStyleUtils.getAnimationOnDisplay(this);
  var animationDuration = DvtNBoxStyleUtils.getAnimationDuration(this);
  var bounds = new Rectangle(0, 0, this.Width, this.Height);
  var bBlackBoxUpdate = false; // true if this is a black box update animation

  if (!this._container) {
    if (animationOnDisplay !== 'none') {
      // AnimationOnDisplay
      this.Animation = BlackBoxAnimationHandler.getInAnimation(this.getCtx(), animationOnDisplay, container,
          bounds, animationDuration);
    }
  }
  else if (animationOnDataChange != 'none' && options) {
    // AnimationOnDataChange
    this.Animation = BlackBoxAnimationHandler.getCombinedAnimation(this.getCtx(), animationOnDataChange, this._container,
        container, bounds, animationDuration);
    if (this.Animation) {           // Black Box Animation
      bBlackBoxUpdate = true;
    }
    else {
      this._deleteContainer = new Container(this.getCtx(), 'DeleteContainer');
      this.addChild(this._deleteContainer);
      var ah = new DvtNBoxDataAnimationHandler(this.getCtx(), this._deleteContainer, oldNBox, this);
      var nodeOrderFunction = DvtNBoxRenderer.getNodeOrderFunction(this);
      ah.constructAnimation([oldNBox], [this]);
      this.Animation = ah.getAnimation();
      Playable.appendOnEnd(this.Animation, nodeOrderFunction, this);
    }
  }

  // If an animation was created, play it
  if (this.Animation) {
    this.setMouseEnabled(false);
    Playable.appendOnEnd(this.Animation, this._getOnAnimationEndFunction(options), this);
    this.Animation.play();
  }
  else {
    this._getOnAnimationEndFunction(options).call(this);
  }

  // Clean up the old container.  If doing black box animation, store a pointer and clean
  // up after animation is complete.  Otherwise, remove immediately.
  if (bBlackBoxUpdate) {
    this._oldContainer = this._container;
  }
  else if (this._container) {
    this.removeChild(this._container);  // Not black box animation, so clean up the old contents
    this._container.destroy();
  }

  // Update the pointer to the new container
  this._container = container;

  this.UpdateAriaAttributes();
};


/**
 * Performs cleanup of the previously rendered content.  Note that this doesn't cleanup anything needed for animation.
 * @protected
 */
NBox.prototype.__cleanUp = function() {
  // Tooltip cleanup
  this.EventManager.hideTooltip();

  // Clear the list of registered peers
  this._peers.length = 0;
};


/**
 * Returns hook for post-animation cleanup.
 * @param {object} options The raw options to pass to potential render call
 * @return {function} hook for post-animation cleanup
 * @private
 */
NBox.prototype._getOnAnimationEndFunction = function(options) {
  return function() {
    // Clean up the old container used by black box updates
    if (this._oldContainer) {
      this.removeChild(this._oldContainer);
      this._oldContainer.destroy();
      this._oldContainer = null;
    }

    if (this._deleteContainer) {
      this.removeChild(this._deleteContainer);
      this._deleteContainer.destroy();
    }
    this._deleteContainer = null;

    this.setMouseEnabled(true);
    if (!this.AnimationStopped) {
      if (this.Animation && (Agent.browser === 'ie' || Agent.browser === 'edge') && Agent.version >= 12) {
        // Edge can return incorrect values for getBBox on text elements after animation
        // Hacking for now by forcing a full non-animated render
        this.Animation = null;
        this.setAnimationAllowed(false);
        this.render(options);
        this.setAnimationAllowed(true);
      }
      this.RenderComplete();
    }

    // Reset animation flags
    this.Animation = null;
    this.AnimationStopped = false;
  };
};


/**
 * @override
 */
NBox.prototype.CreateKeyboardHandler = function(manager) {
  return new DvtNBoxKeyboardHandler(manager, this);
};

/**
 * Gets the child container
 *
 * @return {dvt.Container} child container
 */
NBox.prototype.getChildContainer = function() {
  return this._container;
};

/**
 * Gets the delete container used for animation
 *
 * @return {dvt.Container} the delete container
 */
NBox.prototype.getDeleteContainer = function() {
  return this._deleteContainer;
};


/**
 * Return the array of registered displayables
 *
 * @return {array} the registered displayables
 */
NBox.prototype.getDisplayables = function() {
  return this._displayables;
};


/**
 * Updates keyboard focus effect
 * @private
 */
NBox.prototype._updateKeyboardFocusEffect = function() {
  var navigable = this.EventManager.getFocus();
  var isShowingKeyboardFocusEffect = false;
  if (navigable) {
    var newNavigable;
    isShowingKeyboardFocusEffect = navigable.isShowingKeyboardFocusEffect();

    if (navigable.getKeyboardFocusDisplayable) {
      newNavigable = navigable.getKeyboardFocusDisplayable();
    }
    if (newNavigable && isShowingKeyboardFocusEffect)
      newNavigable.showKeyboardFocusEffect();

    this.EventManager.setFocus(newNavigable);
  }
};

/**
 * Processes the specified event.
 * @param {object} event
 * @param {object} source The component that is the source of the event, if available.
 */
NBox.prototype.processEvent = function(event, source) {
  var type = event['type'];
  if (type == 'categoryHighlight') {
    event = this._processRolloverEvent(event);
  }
  else if (type == 'selection') {
    event = this._processSelectionEvent(event);
  }

  if (event) {
    this.dispatchEvent(event);
  }
};


/**
 * Processes rollover event
 * @param {object} event rollover event
 * @return {object} processed event
 * @private
 */
NBox.prototype._processRolloverEvent = function(event) {
  this._processHighlighting(event['categories']);
  return event;
};


/**
 * Processes selection event.
 * @param {object} event Selection event.
 * @return {object} Processed event.
 * @private
 */
NBox.prototype._processSelectionEvent = function(event) {
  var selection = event['selection'];
  var selectedItems = null;
  if (selection) {
    var selectedMap = {};
    for (var i = 0; i < selection.length; i++) {
      selectedMap[selection[i]] = true;
    }
    var objects = this.getObjects();
    // Process category nodes
    var drawer = null;
    if (DvtNBoxDataUtils.getGrouping(this)) {
      for (var i = 0; i < objects.length; i++) {
        if (objects[i].nboxType === 'categoryNode') {
          if (selectedMap[objects[i].getId()]) {
            // Replace with the individual ids
            selectedMap[objects[i].getId()] = false;
            var data = objects[i].getData();
            var nodeIndices = data['nodeIndices'];
            for (var j = 0; j < nodeIndices.length; j++) {
              var node = DvtNBoxDataUtils.getNode(this, nodeIndices[j]);
              selectedMap[node[NBoxConstants.ID]] = true;
            }
          }
        }
        else if (objects[i].nboxType === 'drawer')
          drawer = objects[i];
      }
    }
    var eventSelection = [];
    selectedItems = [];
    for (var id in selectedMap) {
      if (selectedMap[id]) {
        eventSelection.push(id);
        selectedItems.push(id);
      }
    }
    event = EventFactory.newSelectionEvent(eventSelection);
  }
  DvtNBoxDataUtils.setSelectedItems(this, selectedItems);
  if (drawer)
    drawer.UpdateAccessibilityAttributes();
  return event;
};


/**
 * Registers the object peer with the nbox.  The peer must be registered to participate
 * in interactivity.
 * @param {DvtNBoxObjPeer} peer
 */
NBox.prototype.registerObject = function(peer) {
  this._peers.push(peer);
};


/**
 * Returns the peers for all objects within the nbox.
 * @return {array}
 */
NBox.prototype.getObjects = function() {
  return this._peers;
};


/**
 * @return {number} nbox width
 */
NBox.prototype.getWidth = function() {
  return this.Width;
};


/**
 * @return {number} nbox height
 */
NBox.prototype.getHeight = function() {
  return this.Height;
};


/**
 * Returns the selection handler for the nbox.
 * @return {dvt.SelectionHandler} The selection handler for the nbox
 */
NBox.prototype.getSelectionHandler = function() {
  return this._selectionHandler;
};


/**
  *  Returns whether selecton is supported on the nbox.
  *  @return {boolean} True if selection is turned on for the nbox and false otherwise.
  */
NBox.prototype.isSelectionSupported = function() {
  return (this._selectionHandler ? true : false);
};


/**
 * Animates an update between NBox states
 *
 * @param {DvtNBoxDataAnimationHandler} animationHandler the animation handler
 * @param {object} oldNBox an object representing the old NBox state
 */
NBox.prototype.animateUpdate = function(animationHandler, oldNBox) {
  DvtNBoxRenderer.animateUpdate(animationHandler, oldNBox, this);
};


/**
 * Returns a copy of the options object with internal-only properties removed
 *
 * @return {object} the options object
 */
NBox.prototype.getSanitizedOptions = function() {
  return JsonUtils.clone(this.getOptions(),
      function(key) {
        return key.indexOf('__') != 0;
      }, this.Defaults.getNoCloneObject());
};


/**
 * Returns an object containing the panel drawer styles
 *
 * @return {object} an object containing the panel drawer styles
 */
NBox.prototype.getSubcomponentStyles = function() {
  // TODO: refactor the control panel naming
  // just return an empty map and take the panel drawer defaults
  return {};
};


/**
 * Returns the clientId of the drag source owner if dragging is supported.
 * @param {array} clientIds
 * @return {string}
 */
NBox.prototype.__isDragAvailable = function(clientIds) {
  // Drag and drop supported when selection is enabled, only 1 drag source
  if (this._selectionHandler)
    return clientIds[0];
  else
    return null;
};


/**
 * Returns the row keys for the current drag.
 * @param {DvtBaseTreeNode} node The node where the drag was initiated.
 * @return {array} The row keys for the current drag.
 */
NBox.prototype.__getDragTransferable = function(node) {
  // Select the node if not already selected
  if (!node.isSelected()) {
    this._selectionHandler.processClick(node, false);
    this.EventManager.fireSelectionEvent();
  }

  // Gather the rowKeys for the selected objects
  var rowKeys = [];
  var selectionMap = {};
  var selection = this._selectionHandler.getSelection();
  for (var i = 0; i < selection.length; i++) {
    var item = selection[i];
    if (item.nboxType === 'node') {
      var id = item.getData()[NBoxConstants.ID];
      rowKeys.push(id);
      selectionMap[id] = true;
    }
    else if (item.nboxType === 'categoryNode') {
      var nodeIndices = item.getData()['nodeIndices'];
      for (var j = 0; j < nodeIndices.length; j++) {
        var nodeId = DvtNBoxDataUtils.getNode(this, nodeIndices[j])[NBoxConstants.ID];
        rowKeys.push(nodeId);
        selectionMap[nodeId] = true;
      }
      selectionMap[item.getData()[NBoxConstants.ID]] = true;
    }
  }

  // grab hidden selections
  var selectedIds = this._selectionHandler.getSelectedIds();
  for (var i = 0; i < selectedIds.length; i++) {
    var id = selectedIds[i];
    if (!selectionMap[id]) {
      if (!isNaN(DvtNBoxDataUtils.getNodeIndex(this, id))) {
        rowKeys.push(id);
        selectionMap[id] = true;
      }
      else if (DvtNBoxDataUtils.getGrouping(this) && DvtNBoxDataUtils.getCategoryNode(this, id)) {
        var nodeIndices = DvtNBoxDataUtils.getCategoryNode(this, id)['nodeIndices'];
        for (var j = 0; j < nodeIndices.length; j++) {
          var nodeId = DvtNBoxDataUtils.getNode(this, nodeIndices[j])[NBoxConstants.ID];
          if (!selectionMap[nodeId]) {
            rowKeys.push(nodeId);
            selectionMap[nodeId] = true;
          }
        }
        selectionMap[id] = true;
      }
    }
  }

  return rowKeys;
};


/**
 * Returns the displayables to use for drag feedback for the current drag.
 * @return {array} The displayables for the current drag.
 */
NBox.prototype.__getDragFeedback = function() {
  // This is called after __getDragTransferable, so the selection has been updated already.
  // Gather the displayables for the selected objects
  var displayables = this._selectionHandler.getSelection().slice(0);
  return displayables;
};


/**
 * Returns the cell under the specified coordinates
 * @param {number} x the x coordinate
 * @param {number} y the y coordinate
 * @return {DvtNBoxCell} the cell
 */
NBox.prototype.__getCellUnderPoint = function(x, y) {
  var cellCount = DvtNBoxDataUtils.getRowCount(this) * DvtNBoxDataUtils.getColumnCount(this);
  for (var i = 0; i < cellCount; i++) {
    var cell = DvtNBoxUtils.getDisplayable(this, DvtNBoxDataUtils.getCell(this, i));
    if (cell.contains(x, y)) {
      return cell;
    }
  }
  return null;
};


/**
 * Displays drop site feedback for the specified cell.
 * @param {DvtNBoxCell} cell The cell for which to show drop feedback, or null to remove drop feedback.
 * @return {dvt.Displayable} The drop site feedback, if any.
 */
NBox.prototype.__showDropSiteFeedback = function(cell) {
  // Remove any existing drop site feedback
  if (this._dropSiteFeedback) {
    this._dropSiteFeedback.getParent().removeChild(this._dropSiteFeedback);
    this._dropSiteFeedback = null;
  }

  // Create feedback for the cell
  if (cell) {
    this._dropSiteFeedback = cell.renderDropSiteFeedback();
  }

  return this._dropSiteFeedback;
};


/**
 * @return {DvtNBoxAutomation} the automation object
 */
NBox.prototype.getAutomation = function() {
  if (!this.Automation)
    this.Automation = new DvtNBoxAutomation(this);
  return this.Automation;
};

/**
 * @override
 */
NBox.prototype.GetComponentDescription = function() {
  var translations = this.getOptions().translations;
  if (DvtNBoxDataUtils.hasValidData(this))
    return ResourceUtils.format(translations.componentName, [DvtNBoxDataUtils.getColumnCount(this) * DvtNBoxDataUtils.getRowCount(this)]);
  else
    return translations.labelInvalidData;
};

/**
 * @override
 */
NBox.prototype.highlight = function(categories) {
  // Update the options
  this.Options['highlightedCategories'] = JsonUtils.clone(categories);

  this._processHighlighting(categories);
};

/**
 * Process highlighting based on supplied categories array
 * @param {array} categories Categories to highlight by
 * @private
 */
NBox.prototype._processHighlighting = function(categories) {
  var displayables = this.getNodeDisplayables();
  // Manipulate the alphas
  var nbox = this;
  var hasCategory = function(disp) {
    if (disp.nboxType === 'node') {
      if (disp.getCategories()) {
        return nbox.getOptions()[NBoxConstants.HIGHLIGHT_MATCH] == 'all' ?
            ArrayUtils.hasAllItems(categories, disp.getCategories()) :
            ArrayUtils.hasAnyItem(categories, disp.getCategories());
      }
    }
    else if (disp.nboxType === 'categoryNode') {
      // Need to check the nodes that this category node represents
      // if *any* of them match the category, should return true
      var data = disp.getData();
      var categoryNodeCount = data['nodeIndices'].length;
      for (var i = 0; i < categoryNodeCount; i++) {
        var nodeData = DvtNBoxDataUtils.getNode(nbox, data['nodeIndices'][i]);
        if (nodeData[NBoxConstants.CATEGORIES]) {
          if (nbox.getOptions()[NBoxConstants.HIGHLIGHT_MATCH] == 'all' ?
              ArrayUtils.hasAllItems(categories, nodeData[NBoxConstants.CATEGORIES]) :
              ArrayUtils.hasAnyItem(categories, nodeData[NBoxConstants.CATEGORIES]))
            return true;
        }
      }
    }
    return false;
  };

  // Rerender labels/counts according to new highlighting
  var cellCount = DvtNBoxDataUtils.getRowCount(nbox) * DvtNBoxDataUtils.getColumnCount(nbox);
  // Reset highlighted map so we can recalculate cell counts properly
  nbox.getOptions()['__highlightedMap'] = null;
  for (i = 0; i < cellCount; i++) {
    var cellData = DvtNBoxDataUtils.getCell(nbox, i);
    var cell = DvtNBoxUtils.getDisplayable(nbox, cellData);
    DvtNBoxCellRenderer.renderHeader(nbox, cellData, cell, false);
  }

  // Adjust alphas and category node counts
  var highlightedItems = DvtNBoxDataUtils.getHighlightedItems(nbox);
  var highlightedMap = {};
  if (highlightedItems) {
    for (var i = 0; i < highlightedItems.length; i++) {
      highlightedMap[highlightedItems[i][NBoxConstants.ID]] = true;
    }
  }

  for (var i = 0; i < displayables.length; i++) {
    if (categories && categories.length > 0 && !hasCategory(displayables[i]))
      displayables[i].setAlpha(DvtNBoxStyleUtils.getFadedNodeAlpha(this));
    else
      displayables[i].setAlpha(1);
    // Remove group nodes across cells to rerender with correct node counts
    if (displayables[i].nboxType === 'categoryNode') {
      var count = 0;
      var data = displayables[i].getData();
      for (var j = 0; j < data['nodeIndices'].length; j++) {
        if (highlightedMap[data['nodeIndices'][j]])
          count += 1;
      }
      data['highlightedCount'] = count;
      var bIndicator = DvtNBoxStyleUtils.getStyledCategoryIndicatorIcon(nbox, data) != null ||
                       DvtNBoxStyleUtils.getCategoryNodeIndicatorColor(nbox, data) != null;
      DvtNBoxCategoryNodeRenderer._renderNodeCount(nbox, displayables[i].getData(), displayables[i], data['__scale'], bIndicator, data['__gap']);
    }
  }
};

/**
 * Returns list of node displayables (DvtNBoxNode, DvtNBoxCategoryNode)
 * @return {array} array of node displayables
 */
NBox.prototype.getNodeDisplayables = function() {
  var dataObjects = [];
  // First collect all the relevant data objects
  // Individual Nodes
  var nodeCount = DvtNBoxDataUtils.getNodeCount(this);
  for (var i = 0; i < nodeCount; i++) {
    dataObjects.push(DvtNBoxDataUtils.getNode(this, i));
  }
  // Category Nodes
  var groupBehavior = DvtNBoxDataUtils.getGroupBehavior(this);
  var groupInfo = this.getOptions()['__groups'];
  if (groupInfo) {
    if (groupBehavior == NBoxConstants.GROUP_BEHAVIOR_WITHIN_CELL) {
      var cellCount = DvtNBoxDataUtils.getRowCount(this) * DvtNBoxDataUtils.getColumnCount(this);
      for (var i = 0; i < cellCount; i++) {
        var cellGroups = groupInfo[i + ''];
        for (var id in cellGroups) {
          dataObjects.push(cellGroups[id]);
        }
      }
    }
    else {
      for (var id in groupInfo) {
        dataObjects.push(groupInfo[id]);
      }
    }
  }
  // Now pull the list of displayables from the data objects
  var displayables = [];
  for (var i = 0; i < dataObjects.length; i++) {
    var displayable = DvtNBoxUtils.getDisplayable(this, dataObjects[i]);
    if (displayable) {
      displayables.push(displayable);
    }
  }
  return displayables;
};

/**
 * Gets whether animation is allowed.  Used by DvtNBoxStyleUtils when retrieving animationOnDisplay and
 * animationOnDataChange
 * @return {boolean} whether animation is allowed
 */
NBox.prototype.isAnimationAllowed = function() {
  return this._animationAllowed;
};

/**
 * Sets whether animation is allowed.  Used by DvtNBoxStyleUtils when retrieving animationOnDisplay and
 * animationOnDataChange
 * @param {boolean} animationAllowed whether animation is allowed
 */
NBox.prototype.setAnimationAllowed = function(animationAllowed) {
  this._animationAllowed = animationAllowed;
};


/**
 * Sets the filter
 *
 * @param {dvt.Shadow} filter
 */
NBox.prototype.setCellFilter = function(filter) {
  this._filter = filter;
};

/**
 * Returns the filter
 *
 * @return {dvt.Shadow} filter
 */
NBox.prototype.getCellFilter = function() {
  return this._filter;
};

/**
 * Sets the node clip path
 *
 * @param {dvt.ClipPath} clipPath
 */
NBox.prototype.setNodeClipPath = function(clipPath) {
  this._nodeClipPath = clipPath;
};

/**
 * Returns the node clip path
 *
 * @return {dvt.ClipPath} clipPath
 */
NBox.prototype.getNodeClipPath = function() {
  return this._nodeClipPath;
};

/**
 * Sets the node icon clip path
 *
 * @param {dvt.ClipPath} clipPath
 */
NBox.prototype.setNodeIconClipPath = function(clipPath) {
  this._nodeIconClipPath = clipPath;
};

/**
 * Returns the node icon clip path
 *
 * @return {dvt.ClipPath} clipPath
 */
NBox.prototype.getNodeIconClipPath = function() {
  return this._nodeIconClipPath;
};

export { NBox, NBoxConstants };
