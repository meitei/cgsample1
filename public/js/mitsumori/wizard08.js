  // アームパッド
  function wizard8a(){
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
    updateUnitPrice("step8");
    wm.submitItems[8] = submitItem12;
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
  }

  // テーブル
  function wizard8b(){
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
    updateUnitPrice("step8");
    wm.submitItems[8] = submitItem15;
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
  }

  // シートベルト
  function wizard8d(){
    //
    $("input#1-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step8");
    wm.submitItems[8] = submitItem16;
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

  // ヘッドサポート
  function wizard8e(){
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
    // 単価を書き換え
    updateUnitPrice("step8");
    wm.submitItems[8] = submitItem9;
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
  }