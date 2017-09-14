webpackJsonp([1],Array(31).concat([
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(5);

__webpack_require__(40);

__webpack_require__(43);

__webpack_require__(120);

__webpack_require__(39);

var RegisterHtmlTemplate = __webpack_require__(26);

RegisterHtmlTemplate.register("<dom-module id=app-toast> <template> <style>:host{font-family:Roboto,Arial,sans-serif}.clickable{cursor:pointer}paper-toast{user-select:none}paper-toast[fit-bottom]{width:100%;min-width:0;border-radius:0;margin:0}.toast-action{@apply (--layout-self-center);padding-left:24px;color:#eeff41;text-transform:uppercase;font-weight:600;cursor:pointer;white-space:nowrap;user-select:none}</style> <paper-toast id=internalToast class$={{_computeClass(_tapHandler)}} on-tap=_handleTap layout=\"\" horizontal=\"\" justified=\"\" fit-bottom$={{app.isPhoneSize}}> <span class=toast-action on-click=_handleAction hidden$={{!action}}>[[action]]</span> </paper-toast> </template> </dom-module>");

(function () {
  var AppToast = function (_Polymer$GestureEvent) {
    _inherits(AppToast, _Polymer$GestureEvent);

    function AppToast() {
      _classCallCheck(this, AppToast);

      return _possibleConstructorReturn(this, (AppToast.__proto__ || Object.getPrototypeOf(AppToast)).apply(this, arguments));
    }

    _createClass(AppToast, [{
      key: '_actionChanged',
      value: function _actionChanged() {
        this.textContent = this.action ? this.action : null;
      }
    }, {
      key: 'show',
      value: function show() {
        this.shadowRoot.querySelector('#internalToast').show({
          text: this.text,
          duration: this.duration
        });
      }
    }, {
      key: 'close',
      value: function close() {
        this.shadowRoot.querySelector('#internalToast').close();
      }
    }, {
      key: 'showMessage',
      value: function showMessage(message, optTapHandler, optAction, optActionHandler, optDuration) {
        this.close();
        // Override duration just for this toast.
        var obj = {
          text: message
        };
        var originalDuration = this.duration;
        if (typeof optDuration !== 'undefined') {
          this.duration = optDuration;
          obj.duration = optDuration;
        }
        this.text = message;
        this._tapHandler = optTapHandler;
        this.action = optAction;
        this._actionHandler = optActionHandler;
        this.shadowRoot.querySelector('#internalToast').show(obj);
        this.dispatchEvent(new CustomEvent('toast-message', {
          detail: {
            message: message
          }
        }));
        this.duration = originalDuration; // reset site-wide duration.
      }
    }, {
      key: '_handleTap',
      value: function _handleTap() {
        if (typeof this._tapHandler === 'function' && !this._handledAction) {
          this._tapHandler();
          this.shadowRoot.querySelector('#internalToast').close();
        }
        this._handledAction = false;
      }
    }, {
      key: '_handleAction',
      value: function _handleAction(e, detail) {
        if (typeof this._actionHandler === 'function') {
          e.stopPropagation();
          this._actionHandler();
          this._handledAction = true;
          // Need because handleTap will also be called from a tap.
          // This handle is a click.
          this.shadowRoot.querySelector('#internalToast').close();
        }
      }
    }, {
      key: '_handleOverlayClosed',
      value: function _handleOverlayClosed() {
        this._tapHandler = null;
      }
    }, {
      key: '_computeClass',
      value: function _computeClass(tapHandler) {
        return tapHandler ? 'clickable' : '';
      }
    }], [{
      key: 'is',
      get: function get() {
        return 'app-toast';
      }
    }, {
      key: 'properties',
      get: function get() {
        return Object.assign({}, _get(AppToast.__proto__ || Object.getPrototypeOf(AppToast), 'properties', this), {
          app: {
            type: Object
          },
          action: {
            type: String,
            value: null,
            observer: '_actionChanged'
          },
          duration: {
            type: Number,
            value: 6000
          },
          _actionHandler: {
            value: null
          },
          _handledAction: {
            type: Boolean,
            value: false
          },
          _listeners: {
            value: function value() {
              return [];
            }
          },
          _tapHandler: {
            value: null
          }
        });
      }
    }, {
      key: 'listeners',
      get: function get() {
        return Object.assign({}, _get(AppToast.__proto__ || Object.getPrototypeOf(AppToast), 'listeners', this), {
          'iron-overlay-closed': '_handleOverlayClosed'
        });
      }
    }]);

    return AppToast;
  }(Polymer.GestureEventListeners(Polymer.Element));

  window.customElements.define(AppToast.is, AppToast);
})();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(42);

__webpack_require__(54);

__webpack_require__(56);

__webpack_require__(57);

__webpack_require__(45);

__webpack_require__(58);

__webpack_require__(59);

__webpack_require__(60);

__webpack_require__(63);

// bc
Polymer.Base = Polymer.LegacyElementMixin(HTMLElement).prototype;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

(function () {
  'use strict';

  /**
   * Chrome uses an older version of DOM Level 3 Keyboard Events
   *
   * Most keys are labeled as text, but some are Unicode codepoints.
   * Values taken from: http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
   */

  var KEY_IDENTIFIER = {
    'U+0008': 'backspace',
    'U+0009': 'tab',
    'U+001B': 'esc',
    'U+0020': 'space',
    'U+007F': 'del'
  };

  /**
   * Special table for KeyboardEvent.keyCode.
   * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
   * than that.
   *
   * Values from: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
   */
  var KEY_CODE = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    27: 'esc',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    46: 'del',
    106: '*'
  };

  /**
   * MODIFIER_KEYS maps the short name for modifier keys used in a key
   * combo string to the property name that references those same keys
   * in a KeyboardEvent instance.
   */
  var MODIFIER_KEYS = {
    'shift': 'shiftKey',
    'ctrl': 'ctrlKey',
    'alt': 'altKey',
    'meta': 'metaKey'
  };

  /**
   * KeyboardEvent.key is mostly represented by printable character made by
   * the keyboard, with unprintable keys labeled nicely.
   *
   * However, on OS X, Alt+char can make a Unicode character that follows an
   * Apple-specific mapping. In this case, we fall back to .keyCode.
   */
  var KEY_CHAR = /[a-z0-9*]/;

  /**
   * Matches a keyIdentifier string.
   */
  var IDENT_CHAR = /U\+/;

  /**
   * Matches arrow keys in Gecko 27.0+
   */
  var ARROW_KEY = /^arrow/;

  /**
   * Matches space keys everywhere (notably including IE10's exceptional name
   * `spacebar`).
   */
  var SPACE_KEY = /^space(bar)?/;

  /**
   * Matches ESC key.
   *
   * Value from: http://w3c.github.io/uievents-key/#key-Escape
   */
  var ESC_KEY = /^escape$/;

  /**
   * Transforms the key.
   * @param {string} key The KeyBoardEvent.key
   * @param {Boolean} [noSpecialChars] Limits the transformation to
   * alpha-numeric characters.
   */
  function transformKey(key, noSpecialChars) {
    var validKey = '';
    if (key) {
      var lKey = key.toLowerCase();
      if (lKey === ' ' || SPACE_KEY.test(lKey)) {
        validKey = 'space';
      } else if (ESC_KEY.test(lKey)) {
        validKey = 'esc';
      } else if (lKey.length == 1) {
        if (!noSpecialChars || KEY_CHAR.test(lKey)) {
          validKey = lKey;
        }
      } else if (ARROW_KEY.test(lKey)) {
        validKey = lKey.replace('arrow', '');
      } else if (lKey == 'multiply') {
        // numpad '*' can map to Multiply on IE/Windows
        validKey = '*';
      } else {
        validKey = lKey;
      }
    }
    return validKey;
  }

  function transformKeyIdentifier(keyIdent) {
    var validKey = '';
    if (keyIdent) {
      if (keyIdent in KEY_IDENTIFIER) {
        validKey = KEY_IDENTIFIER[keyIdent];
      } else if (IDENT_CHAR.test(keyIdent)) {
        keyIdent = parseInt(keyIdent.replace('U+', '0x'), 16);
        validKey = String.fromCharCode(keyIdent).toLowerCase();
      } else {
        validKey = keyIdent.toLowerCase();
      }
    }
    return validKey;
  }

  function transformKeyCode(keyCode) {
    var validKey = '';
    if (Number(keyCode)) {
      if (keyCode >= 65 && keyCode <= 90) {
        // ascii a-z
        // lowercase is 32 offset from uppercase
        validKey = String.fromCharCode(32 + keyCode);
      } else if (keyCode >= 112 && keyCode <= 123) {
        // function keys f1-f12
        validKey = 'f' + (keyCode - 112 + 1);
      } else if (keyCode >= 48 && keyCode <= 57) {
        // top 0-9 keys
        validKey = String(keyCode - 48);
      } else if (keyCode >= 96 && keyCode <= 105) {
        // num pad 0-9
        validKey = String(keyCode - 96);
      } else {
        validKey = KEY_CODE[keyCode];
      }
    }
    return validKey;
  }

  /**
    * Calculates the normalized key for a KeyboardEvent.
    * @param {KeyboardEvent} keyEvent
    * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
    * transformation to alpha-numeric chars. This is useful with key
    * combinations like shift + 2, which on FF for MacOS produces
    * keyEvent.key = @
    * To get 2 returned, set noSpecialChars = true
    * To get @ returned, set noSpecialChars = false
   */
  function normalizedKeyForEvent(keyEvent, noSpecialChars) {
    // Fall back from .key, to .detail.key for artifical keyboard events,
    // and then to deprecated .keyIdentifier and .keyCode.
    if (keyEvent.key) {
      return transformKey(keyEvent.key, noSpecialChars);
    }
    if (keyEvent.detail && keyEvent.detail.key) {
      return transformKey(keyEvent.detail.key, noSpecialChars);
    }
    return transformKeyIdentifier(keyEvent.keyIdentifier) || transformKeyCode(keyEvent.keyCode) || '';
  }

  function keyComboMatchesEvent(keyCombo, event) {
    // For combos with modifiers we support only alpha-numeric keys
    var keyEvent = normalizedKeyForEvent(event, keyCombo.hasModifiers);
    return keyEvent === keyCombo.key && (!keyCombo.hasModifiers || !!event.shiftKey === !!keyCombo.shiftKey && !!event.ctrlKey === !!keyCombo.ctrlKey && !!event.altKey === !!keyCombo.altKey && !!event.metaKey === !!keyCombo.metaKey);
  }

  function parseKeyComboString(keyComboString) {
    if (keyComboString.length === 1) {
      return {
        combo: keyComboString,
        key: keyComboString,
        event: 'keydown'
      };
    }
    return keyComboString.split('+').reduce(function (parsedKeyCombo, keyComboPart) {
      var eventParts = keyComboPart.split(':');
      var keyName = eventParts[0];
      var event = eventParts[1];

      if (keyName in MODIFIER_KEYS) {
        parsedKeyCombo[MODIFIER_KEYS[keyName]] = true;
        parsedKeyCombo.hasModifiers = true;
      } else {
        parsedKeyCombo.key = keyName;
        parsedKeyCombo.event = event || 'keydown';
      }

      return parsedKeyCombo;
    }, {
      combo: keyComboString.split(':').shift()
    });
  }

  function parseEventString(eventString) {
    return eventString.trim().split(' ').map(function (keyComboString) {
      return parseKeyComboString(keyComboString);
    });
  }

  /**
   * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
   * keyboard commands that pertain to [WAI-ARIA best practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding).
   * The element takes care of browser differences with respect to Keyboard events
   * and uses an expressive syntax to filter key presses.
   *
   * Use the `keyBindings` prototype property to express what combination of keys
   * will trigger the callback. A key binding has the format
   * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
   * `"KEY:EVENT": "callback"` are valid as well). Some examples:
   *
   *      keyBindings: {
   *        'space': '_onKeydown', // same as 'space:keydown'
   *        'shift+tab': '_onKeydown',
   *        'enter:keypress': '_onKeypress',
   *        'esc:keyup': '_onKeyup'
   *      }
   *
   * The callback will receive with an event containing the following information in `event.detail`:
   *
   *      _onKeydown: function(event) {
   *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
   *        console.log(event.detail.key); // KEY only, e.g. "tab"
   *        console.log(event.detail.event); // EVENT, e.g. "keydown"
   *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
   *      }
   *
   * Use the `keyEventTarget` attribute to set up event handlers on a specific
   * node.
   *
   * See the [demo source code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
   * for an example.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */
  Polymer.IronA11yKeysBehavior = {
    properties: {
      /**
       * The EventTarget that will be firing relevant KeyboardEvents. Set it to
       * `null` to disable the listeners.
       * @type {?EventTarget}
       */
      keyEventTarget: {
        type: Object,
        value: function value() {
          return this;
        }
      },

      /**
       * If true, this property will cause the implementing element to
       * automatically stop propagation on any handled KeyboardEvents.
       */
      stopKeyboardEventPropagation: {
        type: Boolean,
        value: false
      },

      _boundKeyHandlers: {
        type: Array,
        value: function value() {
          return [];
        }
      },

      // We use this due to a limitation in IE10 where instances will have
      // own properties of everything on the "prototype".
      _imperativeKeyBindings: {
        type: Object,
        value: function value() {
          return {};
        }
      }
    },

    observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],

    /**
     * To be used to express what combination of keys  will trigger the relative
     * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
     * @type {!Object}
     */
    keyBindings: {},

    registered: function registered() {
      this._prepKeyBindings();
    },

    attached: function attached() {
      this._listenKeyEventListeners();
    },

    detached: function detached() {
      this._unlistenKeyEventListeners();
    },

    /**
     * Can be used to imperatively add a key binding to the implementing
     * element. This is the imperative equivalent of declaring a keybinding
     * in the `keyBindings` prototype property.
     *
     * @param {string} eventString
     * @param {string} handlerName
     */
    addOwnKeyBinding: function addOwnKeyBinding(eventString, handlerName) {
      this._imperativeKeyBindings[eventString] = handlerName;
      this._prepKeyBindings();
      this._resetKeyEventListeners();
    },

    /**
     * When called, will remove all imperatively-added key bindings.
     */
    removeOwnKeyBindings: function removeOwnKeyBindings() {
      this._imperativeKeyBindings = {};
      this._prepKeyBindings();
      this._resetKeyEventListeners();
    },

    /**
     * Returns true if a keyboard event matches `eventString`.
     *
     * @param {KeyboardEvent} event
     * @param {string} eventString
     * @return {boolean}
     */
    keyboardEventMatchesKeys: function keyboardEventMatchesKeys(event, eventString) {
      var keyCombos = parseEventString(eventString);
      for (var i = 0; i < keyCombos.length; ++i) {
        if (keyComboMatchesEvent(keyCombos[i], event)) {
          return true;
        }
      }
      return false;
    },

    _collectKeyBindings: function _collectKeyBindings() {
      var keyBindings = this.behaviors.map(function (behavior) {
        return behavior.keyBindings;
      });

      if (keyBindings.indexOf(this.keyBindings) === -1) {
        keyBindings.push(this.keyBindings);
      }

      return keyBindings;
    },

    _prepKeyBindings: function _prepKeyBindings() {
      this._keyBindings = {};

      this._collectKeyBindings().forEach(function (keyBindings) {
        for (var eventString in keyBindings) {
          this._addKeyBinding(eventString, keyBindings[eventString]);
        }
      }, this);

      for (var eventString in this._imperativeKeyBindings) {
        this._addKeyBinding(eventString, this._imperativeKeyBindings[eventString]);
      }

      // Give precedence to combos with modifiers to be checked first.
      for (var eventName in this._keyBindings) {
        this._keyBindings[eventName].sort(function (kb1, kb2) {
          var b1 = kb1[0].hasModifiers;
          var b2 = kb2[0].hasModifiers;
          return b1 === b2 ? 0 : b1 ? -1 : 1;
        });
      }
    },

    _addKeyBinding: function _addKeyBinding(eventString, handlerName) {
      parseEventString(eventString).forEach(function (keyCombo) {
        this._keyBindings[keyCombo.event] = this._keyBindings[keyCombo.event] || [];

        this._keyBindings[keyCombo.event].push([keyCombo, handlerName]);
      }, this);
    },

    _resetKeyEventListeners: function _resetKeyEventListeners() {
      this._unlistenKeyEventListeners();

      if (this.isAttached) {
        this._listenKeyEventListeners();
      }
    },

    _listenKeyEventListeners: function _listenKeyEventListeners() {
      if (!this.keyEventTarget) {
        return;
      }
      Object.keys(this._keyBindings).forEach(function (eventName) {
        var keyBindings = this._keyBindings[eventName];
        var boundKeyHandler = this._onKeyBindingEvent.bind(this, keyBindings);

        this._boundKeyHandlers.push([this.keyEventTarget, eventName, boundKeyHandler]);

        this.keyEventTarget.addEventListener(eventName, boundKeyHandler);
      }, this);
    },

    _unlistenKeyEventListeners: function _unlistenKeyEventListeners() {
      var keyHandlerTuple;
      var keyEventTarget;
      var eventName;
      var boundKeyHandler;

      while (this._boundKeyHandlers.length) {
        // My kingdom for block-scope binding and destructuring assignment..
        keyHandlerTuple = this._boundKeyHandlers.pop();
        keyEventTarget = keyHandlerTuple[0];
        eventName = keyHandlerTuple[1];
        boundKeyHandler = keyHandlerTuple[2];

        keyEventTarget.removeEventListener(eventName, boundKeyHandler);
      }
    },

    _onKeyBindingEvent: function _onKeyBindingEvent(keyBindings, event) {
      if (this.stopKeyboardEventPropagation) {
        event.stopPropagation();
      }

      // if event has been already prevented, don't do anything
      if (event.defaultPrevented) {
        return;
      }

      for (var i = 0; i < keyBindings.length; i++) {
        var keyCombo = keyBindings[i][0];
        var handlerName = keyBindings[i][1];
        if (keyComboMatchesEvent(keyCombo, event)) {
          this._triggerKeyHandler(keyCombo, handlerName, event);
          // exit the loop if eventDefault was prevented
          if (event.defaultPrevented) {
            return;
          }
        }
      }
    },

    _triggerKeyHandler: function _triggerKeyHandler(keyCombo, handlerName, keyboardEvent) {
      var detail = Object.create(keyCombo);
      detail.keyboardEvent = keyboardEvent;
      var event = new CustomEvent(keyCombo.event, {
        detail: detail,
        cancelable: true
      });
      this[handlerName].call(this, event);
      if (event.defaultPrevented) {
        keyboardEvent.preventDefault();
      }
    }
  };
})();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(1);

(function () {
  'use strict';

  // Common implementation for mixin & behavior

  function mutablePropertyChange(inst, property, value, old, mutableData) {
    var isObject = void 0;
    if (mutableData) {
      isObject = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
      // Pull `old` for Objects from temp cache, but treat `null` as a primitive
      if (isObject) {
        old = inst.__dataTemp[property];
      }
    }
    // Strict equality check, but return false for NaN===NaN
    var shouldChange = old !== value && (old === old || value === value);
    // Objects are stored in temporary cache (cleared at end of
    // turn), which is used for dirty-checking
    if (isObject && shouldChange) {
      inst.__dataTemp[property] = value;
    }
    return shouldChange;
  }

  /**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `Polymer.PropertyEffects`
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   *
   * In order to make the dirty check strategy configurable, see
   * `Polymer.OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @memberof Polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */
  Polymer.MutableData = Polymer.dedupingMixin(function (superClass) {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_MutableData}
     */
    var MutableData = function (_superClass) {
      _inherits(MutableData, _superClass);

      function MutableData() {
        _classCallCheck(this, MutableData);

        return _possibleConstructorReturn(this, (MutableData.__proto__ || Object.getPrototypeOf(MutableData)).apply(this, arguments));
      }

      _createClass(MutableData, [{
        key: '_shouldPropertyChange',

        /**
         * Overrides `Polymer.PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * This method pulls the value to dirty check against from the `__dataTemp`
         * cache (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        value: function _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, true);
        }
      }]);

      return MutableData;
    }(superClass);
    /** @type {boolean} */


    MutableData.prototype.mutableData = false;

    return MutableData;
  });

  /**
   * Element class mixin to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   *
   * While this mixin adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @mixinFunction
   * @polymer
   * @memberof Polymer
   * @summary Element class mixin to optionally skip strict dirty-checking
   *   for objects and arrays
   */
  Polymer.OptionalMutableData = Polymer.dedupingMixin(function (superClass) {

    /**
     * @mixinClass
     * @polymer
     * @implements {Polymer_OptionalMutableData}
     */
    var OptionalMutableData = function (_superClass2) {
      _inherits(OptionalMutableData, _superClass2);

      function OptionalMutableData() {
        _classCallCheck(this, OptionalMutableData);

        return _possibleConstructorReturn(this, (OptionalMutableData.__proto__ || Object.getPrototypeOf(OptionalMutableData)).apply(this, arguments));
      }

      _createClass(OptionalMutableData, [{
        key: '_shouldPropertyChange',


        /**
         * Overrides `Polymer.PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * When `this.mutableData` is true on this instance, this method
         * pulls the value to dirty check against from the `__dataTemp` cache
         * (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        value: function _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, this.mutableData);
        }
      }], [{
        key: 'properties',
        get: function get() {
          return {
            /**
             * Instance-level flag for configuring the dirty-checking strategy
             * for this element.  When true, Objects and Arrays will skip dirty
             * checking, otherwise strict equality checking will be used.
             */
            mutableData: Boolean
          };
        }
      }]);

      return OptionalMutableData;
    }(superClass);

    return OptionalMutableData;
  });

  // Export for use by legacy behavior
  Polymer.MutableData._mutablePropertyChange = mutablePropertyChange;
})();

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(4);

(function () {
  'use strict';

  /** @typedef {{run: function(function(), number=):number, cancel: function(number)}} */

  var AsyncModule = void 0; // eslint-disable-line no-unused-vars

  /**
   * @summary Collapse multiple callbacks into one invocation after a timer.
   * @memberof Polymer
   */

  var Debouncer = function () {
    function Debouncer() {
      _classCallCheck(this, Debouncer);

      this._asyncModule = null;
      this._callback = null;
      this._timer = null;
    }
    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncModule} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     */


    _createClass(Debouncer, [{
      key: 'setConfig',
      value: function setConfig(asyncModule, callback) {
        var _this = this;

        this._asyncModule = asyncModule;
        this._callback = callback;
        this._timer = this._asyncModule.run(function () {
          _this._timer = null;
          _this._callback();
        });
      }
      /**
       * Cancels an active debouncer and returns a reference to itself.
       */

    }, {
      key: 'cancel',
      value: function cancel() {
        if (this.isActive()) {
          this._asyncModule.cancel(this._timer);
          this._timer = null;
        }
      }
      /**
       * Flushes an active debouncer and returns a reference to itself.
       */

    }, {
      key: 'flush',
      value: function flush() {
        if (this.isActive()) {
          this.cancel();
          this._callback();
        }
      }
      /**
       * Returns true if the debouncer is active.
       *
       * @return {boolean} True if active.
       */

    }, {
      key: 'isActive',
      value: function isActive() {
        return this._timer != null;
      }
      /**
       * Creates a debouncer if no debouncer is passed as a parameter
       * or it cancels an active debouncer otherwise. The following
       * example shows how a debouncer can be called multiple times within a
       * microtask and "debounced" such that the provided callback function is
       * called once. Add this method to a custom element:
       *
       * _debounceWork() {
       *   this._debounceJob = Polymer.Debouncer.debounce(this._debounceJob,
       *       Polymer.Async.microTask, () => {
       *     this._doWork();
       *   });
       * }
       *
       * If the `_debounceWork` method is called multiple times within the same
       * microtask, the `_doWork` function will be called only once at the next
       * microtask checkpoint.
       *
       * Note: In testing it is often convenient to avoid asynchrony. To accomplish
       * this with a debouncer, you can use `Polymer.enqueueDebouncer` and
       * `Polymer.flush`. For example, extend the above example by adding
       * `Polymer.enqueueDebouncer(this._debounceJob)` at the end of the
       * `_debounceWork` method. Then in a test, call `Polymer.flush` to ensure
       * the debouncer has completed.
       *
       * @param {Debouncer?} debouncer Debouncer object.
       * @param {!AsyncModule} asyncModule Object with Async interface
       * @param {function()} callback Callback to run.
       * @return {!Debouncer} Returns a debouncer object.
       */

    }], [{
      key: 'debounce',
      value: function debounce(debouncer, asyncModule, callback) {
        if (debouncer instanceof Debouncer) {
          debouncer.cancel();
        } else {
          debouncer = new Debouncer();
        }
        debouncer.setConfig(asyncModule, callback);
        return debouncer;
      }
    }]);

    return Debouncer;
  }();

  Polymer.Debouncer = Debouncer;
})();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

(function () {
  'use strict';

  var debouncerQueue = [];

  /**
   * Adds a `Polymer.Debouncer` to a list of globally flushable tasks.
   *
   * @memberof Polymer
   * @param {Polymer.Debouncer} debouncer Debouncer to enqueue
   */
  Polymer.enqueueDebouncer = function (debouncer) {
    debouncerQueue.push(debouncer);
  };

  function flushDebouncers() {
    var didFlush = Boolean(debouncerQueue.length);
    while (debouncerQueue.length) {
      try {
        debouncerQueue.shift().flush();
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    return didFlush;
  }

  /**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @memberof Polymer
   */
  Polymer.flush = function () {
    var shadyDOM = void 0,
        debouncers = void 0;
    do {
      shadyDOM = window.ShadyDOM && ShadyDOM.flush();
      if (window.ShadyCSS && window.ShadyCSS.ScopingShim) {
        window.ShadyCSS.ScopingShim.flush();
      }
      debouncers = flushDebouncers();
    } while (shadyDOM || debouncers);
  };
})();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(0);

__webpack_require__(6);

__webpack_require__(34);

(function () {
  'use strict';

  // Base class for HTMLTemplateElement extension that has property effects
  // machinery for propagating host properties to children. This is an ES5
  // class only because Babel (incorrectly) requires super() in the class
  // constructor even though no `this` is used and it returns an instance.

  var newInstance = null;
  /**
   * @constructor
   * @extends {HTMLTemplateElement}
   */
  function HTMLTemplateElementExtension() {
    return newInstance;
  }
  HTMLTemplateElementExtension.prototype = Object.create(HTMLTemplateElement.prototype, {
    constructor: {
      value: HTMLTemplateElementExtension,
      writable: true
    }
  });
  /**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @extends {HTMLTemplateElementExtension}
   */
  var DataTemplate = Polymer.PropertyEffects(HTMLTemplateElementExtension);
  /**
   * @constructor
   * @implements {Polymer_MutableData}
   * @extends {DataTemplate}
   */
  var MutableDataTemplate = Polymer.MutableData(DataTemplate);

  // Applies a DataTemplate subclass to a <template> instance
  function upgradeTemplate(template, constructor) {
    newInstance = template;
    Object.setPrototypeOf(template, constructor.prototype);
    new constructor();
    newInstance = null;
  }

  // Base class for TemplateInstance's
  /**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   */
  var base = Polymer.PropertyEffects(function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    return _class;
  }());

  /**
   * @polymer
   * @customElement
   * @appliesMixin Polymer.PropertyEffects
   * @unrestricted
   */

  var TemplateInstanceBase = function (_base) {
    _inherits(TemplateInstanceBase, _base);

    function TemplateInstanceBase(props) {
      _classCallCheck(this, TemplateInstanceBase);

      var _this = _possibleConstructorReturn(this, (TemplateInstanceBase.__proto__ || Object.getPrototypeOf(TemplateInstanceBase)).call(this));

      _this._configureProperties(props);
      _this.root = _this._stampTemplate(_this.__dataHost);
      // Save list of stamped children
      var children = _this.children = [];
      for (var n = _this.root.firstChild; n; n = n.nextSibling) {
        children.push(n);
        n.__templatizeInstance = _this;
      }
      if (_this.__templatizeOwner.__hideTemplateChildren__) {
        _this._showHideChildren(true);
      }
      // Flush props only when props are passed if instance props exist
      // or when there isn't instance props.
      var options = _this.__templatizeOptions;
      if (props && options.instanceProps || !options.instanceProps) {
        _this._enableProperties();
      }
      return _this;
    }
    /**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     */


    _createClass(TemplateInstanceBase, [{
      key: '_configureProperties',
      value: function _configureProperties(props) {
        var options = this.__templatizeOptions;
        if (props) {
          for (var iprop in options.instanceProps) {
            if (iprop in props) {
              this._setPendingProperty(iprop, props[iprop]);
            }
          }
        }
        for (var hprop in this.__hostProps) {
          this._setPendingProperty(hprop, this.__dataHost['_host_' + hprop]);
        }
      }
      /**
       * Forwards a host property to this instance.  This method should be
       * called on instances from the `options.forwardHostProp` callback
       * to propagate changes of host properties to each instance.
       *
       * Note this method enqueues the change, which are flushed as a batch.
       *
       * @param {string} prop Property or path name
       * @param {*} value Value of the property to forward
       */

    }, {
      key: 'forwardHostProp',
      value: function forwardHostProp(prop, value) {
        if (this._setPendingPropertyOrPath(prop, value, false, true)) {
          this.__dataHost._enqueueClient(this);
        }
      }
      /**
       * @override
       */

    }, {
      key: '_addEventListenerToNode',
      value: function _addEventListenerToNode(node, eventName, handler) {
        var _this2 = this;

        if (this._methodHost && this.__templatizeOptions.parentModel) {
          // If this instance should be considered a parent model, decorate
          // events this template instance as `model`
          this._methodHost._addEventListenerToNode(node, eventName, function (e) {
            e.model = _this2;
            handler(e);
          });
        } else {
          // Otherwise delegate to the template's host (which could be)
          // another template instance
          var templateHost = this.__dataHost.__dataHost;
          if (templateHost) {
            templateHost._addEventListenerToNode(node, eventName, handler);
          }
        }
      }
      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hide Set to true to hide the children;
       * set to false to show them.
       * @protected
       */

    }, {
      key: '_showHideChildren',
      value: function _showHideChildren(hide) {
        var c = this.children;
        for (var i = 0; i < c.length; i++) {
          var n = c[i];
          // Ignore non-changes
          if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
            if (n.nodeType === Node.TEXT_NODE) {
              if (hide) {
                n.__polymerTextContent__ = n.textContent;
                n.textContent = '';
              } else {
                n.textContent = n.__polymerTextContent__;
              }
            } else if (n.style) {
              if (hide) {
                n.__polymerDisplay__ = n.style.display;
                n.style.display = 'none';
              } else {
                n.style.display = n.__polymerDisplay__;
              }
            }
          }
          n.__hideTemplateChildren__ = hide;
          if (n._showHideChildren) {
            n._showHideChildren(hide);
          }
        }
      }
      /**
       * Overrides default property-effects implementation to intercept
       * textContent bindings while children are "hidden" and cache in
       * private storage for later retrieval.
       *
       * @override
       */

    }, {
      key: '_setUnmanagedPropertyToNode',
      value: function _setUnmanagedPropertyToNode(node, prop, value) {
        if (node.__hideTemplateChildren__ && node.nodeType == Node.TEXT_NODE && prop == 'textContent') {
          node.__polymerTextContent__ = value;
        } else {
          _get(TemplateInstanceBase.prototype.__proto__ || Object.getPrototypeOf(TemplateInstanceBase.prototype), '_setUnmanagedPropertyToNode', this).call(this, node, prop, value);
        }
      }
      /**
       * Find the parent model of this template instance.  The parent model
       * is either another templatize instance that had option `parentModel: true`,
       * or else the host element.
       *
       * @return {Polymer_PropertyEffects} The parent model of this instance
       */

    }, {
      key: 'parentModel',
      get: function get() {
        var model = this.__parentModel;
        if (!model) {
          var options = void 0;
          model = this;
          do {
            // A template instance's `__dataHost` is a <template>
            // `model.__dataHost.__dataHost` is the template's host
            model = model.__dataHost.__dataHost;
          } while ((options = model.__templatizeOptions) && !options.parentModel);
          this.__parentModel = model;
        }
        return model;
      }
    }]);

    return TemplateInstanceBase;
  }(base);

  /** @type {!DataTemplate} */


  TemplateInstanceBase.prototype.__dataHost;
  /** @type {!TemplatizeOptions} */
  TemplateInstanceBase.prototype.__templatizeOptions;
  /** @type {!Polymer_PropertyEffects} */
  TemplateInstanceBase.prototype._methodHost;
  /** @type {!Object} */
  TemplateInstanceBase.prototype.__templatizeOwner;
  /** @type {!Object} */
  TemplateInstanceBase.prototype.__hostProps;

  /**
   * @constructor
   * @extends {TemplateInstanceBase}
   * @implements {Polymer_MutableData}
   */
  var MutableTemplateInstanceBase = Polymer.MutableData(TemplateInstanceBase);

  function findMethodHost(template) {
    // Technically this should be the owner of the outermost template.
    // In shadow dom, this is always getRootNode().host, but we can
    // approximate this via cooperation with our dataHost always setting
    // `_methodHost` as long as there were bindings (or id's) on this
    // instance causing it to get a dataHost.
    var templateHost = template.__dataHost;
    return templateHost && templateHost._methodHost || templateHost;
  }

  /* eslint-disable valid-jsdoc */
  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */
  function createTemplatizerClass(template, templateInfo, options) {
    // Anonymous class created by the templatize
    var base = options.mutableData ? MutableTemplateInstanceBase : TemplateInstanceBase;
    /**
     * @constructor
     * @extends {base}
     */
    var klass = function (_base2) {
      _inherits(klass, _base2);

      function klass() {
        _classCallCheck(this, klass);

        return _possibleConstructorReturn(this, (klass.__proto__ || Object.getPrototypeOf(klass)).apply(this, arguments));
      }

      return klass;
    }(base);
    klass.prototype.__templatizeOptions = options;
    klass.prototype._bindTemplate(template);
    addNotifyEffects(klass, template, templateInfo, options);
    return klass;
  }

  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */
  function addPropagateEffects(template, templateInfo, options) {
    var userForwardHostProp = options.forwardHostProp;
    if (userForwardHostProp) {
      // Provide data API and property effects on memoized template class
      var klass = templateInfo.templatizeTemplateClass;
      if (!klass) {
        var _base3 = options.mutableData ? MutableDataTemplate : DataTemplate;
        klass = templateInfo.templatizeTemplateClass = function (_base4) {
          _inherits(TemplatizedTemplate, _base4);

          function TemplatizedTemplate() {
            _classCallCheck(this, TemplatizedTemplate);

            return _possibleConstructorReturn(this, (TemplatizedTemplate.__proto__ || Object.getPrototypeOf(TemplatizedTemplate)).apply(this, arguments));
          }

          return TemplatizedTemplate;
        }(_base3);
        // Add template - >instances effects
        // and host <- template effects
        var hostProps = templateInfo.hostProps;
        for (var prop in hostProps) {
          klass.prototype._addPropertyEffect('_host_' + prop, klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, { fn: createForwardHostPropEffect(prop, userForwardHostProp) });
          klass.prototype._createNotifyingProperty('_host_' + prop);
        }
      }
      upgradeTemplate(template, klass);
      // Mix any pre-bound data into __data; no need to flush this to
      // instances since they pull from the template at instance-time
      if (template.__dataProto) {
        // Note, generally `__dataProto` could be chained, but it's guaranteed
        // to not be since this is a vanilla template we just added effects to
        Object.assign(template.__data, template.__dataProto);
      }
      // Clear any pending data for performance
      template.__dataTemp = {};
      template.__dataPending = null;
      template.__dataOld = null;
      template._enableProperties();
    }
  }
  /* eslint-enable valid-jsdoc */

  function createForwardHostPropEffect(hostProp, userForwardHostProp) {
    return function forwardHostProp(template, prop, props) {
      userForwardHostProp.call(template.__templatizeOwner, prop.substring('_host_'.length), props[prop]);
    };
  }

  function addNotifyEffects(klass, template, templateInfo, options) {
    var hostProps = templateInfo.hostProps || {};
    for (var iprop in options.instanceProps) {
      delete hostProps[iprop];
      var userNotifyInstanceProp = options.notifyInstanceProp;
      if (userNotifyInstanceProp) {
        klass.prototype._addPropertyEffect(iprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: createNotifyInstancePropEffect(iprop, userNotifyInstanceProp) });
      }
    }
    if (options.forwardHostProp && template.__dataHost) {
      for (var hprop in hostProps) {
        klass.prototype._addPropertyEffect(hprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: createNotifyHostPropEffect() });
      }
    }
  }

  function createNotifyInstancePropEffect(instProp, userNotifyInstanceProp) {
    return function notifyInstanceProp(inst, prop, props) {
      userNotifyInstanceProp.call(inst.__templatizeOwner, inst, prop, props[prop]);
    };
  }

  function createNotifyHostPropEffect() {
    return function notifyHostProp(inst, prop, props) {
      inst.__dataHost._setPendingPropertyOrPath('_host_' + prop, props[prop], true, true);
    };
  }

  /**
   * Module for preparing and stamping instances of templates that utilize
   * Polymer's data-binding and declarative event listener features.
   *
   * Example:
   *
   *     // Get a template from somewhere, e.g. light DOM
   *     let template = this.querySelector('template');
   *     // Prepare the template
   *     let TemplateClass = Polymer.Templatize.templatize(template);
   *     // Instance the template with an initial data model
   *     let instance = new TemplateClass({myProp: 'initial'});
   *     // Insert the instance's DOM somewhere, e.g. element's shadow DOM
   *     this.shadowRoot.appendChild(instance.root);
   *     // Changing a property on the instance will propagate to bindings
   *     // in the template
   *     instance.myProp = 'new value';
   *
   * The `options` dictionary passed to `templatize` allows for customizing
   * features of the generated template class, including how outer-scope host
   * properties should be forwarded into template instances, how any instance
   * properties added into the template's scope should be notified out to
   * the host, and whether the instance should be decorated as a "parent model"
   * of any event handlers.
   *
   *     // Customze property forwarding and event model decoration
   *     let TemplateClass = Polymer.Templatize.templatize(template, this, {
   *       parentModel: true,
   *       instanceProps: {...},
   *       forwardHostProp(property, value) {...},
   *       notifyInstanceProp(instance, property, value) {...},
   *     });
   *
   *
   * @namespace
   * @memberof Polymer
   * @summary Module for preparing and stamping instances of templates
   *   utilizing Polymer templating features.
   */

  var Templatize = {

    /**
     * Returns an anonymous `Polymer.PropertyEffects` class bound to the
     * `<template>` provided.  Instancing the class will result in the
     * template being stamped into document fragment stored as the instance's
     * `root` property, after which it can be appended to the DOM.
     *
     * Templates may utilize all Polymer data-binding features as well as
     * declarative event listeners.  Event listeners and inline computing
     * functions in the template will be called on the host of the template.
     *
     * The constructor returned takes a single argument dictionary of initial
     * property values to propagate into template bindings.  Additionally
     * host properties can be forwarded in, and instance properties can be
     * notified out by providing optional callbacks in the `options` dictionary.
     *
     * Valid configuration in `options` are as follows:
     *
     * - `forwardHostProp(property, value)`: Called when a property referenced
     *   in the template changed on the template's host. As this library does
     *   not retain references to templates instanced by the user, it is the
     *   templatize owner's responsibility to forward host property changes into
     *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
     *    method on the generated class should be called to forward host
     *   properties into the template to prevent unnecessary property-changed
     *   notifications. Any properties referenced in the template that are not
     *   defined in `instanceProps` will be notified up to the template's host
     *   automatically.
     * - `instanceProps`: Dictionary of property names that will be added
     *   to the instance by the templatize owner.  These properties shadow any
     *   host properties, and changes within the template to these properties
     *   will result in `notifyInstanceProp` being called.
     * - `mutableData`: When `true`, the generated class will skip strict
     *   dirty-checking for objects and arrays (always consider them to be
     *   "dirty").
     * - `notifyInstanceProp(instance, property, value)`: Called when
     *   an instance property changes.  Users may choose to call `notifyPath`
     *   on e.g. the owner to notify the change.
     * - `parentModel`: When `true`, events handled by declarative event listeners
     *   (`on-event="handler"`) will be decorated with a `model` property pointing
     *   to the template instance that stamped it.  It will also be returned
     *   from `instance.parentModel` in cases where template instance nesting
     *   causes an inner model to shadow an outer model.
     *
     * Note that the class returned from `templatize` is generated only once
     * for a given `<template>` using `options` from the first call for that
     * template, and the cached class is returned for all subsequent calls to
     * `templatize` for that template.  As such, `options` callbacks should not
     * close over owner-specific properties since only the first `options` is
     * used; rather, callbacks are called bound to the `owner`, and so context
     * needed from the callbacks (such as references to `instances` stamped)
     * should be stored on the `owner` such that they can be retrieved via `this`.
     *
     * @memberof Polymer.Templatize
     * @param {!HTMLTemplateElement} template Template to templatize
     * @param {!Polymer_PropertyEffects} owner Owner of the template instances;
     *   any optional callbacks will be bound to this owner.
     * @param {Object=} options Options dictionary (see summary for details)
     * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
     *   provided
     * @suppress {invalidCasts}
     */
    templatize: function templatize(template, owner, options) {
      options = /** @type {!TemplatizeOptions} */options || {};
      if (template.__templatizeOwner) {
        throw new Error('A <template> can only be templatized once');
      }
      template.__templatizeOwner = owner;
      var templateInfo = owner.constructor._parseTemplate(template);
      // Get memoized base class for the prototypical template, which
      // includes property effects for binding template & forwarding
      var baseClass = templateInfo.templatizeInstanceClass;
      if (!baseClass) {
        baseClass = createTemplatizerClass(template, templateInfo, options);
        templateInfo.templatizeInstanceClass = baseClass;
      }
      // Host property forwarding must be installed onto template instance
      addPropagateEffects(template, templateInfo, options);
      // Subclass base class and add reference for this specific template
      var klass = function (_baseClass) {
        _inherits(TemplateInstance, _baseClass);

        function TemplateInstance() {
          _classCallCheck(this, TemplateInstance);

          return _possibleConstructorReturn(this, (TemplateInstance.__proto__ || Object.getPrototypeOf(TemplateInstance)).apply(this, arguments));
        }

        return TemplateInstance;
      }(baseClass);
      klass.prototype._methodHost = findMethodHost(template);
      klass.prototype.__dataHost = template;
      klass.prototype.__templatizeOwner = owner;
      klass.prototype.__hostProps = templateInfo.hostProps;
      return (/** @type {function(new:TemplateInstanceBase)} */klass
      );
    },


    /**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model is an instance of
     * `TemplateInstanceBase`, and should be used to manipulate data
     * associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @memberof Polymer.Templatize
     * @param {HTMLTemplateElement} template The model will be returned for
     *   elements stamped from this template
     * @param {Node} node Node for which to return a template model.
     * @return {TemplateInstanceBase} Template instance representing the
     *   binding scope for the element
     */
    modelForElement: function modelForElement(template, node) {
      var model = void 0;
      while (node) {
        // An element with a __templatizeInstance marks the top boundary
        // of a scope; walk up until we find one, and then ensure that
        // its __dataHost matches `this`, meaning this dom-repeat stamped it
        if (model = node.__templatizeInstance) {
          // Found an element stamped by another template; keep walking up
          // from its __dataHost
          if (model.__dataHost != template) {
            node = model.__dataHost;
          } else {
            return model;
          }
        } else {
          // Still in a template scope, keep going up until
          // a __templatizeInstance is found
          node = node.parentNode;
        }
      }
      return null;
    }
  };

  Polymer.Templatize = Templatize;
  Polymer.TemplateInstanceBase = TemplateInstanceBase;
})();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

