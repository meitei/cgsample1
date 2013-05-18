
  var WizardManager = function() {
    // ウィザードステップ数
    this.step = 1;
    // 見積データ
    this.mitsumoriData = {};
    // 見積製品データ
    this.productsData = {};
    // メソッド情報
    this.submitItems = {};
    // 最後のステップ
    this.lastStep = 0;
  };

  /*
   * 丸めモード、小数点以下の桁数を指定して、数値をフォーマットする。
   *  
   * kingaku 処理対象の金額
   * round 丸めモード（1：切り捨て、2：四捨五入、3：切り上げ）
   * digits 小数点以下の桁数（0：なし、1：１桁、2：２桁）
   */
  function getFormatAmount(kingaku, round, digits) {
    if(kingaku == 0) {
      return kingaku;
    }
    // 絶対値を取得
    var abs = Math.abs(kingaku);
    // 桁数処理用数値
    var num = Math.pow(10, digits);
    // 金額を数字に変換
    var amount = parseFloat(abs) * num;
    // 四捨五入・切り上げ・切り捨てを求める
    if(round == 1) {
      amount = Math.floor(amount) / num;
    } else if(round == 2) {
      amount = Math.round(amount) / num;
    } else if(round == 3) {
      amount = Math.ceil(amount) / num;
    } else {
      return kingaku;
    }
    if(kingaku < 0) {
      return amount * -1;
    } else {
      return amount;  
    }
  }

  /*
   * 桁区切りを追加し、金額をフォーマットする。
   *  
   * amount 処理対象の金額
   */
  function formatComma(amount) {
    var num = new String(amount).replace(/,/g,"");
    while(num != (num = num.replace(/^(-?\d+)(\d{3})/,"$1,$2")));
    return num;
  }

  /*
   * 桁区切り除去する。
   *  
   * amount 処理対象
   */
  function removeComma(amount) {
    var num = new String(amount).replace(/,/g,"");
    return num;
  }

  /*
   * DOM要素のIDから、製品Noを抽出する。
   *  
   * domId DOM要素のID
   */
  function getSeihinNo(domId) {
    var s1 = domId.split("-");
    var str = s1[1].split("_");
    return str[0];
  }

  /*
   * 整数に変換する。(null、undefined等は0)
   *  
   * val 処理対象
   */
  function parseFloatEx(val) {
    return val ? parseFloat(val) : 0;
  }

  /*
   * 単価情報から製品Noで抽出する。
   *  
   * seihinNo 製品No
   */
  function getSeihinInfo(seihinNo){
    for(var i=0; i<tanka.length; i++) {
      if(tanka[i]["seihinNo"] == seihinNo) {
        return tanka[i];
      }
    }
  }

  /*
   * 見積製品情報から製品Noで抽出する。
   *  
   * seihinNo 製品No
   */
  function getProduct(seihinNo){
    for(var i=0; i<seihin.length; i++) {
      if(seihin[i]["seihinNo"] == seihinNo) {
        return seihin[i];
      }
    }
  }

  WizardManager.prototype.initEstimate = function() {
    // radio
    if(wm.step == 1) {
      $("div#step2 input[type='text']").val("0");
      $("div#step2 input[type='radio']").attr("checked", false);
      $("div#step2 input[type='checkbox']").attr("checked", false);
      $("div#step2 select").val("0");
    }
    $("div#step3 input[type='text']").val("0");
    $("div#step3 input[type='radio']").attr("checked", false);
    $("div#step3 input[type='checkbox']").attr("checked", false);
    $("div#step3 select").val("0");
    $("div#step4 input[type='text']").val("0");
    $("div#step4 input[type='radio']").attr("checked", false);
    $("div#step4 input[type='checkbox']").attr("checked", false);
    $("div#step4 select").val("0");
    $("div#step5 input[type='text']").val("0");
    $("div#step5 input[type='radio']").attr("checked", false);
    $("div#step5 input[type='checkbox']").attr("checked", false);
    $("div#step5 select").val("0");
    $("div#step6 input[type='text']").val("0");
    $("div#step6 input[type='radio']").attr("checked", false);
    $("div#step6 input[type='checkbox']").attr("checked", false);
    $("div#step6 select").val("0");
    $("div#step7 input[type='text']").val("0");
    $("div#step7 input[type='radio']").attr("checked", false);
    $("div#step7 input[type='checkbox']").attr("checked", false);
    $("div#step7 select").val("0");
    $("div#step8 input[type='text']").val("0");
    $("div#step8 input[type='radio']").attr("checked", false);
    $("div#step8 input[type='checkbox']").attr("checked", false);
    $("div#step8 select").val("0");
    $("div#step9 input[type='text']").val("0");
    $("div#step9 input[type='radio']").attr("checked", false);
    $("div#step9 input[type='checkbox']").attr("checked", false);
    $("div#step9 select").val("0");
    $("div#step10 input[type='text']").val("0");
    $("div#step10 input[type='radio']").attr("checked", false);
    $("div#step10 input[type='checkbox']").attr("checked", false);
    $("div#step10 select").val("0");
    $("div#step11 input[type='text']").val("0");
    $("div#step11 input[type='radio']").attr("checked", false);
    $("div#step11 input[type='checkbox']").attr("checked", false);
    $("div#step11 select").val("0");
    $("div#step12 input[type='text']").val("0");
    $("div#step12 input[type='radio']").attr("checked", false);
    $("div#step12 input[type='checkbox']").attr("checked", false);
    $("div#step12 select").val("0");
    $("div#step13 input[type='text']").val("0");
    $("div#step13 input[type='radio']").attr("checked", false);
    $("div#step13 input[type='checkbox']").attr("checked", false);
    $("div#step13 select").val("0");
    $("div#step14 input[type='text']").val("0");
    $("div#step14 input[type='radio']").attr("checked", false);
    $("div#step14 input[type='checkbox']").attr("checked", false);
    $("div#step14 select").val("0");
    $("div#step15 input[type='text']").val("0");
    $("div#step15 input[type='radio']").attr("checked", false);
    $("div#step15 input[type='checkbox']").attr("checked", false);
    $("div#step15 select").val("0");
    $("div#step16 input[type='text']").val("0");
    $("div#step16 input[type='radio']").attr("checked", false);
    $("div#step16 input[type='checkbox']").attr("checked", false);
    $("div#step16 select").val("0");
    $("div#step17 input[type='text']").val("0");
    $("div#step17 input[type='radio']").attr("checked", false);
    $("div#step17 input[type='checkbox']").attr("checked", false);
    $("div#step17 select").val("0");
    this.mitsumoriData["COL2_1"] = "0";
    this.mitsumoriData["COL3_1"] = "0";
    this.mitsumoriData["COL3_2"] = "0";
    this.mitsumoriData["COL3_3"] = "0";
    this.mitsumoriData["COL3_4"] = "0";
    this.mitsumoriData["COL3_5"] = "0";
    this.mitsumoriData["COL3_6"] = "0";
    this.mitsumoriData["COL3_7"] = "0";
    this.mitsumoriData["COL3_8"] = "0";
    this.mitsumoriData["COL3_9"] = "0";
    this.mitsumoriData["COL3_10"] = "0";
    this.mitsumoriData["COL3_11"] = "0";
    this.mitsumoriData["COL3_12"] = "0";
    this.mitsumoriData["COL3_13"] = "0";
    this.mitsumoriData["COL4_1"] = "0";
    this.mitsumoriData["COL5_1"] = "0";
    this.mitsumoriData["COL5_2"] = "0";
    this.mitsumoriData["COL5_3"] = "0";
    this.mitsumoriData["COL5_4"] = "0";
    this.mitsumoriData["COL6_1"] = "0";
    this.mitsumoriData["COL7_1"] = "0";
    this.mitsumoriData["COL7_2"] = "0";
    this.mitsumoriData["COL7_3"] = "0";
    this.mitsumoriData["COL7_4"] = "0";
    this.mitsumoriData["COL7_5"] = "0";
    this.mitsumoriData["COL7_6"] = "0";
    this.mitsumoriData["COL7_7"] = "0";
    this.mitsumoriData["COL8_1"] = "0";
    this.mitsumoriData["COL8_2"] = "0";
    this.mitsumoriData["COL8_3"] = "0";
    this.mitsumoriData["COL9_1"] = "0";
    this.mitsumoriData["COL9_2"] = "0";
    this.mitsumoriData["COL9_3"] = "0";
    this.mitsumoriData["COL10_1"] = "0";
    this.mitsumoriData["COL10_2"] = "0";
    this.mitsumoriData["COL10_3"] = "0";
    this.mitsumoriData["COL10_4"] = "0";
    this.mitsumoriData["COL11_1"] = "0";
    this.mitsumoriData["COL11_2"] = "0";
    this.mitsumoriData["COL11_3"] = "0";
    this.mitsumoriData["COL11_4"] = "0";
    this.mitsumoriData["COL12_1"] = "0";
    this.mitsumoriData["COL13_1"] = "0";
    this.mitsumoriData["COL13_2"] = "0";
    this.mitsumoriData["COL13_3"] = "0";
    this.mitsumoriData["COL13_4"] = "0";
    this.mitsumoriData["COL13_5"] = "0";
    this.mitsumoriData["COL14_1"] = "0";
    this.mitsumoriData["COL14_2"] = "0";
    this.mitsumoriData["COL15_1"] = "0";
    this.mitsumoriData["COL16_1"] = "0";
    this.mitsumoriData["COL16_2"] = "0";
    this.mitsumoriData["COL16_3"] = "0";
    this.mitsumoriData["COL16_4"] = "0";
    this.mitsumoriData["COL16_5"] = "0";
    this.mitsumoriData["COL16_6"] = "0";
    this.mitsumoriData["COL16_7"] = "0";
    this.mitsumoriData["COL16_8"] = "0";
    this.mitsumoriData["COL16_9"] = "0";
    this.mitsumoriData["COL16_10"] = "0";
    this.mitsumoriData["COL16_11"] = "0";
    this.mitsumoriData["COL16_12"] = "0";
    this.mitsumoriData["COL16_13"] = "0";
    this.mitsumoriData["COL17_1"] = "0";
    this.mitsumoriData["COL17_2"] = "0";
    this.mitsumoriData["COL17_3"] = "0";
    this.mitsumoriData["COL17_4"] = "0";
    this.mitsumoriData["COL17_5"] = "0";
    this.mitsumoriData["COL17_6"] = "0";
    this.mitsumoriData["COL17_7"] = "0";
    this.mitsumoriData["COL17_8"] = "0";
    this.mitsumoriData["COL17_9"] = "0";
    this.mitsumoriData["COL17_10"] = "0";
    this.mitsumoriData["COL17_11"] = "0";
    this.mitsumoriData["COL17_12"] = "0";
    this.mitsumoriData["COL17_13"] = "0";
    this.mitsumoriData["COL17_14"] = "0";
    this.mitsumoriData["COL17_15"] = "0";
    this.mitsumoriData["COL18_1"] = "0";
    this.mitsumoriData["COL18_2"] = "0";
    this.mitsumoriData["COL18_3"] = "0";
    this.mitsumoriData["COL18_4"] = "0";
    this.mitsumoriData["COL18_5"] = "0";
    this.mitsumoriData["COL18_6"] = "0";
    this.mitsumoriData["COL18_7"] = "0";
    this.mitsumoriData["COL18_8"] = "0";
    this.mitsumoriData["COL19_1"] = "0";
    this.mitsumoriData["COL19_2"] = "0";
    this.mitsumoriData["COL19_3"] = "0";
    this.mitsumoriData["COL19_4"] = "0";
    this.mitsumoriData["COL19_5"] = "0";
    this.mitsumoriData["COL19_6"] = "0";
    this.mitsumoriData["COL19_7"] = "0";
    this.mitsumoriData["COL19_8"] = "0";
    this.mitsumoriData["COL19_9"] = "0";
    this.mitsumoriData["COL19_10"] = "0";
    this.mitsumoriData["COL19_11"] = "0";
    this.mitsumoriData["COL19_12"] = "0";
    this.mitsumoriData["COL19_13"] = "0";
    this.mitsumoriData["COL19_14"] = "0";
    this.mitsumoriData["COL19_15"] = "0";
    this.mitsumoriData["COL19_16"] = "0";
    this.mitsumoriData["COL19_17"] = "0";
    this.mitsumoriData["COL19_18"] = "0";
    this.mitsumoriData["COL19_19"] = "0";
    this.mitsumoriData["COL20_1"] = "0";
    this.mitsumoriData["COL20_2"] = "0";
    this.mitsumoriData["COL20_3"] = "0";
    this.mitsumoriData["COL20_4"] = "0";
    this.mitsumoriData["COL20_5"] = "0";
    this.mitsumoriData["COL20_6"] = "0";
    this.mitsumoriData["COL20_7"] = "0";
    this.mitsumoriData["COL20_8"] = "0";
    this.mitsumoriData["COL20_9"] = "0";
    this.mitsumoriData["COL20_10"] = "0";
    this.mitsumoriData["COL20_11"] = "0";
    this.mitsumoriData["COL20_12"] = "0";
    this.mitsumoriData["COL21_1"] = "0";
    this.mitsumoriData["COL21_2"] = "0";
    this.mitsumoriData["COL21_3"] = "0";
    this.mitsumoriData["COL21_4"] = "0";
    this.mitsumoriData["COL21_5"] = "0";
    this.mitsumoriData["COL21_6"] = "0";
    this.mitsumoriData["COL22_1"] = "0";
    this.mitsumoriData["COL22_2"] = "0";
    this.mitsumoriData["COL22_3"] = "0";
    this.mitsumoriData["COL23_1"] = "0";
    this.mitsumoriData["COL23_2"] = "0";
    this.mitsumoriData["COL23_3"] = "0";
    this.mitsumoriData["COL23_4"] = "0";
    this.mitsumoriData["COL23_5"] = "0";
    this.mitsumoriData["COL23_6"] = "0";
    this.mitsumoriData["COL24_1"] = "0";
    this.mitsumoriData["COL24_2"] = "0";
    this.mitsumoriData["COL24_3"] = "0";
    this.mitsumoriData["COL24_4"] = "0";
    this.mitsumoriData["COL24_5"] = "0";
    this.mitsumoriData["COL24_6"] = "0";
    this.mitsumoriData["COL24_7"] = "0";
    this.mitsumoriData["COL24_8"] = "0";
    this.mitsumoriData["COL24_9"] = "0";
    this.mitsumoriData["COL25_1"] = "0";
  }