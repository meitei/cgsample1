  // テーブル
  function wizard12a(){
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
    // $("button.jqwizard_next").click(function() {
    //   // 見積データ保存
    //   mitsumoriData["COL15_1"] = $("input[name='COL15_1']:checked").val();
    //   step = 13;
    //   $("div.statuslabel").html("<span>STEP 13</span>" + $("div#step13 > div#title").text());
    //   $("button#jqwizard_next").attr("disabled", "disabled");
    // });
    // // 戻る
    // $("button.jqwizard_previous").click(function() {
    //   step = 11;
    //   $("div.statuslabel").html("<span>STEP 11</span>" + $("div#step11 > div#title").text());
    // });
    // 単価を書き換え
    updateUnitPrice("step12");
  }

  // フットサポート
  function wizard12e(){
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
    // 次へ
    // $("button.jqwizard_next").click(function() {
    //   // 見積データ保存
    //   mitsumoriData["COL13_1"] = $("input[name='COL13_1']:checked").val();
    //   step = 13;
    //   $("div.statuslabel").html("<span>STEP 13</span>" + $("div#step13 > div#title").text());
    //   $("button#jqwizard_next").attr("disabled", "disabled");
    // });
    // // 戻る
    // $("button.jqwizard_previous").click(function() {
    //   step = 11;
    //   $("div.statuslabel").html("<span>STEP 11</span>" + $("div#step11 > div#title").text());
    // });
    // 単価を書き換え
    updateUnitPrice("step12");
  }