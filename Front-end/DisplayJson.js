
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(rootX, rootY)
{
	var stack = [{ x: rootX, y: rootY }];
	while (stack.length > 0)
	{
		var front = stack.pop();
		var x = front.x;
		var y = front.y;
		if (x === y)
		{
			continue;
		}
		if (typeof x === 'object')
		{
			var c = 0;
			for (var key in x)
			{
				++c;
				if (!(key in y))
				{
					return false;
				}
				if (key === 'ctor')
				{
					continue;
				}
				stack.push({ x: x[key], y: y[key] });
			}
			if ('ctor' in x)
			{
				stack.push({ x: x.ctor, y: y.ctor});
			}
			if (c !== Object.keys(y).length)
			{
				return false;
			}
		}
		else if (typeof x === 'function')
		{
			throw new Error('Equality error: general function equality is ' +
							'undecidable, and therefore, unsupported');
		}
		else
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	var ord;
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}
	else if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b
			? EQ
			: a < b
				? LT
				: GT;
	}
	else if (x.ctor === '::' || x.ctor === '[]')
	{
		while (true)
		{
			if (x.ctor === '[]' && y.ctor === '[]')
			{
				return EQ;
			}
			if (x.ctor !== y.ctor)
			{
				return x.ctor === '[]' ? LT : GT;
			}
			ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
	}
	else if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}
	else
	{
		throw new Error('Comparison error: comparison is only defined on ints, ' +
						'floats, times, chars, strings, lists of comparable values, ' +
						'and tuples of comparable values.');
	}
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};
	for (var key in oldRecord)
	{
		var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
		newRecord[key] = value;
	}
	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		var name = v.func ? v.func.name : v.name;
		return '<function' + (name === '' ? '' : ':') + name + '>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin' || v.ctor === 'Set_elm_builtin')
		{
			var name, list;
			if (v.ctor === 'Set_elm_builtin')
			{
				name = 'Set';
				list = A2(
					_elm_lang$core$List$map,
					function(x) {return x._0; },
					_elm_lang$core$Dict$toList(v._0)
				);
			}
			else
			{
				name = 'Dict';
				list = _elm_lang$core$Dict$toList(v);
			}
			return name + '.fromList ' + toString(list);
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A2(f, _p1._0, _p1._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$snd = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _elm_lang$core$Basics$fst = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _elm_lang$core$Basics$always = F2(
	function (a, _p6) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$Never = function (a) {
	return {ctor: 'Never', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p1 = maybes;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p1._0;
			var _p2 = _p3;
			if (_p2.ctor === 'Nothing') {
				var _v3 = _p1._1;
				maybes = _v3;
				continue oneOf;
			} else {
				return _p3;
			}
		}
	}
};
var _elm_lang$core$Maybe$andThen = F2(
	function (maybeValue, callback) {
		var _p4 = maybeValue;
		if (_p4.ctor === 'Just') {
			return callback(_p4._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p5._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p6._0._0, _p6._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}


function range(lo, hi)
{
	var list = Nil;
	if (lo <= hi)
	{
		do
		{
			list = Cons(hi, list);
		}
		while (hi-- > lo);
	}
	return list;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,
	range: range,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return _elm_lang$core$Basics$not(
			A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return _elm_lang$core$Basics$not(
						isOkay(_p2));
				},
				list));
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						_elm_lang$core$List_ops['::'],
						f(x),
						acc);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (x, xs$) {
				return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, x, _p11._0),
						accAcc);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				_elm_lang$core$Native_List.fromArray(
					[b]),
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		_elm_lang$core$Native_List.fromArray(
			[]),
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
				_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var step = F2(
				function (x, rest) {
					return A2(
						_elm_lang$core$List_ops['::'],
						sep,
						A2(_elm_lang$core$List_ops['::'], x, rest));
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p21._1);
			return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p22 = list;
			if (_p22.ctor === '[]') {
				return list;
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_elm_lang$core$List$take, n - 1, _p22._1));
			}
		}
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v23 = A2(_elm_lang$core$List_ops['::'], value, result),
					_v24 = n - 1,
					_v25 = value;
				result = _v23;
				n = _v24;
				value = _v25;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			_elm_lang$core$Native_List.fromArray(
				[]),
			n,
			value);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (result, callback) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$formatError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function addPublicModule(object, name, main)
{
	var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

	object['worker'] = function worker(flags)
	{
		return init(undefined, flags, false);
	}

	object['embed'] = function embed(domNode, flags)
	{
		return init(domNode, flags, true);
	}

	object['fullscreen'] = function fullscreen(flags)
	{
		return init(document.body, flags, true);
	};
}


// PROGRAM FAIL

function mainIsUndefined(name)
{
	return function(domNode)
	{
		var message = 'Cannot initialize module `' + name +
			'` because it has no `main` value!\nWhat should I show on screen?';
		domNode.innerHTML = errorHtml(message);
		throw new Error(message);
	};
}

function errorHtml(message)
{
	return '<div style="padding-left:1em;">'
		+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
		+ '<pre style="padding-left:1em;">' + message + '</pre>'
		+ '</div>';
}


// PROGRAM SUCCESS

function makeEmbed(moduleName, main)
{
	return function embed(rootDomNode, flags, withRenderer)
	{
		try
		{
			var program = mainToProgram(moduleName, main);
			if (!withRenderer)
			{
				program.renderer = dummyRenderer;
			}
			return makeEmbedHelp(moduleName, program, rootDomNode, flags);
		}
		catch (e)
		{
			rootDomNode.innerHTML = errorHtml(e.message);
			throw e;
		}
	};
}

function dummyRenderer()
{
	return { update: function() {} };
}


// MAIN TO PROGRAM

function mainToProgram(moduleName, wrappedMain)
{
	var main = wrappedMain.main;

	if (typeof main.init === 'undefined')
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: function() { return noChange; },
			view: function() { return main; },
			update: F2(function() { return noChange; }),
			subscriptions: function () { return emptyBag; }
		});
	}

	var flags = wrappedMain.flags;
	var init = flags
		? initWithFlags(moduleName, main.init, flags)
		: initWithoutFlags(moduleName, main.init);

	return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
		init: init,
		view: main.view,
		update: main.update,
		subscriptions: main.subscriptions,
	});
}

function initWithoutFlags(moduleName, realInit)
{
	return function init(flags)
	{
		if (typeof flags !== 'undefined')
		{
			throw new Error(
				'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
				+ 'This module does not take arguments though! You probably need to change the\n'
				+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
			);
		}
		return realInit();
	};
}

function initWithFlags(moduleName, realInit, flagDecoder)
{
	return function init(flags)
	{
		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Err')
		{
			throw new Error(
				'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
				+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
				+ result._0
			);
		}
		return realInit(result._0);
	};
}


// SETUP RUNTIME SYSTEM

function makeEmbedHelp(moduleName, program, rootDomNode, flags)
{
	var init = program.init;
	var update = program.update;
	var subscriptions = program.subscriptions;
	var view = program.view;
	var makeRenderer = program.renderer;

	// ambient state
	var managers = {};
	var renderer;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var results = init(flags);
		var model = results._0;
		renderer = makeRenderer(rootDomNode, enqueue, view(model));
		var cmds = results._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			renderer.update(view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, handleMsg, loop);
	}

	var task = A2(andThen, init, loop);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			var value = converter(cmdList._0);
			for (var i = 0; i < subs.length; i++)
			{
				subs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function send(value)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, value);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		var value = result._0;
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	mainToProgram: mainToProgram,
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,
	addPublicModule: addPublicModule,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(task, callback)
{
	return {
		ctor: '_Task_andThen',
		task: task,
		callback: callback
	};
}

function onError(task, callback)
{
	return {
		ctor: '_Task_onError',
		task: task,
		callback: callback
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		numSteps = step(numSteps, process);
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_elm_lang$core$Native_List.range(
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;
	var i = 0;
	var is = [];
	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}
	return _elm_lang$core$Native_List.fromArray(is);
}

function toInt(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		start = 1;
	}
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
	}
	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function toFloat(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		start = 1;
	}
	var dotCount = 0;
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if ('0' <= c && c <= '9')
		{
			continue;
		}
		if (c === '.')
		{
			dotCount += 1;
			if (dotCount <= 1)
			{
				continue;
			}
		}
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	return _elm_lang$core$Result$Ok(parseFloat(s));
}

function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(_elm_lang$core$List_ops['::'], key, keyList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(_elm_lang$core$List_ops['::'], value, valueList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: key, _1: value},
					list);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				var _p3 = _p2;
				var _p9 = _p3._1;
				var _p8 = _p3._0;
				var _p4 = _p8;
				if (_p4.ctor === '[]') {
					return {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					};
				} else {
					var _p7 = _p4._1;
					var _p6 = _p4._0._1;
					var _p5 = _p4._0._0;
					return (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) ? {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A3(leftStep, _p5, _p6, _p9)
					} : ((_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) ? {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					} : {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A4(bothStep, _p5, _p6, rValue, _p9)
					});
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				_elm_lang$core$Native_List.fromArray(
					[
						'Internal red-black tree invariant violated, expected ',
						msg,
						' and got ',
						_elm_lang$core$Basics$toString(c),
						'/',
						lgot,
						'/',
						rgot,
						'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
					])));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v11_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v11_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v11_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v13 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v14 = _p14._3;
				n = _v13;
				dict = _v14;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v17 = targetKey,
							_v18 = _p15._3;
						targetKey = _v17;
						dict = _v18;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v19 = targetKey,
							_v20 = _p15._4;
						targetKey = _v19;
						dict = _v20;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v23 = _p18._1,
					_v24 = _p18._2,
					_v25 = _p18._4;
				k = _v23;
				v = _v24;
				r = _v25;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v33_6:
	do {
		_v33_5:
		do {
			_v33_4:
			do {
				_v33_3:
				do {
					_v33_2:
					do {
						_v33_1:
						do {
							_v33_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v33_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v33_3;
																		} else {
																			break _v33_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v33_4;
																	} else {
																		break _v33_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	break _v33_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v33_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															} else {
																break _v33_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v33_5;
															} else {
																break _v33_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	break _v33_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v33_4;
															} else {
																break _v33_6;
															}
														default:
															break _v33_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v33_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v33_1;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v33_5;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v33_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v33_3;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v33_4;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										} else {
											break _v33_6;
										}
									}
								} else {
									break _v33_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (c, l, r) {
		var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = c;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function decodeObject(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function decodeTuple(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'tuple',
		func: f,
		decoders: decoders
	};
}

function andThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function customAndThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'customAndThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function decodeObject1(f, d1)
{
	return decodeObject(f, [d1]);
}

function decodeObject2(f, d1, d2)
{
	return decodeObject(f, [d1, d2]);
}

function decodeObject3(f, d1, d2, d3)
{
	return decodeObject(f, [d1, d2, d3]);
}

function decodeObject4(f, d1, d2, d3, d4)
{
	return decodeObject(f, [d1, d2, d3, d4]);
}

function decodeObject5(f, d1, d2, d3, d4, d5)
{
	return decodeObject(f, [d1, d2, d3, d4, d5]);
}

function decodeObject6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODING TUPLES

function decodeTuple1(f, d1)
{
	return decodeTuple(f, [d1]);
}

function decodeTuple2(f, d1, d2)
{
	return decodeTuple(f, [d1, d2]);
}

function decodeTuple3(f, d1, d2, d3)
{
	return decodeTuple(f, [d1, d2, d3]);
}

function decodeTuple4(f, d1, d2, d3, d4)
{
	return decodeTuple(f, [d1, d2, d3, d4]);
}

function decodeTuple5(f, d1, d2, d3, d4, d5)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5]);
}

function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok')
				? result
				: badField(field, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'tuple':
			var decoders = decoder.decoders;
			var len = decoders.length;

			if ( !(value instanceof Array) || value.length !== len )
			{
				return badPrimitive('a Tuple with ' + len + ' entries', value);
			}

			var answer = decoder.func;
			for (var i = 0; i < len; i++)
			{
				var result = runHelp(decoders[i], value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'customAndThen':
			var result = runHelp(decoder.decoder, value);
			if (result.tag !== 'ok')
			{
				return result;
			}
			var realResult = decoder.callback(result.value);
			if (realResult.ctor === 'Err')
			{
				return badPrimitive('something custom', value);
			}
			return ok(realResult._0);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'map-many':
		case 'tuple':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
		case 'customAndThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),

	decodeObject1: F2(decodeObject1),
	decodeObject2: F3(decodeObject2),
	decodeObject3: F4(decodeObject3),
	decodeObject4: F5(decodeObject4),
	decodeObject5: F6(decodeObject5),
	decodeObject6: F7(decodeObject6),
	decodeObject7: F8(decodeObject7),
	decodeObject8: F9(decodeObject8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	decodeTuple1: F2(decodeTuple1),
	decodeTuple2: F3(decodeTuple2),
	decodeTuple3: F4(decodeTuple3),
	decodeTuple4: F5(decodeTuple4),
	decodeTuple5: F6(decodeTuple5),
	decodeTuple6: F7(decodeTuple6),
	decodeTuple7: F8(decodeTuple7),
	decodeTuple8: F9(decodeTuple8),

	andThen: F2(andThen),
	customAndThen: F2(customAndThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
				}),
			decoder,
			fields);
	});
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode = _elm_lang$core$Json_Decode$succeed;
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolveResult = function (resultDecoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		resultDecoder,
		function (result) {
			return A2(
				_elm_lang$core$Json_Decode$customDecoder,
				_elm_lang$core$Json_Decode$succeed(
					{ctor: '_Tuple0'}),
				function (_p0) {
					return result;
				});
		});
};
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom = F2(
	function (delegated, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			decoder,
			function (wrappedFn) {
				return A2(_elm_lang$core$Json_Decode$map, wrappedFn, delegated);
			});
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$hardcoded = F2(
	function (val, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			decoder,
			function (wrappedFn) {
				return A2(
					_elm_lang$core$Json_Decode$map,
					wrappedFn,
					_elm_lang$core$Json_Decode$succeed(val));
			});
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var handleResult = function (input) {
			var _p1 = A2(_elm_lang$core$Json_Decode$decodeValue, pathDecoder, input);
			if (_p1.ctor === 'Ok') {
				return A2(_elm_lang$core$Json_Decode$decodeValue, valDecoder, _p1._0);
			} else {
				return _elm_lang$core$Result$Ok(fallback);
			}
		};
		return A2(_elm_lang$core$Json_Decode$customDecoder, _elm_lang$core$Json_Decode$value, handleResult);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalAt = F4(
	function (path, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$at, path, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode_ops[':='], key, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt = F3(
	function (path, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$at, path, valDecoder),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode_ops[':='], key, valDecoder),
			decoder);
	});

//import Result //

var _elm_lang$core$Native_Date = function() {

function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err('unable to parse \'' + str + '\' as a date')
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function(d) { return d.getFullYear(); },
	month: function(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function(d) { return d.getDate(); },
	hour: function(d) { return d.getHours(); },
	minute: function(d) { return d.getMinutes(); },
	second: function(d) { return d.getSeconds(); },
	millisecond: function(d) { return d.getMilliseconds(); },
	toTime: function(d) { return d.getTime(); },
	fromTime: function(t) { return new Date(t); },
	dayOfWeek: function(d) { return { ctor: dayTable[d.getDay()] }; }
};

}();
var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_p1._0,
				_elm_lang$core$Platform$sendToApp(router)));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (f, task) {
		return A2(
			_elm_lang$core$Task$onError,
			task,
			function (err) {
				return _elm_lang$core$Task$fail(
					f(err));
			});
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			});
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					});
			});
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							});
					});
			});
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									});
							});
					});
			});
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											taskE,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											});
									});
							});
					});
			});
	});
var _elm_lang$core$Task$andMap = F2(
	function (taskFunc, taskValue) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskFunc,
			function (func) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskValue,
					function (value) {
						return _elm_lang$core$Task$succeed(
							func(value));
					});
			});
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p2 = tasks;
	if (_p2.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_p2._0,
			_elm_lang$core$Task$sequence(_p2._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p3) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$toMaybe = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
		function (_p4) {
			return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
		});
};
var _elm_lang$core$Task$fromMaybe = F2(
	function ($default, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Task$succeed(_p5._0);
		} else {
			return _elm_lang$core$Task$fail($default);
		}
	});
var _elm_lang$core$Task$toResult = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
		function (msg) {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Result$Err(msg));
		});
};
var _elm_lang$core$Task$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Ok') {
		return _elm_lang$core$Task$succeed(_p6._0);
	} else {
		return _elm_lang$core$Task$fail(_p6._0);
	}
};
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p9, _p8, _p7) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$T = function (a) {
	return {ctor: 'T', _0: a};
};
var _elm_lang$core$Task$perform = F3(
	function (onFail, onSuccess, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$T(
				A2(
					_elm_lang$core$Task$onError,
					A2(_elm_lang$core$Task$map, onSuccess, task),
					function (x) {
						return _elm_lang$core$Task$succeed(
							onFail(x));
					})));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$T(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
				function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				});
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				_elm_lang$core$Native_List.fromArray(
					[_p6]),
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Time$now,
				function (time) {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Task$sequence(
							A2(
								_elm_lang$core$List$map,
								function (tagger) {
									return A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										tagger(time));
								},
								_p7._0)),
						function (_p8) {
							return _elm_lang$core$Task$succeed(state);
						});
				});
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Native_Scheduler.kill(id),
						function (_p14) {
							return _p13._2;
						})
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			killTask,
			function (_p20) {
				return A2(
					_elm_lang$core$Task$andThen,
					A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
					function (newProcesses) {
						return _elm_lang$core$Task$succeed(
							A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
					});
			});
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Date$millisecond = _elm_lang$core$Native_Date.millisecond;
var _elm_lang$core$Date$second = _elm_lang$core$Native_Date.second;
var _elm_lang$core$Date$minute = _elm_lang$core$Native_Date.minute;
var _elm_lang$core$Date$hour = _elm_lang$core$Native_Date.hour;
var _elm_lang$core$Date$dayOfWeek = _elm_lang$core$Native_Date.dayOfWeek;
var _elm_lang$core$Date$day = _elm_lang$core$Native_Date.day;
var _elm_lang$core$Date$month = _elm_lang$core$Native_Date.month;
var _elm_lang$core$Date$year = _elm_lang$core$Native_Date.year;
var _elm_lang$core$Date$fromTime = _elm_lang$core$Native_Date.fromTime;
var _elm_lang$core$Date$toTime = _elm_lang$core$Native_Date.toTime;
var _elm_lang$core$Date$fromString = _elm_lang$core$Native_Date.fromString;
var _elm_lang$core$Date$now = A2(_elm_lang$core$Task$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Time$now);
var _elm_lang$core$Date$Date = {ctor: 'Date'};
var _elm_lang$core$Date$Sun = {ctor: 'Sun'};
var _elm_lang$core$Date$Sat = {ctor: 'Sat'};
var _elm_lang$core$Date$Fri = {ctor: 'Fri'};
var _elm_lang$core$Date$Thu = {ctor: 'Thu'};
var _elm_lang$core$Date$Wed = {ctor: 'Wed'};
var _elm_lang$core$Date$Tue = {ctor: 'Tue'};
var _elm_lang$core$Date$Mon = {ctor: 'Mon'};
var _elm_lang$core$Date$Dec = {ctor: 'Dec'};
var _elm_lang$core$Date$Nov = {ctor: 'Nov'};
var _elm_lang$core$Date$Oct = {ctor: 'Oct'};
var _elm_lang$core$Date$Sep = {ctor: 'Sep'};
var _elm_lang$core$Date$Aug = {ctor: 'Aug'};
var _elm_lang$core$Date$Jul = {ctor: 'Jul'};
var _elm_lang$core$Date$Jun = {ctor: 'Jun'};
var _elm_lang$core$Date$May = {ctor: 'May'};
var _elm_lang$core$Date$Apr = {ctor: 'Apr'};
var _elm_lang$core$Date$Mar = {ctor: 'Mar'};
var _elm_lang$core$Date$Feb = {ctor: 'Feb'};
var _elm_lang$core$Date$Jan = {ctor: 'Jan'};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[i - 1],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

//import Native.Json //

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';



////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: null
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (!a.options === b.options)
	{
		if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}



////////////  RENDERER  ////////////


function renderer(parent, tagger, initialVirtualNode)
{
	var eventNode = { tagger: tagger, parent: null };

	var domNode = render(initialVirtualNode, eventNode);
	parent.appendChild(domNode);

	var state = 'NO_REQUEST';
	var currentVirtualNode = initialVirtualNode;
	var nextVirtualNode = initialVirtualNode;

	function registerVirtualNode(vNode)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextVirtualNode = vNode;
	}

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/core/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var patches = diff(currentVirtualNode, nextVirtualNode);
				domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
				currentVirtualNode = nextVirtualNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return { update: registerVirtualNode };
}


var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(cb) { setTimeout(cb, 1000 / 60); };



////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;
		
			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}
            
			var subEventRoot = {
				tagger: tagger,
				parent: eventNode
			};
			
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return document.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: null,
		eventNode: null
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-insert', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;
            
			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}
            
			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return redraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			domNode.elm_event_node_ref.tagger = patch.data;
			return domNode;

		case 'p-remove':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-insert':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function redraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}



////////////  PROGRAMS  ////////////


function programWithFlags(details)
{
	return {
		init: details.init,
		update: details.update,
		subscriptions: details.subscriptions,
		view: details.view,
		renderer: renderer
	};
}


return {
	node: node,
	text: text,

	custom: custom,

	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),

	programWithFlags: programWithFlags
};

}();
var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html_App$program = function (app) {
	return _elm_lang$html$Html_App$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			app,
			{
				init: function (_p0) {
					return app.init;
				}
			}));
};
var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$html$Html_App$programWithFlags(
		{
			init: function (_p3) {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p2.model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			},
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						_elm_lang$core$Native_List.fromArray(
							[]));
				}),
			view: _p2.view,
			subscriptions: function (_p4) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type$ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$autosave = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'maxLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'colSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rowSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'checked']),
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'value']),
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _mgold$elm_date_format$Date_Format$padWith = function (c) {
	return function (_p0) {
		return A3(
			_elm_lang$core$String$padLeft,
			2,
			c,
			_elm_lang$core$Basics$toString(_p0));
	};
};
var _mgold$elm_date_format$Date_Format$zero2twelve = function (n) {
	return _elm_lang$core$Native_Utils.eq(n, 0) ? 12 : n;
};
var _mgold$elm_date_format$Date_Format$mod12 = function (h) {
	return A2(_elm_lang$core$Basics_ops['%'], h, 12);
};
var _mgold$elm_date_format$Date_Format$fullDayOfWeek = function (dow) {
	var _p1 = dow;
	switch (_p1.ctor) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var _mgold$elm_date_format$Date_Format$monthToFullName = function (m) {
	var _p2 = m;
	switch (_p2.ctor) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var _mgold$elm_date_format$Date_Format$monthToInt = function (m) {
	var _p3 = m;
	switch (_p3.ctor) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var _mgold$elm_date_format$Date_Format$formatToken = F2(
	function (d, m) {
		var symbol = function () {
			var _p4 = m.submatches;
			if (((_p4.ctor === '::') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === '[]')) {
				return _p4._0._0;
			} else {
				return ' ';
			}
		}();
		var _p5 = symbol;
		switch (_p5) {
			case '%':
				return '%';
			case 'Y':
				return _elm_lang$core$Basics$toString(
					_elm_lang$core$Date$year(d));
			case 'm':
				return A3(
					_elm_lang$core$String$padLeft,
					2,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Basics$toString(
						_mgold$elm_date_format$Date_Format$monthToInt(
							_elm_lang$core$Date$month(d))));
			case 'B':
				return _mgold$elm_date_format$Date_Format$monthToFullName(
					_elm_lang$core$Date$month(d));
			case 'b':
				return _elm_lang$core$Basics$toString(
					_elm_lang$core$Date$month(d));
			case 'd':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Date$day(d));
			case 'e':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr(' '),
					_elm_lang$core$Date$day(d));
			case 'a':
				return _elm_lang$core$Basics$toString(
					_elm_lang$core$Date$dayOfWeek(d));
			case 'A':
				return _mgold$elm_date_format$Date_Format$fullDayOfWeek(
					_elm_lang$core$Date$dayOfWeek(d));
			case 'H':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Date$hour(d));
			case 'k':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr(' '),
					_elm_lang$core$Date$hour(d));
			case 'I':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_mgold$elm_date_format$Date_Format$zero2twelve(
						_mgold$elm_date_format$Date_Format$mod12(
							_elm_lang$core$Date$hour(d))));
			case 'l':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr(' '),
					_mgold$elm_date_format$Date_Format$zero2twelve(
						_mgold$elm_date_format$Date_Format$mod12(
							_elm_lang$core$Date$hour(d))));
			case 'p':
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Date$hour(d),
					13) < 0) ? 'AM' : 'PM';
			case 'P':
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Date$hour(d),
					13) < 0) ? 'am' : 'pm';
			case 'M':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Date$minute(d));
			case 'S':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Date$second(d));
			default:
				return '';
		}
	});
var _mgold$elm_date_format$Date_Format$re = _elm_lang$core$Regex$regex('%(%|Y|m|B|b|d|e|a|A|H|k|I|l|p|P|M|S)');
var _mgold$elm_date_format$Date_Format$format = F2(
	function (s, d) {
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_mgold$elm_date_format$Date_Format$re,
			_mgold$elm_date_format$Date_Format$formatToken(d),
			s);
	});
var _mgold$elm_date_format$Date_Format$formatISO8601 = _mgold$elm_date_format$Date_Format$format('%Y-%m-%dT%H:%M:%SZ');

var _rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier = function (identifier) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
		function (_p0) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('\\s+'),
			function (_p1) {
				return '-';
			},
			_elm_lang$core$String$trim(
				_elm_lang$core$Basics$toString(identifier))));
};
var _rtfeldman$elm_css_util$Css_Helpers$identifierToString = F2(
	function (name, identifier) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(name),
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(identifier));
	});

var _user$project$Css_Structure$dropEmptyDeclarations = function (declarations) {
	dropEmptyDeclarations:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			switch (_p0._0.ctor) {
				case 'StyleBlockDeclaration':
					var _p1 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0._2)) {
						var _v1 = _p1;
						declarations = _v1;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_user$project$Css_Structure$dropEmptyDeclarations(_p1));
					}
				case 'MediaRule':
					var _p4 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p2) {
							var _p3 = _p2;
							return _elm_lang$core$List$isEmpty(_p3._2);
						},
						_p0._0._1)) {
						var _v3 = _p4;
						declarations = _v3;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_user$project$Css_Structure$dropEmptyDeclarations(_p4));
					}
				case 'SupportsRule':
					var _p5 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v4 = _p5;
						declarations = _v4;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_user$project$Css_Structure$dropEmptyDeclarations(_p5));
					}
				case 'DocumentRule':
					return A2(
						_elm_lang$core$List_ops['::'],
						_p0._0,
						_user$project$Css_Structure$dropEmptyDeclarations(_p0._1));
				case 'PageRule':
					var _p6 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v5 = _p6;
						declarations = _v5;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_user$project$Css_Structure$dropEmptyDeclarations(_p6));
					}
				case 'FontFace':
					var _p7 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v6 = _p7;
						declarations = _v6;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_user$project$Css_Structure$dropEmptyDeclarations(_p7));
					}
				case 'Keyframes':
					var _p8 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v7 = _p8;
						declarations = _v7;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_user$project$Css_Structure$dropEmptyDeclarations(_p8));
					}
				case 'Viewport':
					var _p9 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v8 = _p9;
						declarations = _v8;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_user$project$Css_Structure$dropEmptyDeclarations(_p9));
					}
				case 'CounterStyle':
					var _p10 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v9 = _p10;
						declarations = _v9;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_user$project$Css_Structure$dropEmptyDeclarations(_p10));
					}
				default:
					var _p13 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p11) {
							var _p12 = _p11;
							return _elm_lang$core$List$isEmpty(_p12._1);
						},
						_p0._0._0)) {
						var _v11 = _p13;
						declarations = _v11;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_user$project$Css_Structure$dropEmptyDeclarations(_p13));
					}
			}
		}
	}
};
var _user$project$Css_Structure$dropEmpty = function (_p14) {
	var _p15 = _p14;
	return {
		charset: _p15.charset,
		imports: _p15.imports,
		namespaces: _p15.namespaces,
		declarations: _user$project$Css_Structure$dropEmptyDeclarations(_p15.declarations)
	};
};
var _user$project$Css_Structure$concatMapLast = F2(
	function (update, list) {
		var _p16 = list;
		if (_p16.ctor === '[]') {
			return list;
		} else {
			if (_p16._1.ctor === '[]') {
				return update(_p16._0);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p16._0,
					A2(_user$project$Css_Structure$concatMapLast, update, _p16._1));
			}
		}
	});
