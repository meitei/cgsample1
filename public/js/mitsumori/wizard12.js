  // テーブル
  function wizard12a(){
    // STEPボタンクリック
    $("li#step12").click(function() {
      wm.step = 12;
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
    updateUnitPrice("step12");
    wm.submitItems[12] = submitItem15;

    if (wm.mitsumoriData["COL15_1"] == "1"){
      $("input#1-COL15_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL15_1"] == "2"){
      $("input#2-COL15_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL15_1"] == "3"){
      $("input#3-COL15_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL15_1"] == "4"){
      $("input#4-COL15_1").attr("checked", true);
    }
    $("div#step13").load("/mitsumori/step_16.html", wizard13a);

  }

  // フットサポート
  function wizard12e(){
    // STEPボタンクリック
    $("li#step12").click(function() {
      wm.step = 12;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
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
      var amount = parseFloatEx($("select#3-81_su").val());
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
      var amount = parseFloatEx($("select#3-83_su").val());
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
      var amount = parseFloatEx($("select#3-85_su").val());
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
      var amount = parseFloatEx($("select#3-86_su").val());
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

    wm.submitItems[12] = submitItem13;

    if (wm.mitsumoriData["COL13_1"] == "1") {

      $("input#1-COL13_1").attr("checked", true);

    } else if (wm.mitsumoriData["COL13_1"] == "2"){

      $("input#2-COL13_1").attr("checked", true);

      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#2-COL13_2").attr("checked", true);
      }

      $("input#2-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#2-COL13_5").val(wm.mitsumoriData["COL13_5"]);

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
    }
    $("div#step13").load("/mitsumori/step_14.html", wizard13e);
  }