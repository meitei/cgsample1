  // 介護用グリップ選定
  function wizard3a(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      if ($("li#step3").hasClass('jqwizard_done') || $("li#step3").hasClass('jqwizard_lastdone')) {
        wm.step = 3;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show(); 
        if(wm.step < wm.lastStep) {
          $("#btnEstimateRegist").hide();
        }
      }
    });
    // 不要
    $("input#1-COL6_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 車椅子
    $("input#2-COL6_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 横渡し
    $("input#3-COL6_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    var tanka31 = getSeihinInfo("31");
    // 単価をセット
    var t = parseFloatEx(tanka31["tanka"]);
    var x = parseFloatEx(tanka31["tax"]);
    var a = parseFloatEx($("td#2-31_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-31_tan").text(formatComma(t));
    $("td#2-31_kin").text(formatComma(k));
    $("input#2-31_tax").val(formatComma(z));

    var t = parseFloatEx(tanka31["tanka"]);
    var x = parseFloatEx(tanka31["tax"]);
    var a = parseFloatEx($("td#3-31_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-31_tan").text(formatComma(t));
    $("td#3-31_kin").text(formatComma(k));
    $("input#3-31_tax").val(formatComma(z));
    
    wm.submitItems[3] = submitItem6;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL6_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL6_1").attr("checked", true);
    }
    // 車椅子
    if(col1Value == "2"){
      $("input#2-COL6_1").attr("checked", true);
    }
    // 横渡し
    if(col1Value == "3"){
      $("input#3-COL6_1").attr("checked", true);
    }
    $("div#step4").load("/mitsumori/step_08.html", wizard4a);
  }

  // バックサポート選定
  function wizard3b(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      if ($("li#step3").hasClass('jqwizard_done') || $("li#step3").hasClass('jqwizard_lastdone')) {
        wm.step = 3;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show(); 
      }
    });
    //
    $("input#1-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    $("input#2-COL7_8").change(function(){
      if ($("input#2-COL7_8").attr('checked')) {
        $("input#2-COL7_5").val('0');
        $("input#2-COL7_6").val('0');
        $("input#2-COL7_7").val('0');
        $("input#2-COL7_5").attr('disabled', true);
        $("input#2-COL7_6").attr('disabled', true);
        $("input#2-COL7_7").attr('disabled', true);
      }
      else {
        $("input#2-COL7_5").attr('disabled', false);
        $("input#2-COL7_6").attr('disabled', false);
        $("input#2-COL7_7").attr('disabled', false);
      }
    });
    var tanka32 = getSeihinInfo("32");
    var tanka33 = getSeihinInfo("33");
    var tanka34 = getSeihinInfo("34");
    var tanka35 = getSeihinInfo("35");
    var tanka36 = getSeihinInfo("36");
    var tanka37 = getSeihinInfo("37");
    var tanka38 = getSeihinInfo("38");
    var tanka39 = getSeihinInfo("39");
    var tanka40 = getSeihinInfo("40");
    var tanka41 = getSeihinInfo("41");
    var tanka42 = getSeihinInfo("42");
    // 単価をセット
    var t = parseFloatEx(tanka32["tanka"]);
    var x = parseFloatEx(tanka32["tax"]);
    var a = parseFloatEx($("td#1-32_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-32_tan").text(formatComma(t));
    $("td#1-32_kin").text(formatComma(k));
    $("input#1-32_tax").val(formatComma(z));

    var t = parseFloatEx(tanka33["tanka"]);
    var x = parseFloatEx(tanka33["tax"]);
    var a = parseFloatEx($("td#1-33_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-33_tan").text(formatComma(t));
    $("td#1-33_kin").text(formatComma(k));
    $("input#1-33_tax").val(formatComma(z));

    var t = parseFloatEx(tanka34["tanka"]);
    var x = parseFloatEx(tanka34["tax"]);
    var a = parseFloatEx($("td#1-34_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-34_tan").text(formatComma(t));
    $("td#1-34_kin").text(formatComma(k));
    $("input#1-34_tax").val(formatComma(z));

    var t = parseFloatEx(tanka35["tanka"]);
    var x = parseFloatEx(tanka35["tax"]);
    var a = parseFloatEx($("td#1-35_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-35_tan").text(formatComma(t));
    $("td#1-35_kin").text(formatComma(k));
    $("input#1-35_tax").val(formatComma(z));

    var t = parseFloatEx(tanka36["tanka"]);
    var x = parseFloatEx(tanka36["tax"]);
    var a = parseFloatEx($("td#1-36_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-36_tan").text(formatComma(t));
    $("td#1-36_kin").text(formatComma(k));
    $("input#1-36_tax").val(formatComma(z));

    var t = parseFloatEx(tanka32["tanka"]);
    var x = parseFloatEx(tanka32["tax"]);
    var a = parseFloatEx($("td#2-32_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-32_tan").text(formatComma(t));
    $("td#2-32_kin").text(formatComma(k));
    $("input#2-32_tax").val(formatComma(z));

    var t = parseFloatEx(tanka37["tanka"]);
    var x = parseFloatEx(tanka37["tax"]);
    var a = parseFloatEx($("td#2-37_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-37_tan").text(formatComma(t));
    $("td#2-37_kin").text(formatComma(k));
    $("input#2-37_tax").val(formatComma(z));

    var t = parseFloatEx(tanka38["tanka"]);
    var x = parseFloatEx(tanka38["tax"]);
    var a = parseFloatEx($("td#2-38_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-38_tan").text(formatComma(t));
    $("td#2-38_kin").text(formatComma(k));
    $("input#2-38_tax").val(formatComma(z));

    var t = parseFloatEx(tanka35["tanka"]);
    var x = parseFloatEx(tanka35["tax"]);
    var a = parseFloatEx($("td#2-35_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-35_tan").text(formatComma(t));
    $("td#2-35_kin").text(formatComma(k));
    $("input#2-35_tax").val(formatComma(z));

    var t = parseFloatEx(tanka36["tanka"]);
    var x = parseFloatEx(tanka36["tax"]);
    var a = parseFloatEx($("td#2-36_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-36_tan").text(formatComma(t));
    $("td#2-36_kin").text(formatComma(k));
    $("input#2-36_tax").val(formatComma(z));

    var t = parseFloatEx(tanka32["tanka"]);
    var x = parseFloatEx(tanka32["tax"]);
    var a = parseFloatEx($("td#3-32_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-32_tan").text(formatComma(t));
    $("td#3-32_kin").text(formatComma(k));
    $("input#3-32_tax").val(formatComma(z));

    var t = parseFloatEx(tanka39["tanka"]);
    var x = parseFloatEx(tanka39["tax"]);
    var a = parseFloatEx($("td#3-39_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-39_tan").text(formatComma(t));
    $("td#3-39_kin").text(formatComma(k));
    $("input#3-39_tax").val(formatComma(z));

    var t = parseFloatEx(tanka40["tanka"]);
    var x = parseFloatEx(tanka40["tax"]);
    var a = parseFloatEx($("td#3-40_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-40_tan").text(formatComma(t));
    $("td#3-40_kin").text(formatComma(k));
    $("input#3-40_tax").val(formatComma(z));

    var t = parseFloatEx(tanka35["tanka"]);
    var x = parseFloatEx(tanka35["tax"]);
    var a = parseFloatEx($("td#3-35_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-35_tan").text(formatComma(t));
    $("td#3-35_kin").text(formatComma(k));
    $("input#3-35_tax").val(formatComma(z));

    var t = parseFloatEx(tanka36["tanka"]);
    var x = parseFloatEx(tanka36["tax"]);
    var a = parseFloatEx($("td#3-36_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-36_tan").text(formatComma(t));
    $("td#3-36_kin").text(formatComma(k));
    $("input#3-36_tax").val(formatComma(z));

    var t = parseFloatEx(tanka41["tanka"]);
    var x = parseFloatEx(tanka41["tax"]);
    var a = parseFloatEx($("td#4-41_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-41_tan").text(formatComma(t));
    $("td#4-41_kin").text(formatComma(k));
    $("input#4-41_tax").val(formatComma(z));

    var t = parseFloatEx(tanka42["tanka"]);
    var x = parseFloatEx(tanka42["tax"]);
    var a = parseFloatEx($("td#4-42_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-42_tan").text(formatComma(t));
    $("td#4-42_kin").text(formatComma(k));
    $("input#4-42_tax").val(formatComma(z));

    var t = parseFloatEx(tanka40["tanka"]);
    var x = parseFloatEx(tanka40["tax"]);
    var a = parseFloatEx($("td#4-40_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-40_tan").text(formatComma(t));
    $("td#4-40_kin").text(formatComma(k));
    $("input#4-40_tax").val(formatComma(z));

    var t = parseFloatEx(tanka35["tanka"]);
    var x = parseFloatEx(tanka35["tax"]);
    var a = parseFloatEx($("td#4-35_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-35_tan").text(formatComma(t));
    $("td#4-35_kin").text(formatComma(k));
    $("input#4-35_tax").val(formatComma(z));

    var t = parseFloatEx(tanka36["tanka"]);
    var x = parseFloatEx(tanka36["tax"]);
    var a = parseFloatEx($("td#4-36_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-36_tan").text(formatComma(t));
    $("td#4-36_kin").text(formatComma(k));
    $("input#4-36_tax").val(formatComma(z));

    wm.submitItems[3] = submitItem7;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL7_1"];
    var col2Value = wm.mitsumoriData["COL7_2"];
    var col3Value = wm.mitsumoriData["COL7_3"];
    var col4Value = wm.mitsumoriData["COL7_4"];
    var col5Value = wm.mitsumoriData["COL7_5"];
    var col6Value = wm.mitsumoriData["COL7_6"];
    var col7Value = wm.mitsumoriData["COL7_7"];
    var col8Value = wm.mitsumoriData["COL7_8"];
    //$("input[name='COL1_1']").val(col1Value);
    // 平面形状型
    if(col1Value == "1"){
      $("input#1-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#1-COL7_2").attr("checked", true);
      }
      $("input#1-COL7_3").val(col3Value);
      $("input#1-COL7_4").val(col4Value);
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL7_2").attr("checked", true);
      }
      $("input#2-COL7_3").val(col3Value);
      $("input#2-COL7_4").val(col4Value);
      $("input#2-COL7_5").val(col5Value);
      $("input#2-COL7_6").val(col6Value);
      $("input#2-COL7_7").val(col7Value);
      if(col8Value == "1"){
        $("input#2-COL7_8").attr("checked", true);
        $("input#2-COL7_5").attr('disabled', true);
        $("input#2-COL7_6").attr('disabled', true);
        $("input#2-COL7_7").attr('disabled', true);
      }
    }
    // モールド（採寸）
    if(col1Value == "3"){
      $("input#3-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL7_2").attr("checked", true);
      }
      $("input#3-COL7_3").val(col3Value);
      $("input#3-COL7_4").val(col4Value);
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#4-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL7_2").attr("checked", true);
      }
      $("input#4-COL7_3").val(col3Value);
      $("input#4-COL7_4").val(col4Value);
    }
    $("div#step4").load("/mitsumori/step_08.html", wizard4b);
  }

  // シートベルト選定
  function wizard3c(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      if ($("li#step3").hasClass('jqwizard_done') || $("li#step3").hasClass('jqwizard_lastdone')) {
        wm.step = 3;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show(); 
      }
    });
    //
    $("input#1-COL16_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });

    // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL16_1"] == "1") {
      $("input#1-COL16_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL16_1"] == "2"){
      $("input#2-COL16_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_2"] == "1") {
      $("input#2-COL16_2").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_11"] == "1"){
      $("input#2-1-COL16_11").attr("checked", true);
    } else if (wm.mitsumoriData["COL16_11"] == "2"){
      $("input#2-2-COL16_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_3"] == "1") {
      $("input#2-COL16_3").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(101);
      if(seihin != undefined) { $("select#2-101_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL16_4"] == "1") {
      $("input#2-COL16_4").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(102);
      if(seihin != undefined) { $("select#2-102_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL16_13"] == "1") {
      $("input#2-COL16_13").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(97);
      if(seihin != undefined) { $("select#2-97_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL16_5"] == "1") {
      $("input#2-COL16_5").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(98);
      if(seihin != undefined) { $("select#2-98_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL16_6"] == "1") {
      $("input#2-COL16_6").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(99);
      if(seihin != undefined) { $("select#2-99_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL16_7"] == "1") {
      $("input#2-COL16_7").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(103);
      if(seihin != undefined) { $("select#2-103_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL16_8"] == "1") {
      $("input#2-COL16_8").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(104);
      if(seihin != undefined) { $("select#2-104_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL16_9"] == "1") {
      $("input#2-COL16_9").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(105);
      if(seihin != undefined) { $("select#2-105_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL16_10"] == "1") {
      $("input#2-COL16_10").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(106);
      if(seihin != undefined) { $("select#2-106_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL16_12"] == "1") {
      $("input#2-COL16_12").attr("checked", true);
    }

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
    var tanka100 = getSeihinInfo("100");
    var tanka101 = getSeihinInfo("101");
    var tanka102 = getSeihinInfo("102");
    var tanka97 = getSeihinInfo("97");
    var tanka98 = getSeihinInfo("98");
    var tanka99 = getSeihinInfo("99");
    var tanka103 = getSeihinInfo("103");
    var tanka104 = getSeihinInfo("104");
    var tanka105 = getSeihinInfo("105");
    var tanka106 = getSeihinInfo("106");
    var tanka107 = getSeihinInfo("107");
    // 単価をセット
    var t = parseFloatEx(tanka100["tanka"]);
    var x = parseFloatEx(tanka100["tax"]);
    var a = parseFloatEx($("td#2-100_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-100_tan").text(formatComma(t));
    $("td#2-100_kin").text(formatComma(k));
    $("input#2-100_tax").val(formatComma(z));

    var t = parseFloatEx(tanka101["tanka"]);
    var x = parseFloatEx(tanka101["tax"]);
    var a = parseFloatEx($("select#2-101_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-101_tan").text(formatComma(t));
    $("td#2-101_kin").text(formatComma(k));
    $("input#2-101_tax").val(formatComma(z));

    var t = parseFloatEx(tanka102["tanka"]);
    var x = parseFloatEx(tanka102["tax"]);
    var a = parseFloatEx($("select#2-102_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-102_tan").text(formatComma(t));
    $("td#2-102_kin").text(formatComma(k));
    $("input#2-102_tax").val(formatComma(z));

    var t = parseFloatEx(tanka97["tanka"]);
    var x = parseFloatEx(tanka97["tax"]);
    var a = parseFloatEx($("select#2-97_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-97_tan").text(formatComma(t));
    $("td#2-97_kin").text(formatComma(k));
    $("input#2-97_tax").val(formatComma(z));

    var t = parseFloatEx(tanka98["tanka"]);
    var x = parseFloatEx(tanka98["tax"]);
    var a = parseFloatEx($("select#2-98_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-98_tan").text(formatComma(t));
    $("td#2-98_kin").text(formatComma(k));
    $("input#2-98_tax").val(formatComma(z));

    var t = parseFloatEx(tanka99["tanka"]);
    var x = parseFloatEx(tanka99["tax"]);
    var a = parseFloatEx($("select#2-99_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-99_tan").text(formatComma(t));
    $("td#2-99_kin").text(formatComma(k));
    $("input#2-99_tax").val(formatComma(z));

    var t = parseFloatEx(tanka103["tanka"]);
    var x = parseFloatEx(tanka103["tax"]);
    var a = parseFloatEx($("select#2-103_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-103_tan").text(formatComma(t));
    $("td#2-103_kin").text(formatComma(k));
    $("input#2-103_tax").val(formatComma(z));

    var t = parseFloatEx(tanka104["tanka"]);
    var x = parseFloatEx(tanka104["tax"]);
    var a = parseFloatEx($("select#2-104_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-104_tan").text(formatComma(t));
    $("td#2-104_kin").text(formatComma(k));
    $("input#2-104_tax").val(formatComma(z));

    var t = parseFloatEx(tanka105["tanka"]);
    var x = parseFloatEx(tanka105["tax"]);
    var a = parseFloatEx($("select#2-105_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-105_tan").text(formatComma(t));
    $("td#2-105_kin").text(formatComma(k));
    $("input#2-105_tax").val(formatComma(z));

    var t = parseFloatEx(tanka106["tanka"]);
    var x = parseFloatEx(tanka106["tax"]);
    var a = parseFloatEx($("select#2-106_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-106_tan").text(formatComma(t));
    $("td#2-106_kin").text(formatComma(k));
    $("input#2-106_tax").val(formatComma(z));

    var t = parseFloatEx(tanka107["tanka"]);
    var x = parseFloatEx(tanka107["tax"]);
    var a = parseFloatEx($("td#2-107_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-107_tan").text(formatComma(t));
    $("td#2-107_kin").text(formatComma(k));
    $("input#2-107_tax").val(formatComma(z));

    wm.submitItems[3] = submitItem16;

    $("div#step4").load("/mitsumori/step_17.html", wizard4c);
  }

  // バックサポート選定
  function wizard3d(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      if ($("li#step3").hasClass('jqwizard_done') || $("li#step3").hasClass('jqwizard_lastdone')) {
        wm.step = 3;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show(); 
      }
    });
    //
    $("input#1-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    $("input#2-COL7_8").change(function(){
      if ($("input#2-COL7_8").attr('checked')) {
        $("input#2-COL7_5").val('0');
        $("input#2-COL7_6").val('0');
        $("input#2-COL7_7").val('0');
        $("input#2-COL7_5").attr('disabled', true);
        $("input#2-COL7_6").attr('disabled', true);
        $("input#2-COL7_7").attr('disabled', true);
      }
      else {
        $("input#2-COL7_5").attr('disabled', false);
        $("input#2-COL7_6").attr('disabled', false);
        $("input#2-COL7_7").attr('disabled', false);
      }
    });
    var tanka32 = getSeihinInfo("32");
    var tanka33 = getSeihinInfo("33");
    var tanka34 = getSeihinInfo("34");
    var tanka35 = getSeihinInfo("35");
    var tanka36 = getSeihinInfo("36");
    var tanka37 = getSeihinInfo("37");
    var tanka38 = getSeihinInfo("38");
    var tanka39 = getSeihinInfo("39");
    var tanka40 = getSeihinInfo("40");
    var tanka41 = getSeihinInfo("41");
    var tanka42 = getSeihinInfo("42");
    // 単価をセット
    var t = parseFloatEx(tanka32["tanka"]);
    var x = parseFloatEx(tanka32["tax"]);
    var a = parseFloatEx($("td#1-32_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-32_tan").text(formatComma(t));
    $("td#1-32_kin").text(formatComma(k));
    $("input#1-32_tax").val(formatComma(z));

    var t = parseFloatEx(tanka33["tanka"]);
    var x = parseFloatEx(tanka33["tax"]);
    var a = parseFloatEx($("td#1-33_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-33_tan").text(formatComma(t));
    $("td#1-33_kin").text(formatComma(k));
    $("input#1-33_tax").val(formatComma(z));

    var t = parseFloatEx(tanka34["tanka"]);
    var x = parseFloatEx(tanka34["tax"]);
    var a = parseFloatEx($("td#1-34_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-34_tan").text(formatComma(t));
    $("td#1-34_kin").text(formatComma(k));
    $("input#1-34_tax").val(formatComma(z));

    var t = parseFloatEx(tanka35["tanka"]);
    var x = parseFloatEx(tanka35["tax"]);
    var a = parseFloatEx($("td#1-35_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-35_tan").text(formatComma(t));
    $("td#1-35_kin").text(formatComma(k));
    $("input#1-35_tax").val(formatComma(z));

    var t = parseFloatEx(tanka36["tanka"]);
    var x = parseFloatEx(tanka36["tax"]);
    var a = parseFloatEx($("td#1-36_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-36_tan").text(formatComma(t));
    $("td#1-36_kin").text(formatComma(k));
    $("input#1-36_tax").val(formatComma(z));

    var t = parseFloatEx(tanka32["tanka"]);
    var x = parseFloatEx(tanka32["tax"]);
    var a = parseFloatEx($("td#2-32_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-32_tan").text(formatComma(t));
    $("td#2-32_kin").text(formatComma(k));
    $("input#2-32_tax").val(formatComma(z));

    var t = parseFloatEx(tanka37["tanka"]);
    var x = parseFloatEx(tanka37["tax"]);
    var a = parseFloatEx($("td#2-37_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-37_tan").text(formatComma(t));
    $("td#2-37_kin").text(formatComma(k));
    $("input#2-37_tax").val(formatComma(z));

    var t = parseFloatEx(tanka38["tanka"]);
    var x = parseFloatEx(tanka38["tax"]);
    var a = parseFloatEx($("td#2-38_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-38_tan").text(formatComma(t));
    $("td#2-38_kin").text(formatComma(k));
    $("input#2-38_tax").val(formatComma(z));

    var t = parseFloatEx(tanka35["tanka"]);
    var x = parseFloatEx(tanka35["tax"]);
    var a = parseFloatEx($("td#2-35_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-35_tan").text(formatComma(t));
    $("td#2-35_kin").text(formatComma(k));
    $("input#2-35_tax").val(formatComma(z));

    var t = parseFloatEx(tanka36["tanka"]);
    var x = parseFloatEx(tanka36["tax"]);
    var a = parseFloatEx($("td#2-36_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-36_tan").text(formatComma(t));
    $("td#2-36_kin").text(formatComma(k));
    $("input#2-36_tax").val(formatComma(z));

    var t = parseFloatEx(tanka32["tanka"]);
    var x = parseFloatEx(tanka32["tax"]);
    var a = parseFloatEx($("td#3-32_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-32_tan").text(formatComma(t));
    $("td#3-32_kin").text(formatComma(k));
    $("input#3-32_tax").val(formatComma(z));

    var t = parseFloatEx(tanka39["tanka"]);
    var x = parseFloatEx(tanka39["tax"]);
    var a = parseFloatEx($("td#3-39_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-39_tan").text(formatComma(t));
    $("td#3-39_kin").text(formatComma(k));
    $("input#3-39_tax").val(formatComma(z));

    var t = parseFloatEx(tanka40["tanka"]);
    var x = parseFloatEx(tanka40["tax"]);
    var a = parseFloatEx($("td#3-40_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-40_tan").text(formatComma(t));
    $("td#3-40_kin").text(formatComma(k));
    $("input#3-40_tax").val(formatComma(z));

    var t = parseFloatEx(tanka35["tanka"]);
    var x = parseFloatEx(tanka35["tax"]);
    var a = parseFloatEx($("td#3-35_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-35_tan").text(formatComma(t));
    $("td#3-35_kin").text(formatComma(k));
    $("input#3-35_tax").val(formatComma(z));

    var t = parseFloatEx(tanka36["tanka"]);
    var x = parseFloatEx(tanka36["tax"]);
    var a = parseFloatEx($("td#3-36_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-36_tan").text(formatComma(t));
    $("td#3-36_kin").text(formatComma(k));
    $("input#3-36_tax").val(formatComma(z));

    var t = parseFloatEx(tanka41["tanka"]);
    var x = parseFloatEx(tanka41["tax"]);
    var a = parseFloatEx($("td#4-41_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-41_tan").text(formatComma(t));
    $("td#4-41_kin").text(formatComma(k));
    $("input#4-41_tax").val(formatComma(z));

    var t = parseFloatEx(tanka42["tanka"]);
    var x = parseFloatEx(tanka42["tax"]);
    var a = parseFloatEx($("td#4-42_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-42_tan").text(formatComma(t));
    $("td#4-42_kin").text(formatComma(k));
    $("input#4-42_tax").val(formatComma(z));

    var t = parseFloatEx(tanka40["tanka"]);
    var x = parseFloatEx(tanka40["tax"]);
    var a = parseFloatEx($("td#4-40_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-40_tan").text(formatComma(t));
    $("td#4-40_kin").text(formatComma(k));
    $("input#4-40_tax").val(formatComma(z));

    var t = parseFloatEx(tanka35["tanka"]);
    var x = parseFloatEx(tanka35["tax"]);
    var a = parseFloatEx($("td#4-35_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-35_tan").text(formatComma(t));
    $("td#4-35_kin").text(formatComma(k));
    $("input#4-35_tax").val(formatComma(z));

    var t = parseFloatEx(tanka36["tanka"]);
    var x = parseFloatEx(tanka36["tax"]);
    var a = parseFloatEx($("td#4-36_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-36_tan").text(formatComma(t));
    $("td#4-36_kin").text(formatComma(k));
    $("input#4-36_tax").val(formatComma(z));

    wm.submitItems[3] = submitItem7;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL7_1"];
    var col2Value = wm.mitsumoriData["COL7_2"];
    var col3Value = wm.mitsumoriData["COL7_3"];
    var col4Value = wm.mitsumoriData["COL7_4"];
    var col5Value = wm.mitsumoriData["COL7_5"];
    var col6Value = wm.mitsumoriData["COL7_6"];
    var col7Value = wm.mitsumoriData["COL7_7"];
    var col8Value = wm.mitsumoriData["COL7_8"];
    //$("input[name='COL1_1']").val(col1Value);
    // 平面形状型
    if(col1Value == "1"){
      $("input#1-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#1-COL7_2").attr("checked", true);
      }
      $("input#1-COL7_3").val(col3Value);
      $("input#1-COL7_4").val(col4Value);
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL7_2").attr("checked", true);
      }
      $("input#2-COL7_3").val(col3Value);
      $("input#2-COL7_4").val(col4Value);
      $("input#2-COL7_5").val(col5Value);
      $("input#2-COL7_6").val(col6Value);
      $("input#2-COL7_7").val(col7Value);
      if(col8Value == "1"){
        $("input#2-COL7_8").attr("checked", true);
        $("input#2-COL7_5").attr('disabled', true);
        $("input#2-COL7_6").attr('disabled', true);
        $("input#2-COL7_7").attr('disabled', true);
      }
    }
    // モールド（採寸）
    if(col1Value == "3"){
      $("input#3-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL7_2").attr("checked", true);
      }
      $("input#3-COL7_3").val(col3Value);
      $("input#3-COL7_4").val(col4Value);
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#4-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL7_2").attr("checked", true);
      }
      $("input#4-COL7_3").val(col3Value);
      $("input#4-COL7_4").val(col4Value);
    }
    $("div#step4").load("/mitsumori/step_08.html", wizard4d);
  }

  // メインフレーム機構選定
  function wizard3e(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      if ($("li#step3").hasClass('jqwizard_done') || $("li#step3").hasClass('jqwizard_lastdone')) {
        wm.step = 3;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show(); 
      }
    });
    //
    $("input#1-COL3_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL3_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL3_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL3_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });

    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL3_1"];
    var col2Value = wm.mitsumoriData["COL3_2"];
    var col3Value = wm.mitsumoriData["COL3_3"];
    var col4Value = wm.mitsumoriData["COL3_4"];
    var col5Value = wm.mitsumoriData["COL3_5"];
    var col6Value = wm.mitsumoriData["COL3_6"];
    var col7Value = wm.mitsumoriData["COL3_7"];
    var col8Value = wm.mitsumoriData["COL3_8"];
    var col9Value = wm.mitsumoriData["COL3_9"];
    var col10Value = wm.mitsumoriData["COL3_10"];
    var col11Value = wm.mitsumoriData["COL3_11"];
    var col12Value = wm.mitsumoriData["COL3_12"];
    var col13Value = wm.mitsumoriData["COL3_13"];

    // 固定型
    if(col1Value == "1"){
      $("input#1-COL3_1").attr("checked", true);
      $("select#1-COL3_4").val(col4Value);
      $("select#1-COL3_2").val(col2Value);
      $("input#1-COL3_13").val(col13Value);
    }
    // リクライニング
    if(col1Value == "2"){
      $("input#2-COL3_1").attr("checked", true);
      $("select#2-COL3_4").val(col4Value);
      if(col5Value == "1"){
        $("input#2-1-COL3_5").attr("checked", true);
      }
      if(col5Value == "2"){
        $("input#2-2-COL3_5").attr("checked", true);
      }
      $("input#2-COL3_13").val(col13Value);
      $("select#2-COL3_4").val(col4Value);
      $("input#2-COL3_6").val(col6Value);
      $("input#2-COL3_7").val(col7Value);
      $("input#2-COL3_8").val(col8Value);
      $("input#2-COL3_9").val(col9Value);
      // コンボボックス
      var seihin = getProduct(3);
      if(seihin != undefined) { $("select#2-3_su").val(seihin["suryo"]); } 
    }
    // ティルト
    if(col1Value == "3"){
      $("input#3-COL3_1").attr("checked", true);
      $("select#3-COL3_3").val(col3Value);
      if(col10Value == "1"){
        $("input#3-1-COL3_10").attr("checked", true);
      }
      if(col10Value == "2"){
        $("input#3-2-COL3_10").attr("checked", true);
      }
      $("input#3-COL3_13").val(col13Value);
      $("select#3-COL3_3").val(col3Value);
      $("input#3-COL3_8").val(col8Value);
      $("input#3-COL3_9").val(col9Value);
      // コンボボックス
      var seihin = getProduct(3);
      if(seihin != undefined) { $("select#3-3_su").val(seihin["suryo"]); } 
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#4-COL3_1").attr("checked", true);
      if(col11Value == "1"){
        $("input#4-1-COL3_11").attr("checked", true);
      }
      if(col11Value == "2"){
        $("input#4-2-COL3_11").attr("checked", true);
      }
      if(col11Value == "3"){
        $("input#4-3-COL3_11").attr("checked", true);
      }
      if(col12Value == "1"){
        $("input#4-1-COL3_12").attr("checked", true);
      }
      if(col12Value == "2"){
        $("input#4-2-COL3_12").attr("checked", true);
      }
      if(col12Value == "3"){
        $("input#4-3-COL3_12").attr("checked", true);
      }
      $("input#4-COL3_13").val(col13Value);
      $("input#4-COL3_6").val(col6Value);
      $("input#4-COL3_7").val(col7Value);
      $("input#4-COL3_8").val(col8Value);
      $("input#4-COL3_9").val(col9Value);
      // コンボボックス
      var seihin = getProduct(3);
      if(seihin != undefined) { $("select#4-3_su").val(seihin["suryo"]); } 
    }

    var tanka1 = getSeihinInfo("1");
    var tanka2 = getSeihinInfo("2");
    var tanka3 = getSeihinInfo("3");
    var tanka4 = getSeihinInfo("4");
    // 単価をセット
    var t = parseFloatEx(tanka1["tanka"]);
    var x = parseFloatEx(tanka1["tax"]);
    var a = parseFloatEx($("td#1-1_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-1_tan").text(formatComma(t));
    $("td#1-1_kin").text(formatComma(k));
    $("input#1-1_tax").val(formatComma(z));

    t = parseFloatEx(tanka2["tanka"]);
    x = parseFloatEx(tanka2["tax"]);
    a = parseFloatEx($("td#1-2_su").text());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#1-2_tan").text(formatComma(t));
    $("td#1-2_kin").text(formatComma(k));
    $("input#1-2_tax").val(formatComma(z));

    t = parseFloatEx(tanka1["tanka"]);
    x = parseFloatEx(tanka1["tax"]);
    a = parseFloatEx($("td#2-1_su").text());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#2-1_tan").text(formatComma(t));
    $("td#2-1_kin").text(formatComma(k));
    $("input#2-1_tax").val(formatComma(z));

    t = parseFloatEx(tanka2["tanka"]);
    x = parseFloatEx(tanka2["tax"]);
    a = parseFloatEx($("td#2-2_su").text());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#2-2_tan").text(formatComma(t));
    $("td#2-2_kin").text(formatComma(k));
    $("input#2-2_tax").val(formatComma(z));

    t = parseFloatEx(tanka3["tanka"]);
    x = parseFloatEx(tanka3["tax"]);
    a = parseFloatEx($("select#2-3_su").val());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#2-3_tan").text(formatComma(t));
    $("td#2-3_kin").text(formatComma(k));
    $("input#2-3_tax").val(formatComma(z));

    t = parseFloatEx(tanka1["tanka"]);
    x = parseFloatEx(tanka1["tax"]);
    a = parseFloatEx($("td#3-1_su").text());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#3-1_tan").text(formatComma(t));
    $("td#3-1_kin").text(formatComma(k));
    $("input#3-1_tax").val(formatComma(z));

    t = parseFloatEx(tanka4["tanka"]);
    x = parseFloatEx(tanka4["tax"]);
    a = parseFloatEx($("td#3-4_su").text());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#3-4_tan").text(formatComma(t));
    $("td#3-4_kin").text(formatComma(k));
    $("input#3-4_tax").val(formatComma(z));

    t = parseFloatEx(tanka2["tanka"]);
    x = parseFloatEx(tanka2["tax"]);
    a = parseFloatEx($("td#3-2_su").text());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#3-2_tan").text(formatComma(t));
    $("td#3-2_kin").text(formatComma(k));
    $("input#3-2_tax").val(formatComma(z));

    t = parseFloatEx(tanka3["tanka"]);
    x = parseFloatEx(tanka3["tax"]);
    a = parseFloatEx($("select#3-3_su").val());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#3-3_tan").text(formatComma(t));
    $("td#3-3_kin").text(formatComma(k));
    $("input#3-3_tax").val(formatComma(z));

    t = parseFloatEx(tanka1["tanka"]);
    x = parseFloatEx(tanka1["tax"]);
    a = parseFloatEx($("td#4-1_su").text());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#4-1_tan").text(formatComma(t));
    $("td#4-1_kin").text(formatComma(k));
    $("input#4-1_tax").val(formatComma(z));

    t = parseFloatEx(tanka2["tanka"]);
    x = parseFloatEx(tanka2["tax"]);
    a = parseFloatEx($("td#4-2_su").text());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#4-2_tan").text(formatComma(t));
    $("td#4-2_kin").text(formatComma(k));
    $("input#4-2_tax").val(formatComma(z));

    t = parseFloatEx(tanka3["tanka"]);
    x = parseFloatEx(tanka3["tax"]);
    a = parseFloatEx($("select#4-3_su").val());
    k = t * a;
    z = getFormatAmount(k * x, 1, 0);
    $("td#4-3_tan").text(formatComma(t));
    $("td#4-3_kin").text(formatComma(k));
    $("input#4-3_tax").val(formatComma(z));

    $("select#2-3_su").change(function() {
      var m_tanka = getSeihinInfo("3");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-3_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-3_kin").text(formatComma(kingaku));
      $("input#2-3_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-3_su").change(function() {
      var m_tanka = getSeihinInfo("3");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#3-3_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-3_kin").text(formatComma(kingaku));
      $("input#3-3_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-3_su").change(function() {
      var m_tanka = getSeihinInfo("3");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-3_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-3_kin").text(formatComma(kingaku));
      $("input#4-3_tax").val(formatComma(zeigaku));
      return false;
    });
    
    wm.submitItems[3] = submitItem3;

    // 次のページをロードする
    $("div#step4").load("/mitsumori/step_04.html", wizard4e);
  }

    // オーダー対応木製
  function wizard3f(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      if ($("li#step3").hasClass('jqwizard_done') || $("li#step3").hasClass('jqwizard_lastdone')) {
        wm.step = 3;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show(); 
      }
    });
    //
    $("input#1-COL22_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL22_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    var tanka167 = getSeihinInfo("167");
    var tanka168 = getSeihinInfo("168");
    var tanka169 = getSeihinInfo("169");
    var tanka170 = getSeihinInfo("170");
    var tanka171 = getSeihinInfo("171");
    var tanka172 = getSeihinInfo("172");
    // 単価をセット
    var t = parseFloatEx(tanka167["tanka"]);
    var x = parseFloatEx(tanka167["tax"]);
    var a = parseFloatEx($("input#1-167_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("input#1-167_tan").val(formatComma(t));
    $("td#1-167_kin").text(formatComma(k));
    $("td#1-167_tax_v").text((x * 100) + "%");
    $("input#1-167_tax").val(formatComma(z));

    var t = parseFloatEx(tanka168["tanka"]);
    var x = parseFloatEx(tanka168["tax"]);
    var a = parseFloatEx($("input#1-168_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("input#1-168_tan").val(formatComma(t));
    $("td#1-168_kin").text(formatComma(k));
    $("td#1-168_tax_v").text((x * 100) + "%");
    $("input#1-168_tax").val(formatComma(z));

    var t = parseFloatEx(tanka169["tanka"]);
    var x = parseFloatEx(tanka169["tax"]);
    var a = parseFloatEx($("input#1-169_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("input#1-169_tan").val(formatComma(t));
    $("td#1-169_kin").text(formatComma(k));
    $("td#1-169_tax_v").text((x * 100) + "%");
    $("input#1-169_tax").val(formatComma(z));

    var t = parseFloatEx(tanka170["tanka"]);
    var x = parseFloatEx(tanka170["tax"]);
    var a = parseFloatEx($("input#2-170_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("input#2-170_tan").val(formatComma(t));
    $("td#2-170_kin").text(formatComma(k));
    $("td#2-170_tax_v").text((x * 100) + "%");
    $("input#2-170_tax").val(formatComma(z));

    var t = parseFloatEx(tanka171["tanka"]);
    var x = parseFloatEx(tanka171["tax"]);
    var a = parseFloatEx($("input#2-171_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("input#2-171_tan").val(formatComma(t));
    $("td#2-171_kin").text(formatComma(k));
    $("td#2-171_tax_v").text((x * 100) + "%");
    $("input#2-171_tax").val(formatComma(z));

    var t = parseFloatEx(tanka172["tanka"]);
    var x = parseFloatEx(tanka172["tax"]);
    var a = parseFloatEx($("input#2-172_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("input#2-172_tan").val(formatComma(t));
    $("td#2-172_kin").text(formatComma(k));
    $("td#2-172_tax_v").text((x * 100) + "%");
    $("input#2-172_tax").val(formatComma(z));

    wm.submitItems[3] = submitItem22;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL22_1"];
    var col2Value = wm.mitsumoriData["COL22_2"];
    var col3Value = wm.mitsumoriData["COL22_3"];
    //$("input[name='COL1_1']").val(col1Value);
    // ニューオルソチェア
    if(col1Value == "1"){
      $("input#1-COL22_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#1-1-COL22_2").attr("checked", true);
      }
      if(col2Value == "2"){
        $("input#1-2-COL22_2").attr("checked", true);
      }
      if(col2Value == "3"){
        $("input#1-3-COL22_2").attr("checked", true);
      }
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL22_1").attr("checked", true);
      if(col3Value == "1"){
        $("input#2-1-COL22_3").attr("checked", true);
      }
      if(col2Value == "2"){
        $("input#2-2-COL22_3").attr("checked", true);
      }
      if(col2Value == "3"){
        $("input#2-3-COL22_3").attr("checked", true);
      }
    }

  }