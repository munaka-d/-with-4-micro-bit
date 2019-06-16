# -with-4-micro-bit
２台のmicro:bitにラジオ無線で温度の1ケタ目と２ケタ目を表示する
１台目で計測した温度の１０の位を１台目に表示し、
温度の１の位を２台目に表示する

micro:bitの温度センサーはCPU温度値を返す

【実装方法】
Microsot MakeCodeでjsファイルのコードをコピペする

hexファイルは実行イメージであり、micro:bitにそのままDLして実行可能
server_temp.hex 実行すると「S」を表示後、温度をラジオグループ１に送信し続ける
client_temp.hex 「C」を表示後、ラジオグループ１を受信室でける
