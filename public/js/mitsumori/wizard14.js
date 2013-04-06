  // パッド
  function wizard14a(){
    //
    $("input#1-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL17_1"] = $("input[name='COL17_1']:checked").val();
      step = 15;
      $("div.statuslabel").html("<span>STEP 15</span>" + $("div#step15 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 13;
      $("div.statuslabel").html("<span>STEP 13</span>" + $("div#step13 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step13");
  }

  // テーブル
  function wizard14e(){
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
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL15_1"] = $("input[name='COL15_1']:checked").val();
      step = 15;
      $("div.statuslabel").html("<span>STEP 15</span>" + $("div#step15 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 13;
      $("div.statuslabel").html("<span>STEP 13</span>" + $("div#step13 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step13");
  }