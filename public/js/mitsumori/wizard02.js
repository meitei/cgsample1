  /* 構造フレーム選定 */
  function wizard2a(){
    // STEPボタンクリック
    $("li#step2").click(function() {
      wm.step = 2;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    // 屋内用
    $("input#1-COL5_1").change(function(){
      for(var i=1; i<18; i++) {
        $("li#step" + i).show();  
      }
      load2a();
      $("button.jqwizard_next").removeAttr("disabled");
      wm.lastStep = 15;
    });
    // 屋外用
    $("input#2-COL5_1").change(function(){
      for(var i=1; i<18; i++) {
        $("li#step" + i).show();  
      }
      load2b();
      $("button.jqwizard_next").removeAttr("disabled");
      wm.lastStep = 11;
    });
    // リクライニングティルト式選択
    $("input#3-COL5_1").change(function(){
      for(var i=1; i<18; i++) {
        $("li#step" + i).show();  
      }
      load2c();
      $("button.jqwizard_next").removeAttr("disabled");
      wm.lastStep = 5;
    });
    // 車椅選択
    $("input#4-COL5_1").change(function(){
      for(var i=1; i<18; i++) {
        $("li#step" + i).show();  
      }
      load2d();
      $("button.jqwizard_next").removeAttr("disabled");
      wm.lastStep = 10;
    });
    var tanka13 = getSeihinInfo("13");
    var tanka14 = getSeihinInfo("14");
    var tanka15 = getSeihinInfo("15");
    var tanka16 = getSeihinInfo("16");
    var tanka17 = getSeihinInfo("17");
    var tanka18 = getSeihinInfo("18");
    var tanka19 = getSeihinInfo("19");
    var tanka20 = getSeihinInfo("20");
    var tanka21 = getSeihinInfo("21");
    var tanka22 = getSeihinInfo("22");
    var tanka23 = getSeihinInfo("23");
    var tanka24 = getSeihinInfo("24");
    var tanka25 = getSeihinInfo("25");
    var tanka26 = getSeihinInfo("26");
    var tanka27 = getSeihinInfo("27");
    var tanka28 = getSeihinInfo("28");
    var tanka29 = getSeihinInfo("29");
    var tanka30 = getSeihinInfo("30");
    // 単価をセット
    var t = parseFloatEx(tanka13["tanka"]);
    var x = parseFloatEx(tanka13["tax"]);
    var a = parseFloatEx($("td#1-13_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-13_tan").text(formatComma(t));
    $("td#1-13_kin").text(formatComma(k));
    $("input#1-13_tax").val(formatComma(z));

    var t = parseFloatEx(tanka14["tanka"]);
    var x = parseFloatEx(tanka14["tax"]);
    var a = parseFloatEx($("td#2-14_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-14_tan").text(formatComma(t));
    $("td#2-14_kin").text(formatComma(k));
    $("input#2-14_tax").val(formatComma(z));

    var t = parseFloatEx(tanka15["tanka"]);
    var x = parseFloatEx(tanka15["tax"]);
    var a = parseFloatEx($("td#2-15_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-15_tan").text(formatComma(t));
    $("td#2-15_kin").text(formatComma(k));
    $("input#2-15_tax").val(formatComma(z));

    var t = parseFloatEx(tanka16["tanka"]);
    var x = parseFloatEx(tanka16["tax"]);
    var a = parseFloatEx($("td#2-16_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-16_tan").text(formatComma(t));
    $("td#2-16_kin").text(formatComma(k));
    $("input#2-16_tax").val(formatComma(z));

    var t = parseFloatEx(tanka17["tanka"]);
    var x = parseFloatEx(tanka17["tax"]);
    var a = parseFloatEx($("td#2-17_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-17_tan").text(formatComma(t));
    $("td#2-17_kin").text(formatComma(k));
    $("input#2-17_tax").val(formatComma(z));

    var t = parseFloatEx(tanka18["tanka"]);
    var x = parseFloatEx(tanka18["tax"]);
    var a = parseFloatEx($("td#3-18_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-18_tan").text(formatComma(t));
    $("td#3-18_kin").text(formatComma(k));
    $("input#3-18_tax").val(formatComma(z));

    var t = parseFloatEx(tanka19["tanka"]);
    var x = parseFloatEx(tanka19["tax"]);
    var a = parseFloatEx($("td#4-19_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-19_tan").text(formatComma(t));
    $("td#4-19_kin").text(formatComma(k));
    $("input#4-19_tax").val(formatComma(z));

    var t = parseFloatEx(tanka20["tanka"]);
    var x = parseFloatEx(tanka20["tax"]);
    var a = parseFloatEx($("td#4-20_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-20_tan").text(formatComma(t));
    $("td#4-20_kin").text(formatComma(k));
    $("input#4-20_tax").val(formatComma(z));

    var t = parseFloatEx(tanka21["tanka"]);
    var x = parseFloatEx(tanka21["tax"]);
    var a = parseFloatEx($("td#4-21_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-21_tan").text(formatComma(t));
    $("td#4-21_kin").text(formatComma(k));
    $("input#4-21_tax").val(formatComma(z));

    var t = parseFloatEx(tanka22["tanka"]);
    var x = parseFloatEx(tanka22["tax"]);
    var a = parseFloatEx($("td#4-22_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-22_tan").text(formatComma(t));
    $("td#4-22_kin").text(formatComma(k));
    $("input#4-22_tax").val(formatComma(z));

    var t = parseFloatEx(tanka23["tanka"]);
    var x = parseFloatEx(tanka23["tax"]);
    var a = parseFloatEx($("td#4-23_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-23_tan").text(formatComma(t));
    $("td#4-23_kin").text(formatComma(k));
    $("input#4-23_tax").val(formatComma(z));

    var t = parseFloatEx(tanka24["tanka"]);
    var x = parseFloatEx(tanka24["tax"]);
    var a = parseFloatEx($("td#4-24_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-24_tan").text(formatComma(t));
    $("td#4-24_kin").text(formatComma(k));
    $("input#4-24_tax").val(formatComma(z));

    var t = parseFloatEx(tanka25["tanka"]);
    var x = parseFloatEx(tanka25["tax"]);
    var a = parseFloatEx($("td#4-25_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-25_tan").text(formatComma(t));
    $("td#4-25_kin").text(formatComma(k));
    $("input#4-25_tax").val(formatComma(z));

    var t = parseFloatEx(tanka26["tanka"]);
    var x = parseFloatEx(tanka26["tax"]);
    var a = parseFloatEx($("td#4-26_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-26_tan").text(formatComma(t));
    $("td#4-26_kin").text(formatComma(k));
    $("input#4-26_tax").val(formatComma(z));

    var t = parseFloatEx(tanka27["tanka"]);
    var x = parseFloatEx(tanka27["tax"]);
    var a = parseFloatEx($("td#4-27_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-27_tan").text(formatComma(t));
    $("td#4-27_kin").text(formatComma(k));
    $("input#4-27_tax").val(formatComma(z));

    var t = parseFloatEx(tanka28["tanka"]);
    var x = parseFloatEx(tanka28["tax"]);
    var a = parseFloatEx($("td#4-28_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-28_tan").text(formatComma(t));
    $("td#4-28_kin").text(formatComma(k));
    $("input#4-28_tax").val(formatComma(z));

    var t = parseFloatEx(tanka29["tanka"]);
    var x = parseFloatEx(tanka29["tax"]);
    var a = parseFloatEx($("td#4-29_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-29_tan").text(formatComma(t));
    $("td#4-29_kin").text(formatComma(k));
    $("input#4-29_tax").val(formatComma(z));

    var t = parseFloatEx(tanka30["tanka"]);
    var x = parseFloatEx(tanka30["tax"]);
    var a = parseFloatEx($("td#4-30_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-30_tan").text(formatComma(t));
    $("td#4-30_kin").text(formatComma(k));
    $("input#4-30_tax").val(formatComma(z));

    wm.submitItems[2] = submitItem5;

    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL5_1"];
    var col2Value = wm.mitsumoriData["COL5_2"];
    var col4Value = wm.mitsumoriData["COL5_4"];
    //$("input[name='COL1_1']").val(col1Value);
    // 屋内用
    if(col1Value == "1"){
      $("input#1-COL5_1").attr("checked", true);
      load2a();
      $("button#jqwizard_next").removeAttr("disabled");
      wm.lastStep = 15;
    }
    // 屋外用
    if(col1Value == "2"){
      $("input#2-COL5_1").attr("checked", true);
      load2b();
      $("button#jqwizard_next").removeAttr("disabled");
      wm.lastStep = 11;
      if(col2Value == "1"){
        $("input#2-1-COL5_2").attr("checked", true);
      }
      if(col2Value == "2"){
        $("input#2-2-COL5_2").attr("checked", true);
      }
      if(col2Value == "3"){
        $("input#2-3-COL5_2").attr("checked", true);
      }
      if(col2Value == "4"){
        $("input#2-4-COL5_2").attr("checked", true);
      }
    }
    // リクライニングティルト式選択
    if(col1Value == "3"){
      $("input#3-COL5_1").attr("checked", true);
      load2c();
      $("button#jqwizard_next").removeAttr("disabled");
      wm.lastStep = 5;
    }
    // 車椅選択
    if(col1Value == "4"){
      $("input#4-COL5_1").attr("checked", true);
      load2d();
      $("button#jqwizard_next").removeAttr("disabled");
      wm.lastStep = 10;
      if(col4Value == "1"){
        $("input#4-1-COL5_4").attr("checked", true);
      }
      if(col4Value == "2"){
        $("input#4-2-COL5_4").attr("checked", true);
      }
      if(col4Value == "3"){
        $("input#4-3-COL5_4").attr("checked", true);
      }
      if(col4Value == "4"){
        $("input#4-4-COL5_4").attr("checked", true);
      }
      if(col4Value == "5"){
        $("input#4-5-COL5_4").attr("checked", true);
      }
      if(col4Value == "6"){
        $("input#4-6-COL5_4").attr("checked", true);
      }
      if(col4Value == "7"){
        $("input#4-7-COL5_4").attr("checked", true);
      }
      if(col4Value == "8"){
        $("input#4-8-COL5_4").attr("checked", true);
      }
      if(col4Value == "9"){
        $("input#4-9-COL5_4").attr("checked", true);
      }
      if(col4Value == "10"){
        $("input#4-10-COL5_4").attr("checked", true);
      }
      if(col4Value == "11"){
        $("input#4-11-COL5_4").attr("checked", true);
      }
      if(col4Value == "12"){
        $("input#4-12-COL5_4").attr("checked", true);
      }
    }
  }

  // メインフレーム材質選定
  function wizard2e() {
    // STEPボタンクリック
    $("li#step2").click(function() {
      wm.step = 2;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    // アルミニューム選択
    $("input#1-COL2_1").change(function(){
      for(var i=1; i<18; i++) {
        $("li#step" + i).show();  
      }
      load2e();
      $("button.jqwizard_next").removeAttr("disabled");
      wm.lastStep = 17;
    });
    // ステンレス選択
    $("input#2-COL2_1").change(function(){
      for(var i=1; i<18; i++) {
        $("li#step" + i).show();  
      }
      load2e();
      $("button.jqwizard_next").removeAttr("disabled");
      wm.lastStep = 17;
    });
    // 木製選択
    $("input#3-COL2_1").change(function(){
      for(var i=1; i<18; i++) {
        $("li#step" + i).show();  
      }
      load2f();
      $("button.jqwizard_next").removeAttr("disabled");
      wm.lastStep = 3;
    });
    wm.submitItems[2] = submitItem2;

    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL2_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // アルミニューム選択
    if(col1Value == "1"){
      $("input#1-COL2_1").attr("checked", true);
      load2e();
      $("button#jqwizard_next").removeAttr("disabled");
      wm.lastStep = 17;
    }
    // ステンレス選択
    if(col1Value == "2"){
      $("input#2-COL2_1").attr("checked", true);
      load2e();
      $("button#jqwizard_next").removeAttr("disabled");
      wm.lastStep = 17;
    }
    // 木製選択
    if(col1Value == "3"){
      $("input#3-COL2_1").attr("checked", true);
      load2f();
      $("button#jqwizard_next").removeAttr("disabled");
      wm.lastStep = 3;
    }
  }

  // 木製座位保持装置
  function wizard2g(){
    // STEPボタンクリック
    $("li#step2").click(function() {
      wm.step = 2;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    wm.lastStep = 2;

    var tanka173 = getSeihinInfo("173");
    var tanka174 = getSeihinInfo("174");
    var tanka175 = getSeihinInfo("175");
    var tanka176 = getSeihinInfo("176");
    var tanka177 = getSeihinInfo("177");
    var tanka178 = getSeihinInfo("178");
    var tanka179 = getSeihinInfo("179");
    var tanka180 = getSeihinInfo("180");
    var tanka181 = getSeihinInfo("181");
    var tanka182 = getSeihinInfo("182");
    var tanka183 = getSeihinInfo("183");
    var tanka184 = getSeihinInfo("184");
    var tanka185 = getSeihinInfo("185");
    var tanka186 = getSeihinInfo("186");
    // 単価をセット
    var t = parseFloatEx(tanka173["tanka"]);
    var x = parseFloatEx(tanka173["tax"]);
    var a = parseFloatEx($("input#1-173_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-173_tan").text(formatComma(t));
    $("td#1-173_kin").text(formatComma(k));
    $("td#1-173_tax_v").text((x * 100) + "%");
    $("input#1-173_tax").val(formatComma(z));

    var t = parseFloatEx(tanka174["tanka"]);
    var x = parseFloatEx(tanka174["tax"]);
    var a = parseFloatEx($("input#1-174_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-174_tan").text(formatComma(t));
    $("td#1-174_kin").text(formatComma(k));
    $("td#1-174_tax_v").text((x * 100) + "%");
    $("input#1-174_tax").val(formatComma(z));

    var t = parseFloatEx(tanka175["tanka"]);
    var x = parseFloatEx(tanka175["tax"]);
    var a = parseFloatEx($("input#2-175_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-175_tan").text(formatComma(t));
    $("td#2-175_kin").text(formatComma(k));
    $("td#2-175_tax_v").text((x * 100) + "%");
    $("input#2-175_tax").val(formatComma(z));

    var t = parseFloatEx(tanka176["tanka"]);
    var x = parseFloatEx(tanka176["tax"]);
    var a = parseFloatEx($("input#3-176_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-176_tan").text(formatComma(t));
    $("td#3-176_kin").text(formatComma(k));
    $("td#3-176_tax_v").text((x * 100) + "%");
    $("input#3-176_tax").val(formatComma(z));

    var t = parseFloatEx(tanka177["tanka"]);
    var x = parseFloatEx(tanka177["tax"]);
    var a = parseFloatEx($("input#3-177_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-177_tan").text(formatComma(t));
    $("td#3-177_kin").text(formatComma(k));
    $("td#3-177_tax_v").text((x * 100) + "%");
    $("input#3-177_tax").val(formatComma(z));

    var t = parseFloatEx(tanka178["tanka"]);
    var x = parseFloatEx(tanka178["tax"]);
    var a = parseFloatEx($("input#3-178_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-178_tan").text(formatComma(t));
    $("td#3-178_kin").text(formatComma(k));
    $("td#3-178_tax_v").text((x * 100) + "%");
    $("input#3-178_tax").val(formatComma(z));

    var t = parseFloatEx(tanka179["tanka"]);
    var x = parseFloatEx(tanka179["tax"]);
    var a = parseFloatEx($("input#4-179_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-179_tan").text(formatComma(t));
    $("td#4-179_kin").text(formatComma(k));
    $("td#4-179_tax_v").text((x * 100) + "%");
    $("input#4-179_tax").val(formatComma(z));

    var t = parseFloatEx(tanka180["tanka"]);
    var x = parseFloatEx(tanka180["tax"]);
    var a = parseFloatEx($("input#4-180_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-180_tan").text(formatComma(t));
    $("td#4-180_kin").text(formatComma(k));
    $("td#4-180_tax_v").text((x * 100) + "%");
    $("input#4-180_tax").val(formatComma(z));

    var t = parseFloatEx(tanka181["tanka"]);
    var x = parseFloatEx(tanka181["tax"]);
    var a = parseFloatEx($("input#5-181_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-181_tan").text(formatComma(t));
    $("td#5-181_kin").text(formatComma(k));
    $("td#5-181_tax_v").text((x * 100) + "%");
    $("input#5-181_tax").val(formatComma(z));

    var t = parseFloatEx(tanka182["tanka"]);
    var x = parseFloatEx(tanka182["tax"]);
    var a = parseFloatEx($("input#5-182_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-182_tan").text(formatComma(t));
    $("td#5-182_kin").text(formatComma(k));
    $("td#5-182_tax_v").text((x * 100) + "%");
    $("input#5-182_tax").val(formatComma(z));

    var t = parseFloatEx(tanka183["tanka"]);
    var x = parseFloatEx(tanka183["tax"]);
    var a = parseFloatEx($("input#5-183_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-183_tan").text(formatComma(t));
    $("td#5-183_kin").text(formatComma(k));
    $("td#5-183_tax_v").text((x * 100) + "%");
    $("input#5-183_tax").val(formatComma(z));

    var t = parseFloatEx(tanka184["tanka"]);
    var x = parseFloatEx(tanka184["tax"]);
    var a = parseFloatEx($("input#6-184_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#6-184_tan").text(formatComma(t));
    $("td#6-184_kin").text(formatComma(k));
    $("td#6-184_tax_v").text((x * 100) + "%");
    $("input#6-184_tax").val(formatComma(z));

    var t = parseFloatEx(tanka185["tanka"]);
    var x = parseFloatEx(tanka185["tax"]);
    var a = parseFloatEx($("input#6-185_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#6-185_tan").text(formatComma(t));
    $("td#6-185_kin").text(formatComma(k));
    $("td#6-185_tax_v").text((x * 100) + "%");
    $("input#6-185_tax").val(formatComma(z));

    var t = parseFloatEx(tanka186["tanka"]);
    var x = parseFloatEx(tanka186["tax"]);
    var a = parseFloatEx($("input#6-186_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#6-186_tan").text(formatComma(t));
    $("td#6-186_kin").text(formatComma(k));
    $("td#6-186_tax_v").text((x * 100) + "%");
    $("input#6-186_tax").val(formatComma(z));

    wm.submitItems[2] = submitItem23;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL23_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // アルミニューム選択
    if(col1Value == "1"){
      $("input#1-COL23_1").attr("checked", true);
    }
    // ステンレス選択
    if(col1Value == "2"){
      $("input#2-COL23_1").attr("checked", true);
    }
    // 木製選択
    if(col1Value == "3"){
      $("input#3-COL23_1").attr("checked", true);
    }
    // アルミニューム選択
    if(col1Value == "4"){
      $("input#4-COL23_1").attr("checked", true);
    }
    // ステンレス選択
    if(col1Value == "5"){
      $("input#5-COL23_1").attr("checked", true);
    }
    // 木製選択
    if(col1Value == "6"){
      $("input#6-COL23_1").attr("checked", true);
    }
  }

    // トイレットチェア
  function wizard2h(){
    // STEPボタンクリック
    $("li#step2").click(function() {
      wm.step = 2;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
      wm.lastStep = 2;
    var tanka187 = getSeihinInfo("187");
    var tanka188 = getSeihinInfo("188");
    var tanka189 = getSeihinInfo("189");
    var tanka190 = getSeihinInfo("190");
    var tanka191 = getSeihinInfo("191");
    var tanka192 = getSeihinInfo("192");
    var tanka193 = getSeihinInfo("193");
    var tanka194 = getSeihinInfo("194");
    var tanka195 = getSeihinInfo("195");
    var tanka196 = getSeihinInfo("196");
    var tanka197 = getSeihinInfo("197");
    var tanka198 = getSeihinInfo("198");
    var tanka199 = getSeihinInfo("199");
    // 単価をセット
    var t = parseFloatEx(tanka187["tanka"]);
    var x = parseFloatEx(tanka187["tax"]);
    var a = parseFloatEx($("input#1-187_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-187_tan").text(formatComma(t));
    $("td#1-187_kin").text(formatComma(k));
    $("td#1-187_tax_v").text((x * 100) + "%");
    $("input#1-187_tax").val(formatComma(z));

    var t = parseFloatEx(tanka188["tanka"]);
    var x = parseFloatEx(tanka188["tax"]);
    var a = parseFloatEx($("input#1-188_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-188_tan").text(formatComma(t));
    $("td#1-188_kin").text(formatComma(k));
    $("td#1-188_tax_v").text((x * 100) + "%");
    $("input#1-188_tax").val(formatComma(z));

    var t = parseFloatEx(tanka189["tanka"]);
    var x = parseFloatEx(tanka189["tax"]);
    var a = parseFloatEx($("input#1-189_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-189_tan").text(formatComma(t));
    $("td#1-189_kin").text(formatComma(k));
    $("td#1-189_tax_v").text((x * 100) + "%");
    $("input#1-189_tax").val(formatComma(z));

    var t = parseFloatEx(tanka190["tanka"]);
    var x = parseFloatEx(tanka190["tax"]);
    var a = parseFloatEx($("input#1-190_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-190_tan").text(formatComma(t));
    $("td#1-190_kin").text(formatComma(k));
    $("td#1-190_tax_v").text((x * 100) + "%");
    $("input#1-190_tax").val(formatComma(z));

    var t = parseFloatEx(tanka191["tanka"]);
    var x = parseFloatEx(tanka191["tax"]);
    var a = parseFloatEx($("input#1-191_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-191_tan").text(formatComma(t));
    $("td#1-191_kin").text(formatComma(k));
    $("td#1-191_tax_v").text((x * 100) + "%");
    $("input#1-191_tax").val(formatComma(z));

    var t = parseFloatEx(tanka192["tanka"]);
    var x = parseFloatEx(tanka192["tax"]);
    var a = parseFloatEx($("input#1-192_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-192_tan").text(formatComma(t));
    $("td#1-192_kin").text(formatComma(k));
    $("td#1-192_tax_v").text((x * 100) + "%");
    $("input#1-192_tax").val(formatComma(z));

    var t = parseFloatEx(tanka193["tanka"]);
    var x = parseFloatEx(tanka193["tax"]);
    var a = parseFloatEx($("input#1-193_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-193_tan").text(formatComma(t));
    $("td#1-193_kin").text(formatComma(k));
    $("td#1-193_tax_v").text((x * 100) + "%");
    $("input#1-193_tax").val(formatComma(z));

    var t = parseFloatEx(tanka194["tanka"]);
    var x = parseFloatEx(tanka194["tax"]);
    var a = parseFloatEx($("input#1-194_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-194_tan").text(formatComma(t));
    $("td#1-194_kin").text(formatComma(k));
    $("td#1-194_tax_v").text((x * 100) + "%");
    $("input#1-194_tax").val(formatComma(z));

    var t = parseFloatEx(tanka195["tanka"]);
    var x = parseFloatEx(tanka195["tax"]);
    var a = parseFloatEx($("input#1-195_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-195_tan").text(formatComma(t));
    $("td#1-195_kin").text(formatComma(k));
    $("td#1-195_tax_v").text((x * 100) + "%");
    $("input#1-195_tax").val(formatComma(z));

    var t = parseFloatEx(tanka196["tanka"]);
    var x = parseFloatEx(tanka196["tax"]);
    var a = parseFloatEx($("input#1-196_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-196_tan").text(formatComma(t));
    $("td#1-196_kin").text(formatComma(k));
    $("td#1-196_tax_v").text((x * 100) + "%");
    $("input#1-196_tax").val(formatComma(z));

    var t = parseFloatEx(tanka197["tanka"]);
    var x = parseFloatEx(tanka197["tax"]);
    var a = parseFloatEx($("input#2-197_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-197_tan").text(formatComma(t));
    $("td#2-197_kin").text(formatComma(k));
    $("td#2-197_tax_v").text((x * 100) + "%");
    $("input#2-197_tax").val(formatComma(z));

    var t = parseFloatEx(tanka198["tanka"]);
    var x = parseFloatEx(tanka198["tax"]);
    var a = parseFloatEx($("input#2-198_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-198_tan").text(formatComma(t));
    $("td#2-198_kin").text(formatComma(k));
    $("td#2-198_tax_v").text((x * 100) + "%");
    $("input#2-198_tax").val(formatComma(z));

    var t = parseFloatEx(tanka199["tanka"]);
    var x = parseFloatEx(tanka199["tax"]);
    var a = parseFloatEx($("input#2-199_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-199_tan").text(formatComma(t));
    $("td#2-199_kin").text(formatComma(k));
    $("td#2-199_tax_v").text((x * 100) + "%");
    $("input#2-199_tax").val(formatComma(z));

    wm.submitItems[2] = submitItem24;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL24_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // アルミニューム選択
    if(col1Value == "1"){
      $("input#1-COL24_1").attr("checked", true);
    }
    // ステンレス選択
    if(col1Value == "2"){
      $("input#2-COL24_1").attr("checked", true);
    }
  }

    // シャワーチェア
  function wizard2i(){
    // STEPボタンクリック
    $("li#step2").click(function() {
      wm.step = 2;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    wm.lastStep = 2;

    var tanka200 = getSeihinInfo("200");
    var tanka201 = getSeihinInfo("201");
    // 単価をセット
    var t = parseFloatEx(tanka200["tanka"]);
    var x = parseFloatEx(tanka200["tax"]);
    var a = parseFloatEx($("input#1-200_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-200_tan").text(formatComma(t));
    $("td#1-200_kin").text(formatComma(k));
    $("td#1-200_tax_v").text((x * 100) + "%");
    $("input#1-200_tax").val(formatComma(z));

    var t = parseFloatEx(tanka201["tanka"]);
    var x = parseFloatEx(tanka201["tax"]);
    var a = parseFloatEx($("input#1-201_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-201_tan").text(formatComma(t));
    $("td#1-201_kin").text(formatComma(k));
    $("td#1-201_tax_v").text((x * 100) + "%");
    $("input#1-201_tax").val(formatComma(z));

    wm.submitItems[2] = submitItem25;
  }

function load2a() {
  $("div#step3").load("/mitsumori/step_06.html", wizard3a);
  $("li#step3 a").attr("href", "#step3");
  $("li#step3 span").text("グリップ");
  //$("div#step4").load("/mitsumori/step_08.html", wizard4a);
  $("li#step4 a").attr("href", "#step4");
  $("li#step4 span").text("シート");
  //$("div#step5").load("/mitsumori/step_07.html", wizard5a);
  $("li#step5 a").attr("href", "#step5");
  $("li#step5 span").text("バックサポート");
  //$("div#step6").load("/mitsumori/step_09.html", wizard6a);
  $("li#step6 a").attr("href", "#step6");
  $("li#step6 span").text("ヘッドサポート");
  //$("div#step7").load("/mitsumori/step_10.html", wizard7a);
  $("li#step7 a").attr("href", "#step7");
  $("li#step7 span").text("アームサポート");
  //$("div#step8").load("/mitsumori/step_12.html", wizard8a);
  $("li#step8 a").attr("href", "#step8");
  $("li#step8 span").text("アームパッド");
  //$("div#step9").load("/mitsumori/step_11.html", wizard9a);
  $("li#step9 a").attr("href", "#step9");
  $("li#step9 span").text("レッグサポート");
  //$("div#step10").load("/mitsumori/step_13.html", wizard10a);
  $("li#step10 a").attr("href", "#step10");
  $("li#step10 span").text("フットサポート");
  //$("div#step11").load("/mitsumori/step_14.html", wizard11a);
  $("li#step11 a").attr("href", "#step11");
  $("li#step11 span").text("上肢サポート");
  //$("div#step12").load("/mitsumori/step_15.html", wizard12a);
  $("li#step12 a").attr("href", "#step12");
  $("li#step12 span").text("テーブル");
  //$("div#step13").load("/mitsumori/step_16.html", wizard13a);
  $("li#step13 a").attr("href", "#step13");
  $("li#step13 span").text("シートベルト");
  //$("div#step14").load("/mitsumori/step_17.html", wizard14a);
  $("li#step14 a").attr("href", "#step14");
  $("li#step14 span").text("パッド");
  //$("div#step15").load("/mitsumori/step_20.html", wizard15a);
  $("li#step15 a").attr("href", "#step15");
  $("li#step15 span").text("オプション");
  $("li#step16").hide();
  $("li#step17").hide();
}

function load2b() {
  $("div#step3").load("/mitsumori/step_07.html", wizard3b);
  $("li#step3 a").attr("href", "#step3");
  $("li#step3 span").text("バックサポート");
  //$("div#step4").load("/mitsumori/step_08.html", wizard4b);
  $("li#step4 a").attr("href", "#step4");
  $("li#step4 span").text("シート");
  //$("div#step5").load("/mitsumori/step_09.html", wizard5b);
  $("li#step5 a").attr("href", "#step5");
  $("li#step5 span").text("ヘッドサポート");
  //$("div#step6").load("/mitsumori/step_12.html", wizard6b);
  $("li#step6 a").attr("href", "#step6");
  $("li#step6 span").text("アームパッド");
  //$("div#step7").load("/mitsumori/step_14.html", wizard7b);
  $("li#step7 a").attr("href", "#step7");
  $("li#step7 span").text("上肢サポート");
  //$("div#step8").load("/mitsumori/step_15.html", wizard8b);
  $("li#step8 a").attr("href", "#step8");
  $("li#step8 span").text("テーブル");
  //$("div#step9").load("/mitsumori/step_16.html", wizard9b);
  $("li#step9 a").attr("href", "#step9");
  $("li#step9 span").text("シートベルト");
  //$("div#step10").load("/mitsumori/step_17.html", wizard10b);
  $("li#step10 a").attr("href", "#step10");
  $("li#step10 span").text("パッド");
  //$("div#step11").load("/mitsumori/step_18.html", wizard11b);
  $("li#step11 a").attr("href", "#step11");
  $("li#step11 span").text("オプション");
  $("li#step12").hide();
  $("li#step13").hide();
  $("li#step14").hide();
  $("li#step15").hide();
  $("li#step16").hide();
  $("li#step17").hide();
}


function load2c() {
  $("div#step3").load("/mitsumori/step_16.html", wizard3c);
  $("li#step3 a").attr("href", "#step3");
  $("li#step3 span").text("シートベルト");
  //$("div#step4").load("/mitsumori/step_17.html", wizard4c);
  $("li#step4 a").attr("href", "#step4");
  $("li#step4 span").text("パッド");
  //$("div#step5").load("/mitsumori/step_21.html", wizard5c);
  $("li#step5 a").attr("href", "#step5");
  $("li#step5 span").text("オプション");
  $("li#step6").hide();
  $("li#step7").hide();
  $("li#step8").hide();
  $("li#step9").hide();
  $("li#step10").hide();
  $("li#step11").hide();
  $("li#step12").hide();
  $("li#step13").hide();
  $("li#step14").hide();
  $("li#step15").hide();
  $("li#step16").hide();
  $("li#step17").hide();
}

function load2d() {
  $("div#step3").load("/mitsumori/step_07.html", wizard3d);
  $("li#step3 a").attr("href", "#step3");
  $("li#step3 span").text("バックサポート");
  //$("div#step4").load("/mitsumori/step_08.html", wizard4d);
  $("li#step4 a").attr("href", "#step4");
  $("li#step4 span").text("シート");
  //$("div#step5").load("/mitsumori/step_09.html", wizard5d);
  $("li#step5 a").attr("href", "#step5");
  $("li#step5 span").text("ヘッドサポート");
  //$("div#step6").load("/mitsumori/step_14.html", wizard6d);
  $("li#step6 a").attr("href", "#step6");
  $("li#step6 span").text("上肢サポート");
  //$("div#step7").load("/mitsumori/step_15.html", wizard7d);
  $("li#step7 a").attr("href", "#step7");
  $("li#step7 span").text("テーブル");
  //$("div#step8").load("/mitsumori/step_16.html", wizard8d);
  $("li#step8 a").attr("href", "#step8");
  $("li#step8 span").text("シートベルト");
  //$("div#step9").load("/mitsumori/step_17.html", wizard9d);
  $("li#step9 a").attr("href", "#step9");
  $("li#step9 span").text("パッド");
  //$("div#step10").load("/mitsumori/step_19.html", wizard10d);
  $("li#step10 a").attr("href", "#step10");
  $("li#step10 span").text("オプション");
  $("li#step11").hide();
  $("li#step12").hide();
  $("li#step13").hide();
  $("li#step14").hide();
  $("li#step15").hide();
  $("li#step16").hide();
  $("li#step17").hide();
}

function load2e() {
  $("div#step3").load("/mitsumori/step_03.html", wizard3e);
  $("li#step3 a").attr("href", "#step3");
  $("li#step3 span").text("機構");
  //$("div#step4").load("/mitsumori/step_04.html", wizard4e);
  $("li#step4 a").attr("href", "#step4");
  $("li#step4 span").text("使用場所");
  //$("div#step5").load("/mitsumori/step_06.html", wizard5e);
  $("li#step5 a").attr("href", "#step5");
  $("li#step5 span").text("グリップ");
  //$("div#step6").load("/mitsumori/step_08.html", wizard6e);
  $("li#step6 a").attr("href", "#step6");
  $("li#step6 span").text("シート");
  //$("div#step7").load("/mitsumori/step_07.html", wizard7e);
  $("li#step7 a").attr("href", "#step7");
  $("li#step7 span").text("バックサポート");
  //$("div#step8").load("/mitsumori/step_09.html", wizard8e);
  $("li#step8 a").attr("href", "#step8");
  $("li#step8 span").text("ヘッドサポート");
  //$("div#step9").load("/mitsumori/step_10.html", wizard9e);
  $("li#step9 a").attr("href", "#step9");
  $("li#step9 span").text("アームサポート");
  //$("div#step10").load("/mitsumori/step_12.html", wizard10e);
  $("li#step10 a").attr("href", "#step10");
  $("li#step10 span").text("アームパッド");
  //$("div#step11").load("/mitsumori/step_11.html", wizard11e);
  $("li#step11 a").attr("href", "#step11");
  $("li#step11 span").text("レッグサポート");
  //$("div#step12").load("/mitsumori/step_13.html", wizard12e);
  $("li#step12 a").attr("href", "#step12");
  $("li#step12 span").text("フットサポート");
  //$("div#step13").load("/mitsumori/step_14.html", wizard13e);
  $("li#step13 a").attr("href", "#step13");
  $("li#step13 span").text("上肢サポート");
  //$("div#step14").load("/mitsumori/step_15.html", wizard14e);
  $("li#step14 a").attr("href", "#step14");
  $("li#step14 span").text("テーブル");
  //$("div#step15").load("/mitsumori/step_16.html", wizard15e);
  $("li#step15 a").attr("href", "#step15");
  $("li#step15 span").text("シートベルト");
  //$("div#step16").load("/mitsumori/step_17.html", wizard16e);
  $("li#step16 a").attr("href", "#step16");
  $("li#step16 span").text("パッド");
  //$("div#step17").load("/mitsumori/step_20.html", wizard17e);
  $("li#step17 a").attr("href", "#step17");
  $("li#step17 span").text("オプション");
}

function load2f() {
  $("div#step3").load("/mitsumori/step_22.html", wizard3f);
  $("li#step3 a").attr("href", "#step3");
  $("li#step3 span").text("木製");
  $("li#step4").hide();
  $("li#step5").hide();
  $("li#step6").hide();
  $("li#step7").hide();
  $("li#step8").hide();
  $("li#step9").hide();
  $("li#step10").hide();
  $("li#step11").hide();
  $("li#step12").hide();
  $("li#step13").hide();
  $("li#step14").hide();
  $("li#step15").hide();
  $("li#step16").hide();
  $("li#step17").hide();
}

