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
    // 単価を書き換え
    updateUnitPrice("step16");
    wm.submitItems[16] = submitItem17;

    if (wm.mitsumoriData["COL17_1"] == "1") {
      $("input#1-COL17_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL17_1"] == "2") {
      $("input#2-COL17_1").attr("checked", true);
    }

    if (wm.mitsumoriData["COL17_2"] == "1") {
      $("input#2-COL17_2").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_3"] == "1") {
      $("input#2-COL17_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_4"] == "1") {
      $("input#2-COL17_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_5"] == "1") {
      $("input#2-COL17_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_6"] == "1") {
      $("input#2-COL17_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_7"] == "1") {
      $("input#2-COL17_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_8"] == "1") {
      $("input#2-COL17_8").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_9"] == "1") {
      $("input#2-COL17_9").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_10"] == "1") {
      $("input#2-COL17_10").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_11"] == "1") {
      $("input#2-COL17_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_12"] == "1") {
      $("input#2-COL17_12").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_13"] == "1") {
      $("input#2-COL17_13").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_14"] == "1") {
      $("input#2-COL17_14").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_15"] == "1") {
      $("input#2-COL17_15").attr("checked", true);
    }

  }