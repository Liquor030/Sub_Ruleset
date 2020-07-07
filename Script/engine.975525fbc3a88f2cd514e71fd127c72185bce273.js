var __extends;var __assign;var __rest;var __decorate;var __param;var __metadata;var __awaiter;var __generator;var __exportStar;var __values;var __read;var __spread;var __spreadArrays;var __await;var __asyncGenerator;var __asyncDelegator;var __asyncValues;var __makeTemplateObject;var __importStar;var __importDefault;(function(factory){var root=typeof global==="object"?global:typeof self==="object"?self:typeof this==="object"?this:{};if(typeof define==="function"&&define.amd){define("tslib",["exports"],function(exports){factory(createExporter(root,createExporter(exports)))})}else{if(typeof module==="object"&&typeof module.exports==="object"){factory(createExporter(root,createExporter(module.exports)))}else{factory(createExporter(root))}}function createExporter(exports,previous){if(exports!==root){if(typeof Object.create==="function"){Object.defineProperty(exports,"__esModule",{value:true})}else{exports.__esModule=true}}return function(id,v){return exports[id]=previous?previous(id,v):v}}})(function(exporter){var extendStatics=Object.setPrototypeOf||({__proto__:[]} instanceof Array&&function(d,b){d.__proto__=b})||function(d,b){for(var p in b){if(b.hasOwnProperty(p)){d[p]=b[p]}}};__extends=function(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __())};__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)){t[p]=s[p]}}}return t};__rest=function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0){t[p]=s[p]}}if(s!=null&&typeof Object.getOwnPropertySymbols==="function"){for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])){t[p[i]]=s[p[i]]}}}return t};__decorate=function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function"){r=Reflect.decorate(decorators,target,key,desc)}else{for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i]){r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r}}}return c>3&&r&&Object.defineProperty(target,key,r),r};__param=function(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}};__metadata=function(metadataKey,metadataValue){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function"){return Reflect.metadata(metadataKey,metadataValue)}};__awaiter=function(thisArg,_arguments,P,generator){return new (P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};__generator=function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1){throw t[1]}return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f){throw new TypeError("Generator is already executing.")}while(_){try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done){return t}if(y=0,t){op=[op[0]&2,t.value]}switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||(op[1]>t[0]&&op[1]<t[3]))){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2]){_.ops.pop()}_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}}if(op[0]&5){throw op[1]}return{value:op[0]?op[1]:void 0,done:true}
}};__exportStar=function(m,exports){for(var p in m){if(!exports.hasOwnProperty(p)){exports[p]=m[p]}}};__values=function(o){var m=typeof Symbol==="function"&&o[Symbol.iterator],i=0;if(m){return m.call(o)}return{next:function(){if(o&&i>=o.length){o=void 0}return{value:o&&o[i++],done:!o}}}};__read=function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m){return o}var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value)}}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"])){m.call(i)}}finally{if(e){throw e.error}}}return ar};__spread=function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(__read(arguments[i]))}return ar};__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++){s+=arguments[i].length}for(var r=Array(s),k=0,i=0;i<il;i++){for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++){r[k]=a[j]}}return r};__await=function(v){return this instanceof __await?(this.v=v,this):new __await(v)};__asyncGenerator=function(thisArg,_arguments,generator){if(!Symbol.asyncIterator){throw new TypeError("Symbol.asyncIterator is not defined.")}var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n]){i[n]=function(v){return new Promise(function(a,b){q.push([n,v,a,b])>1||resume(n,v)})}}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length){resume(q[0][0],q[0][1])}}};__asyncDelegator=function(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:n==="return"}:f?f(v):v}:f}};__asyncValues=function(o){if(!Symbol.asyncIterator){throw new TypeError("Symbol.asyncIterator is not defined.")}var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o=typeof __values==="function"?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}};__makeTemplateObject=function(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};__importStar=function(mod){if(mod&&mod.__esModule){return mod}var result={};if(mod!=null){for(var k in mod){if(Object.hasOwnProperty.call(mod,k)){result[k]=mod[k]}}}result["default"]=mod;return result};__importDefault=function(mod){return(mod&&mod.__esModule)?mod:{"default":mod}};exporter("__extends",__extends);exporter("__assign",__assign);exporter("__rest",__rest);exporter("__decorate",__decorate);exporter("__param",__param);exporter("__metadata",__metadata);exporter("__awaiter",__awaiter);exporter("__generator",__generator);exporter("__exportStar",__exportStar);exporter("__values",__values);exporter("__read",__read);exporter("__spread",__spread);exporter("__spreadArrays",__spreadArrays);exporter("__await",__await);exporter("__asyncGenerator",__asyncGenerator);exporter("__asyncDelegator",__asyncDelegator);exporter("__asyncValues",__asyncValues);exporter("__makeTemplateObject",__makeTemplateObject);exporter("__importStar",__importStar);exporter("__importDefault",__importDefault)});
var tslib = {__extends: __extends,__assign: __assign,__rest: __rest,__decorate: __decorate,__param: __param,__metadata: __metadata,__awaiter: __awaiter,__generator: __generator,__exportStar: __exportStar,__values: __values,__read: __read,__spread: __spread,__spreadArrays: __spreadArrays,__await: __await,__asyncGenerator: __asyncGenerator,__asyncDelegator: __asyncDelegator,__asyncValues: __asyncValues,__makeTemplateObject: __makeTemplateObject,__importStar: __importStar,__importDefault: __importDefault};
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib')) :
	typeof define === 'function' && define.amd ? define(['exports', 'tslib'], factory) :
	(global = global || self, factory(global.engine = {}, global.tslib));
}(this, function (exports, tslib_1) { 'use strict';

	var HashObject = (function () {
	    function HashObject() {
	        this._instanceId = 0;
	        this._instanceType = "HashObject";
	        this._instanceId = HashObject._object_id++;
	    }
	    Object.defineProperty(HashObject.prototype, "instanceId", {
	        get: function () {
	            return this._instanceId;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(HashObject.prototype, "instanceType", {
	        get: function () {
	            return this._instanceType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    HashObject._object_id = 0;
	    return HashObject;
	}());

	var Event = (function (_super) {
	    tslib_1.__extends(Event, _super);
	    function Event(type) {
	        var _this = _super.call(this) || this;
	        _this.type = "";
	        _this.target = null;
	        _this.data = null;
	        _this._bpd = false;
	        _this._pd = false;
	        _this._instanceType = "Event";
	        _this.type = type;
	        return _this;
	    }
	    Event.prototype.stopImmediatePropagation = function () {
	        this._pd = true;
	    };
	    Event.prototype.stopPropagation = function () {
	        this._bpd = true;
	    };
	    Event.prototype.destroy = function () {
	        var s = this;
	        s.target = null;
	        s.data = null;
	    };
	    Event.prototype.reset = function (type, target) {
	        var s = this;
	        s.target = target;
	        s._pd = false;
	        s._bpd = false;
	        s.type = type;
	        delete s.data;
	    };
	    Event.RESIZE = "onResize";
	    Event.ON_SCROLL_TO_HEAD = "onScrollToHead";
	    Event.ON_SCROLL_STOP = "onScrollStop";
	    Event.ON_SCROLL_START = "onScrollStart";
	    Event.ON_SCROLL_TO_END = "onScrollToEnd";
	    Event.ON_INIT_STAGE = "onInitStage";
	    Event.ADDED_TO_STAGE = "onAddedToStage";
	    Event.REMOVED_FROM_STAGE = "onRemovedFromStage";
	    Event.ENTER_FRAME = "onEnterFrame";
	    Event.END_FRAME = "onEndFrame";
	    Event.CALL_FRAME = "onCallFrame";
	    Event.VISIBLE = "visible";
	    Event.HIDDEN = "hidden";
	    Event.COMPLETE = "onComplete";
	    Event.PROGRESS = "onProgress";
	    Event.FOCUS = "focus";
	    Event.BLUR = "blur";
	    Event.CHANGING = "changing";
	    Event.ERROR = "onError";
	    Event.ABORT = "onAbort";
	    Event.START = "onStart";
	    Event.TIMER = "onTimer";
	    Event.TIMER_COMPLETE = "onTimerComplete";
	    Event.LAYOUT_INVALID = "LAYOUT_INVALID";
	    Event.UPDATE_DATA = "UPDATE_DATA";
	    return Event;
	}(HashObject));

	var EventDispatcher = (function (_super) {
	    tslib_1.__extends(EventDispatcher, _super);
	    function EventDispatcher() {
	        var _this = _super.call(this) || this;
	        _this.eventTypes = {};
	        _this.eventTypes1 = {};
	        _this._instanceType = "EventDispatcher";
	        return _this;
	    }
	    EventDispatcher.getMouseEventCount = function (type) {
	        if (type === void 0) { type = ""; }
	        var count = 0;
	        if (type == "") {
	            for (var item in EventDispatcher._MECO) {
	                if (item.indexOf("onMouse") == 0) {
	                    count += EventDispatcher._MECO[item];
	                }
	            }
	        }
	        else {
	            if (EventDispatcher._MECO[type]) {
	                count = EventDispatcher._MECO[type];
	            }
	        }
	        return count;
	    };
	    EventDispatcher.prototype.addEventListener = function (type, listener, context, useCapture) {
	        if (useCapture === void 0) { useCapture = true; }
	        if (!type) {
	            throw new Error("娣诲姞渚﹀惉鐨則ype鍊间负undefined");
	        }
	        if (!listener) {
	            throw new Error("渚﹀惉鍥炶皟鍑芥暟涓嶈兘涓簄ull");
	        }
	        var s = this;
	        var eventTypes = s.eventTypes;
	        if (!useCapture) {
	            eventTypes = s.eventTypes1;
	        }
	        if (!eventTypes[type]) {
	            eventTypes[type] = [];
	        }
	        for (var i = 0, len = eventTypes[type].length; i < len; i++) {
	            var ee = eventTypes[type][i];
	            if (ee.fn === listener && ee.context === context) {
	                return;
	            }
	        }
	        eventTypes[type].unshift(new EE(listener, context || s));
	        if (type.indexOf("onMouse") == 0) {
	            s._changeMouseCount(type, true);
	        }
	    };
	    EventDispatcher.prototype.once = function (type, listener, context, useCapture) {
	        if (useCapture === void 0) { useCapture = true; }
	        if (!type) {
	            throw new Error("娣诲姞渚﹀惉鐨則ype鍊间负undefined");
	        }
	        if (!listener) {
	            throw new Error("渚﹀惉鍥炶皟鍑芥暟涓嶈兘涓簄ull");
	        }
	        var s = this;
	        var eventTypes = s.eventTypes;
	        if (!useCapture) {
	            eventTypes = s.eventTypes1;
	        }
	        if (!eventTypes[type]) {
	            eventTypes[type] = [];
	        }
	        eventTypes[type].unshift(new EE(listener, context || s, true));
	        if (type.indexOf("onMouse") == 0) {
	            s._changeMouseCount(type, true);
	        }
	    };
	    EventDispatcher.prototype._changeMouseCount = function (type, isAdd) {
	        var count = isAdd ? 1 : -1;
	        if (!EventDispatcher._MECO[type]) {
	            EventDispatcher._MECO[type] = 0;
	        }
	        EventDispatcher._MECO[type] += count;
	        if (EventDispatcher._MECO[type] < 0) {
	            EventDispatcher._MECO[type] = 0;
	        }
	        EventDispatcher._totalMEC += count;
	    };
	    EventDispatcher.prototype.dispatchEvent = function (event, data, useCapture) {
	        if (data === void 0) { data = null; }
	        if (useCapture === void 0) { useCapture = true; }
	        var s = this;
	        if (typeof (event) == "string") {
	            if (!s._defaultEvent) {
	                s._defaultEvent = new Event(event);
	            }
	            else {
	                s._defaultEvent.reset(event, s);
	            }
	            event = s._defaultEvent;
	        }
	        var listeners = s.eventTypes[event.type];
	        if (!useCapture) {
	            listeners = s.eventTypes1[event.type];
	        }
	        if (listeners) {
	            var len = listeners.length;
	            if (event.target == null) {
	                event.target = s;
	            }
	            if (data != null) {
	                event.data = data;
	            }
	            for (var i = len - 1; i >= 0; i--) {
	                if (!event["_pd"]) {
	                    if (listeners[i]) {
	                        var listener = listeners[i];
	                        listener.fn.call(listener.context, event);
	                        if (listener && listener.once) {
	                            s.removeEventListener(event.type, listener.fn, listener.context);
	                        }
	                    }
	                    else {
	                        listeners.splice(i, 1);
	                    }
	                }
	            }
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    EventDispatcher.prototype.hasEventListener = function (type, useCapture) {
	        if (useCapture === void 0) { useCapture = true; }
	        var s = this;
	        if (useCapture) {
	            if (s.eventTypes[type] && s.eventTypes[type].length > 0) {
	                return true;
	            }
	        }
	        else {
	            if (s.eventTypes1[type] && s.eventTypes1[type].length > 0) {
	                return true;
	            }
	        }
	        return false;
	    };
	    EventDispatcher.prototype.removeEventListener = function (type, listener, context, useCapture) {
	        if (useCapture === void 0) { useCapture = true; }
	        var s = this;
	        var listeners = s.eventTypes[type];
	        if (!useCapture) {
	            listeners = s.eventTypes1[type];
	        }
	        if (listeners) {
	            var len = listeners.length;
	            var thisObject = context || s;
	            for (var i = len - 1; i >= 0; i--) {
	                if (listeners[i].fn === listener && listeners[i].context === thisObject) {
	                    listeners.splice(i, 1);
	                    if (type.indexOf("onMouse") == 0) {
	                        s._changeMouseCount(type, false);
	                    }
	                }
	            }
	        }
	    };
	    EventDispatcher.prototype.removeAllEventListener = function () {
	        var s = this;
	        for (var type in s.eventTypes) {
	            if (type.indexOf("onMouse") == 0) {
	                for (var j = 0; j < s.eventTypes[type].length; j++) {
	                    s._changeMouseCount(type, false);
	                }
	            }
	        }
	        for (var type in s.eventTypes1) {
	            if (type.indexOf("onMouse") == 0) {
	                for (var j = 0; j < s.eventTypes1[type].length; j++) {
	                    s._changeMouseCount(type, false);
	                }
	            }
	        }
	        s.eventTypes1 = {};
	        s.eventTypes = {};
	    };
	    EventDispatcher.prototype.destroy = function () {
	        var s = this;
	        s.removeAllEventListener();
	        s.eventTypes = null;
	    };
	    EventDispatcher._MECO = {};
	    EventDispatcher._totalMEC = 0;
	    return EventDispatcher;
	}(HashObject));
	var EE = (function () {
	    function EE(fn, context, once) {
	        if (once === void 0) { once = false; }
	        this.fn = fn;
	        this.context = context;
	        this.once = once;
	    }
	    return EE;
	}());

	var ObservablePoint = (function (_super) {
	    tslib_1.__extends(ObservablePoint, _super);
	    function ObservablePoint(cb, scope, x, y) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        var _this = _super.call(this) || this;
	        var s = _this;
	        s._instanceType = "ObservablePoint";
	        _this._x = x;
	        _this._y = y;
	        _this.cb = cb;
	        _this.scope = scope;
	        return _this;
	    }
	    ObservablePoint.prototype.set = function (x, y) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        var _x = x || 0;
	        var _y = y || ((y !== 0) ? _x : 0);
	        if (this._x !== _x || this._y !== _y) {
	            this._x = _x;
	            this._y = _y;
	            this.cb.call(this.scope);
	        }
	    };
	    ObservablePoint.prototype.copy = function (point) {
	        if (this._x !== point.x || this._y !== point.y) {
	            this._x = point.x;
	            this._y = point.y;
	            this.cb.call(this.scope);
	        }
	    };
	    Object.defineProperty(ObservablePoint.prototype, "x", {
	        get: function () {
	            return this._x;
	        },
	        set: function (value) {
	            if (this._x !== value) {
	                this._x = value;
	                this.cb.call(this.scope);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ObservablePoint.prototype, "y", {
	        get: function () {
	            return this._y;
	        },
	        set: function (value) {
	            if (this._y !== value) {
	                this._y = value;
	                this.cb.call(this.scope);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ObservablePoint.prototype.destroy = function () {
	    };
	    return ObservablePoint;
	}(HashObject));

	var Point = (function (_super) {
	    tslib_1.__extends(Point, _super);
	    function Point(x, y) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        var _this = _super.call(this) || this;
	        _this.x = 0;
	        _this.y = 0;
	        var s = _this;
	        s._instanceType = "Point";
	        s.x = x;
	        s.y = y;
	        return _this;
	    }
	    Point.prototype.destroy = function () {
	    };
	    Point.distance = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        var len = args.length;
	        if (len == 4) {
	            return Math.sqrt((args[0] - args[2]) * (args[0] - args[2]) + (args[1] - args[3]) * (args[1] - args[3]));
	        }
	        else if (len == 2) {
	            return Math.sqrt((args[0].x - args[1].x) * (args[0].x - args[1].x) + (args[0].y - args[1].y) * (args[0].y - args[1].y));
	        }
	    };
	    Point.prototype.set = function (x, y) {
	        this.x = x;
	        this.y = y;
	    };
	    return Point;
	}(HashObject));

	var VERSION = "1.0";
	var devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
	var StageScaleMode = {
	    EXACT_FIT: "exactFit",
	    NO_BORDER: "noBorder",
	    NO_SCALE: "noScale",
	    SHOW_ALL: "showAll",
	    FIXED_WIDTH: "fixedWidth",
	    FIXED_HEIGHT: "fixedHeight"
	};
	var osType = (function () {
	    var n = navigator.userAgent.toLocaleLowerCase();
	    var reg1 = /android/;
	    var reg2 = /iphone|ipod|ipad/;
	    if (reg1.test(n)) {
	        return "android";
	    }
	    else if (reg2.test(n)) {
	        return "ios";
	    }
	    else {
	        return "pc";
	    }
	})();
	console.log(devicePixelRatio, osType);
	var PI = Math.PI;
	var HalfPI = PI >> 1;
	var PacPI = PI + HalfPI;
	function cos(angle) {
	    switch (angle) {
	        case HalfPI:
	        case -PacPI:
	            return 0;
	        case PI:
	        case -PI:
	            return -1;
	        case PacPI:
	        case -HalfPI:
	            return 0;
	        default:
	            return Math.cos(angle);
	    }
	}
	function sin(angle) {
	    switch (angle) {
	        case HalfPI:
	        case -PacPI:
	            return 1;
	        case PI:
	        case -PI:
	            return 0;
	        case PacPI:
	        case -HalfPI:
	            return -1;
	        default:
	            return Math.sin(angle);
	    }
	}
	var PI_2 = PI * 2;
	var RAD_TO_DEG = 180 / PI;
	var DEG_TO_RAD = PI / 180;
	(function (RENDERER_TYPE) {
	    RENDERER_TYPE["UNKNOWN"] = "unknown";
	    RENDERER_TYPE["WEBGL"] = "webgl";
	    RENDERER_TYPE["CANVAS"] = "canvas";
	})(exports.RENDERER_TYPE || (exports.RENDERER_TYPE = {}));
	(function (SHAPES) {
	    SHAPES[SHAPES["POLY"] = 0] = "POLY";
	    SHAPES[SHAPES["RECT"] = 1] = "RECT";
	    SHAPES[SHAPES["CIRC"] = 2] = "CIRC";
	    SHAPES[SHAPES["ELIP"] = 3] = "ELIP";
	    SHAPES[SHAPES["RREC"] = 4] = "RREC";
	})(exports.SHAPES || (exports.SHAPES = {}));
	(function (PRECISION) {
	    PRECISION["LOW"] = "lowp";
	    PRECISION["MEDIUM"] = "mediump";
	    PRECISION["HIGH"] = "highp";
	})(exports.PRECISION || (exports.PRECISION = {}));
	(function (TEXT_GRADIENT) {
	    TEXT_GRADIENT[TEXT_GRADIENT["LINEAR_VERTICAL"] = 0] = "LINEAR_VERTICAL";
	    TEXT_GRADIENT[TEXT_GRADIENT["LINEAR_HORIZONTAL"] = 1] = "LINEAR_HORIZONTAL";
	})(exports.TEXT_GRADIENT || (exports.TEXT_GRADIENT = {}));
	(function (TEXT_ALIGN) {
	    TEXT_ALIGN["CENTER"] = "center";
	    TEXT_ALIGN["LEFT"] = "left";
	    TEXT_ALIGN["RIGHT"] = "right";
	})(exports.TEXT_ALIGN || (exports.TEXT_ALIGN = {}));
	(function (VERTICAL_ALIGN) {
	    VERTICAL_ALIGN["MIDDLE"] = "middle";
	    VERTICAL_ALIGN["UP"] = "up";
	    VERTICAL_ALIGN["DOWN"] = "down";
	})(exports.VERTICAL_ALIGN || (exports.VERTICAL_ALIGN = {}));
	(function (TEXT_lINETYPE) {
	    TEXT_lINETYPE["SINGLE"] = "single";
	    TEXT_lINETYPE["MULTI"] = "multi";
	})(exports.TEXT_lINETYPE || (exports.TEXT_lINETYPE = {}));
	(function (LINE_ALIGNMENT) {
	    LINE_ALIGNMENT[LINE_ALIGNMENT["middle"] = 0.5] = "middle";
	    LINE_ALIGNMENT[LINE_ALIGNMENT["outter"] = 1] = "outter";
	    LINE_ALIGNMENT[LINE_ALIGNMENT["inner"] = 0] = "inner";
	})(exports.LINE_ALIGNMENT || (exports.LINE_ALIGNMENT = {}));
	(function (LINE_CAP) {
	    LINE_CAP["BUTT"] = "butt";
	    LINE_CAP["ROUND"] = "round";
	    LINE_CAP["SQUARE"] = "square";
	})(exports.LINE_CAP || (exports.LINE_CAP = {}));
	(function (LINE_JOIN) {
	    LINE_JOIN["MITER"] = "miter";
	    LINE_JOIN["ROUND"] = "round";
	    LINE_JOIN["BEVEL"] = "bevel";
	})(exports.LINE_JOIN || (exports.LINE_JOIN = {}));
	(function (BLEND_MODES) {
	    BLEND_MODES[BLEND_MODES["NORMAL"] = 0] = "NORMAL";
	    BLEND_MODES[BLEND_MODES["ADD"] = 1] = "ADD";
	    BLEND_MODES[BLEND_MODES["MULTIPLY"] = 2] = "MULTIPLY";
	    BLEND_MODES[BLEND_MODES["SCREEN"] = 3] = "SCREEN";
	    BLEND_MODES[BLEND_MODES["OVERLAY"] = 4] = "OVERLAY";
	    BLEND_MODES[BLEND_MODES["DARKEN"] = 5] = "DARKEN";
	    BLEND_MODES[BLEND_MODES["LIGHTEN"] = 6] = "LIGHTEN";
	    BLEND_MODES[BLEND_MODES["COLOR_DODGE"] = 7] = "COLOR_DODGE";
	    BLEND_MODES[BLEND_MODES["COLOR_BURN"] = 8] = "COLOR_BURN";
	    BLEND_MODES[BLEND_MODES["HARD_LIGHT"] = 9] = "HARD_LIGHT";
	    BLEND_MODES[BLEND_MODES["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
	    BLEND_MODES[BLEND_MODES["DIFFERENCE"] = 11] = "DIFFERENCE";
	    BLEND_MODES[BLEND_MODES["EXCLUSION"] = 12] = "EXCLUSION";
	    BLEND_MODES[BLEND_MODES["HUE"] = 13] = "HUE";
	    BLEND_MODES[BLEND_MODES["SATURATION"] = 14] = "SATURATION";
	    BLEND_MODES[BLEND_MODES["COLOR"] = 15] = "COLOR";
	    BLEND_MODES[BLEND_MODES["LUMINOSITY"] = 16] = "LUMINOSITY";
	    BLEND_MODES[BLEND_MODES["NORMAL_NPM"] = 17] = "NORMAL_NPM";
	    BLEND_MODES[BLEND_MODES["ADD_NPM"] = 18] = "ADD_NPM";
	    BLEND_MODES[BLEND_MODES["SCREEN_NPM"] = 19] = "SCREEN_NPM";
	})(exports.BLEND_MODES || (exports.BLEND_MODES = {}));
	(function (DRAW_MODES) {
	    DRAW_MODES[DRAW_MODES["POINTS"] = 0] = "POINTS";
	    DRAW_MODES[DRAW_MODES["LINES"] = 1] = "LINES";
	    DRAW_MODES[DRAW_MODES["LINE_LOOP"] = 2] = "LINE_LOOP";
	    DRAW_MODES[DRAW_MODES["LINE_STRIP"] = 3] = "LINE_STRIP";
	    DRAW_MODES[DRAW_MODES["TRIANGLES"] = 4] = "TRIANGLES";
	    DRAW_MODES[DRAW_MODES["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
	    DRAW_MODES[DRAW_MODES["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
	})(exports.DRAW_MODES || (exports.DRAW_MODES = {}));
	(function (SCALE_MODES) {
	    SCALE_MODES[SCALE_MODES["LINEAR"] = 0] = "LINEAR";
	    SCALE_MODES[SCALE_MODES["NEAREST"] = 1] = "NEAREST";
	})(exports.SCALE_MODES || (exports.SCALE_MODES = {}));
	(function (WRAP_MODES) {
	    WRAP_MODES[WRAP_MODES["CLAMP"] = 33071] = "CLAMP";
	    WRAP_MODES[WRAP_MODES["REPEAT"] = 10497] = "REPEAT";
	    WRAP_MODES[WRAP_MODES["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
	})(exports.WRAP_MODES || (exports.WRAP_MODES = {}));
	(function (GC_MODES) {
	    GC_MODES[GC_MODES["AUTO"] = 0] = "AUTO";
	    GC_MODES[GC_MODES["MANUAL"] = 1] = "MANUAL";
	})(exports.GC_MODES || (exports.GC_MODES = {}));
	var URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i;
	var DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
	(function (SCROLL_DIRECTION) {
	    SCROLL_DIRECTION["HORIZONTAL"] = "horizontal";
	    SCROLL_DIRECTION["VERTICAL"] = "vertical";
	})(exports.SCROLL_DIRECTION || (exports.SCROLL_DIRECTION = {}));

	var Matrix = (function (_super) {
	    tslib_1.__extends(Matrix, _super);
	    function Matrix(a, b, c, d, tx, ty) {
	        if (a === void 0) { a = 1; }
	        if (b === void 0) { b = 0; }
	        if (c === void 0) { c = 0; }
	        if (d === void 0) { d = 1; }
	        if (tx === void 0) { tx = 0; }
	        if (ty === void 0) { ty = 0; }
	        var _this = _super.call(this) || this;
	        _this.a = 1;
	        _this.b = 0;
	        _this.c = 0;
	        _this.d = 1;
	        _this.tx = 0;
	        _this.ty = 0;
	        _this.array = null;
	        _this.prepend = function (mtx) {
	            var s = this;
	            var a = mtx.a;
	            var b = mtx.b;
	            var c = mtx.c;
	            var d = mtx.d;
	            var tx = mtx.tx;
	            var ty = mtx.ty;
	            var a1 = s.a;
	            var c1 = s.c;
	            var tx1 = s.tx;
	            s.a = a * a1 + c * s.b;
	            s.b = b * a1 + d * s.b;
	            s.c = a * c1 + c * s.d;
	            s.d = b * c1 + d * s.d;
	            s.tx = a * tx1 + c * s.ty + tx;
	            s.ty = b * tx1 + d * s.ty + ty;
	        };
	        var s = _this;
	        s._instanceType = "Matrix";
	        s.a = a;
	        s.b = b;
	        s.c = c;
	        s.d = d;
	        s.tx = tx;
	        s.ty = ty;
	        return _this;
	    }
	    Matrix.prototype.clone = function () {
	        var s = this;
	        return new Matrix(s.a, s.b, s.c, s.d, s.tx, s.ty);
	    };
	    Matrix.prototype.copy = function (matrix) {
	        this.a = matrix.a;
	        this.b = matrix.b;
	        this.c = matrix.c;
	        this.d = matrix.d;
	        this.tx = matrix.tx;
	        this.ty = matrix.ty;
	        return this;
	    };
	    Matrix.prototype.transformPoint = function (x, y, bp) {
	        if (bp === void 0) { bp = null; }
	        var s = this;
	        if (!bp) {
	            bp = new Point();
	        }
	        bp.x = x * s.a + y * s.c + s.tx;
	        bp.y = x * s.b + y * s.d + s.ty;
	        return bp;
	    };
	    Matrix.prototype.transformPointInverse = function (x, y, bp) {
	        if (bp === void 0) { bp = null; }
	        if (!bp) {
	            bp = new Point();
	        }
	        var id = 1 / ((this.a * this.d) + (this.c * -this.b));
	        bp.x = (this.d * id * x) + (-this.c * id * y) + (((this.ty * this.c) - (this.tx * this.d)) * id);
	        bp.y = (this.a * id * y) + (-this.b * id * x) + (((-this.ty * this.a) + (this.tx * this.b)) * id);
	        return bp;
	    };
	    Matrix.prototype.setFrom = function (mtx) {
	        var s = this;
	        s.a = mtx.a;
	        s.b = mtx.b;
	        s.c = mtx.c;
	        s.d = mtx.d;
	        s.tx = mtx.tx;
	        s.ty = mtx.ty;
	    };
	    Matrix.prototype.identity = function () {
	        var s = this;
	        s.a = s.d = 1;
	        s.b = s.c = s.tx = s.ty = 0;
	    };
	    Matrix.prototype.invert = function () {
	        var s = this;
	        var a = s.a;
	        var b = s.b;
	        var c = s.c;
	        var d = s.d;
	        var tx = s.tx;
	        var ty = s.ty;
	        if (b == 0 && c == 0) {
	            if (a == 0 || d == 0) {
	                s.a = s.d = s.tx = s.ty = 0;
	            }
	            else {
	                a = s.a = 1 / a;
	                d = s.d = 1 / d;
	                s.tx = -a * tx;
	                s.ty = -d * ty;
	            }
	            return s;
	        }
	        var determinant = a * d - b * c;
	        if (determinant == 0) {
	            s.identity();
	            return s;
	        }
	        determinant = 1 / determinant;
	        var k = s.a = d * determinant;
	        b = s.b = -b * determinant;
	        c = s.c = -c * determinant;
	        d = s.d = a * determinant;
	        s.tx = -(k * tx + c * ty);
	        s.ty = -(b * tx + d * ty);
	        return s;
	    };
	    Matrix.prototype.createBox = function (x, y, scaleX, scaleY, rotation, skewX, skewY, ax, ay) {
	        var s = this;
	        if (rotation != 0) {
	            skewX = skewY = rotation % 360;
	        }
	        else {
	            skewX %= 360;
	            skewY %= 360;
	        }
	        if ((skewX == 0) && (skewY == 0)) {
	            s.a = scaleX;
	            s.b = s.c = 0;
	            s.d = scaleY;
	        }
	        else {
	            skewX *= DEG_TO_RAD;
	            skewY *= DEG_TO_RAD;
	            var u = cos(skewX);
	            var v = sin(skewX);
	            if (skewX == skewY) {
	                s.a = u * scaleX;
	                s.b = v * scaleX;
	            }
	            else {
	                s.a = cos(skewY) * scaleX;
	                s.b = sin(skewY) * scaleX;
	            }
	            s.c = -v * scaleY;
	            s.d = u * scaleY;
	        }
	        s.tx = x + ax - (ax * s.a + ay * s.c);
	        s.ty = y + ay - (ax * s.b + ay * s.d);
	    };
	    Matrix.prototype.append = function (matrix) {
	        var a1 = this.a;
	        var b1 = this.b;
	        var c1 = this.c;
	        var d1 = this.d;
	        this.a = (matrix.a * a1) + (matrix.b * c1);
	        this.b = (matrix.a * b1) + (matrix.b * d1);
	        this.c = (matrix.c * a1) + (matrix.d * c1);
	        this.d = (matrix.c * b1) + (matrix.d * d1);
	        this.tx = (matrix.tx * a1) + (matrix.ty * c1) + this.tx;
	        this.ty = (matrix.tx * b1) + (matrix.ty * d1) + this.ty;
	    };
	    Matrix.isEqual = function (m1, m2) {
	        return m1.tx == m2.tx && m1.ty == m2.ty && m1.a == m2.a && m1.b == m2.b && m1.c == m2.c && m1.d == m2.d;
	    };
	    Matrix.prototype.concat = function (mtx) {
	        var s = this;
	        var a = s.a, b = s.b, c = s.c, d = s.d, tx = s.tx, ty = s.ty;
	        var ma = mtx.a, mb = mtx.b, mc = mtx.c, md = mtx.d, mx = mtx.tx, my = mtx.ty;
	        s.a = a * ma + b * mc;
	        s.b = a * mb + b * md;
	        s.c = c * ma + d * mc;
	        s.d = c * mb + d * md;
	        s.tx = tx * ma + ty * mc + mx;
	        s.ty = tx * mb + ty * md + my;
	    };
	    Matrix.prototype.rotate = function (angle) {
	        var s = this;
	        var sin = Math.sin(angle), cos = Math.cos(angle), a = s.a, b = s.b, c = s.c, d = s.d, tx = s.tx, ty = s.ty;
	        s.a = a * cos - b * sin;
	        s.b = a * sin + b * cos;
	        s.c = c * cos - d * sin;
	        s.d = c * sin + d * cos;
	        s.tx = tx * cos - ty * sin;
	        s.ty = tx * sin + ty * cos;
	    };
	    Matrix.prototype.scale = function (sx, sy) {
	        var s = this;
	        s.a *= sx;
	        s.d *= sy;
	        s.c *= sx;
	        s.b *= sy;
	        s.tx *= sx;
	        s.ty *= sy;
	    };
	    Matrix.prototype.translate = function (dx, dy) {
	        var s = this;
	        s.tx += dx;
	        s.ty += dy;
	    };
	    Matrix.prototype.set = function (a, b, c, d, tx, ty) {
	        this.a = a;
	        this.b = b;
	        this.c = c;
	        this.d = d;
	        this.tx = tx;
	        this.ty = ty;
	        return this;
	    };
	    Matrix.prototype.getRotation = function () {
	        return Math.round(Math.atan2(this.b, this.a) * RAD_TO_DEG);
	    };
	    Matrix.prototype.toArray = function (transpose, out) {
	        if (transpose === void 0) { transpose = false; }
	        if (!this.array) {
	            this.array = new Float32Array(9);
	        }
	        var array = out || this.array;
	        if (transpose) {
	            array[0] = this.a;
	            array[1] = this.b;
	            array[2] = 0;
	            array[3] = this.c;
	            array[4] = this.d;
	            array[5] = 0;
	            array[6] = this.tx;
	            array[7] = this.ty;
	            array[8] = 1;
	        }
	        else {
	            array[0] = this.a;
	            array[1] = this.c;
	            array[2] = this.tx;
	            array[3] = this.b;
	            array[4] = this.d;
	            array[5] = this.ty;
	            array[6] = 0;
	            array[7] = 0;
	            array[8] = 1;
	        }
	        return array;
	    };
	    Object.defineProperty(Matrix, "IDENTITY", {
	        get: function () {
	            return new Matrix();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Matrix, "TEMP_MATRIX", {
	        get: function () {
	            return new Matrix();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Matrix.prototype.destroy = function () {
	    };
	    return Matrix;
	}(HashObject));

	var Transform = (function (_super) {
	    tslib_1.__extends(Transform, _super);
	    function Transform() {
	        var _this = _super.call(this) || this;
	        var s = _this;
	        s._instanceType = "Transform";
	        _this.worldMatrix = new Matrix();
	        _this.localMatrix = new Matrix();
	        _this._worldID = 0;
	        _this._parentID = 0;
	        _this.position = new ObservablePoint(_this.onChange, _this, 0, 0);
	        _this.scale = new ObservablePoint(_this.onChange, _this, 1, 1);
	        _this.anchor = new ObservablePoint(_this.onChange, _this, 0, 0);
	        _this.skew = new ObservablePoint(_this.updateSkew, _this, 0, 0);
	        _this._rotation = 0;
	        _this._cx = 1;
	        _this._sx = 0;
	        _this._cy = 0;
	        _this._sy = 1;
	        _this._localID = 0;
	        _this._currentLocalID = 0;
	        return _this;
	    }
	    Transform.prototype.onChange = function () {
	        this._localID++;
	    };
	    Object.defineProperty(Transform.prototype, "localID", {
	        get: function () {
	            return this._localID;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Transform.prototype.updateSkew = function () {
	        this._cx = cos(this._rotation + this.skew._y);
	        this._sx = sin(this._rotation + this.skew._y);
	        this._cy = -sin(this._rotation - this.skew._x);
	        this._sy = cos(this._rotation - this.skew._x);
	        this._localID++;
	    };
	    Transform.prototype.updateLocalMatrix = function () {
	        var lt = this.localMatrix;
	        if (this._localID !== this._currentLocalID) {
	            lt.a = this._cx * this.scale._x;
	            lt.b = this._sx * this.scale._x;
	            lt.c = this._cy * this.scale._y;
	            lt.d = this._sy * this.scale._y;
	            lt.tx = this.position._x + this.anchor._x - ((this.anchor._x * lt.a) + (this.anchor._y * lt.c));
	            lt.ty = this.position._y + this.anchor._y - ((this.anchor._x * lt.b) + (this.anchor._y * lt.d));
	            this._currentLocalID = this._localID;
	            this._parentID = -1;
	        }
	    };
	    Transform.prototype.updateWorldMatrix = function (parentTransform) {
	        var lt = this.localMatrix;
	        if (this._localID !== this._currentLocalID) {
	            lt.a = this._cx * this.scale._x;
	            lt.b = this._sx * this.scale._x;
	            lt.c = this._cy * this.scale._y;
	            lt.d = this._sy * this.scale._y;
	            lt.tx = this.position._x + this.anchor._x - ((this.anchor._x * lt.a) + (this.anchor._y * lt.c));
	            lt.ty = this.position._y + this.anchor._y - ((this.anchor._x * lt.b) + (this.anchor._y * lt.d));
	            this._currentLocalID = this._localID;
	            this._parentID = -1;
	        }
	        if (this._parentID !== parentTransform._worldID || parentTransform._worldID == -1) {
	            var pt = parentTransform.worldMatrix;
	            var wt = this.worldMatrix;
	            wt.a = (lt.a * pt.a) + (lt.b * pt.c);
	            wt.b = (lt.a * pt.b) + (lt.b * pt.d);
	            wt.c = (lt.c * pt.a) + (lt.d * pt.c);
	            wt.d = (lt.c * pt.b) + (lt.d * pt.d);
	            wt.tx = (lt.tx * pt.a) + (lt.ty * pt.c) + pt.tx;
	            wt.ty = (lt.tx * pt.b) + (lt.ty * pt.d) + pt.ty;
	            if (parentTransform._worldID == -1) {
	                this._parentID = parentTransform._worldID = 0;
	            }
	            else {
	                this._parentID = parentTransform._worldID;
	            }
	            this._worldID++;
	        }
	    };
	    Object.defineProperty(Transform.prototype, "rotation", {
	        get: function () {
	            return this._rotation;
	        },
	        set: function (value) {
	            if (value === this._rotation)
	                return;
	            this._rotation = value;
	            this.updateSkew();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Transform.prototype.destroy = function () {
	        this.worldMatrix = null;
	        this.localMatrix = null;
	        this.position = null;
	        this.skew = null;
	        this.scale = null;
	        this.anchor = null;
	    };
	    return Transform;
	}(HashObject));

	var Rectangle = (function (_super) {
	    tslib_1.__extends(Rectangle, _super);
	    function Rectangle(x, y, width, height) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        if (width === void 0) { width = 0; }
	        if (height === void 0) { height = 0; }
	        var _this = _super.call(this) || this;
	        _this.x = 0;
	        _this.y = 0;
	        _this.width = 0;
	        _this.height = 0;
	        var s = _this;
	        s._instanceType = "Rectangle";
	        s.x = x;
	        s.y = y;
	        s.height = height;
	        s.width = width;
	        _this.type = exports.SHAPES.RECT;
	        return _this;
	    }
	    Rectangle.prototype.clear = function () {
	        this.x = 0;
	        this.y = 0;
	        this.width = 0;
	        this.height = 0;
	    };
	    Rectangle.prototype.copy = function (rect) {
	        this.x = rect.x;
	        this.y = rect.y;
	        this.width = rect.width;
	        this.height = rect.height;
	        return this;
	    };
	    Rectangle.prototype.clone = function () {
	        return new Rectangle(this.x, this.y, this.width, this.height);
	    };
	    Object.defineProperty(Rectangle.prototype, "left", {
	        get: function () {
	            return this.x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "right", {
	        get: function () {
	            return this.x + this.width;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "top", {
	        get: function () {
	            return this.y;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "bottom", {
	        get: function () {
	            return this.y + this.height;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Rectangle.prototype.isPointIn = function (point) {
	        var s = this;
	        return point.x >= s.x && point.x <= (s.x + s.width) && point.y >= s.y && point.y <= (s.y + s.height);
	    };
	    Rectangle.prototype.fit = function (rectangle) {
	        var x1 = Math.max(this.x, rectangle.x);
	        var x2 = Math.min(this.x + this.width, rectangle.x + rectangle.width);
	        var y1 = Math.max(this.y, rectangle.y);
	        var y2 = Math.min(this.y + this.height, rectangle.y + rectangle.height);
	        this.x = x1;
	        this.width = Math.max(x2 - x1, 0);
	        this.y = y1;
	        this.height = Math.max(y2 - y1, 0);
	    };
	    Rectangle.createFromRects = function () {
	        var arg = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arg[_i] = arguments[_i];
	        }
	        if (arg.length == 0) {
	            return null;
	        }
	        else if (arg.length == 1) {
	            return arg[0];
	        }
	        else {
	            var rect = arg[0];
	            var x = rect.x, y = rect.y, w = rect.width, h = rect.height, wx1 = void 0, wx2 = void 0, hy1 = void 0, hy2 = void 0;
	            for (var i = 1; i < arg.length; i++) {
	                wx1 = x + w;
	                hy1 = y + h;
	                wx2 = arg[i].x + arg[i].width;
	                hy2 = arg[i].y + arg[i].height;
	                if (x > arg[i].x || wx1 == 0) {
	                    x = arg[i].x;
	                }
	                if (y > arg[i].y || hy1 == 0) {
	                    y = arg[i].y;
	                }
	                if (wx1 < wx2) {
	                    wx1 = wx2;
	                }
	                if (hy1 < hy2) {
	                    hy1 = hy2;
	                }
	                rect.x = x;
	                rect.y = y;
	                rect.width = wx1 - x;
	                rect.height = hy1 - y;
	            }
	            return rect;
	        }
	    };
	    Rectangle.createFromPoints = function (rect) {
	        var arg = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            arg[_i - 1] = arguments[_i];
	        }
	        var x = arg[0].x, y = arg[0].y, w = arg[0].x, h = arg[0].y;
	        for (var i = 1; i < arg.length; i++) {
	            if (arg[i] == null)
	                continue;
	            if (x > arg[i].x) {
	                x = arg[i].x;
	            }
	            if (y > arg[i].y) {
	                y = arg[i].y;
	            }
	            if (w < arg[i].x) {
	                w = arg[i].x;
	            }
	            if (h < arg[i].y) {
	                h = arg[i].y;
	            }
	        }
	        rect.x = x;
	        rect.y = y;
	        rect.width = w - x;
	        rect.height = h - y;
	        return rect;
	    };
	    Rectangle.createFromVertexData = function (rect, vertexData) {
	        var x = vertexData[0], y = vertexData[1], w = vertexData[0], h = vertexData[1];
	        for (var i = 2; i < vertexData.length; i += 2) {
	            if (vertexData[i] == null)
	                continue;
	            if (x > vertexData[i]) {
	                x = vertexData[i];
	            }
	            if (y > vertexData[i + 1]) {
	                y = vertexData[i + 1];
	            }
	            if (w < vertexData[i]) {
	                w = vertexData[i];
	            }
	            if (h < vertexData[i + 1]) {
	                h = vertexData[i + 1];
	            }
	        }
	        rect.x = x;
	        rect.y = y;
	        rect.width = w - x;
	        rect.height = h - y;
	        return rect;
	    };
	    Rectangle.createRectfrom2Point = function (rect, p1, p2) {
	        var x = p1.x, y = p1.y, w = p1.x, h = p1.y;
	        if (x > p2.x) {
	            x = p2.x;
	        }
	        if (y > p2.y) {
	            y = p2.y;
	        }
	        if (w < p2.x) {
	            w = p2.x;
	        }
	        if (h < p2.y) {
	            h = p2.y;
	        }
	        rect.x = x, rect.y = y, rect.width = w - x, rect.height = h - y;
	        return rect;
	    };
	    Rectangle.testRectCross = function (ra, rb) {
	        var a_cx, a_cy;
	        var b_cx, b_cy;
	        a_cx = ra.x + (ra.width / 2);
	        a_cy = ra.y + (ra.height / 2);
	        b_cx = rb.x + (rb.width / 2);
	        b_cy = rb.y + (rb.height / 2);
	        return ((Math.abs(a_cx - b_cx) <= (ra.width / 2 + rb.width / 2)) && (Math.abs(a_cy - b_cy) <= (ra.height / 2 + rb.height / 2)));
	    };
	    Rectangle.prototype.destroy = function () {
	    };
	    return Rectangle;
	}(HashObject));

	var DisplayObject = (function (_super) {
	    tslib_1.__extends(DisplayObject, _super);
	    function DisplayObject() {
	        var _this = _super.call(this) || this;
	        _this._mouseEnabled = true;
	        _this._instanceType = "DisplayObject";
	        _this.tempDisplayObjectParent = null;
	        _this.transform = new Transform();
	        _this.$alpha = 1;
	        _this.$visible = true;
	        _this.renderable = true;
	        _this.parent = null;
	        _this.worldAlpha = 1;
	        _this._localBoundsSelf = new Rectangle();
	        _this._bounds = new Rectangle();
	        _this._boundsID = 0;
	        _this._lastBoundsID = -1;
	        _this.$mask = null;
	        _this.destroyed = false;
	        _this.addEventListener(Event.ADDED_TO_STAGE, _this.attachVisibility, _this);
	        _this.addEventListener(Event.REMOVED_FROM_STAGE, _this.attachVisibility, _this);
	        return _this;
	    }
	    Object.defineProperty(DisplayObject.prototype, "mouseEnabled", {
	        get: function () {
	            return this._mouseEnabled;
	        },
	        set: function (v) {
	            this._mouseEnabled = v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "visible", {
	        get: function () {
	            return this.$visible;
	        },
	        set: function (value) {
	            if (this.$visible !== value) {
	                this.$visible = value;
	                this.attachVisibility();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "frame", {
	        get: function () {
	            return {
	                x: this.x,
	                y: this.y,
	                width: this._width,
	                height: this._height,
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DisplayObject.prototype.attachVisibility = function () {
	    };
	    Object.defineProperty(DisplayObject.prototype, "_tempDisplayObjectParent", {
	        get: function () {
	            if (this.tempDisplayObjectParent === null) {
	                this.tempDisplayObjectParent = new DisplayObject();
	            }
	            return this.tempDisplayObjectParent;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DisplayObject.prototype.updateTransform = function () {
	        this.transform.updateWorldMatrix(this.parent.transform);
	        this.worldAlpha = this.alpha * this.parent.worldAlpha;
	    };
	    DisplayObject.prototype.hitTestPoint = function (point, isMouseEvent) {
	        if (isMouseEvent === void 0) { isMouseEvent = false; }
	        var s = this;
	        if (!s.visible)
	            return null;
	        if (isMouseEvent && !s.mouseEnabled)
	            return null;
	        if (!isMouseEvent) {
	            if (s._localBoundsSelf.isPointIn(point)) {
	                return s;
	            }
	        }
	        else {
	            if (s._localBoundsSelf.isPointIn(s.globalToLocal(point, DisplayObject._bp))) {
	                return s;
	            }
	        }
	        return null;
	    };
	    DisplayObject.prototype._recursivePostUpdateTransform = function () {
	        if (this.parent) {
	            this.parent._recursivePostUpdateTransform();
	            this.transform.updateWorldMatrix(this.parent.transform);
	        }
	        else {
	            this.transform.updateWorldMatrix(this._tempDisplayObjectParent.transform);
	        }
	    };
	    DisplayObject.prototype.getBounds = function (skipUpdate, rect) {
	        if (skipUpdate === void 0) { skipUpdate = false; }
	        if (rect === void 0) { rect = DisplayObject.temBounds; }
	        if (!skipUpdate) {
	            if (!this.parent) {
	                this.parent = this._tempDisplayObjectParent;
	                this.updateTransform();
	                this.parent = null;
	            }
	            else {
	                this._recursivePostUpdateTransform();
	                this.updateTransform();
	            }
	        }
	        this.calculateBounds();
	        return rect.copy(this._bounds);
	    };
	    DisplayObject.prototype.getLocalBounds = function (rect) {
	        if (rect === void 0) { rect = DisplayObject.temBounds; }
	        var transformRef = this.transform;
	        var parentRef = this.parent;
	        this.parent = null;
	        this.transform = this._tempDisplayObjectParent.transform;
	        var bounds = this.getBounds(false, rect);
	        this.parent = parentRef;
	        this.transform = transformRef;
	        if (this.parent && this.stage) {
	            this.updateTransform();
	        }
	        return bounds;
	    };
	    DisplayObject.prototype.calculateBounds = function () {
	        if (this._lastBoundsID == this._boundsID)
	            return;
	        this._lastBoundsID = this._boundsID;
	    };
	    DisplayObject.prototype.globalToLocal = function (point, bp) {
	        if (bp === void 0) { bp = null; }
	        return this.worldMatrix.transformPointInverse(point.x, point.y, bp || DisplayObject._bp);
	    };
	    DisplayObject.prototype.localToGlobal = function (point, bp) {
	        if (bp === void 0) { bp = null; }
	        var wp = this.worldMatrix.transformPoint(point.x, point.y, bp || DisplayObject._bp);
	        if (this.stage) {
	            return this.stage.globalToLocal(wp, bp || DisplayObject._bp);
	        }
	        else {
	            return wp;
	        }
	    };
	    DisplayObject.prototype._onDispatchBubbledEvent = function (type) {
	        var s = this;
	        if (type == Event.REMOVED_FROM_STAGE && !s.stage)
	            return;
	        if (type == Event.REMOVED_FROM_STAGE) {
	            s.dispatchEvent(type);
	            s.stage = null;
	        }
	        else if (type == Event.ADDED_TO_STAGE) {
	            s.stage = s.parent.stage;
	            s.dispatchEvent(type);
	        }
	    };
	    DisplayObject.prototype.renderWebGL = function (renderer) {
	    };
	    DisplayObject.prototype.renderCanvas = function (renderer) {
	    };
	    DisplayObject.prototype.setParent = function (container) {
	        if (!container || !container.addChild) {
	            throw new Error('setParent: Argument must be a Container');
	        }
	        container.addChild(this);
	        return container;
	    };
	    DisplayObject.prototype.setTransform = function (x, y, scaleX, scaleY, rotation, skewX, skewY, anchorX, anchorY) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        if (scaleX === void 0) { scaleX = 1; }
	        if (scaleY === void 0) { scaleY = 1; }
	        if (rotation === void 0) { rotation = 0; }
	        if (skewX === void 0) { skewX = 0; }
	        if (skewY === void 0) { skewY = 0; }
	        if (anchorX === void 0) { anchorX = 0; }
	        if (anchorY === void 0) { anchorY = 0; }
	        this.position.x = x;
	        this.position.y = y;
	        this.scale.x = !scaleX ? 1 : scaleX;
	        this.scale.y = !scaleY ? 1 : scaleY;
	        this.rotation = rotation;
	        this.skew.x = skewX;
	        this.skew.y = skewY;
	        this.anchor.x = anchorX;
	        this.anchor.y = anchorY;
	        return this;
	    };
	    DisplayObject.prototype.destroy = function () {
	        this.removeAllEventListener();
	        if (this.parent) {
	            this.parent.removeChild(this);
	        }
	        this.transform.destroy();
	        this.transform = null;
	        this._localBoundsSelf = null;
	        this._bounds = null;
	        this.tempDisplayObjectParent = null;
	        this.$mask = null;
	        this.mouseEnabled = false;
	        this.destroyed = true;
	    };
	    Object.defineProperty(DisplayObject.prototype, "alpha", {
	        get: function () {
	            return this.$alpha;
	        },
	        set: function (value) {
	            if (this.$alpha != value) {
	                this.$alpha = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "x", {
	        get: function () {
	            return this.position.x;
	        },
	        set: function (value) {
	            this.transform.position.x = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "y", {
	        get: function () {
	            return this.position.y;
	        },
	        set: function (value) {
	            this.transform.position.y = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "worldMatrix", {
	        get: function () {
	            return this.transform.worldMatrix;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "localMatrix", {
	        get: function () {
	            return this.transform.localMatrix;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "position", {
	        get: function () {
	            return this.transform.position;
	        },
	        set: function (value) {
	            this.transform.position.copy(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "scale", {
	        get: function () {
	            return this.transform.scale;
	        },
	        set: function (value) {
	            this.transform.scale.copy(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "scaleX", {
	        get: function () {
	            return this.transform.scale.x;
	        },
	        set: function (value) {
	            this.transform.scale.x = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "scaleY", {
	        get: function () {
	            return this.transform.scale.y;
	        },
	        set: function (value) {
	            this.transform.scale.y = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "anchor", {
	        get: function () {
	            return this.transform.anchor;
	        },
	        set: function (value) {
	            this.transform.anchor.copy(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "anchorX", {
	        get: function () {
	            return this.transform.anchor.x;
	        },
	        set: function (value) {
	            this.transform.anchor.x = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "anchorY", {
	        get: function () {
	            return this.transform.anchor.y;
	        },
	        set: function (value) {
	            this.transform.anchor.y = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "skew", {
	        get: function () {
	            return this.transform.skew;
	        },
	        set: function (value) {
	            this.transform.skew.copy(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "rotation", {
	        get: function () {
	            return this.transform.rotation * RAD_TO_DEG;
	        },
	        set: function (value) {
	            this.transform.rotation = value * DEG_TO_RAD;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "worldVisible", {
	        get: function () {
	            if (!this.stage) {
	                return false;
	            }
	            var item = this;
	            do {
	                if (!item.visible) {
	                    return false;
	                }
	                item = item.parent;
	            } while (item);
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "mask", {
	        get: function () {
	            return this.$mask;
	        },
	        set: function (value) {
	            if (value === this) {
	                return;
	            }
	            if (this.$mask) {
	                this.$mask.renderable = true;
	                this.$mask.isUsedToMask = false;
	            }
	            this.$mask = value;
	            if (this.$mask) {
	                this.$mask.renderable = false;
	                this.$mask.isUsedToMask = true;
	                this._boundsID++;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "width", {
	        get: function () {
	            return this._width;
	        },
	        set: function (value) {
	            this._width = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DisplayObject.prototype, "height", {
	        get: function () {
	            return this._height;
	        },
	        set: function (value) {
	            this._height = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DisplayObject.prototype.update = function (deltaTime) {
	        if (this.hasEventListener(Event.ENTER_FRAME)) {
	            this.dispatchEvent(Event.ENTER_FRAME, deltaTime);
	        }
	    };
	    DisplayObject._bp = new Point();
	    DisplayObject._p1 = new Point();
	    DisplayObject._p2 = new Point();
	    DisplayObject._p3 = new Point();
	    DisplayObject._p4 = new Point();
	    DisplayObject.temBounds = new Rectangle();
	    return DisplayObject;
	}(EventDispatcher));
	DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;
	DisplayObject.prototype.displayObjectHitTestPoint = DisplayObject.prototype.hitTestPoint;

	var GDispatcher = (function () {
	    function GDispatcher() {
	    }
	    GDispatcher.addEvent = function (name, callback, thisObj) {
	        if (!this.callbackPool[name]) {
	            this.callbackPool[name] = [];
	            this.thisObjPool[name] = [];
	        }
	        var index = this.callbackPool[name].indexOf(callback);
	        if (index != -1) {
	            this.callbackPool[name][index] = callback;
	            this.thisObjPool[name][index] = thisObj;
	        }
	        else {
	            this.callbackPool[name].push(callback);
	            this.thisObjPool[name].push(thisObj);
	        }
	    };
	    GDispatcher.removeEvent = function (name, callback, thisObj) {
	        if (this.callbackPool[name]) {
	            var index = this.callbackPool[name].indexOf(callback);
	            if (index != -1) {
	                this.callbackPool[name].splice(index, 1);
	                this.thisObjPool[name].splice(index, 1);
	            }
	        }
	    };
	    GDispatcher.dispatchEvent = function (name) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var callbacks = this.callbackPool[name];
	        var thisObjs = this.thisObjPool[name];
	        if (callbacks) {
	            var i = 0;
	            var len = callbacks.length;
	            for (i; i < len; i++) {
	                callbacks[i].apply(thisObjs[i], args);
	            }
	        }
	    };
	    GDispatcher.callbackPool = {};
	    GDispatcher.thisObjPool = {};
	    return GDispatcher;
	}());

	var MouseEvent = (function (_super) {
	    tslib_1.__extends(MouseEvent, _super);
	    function MouseEvent(type) {
	        var _this = _super.call(this, type) || this;
	        _this.clientX = 0;
	        _this.clientY = 0;
	        _this.stageX = 0;
	        _this.stageY = 0;
	        _this.localX = 0;
	        _this.localY = 0;
	        _this.currentTarget = null;
	        _this.identifier = 0;
	        _this._instanceType = "MouseEvent";
	        return _this;
	    }
	    MouseEvent.prototype.updateAfterEvent = function () {
	        this.target.stage._cp = true;
	    };
	    MouseEvent.prototype.destroy = function () {
	        var s = this;
	        s.currentTarget = null;
	        _super.prototype.destroy.call(this);
	    };
	    MouseEvent.MOUSE_DOWN = "onMouseDown";
	    MouseEvent.MOUSE_UP = "onMouseUp";
	    MouseEvent.CLICK = "onMouseClick";
	    MouseEvent.MOUSE_MOVE = "onMouseMove";
	    MouseEvent.MOUSE_OVER = "onMouseOver";
	    MouseEvent.MOUSE_OUT = "onMouseOut";
	    return MouseEvent;
	}(Event));

	function applyAutoAdjust(ctor) {
	    ctor.prototype.applyAutoAdjust = function () {
	        var adjustProxy = this.adjustProxy = new AdjustProxy(this);
	        this.addEventListener(Event.ADDED_TO_STAGE, adjustProxy.onAddedToStage, adjustProxy);
	        this.addEventListener(Event.REMOVED_FROM_STAGE, adjustProxy.onRemovedFromStage, adjustProxy);
	    };
	    var temp = new AdjustProxy(null);
	    var _loop_1 = function (key) {
	        Object.defineProperty(ctor.prototype, key, {
	            get: function () {
	                return this.adjustProxy.data[key];
	            },
	            set: function (v) {
	                var adjustProxy = this.adjustProxy;
	                if (adjustProxy.data[key] !== v) {
	                    adjustProxy.data[key] = v;
	                    adjustProxy.makeDirty();
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	    };
	    for (var key in temp.data) {
	        _loop_1(key);
	    }
	}
	var AdjustProxy = (function () {
	    function AdjustProxy(host) {
	        this.data = {
	            percentWidth: NaN,
	            percentHeight: NaN,
	            left: NaN,
	            top: NaN,
	            right: NaN,
	            bottom: NaN,
	            horizonCenter: NaN,
	            verticalCenter: NaN,
	        };
	        this._host = host;
	        this.makeDirty();
	    }
	    AdjustProxy.prototype.makeDirty = function () {
	        this._sizeDirty = true;
	    };
	    AdjustProxy.prototype.onAddedToStage = function (e) {
	        this._host.parent.addEventListener(Event.RESIZE, this.onResize, this);
	        this._host.addEventListener(Event.RESIZE, this.onResize, this);
	        this._host.addEventListener(Event.ENTER_FRAME, this.onEnterFrame, this);
	    };
	    AdjustProxy.prototype.onRemovedFromStage = function (e) {
	        this._host.removeEventListener(Event.RESIZE, this.onResize, this);
	        this._host.removeEventListener(Event.ENTER_FRAME, this.onEnterFrame);
	    };
	    AdjustProxy.prototype.setFrom = function (adjustProxy) {
	        for (var k in adjustProxy.data) {
	            this.data[k] = adjustProxy.data[k];
	        }
	    };
	    AdjustProxy.prototype.onResize = function (e) {
	        this._sizeDirty = true;
	    };
	    AdjustProxy.prototype.onEnterFrame = function (e) {
	        if (this._sizeDirty) {
	            this._sizeDirty = false;
	            this.adjustLayout();
	        }
	    };
	    AdjustProxy.prototype.adjustLayout = function () {
	        var that = this._host;
	        var _a = that.parent, pWidth = _a.width, pHeight = _a.height;
	        var width = that.width, height = that.height;
	        var _b = this.data, percentWidth = _b.percentWidth, percentHeight = _b.percentHeight, left = _b.left, top = _b.top, right = _b.right, bottom = _b.bottom, horizonCenter = _b.horizonCenter, verticalCenter = _b.verticalCenter;
	        var applyPercentWidth = function () {
	            if (t(percentWidth)) {
	                that.width = pWidth * percentWidth / 100;
	            }
	        };
	        var applyPercentHeight = function () {
	            if (t(percentHeight)) {
	                that.height = pHeight * percentHeight / 100;
	            }
	        };
	        var pw = true, ph = true;
	        if (t(horizonCenter)) {
	            applyPercentWidth();
	            that.x = (pWidth - that.width) / 2 + horizonCenter;
	        }
	        else {
	            if (t(left)) {
	                that.x = left;
	                if (t(right)) {
	                    that.width = pWidth - left - right;
	                    pw = false;
	                }
	            }
	            else if (t(right)) {
	                that.x = pWidth - width - right;
	            }
	            if (pw) {
	                applyPercentWidth();
	            }
	        }
	        if (t(verticalCenter)) {
	            applyPercentHeight();
	            that.y = (pHeight - that.height) / 2 + verticalCenter;
	        }
	        else {
	            if (t(top)) {
	                that.y = top;
	                if (t(bottom)) {
	                    that.height = pHeight - top - bottom;
	                    ph = false;
	                }
	            }
	            else if (t(bottom)) {
	                that.y = pHeight - height - bottom;
	            }
	            if (ph) {
	                applyPercentHeight();
	            }
	        }
	    };
	    return AdjustProxy;
	}());
	function t(v) {
	    return !isNaN(v) && v !== null && v !== undefined;
	}

	var ESCAPE_REG_EXP = /\$\{[\u4e00-\u9fa5_a-zA-Z0-9\|]+\}/g;
	var linkedFlag = '$_linked_$';
	var nodeScheme = 'node://';
	var linkScheme = 'link://';
	function arrayFind(arr, predicate) {
	    if (!arr) {
	        return;
	    }
	    for (var i = 0, li = arr.length; i < li; i++) {
	        var item = arr[i];
	        if (predicate(item, i, arr)) {
	            return item;
	        }
	    }
	}
	function objClone(obj) {
	    return obj ? JSON.parse(JSON.stringify(obj)) : obj;
	}
	var percentKeys = ['width', 'height'];
	function propertyParse(key, node, properties) {
	    var value = properties[key];
	    var targetKey = key;
	    if (percentKeys.indexOf(key) >= 0) {
	        if (typeof value === 'string') {
	            if (value[value.length - 1] === '%') {
	                targetKey = 'percent' + key[0].toUpperCase() + key.substr(1);
	            }
	            value = parseInt(value);
	        }
	    }
	    node[targetKey] = value;
	}
	function getDataByPath(scope, path, throwException) {
	    var func = new Function('scope', "return scope" + (path ? ('.' + path) : ''));
	    try {
	        return func(scope);
	    }
	    catch (e) {
	        if (throwException) {
	            throw e;
	        }
	    }
	}
	function safeEval(code, throwException) {
	    if (throwException === void 0) { throwException = false; }
	    var func = new Function(code);
	    try {
	        return func();
	    }
	    catch (e) {
	        if (throwException) {
	            throw e;
	        }
	    }
	}
	function injectProp(target, data, callback, ignoreMethod, ignoreNull) {
	    if (ignoreMethod === void 0) { ignoreMethod = true; }
	    if (ignoreNull === void 0) { ignoreNull = true; }
	    if (!target || !data) {
	        return false;
	    }
	    var result = false;
	    for (var key in data) {
	        var value = data[key];
	        if ((!ignoreMethod || typeof value != 'function') && (!ignoreNull || value != null)) {
	            if (callback) {
	                callback(target, key, value);
	            }
	            else {
	                try {
	                    target[key] = value;
	                }
	                catch (e) {
	                }
	            }
	            result = true;
	        }
	    }
	    return result;
	}
	function copyProp(target, data, config) {
	    if (data) {
	        for (var key in config) {
	            var valueConfig = config[key];
	            if (Array.isArray(valueConfig)) {
	                target[key] = {};
	                for (var _i = 0, valueConfig_1 = valueConfig; _i < valueConfig_1.length; _i++) {
	                    var field = valueConfig_1[_i];
	                    target[key][field] = data[key][field];
	                }
	            }
	            else if (typeof valueConfig === 'string') {
	                target[valueConfig] = data[valueConfig];
	            }
	            else if (typeof valueConfig === 'object') {
	                target[key] = {};
	                copyProp(target[key], data[key], valueConfig);
	            }
	        }
	    }
	}
	function obj2query(obj) {
	    if (!obj) {
	        return '';
	    }
	    var arr = [];
	    for (var key in obj) {
	        arr.push(key + (key ? '=' : '') + obj[key]);
	    }
	    return arr.join('&');
	}
	function requireForCJS(id) {
	    return window[id];
	}
	function importCJSCode(code, node) {
	    if (node) {
	        var create = new Function('module', 'require', code);
	        var module = {
	            exports: {},
	        };
	        create(module, requireForCJS);
	        return module.exports;
	    }
	    else {
	        var create = new Function('exports', code);
	        var exports = {};
	        create(exports);
	        return exports.default;
	    }
	}
	function importUMDCode(code) {
	    var create = new Function('exports', code);
	    var exports = {};
	    create.call(exports);
	    return exports;
	}
	function trimChar(str, char) {
	    if (!str || !char) {
	        return;
	    }
	    while (true) {
	        var len = str.length, from = 0, end = len;
	        if (str[0] === char) {
	            from = 1;
	        }
	        if (str[len - 1] === char) {
	            end = len - 1;
	        }
	        str = str.substring(from, end);
	        if (str.length == len) {
	            break;
	        }
	    }
	    return str;
	}
	function joinPath() {
	    var segments = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        segments[_i] = arguments[_i];
	    }
	    var result = [];
	    for (var _a = 0, segments_1 = segments; _a < segments_1.length; _a++) {
	        var segment = segments_1[_a];
	        result.push(trimChar(segment, '/'));
	    }
	    return result.join('/');
	}
	function findVariable(name) {
	    var contexts = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        contexts[_i - 1] = arguments[_i];
	    }
	    var result;
	    for (var _a = 0, contexts_1 = contexts; _a < contexts_1.length; _a++) {
	        var context = contexts_1[_a];
	        if (context) {
	            result = context[name];
	            if (result !== undefined) {
	                break;
	            }
	        }
	    }
	    return result;
	}
	var el;
	function htmlToPureText(htmlText) {
	    if (!el) {
	        el = document.createElement('div');
	    }
	    el.innerHTML = htmlText;
	    document.body.appendChild(el);
	    var pureText = el.innerText;
	    document.body.removeChild(el);
	    return pureText;
	}
	var zhReg = /[\u4e00-\u9fa5]/;
	function strLen(str) {
	    var len = 0;
	    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
	        var char = str_1[_i];
	        len += char.match(zhReg) ? 2 : 1;
	    }
	    return len;
	}
	function strShort(str, limit, replace) {
	    if (replace === void 0) { replace = '鈥�'; }
	    var result = '';
	    if (strLen(str) > limit) {
	        var len = 0;
	        for (var i = 0, li = str.length; i < li; i++) {
	            var char = str[i];
	            len += char.match(zhReg) ? 2 : 1;
	            if (len > limit) {
	                result += replace;
	                break;
	            }
	            else {
	                result += char;
	            }
	        }
	    }
	    else {
	        result = str;
	    }
	    return result;
	}
	function instantiateScript(node, ScriptConfig) {
	    var scriptName = ScriptConfig.script, props = ScriptConfig.props, disabled = ScriptConfig.disabled;
	    var script = node.scripts.add(scriptName, props, disabled);
	}
	var cmdPrefix = 'z-';
	var cmdOldPrefix = '//z-';
	function injectProperties(target, source) {
	    for (var key in source) {
	        if (key.indexOf('//') !== 0 && !source.hasOwnProperty(cmdPrefix + key)) {
	            propertyParse(key, target, source);
	        }
	    }
	    return target;
	}
	function traverseViewNode(node, callback, includeSelf) {
	    if (includeSelf === void 0) { includeSelf = false; }
	    if (includeSelf) {
	        callback(node);
	    }
	    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
	        var child = _a[_i];
	        callback(child, node);
	        if (child.children && child.children.length > 0) {
	            traverseViewNode(child, callback);
	        }
	    }
	}

	function transPoint(str, sep) {
	    if (sep === void 0) { sep = ','; }
	    if (str) {
	        var arr = str.split(sep);
	        return {
	            x: parseFloat(arr[0]),
	            y: parseFloat(arr[1] === undefined ? '0' : arr[1]),
	        };
	    }
	}

	var rotateLeft = function (lValue, iShiftBits) {
	    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
	};
	var addUnsigned = function (lX, lY) {
	    var lX4, lY4, lX8, lY8, lResult;
	    lX8 = (lX & 0x80000000);
	    lY8 = (lY & 0x80000000);
	    lX4 = (lX & 0x40000000);
	    lY4 = (lY & 0x40000000);
	    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
	    if (lX4 & lY4)
	        return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
	    if (lX4 | lY4) {
	        if (lResult & 0x40000000)
	            return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
	        else
	            return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
	    }
	    else {
	        return (lResult ^ lX8 ^ lY8);
	    }
	};
	var F = function (x, y, z) {
	    return (x & y) | ((~x) & z);
	};
	var G = function (x, y, z) {
	    return (x & z) | (y & (~z));
	};
	var H = function (x, y, z) {
	    return (x ^ y ^ z);
	};
	var I = function (x, y, z) {
	    return (y ^ (x | (~z)));
	};
	var FF = function (a, b, c, d, x, s, ac) {
	    a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
	    return addUnsigned(rotateLeft(a, s), b);
	};
	var GG = function (a, b, c, d, x, s, ac) {
	    a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
	    return addUnsigned(rotateLeft(a, s), b);
	};
	var HH = function (a, b, c, d, x, s, ac) {
	    a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
	    return addUnsigned(rotateLeft(a, s), b);
	};
	var II = function (a, b, c, d, x, s, ac) {
	    a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
	    return addUnsigned(rotateLeft(a, s), b);
	};
	var convertToWordArray = function (string) {
	    var lWordCount;
	    var lMessageLength = string.length;
	    var lNumberOfWordsTempOne = lMessageLength + 8;
	    var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
	    var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
	    var lWordArray = Array(lNumberOfWords - 1);
	    var lBytePosition = 0;
	    var lByteCount = 0;
	    while (lByteCount < lMessageLength) {
	        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	        lBytePosition = (lByteCount % 4) * 8;
	        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
	        lByteCount++;
	    }
	    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	    lBytePosition = (lByteCount % 4) * 8;
	    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
	    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	    return lWordArray;
	};
	var wordToHex = function (lValue) {
	    var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
	    for (lCount = 0; lCount <= 3; lCount++) {
	        lByte = (lValue >>> (lCount * 8)) & 255;
	        WordToHexValueTemp = "0" + lByte.toString(16);
	        WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
	    }
	    return WordToHexValue;
	};
	var uTF8Encode = function (string) {
	    string = string.replace(/\x0d\x0a/g, "\x0a");
	    var output = "";
	    for (var n = 0; n < string.length; n++) {
	        var c = string.charCodeAt(n);
	        if (c < 128) {
	            output += String.fromCharCode(c);
	        }
	        else if ((c > 127) && (c < 2048)) {
	            output += String.fromCharCode((c >> 6) | 192);
	            output += String.fromCharCode((c & 63) | 128);
	        }
	        else {
	            output += String.fromCharCode((c >> 12) | 224);
	            output += String.fromCharCode(((c >> 6) & 63) | 128);
	            output += String.fromCharCode((c & 63) | 128);
	        }
	    }
	    return output;
	};
	function md5(string) {
	    var k, AA, BB, CC, DD, a, b, c, d;
	    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
	    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
	    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
	    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
	    string = uTF8Encode(string);
	    var x = convertToWordArray(string);
	    a = 0x67452301;
	    b = 0xEFCDAB89;
	    c = 0x98BADCFE;
	    d = 0x10325476;
	    for (k = 0; k < x.length; k += 16) {
	        AA = a;
	        BB = b;
	        CC = c;
	        DD = d;
	        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
	        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
	        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
	        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
	        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
	        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
	        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
	        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
	        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
	        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
	        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
	        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
	        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
	        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
	        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
	        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
	        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
	        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
	        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
	        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
	        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
	        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
	        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
	        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
	        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
	        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
	        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
	        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
	        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
	        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
	        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
	        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
	        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
	        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
	        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
	        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
	        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
	        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
	        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
	        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
	        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
	        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
	        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
	        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
	        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
	        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
	        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
	        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
	        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
	        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
	        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
	        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
	        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
	        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
	        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
	        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
	        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
	        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
	        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
	        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
	        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
	        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
	        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
	        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
	        a = addUnsigned(a, AA);
	        b = addUnsigned(b, BB);
	        c = addUnsigned(c, CC);
	        d = addUnsigned(d, DD);
	    }
	    var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
	    return tempValue.toLowerCase();
	}

	var ObjectPool = (function () {
	    function ObjectPool() {
	    }
	    ObjectPool.registerPool = function (name, createMethod, initMethod) {
	        if (initMethod === void 0) { initMethod = null; }
	        this.createMethods[name] = createMethod;
	        this.initMethods[name] = initMethod;
	        this.pools[name] = [];
	    };
	    ObjectPool.getObject = function (name) {
	        var params = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            params[_i - 1] = arguments[_i];
	        }
	        var pool = this.pools[name];
	        if (!pool) {
	            console.warn(name + "娌℃湁娉ㄥ唽鍦ㄥ璞℃睜涓€�");
	            return null;
	        }
	        var obj;
	        if (pool.length > 0) {
	            obj = pool.pop();
	        }
	        else {
	            var createMethod = this.createMethods[name];
	            obj = createMethod.apply(null, params);
	        }
	        var initMethod = this.initMethods[name];
	        if (initMethod) {
	            params.unshift(obj);
	            initMethod.apply(null, params);
	        }
	        this.debug();
	        return obj;
	    };
	    ObjectPool.recycleObject = function (name, obj) {
	        if (!obj) {
	            return;
	        }
	        var pool = this.pools[name];
	        if (!pool) {
	            console.warn(name + "娌℃湁娉ㄥ唽鍦ㄥ璞℃睜涓€�");
	            return;
	        }
	        if (pool.indexOf(obj) < 0 && pool.length <= this.MAX) {
	            pool.push(obj);
	        }
	        this.debug();
	    };
	    ObjectPool.debug = function () {
	        var text = "";
	        for (var key in this.pools) {
	            var pool = this.pools[key];
	            text += key + ":" + pool.length + "\n";
	        }
	    };
	    ObjectPool.MAX = 50;
	    ObjectPool.createMethods = {};
	    ObjectPool.initMethods = {};
	    ObjectPool.pools = {};
	    return ObjectPool;
	}());

	var scriptDefs = {};
	function applyScript(ctor) {
	    ctor.prototype.applyScripts = function () {
	        var scriptsProxy = this.scripts = new ScriptsProxy(this);
	        this.addEventListener(Event.ENTER_FRAME, scriptsProxy.onEnterFrame, scriptsProxy);
	        this.addEventListener(Event.ADDED_TO_STAGE, scriptsProxy.onAddedToStage, scriptsProxy);
	        this.addEventListener(Event.REMOVED_FROM_STAGE, scriptsProxy.onRemovedFromStage, scriptsProxy);
	    };
	}
	var ScriptBase = (function () {
	    function ScriptBase() {
	    }
	    Object.defineProperty(ScriptBase.prototype, "host", {
	        get: function () {
	            return this._host;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScriptBase.prototype, "disabled", {
	        get: function () {
	            return this._disabled;
	        },
	        set: function (v) {
	            if (this._disabled !== v) {
	                this._disabled = v;
	                if (this._disabled) {
	                    this.sleep();
	                }
	                else {
	                    this.awake();
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScriptBase.prototype.mounted = function () {
	    };
	    ScriptBase.prototype.destroy = function () {
	    };
	    ScriptBase.prototype.update = function (t) {
	    };
	    ScriptBase.prototype.awake = function () {
	    };
	    ScriptBase.prototype.sleep = function () {
	    };
	    return ScriptBase;
	}());
	function registerScriptDef(id, def) {
	    scriptDefs[id] = def;
	}
	function registerScripts(scripts) {
	    for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
	        var script = scripts_1[_i];
	        var id = script.id, code = script.code;
	        var def = importCJSCode(code);
	        registerScriptDef(id, def);
	    }
	}
	var ScriptsProxy = (function () {
	    function ScriptsProxy(host) {
	        this._scripts = [];
	        this._host = host;
	    }
	    Object.defineProperty(ScriptsProxy.prototype, "host", {
	        get: function () {
	            return this._host;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScriptsProxy.prototype.add = function (name, options, disabled) {
	        if (disabled === void 0) { disabled = false; }
	        var def = scriptDefs[name];
	        if (!def) {
	            console.warn("script[" + name + "] def not exists");
	            return;
	        }
	        var script = new def();
	        script['_host'] = this._host;
	        script['_disabled'] = disabled;
	        for (var k in options) {
	            script[k] = options[k];
	        }
	        this._scripts.push(script);
	        script.mounted && script.mounted();
	        if (this._host && this._host.stage) {
	            script.awake && script.awake();
	        }
	        return script;
	    };
	    ScriptsProxy.prototype.remove = function (index) {
	        var script = this._scripts.splice(index, 1)[0];
	        if (script) {
	            if (this._host && this._host.stage) {
	                script.sleep && script.sleep();
	            }
	            script.destroy && script.destroy();
	        }
	        return script;
	    };
	    Object.defineProperty(ScriptsProxy.prototype, "all", {
	        get: function () {
	            return this._scripts;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScriptsProxy.prototype.get = function (id) {
	        return this._scripts.filter(function (script) {
	            return script.constructor['id'] === id;
	        });
	    };
	    ScriptsProxy.prototype.onAddedToStage = function () {
	        for (var _i = 0, _a = this._scripts; _i < _a.length; _i++) {
	            var script = _a[_i];
	            if (!script.disabled) {
	                script.awake && script.awake();
	            }
	        }
	    };
	    ScriptsProxy.prototype.onRemovedFromStage = function () {
	        for (var _i = 0, _a = this._scripts; _i < _a.length; _i++) {
	            var script = _a[_i];
	            if (!script.disabled) {
	                script.sleep && script.sleep();
	            }
	        }
	    };
	    ScriptsProxy.prototype.onEnterFrame = function (e) {
	        var t = e.data;
	        for (var _i = 0, _a = this._scripts; _i < _a.length; _i++) {
	            var script = _a[_i];
	            if (!script.disabled) {
	                script.update && script.update(t);
	            }
	        }
	    };
	    return ScriptsProxy;
	}());

	var DataCenter = (function (_super) {
	    tslib_1.__extends(DataCenter, _super);
	    function DataCenter() {
	        var _this = _super.call(this) || this;
	        _this.store = {};
	        _this.dataMappings = [];
	        return _this;
	    }
	    DataCenter.prototype.registerGroup = function (name, origin) {
	        return this.store[name] = origin === undefined ? {} : origin;
	    };
	    DataCenter.prototype.unregisterGroup = function (name) {
	        delete this.store[name];
	    };
	    DataCenter.prototype.getGroup = function (name) {
	        return this.store[name];
	    };
	    DataCenter.prototype.getDataByPath = function (path, groupName, throwException) {
	        var scope;
	        if (groupName === undefined) {
	            scope = this.store;
	        }
	        else {
	            var group = this.getGroup(groupName);
	            scope = group === undefined ? this.store : group;
	        }
	        return getDataByPath(scope, path, throwException);
	    };
	    DataCenter.prototype.getDataByName = function (name, throwException) {
	        var dataMapping = this.getDataMapping(name);
	        if (dataMapping) {
	            return getDataByPath(this.store, dataMapping.path, throwException);
	        }
	    };
	    DataCenter.prototype.formatString = function (str, escapes) {
	        var result = str;
	        for (var _i = 0, escapes_1 = escapes; _i < escapes_1.length; _i++) {
	            var escape = escapes_1[_i];
	            var args = escape.split('|');
	            var name = args[0];
	            var dataMapping = this.getDataMapping(name);
	            try {
	                var data = this.getDataByPath(dataMapping.path, undefined, false);
	                if (args[1] !== undefined) {
	                    data = data[args[1]];
	                }
	                if (data === undefined) {
	                    data = '';
	                }
	                result = result.replace(new RegExp('\\$\\{' + escape.replace(/\|/g, '\\|') + '\\}', 'g'), data);
	            }
	            catch (e) {
	            }
	        }
	        return result;
	    };
	    DataCenter.prototype.increase = function (groupName, step, path, dispatch) {
	        if (dispatch === void 0) { dispatch = true; }
	        if (step < 0 || step > 0) {
	            var data = this.getDataByPath(path, groupName);
	            if (data === undefined) {
	                data = 0;
	            }
	            else {
	                data = parseInt(data);
	            }
	            data += step;
	            this.mutate(groupName, data, path, dispatch);
	        }
	    };
	    DataCenter.prototype.mutate = function (groupName, data, path, dispatch) {
	        if (dispatch === void 0) { dispatch = true; }
	        if (!groupName) {
	            return;
	        }
	        var group = this.getGroup(groupName);
	        if (!group) {
	            group = this.registerGroup(groupName);
	        }
	        if (data !== undefined) {
	            if (path) {
	                var func = new Function('scope', 'data', "scope." + path + "=data");
	                try {
	                    func(group, data);
	                }
	                catch (e) {
	                    console.warn(e);
	                }
	            }
	            else {
	                this.registerGroup(groupName, data);
	            }
	        }
	        if (dispatch) {
	            for (var _i = 0, _a = this.dataMappings; _i < _a.length; _i++) {
	                var dataMapping = _a[_i];
	                if (dataMapping.path.indexOf(groupName) === 0) {
	                    this.dispatchEvent(dataMapping.name, {
	                        name: dataMapping.name,
	                        path: dataMapping.path,
	                        data: this.getDataByPath(dataMapping.path),
	                    });
	                }
	            }
	        }
	        globalEvent.dispatchEvent(DATA_CENTER_EVENT, {
	            name: groupName,
	            path: path,
	            data: data,
	        });
	    };
	    DataCenter.prototype.dataMapping = function (name, path) {
	        var dataMapping = { name: name, path: path };
	        this.dataMappings.push(dataMapping);
	    };
	    DataCenter.prototype.getDataMapping = function (name) {
	        return arrayFind(this.dataMappings, function (dataMapping) { return dataMapping.name === name; });
	    };
	    DataCenter.prototype.registerDataMapping = function (dataMapping) {
	        for (var _i = 0, dataMapping_1 = dataMapping; _i < dataMapping_1.length; _i++) {
	            var item = dataMapping_1[_i];
	            this.dataMapping(item.name, item.path);
	        }
	    };
	    return DataCenter;
	}(EventDispatcher));
	var dataCenter = new DataCenter();

	var env = {};
	function injectEnv(data) {
	    if (data) {
	        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
	            var _a = data_1[_i], name = _a.name, value = _a.value;
	            env[name] = value;
	        }
	    }
	}

	var storeKey = 'zlog-switch';
	(function (Logs) {
	    Logs["PROCESS"] = "process";
	})(exports.Logs || (exports.Logs = {}));
	var store;
	try {
	    store = JSON.parse(localStorage.getItem(storeKey));
	    store = store === null ? false : store;
	}
	catch (e) {
	    store = false;
	    localStorage.setItem(storeKey, JSON.stringify(store));
	}
	function getLogSwitch(id) {
	    return typeof store === 'object' ? store[id] : !!store;
	}

	var logConfig = getLogSwitch(exports.Logs.PROCESS);
	function logProcess(meta, vm, process) {
	    var params = [];
	    for (var _i = 3; _i < arguments.length; _i++) {
	        params[_i - 3] = arguments[_i];
	    }
	    var ci = (vm.id * 65) % 360;
	    var logStyle = "color: hsl(" + ci + ",65%,75%)";
	    var showLog = false;
	    if (typeof logConfig === 'boolean') {
	        showLog = logConfig;
	    }
	    else if (logConfig.indexOf(meta.id) >= 0 || logConfig.indexOf(meta.name) >= 0) {
	        showLog = true;
	    }
	    if (showLog) {
	        console.log.apply(console, ["%c[" + vm.id + ":" + process.id + "]", logStyle].concat(params));
	    }
	}
	var Process = (function () {
	    function Process(id) {
	        this.id = id;
	        this._scope = {};
	    }
	    Object.defineProperty(Process.prototype, "processConfig", {
	        get: function () {
	            return this._config;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Process.prototype, "parent", {
	        get: function () {
	            return this._parent;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Process.prototype, "sequence", {
	        get: function () {
	            return this._sequence;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Process.prototype, "scope", {
	        get: function () {
	            return this._scope;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Process.prototype.init = function (context) {
	        var vm = context.vm, parent = context.parent, sequence = context.sequence, id = context.id, target = context.target;
	        this._vm = vm;
	        this._parent = parent;
	        this._config = sequence[id];
	        this._sequence = sequence;
	        this._target = target;
	        if (!this._config._originProps && this._config.props) {
	            this._config._originProps = objClone(this._config.props);
	        }
	    };
	    Process.prototype.execute = function (args) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var payload, metaConfig, meta, result, p, i, li, key, scriptResult, subProcessResult;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        payload = objClone(args);
	                        metaConfig = this._config.meta;
	                        if (metaConfig) {
	                            this._meta = meta = this.getProcessMeta(metaConfig);
	                        }
	                        if (!meta) {
	                            console.warn("meta [" + metaConfig + "] is not found");
	                            return [2];
	                        }
	                        logProcess(meta, this._vm, this, "execute [" + (this._config.alias || meta.name || meta.id) + "]");
	                        if (!meta.isDivider) return [3, 6];
	                        p = void 0;
	                        i = 0, li = meta.output.length;
	                        _a.label = 1;
	                    case 1:
	                        if (!(i < li)) return [3, 5];
	                        key = meta.output[i];
	                        p = this._executeNextProcess(key, payload);
	                        if (!(i === li - 1)) return [3, 3];
	                        return [4, p];
	                    case 2:
	                        result = _a.sent();
	                        return [3, 4];
	                    case 3:
	                        p.catch(function (e) {
	                            console.warn(e);
	                        });
	                        _a.label = 4;
	                    case 4:
	                        i++;
	                        return [3, 1];
	                    case 5: return [3, 12];
	                    case 6: return [4, this._executeMetaScript('', payload, metaConfig)];
	                    case 7:
	                        scriptResult = _a.sent();
	                        subProcessResult = void 0;
	                        if (!(this._meta.sub && Object.keys(this._meta.sub).length > 1)) return [3, 9];
	                        return [4, this._executeSubProcess(scriptResult.type, scriptResult.payload)];
	                    case 8:
	                        subProcessResult = _a.sent();
	                        return [3, 10];
	                    case 9:
	                        subProcessResult = scriptResult;
	                        _a.label = 10;
	                    case 10: return [4, this._executeNextProcess(subProcessResult.type, subProcessResult.payload)];
	                    case 11:
	                        result = _a.sent();
	                        _a.label = 12;
	                    case 12: return [2, result];
	                }
	            });
	        });
	    };
	    Process.prototype._executeMetaScript = function (type, payload, meta) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var result, metaConfig, func, globalContext;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        result = {
	                            type: type, payload: payload
	                        };
	                        if (!this._meta) return [3, 5];
	                        metaConfig = this._meta;
	                        if (!metaConfig) return [3, 4];
	                        this.updateProps(this._config.props = {}, payload, this._config._originProps, this._meta.props);
	                        if (!metaConfig.script) return [3, 3];
	                        func = void 0;
	                        if (metaConfig.script.indexOf(linkScheme) === 0) {
	                            func = this._vm.getScript(metaConfig.script.replace(linkScheme, ''));
	                        }
	                        else {
	                            func = new Function('args', 'props', 'target', 'global', 'vm', 'scope', warpAsyncScript(metaConfig.script));
	                        }
	                        if (!func) return [3, 2];
	                        globalContext = this._vm.globalContext;
	                        globalContext.gameStage = engine.gameStage;
	                        globalContext.dataCenter = engine.gameStage.dataCenter;
	                        globalContext.env = engine.env;
	                        return [4, func(payload, this._config.props, this._target, globalContext, this._vm, this._parent.scope)];
	                    case 1:
	                        result = _a.sent();
	                        logProcess(metaConfig, this._vm, this, "output: <" + result.type + ">", result.payload);
	                        return [3, 3];
	                    case 2:
	                        console.warn('script lose:', metaConfig.script);
	                        _a.label = 3;
	                    case 3: return [3, 5];
	                    case 4:
	                        console.warn("process meta [" + meta + "] not found");
	                        _a.label = 5;
	                    case 5: return [2, result];
	                }
	            });
	        });
	    };
	    Process.prototype._executeSubProcess = function (type, payload) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var result, _a, sub, subEntry;
	            return tslib_1.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        result = {
	                            type: type, payload: payload
	                        };
	                        if (!this._meta) return [3, 2];
	                        _a = this._meta, sub = _a.sub, subEntry = _a.subEntry;
	                        if (!sub) return [3, 2];
	                        return [4, this._vm.executeProcess(objClone(sub), subEntry, this, payload)];
	                    case 1:
	                        result = _b.sent();
	                        _b.label = 2;
	                    case 2: return [2, result];
	                }
	            });
	        });
	    };
	    Process.prototype._executeNextProcess = function (type, payload) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var result, output, nextPids;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        result = { type: type, payload: payload };
	                        if (!this._config.output) return [3, 2];
	                        output = this._config.output;
	                        if (!output.hasOwnProperty(type)) return [3, 2];
	                        nextPids = output[type];
	                        if (!(nextPids.length > 0)) return [3, 2];
	                        return [4, this._vm.executeProcess(this._sequence, nextPids[0], this.parent, payload)];
	                    case 1:
	                        result = _a.sent();
	                        _a.label = 2;
	                    case 2: return [2, result];
	                }
	            });
	        });
	    };
	    Process.prototype.getProcessMeta = function (id) {
	        var meta;
	        if (this._meta && this._meta.metas) {
	            for (var _i = 0, _a = this._meta.metas; _i < _a.length; _i++) {
	                var temp = _a[_i];
	                if (temp.id === id) {
	                    meta = temp;
	                    break;
	                }
	            }
	        }
	        if (!meta) {
	            meta = this._parent ? this._parent.getProcessMeta(id) : null;
	        }
	        if (!meta) {
	            meta = this._vm.getMeta(id);
	        }
	        return meta;
	    };
	    Process.prototype.getProps = function (key) {
	        if (key && this._config.props) {
	            return this._config.props[key];
	        }
	        return this._config.props;
	    };
	    Process.prototype.updateProps = function (props, args, originProps, propsConfig) {
	        if (originProps) {
	            for (var key in propsConfig) {
	                var value = originProps[key];
	                var valueType = typeof value;
	                if (valueType == 'object') {
	                    var name = value.value;
	                    switch (value.type) {
	                        case 'link':
	                            var linkedValue = this.resolveLinkedProp(value, key);
	                            if (linkedValue !== undefined) {
	                                props[key] = linkedValue;
	                            }
	                            else {
	                                props[key] = undefined;
	                            }
	                            break;
	                        case 'static':
	                            props[key] = name;
	                            break;
	                        case 'scope':
	                            props[key] = getDataByPath(this._parent.scope, name);
	                            break;
	                        case 'arguments':
	                            props[key] = args ? getDataByPath(args, name) : undefined;
	                            break;
	                        case 'data-center':
	                            var nameValue = dataCenter.getDataByName(name);
	                            props[key] = nameValue !== undefined ? nameValue : dataCenter.getDataByPath(name);
	                            break;
	                        case 'env':
	                            props[key] = getDataByPath(env, name);
	                            break;
	                        case 'map':
	                            this.updateProps(props[key] = {}, args, name, name);
	                            break;
	                    }
	                }
	                else if (value && value.indexOf && value.indexOf(nodeScheme) === 0) {
	                    var uuid = value.replace(nodeScheme, '');
	                    if (uuid) {
	                        props[key] = this._vm.globalContext.gameStage.findChildByUUID(uuid);
	                    }
	                }
	                else if (originProps[key] !== undefined) {
	                    props[key] = originProps[key];
	                }
	                if (props[key] === undefined && propsConfig[key].hasOwnProperty('default')) {
	                    props[key] = propsConfig[key]['default'];
	                }
	            }
	        }
	    };
	    Process.prototype.resolveLinkedProp = function (data, key) {
	        var linkedKey = data.alias || key;
	        if (this._parent) {
	            return this._parent.getProps(linkedKey);
	        }
	    };
	    return Process;
	}());
	function warpAsyncScript(source) {
	    return "return new Promise(function(resolve, reject){\n\t" + source + "\n\t\n\tfunction next(type, payload){resolve({type: type, payload: payload})}\n\t});";
	}

	var ID_INK = 0;
	var VM = (function () {
	    function VM() {
	        this._pid = 0;
	    }
	    VM.prototype.setup = function (context) {
	        var processMetaLibs = context.processMetaLibs, globalContext = context.globalContext, target = context.target, scriptMap = context.scriptMap;
	        this._processMetaLibs = processMetaLibs;
	        this._globalContext = globalContext;
	        this._target = target;
	        this._id = ID_INK++;
	        this._scriptMap = scriptMap;
	    };
	    VM.prototype.executeProcess = function (sequence, id, parentProcess, args) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var process;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        process = new Process(this._pid++);
	                        process.init({
	                            sequence: sequence,
	                            id: id,
	                            vm: this,
	                            parent: parentProcess,
	                            target: this._target,
	                        });
	                        return [4, process.execute(args)];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    VM.prototype.getMeta = function (id) {
	        for (var _i = 0, _a = this._processMetaLibs; _i < _a.length; _i++) {
	            var context = _a[_i];
	            var meta = arrayFind(context, function (item) { return item.id === id; });
	            if (meta) {
	                return meta;
	            }
	        }
	    };
	    VM.prototype.getScript = function (hash) {
	        return this._scriptMap[hash];
	    };
	    Object.defineProperty(VM.prototype, "globalContext", {
	        get: function () {
	            return this._globalContext;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(VM.prototype, "id", {
	        get: function () {
	            return this._id;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return VM;
	}());

	var log = getLogSwitch(exports.Logs.PROCESS);
	var processMetaLibs = [];
	var globalContext = {};
	var scriptMap = {};
	function setProcessMetaLibs() {
	    var metaContexts = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        metaContexts[_i] = arguments[_i];
	    }
	    for (var _a = 0, metaContexts_1 = metaContexts; _a < metaContexts_1.length; _a++) {
	        var context = metaContexts_1[_a];
	        if (context) {
	            processMetaLibs.push(context);
	        }
	    }
	}
	function setGlobalContext(context) {
	    globalContext = context;
	    for (var key in context) {
	        globalContext[key] = context[key];
	    }
	}
	function setScriptMap(_scriptMap) {
	    scriptMap = _scriptMap;
	}
	function executeBehavior(sequence, subEntry, target, args) {
	    if (subEntry === void 0) { subEntry = 'main'; }
	    var vm = new VM();
	    vm.setup({
	        processMetaLibs: processMetaLibs,
	        globalContext: globalContext,
	        target: target,
	        scriptMap: scriptMap,
	    });
	    vm.executeProcess(sequence, subEntry, null, args)
	        .then(function (result) {
	        return result;
	    }, function (e) {
	        if (log) {
	            console.log("[" + vm.id + "] terminate:", e);
	        }
	    });
	}

	var _a;
	var eventsMapping = (_a = {},
	    _a[Event.ADDED_TO_STAGE] = 'awake',
	    _a[Event.REMOVED_FROM_STAGE] = 'sleep',
	    _a[Event.UPDATE_DATA] = 'update-data',
	    _a[MouseEvent.CLICK] = 'click',
	    _a[MouseEvent.MOUSE_DOWN] = 'touchstart',
	    _a[MouseEvent.MOUSE_MOVE] = 'touchmove',
	    _a[MouseEvent.MOUSE_UP] = 'touchend',
	    _a[Event.VISIBLE] = 'visible',
	    _a[Event.HIDDEN] = 'hidden',
	    _a);
	var globalEvent = new EventDispatcher();
	var DATA_CENTER_EVENT = 'DATA_CENTER_EVENT';
	var sendEvents = [
	    'click',
	    'touchstart',
	    'touchmove',
	    'touchend',
	];
	function applyEvents(ctor) {
	    ctor.prototype.applyEvents = function () {
	        var eventsProxy = this.eventsProxy = new EventsProxy(this);
	        for (var k in eventsMapping) {
	            this.addEventListener(k, eventsProxy.onBuiltinEvent, eventsProxy);
	        }
	        globalEvent.addEventListener(DATA_CENTER_EVENT, eventsProxy.onDateCenterEvent, eventsProxy);
	    };
	}
	var EventsProxy = (function (_super) {
	    tslib_1.__extends(EventsProxy, _super);
	    function EventsProxy(host) {
	        var _this = _super.call(this) || this;
	        _this.host = host;
	        return _this;
	    }
	    Object.defineProperty(EventsProxy.prototype, "eventsConfig", {
	        get: function () {
	            return this._eventsConfig;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    EventsProxy.prototype.start = function (eventsConfig) {
	        this._eventsConfig = eventsConfig;
	        for (var name in eventsConfig) {
	            var config = eventsConfig[name];
	            if (config.custom) {
	                var target = config.private ? this.host : globalEvent;
	                target.addEventListener(name, this.onCustomEvent, this);
	            }
	        }
	        this.invokeBehavior('init', this.host);
	    };
	    EventsProxy.prototype.invokeBehavior = function (name, target, payload) {
	        if (this._eventsConfig) {
	            var eventConfig = this._eventsConfig[name];
	            if (eventConfig) {
	                for (var _i = 0, _a = eventConfig.behaviors; _i < _a.length; _i++) {
	                    var behavior = _a[_i];
	                    if (behavior.disabled) {
	                        continue;
	                    }
	                    executeBehavior({
	                        main: behavior,
	                    }, 'main', target, payload);
	                }
	            }
	        }
	    };
	    EventsProxy.prototype.onBuiltinEvent = function (e) {
	        var eventName = eventsMapping[e.type];
	        if (eventName) {
	            var data = {};
	            injectProp(data, e.data);
	            if (sendEvents.indexOf(eventName) >= 0) {
	                injectProp(data, {
	                    localX: e.localX,
	                    localY: e.localY,
	                    stageX: e.stageX,
	                    stageY: e.stageY,
	                    identifier: e.identifier,
	                });
	            }
	            this.invokeBehavior(eventName, e.target, data);
	        }
	    };
	    EventsProxy.prototype.onCustomEvent = function (e) {
	        this.invokeBehavior(e.type, this.host, e.data);
	    };
	    EventsProxy.prototype.onDateCenterEvent = function (e) {
	        this.invokeBehavior('data-center', this.host, e.data);
	    };
	    EventsProxy.prototype.destroy = function () {
	    };
	    return EventsProxy;
	}(HashObject));

	function afterConstructor(ctor) {
	    ctor.prototype.afterConstructor = function () {
	        this.applyAutoAdjust();
	        this.applyScripts();
	        this.applyEvents();
	    };
	}

	var Container = (function (_super) {
	    tslib_1.__extends(Container, _super);
	    function Container() {
	        var _this = _super.call(this) || this;
	        _this._mouseChildren = true;
	        _this._instanceType = "Container";
	        _this.children = [];
	        _this._transform = _this.transform;
	        _this.afterConstructor();
	        return _this;
	    }
	    Container_1 = Container;
	    Object.defineProperty(Container.prototype, "mouseChildren", {
	        get: function () {
	            return this._mouseChildren;
	        },
	        set: function (v) {
	            this._mouseChildren = v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Container.prototype.afterConstructor = function () {
	    };
	    Container.prototype.onChildrenChange = function (index) {
	    };
	    Container.prototype.attachVisibility = function () {
	        return;
	        this.dispatchEvent(this.worldVisible ? Event.VISIBLE : Event.HIDDEN);
	        for (var i = 0, li = this.children.length; i < li; i++) {
	            var child = this.children[i];
	            child.attachVisibility();
	        }
	    };
	    Container.prototype.addChild = function (child) {
	        this.addChildAt(child, this.children.length);
	        return child;
	    };
	    Container.prototype.addChildAt = function (child, index) {
	        if (!child)
	            return;
	        var s = this;
	        var sameParent = (s == child.parent);
	        var len;
	        if (child.parent) {
	            if (!sameParent) {
	                child.parent.removeChild(child);
	            }
	            else {
	                len = s.children.length;
	                for (var i = 0; i < len; i++) {
	                    if (s.children[i] == child) {
	                        s.children.splice(i, 1);
	                        break;
	                    }
	                }
	            }
	        }
	        child.parent = s;
	        child.transform._parentID = -1;
	        this._boundsID++;
	        len = s.children.length;
	        if (index >= len) {
	            s.children[s.children.length] = child;
	            index = len;
	        }
	        else if (index == 0 || index < 0) {
	            s.children.unshift(child);
	            index = 0;
	        }
	        else {
	            s.children.splice(index, 0, child);
	        }
	        if (s.stage && !sameParent) {
	            child._onDispatchBubbledEvent(Event.ADDED_TO_STAGE);
	        }
	        this.onChildrenChange(index);
	        return child;
	    };
	    Container.prototype.swapChildren = function (child1, child2) {
	        if (child1 === child2) {
	            return;
	        }
	        var s = this;
	        var id1 = -1;
	        var id2 = -1;
	        var childCount = s.children.length;
	        if (typeof (child1) == "number") {
	            id1 = child1;
	        }
	        else {
	            id1 = s.getChildIndex(child1);
	        }
	        if (typeof (child2) == "number") {
	            id2 = child2;
	        }
	        else {
	            id2 = s.getChildIndex(child2);
	        }
	        if (id1 == id2 || id1 < 0 || id1 >= childCount || id2 < 0 || id2 >= childCount) {
	            return false;
	        }
	        else {
	            var temp = s.children[id1];
	            s.children[id1] = s.children[id2];
	            s.children[id2] = temp;
	            this.onChildrenChange(id1 < id2 ? id1 : id2);
	            return true;
	        }
	    };
	    Container.prototype.getChildIndex = function (child) {
	        var index = this.children.indexOf(child);
	        if (index === -1) {
	            return null;
	        }
	        return index;
	    };
	    Container.prototype.contains = function (child) {
	        return !!this.getChildIndex(child);
	    };
	    Container.prototype.setChildIndex = function (child, index) {
	        this.addChildAt(child, index);
	    };
	    Container.prototype.getChildAt = function (index) {
	        if (index < 0 || index >= this.children.length) {
	            return null;
	        }
	        return this.children[index];
	    };
	    Container.prototype.getChildByPath = function (path, method) {
	        if (!path) {
	            return null;
	        }
	        var p = this;
	        while (path.length > 0) {
	            var segment = path.shift();
	            p = p[method](segment);
	            if (!p) {
	                break;
	            }
	        }
	        return p;
	    };
	    Container.prototype.getChildByNamePath = function (path) {
	        var pathArr = path.split('/');
	        return this.getChildByPath(pathArr, 'getChildByName');
	    };
	    Container.prototype.getChildByIndexPath = function (path) {
	        var pathArr = path.split('/').map(function (seg) { return parseInt(seg); });
	        return this.getChildByPath(pathArr, 'getChildAt');
	    };
	    Container.prototype.findChildByUUID = function (uuid) {
	        if (this['uuid'] === uuid) {
	            return this;
	        }
	        if (this.children && this.children.length > 0) {
	            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
	                var child = _a[_i];
	                if (child.findChildByUUID) {
	                    var target = child.findChildByUUID(uuid);
	                    if (target) {
	                        return target;
	                    }
	                }
	            }
	        }
	    };
	    Container.prototype.getChildByName = function (name, isOnlyOne, isRecursive) {
	        if (isOnlyOne === void 0) { isOnlyOne = true; }
	        if (isRecursive === void 0) { isRecursive = false; }
	        if (!name)
	            return null;
	        var s = this;
	        var rex;
	        if (typeof (name) == "string") {
	            rex = new RegExp("^" + name + "$");
	        }
	        else {
	            rex = name;
	        }
	        var elements = [];
	        Container_1._getElementsByName(rex, s, isOnlyOne, isRecursive, elements);
	        var len = elements.length;
	        if (len == 0) {
	            return null;
	        }
	        else if (len == 1) {
	            return elements[0];
	        }
	        else {
	            return elements;
	        }
	    };
	    Container.prototype.removeChild = function (child) {
	        var index = this.children.indexOf(child);
	        if (index === -1)
	            return null;
	        this.removeChildAt(index);
	        return child;
	    };
	    Container.prototype.removeChildAt = function (index) {
	        var s = this;
	        var child;
	        var len = s.children.length - 1;
	        if (len < 0)
	            return;
	        if (index == len) {
	            child = s.children.pop();
	        }
	        else if (index == 0) {
	            child = s.children.shift();
	        }
	        else {
	            child = s.children.splice(index, 1)[0];
	        }
	        child._onDispatchBubbledEvent(Event.REMOVED_FROM_STAGE);
	        child.parent = null;
	        child.transform._parentID = -1;
	        this._boundsID++;
	        this.onChildrenChange(index);
	        return child;
	    };
	    Container.prototype.removeChildren = function (beginIndex, endIndex) {
	        if (beginIndex === void 0) { beginIndex = 0; }
	        if (endIndex === void 0) { endIndex = this.children.length; }
	        var begin = beginIndex;
	        var end = typeof endIndex === 'number' ? endIndex : this.children.length;
	        var range = end - begin;
	        var removed;
	        if (range > 0 && range <= end) {
	            removed = this.children.splice(begin, range);
	            for (var i = 0; i < removed.length; ++i) {
	                removed[i].parent = null;
	                if (removed[i].transform) {
	                    removed[i].transform._parentID = -1;
	                }
	            }
	            this._boundsID++;
	            this.onChildrenChange(beginIndex);
	            for (var i = 0; i < removed.length; ++i) {
	                removed[i]._onDispatchBubbledEvent(Event.REMOVED_FROM_STAGE);
	            }
	            return removed;
	        }
	        else if (range === 0 && this.children.length === 0) {
	            return [];
	        }
	        throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
	    };
	    Container.prototype.updateTransform = function () {
	        _super.prototype.updateTransform.call(this);
	        this._boundsID++;
	        for (var i = 0, j = this.children.length; i < j; ++i) {
	            var child = this.children[i];
	            if (child.visible) {
	                child.updateTransform();
	            }
	        }
	    };
	    Container.prototype.calculateBounds = function () {
	        if (this._lastBoundsID == this._boundsID)
	            return;
	        this._lastBoundsID = this._boundsID;
	        this._bounds.clear();
	        this._calculateBounds();
	        for (var i = 0; i < this.children.length; i++) {
	            var child = this.children[i];
	            if (!child.visible || !child.renderable) {
	                continue;
	            }
	            child.calculateBounds();
	            if (child.$mask) {
	                child.$mask.calculateBounds();
	                if (child._bounds.x < child.$mask._bounds.x) {
	                    child._bounds.x = child.$mask._bounds.x;
	                }
	                if (child._bounds.y < child.$mask._bounds.y) {
	                    child._bounds.y = child.$mask._bounds.y;
	                }
	                if (child._bounds.width > child.$mask._bounds.width) {
	                    child._bounds.width = child.$mask._bounds.width;
	                }
	                if (child._bounds.height > child.$mask._bounds.height) {
	                    child._bounds.height = child.$mask._bounds.height;
	                }
	                Rectangle.createFromRects(this._bounds, child._bounds);
	            }
	            else {
	                Rectangle.createFromRects(this._bounds, child._bounds);
	            }
	        }
	    };
	    Container.prototype._calculateBounds = function () {
	        var widthSetted = !!this._width && this._width !== 0;
	        var heightSetted = !!this._height && this._height !== 0;
	        if (widthSetted || heightSetted) {
	            var rect = this._localBoundsSelf;
	            var matrix = this.transform.worldMatrix;
	            matrix.transformPoint(rect.x, rect.y, DisplayObject._p1);
	            matrix.transformPoint(rect.x + rect.width, rect.y, DisplayObject._p2);
	            matrix.transformPoint(rect.x + rect.width, rect.y + rect.height, DisplayObject._p3);
	            matrix.transformPoint(rect.x, rect.y + rect.height, DisplayObject._p4);
	            Rectangle.createFromPoints(this._bounds, DisplayObject._p1, DisplayObject._p2, DisplayObject._p3, DisplayObject._p4);
	        }
	    };
	    Container.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
	        if (isMouseEvent === void 0) { isMouseEvent = false; }
	        if (!this.visible)
	            return null;
	        if (isMouseEvent && !this.mouseChildren) {
	            return this.hitTestSelf(globalPoint);
	        }
	        var children = this.children;
	        var length = children.length;
	        var child, hitDisplayObject;
	        for (var i = length - 1; i >= 0; i--) {
	            child = children[i];
	            if (child.isUsedToMask)
	                continue;
	            if (child.mask && !child.mask.hitTestPoint(globalPoint, isMouseEvent))
	                continue;
	            hitDisplayObject = child.hitTestPoint(globalPoint, isMouseEvent);
	            if (hitDisplayObject)
	                return hitDisplayObject;
	        }
	        return this.displayObjectHitTestPoint(globalPoint, isMouseEvent);
	    };
	    Container.prototype.hitTestSelf = function (globalPoint) {
	        if (this.mouseEnabled) {
	            return this.hitTestSelfBounds(globalPoint);
	        }
	        return null;
	    };
	    Container.prototype.hitTestSelfBounds = function (globalPoint) {
	        if (this._width && this._height) {
	            var _a = this.worldMatrix, tx = _a.tx, ty = _a.ty;
	            var x = globalPoint.x, y = globalPoint.y;
	            if (x > tx &&
	                x < tx + this.width &&
	                y > ty &&
	                y < ty + this.height)
	                return this;
	        }
	        return null;
	    };
	    Container.prototype.renderWebGL = function (renderer) {
	        if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
	            return;
	        }
	        if (this.mask) {
	            this.renderAdvancedWebGL(renderer);
	        }
	        else {
	            this._renderWebGL(renderer);
	            for (var i = 0, j = this.children.length; i < j; ++i) {
	                this.children[i].renderWebGL(renderer);
	            }
	        }
	    };
	    Container.prototype.renderAdvancedWebGL = function (renderer) {
	        renderer.batchManager.flush();
	        var mask = this.mask;
	        if (mask) {
	            renderer.maskManager.pushMask(this, this.mask);
	        }
	        this._renderWebGL(renderer);
	        for (var i = 0, j = this.children.length; i < j; i++) {
	            this.children[i].renderWebGL(renderer);
	        }
	        renderer.batchManager.flush();
	        if (mask) {
	            renderer.maskManager.popMask(this, this.mask);
	        }
	    };
	    Container.prototype._renderWebGL = function (renderer) {
	    };
	    Container.prototype.renderCanvas = function (renderer) {
	        if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
	            return;
	        }
	        if (this.mask) {
	            renderer.maskManager.pushMask(this.mask);
	        }
	        this._renderCanvas(renderer);
	        for (var i = 0, j = this.children.length; i < j; ++i) {
	            this.children[i].renderCanvas(renderer);
	        }
	        if (this.mask) {
	            renderer.maskManager.popMask(renderer);
	        }
	    };
	    Container.prototype._renderCanvas = function (renderer) {
	    };
	    Container.prototype.update = function (deltaTime) {
	        _super.prototype.update.call(this, deltaTime);
	        var len = this.children.length;
	        for (var i = len - 1; i >= 0; i--) {
	            var child = this.children[i];
	            child.update(deltaTime);
	        }
	    };
	    Container.prototype._onDispatchBubbledEvent = function (type) {
	        var s = this;
	        var len = s.children.length;
	        if (type == Event.REMOVED_FROM_STAGE && !s.stage)
	            return;
	        _super.prototype._onDispatchBubbledEvent.call(this, type);
	        for (var i = 0; i < len; i++) {
	            s.children[i]._onDispatchBubbledEvent(type);
	        }
	    };
	    Container.prototype.destroy = function () {
	        var s = this;
	        for (var i = s.children.length - 1; i >= 0; i--) {
	            s.children[i].destroy();
	        }
	        _super.prototype.destroy.call(this);
	        this.mouseChildren = false;
	    };
	    Object.defineProperty(Container.prototype, "width", {
	        get: function () {
	            return this._width || this.scale.x * this.getLocalBounds().width;
	        },
	        set: function (value) {
	            if (this._width !== value) {
	                this._width = value;
	                this._localBoundsSelf.width = value;
	                this.dispatchEvent(Event.RESIZE);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Container.prototype, "height", {
	        get: function () {
	            return this._height || this.scale.y * this.getLocalBounds().height;
	        },
	        set: function (value) {
	            if (this._height !== value) {
	                this._height = value;
	                this._localBoundsSelf.height = value;
	                this.dispatchEvent(Event.RESIZE);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Container.prototype.clone = function (withEvents, withScripts) {
	        if (withEvents === void 0) { withEvents = false; }
	        if (withScripts === void 0) { withScripts = false; }
	        var target = this.constructor.apply(Object.create(this.constructor.prototype));
	        var originConfig = this['__originConfig'];
	        var name = originConfig.name, properties = originConfig.properties, events = originConfig.events, scripts = originConfig.scripts;
	        target.name = name;
	        target['__originConfig'] = originConfig;
	        injectProperties(target, properties);
	        if (withScripts) {
	            if (scripts && scripts.length > 0) {
	                for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
	                    var scriptConfig = scripts_1[_i];
	                    instantiateScript(target, scriptConfig);
	                }
	            }
	        }
	        if (withEvents) {
	            if (events) {
	                target.eventsProxy.start(events);
	            }
	        }
	        for (var _a = 0, _b = this.children; _a < _b.length; _a++) {
	            var child = _b[_a];
	            var childCopy = child.clone(withEvents, withScripts);
	            target.addChild(childCopy);
	        }
	        return target;
	    };
	    Object.defineProperty(Container.prototype, "$store", {
	        get: function () {
	            var p = this;
	            do {
	                if (p['$isViewRoot']) {
	                    break;
	                }
	                p = p.parent;
	            } while (p.parent);
	            if (p) {
	                return p['$_store'];
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Container._getElementsByName = function (rex, root, isOnlyOne, isRecursive, resultList) {
	        var len = root.children.length;
	        if (len > 0) {
	            var name = void 0;
	            var child = void 0;
	            for (var i = 0; i < len; i++) {
	                child = root.children[i];
	                name = child.name;
	                if (name && name != "") {
	                    if (rex.test(name)) {
	                        resultList[resultList.length] = child;
	                        if (isOnlyOne) {
	                            return;
	                        }
	                    }
	                }
	                if (isRecursive) {
	                    if (child["children"] != null) {
	                        Container_1._getElementsByName(rex, child, isOnlyOne, isRecursive, resultList);
	                    }
	                }
	            }
	        }
	    };
	    var Container_1;
	    Container = Container_1 = tslib_1.__decorate([
	        afterConstructor,
	        applyAutoAdjust,
	        applyScript,
	        applyEvents
	    ], Container);
	    return Container;
	}(DisplayObject));
	Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

	var container;
	var el$1;
	var FloatDisplay = (function (_super) {
	    tslib_1.__extends(FloatDisplay, _super);
	    function FloatDisplay() {
	        var _this = _super.call(this) || this;
	        _this._htmlElement = null;
	        _this._isAdded = false;
	        var s = _this;
	        s._instanceType = "FloatDisplay";
	        s.addEventListener(Event.REMOVED_FROM_STAGE, function (e) {
	            if (s._htmlElement) {
	                s._htmlElement.style.display = "none";
	            }
	        });
	        s.addEventListener(Event.ADDED_TO_STAGE, function (e) {
	            this.addHtmlElement();
	        }, s);
	        _this._transformID = -1;
	        return _this;
	    }
	    FloatDisplay.prototype.addHtmlElement = function () {
	        var s = this;
	        if (!s.stage) {
	            return;
	        }
	        if (!container) {
	            container = document.createElement('div');
	            container.style.position = "absolute";
	            container.style.left = "0";
	            container.style.top = "0";
	            container.style.fontSize = '30px';
	            container.style.lineHeight = 'normal';
	            s.stage.rootDiv.appendChild(container);
	        }
	        if (s._htmlElement) {
	            var style = s._htmlElement.style;
	            if (!s._isAdded) {
	                s._isAdded = true;
	                container.appendChild(s._htmlElement);
	                s.stage["_floatDisplayList"].push(s);
	            }
	            else {
	                if (s._htmlElement && s.visible) {
	                    style.display = "block";
	                }
	            }
	        }
	    };
	    Object.defineProperty(FloatDisplay.prototype, "htmlElement", {
	        get: function () {
	            return this._htmlElement;
	        },
	        set: function (v) {
	            this.init(v);
	            this.updateStyle();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FloatDisplay.prototype.init = function (htmlElement) {
	        if (!htmlElement) {
	            return;
	        }
	        var s = this;
	        var she;
	        if (typeof (htmlElement) == "string") {
	            if (!el$1) {
	                el$1 = document.createElement('div');
	            }
	            el$1.innerHTML = htmlElement;
	            she = el$1.children[0];
	        }
	        else if (htmlElement._instanceType == "Video") {
	            she = htmlElement.media;
	        }
	        else {
	            she = htmlElement;
	        }
	        var style = she.style;
	        style.position = "absolute";
	        style.display = "none";
	        style.transformOrigin = style.WebkitTransformOrigin = "0 0 0";
	        var ws = s.getStyle(she, "width");
	        var hs = s.getStyle(she, "height");
	        var w = 0, h = 0;
	        if (ws.indexOf("px")) {
	            w = parseInt(ws);
	        }
	        if (hs.indexOf("px")) {
	            h = parseInt(hs);
	        }
	        s._localBoundsSelf.width = w;
	        s._localBoundsSelf.height = h;
	        s._htmlElement = she;
	        this.addHtmlElement();
	    };
	    FloatDisplay.prototype.getStyle = function (elem, cssName) {
	        if (elem.style[cssName]) {
	            return elem.style[cssName];
	        }
	        if (document.defaultView && document.defaultView.getComputedStyle) {
	            cssName = cssName.replace(/([A-Z])/g, "-$1");
	            cssName = cssName.toLowerCase();
	            var s = document.defaultView.getComputedStyle(elem, "");
	            return s && s.getPropertyValue(cssName);
	        }
	        return null;
	    };
	    FloatDisplay.prototype.updateStyle = function () {
	        var s = this;
	        var o = s._htmlElement;
	        if (o) {
	            var style = o.style;
	            var visible = s.visible;
	            if (!s.stage) {
	                visible = false;
	            }
	            if (visible) {
	                var parent = s.parent;
	                while (parent) {
	                    if (!parent.visible) {
	                        visible = false;
	                        break;
	                    }
	                    parent = parent.parent;
	                }
	            }
	            var show = visible ? "block" : "none";
	            if (show != style.display) {
	                style.display = show;
	            }
	            if (visible) {
	                if (this._transformID != this.transform._worldID) {
	                    this._transformID = this.transform._worldID;
	                    var mtx = s.transform.worldMatrix;
	                    var d = devicePixelRatio;
	                    style.transform = style.webkitTransform = "matrix(" + (mtx.a / d).toFixed(4) + "," + (mtx.b / d).toFixed(4) + "," + (mtx.c / d).toFixed(4) + "," + (mtx.d / d).toFixed(4) + "," + (mtx.tx / d).toFixed(4) + "," + (mtx.ty / d).toFixed(4) + ")";
	                }
	                style.opacity = s.worldAlpha;
	            }
	        }
	    };
	    FloatDisplay.prototype.destroy = function () {
	        var s = this;
	        var elem = s._htmlElement;
	        if (elem) {
	            elem.style.display = "none";
	            if (elem.parentNode) {
	                elem.parentNode.removeChild(elem);
	            }
	            s._isAdded = false;
	            s._htmlElement = null;
	        }
	        var sf = s.stage["_floatDisplayList"];
	        var len = sf.length;
	        for (var i = 0; i < len; i++) {
	            if (sf[i] == s) {
	                sf.splice(i, 1);
	                break;
	            }
	        }
	        _super.prototype.destroy.call(this);
	    };
	    return FloatDisplay;
	}(DisplayObject));

	var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
	var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
	var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
	var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
	var tempMatrices = [];
	var mul = [];
	function signum(x) {
	    if (x < 0) {
	        return -1;
	    }
	    if (x > 0) {
	        return 1;
	    }
	    return 0;
	}
	function init() {
	    for (var i = 0; i < 16; i++) {
	        var row = [];
	        mul.push(row);
	        for (var j = 0; j < 16; j++) {
	            var _ux = signum((ux[i] * ux[j]) + (vx[i] * uy[j]));
	            var _uy = signum((uy[i] * ux[j]) + (vy[i] * uy[j]));
	            var _vx = signum((ux[i] * vx[j]) + (vx[i] * vy[j]));
	            var _vy = signum((uy[i] * vx[j]) + (vy[i] * vy[j]));
	            for (var k = 0; k < 16; k++) {
	                if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
	                    row.push(k);
	                    break;
	                }
	            }
	        }
	    }
	    for (var i = 0; i < 16; i++) {
	        var mat = new Matrix();
	        mat.set(ux[i], uy[i], vx[i], vy[i], 0, 0);
	        tempMatrices.push(mat);
	    }
	}
	init();
	var GroupD8 = {
	    E: 0,
	    SE: 1,
	    S: 2,
	    SW: 3,
	    W: 4,
	    NW: 5,
	    N: 6,
	    NE: 7,
	    MIRROR_VERTICAL: 8,
	    MIRROR_HORIZONTAL: 12,
	    uX: function (ind) { return ux[ind]; },
	    uY: function (ind) { return uy[ind]; },
	    vX: function (ind) { return vx[ind]; },
	    vY: function (ind) { return vy[ind]; },
	    inv: function (rotation) {
	        if (rotation & 8) {
	            return rotation & 15;
	        }
	        return (-rotation) & 7;
	    },
	    add: function (rotationSecond, rotationFirst) { return mul[rotationSecond][rotationFirst]; },
	    sub: function (rotationSecond, rotationFirst) { return mul[rotationSecond][GroupD8.inv(rotationFirst)]; },
	    rotate180: function (rotation) { return rotation ^ 4; },
	    isVertical: function (rotation) { return (rotation & 3) === 2; },
	    byDirection: function (dx, dy) {
	        if (Math.abs(dx) * 2 <= Math.abs(dy)) {
	            if (dy >= 0) {
	                return GroupD8.S;
	            }
	            return GroupD8.N;
	        }
	        else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
	            if (dx > 0) {
	                return GroupD8.E;
	            }
	            return GroupD8.W;
	        }
	        else if (dy > 0) {
	            if (dx > 0) {
	                return GroupD8.SE;
	            }
	            return GroupD8.SW;
	        }
	        else if (dx > 0) {
	            return GroupD8.NE;
	        }
	        return GroupD8.NW;
	    },
	    matrixAppendRotationInv: function (matrix, rotation, tx, ty) {
	        if (tx === void 0) { tx = 0; }
	        if (ty === void 0) { ty = 0; }
	        var mat = tempMatrices[GroupD8.inv(rotation)];
	        mat.tx = tx;
	        mat.ty = ty;
	        matrix.append(mat);
	    },
	};

	var INT_BITS = 32;
	var INT_BITS1 = 32;
	var INT_MAX = 0x7fffffff;
	var INT_MIN = -1 << (INT_BITS - 1);
	function abs(v) {
	    var mask = v >> (INT_BITS - 1);
	    return (v ^ mask) - mask;
	}
	function min(x, y) {
	    return y ^ ((x ^ y) & -(x < y));
	}
	function max(x, y) {
	    return x ^ ((x ^ y) & -(x < y));
	}
	function isPow2(v) {
	    return !(v & (v - 1)) && (!!v);
	}
	function log2(v) {
	    var r, shift;
	    r = Number(v > 0xFFFF) << 4;
	    v >>>= r;
	    shift = Number(v > 0xFF) << 3;
	    v >>>= shift;
	    r |= shift;
	    shift = Number(v > 0xF) << 2;
	    v >>>= shift;
	    r |= shift;
	    shift = Number(v > 0x3) << 1;
	    v >>>= shift;
	    r |= shift;
	    return r | (v >> 1);
	}
	function log10(v) {
	    return (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
	        (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
	            (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
	}
	function popCount(v) {
	    v = v - ((v >>> 1) & 0x55555555);
	    v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
	    return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
	}
	function countTrailingZeros(v) {
	    var c = 32;
	    v &= -v;
	    if (v)
	        c--;
	    if (v & 0x0000FFFF)
	        c -= 16;
	    if (v & 0x00FF00FF)
	        c -= 8;
	    if (v & 0x0F0F0F0F)
	        c -= 4;
	    if (v & 0x33333333)
	        c -= 2;
	    if (v & 0x55555555)
	        c -= 1;
	    return c;
	}
	function nextPow2(v) {
	    v += v === 0;
	    --v;
	    v |= v >>> 1;
	    v |= v >>> 2;
	    v |= v >>> 4;
	    v |= v >>> 8;
	    v |= v >>> 16;
	    return v + 1;
	}
	function prevPow2(v) {
	    v |= v >>> 1;
	    v |= v >>> 2;
	    v |= v >>> 4;
	    v |= v >>> 8;
	    v |= v >>> 16;
	    return v - (v >>> 1);
	}
	function parity(v) {
	    v ^= v >>> 16;
	    v ^= v >>> 8;
	    v ^= v >>> 4;
	    v &= 0xf;
	    return (0x6996 >>> v) & 1;
	}
	var REVERSE_TABLE = new Array(256);
	(function (tab) {
	    for (var i = 0; i < 256; ++i) {
	        var v = i, r = i, s = 7;
	        for (v >>>= 1; v; v >>>= 1) {
	            r <<= 1;
	            r |= v & 1;
	            --s;
	        }
	        tab[i] = (r << s) & 0xff;
	    }
	})(REVERSE_TABLE);
	function reverse(v) {
	    return (REVERSE_TABLE[v & 0xff] << 24) |
	        (REVERSE_TABLE[(v >>> 8) & 0xff] << 16) |
	        (REVERSE_TABLE[(v >>> 16) & 0xff] << 8) |
	        REVERSE_TABLE[(v >>> 24) & 0xff];
	}
	function interleave2(x, y) {
	    x &= 0xFFFF;
	    x = (x | (x << 8)) & 0x00FF00FF;
	    x = (x | (x << 4)) & 0x0F0F0F0F;
	    x = (x | (x << 2)) & 0x33333333;
	    x = (x | (x << 1)) & 0x55555555;
	    y &= 0xFFFF;
	    y = (y | (y << 8)) & 0x00FF00FF;
	    y = (y | (y << 4)) & 0x0F0F0F0F;
	    y = (y | (y << 2)) & 0x33333333;
	    y = (y | (y << 1)) & 0x55555555;
	    return x | (y << 1);
	}
	function deinterleave2(v, n) {
	    v = (v >>> n) & 0x55555555;
	    v = (v | (v >>> 1)) & 0x33333333;
	    v = (v | (v >>> 2)) & 0x0F0F0F0F;
	    v = (v | (v >>> 4)) & 0x00FF00FF;
	    v = (v | (v >>> 16)) & 0x000FFFF;
	    return (v << 16) >> 16;
	}
	function interleave3(x, y, z) {
	    x &= 0x3FF;
	    x = (x | (x << 16)) & 4278190335;
	    x = (x | (x << 8)) & 251719695;
	    x = (x | (x << 4)) & 3272356035;
	    x = (x | (x << 2)) & 1227133513;
	    y &= 0x3FF;
	    y = (y | (y << 16)) & 4278190335;
	    y = (y | (y << 8)) & 251719695;
	    y = (y | (y << 4)) & 3272356035;
	    y = (y | (y << 2)) & 1227133513;
	    x |= (y << 1);
	    z &= 0x3FF;
	    z = (z | (z << 16)) & 4278190335;
	    z = (z | (z << 8)) & 251719695;
	    z = (z | (z << 4)) & 3272356035;
	    z = (z | (z << 2)) & 1227133513;
	    return x | (z << 2);
	}
	function deinterleave3(v, n) {
	    v = (v >>> n) & 1227133513;
	    v = (v | (v >>> 2)) & 3272356035;
	    v = (v | (v >>> 4)) & 251719695;
	    v = (v | (v >>> 8)) & 4278190335;
	    v = (v | (v >>> 16)) & 0x3FF;
	    return (v << 22) >> 22;
	}
	function nextCombination(v) {
	    var t = v | (v - 1);
	    return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
	}

	var tempMatrix = new Matrix();
	var SystemRenderer = (function (_super) {
	    tslib_1.__extends(SystemRenderer, _super);
	    function SystemRenderer(options) {
	        var _this = _super.call(this) || this;
	        _this.options = options;
	        _this.type = exports.RENDERER_TYPE.UNKNOWN;
	        _this.htmlElement = options.htmlElement;
	        _this.transparent = options.transparent;
	        _this.preserveDrawingBuffer = options.preserveDrawingBuffer;
	        _this._backgroundColor = 0x000000;
	        _this._backgroundColorRgba = [0, 0, 0, 0];
	        _this._backgroundColorString = '#000000';
	        _this.backgroundColor = options.backgroundColor || _this._backgroundColor;
	        _this._tempDisplayObjectParent = new Container();
	        _this._lastObjectRendered = _this._tempDisplayObjectParent;
	        return _this;
	    }
	    SystemRenderer.prototype.resize = function (width, height) {
	        this.htmlElement.width = width * devicePixelRatio;
	        this.htmlElement.height = height * devicePixelRatio;
	        this.htmlElement.style.width = width + "px";
	        this.htmlElement.style.height = height + "px";
	    };
	    SystemRenderer.prototype.render = function (displayObject, renderTexture, transform) {
	    };
	    SystemRenderer.prototype.destroy = function () {
	        this.type = exports.RENDERER_TYPE.UNKNOWN;
	        this.htmlElement = null;
	        this.transparent = false;
	        this.options = null;
	        this.preserveDrawingBuffer = false;
	        this._backgroundColor = 0;
	        this._backgroundColorRgba = null;
	        this._backgroundColorString = null;
	        this._tempDisplayObjectParent = null;
	        this._lastObjectRendered = null;
	    };
	    Object.defineProperty(SystemRenderer.prototype, "backgroundColor", {
	        get: function () {
	            return this._backgroundColor;
	        },
	        set: function (value) {
	            if (this._backgroundColor === value)
	                return;
	            this._backgroundColor = value;
	            this._backgroundColorString = hex2string(value);
	            hex2rgb(value, this._backgroundColorRgba);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SystemRenderer;
	}(EventDispatcher));

	var CanvasGraphicsRenderer = (function () {
	    function CanvasGraphicsRenderer(renderer) {
	        this.renderer = renderer;
	    }
	    CanvasGraphicsRenderer.prototype.render = function (graphics) {
	        var renderer = this.renderer;
	        var context = renderer.context;
	        var worldAlpha = graphics.worldAlpha;
	        var transform = graphics.transform.worldMatrix;
	        context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
	        for (var i = 0; i < graphics.graphicsData.length; i++) {
	            var data = graphics.graphicsData[i];
	            var shape = data.shape;
	            var fillStyle = data.fillStyle;
	            var lineStyle = data.lineStyle;
	            var fillColor = fillStyle.color;
	            var lineColor = lineStyle.color;
	            context.lineWidth = lineStyle.width;
	            var ccw = true;
	            if (data.type === exports.SHAPES.POLY) {
	                context.beginPath();
	                var points = shape.points;
	                context.moveTo(points[0], points[1]);
	                for (var m = 1; m < points.length / 2; ++m) {
	                    context.lineTo(points[m * 2], points[(m * 2) + 1]);
	                }
	                ccw = !judgeCcw(points);
	            }
	            else if (data.type === exports.SHAPES.RECT) {
	                if (data.holes.length) {
	                    context.beginPath();
	                    context.moveTo(shape.x, shape.y);
	                    context.lineTo(shape.x + shape.width, shape.y);
	                    context.lineTo(shape.x + shape.width, shape.y + shape.height);
	                    context.lineTo(shape.x, shape.y + shape.height);
	                    context.lineTo(shape.x, shape.y);
	                }
	                else {
	                    if (fillStyle.visible) {
	                        context.globalAlpha = fillStyle.alpha * worldAlpha;
	                        context.fillStyle = "#" + ("00000" + (fillColor | 0).toString(16)).substr(-6);
	                        context.fillRect(shape["x"], shape["y"], shape["width"], shape["height"]);
	                    }
	                    if (lineStyle.visible) {
	                        context.globalAlpha = lineStyle.alpha * worldAlpha;
	                        context.strokeStyle = "#" + ("00000" + (lineColor | 0).toString(16)).substr(-6);
	                        context.strokeRect(shape["x"], shape["y"], shape["width"], shape["height"]);
	                    }
	                    continue;
	                }
	            }
	            else if (data.type === exports.SHAPES.CIRC) {
	                context.beginPath();
	                context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI, false);
	            }
	            else if (data.type === exports.SHAPES.ELIP) {
	                var w = shape.width * 2;
	                var h = shape.height * 2;
	                var x = shape.x - (w / 2);
	                var y = shape.y - (h / 2);
	                context.beginPath();
	                var kappa = 0.5522848;
	                var ox = (w / 2) * kappa;
	                var oy = (h / 2) * kappa;
	                var xe = x + w;
	                var ye = y + h;
	                var xm = x + (w / 2);
	                var ym = y + (h / 2);
	                context.moveTo(x, ym);
	                context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	                context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	                context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	                context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	            }
	            else if (data.type === exports.SHAPES.RREC) {
	                var rx = shape.x;
	                var ry = shape.y;
	                var width = shape.width;
	                var height = shape.height;
	                var radius = shape.radius;
	                var maxRadius = Math.min(width, height) / 2 | 0;
	                radius = radius > maxRadius ? maxRadius : radius;
	                context.beginPath();
	                context.moveTo(rx, ry + radius);
	                context.quadraticCurveTo(rx, ry, rx + radius, ry);
	                context.lineTo(rx + width - radius, ry);
	                context.quadraticCurveTo(rx + width, ry, rx + width, ry + radius);
	                context.lineTo(rx + width, ry + height - radius);
	                context.quadraticCurveTo(rx + width, ry + height, rx + width - radius, ry + height);
	                context.lineTo(rx + radius, ry + height);
	                context.quadraticCurveTo(rx, ry + height, rx, ry + height - radius);
	                context.lineTo(rx, ry + radius);
	            }
	            for (var j = 0; j < data.holes.length; j++) {
	                holePath(data.holes[i], context, ccw);
	            }
	            if (fillStyle.visible) {
	                context.globalAlpha = fillStyle.alpha * worldAlpha;
	                context.fillStyle = "#" + ("00000" + (fillColor | 0).toString(16)).substr(-6);
	                context.fill();
	            }
	            if (lineStyle.visible) {
	                if (shape.closed)
	                    context.closePath();
	                context.globalAlpha = lineStyle.alpha * worldAlpha;
	                context.strokeStyle = "#" + ("00000" + (lineColor | 0).toString(16)).substr(-6);
	                context.stroke();
	            }
	        }
	    };
	    CanvasGraphicsRenderer.prototype.destroy = function () {
	        this.renderer = null;
	    };
	    return CanvasGraphicsRenderer;
	}());
	function holePath(graphicsData, context, ccw) {
	    if (ccw === void 0) { ccw = true; }
	    var type = graphicsData.type;
	    var shape = graphicsData.shape;
	    switch (type) {
	        case exports.SHAPES.POLY:
	            var points = shape.points;
	            var hCcw = judgeCcw(points);
	            if (ccw == hCcw) {
	                context.moveTo(points[0], points[1]);
	                for (var m = 1; m < points.length / 2; ++m) {
	                    context.lineTo(points[m * 2], points[(m * 2) + 1]);
	                }
	            }
	            else {
	                context.moveTo(points[points.length - 2], points[points.length - 1]);
	                for (var m = points.length / 2 - 2; m >= 0; --m) {
	                    context.lineTo(points[m * 2], points[(m * 2) + 1]);
	                }
	            }
	            if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) ;
	            else {
	                context.closePath();
	            }
	            break;
	        case exports.SHAPES.RECT:
	            context.moveTo(shape.x, shape.y);
	            if (ccw) {
	                context.lineTo(shape.x, shape.y + shape.height);
	                context.lineTo(shape.x + shape.width, shape.y + shape.height);
	                context.lineTo(shape.x + shape.width, shape.y);
	                context.lineTo(shape.x, shape.y);
	            }
	            else {
	                context.lineTo(shape.x + shape.width, shape.y);
	                context.lineTo(shape.x + shape.width, shape.y + shape.height);
	                context.lineTo(shape.x, shape.y + shape.height);
	                context.lineTo(shape.x, shape.y);
	            }
	            break;
	        case exports.SHAPES.CIRC:
	            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI, ccw);
	            break;
	        case exports.SHAPES.ELIP:
	            var w = shape.width * 2;
	            var h = shape.height * 2;
	            var x = shape.x - (w / 2);
	            var y = shape.y - (h / 2);
	            var kappa = 0.5522848;
	            var ox = (w / 2) * kappa;
	            var oy = (h / 2) * kappa;
	            var xe = x + w;
	            var ye = y + h;
	            var xm = x + (w / 2);
	            var ym = y + (h / 2);
	            context.moveTo(x, ym);
	            if (ccw) {
	                context.bezierCurveTo(xm - ox, ye, x, ym + oy, xm, ye);
	                context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xe, ym);
	                context.bezierCurveTo(xm + ox, y, xe, ym - oy, xm, y);
	                context.bezierCurveTo(x, ym - oy, xm - ox, y, x, ym);
	            }
	            else {
	                context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	                context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	                context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	                context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	            }
	            break;
	        case exports.SHAPES.RREC:
	            var rx = shape.x;
	            var ry = shape.y;
	            var width = shape.width;
	            var height = shape.height;
	            var radius = shape.radius;
	            var maxRadius = Math.min(width, height) / 2 | 0;
	            radius = radius > maxRadius ? maxRadius : radius;
	            context.moveTo(rx, ry + radius);
	            if (ccw) {
	                context.lineTo(rx, ry + height - radius);
	                context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
	                context.lineTo(rx + width - radius, ry + height);
	                context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
	                context.lineTo(rx + width, ry + radius);
	                context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
	                context.lineTo(rx + radius, ry);
	                context.quadraticCurveTo(rx, ry, rx, ry + radius);
	            }
	            else {
	                context.quadraticCurveTo(rx, ry, rx + radius, ry);
	                context.lineTo(rx + width - radius, ry);
	                context.quadraticCurveTo(rx + width, ry, rx + width, ry + radius);
	                context.lineTo(rx + width, ry + height - radius);
	                context.quadraticCurveTo(rx + width, ry + height, rx + width - radius, ry + height);
	                context.lineTo(rx + radius, ry + height);
	                context.quadraticCurveTo(rx, ry + height, rx, ry + height - radius);
	                context.lineTo(rx, ry + radius);
	            }
	            break;
	    }
	}
	function judgeCcw(points) {
	    var vector = [];
	    if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) ;
	    for (var i = 0; i < points.length - 2; i += 2) {
	        vector.push(points[i + 2] - points[i], points[i + 3] - points[i + 1]);
	    }
	    if (!(points[0] === points[points.length - 2]) || !(points[1] === points[points.length - 1])) {
	        vector.push(points[0] - points[points.length - 2], points[1] - points[points.length - 1]);
	    }
	    var sum = 0;
	    for (var i = 0; i < vector.length - 2; i += 2) {
	        sum = sum + vector[i] * vector[i + 3] - vector[i + 1] * vector[i + 2];
	    }
	    sum = sum + vector[vector.length - 2] * vector[1] - vector[vector.length - 1] * vector[0];
	    return !(sum > 0);
	}

	var CanvasMaskManager = (function (_super) {
	    tslib_1.__extends(CanvasMaskManager, _super);
	    function CanvasMaskManager(renderer) {
	        var _this = _super.call(this) || this;
	        _this._instanceType = "CanvasMaskManager";
	        _this.renderer = renderer;
	        return _this;
	    }
	    CanvasMaskManager.prototype.pushMask = function (maskData) {
	        var renderer = this.renderer;
	        renderer.context.save();
	        var transform = maskData.transform.worldMatrix;
	        renderer.context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
	        if (maskData.instanceType == "Shape") {
	            maskData["_drawShape"](renderer.context);
	        }
	        else {
	            this.renderGraphicsShape(maskData);
	        }
	        renderer.context.clip();
	    };
	    CanvasMaskManager.prototype.renderGraphicsShape = function (graphics) {
	        var context = this.renderer.context;
	        var len = graphics.graphicsData.length;
	        if (len === 0)
	            return;
	        context.beginPath();
	        for (var i = 0; i < len; i++) {
	            var data = graphics.graphicsData[i];
	            var shape = data.shape;
	            var ccw = true;
	            if (data.type === exports.SHAPES.POLY) {
	                var points = shape.points;
	                context.moveTo(points[0], points[1]);
	                for (var j = 1; j < points.length / 2; j++) {
	                    context.lineTo(points[j * 2], points[(j * 2) + 1]);
	                }
	                ccw = !judgeCcw(points);
	                if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) ;
	                else {
	                    context.closePath();
	                }
	            }
	            else if (data.type === exports.SHAPES.RECT) {
	                context.rect(shape.x, shape.y, shape.width, shape.height);
	            }
	            else if (data.type === exports.SHAPES.CIRC) {
	                context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
	            }
	            else if (data.type === exports.SHAPES.ELIP) {
	                var w = shape.width * 2;
	                var h = shape.height * 2;
	                var x = shape.x - (w / 2);
	                var y = shape.y - (h / 2);
	                var kappa = 0.5522848;
	                var ox = (w / 2) * kappa;
	                var oy = (h / 2) * kappa;
	                var xe = x + w;
	                var ye = y + h;
	                var xm = x + (w / 2);
	                var ym = y + (h / 2);
	                context.moveTo(x, ym);
	                context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	                context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	                context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	                context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	            }
	            else if (data.type === exports.SHAPES.RREC) {
	                var rx = shape.x;
	                var ry = shape.y;
	                var width = shape.width;
	                var height = shape.height;
	                var radius = shape.radius;
	                var maxRadius = Math.min(width, height) / 2 | 0;
	                radius = radius > maxRadius ? maxRadius : radius;
	                context.moveTo(rx, ry + radius);
	                context.quadraticCurveTo(rx, ry, rx + radius, ry);
	                context.lineTo(rx + width - radius, ry);
	                context.quadraticCurveTo(rx + width, ry, rx + width, ry + radius);
	                context.lineTo(rx + width, ry + height - radius);
	                context.quadraticCurveTo(rx + width, ry + height, rx + width - radius, ry + height);
	                context.lineTo(rx + radius, ry + height);
	                context.quadraticCurveTo(rx, ry + height, rx, ry + height - radius);
	                context.lineTo(rx, ry + radius);
	            }
	            for (var j = 0; j < data.holes.length; j++) {
	                holePath(data.holes[i], context, ccw);
	            }
	        }
	    };
	    CanvasMaskManager.prototype.popMask = function (renderer) {
	        renderer.context.restore();
	    };
	    CanvasMaskManager.prototype.destroy = function () {
	    };
	    return CanvasMaskManager;
	}(HashObject));

	var CanvasRenderTarget = (function () {
	    function CanvasRenderTarget(width, height) {
	        this.canvas = document.createElement('canvas');
	        this.context = this.canvas.getContext('2d');
	        this.resize(width, height);
	    }
	    CanvasRenderTarget.prototype.clear = function () {
	        this.context.setTransform(1, 0, 0, 1, 0, 0);
	        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    };
	    CanvasRenderTarget.prototype.resize = function (width, height) {
	        this.canvas.width = width;
	        this.canvas.height = height;
	    };
	    CanvasRenderTarget.prototype.destroy = function () {
	        this.context = null;
	        this.canvas = null;
	    };
	    Object.defineProperty(CanvasRenderTarget.prototype, "width", {
	        get: function () {
	            return this.canvas.width;
	        },
	        set: function (val) {
	            this.canvas.width = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CanvasRenderTarget.prototype, "height", {
	        get: function () {
	            return this.canvas.height;
	        },
	        set: function (val) {
	            this.canvas.height = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return CanvasRenderTarget;
	}());

	var canvasRenderWorldTransform = new Matrix();
	var CanvasSpriteRenderer = (function () {
	    function CanvasSpriteRenderer(renderer) {
	        this.renderer = renderer;
	    }
	    CanvasSpriteRenderer.prototype.render = function (sprite) {
	        var texture = sprite._texture;
	        var renderer = this.renderer;
	        var width = texture._frame.width;
	        var height = texture._frame.height;
	        var wt = sprite.transform.worldMatrix;
	        var dx = 0;
	        var dy = 0;
	        if (texture.orig.width <= 0 || texture.orig.height <= 0 || !texture.baseTexture.source) {
	            return;
	        }
	        if (texture.valid) {
	            renderer.context.globalAlpha = sprite.worldAlpha;
	            var smoothingEnabled = texture.baseTexture.scaleMode === exports.SCALE_MODES.LINEAR;
	            if (renderer.smoothProperty && renderer.context[renderer.smoothProperty] !== smoothingEnabled) {
	                renderer.context[renderer.smoothProperty] = smoothingEnabled;
	            }
	            if (sprite._anchorTexture) {
	                if (texture.trim) {
	                    dx = (texture.trim.width / 2) + texture.trim.x - (sprite._anchorTexture.x * texture.orig.width);
	                    dy = (texture.trim.height / 2) + texture.trim.y - (sprite._anchorTexture.y * texture.orig.height);
	                }
	                else {
	                    dx = (0.5 - sprite._anchorTexture.x) * texture.orig.width;
	                    dy = (0.5 - sprite._anchorTexture.y) * texture.orig.height;
	                }
	                if (texture.rotate) {
	                    canvasRenderWorldTransform.copy(wt);
	                    wt = canvasRenderWorldTransform;
	                    GroupD8.matrixAppendRotationInv(wt, texture.rotate, dx, dy);
	                    dx = 0;
	                    dy = 0;
	                }
	                dx -= width / 2;
	                dy -= height / 2;
	            }
	            else {
	                dx = sprite["offsetX"] || 0;
	                dy = sprite["offsetY"] || 0;
	            }
	            renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx, wt.ty);
	            renderer.context.drawImage(texture.baseTexture.source, texture._frame.x, texture._frame.y, width, height, dx, dy, width, height);
	        }
	    };
	    CanvasSpriteRenderer.prototype.destroy = function () {
	        this.renderer = null;
	    };
	    return CanvasSpriteRenderer;
	}());

	var CanvasRenderer = (function (_super) {
	    tslib_1.__extends(CanvasRenderer, _super);
	    function CanvasRenderer(options) {
	        var _this = _super.call(this, options) || this;
	        _this._instanceType = "CanvasRenderer";
	        _this.type = exports.RENDERER_TYPE.CANVAS;
	        _this.rootContext = _this.htmlElement ? _this.htmlElement.getContext('2d', { alpha: _this.transparent }) : null;
	        _this.context = _this.rootContext;
	        _this.maskManager = new CanvasMaskManager(_this);
	        _this.smoothProperty = 'imageSmoothingEnabled';
	        if (_this.rootContext && !_this.rootContext.imageSmoothingEnabled) {
	            if (_this.rootContext["webkitImageSmoothingEnabled"]) {
	                _this.smoothProperty = 'webkitImageSmoothingEnabled';
	            }
	            else if (_this.rootContext["mozImageSmoothingEnabled"]) {
	                _this.smoothProperty = 'mozImageSmoothingEnabled';
	            }
	            else if (_this.rootContext["oImageSmoothingEnabled"]) {
	                _this.smoothProperty = 'oImageSmoothingEnabled';
	            }
	            else if (_this.rootContext["msImageSmoothingEnabled"]) {
	                _this.smoothProperty = 'msImageSmoothingEnabled';
	            }
	        }
	        _this.plugins = {
	            sprite: null,
	            graphics: null,
	        };
	        _this.plugins.sprite = new CanvasSpriteRenderer(_this);
	        _this.plugins.graphics = new CanvasGraphicsRenderer(_this);
	        _this.renderingToScreen = false;
	        return _this;
	    }
	    CanvasRenderer.prototype.render = function (displayObject, renderTexture, transform) {
	        this.dispatchEvent('prerender');
	        this.renderingToScreen = !renderTexture;
	        if (renderTexture) {
	            renderTexture = renderTexture.baseTexture || renderTexture;
	            if (!renderTexture._canvasRenderTarget) {
	                renderTexture._canvasRenderTarget = new CanvasRenderTarget(renderTexture.width, renderTexture.height);
	                renderTexture.source = renderTexture._canvasRenderTarget.canvas;
	                renderTexture.valid = true;
	            }
	            else {
	                renderTexture._canvasRenderTarget.clear();
	                renderTexture._canvasRenderTarget.resize(renderTexture.width, renderTexture.height);
	            }
	            this.context = renderTexture._canvasRenderTarget.context;
	        }
	        else {
	            this.context = this.rootContext;
	        }
	        var context = this.context;
	        if (!renderTexture) {
	            this._lastObjectRendered = displayObject;
	        }
	        displayObject.update(Date.now() - GlobalPro.startTime);
	        var cacheParent = displayObject.parent;
	        var tempWt = this._tempDisplayObjectParent.transform.worldMatrix;
	        if (transform) {
	            tempWt.copy(transform);
	            this._tempDisplayObjectParent.transform._worldID = -1;
	        }
	        else {
	            tempWt.identity();
	        }
	        displayObject.parent = this._tempDisplayObjectParent;
	        displayObject.updateTransform();
	        displayObject.parent = cacheParent;
	        context.save();
	        context.setTransform(1, 0, 0, 1, 0, 0);
	        context.globalAlpha = 1;
	        if (this.renderingToScreen) {
	            if (this.transparent) {
	                context.clearRect(0, 0, this.htmlElement.width, this.htmlElement.height);
	            }
	            else {
	                context.fillStyle = this._backgroundColorString;
	                context.fillRect(0, 0, this.htmlElement.width, this.htmlElement.height);
	            }
	        }
	        displayObject.renderCanvas(this);
	        context.restore();
	        this.dispatchEvent('postrender');
	    };
	    CanvasRenderer.prototype.clear = function (clearColor) {
	        var context = this.context;
	        clearColor = clearColor || this._backgroundColorString;
	        if (!this.transparent && clearColor) {
	            context.fillStyle = clearColor;
	            context.fillRect(0, 0, this.htmlElement.width, this.htmlElement.height);
	        }
	        else {
	            context.clearRect(0, 0, this.htmlElement.width, this.htmlElement.height);
	        }
	    };
	    CanvasRenderer.prototype.destroy = function () {
	        this.destroyPlugins();
	        _super.prototype.destroy.call(this);
	        this.context = null;
	        this.maskManager.destroy();
	        this.maskManager = null;
	        this.smoothProperty = null;
	    };
	    CanvasRenderer.prototype.resize = function (screenWidth, screenHeight) {
	        _super.prototype.resize.call(this, screenWidth, screenHeight);
	        if (this.smoothProperty) {
	            this.rootContext[this.smoothProperty] = true;
	        }
	    };
	    CanvasRenderer.prototype.destroyPlugins = function () {
	        this.plugins.sprite.destroy();
	        this.plugins.graphics.destroy();
	    };
	    return CanvasRenderer;
	}(SystemRenderer));

	var _dRender = null;
	var tempMatrix$1 = new Matrix();
	function toDisplayDataURL(obj, rect, typeInfo, bgColor) {
	    if (rect === void 0) { rect = null; }
	    if (typeInfo === void 0) { typeInfo = null; }
	    if (bgColor === void 0) { bgColor = 0x000000; }
	    var bounds = obj.getLocalBounds();
	    var w = rect ? rect.width : bounds.width;
	    var h = rect ? rect.height : bounds.height;
	    var x = rect ? rect.x : bounds.x;
	    var y = rect ? rect.y : bounds.y;
	    if (!_dRender) {
	        var canvas = document.createElement("canvas");
	        canvas.width = w;
	        canvas.height = h;
	        _dRender = new CanvasRenderer({ htmlElement: canvas, });
	    }
	    else {
	        _dRender.htmlElement.width = w;
	        _dRender.htmlElement.height = h;
	    }
	    if (!typeInfo) {
	        typeInfo = { type: "png" };
	    }
	    if (typeInfo.type == "png") {
	        _dRender.transparent = true;
	    }
	    else {
	        _dRender.transparent = false;
	        _dRender.backgroundColor = bgColor;
	    }
	    obj.transform.updateLocalMatrix();
	    tempMatrix$1.copy(obj.transform.localMatrix);
	    tempMatrix$1.invert();
	    tempMatrix$1.tx -= x;
	    tempMatrix$1.ty -= y;
	    _dRender.render(obj, null, tempMatrix$1);
	    return _dRender.htmlElement.toDataURL("image/" + typeInfo.type, typeInfo.quality);
	}

	function determineCrossOrigin(url, loc) {
	    if (loc === void 0) { loc = window.location; }
	    if (url.indexOf('data:') === 0) {
	        return '';
	    }
	    return 'anonymous';
	}

	var BaseTexture = (function (_super) {
	    tslib_1.__extends(BaseTexture, _super);
	    function BaseTexture(source, scaleMode) {
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        var _this = _super.call(this) || this;
	        _this.touched = 0;
	        _this.width = 100;
	        _this.height = 100;
	        _this.scaleMode = scaleMode;
	        _this.hasLoaded = false;
	        _this.isLoading = false;
	        _this.source = null;
	        _this.imageType = null;
	        _this.premultipliedAlpha = true;
	        _this.imageUrl = null;
	        _this.isPowerOfTwo = false;
	        _this.mipmap = true;
	        _this.wrapMode = exports.WRAP_MODES.CLAMP;
	        _this._glTextures = {};
	        _this._enabled = 0;
	        _this._destroyed = false;
	        _this.textureCacheIds = [];
	        if (source) {
	            _this.loadSource(source);
	        }
	        return _this;
	    }
	    BaseTexture.prototype.update = function () {
	        this.width = this.source.width;
	        this.height = this.source.height;
	        this.isPowerOfTwo = isPow2(this.width) && isPow2(this.height);
	        this.dispatchEvent("update");
	    };
	    BaseTexture.prototype.loadSource = function (source) {
	        var wasLoading = this.isLoading;
	        this.hasLoaded = false;
	        this.isLoading = false;
	        if (wasLoading && this.source) {
	            this.source.onload = null;
	            this.source.onerror = null;
	        }
	        var firstSourceLoaded = !this.source;
	        this.source = source;
	        if (((source.src && source.complete) || source.getContext) && source.width && source.height) {
	            this._updateImageType();
	            this._sourceLoaded();
	            if (firstSourceLoaded) {
	                this.dispatchEvent("loaded");
	            }
	        }
	        else if (!source.getContext) {
	            this.isLoading = true;
	            var scope_1 = this;
	            source.onload = function () {
	                scope_1._updateImageType();
	                source.onload = null;
	                source.onerror = null;
	                if (!scope_1.isLoading) {
	                    return;
	                }
	                scope_1.isLoading = false;
	                scope_1._sourceLoaded();
	                scope_1.dispatchEvent("loaded");
	            };
	            source.onerror = function () {
	                source.onload = null;
	                source.onerror = null;
	                if (!scope_1.isLoading) {
	                    return;
	                }
	                scope_1.isLoading = false;
	                scope_1.dispatchEvent("error");
	            };
	            if (source.complete && source.src) {
	                source.onload = null;
	                source.onerror = null;
	                this.isLoading = false;
	                if (source.width && source.height) {
	                    this._sourceLoaded();
	                    if (wasLoading) {
	                        this.dispatchEvent("loaded");
	                    }
	                }
	                else if (wasLoading) {
	                    this.dispatchEvent("error");
	                }
	            }
	        }
	    };
	    BaseTexture.prototype._updateImageType = function () {
	        if (!this.imageUrl) {
	            return;
	        }
	        var dataUri = decomposeDataUri(this.imageUrl);
	        var imageType;
	        if (dataUri && dataUri.mediaType === 'image') {
	            var firstSubType = dataUri.subType.split('+')[0];
	            imageType = getUrlFileExtension("." + firstSubType);
	            if (!imageType) {
	                throw new Error('Invalid image type in data URI.');
	            }
	        }
	        else {
	            imageType = getUrlFileExtension(this.imageUrl);
	            if (!imageType) {
	                imageType = 'png';
	            }
	        }
	        this.imageType = imageType;
	    };
	    BaseTexture.prototype._sourceLoaded = function () {
	        this.hasLoaded = true;
	        this.update();
	    };
	    BaseTexture.prototype.destroy = function () {
	        if (this.imageUrl) {
	            delete TextureCache[this.imageUrl];
	            this.imageUrl = null;
	        }
	        this.source = null;
	        this.dispose();
	        BaseTexture.removeFromCache(this);
	        this.textureCacheIds = null;
	        this._destroyed = true;
	    };
	    BaseTexture.prototype.dispose = function () {
	        this.dispatchEvent("dispose");
	    };
	    BaseTexture.prototype.updateSourceImage = function (newSrc) {
	        this.source["src"] = newSrc;
	        this.loadSource(this.source);
	    };
	    BaseTexture.fromImage = function (imageUrl, crossorigin, scaleMode) {
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        var baseTexture = BaseTextureCache[imageUrl];
	        if (!baseTexture) {
	            var image = new Image();
	            if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0) {
	                image.crossOrigin = "anonymous";
	            }
	            else if (crossorigin && imageUrl.indexOf('data:') !== 0) {
	                image.crossOrigin = typeof crossorigin === 'string' ? crossorigin : 'anonymous';
	            }
	            baseTexture = new BaseTexture(image, scaleMode);
	            baseTexture.imageUrl = imageUrl;
	            image.src = imageUrl;
	            if (imageUrl.indexOf('data:') !== 0)
	                BaseTexture.addToCache(baseTexture, imageUrl);
	        }
	        return baseTexture;
	    };
	    BaseTexture.fromCanvas = function (canvas, scaleMode, origin) {
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        if (origin === void 0) { origin = 'canvas'; }
	        if (!canvas["_canvasId"]) {
	            canvas["_canvasId"] = origin + "_" + uid();
	        }
	        var baseTexture = BaseTextureCache[canvas["_canvasId"]];
	        if (!baseTexture) {
	            baseTexture = new BaseTexture(canvas, scaleMode);
	            BaseTexture.addToCache(baseTexture, canvas["_canvasId"]);
	        }
	        return baseTexture;
	    };
	    BaseTexture.from = function (source, scaleMode) {
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        if (typeof source === 'string') {
	            return BaseTexture.fromImage(source, undefined, scaleMode);
	        }
	        else if (source instanceof HTMLImageElement) {
	            var imageUrl = source.src;
	            var baseTexture = BaseTextureCache[imageUrl];
	            if (!baseTexture) {
	                baseTexture = new BaseTexture(source, scaleMode);
	                baseTexture.imageUrl = imageUrl;
	                if (imageUrl.indexOf('data:') !== 0)
	                    BaseTexture.addToCache(baseTexture, imageUrl);
	            }
	            return baseTexture;
	        }
	        else if (source instanceof HTMLCanvasElement) {
	            return BaseTexture.fromCanvas(source, scaleMode);
	        }
	        return source;
	    };
	    BaseTexture.addToCache = function (baseTexture, id) {
	        if (id) {
	            if (baseTexture.textureCacheIds.indexOf(id) === -1) {
	                baseTexture.textureCacheIds.push(id);
	            }
	            if (BaseTextureCache[id]) {
	                console.warn("BaseTexture added to the cache with an id [" + id + "] that already had an entry");
	            }
	            BaseTextureCache[id] = baseTexture;
	        }
	    };
	    BaseTexture.removeFromCache = function (baseTexture) {
	        if (typeof baseTexture === 'string') {
	            var baseTextureFromCache = BaseTextureCache[baseTexture];
	            if (baseTextureFromCache) {
	                var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);
	                if (index > -1) {
	                    baseTextureFromCache.textureCacheIds.splice(index, 1);
	                }
	                delete BaseTextureCache[baseTexture];
	                return baseTextureFromCache;
	            }
	        }
	        else if (baseTexture && baseTexture.textureCacheIds) {
	            for (var i = 0; i < baseTexture.textureCacheIds.length; ++i) {
	                delete BaseTextureCache[baseTexture.textureCacheIds[i]];
	            }
	            baseTexture.textureCacheIds.length = 0;
	            return baseTexture;
	        }
	        return null;
	    };
	    return BaseTexture;
	}(EventDispatcher));

	var TextureUvs = (function () {
	    function TextureUvs() {
	        this.x0 = 0;
	        this.y0 = 0;
	        this.x1 = 1;
	        this.y1 = 0;
	        this.x2 = 1;
	        this.y2 = 1;
	        this.x3 = 0;
	        this.y3 = 1;
	        this.uvsUint32 = new Uint32Array(4);
	        this.uvsFloat32 = new Float32Array(8);
	    }
	    TextureUvs.prototype.set = function (frame, baseFrame, rotate) {
	        var tw = baseFrame.width;
	        var th = baseFrame.height;
	        if (rotate) {
	            var w2 = frame.width / 2 / tw;
	            var h2 = frame.height / 2 / th;
	            var cX = (frame.x / tw) + w2;
	            var cY = (frame.y / th) + h2;
	            rotate = GroupD8.add(rotate, GroupD8.NW);
	            this.x0 = cX + (w2 * GroupD8.uX(rotate));
	            this.y0 = cY + (h2 * GroupD8.uY(rotate));
	            rotate = GroupD8.add(rotate, 2);
	            this.x1 = cX + (w2 * GroupD8.uX(rotate));
	            this.y1 = cY + (h2 * GroupD8.uY(rotate));
	            rotate = GroupD8.add(rotate, 2);
	            this.x2 = cX + (w2 * GroupD8.uX(rotate));
	            this.y2 = cY + (h2 * GroupD8.uY(rotate));
	            rotate = GroupD8.add(rotate, 2);
	            this.x3 = cX + (w2 * GroupD8.uX(rotate));
	            this.y3 = cY + (h2 * GroupD8.uY(rotate));
	        }
	        else {
	            this.x0 = frame.x / tw;
	            this.y0 = frame.y / th;
	            this.x1 = (frame.x + frame.width) / tw;
	            this.y1 = frame.y / th;
	            this.x2 = (frame.x + frame.width) / tw;
	            this.y2 = (frame.y + frame.height) / th;
	            this.x3 = frame.x / tw;
	            this.y3 = (frame.y + frame.height) / th;
	        }
	        this.uvsUint32[0] = (((this.y0 * 65535) & 0xFFFF) << 16) | ((this.x0 * 65535) & 0xFFFF);
	        this.uvsUint32[1] = (((this.y1 * 65535) & 0xFFFF) << 16) | ((this.x1 * 65535) & 0xFFFF);
	        this.uvsUint32[2] = (((this.y2 * 65535) & 0xFFFF) << 16) | ((this.x2 * 65535) & 0xFFFF);
	        this.uvsUint32[3] = (((this.y3 * 65535) & 0xFFFF) << 16) | ((this.x3 * 65535) & 0xFFFF);
	        this.uvsFloat32[0] = this.x0;
	        this.uvsFloat32[1] = this.y0;
	        this.uvsFloat32[2] = this.x1;
	        this.uvsFloat32[3] = this.y1;
	        this.uvsFloat32[4] = this.x2;
	        this.uvsFloat32[5] = this.y2;
	        this.uvsFloat32[6] = this.x3;
	        this.uvsFloat32[7] = this.y3;
	    };
	    return TextureUvs;
	}());

	var Texture = (function (_super) {
	    tslib_1.__extends(Texture, _super);
	    function Texture(baseTexture, frame, orig, trim, rotate, anchor) {
	        var _this = _super.call(this) || this;
	        _this._instanceType = "Texture";
	        _this.noFrame = false;
	        if (!frame) {
	            _this.noFrame = true;
	            frame = new Rectangle(0, 0, 1, 1);
	        }
	        if (baseTexture instanceof Texture) {
	            baseTexture = baseTexture.baseTexture;
	        }
	        _this.baseTexture = baseTexture;
	        _this._frame = frame;
	        _this.trim = trim;
	        _this.valid = false;
	        _this._uvs = null;
	        _this.orig = orig || frame;
	        _this._rotate = Number(rotate || 0);
	        _this.onBaseTextureUpdated = _this.onBaseTextureUpdated.bind(_this);
	        _this.onBaseTextureLoaded = _this.onBaseTextureLoaded.bind(_this);
	        if (baseTexture.hasLoaded) {
	            if (_this.noFrame) {
	                frame = new Rectangle(0, 0, baseTexture.width, baseTexture.height);
	                baseTexture.addEventListener('update', _this.onBaseTextureUpdated);
	            }
	            _this.frame = frame;
	        }
	        else {
	            baseTexture.once('loaded', _this.onBaseTextureLoaded);
	        }
	        _this.defaultAnchor = anchor ? new Point(anchor.x, anchor.y) : new Point(0, 0);
	        _this._updateID = 0;
	        _this.transform = null;
	        _this.textureCacheIds = [];
	        return _this;
	    }
	    Texture.prototype.update = function () {
	        this.baseTexture.update();
	    };
	    Texture.prototype.onBaseTextureLoaded = function (e) {
	        var baseTexture = e.target;
	        this._updateID++;
	        if (this.noFrame) {
	            this.frame = new Rectangle(0, 0, baseTexture.width, baseTexture.height);
	        }
	        else {
	            this.frame = this._frame;
	        }
	        this.baseTexture.addEventListener('update', this.onBaseTextureUpdated);
	        this.dispatchEvent("update");
	        this.dispatchEvent("loaded");
	    };
	    Texture.prototype.onBaseTextureUpdated = function (e) {
	        var baseTexture = e.target;
	        this._updateID++;
	        this._frame.width = baseTexture.width;
	        this._frame.height = baseTexture.height;
	        this.dispatchEvent("update");
	    };
	    Texture.prototype.destroy = function () {
	        if (this.baseTexture) {
	            this.baseTexture.removeEventListener('update', this.onBaseTextureUpdated);
	            this.baseTexture.removeEventListener('loaded', this.onBaseTextureLoaded);
	            this.baseTexture = null;
	        }
	        this._frame = null;
	        this._uvs = null;
	        this.trim = null;
	        this.orig = null;
	        this.valid = false;
	        Texture.removeFromCache(this);
	        this.textureCacheIds = null;
	    };
	    Texture.prototype.clone = function () {
	        return new Texture(this.baseTexture, this.frame, this.orig, this.trim, this.rotate);
	    };
	    Texture.prototype._updateUvs = function () {
	        if (!this._uvs) {
	            this._uvs = new TextureUvs();
	        }
	        this._uvs.set(this._frame, this.baseTexture, this.rotate);
	        this._updateID++;
	    };
	    Object.defineProperty(Texture.prototype, "frame", {
	        get: function () {
	            return this._frame;
	        },
	        set: function (frame) {
	            this._frame = frame;
	            this.noFrame = false;
	            var x = frame.x, y = frame.y, width = frame.width, height = frame.height;
	            var xNotFit = x + width > this.baseTexture.width;
	            var yNotFit = y + height > this.baseTexture.height;
	            if (xNotFit || yNotFit) {
	                var relationship = xNotFit && yNotFit ? 'and' : 'or';
	                var errorX = "X: " + x + " + " + width + " = " + (x + width) + " > " + this.baseTexture.width;
	                var errorY = "Y: " + y + " + " + height + " = " + (y + height) + " > " + this.baseTexture.height;
	                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions: '
	                    + (errorX + " " + relationship + " " + errorY));
	            }
	            this.valid = width && height && this.baseTexture.hasLoaded;
	            if (!this.trim && !this.rotate) {
	                this.orig = frame;
	            }
	            if (this.valid) {
	                this._updateUvs();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Texture.prototype, "rotate", {
	        get: function () {
	            return this._rotate;
	        },
	        set: function (rotate) {
	            if (this._rotate != rotate) {
	                this._rotate = rotate;
	                if (this.valid) {
	                    this._updateUvs();
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Texture.prototype, "width", {
	        get: function () {
	            return this.orig.width;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Texture.prototype, "height", {
	        get: function () {
	            return this.orig.height;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Texture.fromImage = function (imageUrl, crossorigin, scaleMode) {
	        if (crossorigin === void 0) { crossorigin = true; }
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        var texture = TextureCache[imageUrl];
	        if (!texture) {
	            texture = new Texture(BaseTexture.fromImage(imageUrl, crossorigin, scaleMode));
	            if (imageUrl.indexOf('data:') !== 0)
	                Texture.addToCache(texture, imageUrl);
	        }
	        return texture;
	    };
	    Texture.fromFrame = function (frameId) {
	        var texture = TextureCache[frameId];
	        if (!texture) {
	            throw new Error("The frameId \"" + frameId + "\" does not exist in the texture cache");
	        }
	        return texture;
	    };
	    Texture.fromCanvas = function (canvas, scaleMode, origin) {
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        if (origin === void 0) { origin = 'canvas'; }
	        return new Texture(BaseTexture.fromCanvas(canvas, scaleMode, origin));
	    };
	    Texture.from = function (source) {
	        if (typeof source === 'string') {
	            var texture = TextureCache[source];
	            if (!texture) {
	                return Texture.fromImage(source);
	            }
	            return texture;
	        }
	        else if (source instanceof HTMLImageElement) {
	            return new Texture(BaseTexture.from(source));
	        }
	        else if (source instanceof HTMLCanvasElement) {
	            return Texture.fromCanvas(source, exports.SCALE_MODES.LINEAR, 'canvas');
	        }
	        else if (source instanceof BaseTexture) {
	            return new Texture(source);
	        }
	        return source;
	    };
	    Texture.addToCache = function (texture, id) {
	        if (id) {
	            if (texture.textureCacheIds.indexOf(id) === -1) {
	                texture.textureCacheIds.push(id);
	            }
	            TextureCache[id] = texture;
	        }
	    };
	    Texture.removeFromCache = function (texture) {
	        if (typeof texture === 'string') {
	            var textureFromCache = TextureCache[texture];
	            if (textureFromCache) {
	                var index = textureFromCache.textureCacheIds.indexOf(texture);
	                if (index > -1) {
	                    textureFromCache.textureCacheIds.splice(index, 1);
	                }
	                delete TextureCache[texture];
	                return textureFromCache;
	            }
	        }
	        else if (texture && texture.textureCacheIds) {
	            for (var i = 0; i < texture.textureCacheIds.length; ++i) {
	                if (TextureCache[texture.textureCacheIds[i]] === texture) {
	                    delete TextureCache[texture.textureCacheIds[i]];
	                }
	            }
	            texture.textureCacheIds.length = 0;
	            return texture;
	        }
	        return null;
	    };
	    return Texture;
	}(EventDispatcher));
	function createWhiteTexture() {
	    var canvas = document.createElement('canvas');
	    canvas.width = 16;
	    canvas.height = 16;
	    var context = canvas.getContext('2d');
	    context.fillStyle = 'white';
	    context.fillRect(0, 0, 16, 16);
	    return new Texture(new BaseTexture(canvas));
	}
	function removeAllHandlers(tex) {
	    tex.destroy = function _emptyDestroy() {
	    };
	    tex.addEventListener = function _emptyOn() {
	    };
	    tex.once = function _emptyOnce() {
	    };
	    tex.dispatchEvent = function _emptyEmit() {
	    };
	}
	Texture.EMPTY = new Texture(new BaseTexture());
	removeAllHandlers(Texture.EMPTY);
	removeAllHandlers(Texture.EMPTY.baseTexture);
	Texture.WHITE = createWhiteTexture();
	removeAllHandlers(Texture.WHITE);
	removeAllHandlers(Texture.WHITE.baseTexture);

	var padding = 2;
	function DrawAllToCanvas(images, callback) {
	    var textures = {};
	    var imagesAll = [];
	    var countAll = Object.getOwnPropertyNames(images).length;
	    preLoad(images, function (img) {
	        imagesAll.push(img);
	        if (imagesAll.length == countAll) {
	            imagesAll.sort(compare('width', 'height'));
	            while (imagesAll.length) {
	                putInCanvas(imagesAll, textures);
	            }
	            callback(textures);
	        }
	    });
	}
	function preLoad(images, callback) {
	    var _loop_1 = function () {
	        bitmap = images[key];
	        if (typeof (bitmap) == 'string') {
	            var imgTag_1 = new Image();
	            if (bitmap.indexOf("iVBO") === 0 || bitmap.indexOf("/9j/2w") === 0) {
	                imgTag_1.src = 'data:image/png;base64,' + bitmap;
	            }
	            else {
	                imgTag_1.src = bitmap;
	            }
	            imgTag_1["imageKey"] = key;
	            imgTag_1.onload = function () {
	                callback(imgTag_1);
	            };
	        }
	        else if (bitmap instanceof HTMLImageElement) {
	            bitmap["imageKey"] = key;
	            if (bitmap.complete && bitmap.width && bitmap.height) {
	                callback(bitmap);
	            }
	            else {
	                bitmap.onload = function () {
	                    callback(bitmap);
	                };
	            }
	        }
	        else if (bitmap instanceof HTMLCanvasElement) {
	            callback(bitmap);
	        }
	    };
	    var bitmap;
	    for (var key in images) {
	        _loop_1();
	    }
	}
	function compare(name1, name2) {
	    return function (a, b) {
	        var fir1 = a[name1];
	        var sec1 = b[name1];
	        if (fir1 === sec1) {
	            var fir2 = a[name2];
	            var sec2 = b[name2];
	            if (fir2 === sec2) {
	                return 0;
	            }
	            else {
	                return fir2 > sec2 ? 1 : -1;
	            }
	        }
	        else {
	            return fir1 > sec1 ? 1 : -1;
	        }
	    };
	}
	function putInCanvas(imagesAll, textures) {
	    var freeRects = [];
	    var imageInfos = [];
	    var size = 2048;
	    var canvas = document.createElement('canvas');
	    canvas.width = size;
	    canvas.height = size;
	    freeRects.push(new Rectangle(0, 0, size, size));
	    var canvasWidth = 0, canvasHeight = 0;
	    var match = false;
	    for (var i = imagesAll.length - 1; i >= 0; i--) {
	        var img = imagesAll[i];
	        match = false;
	        for (var j = freeRects.length - 1; j >= 0; j--) {
	            var freeRect = freeRects[j];
	            if (freeRect.width >= img.width + padding && freeRect.height >= img.height + padding) {
	                match = true;
	                var imageIn = new imageInfo(img, freeRect.x, freeRect.y);
	                imageInfos.push(imageIn);
	                imagesAll.splice(i, 1);
	                freeRects.splice(j, 1);
	                var restW = freeRect.width - img.width - padding;
	                if (restW > 0) {
	                    var rightRect = new Rectangle(freeRect.x + img.width + padding, freeRect.y, restW, img.height + padding);
	                    freeRect.y == 0 ? freeRects.unshift(rightRect) : freeRects.push(rightRect);
	                }
	                var restH = freeRect.height - img.height - padding;
	                if (restH > 0) {
	                    var downRect = new Rectangle(freeRect.x, freeRect.y + img.height + padding, freeRect.width, restH);
	                    freeRect.x == 0 ? freeRects.unshift(downRect) : freeRects.push(downRect);
	                }
	                if (imageIn.image.width + imageIn.x > canvasWidth) {
	                    canvasWidth = imageIn.image.width + imageIn.x;
	                }
	                if (imageIn.image.height + imageIn.y > canvasHeight) {
	                    canvasHeight = imageIn.image.height + imageIn.y;
	                }
	                break;
	            }
	        }
	        if (!match)
	            break;
	    }
	    canvas.width = nextPow2(canvasWidth + padding);
	    canvas.height = nextPow2(canvasHeight + padding);
	    var ctx = canvas.getContext("2d");
	    for (var m = 0; m < imageInfos.length; m++) {
	        var imageInfo_1 = imageInfos[m];
	        var image = imageInfo_1.image;
	        ctx.drawImage(imageInfo_1.image, 0, 0, image.width, image.height, imageInfo_1.x, imageInfo_1.y, image.width, image.height);
	    }
	    var baseTexture = new BaseTexture(canvas);
	    for (var n = 0; n < imageInfos.length; n++) {
	        var imageInfo_2 = imageInfos[n];
	        var image = imageInfo_2.image;
	        textures[image.imageKey] = new Texture(baseTexture, new Rectangle(imageInfo_2.x, imageInfo_2.y, image.width, image.height), new Rectangle(0, 0, image.width, image.height), null);
	    }
	}
	var imageInfo = (function () {
	    function imageInfo(image, x, y) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        this.image = image;
	        this.x = x;
	        this.y = y;
	    }
	    return imageInfo;
	}());

	var nextUid = 0;
	function uid() {
	    return ++nextUid;
	}
	var backupCanvas = document.createElement("canvas");
	function getGradientColor(points, colors) {
	    var colorObj;
	    var ctx = backupCanvas.getContext("2d");
	    if (points.length == 4) {
	        colorObj = ctx.createLinearGradient(points[0], points[1], points[2], points[3]);
	    }
	    else {
	        colorObj = ctx.createRadialGradient(points[0], points[1], 0, points[2], points[3], points[4]);
	    }
	    for (var i = 0, l = colors.length; i < l; i++) {
	        colorObj.addColorStop(colors[i][0], getRGBA(colors[i][1], colors[i][2]));
	    }
	    return colorObj;
	}
	function getCanvasBitmapStyle(image) {
	    var ctx = backupCanvas.getContext("2d");
	    return ctx.createPattern(image, "repeat");
	}
	function hex2rgb(hex, out) {
	    out = out || [];
	    out[0] = ((hex >> 16) & 0xFF) / 255;
	    out[1] = ((hex >> 8) & 0xFF) / 255;
	    out[2] = (hex & 0xFF) / 255;
	    return out;
	}
	function hex2string(hex) {
	    hex = hex.toString(16);
	    hex = '000000'.substr(0, 6 - hex.length) + hex;
	    return "#" + hex;
	}
	function string2hex(string) {
	    if (string.indexOf("#") == 0) {
	        string = string.replace("#", "0x");
	    }
	    return parseInt(string);
	}
	function rgb2hex(rgb) {
	    return (((rgb[0] * 255) << 16) + ((rgb[1] * 255) << 8) + (rgb[2] * 255 | 0));
	}
	function getRGBA(color, alpha) {
	    if (color.indexOf("0x") == 0) {
	        color = color.replace("0x", "#");
	    }
	    if (color.length < 7) {
	        color = "#000000";
	    }
	    if (alpha != 1) {
	        var r = parseInt("0x" + color.substr(1, 2));
	        var g = parseInt("0x" + color.substr(3, 2));
	        var b = parseInt("0x" + color.substr(5, 2));
	        color = "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
	    }
	    return color;
	}
	function inputFeildIosEnable() {
	    var u = navigator.userAgent, app = navigator.appVersion;
	    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	    if (isIOS) {
	        setTimeout(function () {
	            window["$"]("input").blur(function () {
	                if (isIOS) {
	                    blurAdjust();
	                }
	            });
	        }, 50);
	    }
	    function blurAdjust() {
	        setTimeout(function () {
	            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
	                return;
	            }
	            var result = 'pc';
	            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
	                result = 'ios';
	            }
	            else if (/(Android)/i.test(navigator.userAgent)) {
	                result = 'android';
	            }
	            if (result = 'ios') {
	                document.activeElement["scrollIntoViewIfNeeded"](true);
	            }
	        }, 100);
	    }
	}
	function decomposeDataUri(dataUri) {
	    var dataUriMatch = DATA_URI.exec(dataUri);
	    if (dataUriMatch) {
	        return {
	            mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : undefined,
	            subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : undefined,
	            charset: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : undefined,
	            encoding: dataUriMatch[4] ? dataUriMatch[4].toLowerCase() : undefined,
	            data: dataUriMatch[5],
	        };
	    }
	    return undefined;
	}
	function getUrlFileExtension(url) {
	    var extension = URL_FILE_EXTENSION.exec(url);
	    if (extension) {
	        return extension[1].toLowerCase();
	    }
	    return undefined;
	}
	function sign(n) {
	    if (n === 0)
	        return 0;
	    return n < 0 ? -1 : 1;
	}
	function premultiplyTint(tint, alpha) {
	    if (alpha === 1.0) {
	        return (alpha * 255 << 24) + tint;
	    }
	    if (alpha === 0.0) {
	        return 0;
	    }
	    var R = ((tint >> 16) & 0xFF);
	    var G = ((tint >> 8) & 0xFF);
	    var B = (tint & 0xFF);
	    R = ((R * alpha) + 0.5) | 0;
	    G = ((G * alpha) + 0.5) | 0;
	    B = ((B * alpha) + 0.5) | 0;
	    return (alpha * 255 << 24) + (R << 16) + (G << 8) + B;
	}
	var TextureCache = Object.create(null);
	var BaseTextureCache = Object.create(null);
	var TextureSheetCache = Object.create(null);
	function destroyTextureCache() {
	    var key;
	    for (key in TextureCache) {
	        TextureCache[key].destroy();
	    }
	    for (key in BaseTextureCache) {
	        BaseTextureCache[key].destroy();
	    }
	}
	function clearTextureCache() {
	    var key;
	    for (key in TextureCache) {
	        delete TextureCache[key];
	    }
	    for (key in BaseTextureCache) {
	        delete BaseTextureCache[key];
	    }
	}
	var GlobalPro = {
	    stageRenderType: exports.RENDERER_TYPE.WEBGL,
	    dpi: 1,
	    padding: 2,
	    startTime: 0
	};
	function isWebGLSupported() {
	    var contextOptions = { stencil: true };
	    try {
	        if (!window["WebGLRenderingContext"]) {
	            return false;
	        }
	        var canvas = document.createElement('canvas');
	        var gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);
	        var success = !!(gl && gl["getContextAttributes"]().stencil);
	        if (gl) {
	            var loseContext = gl["getExtension"]('WEBGL_lose_context');
	            if (loseContext) {
	                loseContext.loseContext();
	            }
	        }
	        gl = null;
	        return success;
	    }
	    catch (e) {
	        return false;
	    }
	}
	function removeItems(arr, startIdx, removeCount) {
	    var i, length = arr.length;
	    if (startIdx >= length || removeCount === 0) {
	        return;
	    }
	    removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);
	    var len = length - removeCount;
	    for (i = startIdx; i < len; ++i) {
	        arr[i] = arr[i + removeCount];
	    }
	    arr.length = len;
	}
	function mapWebGLBlendModesToPixi(gl, array) {
	    if (array === void 0) { array = []; }
	    array[exports.BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.ADD] = [gl.ONE, gl.DST_ALPHA];
	    array[exports.BLEND_MODES.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR];
	    array[exports.BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[exports.BLEND_MODES.ADD_NPM] = [gl.SRC_ALPHA, gl.DST_ALPHA, gl.ONE, gl.DST_ALPHA];
	    array[exports.BLEND_MODES.SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_COLOR];
	    return array;
	}

	var indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
	var Sprite = (function (_super) {
	    tslib_1.__extends(Sprite, _super);
	    function Sprite(texture) {
	        var _this = _super.call(this) || this;
	        _this._instanceType = "Sprite";
	        _this._anchorTexture = new ObservablePoint(_this._onAnchorUpdate, _this, (texture ? texture.defaultAnchor.x : 0), (texture ? texture.defaultAnchor.y : 0));
	        _this._texture = null;
	        _this._width = 0;
	        _this._height = 0;
	        _this._tint = null;
	        _this._tintRGB = null;
	        _this.tint = 0xFFFFFF;
	        _this._cachedTint = 0xFFFFFF;
	        _this.uvs = null;
	        _this._onTextureUpdate = _this._onTextureUpdate.bind(_this);
	        _this.texture = texture || Texture.EMPTY;
	        _this.vertexData = new Float32Array(8);
	        _this.vertexTrimmedData = null;
	        _this._transformID = -1;
	        _this._textureID = -1;
	        _this._transformTrimmedID = -1;
	        _this._textureTrimmedID = -1;
	        _this.indices = indices;
	        _this.start = 0;
	        _this.pluginName = 'sprite';
	        return _this;
	    }
	    Sprite.prototype._onTextureUpdate = function () {
	        this._textureID = -1;
	        this._textureTrimmedID = -1;
	        this._cachedTint = 0xFFFFFF;
	        if (this._texture.valid)
	            this.uvs = this._texture._uvs.uvsFloat32;
	        if (this._width) {
	            this.scale.x = sign(this.scale.x) * this._width / this._texture.orig.width;
	        }
	        if (this._height) {
	            this.scale.y = sign(this.scale.y) * this._height / this._texture.orig.height;
	        }
	        var width = this._texture.orig.width;
	        var height = this._texture.orig.height;
	        this._localBoundsSelf.x = -width * this.anchorTexture.x;
	        this._localBoundsSelf.y = -height * this.anchorTexture.y;
	        this._localBoundsSelf.width = width;
	        this._localBoundsSelf.height = height;
	        this.dispatchEvent(Event.COMPLETE);
	        this.dispatchEvent(Event.RESIZE);
	    };
	    Sprite.prototype._onAnchorUpdate = function () {
	        this._transformID = -1;
	        this._transformTrimmedID = -1;
	    };
	    Sprite.prototype.calculateVertices = function () {
	        if (this._transformID === this.transform._worldID && this._textureID === this._texture._updateID) {
	            return;
	        }
	        this._transformID = this.transform._worldID;
	        this._textureID = this._texture._updateID;
	        var texture = this._texture;
	        var wt = this.transform.worldMatrix;
	        var a = wt.a;
	        var b = wt.b;
	        var c = wt.c;
	        var d = wt.d;
	        var tx = wt.tx;
	        var ty = wt.ty;
	        var vertexData = this.vertexData;
	        var trim = texture.trim;
	        var orig = texture.orig;
	        var anchor = this._anchorTexture;
	        var w0 = 0;
	        var w1 = 0;
	        var h0 = 0;
	        var h1 = 0;
	        if (trim) {
	            w1 = trim.x - (anchor._x * orig.width);
	            w0 = w1 + trim.width;
	            h1 = trim.y - (anchor._y * orig.height);
	            h0 = h1 + trim.height;
	        }
	        else {
	            w1 = -anchor._x * orig.width;
	            w0 = w1 + orig.width;
	            h1 = -anchor._y * orig.height;
	            h0 = h1 + orig.height;
	        }
	        vertexData[0] = (a * w1) + (c * h1) + tx;
	        vertexData[1] = (d * h1) + (b * w1) + ty;
	        vertexData[2] = (a * w0) + (c * h1) + tx;
	        vertexData[3] = (d * h1) + (b * w0) + ty;
	        vertexData[4] = (a * w0) + (c * h0) + tx;
	        vertexData[5] = (d * h0) + (b * w0) + ty;
	        vertexData[6] = (a * w1) + (c * h0) + tx;
	        vertexData[7] = (d * h0) + (b * w1) + ty;
	    };
	    Sprite.prototype.calculateTrimmedVertices = function () {
	        if (!this.vertexTrimmedData) {
	            this.vertexTrimmedData = new Float32Array(8);
	        }
	        else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
	            return;
	        }
	        this._transformTrimmedID = this.transform._worldID;
	        this._textureTrimmedID = this._texture._updateID;
	        var texture = this._texture;
	        var vertexData = this.vertexTrimmedData;
	        var orig = texture.orig;
	        var anchor = this._anchorTexture;
	        var wt = this.transform.worldMatrix;
	        var a = wt.a;
	        var b = wt.b;
	        var c = wt.c;
	        var d = wt.d;
	        var tx = wt.tx;
	        var ty = wt.ty;
	        var w1 = -anchor._x * orig.width;
	        var w0 = w1 + orig.width;
	        var h1 = -anchor._y * orig.height;
	        var h0 = h1 + orig.height;
	        vertexData[0] = (a * w1) + (c * h1) + tx;
	        vertexData[1] = (d * h1) + (b * w1) + ty;
	        vertexData[2] = (a * w0) + (c * h1) + tx;
	        vertexData[3] = (d * h1) + (b * w0) + ty;
	        vertexData[4] = (a * w0) + (c * h0) + tx;
	        vertexData[5] = (d * h0) + (b * w0) + ty;
	        vertexData[6] = (a * w1) + (c * h0) + tx;
	        vertexData[7] = (d * h0) + (b * w1) + ty;
	    };
	    Sprite.prototype._renderWebGL = function (renderer) {
	        this.calculateVertices();
	        renderer.batchManager.setObjectRenderer(renderer.plugins["batch"]);
	        renderer.plugins["batch"].render(this);
	    };
	    Sprite.prototype._renderCanvas = function (renderer) {
	        renderer.plugins[this.pluginName].render(this);
	    };
	    Sprite.prototype._calculateBounds = function () {
	        var trim = this._texture.trim;
	        var orig = this._texture.orig;
	        if (!trim || (trim.width === orig.width && trim.height === orig.height)) {
	            this.calculateVertices();
	            Rectangle.createFromVertexData(this._bounds, this.vertexData);
	        }
	        else {
	            this.calculateTrimmedVertices();
	            Rectangle.createFromVertexData(this._bounds, this.vertexTrimmedData);
	        }
	    };
	    Sprite.prototype.getLocalBounds = function (rect) {
	        if (this.children.length === 0) {
	            if (!rect) {
	                rect = DisplayObject.temBounds;
	            }
	            rect.copy(this._localBoundsSelf);
	            return rect;
	        }
	        return _super.prototype.getLocalBounds.call(this, rect);
	    };
	    Sprite.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
	        if (isMouseEvent === void 0) { isMouseEvent = false; }
	        var hitDisplayObject;
	        hitDisplayObject = _super.prototype.hitTestPoint.call(this, globalPoint, isMouseEvent);
	        if (hitDisplayObject)
	            return hitDisplayObject;
	        hitDisplayObject = this.displayObjectHitTestPoint(globalPoint, isMouseEvent);
	        if (hitDisplayObject)
	            return hitDisplayObject;
	        return null;
	    };
	    Sprite.prototype.destroy = function () {
	        _super.prototype.destroy.call(this);
	        this._texture.removeEventListener('update', this._onTextureUpdate);
	        this._anchorTexture = null;
	        this._texture = null;
	        this.indices = null;
	        this.uvs = null;
	        this.vertexData = null;
	        this.vertexTrimmedData = null;
	    };
	    Object.defineProperty(Sprite.prototype, "width", {
	        get: function () {
	            return Math.abs(this.scale.x) * this._texture.orig.width;
	        },
	        set: function (value) {
	            var s = sign(this.scale.x) || 1;
	            this.scale.x = s * value / this._texture.orig.width;
	            this._width = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Sprite.prototype, "height", {
	        get: function () {
	            return Math.abs(this.scale.y) * this._texture.orig.height;
	        },
	        set: function (value) {
	            var s = sign(this.scale.y) || 1;
	            this.scale.y = s * value / this._texture.orig.height;
	            this._height = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Sprite.prototype, "anchorTexture", {
	        get: function () {
	            return this._anchorTexture;
	        },
	        set: function (value) {
	            this._anchorTexture.copy(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Sprite.prototype, "texture", {
	        get: function () {
	            return this._texture;
	        },
	        set: function (value) {
	            if (this._texture === value) {
	                return;
	            }
	            this._texture = value || Texture.EMPTY;
	            this._textureID = -1;
	            this._textureTrimmedID = -1;
	            this._cachedTint = 0xFFFFFF;
	            if (value) {
	                if (value.baseTexture.hasLoaded) {
	                    this._onTextureUpdate();
	                }
	                else {
	                    value.once('update', this._onTextureUpdate);
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Sprite.prototype, "tint", {
	        get: function () {
	            return this._tint;
	        },
	        set: function (value) {
	            if (value === this._tint)
	                return;
	            this._tint = value;
	            this._tintRGB = (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Sprite.from = function (source) {
	        return new Sprite(Texture.from(source));
	    };
	    Sprite.fromFrame = function (frameId) {
	        var texture = TextureCache[frameId];
	        if (!texture) {
	            throw new Error("The frameId \"" + frameId + "\" does not exist in the texture cache");
	        }
	        return new Sprite(texture);
	    };
	    Sprite.fromImage = function (imageId, crossorigin, scaleMode) {
	        if (crossorigin === void 0) { crossorigin = true; }
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        return new Sprite(Texture.fromImage(imageId, crossorigin, scaleMode));
	    };
	    return Sprite;
	}(Container));

	var BatchDrawCall = (function () {
	    function BatchDrawCall() {
	        this.textures = [];
	        this.textureCount = 0;
	        this.start = 0;
	        this.size = 0;
	        this.type = exports.DRAW_MODES.TRIANGLES;
	    }
	    return BatchDrawCall;
	}());

	var ObjectRenderer = (function () {
	    function ObjectRenderer(renderer) {
	        this.renderer = renderer;
	        this.onContextChange = this.onContextChange.bind(this);
	        this.renderer.addEventListener('onContextChange', this.onContextChange);
	    }
	    ObjectRenderer.prototype.onContextChange = function () {
	    };
	    ObjectRenderer.prototype.start = function () {
	    };
	    ObjectRenderer.prototype.stop = function () {
	        this.flush();
	    };
	    ObjectRenderer.prototype.flush = function () {
	    };
	    ObjectRenderer.prototype.render = function (object) {
	    };
	    ObjectRenderer.prototype.destroy = function () {
	        this.renderer.removeEventListener('onContextChange', this.onContextChange);
	        this.renderer = null;
	    };
	    return ObjectRenderer;
	}());

	function createContext(canvas, options) {
	    var gl = canvas.getContext('webgl', options) ||
	        canvas.getContext('experimental-webgl', options);
	    if (!gl) {
	        throw new Error('This browser does not support webGL. Try using the canvas renderer');
	    }
	    return gl;
	}

	var fragTemplate = [
	    'precision mediump float;',
	    'void main(void){',
	    'float test = 0.1;',
	    '%forloop%',
	    'gl_FragColor = vec4(0.0);',
	    '}',
	].join('\n');
	function checkMaxIfStatementsInShader(maxIfs, gl) {
	    var createTempContext = !gl;
	    if (maxIfs === 0) {
	        throw new Error('Invalid value of `0` passed to `checkMaxIfStatementsInShader`');
	    }
	    if (createTempContext) {
	        var tinyCanvas = document.createElement('canvas');
	        tinyCanvas.width = 1;
	        tinyCanvas.height = 1;
	        gl = createContext(tinyCanvas);
	    }
	    var shader = gl.createShader(gl.FRAGMENT_SHADER);
	    while (true) {
	        var fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));
	        gl.shaderSource(shader, fragmentSrc);
	        gl.compileShader(shader);
	        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	            maxIfs = (maxIfs / 2) | 0;
	        }
	        else {
	            break;
	        }
	    }
	    if (createTempContext) {
	        if (gl.getExtension('WEBGL_lose_context')) {
	            gl.getExtension('WEBGL_lose_context').loseContext();
	        }
	    }
	    return maxIfs;
	}
	function generateIfTestSrc(maxIfs) {
	    var src = '';
	    for (var i = 0; i < maxIfs; ++i) {
	        if (i > 0) {
	            src += '\nelse ';
	        }
	        if (i < maxIfs - 1) {
	            src += "if(test == " + i + ".0){}";
	        }
	    }
	    return src;
	}

	var BatchBuffer = (function () {
	    function BatchBuffer(size) {
	        this.vertices = new ArrayBuffer(size);
	        this.float32View = new Float32Array(this.vertices);
	        this.uint32View = new Uint32Array(this.vertices);
	    }
	    BatchBuffer.prototype.destroy = function () {
	        this.vertices = null;
	        this.positions = null;
	        this.uvs = null;
	        this.colors = null;
	    };
	    return BatchBuffer;
	}());

	var GLTexture = (function () {
	    function GLTexture(gl, width, height, format, type) {
	        this.uploadData = function (data, width, height) {
	            this.bind();
	            var gl = this.gl;
	            if (data instanceof Float32Array) {
	                if (!FLOATING_POINT_AVAILABLE) {
	                    var ext = gl.getExtension("OES_texture_float");
	                    if (ext) {
	                        FLOATING_POINT_AVAILABLE = true;
	                    }
	                    else {
	                        throw new Error('floating point textures not available');
	                    }
	                }
	                this.type = gl.FLOAT;
	            }
	            else {
	                this.type = this.type || gl.UNSIGNED_BYTE;
	            }
	            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
	            if (width !== this.width || height !== this.height) {
	                gl.texImage2D(gl.TEXTURE_2D, 0, this.format, width, height, 0, this.format, this.type, data || null);
	            }
	            else {
	                gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, this.format, this.type, data || null);
	            }
	            this.width = width;
	            this.height = height;
	        };
	        this.gl = gl;
	        this.texture = gl.createTexture();
	        this.mipmap = false;
	        this.premultiplyAlpha = false;
	        this.width = width || -1;
	        this.height = height || -1;
	        this.format = format || gl.RGBA;
	        this.type = type || gl.UNSIGNED_BYTE;
	    }
	    GLTexture.prototype.upload = function (source) {
	        this.bind();
	        var gl = this.gl;
	        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
	        var newWidth = source.videoWidth || source.width;
	        var newHeight = source.videoHeight || source.height;
	        if (newHeight !== this.height || newWidth !== this.width) {
	            gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, source);
	        }
	        else {
	            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, this.format, this.type, source);
	        }
	        this.width = newWidth;
	        this.height = newHeight;
	    };
	    GLTexture.prototype.bind = function (location) {
	        var gl = this.gl;
	        if (location !== undefined) {
	            gl.activeTexture(gl.TEXTURE0 + location);
	        }
	        gl.bindTexture(gl.TEXTURE_2D, this.texture);
	    };
	    GLTexture.prototype.unbind = function () {
	        var gl = this.gl;
	        gl.bindTexture(gl.TEXTURE_2D, null);
	    };
	    GLTexture.prototype.minFilter = function (linear) {
	        var gl = this.gl;
	        this.bind();
	        if (this.mipmap) {
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
	        }
	        else {
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR : gl.NEAREST);
	        }
	    };
	    GLTexture.prototype.magFilter = function (linear) {
	        var gl = this.gl;
	        this.bind();
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, linear ? gl.LINEAR : gl.NEAREST);
	    };
	    GLTexture.prototype.enableMipmap = function () {
	        var gl = this.gl;
	        this.bind();
	        this.mipmap = true;
	        gl.generateMipmap(gl.TEXTURE_2D);
	    };
	    GLTexture.prototype.enableLinearScaling = function () {
	        this.minFilter(true);
	        this.magFilter(true);
	    };
	    GLTexture.prototype.enableNearestScaling = function () {
	        this.minFilter(false);
	        this.magFilter(false);
	    };
	    GLTexture.prototype.enableWrapClamp = function () {
	        var gl = this.gl;
	        this.bind();
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	    };
	    GLTexture.prototype.enableWrapRepeat = function () {
	        var gl = this.gl;
	        this.bind();
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
	    };
	    GLTexture.prototype.enableWrapMirrorRepeat = function () {
	        var gl = this.gl;
	        this.bind();
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
	    };
	    GLTexture.prototype.destroy = function () {
	        var gl = this.gl;
	        gl.deleteTexture(this.texture);
	    };
	    GLTexture.fromSource = function (gl, source, premultiplyAlpha) {
	        var texture = new GLTexture(gl);
	        texture.premultiplyAlpha = premultiplyAlpha || false;
	        texture.upload(source);
	        return texture;
	    };
	    GLTexture.fromData = function (gl, data, width, height) {
	        var texture = new GLTexture(gl);
	        texture.uploadData(data, width, height);
	        return texture;
	    };
	    return GLTexture;
	}());
	var FLOATING_POINT_AVAILABLE = false;

	var EMPTY_ARRAY_BUFFER = new ArrayBuffer(0);
	var GLBuffer = (function () {
	    function GLBuffer(gl, type, data, drawType) {
	        this.destroy = function () {
	            this.gl.deleteBuffer(this.buffer);
	        };
	        this.gl = gl;
	        this.buffer = gl.createBuffer();
	        this.type = type || gl.ARRAY_BUFFER;
	        this.drawType = drawType || gl.STATIC_DRAW;
	        this.data = EMPTY_ARRAY_BUFFER;
	        if (data) {
	            this.upload(data);
	        }
	        this._updateID = 0;
	    }
	    GLBuffer.prototype.upload = function (data, offset, dontBind) {
	        if (!dontBind)
	            this.bind();
	        var gl = this.gl;
	        data = data || this.data;
	        offset = offset || 0;
	        if (this.data.byteLength >= data.byteLength) {
	            gl.bufferSubData(this.type, offset, data);
	        }
	        else {
	            gl.bufferData(this.type, data, this.drawType);
	        }
	        this.data = data;
	    };
	    GLBuffer.prototype.bind = function () {
	        var gl = this.gl;
	        gl.bindBuffer(this.type, this.buffer);
	    };
	    GLBuffer.createVertexBuffer = function (gl, data, drawType) {
	        return new GLBuffer(gl, gl.ARRAY_BUFFER, data, drawType);
	    };
	    GLBuffer.createIndexBuffer = function (gl, data, drawType) {
	        return new GLBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, data, drawType);
	    };
	    GLBuffer.create = function (gl, type, data, drawType) {
	        return new GLBuffer(gl, type, data, drawType);
	    };
	    return GLBuffer;
	}());

	function setVertexAttribArrays(gl, attribs, state) {
	    var i;
	    if (state) {
	        var tempAttribState = state.tempAttribState, attribState = state.attribState;
	        for (i = 0; i < tempAttribState.length; i++) {
	            tempAttribState[i] = false;
	        }
	        for (i = 0; i < attribs.length; i++) {
	            tempAttribState[attribs[i].attribute.location] = true;
	        }
	        for (i = 0; i < attribState.length; i++) {
	            if (attribState[i] !== tempAttribState[i]) {
	                attribState[i] = tempAttribState[i];
	                if (state.attribState[i]) {
	                    gl.enableVertexAttribArray(i);
	                }
	                else {
	                    gl.disableVertexAttribArray(i);
	                }
	            }
	        }
	    }
	    else {
	        for (i = 0; i < attribs.length; i++) {
	            var attrib = attribs[i];
	            gl.enableVertexAttribArray(attrib.attribute.location);
	        }
	    }
	}

	var VertexArrayObject = (function () {
	    function VertexArrayObject(gl, state) {
	        this.nativeVaoExtension = null;
	        if (!VertexArrayObject.FORCE_NATIVE) {
	            this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') ||
	                gl.getExtension('MOZ_OES_vertex_array_object') ||
	                gl.getExtension('WEBKIT_OES_vertex_array_object');
	        }
	        this.nativeState = state;
	        if (this.nativeVaoExtension) {
	            this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
	            var maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
	            this.nativeState = {
	                tempAttribState: new Array(maxAttribs),
	                attribState: new Array(maxAttribs)
	            };
	        }
	        this.gl = gl;
	        this.attributes = [];
	        this.indexBuffer = null;
	        this.dirty = false;
	    }
	    VertexArrayObject.prototype.bind = function () {
	        if (this.nativeVao) {
	            this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
	            if (this.dirty) {
	                this.dirty = false;
	                this.activate();
	                return this;
	            }
	            if (this.indexBuffer) {
	                this.indexBuffer.bind();
	            }
	        }
	        else {
	            this.activate();
	        }
	        return this;
	    };
	    VertexArrayObject.prototype.unbind = function () {
	        if (this.nativeVao) {
	            this.nativeVaoExtension.bindVertexArrayOES(null);
	        }
	        return this;
	    };
	    VertexArrayObject.prototype.activate = function () {
	        var gl = this.gl;
	        var lastBuffer = null;
	        for (var i = 0; i < this.attributes.length; i++) {
	            var attrib = this.attributes[i];
	            if (lastBuffer !== attrib.buffer) {
	                attrib.buffer.bind();
	                lastBuffer = attrib.buffer;
	            }
	            attrib.attribute.pointer(attrib.type || gl.FLOAT, attrib.normalized || false, attrib.stride || 0, attrib.start || 0);
	        }
	        setVertexAttribArrays(gl, this.attributes, this.nativeState);
	        if (this.indexBuffer) {
	            this.indexBuffer.bind();
	        }
	        return this;
	    };
	    VertexArrayObject.prototype.addAttribute = function (buffer, attribute, type, normalized, stride, start) {
	        this.attributes.push({
	            buffer: buffer,
	            attribute: attribute,
	            location: attribute.location,
	            type: type || this.gl.FLOAT,
	            normalized: normalized || false,
	            stride: stride || 0,
	            start: start || 0
	        });
	        this.dirty = true;
	        return this;
	    };
	    VertexArrayObject.prototype.addIndex = function (buffer) {
	        this.indexBuffer = buffer;
	        this.dirty = true;
	        return this;
	    };
	    VertexArrayObject.prototype.clear = function () {
	        if (this.nativeVao) {
	            this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
	        }
	        this.attributes.length = 0;
	        this.indexBuffer = null;
	        return this;
	    };
	    VertexArrayObject.prototype.draw = function (type, size, start) {
	        var gl = this.gl;
	        if (this.indexBuffer) {
	            gl.drawElements(type, size || this.indexBuffer.data.length, gl.UNSIGNED_SHORT, (start || 0) * 2);
	        }
	        else {
	            gl.drawArrays(type, start || 0, size || this.getSize());
	        }
	        return this;
	    };
	    VertexArrayObject.prototype.destroy = function () {
	        this.gl = null;
	        this.indexBuffer = null;
	        this.attributes = null;
	        this.nativeState = null;
	        if (this.nativeVao) {
	            this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);
	        }
	        this.nativeVaoExtension = null;
	        this.nativeVao = null;
	    };
	    VertexArrayObject.prototype.getSize = function () {
	        var attrib = this.attributes[0];
	        return attrib.buffer.data.length / ((attrib.stride / 4) || attrib.attribute.size);
	    };
	    VertexArrayObject.FORCE_NATIVE = false;
	    return VertexArrayObject;
	}());

	var GLFramebuffer = (function () {
	    function GLFramebuffer(gl, width, height) {
	        this.gl = gl;
	        this.framebuffer = gl.createFramebuffer();
	        this.stencil = null;
	        this.texture = null;
	        this.width = width || 100;
	        this.height = height || 100;
	    }
	    GLFramebuffer.prototype.enableTexture = function (texture) {
	        var gl = this.gl;
	        this.texture = texture || new GLTexture(gl);
	        this.texture.bind();
	        this.bind();
	        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.texture, 0);
	    };
	    GLFramebuffer.prototype.enableStencil = function () {
	        if (this.stencil)
	            return;
	        var gl = this.gl;
	        this.stencil = gl.createRenderbuffer();
	        gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
	        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencil);
	        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.width, this.height);
	    };
	    GLFramebuffer.prototype.clear = function (r, g, b, a) {
	        this.bind();
	        var gl = this.gl;
	        gl.clearColor(r, g, b, a);
	        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	    };
	    GLFramebuffer.prototype.bind = function () {
	        var gl = this.gl;
	        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
	    };
	    GLFramebuffer.prototype.unbind = function () {
	        var gl = this.gl;
	        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	    };
	    GLFramebuffer.prototype.resize = function (width, height) {
	        var gl = this.gl;
	        this.width = width;
	        this.height = height;
	        if (this.texture) {
	            this.texture.uploadData(null, width, height);
	        }
	        if (this.stencil) {
	            gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
	            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
	        }
	    };
	    GLFramebuffer.prototype.destroy = function () {
	        var gl = this.gl;
	        if (this.texture) {
	            this.texture.destroy();
	        }
	        gl.deleteFramebuffer(this.framebuffer);
	        this.gl = null;
	        this.stencil = null;
	        this.texture = null;
	    };
	    GLFramebuffer.createRGBA = function (gl, width, height, data) {
	        var texture = GLTexture.fromData(gl, null, width, height);
	        texture.enableNearestScaling();
	        texture.enableWrapClamp();
	        var fbo = new GLFramebuffer(gl, width, height);
	        fbo.enableTexture(texture);
	        fbo.unbind();
	        return fbo;
	    };
	    GLFramebuffer.createFloat32 = function (gl, width, height, data) {
	        var texture = GLTexture.fromData(gl, data, width, height);
	        texture.enableNearestScaling();
	        texture.enableWrapClamp();
	        var fbo = new GLFramebuffer(gl, width, height);
	        fbo.enableTexture(texture);
	        fbo.unbind();
	        return fbo;
	    };
	    return GLFramebuffer;
	}());

	function compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations) {
	    var glVertShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
	    var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
	    var program = gl.createProgram();
	    gl.attachShader(program, glVertShader);
	    gl.attachShader(program, glFragShader);
	    if (attributeLocations) {
	        for (var i in attributeLocations) {
	            gl.bindAttribLocation(program, attributeLocations[i], i);
	        }
	    }
	    gl.linkProgram(program);
	    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
	        console.error('Error: Could not initialize shader.');
	        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
	        console.error('gl.getError()', gl.getError());
	        if (gl.getProgramInfoLog(program) !== '') {
	            console.warn('Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
	        }
	        gl.deleteProgram(program);
	        program = null;
	    }
	    gl.deleteShader(glVertShader);
	    gl.deleteShader(glFragShader);
	    return program;
	}
	var compileShader = function (gl, type, src) {
	    var shader = gl.createShader(type);
	    gl.shaderSource(shader, src);
	    gl.compileShader(shader);
	    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	        console.log(gl.getShaderInfoLog(shader));
	        return null;
	    }
	    return shader;
	};

	function mapType(gl, type) {
	    if (!GL_TABLE) {
	        var typeNames = Object.keys(GL_TO_GLSL_TYPES);
	        GL_TABLE = {};
	        for (var i = 0; i < typeNames.length; ++i) {
	            var tn = typeNames[i];
	            GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
	        }
	    }
	    return GL_TABLE[type];
	}
	var GL_TABLE = null;
	var GL_TO_GLSL_TYPES = {
	    'FLOAT': 'float',
	    'FLOAT_VEC2': 'vec2',
	    'FLOAT_VEC3': 'vec3',
	    'FLOAT_VEC4': 'vec4',
	    'INT': 'int',
	    'INT_VEC2': 'ivec2',
	    'INT_VEC3': 'ivec3',
	    'INT_VEC4': 'ivec4',
	    'BOOL': 'bool',
	    'BOOL_VEC2': 'bvec2',
	    'BOOL_VEC3': 'bvec3',
	    'BOOL_VEC4': 'bvec4',
	    'FLOAT_MAT2': 'mat2',
	    'FLOAT_MAT3': 'mat3',
	    'FLOAT_MAT4': 'mat4',
	    'SAMPLER_2D': 'sampler2D'
	};

	function mapSize(type) {
	    return GLSL_TO_SIZE[type];
	}
	var GLSL_TO_SIZE = {
	    'float': 1,
	    'vec2': 2,
	    'vec3': 3,
	    'vec4': 4,
	    'int': 1,
	    'ivec2': 2,
	    'ivec3': 3,
	    'ivec4': 4,
	    'bool': 1,
	    'bvec2': 2,
	    'bvec3': 3,
	    'bvec4': 4,
	    'mat2': 4,
	    'mat3': 9,
	    'mat4': 16,
	    'sampler2D': 1
	};

	function extractAttributes(gl, program) {
	    var attributes = {};
	    var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
	    for (var i = 0; i < totalAttributes; i++) {
	        var attribData = gl.getActiveAttrib(program, i);
	        var type = mapType(gl, attribData.type);
	        attributes[attribData.name] = {
	            type: type,
	            size: mapSize(type),
	            location: gl.getAttribLocation(program, attribData.name),
	            pointer: function (type, normalized, stride, start) {
	                if (type === void 0) { type = gl.FLOAT; }
	                if (normalized === void 0) { normalized = false; }
	                if (stride === void 0) { stride = 0; }
	                if (start === void 0) { start = 0; }
	                gl.vertexAttribPointer(this.location, this.size, type, normalized, stride, start);
	            }
	        };
	    }
	    return attributes;
	}

	function defaultValue(type, size) {
	    switch (type) {
	        case 'float':
	            return 0;
	        case 'vec2':
	            return new Float32Array(2 * size);
	        case 'vec3':
	            return new Float32Array(3 * size);
	        case 'vec4':
	            return new Float32Array(4 * size);
	        case 'int':
	        case 'sampler2D':
	            return 0;
	        case 'ivec2':
	            return new Int32Array(2 * size);
	        case 'ivec3':
	            return new Int32Array(3 * size);
	        case 'ivec4':
	            return new Int32Array(4 * size);
	        case 'bool':
	            return false;
	        case 'bvec2':
	            return booleanArray(2 * size);
	        case 'bvec3':
	            return booleanArray(3 * size);
	        case 'bvec4':
	            return booleanArray(4 * size);
	        case 'mat2':
	            return new Float32Array([1, 0,
	                0, 1]);
	        case 'mat3':
	            return new Float32Array([1, 0, 0,
	                0, 1, 0,
	                0, 0, 1]);
	        case 'mat4':
	            return new Float32Array([1, 0, 0, 0,
	                0, 1, 0, 0,
	                0, 0, 1, 0,
	                0, 0, 0, 1]);
	    }
	}
	var booleanArray = function (size) {
	    var array = new Array(size);
	    for (var i = 0; i < array.length; i++) {
	        array[i] = false;
	    }
	    return array;
	};

	function extractUniforms(gl, program) {
	    var uniforms = {};
	    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	    for (var i = 0; i < totalUniforms; i++) {
	        var uniformData = gl.getActiveUniform(program, i);
	        var name = uniformData.name.replace(/\[.*?\]/, "");
	        var type = mapType(gl, uniformData.type);
	        uniforms[name] = {
	            type: type,
	            size: uniformData.size,
	            location: gl.getUniformLocation(program, name),
	            value: defaultValue(type, uniformData.size)
	        };
	    }
	    return uniforms;
	}

	function setPrecision(src, precision) {
	    if (src.substring(0, 9) !== 'precision') {
	        return 'precision ' + precision + ' float;\n' + src;
	    }
	    return src;
	}

	function generateUniformAccessObject(gl, uniformData) {
	    var uniforms = { data: {} };
	    uniforms["gl"] = gl;
	    var uniformKeys = Object.keys(uniformData);
	    for (var i = 0; i < uniformKeys.length; i++) {
	        var fullName = uniformKeys[i];
	        var nameTokens = fullName.split('.');
	        var name = nameTokens[nameTokens.length - 1];
	        var uniformGroup = getUniformGroup(nameTokens, uniforms);
	        var uniform = uniformData[fullName];
	        uniformGroup.data[name] = uniform;
	        uniformGroup.gl = gl;
	        Object.defineProperty(uniformGroup, name, {
	            get: generateGetter(name),
	            set: generateSetter(name, uniform)
	        });
	    }
	    return uniforms;
	}
	var generateGetter = function (name) {
	    return function () {
	        return this.data[name].value;
	    };
	};
	var GLSL_SINGLE_SETTERS = {
	    float: function setSingleFloat(gl, location, value) {
	        gl.uniform1f(location, value);
	    },
	    vec2: function setSingleVec2(gl, location, value) {
	        gl.uniform2f(location, value[0], value[1]);
	    },
	    vec3: function setSingleVec3(gl, location, value) {
	        gl.uniform3f(location, value[0], value[1], value[2]);
	    },
	    vec4: function setSingleVec4(gl, location, value) {
	        gl.uniform4f(location, value[0], value[1], value[2], value[3]);
	    },
	    int: function setSingleInt(gl, location, value) {
	        gl.uniform1i(location, value);
	    },
	    ivec2: function setSingleIvec2(gl, location, value) {
	        gl.uniform2i(location, value[0], value[1]);
	    },
	    ivec3: function setSingleIvec3(gl, location, value) {
	        gl.uniform3i(location, value[0], value[1], value[2]);
	    },
	    ivec4: function setSingleIvec4(gl, location, value) {
	        gl.uniform4i(location, value[0], value[1], value[2], value[3]);
	    },
	    bool: function setSingleBool(gl, location, value) {
	        gl.uniform1i(location, value);
	    },
	    bvec2: function setSingleBvec2(gl, location, value) {
	        gl.uniform2i(location, value[0], value[1]);
	    },
	    bvec3: function setSingleBvec3(gl, location, value) {
	        gl.uniform3i(location, value[0], value[1], value[2]);
	    },
	    bvec4: function setSingleBvec4(gl, location, value) {
	        gl.uniform4i(location, value[0], value[1], value[2], value[3]);
	    },
	    mat2: function setSingleMat2(gl, location, value) {
	        gl.uniformMatrix2fv(location, false, value);
	    },
	    mat3: function setSingleMat3(gl, location, value) {
	        gl.uniformMatrix3fv(location, false, value);
	    },
	    mat4: function setSingleMat4(gl, location, value) {
	        gl.uniformMatrix4fv(location, false, value);
	    },
	    sampler2D: function setSingleSampler2D(gl, location, value) {
	        gl.uniform1i(location, value);
	    },
	};
	var GLSL_ARRAY_SETTERS = {
	    float: function setFloatArray(gl, location, value) {
	        gl.uniform1fv(location, value);
	    },
	    vec2: function setVec2Array(gl, location, value) {
	        gl.uniform2fv(location, value);
	    },
	    vec3: function setVec3Array(gl, location, value) {
	        gl.uniform3fv(location, value);
	    },
	    vec4: function setVec4Array(gl, location, value) {
	        gl.uniform4fv(location, value);
	    },
	    int: function setIntArray(gl, location, value) {
	        gl.uniform1iv(location, value);
	    },
	    ivec2: function setIvec2Array(gl, location, value) {
	        gl.uniform2iv(location, value);
	    },
	    ivec3: function setIvec3Array(gl, location, value) {
	        gl.uniform3iv(location, value);
	    },
	    ivec4: function setIvec4Array(gl, location, value) {
	        gl.uniform4iv(location, value);
	    },
	    bool: function setBoolArray(gl, location, value) {
	        gl.uniform1iv(location, value);
	    },
	    bvec2: function setBvec2Array(gl, location, value) {
	        gl.uniform2iv(location, value);
	    },
	    bvec3: function setBvec3Array(gl, location, value) {
	        gl.uniform3iv(location, value);
	    },
	    bvec4: function setBvec4Array(gl, location, value) {
	        gl.uniform4iv(location, value);
	    },
	    sampler2D: function setSampler2DArray(gl, location, value) {
	        gl.uniform1iv(location, value);
	    },
	};
	function generateSetter(name, uniform) {
	    return function (value) {
	        this.data[name].value = value;
	        var location = this.data[name].location;
	        if (uniform.size === 1) {
	            GLSL_SINGLE_SETTERS[uniform.type](this.gl, location, value);
	        }
	        else {
	            GLSL_ARRAY_SETTERS[uniform.type](this.gl, location, value);
	        }
	    };
	}
	function getUniformGroup(nameTokens, uniform) {
	    var cur = uniform;
	    for (var i = 0; i < nameTokens.length - 1; i++) {
	        var o = cur[nameTokens[i]] || { data: {} };
	        cur[nameTokens[i]] = o;
	        cur = o;
	    }
	    return cur;
	}

	var GLShader = (function () {
	    function GLShader(gl, vertexSrc, fragmentSrc, precision, attributeLocations) {
	        this.gl = gl;
	        if (precision) {
	            vertexSrc = setPrecision(vertexSrc, precision);
	            fragmentSrc = setPrecision(fragmentSrc, precision);
	        }
	        this.program = compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations);
	        this.attributes = extractAttributes(gl, this.program);
	        this.uniformData = extractUniforms(gl, this.program);
	        this.uniforms = generateUniformAccessObject(gl, this.uniformData);
	    }
	    GLShader.prototype.bind = function () {
	        this.gl.useProgram(this.program);
	        return this;
	    };
	    GLShader.prototype.destroy = function () {
	        this.attributes = null;
	        this.uniformData = null;
	        this.uniforms = null;
	        var gl = this.gl;
	        gl.deleteProgram(this.program);
	    };
	    return GLShader;
	}());

	var VSHADER_SOURCE = "precision highp float;" +
	    "attribute vec2 aVertexPosition;" +
	    "attribute vec2 aTextureCoord;" +
	    "attribute vec4 aColor;" +
	    "attribute float aTextureId;" +
	    "uniform mat3 projectionMatrix;" +
	    "varying vec2 vTextureCoord;" +
	    "varying vec4 vColor;" +
	    "varying float vTextureId;" +
	    "void main(void){" +
	    "gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);" +
	    "vTextureCoord = aTextureCoord;" +
	    "vTextureId = aTextureId;" +
	    "vColor = aColor;" +
	    "}";
	var fragTemplate$1 = [
	    'precision mediump float;',
	    'varying vec2 vTextureCoord;',
	    'varying vec4 vColor;',
	    'varying float vTextureId;',
	    'uniform sampler2D uSamplers[%count%];',
	    'void main(void){',
	    'vec4 color;',
	    'float textureId = floor(vTextureId+0.5);',
	    '%forloop%',
	    'gl_FragColor = color * vColor;',
	    '}',
	].join('\n');
	function generateMultiTextureShader(gl, maxTextures) {
	    var fragmentSrc = fragTemplate$1;
	    fragmentSrc = fragmentSrc.replace(/%count%/gi, maxTextures);
	    fragmentSrc = fragmentSrc.replace(/%forloop%/gi, generateSampleSrc(maxTextures));
	    var shader = new GLShader(gl, VSHADER_SOURCE, fragmentSrc);
	    var sampleValues = [];
	    for (var i = 0; i < maxTextures; i++) {
	        sampleValues[i] = i;
	    }
	    shader.bind();
	    shader.uniforms["uSamplers"] = sampleValues;
	    return shader;
	}
	function generateSampleSrc(maxTextures) {
	    var src = '';
	    src += '\n';
	    src += '\n';
	    for (var i = 0; i < maxTextures; i++) {
	        if (i > 0) {
	            src += '\nelse ';
	        }
	        if (i < maxTextures - 1) {
	            src += "if(textureId == " + i + ".0)";
	        }
	        src += '\n{';
	        src += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);";
	        src += '\n}';
	    }
	    src += '\n';
	    src += '\n';
	    return src;
	}

	var TICK = 0;
	var BatchRenderer = (function (_super) {
	    tslib_1.__extends(BatchRenderer, _super);
	    function BatchRenderer(renderer) {
	        var _this = _super.call(this, renderer) || this;
	        _this.vertSize = 6;
	        _this.vertByteSize = _this.vertSize * 4;
	        _this.size = 2000 * 4;
	        _this.currentSize = 0;
	        _this.currentIndexSize = 0;
	        _this.aBuffers = {};
	        _this.iBuffers = {};
	        _this.shader = null;
	        _this.currentIndex = 0;
	        _this.groups = [];
	        for (var k = 0; k < _this.size / 4; k++) {
	            _this.groups[k] = new BatchDrawCall();
	        }
	        _this.elements = [];
	        _this.vertexBuffers = [];
	        _this.indexBuffers = [];
	        _this.vaos = [];
	        _this.vaoMax = 2;
	        _this.vertexCount = 0;
	        _this.onPreRender = _this.onPreRender.bind(_this);
	        _this.renderer.addEventListener('onPreRender', _this.onPreRender);
	        return _this;
	    }
	    BatchRenderer.prototype.onContextChange = function () {
	        var gl = this.renderer.gl;
	        {
	            this.MAX_TEXTURES = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), 16);
	            this.MAX_TEXTURES = checkMaxIfStatementsInShader(this.MAX_TEXTURES, gl);
	        }
	        this.shader = generateMultiTextureShader(gl, this.MAX_TEXTURES);
	        this.renderer.bindVao(null);
	        var attrs = this.shader.attributes;
	        for (var i = 0; i < this.vaoMax; i++) {
	            var vertexBuffer = this.vertexBuffers[i] = GLBuffer.createVertexBuffer(gl, null, gl.STREAM_DRAW);
	            var indexBuffer = this.indexBuffers[i] = GLBuffer.createIndexBuffer(gl, null, gl.STREAM_DRAW);
	            var vao = this.renderer.createVao()
	                .addIndex(indexBuffer)
	                .addAttribute(vertexBuffer, attrs.aVertexPosition, gl.FLOAT, false, this.vertByteSize, 0)
	                .addAttribute(vertexBuffer, attrs.aTextureCoord, gl.FLOAT, true, this.vertByteSize, 2 * 4)
	                .addAttribute(vertexBuffer, attrs.aColor, gl.UNSIGNED_BYTE, true, this.vertByteSize, 4 * 4)
	                .addAttribute(vertexBuffer, attrs.aTextureId, gl.FLOAT, false, this.vertByteSize, 5 * 4);
	            this.vaos[i] = vao;
	        }
	    };
	    BatchRenderer.prototype.onPreRender = function () {
	        this.vertexCount = 0;
	    };
	    BatchRenderer.prototype.render = function (element) {
	        if (!element._texture || !element._texture.valid) {
	            return;
	        }
	        if (this.currentSize + (element.vertexData.length / 2) > this.size) {
	            this.flush();
	        }
	        this.elements[this.currentIndex++] = element;
	        this.currentSize += element.vertexData.length / 2;
	        this.currentIndexSize += element.indices.length;
	    };
	    BatchRenderer.prototype.getIndexBuffer = function (size) {
	        var roundedP2 = nextPow2(Math.ceil(size / 12));
	        var roundedSizeIndex = log2(roundedP2);
	        var roundedSize = roundedP2 * 12;
	        var buffer = this.iBuffers[roundedSizeIndex];
	        if (!buffer) {
	            this.iBuffers[roundedSizeIndex] = buffer = new Uint16Array(roundedSize);
	        }
	        return buffer;
	    };
	    BatchRenderer.prototype.getAttributeBuffer = function (size) {
	        var roundedP2 = nextPow2(Math.ceil(size / 8));
	        var roundedSizeIndex = log2(roundedP2);
	        var roundedSize = roundedP2 * 8;
	        var buffer = this.aBuffers[roundedSize];
	        if (!buffer) {
	            this.aBuffers[roundedSize] = buffer = new BatchBuffer(roundedSize * this.vertByteSize);
	        }
	        return buffer;
	    };
	    BatchRenderer.prototype.flush = function () {
	        if (this.currentSize === 0) {
	            return;
	        }
	        var gl = this.renderer.gl;
	        var MAX_TEXTURES = this.MAX_TEXTURES;
	        var buffer = this.getAttributeBuffer(this.currentSize);
	        var indexBuffer = this.getIndexBuffer(this.currentIndexSize);
	        var elements = this.elements;
	        var groups = this.groups;
	        var float32View = buffer.float32View;
	        var uint32View = buffer.uint32View;
	        var touch = this.renderer.textureGC.count;
	        var index = 0;
	        var indexCount = 0;
	        var nextTexture;
	        var currentTexture;
	        var groupCount = 1;
	        var textureCount = 0;
	        var currentGroup = groups[0];
	        currentGroup.textureCount = 0;
	        currentGroup.start = 0;
	        TICK++;
	        var i;
	        for (i = 0; i < this.currentIndex; ++i) {
	            var sprite = elements[i];
	            elements[i] = null;
	            nextTexture = sprite._texture.baseTexture;
	            if (currentTexture !== nextTexture) {
	                currentTexture = nextTexture;
	                if (nextTexture._enabled !== TICK) {
	                    if (textureCount === MAX_TEXTURES) {
	                        TICK++;
	                        textureCount = 0;
	                        currentGroup.size = indexCount - currentGroup.start;
	                        currentGroup = groups[groupCount++];
	                        currentGroup.textureCount = 0;
	                        currentGroup.start = indexCount;
	                    }
	                    nextTexture.touched = touch;
	                    nextTexture._enabled = TICK;
	                    nextTexture._id = textureCount;
	                    currentGroup.textures[currentGroup.textureCount++] = nextTexture;
	                    textureCount++;
	                }
	            }
	            this.packGeometry(sprite, float32View, uint32View, indexBuffer, index, indexCount);
	            index += (sprite.vertexData.length / 2) * this.vertSize;
	            indexCount += sprite.indices.length;
	        }
	        currentGroup.size = indexCount - currentGroup.start;
	        if (osType == "ios") {
	            if (this.vaoMax <= this.vertexCount) {
	                this.vaoMax++;
	                var attrs = this.shader.attributes;
	                var vertexBuffer = this.vertexBuffers[this.vertexCount] = GLBuffer.createVertexBuffer(gl, null, gl.STREAM_DRAW);
	                var indexBufferAdd = this.indexBuffers[this.vertexCount] = GLBuffer.createIndexBuffer(gl, null, gl.STREAM_DRAW);
	                var vao = this.renderer.createVao()
	                    .addIndex(indexBufferAdd)
	                    .addAttribute(vertexBuffer, attrs.aVertexPosition, gl.FLOAT, false, this.vertByteSize, 0)
	                    .addAttribute(vertexBuffer, attrs.aTextureCoord, gl.FLOAT, true, this.vertByteSize, 2 * 4)
	                    .addAttribute(vertexBuffer, attrs.aColor, gl.UNSIGNED_BYTE, true, this.vertByteSize, 4 * 4)
	                    .addAttribute(vertexBuffer, attrs.aTextureId, gl.FLOAT, false, this.vertByteSize, 5 * 4);
	                this.vaos[this.vertexCount] = vao;
	            }
	            this.renderer.bindVao(this.vaos[this.vertexCount]);
	            this.vertexBuffers[this.vertexCount].upload(buffer.vertices, 0, false);
	            this.indexBuffers[this.vertexCount].upload(indexBuffer, 0, false);
	            this.vertexCount++;
	        }
	        else {
	            this.vertexBuffers[this.vertexCount].upload(buffer.vertices, 0, true);
	            this.indexBuffers[this.vertexCount].upload(indexBuffer, 0, true);
	        }
	        var textureManager = this.renderer.textureManager;
	        for (i = 0; i < groupCount; i++) {
	            var group = groups[i];
	            var groupTextureCount = group.textureCount;
	            for (var j = 0; j < groupTextureCount; j++) {
	                if (group.textures[j] != textureManager.boundTextures[j]) {
	                    textureManager.bindTexture(group.textures[j], j, true);
	                }
	                group.textures[j] = null;
	            }
	            gl.drawElements(group.type, group.size, gl.UNSIGNED_SHORT, group.start * 2);
	        }
	        this.currentIndex = 0;
	        this.currentSize = 0;
	        this.currentIndexSize = 0;
	    };
	    BatchRenderer.prototype.packGeometry = function (element, float32View, uint32View, indexBuffer, index, indexCount) {
	        var p = index / this.vertSize;
	        var uvs = element.uvs;
	        var indicies = element.indices;
	        var vertexData = element.vertexData;
	        var textureId = element._texture.baseTexture._id;
	        var _tintRGB = element._tintRGB == undefined ? 16777215 : element._tintRGB;
	        var alpha = Math.min(element.worldAlpha, 1.0);
	        var argb = alpha < 1.0 && element._texture.baseTexture.premultipliedAlpha ? premultiplyTint(_tintRGB, alpha)
	            : _tintRGB + (alpha * 255 << 24);
	        for (var i = 0; i < vertexData.length; i += 2) {
	            float32View[index++] = vertexData[i];
	            float32View[index++] = vertexData[i + 1];
	            float32View[index++] = uvs[i];
	            float32View[index++] = uvs[i + 1];
	            uint32View[index++] = argb;
	            float32View[index++] = textureId;
	        }
	        for (var i = 0; i < indicies.length; i++) {
	            indexBuffer[indexCount++] = p + indicies[i];
	        }
	    };
	    BatchRenderer.prototype.start = function () {
	        this.renderer.bindShader(this.shader);
	        if (osType != "ios") {
	            this.renderer.bindVao(this.vaos[this.vertexCount]);
	            this.vertexBuffers[this.vertexCount].bind();
	            this.indexBuffers[this.vertexCount].bind();
	        }
	    };
	    BatchRenderer.prototype.stop = function () {
	        this.flush();
	    };
	    BatchRenderer.prototype.destroy = function () {
	        for (var i = 0; i < this.vaoMax; i++) {
	            if (this.vaos[i]) {
	                this.vaos[i].destroy();
	            }
	        }
	        this.renderer.removeEventListener('onPreRender', this.onPreRender);
	        if (this.shader) {
	            this.shader.destroy();
	            this.shader = null;
	        }
	        this.vaos = null;
	        _super.prototype.destroy.call(this);
	    };
	    return BatchRenderer;
	}(ObjectRenderer));

	var RenderTarget = (function () {
	    function RenderTarget(gl, width, height, scaleMode, root) {
	        if (width === void 0) { width = 0; }
	        if (height === void 0) { height = 0; }
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        if (root === void 0) { root = false; }
	        this.gl = gl;
	        this.frameBuffer = null;
	        this.texture = null;
	        this.clearColor = [0, 0, 0, 0];
	        this.size = new Rectangle(0, 0, 1, 1);
	        this.projectionMatrix = new Matrix();
	        this.transform = null;
	        this.frame = null;
	        this.defaultFrame = new Rectangle();
	        this.destinationFrame = null;
	        this.sourceFrame = null;
	        this.stencilBuffer = null;
	        this.stencilMaskStack = [];
	        this.scaleMode = scaleMode;
	        this.root = root;
	        if (!this.root) {
	            this.frameBuffer = GLFramebuffer.createRGBA(gl, 100, 100);
	            if (this.scaleMode === exports.SCALE_MODES.NEAREST) {
	                this.frameBuffer.texture.enableNearestScaling();
	            }
	            else {
	                this.frameBuffer.texture.enableLinearScaling();
	            }
	            this.texture = this.frameBuffer.texture;
	        }
	        else {
	            this.frameBuffer = new GLFramebuffer(gl, 100, 100);
	            this.frameBuffer.framebuffer = null;
	        }
	        this.setFrame();
	        this.resize(width, height);
	    }
	    RenderTarget.prototype.clear = function (clearColor) {
	        var cc = clearColor || this.clearColor;
	        this.frameBuffer.clear(cc[0], cc[1], cc[2], cc[3]);
	    };
	    RenderTarget.prototype.attachStencilBuffer = function () {
	        if (!this.root) {
	            this.frameBuffer.enableStencil();
	        }
	    };
	    RenderTarget.prototype.setFrame = function (destinationFrame, sourceFrame) {
	        this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
	        this.sourceFrame = sourceFrame || this.sourceFrame || this.destinationFrame;
	    };
	    RenderTarget.prototype.activate = function () {
	        var gl = this.gl;
	        this.frameBuffer.bind();
	        this.calculateProjection(this.destinationFrame, this.sourceFrame);
	        if (this.transform) {
	            this.projectionMatrix.append(this.transform);
	        }
	        if (this.destinationFrame !== this.sourceFrame) {
	            gl.enable(gl.SCISSOR_TEST);
	            gl.scissor(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width | 0, this.destinationFrame.height | 0);
	        }
	        else {
	            gl.disable(gl.SCISSOR_TEST);
	        }
	        gl.viewport(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width | 0, this.destinationFrame.height | 0);
	    };
	    RenderTarget.prototype.calculateProjection = function (destinationFrame, sourceFrame) {
	        var pm = this.projectionMatrix;
	        sourceFrame = sourceFrame || destinationFrame;
	        pm.identity();
	        if (!this.root) {
	            pm.a = 1 / destinationFrame.width * 2;
	            pm.d = 1 / destinationFrame.height * 2;
	            pm.tx = -1 - (sourceFrame.x * pm.a);
	            pm.ty = -1 - (sourceFrame.y * pm.d);
	        }
	        else {
	            pm.a = 1 / destinationFrame.width * 2;
	            pm.d = -1 / destinationFrame.height * 2;
	            pm.tx = -1 - (sourceFrame.x * pm.a);
	            pm.ty = 1 - (sourceFrame.y * pm.d);
	        }
	    };
	    RenderTarget.prototype.resize = function (width, height) {
	        width = width | 0;
	        height = height | 0;
	        if (this.size.width === width && this.size.height === height) {
	            return;
	        }
	        this.size.width = width;
	        this.size.height = height;
	        this.defaultFrame.width = width;
	        this.defaultFrame.height = height;
	        this.frameBuffer.resize(width, height);
	        var projectionFrame = this.frame || this.size;
	        this.calculateProjection(projectionFrame);
	    };
	    RenderTarget.prototype.destroy = function () {
	        this.frameBuffer.destroy();
	        this.frameBuffer = null;
	        this.texture = null;
	    };
	    return RenderTarget;
	}());

	var TextureManager = (function () {
	    function TextureManager(renderer) {
	        this._nextTextureLocation = 0;
	        this.renderer = renderer;
	        this.gl = renderer.gl;
	        this._managedTextures = [];
	        this.updateTexture = this.updateTexture.bind(this);
	        this.destroyTexture = this.destroyTexture.bind(this);
	        this.onContextChange = this.onContextChange.bind(this);
	        this.renderer.addEventListener('onContextChange', this.onContextChange);
	    }
	    TextureManager.prototype.onContextChange = function () {
	        var gl = this.gl;
	        var maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
	        this.boundTextures = new Array(maxTextures);
	        this.emptyTextures = new Array(maxTextures);
	        var emptyGLTexture = GLTexture.fromData(gl, null, 1, 1);
	        var tempObj = { _glTextures: {} };
	        tempObj._glTextures[this.renderer.CONTEXT_UID] = {};
	        for (var i = 0; i < maxTextures; i++) {
	            var empty = new BaseTexture();
	            empty._glTextures[this.renderer.CONTEXT_UID] = emptyGLTexture;
	            this.boundTextures[i] = tempObj;
	            this.emptyTextures[i] = empty;
	            this.bindTexture(null, i);
	        }
	    };
	    TextureManager.prototype.bindTexture = function (texture, location, forceLocation) {
	        texture = texture || this.emptyTextures[location];
	        texture = texture.baseTexture || texture;
	        texture.touched = this.renderer.textureGC.count;
	        if (!forceLocation) {
	            for (var i = 0; i < this.boundTextures.length; i++) {
	                if (this.boundTextures[i] === texture) {
	                    return i;
	                }
	            }
	            if (location === undefined) {
	                this._nextTextureLocation++;
	                this._nextTextureLocation %= this.boundTextures.length;
	                location = this.boundTextures.length - this._nextTextureLocation - 1;
	            }
	        }
	        else {
	            location = location || 0;
	        }
	        var gl = this.gl;
	        var glTexture = texture._glTextures[this.renderer.CONTEXT_UID];
	        if (!glTexture) {
	            this.updateTexture(texture, location);
	        }
	        else {
	            if (this.currentLocation !== location) {
	                this.currentLocation = location;
	                gl.activeTexture(gl.TEXTURE0 + location);
	            }
	            if (this.boundTextures[location] !== texture) {
	                gl.bindTexture(gl.TEXTURE_2D, glTexture.texture);
	            }
	            this.boundTextures[location] = texture;
	        }
	        return location;
	    };
	    TextureManager.prototype.getTexture = function () {
	    };
	    TextureManager.prototype.updateTexture = function (texture, location) {
	        if (texture.instanceType === "Event") {
	            texture = texture.target.baseTexture || texture.target;
	        }
	        else {
	            texture = texture.baseTexture || texture;
	        }
	        var gl = this.gl;
	        var isRenderTexture = !!texture["_glRenderTargets"];
	        if (!texture.hasLoaded) {
	            return null;
	        }
	        var boundTextures = this.boundTextures;
	        if (location === undefined) {
	            location = 0;
	            for (var i = 0; i < boundTextures.length; ++i) {
	                if (boundTextures[i] === texture) {
	                    location = i;
	                    break;
	                }
	            }
	        }
	        boundTextures[location] = texture;
	        if (this.currentLocation !== location) {
	            this.currentLocation = location;
	            gl.activeTexture(gl.TEXTURE0 + location);
	        }
	        var glTexture = texture._glTextures[this.renderer.CONTEXT_UID];
	        if (!glTexture) {
	            if (isRenderTexture) {
	                var renderTarget = new RenderTarget(this.gl, texture.width, texture.height, texture.scaleMode, false);
	                renderTarget.resize(texture.width, texture.height);
	                texture._glRenderTargets[this.renderer.CONTEXT_UID] = renderTarget;
	                glTexture = renderTarget.texture;
	            }
	            else {
	                glTexture = new GLTexture(this.gl, null, null, null, null);
	                glTexture.premultiplyAlpha = true;
	                glTexture.upload(texture.source);
	            }
	            texture._glTextures[this.renderer.CONTEXT_UID] = glTexture;
	            texture.addEventListener('update', this.updateTexture);
	            texture.addEventListener('dispose', this.destroyTexture);
	            this._managedTextures.push(texture);
	            if (texture.isPowerOfTwo) {
	                if (texture.mipmap) {
	                    glTexture.enableMipmap();
	                }
	                if (texture.wrapMode === exports.WRAP_MODES.CLAMP) {
	                    glTexture.enableWrapClamp();
	                }
	                else if (texture.wrapMode === exports.WRAP_MODES.REPEAT) {
	                    glTexture.enableWrapRepeat();
	                }
	                else {
	                    glTexture.enableWrapMirrorRepeat();
	                }
	            }
	            else {
	                glTexture.enableWrapClamp();
	            }
	            if (texture.scaleMode === exports.SCALE_MODES.NEAREST) {
	                glTexture.enableNearestScaling();
	            }
	            else {
	                glTexture.enableLinearScaling();
	            }
	        }
	        else if (isRenderTexture) {
	            texture._glRenderTargets[this.renderer.CONTEXT_UID].resize(texture.width, texture.height);
	        }
	        else {
	            glTexture.upload(texture.source);
	        }
	        return glTexture;
	    };
	    TextureManager.prototype.unbindTexture = function (texture) {
	        var gl = this.gl;
	        texture = texture.baseTexture || texture;
	        for (var i = 0; i < this.boundTextures.length; i++) {
	            if (this.boundTextures[i] === texture) {
	                this.boundTextures[i] = this.emptyTextures[i];
	                if (this.currentLocation !== i) {
	                    gl.activeTexture(gl.TEXTURE0 + i);
	                    this.currentLocation = i;
	                }
	                gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[i]._glTextures[this.renderer.CONTEXT_UID].texture);
	            }
	        }
	    };
	    TextureManager.prototype.destroyTexture = function (texture, skipRemove) {
	        texture = texture.baseTexture || texture;
	        if (!texture.hasLoaded) {
	            return;
	        }
	        var uid = this.renderer.CONTEXT_UID;
	        var glTextures = texture._glTextures;
	        var glRenderTargets = texture._glRenderTargets;
	        if (glTextures[uid]) {
	            this.unbindTexture(texture);
	            glTextures[uid].destroy();
	            texture.removeEventListener('update', this.updateTexture);
	            texture.removeEventListener('dispose', this.destroyTexture);
	            delete glTextures[uid];
	            if (!skipRemove) {
	                var i = this._managedTextures.indexOf(texture);
	                if (i !== -1) {
	                    removeItems(this._managedTextures, i, 1);
	                }
	            }
	        }
	        if (glRenderTargets && glRenderTargets[uid]) {
	            glRenderTargets[uid].destroy();
	            delete glRenderTargets[uid];
	        }
	    };
	    TextureManager.prototype.removeAll = function () {
	        for (var i = 0; i < this._managedTextures.length; ++i) {
	            var texture = this._managedTextures[i];
	            if (texture._glTextures[this.renderer.CONTEXT_UID]) {
	                delete texture._glTextures[this.renderer.CONTEXT_UID];
	            }
	        }
	    };
	    TextureManager.prototype.destroy = function () {
	        for (var i = 0; i < this._managedTextures.length; ++i) {
	            var texture = this._managedTextures[i];
	            this.destroyTexture(texture, true);
	            texture.removeEventListener('update', this.updateTexture);
	            texture.removeEventListener('dispose', this.destroyTexture);
	        }
	        this._managedTextures = null;
	    };
	    return TextureManager;
	}());

	var TextureGarbageCollector = (function () {
	    function TextureGarbageCollector(renderer) {
	        this.renderer = renderer;
	        this.count = 0;
	        this.checkCount = 0;
	        this.maxIdle = 60 * 60;
	        this.checkCountMax = 60 * 10;
	        this.mode = exports.GC_MODES.AUTO;
	    }
	    TextureGarbageCollector.prototype.update = function () {
	        this.count++;
	        if (this.mode === exports.GC_MODES.MANUAL) {
	            return;
	        }
	        this.checkCount++;
	        if (this.checkCount > this.checkCountMax) {
	            this.checkCount = 0;
	            this.run();
	        }
	    };
	    TextureGarbageCollector.prototype.run = function () {
	        var tm = this.renderer.textureManager;
	        var managedTextures = tm._managedTextures;
	        var wasRemoved = false;
	        for (var i = 0; i < managedTextures.length; i++) {
	            var texture = managedTextures[i];
	            if (!texture._glRenderTargets && this.count - texture.touched > this.maxIdle) {
	                tm.destroyTexture(texture, true);
	                managedTextures[i] = null;
	                wasRemoved = true;
	            }
	        }
	        if (wasRemoved) {
	            var j = 0;
	            for (var i = 0; i < managedTextures.length; i++) {
	                if (managedTextures[i] !== null) {
	                    managedTextures[j++] = managedTextures[i];
	                }
	            }
	            managedTextures.length = j;
	        }
	    };
	    TextureGarbageCollector.prototype.unload = function (displayObject) {
	        var tm = this.renderer.textureManager;
	        if (displayObject._texture && displayObject._texture._glRenderTargets) {
	            tm.destroyTexture(displayObject._texture, true);
	        }
	        for (var i = displayObject.children.length - 1; i >= 0; i--) {
	            this.unload(displayObject.children[i]);
	        }
	    };
	    return TextureGarbageCollector;
	}());

	var BLEND = 0;
	var DEPTH_TEST = 1;
	var FRONT_FACE = 2;
	var CULL_FACE = 3;
	var BLEND_FUNC = 4;
	var WebGLState = (function () {
	    function WebGLState(gl) {
	        this.activeState = new Uint8Array(16);
	        this.defaultState = new Uint8Array(16);
	        this.defaultState[0] = 1;
	        this.gl = gl;
	        this.maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
	        this.attribState = {
	            tempAttribState: new Array(this.maxAttribs),
	            attribState: new Array(this.maxAttribs),
	        };
	        this.blendModes = mapWebGLBlendModesToPixi(gl);
	        this.nativeVaoExtension = (gl.getExtension('OES_vertex_array_object')
	            || gl.getExtension('MOZ_OES_vertex_array_object')
	            || gl.getExtension('WEBKIT_OES_vertex_array_object'));
	    }
	    WebGLState.prototype.setState = function (state) {
	        this.setBlend(state[BLEND]);
	        this.setDepthTest(state[DEPTH_TEST]);
	        this.setFrontFace(state[FRONT_FACE]);
	        this.setCullFace(state[CULL_FACE]);
	        this.setBlendMode(state[BLEND_FUNC]);
	    };
	    WebGLState.prototype.setBlend = function (value) {
	        value = value ? 1 : 0;
	        if (this.activeState[BLEND] === value) {
	            return;
	        }
	        this.activeState[BLEND] = value;
	        this.gl[value ? 'enable' : 'disable'](this.gl.BLEND);
	    };
	    WebGLState.prototype.setBlendMode = function (value) {
	        if (value === this.activeState[BLEND_FUNC]) {
	            return;
	        }
	        this.activeState[BLEND_FUNC] = value;
	        var mode = this.blendModes[value];
	        if (mode.length === 2) {
	            this.gl.blendFunc(mode[0], mode[1]);
	        }
	        else {
	            this.gl.blendFuncSeparate(mode[0], mode[1], mode[2], mode[3]);
	        }
	    };
	    WebGLState.prototype.setDepthTest = function (value) {
	        value = value ? 1 : 0;
	        if (this.activeState[DEPTH_TEST] === value) {
	            return;
	        }
	        this.activeState[DEPTH_TEST] = value;
	        this.gl[value ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
	    };
	    WebGLState.prototype.setCullFace = function (value) {
	        value = value ? 1 : 0;
	        if (this.activeState[CULL_FACE] === value) {
	            return;
	        }
	        this.activeState[CULL_FACE] = value;
	        this.gl[value ? 'enable' : 'disable'](this.gl.CULL_FACE);
	    };
	    WebGLState.prototype.setFrontFace = function (value) {
	        value = value ? 1 : 0;
	        if (this.activeState[FRONT_FACE] === value) {
	            return;
	        }
	        this.activeState[FRONT_FACE] = value;
	        this.gl.frontFace(this.gl[value ? 'CW' : 'CCW']);
	    };
	    WebGLState.prototype.resetAttributes = function () {
	        for (var i = 0; i < this.attribState.tempAttribState.length; i++) {
	            this.attribState.tempAttribState[i] = 0;
	        }
	        for (var i = 0; i < this.attribState.attribState.length; i++) {
	            this.attribState.attribState[i] = 0;
	        }
	        for (var i = 1; i < this.maxAttribs; i++) {
	            this.gl.disableVertexAttribArray(i);
	        }
	    };
	    WebGLState.prototype.resetToDefault = function () {
	        if (this.nativeVaoExtension) {
	            this.nativeVaoExtension.bindVertexArrayOES(null);
	        }
	        this.resetAttributes();
	        for (var i = 0; i < this.activeState.length; ++i) {
	            this.activeState[i] = 32;
	        }
	        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
	        this.setState(this.defaultState);
	    };
	    WebGLState.prototype.resetTo3D = function () {
	        this.setBlend(0);
	        this.setDepthTest(1);
	    };
	    return WebGLState;
	}());

	var BatchManager = (function () {
	    function BatchManager(renderer) {
	        this.renderer = renderer;
	        this.emptyRenderer = new ObjectRenderer(renderer);
	        this.currentRenderer = this.emptyRenderer;
	    }
	    BatchManager.prototype.setObjectRenderer = function (objectRenderer) {
	        if (this.currentRenderer === objectRenderer) {
	            return;
	        }
	        this.currentRenderer.stop();
	        this.currentRenderer = objectRenderer;
	        this.currentRenderer.start();
	    };
	    BatchManager.prototype.flush = function () {
	        this.setObjectRenderer(this.emptyRenderer);
	    };
	    BatchManager.prototype.reset = function () {
	        this.setObjectRenderer(this.emptyRenderer);
	    };
	    return BatchManager;
	}());

	var MaskManager = (function () {
	    function MaskManager(renderer) {
	        this.renderer = renderer;
	        this.scissor = false;
	        this.scissorData = null;
	        this.scissorRenderTarget = null;
	        this.enableScissor = true;
	        this.alphaMaskPool = [];
	        this.alphaMaskIndex = 0;
	    }
	    MaskManager.prototype.pushMask = function (target, maskData) {
	        this.pushStencilMask(maskData);
	    };
	    MaskManager.prototype.popMask = function (target, maskData) {
	        this.popStencilMask();
	    };
	    MaskManager.prototype.pushStencilMask = function (maskData) {
	        this.renderer.batchManager.flush();
	        this.renderer.stencilManager.pushStencil(maskData);
	    };
	    MaskManager.prototype.popStencilMask = function () {
	        this.renderer.stencilManager.popStencil();
	    };
	    MaskManager.prototype.pushScissorMask = function (target, maskData) {
	        maskData.renderable = true;
	        var renderTarget = this.renderer._activeRenderTarget;
	        var bounds = maskData.getBounds();
	        bounds.fit(renderTarget.size);
	        maskData.renderable = false;
	        this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
	        this.renderer.gl.scissor(bounds.x, (renderTarget.root ? renderTarget.size.height - bounds.y - bounds.height : bounds.y), bounds.width, bounds.height);
	        this.scissorRenderTarget = renderTarget;
	        this.scissorData = maskData;
	        this.scissor = true;
	    };
	    MaskManager.prototype.popScissorMask = function () {
	        this.scissorRenderTarget = null;
	        this.scissorData = null;
	        this.scissor = false;
	        var gl = this.renderer.gl;
	        gl.disable(gl.SCISSOR_TEST);
	    };
	    MaskManager.prototype.destroy = function () {
	        this.renderer = null;
	    };
	    return MaskManager;
	}());

	var StencilManager = (function () {
	    function StencilManager(renderer) {
	        this.renderer = renderer;
	        this.stencilMaskStack = null;
	    }
	    StencilManager.prototype.setMaskStack = function (stencilMaskStack) {
	        this.stencilMaskStack = stencilMaskStack;
	        var gl = this.renderer.gl;
	        if (stencilMaskStack.length === 0) {
	            gl.disable(gl.STENCIL_TEST);
	        }
	        else {
	            gl.enable(gl.STENCIL_TEST);
	        }
	    };
	    StencilManager.prototype.pushStencil = function (graphics) {
	        this.renderer._activeRenderTarget.attachStencilBuffer();
	        var gl = this.renderer.gl;
	        var prevMaskCount = this.stencilMaskStack.length;
	        if (prevMaskCount === 0) {
	            gl.enable(gl.STENCIL_TEST);
	        }
	        this.stencilMaskStack.push(graphics);
	        gl.colorMask(false, false, false, false);
	        gl.stencilFunc(gl.EQUAL, prevMaskCount, this._getBitwiseMask());
	        gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
	        graphics.renderable = true;
	        var tempAlpha = graphics.worldAlpha;
	        graphics.worldAlpha = 1;
	        graphics.renderWebGL(this.renderer);
	        this.renderer.batchManager.flush();
	        graphics.renderable = false;
	        graphics.worldAlpha = tempAlpha;
	        this._useCurrent();
	    };
	    StencilManager.prototype.popStencil = function () {
	        var gl = this.renderer.gl;
	        var graphics = this.stencilMaskStack.pop();
	        if (this.stencilMaskStack.length === 0) {
	            gl.disable(gl.STENCIL_TEST);
	            gl.clear(gl.STENCIL_BUFFER_BIT);
	            gl.clearStencil(0);
	        }
	        else {
	            gl.colorMask(false, false, false, false);
	            gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
	            graphics.renderable = true;
	            var tempAlpha = graphics.worldAlpha;
	            graphics.worldAlpha = 1;
	            graphics.renderWebGL(this.renderer);
	            this.renderer.batchManager.flush();
	            graphics.renderable = false;
	            graphics.worldAlpha = tempAlpha;
	            this._useCurrent();
	        }
	    };
	    StencilManager.prototype._useCurrent = function () {
	        var gl = this.renderer.gl;
	        gl.colorMask(true, true, true, true);
	        gl.stencilFunc(gl.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask());
	        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
	    };
	    StencilManager.prototype._getBitwiseMask = function () {
	        return (1 << this.stencilMaskStack.length) - 1;
	    };
	    StencilManager.prototype.destroy = function () {
	        this.renderer = null;
	        this.stencilMaskStack = null;
	    };
	    return StencilManager;
	}());

	var CONTEXT_UID = 0;
	var WebglRenderer = (function (_super) {
	    tslib_1.__extends(WebglRenderer, _super);
	    function WebglRenderer(options) {
	        var _this = _super.call(this, options) || this;
	        _this.plugins = {};
	        _this._instanceType = "WebglRenderer";
	        _this.type = exports.RENDERER_TYPE.WEBGL;
	        _this.handleContextLost = _this.handleContextLost.bind(_this);
	        _this.handleContextRestored = _this.handleContextRestored.bind(_this);
	        _this.htmlElement.addEventListener('webglcontextlost', _this.handleContextLost, false);
	        _this.htmlElement.addEventListener('webglcontextrestored', _this.handleContextRestored, false);
	        var contextOptions = {
	            alpha: _this.transparent,
	            antialias: !!_this.options.antialias,
	            premultipliedAlpha: true,
	            stencil: true,
	            preserveDrawingBuffer: _this.options.preserveDrawingBuffer,
	        };
	        _this._backgroundColorRgba[3] = _this.transparent ? 0 : 1;
	        _this.gl = createContext(_this.htmlElement, contextOptions);
	        _this.CONTEXT_UID = CONTEXT_UID++;
	        _this.maskManager = new MaskManager(_this);
	        _this.stencilManager = new StencilManager(_this);
	        _this.batchManager = new BatchManager(_this);
	        _this.textureManager = null;
	        _this.initPlugins(WebglRenderer.__plugins);
	        _this.state = new WebGLState(_this.gl);
	        _this.renderingToScreen = true;
	        _this._activeShader = null;
	        _this._activeVao = null;
	        _this._activeRenderTarget = null;
	        _this._initContext();
	        return _this;
	    }
	    WebglRenderer.prototype._initContext = function () {
	        var gl = this.gl;
	        if (gl.isContextLost() && gl.getExtension('WEBGL_lose_context')) {
	            gl.getExtension('WEBGL_lose_context').restoreContext();
	        }
	        this._activeShader = null;
	        this._activeVao = null;
	        this.textureManager = new TextureManager(this);
	        this.textureGC = new TextureGarbageCollector(this);
	        this.state.resetToDefault();
	        this.rootRenderTarget = new RenderTarget(gl, 1, 1, exports.SCALE_MODES.LINEAR, true);
	        this.rootRenderTarget.clearColor = this._backgroundColorRgba;
	        this.bindRenderTarget(this.rootRenderTarget);
	        this.dispatchEvent('onContextChange');
	    };
	    WebglRenderer.prototype.render = function (displayObject, renderTexture, transform) {
	        this.dispatchEvent('onPreRender');
	        this.renderingToScreen = !renderTexture;
	        if (!this.gl || this.gl.isContextLost()) {
	            return;
	        }
	        if (!renderTexture) {
	            this._lastObjectRendered = displayObject;
	        }
	        displayObject.update(Date.now() - GlobalPro.startTime);
	        var cacheParent = displayObject.parent;
	        displayObject.parent = this._tempDisplayObjectParent;
	        displayObject.updateTransform();
	        displayObject.parent = cacheParent;
	        this.bindRenderTexture(renderTexture, transform);
	        this.batchManager.currentRenderer.start();
	        this._activeRenderTarget.clear();
	        displayObject.renderWebGL(this);
	        this.batchManager.currentRenderer.flush();
	        if (renderTexture) {
	            renderTexture.baseTexture.update();
	        }
	        this.textureGC.update();
	        this.dispatchEvent('onPostRender');
	    };
	    WebglRenderer.prototype.clear = function (clearColor) {
	        this._activeRenderTarget.clear(clearColor);
	    };
	    WebglRenderer.prototype.setTransform = function (matrix) {
	        this._activeRenderTarget.transform = matrix;
	    };
	    WebglRenderer.prototype.clearRenderTexture = function (renderTexture, clearColor) {
	        var baseTexture = renderTexture.baseTexture;
	        var renderTarget = baseTexture._glRenderTargets[this.CONTEXT_UID];
	        if (renderTarget) {
	            renderTarget.clear(clearColor);
	        }
	        return this;
	    };
	    WebglRenderer.prototype.bindShader = function (shader, autoProject) {
	        if (autoProject === void 0) { autoProject = true; }
	        if (this._activeShader !== shader) {
	            this._activeShader = shader;
	            shader.bind();
	            if (autoProject !== false) {
	                shader.uniforms["projectionMatrix"] = this._activeRenderTarget.projectionMatrix.toArray(true);
	            }
	        }
	        return this;
	    };
	    WebglRenderer.prototype.createVao = function () {
	        return new VertexArrayObject(this.gl, this.state.attribState);
	    };
	    WebglRenderer.prototype.bindVao = function (vao) {
	        if (this._activeVao === vao) {
	            return this;
	        }
	        if (vao) {
	            vao.bind();
	        }
	        else if (this._activeVao) {
	            this._activeVao.unbind();
	        }
	        this._activeVao = vao;
	        return this;
	    };
	    WebglRenderer.prototype.reset = function () {
	        this.batchManager.reset();
	        this.bindVao(null);
	        this._activeShader = null;
	        this._activeRenderTarget = this.rootRenderTarget;
	        for (var i = 0; i < this.textureManager.boundTextures.length; i++) {
	            this.textureManager.boundTextures[i] = this.textureManager.emptyTextures[i];
	        }
	        this.rootRenderTarget.activate();
	        this.state.resetToDefault();
	        return this;
	    };
	    WebglRenderer.prototype.bindRenderTexture = function (renderTexture, transform) {
	        var renderTarget;
	        if (renderTexture) {
	            var baseTexture = renderTexture.baseTexture;
	            if (!baseTexture._glRenderTargets[this.CONTEXT_UID]) {
	                this.textureManager.updateTexture(baseTexture, 0);
	            }
	            this.textureManager.unbindTexture(baseTexture);
	            renderTarget = baseTexture._glRenderTargets[this.CONTEXT_UID];
	            renderTarget.setFrame(renderTexture.frame);
	        }
	        else {
	            renderTarget = this.rootRenderTarget;
	        }
	        renderTarget.transform = transform;
	        this.bindRenderTarget(renderTarget);
	        return this;
	    };
	    WebglRenderer.prototype.bindRenderTarget = function (renderTarget) {
	        if (renderTarget !== this._activeRenderTarget) {
	            this._activeRenderTarget = renderTarget;
	            renderTarget.activate();
	            if (this._activeShader) {
	                this._activeShader.uniforms.projectionMatrix = renderTarget.projectionMatrix.toArray(true);
	            }
	            this.stencilManager.setMaskStack(renderTarget.stencilMaskStack);
	        }
	        return this;
	    };
	    WebglRenderer.prototype.resize = function (screenWidth, screenHeight) {
	        _super.prototype.resize.call(this, screenWidth, screenHeight);
	        this.rootRenderTarget.resize(screenWidth * devicePixelRatio, screenHeight * devicePixelRatio);
	        if (this._activeRenderTarget === this.rootRenderTarget) {
	            this.rootRenderTarget.activate();
	            if (this._activeShader) {
	                this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(true);
	            }
	        }
	    };
	    WebglRenderer.prototype.destroy = function () {
	        this.destroyPlugins();
	        this.htmlElement.removeEventListener('webglcontextlost', this.handleContextLost);
	        this.htmlElement.removeEventListener('webglcontextrestored', this.handleContextRestored);
	        this.textureManager.destroy();
	        _super.prototype.destroy.call(this);
	        this.maskManager.destroy();
	        this.stencilManager.destroy();
	        this.maskManager = null;
	        this.textureManager = null;
	        this.handleContextLost = null;
	        this.handleContextRestored = null;
	        this.gl.useProgram(null);
	        if (this.gl.getExtension('WEBGL_lose_context')) {
	            this.gl.getExtension('WEBGL_lose_context').loseContext();
	        }
	        this.gl = null;
	    };
	    WebglRenderer.prototype.handleContextRestored = function () {
	        this.textureManager.removeAll();
	        this._initContext();
	    };
	    WebglRenderer.prototype.handleContextLost = function (event) {
	        event.preventDefault();
	    };
	    WebglRenderer.prototype.initPlugins = function (staticMap) {
	        for (var o in staticMap) {
	            this.plugins[o] = new (staticMap[o])(this);
	        }
	    };
	    WebglRenderer.prototype.destroyPlugins = function () {
	        for (var o in this.plugins) {
	            this.plugins[o].destroy();
	            this.plugins[o] = null;
	        }
	        this.plugins = null;
	    };
	    WebglRenderer.registerPlugin = function (pluginName, ctor) {
	        WebglRenderer.__plugins = WebglRenderer.__plugins || {};
	        WebglRenderer.__plugins[pluginName] = ctor;
	    };
	    return WebglRenderer;
	}(SystemRenderer));
	WebglRenderer.registerPlugin('batch', BatchRenderer);

	var requestAnimationFrame = (function () {
	    var lastTime = 0;
	    var vendors = ['webkit', 'moz'];
	    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
	            window[vendors[x] + 'CancelRequestAnimationFrame'];
	    }
	    var requestAnimationFrame = window.requestAnimationFrame;
	    var useTimeout = !!window['useTimeout'];
	    if (useTimeout || !requestAnimationFrame) {
	        requestAnimationFrame = function (callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
	            var id = window.setTimeout(function () {
	                callback(currTime + timeToCall);
	            }, timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	    }
	    if (useTimeout || !window.cancelAnimationFrame) {
	        window.cancelAnimationFrame = function (id) {
	            clearTimeout(id);
	        };
	    }
	    return requestAnimationFrame;
	}());
	var skipTagNames = ['INPUT'];
	var Stage = (function (_super) {
	    tslib_1.__extends(Stage, _super);
	    function Stage(rootDivId, desW, desH, frameRate, scaleMode, renderType, transparent, bgColor) {
	        if (rootDivId === void 0) { rootDivId = "cusEngine"; }
	        if (desW === void 0) { desW = 750; }
	        if (desH === void 0) { desH = 1206; }
	        if (frameRate === void 0) { frameRate = 60; }
	        if (scaleMode === void 0) { scaleMode = StageScaleMode.FIXED_WIDTH; }
	        if (renderType === void 0) { renderType = exports.RENDERER_TYPE.WEBGL; }
	        if (transparent === void 0) { transparent = true; }
	        if (bgColor === void 0) { bgColor = 0x000000; }
	        var _this = _super.call(this) || this;
	        _this.iosTouchendPreventDefault = true;
	        _this.isPreventDefaultEvent = true;
	        _this.rootDiv = HTMLElement;
	        _this.renderObj = null;
	        _this.renderType = exports.RENDERER_TYPE.UNKNOWN;
	        _this.viewRect = new Rectangle();
	        _this.autoSteering = false;
	        _this.autoResize = false;
	        _this.desWidth = 0;
	        _this.desHeight = 0;
	        _this.divHeight = 0;
	        _this.divWidth = 0;
	        _this._bgColor = 0x000000;
	        _this._scaleMode = "onScale";
	        _this._flush = 0;
	        _this._currentFlush = 0;
	        _this._lastDpList = {};
	        _this._rid = -1;
	        _this._floatDisplayList = [];
	        _this._ml = [];
	        _this._mp = [];
	        _this._mouseDownPoint = {};
	        _this._mouseEventTypes = {
	            mousedown: "onMouseDown",
	            mouseup: "onMouseUp",
	            mousemove: "onMouseMove",
	            touchstart: "onMouseDown",
	            touchmove: "onMouseMove",
	            touchend: "onMouseUp"
	        };
	        var s = _this;
	        _this._instanceType = "Stage";
	        Stage._stageList[rootDivId] = s;
	        s.stage = _this;
	        var resizeEvent = "resize";
	        s.name = "stageInstance_" + s.instanceId;
	        var div = document.getElementById(rootDivId);
	        s.renderType = renderType;
	        s.desWidth = desW;
	        s.desHeight = desH;
	        s.rootDiv = div;
	        s.setFrameRate(frameRate);
	        s._scaleMode = scaleMode;
	        var canvas = document.createElement("canvas");
	        s.rootDiv.appendChild(canvas);
	        canvas.id = "cusCanvas";
	        if (renderType == exports.RENDERER_TYPE.CANVAS) {
	            s.renderObj = new CanvasRenderer({
	                htmlElement: canvas,
	                transparent: transparent,
	                backgroundColor: bgColor
	            });
	            GlobalPro.stageRenderType = exports.RENDERER_TYPE.CANVAS;
	            console.log("娓叉煋鏂瑰紡锛歝anvas");
	        }
	        else {
	            if (isWebGLSupported()) {
	                s.renderObj = new WebglRenderer({
	                    htmlElement: canvas,
	                    transparent: transparent,
	                    preserveDrawingBuffer: false,
	                    backgroundColor: bgColor
	                });
	                GlobalPro.stageRenderType = exports.RENDERER_TYPE.WEBGL;
	                console.log("webgl");
	            }
	            else {
	                s.renderObj = new CanvasRenderer({
	                    htmlElement: canvas,
	                    transparent: transparent,
	                    backgroundColor: bgColor
	                });
	                GlobalPro.stageRenderType = exports.RENDERER_TYPE.CANVAS;
	                console.log("娓叉煋鏂瑰紡锛歝anvas");
	            }
	        }
	        window.addEventListener(resizeEvent, function (e) {
	            clearTimeout(s._rid);
	            s._rid = setTimeout(function () {
	                if (s.autoResize) {
	                    s.resize();
	                }
	                var event = new Event(Event.RESIZE);
	                s.dispatchEvent(event);
	            }, 300);
	        });
	        setTimeout(function () {
	            s.resize();
	            Stage.addUpdateObj(s);
	            s.dispatchEvent(Event.ON_INIT_STAGE);
	        }, 100);
	        var rc = s.rootDiv;
	        var mouseEvent = s.onMouseEvent.bind(s);
	        if (osType != "pc") {
	            rc.addEventListener("touchstart", mouseEvent, false);
	            rc.addEventListener('touchmove', mouseEvent, false);
	            rc.addEventListener('touchend', mouseEvent, false);
	        }
	        else {
	            rc.addEventListener("mousedown", mouseEvent, false);
	            rc.addEventListener('mousemove', mouseEvent, false);
	            rc.addEventListener('mouseup', mouseEvent, false);
	        }
	        return _this;
	    }
	    Stage.getStage = function (stageName) {
	        if (stageName === void 0) { stageName = "cusEngine"; }
	        return Stage._stageList[stageName];
	    };
	    Object.defineProperty(Stage, "pause", {
	        get: function () {
	            return this._pause;
	        },
	        set: function (value) {
	            this._pause = value;
	            if (value != this._pause) {
	                GDispatcher.dispatchEvent("onStagePause", { pause: value });
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Stage.prototype, "bgColor", {
	        get: function () {
	            return this._bgColor;
	        },
	        set: function (value) {
	            if (this._bgColor === value)
	                return;
	            this._bgColor = value;
	            this.renderObj.backgroundColor = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Stage.prototype, "scaleMode", {
	        get: function () {
	            return this._scaleMode;
	        },
	        set: function (value) {
	            var s = this;
	            if (value != s._scaleMode) {
	                s._scaleMode = value;
	                s.setAlign();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Stage.prototype.render = function () {
	        this.renderObj.render(this);
	        var sf = this._floatDisplayList;
	        var len = sf.length;
	        for (var i = 0; i < len; i++) {
	            sf[i].updateStyle();
	        }
	    };
	    Stage.prototype._initMouseEvent = function (event, cp, sp, identifier) {
	        event["_pd"] = false;
	        event["_bpd"] = false;
	        event.clientX = cp.x;
	        event.clientY = cp.y;
	        event.stageX = sp.x;
	        event.stageY = sp.y;
	        event.identifier = identifier;
	    };
	    Stage.prototype.flush = function () {
	        var s = this;
	        if (s._flush == 0) {
	            s.render();
	        }
	        else {
	            if (s._currentFlush == 0) {
	                s.render();
	                s._currentFlush = s._flush;
	            }
	            else {
	                s._currentFlush--;
	            }
	        }
	    };
	    Stage.prototype.setFrameRate = function (fps) {
	        var s = this;
	        s._flush = 60 / fps - 1 >> 0;
	        if (s._flush < 0) {
	            s._flush = 0;
	        }
	    };
	    Stage.prototype.getFrameRate = function () {
	        return 60 / (this._flush + 1);
	    };
	    Stage.prototype.getRootDivWH = function (div) {
	        var sw = div.style.width;
	        var sh = div.style.height;
	        var iw = document.body.clientWidth;
	        var ih = document.body.clientHeight;
	        var vW = parseInt(sw);
	        var vH = parseInt(sh);
	        if (vW.toString() == "NaN") {
	            vW = iw;
	        }
	        else {
	            if (sw.indexOf("%") > 0) {
	                vW *= iw / 100;
	            }
	        }
	        if (vH.toString() == "NaN") {
	            vH = ih;
	        }
	        else {
	            if (sh.indexOf("%") > 0) {
	                vH *= ih / 100;
	            }
	        }
	        return { w: vW, h: vH };
	    };
	    Stage.prototype.kill = function () {
	        Stage.removeUpdateObj(this);
	    };
	    Stage.prototype.onMouseEvent = function (e) {
	        var s = stage;
	        if (skipTagNames.indexOf(e.target.tagName) >= 0) {
	            return;
	        }
	        if (EventDispatcher._totalMEC > 0) {
	            var points = void 0;
	            var item = s._mouseEventTypes[e.type];
	            var events = void 0;
	            var event = void 0;
	            var sp = void 0;
	            var lp = void 0;
	            var cp = void 0;
	            var eLen = void 0;
	            var identifier = void 0;
	            if (osType == "pc") {
	                e.identifier = 0;
	                points = [e];
	            }
	            else {
	                points = [e.changedTouches[0]];
	            }
	            for (var o = 0; o < points.length; o++) {
	                eLen = 0;
	                events = [];
	                identifier = "m" + points[o].identifier;
	                if (s._mp.length > 0) {
	                    cp = s._mp.shift();
	                }
	                else {
	                    cp = new Point();
	                }
	                var rootDiv = s.rootDiv;
	                var doc = document.documentElement;
	                var box = rootDiv.getBoundingClientRect();
	                var left = box.left + window.pageXOffset - doc.clientLeft;
	                var top = box.top + window.pageYOffset - doc.clientTop;
	                cp.x = (points[o].pageX - left) * devicePixelRatio;
	                cp.y = (points[o].pageY - top) * devicePixelRatio;
	                sp = s.globalToLocal(cp, DisplayObject._bp);
	                if (EventDispatcher.getMouseEventCount() > 0) {
	                    if (!s._ml[eLen]) {
	                        event = new MouseEvent(item);
	                        s._ml[eLen] = event;
	                    }
	                    else {
	                        event = s._ml[eLen];
	                        event.type = item;
	                    }
	                    events[events.length] = event;
	                    s._initMouseEvent(event, cp, sp, identifier);
	                    eLen++;
	                }
	                if (item == "onMouseDown") {
	                    s._mouseDownPoint[identifier] = cp;
	                }
	                else if (item == "onMouseUp") {
	                    if (s._mouseDownPoint[identifier]) {
	                        if (Point.distance(s._mouseDownPoint[identifier], cp) < 20) {
	                            if (EventDispatcher.getMouseEventCount("onMouseClick") > 0) {
	                                if (!s._ml[eLen]) {
	                                    event = new MouseEvent("onMouseClick");
	                                    s._ml[eLen] = event;
	                                }
	                                else {
	                                    event = s._ml[eLen];
	                                    event.type = "onMouseClick";
	                                }
	                                events[events.length] = event;
	                                s._initMouseEvent(event, cp, sp, identifier);
	                                eLen++;
	                            }
	                        }
	                    }
	                }
	                if (eLen > 0) {
	                    var d = s.hitTestPoint(cp, true);
	                    var displayList = [];
	                    if (d) {
	                        while (d) {
	                            if (d["mouseChildren"] === false) {
	                                displayList.length = 0;
	                            }
	                            displayList[displayList.length] = d;
	                            d = d.parent;
	                        }
	                    }
	                    else {
	                        displayList[displayList.length] = s;
	                    }
	                    var len = displayList.length;
	                    for (var i = len - 1; i >= 0; i--) {
	                        d = displayList[i];
	                        for (var j = 0; j < eLen; j++) {
	                            if (!events[j]["_bpd"]) {
	                                if (d.hasEventListener(events[j].type) && d.mouseEnabled) {
	                                    events[j].target = d;
	                                    events[j].currentTarget = displayList[0];
	                                    lp = d.globalToLocal(cp, DisplayObject._bp);
	                                    events[j].localX = lp.x;
	                                    events[j].localY = lp.y;
	                                    d.dispatchEvent(events[j]);
	                                }
	                            }
	                        }
	                    }
	                    displayList.reverse();
	                    for (var i = len - 1; i >= 0; i--) {
	                        d = displayList[i];
	                        for (var j = 0; j < eLen; j++) {
	                            if (!events[j]["_bpd"]) {
	                                if (d.hasEventListener(events[j].type, false) && d.mouseEnabled) {
	                                    events[j].target = d;
	                                    events[j].currentTarget = displayList[eLen - 1];
	                                    lp = d.globalToLocal(cp, DisplayObject._bp);
	                                    events[j].localX = lp.x;
	                                    events[j].localY = lp.y;
	                                    d.dispatchEvent(events[j], null, false);
	                                }
	                            }
	                        }
	                    }
	                    if (item != "onMouseDown") {
	                        if (EventDispatcher.getMouseEventCount("onMouseOver") > 0 || EventDispatcher.getMouseEventCount("onMouseOut") > 0) {
	                            if (s._lastDpList[identifier]) {
	                                var len1 = s._lastDpList[identifier].length;
	                                var len2 = displayList.length;
	                                len = len1 > len2 ? len1 : len2;
	                                var isDiff = false;
	                                var overEvent = void 0;
	                                var outEvent = void 0;
	                                for (var i = 1; i < len; i++) {
	                                    if (!isDiff) {
	                                        if (s._lastDpList[identifier][i] != displayList[i]) {
	                                            isDiff = true;
	                                            if (!s._ml[eLen]) {
	                                                overEvent = new MouseEvent("onMouseOver");
	                                                s._ml[eLen] = overEvent;
	                                            }
	                                            else {
	                                                overEvent = s._ml[eLen];
	                                                overEvent.type = "onMouseOver";
	                                            }
	                                            s._initMouseEvent(overEvent, cp, sp, identifier);
	                                            eLen++;
	                                            if (!s._ml[eLen]) {
	                                                outEvent = new MouseEvent("onMouseOut");
	                                                s._ml[eLen] = outEvent;
	                                            }
	                                            else {
	                                                outEvent = s._ml[eLen];
	                                                outEvent.type = "onMouseOut";
	                                            }
	                                            s._initMouseEvent(outEvent, cp, sp, identifier);
	                                        }
	                                    }
	                                    if (isDiff) {
	                                        if (s._lastDpList[identifier][i]) {
	                                            if (!outEvent["_bpd"]) {
	                                                d = s._lastDpList[identifier][i];
	                                                if (d.hasEventListener("onMouseOut")) {
	                                                    outEvent.currentTarget = d;
	                                                    outEvent.target = s._lastDpList[identifier][len1 - 1];
	                                                    lp = d.globalToLocal(cp, DisplayObject._bp);
	                                                    outEvent.localX = lp.x;
	                                                    outEvent.localY = lp.y;
	                                                    d.dispatchEvent(outEvent);
	                                                }
	                                            }
	                                        }
	                                        if (displayList[i]) {
	                                            if (!overEvent["_bpd"]) {
	                                                d = displayList[i];
	                                                if (d.hasEventListener("onMouseOver")) {
	                                                    overEvent.currentTarget = d;
	                                                    overEvent.target = displayList[len2 - 1];
	                                                    lp = d.globalToLocal(cp, DisplayObject._bp);
	                                                    overEvent.localX = lp.x;
	                                                    overEvent.localY = lp.y;
	                                                    d.dispatchEvent(overEvent);
	                                                }
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                        s._mp[s._mp.length] = cp;
	                    }
	                    if (item == "onMouseUp") {
	                        delete s._mouseDownPoint[identifier];
	                        delete s._lastDpList[identifier];
	                    }
	                    else {
	                        s._lastDpList[identifier] = displayList;
	                    }
	                }
	            }
	        }
	        if (e.target.id == "cusCanvas") {
	            if (s.isPreventDefaultEvent) {
	                if ((e.type == "touchend") && (osType == "ios") && (s.iosTouchendPreventDefault)) {
	                    e.preventDefault();
	                }
	                if ((e.type == "touchmove") || (e.type == "touchstart" && osType == "android")) {
	                    e.preventDefault();
	                }
	            }
	        }
	    };
	    Stage.prototype.setAlign = function () {
	        var s = this;
	        var divH = s.divHeight * devicePixelRatio;
	        var divW = s.divWidth * devicePixelRatio;
	        var desH = s.desHeight;
	        var desW = s.desWidth;
	        var isDivH = divH > divW;
	        var isDesH = desH > desW;
	        var scaleY = 1;
	        var scaleX = 1;
	        if (s.autoSteering) {
	            if (isDesH != isDivH) {
	                var d = divH;
	                divH = divW;
	                divW = d;
	            }
	        }
	        if (s._scaleMode != "noScale") {
	            scaleY = divH / desH;
	            scaleX = divW / desW;
	            switch (s._scaleMode) {
	                case "noBorder":
	                    if (scaleX > scaleY) {
	                        scaleY = scaleX;
	                    }
	                    else {
	                        scaleX = scaleY;
	                    }
	                    break;
	                case "showAll":
	                    if (scaleX < scaleY) {
	                        scaleY = scaleX;
	                    }
	                    else {
	                        scaleX = scaleY;
	                    }
	                    break;
	                case "fixedWidth":
	                    scaleY = scaleX;
	                    break;
	                case "fixedHeight":
	                    scaleX = scaleY;
	                    break;
	            }
	        }
	        s.scaleX = scaleX;
	        s.scaleY = scaleY;
	        s.viewRect.x = (desW - divW / scaleX) >> 1;
	        s.viewRect.y = (desH - divH / scaleY) >> 1;
	        s.viewRect.width = desW - s.viewRect.x * 2;
	        s.viewRect.height = desH - s.viewRect.y * 2;
	        if (s.autoSteering) {
	            if (isDesH == isDivH) {
	                s.rotation = 0;
	            }
	            else {
	                if (desH > desW) {
	                    s.rotation = -90;
	                }
	                else {
	                    s.rotation = 90;
	                }
	            }
	        }
	        else {
	            s.rotation = 0;
	        }
	    };
	    Stage.prototype.resize = function () {
	        var s = this;
	        var whObj = s.getRootDivWH(s.rootDiv);
	        s.divHeight = whObj.h;
	        s.divWidth = whObj.w;
	        s.renderObj.resize(s.divWidth, s.divHeight);
	        s.setAlign();
	        s.render();
	    };
	    Stage.prototype.getBounds = function () {
	        return this.viewRect;
	    };
	    Stage.flushAll = function () {
	        if (!GlobalPro.startTime)
	            GlobalPro.startTime = Date.now();
	        if (!Stage._pause) {
	            var len = Stage.allUpdateObjList.length;
	            for (var i = 0; i < len; i++) {
	                Stage.allUpdateObjList[i] && Stage.allUpdateObjList[i].flush();
	            }
	        }
	        requestAnimationFrame(Stage.flushAll);
	    };
	    Stage.addUpdateObj = function (target) {
	        var isHave = false;
	        var len = Stage.allUpdateObjList.length;
	        for (var i = 0; i < len; i++) {
	            if (Stage.allUpdateObjList[i] === target) {
	                isHave = true;
	                break;
	            }
	        }
	        if (!isHave) {
	            Stage.allUpdateObjList.unshift(target);
	        }
	    };
	    Stage.removeUpdateObj = function (target) {
	        var len = Stage.allUpdateObjList.length;
	        for (var i = 0; i < len; i++) {
	            if (Stage.allUpdateObjList[i] === target) {
	                Stage.allUpdateObjList.splice(i, 1);
	                break;
	            }
	        }
	    };
	    Stage.prototype.destroy = function () {
	        var s = this;
	        Stage.removeUpdateObj(s);
	        s.rootDiv = null;
	        s._floatDisplayList = null;
	        s.renderObj = null;
	        s.viewRect = null;
	        s._lastDpList = null;
	        s._ml = null;
	        _super.prototype.destroy.call(this);
	    };
	    Stage._stageList = {};
	    Stage._pause = false;
	    Stage._dragDisplay = null;
	    Stage._isLoadedVConsole = false;
	    Stage.allUpdateObjList = [];
	    return Stage;
	}(Container));

	var GraphicsData = (function (_super) {
	    tslib_1.__extends(GraphicsData, _super);
	    function GraphicsData(shape, fillStyle, lineStyle, matrix) {
	        if (fillStyle === void 0) { fillStyle = null; }
	        if (lineStyle === void 0) { lineStyle = null; }
	        if (matrix === void 0) { matrix = null; }
	        var _this = _super.call(this) || this;
	        _this._instanceType = "GraphicsData";
	        _this.shape = shape;
	        _this.lineStyle = lineStyle;
	        _this.fillStyle = fillStyle;
	        _this.matrix = matrix;
	        _this.holes = [];
	        _this.type = shape.type;
	        _this.points = [];
	        return _this;
	    }
	    GraphicsData.prototype.clone = function () {
	        return new GraphicsData(this.shape, this.fillStyle, this.lineStyle, this.matrix);
	    };
	    GraphicsData.prototype.destroy = function () {
	        this.shape = null;
	        this.holes.length = 0;
	        this.holes = null;
	        this.points.length = 0;
	        this.points = null;
	        this.lineStyle = null;
	        this.fillStyle = null;
	    };
	    return GraphicsData;
	}(HashObject));

	var BaseRenderTexture = (function (_super) {
	    tslib_1.__extends(BaseRenderTexture, _super);
	    function BaseRenderTexture(width, height, scaleMode) {
	        if (width === void 0) { width = 100; }
	        if (height === void 0) { height = 100; }
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        var _this = _super.call(this, null, scaleMode) || this;
	        _this.width = Math.ceil(width);
	        _this.height = Math.ceil(height);
	        _this.scaleMode = scaleMode;
	        _this.hasLoaded = true;
	        _this._glRenderTargets = {};
	        _this._canvasRenderTarget = null;
	        _this.valid = false;
	        return _this;
	    }
	    BaseRenderTexture.prototype.resize = function (width, height) {
	        width = Math.ceil(width);
	        height = Math.ceil(height);
	        if (width === this.width && height === this.height) {
	            return;
	        }
	        this.valid = (width > 0 && height > 0);
	        this.width = width;
	        this.height = height;
	        if (!this.valid) {
	            return;
	        }
	        this.dispatchEvent('update');
	    };
	    BaseRenderTexture.prototype.destroy = function () {
	        _super.prototype.destroy.call(this);
	    };
	    return BaseRenderTexture;
	}(BaseTexture));

	var RenderTexture = (function (_super) {
	    tslib_1.__extends(RenderTexture, _super);
	    function RenderTexture(baseRenderTexture, frame) {
	        var _this = _super.call(this, baseRenderTexture, frame) || this;
	        _this.valid = true;
	        _this._updateUvs();
	        return _this;
	    }
	    RenderTexture.prototype.resize = function (width, height, doNotResizeBaseTexture) {
	        if (doNotResizeBaseTexture === void 0) { doNotResizeBaseTexture = false; }
	        width = Math.ceil(width);
	        height = Math.ceil(height);
	        this.valid = (width > 0 && height > 0);
	        this._frame.width = this.orig.width = width;
	        this._frame.height = this.orig.height = height;
	        if (!doNotResizeBaseTexture) {
	            this.baseTexture["resize"](width, height);
	        }
	        this._updateUvs();
	    };
	    RenderTexture.create = function (width, height, scaleMode) {
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        return new RenderTexture(new BaseRenderTexture(width, height, scaleMode));
	    };
	    return RenderTexture;
	}(Texture));

	var Circle = (function () {
	    function Circle(x, y, radius) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        if (radius === void 0) { radius = 0; }
	        this.x = x;
	        this.y = y;
	        this.radius = radius;
	        this.type = exports.SHAPES.CIRC;
	    }
	    Circle.prototype.clone = function () {
	        return new Circle(this.x, this.y, this.radius);
	    };
	    Circle.prototype.isPointIn = function (point) {
	        if (this.radius <= 0) {
	            return false;
	        }
	        var r2 = this.radius * this.radius;
	        var dx = (this.x - point.x);
	        var dy = (this.y - point.y);
	        dx *= dx;
	        dy *= dy;
	        return (dx + dy <= r2);
	    };
	    Circle.prototype.getBounds = function () {
	        return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
	    };
	    return Circle;
	}());

	var Ellipse = (function () {
	    function Ellipse(x, y, width, height) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        if (width === void 0) { width = 0; }
	        if (height === void 0) { height = 0; }
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	        this.type = exports.SHAPES.ELIP;
	    }
	    Ellipse.prototype.clone = function () {
	        return new Ellipse(this.x, this.y, this.width, this.height);
	    };
	    Ellipse.prototype.isPointIn = function (point) {
	        if (this.width <= 0 || this.height <= 0) {
	            return false;
	        }
	        var normx = ((point.x - this.x) / this.width);
	        var normy = ((point.y - this.y) / this.height);
	        normx *= normx;
	        normy *= normy;
	        return (normx + normy <= 1);
	    };
	    Ellipse.prototype.getBounds = function () {
	        return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
	    };
	    return Ellipse;
	}());

	var Polygon = (function () {
	    function Polygon() {
	        var points = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            points[_i] = arguments[_i];
	        }
	        if (Array.isArray(points[0])) {
	            points = points[0];
	        }
	        if (points[0] instanceof Point) {
	            var p = [];
	            for (var i = 0, il = points.length; i < il; i++) {
	                p.push(points[i].x, points[i].y);
	            }
	            points = p;
	        }
	        this.closed = true;
	        this.points = points;
	        this.type = exports.SHAPES.POLY;
	    }
	    Polygon.prototype.clone = function () {
	        return new Polygon(this.points.slice());
	    };
	    Polygon.prototype.close = function () {
	        var points = this.points;
	        if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
	            points.push(points[0], points[1]);
	        }
	    };
	    Polygon.prototype.isPointIn = function (point) {
	        var x = point.x;
	        var y = point.y;
	        var inside = false;
	        var length = this.points.length / 2;
	        for (var i = 0, j = length - 1; i < length; j = i++) {
	            var xi = this.points[i * 2];
	            var yi = this.points[(i * 2) + 1];
	            var xj = this.points[j * 2];
	            var yj = this.points[(j * 2) + 1];
	            var intersect = ((yi > y) !== (yj > y)) && (x < ((xj - xi) * ((y - yi) / (yj - yi))) + xi);
	            if (intersect) {
	                inside = !inside;
	            }
	        }
	        return inside;
	    };
	    return Polygon;
	}());

	var RoundedRectangle = (function () {
	    function RoundedRectangle(x, y, width, height, radius) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        if (width === void 0) { width = 0; }
	        if (height === void 0) { height = 0; }
	        if (radius === void 0) { radius = 20; }
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	        var max = (width < height ? width : height) / 2;
	        radius = radius < 0 ? -radius : radius;
	        radius = radius > max ? max : radius;
	        this.radius = radius;
	        this.type = exports.SHAPES.RREC;
	    }
	    RoundedRectangle.prototype.clone = function () {
	        return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
	    };
	    RoundedRectangle.prototype.isPointIn = function (point) {
	        var x = point.x;
	        var y = point.y;
	        if (this.width <= 0 || this.height <= 0) {
	            return false;
	        }
	        if (x >= this.x && x <= this.x + this.width) {
	            if (y >= this.y && y <= this.y + this.height) {
	                if ((y >= this.y + this.radius && y <= this.y + this.height - this.radius)
	                    || (x >= this.x + this.radius && x <= this.x + this.width - this.radius)) {
	                    return true;
	                }
	                var dx = x - (this.x + this.radius);
	                var dy = y - (this.y + this.radius);
	                var radius2 = this.radius * this.radius;
	                if ((dx * dx) + (dy * dy) <= radius2) {
	                    return true;
	                }
	                dx = x - (this.x + this.width - this.radius);
	                if ((dx * dx) + (dy * dy) <= radius2) {
	                    return true;
	                }
	                dy = y - (this.y + this.height - this.radius);
	                if ((dx * dx) + (dy * dy) <= radius2) {
	                    return true;
	                }
	                dx = x - (this.x + this.radius);
	                if ((dx * dx) + (dy * dy) <= radius2) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    };
	    return RoundedRectangle;
	}());

	function earcut(data, holeIndices, dim) {
	    dim = dim || 2;
	    var hasHoles = holeIndices && holeIndices.length, outerLen = hasHoles ? holeIndices[0] * dim : data.length, outerNode = linkedList(data, 0, outerLen, dim, true), triangles = [];
	    if (!outerNode || outerNode.next === outerNode.prev)
	        return triangles;
	    var minX, minY, maxX, maxY, x, y, invSize;
	    if (hasHoles)
	        outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
	    if (data.length > 80 * dim) {
	        minX = maxX = data[0];
	        minY = maxY = data[1];
	        for (var i = dim; i < outerLen; i += dim) {
	            x = data[i];
	            y = data[i + 1];
	            if (x < minX)
	                minX = x;
	            if (y < minY)
	                minY = y;
	            if (x > maxX)
	                maxX = x;
	            if (y > maxY)
	                maxY = y;
	        }
	        invSize = Math.max(maxX - minX, maxY - minY);
	        invSize = invSize !== 0 ? 1 / invSize : 0;
	    }
	    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
	    return triangles;
	}
	function linkedList(data, start, end, dim, clockwise) {
	    var i, last;
	    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
	        for (i = start; i < end; i += dim)
	            last = insertNode(i, data[i], data[i + 1], last);
	    }
	    else {
	        for (i = end - dim; i >= start; i -= dim)
	            last = insertNode(i, data[i], data[i + 1], last);
	    }
	    if (last && equals(last, last.next)) {
	        removeNode(last);
	        last = last.next;
	    }
	    return last;
	}
	function filterPoints(start, end) {
	    if (!start)
	        return start;
	    if (!end)
	        end = start;
	    var p = start, again;
	    do {
	        again = false;
	        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
	            removeNode(p);
	            p = end = p.prev;
	            if (p === p.next)
	                break;
	            again = true;
	        }
	        else {
	            p = p.next;
	        }
	    } while (again || p !== end);
	    return end;
	}
	function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
	    if (!ear)
	        return;
	    if (!pass && invSize)
	        indexCurve(ear, minX, minY, invSize);
	    var stop = ear, prev, next;
	    while (ear.prev !== ear.next) {
	        prev = ear.prev;
	        next = ear.next;
	        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
	            triangles.push(prev.i / dim);
	            triangles.push(ear.i / dim);
	            triangles.push(next.i / dim);
	            removeNode(ear);
	            ear = next.next;
	            stop = next.next;
	            continue;
	        }
	        ear = next;
	        if (ear === stop) {
	            if (!pass) {
	                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
	            }
	            else if (pass === 1) {
	                ear = cureLocalIntersections(ear, triangles, dim);
	                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
	            }
	            else if (pass === 2) {
	                splitEarcut(ear, triangles, dim, minX, minY, invSize);
	            }
	            break;
	        }
	    }
	}
	function isEar(ear) {
	    var a = ear.prev, b = ear, c = ear.next;
	    if (area(a, b, c) >= 0)
	        return false;
	    var p = ear.next.next;
	    while (p !== ear.prev) {
	        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0)
	            return false;
	        p = p.next;
	    }
	    return true;
	}
	function isEarHashed(ear, minX, minY, invSize) {
	    var a = ear.prev, b = ear, c = ear.next;
	    if (area(a, b, c) >= 0)
	        return false;
	    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x), minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y), maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x), maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);
	    var minZ = zOrder(minTX, minTY, minX, minY, invSize), maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
	    var p = ear.prevZ, n = ear.nextZ;
	    while (p && p.z >= minZ && n && n.z <= maxZ) {
	        if (p !== ear.prev && p !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0)
	            return false;
	        p = p.prevZ;
	        if (n !== ear.prev && n !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
	            area(n.prev, n, n.next) >= 0)
	            return false;
	        n = n.nextZ;
	    }
	    while (p && p.z >= minZ) {
	        if (p !== ear.prev && p !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0)
	            return false;
	        p = p.prevZ;
	    }
	    while (n && n.z <= maxZ) {
	        if (n !== ear.prev && n !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
	            area(n.prev, n, n.next) >= 0)
	            return false;
	        n = n.nextZ;
	    }
	    return true;
	}
	function cureLocalIntersections(start, triangles, dim) {
	    var p = start;
	    do {
	        var a = p.prev, b = p.next.next;
	        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
	            triangles.push(a.i / dim);
	            triangles.push(p.i / dim);
	            triangles.push(b.i / dim);
	            removeNode(p);
	            removeNode(p.next);
	            p = start = b;
	        }
	        p = p.next;
	    } while (p !== start);
	    return p;
	}
	function splitEarcut(start, triangles, dim, minX, minY, invSize) {
	    var a = start;
	    do {
	        var b = a.next.next;
	        while (b !== a.prev) {
	            if (a.i !== b.i && isValidDiagonal(a, b)) {
	                var c = splitPolygon(a, b);
	                a = filterPoints(a, a.next);
	                c = filterPoints(c, c.next);
	                earcutLinked(a, triangles, dim, minX, minY, invSize);
	                earcutLinked(c, triangles, dim, minX, minY, invSize);
	                return;
	            }
	            b = b.next;
	        }
	        a = a.next;
	    } while (a !== start);
	}
	function eliminateHoles(data, holeIndices, outerNode, dim) {
	    var queue = [], i, len, start, end, list;
	    for (i = 0, len = holeIndices.length; i < len; i++) {
	        start = holeIndices[i] * dim;
	        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	        list = linkedList(data, start, end, dim, false);
	        if (list === list.next)
	            list.steiner = true;
	        queue.push(getLeftmost(list));
	    }
	    queue.sort(compareX);
	    for (i = 0; i < queue.length; i++) {
	        eliminateHole(queue[i], outerNode);
	        outerNode = filterPoints(outerNode, outerNode.next);
	    }
	    return outerNode;
	}
	function compareX(a, b) {
	    return a.x - b.x;
	}
	function eliminateHole(hole, outerNode) {
	    outerNode = findHoleBridge(hole, outerNode);
	    if (outerNode) {
	        var b = splitPolygon(outerNode, hole);
	        filterPoints(b, b.next);
	    }
	}
	function findHoleBridge(hole, outerNode) {
	    var p = outerNode, hx = hole.x, hy = hole.y, qx = -Infinity, m;
	    do {
	        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
	            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
	            if (x <= hx && x > qx) {
	                qx = x;
	                if (x === hx) {
	                    if (hy === p.y)
	                        return p;
	                    if (hy === p.next.y)
	                        return p.next;
	                }
	                m = p.x < p.next.x ? p : p.next;
	            }
	        }
	        p = p.next;
	    } while (p !== outerNode);
	    if (!m)
	        return null;
	    if (hx === qx)
	        return m.prev;
	    var stop = m, mx = m.x, my = m.y, tanMin = Infinity, tan;
	    p = m.next;
	    while (p !== stop) {
	        if (hx >= p.x && p.x >= mx && hx !== p.x &&
	            pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
	            tan = Math.abs(hy - p.y) / (hx - p.x);
	            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
	                m = p;
	                tanMin = tan;
	            }
	        }
	        p = p.next;
	    }
	    return m;
	}
	function indexCurve(start, minX, minY, invSize) {
	    var p = start;
	    do {
	        if (p.z === null)
	            p.z = zOrder(p.x, p.y, minX, minY, invSize);
	        p.prevZ = p.prev;
	        p.nextZ = p.next;
	        p = p.next;
	    } while (p !== start);
	    p.prevZ.nextZ = null;
	    p.prevZ = null;
	    sortLinked(p);
	}
	function sortLinked(list) {
	    var i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
	    do {
	        p = list;
	        list = null;
	        tail = null;
	        numMerges = 0;
	        while (p) {
	            numMerges++;
	            q = p;
	            pSize = 0;
	            for (i = 0; i < inSize; i++) {
	                pSize++;
	                q = q.nextZ;
	                if (!q)
	                    break;
	            }
	            qSize = inSize;
	            while (pSize > 0 || (qSize > 0 && q)) {
	                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
	                    e = p;
	                    p = p.nextZ;
	                    pSize--;
	                }
	                else {
	                    e = q;
	                    q = q.nextZ;
	                    qSize--;
	                }
	                if (tail)
	                    tail.nextZ = e;
	                else
	                    list = e;
	                e.prevZ = tail;
	                tail = e;
	            }
	            p = q;
	        }
	        tail.nextZ = null;
	        inSize *= 2;
	    } while (numMerges > 1);
	    return list;
	}
	function zOrder(x, y, minX, minY, invSize) {
	    x = 32767 * (x - minX) * invSize;
	    y = 32767 * (y - minY) * invSize;
	    x = (x | (x << 8)) & 0x00FF00FF;
	    x = (x | (x << 4)) & 0x0F0F0F0F;
	    x = (x | (x << 2)) & 0x33333333;
	    x = (x | (x << 1)) & 0x55555555;
	    y = (y | (y << 8)) & 0x00FF00FF;
	    y = (y | (y << 4)) & 0x0F0F0F0F;
	    y = (y | (y << 2)) & 0x33333333;
	    y = (y | (y << 1)) & 0x55555555;
	    return x | (y << 1);
	}
	function getLeftmost(start) {
	    var p = start, leftmost = start;
	    do {
	        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y))
	            leftmost = p;
	        p = p.next;
	    } while (p !== start);
	    return leftmost;
	}
	function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
	    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
	        (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
	        (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
	}
	function isValidDiagonal(a, b) {
	    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
	        locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
	}
	function area(p, q, r) {
	    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
	}
	function equals(p1, p2) {
	    return p1.x === p2.x && p1.y === p2.y;
	}
	function intersects(p1, q1, p2, q2) {
	    if ((equals(p1, q1) && equals(p2, q2)) ||
	        (equals(p1, q2) && equals(p2, q1)))
	        return true;
	    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
	        area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
	}
	function intersectsPolygon(a, b) {
	    var p = a;
	    do {
	        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
	            intersects(p, p.next, a, b))
	            return true;
	        p = p.next;
	    } while (p !== a);
	    return false;
	}
	function locallyInside(a, b) {
	    return area(a.prev, a, a.next) < 0 ?
	        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
	        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
	}
	function middleInside(a, b) {
	    var p = a, inside = false, px = (a.x + b.x) / 2, py = (a.y + b.y) / 2;
	    do {
	        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
	            (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
	            inside = !inside;
	        p = p.next;
	    } while (p !== a);
	    return inside;
	}
	function splitPolygon(a, b) {
	    var a2 = new Node(a.i, a.x, a.y), b2 = new Node(b.i, b.x, b.y), an = a.next, bp = b.prev;
	    a.next = b;
	    b.prev = a;
	    a2.next = an;
	    an.prev = a2;
	    b2.next = a2;
	    a2.prev = b2;
	    bp.next = b2;
	    b2.prev = bp;
	    return b2;
	}
	function insertNode(i, x, y, last) {
	    var p = new Node(i, x, y);
	    if (!last) {
	        p.prev = p;
	        p.next = p;
	    }
	    else {
	        p.next = last.next;
	        p.prev = last;
	        last.next.prev = p;
	        last.next = p;
	    }
	    return p;
	}
	function removeNode(p) {
	    p.next.prev = p.prev;
	    p.prev.next = p.next;
	    if (p.prevZ)
	        p.prevZ.nextZ = p.nextZ;
	    if (p.nextZ)
	        p.nextZ.prevZ = p.prevZ;
	}
	function Node(i, x, y) {
	    this.i = i;
	    this.x = x;
	    this.y = y;
	    this.prev = null;
	    this.next = null;
	    this.z = null;
	    this.prevZ = null;
	    this.nextZ = null;
	    this.steiner = false;
	}
	earcut["deviation"] = function (data, holeIndices, dim, triangles) {
	    var hasHoles = holeIndices && holeIndices.length;
	    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
	    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
	    if (hasHoles) {
	        for (var i = 0, len = holeIndices.length; i < len; i++) {
	            var start = holeIndices[i] * dim;
	            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	            polygonArea -= Math.abs(signedArea(data, start, end, dim));
	        }
	    }
	    var trianglesArea = 0;
	    for (i = 0; i < triangles.length; i += 3) {
	        var a = triangles[i] * dim;
	        var b = triangles[i + 1] * dim;
	        var c = triangles[i + 2] * dim;
	        trianglesArea += Math.abs((data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
	            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
	    }
	    return polygonArea === 0 && trianglesArea === 0 ? 0 :
	        Math.abs((trianglesArea - polygonArea) / polygonArea);
	};
	function signedArea(data, start, end, dim) {
	    var sum = 0;
	    for (var i = start, j = end - dim; i < end; i += dim) {
	        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
	        j = i;
	    }
	    return sum;
	}
	earcut["flatten"] = function (data) {
	    var dim = data[0][0].length, result = { vertices: [], holes: [], dimensions: dim }, holeIndex = 0;
	    for (var i = 0; i < data.length; i++) {
	        for (var j = 0; j < data[i].length; j++) {
	            for (var d = 0; d < dim; d++)
	                result.vertices.push(data[i][j][d]);
	        }
	        if (i > 0) {
	            holeIndex += data[i - 1].length;
	            result.holes.push(holeIndex);
	        }
	    }
	    return result;
	};

	var buildPoly = {
	    build: function (graphicsData) {
	        graphicsData.points = graphicsData.shape.points.slice();
	    },
	    triangulate: function (graphicsData, graphicsGeometry) {
	        var points = graphicsData.points;
	        var holes = graphicsData.holes;
	        var verts = graphicsGeometry.verts;
	        var indices = graphicsGeometry.indices;
	        if (points.length >= 6) {
	            var holeArray = [];
	            for (var i = 0; i < holes.length; i++) {
	                var hole = holes[i];
	                holeArray.push(points.length / 2);
	                points = points.concat(hole.points);
	            }
	            var triangles = earcut(points, holeArray, 2);
	            if (!triangles) {
	                return;
	            }
	            var vertPos = verts.length / 2;
	            for (var i = 0; i < triangles.length; i += 3) {
	                indices.push(triangles[i] + vertPos);
	                indices.push(triangles[i + 1] + vertPos);
	                indices.push(triangles[i + 2] + vertPos);
	            }
	            for (var i = 0; i < points.length; i++) {
	                verts.push(points[i]);
	            }
	        }
	    },
	};

	var buildCircle = {
	    build: function (graphicsData) {
	        var circleData = graphicsData.shape;
	        var points = graphicsData.points;
	        var x = circleData.x;
	        var y = circleData.y;
	        var width;
	        var height;
	        points.length = 0;
	        if (graphicsData.type === exports.SHAPES.CIRC) {
	            width = circleData.radius;
	            height = circleData.radius;
	        }
	        else {
	            width = circleData.width;
	            height = circleData.height;
	        }
	        if (width === 0 || height === 0) {
	            return;
	        }
	        var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius))
	            || Math.floor(15 * Math.sqrt(circleData.width + circleData.height));
	        totalSegs /= 2.3;
	        var seg = (Math.PI * 2) / totalSegs;
	        for (var i = 0; i < totalSegs; i++) {
	            points.push(x + (Math.sin(seg * i) * width), y + (Math.cos(seg * i) * height));
	        }
	        points.push(points[0], points[1]);
	    },
	    triangulate: function (graphicsData, graphicsGeometry) {
	        var points = graphicsData.points;
	        var verts = graphicsGeometry.verts;
	        var indices = graphicsGeometry.indices;
	        var vertPos = verts.length / 2;
	        var center = vertPos;
	        verts.push(graphicsData.shape.x, graphicsData.shape.y);
	        for (var i = 0; i < points.length; i += 2) {
	            verts.push(points[i], points[i + 1]);
	            indices.push(vertPos++, center, vertPos);
	        }
	    },
	};

	var buildRectangle = {
	    build: function (graphicsData) {
	        var rectData = graphicsData.shape;
	        var x = rectData.x;
	        var y = rectData.y;
	        var width = rectData.width;
	        var height = rectData.height;
	        var points = graphicsData.points;
	        points.length = 0;
	        points.push(x, y, x + width, y, x + width, y + height, x, y + height);
	    },
	    triangulate: function (graphicsData, graphics) {
	        var points = graphicsData.points;
	        var verts = graphics.verts;
	        var vertPos = verts.length / 2;
	        verts.push(points[0], points[1], points[2], points[3], points[6], points[7], points[4], points[5]);
	        graphics.indices.push(vertPos, vertPos + 1, vertPos + 2, vertPos + 1, vertPos + 2, vertPos + 3);
	    },
	};

	var buildRoundedRectangle = {
	    build: function (graphicsData) {
	        var rrectData = graphicsData.shape;
	        var points = graphicsData.points;
	        var x = rrectData.x;
	        var y = rrectData.y;
	        var width = rrectData.width;
	        var height = rrectData.height;
	        var radius = rrectData.radius;
	        points.length = 0;
	        points.push(x, y + radius);
	        quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height, points);
	        quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius, points);
	        quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y, points);
	        quadraticBezierCurve(x + radius, y, x, y, x, y + radius + 0.0000000001, points);
	    },
	    triangulate: function (graphicsData, graphicsGeometry) {
	        var points = graphicsData.points;
	        var verts = graphicsGeometry.verts;
	        var indices = graphicsGeometry.indices;
	        var vecPos = verts.length / 2;
	        var triangles = earcut(points, null, 2);
	        for (var i = 0, j = triangles.length; i < j; i += 3) {
	            indices.push(triangles[i] + vecPos);
	            indices.push(triangles[i + 1] + vecPos);
	            indices.push(triangles[i + 2] + vecPos);
	        }
	        for (var i = 0, j = points.length; i < j; i++) {
	            verts.push(points[i], points[++i]);
	        }
	    },
	};
	function getPt(n1, n2, perc) {
	    var diff = n2 - n1;
	    return n1 + (diff * perc);
	}
	function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY, out) {
	    if (out === void 0) { out = []; }
	    var n = 20;
	    var points = out;
	    var xa = 0;
	    var ya = 0;
	    var xb = 0;
	    var yb = 0;
	    var x = 0;
	    var y = 0;
	    for (var i = 0, j = 0; i <= n; ++i) {
	        j = i / n;
	        xa = getPt(fromX, cpX, j);
	        ya = getPt(fromY, cpY, j);
	        xb = getPt(cpX, toX, j);
	        yb = getPt(cpY, toY, j);
	        x = getPt(xa, xb, j);
	        y = getPt(ya, yb, j);
	        points.push(x, y);
	    }
	    return points;
	}

	function buildLine (graphicsData, graphicsGeometry) {
	    buildLine$1(graphicsData, graphicsGeometry);
	}
	function buildLine$1(graphicsData, graphicsGeometry) {
	    var shape = graphicsData.shape;
	    var points = graphicsData.points || shape.points.slice();
	    if (points.length === 0) {
	        return;
	    }
	    var style = graphicsData.lineStyle;
	    var firstPoint = new Point(points[0], points[1]);
	    var lastPoint = new Point(points[points.length - 2], points[points.length - 1]);
	    var closedShape = shape.type !== exports.SHAPES.POLY;
	    var closedPath = firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y;
	    if (closedPath || closedShape) {
	        points = points.slice();
	        if (closedPath) {
	            points.pop();
	            points.pop();
	            lastPoint.set(points[points.length - 2], points[points.length - 1]);
	        }
	        var midPointX = lastPoint.x + ((firstPoint.x - lastPoint.x) * 0.5);
	        var midPointY = lastPoint.y + ((firstPoint.y - lastPoint.y) * 0.5);
	        points.unshift(midPointX, midPointY);
	        points.push(midPointX, midPointY);
	    }
	    var verts = graphicsGeometry.verts;
	    var length = points.length / 2;
	    var indexCount = points.length;
	    var indexStart = verts.length / 2;
	    var width = style.width / 2;
	    var p1x = points[0];
	    var p1y = points[1];
	    var p2x = points[2];
	    var p2y = points[3];
	    var p3x = 0;
	    var p3y = 0;
	    var perpx = -(p1y - p2y);
	    var perpy = p1x - p2x;
	    var perp2x = 0;
	    var perp2y = 0;
	    var perp3x = 0;
	    var perp3y = 0;
	    var dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
	    perpx /= dist;
	    perpy /= dist;
	    perpx *= width;
	    perpy *= width;
	    var ratio = style.alignment;
	    var r1 = (1 - ratio) * 2;
	    var r2 = ratio * 2;
	    verts.push(p1x - (perpx * r1), p1y - (perpy * r1));
	    verts.push(p1x + (perpx * r2), p1y + (perpy * r2));
	    for (var i = 1; i < length - 1; ++i) {
	        p1x = points[(i - 1) * 2];
	        p1y = points[((i - 1) * 2) + 1];
	        p2x = points[i * 2];
	        p2y = points[(i * 2) + 1];
	        p3x = points[(i + 1) * 2];
	        p3y = points[((i + 1) * 2) + 1];
	        perpx = -(p1y - p2y);
	        perpy = p1x - p2x;
	        dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
	        perpx /= dist;
	        perpy /= dist;
	        perpx *= width;
	        perpy *= width;
	        perp2x = -(p2y - p3y);
	        perp2y = p2x - p3x;
	        dist = Math.sqrt((perp2x * perp2x) + (perp2y * perp2y));
	        perp2x /= dist;
	        perp2y /= dist;
	        perp2x *= width;
	        perp2y *= width;
	        var a1 = (-perpy + p1y) - (-perpy + p2y);
	        var b1 = (-perpx + p2x) - (-perpx + p1x);
	        var c1 = ((-perpx + p1x) * (-perpy + p2y)) - ((-perpx + p2x) * (-perpy + p1y));
	        var a2 = (-perp2y + p3y) - (-perp2y + p2y);
	        var b2 = (-perp2x + p2x) - (-perp2x + p3x);
	        var c2 = ((-perp2x + p3x) * (-perp2y + p2y)) - ((-perp2x + p2x) * (-perp2y + p3y));
	        var denom = (a1 * b2) - (a2 * b1);
	        if (Math.abs(denom) < 0.1) {
	            denom += 10.1;
	            verts.push(p2x - (perpx * r1), p2y - (perpy * r1));
	            verts.push(p2x + (perpx * r2), p2y + (perpy * r2));
	            continue;
	        }
	        var px = ((b1 * c2) - (b2 * c1)) / denom;
	        var py = ((a2 * c1) - (a1 * c2)) / denom;
	        var pdist = ((px - p2x) * (px - p2x)) + ((py - p2y) * (py - p2y));
	        if (pdist > (196 * width * width)) {
	            perp3x = perpx - perp2x;
	            perp3y = perpy - perp2y;
	            dist = Math.sqrt((perp3x * perp3x) + (perp3y * perp3y));
	            perp3x /= dist;
	            perp3y /= dist;
	            perp3x *= width;
	            perp3y *= width;
	            verts.push(p2x - (perp3x * r1), p2y - (perp3y * r1));
	            verts.push(p2x + (perp3x * r2), p2y + (perp3y * r2));
	            verts.push(p2x - (perp3x * r2 * r1), p2y - (perp3y * r1));
	            indexCount++;
	        }
	        else {
	            verts.push(p2x + ((px - p2x) * r1), p2y + ((py - p2y) * r1));
	            verts.push(p2x - ((px - p2x) * r2), p2y - ((py - p2y) * r2));
	        }
	    }
	    p1x = points[(length - 2) * 2];
	    p1y = points[((length - 2) * 2) + 1];
	    p2x = points[(length - 1) * 2];
	    p2y = points[((length - 1) * 2) + 1];
	    perpx = -(p1y - p2y);
	    perpy = p1x - p2x;
	    dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
	    perpx /= dist;
	    perpy /= dist;
	    perpx *= width;
	    perpy *= width;
	    verts.push(p2x - (perpx * r1), p2y - (perpy * r1));
	    verts.push(p2x + (perpx * r2), p2y + (perpy * r2));
	    var indices = graphicsGeometry.indices;
	    for (var i = 0; i < indexCount - 2; ++i) {
	        indices.push(indexStart, indexStart + 1, indexStart + 2);
	        indexStart++;
	    }
	}

	var FillStyle = (function () {
	    function FillStyle() {
	        this.reset();
	    }
	    FillStyle.prototype.clone = function () {
	        var obj = new FillStyle();
	        obj.color = this.color;
	        obj.alpha = this.alpha;
	        obj.texture = this.texture;
	        obj.matrix = this.matrix;
	        obj.visible = this.visible;
	        obj.alphaBlock = this.alphaBlock;
	        return obj;
	    };
	    FillStyle.prototype.reset = function () {
	        this.color = 0xFFFFFF;
	        this.alpha = 1;
	        this.texture = Texture.WHITE;
	        this.matrix = null;
	        this.visible = false;
	        this.alphaBlock = false;
	    };
	    FillStyle.prototype.destroy = function () {
	        this.texture = null;
	        this.matrix = null;
	    };
	    return FillStyle;
	}());

	var LineStyle = (function (_super) {
	    tslib_1.__extends(LineStyle, _super);
	    function LineStyle() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    LineStyle.prototype.clone = function () {
	        var obj = new LineStyle();
	        obj.color = this.color;
	        obj.alpha = this.alpha;
	        obj.texture = this.texture;
	        obj.matrix = this.matrix;
	        obj.visible = this.visible;
	        obj.width = this.width;
	        obj.alignment = this.alignment;
	        obj.native = this.native;
	        return obj;
	    };
	    LineStyle.prototype.reset = function () {
	        _super.prototype.reset.call(this);
	        this.color = 0x0;
	        this.width = 0;
	        this.alignment = 0.5;
	        this.native = false;
	    };
	    return LineStyle;
	}(FillStyle));

	function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, n, path) {
	    if (path === void 0) { path = []; }
	    var dt = 0;
	    var dt2 = 0;
	    var dt3 = 0;
	    var t2 = 0;
	    var t3 = 0;
	    path.push(fromX, fromY);
	    for (var i = 1, j = 0; i <= n; ++i) {
	        j = i / n;
	        dt = (1 - j);
	        dt2 = dt * dt;
	        dt3 = dt2 * dt;
	        t2 = j * j;
	        t3 = t2 * j;
	        path.push((dt3 * fromX) + (3 * dt2 * j * cpX) + (3 * dt * t2 * cpX2) + (t3 * toX), (dt3 * fromY) + (3 * dt2 * j * cpY) + (3 * dt * t2 * cpY2) + (t3 * toY));
	    }
	    return path;
	}

	var GRAPHICS_CURVES = {
	    adaptive: false,
	    maxLength: 10,
	    minSegments: 8,
	    maxSegments: 2048,
	    segmentsCount: function (length, defaultSegments) {
	        if (defaultSegments === void 0) { defaultSegments = 20; }
	        if (!this.adaptive)
	            return defaultSegments;
	        var result = Math.ceil(length / this.maxLength);
	        if (result < this.minSegments) {
	            result = this.minSegments;
	        }
	        else if (result > this.maxSegments) {
	            result = this.maxSegments;
	        }
	        return result;
	    }
	};
	function quadraticCurveLength(fromX, fromY, cpX, cpY, toX, toY) {
	    var ax = fromX - ((2.0 * cpX) + toX);
	    var ay = fromY - ((2.0 * cpY) + toY);
	    var bx = 2.0 * ((cpX - 2.0) * fromX);
	    var by = 2.0 * ((cpY - 2.0) * fromY);
	    var a = 4.0 * ((ax * ax) + (ay * ay));
	    var b = 4.0 * ((ax * bx) + (ay * by));
	    var c = (bx * bx) + (by * by);
	    var s = 2.0 * Math.sqrt(a + b + c);
	    var a2 = Math.sqrt(a);
	    var a32 = 2.0 * a * a2;
	    var c2 = 2.0 * Math.sqrt(c);
	    var ba = b / a2;
	    return ((a32 * s)
	        + (a2 * b * (s - c2))
	        + (((4.0 * c * a) - (b * b))
	            * Math.log(((2.0 * a2) + ba + s) / (ba + c2))))
	        / (4.0 * a32);
	}
	function bezierCurveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
	    var n = 10;
	    var result = 0.0;
	    var t = 0.0;
	    var t2 = 0.0;
	    var t3 = 0.0;
	    var nt = 0.0;
	    var nt2 = 0.0;
	    var nt3 = 0.0;
	    var x = 0.0;
	    var y = 0.0;
	    var dx = 0.0;
	    var dy = 0.0;
	    var prevX = fromX;
	    var prevY = fromY;
	    for (var i = 1; i <= n; ++i) {
	        t = i / n;
	        t2 = t * t;
	        t3 = t2 * t;
	        nt = (1.0 - t);
	        nt2 = nt * nt;
	        nt3 = nt2 * nt;
	        x = (nt3 * fromX) + (3.0 * nt2 * t * cpX) + (3.0 * nt * t2 * cpX2) + (t3 * toX);
	        y = (nt3 * fromY) + (3.0 * nt2 * t * cpY) + (3 * nt * t2 * cpY2) + (t3 * toY);
	        dx = prevX - x;
	        dy = prevY - y;
	        prevX = x;
	        prevY = y;
	        result += Math.sqrt((dx * dx) + (dy * dy));
	    }
	    return result;
	}

	var canvasRenderer;
	var tempMatrix$2 = new Matrix();
	var tempPoint = new Point();
	var temp = new Float32Array(3);
	var GEOBATCH_POOL = [];
	var fillCommands = {};
	fillCommands[exports.SHAPES.POLY] = buildPoly;
	fillCommands[exports.SHAPES.CIRC] = buildCircle;
	fillCommands[exports.SHAPES.ELIP] = buildCircle;
	fillCommands[exports.SHAPES.RECT] = buildRectangle;
	fillCommands[exports.SHAPES.RREC] = buildRoundedRectangle;
	var Graphics = (function (_super) {
	    tslib_1.__extends(Graphics, _super);
	    function Graphics() {
	        var _this = _super.call(this) || this;
	        _this.batchTint = -1;
	        _this.hitTestByPixel = true;
	        _this.cacheAsBitmap = true;
	        _this._instanceType = "Graphics";
	        _this._fillStyle = new FillStyle();
	        _this._lineStyle = new LineStyle();
	        _this.tint = 0xFFFFFF;
	        _this.batchTint = -1;
	        _this._matrix = null;
	        _this._holeMode = false;
	        _this._currentPath = null;
	        _this.graphicsData = [];
	        _this.isUsedToMask = false;
	        _this.boundsPadding = 0;
	        _this.dirty = 0;
	        _this.boundsDirty = -1;
	        _this.cacheDirty = -1;
	        _this.verts = [];
	        _this.indices = [];
	        _this.batches = [];
	        _this.geoBatches = [];
	        _this.uvs = [];
	        _this.batchDirty = -1;
	        _this.shapeIndex = 0;
	        _this.vertexData = null;
	        _this._transformID = -1;
	        return _this;
	    }
	    Object.defineProperty(Graphics.prototype, "fill", {
	        get: function () {
	            return this._fillStyle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Graphics.prototype, "line", {
	        get: function () {
	            return this._lineStyle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Graphics.prototype, "tint", {
	        get: function () {
	            return this._tint;
	        },
	        set: function (value) {
	            this._tint = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Graphics.prototype, "matrix", {
	        get: function () {
	            return this._matrix;
	        },
	        set: function (matrix) {
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Graphics.prototype.cloneSelf = function () {
	        var clone = new Graphics();
	        clone.renderable = this.renderable;
	        clone._fillStyle = this._fillStyle;
	        clone._lineStyle = this._lineStyle;
	        clone.isUsedToMask = this.isUsedToMask;
	        clone.boundsPadding = this.boundsPadding;
	        clone.dirty = 0;
	        for (var i = 0; i < this.graphicsData.length; ++i) {
	            clone.graphicsData.push(this.graphicsData[i].clone());
	        }
	        clone._currentPath = null;
	        clone.updateLocalBoundsSelf();
	        return clone;
	    };
	    Graphics.prototype.lineStyle = function (lineWidth, color, alpha, alignment, native) {
	        if (lineWidth === void 0) { lineWidth = 0; }
	        if (color === void 0) { color = 0; }
	        if (alpha === void 0) { alpha = 1; }
	        if (alignment === void 0) { alignment = 0.5; }
	        if (native === void 0) { native = false; }
	        this.lineTextureStyle(lineWidth, Texture.WHITE, color, alpha, null, alignment, native);
	        return this;
	    };
	    Graphics.prototype.lineTextureStyle = function (width, texture, color, alpha, matrix, alignment, native) {
	        if (width === void 0) { width = 0; }
	        if (texture === void 0) { texture = Texture.WHITE; }
	        if (color === void 0) { color = 0xFFFFFF; }
	        if (alpha === void 0) { alpha = 1; }
	        if (matrix === void 0) { matrix = null; }
	        if (alignment === void 0) { alignment = 0.5; }
	        if (native === void 0) { native = false; }
	        if (this._currentPath)
	            this.startPoly();
	        var visible = width > 0 && alpha > 0;
	        if (!visible) {
	            this._lineStyle.reset();
	        }
	        else {
	            if (matrix) {
	                matrix = matrix.clone();
	                matrix.invert();
	            }
	            this._lineStyle.color = color;
	            this._lineStyle.width = width;
	            this._lineStyle.alpha = alpha;
	            this._lineStyle.matrix = matrix;
	            this._lineStyle.texture = texture;
	            this._lineStyle.alignment = alignment;
	            this._lineStyle.native = native;
	            this._lineStyle.visible = visible;
	        }
	        return this;
	    };
	    Graphics.prototype.startPoly = function () {
	        if (this._currentPath) {
	            var points = this._currentPath.points;
	            var len = this._currentPath.points.length;
	            if (len > 2) {
	                this.drawShape(this._currentPath);
	                this._currentPath = new Polygon();
	                this._currentPath.closed = false;
	                this._currentPath.points.push(points[len - 2], points[len - 1]);
	            }
	        }
	        else {
	            this._currentPath = new Polygon();
	            this._currentPath.closed = false;
	        }
	    };
	    Graphics.prototype.finishPoly = function () {
	        if (this._currentPath) {
	            if (this._currentPath.points.length > 2) {
	                this.drawShape(this._currentPath);
	                this._currentPath = null;
	            }
	            else {
	                this._currentPath.points.length = 0;
	            }
	        }
	    };
	    Graphics.prototype.moveTo = function (x, y) {
	        this.startPoly();
	        this._currentPath.points[0] = x;
	        this._currentPath.points[1] = y;
	        return this;
	    };
	    Graphics.prototype.lineTo = function (x, y) {
	        if (!this._currentPath)
	            this.moveTo(0, 0);
	        var points = this._currentPath.points;
	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];
	        if (fromX !== x || fromY !== y) {
	            points.push(x, y);
	        }
	        return this;
	    };
	    Graphics.prototype._initCurve = function (x, y) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        if (this._currentPath) {
	            if (this._currentPath.points.length === 0) {
	                this._currentPath.points = [x, y];
	            }
	        }
	        else {
	            this.moveTo(x, y);
	        }
	    };
	    Graphics.prototype.quadraticCurveTo = function (cpX, cpY, toX, toY) {
	        this._initCurve();
	        var points = this._currentPath.points;
	        if (points.length === 0) {
	            this.moveTo(0, 0);
	        }
	        var xa = 0;
	        var ya = 0;
	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];
	        var n = GRAPHICS_CURVES.segmentsCount(quadraticCurveLength(fromX, fromY, cpX, cpY, toX, toY));
	        for (var i = 1; i <= n; ++i) {
	            var j = i / n;
	            xa = fromX + ((cpX - fromX) * j);
	            ya = fromY + ((cpY - fromY) * j);
	            points.push(xa + (((cpX + ((toX - cpX) * j)) - xa) * j), ya + (((cpY + ((toY - cpY) * j)) - ya) * j));
	        }
	        return this;
	    };
	    Graphics.prototype.bezierCurveTo = function (cpX, cpY, cpX2, cpY2, toX, toY) {
	        this._initCurve();
	        var points = this._currentPath.points;
	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];
	        points.length -= 2;
	        var n = GRAPHICS_CURVES.segmentsCount(bezierCurveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY));
	        bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, n, points);
	        return this;
	    };
	    Graphics.prototype.arcTo = function (x1, y1, x2, y2, radius) {
	        this._initCurve(x1, y1);
	        var points = this._currentPath.points;
	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];
	        var a1 = fromY - y1;
	        var b1 = fromX - x1;
	        var a2 = y2 - y1;
	        var b2 = x2 - x1;
	        var mm = Math.abs((a1 * b2) - (b1 * a2));
	        if (mm < 1.0e-8 || radius === 0) {
	            if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
	                points.push(x1, y1);
	            }
	        }
	        else {
	            var dd = (a1 * a1) + (b1 * b1);
	            var cc = (a2 * a2) + (b2 * b2);
	            var tt = (a1 * a2) + (b1 * b2);
	            var k1 = radius * Math.sqrt(dd) / mm;
	            var k2 = radius * Math.sqrt(cc) / mm;
	            var j1 = k1 * tt / dd;
	            var j2 = k2 * tt / cc;
	            var cx = (k1 * b2) + (k2 * b1);
	            var cy = (k1 * a2) + (k2 * a1);
	            var px = b1 * (k2 + j1);
	            var py = a1 * (k2 + j1);
	            var qx = b2 * (k1 + j2);
	            var qy = a2 * (k1 + j2);
	            var startAngle = Math.atan2(py - cy, px - cx);
	            var endAngle = Math.atan2(qy - cy, qx - cx);
	            this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
	        }
	        return this;
	    };
	    Graphics.prototype.arc = function (cx, cy, radius, startAngle, endAngle, anticlockwise) {
	        if (anticlockwise === void 0) { anticlockwise = false; }
	        if (startAngle === endAngle) {
	            return this;
	        }
	        if (!anticlockwise && endAngle <= startAngle) {
	            endAngle += PI_2;
	        }
	        else if (anticlockwise && startAngle <= endAngle) {
	            startAngle += PI_2;
	        }
	        var sweep = endAngle - startAngle;
	        if (sweep === 0) {
	            return this;
	        }
	        var startX = cx + (Math.cos(startAngle) * radius);
	        var startY = cy + (Math.sin(startAngle) * radius);
	        var points = this._currentPath ? this._currentPath.points : null;
	        if (points) {
	            var xDiff = Math.abs(points[points.length - 2] - startX);
	            var yDiff = Math.abs(points[points.length - 1] - startY);
	            if (xDiff < 0.001 && yDiff < 0.001) ;
	            else {
	                points.push(startX, startY);
	            }
	        }
	        else {
	            this.moveTo(startX, startY);
	            points = this._currentPath.points;
	        }
	        var segs = GRAPHICS_CURVES.segmentsCount(Math.abs(sweep) * radius, Math.ceil(Math.abs(sweep) / PI_2) * 40);
	        var theta = sweep / (segs * 2);
	        var theta2 = theta * 2;
	        var cTheta = Math.cos(theta);
	        var sTheta = Math.sin(theta);
	        var segMinus = segs - 1;
	        var remainder = (segMinus % 1) / segMinus;
	        for (var i = 0; i <= segMinus; ++i) {
	            var real = i + (remainder * i);
	            var angle = ((theta) + startAngle + (theta2 * real));
	            var c = Math.cos(angle);
	            var s = -Math.sin(angle);
	            points.push((((cTheta * c) + (sTheta * s)) * radius) + cx, (((cTheta * -s) + (sTheta * c)) * radius) + cy);
	        }
	        return this;
	    };
	    Graphics.prototype.beginFill = function (color, alpha) {
	        if (color === void 0) { color = 0; }
	        if (alpha === void 0) { alpha = 1; }
	        if (typeof (color) == "string")
	            color = string2hex(color);
	        return this.beginTextureFill(Texture.WHITE, color, alpha);
	    };
	    Graphics.prototype.beginTextureFill = function (texture, color, alpha, matrix) {
	        if (texture === void 0) { texture = Texture.WHITE; }
	        if (color === void 0) { color = 0xFFFFFF; }
	        if (alpha === void 0) { alpha = 1; }
	        if (matrix === void 0) { matrix = null; }
	        if (this._currentPath)
	            this.startPoly();
	        var visible = alpha > 0;
	        if (!visible) {
	            this._fillStyle.reset();
	            this._fillStyle.alphaBlock = true;
	        }
	        else {
	            this._fillStyle.color = color;
	            this._fillStyle.alpha = alpha;
	            this._fillStyle.texture = texture;
	            this._fillStyle.matrix = matrix;
	            this._fillStyle.visible = visible;
	        }
	        return this;
	    };
	    Graphics.prototype.endFill = function () {
	        this.finishPoly();
	        this._fillStyle.reset();
	        return this;
	    };
	    Graphics.prototype.closePath = function () {
	        var _currentPath = this._currentPath;
	        if (this._currentPath)
	            _currentPath.close();
	        return this;
	    };
	    Graphics.prototype.beginHole = function () {
	        this.finishPoly();
	        this._holeMode = true;
	        return this;
	    };
	    Graphics.prototype.endHole = function () {
	        this.finishPoly();
	        this._holeMode = false;
	        return this;
	    };
	    Graphics.prototype.drawRect = function (x, y, width, height) {
	        return this.drawShape(new Rectangle(x, y, width, height));
	    };
	    Graphics.prototype.drawRoundedRect = function (x, y, width, height, radius) {
	        return this.drawShape(new RoundedRectangle(x, y, width, height, radius));
	    };
	    Graphics.prototype.drawCircle = function (x, y, radius) {
	        return this.drawShape(new Circle(x, y, radius));
	    };
	    Graphics.prototype.drawEllipse = function (x, y, width, height) {
	        return this.drawShape(new Ellipse(x, y, width, height));
	    };
	    Graphics.prototype.drawPolygon = function (path) {
	        var points = path;
	        var closed = true;
	        if (points instanceof Polygon) {
	            closed = points.closed;
	            points = points.points;
	        }
	        if (!Array.isArray(points)) {
	            points = new Array(arguments.length);
	            for (var i = 0; i < points.length; ++i) {
	                points[i] = arguments[i];
	            }
	        }
	        var shape = new Polygon(points);
	        shape.closed = closed;
	        this.drawShape(shape);
	        return this;
	    };
	    Graphics.prototype.drawStar = function (x, y, points, radius, innerRadius, rotation) {
	        if (rotation === void 0) { rotation = 0; }
	        innerRadius = innerRadius || radius / 2;
	        var startAngle = (-1 * Math.PI / 2) + rotation;
	        var len = points * 2;
	        var delta = PI_2 / len;
	        var polygon = [];
	        for (var i = 0; i < len; i++) {
	            var r = i % 2 ? innerRadius : radius;
	            var angle = (i * delta) + startAngle;
	            polygon.push(x + (r * Math.cos(angle)), y + (r * Math.sin(angle)));
	        }
	        return this.drawPolygon(polygon);
	    };
	    Graphics.prototype.drawShape = function (shape) {
	        if (!this._holeMode) {
	            var data = new GraphicsData(shape, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix);
	            this.graphicsData.push(data);
	            this.dirty++;
	        }
	        else {
	            if (!this.graphicsData.length)
	                return this;
	            var data = new GraphicsData(shape, null, null, this._matrix);
	            var lastShape = this.graphicsData[this.graphicsData.length - 1];
	            lastShape.holes.push(data);
	            this.dirty++;
	        }
	        return this;
	    };
	    Graphics.prototype.clear = function () {
	        if (this.graphicsData.length > 0) {
	            this.boundsDirty = -1;
	            this.dirty++;
	            this.graphicsData.length = 0;
	            this.verts.length = 0;
	            this.uvs.length = 0;
	            this.indices.length = 0;
	            this.shapeIndex = 0;
	            for (var i = 0; i < this.geoBatches.length; i++) {
	                var batch = this.geoBatches[i];
	                batch.start = 0;
	                batch.attribStart = 0;
	                batch.style = null;
	                GEOBATCH_POOL.push(batch);
	            }
	            this.geoBatches.length = 0;
	            this.batches.length = 0;
	        }
	        this._currentPath = null;
	        this._matrix = null;
	        this._holeMode = false;
	        this._currentPath = null;
	        return this;
	    };
	    Graphics.prototype.isFastRect = function () {
	        return false;
	    };
	    Graphics.prototype._renderWebGL = function (renderer) {
	        this.finishPoly();
	        this.updateBatch();
	        renderer.batchManager.setObjectRenderer(renderer.plugins["batch"]);
	        if (this.batches.length) {
	            this.calculateVertices();
	            this.calculateTints();
	            for (var i = 0; i < this.batches.length; i++) {
	                var batch = this.batches[i];
	                batch.worldAlpha = this.worldAlpha * batch.graAlpha;
	                renderer.plugins["batch"].render(batch);
	            }
	        }
	    };
	    Graphics.prototype.updateBatch = function () {
	        if (this.batchDirty === this.dirty)
	            return;
	        if (this.graphicsData.length === 0)
	            return;
	        this.batchDirty = this.dirty;
	        var uvs = this.uvs;
	        var batchPart;
	        batchPart = this.geoBatches.pop();
	        if (!batchPart) {
	            batchPart = GEOBATCH_POOL.pop() || new geoBatchPart();
	            batchPart.style = batchPart.style ||
	                this.graphicsData[0].fillStyle ||
	                this.graphicsData[0].lineStyle;
	        }
	        var currentTexture = batchPart.style.texture.baseTexture;
	        var currentColor = batchPart.style.color + batchPart.style.alpha;
	        this.geoBatches.push(batchPart);
	        for (var i = this.shapeIndex; i < this.graphicsData.length; i++) {
	            this.shapeIndex++;
	            var data = this.graphicsData[i];
	            var command = fillCommands[data.type];
	            var fillStyle = data.fillStyle;
	            var lineStyle = data.lineStyle;
	            command.build(data);
	            if (data.matrix)
	                this.transformPoints(data.points, data.matrix);
	            for (var j = 0; j < 2; j++) {
	                var style = (j === 0) ? fillStyle : lineStyle;
	                if (!style.visible)
	                    continue;
	                var nextTexture = style.texture.baseTexture;
	                if (currentTexture !== nextTexture || (style.color + style.alpha) !== currentColor) {
	                    nextTexture.wrapMode = exports.WRAP_MODES.REPEAT;
	                    currentTexture = nextTexture;
	                    currentColor = style.color + style.alpha;
	                    var index_1 = this.indices.length;
	                    var attribIndex = this.verts.length / 2;
	                    batchPart.size = index_1 - batchPart.start;
	                    batchPart.attribSize = attribIndex - batchPart.attribStart;
	                    if (batchPart.size > 0) {
	                        batchPart = GEOBATCH_POOL.pop() || new geoBatchPart();
	                        this.geoBatches.push(batchPart);
	                    }
	                    batchPart.style = style;
	                    batchPart.start = index_1;
	                    batchPart.attribStart = attribIndex;
	                }
	                var start = this.verts.length / 2;
	                if (j === 0) {
	                    if (data.holes.length) {
	                        this.proccessHoles(data.holes);
	                        buildPoly.triangulate(data, this);
	                    }
	                    else {
	                        command.triangulate(data, this);
	                    }
	                }
	                else {
	                    buildLine(data, this);
	                }
	                var size = (this.verts.length / 2) - start;
	                this.addUvs(this.verts, uvs, style.texture, start, size, style.matrix);
	            }
	        }
	        var index = this.indices.length;
	        var attrib = this.verts.length / 2;
	        batchPart.size = index - batchPart.start;
	        batchPart.attribSize = attrib - batchPart.attribStart;
	        var indicesUint16 = new Uint16Array(this.indices);
	        var uvsFloat32 = new Float32Array(this.uvs);
	        for (var i_1 = 0; i_1 < this.geoBatches.length; i_1++) {
	            var batch = this.geoBatches[i_1];
	            for (var j = 0; j < batch.size; j++) {
	                var index_2 = batch.start + j;
	                indicesUint16[index_2] = indicesUint16[index_2] - batch.attribStart;
	            }
	        }
	        this._transformID = -1;
	        this.batchTint = -1;
	        this.batches = [];
	        this.vertexData = new Float32Array(this.verts);
	        for (var i_2 = 0; i_2 < this.geoBatches.length; i_2++) {
	            var gI = this.geoBatches[i_2];
	            var color = gI.style.color;
	            var vertexData = new Float32Array(this.vertexData.buffer, gI.attribStart * 4 * 2, gI.attribSize * 2);
	            var uvs_1 = new Float32Array(uvsFloat32.buffer, gI.attribStart * 4 * 2, gI.attribSize * 2);
	            var indices = new Uint16Array(indicesUint16.buffer, gI.start * 2, gI.size);
	            var batch = {
	                vertexData: vertexData,
	                indices: indices,
	                uvs: uvs_1,
	                _batchRGB: hex2rgb(color),
	                _tintRGB: color,
	                _texture: gI.style.texture,
	                graAlpha: gI.style.alpha,
	                worldAlpha: 1
	            };
	            this.batches[i_2] = batch;
	        }
	    };
	    Graphics.prototype.calculateTints = function () {
	        if (this.batchTint !== this.tint) {
	            this.batchTint = this.tint;
	            var tintRGB = hex2rgb(this.tint, temp);
	            for (var i = 0; i < this.batches.length; i++) {
	                var batch = this.batches[i];
	                var batchTint = batch._batchRGB;
	                var r = (tintRGB[0] * batchTint[0]) * 255;
	                var g = (tintRGB[1] * batchTint[1]) * 255;
	                var b = (tintRGB[2] * batchTint[2]) * 255;
	                var color = (r << 16) + (g << 8) + (b | 0);
	                batch._tintRGB = (color >> 16)
	                    + (color & 0xff00)
	                    + ((color & 0xff) << 16);
	            }
	        }
	    };
	    Graphics.prototype.calculateVertices = function () {
	        if (this._transformID === this.transform._worldID) {
	            return;
	        }
	        this._transformID = this.transform._worldID;
	        var wt = this.transform.worldMatrix;
	        var a = wt.a;
	        var b = wt.b;
	        var c = wt.c;
	        var d = wt.d;
	        var tx = wt.tx;
	        var ty = wt.ty;
	        var data = this.verts;
	        var vertexData = this.vertexData;
	        var count = 0;
	        for (var i = 0; i < data.length; i += 2) {
	            var x = data[i];
	            var y = data[i + 1];
	            vertexData[count++] = (a * x) + (c * y) + tx;
	            vertexData[count++] = (d * y) + (b * x) + ty;
	        }
	    };
	    Graphics.prototype.transformPoints = function (points, matrix) {
	        for (var i = 0; i < points.length / 2; i++) {
	            var x = points[(i * 2)];
	            var y = points[(i * 2) + 1];
	            points[(i * 2)] = (matrix.a * x) + (matrix.c * y) + matrix.tx;
	            points[(i * 2) + 1] = (matrix.b * x) + (matrix.d * y) + matrix.ty;
	        }
	    };
	    Graphics.prototype._renderCanvas = function (renderer) {
	        if (this.cacheAsBitmap) {
	            if (this.cacheDirty != this.dirty) {
	                this.cacheDirty = this.dirty;
	                var tempMask = this.mask;
	                this.mask = null;
	                this.cacheAsBitmap = false;
	                var tempAlpha = this.alpha;
	                this.alpha = 1;
	                this.generateCanvasTexture();
	                this.mask = tempMask;
	                this.alpha = tempAlpha;
	                this.cacheAsBitmap = true;
	                this.updateTransform();
	            }
	            renderer.plugins.sprite.render(this);
	        }
	        else {
	            renderer.plugins.graphics.render(this);
	        }
	    };
	    Graphics.prototype._calculateBounds = function () {
	        this.updateLocalBoundsSelf();
	        var rect = this._localBoundsSelf;
	        var matrix = this.transform.worldMatrix;
	        matrix.transformPoint(rect.x, rect.y, DisplayObject._p1);
	        matrix.transformPoint(rect.x + rect.width, rect.y, DisplayObject._p2);
	        matrix.transformPoint(rect.x + rect.width, rect.y + rect.height, DisplayObject._p3);
	        matrix.transformPoint(rect.x, rect.y + rect.height, DisplayObject._p4);
	        Rectangle.createFromPoints(this._bounds, DisplayObject._p1, DisplayObject._p2, DisplayObject._p3, DisplayObject._p4);
	    };
	    Graphics.prototype.hitTestPoint = function (point, isMouseEvent) {
	        if (isMouseEvent === void 0) { isMouseEvent = false; }
	        var hitDisplayObject;
	        hitDisplayObject = _super.prototype.hitTestPoint.call(this, point, isMouseEvent);
	        if (hitDisplayObject)
	            return hitDisplayObject;
	        if (isMouseEvent && !this.mouseEnabled)
	            return null;
	        this.updateLocalBoundsSelf();
	        hitDisplayObject = this.displayObjectHitTestPoint(point, isMouseEvent);
	        if (hitDisplayObject) {
	            if (!this.hitTestByPixel)
	                return hitDisplayObject;
	            return this.hitTestPointAccuratly(point);
	        }
	        return null;
	    };
	    Graphics.prototype.hitTestPointAccuratly = function (point) {
	        var s = this;
	        this.worldMatrix.transformPointInverse(point.x, point.y, tempPoint);
	        var graphicsData = this.graphicsData;
	        for (var i = 0; i < graphicsData.length; ++i) {
	            var data = graphicsData[i];
	            if (!data.fillStyle.visible && !data.fillStyle.alphaBlock)
	                continue;
	            if (data.shape) {
	                if (data.shape.isPointIn(tempPoint)) {
	                    if (data.holes) {
	                        for (var i_3 = 0; i_3 < data.holes.length; i_3++) {
	                            var hole = data.holes[i_3].shape;
	                            if (hole.isPointIn(tempPoint)) {
	                                return null;
	                            }
	                        }
	                    }
	                    return s;
	                }
	            }
	        }
	        return null;
	    };
	    Graphics.prototype.updateLocalBoundsSelf = function () {
	        if (this.boundsDirty == this.dirty)
	            return;
	        this.boundsDirty = this.dirty;
	        var minX = Infinity;
	        var maxX = -Infinity;
	        var minY = Infinity;
	        var maxY = -Infinity;
	        if (this.graphicsData.length) {
	            var shape = void 0;
	            var x = 0;
	            var y = 0;
	            var w = 0;
	            var h = 0;
	            for (var i = 0; i < this.graphicsData.length; i++) {
	                var data = this.graphicsData[i];
	                var type = data.type;
	                var lineStyle = data.lineStyle;
	                var nextMatrix = data.matrix || Matrix.IDENTITY;
	                var lineWidth = 0.0;
	                if (lineStyle && lineStyle.visible) {
	                    var alignment = lineStyle.alignment;
	                    lineWidth = lineStyle.width;
	                    if (type === exports.SHAPES.POLY) {
	                        lineWidth = lineWidth * (0.5 + Math.abs(0.5 - alignment));
	                    }
	                    else {
	                        lineWidth = lineWidth * Math.max(0, alignment);
	                    }
	                }
	                shape = data.shape;
	                if (type === exports.SHAPES.RECT || type === exports.SHAPES.RREC) {
	                    x = shape.x - (lineWidth / 2);
	                    y = shape.y - (lineWidth / 2);
	                    w = shape.width + lineWidth;
	                    h = shape.height + lineWidth;
	                    minX = x < minX ? x : minX;
	                    maxX = x + w > maxX ? x + w : maxX;
	                    minY = y < minY ? y : minY;
	                    maxY = y + h > maxY ? y + h : maxY;
	                }
	                else if (type === exports.SHAPES.CIRC) {
	                    x = shape.x;
	                    y = shape.y;
	                    w = shape.radius + (lineWidth / 2);
	                    h = shape.radius + (lineWidth / 2);
	                    minX = x - w < minX ? x - w : minX;
	                    maxX = x + w > maxX ? x + w : maxX;
	                    minY = y - h < minY ? y - h : minY;
	                    maxY = y + h > maxY ? y + h : maxY;
	                }
	                else if (type === exports.SHAPES.ELIP) {
	                    x = shape.x;
	                    y = shape.y;
	                    w = shape.width + (lineWidth / 2);
	                    h = shape.height + (lineWidth / 2);
	                    minX = x - w < minX ? x - w : minX;
	                    maxX = x + w > maxX ? x + w : maxX;
	                    minY = y - h < minY ? y - h : minY;
	                    maxY = y + h > maxY ? y + h : maxY;
	                }
	                else {
	                    var points = shape.points;
	                    var x2 = 0;
	                    var y2 = 0;
	                    var dx = 0;
	                    var dy = 0;
	                    var rw = 0;
	                    var rh = 0;
	                    var cx = 0;
	                    var cy = 0;
	                    for (var j = 0; j + 2 < points.length; j += 2) {
	                        x = points[j];
	                        y = points[j + 1];
	                        x2 = points[j + 2];
	                        y2 = points[j + 3];
	                        dx = Math.abs(x2 - x);
	                        dy = Math.abs(y2 - y);
	                        h = lineWidth;
	                        w = Math.sqrt((dx * dx) + (dy * dy));
	                        if (w < 1e-9) {
	                            continue;
	                        }
	                        rw = ((h / w * dy) + dx) / 2;
	                        rh = ((h / w * dx) + dy) / 2;
	                        cx = (x2 + x) / 2;
	                        cy = (y2 + y) / 2;
	                        minX = cx - rw < minX ? cx - rw : minX;
	                        maxX = cx + rw > maxX ? cx + rw : maxX;
	                        minY = cy - rh < minY ? cy - rh : minY;
	                        maxY = cy + rh > maxY ? cy + rh : maxY;
	                    }
	                }
	            }
	        }
	        else {
	            minX = 0;
	            maxX = 0;
	            minY = 0;
	            maxY = 0;
	        }
	        var padding = this.boundsPadding;
	        this._localBoundsSelf.x = minX - padding;
	        this._localBoundsSelf.y = minY - padding;
	        this._localBoundsSelf.width = maxX - minX + padding * 2;
	        this._localBoundsSelf.height = maxY - minY + padding * 2;
	    };
	    Graphics.prototype.generateCanvasTexture = function (scaleMode) {
	        if (scaleMode === void 0) { scaleMode = exports.SCALE_MODES.LINEAR; }
	        this.updateLocalBoundsSelf();
	        var bounds = this._localBoundsSelf;
	        if (!this._canvasBuffer) {
	            this._canvasBuffer = RenderTexture.create(bounds.width, bounds.height, scaleMode);
	        }
	        else {
	            this._canvasBuffer.resize(bounds.width, bounds.height);
	        }
	        if (!canvasRenderer) {
	            canvasRenderer = new CanvasRenderer({});
	        }
	        this.transform.updateLocalMatrix();
	        tempMatrix$2.copy(this.transform.localMatrix);
	        tempMatrix$2.invert();
	        tempMatrix$2.tx -= bounds.x;
	        tempMatrix$2.ty -= bounds.y;
	        canvasRenderer.render(this, this._canvasBuffer, tempMatrix$2);
	        if (!this._texture) {
	            this._texture = Texture.fromCanvas(this._canvasBuffer.baseTexture["_canvasRenderTarget"].canvas, scaleMode, 'graphics');
	            this._texture.baseTexture.update();
	        }
	        else {
	            this._texture.baseTexture.update();
	        }
	        this._texture.onBaseTextureUpdated({ target: this._texture.baseTexture });
	        this.offsetX = bounds.x;
	        this.offsetY = bounds.y;
	        return this._texture;
	    };
	    Graphics.prototype.destroy = function () {
	        _super.prototype.destroy.call(this);
	        for (var i = 0; i < this.graphicsData.length; ++i) {
	            this.graphicsData[i].destroy();
	        }
	        this._matrix = null;
	        this._currentPath = null;
	        this._lineStyle.destroy();
	        this._lineStyle = null;
	        this._fillStyle.destroy();
	        this._fillStyle = null;
	        this.vertexData = null;
	        this.geoBatches.length = 0;
	        this.geoBatches = null;
	        this.batches.length = 0;
	        this.batches = null;
	    };
	    Graphics.prototype.proccessHoles = function (holes) {
	        for (var i = 0; i < holes.length; i++) {
	            var hole = holes[i];
	            var command = fillCommands[hole.type];
	            command.build(hole);
	            if (hole.matrix)
	                this.transformPoints(hole.points, hole.matrix);
	        }
	    };
	    Graphics.prototype.addUvs = function (verts, uvs, texture, start, size, matrix) {
	        var index = 0;
	        var uvsStart = uvs.length;
	        var frame = texture.frame;
	        while (index < size) {
	            var x = verts[(start + index) * 2];
	            var y = verts[((start + index) * 2) + 1];
	            if (matrix) {
	                var nx = (matrix.a * x) + (matrix.c * y) + matrix.tx;
	                y = (matrix.b * x) + (matrix.d * y) + matrix.ty;
	                x = nx;
	            }
	            index++;
	            var frame_1 = texture.frame;
	            uvs.push(x / frame_1.width, y / frame_1.height);
	        }
	        var baseTexture = texture.baseTexture;
	        if (frame.width < baseTexture.width
	            || frame.height < baseTexture.height) {
	            this.adjustUvs(uvs, texture, uvsStart, size);
	        }
	    };
	    Graphics.prototype.adjustUvs = function (uvs, texture, start, size) {
	        var baseTexture = texture.baseTexture;
	        var eps = 1e-6;
	        var finish = start + (size * 2);
	        var frame = texture.frame;
	        var scaleX = frame.width / baseTexture.width;
	        var scaleY = frame.height / baseTexture.height;
	        var offsetX = frame.x / frame.width;
	        var offsetY = frame.y / frame.height;
	        var minX = Math.floor(uvs[start] + eps);
	        var minY = Math.floor(uvs[start + 1] + eps);
	        for (var i = start + 2; i < finish; i += 2) {
	            minX = Math.min(minX, Math.floor(uvs[i] + eps));
	            minY = Math.min(minY, Math.floor(uvs[i + 1] + eps));
	        }
	        offsetX -= minX;
	        offsetY -= minY;
	        for (var i = start; i < finish; i += 2) {
	            uvs[i] = (uvs[i] + offsetX) * scaleX;
	            uvs[i + 1] = (uvs[i + 1] + offsetY) * scaleY;
	        }
	    };
	    return Graphics;
	}(Container));
	var geoBatchPart = (function () {
	    function geoBatchPart() {
	        this.style = null;
	        this.size = 0;
	        this.start = 0;
	        this.attribStart = 0;
	        this.attribSize = 0;
	    }
	    return geoBatchPart;
	}());

	var Shape = (function (_super) {
	    tslib_1.__extends(Shape, _super);
	    function Shape() {
	        var _this = _super.call(this) || this;
	        _this._command = [];
	        _this.hitTestByPixel = true;
	        _this.beginRadialGradientFill = function (points, colors) {
	            this._fill(getGradientColor(points, colors));
	        };
	        _this._instanceType = "Shape";
	        var canvas = document.createElement('canvas');
	        canvas.width = 3;
	        canvas.height = 3;
	        var texture = Texture.fromCanvas(canvas, exports.SCALE_MODES.LINEAR, 'textCanvas');
	        texture.orig = new Rectangle();
	        _this.texture = texture;
	        Texture.addToCache(_this._texture, _this._texture.baseTexture.textureCacheIds[0]);
	        _this.canvas = canvas;
	        _this.context = canvas.getContext("2d");
	        _this.dirty = true;
	        return _this;
	    }
	    Shape.prototype.drawRoundRect = function (x, y, w, h, rTL, rTR, rBL, rBR) {
	        if (rTL === void 0) { rTL = 0; }
	        var max = (w < h ? w : h) / 2;
	        var mTL = 0, mTR = 0, mBR = 0, mBL = 0;
	        if (rTR != undefined)
	            rTR = rTL;
	        if (rBL != undefined)
	            rBL = rTL;
	        if (rBR != undefined)
	            rBR = rTL;
	        if (rTL < 0) {
	            rTL *= (mTL = -1);
	        }
	        if (rTL > max) {
	            rTL = max;
	        }
	        if (rTR < 0) {
	            rTR *= (mTR = -1);
	        }
	        if (rTR > max) {
	            rTR = max;
	        }
	        if (rBR < 0) {
	            rBR *= (mBR = -1);
	        }
	        if (rBR > max) {
	            rBR = max;
	        }
	        if (rBL < 0) {
	            rBL *= (mBL = -1);
	        }
	        if (rBL > max) {
	            rBL = max;
	        }
	        var c = this._command;
	        c[c.length] = [1, "moveTo", [x + w - rTR, y]];
	        c[c.length] = [1, "arcTo", [x + w + rTR * mTR, y - rTR * mTR, x + w, y + rTR, rTR]];
	        c[c.length] = [1, "lineTo", [x + w, y + h - rBR]];
	        c[c.length] = [1, "arcTo", [x + w + rBR * mBR, y + h + rBR * mBR, x + w - rBR, y + h, rBR]];
	        c[c.length] = [1, "lineTo", [x + rBL, y + h]];
	        c[c.length] = [1, "arcTo", [x - rBL * mBL, y + h + rBL * mBL, x, y + h - rBL, rBL]];
	        c[c.length] = [1, "lineTo", [x, y + rTL]];
	        c[c.length] = [1, "arcTo", [x - rTL * mTL, y - rTL * mTL, x + rTL, y, rTL]];
	        c[c.length] = [1, "closePath", []];
	    };
	    Shape.prototype.moveTo = function (x, y) {
	        this._command[this._command.length] = [1, "moveTo", [x, y]];
	    };
	    Shape.prototype.lineTo = function (x, y) {
	        this._command[this._command.length] = [1, "lineTo", [x, y]];
	    };
	    Shape.prototype.arcTo = function (x1, y1, x2, y2, radius) {
	        this._command[this._command.length] = [1, "arcTo", [x1, y1, x2, y2, radius]];
	    };
	    Shape.prototype.quadraticCurveTo = function (cpX, cpY, x, y) {
	        this._command[this._command.length] = [1, "quadraticCurveTo", [cpX, cpY, x, y]];
	    };
	    Shape.prototype.bezierCurveTo = function (cp1X, cp1Y, cp2X, cp2Y, x, y) {
	        this._command[this._command.length] = [1, "bezierCurveTo", [cp1X, cp1Y, cp2X, cp2Y, x, y]];
	    };
	    Shape.prototype.closePath = function () {
	        this._command[this._command.length] = [1, "closePath", []];
	    };
	    Shape.prototype.drawRect = function (x, y, w, h) {
	        var c = this._command;
	        c[c.length] = [1, "moveTo", [x, y]];
	        c[c.length] = [1, "lineTo", [x + w, y]];
	        c[c.length] = [1, "lineTo", [x + w, y + h]];
	        c[c.length] = [1, "lineTo", [x, y + h]];
	        c[c.length] = [1, "closePath", []];
	    };
	    Shape.prototype.arc = function (x, y, radius, startAngle, endAngle, counterclockwise) {
	        if (counterclockwise === void 0) { counterclockwise = false; }
	        this._command[this._command.length] = [1, "arc", [x, y, radius, startAngle, endAngle, counterclockwise]];
	    };
	    Shape.prototype.drawCircle = function (x, y, radius, counterclockwise) {
	        if (counterclockwise === void 0) { counterclockwise = false; }
	        this._command[this._command.length] = [1, "arc", [x, y, radius, 0, 2 * Math.PI, counterclockwise]];
	    };
	    Shape.prototype.drawEllipse = function (x, y, w, h) {
	        var k = 0.5522848;
	        var ox = (w / 2) * k;
	        var oy = (h / 2) * k;
	        var xe = x + w;
	        var ye = y + h;
	        var xm = x + w / 2;
	        var ym = y + h / 2;
	        var c = this._command;
	        c[c.length] = [1, "moveTo", [x, ym]];
	        c[c.length] = [1, "bezierCurveTo", [x, ym - oy, xm - ox, y, xm, y]];
	        c[c.length] = [1, "bezierCurveTo", [xm + ox, y, xe, ym - oy, xe, ym]];
	        c[c.length] = [1, "bezierCurveTo", [xe, ym + oy, xm + ox, ye, xm, ye]];
	        c[c.length] = [1, "bezierCurveTo", [xm - ox, ye, x, ym + oy, x, ym]];
	    };
	    Shape.prototype.clear = function () {
	        var s = this;
	        s._command = [];
	        s.dirty = true;
	    };
	    Shape.prototype.beginFill = function (color, alpha) {
	        if (alpha === void 0) { alpha = 1; }
	        var sColor = typeof color === 'string' ? color : getRGBA(hex2string(color), alpha);
	        this._fill(sColor);
	    };
	    Shape.prototype.beginLinearGradientFill = function (points, colors) {
	        this._fill(getGradientColor(points, colors));
	    };
	    Shape.prototype.beginBitmapFill = function (image, matrix) {
	        var s = this;
	        if (matrix) {
	            s._isBitmapFill = matrix;
	        }
	        s._fill(getCanvasBitmapStyle(image));
	    };
	    Shape.prototype._fill = function (fillStyle) {
	        var c = this._command;
	        c[c.length] = [0, "fillStyle", fillStyle];
	        c[c.length] = [1, "beginPath", []];
	        this.dirty = true;
	    };
	    Shape.prototype.beginStroke = function (color, lineWidth, cap, join, miter, alpha) {
	        if (lineWidth === void 0) { lineWidth = 1; }
	        if (cap === void 0) { cap = exports.LINE_CAP.BUTT; }
	        if (join === void 0) { join = exports.LINE_JOIN.MITER; }
	        if (miter === void 0) { miter = 0; }
	        if (alpha === void 0) { alpha = 1; }
	        var sColor = typeof color === 'string' ? color : getRGBA(hex2string(color), alpha);
	        this._stroke(sColor, lineWidth, cap, join, miter);
	    };
	    Shape.prototype.beginLinearGradientStroke = function (points, colors, lineWidth, cap, join, miter) {
	        if (lineWidth === void 0) { lineWidth = 1; }
	        if (cap === void 0) { cap = exports.LINE_CAP.BUTT; }
	        if (join === void 0) { join = exports.LINE_JOIN.MITER; }
	        if (miter === void 0) { miter = 10; }
	        this._stroke(getGradientColor(points, colors), lineWidth, cap, join, miter);
	    };
	    Shape.prototype.beginRadialGradientStroke = function (points, colors, lineWidth, cap, join, miter) {
	        if (lineWidth === void 0) { lineWidth = 1; }
	        if (cap === void 0) { cap = exports.LINE_CAP.BUTT; }
	        if (join === void 0) { join = exports.LINE_JOIN.MITER; }
	        if (miter === void 0) { miter = 10; }
	        this._stroke(getGradientColor(points, colors), lineWidth, cap, join, miter);
	    };
	    Shape.prototype.beginBitmapStroke = function (image, matrix, lineWidth, cap, join, miter) {
	        if (lineWidth === void 0) { lineWidth = 1; }
	        if (cap === void 0) { cap = exports.LINE_CAP.BUTT; }
	        if (join === void 0) { join = exports.LINE_JOIN.MITER; }
	        if (miter === void 0) { miter = 10; }
	        var s = this;
	        if (matrix) {
	            s._isBitmapStroke = matrix;
	        }
	        s._stroke(getCanvasBitmapStyle(image), lineWidth, cap, join, miter);
	    };
	    Shape.prototype._stroke = function (strokeStyle, width, cap, join, miter) {
	        var c = this._command;
	        c[c.length] = [0, "lineWidth", width];
	        c[c.length] = [0, "lineCap", cap];
	        c[c.length] = [0, "lineJoin", join];
	        c[c.length] = [0, "miterLimit", miter];
	        c[c.length] = [0, "strokeStyle", strokeStyle];
	        c[c.length] = [1, "beginPath", []];
	        this.dirty = true;
	    };
	    Shape.prototype.endFill = function () {
	        var s = this;
	        var c = s._command;
	        var m = s._isBitmapFill;
	        if (m) {
	            c[c.length] = [2, "setTransform", m];
	        }
	        c[c.length] = ([1, "fill", []]);
	        if (m) {
	            s._isBitmapFill = null;
	        }
	    };
	    Shape.prototype.endStroke = function () {
	        var s = this;
	        var c = s._command;
	        var m = s._isBitmapStroke;
	        if (m) {
	            c[c.length] = [2, "setTransform", m];
	        }
	        c[c.length] = ([1, "stroke", []]);
	        if (m) {
	            s._isBitmapStroke = null;
	        }
	    };
	    Shape.prototype.updateShape = function () {
	        var s = this;
	        if (!s.visible)
	            return;
	        if (!s.dirty)
	            return;
	        s.dirty = false;
	        var cLen = s._command.length;
	        var leftX;
	        var leftY;
	        var buttonRightX;
	        var buttonRightY;
	        var i;
	        var data;
	        var lastX = 0;
	        var lastY = 0;
	        var lineWidth = 0;
	        for (i = 0; i < cLen; i++) {
	            data = s._command[i];
	            if (data[0] == 1) {
	                if (data[1] == "moveTo" || data[1] == "lineTo" || data[1] == "arcTo" || data[1] == "bezierCurveTo") {
	                    if (leftX == undefined) {
	                        leftX = data[2][0];
	                    }
	                    if (leftY == undefined) {
	                        leftY = data[2][1];
	                    }
	                    if (buttonRightX == undefined) {
	                        buttonRightX = data[2][0];
	                    }
	                    if (buttonRightY == undefined) {
	                        buttonRightY = data[2][1];
	                    }
	                    if (data[1] == "bezierCurveTo") {
	                        leftX = Math.min(leftX, data[2][0], data[2][2], data[2][4]);
	                        leftY = Math.min(leftY, data[2][1], data[2][3], data[2][5]);
	                        buttonRightX = Math.max(buttonRightX, data[2][0], data[2][2], data[2][4]);
	                        buttonRightY = Math.max(buttonRightY, data[2][1], data[2][3], data[2][5]);
	                        lastX = data[2][4];
	                        lastY = data[2][5];
	                    }
	                    else {
	                        leftX = Math.min(leftX, data[2][0]);
	                        leftY = Math.min(leftY, data[2][1]);
	                        buttonRightX = Math.max(buttonRightX, data[2][0]);
	                        buttonRightY = Math.max(buttonRightY, data[2][1]);
	                        lastX = data[2][0];
	                        lastY = data[2][1];
	                    }
	                }
	                else if (data[1] == "quadraticCurveTo") {
	                    var mid1X = (lastX + data[2][0]) * 0.5;
	                    var mid1Y = (lastY + data[2][1]) * 0.5;
	                    var mid2X = (data[2][0] + data[2][2]) * 0.5;
	                    var mid2Y = (data[2][1] + data[2][3]) * 0.5;
	                    if (leftX == undefined) {
	                        leftX = mid1X;
	                    }
	                    if (leftY == undefined) {
	                        leftY = mid1Y;
	                    }
	                    if (buttonRightX == undefined) {
	                        buttonRightX = mid1X;
	                    }
	                    if (buttonRightY == undefined) {
	                        buttonRightY = mid1Y;
	                    }
	                    leftX = Math.min(leftX, mid1X, mid2X, data[2][2]);
	                    leftY = Math.min(leftY, mid1Y, mid2Y, data[2][3]);
	                    buttonRightX = Math.max(buttonRightX, mid1X, mid2X, data[2][2]);
	                    buttonRightY = Math.max(buttonRightY, mid1Y, mid2Y, data[2][3]);
	                    lastX = data[2][2];
	                    lastY = data[2][3];
	                }
	                else if (data[1] == "arc") {
	                    var yuanPointX = data[2][0];
	                    var yuanPointY = data[2][1];
	                    var radio = data[2][2];
	                    var yuanLeftX = yuanPointX - radio;
	                    var yuanLeftY = yuanPointY - radio;
	                    var yuanBRX = yuanPointX + radio;
	                    var yuanBRY = yuanPointY + radio;
	                    if (leftX == undefined) {
	                        leftX = yuanLeftX;
	                    }
	                    if (leftY == undefined) {
	                        leftY = yuanLeftY;
	                    }
	                    if (buttonRightX == undefined) {
	                        buttonRightX = yuanBRX;
	                    }
	                    if (buttonRightY == undefined) {
	                        buttonRightY = yuanBRY;
	                    }
	                    leftX = Math.min(leftX, yuanLeftX);
	                    leftY = Math.min(leftY, yuanLeftY);
	                    buttonRightX = Math.max(buttonRightX, yuanBRX);
	                    buttonRightY = Math.max(buttonRightY, yuanBRY);
	                }
	            }
	            else {
	                if (data[1] == "lineWidth") {
	                    if (lineWidth < data[2]) {
	                        lineWidth = data[2];
	                    }
	                }
	            }
	        }
	        if (leftX != undefined || lineWidth > 0) {
	            if (leftX == undefined) {
	                leftX = 0;
	                leftY = 0;
	            }
	            leftX -= lineWidth >> 1;
	            leftY -= lineWidth >> 1;
	            buttonRightX += lineWidth >> 1;
	            buttonRightY += lineWidth >> 1;
	            var w = buttonRightX - leftX;
	            var h = buttonRightY - leftY;
	            s.offsetX = leftX;
	            s.offsetY = leftY;
	            s._localBoundsSelf.x = leftX;
	            s._localBoundsSelf.y = leftY;
	            s._localBoundsSelf.width = w;
	            s._localBoundsSelf.height = h;
	            var _canvas = s.canvas;
	            var ctx = s.context;
	            _canvas.width = w;
	            _canvas.height = h;
	            ctx.clearRect(0, 0, w, h);
	            ctx.setTransform(1, 0, 0, 1, -leftX, -leftY);
	            s._drawShape(ctx);
	            this.anchorTexture = { x: -leftX / w, y: -leftY / h };
	        }
	        else {
	            s.canvas.width = 0;
	            s.canvas.height = 0;
	            s.offsetX = 0;
	            s.offsetY = 0;
	            s._localBoundsSelf.clear();
	            this.anchorTexture = { x: 0, y: 0 };
	        }
	        this.updateTexture();
	    };
	    Shape.prototype._drawShape = function (ctx) {
	        var s = this;
	        var com = s._command;
	        var cLen = com.length;
	        var data;
	        var leftX = s.offsetX;
	        var leftY = s.offsetY;
	        for (var i = 0; i < cLen; i++) {
	            data = com[i];
	            if (data[0] > 0) {
	                var paramsLen = data[2].length;
	                if (paramsLen == 0) {
	                    ctx[data[1]]();
	                }
	                else if (paramsLen == 2) {
	                    ctx[data[1]](data[2][0], data[2][1]);
	                }
	                else if (paramsLen == 4) {
	                    ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3]);
	                }
	                else if (paramsLen == 5) {
	                    ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4]);
	                }
	                else if (paramsLen == 6) {
	                    var lx = data[2][4];
	                    var ly = data[2][5];
	                    if (data[0] == 2) {
	                        lx -= leftX;
	                        ly -= leftY;
	                    }
	                    ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], lx, ly);
	                }
	            }
	            else {
	                ctx[data[1]] = data[2];
	            }
	        }
	    };
	    Shape.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
	        if (isMouseEvent === void 0) { isMouseEvent = false; }
	        var s = this;
	        var hitResult = _super.prototype.hitTestPoint.call(this, globalPoint, isMouseEvent);
	        if (!hitResult)
	            return null;
	        if (hitResult != s)
	            return hitResult;
	        if (!s.hitTestByPixel)
	            return s;
	        var p = globalPoint;
	        if (isMouseEvent)
	            p = s.globalToLocal(globalPoint);
	        var image = s._texture;
	        if (!image || image.width == 0 || image.height == 0)
	            return null;
	        backupCanvas.width = 1;
	        backupCanvas.height = 1;
	        p.x -= s.offsetX;
	        p.y -= s.offsetY;
	        var ctx = backupCanvas.getContext('2d');
	        ctx.clearRect(0, 0, 1, 1);
	        ctx.setTransform(1, 0, 0, 1, -p.x, -p.y);
	        ctx.drawImage(s.canvas, 0, 0);
	        if (ctx.getImageData(0, 0, 1, 1).data[3] > 0)
	            return s;
	        return null;
	    };
	    Shape.prototype.changeColor = function (infoObj) {
	        var s = this;
	        var cLen = s._command.length;
	        var c = s._command;
	        for (var i = 0; i < cLen; i++) {
	            if (c[i][0] == 0) {
	                if (c[i][1] == "fillStyle" && infoObj.fillColor && c[i][2] != infoObj.fillColor) {
	                    c[i][2] = infoObj.fillColor;
	                    s.dirty = true;
	                }
	                if (c[i][1] == "strokeStyle" && infoObj.strokeColor && c[i][2] != infoObj.strokeColor) {
	                    c[i][2] = infoObj.strokeColor;
	                    s.dirty = true;
	                }
	                if (c[i][1] == "lineWidth" && infoObj.lineWidth && c[i][2] != infoObj.lineWidth) {
	                    c[i][2] = infoObj.lineWidth;
	                    s.dirty = true;
	                }
	            }
	        }
	    };
	    Shape.prototype.updateTexture = function () {
	        var canvas = this.canvas;
	        var texture = this._texture;
	        var baseTexture = texture.baseTexture;
	        baseTexture.hasLoaded = canvas.width && canvas.height ? true : false;
	        baseTexture.width = canvas.width;
	        baseTexture.height = canvas.height;
	        baseTexture.dispatchEvent('update');
	        texture.valid = baseTexture.hasLoaded;
	        texture._frame.width = canvas.width;
	        texture._frame.height = canvas.height;
	        texture.orig.width = texture._frame.width;
	        texture.orig.height = texture._frame.height;
	    };
	    Shape.prototype._renderCanvas = function (renderer) {
	        this.updateShape();
	        _super.prototype._renderCanvas.call(this, renderer);
	    };
	    Shape.prototype._renderWebGL = function (renderer) {
	        this.updateShape();
	        _super.prototype._renderWebGL.call(this, renderer);
	    };
	    Shape.prototype.destroy = function () {
	        var s = this;
	        s._command = null;
	        s._isBitmapStroke = null;
	        s._isBitmapFill = null;
	        _super.prototype.destroy.call(this);
	    };
	    return Shape;
	}(Sprite));

	var TextureSheet = (function () {
	    function TextureSheet(baseTexture, data) {
	        this.baseTexture = baseTexture;
	        this.textures = {};
	        this.animations = {};
	        this.data = data;
	        this._frames = this.data.frames;
	        this._frameKeys = Object.keys(this._frames);
	        this._callback = null;
	    }
	    TextureSheet.prototype.parse = function (callback) {
	        this._callback = callback;
	        this._processFrames(0);
	        this._processAnimations();
	        this._parseComplete();
	    };
	    TextureSheet.prototype._processFrames = function (initialFrameIndex) {
	        var frameIndex = initialFrameIndex;
	        while (frameIndex < this._frameKeys.length) {
	            var i = this._frameKeys[frameIndex];
	            var data = this._frames[i];
	            var rect = data.frame;
	            if (rect) {
	                var frame = null;
	                var trim = null;
	                var sourceSize = data.trimmed !== false && data.sourceSize
	                    ? data.sourceSize : data.frame;
	                var orig = new Rectangle(0, 0, Math.floor(sourceSize.w), Math.floor(sourceSize.h));
	                if (data.rotated) {
	                    frame = new Rectangle(Math.floor(rect.x), Math.floor(rect.y), Math.floor(rect.h), Math.floor(rect.w));
	                }
	                else {
	                    frame = new Rectangle(Math.floor(rect.x), Math.floor(rect.y), Math.floor(rect.w), Math.floor(rect.h));
	                }
	                if (data.trimmed !== false && data.spriteSourceSize) {
	                    trim = new Rectangle(Math.floor(data.spriteSourceSize.x), Math.floor(data.spriteSourceSize.y), Math.floor(rect.w), Math.floor(rect.h));
	                }
	                this.textures[i] = new Texture(this.baseTexture, frame, orig, trim, data.rotated ? 2 : 0);
	                Texture.addToCache(this.textures[i], i);
	            }
	            frameIndex++;
	        }
	    };
	    TextureSheet.prototype._processAnimations = function () {
	        var animations = this.data.animations || {};
	        for (var animName in animations) {
	            this.animations[animName] = [];
	            for (var _i = 0, _a = animations[animName]; _i < _a.length; _i++) {
	                var frameName = _a[_i];
	                this.animations[animName].push(this.textures[frameName]);
	            }
	        }
	    };
	    TextureSheet.prototype._parseComplete = function () {
	        var callback = this._callback;
	        this._callback = null;
	        callback.call(this, this.textures);
	    };
	    TextureSheet.prototype.destroy = function (destroyBase) {
	        if (destroyBase === void 0) { destroyBase = false; }
	        for (var i in this.textures) {
	            this.textures[i].destroy();
	        }
	        this._frames = null;
	        this._frameKeys = null;
	        this.data = null;
	        this.textures = null;
	        if (destroyBase) {
	            this.baseTexture.destroy();
	        }
	        this.baseTexture = null;
	    };
	    return TextureSheet;
	}());

	function getTexture(str) {
	    return TextureCache[str] || null;
	}

	var queryParams = {};
	var search = window.location.search;
	try {
	    search = top.location.search;
	}
	catch (e) {
	}
	for (var _i = 0, _a$1 = search.replace('?', '').split('&'); _i < _a$1.length; _i++) {
	    var item = _a$1[_i];
	    var arr = item.split('=');
	    queryParams[arr[0]] = arr.length === 1 ? true : arr[1];
	}
	function appendScript(script, parent) {
	    if (parent === void 0) { parent = document.body; }
	    if (!script) {
	        return;
	    }
	    var scriptContent;
	    if (script.indexOf('<script') === 0) {
	        var temp = document.createElement('div');
	        temp.innerHTML = script;
	        scriptContent = temp.children[0].innerHTML;
	    }
	    else {
	        scriptContent = script;
	    }
	    var scriptEl = document.createElement('script');
	    scriptEl.innerHTML = scriptContent;
	    parent.appendChild(scriptEl);
	}

	function httpRequest(url, method, params, type, headers) {
	    if (method === void 0) { method = 'get'; }
	    if (type === void 0) { type = 'text'; }
	    var openUrl = url.indexOf('blob') === 0 ? url : urlJoin(url, '__ts__=' + Date.now());
	    var mParams = injectProperties({}, params);
	    if (type === "jsonp") {
	        return jsonp(openUrl, mParams);
	    }
	    else {
	        return new Promise(function (resolve, reject) {
	            var mHeaders = {
	                'Content-Type': 'application/x-www-form-urlencoded',
	            };
	            injectProperties(mHeaders, headers);
	            var request = { url: url, method: method, params: mParams, type: type, headers: mHeaders };
	            var mock = window['mock'];
	            var mockRule;
	            if (mock) {
	                mock(request, function (rule) {
	                    mockRule = rule;
	                    if (!mockRule) {
	                        doRequest(request, resolve, reject);
	                    }
	                }, resolve, reject);
	            }
	            else {
	                request.url = openUrl;
	                doRequest(request, resolve, reject);
	            }
	        });
	    }
	}
	function doProxyRequest(payload, resolve, reject) {
	    var proxyWindow = window['proxy_window'];
	    window.addEventListener('message', onMessage, false);
	    proxyWindow.postMessage(JSON.stringify({
	        action: 'http-request-proxy',
	        payload: payload,
	    }), '*');
	    function onMessage(event) {
	        window.removeEventListener('message', onMessage);
	        try {
	            var data = JSON.parse(event.data);
	            console.log('onMessage', event.data);
	            switch (data.action) {
	                case 'http-request-proxy-resolve':
	                    resolve(data.payload);
	                    break;
	                case 'http-request-proxy-reject':
	                    reject(data.payload);
	                    break;
	            }
	        }
	        catch (e) {
	        }
	    }
	}
	function doXhrRequest(_a, resolve, reject) {
	    var url = _a.url, method = _a.method, params = _a.params, type = _a.type, headers = _a.headers;
	    var xhr;
	    if (window["XMLHttpRequest"]) {
	        xhr = new XMLHttpRequest();
	    }
	    else if (window["ActiveXObject"]) {
	        xhr = new window["ActiveXObject"]();
	    }
	    else {
	        console.log('no xhr');
	    }
	    if (xhr != null) {
	        var isGet = method.toUpperCase() === 'GET';
	        var queryStr = obj2query(params);
	        var openUrl = url;
	        if (openUrl.indexOf('projectx') == 0) {
	            openUrl = '/' + openUrl;
	        }
	        if (isGet) {
	            openUrl = urlJoin(openUrl, queryStr);
	        }
	        xhr.open(method, openUrl, true);
	        for (var key in headers) {
	            xhr.setRequestHeader(key, headers[key]);
	        }
	        xhr.responseType = type;
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState == 4 && xhr.status == 200) {
	                resolve(xhr.response);
	            }
	        };
	        xhr.onerror = function (reason) {
	            reject(reason);
	        };
	        xhr.onloadend = function () {
	            if (xhr.status == 404) {
	                reject(url + ' 404 (Not Found)');
	            }
	        };
	        if (isGet) {
	            xhr.send();
	        }
	        else {
	            xhr.send(queryStr);
	        }
	    }
	}
	function doRequest(payload, resolve, reject) {
	    if (window['proxy_window'] && payload.url.indexOf('blob') !== 0) {
	        doProxyRequest(payload, function (p) {
	            resolve(p);
	        }, reject);
	    }
	    else {
	        doXhrRequest(payload, resolve, reject);
	    }
	}
	function jsonp(url, params) {
	    return new Promise(function (resolve, reject) {
	        var src = urlJoin(url, obj2query(params));
	        var scriptEl = document.createElement('script');
	        scriptEl.src = src;
	        scriptEl.onload = function () {
	            resolve();
	            document.body.removeChild(scriptEl);
	        };
	        scriptEl.onerror = function () {
	            reject();
	            document.body.removeChild(scriptEl);
	        };
	        document.body.appendChild(scriptEl);
	    });
	}
	function urlJoin(url, query) {
	    if (query) {
	        url += url.indexOf('?') < 0 ? '?' : '';
	        url += url[url.length - 1] === '?' ? '' : '&';
	        return url + query;
	    }
	    else {
	        return url;
	    }
	}
	if (queryParams.__proxy_mode__) {
	    window.addEventListener('message', function (event) {
	        try {
	            var data = JSON.parse(event.data);
	            switch (data.action) {
	                case 'http-request-proxy':
	                    doRequest(data.payload, resolve.bind(event.source), reject.bind(event.source));
	                    break;
	            }
	        }
	        catch (e) {
	        }
	        function resolve(resp) {
	            this.postMessage(JSON.stringify({
	                action: 'http-request-proxy-resolve',
	                payload: resp,
	            }), '*');
	        }
	        function reject(reason) {
	            this.postMessage(JSON.stringify({
	                action: 'http-request-proxy-reject',
	                payload: reason,
	            }), '*');
	        }
	    }, false);
	}

	function createTextureSheet(baseTexture, altaData) {
	    var frames = altaData;
	    var frameKeys = Object.keys(frames);
	    var frameIndex = 0;
	    while (frameIndex < frameKeys.length) {
	        var i = frameKeys[frameIndex];
	        var data = frames[i];
	        var frame = null;
	        var trim = null;
	        var orig = new Rectangle(0, 0, Math.floor(data.sw), Math.floor(data.sh));
	        if (data.ro) {
	            frame = new Rectangle(Math.floor(data.x), Math.floor(data.y), Math.floor(data.h), Math.floor(data.w));
	        }
	        else {
	            frame = new Rectangle(Math.floor(data.x), Math.floor(data.y), Math.floor(data.w), Math.floor(data.h));
	        }
	        if (data.ox || data.oy) {
	            trim = new Rectangle(Math.floor(data.ox), Math.floor(data.oy), Math.floor(data.w), Math.floor(data.h));
	        }
	        var texture = new Texture(baseTexture, frame, orig, trim, data.ro ? 2 : 0);
	        Texture.addToCache(texture, i);
	        frameIndex++;
	    }
	}

	var prefix = 'font-';
	var fonts = {};
	function parseSheet(sheet) {
	    for (var uuid in sheet) {
	        var config = sheet[uuid];
	        parseAssetConfig(config, uuid);
	    }
	}
	function parseAssetConfig(assetConfig, uuid) {
	    if (assetConfig.name && assetConfig.name.indexOf(prefix) === 0) {
	        var fontName = assetConfig.name.replace(prefix, '');
	        var arr = fontName.split('|');
	        fontName = arr[0];
	        var fontChar = arr[1];
	        var font = fonts[fontName];
	        if (!font) {
	            font = fonts[fontName] = {};
	        }
	        font[fontChar] = uuid || assetConfig.uuid;
	    }
	}
	function parse(assetConfig, data) {
	    switch (assetConfig.ext) {
	        case '.png':
	            parseAssetConfig(assetConfig);
	            break;
	        case '.sht':
	            parseSheet(data.frames);
	            break;
	    }
	}
	function getFont(name) {
	    return fonts[name];
	}

	var assetsConfig = [];
	var loaderMapping = {
	    '.png': 'Texture',
	    '.jpg': 'Texture',
	    '.jpeg': 'Texture',
	    '.gif': 'Texture',
	    '.svg': 'Texture',
	    '.txt': 'Text',
	    '.json': 'Json',
	    '.svga': 'Svga',
	    '.sht': 'Sheet',
	    '.mp3': 'Sound',
	    '': 'Raw',
	};
	var assetGroupLoaded = {};
	var assetGroupLoading = {};
	function checkAssetGroupLoaded(groupName) {
	    return assetGroupLoaded[groupName];
	}
	function loadAssetsGroups(groups, onStart, onFinish) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var total, loaded, groupName, depAssets, _a, _b, _c, _i, groupName, depAssets, _d;
	        return tslib_1.__generator(this, function (_e) {
	            switch (_e.label) {
	                case 0:
	                    total = 0;
	                    loaded = 0;
	                    for (groupName in groups) {
	                        if (!checkAssetGroupLoaded(groupName)) {
	                            depAssets = groups[groupName];
	                            if (depAssets && depAssets.length > 0) {
	                                total += depAssets.length;
	                            }
	                        }
	                    }
	                    _a = onStart;
	                    if (!_a) return [3, 2];
	                    return [4, onStart()];
	                case 1:
	                    _a = (_e.sent());
	                    _e.label = 2;
	                case 2:
	                    _b = [];
	                    for (_c in groups)
	                        _b.push(_c);
	                    _i = 0;
	                    _e.label = 3;
	                case 3:
	                    if (!(_i < _b.length)) return [3, 6];
	                    groupName = _b[_i];
	                    if (!!checkAssetGroupLoaded(groupName)) return [3, 5];
	                    depAssets = groups[groupName];
	                    if (!(depAssets && depAssets.length > 0)) return [3, 5];
	                    return [4, loadAssetsGroup(depAssets, groupName, function () {
	                            loaded++;
	                            globalEvent.dispatchEvent('load-assets-process', { loaded: loaded, total: total });
	                        }, function () {
	                            globalEvent.dispatchEvent('load-assets-complete');
	                        })];
	                case 4:
	                    _e.sent();
	                    _e.label = 5;
	                case 5:
	                    _i++;
	                    return [3, 3];
	                case 6: return [4, new Promise(function (resolve) {
	                        setTimeout(resolve, 100);
	                    })];
	                case 7:
	                    _e.sent();
	                    _d = onFinish;
	                    if (!_d) return [3, 9];
	                    return [4, onFinish()];
	                case 8:
	                    _d = (_e.sent());
	                    _e.label = 9;
	                case 9:
	                    return [2];
	            }
	        });
	    });
	}
	function loadAssetsGroup(config, groupName, onProcess, onComplete) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var _i, _a, p;
	        return tslib_1.__generator(this, function (_b) {
	            switch (_b.label) {
	                case 0:
	                    if (checkAssetGroupLoaded[groupName]) {
	                        return [2];
	                    }
	                    if (assetGroupLoading[groupName]) {
	                        return [2, new Promise(function (resolve, reject) {
	                                assetGroupLoading[groupName].push({ resolve: resolve, reject: reject });
	                            })];
	                    }
	                    else {
	                        assetGroupLoading[groupName] = [];
	                    }
	                    return [4, loadAssets(config, onProcess, onComplete)];
	                case 1:
	                    _b.sent();
	                    assetGroupLoaded[groupName] = true;
	                    for (_i = 0, _a = assetGroupLoading[groupName]; _i < _a.length; _i++) {
	                        p = _a[_i];
	                        p.resolve();
	                    }
	                    delete assetGroupLoading[groupName];
	                    return [2];
	            }
	        });
	    });
	}
	function loadAssets(config, onProgress, onComplete) {
	    if (!config) {
	        console.log();
	    }
	    var total = config.length;
	    var loaded = 0;
	    var failedList = [];
	    return Promise.all(config.map(function (assetConfig) {
	        assetsConfig.push(assetConfig);
	        var url = assetConfig.url, ext = assetConfig.ext, uuid = assetConfig.uuid;
	        var loadFunc = loaderMapping[ext];
	        if (loadFunc) {
	            if (url.indexOf(linkScheme) === 0) {
	                loaded++;
	                onProgress && onProgress(loaded, total);
	                return Promise.resolve();
	            }
	            var method = globalLoader['load' + loadFunc];
	            return method.call(globalLoader, url, uuid).then(function (data) {
	                parse(assetConfig, data);
	                loaded++;
	                onProgress && onProgress(loaded, total);
	            }, function (error) {
	                failedList.push(url);
	            });
	        }
	        else {
	            loaded++;
	            onProgress && onProgress(loaded, total);
	            return Promise.resolve();
	        }
	    })).then(function () {
	        if (loaded < total) {
	            return Promise.reject('some asset can not loaded: ' + failedList.join(', '));
	        }
	        else {
	            onComplete && onComplete();
	        }
	    });
	}
	function getAssetByUUID(uuid) {
	    var result = arrayFind(assetsConfig, function (item) { return item.uuid === uuid; });
	    if (result) {
	        return result;
	    }
	    else {
	        for (var _i = 0, assetsConfig_1 = assetsConfig; _i < assetsConfig_1.length; _i++) {
	            var assetConfig = assetsConfig_1[_i];
	            var res = globalLoader.get(assetConfig.url);
	            if (res && res.frames) {
	                for (var key in res.frames) {
	                    if (key === uuid) {
	                        return { uuid: key };
	                    }
	                }
	            }
	        }
	    }
	}
	function getAssetByName(name) {
	    var result = arrayFind(assetsConfig, function (item) { return item.name === name; });
	    if (result) {
	        return result;
	    }
	    else {
	        for (var _i = 0, assetsConfig_2 = assetsConfig; _i < assetsConfig_2.length; _i++) {
	            var assetConfig = assetsConfig_2[_i];
	            var res = globalLoader.get(assetConfig.url);
	            if (res && res.frames) {
	                for (var key in res.frames) {
	                    var frame = res.frames[key];
	                    if (frame.name === name) {
	                        return { uuid: key };
	                    }
	                }
	            }
	        }
	    }
	}

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var howler = createCommonjsModule(function (module, exports) {
	/*!
	 *  howler.js v2.1.2
	 *  howlerjs.com
	 *
	 *  (c) 2013-2019, James Simpson of GoldFire Studios
	 *  goldfirestudios.com
	 *
	 *  MIT License
	 */

	(function() {

	  /** Global Methods **/
	  /***************************************************************************/

	  /**
	   * Create the global controller. All contained methods and properties apply
	   * to all sounds that are currently playing or will be in the future.
	   */
	  var HowlerGlobal = function() {
	    this.init();
	  };
	  HowlerGlobal.prototype = {
	    /**
	     * Initialize the global Howler object.
	     * @return {Howler}
	     */
	    init: function() {
	      var self = this || Howler;

	      // Create a global ID counter.
	      self._counter = 1000;

	      // Pool of unlocked HTML5 Audio objects.
	      self._html5AudioPool = [];
	      self.html5PoolSize = 10;

	      // Internal properties.
	      self._codecs = {};
	      self._howls = [];
	      self._muted = false;
	      self._volume = 1;
	      self._canPlayEvent = 'canplaythrough';
	      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

	      // Public properties.
	      self.masterGain = null;
	      self.noAudio = false;
	      self.usingWebAudio = true;
	      self.autoSuspend = true;
	      self.ctx = null;

	      // Set to false to disable the auto audio unlocker.
	      self.autoUnlock = true;

	      // Setup the various state values for global tracking.
	      self._setup();

	      return self;
	    },

	    /**
	     * Get/set the global volume for all sounds.
	     * @param  {Float} vol Volume from 0.0 to 1.0.
	     * @return {Howler/Float}     Returns self or current volume.
	     */
	    volume: function(vol) {
	      var self = this || Howler;
	      vol = parseFloat(vol);

	      // If we don't have an AudioContext created yet, run the setup.
	      if (!self.ctx) {
	        setupAudioContext();
	      }

	      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
	        self._volume = vol;

	        // Don't update any of the nodes if we are muted.
	        if (self._muted) {
	          return self;
	        }

	        // When using Web Audio, we just need to adjust the master gain.
	        if (self.usingWebAudio) {
	          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
	        }

	        // Loop through and change volume for all HTML5 audio nodes.
	        for (var i=0; i<self._howls.length; i++) {
	          if (!self._howls[i]._webAudio) {
	            // Get all of the sounds in this Howl group.
	            var ids = self._howls[i]._getSoundIds();

	            // Loop through all sounds and change the volumes.
	            for (var j=0; j<ids.length; j++) {
	              var sound = self._howls[i]._soundById(ids[j]);

	              if (sound && sound._node) {
	                sound._node.volume = sound._volume * vol;
	              }
	            }
	          }
	        }

	        return self;
	      }

	      return self._volume;
	    },

	    /**
	     * Handle muting and unmuting globally.
	     * @param  {Boolean} muted Is muted or not.
	     */
	    mute: function(muted) {
	      var self = this || Howler;

	      // If we don't have an AudioContext created yet, run the setup.
	      if (!self.ctx) {
	        setupAudioContext();
	      }

	      self._muted = muted;

	      // With Web Audio, we just need to mute the master gain.
	      if (self.usingWebAudio) {
	        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
	      }

	      // Loop through and mute all HTML5 Audio nodes.
	      for (var i=0; i<self._howls.length; i++) {
	        if (!self._howls[i]._webAudio) {
	          // Get all of the sounds in this Howl group.
	          var ids = self._howls[i]._getSoundIds();

	          // Loop through all sounds and mark the audio node as muted.
	          for (var j=0; j<ids.length; j++) {
	            var sound = self._howls[i]._soundById(ids[j]);

	            if (sound && sound._node) {
	              sound._node.muted = (muted) ? true : sound._muted;
	            }
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Unload and destroy all currently loaded Howl objects.
	     * @return {Howler}
	     */
	    unload: function() {
	      var self = this || Howler;

	      for (var i=self._howls.length-1; i>=0; i--) {
	        self._howls[i].unload();
	      }

	      // Create a new AudioContext to make sure it is fully reset.
	      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
	        self.ctx.close();
	        self.ctx = null;
	        setupAudioContext();
	      }

	      return self;
	    },

	    /**
	     * Check for codec support of specific extension.
	     * @param  {String} ext Audio file extention.
	     * @return {Boolean}
	     */
	    codecs: function(ext) {
	      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
	    },

	    /**
	     * Setup various state values for global tracking.
	     * @return {Howler}
	     */
	    _setup: function() {
	      var self = this || Howler;

	      // Keeps track of the suspend/resume state of the AudioContext.
	      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

	      // Automatically begin the 30-second suspend process
	      self._autoSuspend();

	      // Check if audio is available.
	      if (!self.usingWebAudio) {
	        // No audio is available on this system if noAudio is set to true.
	        if (typeof Audio !== 'undefined') {
	          try {
	            var test = new Audio();

	            // Check if the canplaythrough event is available.
	            if (typeof test.oncanplaythrough === 'undefined') {
	              self._canPlayEvent = 'canplay';
	            }
	          } catch(e) {
	            self.noAudio = true;
	          }
	        } else {
	          self.noAudio = true;
	        }
	      }

	      // Test to make sure audio isn't disabled in Internet Explorer.
	      try {
	        var test = new Audio();
	        if (test.muted) {
	          self.noAudio = true;
	        }
	      } catch (e) {}

	      // Check for supported codecs.
	      if (!self.noAudio) {
	        self._setupCodecs();
	      }

	      return self;
	    },

	    /**
	     * Check for browser support for various codecs and cache the results.
	     * @return {Howler}
	     */
	    _setupCodecs: function() {
	      var self = this || Howler;
	      var audioTest = null;

	      // Must wrap in a try/catch because IE11 in server mode throws an error.
	      try {
	        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
	      } catch (err) {
	        return self;
	      }

	      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
	        return self;
	      }

	      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

	      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
	      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
	      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

	      self._codecs = {
	        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
	        mpeg: !!mpegTest,
	        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
	        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
	        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
	        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
	        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
	        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
	        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
	        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
	        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
	        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
	        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
	        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
	      };

	      return self;
	    },

	    /**
	     * Some browsers/devices will only allow audio to be played after a user interaction.
	     * Attempt to automatically unlock audio on the first user interaction.
	     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
	     * @return {Howler}
	     */
	    _unlockAudio: function() {
	      var self = this || Howler;

	      // Only run this if Web Audio is supported and it hasn't already been unlocked.
	      if (self._audioUnlocked || !self.ctx) {
	        return;
	      }

	      self._audioUnlocked = false;
	      self.autoUnlock = false;

	      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
	      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
	      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
	      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
	        self._mobileUnloaded = true;
	        self.unload();
	      }

	      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
	      // http://stackoverflow.com/questions/24119684
	      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

	      // Call this method on touch start to create and play a buffer,
	      // then check if the audio actually played to determine if
	      // audio has now been unlocked on iOS, Android, etc.
	      var unlock = function(e) {
	        // Create a pool of unlocked HTML5 Audio objects that can
	        // be used for playing sounds without user interaction. HTML5
	        // Audio objects must be individually unlocked, as opposed
	        // to the WebAudio API which only needs a single activation.
	        // This must occur before WebAudio setup or the source.onended
	        // event will not fire.
	        for (var i=0; i<self.html5PoolSize; i++) {
	          try {
	            var audioNode = new Audio();

	            // Mark this Audio object as unlocked to ensure it can get returned
	            // to the unlocked pool when released.
	            audioNode._unlocked = true;

	            // Add the audio node to the pool.
	            self._releaseHtml5Audio(audioNode);
	          } catch (e) {
	            self.noAudio = true;
	          }
	        }

	        // Loop through any assigned audio nodes and unlock them.
	        for (var i=0; i<self._howls.length; i++) {
	          if (!self._howls[i]._webAudio) {
	            // Get all of the sounds in this Howl group.
	            var ids = self._howls[i]._getSoundIds();

	            // Loop through all sounds and unlock the audio nodes.
	            for (var j=0; j<ids.length; j++) {
	              var sound = self._howls[i]._soundById(ids[j]);

	              if (sound && sound._node && !sound._node._unlocked) {
	                sound._node._unlocked = true;
	                sound._node.load();
	              }
	            }
	          }
	        }

	        // Fix Android can not play in suspend state.
	        self._autoResume();

	        // Create an empty buffer.
	        var source = self.ctx.createBufferSource();
	        source.buffer = self._scratchBuffer;
	        source.connect(self.ctx.destination);

	        // Play the empty buffer.
	        if (typeof source.start === 'undefined') {
	          source.noteOn(0);
	        } else {
	          source.start(0);
	        }

	        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
	        if (typeof self.ctx.resume === 'function') {
	          self.ctx.resume();
	        }

	        // Setup a timeout to check that we are unlocked on the next event loop.
	        source.onended = function() {
	          source.disconnect(0);

	          // Update the unlocked state and prevent this check from happening again.
	          self._audioUnlocked = true;

	          // Remove the touch start listener.
	          document.removeEventListener('touchstart', unlock, true);
	          document.removeEventListener('touchend', unlock, true);
	          document.removeEventListener('click', unlock, true);

	          // Let all sounds know that audio has been unlocked.
	          for (var i=0; i<self._howls.length; i++) {
	            self._howls[i]._emit('unlock');
	          }
	        };
	      };

	      // Setup a touch start listener to attempt an unlock in.
	      document.addEventListener('touchstart', unlock, true);
	      document.addEventListener('touchend', unlock, true);
	      document.addEventListener('click', unlock, true);

	      return self;
	    },

	    /**
	     * Get an unlocked HTML5 Audio object from the pool. If none are left,
	     * return a new Audio object and throw a warning.
	     * @return {Audio} HTML5 Audio object.
	     */
	    _obtainHtml5Audio: function() {
	      var self = this || Howler;

	      // Return the next object from the pool if one exists.
	      if (self._html5AudioPool.length) {
	        return self._html5AudioPool.pop();
	      }

	      //.Check if the audio is locked and throw a warning.
	      var testPlay = new Audio().play();
	      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
	        testPlay.catch(function() {
	          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
	        });
	      }

	      return new Audio();
	    },

	    /**
	     * Return an activated HTML5 Audio object to the pool.
	     * @return {Howler}
	     */
	    _releaseHtml5Audio: function(audio) {
	      var self = this || Howler;

	      // Don't add audio to the pool if we don't know if it has been unlocked.
	      if (audio._unlocked) {
	        self._html5AudioPool.push(audio);
	      }

	      return self;
	    },

	    /**
	     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
	     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
	     * @return {Howler}
	     */
	    _autoSuspend: function() {
	      var self = this;

	      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
	        return;
	      }

	      // Check if any sounds are playing.
	      for (var i=0; i<self._howls.length; i++) {
	        if (self._howls[i]._webAudio) {
	          for (var j=0; j<self._howls[i]._sounds.length; j++) {
	            if (!self._howls[i]._sounds[j]._paused) {
	              return self;
	            }
	          }
	        }
	      }

	      if (self._suspendTimer) {
	        clearTimeout(self._suspendTimer);
	      }

	      // If no sound has played after 30 seconds, suspend the context.
	      self._suspendTimer = setTimeout(function() {
	        if (!self.autoSuspend) {
	          return;
	        }

	        self._suspendTimer = null;
	        self.state = 'suspending';
	        self.ctx.suspend().then(function() {
	          self.state = 'suspended';

	          if (self._resumeAfterSuspend) {
	            delete self._resumeAfterSuspend;
	            self._autoResume();
	          }
	        });
	      }, 30000);

	      return self;
	    },

	    /**
	     * Automatically resume the Web Audio AudioContext when a new sound is played.
	     * @return {Howler}
	     */
	    _autoResume: function() {
	      var self = this;

	      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
	        return;
	      }

	      if (self.state === 'running' && self._suspendTimer) {
	        clearTimeout(self._suspendTimer);
	        self._suspendTimer = null;
	      } else if (self.state === 'suspended') {
	        self.ctx.resume().then(function() {
	          self.state = 'running';

	          // Emit to all Howls that the audio has resumed.
	          for (var i=0; i<self._howls.length; i++) {
	            self._howls[i]._emit('resume');
	          }
	        });

	        if (self._suspendTimer) {
	          clearTimeout(self._suspendTimer);
	          self._suspendTimer = null;
	        }
	      } else if (self.state === 'suspending') {
	        self._resumeAfterSuspend = true;
	      }

	      return self;
	    }
	  };

	  // Setup the global audio controller.
	  var Howler = new HowlerGlobal();

	  /** Group Methods **/
	  /***************************************************************************/

	  /**
	   * Create an audio group controller.
	   * @param {Object} o Passed in properties for this group.
	   */
	  var Howl = function(o) {
	    var self = this;

	    // Throw an error if no source is provided.
	    if (!o.src || o.src.length === 0) {
	      console.error('An array of source files must be passed with any new Howl.');
	      return;
	    }

	    self.init(o);
	  };
	  Howl.prototype = {
	    /**
	     * Initialize a new Howl group object.
	     * @param  {Object} o Passed in properties for this group.
	     * @return {Howl}
	     */
	    init: function(o) {
	      var self = this;

	      // If we don't have an AudioContext created yet, run the setup.
	      if (!Howler.ctx) {
	        setupAudioContext();
	      }

	      // Setup user-defined default properties.
	      self._autoplay = o.autoplay || false;
	      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
	      self._html5 = o.html5 || false;
	      self._muted = o.mute || false;
	      self._loop = o.loop || false;
	      self._pool = o.pool || 5;
	      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
	      self._rate = o.rate || 1;
	      self._sprite = o.sprite || {};
	      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
	      self._volume = o.volume !== undefined ? o.volume : 1;
	      self._xhrWithCredentials = o.xhrWithCredentials || false;

	      // Setup all other default properties.
	      self._duration = 0;
	      self._state = 'unloaded';
	      self._sounds = [];
	      self._endTimers = {};
	      self._queue = [];
	      self._playLock = false;

	      // Setup event listeners.
	      self._onend = o.onend ? [{fn: o.onend}] : [];
	      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
	      self._onload = o.onload ? [{fn: o.onload}] : [];
	      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
	      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
	      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
	      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
	      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
	      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
	      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
	      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
	      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
	      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
	      self._onresume = [];

	      // Web Audio or HTML5 Audio?
	      self._webAudio = Howler.usingWebAudio && !self._html5;

	      // Automatically try to enable audio.
	      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
	        Howler._unlockAudio();
	      }

	      // Keep track of this Howl group in the global controller.
	      Howler._howls.push(self);

	      // If they selected autoplay, add a play event to the load queue.
	      if (self._autoplay) {
	        self._queue.push({
	          event: 'play',
	          action: function() {
	            self.play();
	          }
	        });
	      }

	      // Load the source file unless otherwise specified.
	      if (self._preload) {
	        self.load();
	      }

	      return self;
	    },

	    /**
	     * Load the audio file.
	     * @return {Howler}
	     */
	    load: function() {
	      var self = this;
	      var url = null;

	      // If no audio is available, quit immediately.
	      if (Howler.noAudio) {
	        self._emit('loaderror', null, 'No audio support.');
	        return;
	      }

	      // Make sure our source is in an array.
	      if (typeof self._src === 'string') {
	        self._src = [self._src];
	      }

	      // Loop through the sources and pick the first one that is compatible.
	      for (var i=0; i<self._src.length; i++) {
	        var ext, str;

	        if (self._format && self._format[i]) {
	          // If an extension was specified, use that instead.
	          ext = self._format[i];
	        } else {
	          // Make sure the source is a string.
	          str = self._src[i];
	          if (typeof str !== 'string') {
	            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
	            continue;
	          }

	          // Extract the file extension from the URL or base64 data URI.
	          ext = /^data:audio\/([^;,]+);/i.exec(str);
	          if (!ext) {
	            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
	          }

	          if (ext) {
	            ext = ext[1].toLowerCase();
	          }
	        }

	        // Log a warning if no extension was found.
	        if (!ext) {
	          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
	        }

	        // Check if this extension is available.
	        if (ext && Howler.codecs(ext)) {
	          url = self._src[i];
	          break;
	        }
	      }

	      if (!url) {
	        self._emit('loaderror', null, 'No codec support for selected audio sources.');
	        return;
	      }

	      self._src = url;
	      self._state = 'loading';

	      // If the hosting page is HTTPS and the source isn't,
	      // drop down to HTML5 Audio to avoid Mixed Content errors.
	      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
	        self._html5 = true;
	        self._webAudio = false;
	      }

	      // Create a new sound object and add it to the pool.
	      new Sound(self);

	      // Load and decode the audio data for playback.
	      if (self._webAudio) {
	        loadBuffer(self);
	      }

	      return self;
	    },

	    /**
	     * Play a sound or resume previous playback.
	     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
	     * @param  {Boolean} internal Internal Use: true prevents event firing.
	     * @return {Number}          Sound ID.
	     */
	    play: function(sprite, internal) {
	      var self = this;
	      var id = null;

	      // Determine if a sprite, sound id or nothing was passed
	      if (typeof sprite === 'number') {
	        id = sprite;
	        sprite = null;
	      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
	        // If the passed sprite doesn't exist, do nothing.
	        return null;
	      } else if (typeof sprite === 'undefined') {
	        // Use the default sound sprite (plays the full audio length).
	        sprite = '__default';

	        // Check if there is a single paused sound that isn't ended. 
	        // If there is, play that sound. If not, continue as usual.  
	        if (!self._playLock) {
	          var num = 0;
	          for (var i=0; i<self._sounds.length; i++) {
	            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
	              num++;
	              id = self._sounds[i]._id;
	            }
	          }

	          if (num === 1) {
	            sprite = null;
	          } else {
	            id = null;
	          }
	        }
	      }

	      // Get the selected node, or get one from the pool.
	      var sound = id ? self._soundById(id) : self._inactiveSound();

	      // If the sound doesn't exist, do nothing.
	      if (!sound) {
	        return null;
	      }

	      // Select the sprite definition.
	      if (id && !sprite) {
	        sprite = sound._sprite || '__default';
	      }

	      // If the sound hasn't loaded, we must wait to get the audio's duration.
	      // We also need to wait to make sure we don't run into race conditions with
	      // the order of function calls.
	      if (self._state !== 'loaded') {
	        // Set the sprite value on this sound.
	        sound._sprite = sprite;

	        // Mark this sound as not ended in case another sound is played before this one loads.
	        sound._ended = false;

	        // Add the sound to the queue to be played on load.
	        var soundId = sound._id;
	        self._queue.push({
	          event: 'play',
	          action: function() {
	            self.play(soundId);
	          }
	        });

	        return soundId;
	      }

	      // Don't play the sound if an id was passed and it is already playing.
	      if (id && !sound._paused) {
	        // Trigger the play event, in order to keep iterating through queue.
	        if (!internal) {
	          self._loadQueue('play');
	        }

	        return sound._id;
	      }

	      // Make sure the AudioContext isn't suspended, and resume it if it is.
	      if (self._webAudio) {
	        Howler._autoResume();
	      }

	      // Determine how long to play for and where to start playing.
	      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
	      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
	      var timeout = (duration * 1000) / Math.abs(sound._rate);
	      var start = self._sprite[sprite][0] / 1000;
	      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
	      var loop = !!(sound._loop || self._sprite[sprite][2]);
	      sound._sprite = sprite;

	      // Mark the sound as ended instantly so that this async playback
	      // doesn't get grabbed by another call to play while this one waits to start.
	      sound._ended = false;

	      // Update the parameters of the sound.
	      var setParams = function() {
	        sound._paused = false;
	        sound._seek = seek;
	        sound._start = start;
	        sound._stop = stop;
	        sound._loop = loop;
	      };

	      // End the sound instantly if seek is at the end.
	      if (seek >= stop) {
	        self._ended(sound);
	        return;
	      }

	      // Begin the actual playback.
	      var node = sound._node;
	      if (self._webAudio) {
	        // Fire this when the sound is ready to play to begin Web Audio playback.
	        var playWebAudio = function() {
	          self._playLock = false;
	          setParams();
	          self._refreshBuffer(sound);

	          // Setup the playback params.
	          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
	          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
	          sound._playStart = Howler.ctx.currentTime;

	          // Play the sound using the supported method.
	          if (typeof node.bufferSource.start === 'undefined') {
	            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
	          } else {
	            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
	          }

	          // Start a new timer if none is present.
	          if (timeout !== Infinity) {
	            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
	          }

	          if (!internal) {
	            setTimeout(function() {
	              self._emit('play', sound._id);
	              self._loadQueue();
	            }, 0);
	          }
	        };

	        if (Howler.state === 'running') {
	          playWebAudio();
	        } else {
	          self._playLock = true;

	          // Wait for the audio context to resume before playing.
	          self.once('resume', playWebAudio);

	          // Cancel the end timer.
	          self._clearTimer(sound._id);
	        }
	      } else {
	        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
	        var playHtml5 = function() {
	          node.currentTime = seek;
	          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
	          node.volume = sound._volume * Howler.volume();
	          node.playbackRate = sound._rate;

	          // Some browsers will throw an error if this is called without user interaction.
	          try {
	            var play = node.play();

	            // Support older browsers that don't support promises, and thus don't have this issue.
	            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
	              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
	              self._playLock = true;

	              // Set param values immediately.
	              setParams();

	              // Releases the lock and executes queued actions.
	              play
	                .then(function() {
	                  self._playLock = false;
	                  node._unlocked = true;
	                  if (!internal) {
	                    self._emit('play', sound._id);
	                    self._loadQueue();
	                  }
	                })
	                .catch(function() {
	                  self._playLock = false;
	                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
	                    'on mobile devices and Chrome where playback was not within a user interaction.');

	                  // Reset the ended and paused values.
	                  sound._ended = true;
	                  sound._paused = true;
	                });
	            } else if (!internal) {
	              self._playLock = false;
	              setParams();
	              self._emit('play', sound._id);
	              self._loadQueue();
	            }

	            // Setting rate before playing won't work in IE, so we set it again here.
	            node.playbackRate = sound._rate;

	            // If the node is still paused, then we can assume there was a playback issue.
	            if (node.paused) {
	              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
	                'on mobile devices and Chrome where playback was not within a user interaction.');
	              return;
	            }

	            // Setup the end timer on sprites or listen for the ended event.
	            if (sprite !== '__default' || sound._loop) {
	              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
	            } else {
	              self._endTimers[sound._id] = function() {
	                // Fire ended on this audio node.
	                self._ended(sound);

	                // Clear this listener.
	                node.removeEventListener('ended', self._endTimers[sound._id], false);
	              };
	              node.addEventListener('ended', self._endTimers[sound._id], false);
	            }
	          } catch (err) {
	            self._emit('playerror', sound._id, err);
	          }
	        };

	        // If this is streaming audio, make sure the src is set and load again.
	        if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
	          node.src = self._src;
	          node.load();
	        }

	        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
	        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
	        if (node.readyState >= 3 || loadedNoReadyState) {
	          playHtml5();
	        } else {
	          self._playLock = true;

	          var listener = function() {
	            // Begin playback.
	            playHtml5();

	            // Clear this listener.
	            node.removeEventListener(Howler._canPlayEvent, listener, false);
	          };
	          node.addEventListener(Howler._canPlayEvent, listener, false);

	          // Cancel the end timer.
	          self._clearTimer(sound._id);
	        }
	      }

	      return sound._id;
	    },

	    /**
	     * Pause playback and save current position.
	     * @param  {Number} id The sound ID (empty to pause all in group).
	     * @return {Howl}
	     */
	    pause: function(id) {
	      var self = this;

	      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
	      if (self._state !== 'loaded' || self._playLock) {
	        self._queue.push({
	          event: 'pause',
	          action: function() {
	            self.pause(id);
	          }
	        });

	        return self;
	      }

	      // If no id is passed, get all ID's to be paused.
	      var ids = self._getSoundIds(id);

	      for (var i=0; i<ids.length; i++) {
	        // Clear the end timer.
	        self._clearTimer(ids[i]);

	        // Get the sound.
	        var sound = self._soundById(ids[i]);

	        if (sound && !sound._paused) {
	          // Reset the seek position.
	          sound._seek = self.seek(ids[i]);
	          sound._rateSeek = 0;
	          sound._paused = true;

	          // Stop currently running fades.
	          self._stopFade(ids[i]);

	          if (sound._node) {
	            if (self._webAudio) {
	              // Make sure the sound has been created.
	              if (!sound._node.bufferSource) {
	                continue;
	              }

	              if (typeof sound._node.bufferSource.stop === 'undefined') {
	                sound._node.bufferSource.noteOff(0);
	              } else {
	                sound._node.bufferSource.stop(0);
	              }

	              // Clean up the buffer source.
	              self._cleanBuffer(sound._node);
	            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
	              sound._node.pause();
	            }
	          }
	        }

	        // Fire the pause event, unless `true` is passed as the 2nd argument.
	        if (!arguments[1]) {
	          self._emit('pause', sound ? sound._id : null);
	        }
	      }

	      return self;
	    },

	    /**
	     * Stop playback and reset to start.
	     * @param  {Number} id The sound ID (empty to stop all in group).
	     * @param  {Boolean} internal Internal Use: true prevents event firing.
	     * @return {Howl}
	     */
	    stop: function(id, internal) {
	      var self = this;

	      // If the sound hasn't loaded, add it to the load queue to stop when capable.
	      if (self._state !== 'loaded' || self._playLock) {
	        self._queue.push({
	          event: 'stop',
	          action: function() {
	            self.stop(id);
	          }
	        });

	        return self;
	      }

	      // If no id is passed, get all ID's to be stopped.
	      var ids = self._getSoundIds(id);

	      for (var i=0; i<ids.length; i++) {
	        // Clear the end timer.
	        self._clearTimer(ids[i]);

	        // Get the sound.
	        var sound = self._soundById(ids[i]);

	        if (sound) {
	          // Reset the seek position.
	          sound._seek = sound._start || 0;
	          sound._rateSeek = 0;
	          sound._paused = true;
	          sound._ended = true;

	          // Stop currently running fades.
	          self._stopFade(ids[i]);

	          if (sound._node) {
	            if (self._webAudio) {
	              // Make sure the sound's AudioBufferSourceNode has been created.
	              if (sound._node.bufferSource) {
	                if (typeof sound._node.bufferSource.stop === 'undefined') {
	                  sound._node.bufferSource.noteOff(0);
	                } else {
	                  sound._node.bufferSource.stop(0);
	                }

	                // Clean up the buffer source.
	                self._cleanBuffer(sound._node);
	              }
	            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
	              sound._node.currentTime = sound._start || 0;
	              sound._node.pause();

	              // If this is a live stream, stop download once the audio is stopped.
	              if (sound._node.duration === Infinity) {
	                self._clearSound(sound._node);
	              }
	            }
	          }

	          if (!internal) {
	            self._emit('stop', sound._id);
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Mute/unmute a single sound or all sounds in this Howl group.
	     * @param  {Boolean} muted Set to true to mute and false to unmute.
	     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
	     * @return {Howl}
	     */
	    mute: function(muted, id) {
	      var self = this;

	      // If the sound hasn't loaded, add it to the load queue to mute when capable.
	      if (self._state !== 'loaded'|| self._playLock) {
	        self._queue.push({
	          event: 'mute',
	          action: function() {
	            self.mute(muted, id);
	          }
	        });

	        return self;
	      }

	      // If applying mute/unmute to all sounds, update the group's value.
	      if (typeof id === 'undefined') {
	        if (typeof muted === 'boolean') {
	          self._muted = muted;
	        } else {
	          return self._muted;
	        }
	      }

	      // If no id is passed, get all ID's to be muted.
	      var ids = self._getSoundIds(id);

	      for (var i=0; i<ids.length; i++) {
	        // Get the sound.
	        var sound = self._soundById(ids[i]);

	        if (sound) {
	          sound._muted = muted;

	          // Cancel active fade and set the volume to the end value.
	          if (sound._interval) {
	            self._stopFade(sound._id);
	          }

	          if (self._webAudio && sound._node) {
	            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
	          } else if (sound._node) {
	            sound._node.muted = Howler._muted ? true : muted;
	          }

	          self._emit('mute', sound._id);
	        }
	      }

	      return self;
	    },

	    /**
	     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
	     *   volume() -> Returns the group's volume value.
	     *   volume(id) -> Returns the sound id's current volume.
	     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
	     *   volume(vol, id) -> Sets the volume of passed sound id.
	     * @return {Howl/Number} Returns self or current volume.
	     */
	    volume: function() {
	      var self = this;
	      var args = arguments;
	      var vol, id;

	      // Determine the values based on arguments.
	      if (args.length === 0) {
	        // Return the value of the groups' volume.
	        return self._volume;
	      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
	        // First check if this is an ID, and if not, assume it is a new volume.
	        var ids = self._getSoundIds();
	        var index = ids.indexOf(args[0]);
	        if (index >= 0) {
	          id = parseInt(args[0], 10);
	        } else {
	          vol = parseFloat(args[0]);
	        }
	      } else if (args.length >= 2) {
	        vol = parseFloat(args[0]);
	        id = parseInt(args[1], 10);
	      }

	      // Update the volume or return the current volume.
	      var sound;
	      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
	        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
	        if (self._state !== 'loaded'|| self._playLock) {
	          self._queue.push({
	            event: 'volume',
	            action: function() {
	              self.volume.apply(self, args);
	            }
	          });

	          return self;
	        }

	        // Set the group volume.
	        if (typeof id === 'undefined') {
	          self._volume = vol;
	        }

	        // Update one or all volumes.
	        id = self._getSoundIds(id);
	        for (var i=0; i<id.length; i++) {
	          // Get the sound.
	          sound = self._soundById(id[i]);

	          if (sound) {
	            sound._volume = vol;

	            // Stop currently running fades.
	            if (!args[2]) {
	              self._stopFade(id[i]);
	            }

	            if (self._webAudio && sound._node && !sound._muted) {
	              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
	            } else if (sound._node && !sound._muted) {
	              sound._node.volume = vol * Howler.volume();
	            }

	            self._emit('volume', sound._id);
	          }
	        }
	      } else {
	        sound = id ? self._soundById(id) : self._sounds[0];
	        return sound ? sound._volume : 0;
	      }

	      return self;
	    },

	    /**
	     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
	     * @param  {Number} from The value to fade from (0.0 to 1.0).
	     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
	     * @param  {Number} len  Time in milliseconds to fade.
	     * @param  {Number} id   The sound id (omit to fade all sounds).
	     * @return {Howl}
	     */
	    fade: function(from, to, len, id) {
	      var self = this;

	      // If the sound hasn't loaded, add it to the load queue to fade when capable.
	      if (self._state !== 'loaded' || self._playLock) {
	        self._queue.push({
	          event: 'fade',
	          action: function() {
	            self.fade(from, to, len, id);
	          }
	        });

	        return self;
	      }

	      // Make sure the to/from/len values are numbers.
	      from = parseFloat(from);
	      to = parseFloat(to);
	      len = parseFloat(len);

	      // Set the volume to the start position.
	      self.volume(from, id);

	      // Fade the volume of one or all sounds.
	      var ids = self._getSoundIds(id);
	      for (var i=0; i<ids.length; i++) {
	        // Get the sound.
	        var sound = self._soundById(ids[i]);

	        // Create a linear fade or fall back to timeouts with HTML5 Audio.
	        if (sound) {
	          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
	          if (!id) {
	            self._stopFade(ids[i]);
	          }

	          // If we are using Web Audio, let the native methods do the actual fade.
	          if (self._webAudio && !sound._muted) {
	            var currentTime = Howler.ctx.currentTime;
	            var end = currentTime + (len / 1000);
	            sound._volume = from;
	            sound._node.gain.setValueAtTime(from, currentTime);
	            sound._node.gain.linearRampToValueAtTime(to, end);
	          }

	          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
	        }
	      }

	      return self;
	    },

	    /**
	     * Starts the internal interval to fade a sound.
	     * @param  {Object} sound Reference to sound to fade.
	     * @param  {Number} from The value to fade from (0.0 to 1.0).
	     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
	     * @param  {Number} len  Time in milliseconds to fade.
	     * @param  {Number} id   The sound id to fade.
	     * @param  {Boolean} isGroup   If true, set the volume on the group.
	     */
	    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
	      var self = this;
	      var vol = from;
	      var diff = to - from;
	      var steps = Math.abs(diff / 0.01);
	      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
	      var lastTick = Date.now();

	      // Store the value being faded to.
	      sound._fadeTo = to;

	      // Update the volume value on each interval tick.
	      sound._interval = setInterval(function() {
	        // Update the volume based on the time since the last tick.
	        var tick = (Date.now() - lastTick) / len;
	        lastTick = Date.now();
	        vol += diff * tick;

	        // Make sure the volume is in the right bounds.
	        vol = Math.max(0, vol);
	        vol = Math.min(1, vol);

	        // Round to within 2 decimal points.
	        vol = Math.round(vol * 100) / 100;

	        // Change the volume.
	        if (self._webAudio) {
	          sound._volume = vol;
	        } else {
	          self.volume(vol, sound._id, true);
	        }

	        // Set the group's volume.
	        if (isGroup) {
	          self._volume = vol;
	        }

	        // When the fade is complete, stop it and fire event.
	        if ((to < from && vol <= to) || (to > from && vol >= to)) {
	          clearInterval(sound._interval);
	          sound._interval = null;
	          sound._fadeTo = null;
	          self.volume(to, sound._id);
	          self._emit('fade', sound._id);
	        }
	      }, stepLen);
	    },

	    /**
	     * Internal method that stops the currently playing fade when
	     * a new fade starts, volume is changed or the sound is stopped.
	     * @param  {Number} id The sound id.
	     * @return {Howl}
	     */
	    _stopFade: function(id) {
	      var self = this;
	      var sound = self._soundById(id);

	      if (sound && sound._interval) {
	        if (self._webAudio) {
	          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
	        }

	        clearInterval(sound._interval);
	        sound._interval = null;
	        self.volume(sound._fadeTo, id);
	        sound._fadeTo = null;
	        self._emit('fade', id);
	      }

	      return self;
	    },

	    /**
	     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
	     *   loop() -> Returns the group's loop value.
	     *   loop(id) -> Returns the sound id's loop value.
	     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
	     *   loop(loop, id) -> Sets the loop value of passed sound id.
	     * @return {Howl/Boolean} Returns self or current loop value.
	     */
	    loop: function() {
	      var self = this;
	      var args = arguments;
	      var loop, id, sound;

	      // Determine the values for loop and id.
	      if (args.length === 0) {
	        // Return the grou's loop value.
	        return self._loop;
	      } else if (args.length === 1) {
	        if (typeof args[0] === 'boolean') {
	          loop = args[0];
	          self._loop = loop;
	        } else {
	          // Return this sound's loop value.
	          sound = self._soundById(parseInt(args[0], 10));
	          return sound ? sound._loop : false;
	        }
	      } else if (args.length === 2) {
	        loop = args[0];
	        id = parseInt(args[1], 10);
	      }

	      // If no id is passed, get all ID's to be looped.
	      var ids = self._getSoundIds(id);
	      for (var i=0; i<ids.length; i++) {
	        sound = self._soundById(ids[i]);

	        if (sound) {
	          sound._loop = loop;
	          if (self._webAudio && sound._node && sound._node.bufferSource) {
	            sound._node.bufferSource.loop = loop;
	            if (loop) {
	              sound._node.bufferSource.loopStart = sound._start || 0;
	              sound._node.bufferSource.loopEnd = sound._stop;
	            }
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
	     *   rate() -> Returns the first sound node's current playback rate.
	     *   rate(id) -> Returns the sound id's current playback rate.
	     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
	     *   rate(rate, id) -> Sets the playback rate of passed sound id.
	     * @return {Howl/Number} Returns self or the current playback rate.
	     */
	    rate: function() {
	      var self = this;
	      var args = arguments;
	      var rate, id;

	      // Determine the values based on arguments.
	      if (args.length === 0) {
	        // We will simply return the current rate of the first node.
	        id = self._sounds[0]._id;
	      } else if (args.length === 1) {
	        // First check if this is an ID, and if not, assume it is a new rate value.
	        var ids = self._getSoundIds();
	        var index = ids.indexOf(args[0]);
	        if (index >= 0) {
	          id = parseInt(args[0], 10);
	        } else {
	          rate = parseFloat(args[0]);
	        }
	      } else if (args.length === 2) {
	        rate = parseFloat(args[0]);
	        id = parseInt(args[1], 10);
	      }

	      // Update the playback rate or return the current value.
	      var sound;
	      if (typeof rate === 'number') {
	        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
	        if (self._state !== 'loaded' || self._playLock) {
	          self._queue.push({
	            event: 'rate',
	            action: function() {
	              self.rate.apply(self, args);
	            }
	          });

	          return self;
	        }

	        // Set the group rate.
	        if (typeof id === 'undefined') {
	          self._rate = rate;
	        }

	        // Update one or all volumes.
	        id = self._getSoundIds(id);
	        for (var i=0; i<id.length; i++) {
	          // Get the sound.
	          sound = self._soundById(id[i]);

	          if (sound) {
	            // Keep track of our position when the rate changed and update the playback
	            // start position so we can properly adjust the seek position for time elapsed.
	            if (self.playing(id[i])) {
	              sound._rateSeek = self.seek(id[i]);
	              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
	            }
	            sound._rate = rate;

	            // Change the playback rate.
	            if (self._webAudio && sound._node && sound._node.bufferSource) {
	              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
	            } else if (sound._node) {
	              sound._node.playbackRate = rate;
	            }

	            // Reset the timers.
	            var seek = self.seek(id[i]);
	            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
	            var timeout = (duration * 1000) / Math.abs(sound._rate);

	            // Start a new end timer if sound is already playing.
	            if (self._endTimers[id[i]] || !sound._paused) {
	              self._clearTimer(id[i]);
	              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
	            }

	            self._emit('rate', sound._id);
	          }
	        }
	      } else {
	        sound = self._soundById(id);
	        return sound ? sound._rate : self._rate;
	      }

	      return self;
	    },

	    /**
	     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
	     *   seek() -> Returns the first sound node's current seek position.
	     *   seek(id) -> Returns the sound id's current seek position.
	     *   seek(seek) -> Sets the seek position of the first sound node.
	     *   seek(seek, id) -> Sets the seek position of passed sound id.
	     * @return {Howl/Number} Returns self or the current seek position.
	     */
	    seek: function() {
	      var self = this;
	      var args = arguments;
	      var seek, id;

	      // Determine the values based on arguments.
	      if (args.length === 0) {
	        // We will simply return the current position of the first node.
	        id = self._sounds[0]._id;
	      } else if (args.length === 1) {
	        // First check if this is an ID, and if not, assume it is a new seek position.
	        var ids = self._getSoundIds();
	        var index = ids.indexOf(args[0]);
	        if (index >= 0) {
	          id = parseInt(args[0], 10);
	        } else if (self._sounds.length) {
	          id = self._sounds[0]._id;
	          seek = parseFloat(args[0]);
	        }
	      } else if (args.length === 2) {
	        seek = parseFloat(args[0]);
	        id = parseInt(args[1], 10);
	      }

	      // If there is no ID, bail out.
	      if (typeof id === 'undefined') {
	        return self;
	      }

	      // If the sound hasn't loaded, add it to the load queue to seek when capable.
	      if (self._state !== 'loaded' || self._playLock) {
	        self._queue.push({
	          event: 'seek',
	          action: function() {
	            self.seek.apply(self, args);
	          }
	        });

	        return self;
	      }

	      // Get the sound.
	      var sound = self._soundById(id);

	      if (sound) {
	        if (typeof seek === 'number' && seek >= 0) {
	          // Pause the sound and update position for restarting playback.
	          var playing = self.playing(id);
	          if (playing) {
	            self.pause(id, true);
	          }

	          // Move the position of the track and cancel timer.
	          sound._seek = seek;
	          sound._ended = false;
	          self._clearTimer(id);

	          // Update the seek position for HTML5 Audio.
	          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
	            sound._node.currentTime = seek;
	          }

	          // Seek and emit when ready.
	          var seekAndEmit = function() {
	            self._emit('seek', id);

	            // Restart the playback if the sound was playing.
	            if (playing) {
	              self.play(id, true);
	            }
	          };

	          // Wait for the play lock to be unset before emitting (HTML5 Audio).
	          if (playing && !self._webAudio) {
	            var emitSeek = function() {
	              if (!self._playLock) {
	                seekAndEmit();
	              } else {
	                setTimeout(emitSeek, 0);
	              }
	            };
	            setTimeout(emitSeek, 0);
	          } else {
	            seekAndEmit();
	          }
	        } else {
	          if (self._webAudio) {
	            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
	            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
	            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
	          } else {
	            return sound._node.currentTime;
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
	     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
	     * @return {Boolean} True if playing and false if not.
	     */
	    playing: function(id) {
	      var self = this;

	      // Check the passed sound ID (if any).
	      if (typeof id === 'number') {
	        var sound = self._soundById(id);
	        return sound ? !sound._paused : false;
	      }

	      // Otherwise, loop through all sounds and check if any are playing.
	      for (var i=0; i<self._sounds.length; i++) {
	        if (!self._sounds[i]._paused) {
	          return true;
	        }
	      }

	      return false;
	    },

	    /**
	     * Get the duration of this sound. Passing a sound id will return the sprite duration.
	     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
	     * @return {Number} Audio duration in seconds.
	     */
	    duration: function(id) {
	      var self = this;
	      var duration = self._duration;

	      // If we pass an ID, get the sound and return the sprite length.
	      var sound = self._soundById(id);
	      if (sound) {
	        duration = self._sprite[sound._sprite][1] / 1000;
	      }

	      return duration;
	    },

	    /**
	     * Returns the current loaded state of this Howl.
	     * @return {String} 'unloaded', 'loading', 'loaded'
	     */
	    state: function() {
	      return this._state;
	    },

	    /**
	     * Unload and destroy the current Howl object.
	     * This will immediately stop all sound instances attached to this group.
	     */
	    unload: function() {
	      var self = this;

	      // Stop playing any active sounds.
	      var sounds = self._sounds;
	      for (var i=0; i<sounds.length; i++) {
	        // Stop the sound if it is currently playing.
	        if (!sounds[i]._paused) {
	          self.stop(sounds[i]._id);
	        }

	        // Remove the source or disconnect.
	        if (!self._webAudio) {
	          // Set the source to 0-second silence to stop any downloading (except in IE).
	          self._clearSound(sounds[i]._node);

	          // Remove any event listeners.
	          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
	          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);

	          // Release the Audio object back to the pool.
	          Howler._releaseHtml5Audio(sounds[i]._node);
	        }

	        // Empty out all of the nodes.
	        delete sounds[i]._node;

	        // Make sure all timers are cleared out.
	        self._clearTimer(sounds[i]._id);
	      }

	      // Remove the references in the global Howler object.
	      var index = Howler._howls.indexOf(self);
	      if (index >= 0) {
	        Howler._howls.splice(index, 1);
	      }

	      // Delete this sound from the cache (if no other Howl is using it).
	      var remCache = true;
	      for (i=0; i<Howler._howls.length; i++) {
	        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
	          remCache = false;
	          break;
	        }
	      }

	      if (cache && remCache) {
	        delete cache[self._src];
	      }

	      // Clear global errors.
	      Howler.noAudio = false;

	      // Clear out `self`.
	      self._state = 'unloaded';
	      self._sounds = [];
	      self = null;

	      return null;
	    },

	    /**
	     * Listen to a custom event.
	     * @param  {String}   event Event name.
	     * @param  {Function} fn    Listener to call.
	     * @param  {Number}   id    (optional) Only listen to events for this sound.
	     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
	     * @return {Howl}
	     */
	    on: function(event, fn, id, once) {
	      var self = this;
	      var events = self['_on' + event];

	      if (typeof fn === 'function') {
	        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
	      }

	      return self;
	    },

	    /**
	     * Remove a custom event. Call without parameters to remove all events.
	     * @param  {String}   event Event name.
	     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
	     * @param  {Number}   id    (optional) Only remove events for this sound.
	     * @return {Howl}
	     */
	    off: function(event, fn, id) {
	      var self = this;
	      var events = self['_on' + event];
	      var i = 0;

	      // Allow passing just an event and ID.
	      if (typeof fn === 'number') {
	        id = fn;
	        fn = null;
	      }

	      if (fn || id) {
	        // Loop through event store and remove the passed function.
	        for (i=0; i<events.length; i++) {
	          var isId = (id === events[i].id);
	          if (fn === events[i].fn && isId || !fn && isId) {
	            events.splice(i, 1);
	            break;
	          }
	        }
	      } else if (event) {
	        // Clear out all events of this type.
	        self['_on' + event] = [];
	      } else {
	        // Clear out all events of every type.
	        var keys = Object.keys(self);
	        for (i=0; i<keys.length; i++) {
	          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
	            self[keys[i]] = [];
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Listen to a custom event and remove it once fired.
	     * @param  {String}   event Event name.
	     * @param  {Function} fn    Listener to call.
	     * @param  {Number}   id    (optional) Only listen to events for this sound.
	     * @return {Howl}
	     */
	    once: function(event, fn, id) {
	      var self = this;

	      // Setup the event listener.
	      self.on(event, fn, id, 1);

	      return self;
	    },

	    /**
	     * Emit all events of a specific type and pass the sound id.
	     * @param  {String} event Event name.
	     * @param  {Number} id    Sound ID.
	     * @param  {Number} msg   Message to go with event.
	     * @return {Howl}
	     */
	    _emit: function(event, id, msg) {
	      var self = this;
	      var events = self['_on' + event];

	      // Loop through event store and fire all functions.
	      for (var i=events.length-1; i>=0; i--) {
	        // Only fire the listener if the correct ID is used.
	        if (!events[i].id || events[i].id === id || event === 'load') {
	          setTimeout(function(fn) {
	            fn.call(this, id, msg);
	          }.bind(self, events[i].fn), 0);

	          // If this event was setup with `once`, remove it.
	          if (events[i].once) {
	            self.off(event, events[i].fn, events[i].id);
	          }
	        }
	      }

	      // Pass the event type into load queue so that it can continue stepping.
	      self._loadQueue(event);

	      return self;
	    },

	    /**
	     * Queue of actions initiated before the sound has loaded.
	     * These will be called in sequence, with the next only firing
	     * after the previous has finished executing (even if async like play).
	     * @return {Howl}
	     */
	    _loadQueue: function(event) {
	      var self = this;

	      if (self._queue.length > 0) {
	        var task = self._queue[0];

	        // Remove this task if a matching event was passed.
	        if (task.event === event) {
	          self._queue.shift();
	          self._loadQueue();
	        }

	        // Run the task if no event type is passed.
	        if (!event) {
	          task.action();
	        }
	      }

	      return self;
	    },

	    /**
	     * Fired when playback ends at the end of the duration.
	     * @param  {Sound} sound The sound object to work with.
	     * @return {Howl}
	     */
	    _ended: function(sound) {
	      var self = this;
	      var sprite = sound._sprite;

	      // If we are using IE and there was network latency we may be clipping
	      // audio before it completes playing. Lets check the node to make sure it
	      // believes it has completed, before ending the playback.
	      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
	        setTimeout(self._ended.bind(self, sound), 100);
	        return self;
	      }

	      // Should this sound loop?
	      var loop = !!(sound._loop || self._sprite[sprite][2]);

	      // Fire the ended event.
	      self._emit('end', sound._id);

	      // Restart the playback for HTML5 Audio loop.
	      if (!self._webAudio && loop) {
	        self.stop(sound._id, true).play(sound._id);
	      }

	      // Restart this timer if on a Web Audio loop.
	      if (self._webAudio && loop) {
	        self._emit('play', sound._id);
	        sound._seek = sound._start || 0;
	        sound._rateSeek = 0;
	        sound._playStart = Howler.ctx.currentTime;

	        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
	        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
	      }

	      // Mark the node as paused.
	      if (self._webAudio && !loop) {
	        sound._paused = true;
	        sound._ended = true;
	        sound._seek = sound._start || 0;
	        sound._rateSeek = 0;
	        self._clearTimer(sound._id);

	        // Clean up the buffer source.
	        self._cleanBuffer(sound._node);

	        // Attempt to auto-suspend AudioContext if no sounds are still playing.
	        Howler._autoSuspend();
	      }

	      // When using a sprite, end the track.
	      if (!self._webAudio && !loop) {
	        self.stop(sound._id, true);
	      }

	      return self;
	    },

	    /**
	     * Clear the end timer for a sound playback.
	     * @param  {Number} id The sound ID.
	     * @return {Howl}
	     */
	    _clearTimer: function(id) {
	      var self = this;

	      if (self._endTimers[id]) {
	        // Clear the timeout or remove the ended listener.
	        if (typeof self._endTimers[id] !== 'function') {
	          clearTimeout(self._endTimers[id]);
	        } else {
	          var sound = self._soundById(id);
	          if (sound && sound._node) {
	            sound._node.removeEventListener('ended', self._endTimers[id], false);
	          }
	        }

	        delete self._endTimers[id];
	      }

	      return self;
	    },

	    /**
	     * Return the sound identified by this ID, or return null.
	     * @param  {Number} id Sound ID
	     * @return {Object}    Sound object or null.
	     */
	    _soundById: function(id) {
	      var self = this;

	      // Loop through all sounds and find the one with this ID.
	      for (var i=0; i<self._sounds.length; i++) {
	        if (id === self._sounds[i]._id) {
	          return self._sounds[i];
	        }
	      }

	      return null;
	    },

	    /**
	     * Return an inactive sound from the pool or create a new one.
	     * @return {Sound} Sound playback object.
	     */
	    _inactiveSound: function() {
	      var self = this;

	      self._drain();

	      // Find the first inactive node to recycle.
	      for (var i=0; i<self._sounds.length; i++) {
	        if (self._sounds[i]._ended) {
	          return self._sounds[i].reset();
	        }
	      }

	      // If no inactive node was found, create a new one.
	      return new Sound(self);
	    },

	    /**
	     * Drain excess inactive sounds from the pool.
	     */
	    _drain: function() {
	      var self = this;
	      var limit = self._pool;
	      var cnt = 0;
	      var i = 0;

	      // If there are less sounds than the max pool size, we are done.
	      if (self._sounds.length < limit) {
	        return;
	      }

	      // Count the number of inactive sounds.
	      for (i=0; i<self._sounds.length; i++) {
	        if (self._sounds[i]._ended) {
	          cnt++;
	        }
	      }

	      // Remove excess inactive sounds, going in reverse order.
	      for (i=self._sounds.length - 1; i>=0; i--) {
	        if (cnt <= limit) {
	          return;
	        }

	        if (self._sounds[i]._ended) {
	          // Disconnect the audio source when using Web Audio.
	          if (self._webAudio && self._sounds[i]._node) {
	            self._sounds[i]._node.disconnect(0);
	          }

	          // Remove sounds until we have the pool size.
	          self._sounds.splice(i, 1);
	          cnt--;
	        }
	      }
	    },

	    /**
	     * Get all ID's from the sounds pool.
	     * @param  {Number} id Only return one ID if one is passed.
	     * @return {Array}    Array of IDs.
	     */
	    _getSoundIds: function(id) {
	      var self = this;

	      if (typeof id === 'undefined') {
	        var ids = [];
	        for (var i=0; i<self._sounds.length; i++) {
	          ids.push(self._sounds[i]._id);
	        }

	        return ids;
	      } else {
	        return [id];
	      }
	    },

	    /**
	     * Load the sound back into the buffer source.
	     * @param  {Sound} sound The sound object to work with.
	     * @return {Howl}
	     */
	    _refreshBuffer: function(sound) {
	      var self = this;

	      // Setup the buffer source for playback.
	      sound._node.bufferSource = Howler.ctx.createBufferSource();
	      sound._node.bufferSource.buffer = cache[self._src];

	      // Connect to the correct node.
	      if (sound._panner) {
	        sound._node.bufferSource.connect(sound._panner);
	      } else {
	        sound._node.bufferSource.connect(sound._node);
	      }

	      // Setup looping and playback rate.
	      sound._node.bufferSource.loop = sound._loop;
	      if (sound._loop) {
	        sound._node.bufferSource.loopStart = sound._start || 0;
	        sound._node.bufferSource.loopEnd = sound._stop || 0;
	      }
	      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

	      return self;
	    },

	    /**
	     * Prevent memory leaks by cleaning up the buffer source after playback.
	     * @param  {Object} node Sound's audio node containing the buffer source.
	     * @return {Howl}
	     */
	    _cleanBuffer: function(node) {
	      var self = this;
	      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

	      if (Howler._scratchBuffer && node.bufferSource) {
	        node.bufferSource.onended = null;
	        node.bufferSource.disconnect(0);
	        if (isIOS) {
	          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
	        }
	      }
	      node.bufferSource = null;

	      return self;
	    },

	    /**
	     * Set the source to a 0-second silence to stop any downloading (except in IE).
	     * @param  {Object} node Audio node to clear.
	     */
	    _clearSound: function(node) {
	      var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
	      if (!checkIE) {
	        node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
	      }
	    }
	  };

	  /** Single Sound Methods **/
	  /***************************************************************************/

	  /**
	   * Setup the sound object, which each node attached to a Howl group is contained in.
	   * @param {Object} howl The Howl parent group.
	   */
	  var Sound = function(howl) {
	    this._parent = howl;
	    this.init();
	  };
	  Sound.prototype = {
	    /**
	     * Initialize a new Sound object.
	     * @return {Sound}
	     */
	    init: function() {
	      var self = this;
	      var parent = self._parent;

	      // Setup the default parameters.
	      self._muted = parent._muted;
	      self._loop = parent._loop;
	      self._volume = parent._volume;
	      self._rate = parent._rate;
	      self._seek = 0;
	      self._paused = true;
	      self._ended = true;
	      self._sprite = '__default';

	      // Generate a unique ID for this sound.
	      self._id = ++Howler._counter;

	      // Add itself to the parent's pool.
	      parent._sounds.push(self);

	      // Create the new node.
	      self.create();

	      return self;
	    },

	    /**
	     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
	     * @return {Sound}
	     */
	    create: function() {
	      var self = this;
	      var parent = self._parent;
	      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

	      if (parent._webAudio) {
	        // Create the gain node for controlling volume (the source will connect to this).
	        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
	        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
	        self._node.paused = true;
	        self._node.connect(Howler.masterGain);
	      } else {
	        // Get an unlocked Audio object from the pool.
	        self._node = Howler._obtainHtml5Audio();

	        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
	        self._errorFn = self._errorListener.bind(self);
	        self._node.addEventListener('error', self._errorFn, false);

	        // Listen for 'canplaythrough' event to let us know the sound is ready.
	        self._loadFn = self._loadListener.bind(self);
	        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

	        // Setup the new audio node.
	        self._node.src = parent._src;
	        self._node.preload = 'auto';
	        self._node.volume = volume * Howler.volume();

	        // Begin loading the source.
	        self._node.load();
	      }

	      return self;
	    },

	    /**
	     * Reset the parameters of this sound to the original state (for recycle).
	     * @return {Sound}
	     */
	    reset: function() {
	      var self = this;
	      var parent = self._parent;

	      // Reset all of the parameters of this sound.
	      self._muted = parent._muted;
	      self._loop = parent._loop;
	      self._volume = parent._volume;
	      self._rate = parent._rate;
	      self._seek = 0;
	      self._rateSeek = 0;
	      self._paused = true;
	      self._ended = true;
	      self._sprite = '__default';

	      // Generate a new ID so that it isn't confused with the previous sound.
	      self._id = ++Howler._counter;

	      return self;
	    },

	    /**
	     * HTML5 Audio error listener callback.
	     */
	    _errorListener: function() {
	      var self = this;

	      // Fire an error event and pass back the code.
	      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

	      // Clear the event listener.
	      self._node.removeEventListener('error', self._errorFn, false);
	    },

	    /**
	     * HTML5 Audio canplaythrough listener callback.
	     */
	    _loadListener: function() {
	      var self = this;
	      var parent = self._parent;

	      // Round up the duration to account for the lower precision in HTML5 Audio.
	      parent._duration = Math.ceil(self._node.duration * 10) / 10;

	      // Setup a sprite if none is defined.
	      if (Object.keys(parent._sprite).length === 0) {
	        parent._sprite = {__default: [0, parent._duration * 1000]};
	      }

	      if (parent._state !== 'loaded') {
	        parent._state = 'loaded';
	        parent._emit('load');
	        parent._loadQueue();
	      }

	      // Clear the event listener.
	      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
	    }
	  };

	  /** Helper Methods **/
	  /***************************************************************************/

	  var cache = {};

	  /**
	   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
	   * @param  {Howl} self
	   */
	  var loadBuffer = function(self) {
	    var url = self._src;

	    // Check if the buffer has already been cached and use it instead.
	    if (cache[url]) {
	      // Set the duration from the cache.
	      self._duration = cache[url].duration;

	      // Load the sound into this Howl.
	      loadSound(self);

	      return;
	    }

	    if (/^data:[^;]+;base64,/.test(url)) {
	      // Decode the base64 data URI without XHR, since some browsers don't support it.
	      var data = atob(url.split(',')[1]);
	      var dataView = new Uint8Array(data.length);
	      for (var i=0; i<data.length; ++i) {
	        dataView[i] = data.charCodeAt(i);
	      }

	      decodeAudioData(dataView.buffer, self);
	    } else {
	      // Load the buffer from the URL.
	      var xhr = new XMLHttpRequest();
	      xhr.open('GET', url, true);
	      xhr.withCredentials = self._xhrWithCredentials;
	      xhr.responseType = 'arraybuffer';
	      xhr.onload = function() {
	        // Make sure we get a successful response back.
	        var code = (xhr.status + '')[0];
	        if (code !== '0' && code !== '2' && code !== '3') {
	          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
	          return;
	        }

	        decodeAudioData(xhr.response, self);
	      };
	      xhr.onerror = function() {
	        // If there is an error, switch to HTML5 Audio.
	        if (self._webAudio) {
	          self._html5 = true;
	          self._webAudio = false;
	          self._sounds = [];
	          delete cache[url];
	          self.load();
	        }
	      };
	      safeXhrSend(xhr);
	    }
	  };

	  /**
	   * Send the XHR request wrapped in a try/catch.
	   * @param  {Object} xhr XHR to send.
	   */
	  var safeXhrSend = function(xhr) {
	    try {
	      xhr.send();
	    } catch (e) {
	      xhr.onerror();
	    }
	  };

	  /**
	   * Decode audio data from an array buffer.
	   * @param  {ArrayBuffer} arraybuffer The audio data.
	   * @param  {Howl}        self
	   */
	  var decodeAudioData = function(arraybuffer, self) {
	    // Fire a load error if something broke.
	    var error = function() {
	      self._emit('loaderror', null, 'Decoding audio data failed.');
	    };

	    // Load the sound on success.
	    var success = function(buffer) {
	      if (buffer && self._sounds.length > 0) {
	        cache[self._src] = buffer;
	        loadSound(self, buffer);
	      } else {
	        error();
	      }
	    };

	    // Decode the buffer into an audio source.
	    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
	      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
	    } else {
	      Howler.ctx.decodeAudioData(arraybuffer, success, error);
	    }
	  };

	  /**
	   * Sound is now loaded, so finish setting everything up and fire the loaded event.
	   * @param  {Howl} self
	   * @param  {Object} buffer The decoded buffer sound source.
	   */
	  var loadSound = function(self, buffer) {
	    // Set the duration.
	    if (buffer && !self._duration) {
	      self._duration = buffer.duration;
	    }

	    // Setup a sprite if none is defined.
	    if (Object.keys(self._sprite).length === 0) {
	      self._sprite = {__default: [0, self._duration * 1000]};
	    }

	    // Fire the loaded event.
	    if (self._state !== 'loaded') {
	      self._state = 'loaded';
	      self._emit('load');
	      self._loadQueue();
	    }
	  };

	  /**
	   * Setup the audio context when available, or switch to HTML5 Audio mode.
	   */
	  var setupAudioContext = function() {
	    // If we have already detected that Web Audio isn't supported, don't run this step again.
	    if (!Howler.usingWebAudio) {
	      return;
	    }

	    // Check if we are using Web Audio and setup the AudioContext if we are.
	    try {
	      if (typeof AudioContext !== 'undefined') {
	        Howler.ctx = new AudioContext();
	      } else if (typeof webkitAudioContext !== 'undefined') {
	        Howler.ctx = new webkitAudioContext();
	      } else {
	        Howler.usingWebAudio = false;
	      }
	    } catch(e) {
	      Howler.usingWebAudio = false;
	    }

	    // If the audio context creation still failed, set using web audio to false.
	    if (!Howler.ctx) {
	      Howler.usingWebAudio = false;
	    }

	    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
	    // If it is, disable Web Audio as it causes crashing.
	    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
	    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
	    var version = appVersion ? parseInt(appVersion[1], 10) : null;
	    if (iOS && version && version < 9) {
	      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
	      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
	        Howler.usingWebAudio = false;
	      }
	    }

	    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
	    if (Howler.usingWebAudio) {
	      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
	      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
	      Howler.masterGain.connect(Howler.ctx.destination);
	    }

	    // Re-run the setup on Howler.
	    Howler._setup();
	  };

	  // Add support for CommonJS libraries such as browserify.
	  {
	    exports.Howler = Howler;
	    exports.Howl = Howl;
	  }

	  // Define globally in case AMD is not available or unused.
	  if (typeof window !== 'undefined') {
	    window.HowlerGlobal = HowlerGlobal;
	    window.Howler = Howler;
	    window.Howl = Howl;
	    window.Sound = Sound;
	  } else if (typeof commonjsGlobal !== 'undefined') { // Add to global in Node.js (for testing, etc).
	    commonjsGlobal.HowlerGlobal = HowlerGlobal;
	    commonjsGlobal.Howler = Howler;
	    commonjsGlobal.Howl = Howl;
	    commonjsGlobal.Sound = Sound;
	  }
	})();


	/*!
	 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
	 *  
	 *  howler.js v2.1.2
	 *  howlerjs.com
	 *
	 *  (c) 2013-2019, James Simpson of GoldFire Studios
	 *  goldfirestudios.com
	 *
	 *  MIT License
	 */

	(function() {

	  // Setup default properties.
	  HowlerGlobal.prototype._pos = [0, 0, 0];
	  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

	  /** Global Methods **/
	  /***************************************************************************/

	  /**
	   * Helper method to update the stereo panning position of all current Howls.
	   * Future Howls will not use this value unless explicitly set.
	   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
	   * @return {Howler/Number}     Self or current stereo panning value.
	   */
	  HowlerGlobal.prototype.stereo = function(pan) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self.ctx || !self.ctx.listener) {
	      return self;
	    }

	    // Loop through all Howls and update their stereo panning.
	    for (var i=self._howls.length-1; i>=0; i--) {
	      self._howls[i].stereo(pan);
	    }

	    return self;
	  };

	  /**
	   * Get/set the position of the listener in 3D cartesian space. Sounds using
	   * 3D position will be relative to the listener's position.
	   * @param  {Number} x The x-position of the listener.
	   * @param  {Number} y The y-position of the listener.
	   * @param  {Number} z The z-position of the listener.
	   * @return {Howler/Array}   Self or current listener position.
	   */
	  HowlerGlobal.prototype.pos = function(x, y, z) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self.ctx || !self.ctx.listener) {
	      return self;
	    }

	    // Set the defaults for optional 'y' & 'z'.
	    y = (typeof y !== 'number') ? self._pos[1] : y;
	    z = (typeof z !== 'number') ? self._pos[2] : z;

	    if (typeof x === 'number') {
	      self._pos = [x, y, z];

	      if (typeof self.ctx.listener.positionX !== 'undefined') {
	        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
	        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
	        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
	      } else {
	        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
	      }
	    } else {
	      return self._pos;
	    }

	    return self;
	  };

	  /**
	   * Get/set the direction the listener is pointing in the 3D cartesian space.
	   * A front and up vector must be provided. The front is the direction the
	   * face of the listener is pointing, and up is the direction the top of the
	   * listener is pointing. Thus, these values are expected to be at right angles
	   * from each other.
	   * @param  {Number} x   The x-orientation of the listener.
	   * @param  {Number} y   The y-orientation of the listener.
	   * @param  {Number} z   The z-orientation of the listener.
	   * @param  {Number} xUp The x-orientation of the top of the listener.
	   * @param  {Number} yUp The y-orientation of the top of the listener.
	   * @param  {Number} zUp The z-orientation of the top of the listener.
	   * @return {Howler/Array}     Returns self or the current orientation vectors.
	   */
	  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self.ctx || !self.ctx.listener) {
	      return self;
	    }

	    // Set the defaults for optional 'y' & 'z'.
	    var or = self._orientation;
	    y = (typeof y !== 'number') ? or[1] : y;
	    z = (typeof z !== 'number') ? or[2] : z;
	    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
	    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
	    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

	    if (typeof x === 'number') {
	      self._orientation = [x, y, z, xUp, yUp, zUp];

	      if (typeof self.ctx.listener.forwardX !== 'undefined') {
	        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
	        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
	        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
	        self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
	        self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
	        self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
	      } else {
	        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
	      }
	    } else {
	      return or;
	    }

	    return self;
	  };

	  /** Group Methods **/
	  /***************************************************************************/

	  /**
	   * Add new properties to the core init.
	   * @param  {Function} _super Core init method.
	   * @return {Howl}
	   */
	  Howl.prototype.init = (function(_super) {
	    return function(o) {
	      var self = this;

	      // Setup user-defined default properties.
	      self._orientation = o.orientation || [1, 0, 0];
	      self._stereo = o.stereo || null;
	      self._pos = o.pos || null;
	      self._pannerAttr = {
	        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
	        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
	        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
	        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
	        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
	        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
	        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
	        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
	      };

	      // Setup event listeners.
	      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
	      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
	      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

	      // Complete initilization with howler.js core's init function.
	      return _super.call(this, o);
	    };
	  })(Howl.prototype.init);

	  /**
	   * Get/set the stereo panning of the audio source for this sound or all in the group.
	   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
	   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
	   * @return {Howl/Number}    Returns self or the current stereo panning value.
	   */
	  Howl.prototype.stereo = function(pan, id) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }

	    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
	    if (self._state !== 'loaded') {
	      self._queue.push({
	        event: 'stereo',
	        action: function() {
	          self.stereo(pan, id);
	        }
	      });

	      return self;
	    }

	    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
	    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

	    // Setup the group's stereo panning if no ID is passed.
	    if (typeof id === 'undefined') {
	      // Return the group's stereo panning if no parameters are passed.
	      if (typeof pan === 'number') {
	        self._stereo = pan;
	        self._pos = [pan, 0, 0];
	      } else {
	        return self._stereo;
	      }
	    }

	    // Change the streo panning of one or all sounds in group.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      // Get the sound.
	      var sound = self._soundById(ids[i]);

	      if (sound) {
	        if (typeof pan === 'number') {
	          sound._stereo = pan;
	          sound._pos = [pan, 0, 0];

	          if (sound._node) {
	            // If we are falling back, make sure the panningModel is equalpower.
	            sound._pannerAttr.panningModel = 'equalpower';

	            // Check if there is a panner setup and create a new one if not.
	            if (!sound._panner || !sound._panner.pan) {
	              setupPanner(sound, pannerType);
	            }

	            if (pannerType === 'spatial') {
	              if (typeof sound._panner.positionX !== 'undefined') {
	                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
	                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
	                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
	              } else {
	                sound._panner.setPosition(pan, 0, 0);
	              }
	            } else {
	              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
	            }
	          }

	          self._emit('stereo', sound._id);
	        } else {
	          return sound._stereo;
	        }
	      }
	    }

	    return self;
	  };

	  /**
	   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
	   * @param  {Number} x  The x-position of the audio source.
	   * @param  {Number} y  The y-position of the audio source.
	   * @param  {Number} z  The z-position of the audio source.
	   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
	   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
	   */
	  Howl.prototype.pos = function(x, y, z, id) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }

	    // If the sound hasn't loaded, add it to the load queue to change position when capable.
	    if (self._state !== 'loaded') {
	      self._queue.push({
	        event: 'pos',
	        action: function() {
	          self.pos(x, y, z, id);
	        }
	      });

	      return self;
	    }

	    // Set the defaults for optional 'y' & 'z'.
	    y = (typeof y !== 'number') ? 0 : y;
	    z = (typeof z !== 'number') ? -0.5 : z;

	    // Setup the group's spatial position if no ID is passed.
	    if (typeof id === 'undefined') {
	      // Return the group's spatial position if no parameters are passed.
	      if (typeof x === 'number') {
	        self._pos = [x, y, z];
	      } else {
	        return self._pos;
	      }
	    }

	    // Change the spatial position of one or all sounds in group.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      // Get the sound.
	      var sound = self._soundById(ids[i]);

	      if (sound) {
	        if (typeof x === 'number') {
	          sound._pos = [x, y, z];

	          if (sound._node) {
	            // Check if there is a panner setup and create a new one if not.
	            if (!sound._panner || sound._panner.pan) {
	              setupPanner(sound, 'spatial');
	            }

	            if (typeof sound._panner.positionX !== 'undefined') {
	              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
	              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
	              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
	            } else {
	              sound._panner.setPosition(x, y, z);
	            }
	          }

	          self._emit('pos', sound._id);
	        } else {
	          return sound._pos;
	        }
	      }
	    }

	    return self;
	  };

	  /**
	   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
	   * space. Depending on how direction the sound is, based on the `cone` attributes,
	   * a sound pointing away from the listener can be quiet or silent.
	   * @param  {Number} x  The x-orientation of the source.
	   * @param  {Number} y  The y-orientation of the source.
	   * @param  {Number} z  The z-orientation of the source.
	   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
	   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
	   */
	  Howl.prototype.orientation = function(x, y, z, id) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }

	    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
	    if (self._state !== 'loaded') {
	      self._queue.push({
	        event: 'orientation',
	        action: function() {
	          self.orientation(x, y, z, id);
	        }
	      });

	      return self;
	    }

	    // Set the defaults for optional 'y' & 'z'.
	    y = (typeof y !== 'number') ? self._orientation[1] : y;
	    z = (typeof z !== 'number') ? self._orientation[2] : z;

	    // Setup the group's spatial orientation if no ID is passed.
	    if (typeof id === 'undefined') {
	      // Return the group's spatial orientation if no parameters are passed.
	      if (typeof x === 'number') {
	        self._orientation = [x, y, z];
	      } else {
	        return self._orientation;
	      }
	    }

	    // Change the spatial orientation of one or all sounds in group.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      // Get the sound.
	      var sound = self._soundById(ids[i]);

	      if (sound) {
	        if (typeof x === 'number') {
	          sound._orientation = [x, y, z];

	          if (sound._node) {
	            // Check if there is a panner setup and create a new one if not.
	            if (!sound._panner) {
	              // Make sure we have a position to setup the node with.
	              if (!sound._pos) {
	                sound._pos = self._pos || [0, 0, -0.5];
	              }

	              setupPanner(sound, 'spatial');
	            }

	            if (typeof sound._panner.orientationX !== 'undefined') {
	              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
	              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
	              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
	            } else {
	              sound._panner.setOrientation(x, y, z);
	            }
	          }

	          self._emit('orientation', sound._id);
	        } else {
	          return sound._orientation;
	        }
	      }
	    }

	    return self;
	  };

	  /**
	   * Get/set the panner node's attributes for a sound or group of sounds.
	   * This method can optionall take 0, 1 or 2 arguments.
	   *   pannerAttr() -> Returns the group's values.
	   *   pannerAttr(id) -> Returns the sound id's values.
	   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
	   *   pannerAttr(o, id) -> Set's the values of passed sound id.
	   *
	   *   Attributes:
	   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
	   *                      inside of which there will be no volume reduction.
	   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
	   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
	   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
	   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
	   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
	   *                     listener. Can be `linear`, `inverse` or `exponential.
	   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
	   *                   will not be reduced any further.
	   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
	   *                   This is simply a variable of the distance model and has a different effect depending on which model
	   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
	   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
	   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, 鈭瀅`
	   *                     with `inverse` and `exponential`.
	   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
	   *                     Can be `HRTF` or `equalpower`.
	   *
	   * @return {Howl/Object} Returns self or current panner attributes.
	   */
	  Howl.prototype.pannerAttr = function() {
	    var self = this;
	    var args = arguments;
	    var o, id, sound;

	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }

	    // Determine the values based on arguments.
	    if (args.length === 0) {
	      // Return the group's panner attribute values.
	      return self._pannerAttr;
	    } else if (args.length === 1) {
	      if (typeof args[0] === 'object') {
	        o = args[0];

	        // Set the grou's panner attribute values.
	        if (typeof id === 'undefined') {
	          if (!o.pannerAttr) {
	            o.pannerAttr = {
	              coneInnerAngle: o.coneInnerAngle,
	              coneOuterAngle: o.coneOuterAngle,
	              coneOuterGain: o.coneOuterGain,
	              distanceModel: o.distanceModel,
	              maxDistance: o.maxDistance,
	              refDistance: o.refDistance,
	              rolloffFactor: o.rolloffFactor,
	              panningModel: o.panningModel
	            };
	          }

	          self._pannerAttr = {
	            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
	            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
	            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
	            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
	            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
	            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
	            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
	            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
	          };
	        }
	      } else {
	        // Return this sound's panner attribute values.
	        sound = self._soundById(parseInt(args[0], 10));
	        return sound ? sound._pannerAttr : self._pannerAttr;
	      }
	    } else if (args.length === 2) {
	      o = args[0];
	      id = parseInt(args[1], 10);
	    }

	    // Update the values of the specified sounds.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      sound = self._soundById(ids[i]);

	      if (sound) {
	        // Merge the new values into the sound.
	        var pa = sound._pannerAttr;
	        pa = {
	          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
	          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
	          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
	          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
	          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
	          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
	          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
	          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
	        };

	        // Update the panner values or create a new panner if none exists.
	        var panner = sound._panner;
	        if (panner) {
	          panner.coneInnerAngle = pa.coneInnerAngle;
	          panner.coneOuterAngle = pa.coneOuterAngle;
	          panner.coneOuterGain = pa.coneOuterGain;
	          panner.distanceModel = pa.distanceModel;
	          panner.maxDistance = pa.maxDistance;
	          panner.refDistance = pa.refDistance;
	          panner.rolloffFactor = pa.rolloffFactor;
	          panner.panningModel = pa.panningModel;
	        } else {
	          // Make sure we have a position to setup the node with.
	          if (!sound._pos) {
	            sound._pos = self._pos || [0, 0, -0.5];
	          }

	          // Create a new panner node.
	          setupPanner(sound, 'spatial');
	        }
	      }
	    }

	    return self;
	  };

	  /** Single Sound Methods **/
	  /***************************************************************************/

	  /**
	   * Add new properties to the core Sound init.
	   * @param  {Function} _super Core Sound init method.
	   * @return {Sound}
	   */
	  Sound.prototype.init = (function(_super) {
	    return function() {
	      var self = this;
	      var parent = self._parent;

	      // Setup user-defined default properties.
	      self._orientation = parent._orientation;
	      self._stereo = parent._stereo;
	      self._pos = parent._pos;
	      self._pannerAttr = parent._pannerAttr;

	      // Complete initilization with howler.js core Sound's init function.
	      _super.call(this);

	      // If a stereo or position was specified, set it up.
	      if (self._stereo) {
	        parent.stereo(self._stereo);
	      } else if (self._pos) {
	        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
	      }
	    };
	  })(Sound.prototype.init);

	  /**
	   * Override the Sound.reset method to clean up properties from the spatial plugin.
	   * @param  {Function} _super Sound reset method.
	   * @return {Sound}
	   */
	  Sound.prototype.reset = (function(_super) {
	    return function() {
	      var self = this;
	      var parent = self._parent;

	      // Reset all spatial plugin properties on this sound.
	      self._orientation = parent._orientation;
	      self._stereo = parent._stereo;
	      self._pos = parent._pos;
	      self._pannerAttr = parent._pannerAttr;

	      // If a stereo or position was specified, set it up.
	      if (self._stereo) {
	        parent.stereo(self._stereo);
	      } else if (self._pos) {
	        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
	      } else if (self._panner) {
	        // Disconnect the panner.
	        self._panner.disconnect(0);
	        self._panner = undefined;
	        parent._refreshBuffer(self);
	      }

	      // Complete resetting of the sound.
	      return _super.call(this);
	    };
	  })(Sound.prototype.reset);

	  /** Helper Methods **/
	  /***************************************************************************/

	  /**
	   * Create a new panner node and save it on the sound.
	   * @param  {Sound} sound Specific sound to setup panning on.
	   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
	   */
	  var setupPanner = function(sound, type) {
	    type = type || 'spatial';

	    // Create the new panner node.
	    if (type === 'spatial') {
	      sound._panner = Howler.ctx.createPanner();
	      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
	      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
	      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
	      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
	      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
	      sound._panner.refDistance = sound._pannerAttr.refDistance;
	      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
	      sound._panner.panningModel = sound._pannerAttr.panningModel;

	      if (typeof sound._panner.positionX !== 'undefined') {
	        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
	        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
	        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
	      } else {
	        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
	      }

	      if (typeof sound._panner.orientationX !== 'undefined') {
	        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
	        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
	        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
	      } else {
	        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
	      }
	    } else {
	      sound._panner = Howler.ctx.createStereoPanner();
	      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
	    }

	    sound._panner.connect(sound._node);

	    // Update the connections.
	    if (!sound._paused) {
	      sound._parent.pause(sound._id, true).play(sound._id, true);
	    }
	  };
	})();
	});
	var howler_1 = howler.Howler;
	var howler_2 = howler.Howl;

	var instances = {};
	function playSound(uuid, options, name) {
	    if (options === void 0) { options = {}; }
	    var assetConfig = getAssetByUUID(uuid);
	    if (assetConfig) {
	        var url = assetConfig.url;
	        var opts = {
	            src: [url],
	            autoplay: false,
	        };
	        injectProperties(opts, options);
	        var key_1 = name || uuid;
	        var _a = opts.keep, keep = _a === void 0 ? false : _a;
	        var sound = void 0;
	        if (keep) {
	            var data = instances[key_1];
	            if (data) {
	                sound = data.sound;
	            }
	        }
	        if (!sound) {
	            sound = new howler_2(opts);
	        }
	        instances[key_1] = {
	            sound: sound,
	            keep: keep,
	        };
	        if (!keep) {
	            sound.on('stop', function () {
	                destroySound(key_1);
	            });
	        }
	        sound.play();
	        return sound;
	    }
	}
	function stopSound(name) {
	    var instance = instances[name];
	    if (instance) {
	        var sound = instance.sound, keep = instance.keep;
	        sound.stop();
	    }
	}
	function destroySound(name) {
	    delete instances[name];
	}
	function mute(muted) {
	    if (muted === void 0) { muted = true; }
	    howler_1.mute(muted);
	}
	function preloadSound(url, uuid) {
	    var sound = new howler_2({
	        src: url,
	        preload: true,
	    });
	    instances[uuid] = {
	        sound: sound,
	        keep: true,
	    };
	}

	var Loader = (function (_super) {
	    tslib_1.__extends(Loader, _super);
	    function Loader() {
	        var _this = _super.call(this) || this;
	        _this.caches = {};
	        _this.crossOrigin = true;
	        _this._instanceType = "Loader";
	        return _this;
	    }
	    Loader.prototype.loadSheet = function (url) {
	        var _this = this;
	        var config;
	        return this.loadJson(url)
	            .then(function (json) {
	            var file = (config = json).file;
	            return _this.loadTexture(file);
	        })
	            .then(function (texture) {
	            createTextureSheet(texture.baseTexture, config.frames);
	            return config;
	        });
	    };
	    Loader.prototype.loadRaw = function (url, uuid, type) {
	        var _this = this;
	        var data = this.caches[uuid || url];
	        if (data) {
	            return Promise.resolve(data);
	        }
	        else {
	            return httpRequest(url, 'get', {}, type)
	                .then(function (data) {
	                _this.cache(uuid || url, data);
	                return data;
	            });
	        }
	    };
	    Loader.prototype.loadJson = function (url, uuid) {
	        return this.loadRaw(url, uuid, 'json');
	    };
	    Loader.prototype.loadText = function (url, uuid) {
	        return this.loadRaw(url, uuid, 'text');
	    };
	    Loader.prototype.loadSound = function (url, uuid) {
	        preloadSound(url, uuid);
	        return Promise.resolve();
	    };
	    Loader.prototype.loadImage = function (url, uuid) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            var img = _this.caches[uuid || url];
	            if (img) {
	                resolve(img);
	            }
	            else {
	                img = new Image();
	                if (_this.crossOrigin) {
	                    img.setAttribute('crossOrigin', 'anonymous');
	                }
	                img.onload = function () {
	                    _this.cache(uuid || url, img);
	                    resolve(img);
	                };
	                img.onerror = function (e) {
	                    reject(e);
	                };
	                img.src = url;
	            }
	        });
	    };
	    Loader.prototype.loadTexture = function (url, uuid) {
	        return this.loadImage(url)
	            .then(function (image) {
	            return TextureCache[uuid || url] = Texture.from(image);
	        });
	    };
	    Loader.prototype.cache = function (name, data) {
	        if (this.caches[name]) ;
	        this.caches[name] = data;
	    };
	    Loader.prototype.get = function (name) {
	        return this.caches[name];
	    };
	    return Loader;
	}(EventDispatcher));
	var globalLoader = new Loader();

	var padding$1 = 50;
	var styleFields = {
	    color: 'fillStyle',
	    stroke: 'lineWidth',
	    strokeColor: 'strokeStyle',
	    font: 'font',
	};
	var TextField = (function (_super) {
	    tslib_1.__extends(TextField, _super);
	    function TextField() {
	        var _this = _super.call(this) || this;
	        _this._textAlpha = 1;
	        _this._textAlign = exports.TEXT_ALIGN.LEFT;
	        _this._verticalAlign = exports.VERTICAL_ALIGN.UP;
	        _this._lineSpacing = 0;
	        _this._lineType = exports.TEXT_lINETYPE.SINGLE;
	        _this._text = "";
	        _this._pureText = '';
	        _this._styleCache = [];
	        _this._font = "Arial";
	        _this._size = 12;
	        _this._fillColor = "#000";
	        _this._strokeColor = "#ffffff";
	        _this._stroke = 0;
	        _this._italic = false;
	        _this._bold = false;
	        _this._border = false;
	        _this._shadowColor = '#000';
	        _this._shadowBlur = 0;
	        _this._shadowOffset = new ObservablePoint(_this.onShadowOffsetChange, _this);
	        _this.realLines = [];
	        _this._instanceType = "TextFieldNode";
	        var canvas = document.createElement('canvas');
	        canvas.width = 3;
	        canvas.height = 3;
	        var texture = Texture.fromCanvas(canvas, exports.SCALE_MODES.LINEAR, 'textCanvas');
	        texture.orig = new Rectangle();
	        _this.texture = texture;
	        Texture.addToCache(_this._texture, _this._texture.baseTexture.textureCacheIds[0]);
	        _this.canvas = canvas;
	        _this.context = canvas.getContext("2d");
	        _this.dirty = true;
	        return _this;
	    }
	    Object.defineProperty(TextField.prototype, "textAlpha", {
	        get: function () {
	            return this._textAlpha;
	        },
	        set: function (value) {
	            if (this._textAlpha != value) {
	                this._textAlpha = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "textAlign", {
	        get: function () {
	            return this._textAlign;
	        },
	        set: function (value) {
	            if (this._textAlign != value) {
	                this._textAlign = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "verticalAlign", {
	        get: function () {
	            return this._verticalAlign;
	        },
	        set: function (value) {
	            if (this._verticalAlign != value) {
	                this._verticalAlign = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "width", {
	        get: function () {
	            if (this._width)
	                return this._width;
	            this.updateText();
	            return this.scale.x * this.getLocalBounds().width;
	        },
	        set: function (value) {
	            if (this._width !== value) {
	                this._width = value;
	                this.dirty = true;
	                this.dispatchEvent(Event.RESIZE);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "height", {
	        get: function () {
	            if (this._height)
	                return this._height;
	            this.updateText();
	            return this.scale.y * this.getLocalBounds().height;
	        },
	        set: function (value) {
	            if (this._height !== value) {
	                this._height = value;
	                this.dirty = true;
	                this.dispatchEvent(Event.RESIZE);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "lineSpacing", {
	        get: function () {
	            return this._lineSpacing;
	        },
	        set: function (value) {
	            if (this._lineSpacing != value) {
	                this._lineSpacing = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "lineType", {
	        get: function () {
	            return this._lineType;
	        },
	        set: function (value) {
	            if (this._lineType != value) {
	                this._lineType = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "text", {
	        get: function () {
	            return this.pureText;
	        },
	        set: function (value) {
	            this._setText(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype._setText = function (value) {
	        if (this._text != value) {
	            this._text = value;
	            this.dirty = true;
	            this.dispatchEvent(Event.RESIZE);
	        }
	    };
	    Object.defineProperty(TextField.prototype, "textFlow", {
	        get: function () {
	            return this._textFlow;
	        },
	        set: function (value) {
	            this._textFlow = value;
	            this.dirty = true;
	            this._styleCache.splice(0);
	            var text = '';
	            for (var _i = 0, _a = this._textFlow; _i < _a.length; _i++) {
	                var item = _a[_i];
	                text += item.text;
	            }
	            this._pureText = text;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "isPureText", {
	        get: function () {
	            return !this._textFlow || this._textFlow.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "pureText", {
	        get: function () {
	            return this.isPureText ? this._text : this._pureText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype.getStyle = function (index) {
	        if (!this.textFlow) {
	            return null;
	        }
	        if (this._styleCache[index]) {
	            return this._styleCache[index];
	        }
	        var targetItem;
	        var count = 0;
	        for (var _i = 0, _a = this._textFlow; _i < _a.length; _i++) {
	            var item = _a[_i];
	            count += item.text.length;
	            if (index < count) {
	                targetItem = item;
	                break;
	            }
	        }
	        if (targetItem && targetItem.style) {
	            this._styleCache[index] = targetItem.style;
	        }
	        return targetItem.style;
	    };
	    Object.defineProperty(TextField.prototype, "font", {
	        get: function () {
	            return this._font;
	        },
	        set: function (value) {
	            if (this._font != value) {
	                this._font = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "size", {
	        get: function () {
	            return this._size;
	        },
	        set: function (value) {
	            if (this._size != value) {
	                this._size = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "fillColor", {
	        get: function () {
	            return this._fillColor;
	        },
	        set: function (value) {
	            if (this._fillColor != value) {
	                this._fillColor = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "strokeColor", {
	        get: function () {
	            return this._strokeColor;
	        },
	        set: function (value) {
	            if (this._strokeColor != value) {
	                this._strokeColor = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "stroke", {
	        get: function () {
	            return this._stroke;
	        },
	        set: function (value) {
	            if (this._stroke != value) {
	                this._stroke = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "italic", {
	        get: function () {
	            return this._italic;
	        },
	        set: function (value) {
	            if (this._italic != value) {
	                this._italic = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "bold", {
	        get: function () {
	            return this._bold;
	        },
	        set: function (value) {
	            if (this._bold != value) {
	                this._bold = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "border", {
	        get: function () {
	            return this._border;
	        },
	        set: function (value) {
	            if (this._border != value) {
	                this._border = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "shadowColor", {
	        get: function () {
	            return this._shadowColor;
	        },
	        set: function (value) {
	            if (this._shadowColor != value) {
	                this._shadowColor = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "shadowBlur", {
	        get: function () {
	            return this._shadowBlur;
	        },
	        set: function (value) {
	            if (this._shadowBlur != value) {
	                this._shadowBlur = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "shadowOffset", {
	        get: function () {
	            return this._shadowOffset;
	        },
	        set: function (value) {
	            if (this._shadowOffset != value) {
	                this._shadowOffset = value;
	                this.dirty = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "shadowOffsetX", {
	        get: function () {
	            return this.position.x;
	        },
	        set: function (value) {
	            this._shadowOffset.x = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "shadowOffsetY", {
	        get: function () {
	            return this.position.y;
	        },
	        set: function (value) {
	            this._shadowOffset.y = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype.onShadowOffsetChange = function () {
	        this.dirty = true;
	    };
	    TextField.prototype._setupFont = function (font, size, bold, italic) {
	        var fontStyle = size;
	        fontStyle += "px ";
	        fontStyle += font;
	        if (bold) {
	            fontStyle = "bold " + fontStyle;
	        }
	        if (italic) {
	            fontStyle = "italic " + fontStyle;
	        }
	        return fontStyle;
	    };
	    TextField.prototype._prepContext = function (ctx) {
	        var s = this;
	        ctx.font = this._setupFont(s._font, s._size, s._bold, s._italic);
	        ctx.textAlign = s.isPureText ? (s._textAlign || exports.TEXT_ALIGN.LEFT) : exports.TEXT_ALIGN.LEFT;
	        ctx.textBaseline = s.isPureText ? 'top' : 'bottom';
	        if (typeof (s._fillColor) == "number")
	            s._fillColor = hex2string(s._fillColor);
	        ctx.fillStyle = s._textAlpha === 1 ? s._fillColor : getRGBA(s._fillColor, s._textAlpha);
	    };
	    TextField.prototype.getTextWidth = function (lineIndex) {
	        if (lineIndex === void 0) { lineIndex = 0; }
	        var s = this;
	        s.updateText();
	        var ctx = s.context;
	        var obj = ctx.measureText(s.realLines[lineIndex]);
	        return obj.width;
	    };
	    Object.defineProperty(TextField.prototype, "lines", {
	        get: function () {
	            return this.realLines.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype._getMeasuredWidth = function (text, style) {
	        var ctx = this.context;
	        ctx.save();
	        if (style && style.font) {
	            ctx.font = style.font;
	        }
	        var w = ctx.measureText(text).width;
	        ctx.restore();
	        return w;
	    };
	    TextField.prototype._getFontSize = function (style) {
	        if (style && style.font) {
	            return parseInt(style.font);
	        }
	    };
	    TextField.prototype.updateText = function () {
	        var s = this;
	        var text = s.pureText;
	        if (!text) {
	            s.canvas.width = 0;
	            s.canvas.height = 0;
	            if (!this._width && !this._height) {
	                s._localBoundsSelf.clear();
	            }
	            this.anchorTexture = { x: 0, y: 0 };
	            this.updateTexture();
	            return;
	        }
	        var measureCache = {};
	        if (!s.dirty)
	            return;
	        s.dirty = false;
	        var isPureText = s.isPureText;
	        text += "";
	        var can = s.canvas;
	        var ctx = s.context;
	        var hardLines = text.toString().split(/(?:\r\n|\r|\n)/);
	        var realLines = [];
	        var lineWidths = [];
	        var lineHeights = [];
	        s.realLines = realLines;
	        s._prepContext(ctx);
	        var textWidth = s._width;
	        if (isPureText && text.indexOf("\n") < 0 && s.lineType == exports.TEXT_lINETYPE.SINGLE) {
	            realLines[realLines.length] = hardLines[0];
	            var str = hardLines[0];
	            var lineW = s._getMeasuredWidth(str);
	            textWidth = textWidth || lineW;
	            if (lineW > textWidth) {
	                var w = s._getMeasuredWidth(str[0]);
	                var lineStr = str[0];
	                var wordW = 0;
	                var strLen = str.length;
	                for (var j = 1; j < strLen; j++) {
	                    wordW = ctx.measureText(str[j]).width;
	                    w += wordW;
	                    if (w > textWidth) {
	                        realLines[0] = lineStr;
	                        break;
	                    }
	                    else {
	                        lineStr += str[j];
	                    }
	                }
	            }
	        }
	        else {
	            var shouldMeasureTextWidth = !textWidth;
	            var index_1 = 0;
	            for (var i = 0, l = hardLines.length; i < l; i++) {
	                var str = hardLines[i];
	                if (!str)
	                    continue;
	                var lineWidth = 0;
	                for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
	                    var char = str_1[_i];
	                    var charWidth = measureChar(char, index_1);
	                    lineWidth += charWidth;
	                    index_1++;
	                }
	                if (shouldMeasureTextWidth) {
	                    textWidth = Math.max(lineWidth, textWidth);
	                }
	            }
	            index_1 = 0;
	            for (var i = 0, l = hardLines.length; i < l; i++) {
	                var str = hardLines[i];
	                if (!str)
	                    continue;
	                var w = measureChar(str[0], index_1++);
	                var lineStr = str[0];
	                var wordW = 0;
	                var strLen = str.length;
	                var lineHeight = 0;
	                for (var j = 1; j < strLen; j++) {
	                    wordW = measureChar(str[j], index_1);
	                    w += wordW;
	                    if (w > textWidth) {
	                        realLines[realLines.length] = lineStr;
	                        lineWidths.push(w - wordW);
	                        lineHeights.push(lineHeight || s.size);
	                        lineStr = str[j];
	                        w = wordW;
	                        lineHeight = 0;
	                    }
	                    else {
	                        lineStr += str[j];
	                    }
	                    var style = this.getStyle(index_1);
	                    var size = this._getFontSize(style);
	                    if (size) {
	                        if (size > lineHeight) {
	                            lineHeight = size;
	                        }
	                    }
	                    index_1++;
	                }
	                realLines[realLines.length] = lineStr;
	                lineWidths.push(w);
	                lineHeights.push(lineHeight || s.size);
	            }
	        }
	        var maxH, trueHeight;
	        if (isPureText) {
	            trueHeight = s.size * realLines.length + s._lineSpacing * (realLines.length - 1);
	        }
	        else {
	            trueHeight = lineHeights.reduce(function (a, b) {
	                return a + b;
	            }, 0) + s._lineSpacing * (realLines.length - 1);
	        }
	        if (s._height) {
	            maxH = s._height;
	        }
	        else {
	            maxH = trueHeight;
	        }
	        var maxW = textWidth;
	        can.width = maxW + padding$1 * 2;
	        can.height = maxH + padding$1 * 2;
	        ctx.clearRect(0, 0, can.width, can.height);
	        if (s.border) {
	            ctx.beginPath();
	            ctx.strokeStyle = "#000";
	            ctx.lineWidth = 1;
	            ctx.strokeRect(padding$1 + 0.5, padding$1 + 0.5, maxW, maxH);
	            ctx.closePath();
	        }
	        var tx = 0;
	        if (isPureText) {
	            if (s._textAlign == exports.TEXT_ALIGN.CENTER) {
	                tx = maxW * 0.5;
	            }
	            else if (s._textAlign == exports.TEXT_ALIGN.RIGHT) {
	                tx = maxW;
	            }
	        }
	        ctx.setTransform(1, 0, 0, 1, tx + padding$1, padding$1);
	        if (this._shadowBlur > 0) {
	            ctx.shadowBlur = this._shadowBlur;
	            ctx.shadowColor = this._shadowColor;
	            ctx.shadowOffsetX = this._shadowOffset.x;
	            ctx.shadowOffsetY = this._shadowOffset.y;
	        }
	        s._prepContext(ctx);
	        var lineH = s._lineSpacing + s.size;
	        var upY = 0;
	        if (s._height) {
	            if (s._verticalAlign == exports.VERTICAL_ALIGN.MIDDLE) {
	                upY = (s._height - trueHeight) * 0.5;
	            }
	            else if (s._verticalAlign == exports.VERTICAL_ALIGN.DOWN) {
	                upY = s._height - trueHeight;
	            }
	        }
	        var index = 0;
	        var lineY = upY;
	        for (var i = 0; i < realLines.length; i++) {
	            var line = realLines[i];
	            if (isPureText) {
	                var y = upY + i * lineH;
	                if (s.stroke) {
	                    ctx.strokeStyle = s.strokeColor;
	                    ctx.lineWidth = s.stroke * 2;
	                    ctx.strokeText(line, 0, y, maxW);
	                }
	                ctx.fillText(line, 0, y, maxW);
	            }
	            else {
	                var lineWidth = lineWidths[i];
	                var lineHeight = lineHeights[i];
	                lineY += s._lineSpacing + lineHeight;
	                var x = 0;
	                if (s._textAlign == exports.TEXT_ALIGN.CENTER) {
	                    x = (maxW - lineWidth) * 0.5;
	                }
	                else if (s._textAlign == exports.TEXT_ALIGN.RIGHT) {
	                    x = maxW - lineWidth;
	                }
	                for (var j = 0, lj = line.length; j < lj; j++) {
	                    var char = line[j];
	                    var style = s.getStyle(index);
	                    if (style) {
	                        ctx.save();
	                        for (var field in styleFields) {
	                            if (style.hasOwnProperty(field)) {
	                                ctx[styleFields[field]] = style[field];
	                            }
	                        }
	                    }
	                    if (s.stroke) {
	                        ctx.strokeStyle = s.strokeColor;
	                        ctx.lineWidth = s.stroke * 2;
	                        ctx.strokeText(char, x, lineY);
	                    }
	                    ctx.fillText(char, x, lineY);
	                    if (style) {
	                        ctx.restore();
	                    }
	                    x += measureChar(char, index);
	                    index++;
	                }
	            }
	        }
	        s.offsetX = -padding$1;
	        s.offsetY = -padding$1;
	        this.anchorTexture = { x: (padding$1 + 0.5) / can.width, y: padding$1 / can.height };
	        s._localBoundsSelf.width = maxW;
	        s._localBoundsSelf.height = maxH;
	        s.updateTexture();
	        function measureChar(char, index) {
	            var key = char + ':';
	            var style;
	            if (!isPureText && index !== undefined) {
	                style = s.getStyle(index);
	                if (style && style.font) {
	                    key += style.font;
	                }
	            }
	            var w = measureCache[key];
	            if (w === undefined) {
	                w = measureCache[char] = s._getMeasuredWidth(char, style);
	            }
	            return w;
	        }
	    };
	    TextField.prototype.updateTexture = function () {
	        var canvas = this.canvas;
	        var texture = this._texture;
	        var baseTexture = texture.baseTexture;
	        baseTexture.hasLoaded = canvas.width && canvas.height ? true : false;
	        baseTexture.width = canvas.width;
	        baseTexture.height = canvas.height;
	        baseTexture.dispatchEvent('update');
	        texture.valid = baseTexture.hasLoaded;
	        texture._frame.width = canvas.width;
	        texture._frame.height = canvas.height;
	        texture.orig.width = texture._frame.width;
	        texture.orig.height = texture._frame.height;
	    };
	    TextField.prototype._renderCanvas = function (renderer) {
	        this.updateText();
	        _super.prototype._renderCanvas.call(this, renderer);
	    };
	    TextField.prototype._renderWebGL = function (renderer) {
	        this.updateText();
	        _super.prototype._renderWebGL.call(this, renderer);
	    };
	    TextField.prototype.destroy = function () {
	        _super.prototype.destroy.call(this);
	    };
	    return TextField;
	}(Sprite));

	var InputText = (function (_super) {
	    tslib_1.__extends(InputText, _super);
	    function InputText(inputType) {
	        if (inputType === void 0) { inputType = 0; }
	        var _this = _super.call(this) || this;
	        _this.inputType = 0;
	        _this.isAutoDownKeyBoard = true;
	        var input = null;
	        var s = _this;
	        s._instanceType = "InputText";
	        if (inputType < 2) {
	            input = document.createElement("input");
	            input.type = InputText._inputTypeList[inputType];
	        }
	        else {
	            input = document.createElement("textarea");
	            input.style.resize = "none";
	            input.style.overflow = "hidden";
	        }
	        s.inputType = inputType;
	        var remove = function () {
	            if (s.isAutoDownKeyBoard && osType != "pc") {
	                s.htmlElement && s.htmlElement.blur();
	            }
	        }.bind(s);
	        s.addEventListener(Event.REMOVED_FROM_STAGE, function (e) {
	            s.stage.removeEventListener(MouseEvent.MOUSE_UP, remove);
	        });
	        s.addEventListener(Event.ADDED_TO_STAGE, function (e) {
	            s.stage.addEventListener(MouseEvent.MOUSE_UP, remove);
	        });
	        s.init(input);
	        return _this;
	    }
	    InputText.prototype.init = function (htmlElement) {
	        _super.prototype.init.call(this, htmlElement);
	        var s = this;
	        s.htmlElement.style.outline = "none";
	        s.htmlElement.style.borderWidth = "thin";
	        s.htmlElement.style.borderColor = "#000";
	    };
	    InputText.prototype.initInfo = function (text, color, align, size, font, showBorder, lineSpacing, textWidth) {
	        var s = this;
	        s.htmlElement.placeholder = text;
	        s.htmlElement.style.font = size + "px " + font;
	        s.htmlElement.style.colorD = color;
	        s.htmlElement.style.textAlign = align;
	        s.border = showBorder;
	        if (s.inputType == 2) {
	            s.htmlElement.style.lineHeight = lineSpacing + "px";
	        }
	        s.textWidth = textWidth;
	    };
	    Object.defineProperty(InputText.prototype, "lineSpacing", {
	        get: function () {
	            return parseInt(this.htmlElement.style.lineHeight);
	        },
	        set: function (value) {
	            this.htmlElement.style.lineHeight = value + "px";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputText.prototype, "bold", {
	        get: function () {
	            return this.htmlElement.style.fontWeight == "bold";
	        },
	        set: function (bold) {
	            var ss = this.htmlElement.style;
	            if (bold) {
	                ss.fontWeight = "bold";
	            }
	            else {
	                ss.fontWeight = "normal";
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputText.prototype, "italic", {
	        get: function () {
	            return this.htmlElement.style.fontStyle == "italic";
	        },
	        set: function (italic) {
	            var s = this.htmlElement.style;
	            if (italic) {
	                s.fontStyle = "italic";
	            }
	            else {
	                s.fontStyle = "normal";
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputText.prototype, "textHeight", {
	        get: function () {
	            return parseInt(this.htmlElement.style.height);
	        },
	        set: function (value) {
	            this.htmlElement.style.height = value + "px";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputText.prototype, "textWidth", {
	        get: function () {
	            return parseInt(this.htmlElement.style.width);
	        },
	        set: function (value) {
	            this.htmlElement.style.width = value + "px";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputText.prototype, "color", {
	        get: function () {
	            return this.htmlElement.style.colorD;
	        },
	        set: function (value) {
	            var ss = this.htmlElement.style;
	            ss.colorD = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputText.prototype, "border", {
	        get: function () {
	            return this.htmlElement.style.borderStyle != "none";
	        },
	        set: function (show) {
	            var s = this;
	            if (show) {
	                s.htmlElement.style.borderStyle = "inset";
	                s.htmlElement.style.backgroundColor = "#fff";
	            }
	            else {
	                s.htmlElement.style.borderStyle = "none";
	                s.htmlElement.style.backgroundColor = "transparent";
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputText.prototype, "text", {
	        get: function () {
	            var s = this;
	            if (s.htmlElement) {
	                return s.htmlElement.value;
	            }
	        },
	        set: function (value) {
	            var s = this;
	            if (s.htmlElement) {
	                s.htmlElement.value = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputText.prototype, "maxCharacters", {
	        get: function () {
	            var l = this.htmlElement.getAttribute("maxlength");
	            if (l === null) {
	                return 0;
	            }
	            else {
	                return l;
	            }
	        },
	        set: function (value) {
	            this.htmlElement.setAttribute("maxlength", value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    InputText.prototype.convertToTextField = function (textField) {
	        if (!this.htmlElement || !this.text)
	            return null;
	        textField = textField || new TextField();
	        textField.fillColor = this.color;
	        textField.text = this.text;
	        textField.size = parseInt(this.htmlElement.style.font.split("px")[0]);
	        textField.textAlign = this.htmlElement.style.textAlign;
	        textField.bold = this.bold;
	        textField.italic = this.italic;
	        textField.width = this.textWidth;
	        textField.lineType = this.inputType == 2 ? exports.TEXT_lINETYPE.MULTI : exports.TEXT_lINETYPE.SINGLE;
	        textField.position.copy(this.position);
	        textField.scale.copy(this.scale);
	        textField.rotation = this.rotation;
	        return textField;
	    };
	    InputText._inputTypeList = ["input", "password", "textarea"];
	    return InputText;
	}(FloatDisplay));

	var EditableText = (function (_super) {
	    tslib_1.__extends(EditableText, _super);
	    function EditableText() {
	        var _this = _super.call(this) || this;
	        _this._prompt = "";
	        _this._promptColor = "#eeeeee";
	        _this._textColor = "#000000";
	        var s = _this;
	        var remove = function () {
	            s.htmlElement && s.htmlElement.blur();
	            s.htmlElement.style.display = "none";
	            if (s.htmlElement.value) {
	                s.text = s.htmlElement.value;
	                s.fillColor = s.textColor;
	            }
	            else {
	                s.text = s.prompt;
	                s.fillColor = s.promptColor;
	            }
	        };
	        _this.addEventListener(MouseEvent.CLICK, function (e) {
	            if (!s.htmlElement) {
	                s.htmlElement = document.createElement("input");
	                s.htmlElement.type = "input";
	                s.htmlElement.style.position = "absolute";
	                s.htmlElement.style.display = "none";
	                s.htmlElement.style.transformOrigin = s.htmlElement.style.WebkitTransformOrigin = "0 0 0";
	                s.htmlElement.style.outline = "none";
	                s.htmlElement.style.borderWidth = "thin";
	                s.htmlElement.style.borderColor = "#000";
	                s.htmlElement.placeholder = "";
	                s.htmlElement.style.borderStyle = "none";
	                s.htmlElement.style.backgroundColor = "transparent";
	                s.stage.rootDiv.insertBefore(s.htmlElement, s.stage.rootDiv.childNodes[0]);
	            }
	            s.htmlElement.style.font = s.size + "px " + this.font;
	            s.htmlElement.style.colorD = s.textColor;
	            s.htmlElement.style.textAlign = s["_textWidth"] ? s.textAlign : exports.TEXT_ALIGN.LEFT;
	            s.htmlElement.style.width = s.width + "px";
	            s.text = "";
	            s.htmlElement.style.display = "block";
	            s.htmlElement.focus();
	            var mtx = s.transform.worldMatrix;
	            var d = devicePixelRatio || 1;
	            console.log(mtx);
	            s.htmlElement.style.transform = s.htmlElement.style.webkitTransform = "matrix(" + (mtx.a / d).toFixed(4) + "," + (mtx.b / d).toFixed(4) + "," + (mtx.c / d).toFixed(4) + "," + (mtx.d / d).toFixed(4) + "," + (mtx.tx / d).toFixed(4) + "," + (mtx.ty / d).toFixed(4) + ")";
	            s.stage.once(MouseEvent.MOUSE_UP, remove);
	        });
	        return _this;
	    }
	    Object.defineProperty(EditableText.prototype, "prompt", {
	        get: function () {
	            return this._prompt;
	        },
	        set: function (value) {
	            if (this._prompt != value) {
	                this._prompt = value;
	                this["dirty"] = true;
	                if (!this.htmlElement || !this.htmlElement.value) {
	                    this.text = this._prompt;
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EditableText.prototype, "promptColor", {
	        get: function () {
	            return this._promptColor;
	        },
	        set: function (value) {
	            if (this._promptColor != value) {
	                this._promptColor = value;
	                this["dirty"] = true;
	                if (!this.htmlElement || !this.htmlElement.value) {
	                    this.fillColor = this._promptColor;
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EditableText.prototype, "textColor", {
	        get: function () {
	            return this._textColor;
	        },
	        set: function (value) {
	            if (this._textColor != value) {
	                this._textColor = value;
	                this["dirty"] = true;
	                if (this.htmlElement && this.htmlElement.value) {
	                    this.fillColor = this._textColor;
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return EditableText;
	}(TextField));

	var ScrollViewBase = (function (_super) {
	    tslib_1.__extends(ScrollViewBase, _super);
	    function ScrollViewBase(maxDistance, isFull) {
	        if (isFull === void 0) { isFull = false; }
	        var _this = _super.call(this) || this;
	        _this.distance = 0;
	        _this.minDis = 0;
	        _this.maskObj = new Graphics();
	        _this.viewPort = new Container();
	        _this.lastValue = 0;
	        _this.speed = 0;
	        _this.addSpeed = 0;
	        _this.isStop = true;
	        _this.maxSpeed = 100;
	        _this.fSpeed = 20;
	        _this.paramXY = "y";
	        _this.paramSize = "height";
	        _this.stopTimes = -1;
	        _this.isMouseDownState = 0;
	        _this.autoScroll = false;
	        _this.isSpringBack = true;
	        var s = _this;
	        s._instanceType = "ScrollContainer";
	        _super.prototype.addChild.call(_this, s.maskObj);
	        _super.prototype.addChild.call(_this, s.viewPort);
	        if (!isFull) {
	            s.viewPort.mask = s.maskObj;
	            s.maskObj.isUsedToMask = false;
	        }
	        s.maskObj.alpha = 0;
	        s.updateViewRect();
	        s.direction = exports.SCROLL_DIRECTION.VERTICAL;
	        s.addEventListener(Event.ADDED_TO_STAGE, function (e) {
	            s.stage.addEventListener(MouseEvent.MOUSE_UP, s.onMouseEvent, s);
	            s.stage.addEventListener(MouseEvent.MOUSE_MOVE, s.onMouseEvent, s);
	        });
	        s.addEventListener(Event.REMOVED_FROM_STAGE, function (e) {
	            s.stage.removeEventListener(MouseEvent.MOUSE_UP, s.onMouseEvent, s);
	            s.stage.removeEventListener(MouseEvent.MOUSE_MOVE, s.onMouseEvent, s);
	        });
	        s.addEventListener(MouseEvent.MOUSE_DOWN, s.onMouseEvent, s, false);
	        s.addEventListener(Event.ENTER_FRAME, function () {
	            var view = s.viewPort;
	            if (s.autoScroll)
	                return;
	            if (!s.isSpringBack) {
	                if (view[s.paramXY] > 0) {
	                    s.addSpeed = 0;
	                    s.speed = 0;
	                    s.isStop = true;
	                    view[s.paramXY] = 0;
	                    return;
	                }
	                else if (view[s.paramXY] < s.distance - s.maxDistance) {
	                    s.addSpeed = 0;
	                    s.speed = 0;
	                    s.isStop = true;
	                    view[s.paramXY] = Math.min(0, s.distance - s.maxDistance);
	                    return;
	                }
	            }
	            if (!s.isStop) {
	                if (Math.abs(s.speed) > 0) {
	                    view[s.paramXY] += s.speed;
	                    if (view[s.paramXY] > 0 || view[s.paramXY] < s.distance - s.maxDistance) {
	                        s.speed += s.addSpeed * s.fSpeed;
	                    }
	                    else {
	                        s.speed += s.addSpeed;
	                    }
	                    if (s.speed * s.addSpeed > 0) {
	                        s.dispatchEvent(Event.ON_SCROLL_STOP);
	                        s.speed = 0;
	                    }
	                }
	                else {
	                    if (s.addSpeed != 0) {
	                        if (view[s.paramXY] > 0 || view[s.paramXY] < s.distance - s.maxDistance) {
	                            var tarP = 0;
	                            if (view[s.paramXY] < s.distance - s.maxDistance) {
	                                if (s.distance < s.maxDistance) {
	                                    tarP = s.distance - s.maxDistance;
	                                }
	                            }
	                            view[s.paramXY] += 0.4 * (tarP - view[s.paramXY]);
	                            if (Math.abs(tarP - view[s.paramXY]) < 0.1) {
	                                s.isStop = true;
	                                if (s.addSpeed > 0) {
	                                    s.dispatchEvent(Event.ON_SCROLL_TO_END);
	                                }
	                                else {
	                                    s.dispatchEvent(Event.ON_SCROLL_TO_HEAD);
	                                }
	                            }
	                        }
	                    }
	                    else {
	                        s.isStop = true;
	                    }
	                }
	            }
	            else {
	                if (s.stopTimes >= 0) {
	                    if (s.stopTimes >= 15) {
	                        s.speed = 0;
	                        if (view[s.paramXY] > 0 || view[s.paramXY] < s.distance - s.maxDistance) {
	                            s.isStop = false;
	                            s.stopTimes = -1;
	                        }
	                    }
	                }
	            }
	        });
	        s.addEventListener(Event.RESIZE, _this.updateViewRect, s);
	        return _this;
	    }
	    Object.defineProperty(ScrollViewBase.prototype, "maxDistance", {
	        get: function () {
	            return this.calMaxDistance();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScrollViewBase.prototype.calMaxDistance = function () {
	        return this.viewPort[this.paramSize] + this.viewPort.getLocalBounds()[this.paramXY];
	    };
	    Object.defineProperty(ScrollViewBase.prototype, "direction", {
	        get: function () {
	            return this._direction;
	        },
	        set: function (value) {
	            this._direction = value;
	            this.updateDirection();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScrollViewBase.prototype.updateDirection = function () {
	        var s = this;
	        if (this._direction === exports.SCROLL_DIRECTION.VERTICAL) {
	            s.distance = s.height;
	            s.paramXY = "y";
	            s.paramSize = 'height';
	        }
	        else {
	            s.distance = s.width;
	            s.paramXY = "x";
	            s.paramSize = 'width';
	        }
	    };
	    ScrollViewBase.prototype.updateViewRect = function () {
	        var s = this;
	        s.maskObj.clear();
	        s.maskObj.beginFill("#000000");
	        s.maskObj.drawRect(0, 0, s.width, s.height);
	        s.maskObj.endFill();
	        this.updateDirection();
	    };
	    ScrollViewBase.prototype.cancelScroll = function () {
	        this.isMouseDownState = 0;
	    };
	    ScrollViewBase.prototype.onMouseEvent = function (e) {
	        var s = this;
	        var view = s.viewPort;
	        if (e.type == MouseEvent.MOUSE_DOWN) {
	            e.stopPropagation();
	            if (!s.isStop) {
	                s.isStop = true;
	            }
	            if (s.autoScroll) {
	                s.autoScroll = false;
	            }
	            if (s._direction === exports.SCROLL_DIRECTION.VERTICAL) {
	                s.lastValue = e.stageY;
	            }
	            else {
	                s.lastValue = e.stageX;
	            }
	            s.speed = 0;
	            s.isMouseDownState = 1;
	        }
	        else if (e.type == MouseEvent.MOUSE_MOVE) {
	            if (s.isMouseDownState == 0)
	                return;
	            if (s.isMouseDownState == 1) {
	                s.dispatchEvent(Event.ON_SCROLL_START);
	            }
	            s.isMouseDownState = 2;
	            var currentValue = void 0;
	            if (s._direction === exports.SCROLL_DIRECTION.VERTICAL) {
	                currentValue = e.stageY;
	            }
	            else {
	                currentValue = e.stageX;
	            }
	            s.speed = currentValue - s.lastValue;
	            if (s.speed > s.minDis) {
	                s.addSpeed = -2;
	                if (s.speed > s.maxSpeed) {
	                    s.speed = s.maxSpeed;
	                }
	            }
	            else if (s.speed < -s.minDis) {
	                if (s.speed < -s.maxSpeed) {
	                    s.speed = -s.maxSpeed;
	                }
	                s.addSpeed = 2;
	            }
	            else {
	                s.speed = 0;
	            }
	            if (s.speed != 0) {
	                var speedPer = 1;
	                if (view[s.paramXY] > 0 || view[s.paramXY] < s.distance - s.maxDistance) {
	                    speedPer = 0.2;
	                }
	                view[s.paramXY] += (currentValue - s.lastValue) * speedPer;
	            }
	            s.lastValue = currentValue;
	            s.stopTimes = 0;
	        }
	        else {
	            s.isStop = false;
	            s.stopTimes = -1;
	            if (s.speed == 0 && s.isMouseDownState == 2) {
	                s.dispatchEvent(Event.ON_SCROLL_STOP);
	            }
	            s.isMouseDownState = 0;
	        }
	    };
	    ScrollViewBase.prototype.scrollTo = function (dis, time) {
	        var s = this;
	        var newDis = s.paramXY == "x" ? s.width : s.height;
	        if (dis < 0) {
	            dis = 0;
	        }
	        else if (dis > s.maxDistance - newDis) {
	            dis = s.maxDistance - newDis;
	        }
	        if (Math.abs(s.viewPort[s.paramXY] + dis) > 2) {
	            s.isStop = true;
	            s.isMouseDownState = 0;
	            s.viewPort[s.paramXY] = -dis;
	        }
	    };
	    ScrollViewBase.prototype.destroy = function () {
	        var s = this;
	        s.maskObj.destroy();
	        s.viewPort.destroy();
	        s.maskObj = null;
	        s.viewPort = null;
	        _super.prototype.destroy.call(this);
	    };
	    return ScrollViewBase;
	}(Container));

	function fieldChanged(onModify) {
	    return function (target, key) {
	        var privateKey = '_' + key;
	        Object.defineProperty(target, key, {
	            enumerable: true,
	            get: function () {
	                return this[privateKey];
	            },
	            set: function (v) {
	                var oldValue = this[privateKey];
	                if (oldValue !== v) {
	                    this[privateKey] = v;
	                    onModify.apply(this, [v, key, oldValue]);
	                }
	            }
	        });
	    };
	}
	var dirtyFieldDetector = fieldChanged(function (value, key, oldValue) {
	    this['__fieldDirty'] = true;
	});
	var deepDirtyFieldDetector = fieldChanged(function (value, key, oldValue) {
	    var scope = this;
	    scope['__fieldDirty'] = true;
	    if (typeof value === 'object') {
	        value['onModify'] = function () {
	            scope['__fieldDirty'] = true;
	        };
	    }
	});
	var dirtyFieldTrigger = fieldChanged(function (value, key, oldValue) {
	    this['onModify'] && this['onModify'](value, key, oldValue);
	});
	var deepDirtyFieldTrigger = fieldChanged(function (value, key, oldValue) {
	    if (this['onModify']) {
	        this['onModify'](value, key, oldValue);
	        if (typeof value === 'object') {
	            value['onModify'] = this['onModify'];
	        }
	    }
	});

	var ScrollListItemBase = (function (_super) {
	    tslib_1.__extends(ScrollListItemBase, _super);
	    function ScrollListItemBase() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ScrollListItemBase.prototype._initData = function (id, data) {
	        this.id = id;
	        this.data = data;
	        if (id >= 0) {
	            this.updateData(data);
	        }
	    };
	    return ScrollListItemBase;
	}(Container));
	var ScrollListBase = (function (_super) {
	    tslib_1.__extends(ScrollListBase, _super);
	    function ScrollListBase() {
	        var _this = _super.call(this) || this;
	        _this._items = null;
	        _this._isInit = 0;
	        _this.data = [];
	        _this.downL = null;
	        _this._lastFirstId = -1;
	        _this._updateId = -1;
	        _this.itemWidth = 0;
	        _this.itemHeight = 0;
	        _this.cols = 1;
	        var s = _this;
	        s._instanceType = "ScrollList";
	        s._items = [];
	        s._itemCount = 0;
	        s.once(Event.ENTER_FRAME, s.onNextFrame, s);
	        s.addEventListener(Event.ENTER_FRAME, s.flushData.bind(s));
	        return _this;
	    }
	    Object.defineProperty(ScrollListBase.prototype, "loadingView", {
	        get: function () {
	            return this.downL;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScrollListBase.prototype.onNextFrame = function (event) {
	        this.updateViewRect();
	    };
	    ScrollListBase.prototype.onModify = function (value, key) {
	    };
	    ScrollListBase.prototype.calMaxDistance = function () {
	        var key = 'item' + this.paramSize.substr(0, 1).toUpperCase() + this.paramSize.substr(1);
	        return this[key] * Math.ceil(this.data.length / this.cols);
	    };
	    ScrollListBase.prototype.updateData = function (data, isReset) {
	        if (isReset === void 0) { isReset = true; }
	        var s = this;
	        if (!s._isInit || isReset) {
	            s.data = data;
	        }
	        else {
	            s.data = s.data.concat(data);
	        }
	        s._isInit = 1;
	        s._lastFirstId = -1;
	    };
	    ScrollListBase.prototype.flushData = function () {
	        var s = this;
	        var items = s._items;
	        if (items.length <= 0) {
	            return;
	        }
	        if (s._isInit > 0) {
	            if (s._updateId != s.viewPort.transform._localID) {
	                var id = s.viewPort[s.paramXY] > 0 ? 0 : (Math.abs(Math.floor(s.viewPort[s.paramXY] / s._itemRow)) - 1) * s.cols;
	                id = id < 0 ? 0 : id;
	                if (id != s._lastFirstId) {
	                    s._lastFirstId = id;
	                    if (id != items[0].id) {
	                        for (var r = 0; r < s.cols; r++) {
	                            if (s.speed > 0) {
	                                items.unshift(items.pop());
	                            }
	                            else {
	                                items.push(items.shift());
	                            }
	                        }
	                    }
	                }
	                for (var i = 0; i < s._itemCount; i++) {
	                    var item = items[i];
	                    if (s._isInit == 1) {
	                        item.sli_id = -1;
	                    }
	                    if (item.sli_id != id) {
	                        if (s.data[id]) {
	                            item._initData(s.data[id] ? id : -1, s.data[id]);
	                        }
	                        item[s.paramXY] = Math.floor(id / s.cols) * s._itemRow;
	                        item[s._disParam] = (id % s.cols) * s._itemCol;
	                        if (s.data[id]) {
	                            item.sli_id = id;
	                            item.visible = true;
	                        }
	                        else {
	                            item.sli_id = -1;
	                            item.visible = false;
	                        }
	                    }
	                    id++;
	                }
	                s._isInit = 2;
	            }
	        }
	    };
	    ScrollListBase.prototype.updateViewRect = function () {
	        _super.prototype.updateViewRect.call(this);
	        var s = this;
	        if (s.itemWidth && s.itemHeight) {
	            s._updateViewRect();
	        }
	    };
	    ScrollListBase.prototype._updateViewRect = function () {
	        var s = this;
	        if (s._direction === exports.SCROLL_DIRECTION.VERTICAL) {
	            if (s.itemHeight <= 0) {
	                return;
	            }
	            s._disParam = "x";
	            s._itemRow = s.itemHeight;
	            s._itemCol = s.itemWidth;
	        }
	        else {
	            if (s.itemWidth <= 0) {
	                return;
	            }
	            s._disParam = "y";
	            s._itemRow = s.itemWidth;
	            s._itemCol = s.itemHeight;
	        }
	        var newCount = (Math.ceil(s.distance / s._itemRow) + 1) * s.cols;
	        if (newCount != s._itemCount) {
	            if (newCount > s._itemCount) {
	                for (var i = s._itemCount; i < newCount; i++) {
	                    var item = s.createItem();
	                    item.id = -1;
	                    item.data = null;
	                    s._items.push(item);
	                    s.viewPort.addChild(item);
	                }
	            }
	            else {
	                for (var i = 0; i < s._itemCount - newCount; i++) {
	                    s.viewPort.removeChild(s._items.pop());
	                }
	            }
	            s._itemCount = newCount;
	            s._lastFirstId = -1;
	        }
	    };
	    ScrollListBase.prototype.createItem = function () {
	        return new this.itemClass();
	    };
	    ScrollListBase.prototype.setLoading = function (downLoading) {
	        var s = this;
	        if (s.downL) {
	            s.viewPort.removeChild(s.downL);
	            s.downL = null;
	        }
	        if (downLoading) {
	            s.downL = downLoading;
	            s.viewPort.addChild(downLoading);
	            s.downL[s.paramXY] = Math.max(s.distance, s.maxDistance);
	        }
	        else {
	            s.isStop = false;
	        }
	    };
	    ScrollListBase.prototype.destroy = function () {
	        var s = this;
	        s._items = null;
	        s.itemClass = null;
	        s.data = null;
	        s.downL = null;
	        _super.prototype.destroy.call(this);
	    };
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], ScrollListBase.prototype, "itemWidth", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], ScrollListBase.prototype, "itemHeight", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], ScrollListBase.prototype, "cols", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], ScrollListBase.prototype, "itemClass", void 0);
	    return ScrollListBase;
	}(ScrollViewBase));

	var Tween = (function () {
	    function Tween(target, props, pluginData) {
	        this._target = null;
	        this._useTicks = false;
	        this.ignoreGlobalPause = false;
	        this.loop = false;
	        this.pluginData = null;
	        this._steps = null;
	        this.paused = false;
	        this.duration = 0;
	        this._prevPos = -1;
	        this.position = null;
	        this._prevPosition = 0;
	        this._stepPosition = 0;
	        this.passive = false;
	        this.initialize(target, props, pluginData);
	    }
	    Tween.get = function (target, props, pluginData, override) {
	        if (pluginData === void 0) { pluginData = null; }
	        if (override === void 0) { override = false; }
	        if (override) {
	            Tween.removeTweens(target);
	        }
	        return new Tween(target, props, pluginData);
	    };
	    Tween.removeTweens = function (target) {
	        if (!target.tween_count) {
	            return;
	        }
	        var tweens = Tween._tweens;
	        for (var i = tweens.length - 1; i >= 0; i--) {
	            if (tweens[i]._target == target) {
	                tweens[i].paused = true;
	                tweens.splice(i, 1);
	            }
	        }
	        target.tween_count = 0;
	    };
	    Tween.pauseTweens = function (target) {
	        if (!target.tween_count) {
	            return;
	        }
	        var tweens = Tween._tweens;
	        for (var i = tweens.length - 1; i >= 0; i--) {
	            if (tweens[i]._target == target) {
	                tweens[i].paused = true;
	            }
	        }
	    };
	    Tween.resumeTweens = function (target) {
	        if (!target.tween_count) {
	            return;
	        }
	        var tweens = Tween._tweens;
	        for (var i = tweens.length - 1; i >= 0; i--) {
	            if (tweens[i]._target == target) {
	                tweens[i].paused = false;
	            }
	        }
	    };
	    Tween.tick = function (timeStamp, paused) {
	        if (paused === void 0) { paused = false; }
	        var delta = timeStamp - Tween._lastTime;
	        Tween._lastTime = timeStamp;
	        var tweens = Tween._tweens.concat();
	        for (var i = tweens.length - 1; i >= 0; i--) {
	            var tween = tweens[i];
	            if ((paused && !tween.ignoreGlobalPause) || tween.paused) {
	                continue;
	            }
	            tween.$tick(tween._useTicks ? 1 : delta);
	        }
	        return false;
	    };
	    Tween.flush = function () {
	        var timeStamp = Date.now();
	        var delta = Tween._lastTime ? (timeStamp - Tween._lastTime) : 16.67;
	        Tween._lastTime = timeStamp;
	        var tweens = Tween._tweens.concat();
	        for (var i = tweens.length - 1; i >= 0; i--) {
	            var tween = tweens[i];
	            if (tween.paused) {
	                continue;
	            }
	            tween.$tick(tween._useTicks ? 1 : delta);
	        }
	    };
	    Tween._register = function (tween, value) {
	        var target = tween._target;
	        var tweens = Tween._tweens;
	        if (value) {
	            if (target) {
	                target.tween_count = target.tween_count > 0 ? target.tween_count + 1 : 1;
	            }
	            tweens.push(tween);
	            if (!Tween._inited) {
	                Tween._inited = true;
	            }
	        }
	        else {
	            if (target) {
	                target.tween_count--;
	            }
	            var i = tweens.length;
	            while (i--) {
	                if (tweens[i] == tween) {
	                    tweens.splice(i, 1);
	                    return;
	                }
	            }
	        }
	    };
	    Tween.removeAllTweens = function () {
	        var tweens = Tween._tweens;
	        for (var i = 0, l = tweens.length; i < l; i++) {
	            var tween = tweens[i];
	            tween.paused = true;
	            tween._target.tween_count = 0;
	        }
	        tweens.length = 0;
	    };
	    Tween.prototype.initialize = function (target, props, pluginData) {
	        this._target = target;
	        if (props) {
	            this._useTicks = props.useTicks;
	            this.ignoreGlobalPause = props.ignoreGlobalPause;
	            this.loop = props.loop;
	            if (props.onChange) {
	                this.onChange = props.onChange.bind(props.onChangeObj);
	            }
	            else {
	                this.onChange = null;
	            }
	            if (props.override) {
	                Tween.removeTweens(target);
	            }
	        }
	        this.pluginData = pluginData || {};
	        this._curQueueProps = {};
	        this._initQueueProps = {};
	        this._steps = [];
	        if (props && props.paused) {
	            this.paused = true;
	        }
	        else {
	            Tween._register(this, true);
	        }
	        if (props && props.position != null) {
	            this.setPosition(props.position, Tween.NONE);
	        }
	    };
	    Tween.prototype.setPosition = function (value, actionsMode) {
	        if (actionsMode === void 0) { actionsMode = 1; }
	        if (value < 0) {
	            value = 0;
	        }
	        var t = value;
	        var end = false;
	        if (t >= this.duration) {
	            if (this.loop) {
	                var newTime = t % this.duration;
	                if (t > 0 && newTime === 0) {
	                    t = this.duration;
	                }
	                else {
	                    t = newTime;
	                }
	            }
	            else {
	                t = this.duration;
	                end = true;
	            }
	        }
	        if (t == this._prevPos) {
	            return end;
	        }
	        if (end) {
	            this.setPaused(true);
	        }
	        var prevPos = this._prevPos;
	        this.position = this._prevPos = t;
	        this._prevPosition = value;
	        if (this._target) {
	            if (this._steps.length > 0) {
	                var l = this._steps.length;
	                var stepIndex = -1;
	                for (var i = 0; i < l; i++) {
	                    if (this._steps[i].type == "step") {
	                        stepIndex = i;
	                        if (this._steps[i].t <= t && this._steps[i].t + this._steps[i].d >= t) {
	                            break;
	                        }
	                    }
	                }
	                for (var i = 0; i < l; i++) {
	                    if (this._steps[i].type == "action") {
	                        if (actionsMode != 0) {
	                            if (this._useTicks) {
	                                this._runAction(this._steps[i], t, t);
	                            }
	                            else if (actionsMode == 1 && t < prevPos) {
	                                if (prevPos != this.duration) {
	                                    this._runAction(this._steps[i], prevPos, this.duration);
	                                }
	                                this._runAction(this._steps[i], 0, t, true);
	                            }
	                            else {
	                                this._runAction(this._steps[i], prevPos, t);
	                            }
	                        }
	                    }
	                    else if (this._steps[i].type == "step") {
	                        if (stepIndex == i) {
	                            var step = this._steps[stepIndex];
	                            this._updateTargetProps(step, Math.min((this._stepPosition = t - step.t) / step.d, 1));
	                        }
	                    }
	                }
	            }
	        }
	        this.onChange && this.onChange();
	        return end;
	    };
	    Tween.prototype._runAction = function (action, startPos, endPos, includeStart) {
	        if (includeStart === void 0) { includeStart = false; }
	        var sPos = startPos;
	        var ePos = endPos;
	        if (startPos > endPos) {
	            sPos = endPos;
	            ePos = startPos;
	        }
	        var pos = action.t;
	        if (pos == ePos || (pos > sPos && pos < ePos) || (includeStart && pos == startPos)) {
	            action.f.apply(action.o, action.p);
	        }
	    };
	    Tween.prototype._updateTargetProps = function (step, ratio) {
	        var p0, p1, v, v0, v1, arr;
	        if (!step && ratio == 1) {
	            this.passive = false;
	            p0 = p1 = this._curQueueProps;
	        }
	        else {
	            this.passive = !!step.v;
	            if (this.passive) {
	                return;
	            }
	            if (step.e) {
	                ratio = step.e(ratio, 0, 1, 1);
	            }
	            p0 = step.p0;
	            p1 = step.p1;
	        }
	        for (var n in this._initQueueProps) {
	            if ((v0 = p0[n]) == null) {
	                p0[n] = v0 = this._initQueueProps[n];
	            }
	            if ((v1 = p1[n]) == null) {
	                p1[n] = v1 = v0;
	            }
	            if (v0 == v1 || ratio == 0 || ratio == 1 || (typeof (v0) != "number")) {
	                v = ratio == 1 ? v1 : v0;
	            }
	            else {
	                v = v0 + (v1 - v0) * ratio;
	            }
	            var ignore = false;
	            if (arr = Tween._plugins[n]) {
	                for (var i = 0, l = arr.length; i < l; i++) {
	                    var v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step && p0 == p1, !step);
	                    if (v2 == Tween.IGNORE) {
	                        ignore = true;
	                    }
	                    else {
	                        v = v2;
	                    }
	                }
	            }
	            if (!ignore) {
	                this._target[n] = v;
	            }
	        }
	    };
	    Tween.prototype.setPaused = function (value) {
	        if (this.paused == value) {
	            return this;
	        }
	        this.paused = value;
	        Tween._register(this, !value);
	        return this;
	    };
	    Tween.prototype._cloneProps = function (props) {
	        var o = {};
	        for (var n in props) {
	            o[n] = props[n];
	        }
	        return o;
	    };
	    Tween.prototype._addStep = function (o) {
	        if (o.d > 0) {
	            o.type = "step";
	            this._steps.push(o);
	            o.t = this.duration;
	            this.duration += o.d;
	        }
	        return this;
	    };
	    Tween.prototype._appendQueueProps = function (o) {
	        var arr, oldValue, i, l, injectProps;
	        for (var n in o) {
	            if (this._initQueueProps[n] === undefined) {
	                oldValue = this._target[n];
	                if (arr = Tween._plugins[n]) {
	                    for (i = 0, l = arr.length; i < l; i++) {
	                        oldValue = arr[i].init(this, n, oldValue);
	                    }
	                }
	                this._initQueueProps[n] = this._curQueueProps[n] = (oldValue === undefined) ? null : oldValue;
	            }
	            else {
	                oldValue = this._curQueueProps[n];
	            }
	        }
	        for (var n in o) {
	            oldValue = this._curQueueProps[n];
	            if (arr = Tween._plugins[n]) {
	                injectProps = injectProps || {};
	                for (i = 0, l = arr.length; i < l; i++) {
	                    if (arr[i].step) {
	                        arr[i].step(this, n, oldValue, o[n], injectProps);
	                    }
	                }
	            }
	            this._curQueueProps[n] = o[n];
	        }
	        if (injectProps) {
	            this._appendQueueProps(injectProps);
	        }
	        return this._curQueueProps;
	    };
	    Tween.prototype._addAction = function (o) {
	        o.t = this.duration;
	        o.type = "action";
	        this._steps.push(o);
	        return this;
	    };
	    Tween.prototype._set = function (props, o) {
	        for (var n in props) {
	            o[n] = props[n];
	        }
	    };
	    Tween.prototype.wait = function (duration, passive) {
	        if (duration == null || duration <= 0) {
	            return this;
	        }
	        var o = this._cloneProps(this._curQueueProps);
	        return this._addStep({ d: duration, p0: o, p1: o, v: passive });
	    };
	    Tween.prototype.to = function (props, duration, ease) {
	        if (ease === void 0) { ease = undefined; }
	        if (isNaN(duration) || duration < 0) {
	            duration = 0;
	        }
	        this._addStep({ d: duration || 0, p0: this._cloneProps(this._curQueueProps), e: ease, p1: this._cloneProps(this._appendQueueProps(props)) });
	        return this.set(props);
	    };
	    Tween.prototype.call = function (callback, thisObj, params) {
	        if (thisObj === void 0) { thisObj = undefined; }
	        if (params === void 0) { params = undefined; }
	        return this._addAction({ f: callback, p: params ? params : [], o: thisObj ? thisObj : this._target });
	    };
	    Tween.prototype.set = function (props, target) {
	        if (target === void 0) { target = null; }
	        this._appendQueueProps(props);
	        return this._addAction({ f: this._set, o: this, p: [props, target ? target : this._target] });
	    };
	    Tween.prototype.play = function (tween) {
	        if (!tween) {
	            tween = this;
	        }
	        return this.call(tween.setPaused, tween, [false]);
	    };
	    Tween.prototype.pause = function (tween) {
	        if (!tween) {
	            tween = this;
	        }
	        return this.call(tween.setPaused, tween, [true]);
	    };
	    Tween.prototype.$tick = function (delta) {
	        if (this.paused) {
	            return;
	        }
	        this.setPosition(this._prevPosition + delta);
	    };
	    Tween.NONE = 0;
	    Tween.LOOP = 1;
	    Tween.REVERSE = 2;
	    Tween._tweens = [];
	    Tween.IGNORE = {};
	    Tween._plugins = {};
	    Tween._inited = false;
	    Tween._lastTime = 0;
	    return Tween;
	}());

	var Ease = (function () {
	    function Ease() {
	    }
	    Ease.get = function (amount) {
	        if (amount < -1) {
	            amount = -1;
	        }
	        if (amount > 1) {
	            amount = 1;
	        }
	        return function (t) {
	            if (amount == 0) {
	                return t;
	            }
	            if (amount < 0) {
	                return t * (t * -amount + 1 + amount);
	            }
	            return t * ((2 - t) * amount + (1 - amount));
	        };
	    };
	    Ease.getPowIn = function (pow) {
	        return function (t) {
	            return Math.pow(t, pow);
	        };
	    };
	    Ease.getPowOut = function (pow) {
	        return function (t) {
	            return 1 - Math.pow(1 - t, pow);
	        };
	    };
	    Ease.getPowInOut = function (pow) {
	        return function (t) {
	            if ((t *= 2) < 1)
	                return 0.5 * Math.pow(t, pow);
	            return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow));
	        };
	    };
	    Ease.sineIn = function (t) {
	        return 1 - Math.cos(t * Math.PI / 2);
	    };
	    Ease.sineOut = function (t) {
	        return Math.sin(t * Math.PI / 2);
	    };
	    Ease.sineInOut = function (t) {
	        return -0.5 * (Math.cos(Math.PI * t) - 1);
	    };
	    Ease.getBackIn = function (amount) {
	        return function (t) {
	            return t * t * ((amount + 1) * t - amount);
	        };
	    };
	    Ease.getBackOut = function (amount) {
	        return function (t) {
	            return (--t * t * ((amount + 1) * t + amount) + 1);
	        };
	    };
	    Ease.getBackInOut = function (amount) {
	        amount *= 1.525;
	        return function (t) {
	            if ((t *= 2) < 1)
	                return 0.5 * (t * t * ((amount + 1) * t - amount));
	            return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
	        };
	    };
	    Ease.circIn = function (t) {
	        return -(Math.sqrt(1 - t * t) - 1);
	    };
	    Ease.circOut = function (t) {
	        return Math.sqrt(1 - (--t) * t);
	    };
	    Ease.circInOut = function (t) {
	        if ((t *= 2) < 1) {
	            return -0.5 * (Math.sqrt(1 - t * t) - 1);
	        }
	        return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	    };
	    Ease.bounceIn = function (t) {
	        return 1 - Ease.bounceOut(1 - t);
	    };
	    Ease.bounceOut = function (t) {
	        if (t < 1 / 2.75) {
	            return (7.5625 * t * t);
	        }
	        else if (t < 2 / 2.75) {
	            return (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
	        }
	        else if (t < 2.5 / 2.75) {
	            return (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);
	        }
	        else {
	            return (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
	        }
	    };
	    Ease.bounceInOut = function (t) {
	        if (t < 0.5)
	            return Ease.bounceIn(t * 2) * .5;
	        return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
	    };
	    Ease.getElasticIn = function (amplitude, period) {
	        var pi2 = Math.PI * 2;
	        return function (t) {
	            if (t == 0 || t == 1)
	                return t;
	            var s = period / pi2 * Math.asin(1 / amplitude);
	            return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
	        };
	    };
	    Ease.getElasticOut = function (amplitude, period) {
	        var pi2 = Math.PI * 2;
	        return function (t) {
	            if (t == 0 || t == 1)
	                return t;
	            var s = period / pi2 * Math.asin(1 / amplitude);
	            return (amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1);
	        };
	    };
	    Ease.getElasticInOut = function (amplitude, period) {
	        var pi2 = Math.PI * 2;
	        return function (t) {
	            var s = period / pi2 * Math.asin(1 / amplitude);
	            if ((t *= 2) < 1)
	                return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
	            return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1;
	        };
	    };
	    Ease.quadIn = Ease.getPowIn(2);
	    Ease.quadOut = Ease.getPowOut(2);
	    Ease.quadInOut = Ease.getPowInOut(2);
	    Ease.cubicIn = Ease.getPowIn(3);
	    Ease.cubicOut = Ease.getPowOut(3);
	    Ease.cubicInOut = Ease.getPowInOut(3);
	    Ease.quartIn = Ease.getPowIn(4);
	    Ease.quartOut = Ease.getPowOut(4);
	    Ease.quartInOut = Ease.getPowInOut(4);
	    Ease.quintIn = Ease.getPowIn(5);
	    Ease.quintOut = Ease.getPowOut(5);
	    Ease.quintInOut = Ease.getPowInOut(5);
	    Ease.backIn = Ease.getBackIn(1.7);
	    Ease.backOut = Ease.getBackOut(1.7);
	    Ease.backInOut = Ease.getBackInOut(1.7);
	    Ease.elasticIn = Ease.getElasticIn(1, 0.3);
	    Ease.elasticOut = Ease.getElasticOut(1, 0.3);
	    Ease.elasticInOut = Ease.getElasticInOut(1, 0.3 * 1.5);
	    return Ease;
	}());

	var Node$1 = (function (_super) {
	    tslib_1.__extends(Node, _super);
	    function Node() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.isUI = true;
	        return _this;
	    }
	    return Node;
	}(Container));

	function playViewEffect(name, params, mutex, lastView, view, container, callback) {
	    var effect = name ? effects[name] : effects.simple;
	    effect = effect || effects.simple;
	    effect(params || {}, mutex, lastView, view, container, callback);
	}
	var effects = {
	    simple: function (params, mutex, lastView, view, container, callback) {
	        if (mutex) {
	            container.removeChild(lastView);
	        }
	        else {
	            if (lastView && !view) {
	                container.removeChild(lastView);
	            }
	        }
	        if (view) {
	            if (!view.parent) {
	                container.addChild(view);
	            }
	            view.visible = true;
	        }
	        callback();
	    },
	    fade: function (params, mutex, lastView, view, container, callback) {
	        var _a = params.duration, duration = _a === void 0 ? 300 : _a;
	        if (mutex) {
	            fadeOut(function () {
	                fadeIn(callback);
	            });
	        }
	        else {
	            fadeIn(callback);
	        }
	        function fadeOut(callback) {
	            if (lastView) {
	                Tween.get(lastView, null, null, true)
	                    .to({ alpha: 0 }, duration)
	                    .call(function () {
	                    container.removeChild(lastView);
	                    lastView.alpha = 1;
	                    callback();
	                });
	            }
	            else {
	                callback();
	            }
	        }
	        function fadeIn(callback) {
	            if (view) {
	                view.visible = true;
	                view.alpha = 0;
	                Tween.get(view, null, null, true)
	                    .to({ alpha: 1 }, params.duration || 300)
	                    .call(function () {
	                    callback();
	                });
	            }
	            else {
	                callback();
	            }
	        }
	    },
	    flew: function (params, mutex, lastView, view, container, callback) {
	        var _a = params.duration, duration = _a === void 0 ? 300 : _a, _b = params.direction, direction = _b === void 0 ? 'top' : _b, _c = params.ease, ease = _c === void 0 ? 'backOut' : _c;
	        var _d = exports.gameStage.stage, width = _d.width, height = _d.height;
	        var outPos = {};
	        switch (direction) {
	            case 'left':
	                outPos.x = -width;
	                break;
	            case 'right':
	                outPos.x = width;
	                break;
	            case 'top':
	                outPos.y = -height;
	                break;
	            case 'bottom':
	                outPos.y = height;
	                break;
	        }
	        var inEase = ease;
	        var outEase = ease.indexOf('Out') ? ease.replace('Out', 'In') : ease.replace('In', 'Out');
	        if (mutex) {
	            flewOut(function () {
	                flewIn(callback);
	            });
	        }
	        else {
	            if (lastView && !view) {
	                flewOut(callback);
	            }
	            else {
	                flewIn(callback);
	            }
	        }
	        function flewOut(callback) {
	            if (lastView) {
	                Tween.get(lastView, null, null, true)
	                    .to(outPos, duration, Ease[outEase])
	                    .call(function () {
	                    container.removeChild(lastView);
	                    injectProp(lastView, outPos);
	                    callback();
	                });
	            }
	            else {
	                callback();
	            }
	        }
	        function flewIn(callback) {
	            if (view) {
	                var inPos = {
	                    x: view.x,
	                    y: view.y,
	                };
	                view.visible = true;
	                injectProp(view, outPos);
	                Tween.get(view, null, null, true)
	                    .to(inPos, duration, Ease[inEase])
	                    .call(function () {
	                    callback();
	                });
	            }
	            else {
	                callback();
	            }
	        }
	    },
	    hulu: function (params, mutex, lastView, view, container, callback) {
	        var _a = params.duration, duration = _a === void 0 ? 300 : _a, _b = params.ease, ease = _b === void 0 ? 'backOut' : _b, _c = params.x, x = _c === void 0 ? 0 : _c, _d = params.y, y = _d === void 0 ? 0 : _d;
	        var inEase = ease;
	        var outEase = ease.indexOf('Out') ? ease.replace('Out', 'In') : ease.replace('In', 'Out');
	        var outPos = {
	            x: parseInt(x),
	            y: parseInt(y),
	            scaleX: 0, scaleY: 0,
	        };
	        if (mutex) {
	            huluOut(function () {
	                huluIn(callback);
	            });
	        }
	        else {
	            if (lastView && !view) {
	                huluOut(callback);
	            }
	            else {
	                huluIn(callback);
	            }
	        }
	        function huluOut(callback) {
	            if (lastView) {
	                outPos.x -= lastView.width / 2;
	                outPos.y -= lastView.height / 2;
	                Tween.get(lastView, null, null, true)
	                    .to(outPos, duration, Ease[outEase])
	                    .call(function () {
	                    container.removeChild(lastView);
	                    injectProp(lastView, { scaleX: 1, scaleY: 1 });
	                    callback();
	                });
	            }
	            else {
	                callback();
	            }
	        }
	        function huluIn(callback) {
	            if (view) {
	                var inPos = {
	                    x: view.x,
	                    y: view.y,
	                    scaleX: 1, scaleY: 1
	                };
	                outPos.x -= view.width / 2;
	                outPos.y -= view.height / 2;
	                view.visible = true;
	                injectProp(view, outPos);
	                Tween.get(view, null, null, true)
	                    .to(inPos, duration, Ease[inEase])
	                    .call(function () {
	                    view.anchorX = 0;
	                    view.anchorY = 0;
	                    callback();
	                });
	            }
	            else {
	                callback();
	            }
	        }
	    },
	    zoom: function (params, mutex, lastView, view, container, callback) {
	        var _a = params.duration, duration = _a === void 0 ? 300 : _a, _b = params.ease, ease = _b === void 0 ? 'backOut' : _b;
	        var inEase = ease;
	        var outEase = ease.indexOf('Out') ? ease.replace('Out', 'In') : ease.replace('In', 'Out');
	        if (mutex) {
	            zoomOut(function () {
	                zoomIn(callback);
	            });
	        }
	        else {
	            if (lastView && !view) {
	                zoomOut(callback);
	            }
	            else {
	                zoomIn(callback);
	            }
	        }
	        function zoomOut(callback) {
	            if (lastView) {
	                Tween.get(lastView, null, null, true)
	                    .to({ scaleX: 0, scaleY: 0 }, duration, Ease[outEase])
	                    .call(function () {
	                    container.removeChild(lastView);
	                    injectProp(view, { scaleX: 1, scaleY: 1 });
	                    callback();
	                });
	            }
	            else {
	                callback();
	            }
	        }
	        function zoomIn(callback) {
	            if (view) {
	                view.anchorX = view.width / 2;
	                view.anchorY = view.height / 2;
	                view.visible = true;
	                injectProp(view, { scaleX: 0, scaleY: 0 });
	                Tween.get(view, null, null, true)
	                    .to({ scaleX: 1, scaleY: 1 }, duration, Ease[inEase])
	                    .call(function () {
	                    view.anchorX = 0;
	                    view.anchorY = 0;
	                    callback();
	                });
	            }
	            else {
	                callback();
	            }
	        }
	    },
	};

	var StackContainer = (function (_super) {
	    tslib_1.__extends(StackContainer, _super);
	    function StackContainer(mutex, inserted) {
	        if (mutex === void 0) { mutex = true; }
	        if (inserted === void 0) { inserted = 0; }
	        var _this = _super.call(this) || this;
	        _this._stack = [];
	        _this._inserted = 0;
	        _this._playing = false;
	        _this._actionQueue = [];
	        _this._playNextAction = function () {
	            if (_this._playing || _this._actionQueue.length === 0) {
	                return;
	            }
	            var actionItem = _this._actionQueue.shift();
	            var args = [];
	            for (var i = 0, li = actionItem.args.length; i < li; i++) {
	                var argument = actionItem.args[i];
	                args.push(argument);
	            }
	            _this._playing = true;
	            _this['_' + actionItem.action].apply(_this, args)
	                .then(function () {
	                _this._playing = false;
	                setTimeout(_this._playNextAction, 1);
	            });
	        };
	        _this._mutex = mutex;
	        _this._inserted = inserted;
	        _this.percentWidth = 100;
	        _this.percentHeight = 100;
	        _this.mouseEnabled = false;
	        _this.addEventListener(Event.START, function () {
	            _this.mouseChildren = false;
	        });
	        _this.addEventListener(Event.COMPLETE, function () {
	            _this.mouseChildren = true;
	        });
	        return _this;
	    }
	    Object.defineProperty(StackContainer.prototype, "childNum", {
	        get: function () {
	            var len = this.children.length;
	            return len > 0 ? len - this._inserted : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    StackContainer.prototype.push = function (view, options, playEffect) {
	        if (playEffect === void 0) { playEffect = true; }
	        this._actionQueue.push({ action: 'push', args: arguments });
	        this._playNextAction();
	    };
	    StackContainer.prototype.pop = function (options, playEffect) {
	        if (playEffect === void 0) { playEffect = true; }
	        this._actionQueue.push({ action: 'pop', args: arguments });
	        this._playNextAction();
	    };
	    StackContainer.prototype.replace = function (view, options, playEffect) {
	        if (playEffect === void 0) { playEffect = true; }
	        this._actionQueue.push({ action: 'replace', args: arguments });
	        this._playNextAction();
	    };
	    StackContainer.prototype.popAll = function (view, options, playEffect) {
	        if (playEffect === void 0) { playEffect = true; }
	        this._actionQueue.push({ action: 'popAll', args: arguments });
	        this._playNextAction();
	    };
	    StackContainer.prototype._push = function (view, options, playEffect) {
	        var _this = this;
	        if (playEffect === void 0) { playEffect = true; }
	        return new Promise(function (resolve) {
	            var action = 'push';
	            var lastView;
	            if (_this._mutex && _this.childNum > 0) {
	                lastView = _this.getChildAt(0);
	                _this._stack.push(lastView);
	            }
	            view.visible = false;
	            _this.addChild(view);
	            var data = { action: action, view: view, lastView: lastView, options: options, hasView: true };
	            _this.dispatchEvent(Event.START, data);
	            playViewEffect(playEffect ? options ? options.effect : null : null, options ? options.effectParams : {}, _this._mutex, lastView, view, _this, function () {
	                _this.dispatchEvent(Event.COMPLETE, data);
	                resolve();
	            });
	        });
	    };
	    StackContainer.prototype._pop = function (options, playEffect) {
	        var _this = this;
	        if (playEffect === void 0) { playEffect = true; }
	        return new Promise(function (resolve) {
	            var action = 'pop';
	            var len = _this.childNum;
	            if (len <= 0) {
	                return false;
	            }
	            var lastView = _this.getChildAt(_this.children.length - 1);
	            var view;
	            if (_this._mutex) {
	                view = _this._stack.pop();
	                view.visible = false;
	                _this.addChild(view);
	            }
	            var data = { action: action, view: view, lastView: lastView, options: options, hasView: len > 1 };
	            _this.dispatchEvent(Event.START, data);
	            playViewEffect(playEffect ? options ? options.effect : null : null, options ? options.effectParams : {}, _this._mutex, lastView, view, _this, function () {
	                _this.dispatchEvent(Event.COMPLETE, data);
	                resolve();
	            });
	        });
	    };
	    StackContainer.prototype._replace = function (view, options, playEffect) {
	        var _this = this;
	        if (playEffect === void 0) { playEffect = true; }
	        return new Promise(function (resolve) {
	            var action = 'replace';
	            var len = _this.childNum;
	            if (len <= 0) {
	                return false;
	            }
	            var lastView = _this.getChildAt(len - 1);
	            view.visible = false;
	            _this.addChild(view);
	            var data = { action: action, view: view, lastView: lastView, options: options, hasView: len > 1 };
	            _this.dispatchEvent(Event.START, data);
	            playViewEffect(playEffect ? options ? options.effect : null : null, options ? options.effectParams : {}, _this._mutex, lastView, view, _this, function () {
	                _this.dispatchEvent(Event.COMPLETE, data);
	                resolve();
	            });
	        });
	    };
	    StackContainer.prototype._popAll = function (view, options, playEffect) {
	        var _this = this;
	        if (playEffect === void 0) { playEffect = true; }
	        return new Promise(function (resolve) {
	            var action = 'popAll';
	            var lastView = _this.getChildAt(0);
	            var len = _this.childNum;
	            while (_this.children.length > 1) {
	                _this.removeChildAt(1);
	            }
	            if (_this._mutex) {
	                _this._stack.splice(0);
	            }
	            if (view) {
	                view.visible = false;
	                _this.addChild(view);
	            }
	            var data = { action: action, view: view, lastView: lastView, options: options, hasView: len > 1 };
	            _this.dispatchEvent(Event.START, data);
	            playViewEffect(playEffect ? options ? options.effect : null : null, options ? options.effectParams : {}, _this._mutex, lastView, view, _this, function () {
	                _this.dispatchEvent(Event.COMPLETE, data);
	                resolve();
	            });
	        });
	    };
	    return StackContainer;
	}(Node$1));

	var colorName = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};

	var isArrayish = function isArrayish(obj) {
		if (!obj || typeof obj === 'string') {
			return false;
		}

		return obj instanceof Array || Array.isArray(obj) ||
			(obj.length >= 0 && (obj.splice instanceof Function ||
				(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
	};

	var simpleSwizzle = createCommonjsModule(function (module) {



	var concat = Array.prototype.concat;
	var slice = Array.prototype.slice;

	var swizzle = module.exports = function swizzle(args) {
		var results = [];

		for (var i = 0, len = args.length; i < len; i++) {
			var arg = args[i];

			if (isArrayish(arg)) {
				// http://jsperf.com/javascript-array-concat-vs-push/98
				results = concat.call(results, slice.call(arg));
			} else {
				results.push(arg);
			}
		}

		return results;
	};

	swizzle.wrap = function (fn) {
		return function () {
			return fn(swizzle(arguments));
		};
	};
	});

	var colorString = createCommonjsModule(function (module) {
	/* MIT license */



	var reverseNames = {};

	// create a list of reverse color names
	for (var name in colorName) {
		if (colorName.hasOwnProperty(name)) {
			reverseNames[colorName[name]] = name;
		}
	}

	var cs = module.exports = {
		to: {},
		get: {}
	};

	cs.get = function (string) {
		var prefix = string.substring(0, 3).toLowerCase();
		var val;
		var model;
		switch (prefix) {
			case 'hsl':
				val = cs.get.hsl(string);
				model = 'hsl';
				break;
			case 'hwb':
				val = cs.get.hwb(string);
				model = 'hwb';
				break;
			default:
				val = cs.get.rgb(string);
				model = 'rgb';
				break;
		}

		if (!val) {
			return null;
		}

		return {model: model, value: val};
	};

	cs.get.rgb = function (string) {
		if (!string) {
			return null;
		}

		var abbr = /^#([a-f0-9]{3,4})$/i;
		var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
		var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var keyword = /(\D+)/;

		var rgb = [0, 0, 0, 1];
		var match;
		var i;
		var hexAlpha;

		if (match = string.match(hex)) {
			hexAlpha = match[2];
			match = match[1];

			for (i = 0; i < 3; i++) {
				// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
				var i2 = i * 2;
				rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
			}

			if (hexAlpha) {
				rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
			}
		} else if (match = string.match(abbr)) {
			match = match[1];
			hexAlpha = match[3];

			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i] + match[i], 16);
			}

			if (hexAlpha) {
				rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
			}
		} else if (match = string.match(rgba)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i + 1], 0);
			}

			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(per)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
			}

			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(keyword)) {
			if (match[1] === 'transparent') {
				return [0, 0, 0, 0];
			}

			rgb = colorName[match[1]];

			if (!rgb) {
				return null;
			}

			rgb[3] = 1;

			return rgb;
		} else {
			return null;
		}

		for (i = 0; i < 3; i++) {
			rgb[i] = clamp(rgb[i], 0, 255);
		}
		rgb[3] = clamp(rgb[3], 0, 1);

		return rgb;
	};

	cs.get.hsl = function (string) {
		if (!string) {
			return null;
		}

		var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hsl);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = (parseFloat(match[1]) + 360) % 360;
			var s = clamp(parseFloat(match[2]), 0, 100);
			var l = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

			return [h, s, l, a];
		}

		return null;
	};

	cs.get.hwb = function (string) {
		if (!string) {
			return null;
		}

		var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hwb);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = ((parseFloat(match[1]) % 360) + 360) % 360;
			var w = clamp(parseFloat(match[2]), 0, 100);
			var b = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
			return [h, w, b, a];
		}

		return null;
	};

	cs.to.hex = function () {
		var rgba = simpleSwizzle(arguments);

		return (
			'#' +
			hexDouble(rgba[0]) +
			hexDouble(rgba[1]) +
			hexDouble(rgba[2]) +
			(rgba[3] < 1
				? (hexDouble(Math.round(rgba[3] * 255)))
				: '')
		);
	};

	cs.to.rgb = function () {
		var rgba = simpleSwizzle(arguments);

		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
			: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};

	cs.to.rgb.percent = function () {
		var rgba = simpleSwizzle(arguments);

		var r = Math.round(rgba[0] / 255 * 100);
		var g = Math.round(rgba[1] / 255 * 100);
		var b = Math.round(rgba[2] / 255 * 100);

		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
			: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};

	cs.to.hsl = function () {
		var hsla = simpleSwizzle(arguments);
		return hsla.length < 4 || hsla[3] === 1
			? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
			: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	};

	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	cs.to.hwb = function () {
		var hwba = simpleSwizzle(arguments);

		var a = '';
		if (hwba.length >= 4 && hwba[3] !== 1) {
			a = ', ' + hwba[3];
		}

		return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};

	cs.to.keyword = function (rgb) {
		return reverseNames[rgb.slice(0, 3)];
	};

	// helpers
	function clamp(num, min, max) {
		return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
		var str = num.toString(16).toUpperCase();
		return (str.length < 2) ? '0' + str : str;
	}
	});
	var colorString_1 = colorString.to;
	var colorString_2 = colorString.get;

	var colorName$1 = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};

	var conversions = createCommonjsModule(function (module) {
	/* MIT license */


	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	var reverseKeywords = {};
	for (var key in colorName$1) {
		if (colorName$1.hasOwnProperty(key)) {
			reverseKeywords[colorName$1[key]] = key;
		}
	}

	var convert = module.exports = {
		rgb: {channels: 3, labels: 'rgb'},
		hsl: {channels: 3, labels: 'hsl'},
		hsv: {channels: 3, labels: 'hsv'},
		hwb: {channels: 3, labels: 'hwb'},
		cmyk: {channels: 4, labels: 'cmyk'},
		xyz: {channels: 3, labels: 'xyz'},
		lab: {channels: 3, labels: 'lab'},
		lch: {channels: 3, labels: 'lch'},
		hex: {channels: 1, labels: ['hex']},
		keyword: {channels: 1, labels: ['keyword']},
		ansi16: {channels: 1, labels: ['ansi16']},
		ansi256: {channels: 1, labels: ['ansi256']},
		hcg: {channels: 3, labels: ['h', 'c', 'g']},
		apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
		gray: {channels: 1, labels: ['gray']}
	};

	// hide .channels and .labels properties
	for (var model in convert) {
		if (convert.hasOwnProperty(model)) {
			if (!('channels' in convert[model])) {
				throw new Error('missing channels property: ' + model);
			}

			if (!('labels' in convert[model])) {
				throw new Error('missing channel labels property: ' + model);
			}

			if (convert[model].labels.length !== convert[model].channels) {
				throw new Error('channel and label counts mismatch: ' + model);
			}

			var channels = convert[model].channels;
			var labels = convert[model].labels;
			delete convert[model].channels;
			delete convert[model].labels;
			Object.defineProperty(convert[model], 'channels', {value: channels});
			Object.defineProperty(convert[model], 'labels', {value: labels});
		}
	}

	convert.rgb.hsl = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var l;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		var rdif;
		var gdif;
		var bdif;
		var h;
		var s;

		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var v = Math.max(r, g, b);
		var diff = v - Math.min(r, g, b);
		var diffc = function (c) {
			return (v - c) / 6 / diff + 1 / 2;
		};

		if (diff === 0) {
			h = s = 0;
		} else {
			s = diff / v;
			rdif = diffc(r);
			gdif = diffc(g);
			bdif = diffc(b);

			if (r === v) {
				h = bdif - gdif;
			} else if (g === v) {
				h = (1 / 3) + rdif - bdif;
			} else if (b === v) {
				h = (2 / 3) + gdif - rdif;
			}
			if (h < 0) {
				h += 1;
			} else if (h > 1) {
				h -= 1;
			}
		}

		return [
			h * 360,
			s * 100,
			v * 100
		];
	};

	convert.rgb.hwb = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var h = convert.rgb.hsl(rgb)[0];
		var w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var c;
		var m;
		var y;
		var k;

		k = Math.min(1 - r, 1 - g, 1 - b);
		c = (1 - r - k) / (1 - k) || 0;
		m = (1 - g - k) / (1 - k) || 0;
		y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	/**
	 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	 * */
	function comparativeDistance(x, y) {
		return (
			Math.pow(x[0] - y[0], 2) +
			Math.pow(x[1] - y[1], 2) +
			Math.pow(x[2] - y[2], 2)
		);
	}

	convert.rgb.keyword = function (rgb) {
		var reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		var currentClosestDistance = Infinity;
		var currentClosestKeyword;

		for (var keyword in colorName$1) {
			if (colorName$1.hasOwnProperty(keyword)) {
				var value = colorName$1[keyword];

				// Compute comparative distance
				var distance = comparativeDistance(rgb, value);

				// Check if its less, if so set as closest
				if (distance < currentClosestDistance) {
					currentClosestDistance = distance;
					currentClosestKeyword = keyword;
				}
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return colorName$1[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;

		// assume sRGB
		r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
		g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
		b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

		var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
		var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
		var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		var xyz = convert.rgb.xyz(rgb);
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		var h = hsl[0] / 360;
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var t1;
		var t2;
		var t3;
		var rgb;
		var val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}
			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		var h = hsl[0];
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var smin = s;
		var lmin = Math.max(l, 0.01);
		var sv;
		var v;

		l *= 2;
		s *= (l <= 1) ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		v = (l + s) / 2;
		sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		var h = hsv[0] / 60;
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var hi = Math.floor(h) % 6;

		var f = h - Math.floor(h);
		var p = 255 * v * (1 - s);
		var q = 255 * v * (1 - (s * f));
		var t = 255 * v * (1 - (s * (1 - f)));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		var h = hsv[0];
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var vmin = Math.max(v, 0.01);
		var lmin;
		var sl;
		var l;

		l = (2 - s) * v;
		lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= (lmin <= 1) ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert.hwb.rgb = function (hwb) {
		var h = hwb[0] / 360;
		var wh = hwb[1] / 100;
		var bl = hwb[2] / 100;
		var ratio = wh + bl;
		var i;
		var v;
		var f;
		var n;

		// wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh); // linear interpolation

		var r;
		var g;
		var b;
		switch (i) {
			default:
			case 6:
			case 0: r = v; g = n; b = wh; break;
			case 1: r = n; g = v; b = wh; break;
			case 2: r = wh; g = v; b = n; break;
			case 3: r = wh; g = n; b = v; break;
			case 4: r = n; g = wh; b = v; break;
			case 5: r = v; g = wh; b = n; break;
		}

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		var c = cmyk[0] / 100;
		var m = cmyk[1] / 100;
		var y = cmyk[2] / 100;
		var k = cmyk[3] / 100;
		var r;
		var g;
		var b;

		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		var x = xyz[0] / 100;
		var y = xyz[1] / 100;
		var z = xyz[2] / 100;
		var r;
		var g;
		var b;

		r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
		g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
		b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

		// assume sRGB
		r = r > 0.0031308
			? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
			: r * 12.92;

		g = g > 0.0031308
			? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
			: g * 12.92;

		b = b > 0.0031308
			? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
			: b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var x;
		var y;
		var z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		var y2 = Math.pow(y, 3);
		var x2 = Math.pow(x, 3);
		var z2 = Math.pow(z, 3);
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var hr;
		var h;
		var c;

		hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		var l = lch[0];
		var c = lch[1];
		var h = lch[2];
		var a;
		var b;
		var hr;

		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
		var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		var ansi = 30
			+ ((Math.round(b / 255) << 2)
			| (Math.round(g / 255) << 1)
			| Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		// optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];

		// we use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round(((r - 8) / 247) * 24) + 232;
		}

		var ansi = 16
			+ (36 * Math.round(r / 255 * 5))
			+ (6 * Math.round(g / 255 * 5))
			+ Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		var color = args % 10;

		// handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		var mult = (~~(args > 50) + 1) * 0.5;
		var r = ((color & 1) * mult) * 255;
		var g = (((color >> 1) & 1) * mult) * 255;
		var b = (((color >> 2) & 1) * mult) * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		// handle greyscale
		if (args >= 232) {
			var c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		var rem;
		var r = Math.floor(args / 36) / 5 * 255;
		var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		var b = (rem % 6) / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		var integer = ((Math.round(args[0]) & 0xFF) << 16)
			+ ((Math.round(args[1]) & 0xFF) << 8)
			+ (Math.round(args[2]) & 0xFF);

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}

		var colorString = match[0];

		if (match[0].length === 3) {
			colorString = colorString.split('').map(function (char) {
				return char + char;
			}).join('');
		}

		var integer = parseInt(colorString, 16);
		var r = (integer >> 16) & 0xFF;
		var g = (integer >> 8) & 0xFF;
		var b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var max = Math.max(Math.max(r, g), b);
		var min = Math.min(Math.min(r, g), b);
		var chroma = (max - min);
		var grayscale;
		var hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else
		if (max === r) {
			hue = ((g - b) / chroma) % 6;
		} else
		if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma + 4;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var c = 1;
		var f = 0;

		if (l < 0.5) {
			c = 2.0 * s * l;
		} else {
			c = 2.0 * s * (1.0 - l);
		}

		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;

		var c = s * v;
		var f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		var pure = [0, 0, 0];
		var hi = (h % 1) * 6;
		var v = hi % 1;
		var w = 1 - v;
		var mg = 0;

		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1; pure[1] = v; pure[2] = 0; break;
			case 1:
				pure[0] = w; pure[1] = 1; pure[2] = 0; break;
			case 2:
				pure[0] = 0; pure[1] = 1; pure[2] = v; break;
			case 3:
				pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			case 4:
				pure[0] = v; pure[1] = 0; pure[2] = 1; break;
			default:
				pure[0] = 1; pure[1] = 0; pure[2] = w;
		}

		mg = (1.0 - c) * g;

		return [
			(c * pure[0] + mg) * 255,
			(c * pure[1] + mg) * 255,
			(c * pure[2] + mg) * 255
		];
	};

	convert.hcg.hsv = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var v = c + g * (1.0 - c);
		var f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else
		if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		var w = hwb[1] / 100;
		var b = hwb[2] / 100;
		var v = 1 - b;
		var c = v - w;
		var g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = convert.gray.hsv = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		var integer = (val << 16) + (val << 8) + val;

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
	});
	var conversions_1 = conversions.rgb;
	var conversions_2 = conversions.hsl;
	var conversions_3 = conversions.hsv;
	var conversions_4 = conversions.hwb;
	var conversions_5 = conversions.cmyk;
	var conversions_6 = conversions.xyz;
	var conversions_7 = conversions.lab;
	var conversions_8 = conversions.lch;
	var conversions_9 = conversions.hex;
	var conversions_10 = conversions.keyword;
	var conversions_11 = conversions.ansi16;
	var conversions_12 = conversions.ansi256;
	var conversions_13 = conversions.hcg;
	var conversions_14 = conversions.apple;
	var conversions_15 = conversions.gray;

	/*
		this function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

	function buildGraph() {
		var graph = {};
		// https://jsperf.com/object-keys-vs-for-in-with-closure/3
		var models = Object.keys(conversions);

		for (var len = models.length, i = 0; i < len; i++) {
			graph[models[i]] = {
				// http://jsperf.com/1-vs-infinity
				// micro-opt, but this is simple.
				distance: -1,
				parent: null
			};
		}

		return graph;
	}

	// https://en.wikipedia.org/wiki/Breadth-first_search
	function deriveBFS(fromModel) {
		var graph = buildGraph();
		var queue = [fromModel]; // unshift -> queue -> pop

		graph[fromModel].distance = 0;

		while (queue.length) {
			var current = queue.pop();
			var adjacents = Object.keys(conversions[current]);

			for (var len = adjacents.length, i = 0; i < len; i++) {
				var adjacent = adjacents[i];
				var node = graph[adjacent];

				if (node.distance === -1) {
					node.distance = graph[current].distance + 1;
					node.parent = current;
					queue.unshift(adjacent);
				}
			}
		}

		return graph;
	}

	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}

	function wrapConversion(toModel, graph) {
		var path = [graph[toModel].parent, toModel];
		var fn = conversions[graph[toModel].parent][toModel];

		var cur = graph[toModel].parent;
		while (graph[cur].parent) {
			path.unshift(graph[cur].parent);
			fn = link(conversions[graph[cur].parent][cur], fn);
			cur = graph[cur].parent;
		}

		fn.conversion = path;
		return fn;
	}

	var route = function (fromModel) {
		var graph = deriveBFS(fromModel);
		var conversion = {};

		var models = Object.keys(graph);
		for (var len = models.length, i = 0; i < len; i++) {
			var toModel = models[i];
			var node = graph[toModel];

			if (node.parent === null) {
				// no possible conversion, or this node is the source model.
				continue;
			}

			conversion[toModel] = wrapConversion(toModel, graph);
		}

		return conversion;
	};

	var convert = {};

	var models = Object.keys(conversions);

	function wrapRaw(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			return fn(args);
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	function wrapRounded(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			var result = fn(args);

			// we're assuming the result is an array here.
			// see notice in conversions.js; don't use box types
			// in conversion functions.
			if (typeof result === 'object') {
				for (var len = result.length, i = 0; i < len; i++) {
					result[i] = Math.round(result[i]);
				}
			}

			return result;
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	models.forEach(function (fromModel) {
		convert[fromModel] = {};

		Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
		Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

		var routes = route(fromModel);
		var routeModels = Object.keys(routes);

		routeModels.forEach(function (toModel) {
			var fn = routes[toModel];

			convert[fromModel][toModel] = wrapRounded(fn);
			convert[fromModel][toModel].raw = wrapRaw(fn);
		});
	});

	var colorConvert = convert;

	var _slice = [].slice;

	var skippedModels = [
		// to be honest, I don't really feel like keyword belongs in color convert, but eh.
		'keyword',

		// gray conflicts with some method names, and has its own method defined.
		'gray',

		// shouldn't really be in color-convert either...
		'hex'
	];

	var hashedModelKeys = {};
	Object.keys(colorConvert).forEach(function (model) {
		hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
	});

	var limiters = {};

	function Color(obj, model) {
		if (!(this instanceof Color)) {
			return new Color(obj, model);
		}

		if (model && model in skippedModels) {
			model = null;
		}

		if (model && !(model in colorConvert)) {
			throw new Error('Unknown model: ' + model);
		}

		var i;
		var channels;

		if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
			this.model = 'rgb';
			this.color = [0, 0, 0];
			this.valpha = 1;
		} else if (obj instanceof Color) {
			this.model = obj.model;
			this.color = obj.color.slice();
			this.valpha = obj.valpha;
		} else if (typeof obj === 'string') {
			var result = colorString.get(obj);
			if (result === null) {
				throw new Error('Unable to parse color from string: ' + obj);
			}

			this.model = result.model;
			channels = colorConvert[this.model].channels;
			this.color = result.value.slice(0, channels);
			this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
		} else if (obj.length) {
			this.model = model || 'rgb';
			channels = colorConvert[this.model].channels;
			var newArr = _slice.call(obj, 0, channels);
			this.color = zeroArray(newArr, channels);
			this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
		} else if (typeof obj === 'number') {
			// this is always RGB - can be converted later on.
			obj &= 0xFFFFFF;
			this.model = 'rgb';
			this.color = [
				(obj >> 16) & 0xFF,
				(obj >> 8) & 0xFF,
				obj & 0xFF
			];
			this.valpha = 1;
		} else {
			this.valpha = 1;

			var keys = Object.keys(obj);
			if ('alpha' in obj) {
				keys.splice(keys.indexOf('alpha'), 1);
				this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
			}

			var hashedKeys = keys.sort().join('');
			if (!(hashedKeys in hashedModelKeys)) {
				throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
			}

			this.model = hashedModelKeys[hashedKeys];

			var labels = colorConvert[this.model].labels;
			var color = [];
			for (i = 0; i < labels.length; i++) {
				color.push(obj[labels[i]]);
			}

			this.color = zeroArray(color);
		}

		// perform limitations (clamping, etc.)
		if (limiters[this.model]) {
			channels = colorConvert[this.model].channels;
			for (i = 0; i < channels; i++) {
				var limit = limiters[this.model][i];
				if (limit) {
					this.color[i] = limit(this.color[i]);
				}
			}
		}

		this.valpha = Math.max(0, Math.min(1, this.valpha));

		if (Object.freeze) {
			Object.freeze(this);
		}
	}

	Color.prototype = {
		toString: function () {
			return this.string();
		},

		toJSON: function () {
			return this[this.model]();
		},

		string: function (places) {
			var self = this.model in colorString.to ? this : this.rgb();
			self = self.round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to[self.model](args);
		},

		percentString: function (places) {
			var self = this.rgb().round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to.rgb.percent(args);
		},

		array: function () {
			return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
		},

		object: function () {
			var result = {};
			var channels = colorConvert[this.model].channels;
			var labels = colorConvert[this.model].labels;

			for (var i = 0; i < channels; i++) {
				result[labels[i]] = this.color[i];
			}

			if (this.valpha !== 1) {
				result.alpha = this.valpha;
			}

			return result;
		},

		unitArray: function () {
			var rgb = this.rgb().color;
			rgb[0] /= 255;
			rgb[1] /= 255;
			rgb[2] /= 255;

			if (this.valpha !== 1) {
				rgb.push(this.valpha);
			}

			return rgb;
		},

		unitObject: function () {
			var rgb = this.rgb().object();
			rgb.r /= 255;
			rgb.g /= 255;
			rgb.b /= 255;

			if (this.valpha !== 1) {
				rgb.alpha = this.valpha;
			}

			return rgb;
		},

		round: function (places) {
			places = Math.max(places || 0, 0);
			return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
		},

		alpha: function (val) {
			if (arguments.length) {
				return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
			}

			return this.valpha;
		},

		// rgb
		red: getset('rgb', 0, maxfn(255)),
		green: getset('rgb', 1, maxfn(255)),
		blue: getset('rgb', 2, maxfn(255)),

		hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

		saturationl: getset('hsl', 1, maxfn(100)),
		lightness: getset('hsl', 2, maxfn(100)),

		saturationv: getset('hsv', 1, maxfn(100)),
		value: getset('hsv', 2, maxfn(100)),

		chroma: getset('hcg', 1, maxfn(100)),
		gray: getset('hcg', 2, maxfn(100)),

		white: getset('hwb', 1, maxfn(100)),
		wblack: getset('hwb', 2, maxfn(100)),

		cyan: getset('cmyk', 0, maxfn(100)),
		magenta: getset('cmyk', 1, maxfn(100)),
		yellow: getset('cmyk', 2, maxfn(100)),
		black: getset('cmyk', 3, maxfn(100)),

		x: getset('xyz', 0, maxfn(100)),
		y: getset('xyz', 1, maxfn(100)),
		z: getset('xyz', 2, maxfn(100)),

		l: getset('lab', 0, maxfn(100)),
		a: getset('lab', 1),
		b: getset('lab', 2),

		keyword: function (val) {
			if (arguments.length) {
				return new Color(val);
			}

			return colorConvert[this.model].keyword(this.color);
		},

		hex: function (val) {
			if (arguments.length) {
				return new Color(val);
			}

			return colorString.to.hex(this.rgb().round().color);
		},

		rgbNumber: function () {
			var rgb = this.rgb().color;
			return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
		},

		luminosity: function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var rgb = this.rgb().color;

			var lum = [];
			for (var i = 0; i < rgb.length; i++) {
				var chan = rgb[i] / 255;
				lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
			}

			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},

		contrast: function (color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			var lum1 = this.luminosity();
			var lum2 = color2.luminosity();

			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}

			return (lum2 + 0.05) / (lum1 + 0.05);
		},

		level: function (color2) {
			var contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7.1) {
				return 'AAA';
			}

			return (contrastRatio >= 4.5) ? 'AA' : '';
		},

		isDark: function () {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			var rgb = this.rgb().color;
			var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
			return yiq < 128;
		},

		isLight: function () {
			return !this.isDark();
		},

		negate: function () {
			var rgb = this.rgb();
			for (var i = 0; i < 3; i++) {
				rgb.color[i] = 255 - rgb.color[i];
			}
			return rgb;
		},

		lighten: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] += hsl.color[2] * ratio;
			return hsl;
		},

		darken: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] -= hsl.color[2] * ratio;
			return hsl;
		},

		saturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] += hsl.color[1] * ratio;
			return hsl;
		},

		desaturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] -= hsl.color[1] * ratio;
			return hsl;
		},

		whiten: function (ratio) {
			var hwb = this.hwb();
			hwb.color[1] += hwb.color[1] * ratio;
			return hwb;
		},

		blacken: function (ratio) {
			var hwb = this.hwb();
			hwb.color[2] += hwb.color[2] * ratio;
			return hwb;
		},

		grayscale: function () {
			// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
			var rgb = this.rgb().color;
			var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			return Color.rgb(val, val, val);
		},

		fade: function (ratio) {
			return this.alpha(this.valpha - (this.valpha * ratio));
		},

		opaquer: function (ratio) {
			return this.alpha(this.valpha + (this.valpha * ratio));
		},

		rotate: function (degrees) {
			var hsl = this.hsl();
			var hue = hsl.color[0];
			hue = (hue + degrees) % 360;
			hue = hue < 0 ? 360 + hue : hue;
			hsl.color[0] = hue;
			return hsl;
		},

		mix: function (mixinColor, weight) {
			// ported from sass implementation in C
			// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
			if (!mixinColor || !mixinColor.rgb) {
				throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
			}
			var color1 = mixinColor.rgb();
			var color2 = this.rgb();
			var p = weight === undefined ? 0.5 : weight;

			var w = 2 * p - 1;
			var a = color1.alpha() - color2.alpha();

			var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var w2 = 1 - w1;

			return Color.rgb(
					w1 * color1.red() + w2 * color2.red(),
					w1 * color1.green() + w2 * color2.green(),
					w1 * color1.blue() + w2 * color2.blue(),
					color1.alpha() * p + color2.alpha() * (1 - p));
		}
	};

	// model conversion methods and static constructors
	Object.keys(colorConvert).forEach(function (model) {
		if (skippedModels.indexOf(model) !== -1) {
			return;
		}

		var channels = colorConvert[model].channels;

		// conversion methods
		Color.prototype[model] = function () {
			if (this.model === model) {
				return new Color(this);
			}

			if (arguments.length) {
				return new Color(arguments, model);
			}

			var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
			return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
		};

		// 'static' construction methods
		Color[model] = function (color) {
			if (typeof color === 'number') {
				color = zeroArray(_slice.call(arguments), channels);
			}
			return new Color(color, model);
		};
	});

	function roundTo(num, places) {
		return Number(num.toFixed(places));
	}

	function roundToPlace(places) {
		return function (num) {
			return roundTo(num, places);
		};
	}

	function getset(model, channel, modifier) {
		model = Array.isArray(model) ? model : [model];

		model.forEach(function (m) {
			(limiters[m] || (limiters[m] = []))[channel] = modifier;
		});

		model = model[0];

		return function (val) {
			var result;

			if (arguments.length) {
				if (modifier) {
					val = modifier(val);
				}

				result = this[model]();
				result.color[channel] = val;
				return result;
			}

			result = this[model]().color[channel];
			if (modifier) {
				result = modifier(result);
			}

			return result;
		};
	}

	function maxfn(max) {
		return function (v) {
			return Math.max(0, Math.min(max, v));
		};
	}

	function assertArray(val) {
		return Array.isArray(val) ? val : [val];
	}

	function zeroArray(arr, length) {
		for (var i = 0; i < length; i++) {
			if (typeof arr[i] !== 'number') {
				arr[i] = 0;
			}
		}

		return arr;
	}

	var color = Color;

	var ShapeBase = (function (_super) {
	    tslib_1.__extends(ShapeBase, _super);
	    function ShapeBase() {
	        var _this = _super.call(this) || this;
	        _this.isUI = true;
	        _this.__fieldDirty = true;
	        _this.fillColor = 'white';
	        _this.strokeColor = 0;
	        _this.strokeWidth = 0;
	        _this.addEventListener(Event.ENTER_FRAME, _this.onEnterFrame, _this);
	        _this.addEventListener(Event.RESIZE, _this.onResize, _this);
	        return _this;
	    }
	    ShapeBase.prototype.onResize = function (e) {
	        this.__fieldDirty = true;
	    };
	    ShapeBase.prototype.onEnterFrame = function (e) {
	        if (this.__fieldDirty) {
	            this.__fieldDirty = false;
	            var _a = this, fillColor = _a.fillColor, strokeColor = _a.strokeColor, strokeWidth = _a.strokeWidth;
	            this.clear();
	            this.beginFill(new color(fillColor).rgbNumber());
	            if (strokeWidth > 0) {
	                this.lineStyle(strokeWidth, new color(strokeColor).rgbNumber());
	            }
	            this.redraw();
	            this.endFill();
	        }
	    };
	    ShapeBase.prototype.redraw = function () {
	    };
	    tslib_1.__decorate([
	        dirtyFieldDetector
	    ], ShapeBase.prototype, "fillColor", void 0);
	    tslib_1.__decorate([
	        dirtyFieldDetector
	    ], ShapeBase.prototype, "strokeColor", void 0);
	    tslib_1.__decorate([
	        dirtyFieldDetector
	    ], ShapeBase.prototype, "strokeWidth", void 0);
	    return ShapeBase;
	}(Graphics));
	var Rect = (function (_super) {
	    tslib_1.__extends(Rect, _super);
	    function Rect() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.borderRadius = 0;
	        return _this;
	    }
	    Rect.prototype.redraw = function () {
	        var _a = this, width = _a.width, height = _a.height, borderRadius = _a.borderRadius;
	        if (width == 0 || height == 0) {
	            return;
	        }
	        if (borderRadius > 0) {
	            this.drawRoundedRect(0, 0, width, height, borderRadius);
	        }
	        else {
	            this.drawRect(0, 0, width, height);
	        }
	    };
	    tslib_1.__decorate([
	        dirtyFieldDetector
	    ], Rect.prototype, "borderRadius", void 0);
	    return Rect;
	}(ShapeBase));
	var Circle$1 = (function (_super) {
	    tslib_1.__extends(Circle, _super);
	    function Circle() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Circle.prototype.redraw = function () {
	        _super.prototype.redraw.call(this);
	        var _a = this, width = _a.width, height = _a.height;
	        if (width == 0 || height == 0) {
	            return;
	        }
	        var radius = Math.min(width, height) / 2;
	        this.drawCircle(radius, radius, radius);
	    };
	    return Circle;
	}(ShapeBase));

	var assetScheme = 'asset://';
	var Image$1 = (function (_super) {
	    tslib_1.__extends(Image, _super);
	    function Image() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.isUI = true;
	        _this.crossOrigin = true;
	        _this._escapes = [];
	        _this._registeredEvents = [];
	        return _this;
	    }
	    Object.defineProperty(Image.prototype, "source", {
	        get: function () {
	            return this._source;
	        },
	        set: function (v) {
	            if (this._source !== v) {
	                this._setSource(v);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Image.prototype.updateSource = function () {
	        var url = this._source;
	        if (url) {
	            if (url.indexOf('://') >= 0) {
	                if (url.indexOf(assetScheme) === 0) {
	                    url = url.replace(assetScheme, '');
	                }
	            }
	            else {
	                var assetConfig = getAssetByName(url);
	                if (assetConfig) {
	                    url = assetConfig.uuid;
	                }
	            }
	            this.texture = Texture.fromImage(url, this.crossOrigin);
	        }
	        else {
	            this.texture = null;
	        }
	    };
	    Image.prototype._setSourceDirect = function (value) {
	        this._source = value;
	        this.updateSource();
	        this.dispatchEvent(Event.RESIZE);
	    };
	    Image.prototype._setSource = function (value) {
	        if (value !== this._source) {
	            if (value) {
	                var matchResult = value.match(ESCAPE_REG_EXP);
	                if (matchResult) {
	                    this.unregisterEvents();
	                    this._originText = value;
	                    this._escapes.splice(0);
	                    for (var _i = 0, matchResult_1 = matchResult; _i < matchResult_1.length; _i++) {
	                        var item = matchResult_1[_i];
	                        var escape = item.substr(2, item.length - 3);
	                        var args = escape.split('|');
	                        var eventName = args[0];
	                        this._escapes.push(escape);
	                        dataCenter.addEventListener(eventName, this.onDataMutated, this);
	                        this._registeredEvents.push(eventName);
	                    }
	                    this.onDataMutated();
	                }
	                else {
	                    this._setSourceDirect(value);
	                }
	            }
	            else {
	                this._setSourceDirect(value);
	            }
	        }
	    };
	    Image.prototype.unregisterEvents = function () {
	        for (var _i = 0, _a = this._registeredEvents; _i < _a.length; _i++) {
	            var item = _a[_i];
	            dataCenter.removeEventListener(item, this.onDataMutated, this);
	        }
	        this._registeredEvents.splice(0);
	    };
	    Image.prototype.onDataMutated = function (e) {
	        this._setSourceDirect(dataCenter.formatString(this._originText, this._escapes));
	    };
	    return Image;
	}(Sprite));

	var Label = (function (_super) {
	    tslib_1.__extends(Label, _super);
	    function Label() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.isUI = true;
	        _this._escapes = [];
	        _this._registeredEvents = [];
	        _this.onTextMutated = function (e) {
	            _super.prototype._setText.call(_this, dataCenter.formatString(_this._originText, _this._escapes));
	        };
	        _this.onHtmlMutated = function (e) {
	            var html = dataCenter.formatString(_this._originText, _this._escapes);
	            _this.text = htmlToPureText(html);
	        };
	        return _this;
	    }
	    Label.prototype._setText = function (value) {
	        if (typeof value !== 'string') {
	            value = value + '';
	        }
	        if (value !== this._text) {
	            var matchResult = value.match(ESCAPE_REG_EXP);
	            if (matchResult) {
	                this.dealEscape(value, matchResult, this.onTextMutated);
	            }
	            else {
	                _super.prototype._setText.call(this, value);
	            }
	        }
	    };
	    Label.prototype.dealEscape = function (value, matchResult, onMutated) {
	        this.unregisterEvents();
	        this._originText = value;
	        this._escapes.splice(0);
	        for (var _i = 0, matchResult_1 = matchResult; _i < matchResult_1.length; _i++) {
	            var item = matchResult_1[_i];
	            var escape = item.substr(2, item.length - 3);
	            var args = escape.split('|');
	            var eventName = args[0];
	            this._escapes.push(escape);
	            dataCenter.addEventListener(eventName, onMutated, this);
	            this._registeredEvents.push(eventName);
	        }
	        onMutated();
	    };
	    Object.defineProperty(Label.prototype, "htmlText", {
	        get: function () {
	            return this._htmlText;
	        },
	        set: function (value) {
	            if (this._htmlText != value) {
	                this._htmlText = value;
	                if (this._htmlText) {
	                    var matchResult = value.match(ESCAPE_REG_EXP);
	                    if (matchResult) {
	                        this.dealEscape(value, matchResult, this.onHtmlMutated);
	                    }
	                    else {
	                        this.text = htmlToPureText(value);
	                    }
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Label.prototype.unregisterEvents = function () {
	        for (var _i = 0, _a = this._registeredEvents; _i < _a.length; _i++) {
	            var item = _a[_i];
	            dataCenter.removeEventListener(item, this.onTextMutated, this);
	        }
	        this._registeredEvents.splice(0);
	    };
	    return Label;
	}(TextField));

	var timer;
	function delayScrollTop() {
	    cancelDelayScrollTop();
	    timer = setTimeout(function () {
	        window.scrollTo(0, 0);
	    }, 100);
	}
	function cancelDelayScrollTop() {
	    if (timer) {
	        clearTimeout(timer);
	        timer = null;
	    }
	}
	var TextInput = (function (_super) {
	    tslib_1.__extends(TextInput, _super);
	    function TextInput() {
	        var _this = _super.call(this) || this;
	        _this.isUI = true;
	        _this.placeholderColor = '#666666';
	        _this.type = 'text';
	        _this.onFocus = function (e) {
	            cancelDelayScrollTop();
	        };
	        _this.onBlur = function (e) {
	            _this.setBlur();
	            delayScrollTop();
	        };
	        _this.onInput = function (e) {
	            if (_this._charReg) {
	                var text = _this.updateWithCharReg(_this._input.value);
	                _this._input.value = text;
	            }
	            _this.dispatchEvent(Event.CHANGING, _this._input.value);
	        };
	        _this.setup();
	        _this.addEventListener(MouseEvent.CLICK, _this.onClickStatic, _this);
	        _this.addEventListener(Event.RESIZE, _this.onResize, _this);
	        _this.text = '';
	        return _this;
	    }
	    TextInput.prototype.onModify = function (value, key) {
	        switch (key) {
	            case 'placeholder':
	                if (this._placeholderLabel) {
	                    this._placeholderLabel.text = value;
	                }
	                break;
	            case 'placeholderColor':
	                if (this._placeholderLabel) {
	                    this._placeholderLabel.fillColor = value;
	                }
	                break;
	            case 'maxLength':
	                this._text = this.updateMaxLength(this._text);
	                break;
	            case 'charRegStr':
	                this.setCharReg();
	                break;
	        }
	    };
	    TextInput.prototype.setup = function () {
	        var fd = this._floatDisplay = new FloatDisplay();
	        var input = this._input = document.createElement('input');
	        fd.htmlElement = input;
	        fd.alpha = 0;
	        input.style.pointerEvents = 'none';
	        var style = input.style;
	        style.outline = 'none';
	        style.padding = '0';
	        style.border = '0';
	        style.backgroundColor = 'transparent';
	        input.type = 'text';
	        input.addEventListener('focus', this.onFocus);
	        input.addEventListener('blur', this.onBlur);
	        input.addEventListener('input', this.onInput);
	        var pl = this._placeholderLabel = new TextField();
	        pl.fillColor = this.placeholderColor;
	        this.verticalAlign = pl.verticalAlign = exports.VERTICAL_ALIGN.MIDDLE;
	        this.addChild(fd);
	    };
	    TextInput.prototype._setText = function (value) {
	        var _this = this;
	        _super.prototype._setText.call(this, value);
	        this._text = this.updateMaxLength(this._text);
	        this._text = this.updateWithCharReg(this._text);
	        setTimeout(function () {
	            _this.showPlaceholderLabel(value);
	        }, 1);
	    };
	    TextInput.prototype.updateMaxLength = function (text) {
	        var value = text;
	        var maxLength = this.maxLength;
	        if (maxLength > 0 && value && value.length > maxLength) {
	            value = value.substr(0, maxLength);
	        }
	        return value;
	    };
	    TextInput.prototype.updateWithCharReg = function (text) {
	        var value = text;
	        if (this._charReg) {
	            value = '';
	            for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
	                var char = text_1[_i];
	                if (char.match(this._charReg)) {
	                    value += char;
	                }
	            }
	        }
	        return value;
	    };
	    TextInput.prototype.setCharReg = function () {
	        if (this.charRegStr) {
	            this._charReg = new RegExp(this.charRegStr);
	            this._text = this.updateWithCharReg(this._text);
	        }
	        else {
	            this._charReg = null;
	        }
	    };
	    TextInput.prototype.showPlaceholderLabel = function (value) {
	        var pl = this._placeholderLabel;
	        if (value) {
	            var pl_1 = this._placeholderLabel;
	            if (pl_1.parent) {
	                pl_1.parent.removeChild(pl_1);
	            }
	        }
	        else {
	            if (!pl.parent) {
	                pl.text = this.placeholder;
	                pl.size = this.size;
	                pl.font = this.font;
	                this.addChildAt(pl, 0);
	            }
	            pl.textAlign = this.textAlign;
	        }
	    };
	    TextInput.prototype.setFocus = function () {
	        var fd = this._floatDisplay;
	        var input = this._input;
	        var pl = this._placeholderLabel;
	        fd.width = this.width;
	        fd.height = this.height;
	        input.value = this.text;
	        var style = input.style;
	        style.fontSize = this.size + 'px';
	        style.color = this.fillColor;
	        style.width = this.width + 'px';
	        style.height = this.height + 'px';
	        style.fontFamily = this.font;
	        style.pointerEvents = 'auto';
	        style.textAlign = this.textAlign;
	        this._oldFillColor = this.fillColor;
	        this._oldStrokeColor = this.strokeColor;
	        this.fillColor = 'transparent';
	        this.strokeColor = 'transparent';
	        if (pl.parent) {
	            pl.parent.removeChild(pl);
	        }
	        this._floatDisplay.alpha = 1;
	        var maxLength = this.maxLength;
	        if (maxLength > 0) {
	            input.maxLength = maxLength;
	        }
	        else {
	            input.removeAttribute('maxLength');
	        }
	        if (this.type) {
	            input.type = this.type;
	        }
	        input.focus();
	        this.dispatchEvent(Event.FOCUS);
	    };
	    TextInput.prototype.setBlur = function () {
	        var input = this._input;
	        this._floatDisplay.alpha = 0;
	        input.style.pointerEvents = 'none';
	        input.blur();
	        this.text = input.value;
	        this.fillColor = this._oldFillColor;
	        this.strokeColor = this._oldStrokeColor;
	        this.dispatchEvent(Event.BLUR);
	    };
	    TextInput.prototype.onClickStage = function (e) {
	        if (e.currentTarget !== this) {
	            this.setBlur();
	        }
	    };
	    TextInput.prototype.onClickStatic = function () {
	        this.setFocus();
	        this.stage.once(MouseEvent.MOUSE_DOWN, this.onClickStage, this);
	    };
	    TextInput.prototype.onResize = function () {
	        var pl = this._placeholderLabel;
	        pl.width = this.width;
	        pl.height = this.height;
	    };
	    TextInput.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
	        if (isMouseEvent === void 0) { isMouseEvent = false; }
	        var s = this;
	        if (!this.visible)
	            return null;
	        if (isMouseEvent && !this.mouseChildren)
	            return null;
	        if (!isMouseEvent) {
	            if (s._localBoundsSelf.isPointIn(globalPoint)) {
	                return s;
	            }
	        }
	        else {
	            var _a = s.globalToLocal(globalPoint, TextInput._bp), x = _a.x, y = _a.y;
	            if (x > 0 && x < s.width && y > 0 && y < s.height) {
	                return s;
	            }
	        }
	        return null;
	    };
	    TextInput._bp = new Point();
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], TextInput.prototype, "placeholder", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], TextInput.prototype, "placeholderColor", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], TextInput.prototype, "maxLength", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], TextInput.prototype, "type", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], TextInput.prototype, "charRegStr", void 0);
	    return TextInput;
	}(Label));

	var proxyMethods = [
	    'onChildrenChange',
	    'addChild',
	    'addChildAt',
	    'swapChildren',
	    'getChildIndex',
	    'setChildIndex',
	    'getChildAt',
	    'getChildByName',
	    'removeChild',
	    'removeChildAt',
	    'removeChildren',
	];
	var ScrollView = (function (_super) {
	    tslib_1.__extends(ScrollView, _super);
	    function ScrollView() {
	        var _this = _super.call(this) || this;
	        _this.isUI = true;
	        for (var _i = 0, proxyMethods_1 = proxyMethods; _i < proxyMethods_1.length; _i++) {
	            var item = proxyMethods_1[_i];
	            _this[item] = _this.viewPort[item].bind(_this.viewPort);
	        }
	        return _this;
	    }
	    return ScrollView;
	}(ScrollViewBase));

	var ScrollListItem = (function (_super) {
	    tslib_1.__extends(ScrollListItem, _super);
	    function ScrollListItem() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.isUI = true;
	        return _this;
	    }
	    ScrollListItem.prototype.setView = function (view) {
	        this.addChild(view);
	        this.view = view;
	    };
	    ScrollListItem.prototype.updateData = function (data) {
	        this.view['data'] = data;
	        this.view.dispatchEvent(Event.UPDATE_DATA, data);
	    };
	    return ScrollListItem;
	}(ScrollListItemBase));
	var ScrollList = (function (_super) {
	    tslib_1.__extends(ScrollList, _super);
	    function ScrollList() {
	        var _this = _super.call(this) || this;
	        _this.cloneEvents = true;
	        _this.cloneScripts = true;
	        _this.itemClass = ScrollListItem;
	        for (var _i = 0, proxyMethods_1 = proxyMethods; _i < proxyMethods_1.length; _i++) {
	            var item = proxyMethods_1[_i];
	            _this[item] = _this.viewPort[item].bind(_this.viewPort);
	        }
	        return _this;
	    }
	    ScrollList.prototype.onNextFrame = function (event) {
	        this.firstItem = this.removeChildAt(0);
	        this.updateViewRect();
	    };
	    ScrollList.prototype.createItem = function () {
	        var item = _super.prototype.createItem.call(this);
	        item.setView(this.firstItem.clone(this.cloneEvents, this.cloneScripts));
	        return item;
	    };
	    return ScrollList;
	}(ScrollListBase));

	var BitmapText = (function (_super) {
	    tslib_1.__extends(BitmapText, _super);
	    function BitmapText() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.isUI = true;
	        _this._charCache = [];
	        _this.text = '';
	        _this.verticalAlign = exports.VERTICAL_ALIGN.DOWN;
	        _this.letterSpacing = 0;
	        return _this;
	    }
	    BitmapText.prototype.onModify = function (value, key) {
	        switch (key) {
	            case 'text':
	            case 'letterSpacing':
	            case 'verticalAlign':
	                this.render();
	                break;
	            case 'font':
	                this._fontConfig = getFont(value);
	                break;
	        }
	    };
	    BitmapText.prototype.render = function () {
	        if (!this._fontConfig || !this.text) {
	            return;
	        }
	        var text = this.text + '';
	        var x = 0, li = text.length, maxHeight = 0;
	        for (var i = 0; i < li; i++) {
	            var char = text[i];
	            var sp = this.addChar(char, i);
	            sp.x = x;
	            x += sp.width + this.letterSpacing;
	            if (sp.height > maxHeight) {
	                maxHeight = sp.height;
	            }
	        }
	        for (var j = li, lj = this.children.length; j < lj; j++) {
	            this._charCache.push(this.removeChildAt(j));
	            j--;
	            lj--;
	        }
	        if (this._height) {
	            maxHeight = this._height;
	        }
	        for (var i = 0, li_1 = this.children.length; i < li_1; i++) {
	            var child = this.children[i];
	            switch (this.verticalAlign) {
	                case exports.VERTICAL_ALIGN.DOWN:
	                    child.y = maxHeight - child.height;
	                    break;
	                case exports.VERTICAL_ALIGN.MIDDLE:
	                    child.y = (maxHeight - child.height) / 2;
	                    break;
	                case exports.VERTICAL_ALIGN.UP:
	                    child.y = 0;
	                    break;
	            }
	        }
	    };
	    BitmapText.prototype.addChar = function (char, index) {
	        var sp = this.getChildAt(index);
	        if (!sp) {
	            if (this._charCache.length > 0) {
	                sp = this._charCache.pop();
	            }
	            else {
	                sp = new Sprite();
	            }
	        }
	        if (!sp.parent) {
	            this.addChild(sp);
	        }
	        var uuid = this._fontConfig[char];
	        if (!uuid) {
	            console.log("font asset not found: [" + char + "] in", this.font);
	        }
	        sp.texture = uuid ? Texture.fromImage(uuid) : null;
	        return sp;
	    };
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], BitmapText.prototype, "text", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], BitmapText.prototype, "font", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], BitmapText.prototype, "verticalAlign", void 0);
	    tslib_1.__decorate([
	        dirtyFieldTrigger
	    ], BitmapText.prototype, "letterSpacing", void 0);
	    return BitmapText;
	}(Container));

	var HtmlView = (function (_super) {
	    tslib_1.__extends(HtmlView, _super);
	    function HtmlView() {
	        var _this = _super.call(this) || this;
	        _this.isUI = true;
	        _this.afterConstructor();
	        return _this;
	    }
	    HtmlView.prototype.afterConstructor = function () {
	    };
	    Object.defineProperty(HtmlView.prototype, "$store", {
	        get: function () {
	            var p = this;
	            do {
	                if (p['$isViewRoot']) {
	                    break;
	                }
	                p = p.parent;
	            } while (p.parent);
	            if (p) {
	                return p['$_store'];
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    HtmlView.prototype.findChildByUUID = function (uuid) {
	        if (this['uuid'] === uuid) {
	            return this;
	        }
	    };
	    HtmlView = tslib_1.__decorate([
	        afterConstructor,
	        applyAutoAdjust,
	        applyScript,
	        applyEvents
	    ], HtmlView);
	    return HtmlView;
	}(FloatDisplay));

	function isUI(obj) {
	    return obj.isUI;
	}

	var nodeTypeMapping = {
	    node: Node$1,
	    rect: Rect,
	    circle: Circle$1,
	    label: Label,
	    image: Image$1,
	    textinput: TextInput,
	    scrollView: ScrollView,
	    scrollList: ScrollList,
	    bitmapText: BitmapText,
	    htmlView: HtmlView,
	};
	function registerNodeType(name, def) {
	    nodeTypeMapping[name] = def;
	}
	function instantiate(config) {
	    return instantiateView(config);
	}
	function instantiateView(config) {
	    var type = config.type;
	    var nodeTypeDef = nodeTypeMapping[type];
	    if (!nodeTypeDef) {
	        console.warn('error node type:', type);
	        return;
	    }
	    var node = new nodeTypeDef();
	    var name = config.name, uuid = config.uuid, properties = config.properties, children = config.children, events = config.events, scripts = config.scripts;
	    node.name = name;
	    node.uuid = uuid;
	    node.__originConfig = config;
	    injectProperties(node, properties);
	    if (children && children.length > 0) {
	        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
	            var childConfig = children_1[_i];
	            var childNode = instantiateView(childConfig);
	            if (childNode) {
	                node.addChild(childNode);
	            }
	        }
	    }
	    if (scripts && scripts.length > 0) {
	        for (var _a = 0, scripts_1 = scripts; _a < scripts_1.length; _a++) {
	            var scriptConfig = scripts_1[_a];
	            instantiateScript(node, scriptConfig);
	        }
	    }
	    if (events && node.eventsProxy) {
	        node.eventsProxy.start(events);
	    }
	    return node;
	}

	var Toast = (function (_super) {
	    tslib_1.__extends(Toast, _super);
	    function Toast(gameStage) {
	        var _this = _super.call(this) || this;
	        _this.name = 'toast';
	        _this._gameStage = gameStage;
	        _this.mouseEnabled = _this.mouseChildren = false;
	        _this.horizonCenter = 0;
	        _this.verticalCenter = 0;
	        return _this;
	    }
	    Toast.prototype.show = function (props) {
	        if (props === void 0) { props = {}; }
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var contentView, lab, text, _a, padding, paddingH, paddingV, _b, duration, _c, showDuration, _d, hideDuration;
	            return tslib_1.__generator(this, function (_e) {
	                switch (_e.label) {
	                    case 0:
	                        if (!props.text) {
	                            return [2];
	                        }
	                        return [4, this.getContent(props.viewName, props)];
	                    case 1:
	                        contentView = _e.sent();
	                        lab = contentView.getChildByName('lab');
	                        if (!lab) {
	                            console.warn('[lab] child no exists on toast view');
	                            return [2];
	                        }
	                        text = props.text, _a = props.padding, padding = _a === void 0 ? 10 : _a, paddingH = props.paddingH, paddingV = props.paddingV, _b = props.duration, duration = _b === void 0 ? 1000 : _b, _c = props.showDuration, showDuration = _c === void 0 ? 300 : _c, _d = props.hideDuration, hideDuration = _d === void 0 ? 200 : _d;
	                        lab.text = text;
	                        lab.x = paddingH || padding;
	                        lab.y = paddingV || padding;
	                        this.width = contentView.width = lab.width + (paddingH || padding) * 2;
	                        this.height = contentView.height = lab.height + (paddingV || padding) * 2;
	                        if (!contentView.visible) {
	                            contentView.visible = true;
	                            contentView.alpha = 0;
	                        }
	                        Tween.get(contentView, null, null, true)
	                            .to({ alpha: 1 }, showDuration)
	                            .wait(duration)
	                            .to({ alpha: 0 }, hideDuration)
	                            .call(this.removeContentView, this);
	                        return [2];
	                }
	            });
	        });
	    };
	    Toast.prototype.hide = function (animation, hideDuration) {
	        if (animation === void 0) { animation = true; }
	        if (hideDuration === void 0) { hideDuration = 200; }
	        if (this._content) {
	            var contentView = this._content;
	            if (animation) {
	                Tween.get(contentView, null, null, true)
	                    .to({ alpha: 0 }, hideDuration)
	                    .call(this.removeContentView, this);
	            }
	            else {
	                Tween.removeTweens(contentView);
	                this.removeContentView();
	            }
	        }
	    };
	    Toast.prototype.removeContentView = function () {
	        this._content.visible = false;
	        this.removeChild(this._content);
	        this._content = null;
	    };
	    Toast.prototype.getContent = function (viewName, props) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var view, _a, borderRadius, _b, labColor, _c, labSize, _d, bgColor, _e, bgAlpha, bg, lab;
	            return tslib_1.__generator(this, function (_f) {
	                switch (_f.label) {
	                    case 0:
	                        if (!(this.children.length == 0)) return [3, 3];
	                        if (!viewName) return [3, 2];
	                        return [4, this._gameStage.instantiateView(viewName)];
	                    case 1:
	                        view = _f.sent();
	                        _f.label = 2;
	                    case 2:
	                        if (!view) {
	                            if (!this._contentSample) {
	                                _a = props.borderRadius, borderRadius = _a === void 0 ? 10 : _a, _b = props.labColor, labColor = _b === void 0 ? 'white' : _b, _c = props.labSize, labSize = _c === void 0 ? 30 : _c, _d = props.bgColor, bgColor = _d === void 0 ? 'black' : _d, _e = props.bgAlpha, bgAlpha = _e === void 0 ? 0.7 : _e;
	                                this._contentSample = new Node$1();
	                                bg = new Rect();
	                                bg.borderRadius = borderRadius;
	                                bg.percentWidth = 100;
	                                bg.percentHeight = 100;
	                                bg.fillColor = bgColor;
	                                bg.alpha = bgAlpha;
	                                this._contentSample.addChild(bg);
	                                lab = new Label();
	                                lab.name = 'lab';
	                                lab.fillColor = labColor;
	                                lab.size = labSize;
	                                this._contentSample.addChild(lab);
	                            }
	                            view = this._contentSample;
	                        }
	                        this._content = view;
	                        this.addChild(view);
	                        return [3, 4];
	                    case 3:
	                        view = this.getChildAt(0);
	                        _f.label = 4;
	                    case 4: return [2, view];
	                }
	            });
	        });
	    };
	    return Toast;
	}(Node$1));

	function createEvalFunc(exp) {
	    var func;
	    try {
	        func = Function("scope", "with(scope){return " + exp + "}");
	    }
	    catch (err) {
	        var sepStr = (exp.indexOf('"') < 0 ? '"' : "'");
	        var reg = /([^\\]?)`/g;
	        exp = exp.replace(reg, "$1" + sepStr);
	        reg = /\$\{(.*?)\}/g;
	        exp = exp.replace(reg, sepStr + "+($1)+" + sepStr);
	        try {
	            func = Function("scope", "with(scope){return " + exp + "}");
	        }
	        catch (e) {
	            console.error('闈炴硶鐨勮〃杈惧紡:', exp);
	        }
	    }
	    return func;
	}
	function evalExp(exp, scope) {
	    return createEvalFunc(exp)(scope);
	}
	function createRunFunc(exp) {
	    return createEvalFunc("(function(){" + exp + "})()");
	}
	function runExp(exp, scope) {
	    createRunFunc(exp)(scope);
	}

	var Watcher = (function () {
	    function Watcher(entity, target, exp, scope, callback) {
	        this._disposed = false;
	        this._entity = entity;
	        this._uid = Watcher._uid++;
	        this._target = target;
	        this._exp = exp;
	        this._scope = scope;
	        this._expFunc = createEvalFunc(exp);
	        this._callback = callback;
	        this.update();
	    }
	    Object.defineProperty(Watcher.prototype, "uid", {
	        get: function () {
	            return this._uid;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Watcher.prototype.getValue = function () {
	        if (this._disposed)
	            return null;
	        var value = null;
	        Watcher.updating = this;
	        Object.defineProperty(this._scope, "$root", {
	            configurable: true,
	            enumerable: false,
	            value: this._entity.compiler.root,
	            writable: false
	        });
	        Object.defineProperty(this._scope, "$target", {
	            configurable: true,
	            enumerable: false,
	            value: this._target,
	            writable: false
	        });
	        try {
	            value = this._expFunc.call(this._scope, this._scope);
	        }
	        catch (err) {
	            console.warn("琛ㄨ揪寮忔眰鍊奸敊璇痋nerr: " + err.toString() + "\nexp锛�" + this._exp + "锛宻cope锛�" + JSON.stringify(this._scope));
	        }
	        delete this._scope["$root"];
	        delete this._scope["$target"];
	        Watcher.updating = null;
	        return value;
	    };
	    Watcher.prototype.update = function (extra) {
	        if (this._disposed)
	            return;
	        var value = this.getValue();
	        if (!Watcher.isEqual(value, this._value)) {
	            this._callback && this._callback(value, this._value, extra);
	            this._value = Watcher.deepCopy(value);
	        }
	    };
	    Watcher.prototype.dispose = function () {
	        if (this._disposed)
	            return;
	        this._value = null;
	        this._target = null;
	        this._exp = null;
	        this._scope = null;
	        this._expFunc = null;
	        this._callback = null;
	        this._disposed = true;
	    };
	    Watcher.isEqual = function (a, b) {
	        return (a == b || (Watcher.isObject(a) && Watcher.isObject(b)
	            ? JSON.stringify(a) == JSON.stringify(b)
	            : false));
	    };
	    Watcher.isObject = function (obj) {
	        return (obj && typeof obj == "object");
	    };
	    Watcher.deepCopy = function (from) {
	        if (Watcher.isObject(from)) {
	            return JSON.parse(JSON.stringify(from));
	        }
	        else {
	            return from;
	        }
	    };
	    Watcher.updating = null;
	    Watcher._uid = 0;
	    return Watcher;
	}());

	var Dep = (function () {
	    function Dep() {
	        this._map = {};
	    }
	    Dep.prototype.watch = function (watcher) {
	        if (!this._map[watcher.uid]) {
	            this._map[watcher.uid] = watcher;
	        }
	    };
	    Dep.prototype.notify = function (extra) {
	        for (var uid in this._map) {
	            var watcher = this._map[uid];
	            watcher.update(extra);
	        }
	    };
	    return Dep;
	}());

	var Mutator = (function () {
	    function Mutator() {
	    }
	    Mutator.mutate = function (data) {
	        if (!data || typeof data != "object")
	            return;
	        if (!data.__ares_mutated__) {
	            for (var key in data) {
	                Mutator.mutateProp(data, key, data[key]);
	            }
	            Object.defineProperty(data, "__ares_mutated__", {
	                value: true,
	                writable: false,
	                enumerable: false,
	                configurable: false
	            });
	        }
	        return data;
	    };
	    Mutator.mutateProp = function (data, key, value) {
	        var dep = new Dep();
	        Object.defineProperty(data, key, {
	            enumerable: true,
	            configurable: false,
	            get: function () {
	                var watcher = Watcher.updating;
	                if (watcher)
	                    dep.watch(watcher);
	                return value;
	            },
	            set: function (v) {
	                if (v == value)
	                    return;
	                value = v;
	                if (Array.isArray(v))
	                    Mutator.mutateArray(v, dep);
	                else
	                    Mutator.mutate(v);
	                dep.notify();
	            }
	        });
	        if (Array.isArray(value)) {
	            Mutator.mutateArray(value, dep);
	        }
	        else {
	            Mutator.mutate(value);
	        }
	    };
	    Mutator.mutateArray = function (arr, dep) {
	        arr["__proto__"] = Mutator.defineReactiveArray(dep);
	        for (var i = 0, len = arr.length; i < len; i++) {
	            Mutator.mutate(arr[i]);
	        }
	    };
	    Mutator.defineReactiveArray = function (dep) {
	        var proto = Array.prototype;
	        var result = Object.create(proto);
	        Mutator._arrMethods.forEach(function (method) {
	            var oriMethod = proto[method];
	            Object.defineProperty(result, method, {
	                value: function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i] = arguments[_i];
	                    }
	                    var result = oriMethod.apply(this, args);
	                    var inserted;
	                    switch (method) {
	                        case "push":
	                        case "unshift":
	                            inserted = args;
	                            break;
	                        case "splice":
	                            inserted = args.slice(2);
	                            break;
	                    }
	                    if (inserted && inserted.length) {
	                        Mutator.mutateArray(inserted, dep);
	                    }
	                    dep.notify({ method: args });
	                    return result;
	                }
	            });
	        });
	        Object.defineProperty(result, "$set", {
	            value: function (index, value) {
	                if (index >= this.length)
	                    index = this.length;
	                return this.splice(index, 1, value)[0];
	            }
	        });
	        Object.defineProperty(result, "$remove", {
	            value: function (item) {
	                var index = this.indexOf(item);
	                if (index > -1)
	                    return this.splice(index, 1);
	                return null;
	            }
	        });
	        return result;
	    };
	    Mutator._arrMethods = [
	        "push",
	        "pop",
	        "unshift",
	        "shift",
	        "splice",
	        "sort",
	        "reverse"
	    ];
	    return Mutator;
	}());

	var commands = {
	    set: function (context) {
	        runExp(context.data.subCmd + "=" + context.data.exp, context.scope);
	        return context.target;
	    },
	    bind: function (context) {
	        context.entity.createWatcher(context.target, context.data.exp, context.scope, function (value) {
	            if (context.data.subCmd)
	                runExp(context.data.subCmd + "=" + context.data.exp, context.scope);
	        });
	        return context.target;
	    }
	};

	var defaultCmdRegExp = /^(data\-)?z[\-_](\w+)([:\$](.+))?$/;
	var Zri = (function () {
	    function Zri(data, compiler, options) {
	        this._data = Mutator.mutate(data);
	        this._compiler = compiler;
	        this._options = options;
	        this._compiler.init(this);
	        if (this._options && this._options.inited) {
	            this._options.inited.call(this._data, this);
	        }
	    }
	    Object.defineProperty(Zri.prototype, "data", {
	        get: function () {
	            return this._data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Zri.prototype, "compiler", {
	        get: function () {
	            return this._compiler;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Zri.prototype.createWatcher = function (target, exp, scope, callback) {
	        return new Watcher(this, target, exp, scope, callback);
	    };
	    Zri.prototype.parseCommand = function (key, value, cmdRegExp) {
	        var result = (cmdRegExp || defaultCmdRegExp).exec(key);
	        if (!result)
	            return null;
	        var key = result[0];
	        var cmdName = result[2];
	        var exp = value;
	        var subCmd = result[4] || "";
	        return {
	            cmdName: cmdName,
	            subCmd: subCmd,
	            propName: key,
	            exp: exp
	        };
	    };
	    Zri.prototype.testCommand = function (data) {
	        if (!data)
	            return false;
	        var cmd = commands[data.cmdName];
	        return (cmd != null);
	    };
	    Zri.prototype.execCommand = function (data, target, scope) {
	        if (!data || !scope)
	            return false;
	        var cmd = commands[data.cmdName];
	        if (!cmd)
	            return false;
	        cmd({
	            target: target,
	            scope: scope,
	            entity: this,
	            data: data
	        });
	        return true;
	    };
	    return Zri;
	}());

	var commands$1 = {
	    prop: function (context) {
	        var cmdData = context.cmdData;
	        var target = context.target;
	        context.entity.createWatcher(target, cmdData.exp, context.scope, function (value) {
	            if (cmdData.subCmd != "") {
	                target[cmdData.subCmd] = value;
	            }
	            else {
	                for (var name in value) {
	                    target[name] = value[name];
	                }
	            }
	        });
	        return target;
	    },
	    on: function (context) {
	        var cmdData = context.cmdData;
	        if (cmdData.subCmd != "") {
	            var handler_1 = context.scope[cmdData.exp] || window[context.cmdData.exp];
	            if (typeof handler_1 == "function") {
	                context.target.addEventListener(cmdData.subCmd, function () {
	                    handler_1.apply(this, arguments);
	                }, context.scope);
	            }
	            else {
	                context.target.addEventListener(cmdData.subCmd, function (evt) {
	                    var scope = Object.create(context.scope);
	                    scope.$event = evt;
	                    scope.$target = context.target;
	                    runExp(cmdData.exp, scope);
	                });
	            }
	        }
	        return context.target;
	    },
	    if: function (context) {
	        var cmdData = context.cmdData;
	        var compiled = false;
	        var refNode = new Container();
	        refNode.mouseChildren = refNode.mouseEnabled = false;
	        var parent = context.target.parent;
	        var index = parent.getChildIndex(context.target);
	        parent.removeChildAt(index);
	        parent.addChildAt(refNode, index);
	        var watcher = context.entity.createWatcher(context.target, cmdData.exp, context.scope, function (value) {
	            if (!refNode.parent && !context.target.parent) {
	                watcher.dispose();
	                return;
	            }
	            if (value == true) {
	                if (!context.target.parent) {
	                    var parent_1 = refNode.parent;
	                    var index_1 = parent_1.getChildIndex(refNode);
	                    parent_1.removeChild(refNode);
	                    parent_1.addChildAt(context.target, index_1);
	                }
	                if (!compiled) {
	                    context.compiler.compile(context.target, context.scope);
	                    compiled = true;
	                }
	            }
	            else {
	                if (context.target.parent) {
	                    var parent_2 = context.target.parent;
	                    var index_2 = parent_2.getChildIndex(context.target);
	                    parent_2.removeChild(context.target);
	                    parent_2.addChildAt(refNode, index_2);
	                }
	            }
	        });
	        return context.target;
	    },
	    for: function (context) {
	        var cmdData = context.cmdData;
	        var options = evalExp(cmdData.subCmd, context.scope) || {};
	        var page = (options.page || Number.MAX_VALUE);
	        var reg = /^\s*(\S+)\s+in\s+([\s\S]+?)\s*$/;
	        var res = reg.exec(cmdData.exp);
	        if (!res) {
	            console.error("for鍛戒护琛ㄨ揪寮忛敊璇細" + cmdData.exp);
	            return;
	        }
	        var itemName = res[1];
	        var arrName = res[2];
	        var index = context.target.parent.getChildIndex(context.target);
	        var parent = new Container();
	        context.target.parent.addChildAt(parent, index);
	        context.target.parent.removeChild(context.target);
	        var forScope = Object.create(context.scope);
	        Object.defineProperty(forScope, "$forTarget", {
	            configurable: true,
	            enumerable: false,
	            value: context.target,
	            writable: false
	        });
	        context.compiler.compile(parent, forScope);
	        var isArray;
	        var curList;
	        var curIndex;
	        var lastNode;
	        var watcher = context.entity.createWatcher(context.target, arrName, forScope, function (value) {
	            if (!parent.parent) {
	                watcher.dispose();
	                return;
	            }
	            for (var i = parent.children.length - 1; i >= 0; i--) {
	                parent.removeChildAt(i).destroy();
	            }
	            if (typeof value == "number") {
	                var temp = [];
	                for (var i = 0; i < value; i++) {
	                    temp.push(i);
	                }
	                value = temp;
	            }
	            isArray = (value instanceof Array);
	            var list;
	            if (isArray) {
	                list = value;
	            }
	            else {
	                list = [];
	                for (var key in value) {
	                    list.push({
	                        key: key,
	                        value: value[key]
	                    });
	                }
	            }
	            curList = list;
	            curIndex = 0;
	            lastNode = null;
	            for (var li = curList.length; curIndex < li; curIndex++) {
	                var newNode = context.target.clone(true, true);
	                parent.addChild(newNode);
	                var newScope = Object.create(forScope);
	                Object.defineProperty(newScope, "$index", {
	                    configurable: true,
	                    enumerable: false,
	                    value: curIndex,
	                    writable: false
	                });
	                if (!isArray) {
	                    Object.defineProperty(newScope, "$key", {
	                        configurable: true,
	                        enumerable: true,
	                        value: curList[curIndex].key,
	                        writable: false
	                    });
	                }
	                Object.defineProperty(newScope, "$last", {
	                    configurable: true,
	                    enumerable: false,
	                    value: lastNode,
	                    writable: false
	                });
	                Object.defineProperty(newScope, "$length", {
	                    configurable: true,
	                    enumerable: false,
	                    value: curList.length,
	                    writable: false
	                });
	                Object.defineProperty(newScope, itemName, {
	                    configurable: true,
	                    enumerable: true,
	                    value: (isArray ? curList[curIndex] : curList[curIndex].value),
	                    writable: false
	                });
	                Object.defineProperty(newNode, "$data", {
	                    configurable: true,
	                    enumerable: false,
	                    value: (isArray ? curList[curIndex] : curList[curIndex].value),
	                    writable: false
	                });
	                context.compiler.compile(newNode, newScope);
	                lastNode = newNode;
	            }
	        });
	        return context.target;
	    }
	};

	var interruptCmds = ['for', 'if'];
	var ZriCompiler = (function () {
	    function ZriCompiler(root) {
	        this._root = root;
	    }
	    Object.defineProperty(ZriCompiler.prototype, "root", {
	        get: function () {
	            return this._root;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ZriCompiler.prototype.init = function (entity) {
	        this._entity = entity;
	        this.compile(this._root, entity.data);
	    };
	    ZriCompiler.prototype.compile = function (target, scope) {
	        var cmdDatas = [];
	        var needInterrupt = false;
	        var originConfig = target['__originConfig'];
	        if (originConfig && originConfig.properties) {
	            var properties = originConfig.properties;
	            for (var key in properties) {
	                if (key.indexOf(cmdPrefix) != 0) {
	                    continue;
	                }
	                var cmdData = this._entity.parseCommand(key, target[key]);
	                if (cmdData) {
	                    cmdDatas.push(cmdData);
	                    if (interruptCmds.indexOf(cmdData.cmdName) >= 0) {
	                        needInterrupt = true;
	                        cmdDatas.splice(0, cmdDatas.length - 1);
	                        break;
	                    }
	                }
	            }
	            for (var _i = 0, cmdDatas_1 = cmdDatas; _i < cmdDatas_1.length; _i++) {
	                var cmdData = cmdDatas_1[_i];
	                delete target[cmdData.propName];
	                if (interruptCmds.indexOf(cmdData.cmdName) >= 0) {
	                    delete properties[cmdData.propName];
	                }
	                var cmd = commands$1[cmdData.cmdName];
	                if (!cmd) {
	                    cmdData.subCmd = cmdData.cmdName || "";
	                    cmdData.cmdName = "prop";
	                    cmd = commands$1[cmdData.cmdName];
	                }
	                cmd({
	                    scope: scope,
	                    target: target,
	                    entity: this._entity,
	                    cmdData: cmdData,
	                    compiler: this,
	                });
	            }
	        }
	        if (!needInterrupt && target.children && target.children.length > 0) {
	            for (var _a = 0, _b = target.children; _a < _b.length; _a++) {
	                var child = _b[_a];
	                this.compile(child, scope);
	            }
	        }
	    };
	    ZriCompiler.prototype.debug = function () {
	    };
	    return ZriCompiler;
	}());

	function bind(store, view, options) {
	    var compiler = new ZriCompiler(view);
	    var zri = new Zri(store, compiler, options);
	    compiler.debug();
	    return zri;
	}
	function createStore(exp, computed) {
	    var store = safeEval(exp) || {};
	    for (var _i = 0, computed_1 = computed; _i < computed_1.length; _i++) {
	        var _a = computed_1[_i], name = _a.name, script = _a.script;
	        if (name && !store.hasOwnProperty(name)) {
	            var getterCode = "return function(){\n\t\t\t" + script + "\n\t\t}";
	            Object.defineProperty(store, name, {
	                get: safeEval(getterCode),
	            });
	        }
	    }
	    return store;
	}

	var customMap = {};
	function registerCustomModules(customs) {
	    if (!customs) {
	        return;
	    }
	    for (var _i = 0, customs_1 = customs; _i < customs_1.length; _i++) {
	        var custom = customs_1[_i];
	        if (custom.assets) {
	            customMap[custom.id].assets = custom.assets;
	        }
	        if (custom.props) {
	            customMap[custom.id].props = custom.props;
	        }
	    }
	}
	function registerCustomModule(id, def) {
	    customMap[id] = {
	        def: def,
	    };
	}
	function registerCustomCodeModule(config) {
	    var id = config.id, code = config.code;
	    registerCustomModule(id, importCJSCode(code, true));
	}
	function registerCustomModuleFromConfig(config) {
	    if (config) {
	        for (var _i = 0, config_1 = config; _i < config_1.length; _i++) {
	            var item = config_1[_i];
	            registerCustomCodeModule(item);
	        }
	    }
	}
	function addCustomModule(id, container, options) {
	    var creator = customMap[id].def;
	    if (creator) {
	        var instance = creator(options);
	        if (instance) {
	            container.addChild(instance);
	            return instance;
	        }
	    }
	}
	function resolveCustomAsset(id, uuid) {
	    var module = customMap[id];
	    if (module) {
	        var config = arrayFind(module.assets, function (item) { return item.uuid === uuid; });
	        if (config) {
	            if (config.url.indexOf(linkScheme) === 0) {
	                var linkUUID = config.url.replace(linkScheme, '');
	                var linkConfig = getAssetByUUID(linkUUID);
	                if (linkConfig) {
	                    config = linkConfig;
	                }
	            }
	        }
	        return config;
	    }
	}
	function getProps(id) {
	    return customMap[id].props || {};
	}

	function dealPxEnv() {
	    if (queryParams.appID) {
	        env.appID = queryParams.appID;
	    }
	    if (queryParams.channelType) {
	        env.channelType = queryParams.channelType;
	    }
	    if (queryParams.projectID) {
	        env.projectID = queryParams.projectID;
	    }
	    else {
	        var result = window.location.pathname.match(/\/projectx\/(.*?)\/.*?/);
	        if (result) {
	            env.projectID = result[1];
	        }
	    }
	    if (queryParams.is_from_share) {
	        env.fromShare = true;
	    }
	    var newUser = true;
	    var key = 'nu_' + env.appID + '_' + env.projectID;
	    var v = localStorage.getItem(key);
	    if (v) {
	        newUser = false;
	    }
	    else {
	        localStorage.setItem(key, '1');
	    }
	    env.newUser = newUser;
	    if (window['isSharePage']) {
	        accessLog(506);
	    }
	}
	function cleanNewUser() {
	    var key = 'nu_' + env.appID + '_' + env.projectID;
	    localStorage.removeItem(key);
	}
	function dealPageRemainTime() {
	    var startTimer = new Date().getTime();
	    var endTimer;
	    var visibilityChange;
	    if (typeof document.hidden !== 'undefined') {
	        visibilityChange = 'visibilitychange';
	    }
	    else if (typeof document['msHidden'] !== 'undefined') {
	        visibilityChange = 'msvisibilitychange';
	    }
	    else if (typeof document['webkitHidden'] !== 'undefined') {
	        visibilityChange = 'webkitvisibilitychange';
	    }
	    var handleVisibilityChange = function (e) {
	        if (document.visibilityState == "visible") {
	            startTimer = new Date().getTime();
	        }
	        if (document.visibilityState == "hidden") {
	            endTimer = new Date().getTime();
	            sendData();
	        }
	    };
	    var sendData = function () {
	        var t0 = endTimer - startTimer;
	        accessLog(156, {
	            remain: t0,
	        });
	    };
	    document.addEventListener(visibilityChange, handleVisibilityChange, false);
	    document.body['onbeforeunload'] = function () {
	        endTimer = new Date().getTime();
	        return sendData();
	    };
	}
	function accessLog(pagebizid, params) {
	    var p = {
	        pagebizid: pagebizid,
	    };
	    injectProp(p, params);
	    return httpRequest('buriedPoint', 'get', p);
	}

	var GameStage = (function (_super) {
	    tslib_1.__extends(GameStage, _super);
	    function GameStage(stage) {
	        var _this = _super.call(this) || this;
	        _this._viewCache = {};
	        _this.lazyLoadAllAssets = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var _a, assets, customs, _b, _c, _i, uuid, group, _d, customs_1, custom, group;
	            return tslib_1.__generator(this, function (_e) {
	                switch (_e.label) {
	                    case 0:
	                        _a = this._config, assets = _a.assets, customs = _a.customs;
	                        if (!!Array.isArray(assets)) return [3, 4];
	                        _b = [];
	                        for (_c in assets)
	                            _b.push(_c);
	                        _i = 0;
	                        _e.label = 1;
	                    case 1:
	                        if (!(_i < _b.length)) return [3, 4];
	                        uuid = _b[_i];
	                        group = assets[uuid];
	                        if (!(group && group.length > 0)) return [3, 3];
	                        return [4, loadAssetsGroup(group, uuid)];
	                    case 2:
	                        _e.sent();
	                        _e.label = 3;
	                    case 3:
	                        _i++;
	                        return [3, 1];
	                    case 4:
	                        _d = 0, customs_1 = customs;
	                        _e.label = 5;
	                    case 5:
	                        if (!(_d < customs_1.length)) return [3, 8];
	                        custom = customs_1[_d];
	                        group = custom.assets;
	                        if (!(group && group.length > 0)) return [3, 7];
	                        return [4, loadAssetsGroup(group, custom.id)];
	                    case 6:
	                        _e.sent();
	                        _e.label = 7;
	                    case 7:
	                        _d++;
	                        return [3, 5];
	                    case 8: return [2];
	                }
	            });
	        }); };
	        _this.name = 'game-stage';
	        stage.width = stage.viewRect.width;
	        stage.height = stage.viewRect.height;
	        _this._stage = stage;
	        _this._dataCenter = dataCenter;
	        _this.percentWidth = 100;
	        _this.percentHeight = 100;
	        _this.mouseEnabled = false;
	        var loadingView = _this._loadingView = new Container();
	        _this.addChild(_this._sceneContainer = new StackContainer());
	        _this.addChild(_this._popupContainer = new StackContainer(false, 1));
	        _this.addChild(_this._toast = new Toast(_this));
	        _this.addChild(loadingView);
	        var blackLayer = _this._blackLayer = new Rect();
	        blackLayer.name = 'blackLayer';
	        blackLayer.width = stage.width;
	        blackLayer.height = stage.height;
	        blackLayer.fillColor = 0;
	        blackLayer.alpha = 0.7;
	        loadingView.percentWidth = 100;
	        loadingView.percentHeight = 100;
	        loadingView.visible = false;
	        _this._sceneContainer.name = 'scene-container';
	        _this._popupContainer.name = 'popup-container';
	        _this._popupContainer.addEventListener(Event.START, _this.onPopupContainerStart, _this);
	        _this._popupContainer.addEventListener(Event.COMPLETE, _this.onPopupContainerComplete, _this);
	        return _this;
	    }
	    Object.defineProperty(GameStage.prototype, "sceneContainer", {
	        get: function () {
	            return this._sceneContainer;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GameStage.prototype, "popupContainer", {
	        get: function () {
	            return this._popupContainer;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GameStage.prototype, "toast", {
	        get: function () {
	            return this._toast;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GameStage.prototype, "dataCenter", {
	        get: function () {
	            return this._dataCenter;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    GameStage.prototype.launch = function (config, onPreloadAssetsProgress, onPreloadAssetsComplete, onStart) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            function p() {
	                loaded++;
	                onPreloadAssetsProgress && onPreloadAssetsProgress(loaded, total);
	                if (loaded >= total) {
	                    onPreloadAssetsComplete && onPreloadAssetsComplete();
	                }
	            }
	            var assets, customs, loaded, assetsToLoad, total;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        this._config = config;
	                        assets = config.assets, customs = config.customs;
	                        loaded = 0;
	                        assetsToLoad = assets;
	                        if (!Array.isArray(assets)) {
	                            assetsToLoad = assets['common'];
	                        }
	                        total = assetsToLoad.length;
	                        return [4, loadAssets(assetsToLoad, p).catch(function (e) {
	                                console.log(e);
	                            })];
	                    case 1:
	                        _a.sent();
	                        this.start();
	                        dealPxEnv();
	                        dealPageRemainTime();
	                        onStart && onStart();
	                        setTimeout(this.lazyLoadAllAssets, this._config.options.lazyLoadWait || 1000);
	                        return [2];
	                }
	            });
	        });
	    };
	    GameStage.prototype.start = function () {
	        var _this = this;
	        var _a = this._config, _b = _a.options, entrySceneView = _b.entrySceneView, env = _b.env, dataMapping = _a.dataMapping, processes = _a.processes, builtinProcesses = _a.builtinProcesses, scripts = _a.scripts, customs = _a.customs;
	        Stage.addUpdateObj(Tween);
	        injectEnv(env);
	        registerCustomModules(customs);
	        if (dataMapping) {
	            this.dataCenter.registerDataMapping(dataMapping);
	        }
	        setProcessMetaLibs(processes, builtinProcesses);
	        setTimeout(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var sceneEntry;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.instantiateView(entrySceneView)];
	                    case 1:
	                        sceneEntry = _a.sent();
	                        if (sceneEntry) {
	                            this._sceneContainer.push(sceneEntry);
	                        }
	                        return [2];
	                }
	            });
	        }); });
	    };
	    GameStage.prototype.showInnerLoadingView = function () {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var loadingViewName, loadingView;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        loadingViewName = this._config.options.loadingView;
	                        loadingView = this._loadingView.getChildAt(0);
	                        if (!(this._loadingView.children.length == 0 && loadingViewName)) return [3, 2];
	                        return [4, this.instantiateView(loadingViewName, true, false)];
	                    case 1:
	                        loadingView = _a.sent();
	                        this._loadingView.addChild(loadingView);
	                        _a.label = 2;
	                    case 2:
	                        this._loadingView.visible = true;
	                        return [2];
	                }
	            });
	        });
	    };
	    GameStage.prototype.hideInnerLoadingView = function () {
	        if (this._loadingView.visible) {
	            this._loadingView.visible = false;
	        }
	    };
	    GameStage.prototype.instantiateView = function (name, cache, showLoadingView) {
	        if (cache === void 0) { cache = true; }
	        if (showLoadingView === void 0) { showLoadingView = true; }
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var view, viewConfig, _a, assets, customs, groups, depCustoms, _i, customs_2, custom, depAssets, store, _b, exp, computed;
	            var _this = this;
	            return tslib_1.__generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0:
	                        if (cache) {
	                            view = this._viewCache[name];
	                        }
	                        if (!!view) return [3, 4];
	                        viewConfig = this.getViewConfigByName(name);
	                        if (!viewConfig) return [3, 3];
	                        _a = this._config, assets = _a.assets, customs = _a.customs;
	                        if (!!Array.isArray(assets)) return [3, 2];
	                        groups = {};
	                        depCustoms = viewConfig.depCustoms;
	                        if (depCustoms && depCustoms.length > 0) {
	                            for (_i = 0, customs_2 = customs; _i < customs_2.length; _i++) {
	                                custom = customs_2[_i];
	                                if (depCustoms.indexOf(custom.id) >= 0 && custom.assets) {
	                                    if (!checkAssetGroupLoaded(custom.id)) {
	                                        groups[custom.id] = custom.assets;
	                                    }
	                                }
	                            }
	                        }
	                        if (!checkAssetGroupLoaded(viewConfig.uuid)) {
	                            depAssets = assets[viewConfig.uuid];
	                            if (depAssets && depAssets.length > 0) {
	                                groups[viewConfig.uuid] = depAssets;
	                            }
	                        }
	                        return [4, loadAssetsGroups(groups, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                                return tslib_1.__generator(this, function (_a) {
	                                    switch (_a.label) {
	                                        case 0:
	                                            if (!showLoadingView) return [3, 2];
	                                            return [4, this.showInnerLoadingView()];
	                                        case 1:
	                                            _a.sent();
	                                            _a.label = 2;
	                                        case 2: return [2];
	                                    }
	                                });
	                            }); }, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                                return tslib_1.__generator(this, function (_a) {
	                                    if (showLoadingView) {
	                                        this.hideInnerLoadingView();
	                                    }
	                                    return [2];
	                                });
	                            }); })];
	                    case 1:
	                        _c.sent();
	                        _c.label = 2;
	                    case 2:
	                        view = instantiate(viewConfig);
	                        store = {};
	                        if (viewConfig.store) {
	                            _b = viewConfig.store, exp = _b.exp, computed = _b.computed;
	                            store = createStore(exp, computed);
	                        }
	                        view['$isViewRoot'] = true;
	                        view['$_store'] = store;
	                        console.time('bind');
	                        bind(store, view);
	                        console.timeEnd('bind');
	                        if (cache) {
	                            this._viewCache[name] = view;
	                        }
	                        return [3, 4];
	                    case 3:
	                        console.error('view config not exists:', name);
	                        _c.label = 4;
	                    case 4: return [2, view];
	                }
	            });
	        });
	    };
	    GameStage.prototype.getViewConfigByName = function (name) {
	        return arrayFind(this._config.views, function (view) { return view.name === name; });
	    };
	    GameStage.prototype.onPopupContainerStart = function (e) {
	        var _a = e.data, action = _a.action, view = _a.view, lastView = _a.lastView, options = _a.options, hasView = _a.hasView;
	        var target = e.target;
	        switch (action) {
	            case 'push':
	            case 'replace':
	            case 'popAll':
	                if (options && options.center) {
	                    view.x = (target.width - view.width) / 2;
	                    view.y = (target.height - view.height) / 2;
	                }
	                break;
	        }
	        var blackLayer = this._blackLayer;
	        var pParent = blackLayer.parent;
	        if (hasView) {
	            target.addChildAt(blackLayer, target.childNum - 1 - (view ? 0 : 1));
	            if (!pParent || blackLayer['tween_count'] > 0) {
	                blackLayer.alpha = 0;
	                Tween.get(blackLayer, null, null, true)
	                    .to({ alpha: 0.7 }, 300);
	            }
	        }
	        else if (pParent) {
	            Tween.get(blackLayer, null, null, true)
	                .to({ alpha: 0 }, 300)
	                .call(function () {
	                pParent.removeChild(blackLayer);
	            });
	        }
	    };
	    GameStage.prototype.onPopupContainerComplete = function (e) {
	    };
	    return GameStage;
	}(Node$1));

	var template = "\n<div class=\"zeroing-loading-wrapper\">\n\t<div class=\"zeroing-loading-content\">\n\t</div>\n</div>\n";
	var style = "\n.zeroing-loading-wrapper{\n\tposition: absolute;\n\ttop:0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tdisplay: -webkit-flex;\n\tjustify-content: center;\n\t-webkit-justify-content: center;\n\talign-items: center;\n\t-webkit-align-items: center;\n}\n@keyframes part-body\n{\n\t0%,40% {transform: scale(1);}\n\t20% {transform: scale(1.5);}\n}\n.zeroing-loading-part {\n\ttransform-origin: 2px 12px;\n\tposition: absolute;\n}\n.zeroing-loading-part-body{\n\tbackground-color: dimgray;\n\twidth: 4px;\n\theight: 6px;\n\tborder-radius: 2px;\n\ttransform-origin: 2px 6px;\n\tanimation: part-body 1500ms linear infinite;\n}\n";
	var inited = false;
	var wrapper;
	function init$1() {
	    if (inited) {
	        return;
	    }
	    inited = true;
	    var container = document.createElement('div');
	    container.innerHTML = template;
	    wrapper = container.removeChild(container.children[0]);
	    var styleEl = document.createElement('style');
	    styleEl.innerText = style;
	    document.body.appendChild(styleEl);
	    var content = wrapper.children[0];
	    var count = 8;
	    var perDelay = 1500 / count;
	    var perDeg = 360 / count;
	    for (var i = 0; i < count; i++) {
	        var part = document.createElement('div');
	        part.innerHTML = "<div class=\"zeroing-loading-part\" style=\"\ntransform: rotate(" + i * perDeg + "deg); \">\n<div class=\"zeroing-loading-part-body\" style=\"\nanimation-delay:" + -(count - i) * perDelay + "ms;\n\"></div>\n</div>";
	        content.appendChild(part.children[0]);
	    }
	}
	var builtinLoadingView = {
	    onProgress: function (done, total) {
	        init$1();
	        if (!wrapper.parentElement) {
	            document.body.appendChild(wrapper);
	        }
	    },
	    onComplete: function () {
	        if (wrapper && wrapper.parentElement) {
	            document.body.removeChild(wrapper);
	        }
	    },
	};

	var _stage;
	function initAutoLayout(stage) {
	    _stage = stage;
	    _stage.addEventListener(Event.LAYOUT_INVALID, onLayoutInvalid);
	}
	function onLayoutInvalid() {
	    console.time('adjustLayout');
	    var layoutTree = duplicateLayoutTree(_stage);
	    console.log(layoutTree);
	    console.timeEnd('adjustLayout');
	}
	function duplicateLayoutTree(node) {
	    var tree = {};
	    getLayoutTreeOnce(node, tree, true);
	    return tree;
	}
	function getLayoutTreeOnce(node, tree, includeSelf) {
	    if (includeSelf === void 0) { includeSelf = false; }
	    if (includeSelf) {
	        tree.name = node.name;
	        tree.frame = node.frame;
	        tree.constraint = node.adjustProxy.data;
	        tree.children = [];
	        if (node.isUI) {
	            tree.isUI = true;
	        }
	    }
	    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
	        var child = _a[_i];
	        var layoutNode = {
	            name: child.name,
	            frame: child.frame,
	            constraint: child.adjustProxy.data,
	            children: [],
	        };
	        if (child.isUI) {
	            layoutNode.isUI = true;
	        }
	        tree.children.push(layoutNode);
	        if (child.children && child.children.length > 0) {
	            getLayoutTreeOnce(child, layoutNode);
	        }
	    }
	}

	function launch(url, loadingDelegate, onStart) {
	    if (queryParams.__proxy_mode__) {
	        return Promise.resolve('cancel launch');
	    }
	    return globalLoader.loadJson(url)
	        .then(function (config) {
	        return launchWithConfig(config, loadingDelegate, onStart);
	    });
	}
	function launchWithLocalStorage(id, loadingDelegate, onStart) {
	    var storeKey = 'preview-project-' + id;
	    var storeData = localStorage.getItem(storeKey);
	    var _a = JSON.parse(storeData), data = _a.data, processes = _a.processes, scripts = _a.scripts, customs = _a.customs;
	    setProcessMetaLibs(processes);
	    registerScripts(scripts);
	    registerCustomModuleFromConfig(customs);
	    return launchWithConfig(data, loadingDelegate, onStart);
	}
	function launchWithWindowVariable(name, loadingDelegate, onStart) {
	    var _a = window[name], data = _a.data, processes = _a.processes, scripts = _a.scripts, customs = _a.customs;
	    setProcessMetaLibs(processes);
	    registerScripts(scripts);
	    registerCustomModuleFromConfig(customs);
	    return launchWithConfig(data, loadingDelegate, onStart);
	}
	function launchWithConfig(config, loadingDelegate, onStart) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        return tslib_1.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0: return [4, new Promise(function (resolve) {
	                        setTimeout(resolve, 300);
	                    })];
	                case 1:
	                    _a.sent();
	                    return [4, new Promise(function (resolve) {
	                            var _a = config.options, containerId = _a.containerId, designWidth = _a.designWidth, designHeight = _a.designHeight, frameRate = _a.frameRate, scaleMode = _a.scaleMode, rendererType = _a.rendererType;
	                            var stage = window['stage'] = new Stage(containerId || "game-container", designWidth || 750, designHeight || 1334, frameRate || 60, scaleMode || StageScaleMode.FIXED_WIDTH, rendererType || exports.RENDERER_TYPE.WEBGL);
	                            initAutoLayout(stage);
	                            Stage.flushAll();
	                            stage.addEventListener(Event.ON_INIT_STAGE, function () {
	                                exports.gameStage = new GameStage(stage);
	                                setGlobalContext({
	                                    gameStage: exports.gameStage
	                                });
	                                stage.addChild(exports.gameStage);
	                                var delegate = loadingDelegate || builtinLoadingView;
	                                exports.gameStage.launch(config, function (done, total) {
	                                    delegate.onProgress && delegate.onProgress(done, total);
	                                }, function () {
	                                    delegate.onComplete && delegate.onComplete();
	                                }, onStart);
	                            });
	                            resolve(exports.gameStage);
	                        })];
	                case 2: return [2, _a.sent()];
	            }
	        });
	    });
	}

	var emojiRegex = function () {
	  // https://mths.be/emoji
	  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
	};

	/**
	 * Created by rockyl on 2020-01-27.
	 */
	var genericRegexp = /(\w+)(<(\w+)>)?/;
	function compute(props, options) {
	    var result = props || {};
	    var _loop_1 = function (key) {
	        var sourceValue = getValue(result, options, key);
	        var value = sourceValue;
	        if (options) {
	            var option = options[key];
	            if (option && option.type) {
	                var _a = parseType(option.type), type = _a.type, generic_1 = _a.generic;
	                switch (type) {
	                    case 'vector2':
	                        value = parseVector2(sourceValue);
	                        break;
	                    case 'array':
	                        var seps = sourceValue.split(',');
	                        seps = seps.map(function (sep) {
	                            var item;
	                            if (generic_1) {
	                                switch (generic_1) {
	                                    case 'number':
	                                        item = parseFloat(sep);
	                                        break;
	                                    case 'boolean':
	                                        item = sep === 'true';
	                                        break;
	                                    default:
	                                        item = sep;
	                                        break;
	                                }
	                            }
	                            else {
	                                item = sep;
	                            }
	                            return item;
	                        });
	                        value = seps;
	                        break;
	                }
	            }
	        }
	        result[key] = value;
	    };
	    for (var key in options) {
	        _loop_1(key);
	    }
	    return result;
	}
	function parseType(typeStr) {
	    var type = typeStr, generic;
	    var regResult = typeStr.match(genericRegexp);
	    if (regResult) {
	        type = regResult[1];
	        generic = regResult[3];
	    }
	    return {
	        type: type, generic: generic,
	    };
	}
	function parseVector2(sourceValue) {
	    var value = sourceValue;
	    if (!sourceValue) {
	        value = { x: undefined, y: undefined };
	    }
	    if (typeof sourceValue === 'string') {
	        var arr = sourceValue.split(',');
	        value = {
	            x: arr[0] === '' ? undefined : parseFloat(arr[0]),
	            y: arr[1] === '' ? undefined : parseFloat(arr[1]),
	        };
	    }
	    else if (Array.isArray(sourceValue)) {
	        value = {
	            x: sourceValue[0] === '' ? undefined : parseFloat(sourceValue[0]),
	            y: sourceValue[1] === '' ? undefined : parseFloat(sourceValue[1]),
	        };
	    }
	    return value;
	}
	function getValue(props, options, key) {
	    var value;
	    if (props.hasOwnProperty(key)) {
	        value = props[key];
	    }
	    else if (options && options[key].hasOwnProperty('default')) {
	        value = options[key].default;
	    }
	    return value;
	}

	var emojiRegexp = emojiRegex();

	exports.BaseTexture = BaseTexture;
	exports.BaseTextureCache = BaseTextureCache;
	exports.BitmapText = BitmapText;
	exports.Circle = Circle$1;
	exports.Color = color;
	exports.Container = Container;
	exports.DATA_CENTER_EVENT = DATA_CENTER_EVENT;
	exports.DATA_URI = DATA_URI;
	exports.DEG_TO_RAD = DEG_TO_RAD;
	exports.DataCenter = DataCenter;
	exports.DisplayObject = DisplayObject;
	exports.DrawAllToCanvas = DrawAllToCanvas;
	exports.ESCAPE_REG_EXP = ESCAPE_REG_EXP;
	exports.Ease = Ease;
	exports.EditableText = EditableText;
	exports.Event = Event;
	exports.EventDispatcher = EventDispatcher;
	exports.FloatDisplay = FloatDisplay;
	exports.GDispatcher = GDispatcher;
	exports.GameStage = GameStage;
	exports.GlobalPro = GlobalPro;
	exports.Graphics = Graphics;
	exports.HashObject = HashObject;
	exports.Howl = howler_2;
	exports.Howler = howler_1;
	exports.HtmlView = HtmlView;
	exports.INT_BITS1 = INT_BITS1;
	exports.INT_MAX = INT_MAX;
	exports.INT_MIN = INT_MIN;
	exports.Image = Image$1;
	exports.InputText = InputText;
	exports.Label = Label;
	exports.Loader = Loader;
	exports.Matrix = Matrix;
	exports.MouseEvent = MouseEvent;
	exports.Node = Node$1;
	exports.ObjectPool = ObjectPool;
	exports.PI_2 = PI_2;
	exports.Point = Point;
	exports.RAD_TO_DEG = RAD_TO_DEG;
	exports.Rect = Rect;
	exports.Rectangle = Rectangle;
	exports.ScriptBase = ScriptBase;
	exports.ScrollList = ScrollList;
	exports.ScrollListBase = ScrollListBase;
	exports.ScrollListItem = ScrollListItem;
	exports.ScrollView = ScrollView;
	exports.ScrollViewBase = ScrollViewBase;
	exports.Shape = Shape;
	exports.Sprite = Sprite;
	exports.Stage = Stage;
	exports.StageScaleMode = StageScaleMode;
	exports.TextField = TextField;
	exports.TextInput = TextInput;
	exports.Texture = Texture;
	exports.TextureCache = TextureCache;
	exports.TextureSheet = TextureSheet;
	exports.TextureSheetCache = TextureSheetCache;
	exports.Tween = Tween;
	exports.URL_FILE_EXTENSION = URL_FILE_EXTENSION;
	exports.VERSION = VERSION;
	exports.abs = abs;
	exports.accessLog = accessLog;
	exports.addCustomModule = addCustomModule;
	exports.appendScript = appendScript;
	exports.applyEvents = applyEvents;
	exports.applyScript = applyScript;
	exports.arrayFind = arrayFind;
	exports.backupCanvas = backupCanvas;
	exports.checkAssetGroupLoaded = checkAssetGroupLoaded;
	exports.cleanNewUser = cleanNewUser;
	exports.clearTextureCache = clearTextureCache;
	exports.cmdOldPrefix = cmdOldPrefix;
	exports.cmdPrefix = cmdPrefix;
	exports.computeProps = compute;
	exports.copyProp = copyProp;
	exports.cos = cos;
	exports.countTrailingZeros = countTrailingZeros;
	exports.createTextureSheet = createTextureSheet;
	exports.dataCenter = dataCenter;
	exports.decomposeDataUri = decomposeDataUri;
	exports.deepDirtyFieldDetector = deepDirtyFieldDetector;
	exports.deepDirtyFieldTrigger = deepDirtyFieldTrigger;
	exports.deinterleave2 = deinterleave2;
	exports.deinterleave3 = deinterleave3;
	exports.destroySound = destroySound;
	exports.destroyTextureCache = destroyTextureCache;
	exports.determineCrossOrigin = determineCrossOrigin;
	exports.devicePixelRatio = devicePixelRatio;
	exports.dirtyFieldDetector = dirtyFieldDetector;
	exports.dirtyFieldTrigger = dirtyFieldTrigger;
	exports.emojiRegexp = emojiRegexp;
	exports.env = env;
	exports.executeBehavior = executeBehavior;
	exports.fieldChanged = fieldChanged;
	exports.findVariable = findVariable;
	exports.getAssetByName = getAssetByName;
	exports.getAssetByUUID = getAssetByUUID;
	exports.getCanvasBitmapStyle = getCanvasBitmapStyle;
	exports.getDataByPath = getDataByPath;
	exports.getGradientColor = getGradientColor;
	exports.getLogSwitch = getLogSwitch;
	exports.getProps = getProps;
	exports.getRGBA = getRGBA;
	exports.getTexture = getTexture;
	exports.getUrlFileExtension = getUrlFileExtension;
	exports.globalEvent = globalEvent;
	exports.globalLoader = globalLoader;
	exports.hex2rgb = hex2rgb;
	exports.hex2string = hex2string;
	exports.htmlToPureText = htmlToPureText;
	exports.httpRequest = httpRequest;
	exports.importCJSCode = importCJSCode;
	exports.importUMDCode = importUMDCode;
	exports.injectEnv = injectEnv;
	exports.injectProp = injectProp;
	exports.injectProperties = injectProperties;
	exports.inputFeildIosEnable = inputFeildIosEnable;
	exports.instantiate = instantiate;
	exports.instantiateScript = instantiateScript;
	exports.interleave2 = interleave2;
	exports.interleave3 = interleave3;
	exports.isPow2 = isPow2;
	exports.isUI = isUI;
	exports.isWebGLSupported = isWebGLSupported;
	exports.joinPath = joinPath;
	exports.jsonp = jsonp;
	exports.launch = launch;
	exports.launchWithConfig = launchWithConfig;
	exports.launchWithLocalStorage = launchWithLocalStorage;
	exports.launchWithWindowVariable = launchWithWindowVariable;
	exports.linkScheme = linkScheme;
	exports.linkedFlag = linkedFlag;
	exports.loadAssets = loadAssets;
	exports.loadAssetsGroup = loadAssetsGroup;
	exports.loadAssetsGroups = loadAssetsGroups;
	exports.log10 = log10;
	exports.log2 = log2;
	exports.mapWebGLBlendModesToPixi = mapWebGLBlendModesToPixi;
	exports.max = max;
	exports.md5 = md5;
	exports.min = min;
	exports.mute = mute;
	exports.nextCombination = nextCombination;
	exports.nextPow2 = nextPow2;
	exports.nodeScheme = nodeScheme;
	exports.obj2query = obj2query;
	exports.objClone = objClone;
	exports.osType = osType;
	exports.parity = parity;
	exports.playSound = playSound;
	exports.popCount = popCount;
	exports.preloadSound = preloadSound;
	exports.premultiplyTint = premultiplyTint;
	exports.prevPow2 = prevPow2;
	exports.propertyParse = propertyParse;
	exports.proxyMethods = proxyMethods;
	exports.queryParams = queryParams;
	exports.registerCustomCodeModule = registerCustomCodeModule;
	exports.registerCustomModule = registerCustomModule;
	exports.registerCustomModuleFromConfig = registerCustomModuleFromConfig;
	exports.registerCustomModules = registerCustomModules;
	exports.registerNodeType = registerNodeType;
	exports.registerScriptDef = registerScriptDef;
	exports.registerScripts = registerScripts;
	exports.removeItems = removeItems;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.resolveCustomAsset = resolveCustomAsset;
	exports.reverse = reverse;
	exports.rgb2hex = rgb2hex;
	exports.safeEval = safeEval;
	exports.setGlobalContext = setGlobalContext;
	exports.setProcessMetaLibs = setProcessMetaLibs;
	exports.setScriptMap = setScriptMap;
	exports.sign = sign;
	exports.sin = sin;
	exports.stopSound = stopSound;
	exports.strLen = strLen;
	exports.strShort = strShort;
	exports.string2hex = string2hex;
	exports.toDisplayDataURL = toDisplayDataURL;
	exports.transPoint = transPoint;
	exports.traverseViewNode = traverseViewNode;
	exports.trimChar = trimChar;
	exports.uid = uid;
	exports.urlJoin = urlJoin;

	Object.defineProperty(exports, '__esModule', { value: true });

}));