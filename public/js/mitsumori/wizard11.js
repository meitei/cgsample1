  // 上肢支持部
  function wizard11a(){
    // STEPボタンクリック
    $("li#step11").click(function() {
      wm.step = 11;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
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
    // 単価を書き換え
    updateUnitPrice("step11");
    wm.submitItems[11] = submitItem14;

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
    $("div#step12").load("/mitsumori/step_15.html", wizard12a);
  }

  // OPPW
  function wizard11b(){
    // STEPボタンクリック
    $("li#step11").click(function() {
      wm.step = 11;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    $("button.jqwizard_next").removeAttr("disabled");
    // 単価を書き換え
    updateUnitPrice("step11");
    wm.submitItems[11] = submitItem18;

    if (wm.mitsumoriData["COL18_1"] == "1") {
      $("input#1-COL18_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_2"] == "1") {
      $("input#2-COL18_2").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_3"] == "1") {
      $("input#3-COL18_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_4"] == "1") {
      $("input#4-COL18_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_5"] == "1") {
      $("input#5-COL18_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_6"] == "1") {
      $("input#6-COL18_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_7"] == "1") {
      $("input#7-COL18_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_8"] == "1") {
      $("input#8-COL18_8").attr("checked", true);
    }

  }

  // レッグサポート
  function wizard11e(){
    // STEPボタンクリック
    $("li#step11").click(function() {
      wm.step = 11;
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

    wm.submitItems[11] = submitItem11;

    if (wm.mitsumoriData["COL11_1"] == "1") {

      $("input#1-COL11_1").attr("checked", true);

    } else if (wm.mitsumoriData["COL11_1"] == "2"){
      
      $("input#2-COL11_1").attr("checked", true);
      
      if (wm.mitsumoriData["COL11_2"] == "1") {
        $("input#2-COL11_2").attr("checked", true);
      }

    } else if (wm.mitsumoriData["COL11_1"] == "3"){

      $("input#3-COL11_1").attr("checked", true);

      if (wm.mitsumoriData["COL11_2"] == "1") {
        $("input#3-COL11_2").attr("checked", true);
      }

    } else if (wm.mitsumoriData["COL11_1"] == "4"){

      $("input#4-COL11_1").attr("checked", true);

      if (wm.mitsumoriData["COL11_2"] == "1") {
        $("input#4-COL11_2").attr("checked", true);
      }
      $("input#4-COL11_3").val(wm.mitsumoriData["COL11_3"]);
      $("input#4-COL11_4").val(wm.mitsumoriData["COL11_4"]);
    }
    $("div#step12").load("/mitsumori/step_13.html", wizard12e);
  }