var _user$project$Css_Structure$mapLast = F2(
	function (update, list) {
		var _p17 = list;
		if (_p17.ctor === '[]') {
			return list;
		} else {
			if (_p17._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						update(_p17._0)
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p17._0,
					A2(_user$project$Css_Structure$mapLast, update, _p17._1));
			}
		}
	});
var _user$project$Css_Structure$Property = F3(
	function (a, b, c) {
		return {important: a, key: b, value: c};
	});
var _user$project$Css_Structure$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, declarations: d};
	});
var _user$project$Css_Structure$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _user$project$Css_Structure$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _user$project$Css_Structure$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _user$project$Css_Structure$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _user$project$Css_Structure$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _user$project$Css_Structure$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _user$project$Css_Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _user$project$Css_Structure$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _user$project$Css_Structure$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _user$project$Css_Structure$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _user$project$Css_Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		var _p18 = declarations;
		_v15_12:
		do {
			if (_p18.ctor === '[]') {
				return declarations;
			} else {
				if (_p18._1.ctor === '[]') {
					switch (_p18._0.ctor) {
						case 'StyleBlockDeclaration':
							return A2(
								_elm_lang$core$List$map,
								_user$project$Css_Structure$StyleBlockDeclaration,
								update(_p18._0._0));
						case 'MediaRule':
							if (_p18._0._1.ctor === '::') {
								if (_p18._0._1._1.ctor === '[]') {
									return _elm_lang$core$Native_List.fromArray(
										[
											A2(
											_user$project$Css_Structure$MediaRule,
											_p18._0._0,
											update(_p18._0._1._0))
										]);
								} else {
									var _p19 = A2(
										_user$project$Css_Structure$concatMapLastStyleBlock,
										update,
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_user$project$Css_Structure$MediaRule, _p18._0._0, _p18._0._1._1)
											]));
									if (((_p19.ctor === '::') && (_p19._0.ctor === 'MediaRule')) && (_p19._1.ctor === '[]')) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_user$project$Css_Structure$MediaRule,
												_p19._0._0,
												A2(_elm_lang$core$List_ops['::'], _p18._0._1._0, _p19._0._1))
											]);
									} else {
										return _p19;
									}
								}
							} else {
								break _v15_12;
							}
						case 'SupportsRule':
							return _elm_lang$core$Native_List.fromArray(
								[
									A2(
									_user$project$Css_Structure$SupportsRule,
									_p18._0._0,
									A2(_user$project$Css_Structure$concatMapLastStyleBlock, update, _p18._0._1))
								]);
						case 'DocumentRule':
							return A2(
								_elm_lang$core$List$map,
								A4(_user$project$Css_Structure$DocumentRule, _p18._0._0, _p18._0._1, _p18._0._2, _p18._0._3),
								update(_p18._0._4));
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v15_12;
				}
			}
		} while(false);
		return A2(
			_elm_lang$core$List_ops['::'],
			_p18._0,
			A2(_user$project$Css_Structure$concatMapLastStyleBlock, update, _p18._1));
	});
var _user$project$Css_Structure$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});
var _user$project$Css_Structure$withPropertyAppended = F2(
	function (property, _p20) {
		var _p21 = _p20;
		return A3(
			_user$project$Css_Structure$StyleBlock,
			_p21._0,
			_p21._1,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p21._2,
				_elm_lang$core$Native_List.fromArray(
					[property])));
	});
var _user$project$Css_Structure$appendProperty = F2(
	function (property, declarations) {
		var _p22 = declarations;
		if (_p22.ctor === '[]') {
			return declarations;
		} else {
			if (_p22._1.ctor === '[]') {
				switch (_p22._0.ctor) {
					case 'StyleBlockDeclaration':
						return _elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Structure$StyleBlockDeclaration(
								A2(_user$project$Css_Structure$withPropertyAppended, property, _p22._0._0))
							]);
					case 'MediaRule':
						return _elm_lang$core$Native_List.fromArray(
							[
								A2(
								_user$project$Css_Structure$MediaRule,
								_p22._0._0,
								A2(
									_user$project$Css_Structure$mapLast,
									_user$project$Css_Structure$withPropertyAppended(property),
									_p22._0._1))
							]);
					default:
						return declarations;
				}
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_user$project$Css_Structure$appendProperty, property, _p22._1));
			}
		}
	});
var _user$project$Css_Structure$MediaQuery = function (a) {
	return {ctor: 'MediaQuery', _0: a};
};
var _user$project$Css_Structure$Selector = F3(
	function (a, b, c) {
		return {ctor: 'Selector', _0: a, _1: b, _2: c};
	});
var _user$project$Css_Structure$CustomSelector = F2(
	function (a, b) {
		return {ctor: 'CustomSelector', _0: a, _1: b};
	});
var _user$project$Css_Structure$UniversalSelectorSequence = function (a) {
	return {ctor: 'UniversalSelectorSequence', _0: a};
};
var _user$project$Css_Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {ctor: 'TypeSelectorSequence', _0: a, _1: b};
	});
var _user$project$Css_Structure$appendRepeatable = F2(
	function (selector, sequence) {
		var _p23 = sequence;
		switch (_p23.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_user$project$Css_Structure$TypeSelectorSequence,
					_p23._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p23._1,
						_elm_lang$core$Native_List.fromArray(
							[selector])));
			case 'UniversalSelectorSequence':
				return _user$project$Css_Structure$UniversalSelectorSequence(
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p23._0,
						_elm_lang$core$Native_List.fromArray(
							[selector])));
			default:
				return A2(
					_user$project$Css_Structure$CustomSelector,
					_p23._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p23._1,
						_elm_lang$core$Native_List.fromArray(
							[selector])));
		}
	});
var _user$project$Css_Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		var _p24 = list;
		if (_p24.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if ((_p24._0.ctor === '_Tuple2') && (_p24._1.ctor === '[]')) {
				return _elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: _p24._0._0,
						_1: A2(_user$project$Css_Structure$appendRepeatable, selector, _p24._0._1)
					}
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p24._0,
					A2(_user$project$Css_Structure$appendRepeatableWithCombinator, selector, _p24._1));
			}
		}
	});
var _user$project$Css_Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		var _p25 = selector;
		if (_p25._1.ctor === '[]') {
			return A3(
				_user$project$Css_Structure$Selector,
				A2(_user$project$Css_Structure$appendRepeatable, repeatableSimpleSelector, _p25._0),
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p25._2);
		} else {
			return A3(
				_user$project$Css_Structure$Selector,
				_p25._0,
				A2(_user$project$Css_Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, _p25._1),
				_p25._2);
		}
	});
var _user$project$Css_Structure$extendLastSelector = F2(
	function (selector, declarations) {
		var _p26 = declarations;
		_v22_15:
		do {
			if (_p26.ctor === '[]') {
				return declarations;
			} else {
				if (_p26._1.ctor === '[]') {
					switch (_p26._0.ctor) {
						case 'StyleBlockDeclaration':
							if (_p26._0._0._1.ctor === '[]') {
								return _elm_lang$core$Native_List.fromArray(
									[
										_user$project$Css_Structure$StyleBlockDeclaration(
										A3(
											_user$project$Css_Structure$StyleBlock,
											A2(_user$project$Css_Structure$appendRepeatableSelector, selector, _p26._0._0._0),
											_elm_lang$core$Native_List.fromArray(
												[]),
											_p26._0._0._2))
									]);
							} else {
								var newRest = A2(
									_user$project$Css_Structure$mapLast,
									_user$project$Css_Structure$appendRepeatableSelector(selector),
									_p26._0._0._1);
								return _elm_lang$core$Native_List.fromArray(
									[
										_user$project$Css_Structure$StyleBlockDeclaration(
										A3(_user$project$Css_Structure$StyleBlock, _p26._0._0._0, newRest, _p26._0._0._2))
									]);
							}
						case 'MediaRule':
							if (_p26._0._1.ctor === '::') {
								if (_p26._0._1._1.ctor === '[]') {
									if (_p26._0._1._0._1.ctor === '[]') {
										var newStyleBlock = A3(
											_user$project$Css_Structure$StyleBlock,
											A2(_user$project$Css_Structure$appendRepeatableSelector, selector, _p26._0._1._0._0),
											_elm_lang$core$Native_List.fromArray(
												[]),
											_p26._0._1._0._2);
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_user$project$Css_Structure$MediaRule,
												_p26._0._0,
												_elm_lang$core$Native_List.fromArray(
													[newStyleBlock]))
											]);
									} else {
										var newRest = A2(
											_user$project$Css_Structure$mapLast,
											_user$project$Css_Structure$appendRepeatableSelector(selector),
											_p26._0._1._0._1);
										var newStyleBlock = A3(_user$project$Css_Structure$StyleBlock, _p26._0._1._0._0, newRest, _p26._0._1._0._2);
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_user$project$Css_Structure$MediaRule,
												_p26._0._0,
												_elm_lang$core$Native_List.fromArray(
													[newStyleBlock]))
											]);
									}
								} else {
									var _p27 = A2(
										_user$project$Css_Structure$extendLastSelector,
										selector,
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_user$project$Css_Structure$MediaRule, _p26._0._0, _p26._0._1._1)
											]));
									if (((_p27.ctor === '::') && (_p27._0.ctor === 'MediaRule')) && (_p27._1.ctor === '[]')) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_user$project$Css_Structure$MediaRule,
												_p27._0._0,
												A2(_elm_lang$core$List_ops['::'], _p26._0._1._0, _p27._0._1))
											]);
									} else {
										return _p27;
									}
								}
							} else {
								break _v22_15;
							}
						case 'SupportsRule':
							return _elm_lang$core$Native_List.fromArray(
								[
									A2(
									_user$project$Css_Structure$SupportsRule,
									_p26._0._0,
									A2(_user$project$Css_Structure$extendLastSelector, selector, _p26._0._1))
								]);
						case 'DocumentRule':
							if (_p26._0._4._1.ctor === '[]') {
								var newStyleBlock = A3(
									_user$project$Css_Structure$StyleBlock,
									A2(_user$project$Css_Structure$appendRepeatableSelector, selector, _p26._0._4._0),
									_elm_lang$core$Native_List.fromArray(
										[]),
									_p26._0._4._2);
								return _elm_lang$core$Native_List.fromArray(
									[
										A5(_user$project$Css_Structure$DocumentRule, _p26._0._0, _p26._0._1, _p26._0._2, _p26._0._3, newStyleBlock)
									]);
							} else {
								var newRest = A2(
									_user$project$Css_Structure$mapLast,
									_user$project$Css_Structure$appendRepeatableSelector(selector),
									_p26._0._4._1);
								var newStyleBlock = A3(_user$project$Css_Structure$StyleBlock, _p26._0._4._0, newRest, _p26._0._4._2);
								return _elm_lang$core$Native_List.fromArray(
									[
										A5(_user$project$Css_Structure$DocumentRule, _p26._0._0, _p26._0._1, _p26._0._2, _p26._0._3, newStyleBlock)
									]);
							}
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v22_15;
				}
			}
		} while(false);
		return A2(
			_elm_lang$core$List_ops['::'],
			_p26._0,
			A2(_user$project$Css_Structure$extendLastSelector, selector, _p26._1));
	});
var _user$project$Css_Structure$appendToLastSelector = F2(
	function (selector, styleBlock) {
		var _p28 = styleBlock;
		if (_p28._1.ctor === '[]') {
			var _p29 = _p28._0;
			return _elm_lang$core$Native_List.fromArray(
				[
					A3(
					_user$project$Css_Structure$StyleBlock,
					_p29,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_p28._2),
					A3(
					_user$project$Css_Structure$StyleBlock,
					A2(_user$project$Css_Structure$appendRepeatableSelector, selector, _p29),
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]);
		} else {
			var _p31 = _p28._1;
			var _p30 = _p28._0;
			var newRest = A2(
				_user$project$Css_Structure$mapLast,
				_user$project$Css_Structure$appendRepeatableSelector(selector),
				_p31);
			return _elm_lang$core$Native_List.fromArray(
				[
					A3(_user$project$Css_Structure$StyleBlock, _p30, _p31, _p28._2),
					A3(
					_user$project$Css_Structure$StyleBlock,
					_p30,
					newRest,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]);
		}
	});
var _user$project$Css_Structure$PseudoClassSelector = function (a) {
	return {ctor: 'PseudoClassSelector', _0: a};
};
var _user$project$Css_Structure$IdSelector = function (a) {
	return {ctor: 'IdSelector', _0: a};
};
var _user$project$Css_Structure$ClassSelector = function (a) {
	return {ctor: 'ClassSelector', _0: a};
};
var _user$project$Css_Structure$TypeSelector = function (a) {
	return {ctor: 'TypeSelector', _0: a};
};
var _user$project$Css_Structure$PseudoElement = function (a) {
	return {ctor: 'PseudoElement', _0: a};
};
var _user$project$Css_Structure$Descendant = {ctor: 'Descendant'};
var _user$project$Css_Structure$Child = {ctor: 'Child'};
var _user$project$Css_Structure$GeneralSibling = {ctor: 'GeneralSibling'};
var _user$project$Css_Structure$AdjacentSibling = {ctor: 'AdjacentSibling'};

var _user$project$Css_Preprocess$propertyToPair = function (property) {
	var value = property.important ? A2(_elm_lang$core$Basics_ops['++'], property.value, ' !important') : property.value;
	return {ctor: '_Tuple2', _0: property.key, _1: value};
};
var _user$project$Css_Preprocess$toPropertyPairs = function (mixins) {
	toPropertyPairs:
	while (true) {
		var _p0 = mixins;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			switch (_p0._0.ctor) {
				case 'AppendProperty':
					return A2(
						_elm_lang$core$List_ops['::'],
						_user$project$Css_Preprocess$propertyToPair(_p0._0._0),
						_user$project$Css_Preprocess$toPropertyPairs(_p0._1));
				case 'ApplyMixins':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_user$project$Css_Preprocess$toPropertyPairs(_p0._0._0),
						_user$project$Css_Preprocess$toPropertyPairs(_p0._1));
				default:
					var _v1 = _p0._1;
					mixins = _v1;
					continue toPropertyPairs;
			}
		}
	}
};
var _user$project$Css_Preprocess$unwrapSnippet = function (_p1) {
	var _p2 = _p1;
	return _p2._0;
};
var _user$project$Css_Preprocess$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p3 = declaration;
		switch (_p3.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_user$project$Css_Structure$MediaRule,
					mediaQueries,
					_elm_lang$core$Native_List.fromArray(
						[_p3._0]));
			case 'MediaRule':
				return A2(
					_user$project$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p3._0),
					_p3._1);
			case 'SupportsRule':
				return A2(
					_user$project$Css_Structure$SupportsRule,
					_p3._0,
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Preprocess$toMediaRule(mediaQueries),
						_p3._1));
			case 'DocumentRule':
				return A5(_user$project$Css_Structure$DocumentRule, _p3._0, _p3._1, _p3._2, _p3._3, _p3._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _user$project$Css_Preprocess$stylesheet = function (snippets) {
	return {
		charset: _elm_lang$core$Maybe$Nothing,
		imports: _elm_lang$core$Native_List.fromArray(
			[]),
		namespaces: _elm_lang$core$Native_List.fromArray(
			[]),
		snippets: snippets
	};
};
var _user$project$Css_Preprocess$Property = F4(
	function (a, b, c, d) {
		return {key: a, value: b, important: c, warnings: d};
	});
var _user$project$Css_Preprocess$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, snippets: d};
	});
var _user$project$Css_Preprocess$ApplyMixins = function (a) {
	return {ctor: 'ApplyMixins', _0: a};
};
var _user$project$Css_Preprocess$WithMedia = F2(
	function (a, b) {
		return {ctor: 'WithMedia', _0: a, _1: b};
	});
var _user$project$Css_Preprocess$WithPseudoElement = F2(
	function (a, b) {
		return {ctor: 'WithPseudoElement', _0: a, _1: b};
	});
var _user$project$Css_Preprocess$NestSnippet = F2(
	function (a, b) {
		return {ctor: 'NestSnippet', _0: a, _1: b};
	});
var _user$project$Css_Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {ctor: 'ExtendSelector', _0: a, _1: b};
	});
var _user$project$Css_Preprocess$AppendProperty = function (a) {
	return {ctor: 'AppendProperty', _0: a};
};
var _user$project$Css_Preprocess$mapLastProperty = F2(
	function (update, mixin) {
		var _p4 = mixin;
		switch (_p4.ctor) {
			case 'AppendProperty':
				return _user$project$Css_Preprocess$AppendProperty(
					update(_p4._0));
			case 'ExtendSelector':
				return A2(
					_user$project$Css_Preprocess$ExtendSelector,
					_p4._0,
					A2(_user$project$Css_Preprocess$mapAllLastProperty, update, _p4._1));
			case 'NestSnippet':
				return mixin;
			case 'WithPseudoElement':
				return mixin;
			case 'WithMedia':
				return mixin;
			default:
				return _user$project$Css_Preprocess$ApplyMixins(
					A2(
						_user$project$Css_Structure$mapLast,
						_user$project$Css_Preprocess$mapLastProperty(update),
						_p4._0));
		}
	});
var _user$project$Css_Preprocess$mapAllLastProperty = F2(
	function (update, mixins) {
		var _p5 = mixins;
		if (_p5.ctor === '[]') {
			return mixins;
		} else {
			if (_p5._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Css_Preprocess$mapLastProperty, update, _p5._0)
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p5._0,
					A2(_user$project$Css_Preprocess$mapAllLastProperty, update, _p5._1));
			}
		}
	});
var _user$project$Css_Preprocess$Snippet = function (a) {
	return {ctor: 'Snippet', _0: a};
};
var _user$project$Css_Preprocess$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _user$project$Css_Preprocess$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _user$project$Css_Preprocess$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _user$project$Css_Preprocess$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _user$project$Css_Preprocess$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _user$project$Css_Preprocess$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _user$project$Css_Preprocess$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _user$project$Css_Preprocess$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _user$project$Css_Preprocess$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _user$project$Css_Preprocess$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _user$project$Css_Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});

var _user$project$Css_Structure_Output$indent = function (str) {
	return A2(_elm_lang$core$Basics_ops['++'], '    ', str);
};
var _user$project$Css_Structure_Output$prettyPrintProperty = function (_p0) {
	var _p1 = _p0;
	var suffix = _p1.important ? ' !important;' : ';';
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_p1.key,
		A2(
			_elm_lang$core$Basics_ops['++'],
			': ',
			A2(_elm_lang$core$Basics_ops['++'], _p1.value, suffix)));
};
var _user$project$Css_Structure_Output$prettyPrintProperties = function (properties) {
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			function (_p2) {
				return _user$project$Css_Structure_Output$indent(
					_user$project$Css_Structure_Output$prettyPrintProperty(_p2));
			},
			properties));
};
var _user$project$Css_Structure_Output$combinatorToString = function (combinator) {
	var _p3 = combinator;
	switch (_p3.ctor) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var _user$project$Css_Structure_Output$pseudoElementToString = function (_p4) {
	var _p5 = _p4;
	return A2(_elm_lang$core$Basics_ops['++'], '::', _p5._0);
};
var _user$project$Css_Structure_Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	var _p6 = repeatableSimpleSelector;
	switch (_p6.ctor) {
		case 'ClassSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '.', _p6._0);
		case 'IdSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '#', _p6._0);
		default:
			return A2(_elm_lang$core$Basics_ops['++'], ':', _p6._0);
	}
};
var _user$project$Css_Structure_Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	var _p7 = simpleSelectorSequence;
	switch (_p7.ctor) {
		case 'TypeSelectorSequence':
			return A2(
				_elm_lang$core$String$join,
				'',
				A2(
					_elm_lang$core$List_ops['::'],
					_p7._0._0,
					A2(_elm_lang$core$List$map, _user$project$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)));
		case 'UniversalSelectorSequence':
			var _p8 = _p7._0;
			return _elm_lang$core$List$isEmpty(_p8) ? '*' : A2(
				_elm_lang$core$String$join,
				'',
				A2(_elm_lang$core$List$map, _user$project$Css_Structure_Output$repeatableSimpleSelectorToString, _p8));
		default:
			return A2(
				_elm_lang$core$String$join,
				'',
				A2(
					_elm_lang$core$List_ops['::'],
					_p7._0,
					A2(_elm_lang$core$List$map, _user$project$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)));
	}
};
var _user$project$Css_Structure_Output$selectorChainToString = function (_p9) {
	var _p10 = _p9;
	return A2(
		_elm_lang$core$String$join,
		' ',
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Structure_Output$combinatorToString(_p10._0),
				_user$project$Css_Structure_Output$simpleSelectorSequenceToString(_p10._1)
			]));
};
var _user$project$Css_Structure_Output$selectorToString = function (_p11) {
	var _p12 = _p11;
	var segments = A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Structure_Output$simpleSelectorSequenceToString(_p12._0)
			]),
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_elm_lang$core$List$map, _user$project$Css_Structure_Output$selectorChainToString, _p12._1),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(_elm_lang$core$Maybe$map, _user$project$Css_Structure_Output$pseudoElementToString, _p12._2))
				])));
	return A2(
		_elm_lang$core$String$join,
		' ',
		A2(
			_elm_lang$core$List$filter,
			function (_p13) {
				return _elm_lang$core$Basics$not(
					_elm_lang$core$String$isEmpty(_p13));
			},
			segments));
};
var _user$project$Css_Structure_Output$prettyPrintStyleBlock = function (_p14) {
	var _p15 = _p14;
	var selectorStr = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_user$project$Css_Structure_Output$selectorToString,
			A2(_elm_lang$core$List_ops['::'], _p15._0, _p15._1)));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		selectorStr,
		A2(
			_elm_lang$core$Basics_ops['++'],
			' {\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Css_Structure_Output$prettyPrintProperties(_p15._2),
				'\n}')));
};
var _user$project$Css_Structure_Output$prettyPrintDeclaration = function (declaration) {
	var _p16 = declaration;
	switch (_p16.ctor) {
		case 'StyleBlockDeclaration':
			return _user$project$Css_Structure_Output$prettyPrintStyleBlock(_p16._0);
		case 'MediaRule':
			var query = A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					function (_p17) {
						var _p18 = _p17;
						return _p18._0;
					},
					_p16._0));
			var blocks = A2(
				_elm_lang$core$String$join,
				'\n\n',
				A2(
					_elm_lang$core$List$map,
					function (_p19) {
						return _user$project$Css_Structure_Output$indent(
							_user$project$Css_Structure_Output$prettyPrintStyleBlock(_p19));
					},
					_p16._1));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'@media ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					query,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' {\n',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_user$project$Css_Structure_Output$indent(blocks),
							'\n}'))));
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Css.Structure.Output',
				{
					start: {line: 56, column: 5},
					end: {line: 73, column: 49}
				},
				_p16)('not yet implemented :x');
	}
};
var _user$project$Css_Structure_Output$namespaceToString = function (_p21) {
	var _p22 = _p21;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@namespace ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p22._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\"',
				A2(_elm_lang$core$Basics_ops['++'], _p22._1, '\"'))));
};
var _user$project$Css_Structure_Output$importToString = function (_p23) {
	var _p24 = _p23;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@import \"',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p24._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p24._1),
				'\"')));
};
var _user$project$Css_Structure_Output$charsetToString = function (charset) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			function (str) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'@charset \"',
					A2(_elm_lang$core$Basics_ops['++'], str, '\"'));
			},
			charset));
};
var _user$project$Css_Structure_Output$prettyPrint = function (_p25) {
	var _p26 = _p25;
	return A2(
		_elm_lang$core$String$join,
		'\n\n',
		A2(
			_elm_lang$core$List$filter,
			function (_p27) {
				return _elm_lang$core$Basics$not(
					_elm_lang$core$String$isEmpty(_p27));
			},
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css_Structure_Output$charsetToString(_p26.charset),
					A2(
					_elm_lang$core$String$join,
					'\n',
					A2(_elm_lang$core$List$map, _user$project$Css_Structure_Output$importToString, _p26.imports)),
					A2(
					_elm_lang$core$String$join,
					'\n',
					A2(_elm_lang$core$List$map, _user$project$Css_Structure_Output$namespaceToString, _p26.namespaces)),
					A2(
					_elm_lang$core$String$join,
					'\n\n',
					A2(_elm_lang$core$List$map, _user$project$Css_Structure_Output$prettyPrintDeclaration, _p26.declarations))
				])));
};

var _user$project$Css_Preprocess_Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p0._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$List_ops['::'], _p0._0._0._0, _p0._0._0._1),
					_user$project$Css_Preprocess_Resolve$collectSelectors(_p0._1));
			} else {
				var _v1 = _p0._1;
				declarations = _v1;
				continue collectSelectors;
			}
		}
	}
};
var _user$project$Css_Preprocess_Resolve$extractWarning = function (_p1) {
	var _p2 = _p1;
	return {
		ctor: '_Tuple2',
		_0: _p2.warnings,
		_1: {key: _p2.key, value: _p2.value, important: _p2.important}
	};
};
var _user$project$Css_Preprocess_Resolve$extractWarnings = function (properties) {
	return {
		ctor: '_Tuple2',
		_0: A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.warnings;
			},
			properties),
		_1: A2(
			_elm_lang$core$List$map,
			function (prop) {
				return _elm_lang$core$Basics$snd(
					_user$project$Css_Preprocess_Resolve$extractWarning(prop));
			},
			properties)
	};
};
var _user$project$Css_Preprocess_Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		var _p3 = declaration;
		if (_p3.ctor === 'StyleBlockDeclaration') {
			return A5(_user$project$Css_Structure$DocumentRule, str1, str2, str3, str4, _p3._0);
		} else {
			return declaration;
		}
	});
var _user$project$Css_Preprocess_Resolve$concatDeclarationsAndWarnings = function (declarationsAndWarnings) {
	var _p4 = declarationsAndWarnings;
	if (_p4.ctor === '[]') {
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[]),
			warnings: _elm_lang$core$Native_List.fromArray(
				[])
		};
	} else {
		var result = _user$project$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(_p4._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], _p4._0.declarations, result.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], _p4._0.warnings, result.warnings)
		};
	}
};
var _user$project$Css_Preprocess_Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		var _p5 = tuplesToExpand;
		if (_p5.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			};
		} else {
			var _p6 = expandTuples(_p5._1);
			var nextWarnings = _p6._0;
			var nextTuples = _p6._1;
			var _p7 = _user$project$Css_Preprocess_Resolve$extractWarnings(_p5._0._1);
			var warnings = _p7._0;
			var properties = _p7._1;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$Basics_ops['++'], warnings, nextWarnings),
				_1: A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: _p5._0._0, _1: properties},
					nextTuples)
			};
		}
	};
	var _p8 = expandTuples(tuples);
	var warnings = _p8._0;
	var newTuples = _p8._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Structure$FontFeatureValues(newTuples)
			]),
		warnings: warnings
	};
};
var _user$project$Css_Preprocess_Resolve$resolveCounterStyle = function (counterStyleProperties) {
	var _p9 = _user$project$Css_Preprocess_Resolve$extractWarnings(counterStyleProperties);
	var warnings = _p9._0;
	var properties = _p9._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Structure$Viewport(properties)
			]),
		warnings: warnings
	};
};
var _user$project$Css_Preprocess_Resolve$resolveViewport = function (viewportProperties) {
	var _p10 = _user$project$Css_Preprocess_Resolve$extractWarnings(viewportProperties);
	var warnings = _p10._0;
	var properties = _p10._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Structure$Viewport(properties)
			]),
		warnings: warnings
	};
};
var _user$project$Css_Preprocess_Resolve$resolveKeyframes = F2(
	function (str, properties) {
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					A2(_user$project$Css_Structure$Keyframes, str, properties)
				]),
			warnings: _elm_lang$core$Native_List.fromArray(
				[])
		};
	});
var _user$project$Css_Preprocess_Resolve$resolveFontFace = function (fontFaceProperties) {
	var _p11 = _user$project$Css_Preprocess_Resolve$extractWarnings(fontFaceProperties);
	var warnings = _p11._0;
	var properties = _p11._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Structure$FontFace(properties)
			]),
		warnings: warnings
	};
};
var _user$project$Css_Preprocess_Resolve$resolvePageRule = F2(
	function (str, pageRuleProperties) {
		var _p12 = _user$project$Css_Preprocess_Resolve$extractWarnings(pageRuleProperties);
		var warnings = _p12._0;
		var properties = _p12._1;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					A2(_user$project$Css_Structure$PageRule, str, properties)
				]),
			warnings: warnings
		};
	});
