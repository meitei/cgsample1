  // フットサポート
  function wizard10a(){
    // STEPボタンクリック
    $("li#step10").click(function() {
      wm.step = 10;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show();
      if(wm.step < wm.lastStep) {
        $("#btnEstimateRegist").hide();
      }
    });
    //
    $("input#1-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });

    // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL13_1"] == "1") {
      $("input#1-COL13_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL13_1"] == "2"){
      $("input#2-COL13_1").attr("checked", true);
      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#2-COL13_2").attr("checked", true);
      }
      $("input#2-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#2-COL13_5").val(wm.mitsumoriData["COL13_5"]);
      // コンボボックス
      var seihin = getProduct(81);
      if(seihin != undefined) { $("select#2-81_su").val(seihin["suryo"]); }
      seihin = getProduct(82);
      if(seihin != undefined) { $("select#2-82_su").val(seihin["suryo"]); } 
      seihin = getProduct(83);
      if(seihin != undefined) { $("select#2-83_su").val(seihin["suryo"]); } 
      seihin = getProduct(85);
      if(seihin != undefined) { $("select#2-85_su").val(seihin["suryo"]); } 
      seihin = getProduct(86);
      if(seihin != undefined) { $("select#2-86_su").val(seihin["suryo"]); }
    } else if (wm.mitsumoriData["COL13_1"] == "3"){
      $("input#3-COL13_1").attr("checked", true);
      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#3-COL13_2").attr("checked", true);
      }
      if (wm.mitsumoriData["COL13_3"] == "1") {
        $("input#3-1-COL13_3").attr("checked", true);
      } else if (wm.mitsumoriData["COL13_3"] == "2") {
        $("input#3-2-COL13_3").attr("checked", true);
      }
      $("input#3-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#3-COL13_5").val(wm.mitsumoriData["COL13_5"]);
      // コンボボックス
      var seihin = getProduct(81);
      if(seihin != undefined) { $("select#3-81_su").val(seihin["suryo"]); }
      seihin = getProduct(87);
      if(seihin != undefined) { $("select#3-87_su").val(seihin["suryo"]); } 
      seihin = getProduct(83);
      if(seihin != undefined) { $("select#3-83_su").val(seihin["suryo"]); } 
      seihin = getProduct(85);
      if(seihin != undefined) { $("select#3-85_su").val(seihin["suryo"]); } 
      seihin = getProduct(86);
      if(seihin != undefined) { $("select#3-86_su").val(seihin["suryo"]); }
    } else if (wm.mitsumoriData["COL13_1"] == "4"){
      $("input#4-COL13_1").attr("checked", true);
      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#4-COL13_2").attr("checked", true);
      }
      if (wm.mitsumoriData["COL13_3"] == "1") {
        $("input#4-1-COL13_3").attr("checked", true);
      } else if (wm.mitsumoriData["COL13_3"] == "2") {
        $("input#4-2-COL13_3").attr("checked", true);
      }
      $("input#4-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#4-COL13_5").val(wm.mitsumoriData["COL13_5"]);
      // コンボボックス
      var seihin = getProduct(81);
      if(seihin != undefined) { $("select#4-81_su").val(seihin["suryo"]); }
      seihin = getProduct(82);
      if(seihin != undefined) { $("select#4-82_su").val(seihin["suryo"]); } 
      seihin = getProduct(83);
      if(seihin != undefined) { $("select#4-83_su").val(seihin["suryo"]); } 
      seihin = getProduct(85);
      if(seihin != undefined) { $("select#4-85_su").val(seihin["suryo"]); } 
      seihin = getProduct(86);
      if(seihin != undefined) { $("select#4-86_su").val(seihin["suryo"]); } 
      seihin = getProduct(88);
      if(seihin != undefined) { $("select#4-88_su").val(seihin["suryo"]); }
    }

    $("select#2-81_su").change(function() {
      var m_tanka = getSeihinInfo("81");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-81_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-81_kin").text(formatComma(kingaku));
      $("input#2-81_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-82_su").change(function() {
      var m_tanka = getSeihinInfo("82");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-82_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-82_kin").text(formatComma(kingaku));
      $("input#2-82_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-83_su").change(function() {
      var m_tanka = getSeihinInfo("83");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-83_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-83_kin").text(formatComma(kingaku));
      $("input#2-83_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-85_su").change(function() {
      var m_tanka = getSeihinInfo("85");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-85_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-85_kin").text(formatComma(kingaku));
      $("input#2-85_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-86_su").change(function() {
      var m_tanka = getSeihinInfo("86");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-86_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-86_kin").text(formatComma(kingaku));
      $("input#2-86_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-81_su").change(function() {
      var m_tanka = getSeihinInfo("81");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-81_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-81_kin").text(formatComma(kingaku));
      $("input#3-81_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-87_su").change(function() {
      var m_tanka = getSeihinInfo("87");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#3-87_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-87_kin").text(formatComma(kingaku));
      $("input#3-87_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-83_su").change(function() {
      var m_tanka = getSeihinInfo("83");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-83_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-83_kin").text(formatComma(kingaku));
      $("input#3-83_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-85_su").change(function() {
      var m_tanka = getSeihinInfo("85");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-85_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-85_kin").text(formatComma(kingaku));
      $("input#3-85_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-86_su").change(function() {
      var m_tanka = getSeihinInfo("86");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-86_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-86_kin").text(formatComma(kingaku));
      $("input#3-86_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-81_su").change(function() {
      var m_tanka = getSeihinInfo("81");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-81_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-81_kin").text(formatComma(kingaku));
      $("input#4-81_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-82_su").change(function() {
      var m_tanka = getSeihinInfo("82");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-82_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-82_kin").text(formatComma(kingaku));
      $("input#4-82_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-83_su").change(function() {
      var m_tanka = getSeihinInfo("83");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-83_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-83_kin").text(formatComma(kingaku));
      $("input#4-83_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-85_su").change(function() {
      var m_tanka = getSeihinInfo("85");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-85_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-85_kin").text(formatComma(kingaku));
      $("input#4-85_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-86_su").change(function() {
      var m_tanka = getSeihinInfo("86");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-86_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-86_kin").text(formatComma(kingaku));
      $("input#4-86_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-88_su").change(function() {
      var m_tanka = getSeihinInfo("88");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-88_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-88_kin").text(formatComma(kingaku));
      $("input#4-88_tax").val(formatComma(zeigaku));
      return false;
    });
    var tanka81 = getSeihinInfo("81");
    var tanka82 = getSeihinInfo("82");
    var tanka83 = getSeihinInfo("83");
    var tanka84 = getSeihinInfo("84");
    var tanka85 = getSeihinInfo("85");
    var tanka86 = getSeihinInfo("86");
    var tanka87 = getSeihinInfo("87");
    var tanka88 = getSeihinInfo("88");
    // 単価をセット
    var t = parseFloatEx(tanka81["tanka"]);
    var x = parseFloatEx(tanka81["tax"]);
    var a = parseFloatEx($("select#2-81_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-81_tan").text(formatComma(t));
    $("td#2-81_kin").text(formatComma(k));
    $("input#2-81_tax").val(formatComma(z));

    var t = parseFloatEx(tanka82["tanka"]);
    var x = parseFloatEx(tanka82["tax"]);
    var a = parseFloatEx($("select#2-82_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-82_tan").text(formatComma(t));
    $("td#2-82_kin").text(formatComma(k));
    $("input#2-82_tax").val(formatComma(z));

    var t = parseFloatEx(tanka83["tanka"]);
    var x = parseFloatEx(tanka83["tax"]);
    var a = parseFloatEx($("select#2-83_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-83_tan").text(formatComma(t));
    $("td#2-83_kin").text(formatComma(k));
    $("input#2-83_tax").val(formatComma(z));

    var t = parseFloatEx(tanka84["tanka"]);
    var x = parseFloatEx(tanka84["tax"]);
    var a = parseFloatEx($("td#2-84_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-84_tan").text(formatComma(t));
    $("td#2-84_kin").text(formatComma(k));
    $("input#2-84_tax").val(formatComma(z));

    var t = parseFloatEx(tanka85["tanka"]);
    var x = parseFloatEx(tanka85["tax"]);
    var a = parseFloatEx($("select#2-85_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-85_tan").text(formatComma(t));
    $("td#2-85_kin").text(formatComma(k));
    $("input#2-85_tax").val(formatComma(z));

    var t = parseFloatEx(tanka86["tanka"]);
    var x = parseFloatEx(tanka86["tax"]);
    var a = parseFloatEx($("select#2-86_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-86_tan").text(formatComma(t));
    $("td#2-86_kin").text(formatComma(k));
    $("input#2-86_tax").val(formatComma(z));

    var t = parseFloatEx(tanka81["tanka"]);
    var x = parseFloatEx(tanka81["tax"]);
    var a = parseFloatEx($("select#3-81_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-81_tan").text(formatComma(t));
    $("td#3-81_kin").text(formatComma(k));
    $("input#3-81_tax").val(formatComma(z));

    var t = parseFloatEx(tanka87["tanka"]);
    var x = parseFloatEx(tanka87["tax"]);
    var a = parseFloatEx($("select#3-87_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-87_tan").text(formatComma(t));
    $("td#3-87_kin").text(formatComma(k));
    $("input#3-87_tax").val(formatComma(z));

    var t = parseFloatEx(tanka83["tanka"]);
    var x = parseFloatEx(tanka83["tax"]);
    var a = parseFloatEx($("select#3-83_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-83_tan").text(formatComma(t));
    $("td#3-83_kin").text(formatComma(k));
    $("input#3-83_tax").val(formatComma(z));

    var t = parseFloatEx(tanka84["tanka"]);
    var x = parseFloatEx(tanka84["tax"]);
    var a = parseFloatEx($("td#3-84_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-84_tan").text(formatComma(t));
    $("td#3-84_kin").text(formatComma(k));
    $("input#3-84_tax").val(formatComma(z));

    var t = parseFloatEx(tanka85["tanka"]);
    var x = parseFloatEx(tanka85["tax"]);
    var a = parseFloatEx($("select#3-85_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-85_tan").text(formatComma(t));
    $("td#3-85_kin").text(formatComma(k));
    $("input#3-85_tax").val(formatComma(z));

    var t = parseFloatEx(tanka86["tanka"]);
    var x = parseFloatEx(tanka86["tax"]);
    var a = parseFloatEx($("select#3-86_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-86_tan").text(formatComma(t));
    $("td#3-86_kin").text(formatComma(k));
    $("input#3-86_tax").val(formatComma(z));

    var t = parseFloatEx(tanka81["tanka"]);
    var x = parseFloatEx(tanka81["tax"]);
    var a = parseFloatEx($("select#4-81_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-81_tan").text(formatComma(t));
    $("td#4-81_kin").text(formatComma(k));
    $("input#4-81_tax").val(formatComma(z));

    var t = parseFloatEx(tanka82["tanka"]);
    var x = parseFloatEx(tanka82["tax"]);
    var a = parseFloatEx($("select#4-82_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-82_tan").text(formatComma(t));
    $("td#4-82_kin").text(formatComma(k));
    $("input#4-82_tax").val(formatComma(z));

    var t = parseFloatEx(tanka83["tanka"]);
    var x = parseFloatEx(tanka83["tax"]);
    var a = parseFloatEx($("select#4-83_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-83_tan").text(formatComma(t));
    $("td#4-83_kin").text(formatComma(k));
    $("input#4-83_tax").val(formatComma(z));

    var t = parseFloatEx(tanka84["tanka"]);
    var x = parseFloatEx(tanka84["tax"]);
    var a = parseFloatEx($("td#4-84_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-84_tan").text(formatComma(t));
    $("td#4-84_kin").text(formatComma(k));
    $("input#4-84_tax").val(formatComma(z));

    var t = parseFloatEx(tanka85["tanka"]);
    var x = parseFloatEx(tanka85["tax"]);
    var a = parseFloatEx($("select#4-85_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-85_tan").text(formatComma(t));
    $("td#4-85_kin").text(formatComma(k));
    $("input#4-85_tax").val(formatComma(z));

    var t = parseFloatEx(tanka86["tanka"]);
    var x = parseFloatEx(tanka86["tax"]);
    var a = parseFloatEx($("select#4-86_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-86_tan").text(formatComma(t));
    $("td#4-86_kin").text(formatComma(k));
    $("input#4-86_tax").val(formatComma(z));

    var t = parseFloatEx(tanka88["tanka"]);
    var x = parseFloatEx(tanka88["tax"]);
    var a = parseFloatEx($("select#4-88_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-88_tan").text(formatComma(t));
    $("td#4-88_kin").text(formatComma(k));
    $("input#4-88_tax").val(formatComma(z));

    wm.submitItems[10] = submitItem13;

    $("div#step11").load("/mitsumori/step_14.html", wizard11a);
  }

  // パッド
  function wizard10b(){
    // STEPボタンクリック
    $("li#step10").click(function() {
      wm.step = 10;
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

    // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL17_1"] == "1") {
      $("input#1-COL17_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL17_1"] == "2") {
      $("input#2-COL17_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_2"] == "1") {
      $("input#2-COL17_2").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(113);
      if(seihin != undefined) { $("select#2-113_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_3"] == "1") {
      $("input#2-COL17_3").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(115);
      if(seihin != undefined) { $("select#2-115_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_4"] == "1") {
      $("input#2-COL17_4").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(108);
      if(seihin != undefined) { $("select#2-108_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_5"] == "1") {
      $("input#2-COL17_5").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(109);
      if(seihin != undefined) { $("select#2-109_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_6"] == "1") {
      $("input#2-COL17_6").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(110);
      if(seihin != undefined) { $("select#2-110_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_7"] == "1") {
      $("input#2-COL17_7").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(111);
      if(seihin != undefined) { $("select#2-111_su").val(seihin["suryo"]); }
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
      // コンボボックス
      var seihin = getProduct(118);
      if(seihin != undefined) { $("select#2-118_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_13"] == "1") {
      $("input#2-COL17_13").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(119);
      if(seihin != undefined) { $("select#2-119_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_14"] == "1") {
      $("input#2-COL17_14").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(120);
      if(seihin != undefined) { $("select#2-120_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_15"] == "1") {
      $("input#2-COL17_15").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(121);
      if(seihin != undefined) { $("select#2-121_su").val(seihin["suryo"]); }
    }

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

    wm.submitItems[10] = submitItem17;

    $("div#step11").load("/mitsumori/step_18.html", wizard11b);
  }

  // OP車椅子フレーム
  function wizard10d(){
    // STEPボタンクリック
    $("li#step10").click(function() {
      wm.step = 10;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });

    $("select#7-136_su").change(function() {
      var m_tanka = getSeihinInfo("136");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#7-136_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#7-136_kin").text(formatComma(kingaku));
      $("input#7-136_tax").val(formatComma(zeigaku));
      return false;
    });

    $("button.jqwizard_next").removeAttr("disabled");

    var tanka130 = getSeihinInfo("130");
    var tanka131 = getSeihinInfo("131");
    var tanka132 = getSeihinInfo("132");
    var tanka133 = getSeihinInfo("133");
    var tanka134 = getSeihinInfo("134");
    var tanka135 = getSeihinInfo("135");
    var tanka136 = getSeihinInfo("136");
    var tanka137 = getSeihinInfo("137");
    var tanka138 = getSeihinInfo("138");
    var tanka139 = getSeihinInfo("139");
    var tanka140 = getSeihinInfo("140");
    var tanka141 = getSeihinInfo("141");
    var tanka142 = getSeihinInfo("142");
    var tanka143 = getSeihinInfo("143");
    var tanka144 = getSeihinInfo("144");
    var tanka145 = getSeihinInfo("145");
    var tanka146 = getSeihinInfo("146");
    var tanka147 = getSeihinInfo("147");
    var tanka148 = getSeihinInfo("148");
    // 単価をセット
    var t = parseFloatEx(tanka130["tanka"]);
    var x = parseFloatEx(tanka130["tax"]);
    var a = parseFloatEx($("td#1-130_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-130_tan").text(formatComma(t));
    $("td#1-130_kin").text(formatComma(k));
    $("td#1-130_tax_v").text((x * 100) + "%");
    $("input#1-130_tax").val(formatComma(z));

    var t = parseFloatEx(tanka131["tanka"]);
    var x = parseFloatEx(tanka131["tax"]);
    var a = parseFloatEx($("td#2-131_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-131_tan").text(formatComma(t));
    $("td#2-131_kin").text(formatComma(k));
    $("td#2-131_tax_v").text((x * 100) + "%");
    $("input#2-131_tax").val(formatComma(z));

    var t = parseFloatEx(tanka132["tanka"]);
    var x = parseFloatEx(tanka132["tax"]);
    var a = parseFloatEx($("td#3-132_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-132_tan").text(formatComma(t));
    $("td#3-132_kin").text(formatComma(k));
    $("td#3-132_tax_v").text((x * 100) + "%");
    $("input#3-132_tax").val(formatComma(z));

    var t = parseFloatEx(tanka133["tanka"]);
    var x = parseFloatEx(tanka133["tax"]);
    var a = parseFloatEx($("td#4-133_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-133_tan").text(formatComma(t));
    $("td#4-133_kin").text(formatComma(k));
    $("td#4-133_tax_v").text((x * 100) + "%");
    $("input#4-133_tax").val(formatComma(z));

    var t = parseFloatEx(tanka134["tanka"]);
    var x = parseFloatEx(tanka134["tax"]);
    var a = parseFloatEx($("td#5-134_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-134_tan").text(formatComma(t));
    $("td#5-134_kin").text(formatComma(k));
    $("td#5-134_tax_v").text((x * 100) + "%");
    $("input#5-134_tax").val(formatComma(z));

    var t = parseFloatEx(tanka135["tanka"]);
    var x = parseFloatEx(tanka135["tax"]);
    var a = parseFloatEx($("td#6-135_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#6-135_tan").text(formatComma(t));
    $("td#6-135_kin").text(formatComma(k));
    $("td#6-135_tax_v").text((x * 100) + "%");
    $("input#6-135_tax").val(formatComma(z));

    var t = parseFloatEx(tanka136["tanka"]);
    var x = parseFloatEx(tanka136["tax"]);
    var a = parseFloatEx($("select#7-136_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#7-136_tan").text(formatComma(t));
    $("td#7-136_kin").text(formatComma(k));
    $("td#7-136_tax_v").text((x * 100) + "%");
    $("input#7-136_tax").val(formatComma(z));

    var t = parseFloatEx(tanka137["tanka"]);
    var x = parseFloatEx(tanka137["tax"]);
    var a = parseFloatEx($("td#8-137_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#8-137_tan").text(formatComma(t));
    $("td#8-137_kin").text(formatComma(k));
    $("td#8-137_tax_v").text((x * 100) + "%");
    $("input#8-137_tax").val(formatComma(z));

    var t = parseFloatEx(tanka138["tanka"]);
    var x = parseFloatEx(tanka138["tax"]);
    var a = parseFloatEx($("td#9-138_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#9-138_tan").text(formatComma(t));
    $("td#9-138_kin").text(formatComma(k));
    $("td#9-138_tax_v").text((x * 100) + "%");
    $("input#9-138_tax").val(formatComma(z));

    var t = parseFloatEx(tanka139["tanka"]);
    var x = parseFloatEx(tanka139["tax"]);
    var a = parseFloatEx($("td#10-139_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#10-139_tan").text(formatComma(t));
    $("td#10-139_kin").text(formatComma(k));
    $("td#10-139_tax_v").text((x * 100) + "%");
    $("input#10-139_tax").val(formatComma(z));

    var t = parseFloatEx(tanka140["tanka"]);
    var x = parseFloatEx(tanka140["tax"]);
    var a = parseFloatEx($("td#11-140_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#11-140_tan").text(formatComma(t));
    $("td#11-140_kin").text(formatComma(k));
    $("td#11-140_tax_v").text((x * 100) + "%");
    $("input#11-140_tax").val(formatComma(z));

    var t = parseFloatEx(tanka141["tanka"]);
    var x = parseFloatEx(tanka141["tax"]);
    var a = parseFloatEx($("td#12-141_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#12-141_tan").text(formatComma(t));
    $("td#12-141_kin").text(formatComma(k));
    $("td#12-141_tax_v").text((x * 100) + "%");
    $("input#12-141_tax").val(formatComma(z));

    var t = parseFloatEx(tanka142["tanka"]);
    var x = parseFloatEx(tanka142["tax"]);
    var a = parseFloatEx($("td#13-142_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#13-142_tan").text(formatComma(t));
    $("td#13-142_kin").text(formatComma(k));
    $("td#13-142_tax_v").text((x * 100) + "%");
    $("input#13-142_tax").val(formatComma(z));

    var t = parseFloatEx(tanka143["tanka"]);
    var x = parseFloatEx(tanka143["tax"]);
    var a = parseFloatEx($("td#14-143_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#14-143_tan").text(formatComma(t));
    $("td#14-143_kin").text(formatComma(k));
    $("td#14-143_tax_v").text((x * 100) + "%");
    $("input#14-143_tax").val(formatComma(z));

    var t = parseFloatEx(tanka144["tanka"]);
    var x = parseFloatEx(tanka144["tax"]);
    var a = parseFloatEx($("td#15-144_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#15-144_tan").text(formatComma(t));
    $("td#15-144_kin").text(formatComma(k));
    $("td#15-144_tax_v").text((x * 100) + "%");
    $("input#15-144_tax").val(formatComma(z));

    var t = parseFloatEx(tanka145["tanka"]);
    var x = parseFloatEx(tanka145["tax"]);
    var a = parseFloatEx($("td#16-145_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#16-145_tan").text(formatComma(t));
    $("td#16-145_kin").text(formatComma(k));
    $("td#16-145_tax_v").text((x * 100) + "%");
    $("input#16-145_tax").val(formatComma(z));

    var t = parseFloatEx(tanka146["tanka"]);
    var x = parseFloatEx(tanka146["tax"]);
    var a = parseFloatEx($("td#17-146_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#17-146_tan").text(formatComma(t));
    $("td#17-146_kin").text(formatComma(k));
    $("td#17-146_tax_v").text((x * 100) + "%");
    $("input#17-146_tax").val(formatComma(z));

    var t = parseFloatEx(tanka147["tanka"]);
    var x = parseFloatEx(tanka147["tax"]);
    var a = parseFloatEx($("td#18-147_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#18-147_tan").text(formatComma(t));
    $("td#18-147_kin").text(formatComma(k));
    $("td#18-147_tax_v").text((x * 100) + "%");
    $("input#18-147_tax").val(formatComma(z));

    var t = parseFloatEx(tanka148["tanka"]);
    var x = parseFloatEx(tanka148["tax"]);
    var a = parseFloatEx($("td#19-148_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#19-148_tan").text(formatComma(t));
    $("td#19-148_kin").text(formatComma(k));
    $("td#19-148_tax_v").text((x * 100) + "%");
    $("input#19-148_tax").val(formatComma(z));

    wm.submitItems[10] = submitItem19;

        // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL19_1"] == "1") {
      $("input#1-COL19_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_2"] == "1") {
      $("input#2-COL19_2").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_3"] == "1") {
      $("input#3-COL19_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_4"] == "1") {
      $("input#4-COL19_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_5"] == "1") {
      $("input#5-COL19_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_6"] == "1") {
      $("input#6-COL19_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_7"] == "1") {
      $("input#7-COL19_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_8"] == "1") {
      $("input#8-COL19_8").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_9"] == "1") {
      $("input#9-COL19_9").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_10"] == "1") {
      $("input#10-COL19_10").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_11"] == "1") {
      $("input#11-COL19_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_12"] == "1") {
      $("input#12-COL19_12").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_13"] == "1") {
      $("input#13-COL19_13").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_14"] == "1") {
      $("input#14-COL19_14").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_15"] == "1") {
      $("input#15-COL19_15").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_16"] == "1") {
      $("input#16-COL19_16").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_17"] == "1") {
      $("input#17-COL19_17").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_18"] == "1") {
      $("input#18-COL19_18").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_19"] == "1") {
      $("input#19-COL19_19").attr("checked", true);
    }
  }

  // アームパッド
  function wizard10e(){
    // STEPボタンクリック
    $("li#step10").click(function() {
      wm.step = 10;
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
    var tanka80 = getSeihinInfo("80");
    // 単価をセット
    var t = parseFloatEx(tanka80["tanka"]);
    var x = parseFloatEx(tanka80["tax"]);
    var a = parseFloatEx($("td#3-80_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-80_tan").text(formatComma(t));
    $("td#3-80_kin").text(formatComma(k));
    $("input#3-80_tax").val(formatComma(z));

    wm.submitItems[10] = submitItem12;

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
    $("div#step11").load("/mitsumori/step_11.html", wizard11e);
  }