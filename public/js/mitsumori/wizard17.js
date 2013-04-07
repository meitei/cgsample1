  // OPオーダー座位保持装置
  function wizard17e(){
    $("button.jqwizard_next").removeAttr("disabled");
    // 戻る
    // $("button.jqwizard_previous").click(function() {
    //   step = 16;
    //   $("div.statuslabel").html("<span>STEP 16</span>" + $("div#step16 > div#title").text());
    // });
    // 単価を書き換え
    updateUnitPrice("step17");
  }