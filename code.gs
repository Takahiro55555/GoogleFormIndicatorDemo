/**
 * @OnlyCurrentDoc
 */

// GETリクエストに対する処理
function doGet(e) {
  var ss = SpreadsheetApp.getActive();          // スプレッドシートオブエクトを取得
  var sheet = ss.getSheetByName("aggregation"); // シートを指定

  // パラメータに応じた処理をする
  if(e.parameter.q == "respondents"){                         // 回答者の数をリクエストされた場合
     var result = sheet.getRange("B2").getValue();              // データを取得するセルを指定(回答者の数)
  }else{                                                      // 特に指定がなかった場合
    var respondents = sheet.getRange("A2").getValue();          // データを取得するセルを指定(回答者数)
    var takenoko    = sheet.getRange("B2").getValue();          // (タケノコ派の数)
    var kinoko      = sheet.getRange("C2").getValue();          // (キノコ派の数)
    var spectator   = sheet.getRange("D2").getValue();          // (こだわりはない人の数)
    var takenoko_prescribed  = sheet.getRange("B4").getValue(); // (タケノコ派の募集定員)
    var kinoko_prescribed    = sheet.getRange("C4").getValue(); // (キノコ派の募集定員)
    var spectator_prescribed = sheet.getRange("D4").getValue(); // (こだわりはない人の募集定員)

    var dict = {"respondents":respondents, "takenoko":takenoko, "kinoko": kinoko, "spectator":spectator,
                "takenoko_prescribed":takenoko_prescribed, "kinoko_prescribed":kinoko_prescribed, "spectator_prescribed":spectator_prescribed}; // 連想配列にする
    return ContentService.createTextOutput(JSON.stringify(dict)).setMimeType(ContentService.MimeType.JSON); // jsonを返す
  }

  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.TEXT); // 文字列として返す
}
