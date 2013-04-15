  // フットサポート
  function wizard10a(){
    //
    $("input#1-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem13;
  }

  // パッド
  function wizard10b(){
    //
    $("input#1-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem17;
  }

  // OP車椅子フレーム
  function wizard10d(){
    $("button.jqwizard_next").removeAttr("disabled");
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      wm.mitsumoriData["COL19_1"] = $("input[name='COL19_1']:checked").val();
      step = 11;
      $("div.statuslabel").html("<span>STEP 11</span>" + $("div#step11 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 9;
      $("div.statuslabel").html("<span>STEP 9</span>" + $("div#step9 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem19;
  }

  // アームパッド
  function wizard10e(){
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
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem12;
  }