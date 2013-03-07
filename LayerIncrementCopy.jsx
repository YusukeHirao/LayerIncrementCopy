/**
 * LayerIncrementCopy.jsx - v@0.1.0 r4
 * update: 2013-03-07
 * Author: Yusuke Hirao [http://www.yusukehirao.com]
 * Github: https://github.com/YusukeHirao/LayerIncrementCopy
 * License: Licensed under the MIT License
 */

"use strict";

var Math, NAMESPACE, VERSION, clearInterval, clearTimeout, global, isNaN, layer, newLayer, removeCOPY, setInterval, setTimeout;

NAMESPACE = "LayerIncrementCopy", VERSION = "0.1.0", global = this, Math = global.Math, 
setTimeout = global.setTimeout, clearTimeout = global.clearTimeout, setInterval = global.setInterval, 
clearInterval = global.clearInterval, isNaN = global.isNaN, Number.prototype.fillZero = function(e) {
    var a;
    return a = Array(e + 1 - this.toString(10).length), a.join("0") + this;
}, layer = activeDocument.activeLayer, /\d+$/.test(layer.name) || (layer.name += "01"), 
newLayer = layer.duplicate(), newLayer.name = layer.name.replace(/\d+$/, function(e) {
    var a, r;
    return a = (e + "").length, r = parseInt(e, 10), (r + 1).fillZero(a);
}), activeDocument.activeLayer = newLayer, removeCOPY = function(e) {
    var a, r, t, l, n;
    if (e.name = e.name.replace(/\s+のコピー(?:\s+\d+)?$/, ""), e.layers) {
        for (l = e.layers, n = [], r = 0, t = l.length; t > r; r++) a = l[r], n.push(removeCOPY(a));
        return n;
    }
}, removeCOPY(newLayer);