var _user$project$Css_Preprocess_Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p13 = declaration;
		switch (_p13.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_user$project$Css_Structure$MediaRule,
					mediaQueries,
					_elm_lang$core$Native_List.fromArray(
						[_p13._0]));
			case 'MediaRule':
				return A2(
					_user$project$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p13._0),
					_p13._1);
			case 'SupportsRule':
				return A2(
					_user$project$Css_Structure$SupportsRule,
					_p13._0,
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
						_p13._1));
			case 'DocumentRule':
				return A5(_user$project$Css_Structure$DocumentRule, _p13._0, _p13._1, _p13._2, _p13._3, _p13._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _user$project$Css_Preprocess_Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			var _p14 = _user$project$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
			var declarations = _p14.declarations;
			var warnings = _p14.warnings;
			return {
				declarations: A2(
					_elm_lang$core$List$map,
					_user$project$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
					declarations),
				warnings: warnings
			};
		};
		var results = A2(_elm_lang$core$List$map, handleStyleBlock, styleBlocks);
		return {
			warnings: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.warnings;
				},
				results),
			declarations: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.declarations;
				},
				results)
		};
	});
var _user$project$Css_Preprocess_Resolve$expandStyleBlock = function (_p15) {
	var _p16 = _p15;
	return A2(
		_user$project$Css_Preprocess_Resolve$applyMixins,
		_p16._2,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Structure$StyleBlockDeclaration(
				A3(
					_user$project$Css_Structure$StyleBlock,
					_p16._0,
					_p16._1,
					_elm_lang$core$Native_List.fromArray(
						[])))
			]));
};
var _user$project$Css_Preprocess_Resolve$applyMixins = F2(
	function (mixins, declarations) {
		applyMixins:
		while (true) {
			var _p17 = mixins;
			if (_p17.ctor === '[]') {
				return {
					declarations: declarations,
					warnings: _elm_lang$core$Native_List.fromArray(
						[])
				};
			} else {
				switch (_p17._0.ctor) {
					case 'AppendProperty':
						var _p18 = _user$project$Css_Preprocess_Resolve$extractWarning(_p17._0._0);
						var warnings = _p18._0;
						var property = _p18._1;
						var result = A2(
							_user$project$Css_Preprocess_Resolve$applyMixins,
							_p17._1,
							A2(_user$project$Css_Structure$appendProperty, property, declarations));
						return {
							declarations: result.declarations,
							warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, result.warnings)
						};
					case 'ExtendSelector':
						var handleInitial = function (declarationsAndWarnings) {
							var result = A2(_user$project$Css_Preprocess_Resolve$applyMixins, _p17._0._1, declarationsAndWarnings.declarations);
							return {
								warnings: A2(_elm_lang$core$Basics_ops['++'], declarationsAndWarnings.warnings, result.warnings),
								declarations: result.declarations
							};
						};
						var initialResult = _user$project$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							A2(
								_user$project$Css_Structure$mapLast,
								handleInitial,
								A2(
									_elm_lang$core$List$map,
									function (declaration) {
										return {
											declarations: _elm_lang$core$Native_List.fromArray(
												[declaration]),
											warnings: _elm_lang$core$Native_List.fromArray(
												[])
										};
									},
									A2(
										_user$project$Css_Structure$concatMapLastStyleBlock,
										_user$project$Css_Structure$appendToLastSelector(_p17._0._0),
										declarations))));
						var nextResult = A2(_user$project$Css_Preprocess_Resolve$applyMixins, _p17._1, initialResult.declarations);
						return {
							warnings: A2(_elm_lang$core$Basics_ops['++'], initialResult.warnings, nextResult.warnings),
							declarations: nextResult.declarations
						};
					case 'NestSnippet':
						var chain = F2(
							function (_p20, _p19) {
								var _p21 = _p20;
								var _p22 = _p19;
								return A3(
									_user$project$Css_Structure$Selector,
									_p21._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p21._1,
										A2(
											_elm_lang$core$List_ops['::'],
											{ctor: '_Tuple2', _0: _p17._0._0, _1: _p22._0},
											_p22._1)),
									_elm_lang$core$Maybe$oneOf(
										_elm_lang$core$Native_List.fromArray(
											[_p22._2, _p21._2])));
							});
						var expandDeclaration = function (declaration) {
							var _p23 = declaration;
							switch (_p23.ctor) {
								case 'StyleBlockDeclaration':
									var newSelectors = A2(
										_elm_lang$core$List$concatMap,
										function (originalSelector) {
											return A2(
												_elm_lang$core$List$map,
												chain(originalSelector),
												A2(_elm_lang$core$List_ops['::'], _p23._0._0, _p23._0._1));
										},
										_user$project$Css_Preprocess_Resolve$collectSelectors(declarations));
									var newDeclarations = function () {
										var _p24 = newSelectors;
										if (_p24.ctor === '[]') {
											return _elm_lang$core$Native_List.fromArray(
												[]);
										} else {
											return _elm_lang$core$Native_List.fromArray(
												[
													_user$project$Css_Structure$StyleBlockDeclaration(
													A3(
														_user$project$Css_Structure$StyleBlock,
														_p24._0,
														_p24._1,
														_elm_lang$core$Native_List.fromArray(
															[])))
												]);
										}
									}();
									return _user$project$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_user$project$Css_Preprocess_Resolve$applyMixins, _p23._0._2, newDeclarations)
											]));
								case 'MediaRule':
									return A2(_user$project$Css_Preprocess_Resolve$resolveMediaRule, _p23._0, _p23._1);
								case 'SupportsRule':
									return A2(_user$project$Css_Preprocess_Resolve$resolveSupportsRule, _p23._0, _p23._1);
								case 'DocumentRule':
									return A5(_user$project$Css_Preprocess_Resolve$resolveDocumentRule, _p23._0, _p23._1, _p23._2, _p23._3, _p23._4);
								case 'PageRule':
									return A2(_user$project$Css_Preprocess_Resolve$resolvePageRule, _p23._0, _p23._1);
								case 'FontFace':
									return _user$project$Css_Preprocess_Resolve$resolveFontFace(_p23._0);
								case 'Keyframes':
									return A2(_user$project$Css_Preprocess_Resolve$resolveKeyframes, _p23._0, _p23._1);
								case 'Viewport':
									return _user$project$Css_Preprocess_Resolve$resolveViewport(_p23._0);
								case 'CounterStyle':
									return _user$project$Css_Preprocess_Resolve$resolveCounterStyle(_p23._0);
								default:
									return _user$project$Css_Preprocess_Resolve$resolveFontFeatureValues(_p23._0);
							}
						};
						return _user$project$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							A2(
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(_user$project$Css_Preprocess_Resolve$applyMixins, _p17._1, declarations)
									]),
								A2(
									_elm_lang$core$List$map,
									expandDeclaration,
									A2(_elm_lang$core$List$concatMap, _user$project$Css_Preprocess$unwrapSnippet, _p17._0._1))));
					case 'WithPseudoElement':
						var _v13 = _p17._1,
							_v14 = declarations;
						mixins = _v13;
						declarations = _v14;
						continue applyMixins;
					case 'WithMedia':
						var newDeclarations = function () {
							var _p25 = _user$project$Css_Preprocess_Resolve$collectSelectors(declarations);
							if (_p25.ctor === '[]') {
								return _elm_lang$core$Native_List.fromArray(
									[]);
							} else {
								return _elm_lang$core$Native_List.fromArray(
									[
										A2(
										_user$project$Css_Structure$MediaRule,
										_p17._0._0,
										_elm_lang$core$Native_List.fromArray(
											[
												A3(
												_user$project$Css_Structure$StyleBlock,
												_p25._0,
												_p25._1,
												_elm_lang$core$Native_List.fromArray(
													[]))
											]))
									]);
							}
						}();
						return _user$project$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							_elm_lang$core$Native_List.fromArray(
								[
									A2(_user$project$Css_Preprocess_Resolve$applyMixins, _p17._1, declarations),
									A2(_user$project$Css_Preprocess_Resolve$applyMixins, _p17._0._1, newDeclarations)
								]));
					default:
						var _v16 = A2(_elm_lang$core$Basics_ops['++'], _p17._0._0, _p17._1),
							_v17 = declarations;
						mixins = _v16;
						declarations = _v17;
						continue applyMixins;
				}
			}
		}
	});
var _user$project$Css_Preprocess_Resolve$resolveDocumentRule = F5(
	function (str1, str2, str3, str4, styleBlock) {
		var _p26 = _user$project$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
		var declarations = _p26.declarations;
		var warnings = _p26.warnings;
		return {
			declarations: A2(
				_elm_lang$core$List$map,
				A4(_user$project$Css_Preprocess_Resolve$toDocumentRule, str1, str2, str3, str4),
				declarations),
			warnings: warnings
		};
	});
var _user$project$Css_Preprocess_Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var _p27 = _user$project$Css_Preprocess_Resolve$extract(
			A2(_elm_lang$core$List$concatMap, _user$project$Css_Preprocess$unwrapSnippet, snippets));
		var declarations = _p27.declarations;
		var warnings = _p27.warnings;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					A2(_user$project$Css_Structure$SupportsRule, str, declarations)
				]),
			warnings: warnings
		};
	});
var _user$project$Css_Preprocess_Resolve$extract = function (snippetDeclarations) {
	var _p28 = snippetDeclarations;
	if (_p28.ctor === '[]') {
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[]),
			warnings: _elm_lang$core$Native_List.fromArray(
				[])
		};
	} else {
		var _p29 = _user$project$Css_Preprocess_Resolve$toDeclarations(_p28._0);
		var declarations = _p29.declarations;
		var warnings = _p29.warnings;
		var nextResult = _user$project$Css_Preprocess_Resolve$extract(_p28._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], declarations, nextResult.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, nextResult.warnings)
		};
	}
};
var _user$project$Css_Preprocess_Resolve$toDeclarations = function (snippetDeclaration) {
	var _p30 = snippetDeclaration;
	switch (_p30.ctor) {
		case 'StyleBlockDeclaration':
			return _user$project$Css_Preprocess_Resolve$expandStyleBlock(_p30._0);
		case 'MediaRule':
			return A2(_user$project$Css_Preprocess_Resolve$resolveMediaRule, _p30._0, _p30._1);
		case 'SupportsRule':
			return A2(_user$project$Css_Preprocess_Resolve$resolveSupportsRule, _p30._0, _p30._1);
		case 'DocumentRule':
			return A5(_user$project$Css_Preprocess_Resolve$resolveDocumentRule, _p30._0, _p30._1, _p30._2, _p30._3, _p30._4);
		case 'PageRule':
			return A2(_user$project$Css_Preprocess_Resolve$resolvePageRule, _p30._0, _p30._1);
		case 'FontFace':
			return _user$project$Css_Preprocess_Resolve$resolveFontFace(_p30._0);
		case 'Keyframes':
			return A2(_user$project$Css_Preprocess_Resolve$resolveKeyframes, _p30._0, _p30._1);
		case 'Viewport':
			return _user$project$Css_Preprocess_Resolve$resolveViewport(_p30._0);
		case 'CounterStyle':
			return _user$project$Css_Preprocess_Resolve$resolveCounterStyle(_p30._0);
		default:
			return _user$project$Css_Preprocess_Resolve$resolveFontFeatureValues(_p30._0);
	}
};
var _user$project$Css_Preprocess_Resolve$toStructure = function (_p31) {
	var _p32 = _p31;
	var _p33 = _user$project$Css_Preprocess_Resolve$extract(
		A2(_elm_lang$core$List$concatMap, _user$project$Css_Preprocess$unwrapSnippet, _p32.snippets));
	var warnings = _p33.warnings;
	var declarations = _p33.declarations;
	return {
		ctor: '_Tuple2',
		_0: {charset: _p32.charset, imports: _p32.imports, namespaces: _p32.namespaces, declarations: declarations},
		_1: warnings
	};
};
var _user$project$Css_Preprocess_Resolve$compile = function (sheet) {
	var _p34 = _user$project$Css_Preprocess_Resolve$toStructure(sheet);
	var structureStylesheet = _p34._0;
	var warnings = _p34._1;
	return {
		warnings: warnings,
		css: _user$project$Css_Structure_Output$prettyPrint(
			_user$project$Css_Structure$dropEmpty(structureStylesheet))
	};
};
var _user$project$Css_Preprocess_Resolve$DeclarationsAndWarnings = F2(
	function (a, b) {
		return {declarations: a, warnings: b};
	});

var _user$project$Css$asPairs = _user$project$Css_Preprocess$toPropertyPairs;
var _user$project$Css$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p0._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$List_ops['::'], _p0._0._0._0, _p0._0._0._1),
					_user$project$Css$collectSelectors(_p0._1));
			} else {
				var _v1 = _p0._1;
				declarations = _v1;
				continue collectSelectors;
			}
		}
	}
};
var _user$project$Css$compile = _user$project$Css_Preprocess_Resolve$compile;
var _user$project$Css$stringsToValue = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (s) {
					return s;
				},
				list))
	};
};
var _user$project$Css$valuesOrNone = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.value;
				},
				list))
	};
};
var _user$project$Css$stringToInt = function (str) {
	return A2(
		_elm_lang$core$Result$withDefault,
		0,
		_elm_lang$core$String$toInt(str));
};
var _user$project$Css$numberToString = function (num) {
	return _elm_lang$core$Basics$toString(num + 0);
};
var _user$project$Css$numericalPercentageToString = function (value) {
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'%',
		_user$project$Css$numberToString(
			A2(
				F2(
					function (x, y) {
						return x * y;
					}),
				100,
				value)));
};
var _user$project$Css$each = F2(
	function (snippetCreators, mixins) {
		var selectorsToSnippet = function (selectors) {
			var _p1 = selectors;
			if (_p1.ctor === '[]') {
				return _user$project$Css_Preprocess$Snippet(
					_elm_lang$core$Native_List.fromArray(
						[]));
			} else {
				return _user$project$Css_Preprocess$Snippet(
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$Css_Preprocess$StyleBlockDeclaration(
							A3(_user$project$Css_Preprocess$StyleBlock, _p1._0, _p1._1, mixins))
						]));
			}
		};
		return selectorsToSnippet(
			_user$project$Css$collectSelectors(
				A2(
					_elm_lang$core$List$concatMap,
					_user$project$Css_Preprocess$unwrapSnippet,
					A2(
						_elm_lang$core$List$map,
						F2(
							function (x, y) {
								return y(x);
							})(
							_elm_lang$core$Native_List.fromArray(
								[])),
						snippetCreators))));
	});
var _user$project$Css$generalSiblings = _user$project$Css_Preprocess$NestSnippet(_user$project$Css_Structure$GeneralSibling);
var _user$project$Css$adjacentSiblings = _user$project$Css_Preprocess$NestSnippet(_user$project$Css_Structure$AdjacentSibling);
var _user$project$Css$descendants = _user$project$Css_Preprocess$NestSnippet(_user$project$Css_Structure$Descendant);
var _user$project$Css$withClass = function ($class) {
	return _user$project$Css_Preprocess$ExtendSelector(
		_user$project$Css_Structure$ClassSelector(
			A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class)));
};
var _user$project$Css$children = _user$project$Css_Preprocess$NestSnippet(_user$project$Css_Structure$Child);
var _user$project$Css$selection = _user$project$Css_Preprocess$WithPseudoElement(
	_user$project$Css_Structure$PseudoElement('selection'));
var _user$project$Css$firstLine = _user$project$Css_Preprocess$WithPseudoElement(
	_user$project$Css_Structure$PseudoElement('first-line'));
var _user$project$Css$firstLetter = _user$project$Css_Preprocess$WithPseudoElement(
	_user$project$Css_Structure$PseudoElement('first-letter'));
var _user$project$Css$before = _user$project$Css_Preprocess$WithPseudoElement(
	_user$project$Css_Structure$PseudoElement('before'));
var _user$project$Css$after = _user$project$Css_Preprocess$WithPseudoElement(
	_user$project$Css_Structure$PseudoElement('after'));
var _user$project$Css$valid = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('valid'));
var _user$project$Css$target = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('target'));
var _user$project$Css$scope = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('scope'));
var _user$project$Css$root = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('root'));
var _user$project$Css$required = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('required'));
var _user$project$Css$readWrite = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('read-write'));
var _user$project$Css$outOfRange = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('out-of-range'));
var _user$project$Css$optional = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('optional'));
var _user$project$Css$onlyOfType = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('only-of-type'));
var _user$project$Css$onlyChild = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('only-child'));
var _user$project$Css$nthOfType = function (str) {
	return _user$project$Css_Preprocess$ExtendSelector(
		_user$project$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-of-type(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _user$project$Css$nthLastOfType = function (str) {
	return _user$project$Css_Preprocess$ExtendSelector(
		_user$project$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-last-of-type(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _user$project$Css$nthLastChild = function (str) {
	return _user$project$Css_Preprocess$ExtendSelector(
		_user$project$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-last-child(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _user$project$Css$nthChild = function (str) {
	return _user$project$Css_Preprocess$ExtendSelector(
		_user$project$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-child(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _user$project$Css$link = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('link'));
var _user$project$Css$lastOfType = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('last-of-type'));
var _user$project$Css$lastChild = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('last-child'));
var _user$project$Css$lang = function (str) {
	return _user$project$Css_Preprocess$ExtendSelector(
		_user$project$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'lang(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _user$project$Css$invalid = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('invalid'));
var _user$project$Css$indeterminate = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('indeterminate'));
var _user$project$Css$hover = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('hover'));
var _user$project$Css$focus = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('focus'));
var _user$project$Css$fullscreen = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('fullscreen'));
var _user$project$Css$firstOfType = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('first-of-type'));
var _user$project$Css$firstChild = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('first-child'));
var _user$project$Css$first = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('first'));
var _user$project$Css$enabled = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('enabled'));
var _user$project$Css$empty = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('empty'));
var _user$project$Css$disabled = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('disabled'));
var _user$project$Css$checked = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('checked'));
var _user$project$Css$any = function (str) {
	return _user$project$Css_Preprocess$ExtendSelector(
		_user$project$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'any(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _user$project$Css$active = _user$project$Css_Preprocess$ExtendSelector(
	_user$project$Css_Structure$PseudoClassSelector('active'));
var _user$project$Css$directionalityToString = function (directionality) {
	var _p2 = directionality;
	if (_p2.ctor === 'Ltr') {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var _user$project$Css$dir = function (directionality) {
	return _user$project$Css_Preprocess$ExtendSelector(
		_user$project$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'dir(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_user$project$Css$directionalityToString(directionality),
					')'))));
};
var _user$project$Css$propertyWithWarnings = F3(
	function (warnings, key, value) {
		return _user$project$Css_Preprocess$AppendProperty(
			{key: key, value: value, important: false, warnings: warnings});
	});
var _user$project$Css$property = _user$project$Css$propertyWithWarnings(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _user$project$Css$makeSnippet = F2(
	function (mixins, sequence) {
		var selector = A3(
			_user$project$Css_Structure$Selector,
			sequence,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Maybe$Nothing);
		return _user$project$Css_Preprocess$Snippet(
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css_Preprocess$StyleBlockDeclaration(
					A3(
						_user$project$Css_Preprocess$StyleBlock,
						selector,
						_elm_lang$core$Native_List.fromArray(
							[]),
						mixins))
				]));
	});
var _user$project$Css_ops = _user$project$Css_ops || {};
_user$project$Css_ops['.'] = F2(
	function ($class, mixins) {
		return A2(
			_user$project$Css$makeSnippet,
			mixins,
			_user$project$Css_Structure$UniversalSelectorSequence(
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Css_Structure$ClassSelector(
						A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class))
					])));
	});
var _user$project$Css$selector = F2(
	function (selectorStr, mixins) {
		return A2(
			_user$project$Css$makeSnippet,
			mixins,
			A2(
				_user$project$Css_Structure$CustomSelector,
				selectorStr,
				_elm_lang$core$Native_List.fromArray(
					[])));
	});
var _user$project$Css$everything = function (mixins) {
	return A2(
		_user$project$Css$makeSnippet,
		mixins,
		_user$project$Css_Structure$UniversalSelectorSequence(
			_elm_lang$core$Native_List.fromArray(
				[])));
};
var _user$project$Css_ops = _user$project$Css_ops || {};
_user$project$Css_ops['#'] = F2(
	function (id, mixins) {
		return A2(
			_user$project$Css$makeSnippet,
			mixins,
			_user$project$Css_Structure$UniversalSelectorSequence(
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Css_Structure$IdSelector(
						A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', id))
					])));
	});
var _user$project$Css$mixin = _user$project$Css_Preprocess$ApplyMixins;
var _user$project$Css$stylesheet = _user$project$Css_Preprocess$stylesheet;
var _user$project$Css$animationNames = function (identifiers) {
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css_util$Css_Helpers$identifierToString(''),
			identifiers));
	return A2(_user$project$Css$property, 'animation-name', value);
};
var _user$project$Css$animationName = function (identifier) {
	return _user$project$Css$animationNames(
		_elm_lang$core$Native_List.fromArray(
			[identifier]));
};
var _user$project$Css$fontWeight = function (_p3) {
	var _p4 = _p3;
	var _p5 = _p4.value;
	var validWeight = function (weight) {
		return (!_elm_lang$core$Native_Utils.eq(
			_p5,
			_elm_lang$core$Basics$toString(weight))) ? true : A2(
			_elm_lang$core$List$member,
			weight,
			A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return x * y;
					})(100),
				_elm_lang$core$Native_List.range(1, 9)));
	};
	var warnings = validWeight(
		_user$project$Css$stringToInt(_p5)) ? _elm_lang$core$Native_List.fromArray(
		[]) : _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$core$Basics_ops['++'],
			'fontWeight ',
			A2(_elm_lang$core$Basics_ops['++'], _p5, ' is invalid. Valid weights are: 100, 200, 300, 400, 500, 600, 700, 800, 900. Please see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values'))
		]);
	return A3(_user$project$Css$propertyWithWarnings, warnings, 'font-weight', _p5);
};
var _user$project$Css$fontFeatureSettingsList = function (featureTagValues) {
	var warnings = _elm_lang$core$List$concat(
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.warnings;
			},
			featureTagValues));
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.value;
			},
			featureTagValues));
	return A3(_user$project$Css$propertyWithWarnings, warnings, 'font-feature-settings', value);
};
var _user$project$Css$fontFeatureSettings = function (_p6) {
	var _p7 = _p6;
	return A3(_user$project$Css$propertyWithWarnings, _p7.warnings, 'font-feature-settings', _p7.value);
};
var _user$project$Css$qt = function (str) {
	return _elm_lang$core$Basics$toString(str);
};
var _user$project$Css$fontFace = function (value) {
	return A2(_elm_lang$core$Basics_ops['++'], 'font-face ', value);
};
var _user$project$Css$src = function (value) {
	return _elm_lang$core$Basics$toString(value.value);
};
var _user$project$Css$withMedia = _user$project$Css_Preprocess$WithMedia;
var _user$project$Css$media = F2(
	function (mediaQueries, snippets) {
		var nestedMediaRules = function (declarations) {
			nestedMediaRules:
			while (true) {
				var _p8 = declarations;
				if (_p8.ctor === '[]') {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				} else {
					switch (_p8._0.ctor) {
						case 'StyleBlockDeclaration':
							var _v7 = _p8._1;
							declarations = _v7;
							continue nestedMediaRules;
						case 'MediaRule':
							return A2(
								_elm_lang$core$List_ops['::'],
								A2(
									_user$project$Css_Preprocess$MediaRule,
									A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p8._0._0),
									_p8._0._1),
								nestedMediaRules(_p8._1));
						default:
							return A2(
								_elm_lang$core$List_ops['::'],
								_p8._0,
								nestedMediaRules(_p8._1));
					}
				}
			}
		};
		var extractStyleBlocks = function (declarations) {
			extractStyleBlocks:
			while (true) {
				var _p9 = declarations;
				if (_p9.ctor === '[]') {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				} else {
					if (_p9._0.ctor === 'StyleBlockDeclaration') {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p9._0._0,
							extractStyleBlocks(_p9._1));
					} else {
						var _v9 = _p9._1;
						declarations = _v9;
						continue extractStyleBlocks;
					}
				}
			}
		};
		var snippetDeclarations = A2(_elm_lang$core$List$concatMap, _user$project$Css_Preprocess$unwrapSnippet, snippets);
		var mediaRuleFromStyleBlocks = A2(
			_user$project$Css_Preprocess$MediaRule,
			mediaQueries,
			extractStyleBlocks(snippetDeclarations));
		return _user$project$Css_Preprocess$Snippet(
			A2(
				_elm_lang$core$List_ops['::'],
				mediaRuleFromStyleBlocks,
				nestedMediaRules(snippetDeclarations)));
	});
var _user$project$Css$mediaQuery = F2(
	function (queryString, snippets) {
		return A2(
			_user$project$Css$media,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css_Structure$MediaQuery(queryString)
				]),
			snippets);
	});
var _user$project$Css$color = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'color', c.value);
};
var _user$project$Css$backgroundColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'background-color', c.value);
};
var _user$project$Css$borderColor4 = F4(
	function (c1, c2, c3, c4) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[c1.value, c2.value, c3.value, c4.value]));
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(
				_elm_lang$core$Basics_ops['++'],
				c2.warnings,
				A2(_elm_lang$core$Basics_ops['++'], c3.warnings, c4.warnings)));
		return A3(_user$project$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _user$project$Css$borderColor3 = F3(
	function (c1, c2, c3) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[c1.value, c2.value, c3.value]));
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(_elm_lang$core$Basics_ops['++'], c2.warnings, c3.warnings));
		return A3(_user$project$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _user$project$Css$borderColor2 = F2(
	function (c1, c2) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[c1.value, c2.value]));
		var warnings = A2(_elm_lang$core$Basics_ops['++'], c1.warnings, c2.warnings);
		return A3(_user$project$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _user$project$Css$borderColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'border-color', c.value);
};
var _user$project$Css$borderBlockEndColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'border-block-end-color', c.value);
};
var _user$project$Css$borderTopColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'border-top-color', c.value);
};
var _user$project$Css$borderRightColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'border-right-color', c.value);
};
var _user$project$Css$borderLeftColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'border-left-color', c.value);
};
var _user$project$Css$borderInlineEndColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'border-inline-end-color', c.value);
};
var _user$project$Css$borderInlineStartColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'border-inline-start-color', c.value);
};
var _user$project$Css$borderBottomColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'border-bottom-color', c.value);
};
var _user$project$Css$borderBlockStartColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'border-block-start-color', c.value);
};
var _user$project$Css$featureOff = 0;
var _user$project$Css$featureOn = 1;
var _user$project$Css$displayFlex = A2(_user$project$Css$property, 'display', 'flex');
var _user$project$Css$textEmphasisColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'text-emphasis-color', c.value);
};
var _user$project$Css$textDecorationColor = function (c) {
	return A3(_user$project$Css$propertyWithWarnings, c.warnings, 'text-decoration-color', c.value);
};
var _user$project$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			_user$project$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[argA.value, argB.value, argC.value, argD.value])));
	});
var _user$project$Css$textShadow4 = _user$project$Css$prop4('text-shadow');
var _user$project$Css$padding4 = _user$project$Css$prop4('padding');
var _user$project$Css$margin4 = _user$project$Css$prop4('margin');
var _user$project$Css$borderImageOutset4 = _user$project$Css$prop4('border-image-outset');
var _user$project$Css$borderImageWidth4 = _user$project$Css$prop4('border-image-width');
var _user$project$Css$borderRadius4 = _user$project$Css$prop4('border-radius');
var _user$project$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			_user$project$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[argA.value, argB.value, argC.value])));
	});
