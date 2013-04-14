
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

    // 見積情報保存
    //this.addEstimate = function() {
    //   var m = $("#estimateForm").serializeArray();
    //   var data = {};
    //   $.each(m, function() {
    //     data[this.name] = this.value;
    //   });
    //   //console.log(data);
    //   this.mitsumoriData["step" + this.step] = data;
    //  return;
    //};
  };

  /*
   * 丸めモード、小数点以下の桁数を指定して、数値をフォーマットする。
   *  
   * kingaku 処理対象の金額
   * round 丸めモード（1：切り捨て、2：四捨五入、3：切り上げ）
   * digits 小数点以下の桁数（0：なし、1：１桁、2：２桁）
   */
  function getFormatAmount(kingaku, round, digits) {
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

  function removeComma(amount) {
    var num = new String(amount).replace(/,/g,"");
    return num;
  }

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

  function updateUnitPrice(step){
    // 単価を書き換え
    var s;
    var t;
    var x;
    var kingaku;
    for(var i=0; i<tanka.length; i++) {
      s = tanka[i]["seihinNo"];
      t = parseFloatEx(tanka[i]["tanka"]);
      x = parseFloatEx(tanka[i]["tax"]);
      kingaku = t * parseFloatEx($("div#" + step + " #1-" + s + "_su").text());
      $("div#" + step + " td#1-" + s + "_tan").text(formatComma(t));
      $("div#" + step + " td#1-" + s + "_kin").text(formatComma(kingaku));
      $("div#" + step + " input#1-" + s + "_tax").val(formatComma(getFormatAmount(kingaku * x), 1, 0));
      kingaku = t * parseFloatEx($("div#" + step + " #2-" + s + "_su").text());
      $("div#" + step + " td#2-" + s + "_tan").text(formatComma(t));
      $("div#" + step + " td#2-" + s + "_kin").text(formatComma(kingaku));
      $("div#" + step + " input#2-" + s + "_tax").val(formatComma(getFormatAmount(kingaku * x), 1, 0));
      kingaku = t * parseFloatEx($("div#" + step + " #3-" + s + "_su").text());
      $("div#" + step + " td#3-" + s + "_tan").text(formatComma(t));
      $("div#" + step + " td#3-" + s + "_kin").text(formatComma(kingaku));
      $("div#" + step + " input#3-" + s + "_tax").val(formatComma(getFormatAmount(kingaku * x), 1, 0));
      kingaku = t * parseFloatEx($("div#" + step + " #4-" + s + "_su").text());
      $("div#" + step + " td#4-" + s + "_tan").text(formatComma(t));
      $("div#" + step + " td#4-" + s + "_kin").text(formatComma(kingaku));
      $("div#" + step + " input#4-" + s + "_tax").val(formatComma(getFormatAmount(kingaku * x), 1, 0));
      kingaku = t * parseFloatEx($("div#" + step + " #5-" + s + "_su").text());
      $("div#" + step + " td#5-" + s + "_tan").text(formatComma(t));
      $("div#" + step + " td#5-" + s + "_kin").text(formatComma(kingaku));
      $("div#" + step + " input#5-" + s + "_tax").val(formatComma(getFormatAmount(kingaku * x), 1, 0));
      kingaku = t * parseFloatEx($("div#" + step + " #6-" + s + "_su").text());
      $("div#" + step + " td#6-" + s + "_tan").text(formatComma(t));
      $("div#" + step + " td#6-" + s + "_kin").text(formatComma(kingaku));
      $("div#" + step + " input#6-" + s + "_tax").val(formatComma(getFormatAmount(kingaku * x), 1, 0));
    }
  }

  function initNavi() {
    if(wm.step < 3) {
      if(wm.step == 1) {
        $("div#step2").empty();
        $("li#step2 a").attr("href", "");
        $("li#step2 span").html("&nbsp;");
        $("li#step2").show();
      }
      if(wm.step == 2) {
        $("div#step3").empty();
        $("li#step3 a").attr("href", "");
        $("li#step3 span").html("&nbsp;");
        $("li#step3").show();
      }
      $("div#step4").empty();
      $("li#step4 a").attr("href", "");
      $("li#step4 span").html("&nbsp;");
      $("li#step4").show();
      $("div#step5").empty();
      $("li#step5 a").attr("href", "");
      $("li#step5 span").html("&nbsp;");
      $("li#step5").show();
      $("div#step6").empty();
      $("li#step6 a").attr("href", "");
      $("li#step6 span").html("&nbsp;");
      $("li#step6").show();
      $("div#step7").empty();
      $("li#step7 a").attr("href", "");
      $("li#step7 span").html("&nbsp;");
      $("li#step7").show();
      $("div#step8").empty();
      $("li#step8 a").attr("href", "");
      $("li#step8 span").html("&nbsp;");
      $("li#step8").show();
      $("div#step9").empty();
      $("li#step9 a").attr("href", "");
      $("li#step9 span").html("&nbsp;");
      $("li#step9").show();
      $("div#step10").empty();
      $("li#step10 a").attr("href", "");
      $("li#step10 span").html("&nbsp;");
      $("li#step10").show();
      $("div#step11").empty();
      $("li#step11 a").attr("href", "");
      $("li#step11 span").html("&nbsp;");
      $("li#step11").show();
      $("div#step12").empty();
      $("li#step12 a").attr("href", "");
      $("li#step12 span").html("&nbsp;");
      $("li#step12").show();
      $("div#step13").empty();
      $("li#step13 a").attr("href", "");
      $("li#step13 span").html("&nbsp;");
      $("li#step13").show();
      $("div#step14").empty();
      $("li#step14 a").attr("href", "");
      $("li#step14 span").html("&nbsp;");
      $("li#step14").show();
      $("div#step15").empty();
      $("li#step15 a").attr("href", "");
      $("li#step15 span").html("&nbsp;");
      $("li#step15").show();
      $("div#step16").empty();
      $("li#step16 a").attr("href", "");
      $("li#step16 span").html("&nbsp;");
      $("li#step16").show();
      $("div#step17").empty();
      $("li#step17 a").attr("href", "");
      $("li#step17 span").html("&nbsp;");
      $("li#step17").show();
    }
  }