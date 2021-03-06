﻿/**
 * LayerIncrementCopy.jsx - v@0.2.0 r8
 * update: 2013-03-08
 * Author: Yusuke Hirao [http://www.yusukehirao.com]
 * Github: https://github.com/YusukeHirao/LayerIncrementCopy
 * License: Licensed under the MIT License
 */

// Generated by CoffeeScript 1.6.1
'use strict';
var Math, NAMESPACE, VERSION, clearInterval, clearTimeout, exec, global, isNaN, removeCOPY, setInterval, setTimeout;

NAMESPACE = 'LayerIncrementCopy';

VERSION = '0.2.0';

global = this;

Math = global.Math;

setTimeout = global.setTimeout;

clearTimeout = global.clearTimeout;

setInterval = global.setInterval;

clearInterval = global.clearInterval;

isNaN = global.isNaN;

Number.prototype.fillZero = function(n) {
  var zeros;
  zeros = new Array(n + 1 - this.toString(10).length);
  return zeros.join('0') + this;
};

removeCOPY = function(layer) {
  var child, _i, _len, _ref, _results;
  layer.name = layer.name.replace(/\s+のコピー(?:\s+\d+)?$/, '');
  if (layer.layers) {
    _ref = layer.layers;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      _results.push(removeCOPY(child));
    }
    return _results;
  }
};

exec = function() {
  var layer, newLayer;
  layer = activeDocument.activeLayer;
  if (!/\d+$/.test(layer.name)) {
    layer.name += '01';
  }
  newLayer = layer.duplicate();
  newLayer.name = layer.name.replace(/\d+$/, function($0) {
    var d, n;
    d = String($0).length;
    n = parseInt($0, 10);
    return (n + 1).fillZero(d);
  });
  activeDocument.activeLayer = newLayer;
  return removeCOPY(newLayer);
};

if (documents.length) {
  exec();
} else {
  alert('ドキュメントが開かれていません\nドキュメントが開かれていないので、この処理は中止されました。');
}
