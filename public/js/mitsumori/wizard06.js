  // ヘッドサポート
  function wizard6a(){
    //
    $("input#1-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL9_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL9_1"] = $("input[name='COL9_1']:checked").val();
      step = 7;
      $("div.statuslabel").html("<span>STEP 7</span>" + $("div#step7 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 5;
      $("div.statuslabel").html("<span>STEP 5</span>" + $("div#step5 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step6");
  }

  // アームパッド
  function wizard6b(){
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
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL12_1"] = $("input[name='COL12_1']:checked").val();
      step = 7;
      $("div.statuslabel").html("<span>STEP 7</span>" + $("div#step7 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 5;
      $("div.statuslabel").html("<span>STEP 5</span>" + $("div#step5 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step6");
  }

  // 上肢支持部
  function wizard6d(){
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
      step = 7;
      $("div.statuslabel").html("<span>STEP 7</span>" + $("div#step7 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 5;
      $("div.statuslabel").html("<span>STEP 5</span>" + $("div#step5 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step6");
  }

  // シート座面
  function wizard6e(){
    //
    $("input#1-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL8_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL8_1"] = $("input[name='COL8_1']:checked").val();
      step = 7;
      $("div.statuslabel").html("<span>STEP 7</span>" + $("div#step7 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 5;
      $("div.statuslabel").html("<span>STEP 5</span>" + $("div#step5 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step6");
  }