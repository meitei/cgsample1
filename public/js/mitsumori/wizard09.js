  // レッグサポート
  function wizard9a(){
    // STEPボタンクリック
    $("li#step9").click(function() {
      wm.step = 9;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    $("select#2-73_su").change(function() {
      var m_tanka = getSeihinInfo("73");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-73_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-73_kin").text(formatComma(kingaku));
      $("input#2-73_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-74_su").change(function() {
      var m_tanka = getSeihinInfo("74");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-74_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-74_kin").text(formatComma(kingaku));
      $("input#2-74_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-75_su").change(function() {
      var m_tanka = getSeihinInfo("75");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-75_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-75_kin").text(formatComma(kingaku));
      $("input#2-75_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-76_su").change(function() {
      var m_tanka = getSeihinInfo("76");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-76_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-76_kin").text(formatComma(kingaku));
      $("input#2-76_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-73_su").change(function() {
      var m_tanka = getSeihinInfo("73");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#3-73_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-73_kin").text(formatComma(kingaku));
      $("input#3-73_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-74_su").change(function() {
      var m_tanka = getSeihinInfo("74");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#3-74_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-74_kin").text(formatComma(kingaku));
      $("input#3-74_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-75_su").change(function() {
      var m_tanka = getSeihinInfo("75");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#3-75_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-75_kin").text(formatComma(kingaku));
      $("input#3-75_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-76_su").change(function() {
      var m_tanka = getSeihinInfo("76");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#3-76_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-76_kin").text(formatComma(kingaku));
      $("input#3-76_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-73_su").change(function() {
      var m_tanka = getSeihinInfo("73");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-73_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-73_kin").text(formatComma(kingaku));
      $("input#4-73_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-74_su").change(function() {
      var m_tanka = getSeihinInfo("74");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-74_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-74_kin").text(formatComma(kingaku));
      $("input#4-74_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-78_su").change(function() {
      var m_tanka = getSeihinInfo("78");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-78_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-78_kin").text(formatComma(kingaku));
      $("input#4-78_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-79_su").change(function() {
      var m_tanka = getSeihinInfo("79");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-79_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-79_kin").text(formatComma(kingaku));
      $("input#4-79_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-76_su").change(function() {
      var m_tanka = getSeihinInfo("76");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-76_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-76_kin").text(formatComma(kingaku));
      $("input#4-76_tax").val(formatComma(zeigaku));
      return false;
    });
    var tanka73 = getSeihinInfo("73");
    var tanka74 = getSeihinInfo("74");
    var tanka75 = getSeihinInfo("75");
    var tanka76 = getSeihinInfo("76");
    var tanka77 = getSeihinInfo("77");
    var tanka78 = getSeihinInfo("78");
    var tanka79 = getSeihinInfo("79");
    // 単価をセット
    var t = parseFloatEx(tanka73["tanka"]);
    var x = parseFloatEx(tanka73["tax"]);
    var a = parseFloatEx($("select#2-73_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-73_tan").text(formatComma(t));
    $("td#2-73_kin").text(formatComma(k));
    $("input#2-73_tax").val(formatComma(z));

    var t = parseFloatEx(tanka74["tanka"]);
    var x = parseFloatEx(tanka74["tax"]);
    var a = parseFloatEx($("select#2-74_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-74_tan").text(formatComma(t));
    $("td#2-74_kin").text(formatComma(k));
    $("input#2-74_tax").val(formatComma(z));

    var t = parseFloatEx(tanka75["tanka"]);
    var x = parseFloatEx(tanka75["tax"]);
    var a = parseFloatEx($("select#2-75_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-75_tan").text(formatComma(t));
    $("td#2-75_kin").text(formatComma(k));
    $("input#2-75_tax").val(formatComma(z));

    var t = parseFloatEx(tanka76["tanka"]);
    var x = parseFloatEx(tanka76["tax"]);
    var a = parseFloatEx($("select#2-76_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-76_tan").text(formatComma(t));
    $("td#2-76_kin").text(formatComma(k));
    $("input#2-76_tax").val(formatComma(z));

    var t = parseFloatEx(tanka77["tanka"]);
    var x = parseFloatEx(tanka77["tax"]);
    var a = parseFloatEx($("td#2-77_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-77_tan").text(formatComma(t));
    $("td#2-77_kin").text(formatComma(k));
    $("input#2-77_tax").val(formatComma(z));

    var t = parseFloatEx(tanka73["tanka"]);
    var x = parseFloatEx(tanka73["tax"]);
    var a = parseFloatEx($("select#3-73_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-73_tan").text(formatComma(t));
    $("td#3-73_kin").text(formatComma(k));
    $("input#3-73_tax").val(formatComma(z));

    var t = parseFloatEx(tanka74["tanka"]);
    var x = parseFloatEx(tanka74["tax"]);
    var a = parseFloatEx($("select#3-74_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-74_tan").text(formatComma(t));
    $("td#3-74_kin").text(formatComma(k));
    $("input#3-74_tax").val(formatComma(z));

    var t = parseFloatEx(tanka75["tanka"]);
    var x = parseFloatEx(tanka75["tax"]);
    var a = parseFloatEx($("select#3-75_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-75_tan").text(formatComma(t));
    $("td#3-75_kin").text(formatComma(k));
    $("input#3-75_tax").val(formatComma(z));

    var t = parseFloatEx(tanka76["tanka"]);
    var x = parseFloatEx(tanka76["tax"]);
    var a = parseFloatEx($("select#3-76_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-76_tan").text(formatComma(t));
    $("td#3-76_kin").text(formatComma(k));
    $("input#3-76_tax").val(formatComma(z));

    var t = parseFloatEx(tanka77["tanka"]);
    var x = parseFloatEx(tanka77["tax"]);
    var a = parseFloatEx($("td#3-77_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-77_tan").text(formatComma(t));
    $("td#3-77_kin").text(formatComma(k));
    $("input#3-77_tax").val(formatComma(z));

    var t = parseFloatEx(tanka73["tanka"]);
    var x = parseFloatEx(tanka73["tax"]);
    var a = parseFloatEx($("select#4-73_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-73_tan").text(formatComma(t));
    $("td#4-73_kin").text(formatComma(k));
    $("input#4-73_tax").val(formatComma(z));

    var t = parseFloatEx(tanka74["tanka"]);
    var x = parseFloatEx(tanka74["tax"]);
    var a = parseFloatEx($("select#4-74_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-74_tan").text(formatComma(t));
    $("td#4-74_kin").text(formatComma(k));
    $("input#4-74_tax").val(formatComma(z));

    var t = parseFloatEx(tanka78["tanka"]);
    var x = parseFloatEx(tanka78["tax"]);
    var a = parseFloatEx($("select#4-78_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-78_tan").text(formatComma(t));
    $("td#4-78_kin").text(formatComma(k));
    $("input#4-78_tax").val(formatComma(z));

    var t = parseFloatEx(tanka79["tanka"]);
    var x = parseFloatEx(tanka79["tax"]);
    var a = parseFloatEx($("select#4-79_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-79_tan").text(formatComma(t));
    $("td#4-79_kin").text(formatComma(k));
    $("input#4-79_tax").val(formatComma(z));

    var t = parseFloatEx(tanka76["tanka"]);
    var x = parseFloatEx(tanka76["tax"]);
    var a = parseFloatEx($("select#4-76_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-76_tan").text(formatComma(t));
    $("td#4-76_kin").text(formatComma(k));
    $("input#4-76_tax").val(formatComma(z));

    var t = parseFloatEx(tanka77["tanka"]);
    var x = parseFloatEx(tanka77["tax"]);
    var a = parseFloatEx($("td#4-77_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-77_tan").text(formatComma(t));
    $("td#4-77_kin").text(formatComma(k));
    $("input#4-77_tax").val(formatComma(z));

    wm.submitItems[9] = submitItem11;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL11_1"];
    var col2Value = wm.mitsumoriData["COL11_2"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL11_1").attr("checked", true);
    }
    // 直下型
    if(col1Value == "2"){
      $("input#2-COL11_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL11_2").attr("checked", true);
      }
    }
    // 車椅子
    if(col1Value == "3"){
      $("input#3-COL11_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL11_2").attr("checked", true);
      }
    }
    // エレベーティング
    if(col1Value == "4"){
      $("input#4-COL11_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL11_2").attr("checked", true);
      }
      $("input#4-COL11_3").val(wm.mitsumoriData["COL11_3"]);
      $("input#4-COL11_4").val(wm.mitsumoriData["COL11_4"]);
    }
    $("div#step10").load("/mitsumori/step_13.html", wizard10a);
  }

  // シートベルト
  function wizard9b(){
    // STEPボタンクリック
    $("li#step9").click(function() {
      wm.step = 9;
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

    wm.submitItems[9] = submitItem16;
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
    $("div#step10").load("/mitsumori/step_17.html", wizard10b);
  }

  // パッド
  function wizard9d(){
    // STEPボタンクリック
    $("li#step9").click(function() {
      wm.step = 9;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    $("select#2-113_su").change(function() {
      var m_tanka = getSeihinInfo("113");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-113_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-113_kin").text(formatComma(kingaku));
      $("input#2-113_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-115_su").change(function() {
      var m_tanka = getSeihinInfo("115");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-115_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-115_kin").text(formatComma(kingaku));
      $("input#2-115_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-108_su").change(function() {
      var m_tanka = getSeihinInfo("108");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-108_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-108_kin").text(formatComma(kingaku));
      $("input#2-108_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-109_su").change(function() {
      var m_tanka = getSeihinInfo("109");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-109_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-109_kin").text(formatComma(kingaku));
      $("input#2-109_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-110_su").change(function() {
      var m_tanka = getSeihinInfo("110");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-110_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-110_kin").text(formatComma(kingaku));
      $("input#2-110_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-111_su").change(function() {
      var m_tanka = getSeihinInfo("111");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-111_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-111_kin").text(formatComma(kingaku));
      $("input#2-111_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-118_su").change(function() {
      var m_tanka = getSeihinInfo("118");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-118_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-118_kin").text(formatComma(kingaku));
      $("input#2-118_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-119_su").change(function() {
      var m_tanka = getSeihinInfo("119");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-119_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-119_kin").text(formatComma(kingaku));
      $("input#2-119_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-120_su").change(function() {
      var m_tanka = getSeihinInfo("120");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-120_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-120_kin").text(formatComma(kingaku));
      $("input#2-120_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-121_su").change(function() {
      var m_tanka = getSeihinInfo("121");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-121_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-121_kin").text(formatComma(kingaku));
      $("input#2-121_tax").val(formatComma(zeigaku));
      return false;
    });
    var tanka113 = getSeihinInfo("113");
    var tanka115 = getSeihinInfo("115");
    var tanka108 = getSeihinInfo("108");
    var tanka109 = getSeihinInfo("109");
    var tanka110 = getSeihinInfo("110");
    var tanka111 = getSeihinInfo("111");
    var tanka112 = getSeihinInfo("112");
    var tanka114 = getSeihinInfo("114");
    var tanka116 = getSeihinInfo("116");
    var tanka117 = getSeihinInfo("117");
    var tanka118 = getSeihinInfo("118");
    var tanka119 = getSeihinInfo("119");
    var tanka120 = getSeihinInfo("120");
    var tanka121 = getSeihinInfo("121");
    // 単価をセット
    var t = parseFloatEx(tanka113["tanka"]);
    var x = parseFloatEx(tanka113["tax"]);
    var a = parseFloatEx($("select#2-113_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-113_tan").text(formatComma(t));
    $("td#2-113_kin").text(formatComma(k));
    $("input#2-113_tax").val(formatComma(z));

    var t = parseFloatEx(tanka115["tanka"]);
    var x = parseFloatEx(tanka115["tax"]);
    var a = parseFloatEx($("select#2-115_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-115_tan").text(formatComma(t));
    $("td#2-115_kin").text(formatComma(k));
    $("input#2-115_tax").val(formatComma(z));

    var t = parseFloatEx(tanka108["tanka"]);
    var x = parseFloatEx(tanka108["tax"]);
    var a = parseFloatEx($("select#2-108_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-108_tan").text(formatComma(t));
    $("td#2-108_kin").text(formatComma(k));
    $("input#2-108_tax").val(formatComma(z));

    var t = parseFloatEx(tanka109["tanka"]);
    var x = parseFloatEx(tanka109["tax"]);
    var a = parseFloatEx($("select#2-109_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-109_tan").text(formatComma(t));
    $("td#2-109_kin").text(formatComma(k));
    $("input#2-109_tax").val(formatComma(z));

    var t = parseFloatEx(tanka110["tanka"]);
    var x = parseFloatEx(tanka110["tax"]);
    var a = parseFloatEx($("select#2-110_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-110_tan").text(formatComma(t));
    $("td#2-110_kin").text(formatComma(k));
    $("input#2-110_tax").val(formatComma(z));

    var t = parseFloatEx(tanka111["tanka"]);
    var x = parseFloatEx(tanka111["tax"]);
    var a = parseFloatEx($("select#2-111_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-111_tan").text(formatComma(t));
    $("td#2-111_kin").text(formatComma(k));
    $("input#2-111_tax").val(formatComma(z));

    var t = parseFloatEx(tanka112["tanka"]);
    var x = parseFloatEx(tanka112["tax"]);
    var a = parseFloatEx($("td#2-112_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-112_tan").text(formatComma(t));
    $("td#2-112_kin").text(formatComma(k));
    $("input#2-112_tax").val(formatComma(z));

    var t = parseFloatEx(tanka114["tanka"]);
    var x = parseFloatEx(tanka114["tax"]);
    var a = parseFloatEx($("td#2-114_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-114_tan").text(formatComma(t));
    $("td#2-114_kin").text(formatComma(k));
    $("input#2-114_tax").val(formatComma(z));

    var t = parseFloatEx(tanka116["tanka"]);
    var x = parseFloatEx(tanka116["tax"]);
    var a = parseFloatEx($("td#2-116_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-116_tan").text(formatComma(t));
    $("td#2-116_kin").text(formatComma(k));
    $("input#2-116_tax").val(formatComma(z));

    var t = parseFloatEx(tanka117["tanka"]);
    var x = parseFloatEx(tanka117["tax"]);
    var a = parseFloatEx($("td#2-117_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-117_tan").text(formatComma(t));
    $("td#2-117_kin").text(formatComma(k));
    $("input#2-117_tax").val(formatComma(z));

    var t = parseFloatEx(tanka118["tanka"]);
    var x = parseFloatEx(tanka118["tax"]);
    var a = parseFloatEx($("select#2-118_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-118_tan").text(formatComma(t));
    $("td#2-118_kin").text(formatComma(k));
    $("input#2-118_tax").val(formatComma(z));

    var t = parseFloatEx(tanka119["tanka"]);
    var x = parseFloatEx(tanka119["tax"]);
    var a = parseFloatEx($("select#2-119_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-119_tan").text(formatComma(t));
    $("td#2-119_kin").text(formatComma(k));
    $("input#2-119_tax").val(formatComma(z));

    var t = parseFloatEx(tanka120["tanka"]);
    var x = parseFloatEx(tanka120["tax"]);
    var a = parseFloatEx($("select#2-120_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-120_tan").text(formatComma(t));
    $("td#2-120_kin").text(formatComma(k));
    $("input#2-120_tax").val(formatComma(z));

    var t = parseFloatEx(tanka121["tanka"]);
    var x = parseFloatEx(tanka121["tax"]);
    var a = parseFloatEx($("select#2-121_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-121_tan").text(formatComma(t));
    $("td#2-121_kin").text(formatComma(k));
    $("input#2-121_tax").val(formatComma(z));
    
    wm.submitItems[9] = submitItem17;

    if (wm.mitsumoriData["COL17_1"] == "1") {
      $("input#1-COL17_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL17_1"] == "2") {
      $("input#2-COL17_1").attr("checked", true);
    }
    // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL17_2"] == "1") {
      $("input#2-COL17_2").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_3"] == "1") {
      $("input#2-COL17_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_4"] == "1") {
      $("input#2-COL17_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_5"] == "1") {
      $("input#2-COL17_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_6"] == "1") {
      $("input#2-COL17_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_7"] == "1") {
      $("input#2-COL17_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_8"] == "1") {
      $("input#2-COL17_8").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_9"] == "1") {
      $("input#2-COL17_9").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_10"] == "1") {
      $("input#2-COL17_10").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_11"] == "1") {
      $("input#2-COL17_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_12"] == "1") {
      $("input#2-COL17_12").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_13"] == "1") {
      $("input#2-COL17_13").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_14"] == "1") {
      $("input#2-COL17_14").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_15"] == "1") {
      $("input#2-COL17_15").attr("checked", true);
    }
    $("div#step10").load("/mitsumori/step_19.html", wizard10d);
  }

  // アームサポート
  function wizard9e(){
    // STEPボタンクリック
    $("li#step9").click(function() {
      wm.step = 9;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL10_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL10_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL10_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL10_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    var tanka69 = getSeihinInfo("69");
    var tanka67 = getSeihinInfo("67");
    var tanka68 = getSeihinInfo("68");
    var tanka70 = getSeihinInfo("70");
    var tanka71 = getSeihinInfo("71");
    var tanka72 = getSeihinInfo("72");
    // 単価をセット
    var t = parseFloatEx(tanka69["tanka"]);
    var x = parseFloatEx(tanka69["tax"]);
    var a = parseFloatEx($("td#2-69_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-69_tan").text(formatComma(t));
    $("td#2-69_kin").text(formatComma(k));
    $("input#2-69_tax").val(formatComma(z));

    var t = parseFloatEx(tanka67["tanka"]);
    var x = parseFloatEx(tanka67["tax"]);
    var a = parseFloatEx($("td#2-67_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-67_tan").text(formatComma(t));
    $("td#2-67_kin").text(formatComma(k));
    $("input#2-67_tax").val(formatComma(z));

    var t = parseFloatEx(tanka68["tanka"]);
    var x = parseFloatEx(tanka68["tax"]);
    var a = parseFloatEx($("td#2-68_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-68_tan").text(formatComma(t));
    $("td#2-68_kin").text(formatComma(k));
    $("input#2-68_tax").val(formatComma(z));

    var t = parseFloatEx(tanka70["tanka"]);
    var x = parseFloatEx(tanka70["tax"]);
    var a = parseFloatEx($("td#3-70_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-70_tan").text(formatComma(t));
    $("td#3-70_kin").text(formatComma(k));
    $("input#3-70_tax").val(formatComma(z));

    var t = parseFloatEx(tanka71["tanka"]);
    var x = parseFloatEx(tanka71["tax"]);
    var a = parseFloatEx($("td#3-71_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-71_tan").text(formatComma(t));
    $("td#3-71_kin").text(formatComma(k));
    $("input#3-71_tax").val(formatComma(z));

    var t = parseFloatEx(tanka72["tanka"]);
    var x = parseFloatEx(tanka72["tax"]);
    var a = parseFloatEx($("td#3-72_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-72_tan").text(formatComma(t));
    $("td#3-72_kin").text(formatComma(k));
    $("input#3-72_tax").val(formatComma(z));

    var t = parseFloatEx(tanka67["tanka"]);
    var x = parseFloatEx(tanka67["tax"]);
    var a = parseFloatEx($("td#3-67_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-67_tan").text(formatComma(t));
    $("td#3-67_kin").text(formatComma(k));
    $("input#3-67_tax").val(formatComma(z));

    var t = parseFloatEx(tanka68["tanka"]);
    var x = parseFloatEx(tanka68["tax"]);
    var a = parseFloatEx($("td#3-68_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-68_tan").text(formatComma(t));
    $("td#3-68_kin").text(formatComma(k));
    $("input#3-68_tax").val(formatComma(z));

    var t = parseFloatEx(tanka70["tanka"]);
    var x = parseFloatEx(tanka70["tax"]);
    var a = parseFloatEx($("td#4-70_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-70_tan").text(formatComma(t));
    $("td#4-70_kin").text(formatComma(k));
    $("input#4-70_tax").val(formatComma(z));

    var t = parseFloatEx(tanka71["tanka"]);
    var x = parseFloatEx(tanka71["tax"]);
    var a = parseFloatEx($("td#4-71_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-71_tan").text(formatComma(t));
    $("td#4-71_kin").text(formatComma(k));
    $("input#4-71_tax").val(formatComma(z));

    var t = parseFloatEx(tanka67["tanka"]);
    var x = parseFloatEx(tanka67["tax"]);
    var a = parseFloatEx($("td#4-67_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-67_tan").text(formatComma(t));
    $("td#4-67_kin").text(formatComma(k));
    $("input#4-67_tax").val(formatComma(z));

    wm.submitItems[9] = submitItem10;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL10_1"];
    var col2Value = wm.mitsumoriData["COL10_2"];
    var col3Value = wm.mitsumoriData["COL10_3"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL10_1").attr("checked", true);
    }
    // ディスク
    if(col1Value == "2"){
      $("input#2-COL10_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL10_2").attr("checked", true);
      }
      if(col3Value == "1"){
        $("input#2-COL10_3").attr("checked", true);
      }
    }
    // 撥ね上げ
    if(col1Value == "3"){
      $("input#3-COL10_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL10_2").attr("checked", true);
      }
      if(col3Value == "1"){
        $("input#3-COL10_3").attr("checked", true);
      }
    }
    // 固定
    if(col1Value == "4"){
      $("input#4-COL10_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL10_2").attr("checked", true);
      }
    }
    $("div#step10").load("/mitsumori/step_12.html", wizard10e);
  }