var RegisterHtmlTemplate = __webpack_require__(26);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--layout:{display:-ms-flexbox;display:-webkit-flex;display:flex};--layout-inline:{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex};--layout-horizontal:{@apply --layout;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row};--layout-horizontal-reverse:{@apply --layout;-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse};--layout-vertical:{@apply --layout;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column};--layout-vertical-reverse:{@apply --layout;-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse};--layout-wrap:{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap};--layout-wrap-reverse:{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse};--layout-flex-auto:{-ms-flex:1 1 auto;-webkit-flex:1 1 auto;flex:1 1 auto};--layout-flex-none:{-ms-flex:none;-webkit-flex:none;flex:none};--layout-flex:{-ms-flex:1 1 .000000001px;-webkit-flex:1;flex:1;-webkit-flex-basis:.000000001px;flex-basis:.000000001px};--layout-flex-2:{-ms-flex:2;-webkit-flex:2;flex:2};--layout-flex-3:{-ms-flex:3;-webkit-flex:3;flex:3};--layout-flex-4:{-ms-flex:4;-webkit-flex:4;flex:4};--layout-flex-5:{-ms-flex:5;-webkit-flex:5;flex:5};--layout-flex-6:{-ms-flex:6;-webkit-flex:6;flex:6};--layout-flex-7:{-ms-flex:7;-webkit-flex:7;flex:7};--layout-flex-8:{-ms-flex:8;-webkit-flex:8;flex:8};--layout-flex-9:{-ms-flex:9;-webkit-flex:9;flex:9};--layout-flex-10:{-ms-flex:10;-webkit-flex:10;flex:10};--layout-flex-11:{-ms-flex:11;-webkit-flex:11;flex:11};--layout-flex-12:{-ms-flex:12;-webkit-flex:12;flex:12};--layout-start:{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start};--layout-center:{-ms-flex-align:center;-webkit-align-items:center;align-items:center};--layout-end:{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end};--layout-baseline:{-ms-flex-align:baseline;-webkit-align-items:baseline;align-items:baseline};--layout-start-justified:{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start};--layout-center-justified:{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center};--layout-end-justified:{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end};--layout-around-justified:{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around};--layout-justified:{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between};--layout-center-center:{@apply --layout-center;@apply --layout-center-justified;};--layout-self-start:{-ms-align-self:flex-start;-webkit-align-self:flex-start;align-self:flex-start};--layout-self-center:{-ms-align-self:center;-webkit-align-self:center;align-self:center};--layout-self-end:{-ms-align-self:flex-end;-webkit-align-self:flex-end;align-self:flex-end};--layout-self-stretch:{-ms-align-self:stretch;-webkit-align-self:stretch;align-self:stretch};--layout-self-baseline:{-ms-align-self:baseline;-webkit-align-self:baseline;align-self:baseline};--layout-start-aligned:{-ms-flex-line-pack:start;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start};--layout-end-aligned:{-ms-flex-line-pack:end;-ms-align-content:flex-end;-webkit-align-content:flex-end;align-content:flex-end};--layout-center-aligned:{-ms-flex-line-pack:center;-ms-align-content:center;-webkit-align-content:center;align-content:center};--layout-between-aligned:{-ms-flex-line-pack:justify;-ms-align-content:space-between;-webkit-align-content:space-between;align-content:space-between};--layout-around-aligned:{-ms-flex-line-pack:distribute;-ms-align-content:space-around;-webkit-align-content:space-around;align-content:space-around};--layout-block:{display:block};--layout-invisible:{visibility:hidden!important};--layout-relative:{position:relative};--layout-fit:{position:absolute;top:0;right:0;bottom:0;left:0};--layout-scroll:{-webkit-overflow-scrolling:touch;overflow:auto};--layout-fullbleed:{margin:0;height:100vh};--layout-fixed-top:{position:fixed;top:0;left:0;right:0};--layout-fixed-right:{position:fixed;top:0;right:0;bottom:0};--layout-fixed-bottom:{position:fixed;right:0;bottom:0;left:0};--layout-fixed-left:{position:fixed;top:0;bottom:0;left:0};}</style> </custom-style>");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(49);

(function () {

  'use strict';

  /**
   * @const {Polymer.Gestures}
   */

  var gestures = Polymer.Gestures;

  /**
   * Element class mixin that provides API for adding Polymer's cross-platform
   * gesture events to nodes.
   *
   * The API is designed to be compatible with override points implemented
   * in `Polymer.TemplateStamp` such that declarative event listeners in
   * templates will support gesture events when this mixin is applied along with
   * `Polymer.TemplateStamp`.
   *
   * @mixinFunction
   * @polymer
   * @memberof Polymer
   * @summary Element class mixin that provides API for adding Polymer's cross-platform
   * gesture events to nodes
   */
  Polymer.GestureEventListeners = Polymer.dedupingMixin(function (superClass) {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_GestureEventListeners}
     */
    var GestureEventListeners = function (_superClass) {
      _inherits(GestureEventListeners, _superClass);

      function GestureEventListeners() {
        _classCallCheck(this, GestureEventListeners);

        return _possibleConstructorReturn(this, (GestureEventListeners.__proto__ || Object.getPrototypeOf(GestureEventListeners)).apply(this, arguments));
      }

      _createClass(GestureEventListeners, [{
        key: '_addEventListenerToNode',
        value: function _addEventListenerToNode(node, eventName, handler) {
          if (!gestures.addListener(node, eventName, handler)) {
            _get(GestureEventListeners.prototype.__proto__ || Object.getPrototypeOf(GestureEventListeners.prototype), '_addEventListenerToNode', this).call(this, node, eventName, handler);
          }
        }
      }, {
        key: '_removeEventListenerFromNode',
        value: function _removeEventListenerFromNode(node, eventName, handler) {
          if (!gestures.removeListener(node, eventName, handler)) {
            _get(GestureEventListeners.prototype.__proto__ || Object.getPrototypeOf(GestureEventListeners.prototype), '_removeEventListenerFromNode', this).call(this, node, eventName, handler);
          }
        }
      }]);

      return GestureEventListeners;
    }(superClass);

    return GestureEventListeners;
  });
})();

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(43);

__webpack_require__(7);

__webpack_require__(40);

__webpack_require__(1);

__webpack_require__(50);

__webpack_require__(51);

__webpack_require__(52);

__webpack_require__(53);

(function () {

  'use strict';

  var styleInterface = window.ShadyCSS;

  /**
   * Element class mixin that provides Polymer's "legacy" API intended to be
   * backward-compatible to the greatest extent possible with the API
   * found on the Polymer 1.x `Polymer.Base` prototype applied to all elements
   * defined using the `Polymer({...})` function.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin Polymer.ElementMixin
   * @appliesMixin Polymer.GestureEventListeners
   * @property isAttached {boolean} Set to `true` in this element's
   *   `connectedCallback` and `false` in `disconnectedCallback`
   * @memberof Polymer
   * @summary Element class mixin that provides Polymer's "legacy" API
   */
  Polymer.LegacyElementMixin = Polymer.dedupingMixin(function (base) {

    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_ElementMixin}
     * @implements {Polymer_GestureEventListeners}
     */
    var legacyElementBase = Polymer.GestureEventListeners(Polymer.ElementMixin(base));

    /**
     * Map of simple names to touch action names
     * @dict
     */
    var DIRECTION_MAP = {
      'x': 'pan-x',
      'y': 'pan-y',
      'none': 'none',
      'all': 'auto'
    };

    /**
     * @polymer
     * @mixinClass
     * @extends {legacyElementBase}
     * @implements {Polymer_LegacyElementMixin}
     * @unrestricted
     */

    var LegacyElement = function (_legacyElementBase) {
      _inherits(LegacyElement, _legacyElementBase);

      function LegacyElement() {
        _classCallCheck(this, LegacyElement);

        var _this = _possibleConstructorReturn(this, (LegacyElement.__proto__ || Object.getPrototypeOf(LegacyElement)).call(this));

        _this.root = _this;
        _this.created();
        return _this;
      }

      /**
       * Legacy callback called during the `constructor`, for overriding
       * by the user.
       */


      _createClass(LegacyElement, [{
        key: 'created',
        value: function created() {}

        /**
         * Provides an implementation of `connectedCallback`
         * which adds Polymer legacy API's `attached` method.
         * @override
         */

      }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
          _get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), 'connectedCallback', this).call(this);
          this.isAttached = true;
          this.attached();
        }

        /**
         * Legacy callback called during `connectedCallback`, for overriding
         * by the user.
         */

      }, {
        key: 'attached',
        value: function attached() {}

        /**
         * Provides an implementation of `disconnectedCallback`
         * which adds Polymer legacy API's `detached` method.
         * @override
         */

      }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
          _get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), 'disconnectedCallback', this).call(this);
          this.isAttached = false;
          this.detached();
        }

        /**
         * Legacy callback called during `disconnectedCallback`, for overriding
         * by the user.
         */

      }, {
        key: 'detached',
        value: function detached() {}

        /**
         * Provides an override implementation of `attributeChangedCallback`
         * which adds the Polymer legacy API's `attributeChanged` method.
         * @param {string} name Name of attribute.
         * @param {?string} old Old value of attribute.
         * @param {?string} value Current value of attribute.
         * @override
         */

      }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, old, value) {
          if (old !== value) {
            _get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), 'attributeChangedCallback', this).call(this, name, old, value);
            this.attributeChanged(name, old, value);
          }
        }

        /**
         * Legacy callback called during `attributeChangedChallback`, for overriding
         * by the user.
         * @param {string} name Name of attribute.
         * @param {?string} old Old value of attribute.
         * @param {?string} value Current value of attribute.
         */

      }, {
        key: 'attributeChanged',
        value: function attributeChanged(name, old, value) {} // eslint-disable-line no-unused-vars

        /**
         * Overrides the default `Polymer.PropertyEffects` implementation to
         * add support for class initialization via the `_registered` callback.
         * This is called only when the first instance of the element is created.
         *
         * @override
         */

      }, {
        key: '_initializeProperties',
        value: function _initializeProperties() {
          var proto = Object.getPrototypeOf(this);
          if (!proto.hasOwnProperty('__hasRegisterFinished')) {
            proto.__hasRegisterFinished = true;
            this._registered();
          }
          _get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), '_initializeProperties', this).call(this);
        }

        /**
         * Called automatically when an element is initializing.
         * Users may override this method to perform class registration time
         * work. The implementation should ensure the work is performed
         * only once for the class.
         * @protected
         */

      }, {
        key: '_registered',
        value: function _registered() {}

        /**
         * Overrides the default `Polymer.PropertyEffects` implementation to
         * add support for installing `hostAttributes` and `listeners`.
         *
         * @override
         */

      }, {
        key: 'ready',
        value: function ready() {
          this._ensureAttributes();
          this._applyListeners();
          _get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), 'ready', this).call(this);
        }

        /**
         * Ensures an element has required attributes. Called when the element
         * is being readied via `ready`. Users should override to set the
         * element's required attributes. The implementation should be sure
         * to check and not override existing attributes added by
         * the user of the element. Typically, setting attributes should be left
         * to the element user and not done here; reasonable exceptions include
         * setting aria roles and focusability.
         * @protected
         */

      }, {
        key: '_ensureAttributes',
        value: function _ensureAttributes() {}

        /**
         * Adds element event listeners. Called when the element
         * is being readied via `ready`. Users should override to
         * add any required element event listeners.
         * In performance critical elements, the work done here should be kept
         * to a minimum since it is done before the element is rendered. In
         * these elements, consider adding listeners asychronously so as not to
         * block render.
         * @protected
         */

      }, {
        key: '_applyListeners',
        value: function _applyListeners() {}

        /**
         * Converts a typed JavaScript value to a string.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features. To customize
         * how properties are serialized to attributes for attribute bindings and
         * `reflectToAttribute: true` properties as well as this method, override
         * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
         *
         * @param {*} value Value to deserialize
         * @return {string | undefined} Serialized value
         */

      }, {
        key: 'serialize',
        value: function serialize(value) {
          return this._serializeValue(value);
        }

        /**
         * Converts a string to a typed JavaScript value.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.  To customize
         * how attributes are deserialized to properties for in
         * `attributeChangedCallback`, override `_deserializeValue` method
         * provided by `Polymer.PropertyAccessors`.
         *
         * @param {string} value String to deserialize
         * @param {*} type Type to deserialize the string to
         * @return {*} Returns the deserialized value in the `type` given.
         */

      }, {
        key: 'deserialize',
        value: function deserialize(value, type) {
          return this._deserializeValue(value, type);
        }

        /**
         * Serializes a property to its associated attribute.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect.
         * @param {*=} value Property value to refect.
         */

      }, {
        key: 'reflectPropertyToAttribute',
        value: function reflectPropertyToAttribute(property, attribute, value) {
          this._propertyToAttribute(property, attribute, value);
        }

        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         *
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @param {Element} node Element to set attribute to.
         */

      }, {
        key: 'serializeValueToAttribute',
        value: function serializeValueToAttribute(value, attribute, node) {
          this._valueToNodeAttribute( /** @type {Element} */node || this, value, attribute);
        }

        /**
         * Copies own properties (including accessor descriptors) from a source
         * object to a target object.
         *
         * @param {Object} prototype Target object to copy properties to.
         * @param {Object} api Source object to copy properties from.
         * @return {Object} prototype object that was passed as first argument.
         */

      }, {
        key: 'extend',
        value: function extend(prototype, api) {
          if (!(prototype && api)) {
            return prototype || api;
          }
          var n$ = Object.getOwnPropertyNames(api);
          for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
            var pd = Object.getOwnPropertyDescriptor(api, n);
            if (pd) {
              Object.defineProperty(prototype, n, pd);
            }
          }
          return prototype;
        }

        /**
         * Copies props from a source object to a target object.
         *
         * Note, this method uses a simple `for...in` strategy for enumerating
         * properties.  To ensure only `ownProperties` are copied from source
         * to target and that accessor implementations are copied, use `extend`.
         *
         * @param {Object} target Target object to copy properties to.
         * @param {Object} source Source object to copy properties from.
         * @return {Object} Target object that was passed as first argument.
         */

      }, {
        key: 'mixin',
        value: function mixin(target, source) {
          for (var i in source) {
            target[i] = source[i];
          }
          return target;
        }

        /**
         * Sets the prototype of an object.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         * @param {Object} object The object on which to set the prototype.
         * @param {Object} prototype The prototype that will be set on the given
         * `object`.
         * @return {Object} Returns the given `object` with its prototype set
         * to the given `prototype` object.
         */

      }, {
        key: 'chainObject',
        value: function chainObject(object, prototype) {
          if (object && prototype && object !== prototype) {
            object.__proto__ = prototype;
          }
          return object;
        }

        /* **** Begin Template **** */

        /**
         * Calls `importNode` on the `content` of the `template` specified and
         * returns a document fragment containing the imported content.
         *
         * @param {HTMLTemplateElement} template HTML template element to instance.
         * @return {DocumentFragment} Document fragment containing the imported
         *   template content.
        */

      }, {
        key: 'instanceTemplate',
        value: function instanceTemplate(template) {
          var content = this.constructor._contentForTemplate(template);
          var dom = /** @type {DocumentFragment} */
          document.importNode(content, true);
          return dom;
        }

        /* **** Begin Events **** */

        /**
         * Dispatches a custom event with an optional detail value.
         *
         * @param {string} type Name of event type.
         * @param {*=} detail Detail value containing event-specific
         *   payload.
         * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined) }=}
         *  options Object specifying options.  These may include:
         *  `bubbles` (boolean, defaults to `true`),
         *  `cancelable` (boolean, defaults to false), and
         *  `node` on which to fire the event (HTMLElement, defaults to `this`).
         * @return {Event} The new event that was fired.
         */

      }, {
        key: 'fire',
        value: function fire(type, detail, options) {
          options = options || {};
          detail = detail === null || detail === undefined ? {} : detail;
          var event = new Event(type, {
            bubbles: options.bubbles === undefined ? true : options.bubbles,
            cancelable: Boolean(options.cancelable),
            composed: options.composed === undefined ? true : options.composed
          });
          event.detail = detail;
          var node = options.node || this;
          node.dispatchEvent(event);
          return event;
        }

        /**
         * Convenience method to add an event listener on a given element,
         * late bound to a named method on this element.
         *
         * @param {Element} node Element to add event listener to.
         * @param {string} eventName Name of event to listen for.
         * @param {string} methodName Name of handler method on `this` to call.
         */

      }, {
        key: 'listen',
        value: function listen(node, eventName, methodName) {
          node = /** @type {Element} */node || this;
          var hbl = this.__boundListeners || (this.__boundListeners = new WeakMap());
          var bl = hbl.get(node);
          if (!bl) {
            bl = {};
            hbl.set(node, bl);
          }
          var key = eventName + methodName;
          if (!bl[key]) {
            bl[key] = this._addMethodEventListenerToNode(node, eventName, methodName, this);
          }
        }

        /**
         * Convenience method to remove an event listener from a given element,
         * late bound to a named method on this element.
         *
         * @param {Element} node Element to remove event listener from.
         * @param {string} eventName Name of event to stop listening to.
         * @param {string} methodName Name of handler method on `this` to not call
         anymore.
         */

      }, {
        key: 'unlisten',
        value: function unlisten(node, eventName, methodName) {
          node = /** @type {Element} */node || this;
          var bl = this.__boundListeners && this.__boundListeners.get(node);
          var key = eventName + methodName;
          var handler = bl && bl[key];
          if (handler) {
            this._removeEventListenerFromNode(node, eventName, handler);
            bl[key] = null;
          }
        }

        /**
         * Override scrolling behavior to all direction, one direction, or none.
         *
         * Valid scroll directions:
         *   - 'all': scroll in any direction
         *   - 'x': scroll only in the 'x' direction
         *   - 'y': scroll only in the 'y' direction
         *   - 'none': disable scrolling for this node
         *
         * @param {string=} direction Direction to allow scrolling
         * Defaults to `all`.
         * @param {Element=} node Element to apply scroll direction setting.
         * Defaults to `this`.
         */

      }, {
        key: 'setScrollDirection',
        value: function setScrollDirection(direction, node) {
          Polymer.Gestures.setTouchAction( /** @type {Element} */node || this, DIRECTION_MAP[direction] || 'auto');
        }
        /* **** End Events **** */

        /**
         * Convenience method to run `querySelector` on this local DOM scope.
         *
         * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
         *
         * @param {string} slctr Selector to run on this local DOM scope
         * @return {Element} Element found by the selector, or null if not found.
         */

      }, {
        key: '$$',
        value: function $$(slctr) {
          return this.root.querySelector(slctr);
        }

        /**
         * Return the element whose local dom within which this element
         * is contained. This is a shorthand for
         * `this.getRootNode().host`.
         * @this {Element}
         */

      }, {
        key: 'distributeContent',


        /**
         * Force this element to distribute its children to its local dom.
         * This should not be necessary as of Polymer 2.0.2 and is provided only
         * for backwards compatibility.
         */
        value: function distributeContent() {
          if (window.ShadyDOM && this.shadowRoot) {
            ShadyDOM.flush();
          }
        }

        /**
         * Returns a list of nodes that are the effective childNodes. The effective
         * childNodes list is the same as the element's childNodes except that
         * any `<content>` elements are replaced with the list of nodes distributed
         * to the `<content>`, the result of its `getDistributedNodes` method.
         * @this {Element}
         * @return {Array<Node>} List of effctive child nodes.
         */

      }, {
        key: 'getEffectiveChildNodes',
        value: function getEffectiveChildNodes() {
          return (/** @type {Polymer.DomApi} */Polymer.dom(this).getEffectiveChildNodes()
          );
        }

        /**
         * Returns a list of nodes distributed within this element that match
         * `selector`. These can be dom children or elements distributed to
         * children that are insertion points.
         * @param {string} selector Selector to run.
         * @this {Element}
         * @return {Array<Node>} List of distributed elements that match selector.
         */

      }, {
        key: 'queryDistributedElements',
        value: function queryDistributedElements(selector) {
          return (/** @type {Polymer.DomApi} */Polymer.dom(this).queryDistributedElements(selector)
          );
        }

        /**
         * Returns a list of elements that are the effective children. The effective
         * children list is the same as the element's children except that
         * any `<content>` elements are replaced with the list of elements
         * distributed to the `<content>`.
         *
         * @return {Array<Node>} List of effctive children.
         */

      }, {
        key: 'getEffectiveChildren',
        value: function getEffectiveChildren() {
          var list = this.getEffectiveChildNodes();
          return list.filter(function ( /** @type {Node} */n) {
            return n.nodeType === Node.ELEMENT_NODE;
          });
        }

        /**
         * Returns a string of text content that is the concatenation of the
         * text content's of the element's effective childNodes (the elements
         * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
         *
         * @return {string} List of effctive children.
         */

      }, {
        key: 'getEffectiveTextContent',
        value: function getEffectiveTextContent() {
          var cn = this.getEffectiveChildNodes();
          var tc = [];
          for (var i = 0, c; c = cn[i]; i++) {
            if (c.nodeType !== Node.COMMENT_NODE) {
              tc.push(c.textContent);
            }
          }
          return tc.join('');
        }

        /**
         * Returns the first effective childNode within this element that
         * match `selector`. These can be dom child nodes or elements distributed
         * to children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {Object<Node>} First effective child node that matches selector.
         */

      }, {
        key: 'queryEffectiveChildren',
        value: function queryEffectiveChildren(selector) {
          var e$ = this.queryDistributedElements(selector);
          return e$ && e$[0];
        }

        /**
         * Returns a list of effective childNodes within this element that
         * match `selector`. These can be dom child nodes or elements distributed
         * to children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {Array<Node>} List of effective child nodes that match selector.
         */

      }, {
        key: 'queryAllEffectiveChildren',
        value: function queryAllEffectiveChildren(selector) {
          return this.queryDistributedElements(selector);
        }

        /**
         * Returns a list of nodes distributed to this element's `<slot>`.
         *
         * If this element contains more than one `<slot>` in its local DOM,
         * an optional selector may be passed to choose the desired content.
         *
         * @param {string=} slctr CSS selector to choose the desired
         *   `<slot>`.  Defaults to `content`.
         * @return {Array<Node>} List of distributed nodes for the `<slot>`.
         */

      }, {
        key: 'getContentChildNodes',
        value: function getContentChildNodes(slctr) {
          var content = this.root.querySelector(slctr || 'slot');
          return content ? /** @type {Polymer.DomApi} */Polymer.dom(content).getDistributedNodes() : [];
        }

        /**
         * Returns a list of element children distributed to this element's
         * `<slot>`.
         *
         * If this element contains more than one `<slot>` in its
         * local DOM, an optional selector may be passed to choose the desired
         * content.  This method differs from `getContentChildNodes` in that only
         * elements are returned.
         *
         * @param {string=} slctr CSS selector to choose the desired
         *   `<content>`.  Defaults to `content`.
         * @return {Array<HTMLElement>} List of distributed nodes for the
         *   `<slot>`.
         * @suppress {invalidCasts}
         */

      }, {
        key: 'getContentChildren',
        value: function getContentChildren(slctr) {
          return (/** @type {Array<HTMLElement>} */this.getContentChildNodes(slctr).filter(function (n) {
              return n.nodeType === Node.ELEMENT_NODE;
            })
          );
        }

        /**
         * Checks whether an element is in this element's light DOM tree.
         *
         * @param {?Node} node The element to be checked.
         * @this {Element}
         * @return {boolean} true if node is in this element's light DOM tree.
         */

      }, {
        key: 'isLightDescendant',
        value: function isLightDescendant(node) {
          return this !== node && this.contains(node) && this.getRootNode() === node.getRootNode();
        }

        /**
         * Checks whether an element is in this element's local DOM tree.
         *
         * @param {Element=} node The element to be checked.
         * @return {boolean} true if node is in this element's local DOM tree.
         */

      }, {
        key: 'isLocalDescendant',
        value: function isLocalDescendant(node) {
          return this.root === node.getRootNode();
        }

        // NOTE: should now be handled by ShadyCss library.

      }, {
        key: 'scopeSubtree',
        value: function scopeSubtree(container, shouldObserve) {} // eslint-disable-line no-unused-vars


        /**
         * Returns the computed style value for the given property.
         * @param {string} property The css property name.
         * @return {string} Returns the computed css property value for the given
         * `property`.
         */

      }, {
        key: 'getComputedStyleValue',
        value: function getComputedStyleValue(property) {
          return styleInterface.getComputedStyleValue(this, property);
        }

        // debounce

        /**
         * Call `debounce` to collapse multiple requests for a named task into
         * one invocation which is made after the wait time has elapsed with
         * no new request.  If no wait time is given, the callback will be called
         * at microtask timing (guaranteed before paint).
         *
         *     debouncedClickAction(e) {
         *       // will not call `processClick` more than once per 100ms
         *       this.debounce('click', function() {
         *        this.processClick();
         *       } 100);
         *     }
         *
         * @param {string} jobName String to indentify the debounce job.
         * @param {function()} callback Function that is called (with `this`
         *   context) when the wait time elapses.
         * @param {number} wait Optional wait time in milliseconds (ms) after the
         *   last signal that must elapse before invoking `callback`
         * @return {Object} Returns a debouncer object on which exists the
         * following methods: `isActive()` returns true if the debouncer is
         * active; `cancel()` cancels the debouncer if it is active;
         * `flush()` immediately invokes the debounced callback if the debouncer
         * is active.
         */

      }, {
        key: 'debounce',
        value: function debounce(jobName, callback, wait) {
          this._debouncers = this._debouncers || {};
          return this._debouncers[jobName] = Polymer.Debouncer.debounce(this._debouncers[jobName], wait > 0 ? Polymer.Async.timeOut.after(wait) : Polymer.Async.microTask, callback.bind(this));
        }

        /**
         * Returns whether a named debouncer is active.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {boolean} Whether the debouncer is active (has not yet fired).
         */

      }, {
        key: 'isDebouncerActive',
        value: function isDebouncerActive(jobName) {
          this._debouncers = this._debouncers || {};
          var debouncer = this._debouncers[jobName];
          return !!(debouncer && debouncer.isActive());
        }

        /**
         * Immediately calls the debouncer `callback` and inactivates it.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         */

      }, {
        key: 'flushDebouncer',
        value: function flushDebouncer(jobName) {
          this._debouncers = this._debouncers || {};
          var debouncer = this._debouncers[jobName];
          if (debouncer) {
            debouncer.flush();
          }
        }

        /**
         * Cancels an active debouncer.  The `callback` will not be called.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         */

      }, {
        key: 'cancelDebouncer',
        value: function cancelDebouncer(jobName) {
          this._debouncers = this._debouncers || {};
          var debouncer = this._debouncers[jobName];
          if (debouncer) {
            debouncer.cancel();
          }
        }

        /**
         * Runs a callback function asyncronously.
         *
         * By default (if no waitTime is specified), async callbacks are run at
         * microtask timing, which will occur before paint.
         *
         * @param {Function} callback The callback function to run, bound to `this`.
         * @param {number=} waitTime Time to wait before calling the
         *   `callback`.  If unspecified or 0, the callback will be run at microtask
         *   timing (before paint).
         * @return {number} Handle that may be used to cancel the async job.
         */

      }, {
        key: 'async',
        value: function async(callback, waitTime) {
          return waitTime > 0 ? Polymer.Async.timeOut.run(callback.bind(this), waitTime) : ~Polymer.Async.microTask.run(callback.bind(this));
        }

        /**
         * Cancels an async operation started with `async`.
         *
         * @param {number} handle Handle returned from original `async` call to
         *   cancel.
         */

      }, {
        key: 'cancelAsync',
        value: function cancelAsync(handle) {
          handle < 0 ? Polymer.Async.microTask.cancel(~handle) : Polymer.Async.timeOut.cancel(handle);
        }

        // other

        /**
         * Convenience method for creating an element and configuring it.
         *
         * @param {string} tag HTML element tag to create.
         * @param {Object} props Object of properties to configure on the
         *    instance.
         * @return {Element} Newly created and configured element.
         */

      }, {
        key: 'create',
        value: function create(tag, props) {
          var elt = document.createElement(tag);
          if (props) {
            if (elt.setProperties) {
              elt.setProperties(props);
            } else {
              for (var n in props) {
                elt[n] = props[n];
              }
            }
          }
          return elt;
        }

        /**
         * Convenience method for importing an HTML document imperatively.
         *
         * This method creates a new `<link rel="import">` element with
         * the provided URL and appends it to the document to start loading.
         * In the `onload` callback, the `import` property of the `link`
         * element will contain the imported document contents.
         *
         * @param {string} href URL to document to load.
         * @param {Function} onload Callback to notify when an import successfully
         *   loaded.
         * @param {Function} onerror Callback to notify when an import
         *   unsuccessfully loaded.
         * @param {boolean} optAsync True if the import should be loaded `async`.
         *   Defaults to `false`.
         * @return {HTMLLinkElement} The link element for the URL to be loaded.
         */

      }, {
        key: 'importHref',
        value: function importHref(href, onload, onerror, optAsync) {
          // eslint-disable-line no-unused-vars
          var loadFn = onload ? onload.bind(this) : null;
          var errorFn = onerror ? onerror.bind(this) : null;
          return Polymer.importHref(href, loadFn, errorFn, optAsync);
        }

        /**
         * Polyfill for Element.prototype.matches, which is sometimes still
         * prefixed.
         *
         * @param {string} selector Selector to test.
         * @param {Element=} node Element to test the selector against.
         * @return {boolean} Whether the element matches the selector.
         */

      }, {
        key: 'elementMatches',
        value: function elementMatches(selector, node) {
          return Polymer.dom.matchesSelector( /** @type {!Element} */node || this, selector);
        }

        /**
         * Toggles an HTML attribute on or off.
         *
         * @param {string} name HTML attribute name
         * @param {boolean=} bool Boolean to force the attribute on or off.
         *    When unspecified, the state of the attribute will be reversed.
         * @param {Element=} node Node to target.  Defaults to `this`.
         */

      }, {
        key: 'toggleAttribute',
        value: function toggleAttribute(name, bool, node) {
          node = /** @type {Element} */node || this;
          if (arguments.length == 1) {
            bool = !node.hasAttribute(name);
          }
          if (bool) {
            node.setAttribute(name, '');
          } else {
            node.removeAttribute(name);
          }
        }

        /**
         * Toggles a CSS class on or off.
         *
         * @param {string} name CSS class name
         * @param {boolean=} bool Boolean to force the class on or off.
         *    When unspecified, the state of the class will be reversed.
         * @param {Element=} node Node to target.  Defaults to `this`.
         */

      }, {
        key: 'toggleClass',
        value: function toggleClass(name, bool, node) {
          node = /** @type {Element} */node || this;
          if (arguments.length == 1) {
            bool = !node.classList.contains(name);
          }
          if (bool) {
            node.classList.add(name);
          } else {
            node.classList.remove(name);
          }
        }

        /**
         * Cross-platform helper for setting an element's CSS `transform` property.
         *
         * @param {string} transformText Transform setting.
         * @param {Element=} node Element to apply the transform to.
         * Defaults to `this`
         */

      }, {
        key: 'transform',
        value: function transform(transformText, node) {
          node = /** @type {Element} */node || this;
          node.style.webkitTransform = transformText;
          node.style.transform = transformText;
        }

        /**
         * Cross-platform helper for setting an element's CSS `translate3d`
         * property.
         *
         * @param {number} x X offset.
         * @param {number} y Y offset.
         * @param {number} z Z offset.
         * @param {Element=} node Element to apply the transform to.
         * Defaults to `this`.
         */

      }, {
        key: 'translate3d',
        value: function translate3d(x, y, z, node) {
          node = /** @type {Element} */node || this;
          this.transform('translate3d(' + x + ',' + y + ',' + z + ')', node);
        }

        /**
         * Removes an item from an array, if it exists.
         *
         * If the array is specified by path, a change notification is
         * generated, so that observers, data bindings and computed
         * properties watching that path can update.
         *
         * If the array is passed directly, **no change
         * notification is generated**.
         *
         * @param {string | !Array<number|string>} arrayOrPath Path to array from which to remove the item
         *   (or the array itself).
         * @param {*} item Item to remove.
         * @return {Array} Array containing item removed.
         */

      }, {
        key: 'arrayDelete',
        value: function arrayDelete(arrayOrPath, item) {
          var index = void 0;
          if (Array.isArray(arrayOrPath)) {
            index = arrayOrPath.indexOf(item);
            if (index >= 0) {
              return arrayOrPath.splice(index, 1);
            }
          } else {
            var arr = Polymer.Path.get(this, arrayOrPath);
            index = arr.indexOf(item);
            if (index >= 0) {
              return this.splice(arrayOrPath, index, 1);
            }
          }
          return null;
        }

        // logging

        /**
         * Facades `console.log`/`warn`/`error` as override point.
         *
         * @param {string} level One of 'log', 'warn', 'error'
         * @param {Array} args Array of strings or objects to log
         */

      }, {
        key: '_logger',
        value: function _logger(level, args) {
          var _console;

          // accept ['foo', 'bar'] and [['foo', 'bar']]
          if (Array.isArray(args) && args.length === 1) {
            args = args[0];
          }
          switch (level) {
            case 'log':
            case 'warn':
            case 'error':
              (_console = console)[level].apply(_console, _toConsumableArray(args));
          }
        }

        /**
         * Facades `console.log` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         */

      }, {
        key: '_log',
        value: function _log() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._logger('log', args);
        }

        /**
         * Facades `console.warn` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         */

      }, {
        key: '_warn',
        value: function _warn() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          this._logger('warn', args);
        }

        /**
         * Facades `console.error` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         */

      }, {
        key: '_error',
        value: function _error() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          this._logger('error', args);
        }

        /**
         * Formats a message using the element type an a method name.
         *
         * @param {string} methodName Method name to associate with message
         * @param {...*} args Array of strings or objects to log
         * @return {Array} Array with formatting information for `console`
         *   logging.
         */

      }, {
        key: '_logf',
        value: function _logf(methodName) {
          for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }

          return ['[%s::%s]', this.is, methodName].concat(args);
        }
      }, {
        key: 'domHost',
        get: function get() {
          var root = this.getRootNode();
          return root instanceof DocumentFragment ? /** @type {ShadowRoot} */root.host : root;
        }
      }]);

      return LegacyElement;
    }(legacyElementBase);

    LegacyElement.prototype.is = '';

    return LegacyElement;
  });
})();

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(48);

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(5);

