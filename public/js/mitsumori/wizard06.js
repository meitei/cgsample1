  // ヘッドサポート
  function wizard6a(){
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
  }

  // アームパッド
  function wizard6b(){
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
  }

  // 上肢支持部
  function wizard6d(){
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
  }

  // シート座面
  function wizard6e(){
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
    updateUnitPrice("step6");
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
  }