# LayerIncrementCopy

**Mac OS X用** _Photoshop CS4以上_

レイヤーをコピーするときに、自動的にレイヤー名に連番をつけます。  
「のコピー」と名前が勝手についてしまうのが煩わしい方、どうぞ使ってください。


## 使い方

1. Photoshopを起動する前にJSXファイルをPhotoshopの指定のフォルダにコピーします。エイリアス（ショートカット）でも反映されます。  
`/Applications/Adobe Photoshop CS4/Presets/scripts`
2. Photoshopを起動して、メニューから反映されているのを確認します。  
メニュー > ファイル > スクリプト > LayerIncrementCopy
3. そのままメニューからも実行出来ますが、キーボードショートカットに割り当てます。  
※注意として、スクリプトは `⌥`(option) キーを押しながら実行するとExtendScript Toolkitが起動するという仕様があるので、ショートカットキーに`⌥`を含めることができません。  
ここでは `⌘ + J` に割り当てています。これは元々レイヤーをコピーするショートカットキーですが、（僕は）あまり使わないので上書きしてしまいます。
4. レイヤーを選択した状態で `⌘ + J` を実行すると、レイヤーが連番でコピーされます。

## 主な仕様

- フォルダー（グループレイヤー）対応

- 桁揃え対応（例：「レイヤー 1」 → 「レイヤー 2」, 「レイヤー 01」 → 「レイヤー 02」）

- レイヤー名の最後が数字でない場合、自動で01を付ける（例：「レイヤー」→「レイヤー01」）


## 注意

- スクリプト実行中に再びコマンドを実行すると、ひっちゃかめっちゃかになります（改善できるか検討中）。お気持ちはわかりますが連打はしないでください。

## Release History

- 2013-03-08   v0.2.0 ドキュメントを開いていない状態で実行してもエラーを吐かなくしました。
- 2013-03-07   v0.1.0 初リリース