__webpack_require__(38);

__webpack_require__(36);

__webpack_require__(37);

__webpack_require__(34);

(function () {
  'use strict';

  var TemplateInstanceBase = Polymer.TemplateInstanceBase; // eslint-disable-line

  /**
   * @constructor
   * @implements {Polymer_OptionalMutableData}
   * @extends {Polymer.Element}
   */
  var domRepeatBase = Polymer.OptionalMutableData(Polymer.Element);

  /**
   * The `<dom-repeat>` element will automatically stamp and binds one instance
   * of template content to each object in a user-provided array.
   * `dom-repeat` accepts an `items` property, and one instance of the template
   * is stamped for each item into the DOM at the location of the `dom-repeat`
   * element.  The `item` property will be set on each instance's binding
   * scope, thus templates should bind to sub-properties of `item`.
   *
   * Example:
   *
   * ```html
   * <dom-module id="employee-list">
   *
   *   <template>
   *
   *     <div> Employee list: </div>
   *     <template is="dom-repeat" items="{{employees}}">
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *     </template>
   *
   *   </template>
   *
   *   <script>
   *     Polymer({
   *       is: 'employee-list',
   *       ready: function() {
   *         this.employees = [
   *             {first: 'Bob', last: 'Smith'},
   *             {first: 'Sally', last: 'Johnson'},
   *             ...
   *         ];
   *       }
   *     });
   *   < /script>
   *
   * </dom-module>
   * ```
   *
   * Notifications for changes to items sub-properties will be forwarded to template
   * instances, which will update via the normal structured data notification system.
   *
   * Mutations to the `items` array itself should be made using the Array
   * mutation API's on `Polymer.Base` (`push`, `pop`, `splice`, `shift`,
   * `unshift`), and template instances will be kept in sync with the data in the
   * array.
   *
   * Events caught by event handlers within the `dom-repeat` template will be
   * decorated with a `model` property, which represents the binding scope for
   * each template instance.  The model is an instance of Polymer.Base, and should
   * be used to manipulate data on the instance, for example
   * `event.model.set('item.checked', true);`.
   *
   * Alternatively, the model for a template instance for an element stamped by
   * a `dom-repeat` can be obtained using the `modelForElement` API on the
   * `dom-repeat` that stamped it, for example
   * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
   * This may be useful for manipulating instance data of event targets obtained
   * by event handlers on parents of the `dom-repeat` (event delegation).
   *
   * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
   * `filter` and/or `sort` property.  This may be a string that names a function on
   * the host, or a function may be assigned to the property directly.  The functions
   * should implemented following the standard `Array` filter/sort API.
   *
   * In order to re-run the filter or sort functions based on changes to sub-fields
   * of `items`, the `observe` property may be set as a space-separated list of
   * `item` sub-fields that should cause a re-filter/sort when modified.  If
   * the filter or sort function depends on properties not contained in `items`,
   * the user should observe changes to those properties and call `render` to update
   * the view based on the dependency change.
   *
   * For example, for an `dom-repeat` with a filter of the following:
   *
   * ```js
   * isEngineer: function(item) {
   *     return item.type == 'engineer' || item.manager.type == 'engineer';
   * }
   * ```
   *
   * Then the `observe` property should be configured as follows:
   *
   * ```html
   * <template is="dom-repeat" items="{{employees}}"
   *           filter="isEngineer" observe="type manager.type">
   * ```
   *
   * @customElement
   * @polymer
   * @memberof Polymer
   * @extends {domRepeatBase}
   * @appliesMixin Polymer.OptionalMutableData
   * @summary Custom element for stamping instance of a template bound to
   *   items in an array.
   */

  var DomRepeat = function (_domRepeatBase) {
    _inherits(DomRepeat, _domRepeatBase);

    _createClass(DomRepeat, null, [{
      key: 'is',


      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get() {
        return 'dom-repeat';
      }
    }, {
      key: 'template',
      get: function get() {
        return null;
      }
    }, {
      key: 'properties',
      get: function get() {

        /**
         * Fired whenever DOM is added or removed by this template (by
         * default, rendering occurs lazily).  To force immediate rendering, call
         * `render`.
         *
         * @event dom-change
         */
        return {

          /**
           * An array containing items determining how many instances of the template
           * to stamp and that that each template instance should bind to.
           */
          items: {
            type: Array
          },

          /**
           * The name of the variable to add to the binding scope for the array
           * element associated with a given template instance.
           */
          as: {
            type: String,
            value: 'item'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the sorted and filtered list of rendered items.
           * Note, for the index in the `this.items` array, use the value of the
           * `itemsIndexAs` property.
           */
          indexAs: {
            type: String,
            value: 'index'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the `this.items` array. Note, for the index of
           * this instance in the sorted and filtered list of rendered items,
           * use the value of the `indexAs` property.
           */
          itemsIndexAs: {
            type: String,
            value: 'itemsIndex'
          },

          /**
           * A function that should determine the sort order of the items.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.sort`.
           * Using a sort function has no effect on the underlying `items` array.
           */
          sort: {
            type: Function,
            observer: '__sortChanged'
          },

          /**
           * A function that can be used to filter items out of the view.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.filter`.
           * Using a filter function has no effect on the underlying `items` array.
           */
          filter: {
            type: Function,
            observer: '__filterChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `observe` property
           * should be set to a space-separated list of the names of item
           * sub-fields that should trigger a re-sort or re-filter when changed.
           * These should generally be fields of `item` that the sort or filter
           * function depends on.
           */
          observe: {
            type: String,
            observer: '__observeChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `delay` property
           * determines a debounce time after a change to observed item
           * properties that must pass before the filter or sort is re-run.
           * This is useful in rate-limiting shuffing of the view when
           * item changes may be frequent.
           */
          delay: Number,

          /**
           * Count of currently rendered items after `filter` (if any) has been applied.
           * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
           * set of template instances is rendered.
           *
           */
          renderedItemCount: {
            type: Number,
            notify: true,
            readOnly: true
          },

          /**
           * Defines an initial count of template instances to render after setting
           * the `items` array, before the next paint, and puts the `dom-repeat`
           * into "chunking mode".  The remaining items will be created and rendered
           * incrementally at each animation frame therof until all instances have
           * been rendered.
           */
          initialCount: {
            type: Number,
            observer: '__initializeChunking'
          },

          /**
           * When `initialCount` is used, this property defines a frame rate to
           * target by throttling the number of instances rendered each frame to
           * not exceed the budget for the target frame rate.  Setting this to a
           * higher number will allow lower latency and higher throughput for
           * things like event handlers, but will result in a longer time for the
           * remaining items to complete rendering.
           */
          targetFramerate: {
            type: Number,
            value: 20
          },

          _targetFrameTime: {
            type: Number,
            computed: '__computeFrameTime(targetFramerate)'
          }

        };
      }
    }, {
      key: 'observers',
      get: function get() {
        return ['__itemsChanged(items.*)'];
      }
    }]);

    function DomRepeat() {
      _classCallCheck(this, DomRepeat);

      var _this = _possibleConstructorReturn(this, (DomRepeat.__proto__ || Object.getPrototypeOf(DomRepeat)).call(this));

      _this.__instances = [];
      _this.__limit = Infinity;
      _this.__pool = [];
      _this.__renderDebouncer = null;
      _this.__itemsIdxToInstIdx = {};
      _this.__chunkCount = null;
      _this.__lastChunkTime = null;
      _this.__sortFn = null;
      _this.__filterFn = null;
      _this.__observePaths = null;
      _this.__ctor = null;
      _this.__isDetached = true;
      _this.template = null;
      return _this;
    }

    _createClass(DomRepeat, [{
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        _get(DomRepeat.prototype.__proto__ || Object.getPrototypeOf(DomRepeat.prototype), 'disconnectedCallback', this).call(this);
        this.__isDetached = true;
        for (var i = 0; i < this.__instances.length; i++) {
          this.__detachInstance(i);
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        _get(DomRepeat.prototype.__proto__ || Object.getPrototypeOf(DomRepeat.prototype), 'connectedCallback', this).call(this);
        // only perform attachment if the element was previously detached.
        if (this.__isDetached) {
          this.__isDetached = false;
          var parent = this.parentNode;
          for (var i = 0; i < this.__instances.length; i++) {
            this.__attachInstance(i, parent);
          }
        }
      }
    }, {
      key: '__ensureTemplatized',
      value: function __ensureTemplatized() {
        var _this2 = this;

        // Templatizing (generating the instance constructor) needs to wait
        // until ready, since won't have its template content handed back to
        // it until then
        if (!this.__ctor) {
          var template = this.template = this.querySelector('template');
          if (!template) {
            // // Wait until childList changes and template should be there by then
            var observer = new MutationObserver(function () {
              if (_this2.querySelector('template')) {
                observer.disconnect();
                _this2.__render();
              } else {
                throw new Error('dom-repeat requires a <template> child');
              }
            });
            observer.observe(this, { childList: true });
            return false;
          }
          // Template instance props that should be excluded from forwarding
          var instanceProps = {};
          instanceProps[this.as] = true;
          instanceProps[this.indexAs] = true;
          instanceProps[this.itemsIndexAs] = true;
          this.__ctor = Polymer.Templatize.templatize(template, this, {
            mutableData: this.mutableData,
            parentModel: true,
            instanceProps: instanceProps,
            /**
             * @this {this}
             * @param {string} prop Property to set
             * @param {*} value Value to set property to
             */
            forwardHostProp: function forwardHostProp(prop, value) {
              var i$ = this.__instances;
              for (var i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
                inst.forwardHostProp(prop, value);
              }
            },
            /**
             * @this {this}
             * @param {Object} inst Instance to notify
             * @param {string} prop Property to notify
             * @param {*} value Value to notify
             */
            notifyInstanceProp: function notifyInstanceProp(inst, prop, value) {
              if (Polymer.Path.matches(this.as, prop)) {
                var idx = inst[this.itemsIndexAs];
                if (prop == this.as) {
                  this.items[idx] = value;
                }
                var path = Polymer.Path.translate(this.as, 'items.' + idx, prop);
                this.notifyPath(path, value);
              }
            }
          });
        }
        return true;
      }
    }, {
      key: '__getMethodHost',
      value: function __getMethodHost() {
        // Technically this should be the owner of the outermost template.
        // In shadow dom, this is always getRootNode().host, but we can
        // approximate this via cooperation with our dataHost always setting
        // `_methodHost` as long as there were bindings (or id's) on this
        // instance causing it to get a dataHost.
        return this.__dataHost._methodHost || this.__dataHost;
      }
    }, {
      key: '__sortChanged',
      value: function __sortChanged(sort) {
        var methodHost = this.__getMethodHost();
        this.__sortFn = sort && (typeof sort == 'function' ? sort : function () {
          return methodHost[sort].apply(methodHost, arguments);
        });
        if (this.items) {
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: '__filterChanged',
      value: function __filterChanged(filter) {
        var methodHost = this.__getMethodHost();
        this.__filterFn = filter && (typeof filter == 'function' ? filter : function () {
          return methodHost[filter].apply(methodHost, arguments);
        });
        if (this.items) {
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: '__computeFrameTime',
      value: function __computeFrameTime(rate) {
        return Math.ceil(1000 / rate);
      }
    }, {
      key: '__initializeChunking',
      value: function __initializeChunking() {
        if (this.initialCount) {
          this.__limit = this.initialCount;
          this.__chunkCount = this.initialCount;
          this.__lastChunkTime = performance.now();
        }
      }
    }, {
      key: '__tryRenderChunk',
      value: function __tryRenderChunk() {
        // Debounced so that multiple calls through `_render` between animation
        // frames only queue one new rAF (e.g. array mutation & chunked render)
        if (this.items && this.__limit < this.items.length) {
          this.__debounceRender(this.__requestRenderChunk);
        }
      }
    }, {
      key: '__requestRenderChunk',
      value: function __requestRenderChunk() {
        var _this3 = this;

        requestAnimationFrame(function () {
          return _this3.__renderChunk();
        });
      }
    }, {
      key: '__renderChunk',
      value: function __renderChunk() {
        // Simple auto chunkSize throttling algorithm based on feedback loop:
        // measure actual time between frames and scale chunk count by ratio
        // of target/actual frame time
        var currChunkTime = performance.now();
        var ratio = this._targetFrameTime / (currChunkTime - this.__lastChunkTime);
        this.__chunkCount = Math.round(this.__chunkCount * ratio) || 1;
        this.__limit += this.__chunkCount;
        this.__lastChunkTime = currChunkTime;
        this.__debounceRender(this.__render);
      }
    }, {
      key: '__observeChanged',
      value: function __observeChanged() {
        this.__observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
      }
    }, {
      key: '__itemsChanged',
      value: function __itemsChanged(change) {
        if (this.items && !Array.isArray(this.items)) {
          console.warn('dom-repeat expected array for `items`, found', this.items);
        }
        // If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
        // path to that instance synchronously (retuns false for non-item paths)
        if (!this.__handleItemPath(change.path, change.value)) {
          // Otherwise, the array was reset ('items') or spliced ('items.splices'),
          // so queue a full refresh
          this.__initializeChunking();
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: '__handleObservedPaths',
      value: function __handleObservedPaths(path) {
        if (this.__observePaths) {
          path = path.substring(path.indexOf('.') + 1);
          var paths = this.__observePaths;
          for (var i = 0; i < paths.length; i++) {
            if (path.indexOf(paths[i]) === 0) {
              this.__debounceRender(this.__render, this.delay);
              return true;
            }
          }
        }
      }

      /**
       * @param {function(this:DomRepeat)} fn Function to debounce.
       * @param {number=} delay Delay in ms to debounce by.
       */

    }, {
      key: '__debounceRender',
      value: function __debounceRender(fn) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        this.__renderDebouncer = Polymer.Debouncer.debounce(this.__renderDebouncer, delay > 0 ? Polymer.Async.timeOut.after(delay) : Polymer.Async.microTask, fn.bind(this));
        Polymer.enqueueDebouncer(this.__renderDebouncer);
      }

      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       */

    }, {
      key: 'render',
      value: function render() {
        // Queue this repeater, then flush all in order
        this.__debounceRender(this.__render);
        Polymer.flush();
      }
    }, {
      key: '__render',
      value: function __render() {
        if (!this.__ensureTemplatized()) {
          // No template found yet
          return;
        }
        this.__applyFullRefresh();
        // Reset the pool
        // TODO(kschaaf): Reuse pool across turns and nested templates
        // Now that objects/arrays are re-evaluated when set, we can safely
        // reuse pooled instances across turns, however we still need to decide
        // semantics regarding how long to hold, how many to hold, etc.
        this.__pool.length = 0;
        // Set rendered item count
        this._setRenderedItemCount(this.__instances.length);
        // Notify users
        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        }));
        // Check to see if we need to render more items
        this.__tryRenderChunk();
      }
    }, {
      key: '__applyFullRefresh',
      value: function __applyFullRefresh() {
        var _this4 = this;

        var items = this.items || [];
        var isntIdxToItemsIdx = new Array(items.length);
        for (var i = 0; i < items.length; i++) {
          isntIdxToItemsIdx[i] = i;
        }
        // Apply user filter
        if (this.__filterFn) {
          isntIdxToItemsIdx = isntIdxToItemsIdx.filter(function (i, idx, array) {
            return _this4.__filterFn(items[i], idx, array);
          });
        }
        // Apply user sort
        if (this.__sortFn) {
          isntIdxToItemsIdx.sort(function (a, b) {
            return _this4.__sortFn(items[a], items[b]);
          });
        }
        // items->inst map kept for item path forwarding
        var itemsIdxToInstIdx = this.__itemsIdxToInstIdx = {};
        var instIdx = 0;
        // Generate instances and assign items
        var limit = Math.min(isntIdxToItemsIdx.length, this.__limit);
        for (; instIdx < limit; instIdx++) {
          var inst = this.__instances[instIdx];
          var itemIdx = isntIdxToItemsIdx[instIdx];
          var item = items[itemIdx];
          itemsIdxToInstIdx[itemIdx] = instIdx;
          if (inst && instIdx < this.__limit) {
            inst._setPendingProperty(this.as, item);
            inst._setPendingProperty(this.indexAs, instIdx);
            inst._setPendingProperty(this.itemsIndexAs, itemIdx);
            inst._flushProperties();
          } else {
            this.__insertInstance(item, instIdx, itemIdx);
          }
        }
        // Remove any extra instances from previous state
        for (var _i = this.__instances.length - 1; _i >= instIdx; _i--) {
          this.__detachAndRemoveInstance(_i);
        }
      }
    }, {
      key: '__detachInstance',
      value: function __detachInstance(idx) {
        var inst = this.__instances[idx];
        for (var i = 0; i < inst.children.length; i++) {
          var el = inst.children[i];
          inst.root.appendChild(el);
        }
        return inst;
      }
    }, {
      key: '__attachInstance',
      value: function __attachInstance(idx, parent) {
        var inst = this.__instances[idx];
        parent.insertBefore(inst.root, this);
      }
    }, {
      key: '__detachAndRemoveInstance',
      value: function __detachAndRemoveInstance(idx) {
        var inst = this.__detachInstance(idx);
        if (inst) {
          this.__pool.push(inst);
        }
        this.__instances.splice(idx, 1);
      }
    }, {
      key: '__stampInstance',
      value: function __stampInstance(item, instIdx, itemIdx) {
        var model = {};
        model[this.as] = item;
        model[this.indexAs] = instIdx;
        model[this.itemsIndexAs] = itemIdx;
        return new this.__ctor(model);
      }
    }, {
      key: '__insertInstance',
      value: function __insertInstance(item, instIdx, itemIdx) {
        var inst = this.__pool.pop();
        if (inst) {
          // TODO(kschaaf): If the pool is shared across turns, hostProps
          // need to be re-set to reused instances in addition to item
          inst._setPendingProperty(this.as, item);
          inst._setPendingProperty(this.indexAs, instIdx);
          inst._setPendingProperty(this.itemsIndexAs, itemIdx);
          inst._flushProperties();
        } else {
          inst = this.__stampInstance(item, instIdx, itemIdx);
        }
        var beforeRow = this.__instances[instIdx + 1];
        var beforeNode = beforeRow ? beforeRow.children[0] : this;
        this.parentNode.insertBefore(inst.root, beforeNode);
        this.__instances[instIdx] = inst;
        return inst;
      }

      // Implements extension point from Templatize mixin

    }, {
      key: '_showHideChildren',
      value: function _showHideChildren(hidden) {
        for (var i = 0; i < this.__instances.length; i++) {
          this.__instances[i]._showHideChildren(hidden);
        }
      }

      // Called as a side effect of a host items.<key>.<path> path change,
      // responsible for notifying item.<path> changes to inst for key

    }, {
      key: '__handleItemPath',
      value: function __handleItemPath(path, value) {
        var itemsPath = path.slice(6); // 'items.'.length == 6
        var dot = itemsPath.indexOf('.');
        var itemsIdx = dot < 0 ? itemsPath : itemsPath.substring(0, dot);
        // If path was index into array...
        if (itemsIdx == parseInt(itemsIdx, 10)) {
          var itemSubPath = dot < 0 ? '' : itemsPath.substring(dot + 1);
          // If the path is observed, it will trigger a full refresh
          this.__handleObservedPaths(itemSubPath);
          // Note, even if a rull refresh is triggered, always do the path
          // notification because unless mutableData is used for dom-repeat
          // and all elements in the instance subtree, a full refresh may
          // not trigger the proper update.
          var instIdx = this.__itemsIdxToInstIdx[itemsIdx];
          var inst = this.__instances[instIdx];
          if (inst) {
            var itemPath = this.as + (itemSubPath ? '.' + itemSubPath : '');
            // This is effectively `notifyPath`, but avoids some of the overhead
            // of the public API
            inst._setPendingPropertyOrPath(itemPath, value, false, true);
            inst._flushProperties();
          }
          return true;
        }
      }

      /**
       * Returns the item associated with a given element stamped by
       * this `dom-repeat`.
       *
       * Note, to modify sub-properties of the item,
       * `modelForElement(el).set('item.<sub-prop>', value)`
       * should be used.
       *
       * @param {HTMLElement} el Element for which to return the item.
       * @return {*} Item associated with the element.
       */

    }, {
      key: 'itemForElement',
      value: function itemForElement(el) {
        var instance = this.modelForElement(el);
        return instance && instance[this.as];
      }

      /**
       * Returns the inst index for a given element stamped by this `dom-repeat`.
       * If `sort` is provided, the index will reflect the sorted order (rather
       * than the original array order).
       *
       * @param {HTMLElement} el Element for which to return the index.
       * @return {*} Row index associated with the element (note this may
       *   not correspond to the array index if a user `sort` is applied).
       */

    }, {
      key: 'indexForElement',
      value: function indexForElement(el) {
        var instance = this.modelForElement(el);
        return instance && instance[this.indexAs];
      }

      /**
       * Returns the template "model" associated with a given element, which
       * serves as the binding scope for the template instance the element is
       * contained in. A template model is an instance of `Polymer.Base`, and
       * should be used to manipulate data associated with this template instance.
       *
       * Example:
       *
       *   let model = modelForElement(el);
       *   if (model.index < 10) {
       *     model.set('item.checked', true);
       *   }
       *
       * @param {HTMLElement} el Element for which to return a template model.
       * @return {TemplateInstanceBase} Model representing the binding scope for
       *   the element.
       */

    }, {
      key: 'modelForElement',
      value: function modelForElement(el) {
        return Polymer.Templatize.modelForElement(this.template, el);
      }
    }]);

    return DomRepeat;
  }(domRepeatBase);

  customElements.define(DomRepeat.is, DomRepeat);

  Polymer.DomRepeat = DomRepeat;
})();

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

/**
 * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
 * coordinate the flow of resize events between "resizers" (elements that control the
 * size or hidden state of their children) and "resizables" (elements that need to be
 * notified when they are resized or un-hidden by their parents in order to take
 * action on their new measurements).
 *
 * Elements that perform measurement should add the `IronResizableBehavior` behavior to
 * their element definition and listen for the `iron-resize` event on themselves.
 * This event will be fired when they become showing after having been hidden,
 * when they are resized explicitly by another resizable, or when the window has been
 * resized.
 *
 * Note, the `iron-resize` event is non-bubbling.
 *
 * @polymerBehavior Polymer.IronResizableBehavior
 * @demo demo/index.html
 **/
Polymer.IronResizableBehavior = {
  properties: {
    /**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */
    _parentResizable: {
      type: Object,
      observer: '_parentResizableChanged'
    },

    /**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */
    _notifyingDescendant: {
      type: Boolean,
      value: false
    }
  },

  listeners: {
    'iron-request-resize-notifications': '_onIronRequestResizeNotifications'
  },

  created: function created() {
    // We don't really need property effects on these, and also we want them
    // to be created before the `_parentResizable` observer fires:
    this._interestedResizables = [];
    this._boundNotifyResize = this.notifyResize.bind(this);
  },

  attached: function attached() {
    this._requestResizeNotifications();
  },

  detached: function detached() {
    if (this._parentResizable) {
      this._parentResizable.stopResizeNotificationsFor(this);
    } else {
      window.removeEventListener('resize', this._boundNotifyResize);
    }

    this._parentResizable = null;
  },

  /**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */
  notifyResize: function notifyResize() {
    if (!this.isAttached) {
      return;
    }

    this._interestedResizables.forEach(function (resizable) {
      if (this.resizerShouldNotify(resizable)) {
        this._notifyDescendant(resizable);
      }
    }, this);

    this._fireResize();
  },

  /**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */
  assignParentResizable: function assignParentResizable(parentResizable) {
    this._parentResizable = parentResizable;
  },

  /**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */
  stopResizeNotificationsFor: function stopResizeNotificationsFor(target) {
    var index = this._interestedResizables.indexOf(target);

    if (index > -1) {
      this._interestedResizables.splice(index, 1);
      this.unlisten(target, 'iron-resize', '_onDescendantIronResize');
    }
  },

  /**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */
  resizerShouldNotify: function resizerShouldNotify(element) {
    return true;
  },

  _onDescendantIronResize: function _onDescendantIronResize(event) {
    if (this._notifyingDescendant) {
      event.stopPropagation();
      return;
    }

    // NOTE(cdata): In ShadowDOM, event retargeting makes echoing of the
    // otherwise non-bubbling event "just work." We do it manually here for
    // the case where Polymer is not using shadow roots for whatever reason:
    if (!Polymer.Settings.useShadow) {
      this._fireResize();
    }
  },

  _fireResize: function _fireResize() {
    this.fire('iron-resize', null, {
      node: this,
      bubbles: false
    });
  },

  _onIronRequestResizeNotifications: function _onIronRequestResizeNotifications(event) {
    var target = /** @type {!EventTarget} */Polymer.dom(event).rootTarget;
    if (target === this) {
      return;
    }

    if (this._interestedResizables.indexOf(target) === -1) {
      this._interestedResizables.push(target);
      this.listen(target, 'iron-resize', '_onDescendantIronResize');
    }

    target.assignParentResizable(this);
    this._notifyDescendant(target);

    event.stopPropagation();
  },

  _parentResizableChanged: function _parentResizableChanged(parentResizable) {
    if (parentResizable) {
      window.removeEventListener('resize', this._boundNotifyResize);
    }
  },

  _notifyDescendant: function _notifyDescendant(descendant) {
    // NOTE(cdata): In IE10, attached is fired on children first, so it's
    // important not to notify them if the parent is not attached yet (or
    // else they will get redundantly notified when the parent attaches).
    if (!this.isAttached) {
      return;
    }

    this._notifyingDescendant = true;
    descendant.notifyResize();
    this._notifyingDescendant = false;
  },

  _requestResizeNotifications: function _requestResizeNotifications() {
    if (!this.isAttached) return;

    // NOTE(valdrin) In CustomElements v1 with native HTMLImports, the order
    // of imports affects the order of `attached` callbacks (see webcomponents/custom-elements#15).
    // This might cause a child to notify parents too early (as the parent
    // still has to be upgraded), resulting in a parent not able to keep track
    // of the `_interestedResizables`. To solve this, we wait for the document
    // to be done loading before firing the event.
    if (document.readyState === 'loading') {
      var _requestResizeNotifications = this._requestResizeNotifications.bind(this);
      document.addEventListener('readystatechange', function readystatechanged() {
        document.removeEventListener('readystatechange', readystatechanged);
        _requestResizeNotifications();
      });
    } else {
      this.fire('iron-request-resize-notifications', null, {
        node: this,
        bubbles: true,
        cancelable: true
      });

      if (!this._parentResizable) {
        window.addEventListener('resize', this._boundNotifyResize);
        this.notifyResize();
      }
    }
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  /*
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var k = {};function n() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function p(a) {
    a = a.replace(aa, "").replace(ba, "");var b = q,
        c = a,
        d = new n();d.start = 0;d.end = c.length;for (var e = d, f = 0, h = c.length; f < h; f++) {
      if ("{" === c[f]) {
        e.rules || (e.rules = []);var g = e,
            m = g.rules[g.rules.length - 1] || null;e = new n();e.start = f + 1;e.parent = g;e.previous = m;g.rules.push(e);
      } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);
    }return b(d, a);
  }
  function q(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = ca(c), c = c.replace(r, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = t : c.match(da) && (a.type = u, a.keyframesName = a.selector.split(r).pop()) : a.type = 0 === c.indexOf("--") ? v : x);if (c = a.rules) for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) {
      q(f, b);
    }return a;
  }
  function ca(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
      a = c;for (c = 6 - a.length; c--;) {
        a = "0" + a;
      }return "\\" + a;
    });
  }
  function y(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var h = e.length, g; f < h && (g = e[f]); f++) {
          d = y(g, b, d);
        }
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(ea, "").replace(fa, ""), b = b.replace(ha, "").replace(ia, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var x = 1,
      u = 7,
      t = 4,
      v = 1E3,
      aa = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      ba = /@import[^;]*;/gim,
      ea = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      fa = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      ha = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      ia = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      da = /^@[^\s]*keyframes/,
      r = /\s+/g;var ja = Promise.resolve();function ka(a) {
    if (a = k[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function z(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function la(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a.a || (a.a = !0, ja.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a.a = !1;
    }));
  };var A = !(window.ShadyDOM && window.ShadyDOM.inUse),
      B;function C(a) {
    B = a && a.shimcssproperties ? !1 : A || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? B = window.ShadyCSS.nativeCss : window.ShadyCSS ? (C(window.ShadyCSS), window.ShadyCSS = void 0) : C(window.WebComponents && window.WebComponents.flags);var E = B;var F = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      G = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      ma = /@media\s(.*)/;function H(a) {
    if (!a) return "";"string" === typeof a && (a = p(a));return y(a, E);
  }function I(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = p(a.textContent));return a.__cssRules || null;
  }function J(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === t) {
        var h = a.selector.match(ma);h && (window.matchMedia(h[1]).matches || (e = !0));
      }f === x ? b(a) : c && f === u ? c(a) : f === v && (e = !0);if ((a = a.rules) && !e) {
        e = 0;f = a.length;for (var g; e < f && (g = a[e]); e++) {
          J(g, b, c, d);
        }
      }
    }
  }
  function K(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");a: {
      var d = 0;var e = c + 3;for (var f = a.length; e < f; e++) {
        if ("(" === a[e]) d++;else if (")" === a[e] && 0 === --d) break a;
      }e = -1;
    }d = a.substring(c + 4, e);c = a.substring(0, c);a = K(a.substring(e + 1), b);e = d.indexOf(",");return -1 === e ? b(c, d.trim(), "", a) : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a);
  };var na = /;\s*/m,
      oa = /^\s*(initial)|(inherit)\s*$/;function L() {
    this.a = {};
  }L.prototype.set = function (a, b) {
    a = a.trim();this.a[a] = { h: b, i: {} };
  };L.prototype.get = function (a) {
    a = a.trim();return this.a[a] || null;
  };var M = null;function N() {
    this.b = this.c = null;this.a = new L();
  }N.prototype.o = function (a) {
    a = G.test(a) || F.test(a);G.lastIndex = 0;F.lastIndex = 0;return a;
  };N.prototype.m = function (a, b) {
    a = a.content.querySelector("style");var c = null;a && (c = this.j(a, b));return c;
  };
  N.prototype.j = function (a, b) {
    b = void 0 === b ? "" : b;var c = I(a);this.l(c, b);a.textContent = H(c);return c;
  };N.prototype.f = function (a) {
    var b = this,
        c = I(a);J(c, function (a) {
      ":root" === a.selector && (a.selector = "html");b.g(a);
    });a.textContent = H(c);return c;
  };N.prototype.l = function (a, b) {
    var c = this;this.c = b;J(a, function (a) {
      c.g(a);
    });this.c = null;
  };N.prototype.g = function (a) {
    a.cssText = pa(this, a.parsedCssText);":root" === a.selector && (a.selector = ":host > *");
  };
  function pa(a, b) {
    b = b.replace(F, function (b, d, e, f) {
      return qa(a, b, d, e, f);
    });return O(a, b);
  }function O(a, b) {
    for (var c; c = G.exec(b);) {
      var d = c[0],
          e = c[1];c = c.index;var f = b.slice(0, c + d.indexOf("@apply"));b = b.slice(c + d.length);var h = P(a, f);d = void 0;var g = a;e = e.replace(na, "");var m = [];var l = g.a.get(e);l || (g.a.set(e, {}), l = g.a.get(e));if (l) for (d in g.c && (l.i[g.c] = !0), l.h) {
        g = h && h[d], l = [d, ": var(", e, "_-_", d], g && l.push(",", g), l.push(")"), m.push(l.join(""));
      }d = m.join("; ");b = "" + f + d + b;G.lastIndex = c + d.length;
    }return b;
  }
  function P(a, b) {
    b = b.split(";");for (var c, d, e = {}, f = 0, h; f < b.length; f++) {
      if (c = b[f]) if (h = c.split(":"), 1 < h.length) {
        c = h[0].trim();var g = a;d = c;h = h.slice(1).join(":");var m = oa.exec(h);m && (m[1] ? (g.b || (g.b = document.createElement("meta"), g.b.setAttribute("apply-shim-measure", ""), g.b.style.all = "initial", document.head.appendChild(g.b)), d = window.getComputedStyle(g.b).getPropertyValue(d)) : d = "apply-shim-inherit", h = d);d = h;e[c] = d;
      }
    }return e;
  }function ra(a, b) {
    if (M) for (var c in b.i) {
      c !== a.c && M(c);
    }
  }
  function qa(a, b, c, d, e) {
    d && K(d, function (b, c) {
      c && a.a.get(c) && (e = "@apply " + c + ";");
    });if (!e) return b;var f = O(a, e),
        h = b.slice(0, b.indexOf("--")),
        g = f = P(a, f),
        m = a.a.get(c),
        l = m && m.h;l ? g = Object.assign(Object.create(l), f) : a.a.set(c, g);var X = [],
        w,
        Y = !1;for (w in g) {
      var D = f[w];void 0 === D && (D = "initial");!l || w in l || (Y = !0);X.push("" + c + "_-_" + w + ": " + D);
    }Y && ra(a, m);m && (m.h = g);d && (h = b + ";" + h);return "" + h + X.join("; ") + ";";
  }N.prototype.detectMixin = N.prototype.o;N.prototype.transformStyle = N.prototype.j;
  N.prototype.transformCustomStyle = N.prototype.f;N.prototype.transformRules = N.prototype.l;N.prototype.transformRule = N.prototype.g;N.prototype.transformTemplate = N.prototype.m;N.prototype._separator = "_-_";Object.defineProperty(N.prototype, "invalidCallback", { get: function get() {
      return M;
    }, set: function set(a) {
      M = a;
    } });var Q = null,
      R = window.HTMLImports && window.HTMLImports.whenReady || null,
      S;function sa(a) {
    requestAnimationFrame(function () {
      R ? R(a) : (Q || (Q = new Promise(function (a) {
        S = a;
      }), "complete" === document.readyState ? S() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && S();
      })), Q.then(function () {
        a && a();
      }));
    });
  };var T = new N();function U() {
    var a = this;this.a = null;sa(function () {
      V(a);
    });T.invalidCallback = ka;
  }function V(a) {
    a.a || (a.a = window.ShadyCSS.CustomStyleInterface, a.a && (a.a.transformCallback = function (a) {
      T.f(a);
    }, a.a.validateCallback = function () {
      requestAnimationFrame(function () {
        a.a.enqueued && W(a);
      });
    }));
  }U.prototype.prepareTemplate = function (a, b) {
    V(this);k[b] = a;b = T.m(a, b);a._styleAst = b;
  };
  function W(a) {
    V(a);if (a.a) {
      var b = a.a.processStyles();if (a.a.enqueued) {
        for (var c = 0; c < b.length; c++) {
          var d = a.a.getStyleForCustomStyle(b[c]);d && T.f(d);
        }a.a.enqueued = !1;
      }
    }
  }U.prototype.styleSubtree = function (a, b) {
    V(this);if (b) for (var c in b) {
      null === c ? a.style.removeProperty(c) : a.style.setProperty(c, b[c]);
    }if (a.shadowRoot) for (this.styleElement(a), a = a.shadowRoot.children || a.shadowRoot.childNodes, b = 0; b < a.length; b++) {
      this.styleSubtree(a[b]);
    } else for (a = a.children || a.childNodes, b = 0; b < a.length; b++) {
      this.styleSubtree(a[b]);
    }
  };
  U.prototype.styleElement = function (a) {
    V(this);var b = a.localName,
        c;b ? -1 < b.indexOf("-") ? c = b : c = a.getAttribute && a.getAttribute("is") || "" : c = a.is;if ((b = k[c]) && !z(b)) {
      if (z(b) || b._applyShimValidatingVersion !== b._applyShimNextVersion) this.prepareTemplate(b, c), la(b);if (a = a.shadowRoot) if (a = a.querySelector("style")) a.__cssRules = b._styleAst, a.textContent = H(b._styleAst);
    }
  };U.prototype.styleDocument = function (a) {
    V(this);this.styleSubtree(document.body, a);
  };
  if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
    var Z = new U(),
        ta = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;window.ShadyCSS = { prepareTemplate: function prepareTemplate(a, b) {
        W(Z);Z.prepareTemplate(a, b);
      }, styleSubtree: function styleSubtree(a, b) {
        W(Z);Z.styleSubtree(a, b);
      }, styleElement: function styleElement(a) {
        W(Z);Z.styleElement(a);
      }, styleDocument: function styleDocument(a) {
        W(Z);Z.styleDocument(a);
      }, getComputedStyleValue: function getComputedStyleValue(a, b) {
        return (a = window.getComputedStyle(a).getPropertyValue(b)) ? a.trim() : "";
      }, nativeCss: E, nativeShadow: A };ta && (window.ShadyCSS.CustomStyleInterface = ta);
  }window.ShadyCSS.ApplyShim = T;
}).call(undefined);

//# sourceMappingURL=apply-shim.min.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(4);

__webpack_require__(36);

(function () {

  'use strict';

  // detect native touch action support

  var HAS_NATIVE_TA = typeof document.head.style.touchAction === 'string';
  var GESTURE_KEY = '__polymerGestures';
  var HANDLED_OBJ = '__polymerGesturesHandled';
  var TOUCH_ACTION = '__polymerGesturesTouchAction';
  // radius for tap and track
  var TAP_DISTANCE = 25;
  var TRACK_DISTANCE = 5;
  // number of last N track positions to keep
  var TRACK_LENGTH = 2;

  // Disabling "mouse" handlers for 2500ms is enough
  var MOUSE_TIMEOUT = 2500;
  var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'click'];
  // an array of bitmask values for mapping MouseEvent.which to MouseEvent.buttons
  var MOUSE_WHICH_TO_BUTTONS = [0, 1, 4, 2];
  var MOUSE_HAS_BUTTONS = function () {
    try {
      return new MouseEvent('test', { buttons: 1 }).buttons === 1;
    } catch (e) {
      return false;
    }
  }();

  /* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
  // check for passive event listeners
  var SUPPORTS_PASSIVE = false;
  (function () {
    try {
      var opts = Object.defineProperty({}, 'passive', { get: function get() {
          SUPPORTS_PASSIVE = true;
        } });
      window.addEventListener('test', null, opts);
      window.removeEventListener('test', null, opts);
    } catch (e) {}
  })();

  // Check for touch-only devices
  var IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);

  var GestureRecognizer = function GestureRecognizer() {}; // eslint-disable-line no-unused-vars
  GestureRecognizer.prototype.reset = function () {};
  /** @type {function(MouseEvent) | undefined} */
  GestureRecognizer.prototype.mousedown;
  /** @type {(function(MouseEvent) | undefined)} */
  GestureRecognizer.prototype.mousemove;
  /** @type {(function(MouseEvent) | undefined)} */
  GestureRecognizer.prototype.mouseup;
  /** @type {(function(TouchEvent) | undefined)} */
  GestureRecognizer.prototype.touchstart;
  /** @type {(function(TouchEvent) | undefined)} */
  GestureRecognizer.prototype.touchmove;
  /** @type {(function(TouchEvent) | undefined)} */
  GestureRecognizer.prototype.touchend;
  /** @type {(function(MouseEvent) | undefined)} */
  GestureRecognizer.prototype.click;

  // touch will make synthetic mouse events
  // `preventDefault` on touchend will cancel them,
  // but this breaks `<input>` focus and link clicks
  // disable mouse handlers for MOUSE_TIMEOUT ms after
  // a touchend to ignore synthetic mouse events
  var mouseCanceller = function mouseCanceller(mouseEvent) {
    // Check for sourceCapabilities, used to distinguish synthetic events
    // if mouseEvent did not come from a device that fires touch events,
    // it was made by a real mouse and should be counted
    // http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
    var sc = mouseEvent.sourceCapabilities;
    if (sc && !sc.firesTouchEvents) {
      return;
    }
    // skip synthetic mouse events
    mouseEvent[HANDLED_OBJ] = { skip: true };
    // disable "ghost clicks"
    if (mouseEvent.type === 'click') {
      var path = mouseEvent.composedPath && mouseEvent.composedPath();
      if (path) {
        for (var i = 0; i < path.length; i++) {
          if (path[i] === POINTERSTATE.mouse.target) {
            return;
          }
        }
      }
      mouseEvent.preventDefault();
      mouseEvent.stopPropagation();
    }
  };

  /**
   * @param {boolean=} setup True to add, false to remove.
   */
  function setupTeardownMouseCanceller(setup) {
    var events = IS_TOUCH_ONLY ? ['click'] : MOUSE_EVENTS;
    for (var i = 0, en; i < events.length; i++) {
      en = events[i];
      if (setup) {
        document.addEventListener(en, mouseCanceller, true);
      } else {
        document.removeEventListener(en, mouseCanceller, true);
      }
    }
  }

  function ignoreMouse(e) {
    if (!POINTERSTATE.mouse.mouseIgnoreJob) {
      setupTeardownMouseCanceller(true);
    }
    var unset = function unset() {
      setupTeardownMouseCanceller();
      POINTERSTATE.mouse.target = null;
      POINTERSTATE.mouse.mouseIgnoreJob = null;
    };
    POINTERSTATE.mouse.target = e.composedPath()[0];
    POINTERSTATE.mouse.mouseIgnoreJob = Polymer.Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob, Polymer.Async.timeOut.after(MOUSE_TIMEOUT), unset);
  }

  /**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */
  function hasLeftMouseButton(ev) {
    var type = ev.type;
    // exit early if the event is not a mouse event
    if (MOUSE_EVENTS.indexOf(type) === -1) {
      return false;
    }
    // ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
    // instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
    if (type === 'mousemove') {
      // allow undefined for testing events
      var buttons = ev.buttons === undefined ? 1 : ev.buttons;
      if (ev instanceof window.MouseEvent && !MOUSE_HAS_BUTTONS) {
        buttons = MOUSE_WHICH_TO_BUTTONS[ev.which] || 0;
      }
      // buttons is a bitmask, check that the left button bit is set (1)
      return Boolean(buttons & 1);
    } else {
      // allow undefined for testing events
      var button = ev.button === undefined ? 0 : ev.button;
      // ev.button is 0 in mousedown/mouseup/click for left button activation
      return button === 0;
    }
  }

  function isSyntheticClick(ev) {
    if (ev.type === 'click') {
      // ev.detail is 0 for HTMLElement.click in most browsers
      if (ev.detail === 0) {
        return true;
      }
      // in the worst case, check that the x/y position of the click is within
      // the bounding box of the target of the event
      // Thanks IE 10 >:(
      var t = Gestures._findOriginalTarget(ev);
      // make sure the target of the event is an element so we can use getBoundingClientRect,
      // if not, just assume it is a synthetic click
      if (!t.nodeType || /** @type {Element} */t.nodeType !== Node.ELEMENT_NODE) {
        return true;
      }
      var bcr = /** @type {Element} */t.getBoundingClientRect();
      // use page x/y to account for scrolling
      var x = ev.pageX,
          y = ev.pageY;
      // ev is a synthetic click if the position is outside the bounding box of the target
      return !(x >= bcr.left && x <= bcr.right && y >= bcr.top && y <= bcr.bottom);
    }
    return false;
  }

  var POINTERSTATE = {
    mouse: {
      target: null,
      mouseIgnoreJob: null
    },
    touch: {
      x: 0,
      y: 0,
      id: -1,
      scrollDecided: false
    }
  };

  function firstTouchAction(ev) {
    var ta = 'auto';
    var path = ev.composedPath && ev.composedPath();
    if (path) {
      for (var i = 0, n; i < path.length; i++) {
        n = path[i];
        if (n[TOUCH_ACTION]) {
          ta = n[TOUCH_ACTION];
          break;
        }
      }
    }
    return ta;
  }

  function trackDocument(stateObj, movefn, upfn) {
    stateObj.movefn = movefn;
    stateObj.upfn = upfn;
    document.addEventListener('mousemove', movefn);
    document.addEventListener('mouseup', upfn);
  }

  function untrackDocument(stateObj) {
    document.removeEventListener('mousemove', stateObj.movefn);
    document.removeEventListener('mouseup', stateObj.upfn);
    stateObj.movefn = null;
    stateObj.upfn = null;
  }

  // use a document-wide touchend listener to start the ghost-click prevention mechanism
  // Use passive event listeners, if supported, to not affect scrolling performance
  document.addEventListener('touchend', ignoreMouse, SUPPORTS_PASSIVE ? { passive: true } : false);

  /**
   * Module for adding listeners to a node for the following normalized
   * cross-platform "gesture" events:
   * - `down` - mouse or touch went down
   * - `up` - mouse or touch went up
   * - `tap` - mouse click or finger tap
   * - `track` - mouse drag or touch move
   *
   * @namespace
   * @memberof Polymer
   * @summary Module for adding cross-platform gesture event listeners.
   */
  var Gestures = {
    gestures: {},
    recognizers: [],

    /**
     * Finds the element rendered on the screen at the provided coordinates.
     *
     * Similar to `document.elementFromPoint`, but pierces through
     * shadow roots.
     *
     * @memberof Polymer.Gestures
     * @param {number} x Horizontal pixel coordinate
     * @param {number} y Vertical pixel coordinate
     * @return {Element} Returns the deepest shadowRoot inclusive element
     * found at the screen position given.
     */
    deepTargetFind: function deepTargetFind(x, y) {
      var node = document.elementFromPoint(x, y);
      var next = node;
      // this code path is only taken when native ShadowDOM is used
      // if there is a shadowroot, it may have a node at x/y
      // if there is not a shadowroot, exit the loop
      while (next && next.shadowRoot && !window.ShadyDOM) {
        // if there is a node at x/y in the shadowroot, look deeper
        var oldNext = next;
        next = next.shadowRoot.elementFromPoint(x, y);
        // on Safari, elementFromPoint may return the shadowRoot host
        if (oldNext === next) {
          break;
        }
        if (next) {
          node = next;
        }
      }
      return node;
    },
    /**
     * a cheaper check than ev.composedPath()[0];
     *
     * @private
     * @param {Event} ev Event.
     * @return {EventTarget} Returns the event target.
     */
    _findOriginalTarget: function _findOriginalTarget(ev) {
      // shadowdom
      if (ev.composedPath) {
        return (/** @type {EventTarget} */ev.composedPath()[0]
        );
      }
      // shadydom
      return ev.target;
    },

    /**
     * @private
     * @param {Event} ev Event.
     */
    _handleNative: function _handleNative(ev) {
      var handled = void 0;
      var type = ev.type;
      var node = ev.currentTarget;
      var gobj = node[GESTURE_KEY];
      if (!gobj) {
        return;
      }
      var gs = gobj[type];
      if (!gs) {
        return;
      }
      if (!ev[HANDLED_OBJ]) {
        ev[HANDLED_OBJ] = {};
        if (type.slice(0, 5) === 'touch') {
          ev = /** @type {TouchEvent} */ev; // eslint-disable-line no-self-assign
          var t = ev.changedTouches[0];
          if (type === 'touchstart') {
            // only handle the first finger
            if (ev.touches.length === 1) {
              POINTERSTATE.touch.id = t.identifier;
            }
          }
          if (POINTERSTATE.touch.id !== t.identifier) {
            return;
          }
          if (!HAS_NATIVE_TA) {
            if (type === 'touchstart' || type === 'touchmove') {
              Gestures._handleTouchAction(ev);
            }
          }
        }
      }
      handled = ev[HANDLED_OBJ];
      // used to ignore synthetic mouse events
      if (handled.skip) {
        return;
      }
      var recognizers = Gestures.recognizers;
      // reset recognizer state
      for (var i = 0, r; i < recognizers.length; i++) {
        r = recognizers[i];
        if (gs[r.name] && !handled[r.name]) {
          if (r.flow && r.flow.start.indexOf(ev.type) > -1 && r.reset) {
            r.reset();
          }
        }
      }
      // enforce gesture recognizer order
      for (var _i = 0, _r; _i < recognizers.length; _i++) {
        _r = recognizers[_i];
        if (gs[_r.name] && !handled[_r.name]) {
          handled[_r.name] = true;
          _r[type](ev);
        }
      }
    },

    /**
     * @private
     * @param {TouchEvent} ev Event.
     */
    _handleTouchAction: function _handleTouchAction(ev) {
      var t = ev.changedTouches[0];
      var type = ev.type;
      if (type === 'touchstart') {
        POINTERSTATE.touch.x = t.clientX;
        POINTERSTATE.touch.y = t.clientY;
        POINTERSTATE.touch.scrollDecided = false;
      } else if (type === 'touchmove') {
        if (POINTERSTATE.touch.scrollDecided) {
          return;
        }
        POINTERSTATE.touch.scrollDecided = true;
        var ta = firstTouchAction(ev);
        var prevent = false;
        var dx = Math.abs(POINTERSTATE.touch.x - t.clientX);
        var dy = Math.abs(POINTERSTATE.touch.y - t.clientY);
        if (!ev.cancelable) {
          // scrolling is happening
        } else if (ta === 'none') {
          prevent = true;
        } else if (ta === 'pan-x') {
          prevent = dy > dx;
        } else if (ta === 'pan-y') {
          prevent = dx > dy;
        }
        if (prevent) {
          ev.preventDefault();
        } else {
          Gestures.prevent('track');
        }
      }
    },

    /**
     * Adds an event listener to a node for the given gesture type.
     *
     * @memberof Polymer.Gestures
     * @param {Node} node Node to add listener on
     * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
     * @param {Function} handler Event listener function to call
     * @return {boolean} Returns true if a gesture event listener was added.
     * @this {Gestures}
     */
    addListener: function addListener(node, evType, handler) {
      if (this.gestures[evType]) {
        this._add(node, evType, handler);
        return true;
      }
      return false;
    },

    /**
     * Removes an event listener from a node for the given gesture type.
     *
     * @memberof Polymer.Gestures
     * @param {Node} node Node to remove listener from
     * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
     * @param {Function} handler Event listener function previously passed to
     *  `addListener`.
     * @return {boolean} Returns true if a gesture event listener was removed.
     * @this {Gestures}
     */
    removeListener: function removeListener(node, evType, handler) {
      if (this.gestures[evType]) {
        this._remove(node, evType, handler);
        return true;
      }
      return false;
    },

    /**
     * automate the event listeners for the native events
     *
     * @private
     * @param {HTMLElement} node Node on which to add the event.
     * @param {string} evType Event type to add.
     * @param {function(Event?)} handler Event handler function.
     * @this {Gestures}
     */
    _add: function _add(node, evType, handler) {
      var recognizer = this.gestures[evType];
      var deps = recognizer.deps;
      var name = recognizer.name;
      var gobj = node[GESTURE_KEY];
      if (!gobj) {
        node[GESTURE_KEY] = gobj = {};
      }
      for (var i = 0, dep, gd; i < deps.length; i++) {
        dep = deps[i];
        // don't add mouse handlers on iOS because they cause gray selection overlays
        if (IS_TOUCH_ONLY && MOUSE_EVENTS.indexOf(dep) > -1 && dep !== 'click') {
          continue;
        }
        gd = gobj[dep];
        if (!gd) {
          gobj[dep] = gd = { _count: 0 };
        }
        if (gd._count === 0) {
          node.addEventListener(dep, this._handleNative);
        }
        gd[name] = (gd[name] || 0) + 1;
        gd._count = (gd._count || 0) + 1;
      }
      node.addEventListener(evType, handler);
      if (recognizer.touchAction) {
        this.setTouchAction(node, recognizer.touchAction);
      }
    },

    /**
     * automate event listener removal for native events
     *
     * @private
     * @param {HTMLElement} node Node on which to remove the event.
     * @param {string} evType Event type to remove.
     * @param {function(Event?)} handler Event handler function.
     * @this {Gestures}
     */
    _remove: function _remove(node, evType, handler) {
      var recognizer = this.gestures[evType];
      var deps = recognizer.deps;
      var name = recognizer.name;
      var gobj = node[GESTURE_KEY];
      if (gobj) {
        for (var i = 0, dep, gd; i < deps.length; i++) {
          dep = deps[i];
          gd = gobj[dep];
          if (gd && gd[name]) {
            gd[name] = (gd[name] || 1) - 1;
            gd._count = (gd._count || 1) - 1;
            if (gd._count === 0) {
              node.removeEventListener(dep, this._handleNative);
            }
          }
        }
      }
      node.removeEventListener(evType, handler);
    },

    /**
     * Registers a new gesture event recognizer for adding new custom
     * gesture event types.
     *
     * @memberof Polymer.Gestures
     * @param {GestureRecognizer} recog Gesture recognizer descriptor
     * @this {Gestures}
     */
    register: function register(recog) {
      this.recognizers.push(recog);
      for (var i = 0; i < recog.emits.length; i++) {
        this.gestures[recog.emits[i]] = recog;
      }
    },

    /**
     * @private
     * @param {string} evName Event name.
     * @return {Object} Returns the gesture for the given event name.
     * @this {Gestures}
     */
    _findRecognizerByEvent: function _findRecognizerByEvent(evName) {
      for (var i = 0, r; i < this.recognizers.length; i++) {
        r = this.recognizers[i];
        for (var j = 0, n; j < r.emits.length; j++) {
          n = r.emits[j];
          if (n === evName) {
            return r;
          }
        }
      }
      return null;
    },

    /**
     * Sets scrolling direction on node.
     *
     * This value is checked on first move, thus it should be called prior to
     * adding event listeners.
     *
     * @memberof Polymer.Gestures
     * @param {Element} node Node to set touch action setting on
     * @param {string} value Touch action value
     */
    setTouchAction: function setTouchAction(node, value) {
      if (HAS_NATIVE_TA) {
        node.style.touchAction = value;
      }
      node[TOUCH_ACTION] = value;
    },

    /**
     * Dispatches an event on the `target` element of `type` with the given
     * `detail`.
     * @private
     * @param {EventTarget} target The element on which to fire an event.
     * @param {string} type The type of event to fire.
     * @param {Object=} detail The detail object to populate on the event.
     */
    _fire: function _fire(target, type, detail) {
      var ev = new Event(type, { bubbles: true, cancelable: true, composed: true });
      ev.detail = detail;
      target.dispatchEvent(ev);
      // forward `preventDefault` in a clean way
      if (ev.defaultPrevented) {
        var preventer = detail.preventer || detail.sourceEvent;
        if (preventer && preventer.preventDefault) {
          preventer.preventDefault();
        }
      }
    },

    /**
     * Prevents the dispatch and default action of the given event name.
     *
     * @memberof Polymer.Gestures
     * @param {string} evName Event name.
     * @this {Gestures}
     */
    prevent: function prevent(evName) {
      var recognizer = this._findRecognizerByEvent(evName);
      if (recognizer.info) {
        recognizer.info.prevent = true;
      }
    },

    /**
     * Reset the 2500ms timeout on processing mouse input after detecting touch input.
     *
     * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
     * This method should only be called during testing with simulated touch inputs.
     * Calling this method in production may cause duplicate taps or other Gestures.
     *
     * @memberof Polymer.Gestures
     */
    resetMouseCanceller: function resetMouseCanceller() {
      if (POINTERSTATE.mouse.mouseIgnoreJob) {
        POINTERSTATE.mouse.mouseIgnoreJob.flush();
      }
    }
  };

  /* eslint-disable valid-jsdoc */

  Gestures.register({
    name: 'downup',
    deps: ['mousedown', 'touchstart', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['mouseup', 'touchend']
    },
    emits: ['down', 'up'],

    info: {
      movefn: null,
      upfn: null
    },

    /** @this {GestureRecognizer} */
    reset: function reset() {
      untrackDocument(this.info);
    },

    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     */
    mousedown: function mousedown(e) {
      if (!hasLeftMouseButton(e)) {
        return;
      }
      var t = Gestures._findOriginalTarget(e);
      var self = this;
      var movefn = function movefn(e) {
        if (!hasLeftMouseButton(e)) {
          self._fire('up', t, e);
          untrackDocument(self.info);
        }
      };
      var upfn = function upfn(e) {
        if (hasLeftMouseButton(e)) {
          self._fire('up', t, e);
        }
        untrackDocument(self.info);
      };
      trackDocument(this.info, movefn, upfn);
      this._fire('down', t, e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     */
    touchstart: function touchstart(e) {
      this._fire('down', Gestures._findOriginalTarget(e), e.changedTouches[0], e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     */
    touchend: function touchend(e) {
      this._fire('up', Gestures._findOriginalTarget(e), e.changedTouches[0], e);
    },
    /**
     * @param {string} type
     * @param {EventTarget} target
     * @param {Event} event
     * @param {Function} preventer
     */
    _fire: function _fire(type, target, event, preventer) {
      Gestures._fire(target, type, {
        x: event.clientX,
        y: event.clientY,
        sourceEvent: event,
        preventer: preventer,
        prevent: function prevent(e) {
          return Gestures.prevent(e);
        }
      });
    }
  });

  Gestures.register({
    name: 'track',
    touchAction: 'none',
    deps: ['mousedown', 'touchstart', 'touchmove', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['mouseup', 'touchend']
    },
    emits: ['track'],

    info: {
      x: 0,
      y: 0,
      state: 'start',
      started: false,
      moves: [],
      /** @this {GestureRecognizer} */
      addMove: function addMove(move) {
        if (this.moves.length > TRACK_LENGTH) {
          this.moves.shift();
        }
        this.moves.push(move);
      },
      movefn: null,
      upfn: null,
      prevent: false
    },

    /** @this {GestureRecognizer} */
    reset: function reset() {
      this.info.state = 'start';
      this.info.started = false;
      this.info.moves = [];
      this.info.x = 0;
      this.info.y = 0;
      this.info.prevent = false;
      untrackDocument(this.info);
    },

    /**
     * @this {GestureRecognizer}
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    hasMovedEnough: function hasMovedEnough(x, y) {
      if (this.info.prevent) {
        return false;
      }
      if (this.info.started) {
        return true;
      }
      var dx = Math.abs(this.info.x - x);
      var dy = Math.abs(this.info.y - y);
      return dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE;
    },
    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     */
    mousedown: function mousedown(e) {
      if (!hasLeftMouseButton(e)) {
        return;
      }
      var t = Gestures._findOriginalTarget(e);
      var self = this;
      var movefn = function movefn(e) {
        var x = e.clientX,
            y = e.clientY;
        if (self.hasMovedEnough(x, y)) {
          // first move is 'start', subsequent moves are 'move', mouseup is 'end'
          self.info.state = self.info.started ? e.type === 'mouseup' ? 'end' : 'track' : 'start';
          if (self.info.state === 'start') {
            // if and only if tracking, always prevent tap
            Gestures.prevent('tap');
          }
          self.info.addMove({ x: x, y: y });
          if (!hasLeftMouseButton(e)) {
            // always _fire "end"
            self.info.state = 'end';
            untrackDocument(self.info);
          }
          self._fire(t, e);
          self.info.started = true;
        }
      };
      var upfn = function upfn(e) {
        if (self.info.started) {
          movefn(e);
        }

        // remove the temporary listeners
        untrackDocument(self.info);
      };
      // add temporary document listeners as mouse retargets
      trackDocument(this.info, movefn, upfn);
      this.info.x = e.clientX;
      this.info.y = e.clientY;
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     */
    touchstart: function touchstart(e) {
      var ct = e.changedTouches[0];
      this.info.x = ct.clientX;
      this.info.y = ct.clientY;
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     */
    touchmove: function touchmove(e) {
      var t = Gestures._findOriginalTarget(e);
      var ct = e.changedTouches[0];
      var x = ct.clientX,
          y = ct.clientY;
      if (this.hasMovedEnough(x, y)) {
        if (this.info.state === 'start') {
          // if and only if tracking, always prevent tap
          Gestures.prevent('tap');
        }
        this.info.addMove({ x: x, y: y });
        this._fire(t, ct);
        this.info.state = 'track';
        this.info.started = true;
      }
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     */
    touchend: function touchend(e) {
      var t = Gestures._findOriginalTarget(e);
      var ct = e.changedTouches[0];
      // only trackend if track was started and not aborted
      if (this.info.started) {
        // reset started state on up
        this.info.state = 'end';
        this.info.addMove({ x: ct.clientX, y: ct.clientY });
        this._fire(t, ct, e);
      }
    },

    /**
     * @this {GestureRecognizer}
     * @param {EventTarget} target
     * @param {Touch} touch
     */
    _fire: function _fire(target, touch) {
      var secondlast = this.info.moves[this.info.moves.length - 2];
      var lastmove = this.info.moves[this.info.moves.length - 1];
      var dx = lastmove.x - this.info.x;
      var dy = lastmove.y - this.info.y;
      var ddx = void 0,
          ddy = 0;
      if (secondlast) {
        ddx = lastmove.x - secondlast.x;
        ddy = lastmove.y - secondlast.y;
      }
      Gestures._fire(target, 'track', {
        state: this.info.state,
        x: touch.clientX,
        y: touch.clientY,
        dx: dx,
        dy: dy,
        ddx: ddx,
        ddy: ddy,
        sourceEvent: touch,
        hover: function hover() {
          return Gestures.deepTargetFind(touch.clientX, touch.clientY);
        }
      });
    }

  });

  Gestures.register({
    name: 'tap',
    deps: ['mousedown', 'click', 'touchstart', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['click', 'touchend']
    },
    emits: ['tap'],
    info: {
      x: NaN,
      y: NaN,
      prevent: false
    },
    /** @this {GestureRecognizer} */
    reset: function reset() {
      this.info.x = NaN;
      this.info.y = NaN;
      this.info.prevent = false;
    },
    /** @this {GestureRecognizer} */
    save: function save(e) {
      this.info.x = e.clientX;
      this.info.y = e.clientY;
    },
    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     */
    mousedown: function mousedown(e) {
      if (hasLeftMouseButton(e)) {
        this.save(e);
      }
    },
    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     */
    click: function click(e) {
      if (hasLeftMouseButton(e)) {
        this.forward(e);
      }
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     */
    touchstart: function touchstart(e) {
      this.save(e.changedTouches[0], e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     */
    touchend: function touchend(e) {
      this.forward(e.changedTouches[0], e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {Event} e
     * @param {Function} preventer
     */
    forward: function forward(e, preventer) {
      var dx = Math.abs(e.clientX - this.info.x);
      var dy = Math.abs(e.clientY - this.info.y);
      var t = Gestures._findOriginalTarget(e);
      // dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
      if (isNaN(dx) || isNaN(dy) || dx <= TAP_DISTANCE && dy <= TAP_DISTANCE || isSyntheticClick(e)) {
        // prevent taps from being generated if an event has canceled them
        if (!this.info.prevent) {
          Gestures._fire(t, 'tap', {
            x: e.clientX,
            y: e.clientY,
            sourceEvent: e,
            preventer: preventer
          });
        }
      }
    }
  });

  /* eslint-enable valid-jsdoc */

  /** @deprecated */
  Gestures.findOriginalTarget = Gestures._findOriginalTarget;

  /** @deprecated */
  Gestures.add = Gestures.addListener;

  /** @deprecated */
  Gestures.remove = Gestures.removeListener;

  Polymer.Gestures = Gestures;
})();

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

(function () {

  'use strict';

  // run a callback when HTMLImports are ready or immediately if
  // this api is not available.

  function whenImportsReady(cb) {
    if (window.HTMLImports) {
      HTMLImports.whenReady(cb);
    } else {
      cb();
    }
  }

  /**
   * Convenience method for importing an HTML document imperatively.
   *
   * This method creates a new `<link rel="import">` element with
   * the provided URL and appends it to the document to start loading.
   * In the `onload` callback, the `import` property of the `link`
   * element will contain the imported document contents.
   *
   * @memberof Polymer
   * @param {string} href URL to document to load.
   * @param {Function=} onload Callback to notify when an import successfully
   *   loaded.
   * @param {Function=} onerror Callback to notify when an import
   *   unsuccessfully loaded.
   * @param {boolean=} optAsync True if the import should be loaded `async`.
   *   Defaults to `false`.
   * @return {HTMLLinkElement} The link element for the URL to be loaded.
   */
  Polymer.importHref = function (href, onload, onerror, optAsync) {
    var link = /** @type {HTMLLinkElement} */
    document.head.querySelector('link[href="' + href + '"][import-href]');
    if (!link) {
      link = /** @type {HTMLLinkElement} */document.createElement('link');
      link.rel = 'import';
      link.href = href;
      link.setAttribute('import-href', '');
    }
    // always ensure link has `async` attribute if user specified one,
    // even if it was previously not async. This is considered less confusing.
    if (optAsync) {
      link.setAttribute('async', '');
    }
    // NOTE: the link may now be in 3 states: (1) pending insertion,
    // (2) inflight, (3) already laoded. In each case, we need to add
    // event listeners to process callbacks.
    var cleanup = function cleanup() {
      link.removeEventListener('load', loadListener);
      link.removeEventListener('error', errorListener);
    };
    var loadListener = function loadListener(event) {
      cleanup();
      // In case of a successful load, cache the load event on the link so
      // that it can be used to short-circuit this method in the future when
      // it is called with the same href param.
      link.__dynamicImportLoaded = true;
      if (onload) {
        whenImportsReady(function () {
          onload(event);
        });
      }
    };
    var errorListener = function errorListener(event) {
      cleanup();
      // In case of an error, remove the link from the document so that it
      // will be automatically created again the next time `importHref` is
      // called.
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      if (onerror) {
        whenImportsReady(function () {
          onerror(event);
        });
      }
    };
    link.addEventListener('load', loadListener);
    link.addEventListener('error', errorListener);
    if (link.parentNode == null) {
      document.head.appendChild(link);
      // if the link already loaded, dispatch a fake load event
      // so that listeners are called and get a proper event argument.
    } else if (link.__dynamicImportLoaded) {
      link.dispatchEvent(new Event('load'));
    }
    return link;
  };
})();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

(function () {

  'use strict';

  var scheduled = false;
  var beforeRenderQueue = [];
  var afterRenderQueue = [];

  function schedule() {
    scheduled = true;
    // before next render
    requestAnimationFrame(function () {
      scheduled = false;
      flushQueue(beforeRenderQueue);
      // after the render
      setTimeout(function () {
        runQueue(afterRenderQueue);
      });
    });
  }

  function flushQueue(queue) {
    while (queue.length) {
      callMethod(queue.shift());
    }
  }

  function runQueue(queue) {
    for (var i = 0, l = queue.length; i < l; i++) {
      callMethod(queue.shift());
    }
  }

  function callMethod(info) {
    var context = info[0];
    var callback = info[1];
    var args = info[2];
    try {
      callback.apply(context, args);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }

  function flush() {
    while (beforeRenderQueue.length || afterRenderQueue.length) {
      flushQueue(beforeRenderQueue);
      flushQueue(afterRenderQueue);
    }
    scheduled = false;
  }

  /**
   * Module for scheduling flushable pre-render and post-render tasks.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module for scheduling flushable pre-render and post-render tasks.
   */
  Polymer.RenderStatus = {

    /**
     * Enqueues a callback which will be run before the next render, at
     * `requestAnimationFrame` timing.
     *
     * This method is useful for enqueuing work that requires DOM measurement,
     * since measurement may not be reliable in custom element callbacks before
     * the first render, as well as for batching measurement tasks in general.
     *
     * Tasks in this queue may be flushed by calling `Polymer.RenderStatus.flush()`.
     *
     * @memberof Polymer.RenderStatus
     * @param {*} context Context object the callback function will be bound to
     * @param {function()} callback Callback function
     * @param {Array} args An array of arguments to call the callback function with
     */
    beforeNextRender: function beforeNextRender(context, callback, args) {
      if (!scheduled) {
        schedule();
      }
      beforeRenderQueue.push([context, callback, args]);
    },

    /**
     * Enqueues a callback which will be run after the next render, equivalent
     * to one task (`setTimeout`) after the next `requestAnimationFrame`.
     *
     * This method is useful for tuning the first-render performance of an
     * element or application by deferring non-critical work until after the
     * first paint.  Typical non-render-critical work may include adding UI
     * event listeners and aria attributes.
     *
     * @memberof Polymer.RenderStatus
     * @param {*} context Context object the callback function will be bound to
     * @param {function()} callback Callback function
     * @param {Array} args An array of arguments to call the callback function with
     */
    afterNextRender: function afterNextRender(context, callback, args) {
      if (!scheduled) {
        schedule();
      }
      afterRenderQueue.push([context, callback, args]);
    },

    /**
     * Flushes all `beforeNextRender` tasks, followed by all `afterNextRender`
     * tasks.
     *
     * @memberof Polymer.RenderStatus
     */
    flush: flush

  };
})();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  // unresolved

  function resolve() {
    document.body.removeAttribute('unresolved');
  }

  if (window.WebComponents) {
    window.addEventListener('WebComponentsReady', resolve);
  } else {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('DOMContentLoaded', resolve);
    }
  }
})();

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(0);

__webpack_require__(8);

__webpack_require__(10);

__webpack_require__(37);

(function () {
  'use strict';

  var p = Element.prototype;
  /**
   * @const {function(this:Element, string): boolean}
   */
  var normalizedMatchesSelector = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;

  /**
   * Cross-platform `element.matches` shim.
   *
   * @function matchesSelector
   * @memberof Polymer.dom
   * @param {!Element} node Node to check selector against
   * @param {string} selector Selector to match
   * @return {boolean} True if node matched selector
   */
  var matchesSelector = function matchesSelector(node, selector) {
    return normalizedMatchesSelector.call(node, selector);
  };

  /**
   * Node API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is a `Node`.
   */

  var DomApi = function () {

    /**
     * @param {Node} node Node for which to create a Polymer.dom helper object.
     */
    function DomApi(node) {
      _classCallCheck(this, DomApi);

      this.node = node;
    }

    /**
     * Returns an instance of `Polymer.FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {Function} callback Called when direct or distributed children
     *   of this element changes
     * @return {Polymer.FlattenedNodesObserver} Observer instance
     */


    _createClass(DomApi, [{
      key: 'observeNodes',
      value: function observeNodes(callback) {
        return new Polymer.FlattenedNodesObserver(this.node, callback);
      }

      /**
       * Disconnects an observer previously created via `observeNodes`
       *
       * @param {Polymer.FlattenedNodesObserver} observerHandle Observer instance
       *   to disconnect.
       */

    }, {
      key: 'unobserveNodes',
      value: function unobserveNodes(observerHandle) {
        observerHandle.disconnect();
      }

      /**
       * Provided as a backwards-compatible API only.  This method does nothing.
       */

    }, {
      key: 'notifyObserver',
      value: function notifyObserver() {}

      /**
       * Returns true if the provided node is contained with this element's
       * light-DOM children or shadow root, including any nested shadow roots
       * of children therein.
       *
       * @param {Node} node Node to test
       * @return {boolean} Returns true if the given `node` is contained within
       *   this element's light or shadow DOM.
       */

    }, {
      key: 'deepContains',
      value: function deepContains(node) {
        if (this.node.contains(node)) {
          return true;
        }
        var n = node;
        var doc = node.ownerDocument;
        // walk from node to `this` or `document`
        while (n && n !== doc && n !== this.node) {
          // use logical parentnode, or native ShadowRoot host
          n = n.parentNode || n.host;
        }
        return n === this.node;
      }

      /**
       * Returns the root node of this node.  Equivalent to `getRoodNode()`.
       *
       * @return {Node} Top most element in the dom tree in which the node
       * exists. If the node is connected to a document this is either a
       * shadowRoot or the document; otherwise, it may be the node
       * itself or a node or document fragment containing it.
       */

    }, {
      key: 'getOwnerRoot',
      value: function getOwnerRoot() {
        return this.node.getRootNode();
      }

      /**
       * For slot elements, returns the nodes assigned to the slot; otherwise
       * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
       *
       * @return {Array<Node>} Array of assigned nodes
       */

    }, {
      key: 'getDistributedNodes',
      value: function getDistributedNodes() {
        return this.node.localName === 'slot' ? this.node.assignedNodes({ flatten: true }) : [];
      }

      /**
       * Returns an array of all slots this element was distributed to.
       *
       * @return {Array<HTMLSlotElement>} Description
       */

    }, {
      key: 'getDestinationInsertionPoints',
      value: function getDestinationInsertionPoints() {
        var ip$ = [];
        var n = this.node.assignedSlot;
        while (n) {
          ip$.push(n);
          n = n.assignedSlot;
        }
        return ip$;
      }

      /**
       * Calls `importNode` on the `ownerDocument` for this node.
       *
       * @param {Node} node Node to import
       * @param {boolean} deep True if the node should be cloned deeply during
       *   import
       * @return {Node} Clone of given node imported to this owner document
       */

    }, {
      key: 'importNode',
      value: function importNode(node, deep) {
        var doc = this.node instanceof Document ? this.node : this.node.ownerDocument;
        return doc.importNode(node, deep);
      }

      /**
       * @return {Array} Returns a flattened list of all child nodes and nodes assigned
       * to child slots.
       */

    }, {
      key: 'getEffectiveChildNodes',
      value: function getEffectiveChildNodes() {
        return Polymer.FlattenedNodesObserver.getFlattenedNodes(this.node);
      }

      /**
       * Returns a filtered list of flattened child elements for this element based
       * on the given selector.
       *
       * @param {string} selector Selector to filter nodes against
       * @return {Array<HTMLElement>} List of flattened child elements
       */

    }, {
      key: 'queryDistributedElements',
      value: function queryDistributedElements(selector) {
        var c$ = this.getEffectiveChildNodes();
        var list = [];
        for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
          if (c.nodeType === Node.ELEMENT_NODE && matchesSelector(c, selector)) {
            list.push(c);
          }
        }
        return list;
      }

      /**
       * For shadow roots, returns the currently focused element within this
       * shadow root.
       *
       * @return {Node|undefined} Currently focused element
       */

    }, {
      key: 'activeElement',
      get: function get() {
        var node = this.node;
        return node._activeElement !== undefined ? node._activeElement : node.activeElement;
      }
    }]);

    return DomApi;
  }();

  function forwardMethods(proto, methods) {
    var _loop = function _loop(i) {
      var method = methods[i];
      proto[method] = /** @this {DomApi} */function () {
        return this.node[method].apply(this.node, arguments);
      };
    };

    for (var i = 0; i < methods.length; i++) {
      _loop(i);
    }
  }

  function forwardReadOnlyProperties(proto, properties) {
    var _loop2 = function _loop2(i) {
      var name = properties[i];
      Object.defineProperty(proto, name, {
        get: function get() {
          return (/** @type {DomApi} */this.node[name]
          );
        },
        configurable: true
      });
    };

    for (var i = 0; i < properties.length; i++) {
      _loop2(i);
    }
  }

  function forwardProperties(proto, properties) {
    var _loop3 = function _loop3(i) {
      var name = properties[i];
      Object.defineProperty(proto, name, {
        get: function get() {
          return (/** @type {DomApi} */this.node[name]
          );
        },
        set: function set(value) {
          /** @type {DomApi} */this.node[name] = value;
        },
        configurable: true
      });
    };

    for (var i = 0; i < properties.length; i++) {
      _loop3(i);
    }
  }

  forwardMethods(DomApi.prototype, ['cloneNode', 'appendChild', 'insertBefore', 'removeChild', 'replaceChild', 'setAttribute', 'removeAttribute', 'querySelector', 'querySelectorAll']);

  forwardReadOnlyProperties(DomApi.prototype, ['parentNode', 'firstChild', 'lastChild', 'nextSibling', 'previousSibling', 'firstElementChild', 'lastElementChild', 'nextElementSibling', 'previousElementSibling', 'childNodes', 'children', 'classList']);

  forwardProperties(DomApi.prototype, ['textContent', 'innerHTML']);

  /**
   * Event API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is an `Event`.
   */

  var EventApi = function () {
    function EventApi(event) {
      _classCallCheck(this, EventApi);

      this.event = event;
    }

    /**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {Node} The node this event was dispatched to
     */


    _createClass(EventApi, [{
      key: 'rootTarget',
      get: function get() {
        return this.event.composedPath()[0];
      }

      /**
       * Returns the local (re-targeted) target for this event.
       *
       * @return {Node} The local (re-targeted) target for this event.
       */

    }, {
      key: 'localTarget',
      get: function get() {
        return this.event.target;
      }

      /**
       * Returns the `composedPath` for this event.
       */

    }, {
      key: 'path',
      get: function get() {
        return this.event.composedPath();
      }
    }]);

    return EventApi;
  }();

  Polymer.DomApi = DomApi;

  /**
   * Legacy DOM and Event manipulation API wrapper factory used to abstract
   * differences between native Shadow DOM and "Shady DOM" when polyfilling on
   * older browsers.
   *
   * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
   * in the majority of cases simply facades directly to the standard native
   * API.
   *
   * @namespace
   * @summary Legacy DOM and Event manipulation API wrapper factory used to
   * abstract differences between native Shadow DOM and "Shady DOM."
   * @memberof Polymer
   * @param {!Node|Event} obj Node or event to operate on
   * @return {DomApi|EventApi} Wrapper providing either node API or event API
   */
  Polymer.dom = function (obj) {
    obj = obj || document;
    if (!obj.__domApi) {
      var helper = void 0;
      if (obj instanceof Event) {
        helper = new EventApi(obj);
      } else {
        helper = new DomApi(obj);
      }
      obj.__domApi = helper;
    }
    return obj.__domApi;
  };

  Polymer.dom.matchesSelector = matchesSelector;

  /**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `Polymer.enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * This method facades to `Polymer.flush`.
   *
   * @memberof Polymer.dom
   */
  Polymer.dom.flush = Polymer.flush;

  /**
   * Adds a `Polymer.Debouncer` to a list of globally flushable tasks.
   *
   * This method facades to `Polymer.enqueueDebouncer`.
   *
   * @memberof Polymer.dom
   * @param {Polymer.Debouncer} debouncer Debouncer to enqueue
   */
  Polymer.dom.addDebouncer = Polymer.enqueueDebouncer;
})();

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(55);

(function () {
  'use strict';

  /**
   * Legacy class factory and registration helper for defining Polymer
   * elements.
   *
   * This method is equivalent to
   * `customElements.define(info.is, Polymer.Class(info));`
   *
   * See `Polymer.Class` for details on valid legacy metadata format for `info`.
   *
   * @override
   * @function Polymer
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @return {!HTMLElement} Generated class
   * @suppress {duplicate, invalidCasts, checkTypes}
   */

  window.Polymer._polymerFn = function (info) {
    // if input is a `class` (aka a function with a prototype), use the prototype
    // remember that the `constructor` will never be called
    var klass = void 0;
    if (typeof info === 'function') {
      klass = info;
    } else {
      klass = Polymer.Class(info);
    }
    customElements.define(klass.is, /** @type {!HTMLElement} */klass);
    return klass;
  };
})();

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(42);

(function () {

  'use strict';

  var metaProps = {
    attached: true,
    detached: true,
    ready: true,
    created: true,
    beforeRegister: true,
    registered: true,
    attributeChanged: true,
    // meta objects
    behaviors: true

    /**
     * Applies a "legacy" behavior or array of behaviors to the provided class.
     *
     * Note: this method will automatically also apply the `Polymer.LegacyElementMixin`
     * to ensure that any legacy behaviors can rely on legacy Polymer API on
     * the underlying element.
     *
     * @param {!(Object|Array)} behaviors Behavior object or array of behaviors.
     * @param {!HTMLElement|function(new:HTMLElement)} klass Element class.
     * @return {function(new:HTMLElement)} Returns a new Element class extended by the
     * passed in `behaviors` and also by `Polymer.LegacyElementMixin`.
     * @memberof Polymer
     * @suppress {invalidCasts, checkTypes}
     */
  };function mixinBehaviors(behaviors, klass) {
    if (!behaviors) {
      return (/** @type {HTMLElement} */klass
      );
    }
    // NOTE: ensure the bahevior is extending a class with
    // legacy element api. This is necessary since behaviors expect to be able
    // to access 1.x legacy api.
    klass = Polymer.LegacyElementMixin(klass);
    if (!Array.isArray(behaviors)) {
      behaviors = [behaviors];
    }
    var superBehaviors = klass.prototype.behaviors;
    // get flattened, deduped list of behaviors *not* already on super class
    behaviors = flattenBehaviors(behaviors, null, superBehaviors);
    // mixin new behaviors
    klass = _mixinBehaviors(behaviors, klass);
    if (superBehaviors) {
      behaviors = superBehaviors.concat(behaviors);
    }
    // Set behaviors on prototype for BC...
    klass.prototype.behaviors = behaviors;
    return klass;
  }

  // NOTE:
  // 1.x
  // Behaviors were mixed in *in reverse order* and de-duped on the fly.
  // The rule was that behavior properties were copied onto the element
  // prototype if and only if the property did not already exist.
  // Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
  // (1), B, (2), A, (3) C. This means prototype properties win over
  // B properties win over A win over C. This mirrors what would happen
  // with inheritance if element extended B extended A extended C.
  //
  // Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
  // `behaviors` array was [C, A, B].
  // Behavior lifecycle methods were called in behavior array order
  // followed by the element, e.g. (1) C.created, (2) A.created,
  // (3) B.created, (4) element.created. There was no support for
  // super, and "super-behavior" methods were callable only by name).
  //
  // 2.x
  // Behaviors are made into proper mixins which live in the
  // element's prototype chain. Behaviors are placed in the element prototype
  // eldest to youngest and de-duped youngest to oldest:
  // So, first [A, B, C, A, B] becomes [C, A, B] then,
  // the element prototype becomes (oldest) (1) Polymer.Element, (2) class(C),
  // (3) class(A), (4) class(B), (5) class(Polymer({...})).
  // Result:
  // This means element properties win over B properties win over A win
  // over C. (same as 1.x)
  // If lifecycle is called (super then me), order is
  // (1) C.created, (2) A.created, (3) B.created, (4) element.created
  // (again same as 1.x)
  function _mixinBehaviors(behaviors, klass) {
    for (var i = 0; i < behaviors.length; i++) {
      var b = behaviors[i];
      if (b) {
        klass = Array.isArray(b) ? _mixinBehaviors(b, klass) : GenerateClassFromInfo(b, klass);
      }
    }
    return klass;
  }

  /**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */
  function flattenBehaviors(behaviors, list, exclude) {
    list = list || [];
    for (var i = behaviors.length - 1; i >= 0; i--) {
      var b = behaviors[i];
      if (b) {
        if (Array.isArray(b)) {
          flattenBehaviors(b, list);
        } else {
          // dedup
          if (list.indexOf(b) < 0 && (!exclude || exclude.indexOf(b) < 0)) {
            list.unshift(b);
          }
        }
      } else {
        console.warn('behavior is null, check for missing or 404 import');
      }
    }
    return list;
  }

  /**
   * @param {!PolymerInit} info Polymer info object
   * @param {function(new:HTMLElement)} Base base class to extend with info object
   * @return {function(new:HTMLElement)} Generated class
   * @suppress {checkTypes}
   * @private
   */
  function GenerateClassFromInfo(info, Base) {
    var PolymerGenerated = function (_Base) {
      _inherits(PolymerGenerated, _Base);

      function PolymerGenerated() {
        _classCallCheck(this, PolymerGenerated);

        return _possibleConstructorReturn(this, (PolymerGenerated.__proto__ || Object.getPrototypeOf(PolymerGenerated)).apply(this, arguments));
      }

      _createClass(PolymerGenerated, [{
        key: 'created',
        value: function created() {
          _get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'created', this).call(this);
          if (info.created) {
            info.created.call(this);
          }
        }
      }, {
        key: '_registered',
        value: function _registered() {
          _get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), '_registered', this).call(this);
          /* NOTE: `beforeRegister` is called here for bc, but the behavior
           is different than in 1.x. In 1.0, the method was called *after*
           mixing prototypes together but *before* processing of meta-objects.
           However, dynamic effects can still be set here and can be done either
           in `beforeRegister` or `registered`. It is no longer possible to set
           `is` in `beforeRegister` as you could in 1.x.
          */
          if (info.beforeRegister) {
            info.beforeRegister.call(Object.getPrototypeOf(this));
          }
          if (info.registered) {
            info.registered.call(Object.getPrototypeOf(this));
          }
        }
      }, {
        key: '_applyListeners',
        value: function _applyListeners() {
          _get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), '_applyListeners', this).call(this);
          if (info.listeners) {
            for (var l in info.listeners) {
              this._addMethodEventListenerToNode(this, l, info.listeners[l]);
            }
          }
        }

        // note: exception to "super then me" rule;
        // do work before calling super so that super attributes
        // only apply if not already set.

      }, {
        key: '_ensureAttributes',
        value: function _ensureAttributes() {
          if (info.hostAttributes) {
            for (var a in info.hostAttributes) {
              this._ensureAttribute(a, info.hostAttributes[a]);
            }
          }
          _get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), '_ensureAttributes', this).call(this);
        }
      }, {
        key: 'ready',
        value: function ready() {
          _get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'ready', this).call(this);
          if (info.ready) {
            info.ready.call(this);
          }
        }
      }, {
        key: 'attached',
        value: function attached() {
          _get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'attached', this).call(this);
          if (info.attached) {
            info.attached.call(this);
          }
        }
      }, {
        key: 'detached',
        value: function detached() {
          _get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'detached', this).call(this);
          if (info.detached) {
            info.detached.call(this);
          }
        }
      }, {
        key: 'attributeChanged',
        value: function attributeChanged(name, old, value) {
          _get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'attributeChanged', this).call(this, name, old, value);
          if (info.attributeChanged) {
            info.attributeChanged.call(this, name, old, value);
          }
        }
      }], [{
        key: 'properties',
        get: function get() {
          return info.properties;
        }
      }, {
        key: 'observers',
        get: function get() {
          return info.observers;
        }

        /**
         * @return {HTMLTemplateElement} template for this class
         */

      }, {
        key: 'template',
        get: function get() {
          // get template first from any imperative set in `info._template`
          return info._template ||
          // next look in dom-module associated with this element's is.
          Polymer.DomModule && Polymer.DomModule.import(this.is, 'template') ||
          // next look for superclass template (note: use superclass symbol
          // to ensure correct `this.is`)
          Base.template ||
          // finally fall back to `_template` in element's protoype.
          this.prototype._template || null;
        }
      }]);

      return PolymerGenerated;
    }(Base);

    PolymerGenerated.generatedFrom = info;

    for (var p in info) {
      // NOTE: cannot copy `metaProps` methods onto prototype at least because
      // `super.ready` must be called and is not included in the user fn.
      if (!(p in metaProps)) {
        var pd = Object.getOwnPropertyDescriptor(info, p);
        if (pd) {
          Object.defineProperty(PolymerGenerated.prototype, p, pd);
        }
      }
    }

    return PolymerGenerated;
  }

  /**
   * Generates a class that extends `Polymer.LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @return {function(new:HTMLElement)} Generated class
   * @memberof Polymer
   */
  Polymer.Class = function (info) {
    if (!info) {
      console.warn('Polymer.Class requires `info` argument');
    }
    var klass = GenerateClassFromInfo(info, info.behaviors ?
    // note: mixinBehaviors ensures `LegacyElementMixin`.
    mixinBehaviors(info.behaviors, HTMLElement) : Polymer.LegacyElementMixin(HTMLElement));
    // decorate klass with registration info
    klass.is = info.is;
    return klass;
  };

  Polymer.mixinBehaviors = mixinBehaviors;
})();

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(38);

