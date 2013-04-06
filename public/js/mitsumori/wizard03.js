  // 介護用グリップ選定
  function wizard3a(){
    //
    $("input#1-COL6_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL6_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL6_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL6_1"] = $("input[name='COL6_1']:checked").val();
      step = 4;
      $("div.statuslabel").html("<span>STEP 4</span>" + $("div#step4 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 2;
      $("div.statuslabel").html("<span>STEP 2</span>" + $("div#step2 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step3");
  }

  // バックサポート選定
  function wizard3b(){
    //
    $("input#1-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL7_1"] = $("input[name='COL7_1']:checked").val();
      step = 4;
      $("div.statuslabel").html("<span>STEP 4</span>" + $("div#step4 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 2;
      $("div.statuslabel").html("<span>STEP 2</span>" + $("div#step2 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step3");
  }

  // シートベルト選定
  function wizard3c(){
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
      step = 4;
      $("div.statuslabel").html("<span>STEP 4</span>" + $("div#step4 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 2;
      $("div.statuslabel").html("<span>STEP 2</span>" + $("div#step2 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step3");
  }

  // バックサポート選定
  function wizard3d(){
    //
    $("input#1-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL7_1"] = $("input[name='COL7_1']:checked").val();
      step = 4;
      $("div.statuslabel").html("<span>STEP 4</span>" + $("div#step4 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 2;
      $("div.statuslabel").html("<span>STEP 2</span>" + $("div#step2 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step3");
  }

  // メインフレーム機構選定
  function wizard3e(){
    //
    $("input#1-COL3_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL3_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL3_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL3_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL3_1"] = $("input[name='COL3_1']:checked").val();
      step = 4;
      $("div.statuslabel").html("<span>STEP 4</span>" + $("div#step4 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 2;
      $("div.statuslabel").html("<span>STEP 2</span>" + $("div#step2 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step3");
  }

    // オーダー対応木製
  function wizard3f(){
    //
    $("input#1-COL22_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL22_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL22_1"] = $("input[name='COL22_1']:checked").val();
      step = 4;
      $("div.statuslabel").html("<span>STEP 4</span>" + $("div#step4 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 2;
      $("div.statuslabel").html("<span>STEP 2</span>" + $("div#step2 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step3");
  }