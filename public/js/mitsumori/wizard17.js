  // OPオーダー座位保持装置
  function wizard17e(){
    $("button.jqwizard_next").removeAttr("disabled");
    // 単価を書き換え
    updateUnitPrice("step17");
    wm.submitItems[17] = submitItem20;
  }