(function () {
  'use strict';

  var TemplateInstanceBase = Polymer.TemplateInstanceBase; // eslint-disable-line

  /**
   * @typedef {{
   *   _templatizerTemplate: HTMLTemplateElement,
   *   _parentModel: boolean,
   *   _instanceProps: Object,
   *   _forwardHostPropV2: Function,
   *   _notifyInstancePropV2: Function,
   *   ctor: TemplateInstanceBase
   * }}
   */
  var TemplatizerUser = void 0; // eslint-disable-line

  /**
   * The `Polymer.Templatizer` behavior adds methods to generate instances of
   * templates that are each managed by an anonymous `Polymer.PropertyEffects`
   * instance where data-bindings in the stamped template content are bound to
   * accessors on itself.
   *
   * This behavior is provided in Polymer 2.x as a hybrid-element convenience
   * only.  For non-hybrid usage, the `Polymer.Templatize` library
   * should be used instead.
   *
   * Example:
   *
   *     // Get a template from somewhere, e.g. light DOM
   *     let template = this.querySelector('template');
   *     // Prepare the template
   *     this.templatize(template);
   *     // Instance the template with an initial data model
   *     let instance = this.stamp({myProp: 'initial'});
   *     // Insert the instance's DOM somewhere, e.g. light DOM
   *     Polymer.dom(this).appendChild(instance.root);
   *     // Changing a property on the instance will propagate to bindings
   *     // in the template
   *     instance.myProp = 'new value';
   *
   * Users of `Templatizer` may need to implement the following abstract
   * API's to determine how properties and paths from the host should be
   * forwarded into to instances:
   *
   *     _forwardHostPropV2: function(prop, value)
   *
   * Likewise, users may implement these additional abstract API's to determine
   * how instance-specific properties that change on the instance should be
   * forwarded out to the host, if necessary.
   *
   *     _notifyInstancePropV2: function(inst, prop, value)
   *
   * In order to determine which properties are instance-specific and require
   * custom notification via `_notifyInstanceProp`, define an `_instanceProps`
   * object containing keys for each instance prop, for example:
   *
   *     _instanceProps: {
   *       item: true,
   *       index: true
   *     }
   *
   * Any properties used in the template that are not defined in _instanceProp
   * will be forwarded out to the Templatize `owner` automatically.
   *
   * Users may also implement the following abstract function to show or
   * hide any DOM generated using `stamp`:
   *
   *     _showHideChildren: function(shouldHide)
   *
   * Note that some callbacks are suffixed with `V2` in the Polymer 2.x behavior
   * as the implementations will need to differ from the callbacks required
   * by the 1.x Templatizer API due to changes in the `TemplateInstance` API
   * between versions 1.x and 2.x.
   *
   * @polymerBehavior
   * @memberof Polymer
   */
  var Templatizer = {

    /**
     * Generates an anonymous `TemplateInstance` class (stored as `this.ctor`)
     * for the provided template.  This method should be called once per
     * template to prepare an element for stamping the template, followed
     * by `stamp` to create new instances of the template.
     *
     * @param {HTMLTemplateElement} template Template to prepare
     * @param {boolean=} mutableData When `true`, the generated class will skip
     *   strict dirty-checking for objects and arrays (always consider them to
     *   be "dirty"). Defaults to false.
     * @this {TemplatizerUser}
     */
    templatize: function templatize(template, mutableData) {
      this._templatizerTemplate = template;
      this.ctor = Polymer.Templatize.templatize(template, this, {
        mutableData: Boolean(mutableData),
        parentModel: this._parentModel,
        instanceProps: this._instanceProps,
        forwardHostProp: this._forwardHostPropV2,
        notifyInstanceProp: this._notifyInstancePropV2
      });
    },


    /**
     * Creates an instance of the template prepared by `templatize`.  The object
     * returned is an instance of the anonymous class generated by `templatize`
     * whose `root` property is a document fragment containing newly cloned
     * template content, and which has property accessors corresponding to
     * properties referenced in template bindings.
     *
     * @param {Object=} model Object containing initial property values to
     *   populate into the template bindings.
     * @return {TemplateInstanceBase} Returns the created instance of
     * the template prepared by `templatize`.
     * @this {TemplatizerUser}
     */
    stamp: function stamp(model) {
      return new this.ctor(model);
    },


    /**
     * Returns the template "model" (`TemplateInstance`) associated with
     * a given element, which serves as the binding scope for the template
     * instance the element is contained in.  A template model should be used
     * to manipulate data associated with this template instance.
     *
     * @param {HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     * @this {TemplatizerUser}
     */
    modelForElement: function modelForElement(el) {
      return Polymer.Templatize.modelForElement(this._templatizerTemplate, el);
    }
  };

  Polymer.Templatizer = Templatizer;
})();

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(0);

