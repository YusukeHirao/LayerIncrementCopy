'use strict'

# ## Constants
NAMESPACE = 'LayerIncrementCopy'
VERSION = '0.2.0'

# ## Alias
global = @
Math = global.Math
setTimeout = global.setTimeout
clearTimeout = global.clearTimeout
setInterval = global.setInterval
clearInterval = global.clearInterval
isNaN = global.isNaN

# ## Variables

# ## Functions
Number::fillZero = (n) ->
  zeros = new Array n + 1 - @toString(10).length
  zeros.join('0') + @