var _user$project$Css$textShadow3 = _user$project$Css$prop3('text-shadow');
var _user$project$Css$textIndent3 = _user$project$Css$prop3('text-indent');
var _user$project$Css$padding3 = _user$project$Css$prop3('padding');
var _user$project$Css$margin3 = _user$project$Css$prop3('margin');
var _user$project$Css$border3 = _user$project$Css$prop3('border');
var _user$project$Css$borderTop3 = _user$project$Css$prop3('border-top');
var _user$project$Css$borderBottom3 = _user$project$Css$prop3('border-bottom');
var _user$project$Css$borderLeft3 = _user$project$Css$prop3('border-left');
var _user$project$Css$borderRight3 = _user$project$Css$prop3('border-right');
var _user$project$Css$borderBlockStart3 = _user$project$Css$prop3('border-block-start');
var _user$project$Css$borderBlockEnd3 = _user$project$Css$prop3('border-block-end');
var _user$project$Css$borderInlineStart3 = _user$project$Css$prop3('border-block-start');
var _user$project$Css$borderInlineEnd3 = _user$project$Css$prop3('border-block-end');
var _user$project$Css$borderImageOutset3 = _user$project$Css$prop3('border-image-outset');
var _user$project$Css$borderImageWidth3 = _user$project$Css$prop3('border-image-width');
var _user$project$Css$borderRadius3 = _user$project$Css$prop3('border-radius');
var _user$project$Css$fontVariant3 = _user$project$Css$prop3('font-variant');
var _user$project$Css$fontVariantNumeric3 = _user$project$Css$prop3('font-variant-numeric');
var _user$project$Css$textDecoration3 = _user$project$Css$prop3('text-decoration');
var _user$project$Css$textDecorations3 = function (_p10) {
	return A2(
		_user$project$Css$prop3,
		'text-decoration',
		_user$project$Css$valuesOrNone(_p10));
};
var _user$project$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			_user$project$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[argA.value, argB.value])));
	});
var _user$project$Css$textShadow2 = _user$project$Css$prop2('text-shadow');
var _user$project$Css$textIndent2 = _user$project$Css$prop2('text-indent');
var _user$project$Css$padding2 = _user$project$Css$prop2('padding');
var _user$project$Css$margin2 = _user$project$Css$prop2('margin');
var _user$project$Css$border2 = _user$project$Css$prop2('border');
var _user$project$Css$borderTop2 = _user$project$Css$prop2('border-top');
var _user$project$Css$borderBottom2 = _user$project$Css$prop2('border-bottom');
var _user$project$Css$borderLeft2 = _user$project$Css$prop2('border-left');
var _user$project$Css$borderRight2 = _user$project$Css$prop2('border-right');
var _user$project$Css$borderBlockStart2 = _user$project$Css$prop2('border-block-start');
var _user$project$Css$borderBlockEnd2 = _user$project$Css$prop2('border-block-end');
var _user$project$Css$borderInlineStart2 = _user$project$Css$prop2('border-block-start');
var _user$project$Css$borderInlineEnd2 = _user$project$Css$prop2('border-block-end');
var _user$project$Css$borderImageOutset2 = _user$project$Css$prop2('border-image-outset');
var _user$project$Css$borderImageWidth2 = _user$project$Css$prop2('border-image-width');
var _user$project$Css$borderTopWidth2 = _user$project$Css$prop2('border-top-width');
var _user$project$Css$borderBottomLeftRadius2 = _user$project$Css$prop2('border-bottom-left-radius');
var _user$project$Css$borderBottomRightRadius2 = _user$project$Css$prop2('border-bottom-right-radius');
var _user$project$Css$borderTopLeftRadius2 = _user$project$Css$prop2('border-top-left-radius');
var _user$project$Css$borderTopRightRadius2 = _user$project$Css$prop2('border-top-right-radius');
var _user$project$Css$borderRadius2 = _user$project$Css$prop2('border-radius');
var _user$project$Css$borderSpacing2 = _user$project$Css$prop2('border-spacing');
var _user$project$Css$fontVariant2 = _user$project$Css$prop2('font-variant');
var _user$project$Css$fontVariantNumeric2 = _user$project$Css$prop2('font-variant-numeric');
var _user$project$Css$textDecoration2 = _user$project$Css$prop2('text-decoration');
var _user$project$Css$textDecorations2 = function (_p11) {
	return A2(
		_user$project$Css$prop2,
		'text-decoration',
		_user$project$Css$valuesOrNone(_p11));
};
var _user$project$Css$prop1 = F2(
	function (key, arg) {
		return A2(_user$project$Css$property, key, arg.value);
	});
var _user$project$Css$textRendering = _user$project$Css$prop1('text-rendering');
var _user$project$Css$textOrientation = _user$project$Css$prop1('text-orientation');
var _user$project$Css$textOverflow = _user$project$Css$prop1('text-overflow');
var _user$project$Css$textShadow = _user$project$Css$prop1('text-shadow');
var _user$project$Css$textIndent = _user$project$Css$prop1('text-indent');
var _user$project$Css$textTransform = _user$project$Css$prop1('text-transform');
var _user$project$Css$display = _user$project$Css$prop1('display');
var _user$project$Css$opacity = _user$project$Css$prop1('opacity');
var _user$project$Css$width = _user$project$Css$prop1('width');
var _user$project$Css$maxWidth = _user$project$Css$prop1('max-width');
var _user$project$Css$minWidth = _user$project$Css$prop1('min-width');
var _user$project$Css$height = _user$project$Css$prop1('height');
var _user$project$Css$minHeight = _user$project$Css$prop1('min-height');
var _user$project$Css$maxHeight = _user$project$Css$prop1('max-height');
var _user$project$Css$padding = _user$project$Css$prop1('padding');
var _user$project$Css$paddingBlockStart = _user$project$Css$prop1('padding-block-start');
var _user$project$Css$paddingBlockEnd = _user$project$Css$prop1('padding-block-end');
var _user$project$Css$paddingInlineStart = _user$project$Css$prop1('padding-inline-start');
var _user$project$Css$paddingInlineEnd = _user$project$Css$prop1('padding-inline-end');
var _user$project$Css$paddingTop = _user$project$Css$prop1('padding-top');
var _user$project$Css$paddingBottom = _user$project$Css$prop1('padding-bottom');
var _user$project$Css$paddingRight = _user$project$Css$prop1('padding-right');
var _user$project$Css$paddingLeft = _user$project$Css$prop1('padding-left');
var _user$project$Css$margin = _user$project$Css$prop1('margin');
var _user$project$Css$marginTop = _user$project$Css$prop1('margin-top');
var _user$project$Css$marginBottom = _user$project$Css$prop1('margin-bottom');
var _user$project$Css$marginRight = _user$project$Css$prop1('margin-right');
var _user$project$Css$marginLeft = _user$project$Css$prop1('margin-left');
var _user$project$Css$marginBlockStart = _user$project$Css$prop1('margin-block-start');
var _user$project$Css$marginBlockEnd = _user$project$Css$prop1('margin-block-end');
var _user$project$Css$marginInlineStart = _user$project$Css$prop1('margin-inline-start');
var _user$project$Css$marginInlineEnd = _user$project$Css$prop1('margin-inline-end');
var _user$project$Css$top = _user$project$Css$prop1('top');
var _user$project$Css$bottom = _user$project$Css$prop1('bottom');
var _user$project$Css$left = _user$project$Css$prop1('left');
var _user$project$Css$right = _user$project$Css$prop1('right');
var _user$project$Css$border = _user$project$Css$prop1('border');
var _user$project$Css$borderTop = _user$project$Css$prop1('border-top');
var _user$project$Css$borderBottom = _user$project$Css$prop1('border-bottom');
var _user$project$Css$borderLeft = _user$project$Css$prop1('border-left');
var _user$project$Css$borderRight = _user$project$Css$prop1('border-right');
var _user$project$Css$borderBlockStart = _user$project$Css$prop1('border-block-start');
var _user$project$Css$borderBlockEnd = _user$project$Css$prop1('border-block-end');
var _user$project$Css$borderInlineStart = _user$project$Css$prop1('border-block-start');
var _user$project$Css$borderInlineEnd = _user$project$Css$prop1('border-block-end');
var _user$project$Css$borderImageOutset = _user$project$Css$prop1('border-image-outset');
var _user$project$Css$borderImageWidth = _user$project$Css$prop1('border-image-width');
var _user$project$Css$borderBlockEndStyle = _user$project$Css$prop1('border-block-end-style');
var _user$project$Css$borderBlockStartStyle = _user$project$Css$prop1('border-block-start-style');
var _user$project$Css$borderInlineEndStyle = _user$project$Css$prop1('border-inline-end-style');
var _user$project$Css$borderBottomStyle = _user$project$Css$prop1('border-bottom-style');
var _user$project$Css$borderInlineStartStyle = _user$project$Css$prop1('border-inline-start-style');
var _user$project$Css$borderLeftStyle = _user$project$Css$prop1('border-left-style');
var _user$project$Css$borderRightStyle = _user$project$Css$prop1('border-right-style');
var _user$project$Css$borderTopStyle = _user$project$Css$prop1('border-top-style');
var _user$project$Css$borderStyle = _user$project$Css$prop1('border-style');
var _user$project$Css$borderCollapse = _user$project$Css$prop1('border-collapse');
var _user$project$Css$borderBottomWidth = _user$project$Css$prop1('border-bottom-width');
var _user$project$Css$borderInlineEndWidth = _user$project$Css$prop1('border-inline-end-width');
var _user$project$Css$borderLeftWidth = _user$project$Css$prop1('border-left-width');
var _user$project$Css$borderRightWidth = _user$project$Css$prop1('border-right-width');
var _user$project$Css$borderBlockEndWidth = _user$project$Css$prop1('border-block-end-width');
var _user$project$Css$borderBlockStartWidth = _user$project$Css$prop1('border-block-start-width');
var _user$project$Css$borderInlineStartWidth = _user$project$Css$prop1('border-inline-start-width');
var _user$project$Css$borderTopWidth = _user$project$Css$prop1('border-top-width');
var _user$project$Css$borderBottomLeftRadius = _user$project$Css$prop1('border-bottom-left-radius');
var _user$project$Css$borderBottomRightRadius = _user$project$Css$prop1('border-bottom-right-radius');
var _user$project$Css$borderTopLeftRadius = _user$project$Css$prop1('border-top-left-radius');
var _user$project$Css$borderTopRightRadius = _user$project$Css$prop1('border-top-right-radius');
var _user$project$Css$borderRadius = _user$project$Css$prop1('border-radius');
var _user$project$Css$borderSpacing = _user$project$Css$prop1('border-spacing');
var _user$project$Css$overflow = _user$project$Css$prop1('overflow');
var _user$project$Css$overflowX = _user$project$Css$prop1('overflow-x');
var _user$project$Css$overflowY = _user$project$Css$prop1('overflow-y');
var _user$project$Css$whiteSpace = _user$project$Css$prop1('white-space');
var _user$project$Css$lineHeight = _user$project$Css$prop1('line-height');
var _user$project$Css$letterSpacing = _user$project$Css$prop1('letter-spacing');
var _user$project$Css$fontFamily = _user$project$Css$prop1('font-family');
var _user$project$Css$fontFamilies = function (_p12) {
	return A2(
		_user$project$Css$prop1,
		'font-family',
		_user$project$Css$stringsToValue(_p12));
};
var _user$project$Css$fontSize = _user$project$Css$prop1('font-size');
var _user$project$Css$fontStyle = _user$project$Css$prop1('font-style');
var _user$project$Css$fontVariant = _user$project$Css$prop1('font-variant');
var _user$project$Css$fontVariantLigatures = _user$project$Css$prop1('font-variant-ligatures');
var _user$project$Css$fontVariantCaps = _user$project$Css$prop1('font-variant-caps');
var _user$project$Css$fontVariantNumeric = _user$project$Css$prop1('font-variant-numeric');
var _user$project$Css$fontVariantNumerics = function (_p13) {
	return A2(
		_user$project$Css$prop1,
		'font-variant-numeric',
		_user$project$Css$valuesOrNone(_p13));
};
var _user$project$Css$textDecoration = _user$project$Css$prop1('text-decoration');
var _user$project$Css$textDecorations = function (_p14) {
	return A2(
		_user$project$Css$prop1,
		'text-decoration',
		_user$project$Css$valuesOrNone(_p14));
};
var _user$project$Css$textDecorationLine = _user$project$Css$prop1('text-decoration-line');
var _user$project$Css$textDecorationLines = function (_p15) {
	return A2(
		_user$project$Css$prop1,
		'text-decoration-line',
		_user$project$Css$valuesOrNone(_p15));
};
var _user$project$Css$textDecorationStyle = _user$project$Css$prop1('text-decoration-style');
var _user$project$Css$position = _user$project$Css$prop1('position');
var _user$project$Css$textBottom = _user$project$Css$prop1('text-bottom');
var _user$project$Css$textTop = _user$project$Css$prop1('text-top');
var _user$project$Css$super = _user$project$Css$prop1('super');
var _user$project$Css$sub = _user$project$Css$prop1('sub');
var _user$project$Css$baseline = _user$project$Css$prop1('baseline');
var _user$project$Css$middle = _user$project$Css$prop1('middle');
var _user$project$Css$stretch = _user$project$Css$prop1('stretch');
var _user$project$Css$flexEnd = _user$project$Css$prop1('flex-end');
var _user$project$Css$flexStart = _user$project$Css$prop1('flex-start');
var _user$project$Css$order = _user$project$Css$prop1('order');
var _user$project$Css$flexFlow2 = _user$project$Css$prop2('flex-flow');
var _user$project$Css$flexFlow1 = _user$project$Css$prop1('flex-flow');
var _user$project$Css$flexDirection = _user$project$Css$prop1('flex-direction');
var _user$project$Css$flexWrap = _user$project$Css$prop1('flex-wrap');
var _user$project$Css$flexShrink = _user$project$Css$prop1('flex-shrink');
var _user$project$Css$flexGrow = _user$project$Css$prop1('flex-grow');
var _user$project$Css$flexBasis = _user$project$Css$prop1('flex-basis');
var _user$project$Css$flex3 = _user$project$Css$prop3('flex');
var _user$project$Css$flex2 = _user$project$Css$prop2('flex');
var _user$project$Css$flex = _user$project$Css$prop1('flex');
var _user$project$Css$transformStyle = _user$project$Css$prop1('transform-style');
var _user$project$Css$boxSizing = _user$project$Css$prop1('box-sizing');
var _user$project$Css$transformBox = _user$project$Css$prop1('transform-box');
var _user$project$Css$transforms = function (_p16) {
	return A2(
		_user$project$Css$prop1,
		'transform',
		_user$project$Css$valuesOrNone(_p16));
};
var _user$project$Css$transform = function (only) {
	return _user$project$Css$transforms(
		_elm_lang$core$Native_List.fromArray(
			[only]));
};
var _user$project$Css$true = _user$project$Css$prop1('true');
var _user$project$Css$matchParent = _user$project$Css$prop1('match-parent');
var _user$project$Css$end = _user$project$Css$prop1('end');
var _user$project$Css$start = _user$project$Css$prop1('start');
var _user$project$Css$justifyAll = _user$project$Css$prop1('justify-all');
var _user$project$Css$textJustify = _user$project$Css$prop1('text-justify');
var _user$project$Css$center = _user$project$Css$prop1('center');
var _user$project$Css$important = _user$project$Css_Preprocess$mapLastProperty(
	function (property) {
		return _elm_lang$core$Native_Utils.update(
			property,
			{important: true});
	});
var _user$project$Css$all = _user$project$Css$prop1('all');
var _user$project$Css$combineLengths = F3(
	function (operation, first, second) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$filter,
				function (_p17) {
					return _elm_lang$core$Basics$not(
						_elm_lang$core$String$isEmpty(_p17));
				},
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$core$Basics$toString(
						A2(operation, first.numericValue, second.numericValue)),
						first.unitLabel
					])));
		return _elm_lang$core$Native_Utils.update(
			first,
			{value: value});
	});
var _user$project$Css_ops = _user$project$Css_ops || {};
_user$project$Css_ops['|*|'] = _user$project$Css$combineLengths(
	F2(
		function (x, y) {
			return x * y;
		}));
var _user$project$Css_ops = _user$project$Css_ops || {};
_user$project$Css_ops['|/|'] = _user$project$Css$combineLengths(
	F2(
		function (x, y) {
			return x / y;
		}));
var _user$project$Css_ops = _user$project$Css_ops || {};
_user$project$Css_ops['|-|'] = _user$project$Css$combineLengths(
	F2(
		function (x, y) {
			return x - y;
		}));
var _user$project$Css_ops = _user$project$Css_ops || {};
_user$project$Css_ops['|+|'] = _user$project$Css$combineLengths(
	F2(
		function (x, y) {
			return x + y;
		}));
var _user$project$Css$getOverloadedProperty = F3(
	function (functionName, desiredKey, mixin) {
		getOverloadedProperty:
		while (true) {
			var _p18 = mixin;
			switch (_p18.ctor) {
				case 'AppendProperty':
					return A2(_user$project$Css$property, desiredKey, _p18._0.key);
				case 'ExtendSelector':
					return A3(
						_user$project$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for selector ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				case 'NestSnippet':
					return A3(
						_user$project$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for combinator ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				case 'WithPseudoElement':
					return A3(
						_user$project$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for pseudo-element setter ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				case 'WithMedia':
					return A3(
						_user$project$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for media query ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				default:
					if (_p18._0.ctor === '[]') {
						return A3(
							_user$project$Css$propertyWithWarnings,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(_elm_lang$core$Basics_ops['++'], functionName, ' with empty mixin. '))
								]),
							desiredKey,
							'');
					} else {
						if (_p18._0._1.ctor === '[]') {
							var _v11 = functionName,
								_v12 = desiredKey,
								_v13 = _p18._0._0;
							functionName = _v11;
							desiredKey = _v12;
							mixin = _v13;
							continue getOverloadedProperty;
						} else {
							var _v14 = functionName,
								_v15 = desiredKey,
								_v16 = _user$project$Css_Preprocess$ApplyMixins(_p18._0._1);
							functionName = _v14;
							desiredKey = _v15;
							mixin = _v16;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var _user$project$Css$cssFunction = F2(
	function (funcName, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			funcName,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$String$join, ', ', args),
					')')));
	});
var _user$project$Css$tv = _user$project$Css_Structure$MediaQuery('tv');
var _user$project$Css$projection = _user$project$Css_Structure$MediaQuery('projection');
var _user$project$Css$print = _user$project$Css_Structure$MediaQuery('print');
var _user$project$Css$screen = _user$project$Css_Structure$MediaQuery('screen');
var _user$project$Css$NumberedWeight = F2(
	function (a, b) {
		return {value: a, fontWeight: b};
	});
var _user$project$Css$ExplicitLength = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return {value: a, numericValue: b, units: c, unitLabel: d, length: e, lengthOrAuto: f, lengthOrNumber: g, lengthOrNone: h, lengthOrMinMaxDimension: i, lengthOrNoneOrMinMaxDimension: j, textIndent: k, flexBasis: l, lengthOrNumberOrAutoOrNoneOrContent: m, fontSize: n};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$Css$NonMixable = {};
var _user$project$Css$BasicProperty = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return function (_1) {
																											return function (_2) {
																												return function (_3) {
																													return function (_4) {
																														return function (_5) {
																															return {value: a, all: b, alignItems: c, boxSizing: d, display: e, flexBasis: f, flexWrap: g, flexDirection: h, flexDirectionOrWrap: i, none: j, number: k, overflow: l, textDecorationLine: m, textRendering: n, textIndent: o, textDecorationStyle: p, length: q, lengthOrAuto: r, lengthOrNone: s, lengthOrNumber: t, lengthOrMinMaxDimension: u, lengthOrNoneOrMinMaxDimension: v, lengthOrNumberOrAutoOrNoneOrContent: w, fontFamily: x, fontSize: y, fontStyle: z, fontWeight: _1, fontVariant: _2, units: _3, numericValue: _4, unitLabel: _5};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$Css$Compatible = {ctor: 'Compatible'};
var _user$project$Css$transparent = {
	value: 'transparent',
	color: _user$project$Css$Compatible,
	warnings: _elm_lang$core$Native_List.fromArray(
		[])
};
var _user$project$Css$currentColor = {
	value: 'currentColor',
	color: _user$project$Css$Compatible,
	warnings: _elm_lang$core$Native_List.fromArray(
		[])
};
var _user$project$Css$visible = {value: 'visible', overflow: _user$project$Css$Compatible};
var _user$project$Css$scroll = {value: 'scroll', overflow: _user$project$Css$Compatible};
var _user$project$Css$hidden = {value: 'hidden', overflow: _user$project$Css$Compatible, borderStyle: _user$project$Css$Compatible};
var _user$project$Css$rgb = F3(
	function (red, green, blue) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(blue, 255) > 0)))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255. rgb(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									') is not valid.'))))))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return {
			value: A2(
				_user$project$Css$cssFunction,
				'rgb',
				A2(
					_elm_lang$core$List$map,
					_user$project$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[red, green, blue]))),
			color: _user$project$Css$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: 1
		};
	});
var _user$project$Css$rgba = F4(
	function (red, green, blue, alpha) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0)))))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255, and the alpha in RGBA must be between 0 and 1. rgba(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									A2(
										_elm_lang$core$Basics_ops['++'],
										', ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(alpha),
											') is not valid.'))))))))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return {
			value: A2(
				_user$project$Css$cssFunction,
				'rgba',
				A2(
					_elm_lang$core$List$map,
					_user$project$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[red, green, blue, alpha]))),
			color: _user$project$Css$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: 1
		};
	});
var _user$project$Css$hex = function (str) {
	var value = _elm_lang$core$Native_Utils.eq(
		A3(_elm_lang$core$String$slice, 0, 1, str),
		'#') ? str : A2(_elm_lang$core$Basics_ops['++'], '#', str);
	var warnings = A2(
		_elm_lang$core$Regex$contains,
		_elm_lang$core$Regex$regex('^#([a-fA-F0-9]{8}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{3})$'),
		value) ? _elm_lang$core$Native_List.fromArray(
		[]) : _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				['The syntax of a hex-color is a token whose value consists of 3, 4, 6, or 8 hexadecimal digits.', value, 'is not valid.', 'Please see: https://drafts.csswg.org/css-color/#hex-notation']))
		]);
	return {value: value, color: _user$project$Css$Compatible, red: 0, green: 0, blue: 0, alpha: 1, warnings: warnings};
};
var _user$project$Css$hslaToRgba = F6(
	function (value, warnings, hue, saturation, lightness, alpha) {
		var blue = 0;
		var green = 0;
		var red = 0;
		return {value: value, color: _user$project$Css$Compatible, red: red, green: green, blue: blue, alpha: alpha, warnings: warnings};
	});
var _user$project$Css$hsl = F3(
	function (hue, saturation, lightness) {
		var valuesList = _elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css$numberToString(hue),
				_user$project$Css$numericalPercentageToString(saturation),
				_user$project$Css$numericalPercentageToString(lightness)
			]);
		var value = A2(_user$project$Css$cssFunction, 'hsl', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0)))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'HSL color values must have an H value between 0 and 360 (as in degrees) and S and L values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.'))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return A6(_user$project$Css$hslaToRgba, value, warnings, hue, saturation, lightness, 1);
	});
var _user$project$Css$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		var valuesList = _elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css$numberToString(hue),
				_user$project$Css$numericalPercentageToString(saturation),
				_user$project$Css$numericalPercentageToString(lightness),
				_user$project$Css$numberToString(alpha)
			]);
		var value = A2(_user$project$Css$cssFunction, 'hsla', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0)))))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'HSLA color values must have an H value between 0 and 360 (as in degrees) and S, L, and A values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.'))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return A6(_user$project$Css$hslaToRgba, value, warnings, hue, saturation, lightness, alpha);
	});
var _user$project$Css$optimizeSpeed = {value: 'optimizeSpeed', textRendering: _user$project$Css$Compatible};
var _user$project$Css$optimizeLegibility = {value: 'optimizeLegibility', textRendering: _user$project$Css$Compatible};
var _user$project$Css$geometricPrecision = {value: 'geometricPrecision', textRendering: _user$project$Css$Compatible};
var _user$project$Css$hanging = {value: 'hanging', textIndent: _user$project$Css$Compatible};
var _user$project$Css$eachLine = {value: 'each-line', textIndent: _user$project$Css$Compatible};
var _user$project$Css$mixed = {value: 'mixed', textOrientation: _user$project$Css$Compatible};
var _user$project$Css$upright = {value: 'upright', textOrientation: _user$project$Css$Compatible};
var _user$project$Css$sideways = {value: 'sideways', textOrientation: _user$project$Css$Compatible};
var _user$project$Css$capitalize = {value: 'capitalize', textTransform: _user$project$Css$Compatible};
var _user$project$Css$uppercase = {value: 'uppercase', textTransform: _user$project$Css$Compatible};
var _user$project$Css$lowercase = {value: 'lowercase', textTransform: _user$project$Css$Compatible};
var _user$project$Css$fullWidth = {value: 'full-width', textTransform: _user$project$Css$Compatible};
var _user$project$Css$ellipsis = {value: 'ellipsis', textOverflow: _user$project$Css$Compatible};
var _user$project$Css$clip = {value: 'clip', textOverflow: _user$project$Css$Compatible};
var _user$project$Css$wavy = {value: 'wavy', textDecorationStyle: _user$project$Css$Compatible};
var _user$project$Css$dotted = {value: 'dotted', borderStyle: _user$project$Css$Compatible, textDecorationStyle: _user$project$Css$Compatible};
var _user$project$Css$dashed = {value: 'dashed', borderStyle: _user$project$Css$Compatible, textDecorationStyle: _user$project$Css$Compatible};
var _user$project$Css$solid = {value: 'solid', borderStyle: _user$project$Css$Compatible, textDecorationStyle: _user$project$Css$Compatible};
var _user$project$Css$double = {value: 'double', borderStyle: _user$project$Css$Compatible, textDecorationStyle: _user$project$Css$Compatible};
var _user$project$Css$groove = {value: 'groove', borderStyle: _user$project$Css$Compatible};
var _user$project$Css$ridge = {value: 'ridge', borderStyle: _user$project$Css$Compatible};
var _user$project$Css$inset = {value: 'inset', borderStyle: _user$project$Css$Compatible};
var _user$project$Css$outset = {value: 'outset', borderStyle: _user$project$Css$Compatible};
var _user$project$Css$separate = {value: 'separate', borderCollapse: _user$project$Css$Compatible};
var _user$project$Css$collapse = {value: 'collapse', borderCollapse: _user$project$Css$Compatible};
var _user$project$Css$lengthConverter = F3(
	function (units, unitLabel, num) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Css$numberToString(num),
				unitLabel),
			numericValue: num,
			units: units,
			unitLabel: unitLabel,
			length: _user$project$Css$Compatible,
			lengthOrAuto: _user$project$Css$Compatible,
			lengthOrNumber: _user$project$Css$Compatible,
			lengthOrNone: _user$project$Css$Compatible,
			lengthOrMinMaxDimension: _user$project$Css$Compatible,
			lengthOrNoneOrMinMaxDimension: _user$project$Css$Compatible,
			textIndent: _user$project$Css$Compatible,
			flexBasis: _user$project$Css$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible,
			fontSize: _user$project$Css$Compatible
		};
	});
var _user$project$Css$angleConverter = F2(
	function (suffix, num) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Css$numberToString(num),
				suffix),
			angle: _user$project$Css$Compatible
		};
	});
var _user$project$Css$deg = _user$project$Css$angleConverter('deg');
var _user$project$Css$grad = _user$project$Css$angleConverter('grad');
var _user$project$Css$rad = _user$project$Css$angleConverter('rad');
var _user$project$Css$turn = _user$project$Css$angleConverter('turn');
var _user$project$Css$matrix = F6(
	function (a, b, c, d, tx, ty) {
		return {
			value: A2(
				_user$project$Css$cssFunction,
				'matrix',
				A2(
					_elm_lang$core$List$map,
					_user$project$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[a, b, c, d, tx, ty]))),
			transform: _user$project$Css$Compatible
		};
	});
