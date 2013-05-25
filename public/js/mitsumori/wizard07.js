  // アームサポート
  function wizard7a(){
    // STEPボタンクリック
    $("li#step7").click(function() {
        if ($("li#step7").hasClass('jqwizard_current')) {
            wm.step = 7;
            $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
            $("button#jqwizard_previous").show();
            $("button#jqwizard_next").show();
            if(wm.step < wm.lastStep) {
                $("#btnEstimateRegist").hide();
            }
        }
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

    wm.submitItems[7] = submitItem10;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL10_1"];
    var col2Value = wm.mitsumoriData["COL10_2"];
    var col3Value = wm.mitsumoriData["COL10_3"];
    var col4Value = wm.mitsumoriData["COL10_4"];
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
        $("input#2-COL10_4").val(col4Value);
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
        $("input#3-COL10_4").val(col4Value);
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
        $("input#4-COL10_4").val(col4Value);
      }
    }
    $("div#step8").load("/mitsumori/step_12.html", wizard8a);
  }

  // 上肢支持部
  function wizard7b(){
    // STEPボタンクリック
    $("li#step7").click(function() {
        if ($("li#step7").hasClass('jqwizard_current')) {
            wm.step = 7;
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
        if ($("li#step7").hasClass('jqwizard_current')) {
            wm.step = 7;
            $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
            $("button#jqwizard_previous").show();
            $("button#jqwizard_next").show(); 
        }
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
    var tanka94 = getSeihinInfo("94");
    var tanka95 = getSeihinInfo("95");
    var tanka96 = getSeihinInfo("96");
    // 単価をセット
    var t = parseFloatEx(tanka94["tanka"]);
    var x = parseFloatEx(tanka94["tax"]);
    var a = parseFloatEx($("td#2-94_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-94_tan").text(formatComma(t));
    $("td#2-94_kin").text(formatComma(k));
    $("input#2-94_tax").val(formatComma(z));

    var t = parseFloatEx(tanka94["tanka"]);
    var x = parseFloatEx(tanka94["tax"]);
    var a = parseFloatEx($("td#3-94_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-94_tan").text(formatComma(t));
    $("td#3-94_kin").text(formatComma(k));
    $("input#3-94_tax").val(formatComma(z));

    var t = parseFloatEx(tanka95["tanka"]);
    var x = parseFloatEx(tanka95["tax"]);
    var a = parseFloatEx($("td#3-95_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-95_tan").text(formatComma(t));
    $("td#3-95_kin").text(formatComma(k));
    $("input#3-95_tax").val(formatComma(z));

    var t = parseFloatEx(tanka94["tanka"]);
    var x = parseFloatEx(tanka94["tax"]);
    var a = parseFloatEx($("td#4-94_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-94_tan").text(formatComma(t));
    $("td#4-94_kin").text(formatComma(k));
    $("input#4-94_tax").val(formatComma(z));

    var t = parseFloatEx(tanka95["tanka"]);
    var x = parseFloatEx(tanka95["tax"]);
    var a = parseFloatEx($("td#4-95_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-95_tan").text(formatComma(t));
    $("td#4-95_kin").text(formatComma(k));
    $("input#4-95_tax").val(formatComma(z));

    var t = parseFloatEx(tanka96["tanka"]);
    var x = parseFloatEx(tanka96["tax"]);
    var a = parseFloatEx($("td#4-96_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-96_tan").text(formatComma(t));
    $("td#4-96_kin").text(formatComma(k));
    $("input#4-96_tax").val(formatComma(z));
    
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
        if ($("li#step7").hasClass('jqwizard_current')) {
            wm.step = 7;
            $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
            $("button#jqwizard_previous").show();
            $("button#jqwizard_next").show(); 
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
    
    wm.submitItems[7] = submitItem7;
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
    $("div#step8").load("/mitsumori/step_09.html", wizard8e);
  }