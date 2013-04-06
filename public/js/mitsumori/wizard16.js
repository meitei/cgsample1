  // パッド
  function wizard16e(){
    //
    $("input#1-COL2_1").click(function(){
    });
    //
    $("input#2-COL2_1").click(function(){
    });
    //
    $("input#3-COL2_1").click(function(){
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      step = 4;
      $("div.statuslabel span").replaceWith("<span>STEP 4</span>");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 2;
      $("div.statuslabel span").replaceWith("<span>STEP 2</span>");
    });
  }