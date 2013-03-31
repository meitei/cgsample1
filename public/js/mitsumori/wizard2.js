  // メインフレーム材質選定
  function wizard2(){
    /* メインフレーム材質選定 */
    // アルミニューム選択
    $("input#1-COL2_1").click(function(){
      $("div#step3").load("/mitsumori/step_03.html", wizard3);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("機構");
      $("div#step4").load("/mitsumori/step_04.html");
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("使用場所");
      $("div#step5").load("/mitsumori/step_04.html");
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("グリップ");
      $("div#step6").load("/mitsumori/step_06.html");
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("シート");
      $("div#step7").load("/mitsumori/step_04.html");
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("バックサポート");
      $("div#step8").load("/mitsumori/step_04.html");
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("ヘッドサポート");
      $("div#step9").load("/mitsumori/step_04.html");
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("アームサポート");
      $("div#step10").load("/mitsumori/step_04.html");
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("アームパッド");
      $("div#step11").load("/mitsumori/step_04.html");
      $("li#step11 a").attr("href", "#step11");
      $("li#step11 span").text("レッグサポート");
      $("div#step12").load("/mitsumori/step_04.html");
      $("li#step12 a").attr("href", "#step12");
      $("li#step12 span").text("フットサポート");
      $("div#step13").load("/mitsumori/step_04.html");
      $("li#step13 a").attr("href", "#step13");
      $("li#step13 span").text("上肢サポート");
      $("div#step14").load("/mitsumori/step_04.html");
      $("li#step14 a").attr("href", "#step14");
      $("li#step14 span").text("テーブル");
      $("div#step15").load("/mitsumori/step_04.html");
      $("li#step15 a").attr("href", "#step15");
      $("li#step15 span").text("シートベルト");
      $("div#step16").load("/mitsumori/step_04.html");
      $("li#step16 a").attr("href", "#step16");
      $("li#step16 span").text("パッド");
      $("div#step17").load("/mitsumori/step_04.html");
      $("li#step17 a").attr("href", "#step17");
      $("li#step17 span").text("オプション");
    });
    // ステンレス選択
    $("input#2-COL2_1").click(function(){
      $("div#step3").load("/mitsumori/step_03.html", wizard3);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("機構");
      $("div#step4").load("/mitsumori/step_04.html");
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("使用場所");
      $("div#step5").load("/mitsumori/step_04.html");
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("グリップ");
      $("div#step6").load("/mitsumori/step_06.html");
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("シート");
      $("div#step7").load("/mitsumori/step_04.html");
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("バックサポート");
      $("div#step8").load("/mitsumori/step_04.html");
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("ヘッドサポート");
      $("div#step9").load("/mitsumori/step_04.html");
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("アームサポート");
      $("div#step10").load("/mitsumori/step_04.html");
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("アームパッド");
      $("div#step11").load("/mitsumori/step_04.html");
      $("li#step11 a").attr("href", "#step11");
      $("li#step11 span").text("レッグサポート");
      $("div#step12").load("/mitsumori/step_04.html");
      $("li#step12 a").attr("href", "#step12");
      $("li#step12 span").text("フットサポート");
      $("div#step13").load("/mitsumori/step_04.html");
      $("li#step13 a").attr("href", "#step13");
      $("li#step13 span").text("上肢サポート");
      $("div#step14").load("/mitsumori/step_04.html");
      $("li#step14 a").attr("href", "#step14");
      $("li#step14 span").text("テーブル");
      $("div#step15").load("/mitsumori/step_04.html");
      $("li#step15 a").attr("href", "#step15");
      $("li#step15 span").text("シートベルト");
      $("div#step16").load("/mitsumori/step_04.html");
      $("li#step16 a").attr("href", "#step16");
      $("li#step16 span").text("パッド");
      $("div#step17").load("/mitsumori/step_04.html");
      $("li#step17 a").attr("href", "#step17");
      $("li#step17 span").text("オプション");
    });
    // 木製選択
    $("input#3-COL2_1").click(function(){
      $("div#step3").load("/mitsumori/step_2_b.html");
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("木製");
    });
    /* 構造フレーム選定 */
    // 固定型選択
    $("input#1-COL5_1").click(function(){
      $("div#step3").load("/mitsumori/step_06.html", wizard3);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("グリップ");
      $("div#step4").load("/mitsumori/step_06.html");
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("シート");
      $("div#step5").load("/mitsumori/step_07.html");
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("バックサポート");
      $("div#step6").load("/mitsumori/step_04.html");
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("ヘッドサポート");
      $("div#step7").load("/mitsumori/step_04.html");
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("アームサポート");
      $("div#step8").load("/mitsumori/step_04.html");
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("アームパッド");
      $("div#step9").load("/mitsumori/step_04.html");
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("レッグサポート");
      $("div#step10").load("/mitsumori/step_04.html");
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("フットサポート");
      $("div#step11").load("/mitsumori/step_04.html");
      $("li#step11 a").attr("href", "#step11");
      $("li#step11 span").text("上肢サポート");
      $("div#step12").load("/mitsumori/step_04.html");
      $("li#step12 a").attr("href", "#step12");
      $("li#step12 span").text("テーブル");
      $("div#step13").load("/mitsumori/step_04.html");
      $("li#step13 a").attr("href", "#step13");
      $("li#step13 span").text("シートベルト");
      $("div#step14").load("/mitsumori/step_04.html");
      $("li#step14 a").attr("href", "#step14");
      $("li#step14 span").text("パッド");
      $("div#step15").load("/mitsumori/step_04.html");
      $("li#step15 a").attr("href", "#step15");
      $("li#step15 span").text("オプション");
    });
    // リクライニング式選択
    $("input#2-COL5_1").click(function(){
      $("div#step3").load("/mitsumori/step_07.html", wizard3);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("バックサポート");
      $("div#step4").load("/mitsumori/step_06.html");
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("シート");
      $("div#step5").load("/mitsumori/step_04.html");
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("ヘッドサポート");
      $("div#step6").load("/mitsumori/step_04.html");
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("アームパッド");
      $("div#step7").load("/mitsumori/step_04.html");
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("上肢サポート");
      $("div#step8").load("/mitsumori/step_04.html");
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("テーブル");
      $("div#step9").load("/mitsumori/step_04.html");
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("シートベルト");
      $("div#step10").load("/mitsumori/step_04.html");
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("パッド");
      $("div#step11").load("/mitsumori/step_04.html");
      $("li#step11 a").attr("href", "#step11");
      $("li#step11 span").text("オプション");
    });
    // ティルト式選択
    $("input#3-COL5_1").click(function(){
      $("div#step3").load("/mitsumori/step_2_b.html", wizard3);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("シートベルト");
      $("div#step4").load("/mitsumori/step_04.html");
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("パッド");
      $("div#step5").load("/mitsumori/step_04.html");
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("オプション");
      $("div#step6").load("/mitsumori/step_04.html");
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("オプション");
    });
    // リクライニング・ティルト式選択
    $("input#4-COL5_1").click(function(){
      $("div#step3").load("/mitsumori/step_07.html", wizard3);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("バックサポート");
      $("div#step4").load("/mitsumori/step_06.html");
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("シート");
      $("div#step5").load("/mitsumori/step_04.html");
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("ヘッドサポート");
      $("div#step6").load("/mitsumori/step_04.html");
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("上肢サポート");
      $("div#step7").load("/mitsumori/step_04.html");
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("テーブル");
      $("div#step8").load("/mitsumori/step_04.html");
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("シートベルト");
      $("div#step9").load("/mitsumori/step_04.html");
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("パッド");
      $("div#step10").load("/mitsumori/step_04.html");
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("オプション");
    });
    // 次へ
    $("button.jqwizard_next").click(function() {
      step = 3;
      $("div.statuslabel span").replaceWith("<span>STEP 3</span>");
    });
    // 戻る
    $("button.jqwizard_previous").click(function() {
      step = 1;
      $("div.statuslabel span").replaceWith("<span>STEP 1</span>");
    });
  }