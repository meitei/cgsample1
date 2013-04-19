  // フットサポート
  function wizard10a(){
    //
    $("input#1-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem13;
  }

  // パッド
  function wizard10b(){
    //
    $("input#1-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem17;
  }

  // OP車椅子フレーム
  function wizard10d(){
    $("button.jqwizard_next").removeAttr("disabled");
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem19;
  }

  // アームパッド
  function wizard10e(){
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
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem12;
  }