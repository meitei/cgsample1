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

    if (wm.mitsumoriData["COL13_1"] == "1") {

      $("input#1-COL13_1").attr("checked", true);

    } else if (wm.mitsumoriData["COL13_1"] == "2"){

      $("input#2-COL13_1").attr("checked", true);

      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#2-COL13_2").attr("checked", true);
      }

      $("input#2-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#2-COL13_5").val(wm.mitsumoriData["COL13_5"]);

    } else if (wm.mitsumoriData["COL13_1"] == "3"){

      $("input#3-COL13_1").attr("checked", true);

      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#3-COL13_2").attr("checked", true);
      }

      if (wm.mitsumoriData["COL13_3"] == "1") {
        $("input#3-1-COL13_3").attr("checked", true);
      } else if (wm.mitsumoriData["COL13_3"] == "2") {
        $("input#3-2-COL13_3").attr("checked", true);
      }

      $("input#3-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#3-COL13_5").val(wm.mitsumoriData["COL13_5"]);

    } else if (wm.mitsumoriData["COL13_1"] == "4"){

      $("input#4-COL13_1").attr("checked", true);

      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#4-COL13_2").attr("checked", true);
      }

      if (wm.mitsumoriData["COL13_3"] == "1") {
        $("input#4-1-COL13_3").attr("checked", true);
      } else if (wm.mitsumoriData["COL13_3"] == "2") {
        $("input#4-2-COL13_3").attr("checked", true);
      }

      $("input#4-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#4-COL13_5").val(wm.mitsumoriData["COL13_5"]);
    }
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

  // OP車椅子フレーム
  function wizard10d(){
    $("button.jqwizard_next").removeAttr("disabled");
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem19;

        // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL19_1"] == "1") {
      $("input#1-COL19_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_2"] == "1") {
      $("input#2-COL19_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_3"] == "1") {
      $("input#3-COL19_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_4"] == "1") {
      $("input#4-COL19_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_5"] == "1") {
      $("input#5-COL19_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_6"] == "1") {
      $("input#6-COL19_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_7"] == "1") {
      $("input#7-COL19_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_8"] == "1") {
      $("input#8-COL19_8").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_9"] == "1") {
      $("input#9-COL19_9").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_10"] == "1") {
      $("input#10-COL19_10").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_11"] == "1") {
      $("input#11-COL19_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_12"] == "1") {
      $("input#12-COL20_12").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_13"] == "1") {
      $("input#13-COL20_13").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_14"] == "1") {
      $("input#14-COL20_14").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_15"] == "1") {
      $("input#15-COL20_15").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_16"] == "1") {
      $("input#16-COL20_16").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_17"] == "1") {
      $("input#17-COL20_17").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_18"] == "1") {
      $("input#18-COL20_18").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_19"] == "1") {
      $("input#19-COL20_19").attr("checked", true);
    }
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

    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL12_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL12_1").attr("checked", true);
    }
    // 車椅子
    if(col1Value == "2"){
      $("input#2-COL12_1").attr("checked", true);
    }
    // 横渡し
    if(col1Value == "3"){
      $("input#3-COL12_1").attr("checked", true);
    }

  }