var _user$project$Css$matrix3d = function (a1) {
	return function (a2) {
		return function (a3) {
			return function (a4) {
				return function (b1) {
					return function (b2) {
						return function (b3) {
							return function (b4) {
								return function (c1) {
									return function (c2) {
										return function (c3) {
											return function (c4) {
												return function (d1) {
													return function (d2) {
														return function (d3) {
															return function (d4) {
																return {
																	value: A2(
																		_user$project$Css$cssFunction,
																		'matrix3d',
																		A2(
																			_elm_lang$core$List$map,
																			_user$project$Css$numberToString,
																			_elm_lang$core$Native_List.fromArray(
																				[a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4]))),
																	transform: _user$project$Css$Compatible
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$Css$perspective = function (l) {
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'perspective',
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$numberToString(l)
				])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$rotate = function (_p19) {
	var _p20 = _p19;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'rotate',
			_elm_lang$core$Native_List.fromArray(
				[_p20.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$rotateX = function (_p21) {
	var _p22 = _p21;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'rotateX',
			_elm_lang$core$Native_List.fromArray(
				[_p22.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$rotateY = function (_p23) {
	var _p24 = _p23;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'rotateY',
			_elm_lang$core$Native_List.fromArray(
				[_p24.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$rotateZ = function (_p25) {
	var _p26 = _p25;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'rotateZ',
			_elm_lang$core$Native_List.fromArray(
				[_p26.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$rotate3d = F4(
	function (x, y, z, _p27) {
		var _p28 = _p27;
		var coordsAsStrings = A2(
			_elm_lang$core$List$map,
			_user$project$Css$numberToString,
			_elm_lang$core$Native_List.fromArray(
				[x, y, z]));
		return {
			value: A2(
				_user$project$Css$cssFunction,
				'rotate3d',
				A2(
					_elm_lang$core$Basics_ops['++'],
					coordsAsStrings,
					_elm_lang$core$Native_List.fromArray(
						[_p28.value]))),
			transform: _user$project$Css$Compatible
		};
	});
var _user$project$Css$scale = function (x) {
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'scale',
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$numberToString(x)
				])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$scale2 = F2(
	function (x, y) {
		return {
			value: A2(
				_user$project$Css$cssFunction,
				'scale',
				A2(
					_elm_lang$core$List$map,
					_user$project$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[x, y]))),
			transform: _user$project$Css$Compatible
		};
	});
var _user$project$Css$scaleX = function (x) {
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'scaleX',
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$numberToString(x)
				])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$scaleY = function (y) {
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'scaleY',
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$numberToString(y)
				])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$scale3d = F3(
	function (x, y, z) {
		return {
			value: A2(
				_user$project$Css$cssFunction,
				'scale3d',
				A2(
					_elm_lang$core$List$map,
					_user$project$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[x, y, z]))),
			transform: _user$project$Css$Compatible
		};
	});
var _user$project$Css$skew = function (_p29) {
	var _p30 = _p29;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'skew',
			_elm_lang$core$Native_List.fromArray(
				[_p30.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$skew2 = F2(
	function (ax, ay) {
		return {
			value: A2(
				_user$project$Css$cssFunction,
				'skew',
				_elm_lang$core$Native_List.fromArray(
					[ax.value, ay.value])),
			transform: _user$project$Css$Compatible
		};
	});
var _user$project$Css$skewX = function (_p31) {
	var _p32 = _p31;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'skewX',
			_elm_lang$core$Native_List.fromArray(
				[_p32.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$skewY = function (_p33) {
	var _p34 = _p33;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'skewY',
			_elm_lang$core$Native_List.fromArray(
				[_p34.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$translate = function (_p35) {
	var _p36 = _p35;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'translate',
			_elm_lang$core$Native_List.fromArray(
				[_p36.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$translate2 = F2(
	function (tx, ty) {
		return {
			value: A2(
				_user$project$Css$cssFunction,
				'translate',
				_elm_lang$core$Native_List.fromArray(
					[tx.value, ty.value])),
			transform: _user$project$Css$Compatible
		};
	});
var _user$project$Css$translateX = function (_p37) {
	var _p38 = _p37;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'translateX',
			_elm_lang$core$Native_List.fromArray(
				[_p38.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$translateY = function (_p39) {
	var _p40 = _p39;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'translateY',
			_elm_lang$core$Native_List.fromArray(
				[_p40.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$translateZ = function (_p41) {
	var _p42 = _p41;
	return {
		value: A2(
			_user$project$Css$cssFunction,
			'translateZ',
			_elm_lang$core$Native_List.fromArray(
				[_p42.value])),
		transform: _user$project$Css$Compatible
	};
};
var _user$project$Css$translate3d = F3(
	function (tx, ty, tz) {
		return {
			value: A2(
				_user$project$Css$cssFunction,
				'translate3d',
				_elm_lang$core$Native_List.fromArray(
					[tx.value, ty.value, tz.value])),
			transform: _user$project$Css$Compatible
		};
	});
var _user$project$Css$fillBox = {value: 'fill-box', transformBox: _user$project$Css$Compatible};
var _user$project$Css$contentBox = {value: 'content-box', boxSizing: _user$project$Css$Compatible};
var _user$project$Css$borderBox = {value: 'border-box', boxSizing: _user$project$Css$Compatible};
var _user$project$Css$viewBox = {value: 'view-box', transformBox: _user$project$Css$Compatible};
var _user$project$Css$preserve3d = {value: 'preserve-3d', transformStyle: _user$project$Css$Compatible};
var _user$project$Css$flat = {value: 'flat', transformStyle: _user$project$Css$Compatible};
var _user$project$Css$content = {value: 'content', flexBasis: _user$project$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible};
var _user$project$Css$wrap = {value: 'wrap', flexWrap: _user$project$Css$Compatible, flexDirectionOrWrap: _user$project$Css$Compatible};
var _user$project$Css$wrapReverse = _elm_lang$core$Native_Utils.update(
	_user$project$Css$wrap,
	{value: 'wrap-reverse'});
var _user$project$Css$row = {value: 'row', flexDirection: _user$project$Css$Compatible, flexDirectionOrWrap: _user$project$Css$Compatible};
var _user$project$Css$rowReverse = _elm_lang$core$Native_Utils.update(
	_user$project$Css$row,
	{value: 'row-reverse'});
var _user$project$Css$column = _elm_lang$core$Native_Utils.update(
	_user$project$Css$row,
	{value: 'column'});
var _user$project$Css$columnReverse = _elm_lang$core$Native_Utils.update(
	_user$project$Css$row,
	{value: 'column-reverse'});
var _user$project$Css$underline = {value: 'underline', textDecorationLine: _user$project$Css$Compatible};
var _user$project$Css$overline = {value: 'overline', textDecorationLine: _user$project$Css$Compatible};
var _user$project$Css$lineThrough = {value: 'line-through', textDecorationLine: _user$project$Css$Compatible};
var _user$project$Css$block = {value: 'block', display: _user$project$Css$Compatible};
var _user$project$Css$inlineBlock = {value: 'inline-block', display: _user$project$Css$Compatible};
var _user$project$Css$inline = {value: 'inline', display: _user$project$Css$Compatible};
var _user$project$Css$none = {value: 'none', none: _user$project$Css$Compatible, lengthOrNone: _user$project$Css$Compatible, lengthOrNoneOrMinMaxDimension: _user$project$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible, textDecorationLine: _user$project$Css$Compatible, display: _user$project$Css$Compatible, transform: _user$project$Css$Compatible, borderStyle: _user$project$Css$Compatible};
var _user$project$Css$auto = {value: 'auto', flexBasis: _user$project$Css$Compatible, overflow: _user$project$Css$Compatible, textRendering: _user$project$Css$Compatible, lengthOrAuto: _user$project$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible, alignItemsOrAuto: _user$project$Css$Compatible};
var _user$project$Css$noWrap = {value: 'nowrap', whiteSpace: _user$project$Css$Compatible, flexWrap: _user$project$Css$Compatible, flexDirectionOrWrap: _user$project$Css$Compatible};
var _user$project$Css$fillAvailable = {value: 'fill-available', minMaxDimension: _user$project$Css$Compatible, lengthOrMinMaxDimension: _user$project$Css$Compatible, lengthOrNoneOrMinMaxDimension: _user$project$Css$Compatible};
var _user$project$Css$maxContent = _elm_lang$core$Native_Utils.update(
	_user$project$Css$fillAvailable,
	{value: 'max-content'});
var _user$project$Css$minContent = _elm_lang$core$Native_Utils.update(
	_user$project$Css$fillAvailable,
	{value: 'min-content'});
var _user$project$Css$fitContent = _elm_lang$core$Native_Utils.update(
	_user$project$Css$fillAvailable,
	{value: 'fit-content'});
var _user$project$Css$static = {value: 'static', position: _user$project$Css$Compatible};
var _user$project$Css$fixed = {value: 'fixed', position: _user$project$Css$Compatible};
var _user$project$Css$sticky = {value: 'sticky', position: _user$project$Css$Compatible};
var _user$project$Css$relative = {value: 'relative', position: _user$project$Css$Compatible};
var _user$project$Css$absolute = {value: 'absolute', position: _user$project$Css$Compatible};
var _user$project$Css$serif = {value: 'serif', fontFamily: _user$project$Css$Compatible};
var _user$project$Css$sansSerif = {value: 'sans-serif', fontFamily: _user$project$Css$Compatible};
var _user$project$Css$monospace = {value: 'monospace', fontFamily: _user$project$Css$Compatible};
var _user$project$Css$cursive = {value: 'cursive', fontFamily: _user$project$Css$Compatible};
var _user$project$Css$fantasy = {value: 'fantasy', fontFamily: _user$project$Css$Compatible};
var _user$project$Css$xxSmall = {value: 'xx-small', fontSize: _user$project$Css$Compatible};
var _user$project$Css$xSmall = {value: 'x-small', fontSize: _user$project$Css$Compatible};
var _user$project$Css$small = {value: 'small', fontSize: _user$project$Css$Compatible};
var _user$project$Css$medium = {value: 'medium', fontSize: _user$project$Css$Compatible};
var _user$project$Css$large = {value: 'large', fontSize: _user$project$Css$Compatible};
var _user$project$Css$xLarge = {value: 'x-large', fontSize: _user$project$Css$Compatible};
var _user$project$Css$xxLarge = {value: 'xx-large', fontSize: _user$project$Css$Compatible};
var _user$project$Css$smaller = {value: 'smaller', fontSize: _user$project$Css$Compatible};
var _user$project$Css$larger = {value: 'larger', fontSize: _user$project$Css$Compatible};
var _user$project$Css$normal = {
	value: 'normal',
	warnings: _elm_lang$core$Native_List.fromArray(
		[]),
	fontStyle: _user$project$Css$Compatible,
	featureTagValue: _user$project$Css$Compatible
};
var _user$project$Css$italic = {value: 'italic', fontStyle: _user$project$Css$Compatible};
var _user$project$Css$oblique = {value: 'oblique', fontStyle: _user$project$Css$Compatible};
var _user$project$Css$bold = {value: 'bold', lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible};
var _user$project$Css$lighter = {value: 'lighter', lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible};
var _user$project$Css$bolder = {value: 'bolder', lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible};
var _user$project$Css$smallCaps = {value: 'small-caps', fontVariant: _user$project$Css$Compatible, fontVariantCaps: _user$project$Css$Compatible};
var _user$project$Css$allSmallCaps = {value: 'all-small-caps', fontVariant: _user$project$Css$Compatible, fontVariantCaps: _user$project$Css$Compatible};
var _user$project$Css$petiteCaps = {value: 'petite-caps', fontVariant: _user$project$Css$Compatible, fontVariantCaps: _user$project$Css$Compatible};
var _user$project$Css$allPetiteCaps = {value: 'all-petite-caps', fontVariant: _user$project$Css$Compatible, fontVariantCaps: _user$project$Css$Compatible};
var _user$project$Css$unicase = {value: 'unicase', fontVariant: _user$project$Css$Compatible, fontVariantCaps: _user$project$Css$Compatible};
var _user$project$Css$titlingCaps = {value: 'titling-caps', fontVariant: _user$project$Css$Compatible, fontVariantCaps: _user$project$Css$Compatible};
var _user$project$Css$commonLigatures = {value: 'common-ligatures', fontVariant: _user$project$Css$Compatible, fontVariantLigatures: _user$project$Css$Compatible};
var _user$project$Css$noCommonLigatures = {value: 'no-common-ligatures', fontVariant: _user$project$Css$Compatible, fontVariantLigatures: _user$project$Css$Compatible};
var _user$project$Css$discretionaryLigatures = {value: 'discretionary-ligatures', fontVariant: _user$project$Css$Compatible, fontVariantLigatures: _user$project$Css$Compatible};
var _user$project$Css$noDiscretionaryLigatures = {value: 'no-discretionary-ligatures', fontVariant: _user$project$Css$Compatible, fontVariantLigatures: _user$project$Css$Compatible};
var _user$project$Css$historicalLigatures = {value: 'historical-ligatures', fontVariant: _user$project$Css$Compatible, fontVariantLigatures: _user$project$Css$Compatible};
var _user$project$Css$noHistoricalLigatures = {value: 'no-historical-ligatures', fontVariant: _user$project$Css$Compatible, fontVariantLigatures: _user$project$Css$Compatible};
var _user$project$Css$contextual = {value: 'context', fontVariant: _user$project$Css$Compatible, fontVariantLigatures: _user$project$Css$Compatible};
var _user$project$Css$noContextual = {value: 'no-contextual', fontVariant: _user$project$Css$Compatible, fontVariantLigatures: _user$project$Css$Compatible};
var _user$project$Css$liningNums = {value: 'lining-nums', fontVariant: _user$project$Css$Compatible, fontVariantNumeric: _user$project$Css$Compatible};
var _user$project$Css$oldstyleNums = {value: 'oldstyle-nums', fontVariant: _user$project$Css$Compatible, fontVariantNumeric: _user$project$Css$Compatible};
var _user$project$Css$proportionalNums = {value: 'proportional-nums', fontVariant: _user$project$Css$Compatible, fontVariantNumeric: _user$project$Css$Compatible};
var _user$project$Css$tabularNums = {value: 'tabular-nums', fontVariant: _user$project$Css$Compatible, fontVariantNumeric: _user$project$Css$Compatible};
var _user$project$Css$diagonalFractions = {value: 'diagonal-fractions', fontVariant: _user$project$Css$Compatible, fontVariantNumeric: _user$project$Css$Compatible};
var _user$project$Css$stackedFractions = {value: 'stacked-fractions', fontVariant: _user$project$Css$Compatible, fontVariantNumeric: _user$project$Css$Compatible};
var _user$project$Css$ordinal = {value: 'ordinal', fontVariant: _user$project$Css$Compatible, fontVariantNumeric: _user$project$Css$Compatible};
var _user$project$Css$slashedZero = {value: 'slashed-zero', fontVariant: _user$project$Css$Compatible, fontVariantNumeric: _user$project$Css$Compatible};
var _user$project$Css$featureTag2 = F2(
	function (tag, value) {
		var potentialWarnings = _elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: !_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$String$length(tag),
					4),
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'Feature tags must be exactly 4 characters long. ',
					A2(_elm_lang$core$Basics_ops['++'], tag, ' is invalid.'))
			},
				{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.cmp(value, 0) < 0,
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'Feature values cannot be negative. ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(value),
						' is invalid.'))
			}
			]);
		var warnings = A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$snd,
			A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$fst, potentialWarnings));
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(tag),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$Basics$toString(value))),
			featureTagValue: _user$project$Css$Compatible,
			warnings: warnings
		};
	});
var _user$project$Css$featureTag = function (tag) {
	return A2(_user$project$Css$featureTag2, tag, 1);
};
var _user$project$Css$PseudoClass = F2(
	function (a, b) {
		return {ctor: 'PseudoClass', _0: a, _1: b};
	});
var _user$project$Css$PseudoElement = F2(
	function (a, b) {
		return {ctor: 'PseudoElement', _0: a, _1: b};
	});
var _user$project$Css$PercentageUnits = {ctor: 'PercentageUnits'};
var _user$project$Css$pct = A2(_user$project$Css$lengthConverter, _user$project$Css$PercentageUnits, '%');
var _user$project$Css$EmUnits = {ctor: 'EmUnits'};
var _user$project$Css$em = A2(_user$project$Css$lengthConverter, _user$project$Css$EmUnits, 'em');
var _user$project$Css$ExUnits = {ctor: 'ExUnits'};
var _user$project$Css$ex = A2(_user$project$Css$lengthConverter, _user$project$Css$ExUnits, 'ex');
var _user$project$Css$ChUnits = {ctor: 'ChUnits'};
var _user$project$Css$ch = A2(_user$project$Css$lengthConverter, _user$project$Css$ChUnits, 'ch');
var _user$project$Css$RemUnits = {ctor: 'RemUnits'};
var _user$project$Css$rem = A2(_user$project$Css$lengthConverter, _user$project$Css$RemUnits, 'rem');
var _user$project$Css$VhUnits = {ctor: 'VhUnits'};
var _user$project$Css$vh = A2(_user$project$Css$lengthConverter, _user$project$Css$VhUnits, 'vh');
var _user$project$Css$VwUnits = {ctor: 'VwUnits'};
var _user$project$Css$vw = A2(_user$project$Css$lengthConverter, _user$project$Css$VwUnits, 'vw');
var _user$project$Css$VMinUnits = {ctor: 'VMinUnits'};
var _user$project$Css$vmin = A2(_user$project$Css$lengthConverter, _user$project$Css$VMinUnits, 'vmin');
var _user$project$Css$VMaxUnits = {ctor: 'VMaxUnits'};
var _user$project$Css$vmax = A2(_user$project$Css$lengthConverter, _user$project$Css$VMaxUnits, 'vmax');
var _user$project$Css$PxUnits = {ctor: 'PxUnits'};
var _user$project$Css$px = A2(_user$project$Css$lengthConverter, _user$project$Css$PxUnits, 'px');
var _user$project$Css$MMUnits = {ctor: 'MMUnits'};
var _user$project$Css$mm = A2(_user$project$Css$lengthConverter, _user$project$Css$MMUnits, 'mm');
var _user$project$Css$CMUnits = {ctor: 'CMUnits'};
var _user$project$Css$cm = A2(_user$project$Css$lengthConverter, _user$project$Css$CMUnits, 'cm');
var _user$project$Css$InchUnits = {ctor: 'InchUnits'};
var _user$project$Css$inches = A2(_user$project$Css$lengthConverter, _user$project$Css$InchUnits, 'in');
var _user$project$Css$PtUnits = {ctor: 'PtUnits'};
var _user$project$Css$pt = A2(_user$project$Css$lengthConverter, _user$project$Css$PtUnits, 'pt');
var _user$project$Css$PcUnits = {ctor: 'PcUnits'};
var _user$project$Css$pc = A2(_user$project$Css$lengthConverter, _user$project$Css$PcUnits, 'pc');
var _user$project$Css$UnitlessInteger = {ctor: 'UnitlessInteger'};
var _user$project$Css$zero = {value: '0', length: _user$project$Css$Compatible, lengthOrNumber: _user$project$Css$Compatible, lengthOrNone: _user$project$Css$Compatible, lengthOrAuto: _user$project$Css$Compatible, lengthOrMinMaxDimension: _user$project$Css$Compatible, lengthOrNoneOrMinMaxDimension: _user$project$Css$Compatible, number: _user$project$Css$Compatible, units: _user$project$Css$UnitlessInteger, unitLabel: '', numericValue: 0};
var _user$project$Css$int = function (val) {
	return {
		value: _user$project$Css$numberToString(val),
		lengthOrNumber: _user$project$Css$Compatible,
		number: _user$project$Css$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible,
		numericValue: _elm_lang$core$Basics$toFloat(val),
		unitLabel: '',
		units: _user$project$Css$UnitlessInteger
	};
};
var _user$project$Css$UnitlessFloat = {ctor: 'UnitlessFloat'};
var _user$project$Css$float = function (val) {
	return {
		value: _user$project$Css$numberToString(val),
		lengthOrNumber: _user$project$Css$Compatible,
		number: _user$project$Css$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible,
		numericValue: val,
		unitLabel: '',
		units: _user$project$Css$UnitlessFloat
	};
};
var _user$project$Css$IncompatibleUnits = {ctor: 'IncompatibleUnits'};
var _user$project$Css$initial = {value: 'initial', overflow: _user$project$Css$Compatible, none: _user$project$Css$Compatible, number: _user$project$Css$Compatible, textDecorationLine: _user$project$Css$Compatible, textRendering: _user$project$Css$Compatible, textIndent: _user$project$Css$Compatible, textDecorationStyle: _user$project$Css$Compatible, boxSizing: _user$project$Css$Compatible, display: _user$project$Css$Compatible, all: _user$project$Css$Compatible, alignItems: _user$project$Css$Compatible, length: _user$project$Css$Compatible, lengthOrAuto: _user$project$Css$Compatible, lengthOrNone: _user$project$Css$Compatible, lengthOrNumber: _user$project$Css$Compatible, lengthOrMinMaxDimension: _user$project$Css$Compatible, lengthOrNoneOrMinMaxDimension: _user$project$Css$Compatible, flexBasis: _user$project$Css$Compatible, flexWrap: _user$project$Css$Compatible, flexDirection: _user$project$Css$Compatible, flexDirectionOrWrap: _user$project$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _user$project$Css$Compatible, fontFamily: _user$project$Css$Compatible, fontSize: _user$project$Css$Compatible, fontStyle: _user$project$Css$Compatible, fontWeight: _user$project$Css$Compatible, fontVariant: _user$project$Css$Compatible, units: _user$project$Css$IncompatibleUnits, numericValue: 0, unitLabel: ''};
var _user$project$Css$unset = _elm_lang$core$Native_Utils.update(
	_user$project$Css$initial,
	{value: 'unset'});
var _user$project$Css$inherit = _elm_lang$core$Native_Utils.update(
	_user$project$Css$initial,
	{value: 'inherit'});
var _user$project$Css$lengthForOverloadedProperty = A3(_user$project$Css$lengthConverter, _user$project$Css$IncompatibleUnits, '', 0);
var _user$project$Css$alignItems = function (fn) {
	return A3(
		_user$project$Css$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn(_user$project$Css$lengthForOverloadedProperty));
};
var _user$project$Css$alignSelf = function (fn) {
	return A3(
		_user$project$Css$getOverloadedProperty,
		'alignSelf',
		'align-self',
		fn(_user$project$Css$lengthForOverloadedProperty));
};
var _user$project$Css$floatAlign = function (fn) {
	return A3(
		_user$project$Css$getOverloadedProperty,
		'floatAlign',
		'float',
		fn(_user$project$Css$lengthForOverloadedProperty));
};
var _user$project$Css$textAlignLast = function (fn) {
	return A3(
		_user$project$Css$getOverloadedProperty,
		'textAlignLast',
		'text-align-last',
		fn(_user$project$Css$lengthForOverloadedProperty));
};
var _user$project$Css$textAlign = function (fn) {
	return A3(
		_user$project$Css$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn(_user$project$Css$lengthForOverloadedProperty));
};
var _user$project$Css$verticalAlign = function (fn) {
	return A3(
		_user$project$Css$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn(_user$project$Css$lengthForOverloadedProperty));
};
var _user$project$Css$Rtl = {ctor: 'Rtl'};
var _user$project$Css$Ltr = {ctor: 'Ltr'};
var _user$project$Css$IntentionallyUnsupportedPleaseSeeDocs = {ctor: 'IntentionallyUnsupportedPleaseSeeDocs'};
var _user$project$Css$thin = _user$project$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _user$project$Css$thick = _user$project$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _user$project$Css$blink = _user$project$Css$IntentionallyUnsupportedPleaseSeeDocs;

var _user$project$Css_Elements$typeSelector = F2(
	function (selectorStr, mixins) {
		var sequence = A2(
			_user$project$Css_Structure$TypeSelectorSequence,
			_user$project$Css_Structure$TypeSelector(selectorStr),
			_elm_lang$core$Native_List.fromArray(
				[]));
		var selector = A3(
			_user$project$Css_Structure$Selector,
			sequence,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Maybe$Nothing);
		return _user$project$Css_Preprocess$Snippet(
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css_Preprocess$StyleBlockDeclaration(
					A3(
						_user$project$Css_Preprocess$StyleBlock,
						selector,
						_elm_lang$core$Native_List.fromArray(
							[]),
						mixins))
				]));
	});
var _user$project$Css_Elements$html = _user$project$Css_Elements$typeSelector('html');
var _user$project$Css_Elements$body = _user$project$Css_Elements$typeSelector('body');
var _user$project$Css_Elements$article = _user$project$Css_Elements$typeSelector('article');
var _user$project$Css_Elements$header = _user$project$Css_Elements$typeSelector('header');
var _user$project$Css_Elements$footer = _user$project$Css_Elements$typeSelector('footer');
var _user$project$Css_Elements$h1 = _user$project$Css_Elements$typeSelector('h1');
var _user$project$Css_Elements$h2 = _user$project$Css_Elements$typeSelector('h2');
var _user$project$Css_Elements$h3 = _user$project$Css_Elements$typeSelector('h3');
var _user$project$Css_Elements$h4 = _user$project$Css_Elements$typeSelector('h4');
var _user$project$Css_Elements$h5 = _user$project$Css_Elements$typeSelector('h5');
var _user$project$Css_Elements$h6 = _user$project$Css_Elements$typeSelector('h6');
var _user$project$Css_Elements$nav = _user$project$Css_Elements$typeSelector('nav');
var _user$project$Css_Elements$section = _user$project$Css_Elements$typeSelector('section');
var _user$project$Css_Elements$div = _user$project$Css_Elements$typeSelector('div');
var _user$project$Css_Elements$hr = _user$project$Css_Elements$typeSelector('hr');
var _user$project$Css_Elements$li = _user$project$Css_Elements$typeSelector('li');
var _user$project$Css_Elements$main$ = _user$project$Css_Elements$typeSelector('main');
var _user$project$Css_Elements$ol = _user$project$Css_Elements$typeSelector('ol');
var _user$project$Css_Elements$p = _user$project$Css_Elements$typeSelector('p');
var _user$project$Css_Elements$ul = _user$project$Css_Elements$typeSelector('ul');
var _user$project$Css_Elements$pre = _user$project$Css_Elements$typeSelector('pre');
var _user$project$Css_Elements$a = _user$project$Css_Elements$typeSelector('a');
var _user$project$Css_Elements$code = _user$project$Css_Elements$typeSelector('code');
var _user$project$Css_Elements$small = _user$project$Css_Elements$typeSelector('small');
var _user$project$Css_Elements$span = _user$project$Css_Elements$typeSelector('span');
var _user$project$Css_Elements$strong = _user$project$Css_Elements$typeSelector('strong');
var _user$project$Css_Elements$img = _user$project$Css_Elements$typeSelector('img');
var _user$project$Css_Elements$audio = _user$project$Css_Elements$typeSelector('audio');
var _user$project$Css_Elements$video = _user$project$Css_Elements$typeSelector('video');
var _user$project$Css_Elements$canvas = _user$project$Css_Elements$typeSelector('canvas');
var _user$project$Css_Elements$caption = _user$project$Css_Elements$typeSelector('caption');
var _user$project$Css_Elements$col = _user$project$Css_Elements$typeSelector('col');
var _user$project$Css_Elements$colgroup = _user$project$Css_Elements$typeSelector('colgroup');
var _user$project$Css_Elements$table = _user$project$Css_Elements$typeSelector('table');
var _user$project$Css_Elements$tbody = _user$project$Css_Elements$typeSelector('tbody');
var _user$project$Css_Elements$td = _user$project$Css_Elements$typeSelector('td');
var _user$project$Css_Elements$tfoot = _user$project$Css_Elements$typeSelector('tfoot');
var _user$project$Css_Elements$th = _user$project$Css_Elements$typeSelector('th');
var _user$project$Css_Elements$thead = _user$project$Css_Elements$typeSelector('thead');
var _user$project$Css_Elements$tr = _user$project$Css_Elements$typeSelector('tr');
var _user$project$Css_Elements$button = _user$project$Css_Elements$typeSelector('button');
var _user$project$Css_Elements$fieldset = _user$project$Css_Elements$typeSelector('fieldset');
var _user$project$Css_Elements$form = _user$project$Css_Elements$typeSelector('form');
var _user$project$Css_Elements$input = _user$project$Css_Elements$typeSelector('input');
var _user$project$Css_Elements$label = _user$project$Css_Elements$typeSelector('label');
var _user$project$Css_Elements$legend = _user$project$Css_Elements$typeSelector('legend');
var _user$project$Css_Elements$optgroup = _user$project$Css_Elements$typeSelector('optgroup');
var _user$project$Css_Elements$option = _user$project$Css_Elements$typeSelector('option');
var _user$project$Css_Elements$progress = _user$project$Css_Elements$typeSelector('progress');
var _user$project$Css_Elements$select = _user$project$Css_Elements$typeSelector('select');

var _user$project$Css_Namespace$applyNamespaceToProperty = F2(
	function (name, property) {
		var _p0 = property.key;
		if (_p0 === 'animation-name') {
			return _elm_lang$core$Native_Utils.update(
				property,
				{
					value: A2(_elm_lang$core$Basics_ops['++'], name, property.value)
				});
		} else {
			return property;
		}
	});
var _user$project$Css_Namespace$applyNamespaceToRepeatable = F2(
	function (name, selector) {
		var _p1 = selector;
		switch (_p1.ctor) {
			case 'ClassSelector':
				return _user$project$Css_Structure$ClassSelector(
					A2(_elm_lang$core$Basics_ops['++'], name, _p1._0));
			case 'IdSelector':
				return _user$project$Css_Structure$IdSelector(_p1._0);
			default:
				return _user$project$Css_Structure$PseudoClassSelector(_p1._0);
		}
	});
var _user$project$Css_Namespace$applyNamespaceToSequence = F2(
	function (name, sequence) {
		var _p2 = sequence;
		switch (_p2.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_user$project$Css_Structure$TypeSelectorSequence,
					_p2._0,
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Namespace$applyNamespaceToRepeatable(name),
						_p2._1));
			case 'UniversalSelectorSequence':
				return _user$project$Css_Structure$UniversalSelectorSequence(
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Namespace$applyNamespaceToRepeatable(name),
						_p2._0));
			default:
				return A2(
					_user$project$Css_Structure$CustomSelector,
					_p2._0,
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Namespace$applyNamespaceToRepeatable(name),
						_p2._1));
		}
	});
var _user$project$Css_Namespace$applyNamespaceToSelector = F2(
	function (name, _p3) {
		var _p4 = _p3;
		var apply = _user$project$Css_Namespace$applyNamespaceToSequence(name);
		return A3(
			_user$project$Css_Structure$Selector,
			apply(_p4._0),
			A2(
				_elm_lang$core$List$map,
				function (_p5) {
					var _p6 = _p5;
					return {
						ctor: '_Tuple2',
						_0: _p6._0,
						_1: apply(_p6._1)
					};
				},
				_p4._1),
			_p4._2);
	});
var _user$project$Css_Namespace$applyNamespaceToMixin = F2(
	function (name, mixin) {
		var _p7 = mixin;
		switch (_p7.ctor) {
			case 'AppendProperty':
				return _user$project$Css_Preprocess$AppendProperty(
					A2(_user$project$Css_Namespace$applyNamespaceToProperty, name, _p7._0));
			case 'ExtendSelector':
				return A2(
					_user$project$Css_Preprocess$ExtendSelector,
					A2(_user$project$Css_Namespace$applyNamespaceToRepeatable, name, _p7._0),
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Namespace$applyNamespaceToMixin(name),
						_p7._1));
			case 'NestSnippet':
				return A2(
					_user$project$Css_Preprocess$NestSnippet,
					_p7._0,
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Namespace$applyNamespaceToSnippet(name),
						_p7._1));
			case 'WithPseudoElement':
				return A2(
					_user$project$Css_Preprocess$WithPseudoElement,
					_p7._0,
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Namespace$applyNamespaceToMixin(name),
						_p7._1));
			case 'WithMedia':
				return A2(
					_user$project$Css_Preprocess$WithMedia,
					_p7._0,
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Namespace$applyNamespaceToMixin(name),
						_p7._1));
			default:
				return _user$project$Css_Preprocess$ApplyMixins(
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Namespace$applyNamespaceToMixin(name),
						_p7._0));
		}
	});
var _user$project$Css_Namespace$applyNamespaceToSnippet = F2(
	function (name, _p8) {
		var _p9 = _p8;
		return _user$project$Css_Preprocess$Snippet(
			A2(
				_elm_lang$core$List$map,
				_user$project$Css_Namespace$applyNamespaceToDeclaration(name),
				_p9._0));
	});
var _user$project$Css_Namespace$applyNamespaceToDeclaration = F2(
	function (name, declaration) {
		var _p10 = declaration;
		switch (_p10.ctor) {
			case 'StyleBlockDeclaration':
				return _user$project$Css_Preprocess$StyleBlockDeclaration(
					A2(_user$project$Css_Namespace$applyNamespaceToStyleBlock, name, _p10._0));
			case 'MediaRule':
				return A2(
					_user$project$Css_Preprocess$MediaRule,
					_p10._0,
					A2(
						_elm_lang$core$List$map,
						_user$project$Css_Namespace$applyNamespaceToStyleBlock(name),
						_p10._1));
			case 'SupportsRule':
				return A2(
					_user$project$Css_Preprocess$SupportsRule,
					_p10._0,
					function (declarations) {
						return _elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Preprocess$Snippet(declarations)
							]);
					}(
						A2(
							_elm_lang$core$List$map,
							_user$project$Css_Namespace$applyNamespaceToDeclaration(name),
							A2(_elm_lang$core$List$concatMap, _user$project$Css_Preprocess$unwrapSnippet, _p10._1))));
			case 'DocumentRule':
				return A5(
					_user$project$Css_Preprocess$DocumentRule,
					_p10._0,
					_p10._1,
					_p10._2,
					_p10._3,
					A2(_user$project$Css_Namespace$applyNamespaceToStyleBlock, name, _p10._4));
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return A2(
					_user$project$Css_Preprocess$Keyframes,
					A2(_elm_lang$core$Basics_ops['++'], name, _p10._0),
					_p10._1);
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _user$project$Css_Namespace$applyNamespaceToStyleBlock = F2(
	function (name, _p11) {
		var _p12 = _p11;
		return A3(
			_user$project$Css_Preprocess$StyleBlock,
			A2(_user$project$Css_Namespace$applyNamespaceToSelector, name, _p12._0),
			A2(
				_elm_lang$core$List$map,
				_user$project$Css_Namespace$applyNamespaceToSelector(name),
				_p12._1),
			A2(
				_elm_lang$core$List$map,
				_user$project$Css_Namespace$applyNamespaceToMixin(name),
				_p12._2));
	});
var _user$project$Css_Namespace$namespace = F2(
	function (rawIdentifier, snippets) {
		return A2(
			_elm_lang$core$List$map,
			_user$project$Css_Namespace$applyNamespaceToSnippet(
				_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(rawIdentifier)),
			snippets);
	});

var _user$project$Decode_Utils$decodeDate = A2(
	_elm_lang$core$Json_Decode$andThen,
	_elm_lang$core$Json_Decode$string,
	function (string) {
		var _p0 = _elm_lang$core$Date$fromString(string);
		if (_p0.ctor === 'Ok') {
			return _elm_lang$core$Json_Decode$succeed(_p0._0);
		} else {
			return _elm_lang$core$Json_Decode$fail('Could not decode date from string');
		}
	});

var _user$project$VolumeJson$json = '{\"Volumes\": [\r\n        {\r\n            \"AvailabilityZone\": \"eu-west-1c\",\r\n            \"Attachments\": [\r\n                {\r\n                    \"AttachTime\": \"2015-10-09T20:36:56.000Z\",\r\n                    \"InstanceId\": \"i-a5c6571c\",\r\n                    \"VolumeId\": \"vol-45655eb5\",\r\n                    \"State\": \"attached\",\r\n                    \"DeleteOnTermination\": true,\r\n                    \"Device\": \"/dev/sda1\"\r\n                }\r\n            ],\r\n            \"VolumeType\": \"gp2\",\r\n            \"VolumeId\": \"vol-45655eb5\",\r\n            \"State\": \"in-use\",\r\n            \"Iops\": 150,\r\n            \"SnapshotId\": \"snap-79b237b0\",\r\n            \"CreateTime\": \"2015-10-09T20:36:55.980Z\",\r\n            \"Size\": 50\r\n        },\r\n        {\r\n            \"AvailabilityZone\": \"eu-west-1c\",\r\n            \"Attachments\": [\r\n                {\r\n                    \"AttachTime\": \"2015-11-13T22:09:38.000Z\",\r\n                    \"InstanceId\": \"i-d4dcf26d\",\r\n                    \"VolumeId\": \"vol-1473b0e7\",\r\n                    \"State\": \"attached\",\r\n                    \"DeleteOnTermination\": true,\r\n                    \"Device\": \"/dev/sda1\"\r\n                }\r\n            ],\r\n            \"VolumeType\": \"io1\",\r\n            \"VolumeId\": \"vol-1473b0e7\",\r\n            \"State\": \"in-use\",\r\n            \"Iops\": 1000,\r\n            \"SnapshotId\": \"snap-fb56f3d2\",\r\n            \"CreateTime\": \"2015-11-13T22:09:38.132Z\",\r\n            \"Size\": 250\r\n        },\r\n        {\r\n            \"AvailabilityZone\": \"eu-west-1c\",\r\n            \"Attachments\": [\r\n                {\r\n                    \"AttachTime\": \"2015-11-30T17:15:22.000Z\",\r\n                    \"InstanceId\": \"i-40fdf4f9\",\r\n                    \"VolumeId\": \"vol-1ca60bef\",\r\n                    \"State\": \"attached\",\r\n                    \"DeleteOnTermination\": true,\r\n                    \"Device\": \"/dev/sda1\"\r\n                }\r\n            ],\r\n            \"VolumeType\": \"io1\",\r\n            \"VolumeId\": \"vol-1ca60bef\",\r\n            \"State\": \"in-use\",\r\n            \"Iops\": 2000,\r\n            \"SnapshotId\": \"snap-fe9bc4a8\",\r\n            \"CreateTime\": \"2015-11-30T17:15:22.740Z\",\r\n            \"Size\": 500\r\n        },\r\n        {\r\n            \"AvailabilityZone\": \"eu-west-1c\",\r\n            \"Attachments\": [\r\n                {\r\n                    \"AttachTime\": \"2016-02-02T10:45:18.000Z\",\r\n                    \"InstanceId\": \"i-0beaf480\",\r\n                    \"VolumeId\": \"vol-79cee78a\",\r\n                    \"State\": \"attached\",\r\n                    \"DeleteOnTermination\": true,\r\n                    \"Device\": \"/dev/sda1\"\r\n                }\r\n            ],\r\n            \"VolumeType\": \"io1\",\r\n            \"VolumeId\": \"vol-79cee78a\",\r\n            \"State\": \"in-use\",\r\n            \"Iops\": 2000,\r\n            \"SnapshotId\": \"snap-71224459\",\r\n            \"CreateTime\": \"2016-02-02T10:45:18.138Z\",\r\n            \"Size\": 2000\r\n        },\r\n        {\r\n            \"AvailabilityZone\": \"eu-west-1c\",\r\n            \"Attachments\": [\r\n                {\r\n                    \"AttachTime\": \"2016-05-27T11:01:48.000Z\",\r\n                    \"InstanceId\": \"i-c95c1743\",\r\n                    \"VolumeId\": \"vol-20d6f9d2\",\r\n                    \"State\": \"attached\",\r\n                    \"DeleteOnTermination\": true,\r\n                    \"Device\": \"/dev/sda1\"\r\n                }\r\n            ],\r\n            \"VolumeType\": \"io1\",\r\n            \"VolumeId\": \"vol-20d6f9d2\",\r\n            \"State\": \"in-use\",\r\n            \"Iops\": 2000,\r\n            \"SnapshotId\": \"snap-d35e8887\",\r\n            \"CreateTime\": \"2016-05-27T11:01:48.793Z\",\r\n            \"Size\": 500\r\n        },\r\n        {\r\n            \"AvailabilityZone\": \"eu-west-1b\",\r\n            \"VolumeType\": \"io1\",\r\n            \"VolumeId\": \"something else\",\r\n            \"State\": \"in-use\",\r\n            \"Iops\": 1500,\r\n            \"SnapshotId\": \"snap-cd826de4\",\r\n            \"CreateTime\": \"2015-11-10T03:51:54.642Z\",\r\n            \"Size\": 50\r\n        },\r\n        {\r\n            \"AvailabilityZone\": \"eu-west-1b\",\r\n            \"Attachments\": [\r\n                {\r\n                    \"AttachTime\": \"2014-01-31T09:18:44.000Z\",\r\n                    \"InstanceId\": \"i-c42f608a\",\r\n                    \"VolumeId\": \"vol-3eaa9b12\",\r\n                    \"State\": \"attached\",\r\n                    \"DeleteOnTermination\": true,\r\n                    \"Device\": \"/dev/sda1\"\r\n                }\r\n            ],\r\n            \"VolumeType\": \"standard\",\r\n            \"VolumeId\": \"vol-3eaa9b12\",\r\n            \"State\": \"in-use\",\r\n            \"SnapshotId\": \"snap-530efb4d\",\r\n            \"CreateTime\": \"2014-01-31T09:18:44.768Z\",\r\n            \"Size\": 50\r\n        },\r\n        {\r\n            \"AvailabilityZone\": \"eu-west-1b\",\r\n            \"Attachments\": [\r\n                {\r\n                    \"AttachTime\": \"2015-11-10T03:51:54.000Z\",\r\n                    \"InstanceId\": \"i-4cc338f5\",\r\n                    \"VolumeId\": \"vol-8d43034e\",\r\n                    \"State\": \"attached\",\r\n                    \"DeleteOnTermination\": true,\r\n                    \"Device\": \"/dev/sda1\"\r\n                }\r\n            ],\r\n            \"VolumeType\": \"io1\",\r\n            \"VolumeId\": \"vol-8d43034e\",\r\n            \"State\": \"in-use\",\r\n            \"Iops\": 1500,\r\n            \"SnapshotId\": \"snap-cd826de4\",\r\n            \"CreateTime\": \"2015-11-10T03:51:54.642Z\",\r\n            \"Size\": 50\r\n        },\r\n     {\r\n            \"AvailabilityZone\": \"eu-west-1b\",\r\n            \"VolumeType\": \"io1\",\r\n            \"VolumeId\": \"something\",\r\n            \"State\": \"in-use\",\r\n            \"Iops\": 1500,\r\n            \"SnapshotId\": \"snap-cd826de4\",\r\n            \"CreateTime\": \"2015-11-10T03:51:54.642Z\",\r\n            \"Size\": 50\r\n     }\r\n\r\n    ]\r\n    }\r\n';

var _user$project$VolumeDecoder$VolumeList = function (a) {
	return {volumes: a};
};
var _user$project$VolumeDecoder$Volume = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {availability_zone: a, attachments: b, volume_type: c, volume_id: d, state: e, iops: f, snapshot_id: g, create_time: h, size: i};
	});
var _user$project$VolumeDecoder$Attachment = F6(
	function (a, b, c, d, e, f) {
		return {attach_time: a, instance_id: b, volumeId: c, state: d, delete_on_termination: e, device: f};
	});
var _user$project$VolumeDecoder$decodeAttachment = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Device',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'DeleteOnTermination',
		_elm_lang$core$Json_Decode$bool,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'State',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'VolumeId',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'InstanceId',
					_elm_lang$core$Json_Decode$string,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'AttachTime',
						_user$project$Decode_Utils$decodeDate,
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$VolumeDecoder$Attachment)))))));
var _user$project$VolumeDecoder$decodeVolume = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Size',
	_elm_lang$core$Json_Decode$int,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'CreateTime',
		_user$project$Decode_Utils$decodeDate,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'SnapshotId',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'Iops',
				_elm_lang$core$Json_Decode$int,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'State',
					_elm_lang$core$Json_Decode$string,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'VolumeId',
						_elm_lang$core$Json_Decode$string,
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'VolumeType',
							_elm_lang$core$Json_Decode$string,
							A4(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
								'Attachments',
								_elm_lang$core$Json_Decode$list(_user$project$VolumeDecoder$decodeAttachment),
								_elm_lang$core$Native_List.fromArray(
									[]),
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'AvailabilityZone',
									_elm_lang$core$Json_Decode$string,
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$VolumeDecoder$Volume))))))))));
var _user$project$VolumeDecoder$decodeVolumeList = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Volumes',
	_elm_lang$core$Json_Decode$list(_user$project$VolumeDecoder$decodeVolume),
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$VolumeDecoder$VolumeList));
var _user$project$VolumeDecoder$decodeAll = A2(_elm_lang$core$Json_Decode$decodeString, _user$project$VolumeDecoder$decodeVolumeList, _user$project$VolumeJson$json);

