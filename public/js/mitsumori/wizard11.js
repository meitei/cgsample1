  // 上肢支持部
  function wizard11a(){
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
    updateUnitPrice("step11");
    wm.submitItems[11] = submitItem14;

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

  // OPPW
  function wizard11b(){
    $("button.jqwizard_next").removeAttr("disabled");
    // 単価を書き換え
    updateUnitPrice("step11");
    wm.submitItems[11] = submitItem18;

    if (wm.mitsumoriData["COL18_1"] == "1") {
      $("input#1-COL18_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_2"] == "1") {
      $("input#2-COL18_2").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_3"] == "1") {
      $("input#3-COL18_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_4"] == "1") {
      $("input#4-COL18_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_5"] == "1") {
      $("input#5-COL18_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_6"] == "1") {
      $("input#6-COL18_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_7"] == "1") {
      $("input#7-COL18_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL18_8"] == "1") {
      $("input#8-COL18_8").attr("checked", true);
    }

  }

  // レッグサポート
  function wizard11e(){
    //
    $("input#1-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL11_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step11");
    wm.submitItems[11] = submitItem11;

    if (wm.mitsumoriData["COL11_1"] == "1") {

      $("input#1-COL11_1").attr("checked", true);

    } else if (wm.mitsumoriData["COL11_1"] == "2"){
      
      $("input#2-COL11_1").attr("checked", true);
      
      if (wm.mitsumoriData["COL11_2"] == "1") {
        $("input#2-COL11_2").attr("checked", true);
      }

    } else if (wm.mitsumoriData["COL11_1"] == "3"){

      $("input#3-COL11_1").attr("checked", true);

      if (wm.mitsumoriData["COL11_2"] == "1") {
        $("input#3-COL11_2").attr("checked", true);
      }

    } else if (wm.mitsumoriData["COL11_1"] == "4"){

      $("input#4-COL11_1").attr("checked", true);

      if (wm.mitsumoriData["COL11_2"] == "1") {
        $("input#4-COL11_2").attr("checked", true);
      }

      $("input#4-COL11_3").val(wm.mitsumoriData["COL11_3"]);
      $("input#4-COL11_4").val(wm.mitsumoriData["COL11_4"]);

    }

  }