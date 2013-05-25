  // バックサポート
  function wizard5a(){
    // STEPボタンクリック
    $("li#step5").click(function() {
      wm.step = 5;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show();
      if(wm.step < wm.lastStep) {
        $("#btnEstimateRegist").hide();
      }
    });
    //
    $("input#1-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL7_1").click(function(){
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

    wm.submitItems[5] = submitItem7;
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
    $("div#step6").load("/mitsumori/step_09.html", wizard6a);
  }

  // ヘッドサポート
  function wizard5b(){
    // STEPボタンクリック
    $("li#step5").click(function() {
      wm.step = 5;
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

    wm.submitItems[5] = submitItem9;
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
    $("div#step6").load("/mitsumori/step_12.html", wizard6b);
  }

  // OPAR
  function wizard5c(){
    // STEPボタンクリック
    $("li#step5").click(function() {
      wm.step = 5;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL21_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL21_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL21_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL21_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#5-COL21_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#6-COL21_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    var tanka161 = getSeihinInfo("161");
    var tanka162 = getSeihinInfo("162");
    var tanka163 = getSeihinInfo("163");
    var tanka164 = getSeihinInfo("164");
    var tanka165 = getSeihinInfo("165");
    var tanka166 = getSeihinInfo("166");
    // 単価をセット
    var t = parseFloatEx(tanka161["tanka"]);
    var x = parseFloatEx(tanka161["tax"]);
    var a = parseFloatEx($("td#1-161_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-161_tan").text(formatComma(t));
    $("td#1-161_kin").text(formatComma(k));
    $("td#1-161_tax_v").text((x * 100) + "%");
    $("input#1-161_tax").val(formatComma(z));

    var t = parseFloatEx(tanka162["tanka"]);
    var x = parseFloatEx(tanka162["tax"]);
    var a = parseFloatEx($("td#2-162_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-162_tan").text(formatComma(t));
    $("td#2-162_kin").text(formatComma(k));
    $("td#2-162_tax_v").text((x * 100) + "%");
    $("input#2-162_tax").val(formatComma(z));

    var t = parseFloatEx(tanka163["tanka"]);
    var x = parseFloatEx(tanka163["tax"]);
    var a = parseFloatEx($("td#3-163_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-163_tan").text(formatComma(t));
    $("td#3-163_kin").text(formatComma(k));
    $("td#3-163_tax_v").text((x * 100) + "%");
    $("input#3-163_tax").val(formatComma(z));

    var t = parseFloatEx(tanka164["tanka"]);
    var x = parseFloatEx(tanka164["tax"]);
    var a = parseFloatEx($("td#4-164_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-164_tan").text(formatComma(t));
    $("td#4-164_kin").text(formatComma(k));
    $("td#4-164_tax_v").text((x * 100) + "%");
    $("input#4-164_tax").val(formatComma(z));

    var t = parseFloatEx(tanka165["tanka"]);
    var x = parseFloatEx(tanka165["tax"]);
    var a = parseFloatEx($("td#5-165_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-165_tan").text(formatComma(t));
    $("td#5-165_kin").text(formatComma(k));
    $("td#5-165_tax_v").text((x * 100) + "%");
    $("input#5-165_tax").val(formatComma(z));

    var t = parseFloatEx(tanka166["tanka"]);
    var x = parseFloatEx(tanka166["tax"]);
    var a = parseFloatEx($("td#6-166_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#6-166_tan").text(formatComma(t));
    $("td#6-166_kin").text(formatComma(k));
    $("td#6-166_tax_v").text((x * 100) + "%");
    $("input#6-166_tax").val(formatComma(z));

    wm.submitItems[5] = submitItem21;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL21_1"];
    var col2Value = wm.mitsumoriData["COL21_2"];
    var col3Value = wm.mitsumoriData["COL21_3"];
    var col4Value = wm.mitsumoriData["COL21_4"];
    var col5Value = wm.mitsumoriData["COL21_5"];
    var col6Value = wm.mitsumoriData["COL21_6"];
    //$("input[name='COL1_1']").val(col1Value);
    // 平面形状型
    if(col1Value == "1"){
      $("input#1-COL21_1").attr("checked", true);
    }
    // 張り調整
    if(col2Value == "1"){
      $("input#2-COL21_2").attr("checked", true);
    }
    // モールド（採寸）
    if(col3Value == "1"){
      $("input#3-COL21_3").attr("checked", true);
    }
    // モールド型（採型）
    if(col4Value == "1"){
      $("input#4-COL21_4").attr("checked", true);
    }
    // モールド（採寸）
    if(col5Value == "1"){
      $("input#5-COL21_5").attr("checked", true);
    }
    // モールド型（採型）
    if(col6Value == "1"){
      $("input#6-COL21_6").attr("checked", true);
    }
  }

  // ヘッドサポート
  function wizard5d(){
    // STEPボタンクリック
    $("li#step5").click(function() {
      wm.step = 5;
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
    
    wm.submitItems[5] = submitItem9;
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
    $("div#step6").load("/mitsumori/step_14.html", wizard6d);
  }

  // 介助用グリップ
  function wizard5e(){
    // STEPボタンクリック
    $("li#step5").click(function() {
      wm.step = 5;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL6_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL6_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL6_1").click(function(){
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

    wm.submitItems[5] = submitItem6;
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
    $("div#step6").load("/mitsumori/step_08.html", wizard6e);
  }