  // シートベルト
  function wizard13a(){
    //
    $("input#1-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step13");
    wm.submitItems[13] = submitItem16;

    if (wm.mitsumoriData["COL16_1"] == "1") {
      $("input#1-COL16_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL16_1"] == "2"){
      $("input#2-COL16_1").attr("checked", true);
    }

    if (wm.mitsumoriData["COL16_11"] == "1"){
      $("input#2-1-COL16_11").attr("checked", true);
    } else if (wm.mitsumoriData["COL16_11"] == "2"){
      $("input#2-2-COL16_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_3"] == "1") {
      $("input#2-COL16_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_4"] == "1") {
      $("input#2-COL16_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_13"] == "1") {
      $("input#2-COL16_13").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_5"] == "1") {
      $("input#2-COL16_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_6"] == "1") {
      $("input#2-COL16_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_7"] == "1") {
      $("input#2-COL16_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_8"] == "1") {
      $("input#2-COL16_8").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_9"] == "1") {
      $("input#2-COL16_9").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_10"] == "1") {
      $("input#2-COL16_10").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_12"] == "1") {
      $("input#2-COL16_12").attr("checked", true);
    }
  }

  // 上肢支持部
  function wizard13e(){
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
    // 単価を書き換え
    updateUnitPrice("step13");
    wm.submitItems[13] = submitItem14;

    if (wm.mitsumoriData["COL14_1"] == "1") {
      $("input#1-COL14_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL14_1"] == "2"){
      $("input#2-COL14_1").attr("checked", true);
      if (wm.mitsumoriData["COL14_2"] == "1") {
        $("input#2-COL14_2").attr("checked", true);
      }
    } else if (wm.mitsumoriData["COL14_1"] == "3"){
      $("input#3-COL14_1").attr("checked", true);
    }
  }