var _user$project$InstanceJson$json = '{\n    \"Reservations\": [\n        {\n            \"OwnerId\": \"375321850564\",\n            \"ReservationId\": \"r-4e6b6aef\",\n            \"Groups\": [],\n            \"Instances\": [\n                {\n                    \"Monitoring\": {\n                        \"State\": \"disabled\"\n                    },\n                    \"PublicDnsName\": \"ec2-54-229-22-163.eu-west-1.compute.amazonaws.com\",\n                    \"State\": {\n                        \"Code\": 16,\n                        \"Name\": \"running\"\n                    },\n                    \"EbsOptimized\": true,\n                    \"LaunchTime\": \"2016-04-09T07:18:50.000Z\",\n                    \"PublicIpAddress\": \"54.229.22.163\",\n                    \"PrivateIpAddress\": \"172.32.8.209\",\n                    \"ProductCodes\": [\n                        {\n                            \"ProductCodeId\": \"6x5jmcajty9edm3f211pqjfn2\",\n                            \"ProductCodeType\": \"marketplace\"\n                        }\n                    ],\n                    \"VpcId\": \"vpc-df83c9ba\",\n                    \"StateTransitionReason\": null,\n                    \"InstanceId\": \"i-0beaf480\",\n                    \"ImageId\": \"ami-b15ef8c2\",\n                    \"PrivateDnsName\": \"ip-172-32-8-209.eu-west-1.compute.internal\",\n                    \"KeyName\": \"LinuxEncoder\",\n                    \"SecurityGroups\": [\n                        {\n                            \"GroupName\": \"GRIT Relay\",\n                            \"GroupId\": \"sg-b82177dc\"\n                        }\n                    ],\n                    \"ClientToken\": \"nmGXF1454409913768\",\n                    \"SubnetId\": \"subnet-4793b630\",\n                    \"InstanceType\": \"c4.xlarge\",\n                    \"NetworkInterfaces\": [\n                        {\n                            \"Status\": \"in-use\",\n                            \"SourceDestCheck\": true,\n                            \"VpcId\": \"vpc-df83c9ba\",\n                            \"Description\": \"Primary network interface\",\n                            \"Association\": {\n                                \"PublicIp\": \"54.229.22.163\",\n                                \"PublicDnsName\": \"ec2-54-229-22-163.eu-west-1.compute.amazonaws.com\",\n                                \"IpOwnerId\": \"375321850564\"\n                            },\n                            \"NetworkInterfaceId\": \"eni-341ef57f\",\n                            \"PrivateIpAddresses\": [\n                                {\n                                    \"PrivateDnsName\": \"ip-172-32-8-209.eu-west-1.compute.internal\",\n                                    \"Association\": {\n                                        \"PublicIp\": \"54.229.22.163\",\n                                        \"PublicDnsName\": \"ec2-54-229-22-163.eu-west-1.compute.amazonaws.com\",\n                                        \"IpOwnerId\": \"375321850564\"\n                                    },\n                                    \"Primary\": true,\n                                    \"PrivateIpAddress\": \"172.32.8.209\"\n                                }\n                            ],\n                            \"PrivateDnsName\": \"ip-172-32-8-209.eu-west-1.compute.internal\",\n                            \"Attachment\": {\n                                \"Status\": \"attached\",\n                                \"DeviceIndex\": 0,\n                                \"DeleteOnTermination\": true,\n                                \"AttachmentId\": \"eni-attach-0d74e9ea\",\n                                \"AttachTime\": \"2016-02-02T10:45:14.000Z\"\n                            },\n                            \"Groups\": [\n                                {\n                                    \"GroupName\": \"GRIT Relay\",\n                                    \"GroupId\": \"sg-b82177dc\"\n                                }\n                            ],\n                            \"SubnetId\": \"subnet-4793b630\",\n                            \"OwnerId\": \"375321850564\",\n                            \"PrivateIpAddress\": \"172.32.8.209\"\n                        }\n                    ],\n                    \"SourceDestCheck\": true,\n                    \"Placement\": {\n                        \"Tenancy\": \"default\",\n                        \"GroupName\": null,\n                        \"AvailabilityZone\": \"eu-west-1c\"\n                    },\n                    \"Hypervisor\": \"xen\",\n                    \"BlockDeviceMappings\": [\n                        {\n                            \"DeviceName\": \"/dev/sda1\",\n                            \"Ebs\": {\n                                \"Status\": \"attached\",\n                                \"DeleteOnTermination\": true,\n                                \"VolumeId\": \"vol-79cee78a\",\n                                \"AttachTime\": \"2016-02-02T10:45:18.000Z\"\n                            }\n                        }\n                    ],\n                    \"Architecture\": \"x86_64\",\n                    \"RootDeviceType\": \"ebs\",\n                    \"IamInstanceProfile\": {\n                        \"Id\": \"AIPAJO47X773IAG3EYVR2\",\n                        \"Arn\": \"arn:aws:iam::375321850564:instance-profile/grit_relay\"\n                    },\n                    \"RootDeviceName\": \"/dev/sda1\",\n                    \"VirtualizationType\": \"hvm\",\n                    \"Tags\": [\n                        {\n                            \"Value\": \"PRO GRIT Relay EU-West\",\n                            \"Key\": \"Name\"\n                        }\n                    ],\n                    \"AmiLaunchIndex\": 0\n                }\n            ]\n        },\n        {\n            \"OwnerId\": \"375321850564\",\n            \"ReservationId\": \"r-93b84d3e\",\n            \"Groups\": [],\n            \"Instances\": [\n                {\n                    \"Monitoring\": {\n                        \"State\": \"disabled\"\n                    },\n                    \"PublicDnsName\": null,\n                    \"KernelId\": \"aki-71665e05\",\n                    \"State\": {\n                        \"Code\": 80,\n                        \"Name\": \"stopped\"\n                    },\n                    \"EbsOptimized\": false,\n                    \"LaunchTime\": \"2015-10-09T20:36:53.000Z\",\n                    \"PrivateIpAddress\": \"172.31.37.31\",\n                    \"ProductCodes\": [],\n                    \"VpcId\": \"vpc-2f9f8847\",\n                    \"StateTransitionReason\": null,\n                    \"InstanceId\": \"i-a5c6571c\",\n                    \"ImageId\": \"ami-cf5d6cb8\",\n                    \"PrivateDnsName\": \"ip-172-31-37-31.eu-west-1.compute.internal\",\n                    \"KeyName\": \"VEE-PRO1-EU-WEST\",\n                    \"SecurityGroups\": [\n                        {\n                            \"GroupName\": \"vee_manager\",\n                            \"GroupId\": \"sg-b1e4fed3\"\n                        }\n                    ],\n                    \"ClientToken\": \"FhCfZ1444423013306\",\n                    \"SubnetId\": \"subnet-219f8849\",\n                    \"InstanceType\": \"m1.medium\",\n                    \"NetworkInterfaces\": [\n                        {\n                            \"Status\": \"in-use\",\n                            \"SourceDestCheck\": true,\n                            \"VpcId\": \"vpc-2f9f8847\",\n                            \"Description\": null,\n                            \"NetworkInterfaceId\": \"eni-b6546fff\",\n                            \"PrivateIpAddresses\": [\n                                {\n                                    \"PrivateDnsName\": \"ip-172-31-37-31.eu-west-1.compute.internal\",\n                                    \"Primary\": true,\n                                    \"PrivateIpAddress\": \"172.31.37.31\"\n                                }\n                            ],\n                            \"PrivateDnsName\": \"ip-172-31-37-31.eu-west-1.compute.internal\",\n                            \"Attachment\": {\n                                \"Status\": \"attached\",\n                                \"DeviceIndex\": 0,\n                                \"DeleteOnTermination\": true,\n                                \"AttachmentId\": \"eni-attach-fbf34ad7\",\n                                \"AttachTime\": \"2015-10-09T20:36:53.000Z\"\n                            },\n                            \"Groups\": [\n                                {\n                                    \"GroupName\": \"vee_manager\",\n                                    \"GroupId\": \"sg-b1e4fed3\"\n                                }\n                            ],\n                            \"SubnetId\": \"subnet-219f8849\",\n                            \"OwnerId\": \"375321850564\",\n                            \"PrivateIpAddress\": \"172.31.37.31\"\n                        }\n                    ],\n                    \"SourceDestCheck\": true,\n                    \"Placement\": {\n                        \"Tenancy\": \"default\",\n                        \"GroupName\": null,\n                        \"AvailabilityZone\": \"eu-west-1c\"\n                    },\n                    \"Hypervisor\": \"xen\",\n                    \"BlockDeviceMappings\": [\n                        {\n                            \"DeviceName\": \"/dev/sda1\",\n                            \"Ebs\": {\n                                \"Status\": \"attached\",\n                                \"DeleteOnTermination\": true,\n                                \"VolumeId\": \"vol-45655eb5\",\n                                \"AttachTime\": \"2015-10-09T20:36:56.000Z\"\n                            }\n                        }\n                    ],\n                    \"Architecture\": \"x86_64\",\n                    \"StateReason\": {\n                        \"Message\": \"Client.InstanceInitiatedShutdown: Instance initiated shutdown\",\n                        \"Code\": \"Client.InstanceInitiatedShutdown\"\n                    },\n                    \"IamInstanceProfile\": {\n                        \"Id\": \"AIPAJBHZIV6N3CY2Z65G4\",\n                        \"Arn\": \"arn:aws:iam::375321850564:instance-profile/vee_manager\"\n                    },\n                    \"RootDeviceName\": \"/dev/sda1\",\n                    \"VirtualizationType\": \"paravirtual\",\n                    \"RootDeviceType\": \"ebs\",\n                    \"Tags\": [\n                        {\n                            \"Value\": \"old VEE Live Manager (IAM)\",\n                            \"Key\": \"Name\"\n                        }\n                    ],\n                    \"AmiLaunchIndex\": 0\n                }\n            ]\n        },\n        {\n            \"OwnerId\": \"375321850564\",\n            \"ReservationId\": \"r-954e642c\",\n            \"Groups\": [],\n            \"Instances\": [\n                {\n                    \"Monitoring\": {\n                        \"State\": \"disabled\"\n                    },\n                    \"PublicDnsName\": \"ec2-54-229-58-229.eu-west-1.compute.amazonaws.com\",\n                    \"State\": {\n                        \"Code\": 16,\n                        \"Name\": \"running\"\n                    },\n                    \"EbsOptimized\": false,\n                    \"LaunchTime\": \"2016-05-27T11:01:48.000Z\",\n                    \"PublicIpAddress\": \"54.229.58.229\",\n                    \"PrivateIpAddress\": \"172.32.9.111\",\n                    \"ProductCodes\": [\n                        {\n                            \"ProductCodeId\": \"6x5jmcajty9edm3f211pqjfn2\",\n                            \"ProductCodeType\": \"marketplace\"\n                        }\n                    ],\n                    \"VpcId\": \"vpc-353f2b50\",\n                    \"StateTransitionReason\": null,\n                    \"InstanceId\": \"i-c95c1743\",\n                    \"ImageId\": \"ami-fe83038d\",\n                    \"PrivateDnsName\": \"ip-172-32-9-111.eu-west-1.compute.internal\",\n                    \"SecurityGroups\": [\n                        {\n                            \"GroupName\": \"default\",\n                            \"GroupId\": \"sg-4b1a0e2f\"\n                        }\n                    ],\n                    \"ClientToken\": \"98070-346844-1464\",\n                    \"SubnetId\": \"subnet-c3db3cb5\",\n                    \"InstanceType\": \"c4.large\",\n                    \"NetworkInterfaces\": [\n                        {\n                            \"Status\": \"in-use\",\n                            \"SourceDestCheck\": true,\n                            \"VpcId\": \"vpc-353f2b50\",\n                            \"Description\": null,\n                            \"Association\": {\n                                \"PublicIp\": \"54.229.58.229\",\n                                \"PublicDnsName\": \"ec2-54-229-58-229.eu-west-1.compute.amazonaws.com\",\n                                \"IpOwnerId\": \"amazon\"\n                            },\n                            \"NetworkInterfaceId\": \"eni-7e5e3634\",\n                            \"PrivateIpAddresses\": [\n                                {\n                                    \"PrivateDnsName\": \"ip-172-32-9-111.eu-west-1.compute.internal\",\n                                    \"Association\": {\n                                        \"PublicIp\": \"54.229.58.229\",\n                                        \"PublicDnsName\": \"ec2-54-229-58-229.eu-west-1.compute.amazonaws.com\",\n                                        \"IpOwnerId\": \"amazon\"\n                                    },\n                                    \"Primary\": true,\n                                    \"PrivateIpAddress\": \"172.32.9.111\"\n                                }\n                            ],\n                            \"PrivateDnsName\": \"ip-172-32-9-111.eu-west-1.compute.internal\",\n                            \"Attachment\": {\n                                \"Status\": \"attached\",\n                                \"DeviceIndex\": 0,\n                                \"DeleteOnTermination\": true,\n                                \"AttachmentId\": \"eni-attach-2ffe29ea\",\n                                \"AttachTime\": \"2016-05-27T11:01:48.000Z\"\n                            },\n                            \"Groups\": [\n                                {\n                                    \"GroupName\": \"default\",\n                                    \"GroupId\": \"sg-4b1a0e2f\"\n                                }\n                            ],\n                            \"SubnetId\": \"subnet-c3db3cb5\",\n                            \"OwnerId\": \"375321850564\",\n                            \"PrivateIpAddress\": \"172.32.9.111\"\n                        }\n                    ],\n                    \"SourceDestCheck\": true,\n                    \"Placement\": {\n                        \"Tenancy\": \"default\",\n                        \"GroupName\": null,\n                        \"AvailabilityZone\": \"eu-west-1c\"\n                    },\n                    \"Hypervisor\": \"xen\",\n                    \"BlockDeviceMappings\": [\n                        {\n                            \"DeviceName\": \"/dev/sda1\",\n                            \"Ebs\": {\n                                \"Status\": \"attached\",\n                                \"DeleteOnTermination\": true,\n                                \"VolumeId\": \"vol-20d6f9d2\",\n                                \"AttachTime\": \"2016-05-27T11:01:48.000Z\"\n                            }\n                        }\n                    ],\n                    \"Architecture\": \"x86_64\",\n                    \"RootDeviceType\": \"ebs\",\n                    \"IamInstanceProfile\": {\n                        \"Id\": \"AIPAIBJEZV7QMNZJ75LFK\",\n                        \"Arn\": \"arn:aws:iam::375321850564:instance-profile/vee_encoder\"\n                    },\n                    \"RootDeviceName\": \"/dev/sda1\",\n                    \"VirtualizationType\": \"hvm\",\n                    \"AmiLaunchIndex\": 0\n                }\n            ]\n        },\n        {\n            \"OwnerId\": \"375321850564\",\n            \"ReservationId\": \"r-6776eec6\",\n            \"Groups\": [],\n            \"Instances\": [\n                {\n                    \"Monitoring\": {\n                        \"State\": \"disabled\"\n                    },\n                    \"PublicDnsName\": \"ec2-54-229-22-168.eu-west-1.compute.amazonaws.com\",\n                    \"KernelId\": \"aki-52a34525\",\n                    \"State\": {\n                        \"Code\": 80,\n                        \"Name\": \"stopped\"\n                    },\n                    \"EbsOptimized\": false,\n                    \"LaunchTime\": \"2015-11-14T07:38:00.000Z\",\n                    \"PublicIpAddress\": \"54.229.22.168\",\n                    \"PrivateIpAddress\": \"172.31.46.238\",\n                    \"ProductCodes\": [],\n                    \"VpcId\": \"vpc-2f9f8847\",\n                    \"StateTransitionReason\": \"User initiated (2016-03-30 20:06:53 GMT)\",\n                    \"InstanceId\": \"i-d4dcf26d\",\n                    \"ImageId\": \"ami-57744520\",\n                    \"PrivateDnsName\": \"ip-172-31-46-238.eu-west-1.compute.internal\",\n                    \"KeyName\": \"LinuxEncoder\",\n                    \"SecurityGroups\": [\n                        {\n                            \"GroupName\": \"vee_manager\",\n                            \"GroupId\": \"sg-b1e4fed3\"\n                        }\n                    ],\n                    \"ClientToken\": \"jvdFO1447452574758\",\n                    \"SubnetId\": \"subnet-219f8849\",\n                    \"InstanceType\": \"c3.large\",\n                    \"NetworkInterfaces\": [\n                        {\n                            \"Status\": \"in-use\",\n                            \"SourceDestCheck\": true,\n                            \"VpcId\": \"vpc-2f9f8847\",\n                            \"Description\": null,\n                            \"Association\": {\n                                \"PublicIp\": \"54.229.22.168\",\n                                \"PublicDnsName\": \"ec2-54-229-22-168.eu-west-1.compute.amazonaws.com\",\n                                \"IpOwnerId\": \"375321850564\"\n                            },\n                            \"NetworkInterfaceId\": \"eni-3408d47c\",\n                            \"PrivateIpAddresses\": [\n                                {\n                                    \"PrivateDnsName\": \"ip-172-31-46-238.eu-west-1.compute.internal\",\n                                    \"Association\": {\n                                        \"PublicIp\": \"54.229.22.168\",\n                                        \"PublicDnsName\": \"ec2-54-229-22-168.eu-west-1.compute.amazonaws.com\",\n                                        \"IpOwnerId\": \"375321850564\"\n                                    },\n                                    \"Primary\": true,\n                                    \"PrivateIpAddress\": \"172.31.46.238\"\n                                }\n                            ],\n                            \"PrivateDnsName\": \"ip-172-31-46-238.eu-west-1.compute.internal\",\n                            \"Attachment\": {\n                                \"Status\": \"attached\",\n                                \"DeviceIndex\": 0,\n                                \"DeleteOnTermination\": true,\n                                \"AttachmentId\": \"eni-attach-900b4ebc\",\n                                \"AttachTime\": \"2015-11-13T22:09:35.000Z\"\n                            },\n                            \"Groups\": [\n                                {\n                                    \"GroupName\": \"vee_manager\",\n                                    \"GroupId\": \"sg-b1e4fed3\"\n                                }\n                            ],\n                            \"SubnetId\": \"subnet-219f8849\",\n                            \"OwnerId\": \"375321850564\",\n                            \"PrivateIpAddress\": \"172.31.46.238\"\n                        }\n                    ],\n                    \"SourceDestCheck\": true,\n                    \"Placement\": {\n                        \"Tenancy\": \"default\",\n                        \"GroupName\": null,\n                        \"AvailabilityZone\": \"eu-west-1c\"\n                    },\n                    \"Hypervisor\": \"xen\",\n                    \"BlockDeviceMappings\": [\n                        {\n                            \"DeviceName\": \"/dev/sda1\",\n                            \"Ebs\": {\n                                \"Status\": \"attached\",\n                                \"DeleteOnTermination\": true,\n                                \"VolumeId\": \"vol-1473b0e7\",\n                                \"AttachTime\": \"2015-11-13T22:09:38.000Z\"\n                            }\n                        }\n                    ],\n                    \"Architecture\": \"x86_64\",\n                    \"StateReason\": {\n                        \"Message\": \"Client.UserInitiatedShutdown: User initiated shutdown\",\n                        \"Code\": \"Client.UserInitiatedShutdown\"\n                    },\n                    \"IamInstanceProfile\": {\n                        \"Id\": \"AIPAIBJEZV7QMNZJ75LFK\",\n                        \"Arn\": \"arn:aws:iam::375321850564:instance-profile/vee_encoder\"\n                    },\n                    \"RootDeviceName\": \"/dev/sda1\",\n                    \"VirtualizationType\": \"paravirtual\",\n                    \"RootDeviceType\": \"ebs\",\n                    \"Tags\": [\n                        {\n                            \"Value\": \"VEE Live S3 Bridge\",\n                            \"Key\": \"Name\"\n                        }\n                    ],\n                    \"AmiLaunchIndex\": 0\n                }\n            ]\n        },\n        {\n            \"OwnerId\": \"375321850564\",\n            \"ReservationId\": \"r-bd4c6e10\",\n            \"Groups\": [],\n            \"Instances\": [\n                {\n                    \"Monitoring\": {\n                        \"State\": \"disabled\"\n                    },\n                    \"PublicDnsName\": \"ec2-54-194-202-98.eu-west-1.compute.amazonaws.com\",\n                    \"KernelId\": \"aki-71665e05\",\n                    \"State\": {\n                        \"Code\": 80,\n                        \"Name\": \"stopped\"\n                    },\n                    \"EbsOptimized\": false,\n                    \"LaunchTime\": \"2015-11-14T07:38:08.000Z\",\n                    \"PublicIpAddress\": \"54.194.202.98\",\n                    \"PrivateIpAddress\": \"172.31.28.34\",\n                    \"ProductCodes\": [],\n                    \"VpcId\": \"vpc-2f9f8847\",\n                    \"StateTransitionReason\": \"User initiated (2016-03-30 20:06:53 GMT)\",\n                    \"InstanceId\": \"i-4cc338f5\",\n                    \"ImageId\": \"ami-83c810f0\",\n                    \"PrivateDnsName\": \"ip-172-31-28-34.eu-west-1.compute.internal\",\n                    \"KeyName\": \"LinuxEncoder\",\n                    \"SecurityGroups\": [\n                        {\n                            \"GroupName\": \"vee_manager\",\n                            \"GroupId\": \"sg-b1e4fed3\"\n                        }\n                    ],\n                    \"ClientToken\": \"mPiSb1447127511507\",\n                    \"SubnetId\": \"subnet-209f8848\",\n                    \"InstanceType\": \"c3.large\",\n                    \"NetworkInterfaces\": [\n                        {\n                            \"Status\": \"in-use\",\n                            \"SourceDestCheck\": true,\n                            \"VpcId\": \"vpc-2f9f8847\",\n                            \"Description\": null,\n                            \"Association\": {\n                                \"PublicIp\": \"54.194.202.98\",\n                                \"PublicDnsName\": \"ec2-54-194-202-98.eu-west-1.compute.amazonaws.com\",\n                                \"IpOwnerId\": \"375321850564\"\n                            },\n                            \"NetworkInterfaceId\": \"eni-4d46572a\",\n                            \"PrivateIpAddresses\": [\n                                {\n                                    \"PrivateDnsName\": \"ip-172-31-28-34.eu-west-1.compute.internal\",\n                                    \"Association\": {\n                                        \"PublicIp\": \"54.194.202.98\",\n                                        \"PublicDnsName\": \"ec2-54-194-202-98.eu-west-1.compute.amazonaws.com\",\n                                        \"IpOwnerId\": \"375321850564\"\n                                    },\n                                    \"Primary\": true,\n                                    \"PrivateIpAddress\": \"172.31.28.34\"\n                                }\n                            ],\n                            \"PrivateDnsName\": \"ip-172-31-28-34.eu-west-1.compute.internal\",\n                            \"Attachment\": {\n                                \"Status\": \"attached\",\n                                \"DeviceIndex\": 0,\n                                \"DeleteOnTermination\": true,\n                                \"AttachmentId\": \"eni-attach-bcd5b093\",\n                                \"AttachTime\": \"2015-11-10T03:51:52.000Z\"\n                            },\n                            \"Groups\": [\n                                {\n                                    \"GroupName\": \"vee_manager\",\n                                    \"GroupId\": \"sg-b1e4fed3\"\n                                }\n                            ],\n                            \"SubnetId\": \"subnet-209f8848\",\n                            \"OwnerId\": \"375321850564\",\n                            \"PrivateIpAddress\": \"172.31.28.34\"\n                        }\n                    ],\n                    \"SourceDestCheck\": true,\n                    \"Placement\": {\n                        \"Tenancy\": \"default\",\n                        \"GroupName\": null,\n                        \"AvailabilityZone\": \"eu-west-1b\"\n                    },\n                    \"Hypervisor\": \"xen\",\n                    \"BlockDeviceMappings\": [\n                        {\n                            \"DeviceName\": \"/dev/sda1\",\n                            \"Ebs\": {\n                                \"Status\": \"attached\",\n                                \"DeleteOnTermination\": true,\n                                \"VolumeId\": \"vol-8d43034e\",\n                                \"AttachTime\": \"2015-11-10T03:51:54.000Z\"\n                            }\n                        }\n                    ],\n                    \"Architecture\": \"x86_64\",\n                    \"StateReason\": {\n                        \"Message\": \"Client.UserInitiatedShutdown: User initiated shutdown\",\n                        \"Code\": \"Client.UserInitiatedShutdown\"\n                    },\n                    \"IamInstanceProfile\": {\n                        \"Id\": \"AIPAJBHZIV6N3CY2Z65G4\",\n                        \"Arn\": \"arn:aws:iam::375321850564:instance-profile/vee_manager\"\n                    },\n                    \"RootDeviceName\": \"/dev/sda1\",\n                    \"VirtualizationType\": \"paravirtual\",\n                    \"RootDeviceType\": \"ebs\",\n                    \"Tags\": [\n                        {\n                            \"Value\": \"VEE Live Manager (IAM)\",\n                            \"Key\": \"Name\"\n                        }\n                    ],\n                    \"AmiLaunchIndex\": 0\n                }\n            ]\n        },\n        {\n            \"OwnerId\": \"375321850564\",\n            \"ReservationId\": \"r-42dfa9e3\",\n            \"Groups\": [],\n            \"Instances\": [\n                {\n                    \"Monitoring\": {\n                        \"State\": \"disabled\"\n                    },\n                    \"PublicDnsName\": \"ec2-52-19-172-72.eu-west-1.compute.amazonaws.com\",\n                    \"State\": {\n                        \"Code\": 16,\n                        \"Name\": \"running\"\n                    },\n                    \"EbsOptimized\": true,\n                    \"LaunchTime\": \"2015-11-30T17:15:20.000Z\",\n                    \"PublicIpAddress\": \"52.19.172.72\",\n                    \"PrivateIpAddress\": \"172.32.8.165\",\n                    \"ProductCodes\": [\n                        {\n                            \"ProductCodeId\": \"6x5jmcajty9edm3f211pqjfn2\",\n                            \"ProductCodeType\": \"marketplace\"\n                        }\n                    ],\n                    \"VpcId\": \"vpc-df83c9ba\",\n                    \"StateTransitionReason\": null,\n                    \"InstanceId\": \"i-40fdf4f9\",\n                    \"ImageId\": \"ami-d652f6a5\",\n                    \"PrivateDnsName\": \"ip-172-32-8-165.eu-west-1.compute.internal\",\n                    \"KeyName\": \"LinuxEncoder\",\n                    \"SecurityGroups\": [\n                        {\n                            \"GroupName\": \"playlist_proxy\",\n                            \"GroupId\": \"sg-8763f6e3\"\n                        }\n                    ],\n                    \"ClientToken\": \"rMdGa1448903719686\",\n                    \"SubnetId\": \"subnet-4793b630\",\n                    \"InstanceType\": \"c4.large\",\n                    \"NetworkInterfaces\": [\n                        {\n                            \"Status\": \"in-use\",\n                            \"SourceDestCheck\": true,\n                            \"VpcId\": \"vpc-df83c9ba\",\n                            \"Description\": \"Primary network interface\",\n                            \"Association\": {\n                                \"PublicIp\": \"52.19.172.72\",\n                                \"PublicDnsName\": \"ec2-52-19-172-72.eu-west-1.compute.amazonaws.com\",\n                                \"IpOwnerId\": \"375321850564\"\n                            },\n                            \"NetworkInterfaceId\": \"eni-c835b380\",\n                            \"PrivateIpAddresses\": [\n                                {\n                                    \"PrivateDnsName\": \"ip-172-32-8-165.eu-west-1.compute.internal\",\n                                    \"Association\": {\n                                        \"PublicIp\": \"52.19.172.72\",\n                                        \"PublicDnsName\": \"ec2-52-19-172-72.eu-west-1.compute.amazonaws.com\",\n                                        \"IpOwnerId\": \"375321850564\"\n                                    },\n                                    \"Primary\": true,\n                                    \"PrivateIpAddress\": \"172.32.8.165\"\n                                }\n                            ],\n                            \"PrivateDnsName\": \"ip-172-32-8-165.eu-west-1.compute.internal\",\n                            \"Attachment\": {\n                                \"Status\": \"attached\",\n                                \"DeviceIndex\": 0,\n                                \"DeleteOnTermination\": true,\n                                \"AttachmentId\": \"eni-attach-beffed5a\",\n                                \"AttachTime\": \"2015-11-30T17:15:20.000Z\"\n                            },\n                            \"Groups\": [\n                                {\n                                    \"GroupName\": \"playlist_proxy\",\n                                    \"GroupId\": \"sg-8763f6e3\"\n                                }\n                            ],\n                            \"SubnetId\": \"subnet-4793b630\",\n                            \"OwnerId\": \"375321850564\",\n                            \"PrivateIpAddress\": \"172.32.8.165\"\n                        }\n                    ],\n                    \"SourceDestCheck\": true,\n                    \"Placement\": {\n                        \"Tenancy\": \"default\",\n                        \"GroupName\": null,\n                        \"AvailabilityZone\": \"eu-west-1c\"\n                    },\n                    \"Hypervisor\": \"xen\",\n                    \"BlockDeviceMappings\": [\n                        {\n                            \"DeviceName\": \"/dev/sda1\",\n                            \"Ebs\": {\n                                \"Status\": \"attached\",\n                                \"DeleteOnTermination\": true,\n                                \"VolumeId\": \"vol-1ca60bef\",\n                                \"AttachTime\": \"2015-11-30T17:15:22.000Z\"\n                            }\n                        }\n                    ],\n                    \"Architecture\": \"x86_64\",\n                    \"RootDeviceType\": \"ebs\",\n                    \"IamInstanceProfile\": {\n                        \"Id\": \"AIPAIBJEZV7QMNZJ75LFK\",\n                        \"Arn\": \"arn:aws:iam::375321850564:instance-profile/vee_encoder\"\n                    },\n                    \"RootDeviceName\": \"/dev/sda1\",\n                    \"VirtualizationType\": \"hvm\",\n                    \"Tags\": [\n                        {\n                            \"Value\": \"MEE PRO-A HLS Playlist Proxy\",\n                            \"Key\": \"Name\"\n                        }\n                    ],\n                    \"AmiLaunchIndex\": 0\n                }\n            ]\n        },\n        {\n            \"OwnerId\": \"375321850564\",\n            \"ReservationId\": \"r-6a888f26\",\n            \"Groups\": [],\n            \"Instances\": [\n                {\n                    \"Monitoring\": {\n                        \"State\": \"disabled\"\n                    },\n                    \"PublicDnsName\": null,\n                    \"KernelId\": \"aki-71665e05\",\n                    \"State\": {\n                        \"Code\": 80,\n                        \"Name\": \"stopped\"\n                    },\n                    \"EbsOptimized\": false,\n                    \"LaunchTime\": \"2015-11-14T07:23:39.000Z\",\n                    \"PrivateIpAddress\": \"172.31.22.139\",\n                    \"ProductCodes\": [],\n                    \"VpcId\": \"vpc-2f9f8847\",\n                    \"StateTransitionReason\": null,\n                    \"InstanceId\": \"i-c42f608a\",\n                    \"ImageId\": \"ami-8e987ef9\",\n                    \"PrivateDnsName\": \"ip-172-31-22-139.eu-west-1.compute.internal\",\n                    \"KeyName\": \"VEE-PRO1-EU-WEST\",\n                    \"SecurityGroups\": [\n                        {\n                            \"GroupName\": \"vee_manager\",\n                            \"GroupId\": \"sg-b1e4fed3\"\n                        }\n                    ],\n                    \"ClientToken\": \"cemKf1391159920233\",\n                    \"SubnetId\": \"subnet-209f8848\",\n                    \"InstanceType\": \"m1.medium\",\n                    \"NetworkInterfaces\": [\n                        {\n                            \"Status\": \"in-use\",\n                            \"SourceDestCheck\": true,\n                            \"VpcId\": \"vpc-2f9f8847\",\n                            \"Description\": null,\n                            \"NetworkInterfaceId\": \"eni-0340bd66\",\n                            \"PrivateIpAddresses\": [\n                                {\n                                    \"PrivateDnsName\": \"ip-172-31-22-139.eu-west-1.compute.internal\",\n                                    \"Primary\": true,\n                                    \"PrivateIpAddress\": \"172.31.22.139\"\n                                }\n                            ],\n                            \"PrivateDnsName\": \"ip-172-31-22-139.eu-west-1.compute.internal\",\n                            \"Attachment\": {\n                                \"Status\": \"attached\",\n                                \"DeviceIndex\": 0,\n                                \"DeleteOnTermination\": true,\n                                \"AttachmentId\": \"eni-attach-423d060e\",\n                                \"AttachTime\": \"2014-01-31T09:18:40.000Z\"\n                            },\n                            \"Groups\": [\n                                {\n                                    \"GroupName\": \"vee_manager\",\n                                    \"GroupId\": \"sg-b1e4fed3\"\n                                }\n                            ],\n                            \"SubnetId\": \"subnet-209f8848\",\n                            \"OwnerId\": \"375321850564\",\n                            \"PrivateIpAddress\": \"172.31.22.139\"\n                        }\n                    ],\n                    \"SourceDestCheck\": true,\n                    \"Placement\": {\n                        \"Tenancy\": \"default\",\n                        \"GroupName\": null,\n                        \"AvailabilityZone\": \"eu-west-1b\"\n                    },\n                    \"Hypervisor\": \"xen\",\n                    \"BlockDeviceMappings\": [\n                        {\n                            \"DeviceName\": \"/dev/sda1\",\n                            \"Ebs\": {\n                                \"Status\": \"attached\",\n                                \"DeleteOnTermination\": true,\n                                \"VolumeId\": \"vol-3eaa9b12\",\n                                \"AttachTime\": \"2014-01-31T09:18:44.000Z\"\n                            }\n                        }\n                    ],\n                    \"Architecture\": \"x86_64\",\n                    \"StateReason\": {\n                        \"Message\": \"Client.InstanceInitiatedShutdown: Instance initiated shutdown\",\n                        \"Code\": \"Client.InstanceInitiatedShutdown\"\n                    },\n                    \"RootDeviceName\": \"/dev/sda1\",\n                    \"VirtualizationType\": \"paravirtual\",\n                    \"RootDeviceType\": \"ebs\",\n                    \"Tags\": [\n                        {\n                            \"Value\": \"old VEE Live Manager\",\n                            \"Key\": \"Name\"\n                        }\n                    ],\n                    \"AmiLaunchIndex\": 0\n                }\n            ]\n        }\n    ]\n}\n';

