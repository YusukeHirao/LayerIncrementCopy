# $.level = 1

removeCOPY = (layer) ->
	layer.name = layer.name.replace /\s+のコピー(?:\s+\d+)?$/, ''
	if layer.layers
		for child in layer.layers
			removeCOPY child

exec = ->
	layer = activeDocument.activeLayer
	unless /\d+$/.test layer.name
		layer.name += '01'
	newLayer = layer.duplicate()
	newLayer.name = layer.name.replace /\d+$/, ($0) ->
		d = String($0).length
		n = parseInt $0, 10
		return (n + 1).fillZero d
	activeDocument.activeLayer = newLayer
	removeCOPY newLayer

if documents.length
	exec()
else
	alert 'ドキュメントが開かれていません\nドキュメントが開かれていないので、この処理は中止されました。'
