  // ヘッドサポート
  function wizard6a(){
    // STEPボタンクリック
    $("li#step6").click(function() {
      wm.step = 6;
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
    $("input#4-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step6");
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
    // 単価を書き換え
    updateUnitPrice("step6");
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
    // 単価を書き換え
    updateUnitPrice("step6");
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
    $("div#step7").load("/mitsumori/step_07.html", wizard7e);
  }