__webpack_require__(6);

__webpack_require__(34);

__webpack_require__(40);

(function () {
  'use strict';

  /**
   * @constructor
   * @extends {HTMLElement}
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_OptionalMutableData}
   * @implements {Polymer_GestureEventListeners}
   */

  var domBindBase = Polymer.GestureEventListeners(Polymer.OptionalMutableData(Polymer.PropertyEffects(HTMLElement)));

  /**
   * Custom element to allow using Polymer's template features (data binding,
   * declarative event listeners, etc.) in the main document without defining
   * a new custom element.
   *
   * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
   * element, which will immediately stamp the wrapped template into the main
   * document and bind elements to the `dom-bind` element itself as the
   * binding scope.
   *
   * @polymer
   * @customElement
   * @appliesMixin Polymer.PropertyEffects
   * @appliesMixin Polymer.OptionalMutableData
   * @appliesMixin Polymer.GestureEventListeners
   * @extends {domBindBase}
   * @memberof Polymer
   * @summary Custom element to allow using Polymer's template features (data
   *   binding, declarative event listeners, etc.) in the main document.
   */

  var DomBind = function (_domBindBase) {
    _inherits(DomBind, _domBindBase);

    _createClass(DomBind, null, [{
      key: 'observedAttributes',
      get: function get() {
        return ['mutable-data'];
      }
    }]);

    function DomBind() {
      _classCallCheck(this, DomBind);

      var _this = _possibleConstructorReturn(this, (DomBind.__proto__ || Object.getPrototypeOf(DomBind)).call(this));

      _this.root = null;
      _this.$ = null;
      _this.__children = null;
      return _this;
    }

    // assumes only one observed attribute


    _createClass(DomBind, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback() {
        this.mutableData = true;
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        this.render();
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.__removeChildren();
      }
    }, {
      key: '__insertChildren',
      value: function __insertChildren() {
        this.parentNode.insertBefore(this.root, this);
      }
    }, {
      key: '__removeChildren',
      value: function __removeChildren() {
        if (this.__children) {
          for (var i = 0; i < this.__children.length; i++) {
            this.root.appendChild(this.__children[i]);
          }
        }
      }

      /**
       * Forces the element to render its content. This is typically only
       * necessary to call if HTMLImports with the async attribute are used.
       */

    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var template = void 0;
        if (!this.__children) {
          template = /** @type {HTMLTemplateElement} */template || this.querySelector('template');
          if (!template) {
            // Wait until childList changes and template should be there by then
            var observer = new MutationObserver(function () {
              template = /** @type {HTMLTemplateElement} */_this2.querySelector('template');
              if (template) {
                observer.disconnect();
                _this2.render();
              } else {
                throw new Error('dom-bind requires a <template> child');
              }
            });
            observer.observe(this, { childList: true });
            return;
          }
          this.root = this._stampTemplate(template);
          this.$ = this.root.$;
          this.__children = [];
          for (var n = this.root.firstChild; n; n = n.nextSibling) {
            this.__children[this.__children.length] = n;
          }
          this._enableProperties();
        }
        this.__insertChildren();
        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        }));
      }
    }]);

    return DomBind;
  }(domBindBase);

  customElements.define('dom-bind', DomBind);
})();

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(5);

