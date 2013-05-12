  // ヘッドサポート
  function wizard6a(){
    // STEPボタンクリック
    $("li#step6").click(function() {
      wm.step = 6;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show();
      if(wm.step < wm.lastStep) {
        $("#btnEstimateRegist").hide();
      }
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
    $("input#4-COL9_1").click(function(){
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

    wm.submitItems[6] = submitItem9;
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
    $("div#step7").load("/mitsumori/step_10.html", wizard7a);
  }

  // アームパッド
  function wizard6b(){
    // STEPボタンクリック
    $("li#step6").click(function() {
      wm.step = 6;
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

    wm.submitItems[6] = submitItem12;
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
    $("div#step7").load("/mitsumori/step_14.html", wizard7b);
  }

  // 上肢支持部
  function wizard6d(){
    // STEPボタンクリック
    $("li#step6").click(function() {
      wm.step = 6;
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
    
    wm.submitItems[6] = submitItem14;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL14_1"];
    var col2Value = wm.mitsumoriData["COL14_2"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL14_1").attr("checked", true);
    }
    // 車椅子
    if(col1Value == "2"){
      $("input#2-COL14_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL14_2").attr("checked", true);
      }
    }
    // 横渡し
    if(col1Value == "3"){
      $("input#3-COL14_1").attr("checked", true);
    }
    $("div#step7").load("/mitsumori/step_15.html", wizard7d);
  }

  // シート座面
  function wizard6e(){
    // STEPボタンクリック
    $("li#step6").click(function() {
      wm.step = 6;
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
    var tanka43 = getSeihinInfo("43");
    var tanka44 = getSeihinInfo("44");
    var tanka45 = getSeihinInfo("45");
    var tanka46 = getSeihinInfo("46");
    var tanka47 = getSeihinInfo("47");
    var tanka48 = getSeihinInfo("48");
    var tanka49 = getSeihinInfo("49");
    var tanka50 = getSeihinInfo("50");
    var tanka51 = getSeihinInfo("51");
    var tanka52 = getSeihinInfo("52");
    var tanka53 = getSeihinInfo("53");
    var tanka54 = getSeihinInfo("54");
    // 単価をセット
    var t = parseFloatEx(tanka43["tanka"]);
    var x = parseFloatEx(tanka43["tax"]);
    var a = parseFloatEx($("td#1-43_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-43_tan").text(formatComma(t));
    $("td#1-43_kin").text(formatComma(k));
    $("input#1-43_tax").val(formatComma(z));

    var t = parseFloatEx(tanka44["tanka"]);
    var x = parseFloatEx(tanka44["tax"]);
    var a = parseFloatEx($("td#1-44_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-44_tan").text(formatComma(t));
    $("td#1-44_kin").text(formatComma(k));
    $("input#1-44_tax").val(formatComma(z));

    var t = parseFloatEx(tanka45["tanka"]);
    var x = parseFloatEx(tanka45["tax"]);
    var a = parseFloatEx($("td#1-45_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-45_tan").text(formatComma(t));
    $("td#1-45_kin").text(formatComma(k));
    $("input#1-45_tax").val(formatComma(z));

    var t = parseFloatEx(tanka46["tanka"]);
    var x = parseFloatEx(tanka46["tax"]);
    var a = parseFloatEx($("td#1-46_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-46_tan").text(formatComma(t));
    $("td#1-46_kin").text(formatComma(k));
    $("input#1-46_tax").val(formatComma(z));

    var t = parseFloatEx(tanka47["tanka"]);
    var x = parseFloatEx(tanka47["tax"]);
    var a = parseFloatEx($("td#1-47_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-47_tan").text(formatComma(t));
    $("td#1-47_kin").text(formatComma(k));
    $("input#1-47_tax").val(formatComma(z));

    var t = parseFloatEx(tanka48["tanka"]);
    var x = parseFloatEx(tanka48["tax"]);
    var a = parseFloatEx($("td#1-48_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-48_tan").text(formatComma(t));
    $("td#1-48_kin").text(formatComma(k));
    $("input#1-48_tax").val(formatComma(z));

    var t = parseFloatEx(tanka43["tanka"]);
    var x = parseFloatEx(tanka43["tax"]);
    var a = parseFloatEx($("td#2-43_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-43_tan").text(formatComma(t));
    $("td#2-43_kin").text(formatComma(k));
    $("input#2-43_tax").val(formatComma(z));

    var t = parseFloatEx(tanka49["tanka"]);
    var x = parseFloatEx(tanka49["tax"]);
    var a = parseFloatEx($("td#2-49_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-49_tan").text(formatComma(t));
    $("td#2-49_kin").text(formatComma(k));
    $("input#2-49_tax").val(formatComma(z));

    var t = parseFloatEx(tanka50["tanka"]);
    var x = parseFloatEx(tanka50["tax"]);
    var a = parseFloatEx($("td#2-50_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-50_tan").text(formatComma(t));
    $("td#2-50_kin").text(formatComma(k));
    $("input#2-50_tax").val(formatComma(z));

    var t = parseFloatEx(tanka46["tanka"]);
    var x = parseFloatEx(tanka46["tax"]);
    var a = parseFloatEx($("td#2-46_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-46_tan").text(formatComma(t));
    $("td#2-46_kin").text(formatComma(k));
    $("input#2-46_tax").val(formatComma(z));

    var t = parseFloatEx(tanka47["tanka"]);
    var x = parseFloatEx(tanka47["tax"]);
    var a = parseFloatEx($("td#2-47_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-47_tan").text(formatComma(t));
    $("td#2-47_kin").text(formatComma(k));
    $("input#2-47_tax").val(formatComma(z));

    var t = parseFloatEx(tanka48["tanka"]);
    var x = parseFloatEx(tanka48["tax"]);
    var a = parseFloatEx($("td#2-48_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-48_tan").text(formatComma(t));
    $("td#2-48_kin").text(formatComma(k));
    $("input#2-48_tax").val(formatComma(z));

    var t = parseFloatEx(tanka43["tanka"]);
    var x = parseFloatEx(tanka43["tax"]);
    var a = parseFloatEx($("td#3-43_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-43_tan").text(formatComma(t));
    $("td#3-43_kin").text(formatComma(k));
    $("input#3-43_tax").val(formatComma(z));

    var t = parseFloatEx(tanka51["tanka"]);
    var x = parseFloatEx(tanka51["tax"]);
    var a = parseFloatEx($("td#3-51_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-51_tan").text(formatComma(t));
    $("td#3-51_kin").text(formatComma(k));
    $("input#3-51_tax").val(formatComma(z));

    var t = parseFloatEx(tanka52["tanka"]);
    var x = parseFloatEx(tanka52["tax"]);
    var a = parseFloatEx($("td#3-52_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-52_tan").text(formatComma(t));
    $("td#3-52_kin").text(formatComma(k));
    $("input#3-52_tax").val(formatComma(z));

    var t = parseFloatEx(tanka46["tanka"]);
    var x = parseFloatEx(tanka46["tax"]);
    var a = parseFloatEx($("td#3-46_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-46_tan").text(formatComma(t));
    $("td#3-46_kin").text(formatComma(k));
    $("input#3-46_tax").val(formatComma(z));

    var t = parseFloatEx(tanka47["tanka"]);
    var x = parseFloatEx(tanka47["tax"]);
    var a = parseFloatEx($("td#3-47_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-47_tan").text(formatComma(t));
    $("td#3-47_kin").text(formatComma(k));
    $("input#3-47_tax").val(formatComma(z));

    var t = parseFloatEx(tanka48["tanka"]);
    var x = parseFloatEx(tanka48["tax"]);
    var a = parseFloatEx($("td#3-48_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-48_tan").text(formatComma(t));
    $("td#3-48_kin").text(formatComma(k));
    $("input#3-48_tax").val(formatComma(z));

    var t = parseFloatEx(tanka53["tanka"]);
    var x = parseFloatEx(tanka53["tax"]);
    var a = parseFloatEx($("td#4-53_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-53_tan").text(formatComma(t));
    $("td#4-53_kin").text(formatComma(k));
    $("input#4-53_tax").val(formatComma(z));

    var t = parseFloatEx(tanka54["tanka"]);
    var x = parseFloatEx(tanka54["tax"]);
    var a = parseFloatEx($("td#4-54_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-54_tan").text(formatComma(t));
    $("td#4-54_kin").text(formatComma(k));
    $("input#4-54_tax").val(formatComma(z));

    var t = parseFloatEx(tanka52["tanka"]);
    var x = parseFloatEx(tanka52["tax"]);
    var a = parseFloatEx($("td#4-52_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-52_tan").text(formatComma(t));
    $("td#4-52_kin").text(formatComma(k));
    $("input#4-52_tax").val(formatComma(z));

    var t = parseFloatEx(tanka46["tanka"]);
    var x = parseFloatEx(tanka46["tax"]);
    var a = parseFloatEx($("td#4-46_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-46_tan").text(formatComma(t));
    $("td#4-46_kin").text(formatComma(k));
    $("input#4-46_tax").val(formatComma(z));

    var t = parseFloatEx(tanka47["tanka"]);
    var x = parseFloatEx(tanka47["tax"]);
    var a = parseFloatEx($("td#4-47_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-47_tan").text(formatComma(t));
    $("td#4-47_kin").text(formatComma(k));
    $("input#4-47_tax").val(formatComma(z));

    var t = parseFloatEx(tanka48["tanka"]);
    var x = parseFloatEx(tanka48["tax"]);
    var a = parseFloatEx($("td#4-48_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-48_tan").text(formatComma(t));
    $("td#4-48_kin").text(formatComma(k));
    $("input#4-48_tax").val(formatComma(z));

    wm.submitItems[6] = submitItem8;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL8_1"];
    var col2Value = wm.mitsumoriData["COL8_2"];
    var col3Value = wm.mitsumoriData["COL8_3"];
    //$("input[name='COL1_1']").val(col1Value);
    // 平面形状型
    if(col1Value == "1"){
      $("input#1-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#1-COL8_2").attr("checked", true);
      }
      $("input#1-COL8_3").val(col3Value);
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL8_2").attr("checked", true);
      }
      $("input#2-COL8_3").val(col3Value);
    }
    // モールド（採寸）
    if(col1Value == "3"){
      $("input#3-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL8_2").attr("checked", true);
      }
      $("input#3-COL8_3").val(col3Value);
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#4-COL8_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL8_2").attr("checked", true);
      }
      $("input#4-COL8_3").val(col3Value);
    }
    $("div#step7").load("/mitsumori/step_07.html", wizard7e);
  }