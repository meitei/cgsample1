  // 介護用グリップ選定
  function wizard3a(){
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
    var col1Value = wm.mitsumoriData["COL6_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // 平面形状型
    if(col1Value == "1"){
      $("input#1-COL23_1").attr("checked", true);
    }
    // 張り調整
    if(col1Value == "2"){
      $("input#2-COL23_1").attr("checked", true);
    }
    // モールド（採寸）
    if(col1Value == "3"){
      $("input#3-COL23_1").attr("checked", true);
    }
    // モールド型（採型）
    if(col1Value == "4"){
      $("input#3-COL23_1").attr("checked", true);
    }
  }

  // シートベルト選定
  function wizard3c(){
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
  }

  // バックサポート選定
  function wizard3d(){
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
  }

  // メインフレーム機構選定
  function wizard3e(){
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
    // 単価を書き換え
    updateUnitPrice("step3");
    wm.submitItems[3] = submitItem3;
  }

    // オーダー対応木製
  function wizard3f(){
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
  }