__webpack_require__(38);

__webpack_require__(36);

__webpack_require__(37);

(function () {
  'use strict';

  /**
   * The `<dom-if>` element will stamp a light-dom `<template>` child when
   * the `if` property becomes truthy, and the template can use Polymer
   * data-binding and declarative event features when used in the context of
   * a Polymer element's template.
   *
   * When `if` becomes falsey, the stamped content is hidden but not
   * removed from dom. When `if` subsequently becomes truthy again, the content
   * is simply re-shown. This approach is used due to its favorable performance
   * characteristics: the expense of creating template content is paid only
   * once and lazily.
   *
   * Set the `restamp` property to true to force the stamped content to be
   * created / destroyed when the `if` condition changes.
   *
   * @customElement
   * @polymer
   * @extends Polymer.Element
   * @memberof Polymer
   * @summary Custom element that conditionally stamps and hides or removes
   *   template content based on a boolean flag.
   */

  var DomIf = function (_Polymer$Element) {
    _inherits(DomIf, _Polymer$Element);

    _createClass(DomIf, null, [{
      key: 'is',


      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get() {
        return 'dom-if';
      }
    }, {
      key: 'template',
      get: function get() {
        return null;
      }
    }, {
      key: 'properties',
      get: function get() {

        return {

          /**
           * Fired whenever DOM is added or removed/hidden by this template (by
           * default, rendering occurs lazily).  To force immediate rendering, call
           * `render`.
           *
           * @event dom-change
           */

          /**
           * A boolean indicating whether this template should stamp.
           */
          if: {
            type: Boolean,
            observer: '__debounceRender'
          },

          /**
           * When true, elements will be removed from DOM and discarded when `if`
           * becomes false and re-created and added back to the DOM when `if`
           * becomes true.  By default, stamped elements will be hidden but left
           * in the DOM when `if` becomes false, which is generally results
           * in better performance.
           */
          restamp: {
            type: Boolean,
            observer: '__debounceRender'
          }

        };
      }
    }]);

    function DomIf() {
      _classCallCheck(this, DomIf);

      var _this = _possibleConstructorReturn(this, (DomIf.__proto__ || Object.getPrototypeOf(DomIf)).call(this));

      _this.__renderDebouncer = null;
      _this.__invalidProps = null;
      _this.__instance = null;
      _this._lastIf = false;
      _this.__ctor = null;
      return _this;
    }

    _createClass(DomIf, [{
      key: '__debounceRender',
      value: function __debounceRender() {
        var _this2 = this;

        // Render is async for 2 reasons:
        // 1. To eliminate dom creation trashing if user code thrashes `if` in the
        //    same turn. This was more common in 1.x where a compound computed
        //    property could result in the result changing multiple times, but is
        //    mitigated to a large extent by batched property processing in 2.x.
        // 2. To avoid double object propagation when a bag including values bound
        //    to the `if` property as well as one or more hostProps could enqueue
        //    the <dom-if> to flush before the <template>'s host property
        //    forwarding. In that scenario creating an instance would result in
        //    the host props being set once, and then the enqueued changes on the
        //    template would set properties a second time, potentially causing an
        //    object to be set to an instance more than once.  Creating the
        //    instance async from flushing data ensures this doesn't happen. If
        //    we wanted a sync option in the future, simply having <dom-if> flush
        //    (or clear) its template's pending host properties before creating
        //    the instance would also avoid the problem.
        this.__renderDebouncer = Polymer.Debouncer.debounce(this.__renderDebouncer, Polymer.Async.microTask, function () {
          return _this2.__render();
        });
        Polymer.enqueueDebouncer(this.__renderDebouncer);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        _get(DomIf.prototype.__proto__ || Object.getPrototypeOf(DomIf.prototype), 'disconnectedCallback', this).call(this);
        if (!this.parentNode || this.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE && !this.parentNode.host) {
          this.__teardownInstance();
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        _get(DomIf.prototype.__proto__ || Object.getPrototypeOf(DomIf.prototype), 'connectedCallback', this).call(this);
        if (this.if) {
          this.__debounceRender();
        }
      }

      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       */

    }, {
      key: 'render',
      value: function render() {
        Polymer.flush();
      }
    }, {
      key: '__render',
      value: function __render() {
        if (this.if) {
          if (!this.__ensureInstance()) {
            // No template found yet
            return;
          }
          this._showHideChildren();
        } else if (this.restamp) {
          this.__teardownInstance();
        }
        if (!this.restamp && this.__instance) {
          this._showHideChildren();
        }
        if (this.if != this._lastIf) {
          this.dispatchEvent(new CustomEvent('dom-change', {
            bubbles: true,
            composed: true
          }));
          this._lastIf = this.if;
        }
      }
    }, {
      key: '__ensureInstance',
      value: function __ensureInstance() {
        var _this3 = this;

        var parentNode = this.parentNode;
        // Guard against element being detached while render was queued
        if (parentNode) {
          if (!this.__ctor) {
            var template = this.querySelector('template');
            if (!template) {
              // Wait until childList changes and template should be there by then
              var observer = new MutationObserver(function () {
                if (_this3.querySelector('template')) {
                  observer.disconnect();
                  _this3.__render();
                } else {
                  throw new Error('dom-if requires a <template> child');
                }
              });
              observer.observe(this, { childList: true });
              return false;
            }
            this.__ctor = Polymer.Templatize.templatize(template, this, {
              // dom-if templatizer instances require `mutable: true`, as
              // `__syncHostProperties` relies on that behavior to sync objects
              mutableData: true,
              /**
               * @param {string} prop Property to forward
               * @param {*} value Value of property
               * @this {this}
               */
              forwardHostProp: function forwardHostProp(prop, value) {
                if (this.__instance) {
                  if (this.if) {
                    this.__instance.forwardHostProp(prop, value);
                  } else {
                    // If we have an instance but are squelching host property
                    // forwarding due to if being false, note the invalidated
                    // properties so `__syncHostProperties` can sync them the next
                    // time `if` becomes true
                    this.__invalidProps = this.__invalidProps || Object.create(null);
                    this.__invalidProps[Polymer.Path.root(prop)] = true;
                  }
                }
              }
            });
          }
          if (!this.__instance) {
            this.__instance = new this.__ctor();
            parentNode.insertBefore(this.__instance.root, this);
          } else {
            this.__syncHostProperties();
            var c$ = this.__instance.children;
            if (c$ && c$.length) {
              // Detect case where dom-if was re-attached in new position
              var lastChild = this.previousSibling;
              if (lastChild !== c$[c$.length - 1]) {
                for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
                  parentNode.insertBefore(n, this);
                }
              }
            }
          }
        }
        return true;
      }
    }, {
      key: '__syncHostProperties',
      value: function __syncHostProperties() {
        var props = this.__invalidProps;
        if (props) {
          for (var prop in props) {
            this.__instance._setPendingProperty(prop, this.__dataHost[prop]);
          }
          this.__invalidProps = null;
          this.__instance._flushProperties();
        }
      }
    }, {
      key: '__teardownInstance',
      value: function __teardownInstance() {
        if (this.__instance) {
          var c$ = this.__instance.children;
          if (c$ && c$.length) {
            // use first child parent, for case when dom-if may have been detached
            var parent = c$[0].parentNode;
            for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
              parent.removeChild(n);
            }
          }
          this.__instance = null;
          this.__invalidProps = null;
        }
      }
    }, {
      key: '_showHideChildren',
      value: function _showHideChildren() {
        var hidden = this.__hideTemplateChildren__ || !this.if;
        if (this.__instance) {
          this.__instance._showHideChildren(hidden);
        }
      }
    }]);

    return DomIf;
  }(Polymer.Element);

  customElements.define(DomIf.is, DomIf);

  Polymer.DomIf = DomIf;
})();

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(5);

__webpack_require__(1);

__webpack_require__(11);

(function () {
  'use strict';

  /**
   * Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array such that path changes to the
   * master array (at the host) element or elsewhere via data-binding) are
   * correctly propagated to items in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * @polymer
   * @mixinFunction
   * @appliesMixin Polymer.ElementMixin
   * @memberof Polymer
   * @summary Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array
   */

  var ArraySelectorMixin = Polymer.dedupingMixin(function (superClass) {

    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_ElementMixin}
     */
    var elementBase = Polymer.ElementMixin(superClass);

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_ArraySelectorMixin}
     * @unrestricted
     */

    var ArraySelectorMixin = function (_elementBase) {
      _inherits(ArraySelectorMixin, _elementBase);

      _createClass(ArraySelectorMixin, null, [{
        key: 'properties',
        get: function get() {

          return {

            /**
             * An array containing items from which selection will be made.
             */
            items: {
              type: Array
            },

            /**
             * When `true`, multiple items may be selected at once (in this case,
             * `selected` is an array of currently selected items).  When `false`,
             * only one item may be selected at a time.
             */
            multi: {
              type: Boolean,
              value: false
            },

            /**
             * When `multi` is true, this is an array that contains any selected.
             * When `multi` is false, this is the currently selected item, or `null`
             * if no item is selected.
             * @type {?(Object|Array<!Object>)}
             */
            selected: {
              type: Object,
              notify: true
            },

            /**
             * When `multi` is false, this is the currently selected item, or `null`
             * if no item is selected.
             * @type {?Object}
             */
            selectedItem: {
              type: Object,
              notify: true
            },

            /**
             * When `true`, calling `select` on an item that is already selected
             * will deselect the item.
             */
            toggle: {
              type: Boolean,
              value: false
            }

          };
        }
      }, {
        key: 'observers',
        get: function get() {
          return ['__updateSelection(multi, items.*)'];
        }
      }]);

      function ArraySelectorMixin() {
        _classCallCheck(this, ArraySelectorMixin);

        var _this = _possibleConstructorReturn(this, (ArraySelectorMixin.__proto__ || Object.getPrototypeOf(ArraySelectorMixin)).call(this));

        _this.__lastItems = null;
        _this.__lastMulti = null;
        _this.__selectedMap = null;
        return _this;
      }

      _createClass(ArraySelectorMixin, [{
        key: '__updateSelection',
        value: function __updateSelection(multi, itemsInfo) {
          var path = itemsInfo.path;
          if (path == 'items') {
            // Case 1 - items array changed, so diff against previous array and
            // deselect any removed items and adjust selected indices
            var newItems = itemsInfo.base || [];
            var lastItems = this.__lastItems;
            var lastMulti = this.__lastMulti;
            if (multi !== lastMulti) {
              this.clearSelection();
            }
            if (lastItems) {
              var splices = Polymer.ArraySplice.calculateSplices(newItems, lastItems);
              this.__applySplices(splices);
            }
            this.__lastItems = newItems;
            this.__lastMulti = multi;
          } else if (itemsInfo.path == 'items.splices') {
            // Case 2 - got specific splice information describing the array mutation:
            // deselect any removed items and adjust selected indices
            this.__applySplices(itemsInfo.value.indexSplices);
          } else {
            // Case 3 - an array element was changed, so deselect the previous
            // item for that index if it was previously selected
            var part = path.slice('items.'.length);
            var idx = parseInt(part, 10);
            if (part.indexOf('.') < 0 && part == idx) {
              this.__deselectChangedIdx(idx);
            }
          }
        }
      }, {
        key: '__applySplices',
        value: function __applySplices(splices) {
          var _this2 = this;

          var selected = this.__selectedMap;
          // Adjust selected indices and mark removals

          var _loop = function _loop(i) {
            var s = splices[i];
            selected.forEach(function (idx, item) {
              if (idx < s.index) {
                // no change
              } else if (idx >= s.index + s.removed.length) {
                // adjust index
                selected.set(item, idx + s.addedCount - s.removed.length);
              } else {
                // remove index
                selected.set(item, -1);
              }
            });
            for (var j = 0; j < s.addedCount; j++) {
              var idx = s.index + j;
              if (selected.has(_this2.items[idx])) {
                selected.set(_this2.items[idx], idx);
              }
            }
          };

          for (var i = 0; i < splices.length; i++) {
            _loop(i);
          }
          // Update linked paths
          this.__updateLinks();
          // Remove selected items that were removed from the items array
          var sidx = 0;
          selected.forEach(function (idx, item) {
            if (idx < 0) {
              if (_this2.multi) {
                _this2.splice('selected', sidx, 1);
              } else {
                _this2.selected = _this2.selectedItem = null;
              }
              selected.delete(item);
            } else {
              sidx++;
            }
          });
        }
      }, {
        key: '__updateLinks',
        value: function __updateLinks() {
          var _this3 = this;

          this.__dataLinkedPaths = {};
          if (this.multi) {
            var sidx = 0;
            this.__selectedMap.forEach(function (idx) {
              if (idx >= 0) {
                _this3.linkPaths('items.' + idx, 'selected.' + sidx++);
              }
            });
          } else {
            this.__selectedMap.forEach(function (idx) {
              _this3.linkPaths('selected', 'items.' + idx);
              _this3.linkPaths('selectedItem', 'items.' + idx);
            });
          }
        }

        /**
         * Clears the selection state.
         *
         */

      }, {
        key: 'clearSelection',
        value: function clearSelection() {
          // Unbind previous selection
          this.__dataLinkedPaths = {};
          // The selected map stores 3 pieces of information:
          // key: items array object
          // value: items array index
          // order: selected array index
          this.__selectedMap = new Map();
          // Initialize selection
          this.selected = this.multi ? [] : null;
          this.selectedItem = null;
        }

        /**
         * Returns whether the item is currently selected.
         *
         * @param {*} item Item from `items` array to test
         * @return {boolean} Whether the item is selected
         */

      }, {
        key: 'isSelected',
        value: function isSelected(item) {
          return this.__selectedMap.has(item);
        }

        /**
         * Returns whether the item is currently selected.
         *
         * @param {number} idx Index from `items` array to test
         * @return {boolean} Whether the item is selected
         */

      }, {
        key: 'isIndexSelected',
        value: function isIndexSelected(idx) {
          return this.isSelected(this.items[idx]);
        }
      }, {
        key: '__deselectChangedIdx',
        value: function __deselectChangedIdx(idx) {
          var _this4 = this;

          var sidx = this.__selectedIndexForItemIndex(idx);
          if (sidx >= 0) {
            var i = 0;
            this.__selectedMap.forEach(function (idx, item) {
              if (sidx == i++) {
                _this4.deselect(item);
              }
            });
          }
        }
      }, {
        key: '__selectedIndexForItemIndex',
        value: function __selectedIndexForItemIndex(idx) {
          var selected = this.__dataLinkedPaths['items.' + idx];
          if (selected) {
            return parseInt(selected.slice('selected.'.length), 10);
          }
        }

        /**
         * Deselects the given item if it is already selected.
         *
         * @param {*} item Item from `items` array to deselect
         */

      }, {
        key: 'deselect',
        value: function deselect(item) {
          var idx = this.__selectedMap.get(item);
          if (idx >= 0) {
            this.__selectedMap.delete(item);
            var sidx = void 0;
            if (this.multi) {
              sidx = this.__selectedIndexForItemIndex(idx);
            }
            this.__updateLinks();
            if (this.multi) {
              this.splice('selected', sidx, 1);
            } else {
              this.selected = this.selectedItem = null;
            }
          }
        }

        /**
         * Deselects the given index if it is already selected.
         *
         * @param {number} idx Index from `items` array to deselect
         */

      }, {
        key: 'deselectIndex',
        value: function deselectIndex(idx) {
          this.deselect(this.items[idx]);
        }

        /**
         * Selects the given item.  When `toggle` is true, this will automatically
         * deselect the item if already selected.
         *
         * @param {*} item Item from `items` array to select
         */

      }, {
        key: 'select',
        value: function select(item) {
          this.selectIndex(this.items.indexOf(item));
        }

        /**
         * Selects the given index.  When `toggle` is true, this will automatically
         * deselect the item if already selected.
         *
         * @param {number} idx Index from `items` array to select
         */

      }, {
        key: 'selectIndex',
        value: function selectIndex(idx) {
          var item = this.items[idx];
          if (!this.isSelected(item)) {
            if (!this.multi) {
              this.__selectedMap.clear();
            }
            this.__selectedMap.set(item, idx);
            this.__updateLinks();
            if (this.multi) {
              this.push('selected', item);
            } else {
              this.selected = this.selectedItem = item;
            }
          } else if (this.toggle) {
            this.deselectIndex(idx);
          }
        }
      }]);

      return ArraySelectorMixin;
    }(elementBase);

    return ArraySelectorMixin;
  });

  // export mixin
  Polymer.ArraySelectorMixin = ArraySelectorMixin;

  /**
   * @constructor
   * @extends {Polymer.Element}
   * @implements {Polymer_ArraySelectorMixin}
   */
  var baseArraySelector = ArraySelectorMixin(Polymer.Element);

  /**
   * Element implementing the `Polymer.ArraySelector` mixin, which records
   * dynamic associations between item paths in a master `items` array and a
   * `selected` array such that path changes to the master array (at the host)
   * element or elsewhere via data-binding) are correctly propagated to items
   * in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * Example:
   *
   * ```html
   * <dom-module id="employee-list">
   *
   *   <template>
   *
   *     <div> Employee list: </div>
   *     <template is="dom-repeat" id="employeeList" items="{{employees}}">
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *         <button on-click="toggleSelection">Select</button>
   *     </template>
   *
   *     <array-selector id="selector" items="{{employees}}" selected="{{selected}}" multi toggle></array-selector>
   *
   *     <div> Selected employees: </div>
   *     <template is="dom-repeat" items="{{selected}}">
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *     </template>
   *
   *   </template>
   *
   * </dom-module>
   * ```
   *
   * ```js
   * Polymer({
   *   is: 'employee-list',
   *   ready() {
   *     this.employees = [
   *         {first: 'Bob', last: 'Smith'},
   *         {first: 'Sally', last: 'Johnson'},
   *         ...
   *     ];
   *   },
   *   toggleSelection(e) {
   *     let item = this.$.employeeList.itemForElement(e.target);
   *     this.$.selector.select(item);
   *   }
   * });
   * ```
   *
   * @polymer
   * @customElement
   * @extends {baseArraySelector}
   * @appliesMixin Polymer.ArraySelectorMixin
   * @memberof Polymer
   * @summary Custom element that links paths between an input `items` array and
   *   an output `selected` item or array based on calls to its selection API.
   */

  var ArraySelector = function (_baseArraySelector) {
    _inherits(ArraySelector, _baseArraySelector);

    function ArraySelector() {
      _classCallCheck(this, ArraySelector);

      return _possibleConstructorReturn(this, (ArraySelector.__proto__ || Object.getPrototypeOf(ArraySelector)).apply(this, arguments));
    }

    _createClass(ArraySelector, null, [{
      key: 'is',

      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get() {
        return 'array-selector';
      }
    }]);

    return ArraySelector;
  }(baseArraySelector);

  customElements.define(ArraySelector.is, ArraySelector);
  Polymer.ArraySelector = ArraySelector;
})();

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(61);

__webpack_require__(9);

