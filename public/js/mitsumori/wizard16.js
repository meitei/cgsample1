  // パッド
  function wizard16e(){
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
      step = 17;
      $("div.statuslabel").html("<span>STEP 17</span>" + $("div#step17 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 15;
      $("div.statuslabel").html("<span>STEP 15</span>" + $("div#step15 > div#title").text());
    });
    // 単価を書き換え
    updateUnitPrice("step16");
  }