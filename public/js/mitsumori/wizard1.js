  // 座位保持装置の選択
  function wizard1(){
    // セミオーダーメイド選択
    $("input#1-COL1_1").click(function(){
      $("div#step2").load("/mitsumori/step_05.html", wizard2);
      $("li#step2 a").attr("href", "#step2");
      $("li#step2 span").text("構造フレーム");
    });
    // オーダーメイド選択
    $("input#2-COL1_1").click(function(){
      $("div#step2").load("/mitsumori/step_02.html", wizard2);
      $("li#step2 a").attr("href", "#step2");
      $("li#step2 span").text("フレーム材質");
    });
    // 既製品選択
    $("input#3-COL1_1").click(function(){
      $("div#step2").load("/mitsumori/step_2_b.html", wizard2);
      $("li#step2 a").attr("href", "#step2");
      $("li#step2 span").text("フレーム材質");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      step = 2;
      $("div.statuslabel span").replaceWith("<span>STEP 2</span>");
    });
  }