var _user$project$InstanceDecoder$ReservationList = function (a) {
	return {reservations: a};
};
var _user$project$InstanceDecoder$Reservation = F4(
	function (a, b, c, d) {
		return {owner_id: a, reservation_id: b, groups: c, instances: d};
	});
var _user$project$InstanceDecoder$Group = F2(
	function (a, b) {
		return {group_name: a, group_id: b};
	});
var _user$project$InstanceDecoder$decodeGroup = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'GroupId',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'GroupName',
		_elm_lang$core$Json_Decode$string,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$Group)));
var _user$project$InstanceDecoder$Instance = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return function (_1) {
																											return function (_2) {
																												return function (_3) {
																													return function (_4) {
																														return function (_5) {
																															return function (_6) {
																																return {monitoring: a, public_dns_name: b, kernel_id: c, state: d, ebs_optimized: e, launch_time: f, public_ip_address: g, private_ip_address: h, product_codes: i, vpc_id: j, state_transition_reason: k, instance_id: l, image_id: m, private_dns_name: n, key_name: o, security_groups: p, client_token: q, subnet_id: r, instance_type: s, network_interfaces: t, source_dest_check: u, placement: v, hypervisor: w, block_device_mappings: x, architecture: y, state_reason: z, iam_instance_profile: _1, root_device_name: _2, root_device_type: _3, virtualization_type: _4, tags: _5, ami_launch_index: _6};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$InstanceDecoder$Monitoring = function (a) {
	return {state: a};
};
var _user$project$InstanceDecoder$decodeMonitoring = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'State',
	_elm_lang$core$Json_Decode$string,
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$Monitoring));
var _user$project$InstanceDecoder$State = F2(
	function (a, b) {
		return {code: a, name: b};
	});
var _user$project$InstanceDecoder$decodeState = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Name',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'Code',
		_elm_lang$core$Json_Decode$int,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$State)));
var _user$project$InstanceDecoder$ProductCode = F2(
	function (a, b) {
		return {product_code_id: a, product_code_type: b};
	});
var _user$project$InstanceDecoder$decodeProductCode = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'ProductCodeType',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'ProductCodeId',
		_elm_lang$core$Json_Decode$string,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$ProductCode)));
var _user$project$InstanceDecoder$NetworkInterface = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return {status: a, source_dest_check: b, vpc_id: c, description: d, association: e, network_interface_id: f, private_ip_addresses: g, private_dns_name: h, attachment: i, groups: j, subnet_id: k, owner_id: l, private_ip_address: m};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$InstanceDecoder$Association = F3(
	function (a, b, c) {
		return {public_ip: a, public_dns_name: b, ip_owner_id: c};
	});
var _user$project$InstanceDecoder$decodeAssociation = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'IpOwnerId',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'PublicDnsName',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'PublicIp',
			_elm_lang$core$Json_Decode$string,
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$Association))));
var _user$project$InstanceDecoder$PrivateIpAddress = F4(
	function (a, b, c, d) {
		return {private_dns_name: a, association: b, primary: c, private_ip_address: d};
	});
var _user$project$InstanceDecoder$decodePrivateIpAddress = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'PrivateIpAddress',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'Primary',
		_elm_lang$core$Json_Decode$bool,
		A4(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
			'Association',
			_user$project$InstanceDecoder$decodeAssociation,
			A3(_user$project$InstanceDecoder$Association, '', '', ''),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'PrivateDnsName',
				_elm_lang$core$Json_Decode$string,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$PrivateIpAddress)))));
var _user$project$InstanceDecoder$Attachment = F5(
	function (a, b, c, d, e) {
		return {status: a, device_index: b, delete_on_termination: c, attachment_id: d, attach_time: e};
	});
var _user$project$InstanceDecoder$decodeAttachment = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'AttachTime',
	_user$project$Decode_Utils$decodeDate,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'AttachmentId',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'DeleteOnTermination',
			_elm_lang$core$Json_Decode$bool,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'DeviceIndex',
				_elm_lang$core$Json_Decode$int,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'Status',
					_elm_lang$core$Json_Decode$string,
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$Attachment))))));
var _user$project$InstanceDecoder$decodeNetworkInterface = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'PrivateIpAddress',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'OwnerId',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'SubnetId',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'Groups',
				_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodeGroup),
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'Attachment',
					_user$project$InstanceDecoder$decodeAttachment,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'PrivateDnsName',
						_elm_lang$core$Json_Decode$string,
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'PrivateIpAddresses',
							_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodePrivateIpAddress),
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'NetworkInterfaceId',
								_elm_lang$core$Json_Decode$string,
								A4(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
									'Association',
									_user$project$InstanceDecoder$decodeAssociation,
									A3(_user$project$InstanceDecoder$Association, '', '', ''),
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'Description',
										_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$string),
										A3(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
											'VpcId',
											_elm_lang$core$Json_Decode$string,
											A3(
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
												'SourceDestCheck',
												_elm_lang$core$Json_Decode$bool,
												A3(
													_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
													'Status',
													_elm_lang$core$Json_Decode$string,
													_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$NetworkInterface))))))))))))));
var _user$project$InstanceDecoder$Placement = F3(
	function (a, b, c) {
		return {tenancy: a, group_name: b, availability_zone: c};
	});
var _user$project$InstanceDecoder$decodePlacement = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'AvailabilityZone',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'GroupName',
		_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$string),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'Tenancy',
			_elm_lang$core$Json_Decode$string,
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$Placement))));
var _user$project$InstanceDecoder$BlockDeviceMapping = F2(
	function (a, b) {
		return {device_name: a, ebs: b};
	});
var _user$project$InstanceDecoder$Ebs = F4(
	function (a, b, c, d) {
		return {status: a, delete_on_termination: b, volume_id: c, attach_time: d};
	});
var _user$project$InstanceDecoder$decodeEbs = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'AttachTime',
	_user$project$Decode_Utils$decodeDate,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'VolumeId',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'DeleteOnTermination',
			_elm_lang$core$Json_Decode$bool,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'Status',
				_elm_lang$core$Json_Decode$string,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$Ebs)))));
var _user$project$InstanceDecoder$decodeBlockDeviceMapping = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Ebs',
	_user$project$InstanceDecoder$decodeEbs,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'DeviceName',
		_elm_lang$core$Json_Decode$string,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$BlockDeviceMapping)));
var _user$project$InstanceDecoder$StateReason = F2(
	function (a, b) {
		return {message: a, code: b};
	});
var _user$project$InstanceDecoder$decodeStateReason = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Code',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'Message',
		_elm_lang$core$Json_Decode$string,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$StateReason)));
var _user$project$InstanceDecoder$IamInstanceProfile = F2(
	function (a, b) {
		return {id: a, arn: b};
	});
var _user$project$InstanceDecoder$decodeIamInstanceProfile = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Arn',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'Id',
		_elm_lang$core$Json_Decode$string,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$IamInstanceProfile)));
var _user$project$InstanceDecoder$Tag = F2(
	function (a, b) {
		return {value: a, key: b};
	});
var _user$project$InstanceDecoder$decodeTag = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Key',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'Value',
		_elm_lang$core$Json_Decode$string,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$Tag)));
