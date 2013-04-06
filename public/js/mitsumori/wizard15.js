  // OPオーダー座位保持装置
  function wizard15a(){
    $("button.jqwizard_next").removeAttr("disabled");
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL20_1"] = $("input[name='COL20_1']:checked").val();
      step = 16;
      $("div.statuslabel").html("<span>STEP 16</span>" + $("div#step16 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 14;
      $("div.statuslabel").html("<span>STEP 14</span>" + $("div#step14 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step15");
  }

  // シートベルト
  function wizard15e(){
    //
    $("input#1-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL16_1"] = $("input[name='COL16_1']:checked").val();
      step = 16;
      $("div.statuslabel").html("<span>STEP 16</span>" + $("div#step16 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 14;
      $("div.statuslabel").html("<span>STEP 14</span>" + $("div#step14 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step15");
  }