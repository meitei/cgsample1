  // パッド
  function wizard16e(){
    //
    $("input#1-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step16");
    wm.submitItems[16] = submitItem17;
  }