  // 座位保持装置の選択
  function wizard1(){
    // セミオーダーメイド選択
    $("input#1-COL1_1").change(function(){
      $("div#step2").load("/mitsumori/step_05.html", wizard2a);
      $("li#step2 a").attr("href", "#step2");
      $("li#step2 span").text("構造フレーム");
      $("button#jqwizard_next").removeAttr("disabled");
    });
    // オーダーメイド選択
    $("input#2-COL1_1").change(function(){
      $("div#step2").load("/mitsumori/step_02.html", wizard2e);
      $("li#step2 a").attr("href", "#step2");
      $("li#step2 span").text("フレーム材質");
      $("button#jqwizard_next").removeAttr("disabled");
    });
    // 既製品選択/木製座位保持装置
    $("input#1-COL1_2").change(function(){
      if($("input#3-COL1_1").attr("checked", "checked")) {
        $("div#step2").load("/mitsumori/step_23.html", wizard2g);
        $("li#step2 a").attr("href", "#step2");
        $("li#step2 span").text("木製座位");
        $("button#jqwizard_next").removeAttr("disabled");
      }
    });
    // 既製品選択/トイレットチェア
    $("input#2-COL1_2").change(function(){
      if($("input#3-COL1_1").attr("checked", "checked")) {
        $("div#step2").load("/mitsumori/step_24.html", wizard2h);
        $("li#step2 a").attr("href", "#step2");
        $("li#step2 span").text("トイレット");
        $("button#jqwizard_next").removeAttr("disabled");
      }
    });
    // 既製品選択/シャワーチェア
    $("input#3-COL1_2").change(function(){
      if($("input#3-COL1_1").attr("checked", "checked")) {
        $("div#step2").load("/mitsumori/step_25.html", wizard2i);
        $("li#step2 a").attr("href", "#step2");
        $("li#step2 span").text("シャワー");
        $("button#jqwizard_next").removeAttr("disabled");
      }
    });
    // 次へ
    $("button#jqwizard_next").click(function() {
      // 見積データ保存
      mitsumoriData["COL1_1"] = $("input[name='COL1_1']:checked").val();
      mitsumoriData["COL1_2"] = $("input[name='COL1_2']:checked").val();
      step = 2;
      $("div.statuslabel").html("<span>STEP 2</span>" + $("div#step2 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
      $("button#jqwizard_previous").removeAttr("disabled");
    });

    $("div.statuslabel").html("<span>STEP 1</span>" + $("div#step1 > div#title").text());
      $("button#jqwizard_next").attr("disabled", "disabled");
  }