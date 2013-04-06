  // シートベルト
  function wizard13a(){
    //
    $("input#1-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL16_1"] = $("input[name='COL16_1']:checked").val();
      step = 14;
      $("div.statuslabel").html("<span>STEP 14</span>" + $("div#step14 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 12;
      $("div.statuslabel").html("<span>STEP 12</span>" + $("div#step12 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step13");
  }

  // 上肢支持部
  function wizard13e(){
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
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL14_1"] = $("input[name='COL14_1']:checked").val();
      step = 14;
      $("div.statuslabel").html("<span>STEP 14</span>" + $("div#step14 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 12;
      $("div.statuslabel").html("<span>STEP 12</span>" + $("div#step12 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step13");
  }