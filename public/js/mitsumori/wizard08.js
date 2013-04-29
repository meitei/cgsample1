  // アームパッド
  function wizard8a(){
    // STEPボタンクリック
    $("li#step8").click(function() {
      wm.step = 8;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL12_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL12_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL12_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step8");
    wm.submitItems[8] = submitItem12;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL12_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL12_1").attr("checked", true);
    }
    // 車椅子
    if(col1Value == "2"){
      $("input#2-COL12_1").attr("checked", true);
    }
    // 横渡し
    if(col1Value == "3"){
      $("input#3-COL12_1").attr("checked", true);
    }
    $("div#step9").load("/mitsumori/step_11.html", wizard9a);
  }

  // テーブル
  function wizard8b(){
    // STEPボタンクリック
    $("li#step8").click(function() {
      wm.step = 8;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL15_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL15_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL15_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL15_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step8");
    wm.submitItems[8] = submitItem15;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL15_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL15_1").attr("checked", true);
    }
    // 化粧板
    if(col1Value == "2"){
      $("input#2-COL15_1").attr("checked", true);
    }
    // 化粧板・内張付き
    if(col1Value == "3"){
      $("input#3-COL15_1").attr("checked", true);
    }
    // クッション張り
    if(col1Value == "4"){
      $("input#4-COL15_1").attr("checked", true);
    }
    $("div#step9").load("/mitsumori/step_16.html", wizard9b);
  }

  // シートベルト
  function wizard8d(){
    // STEPボタンクリック
    $("li#step8").click(function() {
      wm.step = 8;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    $("select#2-101_su").change(function() {
      var m_tanka = getSeihinInfo("101");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-101_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-101_kin").text(formatComma(kingaku));
      $("input#2-101_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-102_su").change(function() {
      var m_tanka = getSeihinInfo("102");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-102_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-102_kin").text(formatComma(kingaku));
      $("input#2-102_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-97_su").change(function() {
      var m_tanka = getSeihinInfo("97");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-97_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-97_kin").text(formatComma(kingaku));
      $("input#2-97_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-98_su").change(function() {
      var m_tanka = getSeihinInfo("98");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-98_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-98_kin").text(formatComma(kingaku));
      $("input#2-98_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-99_su").change(function() {
      var m_tanka = getSeihinInfo("99");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-99_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-99_kin").text(formatComma(kingaku));
      $("input#2-99_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-103_su").change(function() {
      var m_tanka = getSeihinInfo("103");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-103_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-103_kin").text(formatComma(kingaku));
      $("input#2-103_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-104_su").change(function() {
      var m_tanka = getSeihinInfo("104");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-104_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-104_kin").text(formatComma(kingaku));
      $("input#2-104_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-105_su").change(function() {
      var m_tanka = getSeihinInfo("105");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-105_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-105_kin").text(formatComma(kingaku));
      $("input#2-105_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-106_su").change(function() {
      var m_tanka = getSeihinInfo("106");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-106_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-106_kin").text(formatComma(kingaku));
      $("input#2-106_tax").val(formatComma(zeigaku));
      return false;
    });
    // 単価を書き換え
    updateUnitPrice("step8");
    wm.submitItems[8] = submitItem16;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL16_1"];
    var col2Value = wm.mitsumoriData["COL16_2"];
    var col3Value = wm.mitsumoriData["COL16_3"];
    var col4Value = wm.mitsumoriData["COL16_4"];
    var col5Value = wm.mitsumoriData["COL16_5"];
    var col6Value = wm.mitsumoriData["COL16_6"];
    var col7Value = wm.mitsumoriData["COL16_7"];
    var col8Value = wm.mitsumoriData["COL16_8"];
    var col9Value = wm.mitsumoriData["COL16_9"];
    var col10Value = wm.mitsumoriData["COL16_10"];
    var col11Value = wm.mitsumoriData["COL16_11"];
    var col12Value = wm.mitsumoriData["COL16_12"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL16_1").attr("checked", true);
    }
    // 必要
    if(col1Value == "2"){
      $("input#2-COL16_1").attr("checked", true);
      if(col11Value == "1"){
        $("input#2-1-COL16_11").attr("checked", true);
      }
      if(col11Value == "2"){
        $("input#2-2-COL16_11").attr("checked", true);
      }
    }
    if(col2Value == "1"){
      $("input#2-COL16_2").attr("checked", true);
    }
    if(col3Value == "1"){
      $("input#2-COL16_3").attr("checked", true);
    }
    if(col4Value == "1"){
      $("input#2-COL16_4").attr("checked", true);
    }
    if(col5Value == "1"){
      $("input#2-COL16_5").attr("checked", true);
    }
    if(col6Value == "1"){
      $("input#2-COL16_6").attr("checked", true);
    }
    if(col7Value == "1"){
      $("input#2-COL16_7").attr("checked", true);
    }
    if(col8Value == "1"){
      $("input#2-COL16_8").attr("checked", true);
    }
    if(col9Value == "1"){
      $("input#2-COL16_9").attr("checked", true);
    }
    if(col10Value == "1"){
      $("input#2-COL16_10").attr("checked", true);
    }
    if(col10Value == "12"){
      $("input#2-COL16_12").attr("checked", true);
    }
    $("div#step9").load("/mitsumori/step_17.html", wizard9d);
  }

  // ヘッドサポート
  function wizard8e(){
    // STEPボタンクリック
    $("li#step8").click(function() {
      wm.step = 8;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#5-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    var tanka55 = getSeihinInfo("55");
    var tanka56 = getSeihinInfo("56");
    var tanka57 = getSeihinInfo("57");
    var tanka58 = getSeihinInfo("58");
    var tanka59 = getSeihinInfo("59");
    var tanka60 = getSeihinInfo("60");
    var tanka61 = getSeihinInfo("61");
    var tanka62 = getSeihinInfo("62");
    var tanka63 = getSeihinInfo("63");
    var tanka64 = getSeihinInfo("64");
    var tanka65 = getSeihinInfo("65");
    var tanka66 = getSeihinInfo("66");
    // 単価をセット
    var t = parseFloatEx(tanka55["tanka"]);
    var x = parseFloatEx(tanka55["tax"]);
    var a = parseFloatEx($("td#2-55_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-55_tan").text(formatComma(t));
    $("td#2-55_kin").text(formatComma(k));
    $("input#2-55_tax").val(formatComma(z));

    var t = parseFloatEx(tanka56["tanka"]);
    var x = parseFloatEx(tanka56["tax"]);
    var a = parseFloatEx($("td#2-56_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-56_tan").text(formatComma(t));
    $("td#2-56_kin").text(formatComma(k));
    $("input#2-56_tax").val(formatComma(z));

    var t = parseFloatEx(tanka57["tanka"]);
    var x = parseFloatEx(tanka57["tax"]);
    var a = parseFloatEx($("td#2-57_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-57_tan").text(formatComma(t));
    $("td#2-57_kin").text(formatComma(k));
    $("input#2-57_tax").val(formatComma(z));

    var t = parseFloatEx(tanka58["tanka"]);
    var x = parseFloatEx(tanka58["tax"]);
    var a = parseFloatEx($("td#2-58_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-58_tan").text(formatComma(t));
    $("td#2-58_kin").text(formatComma(k));
    $("input#2-58_tax").val(formatComma(z));

    var t = parseFloatEx(tanka59["tanka"]);
    var x = parseFloatEx(tanka59["tax"]);
    var a = parseFloatEx($("td#2-59_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-59_tan").text(formatComma(t));
    $("td#2-59_kin").text(formatComma(k));
    $("input#2-59_tax").val(formatComma(z));

    var t = parseFloatEx(tanka55["tanka"]);
    var x = parseFloatEx(tanka55["tax"]);
    var a = parseFloatEx($("td#3-55_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-55_tan").text(formatComma(t));
    $("td#3-55_kin").text(formatComma(k));
    $("input#3-55_tax").val(formatComma(z));

    var t = parseFloatEx(tanka56["tanka"]);
    var x = parseFloatEx(tanka56["tax"]);
    var a = parseFloatEx($("td#3-56_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-56_tan").text(formatComma(t));
    $("td#3-56_kin").text(formatComma(k));
    $("input#3-56_tax").val(formatComma(z));

    var t = parseFloatEx(tanka58["tanka"]);
    var x = parseFloatEx(tanka58["tax"]);
    var a = parseFloatEx($("td#3-58_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-58_tan").text(formatComma(t));
    $("td#3-58_kin").text(formatComma(k));
    $("input#3-58_tax").val(formatComma(z));

    var t = parseFloatEx(tanka59["tanka"]);
    var x = parseFloatEx(tanka59["tax"]);
    var a = parseFloatEx($("td#3-59_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-59_tan").text(formatComma(t));
    $("td#3-59_kin").text(formatComma(k));
    $("input#3-59_tax").val(formatComma(z));

    var t = parseFloatEx(tanka60["tanka"]);
    var x = parseFloatEx(tanka60["tax"]);
    var a = parseFloatEx($("td#3-60_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-60_tan").text(formatComma(t));
    $("td#3-60_kin").text(formatComma(k));
    $("input#3-60_tax").val(formatComma(z));

    var t = parseFloatEx(tanka61["tanka"]);
    var x = parseFloatEx(tanka61["tax"]);
    var a = parseFloatEx($("td#3-61_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-61_tan").text(formatComma(t));
    $("td#3-61_kin").text(formatComma(k));
    $("input#3-61_tax").val(formatComma(z));

    var t = parseFloatEx(tanka62["tanka"]);
    var x = parseFloatEx(tanka62["tax"]);
    var a = parseFloatEx($("td#3-62_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-62_tan").text(formatComma(t));
    $("td#3-62_kin").text(formatComma(k));
    $("input#3-62_tax").val(formatComma(z));

    var t = parseFloatEx(tanka57["tanka"]);
    var x = parseFloatEx(tanka57["tax"]);
    var a = parseFloatEx($("td#3-57_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-57_tan").text(formatComma(t));
    $("td#3-57_kin").text(formatComma(k));
    $("input#3-57_tax").val(formatComma(z));

    var t = parseFloatEx(tanka63["tanka"]);
    var x = parseFloatEx(tanka63["tax"]);
    var a = parseFloatEx($("td#3-63_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-63_tan").text(formatComma(t));
    $("td#3-63_kin").text(formatComma(k));
    $("input#3-63_tax").val(formatComma(z));

    var t = parseFloatEx(tanka64["tanka"]);
    var x = parseFloatEx(tanka64["tax"]);
    var a = parseFloatEx($("td#3-64_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-64_tan").text(formatComma(t));
    $("td#3-64_kin").text(formatComma(k));
    $("input#3-64_tax").val(formatComma(z));

    var t = parseFloatEx(tanka65["tanka"]);
    var x = parseFloatEx(tanka65["tax"]);
    var a = parseFloatEx($("td#3-65_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-65_tan").text(formatComma(t));
    $("td#3-65_kin").text(formatComma(k));
    $("input#3-65_tax").val(formatComma(z));

    var t = parseFloatEx(tanka55["tanka"]);
    var x = parseFloatEx(tanka55["tax"]);
    var a = parseFloatEx($("td#4-55_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-55_tan").text(formatComma(t));
    $("td#4-55_kin").text(formatComma(k));
    $("input#4-55_tax").val(formatComma(z));

    var t = parseFloatEx(tanka56["tanka"]);
    var x = parseFloatEx(tanka56["tax"]);
    var a = parseFloatEx($("td#4-56_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-56_tan").text(formatComma(t));
    $("td#4-56_kin").text(formatComma(k));
    $("input#4-56_tax").val(formatComma(z));

    var t = parseFloatEx(tanka58["tanka"]);
    var x = parseFloatEx(tanka58["tax"]);
    var a = parseFloatEx($("td#4-58_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-58_tan").text(formatComma(t));
    $("td#4-58_kin").text(formatComma(k));
    $("input#4-58_tax").val(formatComma(z));

    var t = parseFloatEx(tanka59["tanka"]);
    var x = parseFloatEx(tanka59["tax"]);
    var a = parseFloatEx($("td#4-59_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-59_tan").text(formatComma(t));
    $("td#4-59_kin").text(formatComma(k));
    $("input#4-59_tax").val(formatComma(z));

    var t = parseFloatEx(tanka60["tanka"]);
    var x = parseFloatEx(tanka60["tax"]);
    var a = parseFloatEx($("td#4-60_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-60_tan").text(formatComma(t));
    $("td#4-60_kin").text(formatComma(k));
    $("input#4-60_tax").val(formatComma(z));

    var t = parseFloatEx(tanka61["tanka"]);
    var x = parseFloatEx(tanka61["tax"]);
    var a = parseFloatEx($("td#4-61_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-61_tan").text(formatComma(t));
    $("td#4-61_kin").text(formatComma(k));
    $("input#4-61_tax").val(formatComma(z));

    var t = parseFloatEx(tanka62["tanka"]);
    var x = parseFloatEx(tanka62["tax"]);
    var a = parseFloatEx($("td#4-62_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-62_tan").text(formatComma(t));
    $("td#4-62_kin").text(formatComma(k));
    $("input#4-62_tax").val(formatComma(z));

    var t = parseFloatEx(tanka57["tanka"]);
    var x = parseFloatEx(tanka57["tax"]);
    var a = parseFloatEx($("td#4-57_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-57_tan").text(formatComma(t));
    $("td#4-57_kin").text(formatComma(k));
    $("input#4-57_tax").val(formatComma(z));

    var t = parseFloatEx(tanka63["tanka"]);
    var x = parseFloatEx(tanka63["tax"]);
    var a = parseFloatEx($("td#4-63_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-63_tan").text(formatComma(t));
    $("td#4-63_kin").text(formatComma(k));
    $("input#4-63_tax").val(formatComma(z));

    var t = parseFloatEx(tanka64["tanka"]);
    var x = parseFloatEx(tanka64["tax"]);
    var a = parseFloatEx($("td#4-64_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-64_tan").text(formatComma(t));
    $("td#4-64_kin").text(formatComma(k));
    $("input#4-64_tax").val(formatComma(z));

    var t = parseFloatEx(tanka65["tanka"]);
    var x = parseFloatEx(tanka65["tax"]);
    var a = parseFloatEx($("td#4-65_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-65_tan").text(formatComma(t));
    $("td#4-65_kin").text(formatComma(k));
    $("input#4-65_tax").val(formatComma(z));

    var t = parseFloatEx(tanka66["tanka"]);
    var x = parseFloatEx(tanka66["tax"]);
    var a = parseFloatEx($("td#5-66_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-66_tan").text(formatComma(t));
    $("td#5-66_kin").text(formatComma(k));
    $("input#5-66_tax").val(formatComma(z));

    var t = parseFloatEx(tanka56["tanka"]);
    var x = parseFloatEx(tanka56["tax"]);
    var a = parseFloatEx($("td#5-56_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-56_tan").text(formatComma(t));
    $("td#5-56_kin").text(formatComma(k));
    $("input#5-56_tax").val(formatComma(z));

    var t = parseFloatEx(tanka58["tanka"]);
    var x = parseFloatEx(tanka58["tax"]);
    var a = parseFloatEx($("td#5-58_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-58_tan").text(formatComma(t));
    $("td#5-58_kin").text(formatComma(k));
    $("input#5-58_tax").val(formatComma(z));

    var t = parseFloatEx(tanka59["tanka"]);
    var x = parseFloatEx(tanka59["tax"]);
    var a = parseFloatEx($("td#5-59_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-59_tan").text(formatComma(t));
    $("td#5-59_kin").text(formatComma(k));
    $("input#5-59_tax").val(formatComma(z));

    var t = parseFloatEx(tanka60["tanka"]);
    var x = parseFloatEx(tanka60["tax"]);
    var a = parseFloatEx($("td#5-60_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-60_tan").text(formatComma(t));
    $("td#5-60_kin").text(formatComma(k));
    $("input#5-60_tax").val(formatComma(z));

    var t = parseFloatEx(tanka61["tanka"]);
    var x = parseFloatEx(tanka61["tax"]);
    var a = parseFloatEx($("td#5-61_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-61_tan").text(formatComma(t));
    $("td#5-61_kin").text(formatComma(k));
    $("input#5-61_tax").val(formatComma(z));

    var t = parseFloatEx(tanka62["tanka"]);
    var x = parseFloatEx(tanka62["tax"]);
    var a = parseFloatEx($("td#5-62_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-62_tan").text(formatComma(t));
    $("td#5-62_kin").text(formatComma(k));
    $("input#5-62_tax").val(formatComma(z));

    var t = parseFloatEx(tanka57["tanka"]);
    var x = parseFloatEx(tanka57["tax"]);
    var a = parseFloatEx($("td#5-57_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-57_tan").text(formatComma(t));
    $("td#5-57_kin").text(formatComma(k));
    $("input#5-57_tax").val(formatComma(z));

    var t = parseFloatEx(tanka63["tanka"]);
    var x = parseFloatEx(tanka63["tax"]);
    var a = parseFloatEx($("td#5-63_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-63_tan").text(formatComma(t));
    $("td#5-63_kin").text(formatComma(k));
    $("input#5-63_tax").val(formatComma(z));

    var t = parseFloatEx(tanka64["tanka"]);
    var x = parseFloatEx(tanka64["tax"]);
    var a = parseFloatEx($("td#5-64_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-64_tan").text(formatComma(t));
    $("td#5-64_kin").text(formatComma(k));
    $("input#5-64_tax").val(formatComma(z));

    var t = parseFloatEx(tanka65["tanka"]);
    var x = parseFloatEx(tanka65["tax"]);
    var a = parseFloatEx($("td#5-65_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-65_tan").text(formatComma(t));
    $("td#5-65_kin").text(formatComma(k));
    $("input#5-65_tax").val(formatComma(z));

    wm.submitItems[8] = submitItem9;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL9_1"];
    var col2Value = wm.mitsumoriData["COL9_2"];
    var col3Value = wm.mitsumoriData["COL9_3"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL9_1").attr("checked", true);
    }
    // 張り調整型
    if(col1Value == "2"){
      $("input#2-COL9_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL9_2").attr("checked", true);
      }
    }
    // 平面形状・金具付き
    if(col1Value == "3"){
      $("input#3-COL9_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL9_2").attr("checked", true);
      }
      if(col3Value == "1"){
        $("input#3-1-COL9_3").attr("checked", true);
      }
      if(col3Value == "2"){
        $("input#3-2-COL9_3").attr("checked", true);
      }
      if(col3Value == "3"){
        $("input#3-3-COL9_3").attr("checked", true);
      }
    }
    // モールド型・金具付き（採型）
    if(col1Value == "4"){
      $("input#4-COL9_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL9_2").attr("checked", true);
      }
      if(col3Value == "1"){
        $("input#4-1-COL9_3").attr("checked", true);
      }
      if(col3Value == "2"){
        $("input#4-2-COL9_3").attr("checked", true);
      }
      if(col3Value == "3"){
        $("input#4-3-COL9_3").attr("checked", true);
      }
    }
    // モールド型・金具付き（採型）
    if(col1Value == "5"){
      $("input#5-COL9_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#5-COL9_2").attr("checked", true);
      }
      if(col3Value == "1"){
        $("input#5-1-COL9_3").attr("checked", true);
      }
      if(col3Value == "2"){
        $("input#5-2-COL9_3").attr("checked", true);
      }
      if(col3Value == "3"){
        $("input#5-3-COL9_3").attr("checked", true);
      }
    }
    $("div#step9").load("/mitsumori/step_10.html", wizard9e);
  }