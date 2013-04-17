  // レッグサポート
  function wizard9a(){
    //
    $("input#1-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step9");
    wm.submitItems[9] = submitItem11;
  }

  // シートベルト
  function wizard9b(){
    //
    $("input#1-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step9");
    wm.submitItems[9] = submitItem16;
  }

  // パッド
  function wizard9d(){
    //
    $("input#1-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step9");
    wm.submitItems[9] = submitItem17;
  }

  // アームサポート
  function wizard9e(){
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
    // 単価を書き換え
    updateUnitPrice("step9");
    wm.submitItems[9] = submitItem10;
  }