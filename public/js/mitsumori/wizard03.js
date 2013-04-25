  // 介護用グリップ選定
  function wizard3a(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      wm.step = 3;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    // 不要
    $("input#1-COL6_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 車椅子
    $("input#2-COL6_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 横渡し
    $("input#3-COL6_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
    wm.submitItems[3] = submitItem6;
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
  }

  // バックサポート選定
  function wizard3b(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      wm.step = 3;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
    wm.submitItems[3] = submitItem7;
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
  }

  // シートベルト選定
  function wizard3c(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      wm.step = 3;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL16_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
    wm.submitItems[3] = submitItem16;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL16_1"];
    var col2Value = wm.mitsumoriData["COL16_2"];
    var col3Value = wm.mitsumoriData["COL16_3"];
    var col4Value = wm.mitsumoriData["COL16_4"];
    var col5Value = wm.mitsumoriData["COL16_5"];
    var col6Value = wm.mitsumoriData["COL16_6"];
    var col7Value = wm.mitsumoriData["COL16_7"];
    var col8Value = wm.mitsumoriData["COL16_8"];
    var col9Value = wm.mitsumoriData["COL16_9"];
    var col10Value = wm.mitsumoriData["COL16_10"];
    var col11Value = wm.mitsumoriData["COL16_11"];
    var col12Value = wm.mitsumoriData["COL16_12"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL16_1").attr("checked", true);
    }
    // 必要
    if(col1Value == "2"){
      $("input#2-COL16_1").attr("checked", true);
      if(col11Value == "1"){
        $("input#2-1-COL16_11").attr("checked", true);
      }
      if(col11Value == "2"){
        $("input#2-2-COL16_11").attr("checked", true);
      }
    }
    if(col2Value == "1"){
      $("input#2-COL16_2").attr("checked", true);
    }
    if(col3Value == "1"){
      $("input#2-COL16_3").attr("checked", true);
    }
    if(col4Value == "1"){
      $("input#2-COL16_4").attr("checked", true);
    }
    if(col5Value == "1"){
      $("input#2-COL16_5").attr("checked", true);
    }
    if(col6Value == "1"){
      $("input#2-COL16_6").attr("checked", true);
    }
    if(col7Value == "1"){
      $("input#2-COL16_7").attr("checked", true);
    }
    if(col8Value == "1"){
      $("input#2-COL16_8").attr("checked", true);
    }
    if(col9Value == "1"){
      $("input#2-COL16_9").attr("checked", true);
    }
    if(col10Value == "1"){
      $("input#2-COL16_10").attr("checked", true);
    }
    if(col10Value == "12"){
      $("input#2-COL16_12").attr("checked", true);
    }
  }

  // バックサポート選定
  function wizard3d(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      wm.step = 3;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL7_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
    wm.submitItems[3] = submitItem7;
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
  }

  // メインフレーム機構選定
  function wizard3e(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      wm.step = 3;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL3_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL3_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL3_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL3_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    $("select#2-3_su").change(function() {
      var m_tanka = getSeihinInfo("3");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-3_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-3_kin").text(formatComma(kingaku));
      $("input#2-3_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-3_su").change(function() {
      var m_tanka = getSeihinInfo("3");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#3-3_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-3_kin").text(formatComma(kingaku));
      $("input#3-3_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-3_su").change(function() {
      var m_tanka = getSeihinInfo("3");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-3_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-3_kin").text(formatComma(kingaku));
      $("input#4-3_tax").val(formatComma(zeigaku));
      return false;
    });
    // 単価を書き換え
    updateUnitPrice("step3");
    wm.submitItems[3] = submitItem3;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL3_1"];
    var col2Value = wm.mitsumoriData["COL3_2"];
    var col3Value = wm.mitsumoriData["COL3_3"];
    var col4Value = wm.mitsumoriData["COL3_4"];
    var col5Value = wm.mitsumoriData["COL3_5"];
    var col10Value = wm.mitsumoriData["COL3_10"];
    var col12Value = wm.mitsumoriData["COL3_12"];
    //$("input[name='COL1_1']").val(col1Value);
    // 固定型
    if(col1Value == "1"){
      $("input#1-COL3_1").attr("checked", true);
      $("select#1_COL3_4").val(col4Value);
      $("select#1_COL3_2").val(col2Value);
    }
    // リクライニング
    if(col1Value == "2"){
      $("input#2-COL3_1").attr("checked", true);
      $("select#2_COL3_4").val(col4Value);
      if(col5Value == "1"){
        $("input#2-1-COL3_5").attr("checked", true);
      }
      if(col5Value == "2"){
        $("input#2-2-COL3_5").attr("checked", true);
      }
    }
    // ティルト
    if(col1Value == "3"){
      $("input#3-COL3_1").attr("checked", true);
      $("select#3_COL3_3").val(col3Value);
      if(col10Value == "1"){
        $("input#3-1-COL3_10").attr("checked", true);
      }
      if(col10Value == "2"){
        $("input#3-2-COL3_10").attr("checked", true);
      }
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#4-COL3_1").attr("checked", true);
      if(col12Value == "1"){
        $("input#4-1-COL3_12").attr("checked", true);
      }
      if(col12Value == "2"){
        $("input#4-2-COL3_12").attr("checked", true);
      }
      if(col12Value == "3"){
        $("input#4-3-COL3_12").attr("checked", true);
      }
      if(col12Value == "4"){
        $("input#4-4-COL3_12").attr("checked", true);
      }
      if(col12Value == "5"){
        $("input#4-5-COL3_12").attr("checked", true);
      }
      if(col12Value == "6"){
        $("input#4-6-COL3_12").attr("checked", true);
      }
    }
  }

    // オーダー対応木製
  function wizard3f(){
    // STEPボタンクリック
    $("li#step3").click(function() {
      wm.step = 3;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL22_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL22_1").change(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
    wm.submitItems[3] = submitItem22;
    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL22_1"];
    var col2Value = wm.mitsumoriData["COL22_2"];
    var col3Value = wm.mitsumoriData["COL22_3"];
    //$("input[name='COL1_1']").val(col1Value);
    // ニューオルソチェア
    if(col1Value == "1"){
      $("input#1-COL22_1").attr("checked", true);
      if(col2Value == "1"){
        $("input#1-1-COL22_2").attr("checked", true);
      }
      if(col2Value == "2"){
        $("input#1-2-COL22_2").attr("checked", true);
      }
      if(col2Value == "3"){
        $("input#1-3-COL22_2").attr("checked", true);
      }
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL22_1").attr("checked", true);
      if(col3Value == "1"){
        $("input#2-1-COL22_3").attr("checked", true);
      }
      if(col2Value == "2"){
        $("input#2-2-COL22_3").attr("checked", true);
      }
      if(col2Value == "3"){
        $("input#2-3-COL22_3").attr("checked", true);
      }
    }
  }