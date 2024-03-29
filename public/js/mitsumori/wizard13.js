  // シートベルト
  function wizard13a(){
    // STEPボタンクリック
    $("li#step13").click(function() {
      if ($("li#step13").hasClass('jqwizard_current')) {
        wm.step = 13;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show();
        if(wm.step < wm.lastStep) {
          $("#btnEstimateRegist").hide();
        }
      }
    });
    //
    $("input#1-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });

    // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL16_1"] == "1") {
      $("input#1-COL16_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL16_1"] == "2"){
      $("input#2-COL16_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_11"] == "1"){
      $("input#2-1-COL16_11").attr("checked", true);
    } else if (wm.mitsumoriData["COL16_11"] == "2"){
      $("input#2-2-COL16_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_2"] == "1") {
      $("input#2-COL16_2").attr("checked", true);
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
    
    wm.submitItems[13] = submitItem16;

    $("div#step14").load("/mitsumori/step_17.html", wizard14a);
  }

  // 上肢支持部
  function wizard13e(){
    // STEPボタンクリック
    $("li#step13").click(function() {
      if ($("li#step13").hasClass('jqwizard_current')) {
        wm.step = 13;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show(); 
      }
    });
    //
    $("input#1-COL14_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL14_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL14_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    var tanka89 = getSeihinInfo("89");
    var tanka90 = getSeihinInfo("90");
    var tanka91 = getSeihinInfo("91");
    var tanka92 = getSeihinInfo("92");
    var tanka93 = getSeihinInfo("93");
    // 単価をセット
    var t = parseFloatEx(tanka89["tanka"]);
    var x = parseFloatEx(tanka89["tax"]);
    var a = parseFloatEx($("td#2-89_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-89_tan").text(formatComma(t));
    $("td#2-89_kin").text(formatComma(k));
    $("input#2-89_tax").val(formatComma(z));

    var t = parseFloatEx(tanka90["tanka"]);
    var x = parseFloatEx(tanka90["tax"]);
    var a = parseFloatEx($("td#2-90_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-90_tan").text(formatComma(t));
    $("td#2-90_kin").text(formatComma(k));
    $("input#2-90_tax").val(formatComma(z));

    var t = parseFloatEx(tanka91["tanka"]);
    var x = parseFloatEx(tanka91["tax"]);
    var a = parseFloatEx($("td#2-91_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-91_tan").text(formatComma(t));
    $("td#2-91_kin").text(formatComma(k));
    $("input#2-91_tax").val(formatComma(z));

    var t = parseFloatEx(tanka92["tanka"]);
    var x = parseFloatEx(tanka92["tax"]);
    var a = parseFloatEx($("td#2-92_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-92_tan").text(formatComma(t));
    $("td#2-92_kin").text(formatComma(k));
    $("input#2-92_tax").val(formatComma(z));

    var t = parseFloatEx(tanka93["tanka"]);
    var x = parseFloatEx(tanka93["tax"]);
    var a = parseFloatEx($("td#3-93_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-93_tan").text(formatComma(t));
    $("td#3-93_kin").text(formatComma(k));
    $("input#3-93_tax").val(formatComma(z));

    wm.submitItems[13] = submitItem14;

    if (wm.mitsumoriData["COL14_1"] == "1") {
      $("input#1-COL14_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL14_1"] == "2"){
      $("input#2-COL14_1").attr("checked", true);
      if (wm.mitsumoriData["COL14_2"] == "1") {
        $("input#2-COL14_2").attr("checked", true);
      }
    } else if (wm.mitsumoriData["COL14_1"] == "3"){
      $("input#3-COL14_1").attr("checked", true);
    }
    $("div#step14").load("/mitsumori/step_15.html", wizard14e);
  }