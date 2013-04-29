  // シート（座面）
  function wizard4a(){
    // STEPボタンクリック
    $("li#step4").click(function() {
      wm.step = 4;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step4");
    wm.submitItems[4] = submitItem8;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL8_1"];
    var col2Value = wm.mitsumoriData["COL8_2"];
    //$("input[name='COL1_1']").val(col1Value);
    // 平面形状型
    if(col1Value == "1"){
      $("input#1-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#1-COL8_2").attr("checked", true);
      }
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL8_2").attr("checked", true);
      }
    }
    // モールド（採寸）
    if(col1Value == "3"){
      $("input#3-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL8_2").attr("checked", true);
      }
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#4-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL8_2").attr("checked", true);
      }
    }
    $("div#step5").load("/mitsumori/step_07.html", wizard5a);
  }

  // シート（座面）
  function wizard4b(){
    // STEPボタンクリック
    $("li#step4").click(function() {
      wm.step = 4;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step4");
    wm.submitItems[4] = submitItem8;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL8_1"];
    var col2Value = wm.mitsumoriData["COL8_2"];
    //$("input[name='COL1_1']").val(col1Value);
    // 平面形状型
    if(col1Value == "1"){
      $("input#1-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#1-COL8_2").attr("checked", true);
      }
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL8_2").attr("checked", true);
      }
    }
    // モールド（採寸）
    if(col1Value == "3"){
      $("input#3-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL8_2").attr("checked", true);
      }
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#4-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL8_2").attr("checked", true);
      }
    }
    $("div#step5").load("/mitsumori/step_09.html", wizard5b);
  }

  // バックサポート
  function wizard4c(){
    // STEPボタンクリック
    $("li#step4").click(function() {
      wm.step = 4;
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
    // 単価を書き換え
    updateUnitPrice("step4");
    wm.submitItems[4] = submitItem17;

    if (wm.mitsumoriData["COL17_1"] == "1") {
      $("input#1-COL17_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL17_1"] == "2") {
      $("input#2-COL17_1").attr("checked", true);
    }
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
    $("div#step5").load("/mitsumori/step_21.html", wizard5c);
  }

  // シート（座面）
  function wizard4d(){
    // STEPボタンクリック
    $("li#step4").click(function() {
      wm.step = 4;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step4");
    wm.submitItems[4] = submitItem8;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL8_1"];
    var col2Value = wm.mitsumoriData["COL8_2"];
    //$("input[name='COL1_1']").val(col1Value);
    // 平面形状型
    if(col1Value == "1"){
      $("input#1-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#1-COL8_2").attr("checked", true);
      }
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL8_2").attr("checked", true);
      }
    }
    // モールド（採寸）
    if(col1Value == "3"){
      $("input#3-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL8_2").attr("checked", true);
      }
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#4-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL8_2").attr("checked", true);
      }
    }
    $("div#step5").load("/mitsumori/step_09.html", wizard5d);
  }

  // 使用場所・車輪
  function wizard4e(){
    // STEPボタンクリック
    $("li#step4").click(function() {
      wm.step = 4;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL4_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL4_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL4_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL4_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#5-COL4_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    var tanka5 = getSeihinInfo("5");
    var tanka6 = getSeihinInfo("6");
    var tanka7 = getSeihinInfo("7");
    var tanka8 = getSeihinInfo("8");
    var tanka9 = getSeihinInfo("9");
    var tanka10 = getSeihinInfo("10");
    var tanka11 = getSeihinInfo("11");
    var tanka12 = getSeihinInfo("12");
    // 単価をセット
    var t = parseFloatEx(tanka5["tanka"]);
    var x = parseFloatEx(tanka5["tax"]);
    var a = parseFloatEx($("td#2-5_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-5_tan").text(formatComma(t));
    $("td#2-5_kin").text(formatComma(k));
    $("input#2-5_tax").val(formatComma(z));

    var t = parseFloatEx(tanka6["tanka"]);
    var x = parseFloatEx(tanka6["tax"]);
    var a = parseFloatEx($("td#2-6_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-6_tan").text(formatComma(t));
    $("td#2-6_kin").text(formatComma(k));
    $("input#2-6_tax").val(formatComma(z));

    var t = parseFloatEx(tanka5["tanka"]);
    var x = parseFloatEx(tanka5["tax"]);
    var a = parseFloatEx($("td#3-5_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-5_tan").text(formatComma(t));
    $("td#3-5_kin").text(formatComma(k));
    $("input#3-5_tax").val(formatComma(z));

    var t = parseFloatEx(tanka6["tanka"]);
    var x = parseFloatEx(tanka6["tax"]);
    var a = parseFloatEx($("td#3-6_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-6_tan").text(formatComma(t));
    $("td#3-6_kin").text(formatComma(k));
    $("input#3-6_tax").val(formatComma(z));

    var t = parseFloatEx(tanka7["tanka"]);
    var x = parseFloatEx(tanka7["tax"]);
    var a = parseFloatEx($("td#4-7_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-7_tan").text(formatComma(t));
    $("td#4-7_kin").text(formatComma(k));
    $("input#4-7_tax").val(formatComma(z));

    var t = parseFloatEx(tanka8["tanka"]);
    var x = parseFloatEx(tanka8["tax"]);
    var a = parseFloatEx($("td#4-8_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-8_tan").text(formatComma(t));
    $("td#4-8_kin").text(formatComma(k));
    $("input#4-8_tax").val(formatComma(z));

    var t = parseFloatEx(tanka9["tanka"]);
    var x = parseFloatEx(tanka9["tax"]);
    var a = parseFloatEx($("td#4-9_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-9_tan").text(formatComma(t));
    $("td#4-9_kin").text(formatComma(k));
    $("input#4-9_tax").val(formatComma(z));

    var t = parseFloatEx(tanka10["tanka"]);
    var x = parseFloatEx(tanka10["tax"]);
    var a = parseFloatEx($("td#4-10_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-10_tan").text(formatComma(t));
    $("td#4-10_kin").text(formatComma(k));
    $("input#4-10_tax").val(formatComma(z));

    var t = parseFloatEx(tanka11["tanka"]);
    var x = parseFloatEx(tanka11["tax"]);
    var a = parseFloatEx($("td#4-11_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-11_tan").text(formatComma(t));
    $("td#4-11_kin").text(formatComma(k));
    $("input#4-11_tax").val(formatComma(z));

    var t = parseFloatEx(tanka12["tanka"]);
    var x = parseFloatEx(tanka12["tax"]);
    var a = parseFloatEx($("td#4-12_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-12_tan").text(formatComma(t));
    $("td#4-12_kin").text(formatComma(k));
    $("input#4-12_tax").val(formatComma(z));

    var t = parseFloatEx(tanka10["tanka"]);
    var x = parseFloatEx(tanka10["tax"]);
    var a = parseFloatEx($("td#5-10_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-10_tan").text(formatComma(t));
    $("td#5-10_kin").text(formatComma(k));
    $("input#5-10_tax").val(formatComma(z));

    var t = parseFloatEx(tanka11["tanka"]);
    var x = parseFloatEx(tanka11["tax"]);
    var a = parseFloatEx($("td#5-12_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-12_tan").text(formatComma(t));
    $("td#5-12_kin").text(formatComma(k));
    $("input#5-12_tax").val(formatComma(z));

    wm.submitItems[4] = submitItem4;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL4_1"];
    var col2Value = wm.mitsumoriData["COL8_2"];
    //$("input[name='COL1_1']").val(col1Value);
    // 屋内キャスターなし
    if(col1Value == "1"){
      $("input#1-COL4_1").attr("checked", true);
    }
    // 屋内（家庭用）
    if(col1Value == "2"){
      $("input#2-COL4_1").attr("checked", true);
    }
    // 屋内（家庭用）
    if(col1Value == "3"){
      $("input#3-COL4_1").attr("checked", true);
    }
    // 屋外（施設用、学校用）
    if(col1Value == "4"){
      $("input#4-COL4_1").attr("checked", true);
    }
    // 屋内外用（家庭、保育所用）
    if(col1Value == "4"){
      $("input#4-COL4_1").attr("checked", true);
    }
    $("div#step5").load("/mitsumori/step_06.html", wizard5e);
  }