var _user$project$InstanceDecoder$decodeInstance = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'AmiLaunchIndex',
	_elm_lang$core$Json_Decode$int,
	A4(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
		'Tags',
		_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodeTag),
		_elm_lang$core$Native_List.fromArray(
			[]),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'RootDeviceType',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'VirtualizationType',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'RootDeviceName',
					_elm_lang$core$Json_Decode$string,
					A4(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
						'IamInstanceProfile',
						_user$project$InstanceDecoder$decodeIamInstanceProfile,
						A2(_user$project$InstanceDecoder$IamInstanceProfile, '', ''),
						A4(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
							'StateReason',
							_user$project$InstanceDecoder$decodeStateReason,
							A2(_user$project$InstanceDecoder$StateReason, '', ''),
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'Architecture',
								_elm_lang$core$Json_Decode$string,
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'BlockDeviceMappings',
									_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodeBlockDeviceMapping),
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'Hypervisor',
										_elm_lang$core$Json_Decode$string,
										A4(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
											'Placement',
											_user$project$InstanceDecoder$decodePlacement,
											A3(_user$project$InstanceDecoder$Placement, '', _elm_lang$core$Maybe$Nothing, ''),
											A3(
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
												'SourceDestCheck',
												_elm_lang$core$Json_Decode$bool,
												A3(
													_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
													'NetworkInterfaces',
													_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodeNetworkInterface),
													A3(
														_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
														'InstanceType',
														_elm_lang$core$Json_Decode$string,
														A3(
															_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
															'SubnetId',
															_elm_lang$core$Json_Decode$string,
															A3(
																_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																'ClientToken',
																_elm_lang$core$Json_Decode$string,
																A3(
																	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																	'SecurityGroups',
																	_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodeGroup),
																	A4(
																		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																		'KeyName',
																		_elm_lang$core$Json_Decode$string,
																		'',
																		A3(
																			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																			'PrivateDnsName',
																			_elm_lang$core$Json_Decode$string,
																			A3(
																				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																				'ImageId',
																				_elm_lang$core$Json_Decode$string,
																				A3(
																					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																					'InstanceId',
																					_elm_lang$core$Json_Decode$string,
																					A3(
																						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																						'StateTransitionReason',
																						_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$string),
																						A3(
																							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																							'VpcId',
																							_elm_lang$core$Json_Decode$string,
																							A3(
																								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																								'ProductCodes',
																								_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodeProductCode),
																								A3(
																									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																									'PrivateIpAddress',
																									_elm_lang$core$Json_Decode$string,
																									A4(
																										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																										'PublicIpAddress',
																										_elm_lang$core$Json_Decode$string,
																										'none',
																										A3(
																											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																											'LaunchTime',
																											_user$project$Decode_Utils$decodeDate,
																											A3(
																												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																												'EbsOptimized',
																												_elm_lang$core$Json_Decode$bool,
																												A3(
																													_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																													'State',
																													_user$project$InstanceDecoder$decodeState,
																													A4(
																														_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																														'KernelId',
																														_elm_lang$core$Json_Decode$string,
																														'No KernelId',
																														A3(
																															_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																															'PublicDnsName',
																															_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$string),
																															A3(
																																_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
																																'Monitoring',
																																_user$project$InstanceDecoder$decodeMonitoring,
																																_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$Instance)))))))))))))))))))))))))))))))));
var _user$project$InstanceDecoder$decodeReservation = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Instances',
	_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodeInstance),
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'Groups',
		_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodeGroup),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'ReservationId',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'OwnerId',
				_elm_lang$core$Json_Decode$string,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$Reservation)))));
var _user$project$InstanceDecoder$decodeReservationList = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'Reservations',
	_elm_lang$core$Json_Decode$list(_user$project$InstanceDecoder$decodeReservation),
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$InstanceDecoder$ReservationList));
var _user$project$InstanceDecoder$decodeAll = A2(_elm_lang$core$Json_Decode$decodeString, _user$project$InstanceDecoder$decodeReservationList, _user$project$InstanceJson$json);

var _user$project$JsonCss$Title = {ctor: 'Title'};
var _user$project$JsonCss$InstanceAndAttachmentTable = {ctor: 'InstanceAndAttachmentTable'};
var _user$project$JsonCss$SmallError = {ctor: 'SmallError'};
var _user$project$JsonCss$NotifyTable = {ctor: 'NotifyTable'};
var _user$project$JsonCss$Error = {ctor: 'Error'};
var _user$project$JsonCss$AttachmentTable = {ctor: 'AttachmentTable'};
var _user$project$JsonCss$WideRow = {ctor: 'WideRow'};
var _user$project$JsonCss$InstanceTable = {ctor: 'InstanceTable'};
var _user$project$JsonCss$VolumeTable = {ctor: 'VolumeTable'};
var _user$project$JsonCss$css = _user$project$Css$stylesheet(
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Css_Elements$body(
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$fontSize(
					_user$project$Css$pt(11)),
					_user$project$Css$backgroundColor(
					A3(_user$project$Css$rgb, 255, 242, 225)),
					_user$project$Css$fontFamily(_user$project$Css$sansSerif),
					_user$project$Css$position(_user$project$Css$relative)
				])),
			_user$project$Css_Elements$tr(
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Css$nthChild,
					'odd',
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$Css$backgroundColor(
							A3(_user$project$Css$rgb, 160, 160, 160))
						]))
				])),
			_user$project$Css_Elements$tr(
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Css$nthChild,
					'even',
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$Css$backgroundColor(
							A3(_user$project$Css$rgb, 255, 255, 255))
						]))
				])),
			_user$project$Css_Elements$table(
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$borderStyle(_user$project$Css$solid),
					_user$project$Css$borderCollapse(_user$project$Css$collapse),
					_user$project$Css$borderColor(
					A3(_user$project$Css$rgb, 0, 0, 0)),
					_user$project$Css$borderLeftWidth(
					_user$project$Css$px(1)),
					_user$project$Css$borderRightWidth(
					_user$project$Css$px(1)),
					_user$project$Css$borderTopWidth(
					_user$project$Css$px(1)),
					_user$project$Css$borderBottomWidth(
					_user$project$Css$px(1))
				])),
			_user$project$Css_Elements$td(
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$borderStyle(_user$project$Css$solid),
					_user$project$Css$borderColor(
					A3(_user$project$Css$rgb, 0, 0, 0)),
					_user$project$Css$borderTopWidth(
					_user$project$Css$px(1)),
					_user$project$Css$borderBottomWidth(
					_user$project$Css$px(1)),
					_user$project$Css$padding(
					_user$project$Css$px(5))
				])),
			_user$project$Css_Elements$th(
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$borderStyle(_user$project$Css$solid),
					_user$project$Css$borderColor(
					A3(_user$project$Css$rgb, 0, 0, 0)),
					_user$project$Css$borderLeftWidth(
					_user$project$Css$px(1)),
					_user$project$Css$borderRightWidth(
					_user$project$Css$px(1)),
					_user$project$Css$borderTopWidth(
					_user$project$Css$px(1)),
					_user$project$Css$borderBottomWidth(
					_user$project$Css$px(1)),
					_user$project$Css$fontSize(
					_user$project$Css$pt(12))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$AttachmentTable,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$padding(_user$project$Css$zero)
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$Error,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$backgroundColor(
					A3(_user$project$Css$rgb, 255, 53, 53)),
					_user$project$Css$width(
					_user$project$Css$px(750)),
					A2(_user$project$Css$property, 'clear', 'both'),
					_user$project$Css$textAlign(_user$project$Css$center),
					_user$project$Css$fontSize(
					_user$project$Css$pt(16)),
					_user$project$Css$marginLeft(
					_user$project$Css$px(375)),
					A3(
					_user$project$Css$border3,
					_user$project$Css$px(2),
					_user$project$Css$solid,
					A3(_user$project$Css$rgb, 0, 0, 0))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$NotifyTable,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$width(
					_user$project$Css$pct(35))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$InstanceTable,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$height(
					_user$project$Css$px(70)),
					_user$project$Css$width(
					_user$project$Css$pct(100))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$AttachmentTable,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$height(
					_user$project$Css$px(70)),
					_user$project$Css$width(
					_user$project$Css$pct(100))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$InstanceAndAttachmentTable,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$width(
					_user$project$Css$pct(40)),
					_user$project$Css$marginTop(
					_user$project$Css$px(25)),
					A2(
					_user$project$Css$nthChild,
					'even',
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_user$project$Css$property, 'float', 'right'),
							_user$project$Css$marginRight(
							_user$project$Css$pct(5))
						]))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$InstanceAndAttachmentTable,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Css$nthChild,
					'odd',
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_user$project$Css$property, 'float', 'left'),
							_user$project$Css$marginLeft(
							_user$project$Css$pct(5))
						]))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$InstanceAndAttachmentTable,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Css$nthLastOfType,
					'1',
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_user$project$Css$property, 'clear', 'both'),
							_user$project$Css$marginLeft(
							_user$project$Css$pct(30))
						]))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$SmallError,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$textAlign(_user$project$Css$center),
					_user$project$Css$backgroundColor(
					A3(_user$project$Css$rgb, 255, 53, 53))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$VolumeTable,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$width(
					_user$project$Css$pct(40)),
					_user$project$Css$margin(
					_user$project$Css$px(10)),
					_user$project$Css$marginTop(
					_user$project$Css$px(15)),
					A2(
					_user$project$Css$nthChild,
					'even',
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_user$project$Css$property, 'float', 'right'),
							_user$project$Css$marginRight(
							_user$project$Css$pct(5))
						]))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$VolumeTable,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Css$nthChild,
					'odd',
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_user$project$Css$property, 'float', 'left'),
							_user$project$Css$marginLeft(
							_user$project$Css$pct(7))
						]))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_user$project$Css_ops['.'], x, y);
				}),
			_user$project$JsonCss$Title,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css$textAlign(_user$project$Css$center),
					_user$project$Css$fontSize(
					_user$project$Css$pt(20)),
					_user$project$Css$fontWeight(_user$project$Css$bold),
					_user$project$Css$marginTop(
					_user$project$Css$px(20))
				]))
		]));

var _user$project$DisplayJson$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$none;
};
var _user$project$DisplayJson$checkMultiplyAttachedVolume = function (volume) {
	var _p0 = _elm_lang$core$List$length(volume.attachments);
	switch (_p0) {
		case 0:
			return _elm_lang$core$Maybe$Nothing;
		case 1:
			return _elm_lang$core$Maybe$Nothing;
		default:
			return _elm_lang$core$Maybe$Just(true);
	}
};
var _user$project$DisplayJson$getMultiplyAttachedVolumes = function (model) {
	return _elm_lang$core$List$length(
		A2(_elm_lang$core$List$filterMap, _user$project$DisplayJson$checkMultiplyAttachedVolume, model.volumes.volumes));
};
var _user$project$DisplayJson$checkUnattachedVolume = function (volume) {
	var _p1 = volume.attachments;
	if (_p1.ctor === '[]') {
		return _elm_lang$core$Maybe$Just(true);
	} else {
		if (_p1._1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			return _elm_lang$core$Maybe$Just(true);
		}
	}
};
var _user$project$DisplayJson$getUnattachedVolumes = function (model) {
	return _elm_lang$core$List$length(
		A2(_elm_lang$core$List$filterMap, _user$project$DisplayJson$checkUnattachedVolume, model.volumes.volumes));
};
var _user$project$DisplayJson$printBlockDeviceMapping = function (device) {
	return _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$tr,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$th,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$style(
							_elm_lang$core$Native_List.fromArray(
								[
									{ctor: '_Tuple2', _0: 'width', _1: '50%'}
								]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Block Device Name : ')
						])),
					A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(device.device_name)
						]))
				])),
			A2(
			_elm_lang$html$Html$tr,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$th,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$style(
							_elm_lang$core$Native_List.fromArray(
								[
									{ctor: '_Tuple2', _0: 'width', _1: '50%'}
								]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Block Device Volume Id : ')
						])),
					A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(device.ebs.volume_id)
						]))
				]))
		]);
};
var _user$project$DisplayJson$getInstanceId = function (attachment) {
	return attachment.instance_id;
};
var _user$project$DisplayJson$getVolumeTuple = function (volume) {
	var ids = A2(_elm_lang$core$List$map, _user$project$DisplayJson$getInstanceId, volume.attachments);
	return A2(
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		volume,
		ids);
};
var _user$project$DisplayJson$dateToString = function (date) {
	return A2(_mgold$elm_date_format$Date_Format$format, '%d/%m/%Y', date);
};
var _user$project$DisplayJson$printAttachmentDelete = function (attachment) {
	return A2(
		_elm_lang$html$Html$td,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(
				_elm_lang$core$Basics$toString(attachment.delete_on_termination))
			]));
};
var _user$project$DisplayJson$printAttachmentState = function (attachment) {
	return A2(
		_elm_lang$html$Html$td,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(attachment.state)
			]));
};
var _user$project$DisplayJson$getReservationInstances = function (reservation) {
	return reservation.instances;
};
var _user$project$DisplayJson$getTotalInstances = function (model) {
	return _elm_lang$core$List$length(
		A2(_elm_lang$core$List$concatMap, _user$project$DisplayJson$getReservationInstances, model.instances.reservations));
};
var _user$project$DisplayJson$printTotalDisplay = function (model) {
	return _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$ul,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$id('TotalVolumesAndInstances')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$li,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Total Volumes: ',
								_elm_lang$core$Basics$toString(
									_elm_lang$core$List$length(model.volumes.volumes))))
						])),
					A2(
					_elm_lang$html$Html$li,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Total Instances: ',
								_elm_lang$core$Basics$toString(
									_user$project$DisplayJson$getTotalInstances(model))))
						]))
				])),
			A2(
			_elm_lang$html$Html$ul,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$id('VolumeChecks')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$li,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Unattached Volumes: ',
								_elm_lang$core$Basics$toString(
									_user$project$DisplayJson$getUnattachedVolumes(model))))
						])),
					A2(
					_elm_lang$html$Html$li,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Multiply-attached Volumes: ',
								_elm_lang$core$Basics$toString(
									_user$project$DisplayJson$getMultiplyAttachedVolumes(model))))
						]))
				]))
		]);
};
var _user$project$DisplayJson$notifyEmptyAttachments = function (volume) {
	var _p2 = volume.attachments;
	if (_p2.ctor === '[]') {
		return A2(
			_elm_lang$html$Html$tr,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('SmallError')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(
					A2(_elm_lang$core$Basics_ops['++'], 'Empty attachment list in volume: ', volume.volume_id))
				]));
	} else {
		return A2(
			_elm_lang$html$Html$tr,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(
					A2(_elm_lang$core$Basics_ops['++'], 'Attachment not empty. Volume Id : ', volume.volume_id))
				]));
	}
};
var _user$project$DisplayJson$update = F2(
	function (msg, model) {
		var _p3 = msg;
		switch (_p3.ctor) {
			case 'MorePlease':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'RemoveVolume':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			default:
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});
var _user$project$DisplayJson$attachmentToDictValue = function (attachment) {
	return attachment;
};
var _user$project$DisplayJson$volumeToDictEntry = function (volume) {
	return {
		ctor: '_Tuple2',
		_0: volume.volume_id,
		_1: A2(_elm_lang$core$List$map, _user$project$DisplayJson$attachmentToDictValue, volume.attachments)
	};
};
var _user$project$DisplayJson$instanceToFullDictEntry = function (instance) {
	return {ctor: '_Tuple2', _0: instance.instance_id, _1: instance};
};
var _user$project$DisplayJson$reservationToFullDictEntry = function (reservation) {
	return A2(_elm_lang$core$List$map, _user$project$DisplayJson$instanceToFullDictEntry, reservation.instances);
};
var _user$project$DisplayJson$volumeToFullDictEntry = function (volume) {
	return {ctor: '_Tuple2', _0: volume.volume_id, _1: volume};
};
var _user$project$DisplayJson$Model = F8(
	function (a, b, c, d, e, f, g, h) {
		return {topic: a, gifUrl: b, volumes: c, instances: d, volumeDict: e, fullVolumeDict: f, instanceDict: g, fullInstanceDict: h};
	});
var _user$project$DisplayJson$InstanceVolume = F2(
	function (a, b) {
		return {deviceName: a, ebs: b};
	});
var _user$project$DisplayJson$blockDeviceToDictValue = function (block_device) {
	return A2(_user$project$DisplayJson$InstanceVolume, block_device.device_name, block_device.ebs);
};
var _user$project$DisplayJson$instanceToDictEntry = function (instance) {
	return {
		ctor: '_Tuple2',
		_0: instance.instance_id,
		_1: A2(_elm_lang$core$List$map, _user$project$DisplayJson$blockDeviceToDictValue, instance.block_device_mappings)
	};
};
var _user$project$DisplayJson$reservationToDictEntries = function (reservation) {
	return A2(_elm_lang$core$List$map, _user$project$DisplayJson$instanceToDictEntry, reservation.instances);
};
var _user$project$DisplayJson$init = function (topic) {
	var instanceJson = function () {
		var _p4 = _user$project$InstanceDecoder$decodeAll;
		if (_p4.ctor === 'Ok') {
			return _p4._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'DisplayJson',
				{
					start: {line: 60, column: 13},
					end: {line: 65, column: 79}
				},
				_p4)(
				A2(_elm_lang$core$Basics_ops['++'], 'Could not decode instance json. ', _p4._0));
		}
	}();
	var instanceDict = _elm_lang$core$Dict$fromList(
		A2(_elm_lang$core$List$concatMap, _user$project$DisplayJson$reservationToDictEntries, instanceJson.reservations));
	var fullInstanceDict = _elm_lang$core$Dict$fromList(
		A2(_elm_lang$core$List$concatMap, _user$project$DisplayJson$reservationToFullDictEntry, instanceJson.reservations));
	var volumeJson = function () {
		var _p6 = _user$project$VolumeDecoder$decodeAll;
		if (_p6.ctor === 'Ok') {
			return _p6._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'DisplayJson',
				{
					start: {line: 52, column: 13},
					end: {line: 57, column: 77}
				},
				_p6)(
				A2(_elm_lang$core$Basics_ops['++'], 'Could not decode volume json. ', _p6._0));
		}
	}();
	var volumeDict = _elm_lang$core$Dict$fromList(
		A2(_elm_lang$core$List$map, _user$project$DisplayJson$volumeToDictEntry, volumeJson.volumes));
	var fullVolumeDict = _elm_lang$core$Dict$fromList(
		A2(_elm_lang$core$List$map, _user$project$DisplayJson$volumeToFullDictEntry, volumeJson.volumes));
	return {
		ctor: '_Tuple2',
		_0: A8(_user$project$DisplayJson$Model, topic, 'waiting.gif', volumeJson, instanceJson, volumeDict, fullVolumeDict, instanceDict, fullInstanceDict),
		_1: _elm_lang$core$Platform_Cmd$none
	};
};
var _user$project$DisplayJson$RemoveInvalidVolume = function (a) {
	return {ctor: 'RemoveInvalidVolume', _0: a};
};
var _user$project$DisplayJson$notifyInvalidVolume = function (volume_id) {
	return _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$tr,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('SmallError')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Instance Id not belonging to any known instances')
						])),
					A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$button,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('btn btn-default'),
									_elm_lang$html$Html_Events$onClick(
									_user$project$DisplayJson$RemoveInvalidVolume(volume_id))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Remove Volume')
								]))
						]))
				]))
		]);
};
var _user$project$DisplayJson$printMatchingInstance = F2(
	function (volume, possibleInstance) {
		var _p8 = possibleInstance;
		if (_p8.ctor === 'Just') {
			return _elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$tr,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$th,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Create Time : ')
								])),
							A2(
							_elm_lang$html$Html$td,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									_elm_lang$core$Basics$toString(volume.create_time))
								]))
						])),
					A2(
					_elm_lang$html$Html$tr,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$th,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Volume Size : ')
								])),
							A2(
							_elm_lang$html$Html$td,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									_elm_lang$core$Basics$toString(volume.size))
								]))
						])),
					A2(
					_elm_lang$html$Html$tr,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$th,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(' Volume Type : ')
								])),
							A2(
							_elm_lang$html$Html$td,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(volume.volume_type)
								]))
						])),
					A2(
					_elm_lang$html$Html$tr,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$th,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Iops : ')
								])),
							A2(
							_elm_lang$html$Html$td,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									_elm_lang$core$Basics$toString(volume.iops))
								]))
						]))
				]);
		} else {
			return _user$project$DisplayJson$notifyInvalidVolume(volume.volume_id);
		}
	});
var _user$project$DisplayJson$printAttachmentInfo = F3(
	function (model, volume, attachment) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$tr,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$th,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$style(
									_elm_lang$core$Native_List.fromArray(
										[
											{ctor: '_Tuple2', _0: 'width', _1: '50%'}
										]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Volume Id : ')
								])),
							A2(
							_elm_lang$html$Html$td,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(volume.volume_id)
								]))
						])),
					A2(
					_elm_lang$html$Html$tr,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$th,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Instance Id : ')
								])),
							A2(
							_elm_lang$html$Html$td,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(attachment.instance_id)
								]))
						]))
				]),
			A2(
				_user$project$DisplayJson$printMatchingInstance,
				volume,
				A2(_elm_lang$core$Dict$get, attachment.instance_id, model.fullInstanceDict)));
	});
var _user$project$DisplayJson$printInstancesForVolume = F2(
	function (model, volume) {
		var _p9 = volume.attachments;
		if (_p9.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('Error')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$p,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Volume not attached to an instance.')
								])),
							A2(
							_elm_lang$html$Html$p,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(
									A2(_elm_lang$core$Basics_ops['++'], 'Volume Id: ', volume.volume_id))
								])),
							A2(
							_elm_lang$html$Html$button,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('btn btn-default'),
									_elm_lang$html$Html_Events$onClick(
									_user$project$DisplayJson$RemoveInvalidVolume(volume.volume_id))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Remove Invalid Volume')
								]))
						]))
				]);
		} else {
			if (_p9._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$table,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('table table-striped table-bordered table-hover VolumeTable')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$tbody,
								_elm_lang$core$Native_List.fromArray(
									[]),
								A2(
									_elm_lang$core$List$concatMap,
									A2(_user$project$DisplayJson$printAttachmentInfo, model, volume),
									volume.attachments))
							]))
					]);
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('Error')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('Attachment format not recognized')
							]))
					]);
			}
		}
	});
var _user$project$DisplayJson$RemoveVolume = function (a) {
	return {ctor: 'RemoveVolume', _0: a};
};
var _user$project$DisplayJson$printMatchingVolume = F4(
	function (model, block_device, volumeId, attachments) {
		var _p10 = attachments;
		if (_p10.ctor === 'Just') {
			var _p12 = _p10._0;
			var _p11 = _p12;
			if (_p11.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$tr,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$td,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$html$Html$button,
										_elm_lang$core$Native_List.fromArray(
											[
												_elm_lang$html$Html_Attributes$class('btn btn-default'),
												_elm_lang$html$Html_Events$onClick(
												_user$project$DisplayJson$RemoveVolume(volumeId))
											]),
										_elm_lang$core$Native_List.fromArray(
											[
												_elm_lang$html$Html$text('Remove volume')
											]))
									]))
							]))
					]);
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$tr,
						_elm_lang$core$Native_List.fromArray(
							[]),
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$th,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$style(
											_elm_lang$core$Native_List.fromArray(
												[
													{ctor: '_Tuple2', _0: 'width', _1: '100%'}
												]))
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('State :')
										]))
								]),
							A2(_elm_lang$core$List$map, _user$project$DisplayJson$printAttachmentState, _p12))),
						A2(
						_elm_lang$html$Html$tr,
						_elm_lang$core$Native_List.fromArray(
							[]),
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$th,
									_elm_lang$core$Native_List.fromArray(
										[]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('Delete on Termination :')
										]))
								]),
							A2(_elm_lang$core$List$map, _user$project$DisplayJson$printAttachmentDelete, _p12))),
						A2(
						_elm_lang$html$Html$tr,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$th,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text('Attach time : ')
									])),
								A2(
								_elm_lang$html$Html$td,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text(
										_user$project$DisplayJson$dateToString(block_device.ebs.attach_time))
									]))
							]))
					]);
			}
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$tr,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$td,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$button,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$class('btn btn-default'),
											_elm_lang$html$Html_Events$onClick(
											_user$project$DisplayJson$RemoveVolume(volumeId))
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('Remove volume')
										]))
								]))
						]))
				]);
		}
	});
var _user$project$DisplayJson$printVolumeAndEbs = F2(
	function (model, block_device) {
		return A4(
			_user$project$DisplayJson$printMatchingVolume,
			model,
			block_device,
			block_device.ebs.volume_id,
			A2(_elm_lang$core$Dict$get, block_device.ebs.volume_id, model.volumeDict));
	});
var _user$project$DisplayJson$printVolumesForInstance = F2(
	function (model, instance) {
		return A2(
			_elm_lang$html$Html$table,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('table table-striped table-bordered table-hover')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$tbody,
					_elm_lang$core$Native_List.fromArray(
						[]),
					A2(
						_elm_lang$core$List$concatMap,
						_user$project$DisplayJson$printVolumeAndEbs(model),
						instance.block_device_mappings))
				]));
	});
var _user$project$DisplayJson$printInstance = F2(
	function (model, instance) {
		return _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('InstanceAndAttachmentTable')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$table,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('table table-striped table-hover table-bordered InstanceTable')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$tbody,
								_elm_lang$core$Native_List.fromArray(
									[]),
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Native_List.fromArray(
										[
											A2(
											_elm_lang$html$Html$tr,
											_elm_lang$core$Native_List.fromArray(
												[]),
											_elm_lang$core$Native_List.fromArray(
												[
													A2(
													_elm_lang$html$Html$th,
													_elm_lang$core$Native_List.fromArray(
														[]),
													_elm_lang$core$Native_List.fromArray(
														[
															_elm_lang$html$Html$text('Instance Id:')
														])),
													A2(
													_elm_lang$html$Html$td,
													_elm_lang$core$Native_List.fromArray(
														[]),
													_elm_lang$core$Native_List.fromArray(
														[
															_elm_lang$html$Html$text(instance.instance_id)
														]))
												]))
										]),
									A2(_elm_lang$core$List$concatMap, _user$project$DisplayJson$printBlockDeviceMapping, instance.block_device_mappings)))
							])),
						A2(
						_elm_lang$html$Html$table,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('table table-bordered table-striped table-hover AttachmentTable')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$tr,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$html$Html$th,
										_elm_lang$core$Native_List.fromArray(
											[
												_elm_lang$html$Html_Attributes$style(
												_elm_lang$core$Native_List.fromArray(
													[
														{ctor: '_Tuple2', _0: 'font-weight', _1: 'bold'},
														{ctor: '_Tuple2', _0: 'rowspan', _1: '1'}
													]))
											]),
										_elm_lang$core$Native_List.fromArray(
											[
												_elm_lang$html$Html$text('Attachment')
											])),
										A2(
										_elm_lang$html$Html$td,
										_elm_lang$core$Native_List.fromArray(
											[]),
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_user$project$DisplayJson$printVolumesForInstance, model, instance)
											]))
									]))
							]))
					]))
			]);
	});
var _user$project$DisplayJson$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$id('Title')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$h1,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('header')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('AWS Json Reader')
							]))
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$id('LeftBar')
					]),
				_elm_lang$core$Native_List.fromArray(
					[])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$id('RightBar')
					]),
				_elm_lang$core$Native_List.fromArray(
					[])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$id('content')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('TotalDisplay')
							]),
						_user$project$DisplayJson$printTotalDisplay(model)),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('Title')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('Instances with Volumes')
							])),
						A2(
						_elm_lang$html$Html$br,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$br,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						A2(
							_elm_lang$core$List$concatMap,
							_user$project$DisplayJson$printInstance(model),
							A2(_elm_lang$core$List$concatMap, _user$project$DisplayJson$getReservationInstances, model.instances.reservations))),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$style(
								_elm_lang$core$Native_List.fromArray(
									[
										{ctor: '_Tuple2', _0: 'clear', _1: 'both'}
									]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('Title')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('Volumes with Matching Instances')
							])),
						A2(
						_elm_lang$html$Html$br,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						A2(
							_elm_lang$core$List$concatMap,
							_user$project$DisplayJson$printInstancesForVolume(model),
							model.volumes.volumes))
					]))
			]));
};
var _user$project$DisplayJson$main = {
	main: _elm_lang$html$Html_App$program(
		{
			init: _user$project$DisplayJson$init('cats'),
			view: _user$project$DisplayJson$view,
			update: _user$project$DisplayJson$update,
			subscriptions: _user$project$DisplayJson$subscriptions
		})
};
var _user$project$DisplayJson$MorePlease = {ctor: 'MorePlease'};

var Elm = {};
Elm['DisplayJson'] = Elm['DisplayJson'] || {};
_elm_lang$core$Native_Platform.addPublicModule(Elm['DisplayJson'], 'DisplayJson', typeof _user$project$DisplayJson$main === 'undefined' ? null : _user$project$DisplayJson$main);

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

