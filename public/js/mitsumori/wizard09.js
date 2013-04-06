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
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL11_1"] = $("input[name='COL11_1']:checked").val();
      step = 10;
      $("div.statuslabel").html("<span>STEP 10</span>" + $("div#step10 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 8;
      $("div.statuslabel").html("<span>STEP 8</span>" + $("div#step8 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step9");
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
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL16_1"] = $("input[name='COL16_1']:checked").val();
      step = 10;
      $("div.statuslabel").html("<span>STEP 10</span>" + $("div#step10 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 8;
      $("div.statuslabel").html("<span>STEP 8</span>" + $("div#step8 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step9");
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
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL17_1"] = $("input[name='COL17_1']:checked").val();
      step = 10;
      $("div.statuslabel").html("<span>STEP 10</span>" + $("div#step10 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 8;
      $("div.statuslabel").html("<span>STEP 8</span>" + $("div#step8 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step9");
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
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL10_1"] = $("input[name='COL10_1']:checked").val();
      step = 10;
      $("div.statuslabel").html("<span>STEP 10</span>" + $("div#step10 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 8;
      $("div.statuslabel").html("<span>STEP 8</span>" + $("div#step8 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step9");
  }