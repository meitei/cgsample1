  // シート（座面）
  function wizard4a(){
    // STEPボタンクリック
    $("li#step4").click(function() {
      if ($("li#step4").hasClass('jqwizard_done') || $("li#step4").hasClass('jqwizard_lastdone')) {
        wm.step = 4;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show();
        if(wm.step < wm.lastStep) {
            $("#btnEstimateRegist").hide();
        }
    }
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

    wm.submitItems[4] = submitItem8;
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
    $("div#step5").load("/mitsumori/step_07.html", wizard5a);
  }

  // シート（座面）
  function wizard4b(){
    // STEPボタンクリック
    $("li#step4").click(function() {
        if ($("li#step4").hasClass('jqwizard_done') || $("li#step4").hasClass('jqwizard_lastdone')) {
            wm.step = 4;
            $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
            $("button#jqwizard_previous").show();
            $("button#jqwizard_next").show(); 
        }
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

    wm.submitItems[4] = submitItem8;
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
    $("div#step5").load("/mitsumori/step_09.html", wizard5b);
  }

  // バックサポート
  function wizard4c(){
    // STEPボタンクリック
    $("li#step4").click(function() {
        if ($("li#step4").hasClass('jqwizard_done') || $("li#step4").hasClass('jqwizard_lastdone')) {
            wm.step = 4;
            $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
            $("button#jqwizard_previous").show();
            $("button#jqwizard_next").show(); 
        }
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

    wm.submitItems[4] = submitItem17;

    $("div#step5").load("/mitsumori/step_21.html", wizard5c);
  }

  // シート（座面）
  function wizard4d(){
    // STEPボタンクリック
    $("li#step4").click(function() {
        if ($("li#step4").hasClass('jqwizard_done') || $("li#step4").hasClass('jqwizard_lastdone')) {
            wm.step = 4;
            $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
            $("button#jqwizard_previous").show();
            $("button#jqwizard_next").show(); 
        }
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
    
    wm.submitItems[4] = submitItem8;
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
    $("div#step5").load("/mitsumori/step_09.html", wizard5d);
  }

  // 使用場所・車輪
  function wizard4e(){
    // STEPボタンクリック
    $("li#step4").click(function() {
        if ($("li#step4").hasClass('jqwizard_done') || $("li#step4").hasClass('jqwizard_lastdone')) {
            wm.step = 4;
            $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
            $("button#jqwizard_previous").show();
            $("button#jqwizard_next").show(); 
        }
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
    // 屋内外用（家庭、保育所用）
    if(col1Value == "5"){
      $("input#5-COL4_1").attr("checked", true);
    }
    $("div#step5").load("/mitsumori/step_06.html", wizard5e);
  }