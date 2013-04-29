  // アームサポート
  function wizard7a(){
    // STEPボタンクリック
    $("li#step7").click(function() {
      wm.step = 7;
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
    // 単価を書き換え
    updateUnitPrice("step7");
    wm.submitItems[7] = submitItem10;
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
    $("div#step8").load("/mitsumori/step_12.html", wizard8a);
  }

  // 上肢支持部
  function wizard7b(){
    // STEPボタンクリック
    $("li#step7").click(function() {
      wm.step = 7;
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
    updateUnitPrice("step7");
    wm.submitItems[7] = submitItem14;
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
    $("div#step8").load("/mitsumori/step_15.html", wizard8b);
  }

  // テーブル
  function wizard7d(){
    // STEPボタンクリック
    $("li#step7").click(function() {
      wm.step = 7;
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
    updateUnitPrice("step7");
    wm.submitItems[7] = submitItem15;
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
    $("div#step8").load("/mitsumori/step_16.html", wizard8d);
  }

  // バックサポート
  function wizard7e(){
    // STEPボタンクリック
    $("li#step7").click(function() {
      wm.step = 7;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
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
    
    wm.submitItems[7] = submitItem7;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL7_1"];
    var col2Value = wm.mitsumoriData["COL7_2"];
    //$("input[name='COL1_1']").val(col1Value);
    // 平面形状型
    if(col1Value == "1"){
      $("input#1-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#1-COL7_2").attr("checked", true);
      }
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#2-COL7_2").attr("checked", true);
      }
    }
    // モールド（採寸）
    if(col1Value == "3"){
      $("input#3-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#3-COL7_2").attr("checked", true);
      }
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#4-COL7_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#4-COL7_2").attr("checked", true);
      }
    }
    $("div#step8").load("/mitsumori/step_09.html", wizard8e);
  }