(function () {
  'use strict';

  var attr = 'include';

  var CustomStyleInterface = window.ShadyCSS.CustomStyleInterface;

  /**
   * Custom element for defining styles in the main document that can take
   * advantage of several special features of Polymer's styling system:
   *
   * - Document styles defined in a custom-style are shimmed to ensure they
   *   do not leak into local DOM when running on browsers without native
   *   Shadow DOM.
   * - Custom properties used by Polymer's shim for cross-scope styling may
   *   be defined in an custom-style. Use the :root selector to define custom
   *   properties that apply to all custom elements.
   *
   * To use, simply wrap an inline `<style>` tag in the main document whose
   * CSS uses these features with a `<custom-style>` element.
   *
   * @customElement
   * @extends HTMLElement
   * @memberof Polymer
   * @summary Custom element for defining styles in the main document that can
   *   take advantage of Polymer's style scoping and custom properties shims.
   */

  var CustomStyle = function (_HTMLElement) {
    _inherits(CustomStyle, _HTMLElement);

    function CustomStyle() {
      _classCallCheck(this, CustomStyle);

      var _this = _possibleConstructorReturn(this, (CustomStyle.__proto__ || Object.getPrototypeOf(CustomStyle)).call(this));

      _this._style = null;
      CustomStyleInterface.addCustomStyle(_this);
      return _this;
    }
    /**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */


    _createClass(CustomStyle, [{
      key: 'getStyle',
      value: function getStyle() {
        if (this._style) {
          return this._style;
        }
        var style = /** @type {HTMLStyleElement} */this.querySelector('style');
        if (!style) {
          return null;
        }
        this._style = style;
        var include = style.getAttribute(attr);
        if (include) {
          style.removeAttribute(attr);
          style.textContent = Polymer.StyleGather.cssFromModules(include) + style.textContent;
        }
        return this._style;
      }
    }]);

    return CustomStyle;
  }(HTMLElement);

  window.customElements.define('custom-style', CustomStyle);
  Polymer.CustomStyle = CustomStyle;
})();

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(62);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  /*
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var c = !(window.ShadyDOM && window.ShadyDOM.inUse),
      f;function g(a) {
    f = a && a.shimcssproperties ? !1 : c || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? f = window.ShadyCSS.nativeCss : window.ShadyCSS ? (g(window.ShadyCSS), window.ShadyCSS = void 0) : g(window.WebComponents && window.WebComponents.flags);var h = f;function k(a, b) {
    for (var d in b) {
      null === d ? a.style.removeProperty(d) : a.style.setProperty(d, b[d]);
    }
  };var l = null,
      m = window.HTMLImports && window.HTMLImports.whenReady || null,
      n;function p() {
    var a = q;requestAnimationFrame(function () {
      m ? m(a) : (l || (l = new Promise(function (a) {
        n = a;
      }), "complete" === document.readyState ? n() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && n();
      })), l.then(function () {
        a && a();
      }));
    });
  };var r = null,
      q = null;function t() {
    this.customStyles = [];this.enqueued = !1;
  }function u(a) {
    !a.enqueued && q && (a.enqueued = !0, p());
  }t.prototype.c = function (a) {
    a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), u(this));
  };t.prototype.b = function (a) {
    if (a.__shadyCSSCachedStyle) return a.__shadyCSSCachedStyle;var b;a.getStyle ? b = a.getStyle() : b = a;return b;
  };
  t.prototype.a = function () {
    for (var a = this.customStyles, b = 0; b < a.length; b++) {
      var d = a[b];if (!d.__shadyCSSCachedStyle) {
        var e = this.b(d);e && (e = e.__appliedElement || e, r && r(e), d.__shadyCSSCachedStyle = e);
      }
    }return a;
  };t.prototype.addCustomStyle = t.prototype.c;t.prototype.getStyleForCustomStyle = t.prototype.b;t.prototype.processStyles = t.prototype.a;
  Object.defineProperties(t.prototype, { transformCallback: { get: function get() {
        return r;
      }, set: function set(a) {
        r = a;
      } }, validateCallback: { get: function get() {
        return q;
      }, set: function set(a) {
        var b = !1;q || (b = !0);q = a;b && u(this);
      } } });var v = new t();window.ShadyCSS || (window.ShadyCSS = { prepareTemplate: function prepareTemplate() {}, styleSubtree: function styleSubtree(a, b) {
      v.a();k(a, b);
    }, styleElement: function styleElement() {
      v.a();
    }, styleDocument: function styleDocument(a) {
      v.a();k(document.body, a);
    }, getComputedStyleValue: function getComputedStyleValue(a, b) {
      return (a = window.getComputedStyle(a).getPropertyValue(b)) ? a.trim() : "";
    }, nativeCss: h, nativeShadow: c });window.ShadyCSS.CustomStyleInterface = v;
}).call(undefined);

//# sourceMappingURL=custom-style-interface.min.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(34);

(function () {
  'use strict';

  var mutablePropertyChange = void 0;
  (
  /** @suppress {missingProperties} */
  function () {
    mutablePropertyChange = Polymer.MutableData._mutablePropertyChange;
  })();

  /**
   * Legacy element behavior to skip strict dirty-checking for objects and arrays,
   * (always consider them to be "dirty") for use on legacy API Polymer elements.
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   *
   * In order to make the dirty check strategy configurable, see
   * `Polymer.OptionalMutableDataBehavior`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @polymerBehavior
   * @memberof Polymer
   * @summary Behavior to skip strict dirty-checking for objects and
   *   arrays
   */
  Polymer.MutableDataBehavior = {

    /**
     * Overrides `Polymer.PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */
    _shouldPropertyChange: function _shouldPropertyChange(property, value, old) {
      return mutablePropertyChange(this, property, value, old, true);
    }
  };

  /**
   * Legacy element behavior to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   *
   * While this behavior adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @polymerBehavior
   * @memberof Polymer
   * @summary Behavior to optionally skip strict dirty-checking for objects and
   *   arrays
   */
  Polymer.OptionalMutableDataBehavior = {

    properties: {
      /**
       * Instance-level flag for configuring the dirty-checking strategy
       * for this element.  When true, Objects and Arrays will skip dirty
       * checking, otherwise strict equality checking will be used.
       */
      mutableData: Boolean
    },

    /**
     * Overrides `Polymer.PropertyEffects` to skip strict equality checking
     * for Objects and Arrays.
     *
     * Pulls the value to dirty check against from the `__dataTemp` cache
     * (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @this {this}
     * @protected
     */
    _shouldPropertyChange: function _shouldPropertyChange(property, value, old) {
      return mutablePropertyChange(this, property, value, old, this.mutableData);
    }
  };
})();

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

var RegisterHtmlTemplate = __webpack_require__(26);

RegisterHtmlTemplate.register("<dom-module id=iron-a11y-announcer> <template> <style>:host{display:inline-block;position:fixed;clip:rect(0,0,0,0)}</style> <div aria-live$=[[mode]]>[[_text]]</div> </template> </dom-module>");

(function () {
  'use strict';

  Polymer.IronA11yAnnouncer = Polymer({
    is: 'iron-a11y-announcer',

    properties: {

      /**
       * The value of mode is used to set the `aria-live` attribute
       * for the element that will be announced. Valid values are: `off`,
       * `polite` and `assertive`.
       */
      mode: {
        type: String,
        value: 'polite'
      },

      _text: {
        type: String,
        value: ''
      }
    },

    created: function created() {
      if (!Polymer.IronA11yAnnouncer.instance) {
        Polymer.IronA11yAnnouncer.instance = this;
      }

      document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
    },

    /**
     * Cause a text string to be announced by screen readers.
     *
     * @param {string} text The text that should be announced.
     */
    announce: function announce(text) {
      this._text = '';
      this.async(function () {
        this._text = text;
      }, 100);
    },

    _onIronAnnounce: function _onIronAnnounce(event) {
      if (event.detail && event.detail.text) {
        this.announce(event.detail.text);
      }
    }
  });

  Polymer.IronA11yAnnouncer.instance = null;

  Polymer.IronA11yAnnouncer.requestAvailability = function () {
    if (!Polymer.IronA11yAnnouncer.instance) {
      Polymer.IronA11yAnnouncer.instance = document.createElement('iron-a11y-announcer');
    }

    document.body.appendChild(Polymer.IronA11yAnnouncer.instance);
  };
})();

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

__webpack_require__(70);

__webpack_require__(47);

__webpack_require__(71);

__webpack_require__(73);

(function () {
  'use strict';

  /** @polymerBehavior */

  Polymer.IronOverlayBehaviorImpl = {

    properties: {

      /**
       * True if the overlay is currently displayed.
       */
      opened: {
        observer: '_openedChanged',
        type: Boolean,
        value: false,
        notify: true
      },

      /**
       * True if the overlay was canceled when it was last closed.
       */
      canceled: {
        observer: '_canceledChanged',
        readOnly: true,
        type: Boolean,
        value: false
      },

      /**
       * Set to true to display a backdrop behind the overlay. It traps the focus
       * within the light DOM of the overlay.
       */
      withBackdrop: {
        observer: '_withBackdropChanged',
        type: Boolean
      },

      /**
       * Set to true to disable auto-focusing the overlay or child nodes with
       * the `autofocus` attribute` when the overlay is opened.
       */
      noAutoFocus: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable canceling the overlay with the ESC key.
       */
      noCancelOnEscKey: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable canceling the overlay by clicking outside it.
       */
      noCancelOnOutsideClick: {
        type: Boolean,
        value: false
      },

      /**
       * Contains the reason(s) this overlay was last closed (see `iron-overlay-closed`).
       * `IronOverlayBehavior` provides the `canceled` reason; implementers of the
       * behavior can provide other reasons in addition to `canceled`.
       */
      closingReason: {
        // was a getter before, but needs to be a property so other
        // behaviors can override this.
        type: Object
      },

      /**
       * Set to true to enable restoring of focus when overlay is closed.
       */
      restoreFocusOnClose: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to keep overlay always on top.
       */
      alwaysOnTop: {
        type: Boolean
      },

      /**
       * Shortcut to access to the overlay manager.
       * @private
       * @type {Polymer.IronOverlayManagerClass}
       */
      _manager: {
        type: Object,
        value: Polymer.IronOverlayManager
      },

      /**
       * The node being focused.
       * @type {?Node}
       */
      _focusedChild: {
        type: Object
      }

    },

    listeners: {
      'iron-resize': '_onIronResize'
    },

    /**
     * The backdrop element.
     * @type {Element}
     */
    get backdropElement() {
      return this._manager.backdropElement;
    },

    /**
     * Returns the node to give focus to.
     * @type {Node}
     */
    get _focusNode() {
      return this._focusedChild || Polymer.dom(this).querySelector('[autofocus]') || this;
    },

    /**
     * Array of nodes that can receive focus (overlay included), ordered by `tabindex`.
     * This is used to retrieve which is the first and last focusable nodes in order
     * to wrap the focus for overlays `with-backdrop`.
     *
     * If you know what is your content (specifically the first and last focusable children),
     * you can override this method to return only `[firstFocusable, lastFocusable];`
     * @type {Array<Node>}
     * @protected
     */
    get _focusableNodes() {
      return Polymer.IronFocusablesHelper.getTabbableNodes(this);
    },

    ready: function ready() {
      // Used to skip calls to notifyResize and refit while the overlay is animating.
      this.__isAnimating = false;
      // with-backdrop needs tabindex to be set in order to trap the focus.
      // If it is not set, IronOverlayBehavior will set it, and remove it if with-backdrop = false.
      this.__shouldRemoveTabIndex = false;
      // Used for wrapping the focus on TAB / Shift+TAB.
      this.__firstFocusableNode = this.__lastFocusableNode = null;
      // Used by __onNextAnimationFrame to cancel any previous callback.
      this.__raf = null;
      // Focused node before overlay gets opened. Can be restored on close.
      this.__restoreFocusNode = null;
      this._ensureSetup();
    },

    attached: function attached() {
      // Call _openedChanged here so that position can be computed correctly.
      if (this.opened) {
        this._openedChanged(this.opened);
      }
      this._observer = Polymer.dom(this).observeNodes(this._onNodesChange);
    },

    detached: function detached() {
      Polymer.dom(this).unobserveNodes(this._observer);
      this._observer = null;
      if (this.__raf) {
        window.cancelAnimationFrame(this.__raf);
        this.__raf = null;
      }
      this._manager.removeOverlay(this);
    },

    /**
     * Toggle the opened state of the overlay.
     */
    toggle: function toggle() {
      this._setCanceled(false);
      this.opened = !this.opened;
    },

    /**
     * Open the overlay.
     */
    open: function open() {
      this._setCanceled(false);
      this.opened = true;
    },

    /**
     * Close the overlay.
     */
    close: function close() {
      this._setCanceled(false);
      this.opened = false;
    },

    /**
     * Cancels the overlay.
     * @param {Event=} event The original event
     */
    cancel: function cancel(event) {
      var cancelEvent = this.fire('iron-overlay-canceled', event, { cancelable: true });
      if (cancelEvent.defaultPrevented) {
        return;
      }

      this._setCanceled(true);
      this.opened = false;
    },

    /**
     * Invalidates the cached tabbable nodes. To be called when any of the focusable
     * content changes (e.g. a button is disabled).
     */
    invalidateTabbables: function invalidateTabbables() {
      this.__firstFocusableNode = this.__lastFocusableNode = null;
    },

    _ensureSetup: function _ensureSetup() {
      if (this._overlaySetup) {
        return;
      }
      this._overlaySetup = true;
      this.style.outline = 'none';
      this.style.display = 'none';
    },

    /**
     * Called when `opened` changes.
     * @param {boolean=} opened
     * @protected
     */
    _openedChanged: function _openedChanged(opened) {
      if (opened) {
        this.removeAttribute('aria-hidden');
      } else {
        this.setAttribute('aria-hidden', 'true');
      }

      // Defer any animation-related code on attached
      // (_openedChanged gets called again on attached).
      if (!this.isAttached) {
        return;
      }

      this.__isAnimating = true;

      // Use requestAnimationFrame for non-blocking rendering.
      this.__onNextAnimationFrame(this.__openedChanged);
    },

    _canceledChanged: function _canceledChanged() {
      this.closingReason = this.closingReason || {};
      this.closingReason.canceled = this.canceled;
    },

    _withBackdropChanged: function _withBackdropChanged() {
      // If tabindex is already set, no need to override it.
      if (this.withBackdrop && !this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', '-1');
        this.__shouldRemoveTabIndex = true;
      } else if (this.__shouldRemoveTabIndex) {
        this.removeAttribute('tabindex');
        this.__shouldRemoveTabIndex = false;
      }
      if (this.opened && this.isAttached) {
        this._manager.trackBackdrop();
      }
    },

    /**
     * tasks which must occur before opening; e.g. making the element visible.
     * @protected
     */
    _prepareRenderOpened: function _prepareRenderOpened() {
      // Store focused node.
      this.__restoreFocusNode = this._manager.deepActiveElement;

      // Needed to calculate the size of the overlay so that transitions on its size
      // will have the correct starting points.
      this._preparePositioning();
      this.refit();
      this._finishPositioning();

      // Safari will apply the focus to the autofocus element when displayed
      // for the first time, so we make sure to return the focus where it was.
      if (this.noAutoFocus && document.activeElement === this._focusNode) {
        this._focusNode.blur();
        this.__restoreFocusNode.focus();
      }
    },

    /**
     * Tasks which cause the overlay to actually open; typically play an animation.
     * @protected
     */
    _renderOpened: function _renderOpened() {
      this._finishRenderOpened();
    },

    /**
     * Tasks which cause the overlay to actually close; typically play an animation.
     * @protected
     */
    _renderClosed: function _renderClosed() {
      this._finishRenderClosed();
    },

    /**
     * Tasks to be performed at the end of open action. Will fire `iron-overlay-opened`.
     * @protected
     */
    _finishRenderOpened: function _finishRenderOpened() {
      this.notifyResize();
      this.__isAnimating = false;

      this.fire('iron-overlay-opened');
    },

    /**
     * Tasks to be performed at the end of close action. Will fire `iron-overlay-closed`.
     * @protected
     */
    _finishRenderClosed: function _finishRenderClosed() {
      // Hide the overlay.
      this.style.display = 'none';
      // Reset z-index only at the end of the animation.
      this.style.zIndex = '';
      this.notifyResize();
      this.__isAnimating = false;
      this.fire('iron-overlay-closed', this.closingReason);
    },

    _preparePositioning: function _preparePositioning() {
      this.style.transition = this.style.webkitTransition = 'none';
      this.style.transform = this.style.webkitTransform = 'none';
      this.style.display = '';
    },

    _finishPositioning: function _finishPositioning() {
      // First, make it invisible & reactivate animations.
      this.style.display = 'none';
      // Force reflow before re-enabling animations so that they don't start.
      // Set scrollTop to itself so that Closure Compiler doesn't remove this.
      this.scrollTop = this.scrollTop;
      this.style.transition = this.style.webkitTransition = '';
      this.style.transform = this.style.webkitTransform = '';
      // Now that animations are enabled, make it visible again
      this.style.display = '';
      // Force reflow, so that following animations are properly started.
      // Set scrollTop to itself so that Closure Compiler doesn't remove this.
      this.scrollTop = this.scrollTop;
    },

    /**
     * Applies focus according to the opened state.
     * @protected
     */
    _applyFocus: function _applyFocus() {
      if (this.opened) {
        if (!this.noAutoFocus) {
          this._focusNode.focus();
        }
      } else {
        this._focusNode.blur();
        this._focusedChild = null;
        // Restore focus.
        if (this.restoreFocusOnClose && this.__restoreFocusNode) {
          this.__restoreFocusNode.focus();
        }
        this.__restoreFocusNode = null;
        // If many overlays get closed at the same time, one of them would still
        // be the currentOverlay even if already closed, and would call _applyFocus
        // infinitely, so we check for this not to be the current overlay.
        var currentOverlay = this._manager.currentOverlay();
        if (currentOverlay && this !== currentOverlay) {
          currentOverlay._applyFocus();
        }
      }
    },

    /**
     * Cancels (closes) the overlay. Call when click happens outside the overlay.
     * @param {!Event} event
     * @protected
     */
    _onCaptureClick: function _onCaptureClick(event) {
      if (!this.noCancelOnOutsideClick) {
        this.cancel(event);
      }
    },

    /**
     * Keeps track of the focused child. If withBackdrop, traps focus within overlay.
     * @param {!Event} event
     * @protected
     */
    _onCaptureFocus: function _onCaptureFocus(event) {
      if (!this.withBackdrop) {
        return;
      }
      var path = Polymer.dom(event).path;
      if (path.indexOf(this) === -1) {
        event.stopPropagation();
        this._applyFocus();
      } else {
        this._focusedChild = path[0];
      }
    },

    /**
     * Handles the ESC key event and cancels (closes) the overlay.
     * @param {!Event} event
     * @protected
     */
    _onCaptureEsc: function _onCaptureEsc(event) {
      if (!this.noCancelOnEscKey) {
        this.cancel(event);
      }
    },

    /**
     * Handles TAB key events to track focus changes.
     * Will wrap focus for overlays withBackdrop.
     * @param {!Event} event
     * @protected
     */
    _onCaptureTab: function _onCaptureTab(event) {
      if (!this.withBackdrop) {
        return;
      }
      this.__ensureFirstLastFocusables();
      // TAB wraps from last to first focusable.
      // Shift + TAB wraps from first to last focusable.
      var shift = event.shiftKey;
      var nodeToCheck = shift ? this.__firstFocusableNode : this.__lastFocusableNode;
      var nodeToSet = shift ? this.__lastFocusableNode : this.__firstFocusableNode;
      var shouldWrap = false;
      if (nodeToCheck === nodeToSet) {
        // If nodeToCheck is the same as nodeToSet, it means we have an overlay
        // with 0 or 1 focusables; in either case we still need to trap the
        // focus within the overlay.
        shouldWrap = true;
      } else {
        // In dom=shadow, the manager will receive focus changes on the main
        // root but not the ones within other shadow roots, so we can't rely on
        // _focusedChild, but we should check the deepest active element.
        var focusedNode = this._manager.deepActiveElement;
        // If the active element is not the nodeToCheck but the overlay itself,
        // it means the focus is about to go outside the overlay, hence we
        // should prevent that (e.g. user opens the overlay and hit Shift+TAB).
        shouldWrap = focusedNode === nodeToCheck || focusedNode === this;
      }

      if (shouldWrap) {
        // When the overlay contains the last focusable element of the document
        // and it's already focused, pressing TAB would move the focus outside
        // the document (e.g. to the browser search bar). Similarly, when the
        // overlay contains the first focusable element of the document and it's
        // already focused, pressing Shift+TAB would move the focus outside the
        // document (e.g. to the browser search bar).
        // In both cases, we would not receive a focus event, but only a blur.
        // In order to achieve focus wrapping, we prevent this TAB event and
        // force the focus. This will also prevent the focus to temporarily move
        // outside the overlay, which might cause scrolling.
        event.preventDefault();
        this._focusedChild = nodeToSet;
        this._applyFocus();
      }
    },

    /**
     * Refits if the overlay is opened and not animating.
     * @protected
     */
    _onIronResize: function _onIronResize() {
      if (this.opened && !this.__isAnimating) {
        this.__onNextAnimationFrame(this.refit);
      }
    },

    /**
     * Will call notifyResize if overlay is opened.
     * Can be overridden in order to avoid multiple observers on the same node.
     * @protected
     */
    _onNodesChange: function _onNodesChange() {
      if (this.opened && !this.__isAnimating) {
        // It might have added focusable nodes, so invalidate cached values.
        this.invalidateTabbables();
        this.notifyResize();
      }
    },

    /**
     * Will set first and last focusable nodes if any of them is not set.
     * @private
     */
    __ensureFirstLastFocusables: function __ensureFirstLastFocusables() {
      if (!this.__firstFocusableNode || !this.__lastFocusableNode) {
        var focusableNodes = this._focusableNodes;
        this.__firstFocusableNode = focusableNodes[0];
        this.__lastFocusableNode = focusableNodes[focusableNodes.length - 1];
      }
    },

    /**
     * Tasks executed when opened changes: prepare for the opening, move the
     * focus, update the manager, render opened/closed.
     * @private
     */
    __openedChanged: function __openedChanged() {
      if (this.opened) {
        // Make overlay visible, then add it to the manager.
        this._prepareRenderOpened();
        this._manager.addOverlay(this);
        // Move the focus to the child node with [autofocus].
        this._applyFocus();

        this._renderOpened();
      } else {
        // Remove overlay, then restore the focus before actually closing.
        this._manager.removeOverlay(this);
        this._applyFocus();

        this._renderClosed();
      }
    },

    /**
     * Executes a callback on the next animation frame, overriding any previous
     * callback awaiting for the next animation frame. e.g.
     * `__onNextAnimationFrame(callback1) && __onNextAnimationFrame(callback2)`;
     * `callback1` will never be invoked.
     * @param {!Function} callback Its `this` parameter is the overlay itself.
     * @private
     */
    __onNextAnimationFrame: function __onNextAnimationFrame(callback) {
      if (this.__raf) {
        window.cancelAnimationFrame(this.__raf);
      }
      var self = this;
      this.__raf = window.requestAnimationFrame(function nextAnimationFrame() {
        self.__raf = null;
        callback.call(self);
      });
    }

  };

  /**
  Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden or shown, and displays
  on top of other content. It includes an optional backdrop, and can be used to implement a variety
  of UI controls including dialogs and drop downs. Multiple overlays may be displayed at once.
   See the [demo source code](https://github.com/PolymerElements/iron-overlay-behavior/blob/master/demo/simple-overlay.html)
  for an example.
   ### Closing and canceling
   An overlay may be hidden by closing or canceling. The difference between close and cancel is user
  intent. Closing generally implies that the user acknowledged the content on the overlay. By default,
  it will cancel whenever the user taps outside it or presses the escape key. This behavior is
  configurable with the `no-cancel-on-esc-key` and the `no-cancel-on-outside-click` properties.
  `close()` should be called explicitly by the implementer when the user interacts with a control
  in the overlay element. When the dialog is canceled, the overlay fires an 'iron-overlay-canceled'
  event. Call `preventDefault` on this event to prevent the overlay from closing.
   ### Positioning
   By default the element is sized and positioned to fit and centered inside the window. You can
  position and size it manually using CSS. See `Polymer.IronFitBehavior`.
   ### Backdrop
   Set the `with-backdrop` attribute to display a backdrop behind the overlay. The backdrop is
  appended to `<body>` and is of type `<iron-overlay-backdrop>`. See its doc page for styling
  options.
   In addition, `with-backdrop` will wrap the focus within the content in the light DOM.
  Override the [`_focusableNodes` getter](#Polymer.IronOverlayBehavior:property-_focusableNodes)
  to achieve a different behavior.
   ### Limitations
   The element is styled to appear on top of other content by setting its `z-index` property. You
  must ensure no element has a stacking context with a higher `z-index` than its parent stacking
  context. You should place this element as a child of `<body>` whenever possible.
   @demo demo/index.html
  @polymerBehavior
  */
  Polymer.IronOverlayBehavior = [Polymer.IronFitBehavior, Polymer.IronResizableBehavior, Polymer.IronOverlayBehaviorImpl];

  /**
   * Fired after the overlay opens.
   * @event iron-overlay-opened
   */

  /**
   * Fired when the overlay is canceled, but before it is closed.
   * @event iron-overlay-canceled
   * @param {Event} event The closing of the overlay can be prevented
   * by calling `event.preventDefault()`. The `event.detail` is the original event that
   * originated the canceling (e.g. ESC keyboard event or click event outside the overlay).
   */

  /**
   * Fired after the overlay closes.
   * @event iron-overlay-closed
   * @param {Event} event The `event.detail` is the `closingReason` property
   * (contains `canceled`, whether the overlay was canceled).
   */
})();

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

/**
`Polymer.IronFitBehavior` fits an element in another element using `max-height` and `max-width`, and
optionally centers it in the window or another element.

The element will only be sized and/or positioned if it has not already been sized and/or positioned
by CSS.

CSS properties               | Action
-----------------------------|-------------------------------------------
`position` set               | Element is not centered horizontally or vertically
`top` or `bottom` set        | Element is not vertically centered
`left` or `right` set        | Element is not horizontally centered
`max-height` set             | Element respects `max-height`
`max-width` set              | Element respects `max-width`

`Polymer.IronFitBehavior` can position an element into another element using
`verticalAlign` and `horizontalAlign`. This will override the element's css position.

      <div class="container">
        <iron-fit-impl vertical-align="top" horizontal-align="auto">
          Positioned into the container
        </iron-fit-impl>
      </div>

Use `noOverlap` to position the element around another element without overlapping it.

      <div class="container">
        <iron-fit-impl no-overlap vertical-align="auto" horizontal-align="auto">
          Positioned around the container
        </iron-fit-impl>
      </div>

Use `horizontalOffset, verticalOffset` to offset the element from its `positionTarget`;
`Polymer.IronFitBehavior` will collapse these in order to keep the element
within `fitInto` boundaries, while preserving the element's CSS margin values.

      <div class="container">
        <iron-fit-impl vertical-align="top" vertical-offset="20">
          With vertical offset
        </iron-fit-impl>
      </div>


@demo demo/index.html
@polymerBehavior
*/
Polymer.IronFitBehavior = {

  properties: {

    /**
     * The element that will receive a `max-height`/`width`. By default it is the same as `this`,
     * but it can be set to a child element. This is useful, for example, for implementing a
     * scrolling region inside the element.
     * @type {!Element}
     */
    sizingTarget: {
      type: Object,
      value: function value() {
        return this;
      }
    },

    /**
     * The element to fit `this` into.
     */
    fitInto: {
      type: Object,
      value: window
    },

    /**
     * Will position the element around the positionTarget without overlapping it.
     */
    noOverlap: {
      type: Boolean
    },

    /**
     * The element that should be used to position the element. If not set, it will
     * default to the parent node.
     * @type {!Element}
     */
    positionTarget: {
      type: Element
    },

    /**
     * The orientation against which to align the element horizontally
     * relative to the `positionTarget`. Possible values are "left", "right", "auto".
     */
    horizontalAlign: {
      type: String
    },

    /**
     * The orientation against which to align the element vertically
     * relative to the `positionTarget`. Possible values are "top", "bottom", "auto".
     */
    verticalAlign: {
      type: String
    },

    /**
     * If true, it will use `horizontalAlign` and `verticalAlign` values as preferred alignment
     * and if there's not enough space, it will pick the values which minimize the cropping.
     */
    dynamicAlign: {
      type: Boolean
    },

    /**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left", this offset will increase or decrease
     * the distance to the left side of the screen: a negative offset will
     * move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */
    horizontalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top", this offset will increase or decrease
     * the distance to the top side of the screen: a negative offset will
     * move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */
    verticalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * Set to true to auto-fit on attach.
     */
    autoFitOnAttach: {
      type: Boolean,
      value: false
    },

    /** @type {?Object} */
    _fitInfo: {
      type: Object
    }
  },

  get _fitWidth() {
    var fitWidth;
    if (this.fitInto === window) {
      fitWidth = this.fitInto.innerWidth;
    } else {
      fitWidth = this.fitInto.getBoundingClientRect().width;
    }
    return fitWidth;
  },

  get _fitHeight() {
    var fitHeight;
    if (this.fitInto === window) {
      fitHeight = this.fitInto.innerHeight;
    } else {
      fitHeight = this.fitInto.getBoundingClientRect().height;
    }
    return fitHeight;
  },

  get _fitLeft() {
    var fitLeft;
    if (this.fitInto === window) {
      fitLeft = 0;
    } else {
      fitLeft = this.fitInto.getBoundingClientRect().left;
    }
    return fitLeft;
  },

  get _fitTop() {
    var fitTop;
    if (this.fitInto === window) {
      fitTop = 0;
    } else {
      fitTop = this.fitInto.getBoundingClientRect().top;
    }
    return fitTop;
  },

  /**
   * The element that should be used to position the element,
   * if no position target is configured.
   */
  get _defaultPositionTarget() {
    var parent = Polymer.dom(this).parentNode;

    if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      parent = parent.host;
    }

    return parent;
  },

  /**
   * The horizontal align value, accounting for the RTL/LTR text direction.
   */
  get _localeHorizontalAlign() {
    if (this._isRTL) {
      // In RTL, "left" becomes "right".
      if (this.horizontalAlign === 'right') {
        return 'left';
      }
      if (this.horizontalAlign === 'left') {
        return 'right';
      }
    }
    return this.horizontalAlign;
  },

  attached: function attached() {
    // Memoize this to avoid expensive calculations & relayouts.
    // Make sure we do it only once
    if (typeof this._isRTL === 'undefined') {
      this._isRTL = window.getComputedStyle(this).direction == 'rtl';
    }
    this.positionTarget = this.positionTarget || this._defaultPositionTarget;
    if (this.autoFitOnAttach) {
      if (window.getComputedStyle(this).display === 'none') {
        setTimeout(function () {
          this.fit();
        }.bind(this));
      } else {
        // NOTE: shadydom applies distribution asynchronously
        // for performance reasons webcomponents/shadydom#120
        // Flush to get correct layout info.
        window.ShadyDOM && ShadyDOM.flush();
        this.fit();
      }
    }
  },

  detached: function detached() {
    if (this.__deferredFit) {
      clearTimeout(this.__deferredFit);
      this.__deferredFit = null;
    }
  },

  /**
   * Positions and fits the element into the `fitInto` element.
   */
  fit: function fit() {
    this.position();
    this.constrain();
    this.center();
  },

  /**
   * Memoize information needed to position and size the target element.
   * @suppress {deprecated}
   */
  _discoverInfo: function _discoverInfo() {
    if (this._fitInfo) {
      return;
    }
    var target = window.getComputedStyle(this);
    var sizer = window.getComputedStyle(this.sizingTarget);

    this._fitInfo = {
      inlineStyle: {
        top: this.style.top || '',
        left: this.style.left || '',
        position: this.style.position || ''
      },
      sizerInlineStyle: {
        maxWidth: this.sizingTarget.style.maxWidth || '',
        maxHeight: this.sizingTarget.style.maxHeight || '',
        boxSizing: this.sizingTarget.style.boxSizing || ''
      },
      positionedBy: {
        vertically: target.top !== 'auto' ? 'top' : target.bottom !== 'auto' ? 'bottom' : null,
        horizontally: target.left !== 'auto' ? 'left' : target.right !== 'auto' ? 'right' : null
      },
      sizedBy: {
        height: sizer.maxHeight !== 'none',
        width: sizer.maxWidth !== 'none',
        minWidth: parseInt(sizer.minWidth, 10) || 0,
        minHeight: parseInt(sizer.minHeight, 10) || 0
      },
      margin: {
        top: parseInt(target.marginTop, 10) || 0,
        right: parseInt(target.marginRight, 10) || 0,
        bottom: parseInt(target.marginBottom, 10) || 0,
        left: parseInt(target.marginLeft, 10) || 0
      }
    };
  },

  /**
   * Resets the target element's position and size constraints, and clear
   * the memoized data.
   */
  resetFit: function resetFit() {
    var info = this._fitInfo || {};
    for (var property in info.sizerInlineStyle) {
      this.sizingTarget.style[property] = info.sizerInlineStyle[property];
    }
    for (var property in info.inlineStyle) {
      this.style[property] = info.inlineStyle[property];
    }

    this._fitInfo = null;
  },

  /**
   * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
   * the element or the `fitInto` element has been resized, or if any of the
   * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
   * It preserves the scroll position of the sizingTarget.
   */
  refit: function refit() {
    var scrollLeft = this.sizingTarget.scrollLeft;
    var scrollTop = this.sizingTarget.scrollTop;
    this.resetFit();
    this.fit();
    this.sizingTarget.scrollLeft = scrollLeft;
    this.sizingTarget.scrollTop = scrollTop;
  },

  /**
   * Positions the element according to `horizontalAlign, verticalAlign`.
   */
  position: function position() {
    if (!this.horizontalAlign && !this.verticalAlign) {
      // needs to be centered, and it is done after constrain.
      return;
    }
    this._discoverInfo();

    this.style.position = 'fixed';
    // Need border-box for margin/padding.
    this.sizingTarget.style.boxSizing = 'border-box';
    // Set to 0, 0 in order to discover any offset caused by parent stacking contexts.
    this.style.left = '0px';
    this.style.top = '0px';

    var rect = this.getBoundingClientRect();
    var positionRect = this.__getNormalizedRect(this.positionTarget);
    var fitRect = this.__getNormalizedRect(this.fitInto);

    var margin = this._fitInfo.margin;

    // Consider the margin as part of the size for position calculations.
    var size = {
      width: rect.width + margin.left + margin.right,
      height: rect.height + margin.top + margin.bottom
    };

    var position = this.__getPosition(this._localeHorizontalAlign, this.verticalAlign, size, positionRect, fitRect);

    var left = position.left + margin.left;
    var top = position.top + margin.top;

    // We first limit right/bottom within fitInto respecting the margin,
    // then use those values to limit top/left.
    var right = Math.min(fitRect.right - margin.right, left + rect.width);
    var bottom = Math.min(fitRect.bottom - margin.bottom, top + rect.height);

    // Keep left/top within fitInto respecting the margin.
    left = Math.max(fitRect.left + margin.left, Math.min(left, right - this._fitInfo.sizedBy.minWidth));
    top = Math.max(fitRect.top + margin.top, Math.min(top, bottom - this._fitInfo.sizedBy.minHeight));

    // Use right/bottom to set maxWidth/maxHeight, and respect minWidth/minHeight.
    this.sizingTarget.style.maxWidth = Math.max(right - left, this._fitInfo.sizedBy.minWidth) + 'px';
    this.sizingTarget.style.maxHeight = Math.max(bottom - top, this._fitInfo.sizedBy.minHeight) + 'px';

    // Remove the offset caused by any stacking context.
    this.style.left = left - rect.left + 'px';
    this.style.top = top - rect.top + 'px';
  },

  /**
   * Constrains the size of the element to `fitInto` by setting `max-height`
   * and/or `max-width`.
   */
  constrain: function constrain() {
    if (this.horizontalAlign || this.verticalAlign) {
      return;
    }
    this._discoverInfo();

    var info = this._fitInfo;
    // position at (0px, 0px) if not already positioned, so we can measure the natural size.
    if (!info.positionedBy.vertically) {
      this.style.position = 'fixed';
      this.style.top = '0px';
    }
    if (!info.positionedBy.horizontally) {
      this.style.position = 'fixed';
      this.style.left = '0px';
    }

    // need border-box for margin/padding
    this.sizingTarget.style.boxSizing = 'border-box';
    // constrain the width and height if not already set
    var rect = this.getBoundingClientRect();
    if (!info.sizedBy.height) {
      this.__sizeDimension(rect, info.positionedBy.vertically, 'top', 'bottom', 'Height');
    }
    if (!info.sizedBy.width) {
      this.__sizeDimension(rect, info.positionedBy.horizontally, 'left', 'right', 'Width');
    }
  },

  /**
   * @protected
   * @deprecated
   */
  _sizeDimension: function _sizeDimension(rect, positionedBy, start, end, extent) {
    this.__sizeDimension(rect, positionedBy, start, end, extent);
  },

  /**
   * @private
   */
  __sizeDimension: function __sizeDimension(rect, positionedBy, start, end, extent) {
    var info = this._fitInfo;
    var fitRect = this.__getNormalizedRect(this.fitInto);
    var max = extent === 'Width' ? fitRect.width : fitRect.height;
    var flip = positionedBy === end;
    var offset = flip ? max - rect[end] : rect[start];
    var margin = info.margin[flip ? start : end];
    var offsetExtent = 'offset' + extent;
    var sizingOffset = this[offsetExtent] - this.sizingTarget[offsetExtent];
    this.sizingTarget.style['max' + extent] = max - margin - offset - sizingOffset + 'px';
  },

  /**
   * Centers horizontally and vertically if not already positioned. This also sets
   * `position:fixed`.
   */
  center: function center() {
    if (this.horizontalAlign || this.verticalAlign) {
      return;
    }
    this._discoverInfo();

    var positionedBy = this._fitInfo.positionedBy;
    if (positionedBy.vertically && positionedBy.horizontally) {
      // Already positioned.
      return;
    }
    // Need position:fixed to center
    this.style.position = 'fixed';
    // Take into account the offset caused by parents that create stacking
    // contexts (e.g. with transform: translate3d). Translate to 0,0 and
    // measure the bounding rect.
    if (!positionedBy.vertically) {
      this.style.top = '0px';
    }
    if (!positionedBy.horizontally) {
      this.style.left = '0px';
    }
    // It will take in consideration margins and transforms
    var rect = this.getBoundingClientRect();
    var fitRect = this.__getNormalizedRect(this.fitInto);
    if (!positionedBy.vertically) {
      var top = fitRect.top - rect.top + (fitRect.height - rect.height) / 2;
      this.style.top = top + 'px';
    }
    if (!positionedBy.horizontally) {
      var left = fitRect.left - rect.left + (fitRect.width - rect.width) / 2;
      this.style.left = left + 'px';
    }
  },

  __getNormalizedRect: function __getNormalizedRect(target) {
    if (target === document.documentElement || target === window) {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight
      };
    }
    return target.getBoundingClientRect();
  },

  __getCroppedArea: function __getCroppedArea(position, size, fitRect) {
    var verticalCrop = Math.min(0, position.top) + Math.min(0, fitRect.bottom - (position.top + size.height));
    var horizontalCrop = Math.min(0, position.left) + Math.min(0, fitRect.right - (position.left + size.width));
    return Math.abs(verticalCrop) * size.width + Math.abs(horizontalCrop) * size.height;
  },

  __getPosition: function __getPosition(hAlign, vAlign, size, positionRect, fitRect) {
    // All the possible configurations.
    // Ordered as top-left, top-right, bottom-left, bottom-right.
    var positions = [{
      verticalAlign: 'top',
      horizontalAlign: 'left',
      top: positionRect.top + this.verticalOffset,
      left: positionRect.left + this.horizontalOffset
    }, {
      verticalAlign: 'top',
      horizontalAlign: 'right',
      top: positionRect.top + this.verticalOffset,
      left: positionRect.right - size.width - this.horizontalOffset
    }, {
      verticalAlign: 'bottom',
      horizontalAlign: 'left',
      top: positionRect.bottom - size.height - this.verticalOffset,
      left: positionRect.left + this.horizontalOffset
    }, {
      verticalAlign: 'bottom',
      horizontalAlign: 'right',
      top: positionRect.bottom - size.height - this.verticalOffset,
      left: positionRect.right - size.width - this.horizontalOffset
    }];

    if (this.noOverlap) {
      // Duplicate.
      for (var i = 0, l = positions.length; i < l; i++) {
        var copy = {};
        for (var key in positions[i]) {
          copy[key] = positions[i][key];
        }
        positions.push(copy);
      }
      // Horizontal overlap only.
      positions[0].top = positions[1].top += positionRect.height;
      positions[2].top = positions[3].top -= positionRect.height;
      // Vertical overlap only.
      positions[4].left = positions[6].left += positionRect.width;
      positions[5].left = positions[7].left -= positionRect.width;
    }

    // Consider auto as null for coding convenience.
    vAlign = vAlign === 'auto' ? null : vAlign;
    hAlign = hAlign === 'auto' ? null : hAlign;

    var position;
    for (var i = 0; i < positions.length; i++) {
      var pos = positions[i];

      // If both vAlign and hAlign are defined, return exact match.
      // For dynamicAlign and noOverlap we'll have more than one candidate, so
      // we'll have to check the croppedArea to make the best choice.
      if (!this.dynamicAlign && !this.noOverlap && pos.verticalAlign === vAlign && pos.horizontalAlign === hAlign) {
        position = pos;
        break;
      }

      // Align is ok if alignment preferences are respected. If no preferences,
      // it is considered ok.
      var alignOk = (!vAlign || pos.verticalAlign === vAlign) && (!hAlign || pos.horizontalAlign === hAlign);

      // Filter out elements that don't match the alignment (if defined).
      // With dynamicAlign, we need to consider all the positions to find the
      // one that minimizes the cropped area.
      if (!this.dynamicAlign && !alignOk) {
        continue;
      }

      position = position || pos;
      pos.croppedArea = this.__getCroppedArea(pos, size, fitRect);
      var diff = pos.croppedArea - position.croppedArea;
      // Check which crops less. If it crops equally, check if align is ok.
      if (diff < 0 || diff === 0 && alignOk) {
        position = pos;
      }
      // If not cropped and respects the align requirements, keep it.
      // This allows to prefer positions overlapping horizontally over the
      // ones overlapping vertically.
      if (position.croppedArea === 0 && alignOk) {
        break;
      }
    }

    return position;
  }

};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

