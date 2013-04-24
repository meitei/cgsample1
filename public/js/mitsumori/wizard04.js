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
    // 単価を書き換え
    updateUnitPrice("step4");
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
  }