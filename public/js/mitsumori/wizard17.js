  // OPオーダー座位保持装置
  function wizard17e(){
    $("button.jqwizard_next").removeAttr("disabled");
    // 単価を書き換え
    updateUnitPrice("step17");
    wm.submitItems[17] = submitItem20;

    // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL20_1"] == "1") {
      $("input#1-COL20_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_2"] == "1") {
      $("input#2-COL20_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_3"] == "1") {
      $("input#3-COL20_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_4"] == "1") {
      $("input#4-COL20_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_5"] == "1") {
      $("input#5-COL20_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_6"] == "1") {
      $("input#6-COL20_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_7"] == "1") {
      $("input#7-COL20_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_8"] == "1") {
      $("input#8-COL20_8").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_9"] == "1") {
      $("input#9-COL20_9").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_10"] == "1") {
      $("input#10-COL20_10").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_11"] == "1") {
      $("input#11-COL20_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_12"] == "1") {
      $("input#12-COL20_12").attr("checked", true);
    }
  }