__webpack_require__(33);

__webpack_require__(72);

/**
 * @struct
 * @constructor
 * @private
 */
Polymer.IronOverlayManagerClass = function () {
  /**
   * Used to keep track of the opened overlays.
   * @private {Array<Element>}
   */
  this._overlays = [];

  /**
   * iframes have a default z-index of 100,
   * so this default should be at least that.
   * @private {number}
   */
  this._minimumZ = 101;

  /**
   * Memoized backdrop element.
   * @private {Element|null}
   */
  this._backdropElement = null;

  // Enable document-wide tap recognizer.
  // NOTE: Use useCapture=true to avoid accidentally prevention of the closing
  // of an overlay via event.stopPropagation(). The only way to prevent
  // closing of an overlay should be through its APIs.
  // NOTE: enable tap on <html> to workaround Polymer/polymer#4459
  Polymer.Gestures.add(document.documentElement, 'tap', null);
  document.addEventListener('tap', this._onCaptureClick.bind(this), true);
  document.addEventListener('focus', this._onCaptureFocus.bind(this), true);
  document.addEventListener('keydown', this._onCaptureKeyDown.bind(this), true);
};

Polymer.IronOverlayManagerClass.prototype = {

  constructor: Polymer.IronOverlayManagerClass,

  /**
   * The shared backdrop element.
   * @type {!Element} backdropElement
   */
  get backdropElement() {
    if (!this._backdropElement) {
      this._backdropElement = document.createElement('iron-overlay-backdrop');
    }
    return this._backdropElement;
  },

  /**
   * The deepest active element.
   * @type {!Element} activeElement the active element
   */
  get deepActiveElement() {
    // document.activeElement can be null
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
    // In case of null, default it to document.body.
    var active = document.activeElement || document.body;
    while (active.root && Polymer.dom(active.root).activeElement) {
      active = Polymer.dom(active.root).activeElement;
    }
    return active;
  },

  /**
   * Brings the overlay at the specified index to the front.
   * @param {number} i
   * @private
   */
  _bringOverlayAtIndexToFront: function _bringOverlayAtIndexToFront(i) {
    var overlay = this._overlays[i];
    if (!overlay) {
      return;
    }
    var lastI = this._overlays.length - 1;
    var currentOverlay = this._overlays[lastI];
    // Ensure always-on-top overlay stays on top.
    if (currentOverlay && this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      lastI--;
    }
    // If already the top element, return.
    if (i >= lastI) {
      return;
    }
    // Update z-index to be on top.
    var minimumZ = Math.max(this.currentOverlayZ(), this._minimumZ);
    if (this._getZ(overlay) <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    }

    // Shift other overlays behind the new on top.
    while (i < lastI) {
      this._overlays[i] = this._overlays[i + 1];
      i++;
    }
    this._overlays[lastI] = overlay;
  },

  /**
   * Adds the overlay and updates its z-index if it's opened, or removes it if it's closed.
   * Also updates the backdrop z-index.
   * @param {!Element} overlay
   */
  addOrRemoveOverlay: function addOrRemoveOverlay(overlay) {
    if (overlay.opened) {
      this.addOverlay(overlay);
    } else {
      this.removeOverlay(overlay);
    }
  },

  /**
   * Tracks overlays for z-index and focus management.
   * Ensures the last added overlay with always-on-top remains on top.
   * @param {!Element} overlay
   */
  addOverlay: function addOverlay(overlay) {
    var i = this._overlays.indexOf(overlay);
    if (i >= 0) {
      this._bringOverlayAtIndexToFront(i);
      this.trackBackdrop();
      return;
    }
    var insertionIndex = this._overlays.length;
    var currentOverlay = this._overlays[insertionIndex - 1];
    var minimumZ = Math.max(this._getZ(currentOverlay), this._minimumZ);
    var newZ = this._getZ(overlay);

    // Ensure always-on-top overlay stays on top.
    if (currentOverlay && this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      // This bumps the z-index of +2.
      this._applyOverlayZ(currentOverlay, minimumZ);
      insertionIndex--;
      // Update minimumZ to match previous overlay's z-index.
      var previousOverlay = this._overlays[insertionIndex - 1];
      minimumZ = Math.max(this._getZ(previousOverlay), this._minimumZ);
    }

    // Update z-index and insert overlay.
    if (newZ <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    }
    this._overlays.splice(insertionIndex, 0, overlay);

    this.trackBackdrop();
  },

  /**
   * @param {!Element} overlay
   */
  removeOverlay: function removeOverlay(overlay) {
    var i = this._overlays.indexOf(overlay);
    if (i === -1) {
      return;
    }
    this._overlays.splice(i, 1);

    this.trackBackdrop();
  },

  /**
   * Returns the current overlay.
   * @return {Element|undefined}
   */
  currentOverlay: function currentOverlay() {
    var i = this._overlays.length - 1;
    return this._overlays[i];
  },

  /**
   * Returns the current overlay z-index.
   * @return {number}
   */
  currentOverlayZ: function currentOverlayZ() {
    return this._getZ(this.currentOverlay());
  },

  /**
   * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
   * This does not effect the z-index of any existing overlays.
   * @param {number} minimumZ
   */
  ensureMinimumZ: function ensureMinimumZ(minimumZ) {
    this._minimumZ = Math.max(this._minimumZ, minimumZ);
  },

  focusOverlay: function focusOverlay() {
    var current = /** @type {?} */this.currentOverlay();
    if (current) {
      current._applyFocus();
    }
  },

  /**
   * Updates the backdrop z-index.
   */
  trackBackdrop: function trackBackdrop() {
    var overlay = this._overlayWithBackdrop();
    // Avoid creating the backdrop if there is no overlay with backdrop.
    if (!overlay && !this._backdropElement) {
      return;
    }
    this.backdropElement.style.zIndex = this._getZ(overlay) - 1;
    this.backdropElement.opened = !!overlay;
    // Property observers are not fired until element is attached
    // in Polymer 2.x, so we ensure element is attached if needed.
    // https://github.com/Polymer/polymer/issues/4526
    this.backdropElement.prepare();
  },

  /**
   * @return {Array<Element>}
   */
  getBackdrops: function getBackdrops() {
    var backdrops = [];
    for (var i = 0; i < this._overlays.length; i++) {
      if (this._overlays[i].withBackdrop) {
        backdrops.push(this._overlays[i]);
      }
    }
    return backdrops;
  },

  /**
   * Returns the z-index for the backdrop.
   * @return {number}
   */
  backdropZ: function backdropZ() {
    return this._getZ(this._overlayWithBackdrop()) - 1;
  },

  /**
   * Returns the first opened overlay that has a backdrop.
   * @return {Element|undefined}
   * @private
   */
  _overlayWithBackdrop: function _overlayWithBackdrop() {
    for (var i = 0; i < this._overlays.length; i++) {
      if (this._overlays[i].withBackdrop) {
        return this._overlays[i];
      }
    }
  },

  /**
   * Calculates the minimum z-index for the overlay.
   * @param {Element=} overlay
   * @private
   */
  _getZ: function _getZ(overlay) {
    var z = this._minimumZ;
    if (overlay) {
      var z1 = Number(overlay.style.zIndex || window.getComputedStyle(overlay).zIndex);
      // Check if is a number
      // Number.isNaN not supported in IE 10+
      if (z1 === z1) {
        z = z1;
      }
    }
    return z;
  },

  /**
   * @param {!Element} element
   * @param {number|string} z
   * @private
   */
  _setZ: function _setZ(element, z) {
    element.style.zIndex = z;
  },

  /**
   * @param {!Element} overlay
   * @param {number} aboveZ
   * @private
   */
  _applyOverlayZ: function _applyOverlayZ(overlay, aboveZ) {
    this._setZ(overlay, aboveZ + 2);
  },

  /**
   * Returns the deepest overlay in the path.
   * @param {Array<Element>=} path
   * @return {Element|undefined}
   * @suppress {missingProperties}
   * @private
   */
  _overlayInPath: function _overlayInPath(path) {
    path = path || [];
    for (var i = 0; i < path.length; i++) {
      if (path[i]._manager === this) {
        return path[i];
      }
    }
  },

  /**
   * Ensures the click event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureClick: function _onCaptureClick(event) {
    var overlay = /** @type {?} */this.currentOverlay();
    // Check if clicked outside of top overlay.
    if (overlay && this._overlayInPath(Polymer.dom(event).path) !== overlay) {
      overlay._onCaptureClick(event);
    }
  },

  /**
   * Ensures the focus event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureFocus: function _onCaptureFocus(event) {
    var overlay = /** @type {?} */this.currentOverlay();
    if (overlay) {
      overlay._onCaptureFocus(event);
    }
  },

  /**
   * Ensures TAB and ESC keyboard events are delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureKeyDown: function _onCaptureKeyDown(event) {
    var overlay = /** @type {?} */this.currentOverlay();
    if (overlay) {
      if (Polymer.IronA11yKeysBehavior.keyboardEventMatchesKeys(event, 'esc')) {
        overlay._onCaptureEsc(event);
      } else if (Polymer.IronA11yKeysBehavior.keyboardEventMatchesKeys(event, 'tab')) {
        overlay._onCaptureTab(event);
      }
    }
  },

  /**
   * Returns if the overlay1 should be behind overlay2.
   * @param {!Element} overlay1
   * @param {!Element} overlay2
   * @return {boolean}
   * @suppress {missingProperties}
   * @private
   */
  _shouldBeBehindOverlay: function _shouldBeBehindOverlay(overlay1, overlay2) {
    return !overlay1.alwaysOnTop && overlay2.alwaysOnTop;
  }
};

Polymer.IronOverlayManager = new Polymer.IronOverlayManagerClass();

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

var RegisterHtmlTemplate = __webpack_require__(26);

RegisterHtmlTemplate.register("<dom-module id=iron-overlay-backdrop> <template> <style>:host{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--iron-overlay-backdrop-background-color,#000);opacity:0;transition:opacity .2s;pointer-events:none;@apply --iron-overlay-backdrop;}:host(.opened){opacity:var(--iron-overlay-backdrop-opacity,.6);pointer-events:auto;@apply --iron-overlay-backdrop-opened;}</style> <slot></slot> </template> </dom-module>");

(function () {
  'use strict';

  Polymer({

    is: 'iron-overlay-backdrop',

    properties: {

      /**
       * Returns true if the backdrop is opened.
       */
      opened: {
        reflectToAttribute: true,
        type: Boolean,
        value: false,
        observer: '_openedChanged'
      }

    },

    listeners: {
      'transitionend': '_onTransitionend'
    },

    created: function created() {
      // Used to cancel previous requestAnimationFrame calls when opened changes.
      this.__openedRaf = null;
    },

    attached: function attached() {
      this.opened && this._openedChanged(this.opened);
    },

    /**
     * Appends the backdrop to document body if needed.
     */
    prepare: function prepare() {
      if (this.opened && !this.parentNode) {
        Polymer.dom(document.body).appendChild(this);
      }
    },

    /**
     * Shows the backdrop.
     */
    open: function open() {
      this.opened = true;
    },

    /**
     * Hides the backdrop.
     */
    close: function close() {
      this.opened = false;
    },

    /**
     * Removes the backdrop from document body if needed.
     */
    complete: function complete() {
      if (!this.opened && this.parentNode === document.body) {
        Polymer.dom(this.parentNode).removeChild(this);
      }
    },

    _onTransitionend: function _onTransitionend(event) {
      if (event && event.target === this) {
        this.complete();
      }
    },

    /**
     * @param {boolean} opened
     * @private
     */
    _openedChanged: function _openedChanged(opened) {
      if (opened) {
        // Auto-attach.
        this.prepare();
      } else {
        // Animation might be disabled via the mixin or opacity custom property.
        // If it is disabled in other ways, it's up to the user to call complete.
        var cs = window.getComputedStyle(this);
        if (cs.transitionDuration === '0s' || cs.opacity == 0) {
          this.complete();
        }
      }

      if (!this.isAttached) {
        return;
      }

      // Always cancel previous requestAnimationFrame.
      if (this.__openedRaf) {
        window.cancelAnimationFrame(this.__openedRaf);
        this.__openedRaf = null;
      }
      // Force relayout to ensure proper transitions.
      this.scrollTop = this.scrollTop;
      this.__openedRaf = window.requestAnimationFrame(function () {
        this.__openedRaf = null;
        this.toggleClass('opened', this.opened);
      }.bind(this));
    }
  });
})();

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

(function () {
  'use strict';

  var p = Element.prototype;
  var matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;

  Polymer.IronFocusablesHelper = {

    /**
     * Returns a sorted array of tabbable nodes, including the root node.
     * It searches the tabbable nodes in the light and shadow dom of the chidren,
     * sorting the result by tabindex.
     * @param {!Node} node
     * @return {Array<HTMLElement>}
     */
    getTabbableNodes: function getTabbableNodes(node) {
      var result = [];
      // If there is at least one element with tabindex > 0, we need to sort
      // the final array by tabindex.
      var needsSortByTabIndex = this._collectTabbableNodes(node, result);
      if (needsSortByTabIndex) {
        return this._sortByTabIndex(result);
      }
      return result;
    },

    /**
     * Returns if a element is focusable.
     * @param {!HTMLElement} element
     * @return {boolean}
     */
    isFocusable: function isFocusable(element) {
      // From http://stackoverflow.com/a/1600194/4228703:
      // There isn't a definite list, it's up to the browser. The only
      // standard we have is DOM Level 2 HTML https://www.w3.org/TR/DOM-Level-2-HTML/html.html,
      // according to which the only elements that have a focus() method are
      // HTMLInputElement,  HTMLSelectElement, HTMLTextAreaElement and
      // HTMLAnchorElement. This notably omits HTMLButtonElement and
      // HTMLAreaElement.
      // Referring to these tests with tabbables in different browsers
      // http://allyjs.io/data-tables/focusable.html

      // Elements that cannot be focused if they have [disabled] attribute.
      if (matches.call(element, 'input, select, textarea, button, object')) {
        return matches.call(element, ':not([disabled])');
      }
      // Elements that can be focused even if they have [disabled] attribute.
      return matches.call(element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
    },

    /**
     * Returns if a element is tabbable. To be tabbable, a element must be
     * focusable, visible, and with a tabindex !== -1.
     * @param {!HTMLElement} element
     * @return {boolean}
     */
    isTabbable: function isTabbable(element) {
      return this.isFocusable(element) && matches.call(element, ':not([tabindex="-1"])') && this._isVisible(element);
    },

    /**
     * Returns the normalized element tabindex. If not focusable, returns -1.
     * It checks for the attribute "tabindex" instead of the element property
     * `tabIndex` since browsers assign different values to it.
     * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
     * @param {!HTMLElement} element
     * @return {!number}
     * @private
     */
    _normalizedTabIndex: function _normalizedTabIndex(element) {
      if (this.isFocusable(element)) {
        var tabIndex = element.getAttribute('tabindex') || 0;
        return Number(tabIndex);
      }
      return -1;
    },

    /**
     * Searches for nodes that are tabbable and adds them to the `result` array.
     * Returns if the `result` array needs to be sorted by tabindex.
     * @param {!Node} node The starting point for the search; added to `result`
     * if tabbable.
     * @param {!Array<HTMLElement>} result
     * @return {boolean}
     * @private
     */
    _collectTabbableNodes: function _collectTabbableNodes(node, result) {
      // If not an element or not visible, no need to explore children.
      if (node.nodeType !== Node.ELEMENT_NODE || !this._isVisible(node)) {
        return false;
      }
      var element = /** @type {HTMLElement} */node;
      var tabIndex = this._normalizedTabIndex(element);
      var needsSort = tabIndex > 0;
      if (tabIndex >= 0) {
        result.push(element);
      }

      // In ShadowDOM v1, tab order is affected by the order of distrubution.
      // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
      // in ShadowDOM v0 tab order is not affected by the distrubution order,
      // in fact getTabbableNodes(#root) returns [#B, #A].
      //  <div id="root">
      //   <!-- shadow -->
      //     <slot name="a">
      //     <slot name="b">
      //   <!-- /shadow -->
      //   <input id="A" slot="a">
      //   <input id="B" slot="b" tabindex="1">
      //  </div>
      // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.
      var children;
      if (element.localName === 'content' || element.localName === 'slot') {
        children = Polymer.dom(element).getDistributedNodes();
      } else {
        // Use shadow root if possible, will check for distributed nodes.
        children = Polymer.dom(element.root || element).children;
      }
      for (var i = 0; i < children.length; i++) {
        // Ensure method is always invoked to collect tabbable children.
        needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
      }
      return needsSort;
    },

    /**
     * Returns false if the element has `visibility: hidden` or `display: none`
     * @param {!HTMLElement} element
     * @return {boolean}
     * @private
     */
    _isVisible: function _isVisible(element) {
      // Check inline style first to save a re-flow. If looks good, check also
      // computed style.
      var style = element.style;
      if (style.visibility !== 'hidden' && style.display !== 'none') {
        style = window.getComputedStyle(element);
        return style.visibility !== 'hidden' && style.display !== 'none';
      }
      return false;
    },

    /**
     * Sorts an array of tabbable elements by tabindex. Returns a new array.
     * @param {!Array<HTMLElement>} tabbables
     * @return {Array<HTMLElement>}
     * @private
     */
    _sortByTabIndex: function _sortByTabIndex(tabbables) {
      // Implement a merge sort as Array.prototype.sort does a non-stable sort
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      var len = tabbables.length;
      if (len < 2) {
        return tabbables;
      }
      var pivot = Math.ceil(len / 2);
      var left = this._sortByTabIndex(tabbables.slice(0, pivot));
      var right = this._sortByTabIndex(tabbables.slice(pivot));
      return this._mergeSortByTabIndex(left, right);
    },

    /**
     * Merge sort iterator, merges the two arrays into one, sorted by tab index.
     * @param {!Array<HTMLElement>} left
     * @param {!Array<HTMLElement>} right
     * @return {Array<HTMLElement>}
     * @private
     */
    _mergeSortByTabIndex: function _mergeSortByTabIndex(left, right) {
      var result = [];
      while (left.length > 0 && right.length > 0) {
        if (this._hasLowerTabOrder(left[0], right[0])) {
          result.push(right.shift());
        } else {
          result.push(left.shift());
        }
      }

      return result.concat(left, right);
    },

    /**
     * Returns if element `a` has lower tab order compared to element `b`
     * (both elements are assumed to be focusable and tabbable).
     * Elements with tabindex = 0 have lower tab order compared to elements
     * with tabindex > 0.
     * If both have same tabindex, it returns false.
     * @param {!HTMLElement} a
     * @param {!HTMLElement} b
     * @return {boolean}
     * @private
     */
    _hasLowerTabOrder: function _hasLowerTabOrder(a, b) {
      // Normalize tabIndexes
      // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
      var ati = Math.max(a.tabIndex, 0);
      var bti = Math.max(b.tabIndex, 0);
      return ati === 0 || bti === 0 ? bti > ati : ati > bti;
    }
  };
})();

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

__webpack_require__(66);

__webpack_require__(69);

var RegisterHtmlTemplate = __webpack_require__(26);

RegisterHtmlTemplate.register("<dom-module id=paper-toast> <template> <style>:host{display:block;position:fixed;background-color:var(--paper-toast-background-color,#323232);color:var(--paper-toast-color,#f1f1f1);min-height:48px;min-width:288px;padding:16px 24px;box-sizing:border-box;box-shadow:0 2px 5px 0 rgba(0,0,0,.26);border-radius:2px;margin:12px;font-size:14px;cursor:default;-webkit-transition:-webkit-transform .3s,opacity .3s;transition:transform .3s,opacity .3s;opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px);@apply --paper-font-common-base;}:host(.capsule){border-radius:24px}:host(.fit-bottom){width:100%;min-width:0;border-radius:0;margin:0}:host(.paper-toast-open){opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}</style> <span id=label>{{text}}</span> <slot></slot> </template> </dom-module>");

(function () {
  'use strict';

  // Keeps track of the toast currently opened.

  var currentToast = null;

  Polymer({
    is: 'paper-toast',

    behaviors: [Polymer.IronOverlayBehavior],

    properties: {
      /**
       * The element to fit `this` into.
       * Overridden from `Polymer.IronFitBehavior`.
       */
      fitInto: {
        type: Object,
        value: window,
        observer: '_onFitIntoChanged'
      },

      /**
       * The orientation against which to align the dropdown content
       * horizontally relative to `positionTarget`.
       * Overridden from `Polymer.IronFitBehavior`.
       */
      horizontalAlign: {
        type: String,
        value: 'left'
      },

      /**
       * The orientation against which to align the dropdown content
       * vertically relative to `positionTarget`.
       * Overridden from `Polymer.IronFitBehavior`.
       */
      verticalAlign: {
        type: String,
        value: 'bottom'
      },

      /**
       * The duration in milliseconds to show the toast.
       * Set to `0`, a negative number, or `Infinity`, to disable the
       * toast auto-closing.
       */
      duration: {
        type: Number,
        value: 3000
      },

      /**
       * The text to display in the toast.
       */
      text: {
        type: String,
        value: ''
      },

      /**
       * Overridden from `IronOverlayBehavior`.
       * Set to false to enable closing of the toast by clicking outside it.
       */
      noCancelOnOutsideClick: {
        type: Boolean,
        value: true
      },

      /**
       * Overridden from `IronOverlayBehavior`.
       * Set to true to disable auto-focusing the toast or child nodes with
       * the `autofocus` attribute` when the overlay is opened.
       */
      noAutoFocus: {
        type: Boolean,
        value: true
      }
    },

    listeners: {
      'transitionend': '__onTransitionEnd'
    },

    /**
     * Read-only. Deprecated. Use `opened` from `IronOverlayBehavior`.
     * @property visible
     * @deprecated
     */
    get visible() {
      Polymer.Base._warn('`visible` is deprecated, use `opened` instead');
      return this.opened;
    },

    /**
     * Read-only. Can auto-close if duration is a positive finite number.
     * @property _canAutoClose
     */
    get _canAutoClose() {
      return this.duration > 0 && this.duration !== Infinity;
    },

    created: function created() {
      this._autoClose = null;
      Polymer.IronA11yAnnouncer.requestAvailability();
    },

    /**
     * Show the toast. Without arguments, this is the same as `open()` from `IronOverlayBehavior`.
     * @param {(Object|string)=} properties Properties to be set before opening the toast.
     * e.g. `toast.show('hello')` or `toast.show({text: 'hello', duration: 3000})`
     */
    show: function show(properties) {
      if (typeof properties == 'string') {
        properties = { text: properties };
      }
      for (var property in properties) {
        if (property.indexOf('_') === 0) {
          Polymer.Base._warn('The property "' + property + '" is private and was not set.');
        } else if (property in this) {
          this[property] = properties[property];
        } else {
          Polymer.Base._warn('The property "' + property + '" is not valid.');
        }
      }
      this.open();
    },

    /**
     * Hide the toast. Same as `close()` from `IronOverlayBehavior`.
     */
    hide: function hide() {
      this.close();
    },

    /**
     * Called on transitions of the toast, indicating a finished animation
     * @private
     */
    __onTransitionEnd: function __onTransitionEnd(e) {
      // there are different transitions that are happening when opening and
      // closing the toast. The last one so far is for `opacity`.
      // This marks the end of the transition, so we check for this to determine if this
      // is the correct event.
      if (e && e.target === this && e.propertyName === 'opacity') {
        if (this.opened) {
          this._finishRenderOpened();
        } else {
          this._finishRenderClosed();
        }
      }
    },

    /**
     * Overridden from `IronOverlayBehavior`.
     * Called when the value of `opened` changes.
     */
    _openedChanged: function _openedChanged() {
      if (this._autoClose !== null) {
        this.cancelAsync(this._autoClose);
        this._autoClose = null;
      }
      if (this.opened) {
        if (currentToast && currentToast !== this) {
          currentToast.close();
        }
        currentToast = this;
        this.fire('iron-announce', {
          text: this.text
        });
        if (this._canAutoClose) {
          this._autoClose = this.async(this.close, this.duration);
        }
      } else if (currentToast === this) {
        currentToast = null;
      }
      Polymer.IronOverlayBehaviorImpl._openedChanged.apply(this, arguments);
    },

    /**
     * Overridden from `IronOverlayBehavior`.
     */
    _renderOpened: function _renderOpened() {
      this.classList.add('paper-toast-open');
    },

    /**
     * Overridden from `IronOverlayBehavior`.
     */
    _renderClosed: function _renderClosed() {
      this.classList.remove('paper-toast-open');
    },

    /**
     * @private
     */
    _onFitIntoChanged: function _onFitIntoChanged(fitInto) {
      this.positionTarget = fitInto;
    }

    /**
     * Fired when `paper-toast` is opened.
     *
     * @event 'iron-announce'
     * @param {{text: string}} detail Contains text that will be announced.
     */
  });
})();

/***/ })
]));
//# sourceMappingURL=app-toast.1.bundle.js.map