  // 上肢支持部
  function wizard11a(){
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
    updateUnitPrice("step11");
    wm.submitItems[1] = submitItem14;
  }

  // OPPW
  function wizard11b(){
    $("button.jqwizard_next").removeAttr("disabled");
    // 単価を書き換え
    updateUnitPrice("step11");
    wm.submitItems[1] = submitItem18;
  }

  // レッグサポート
  function wizard11e(){
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
    updateUnitPrice("step11");
    wm.submitItems[1] = submitItem11;
  }