  /* 構造フレーム選定 */
  function wizard2a(){
    initNavi("2");
    // 固定型選択
    $("input#1-COL5_1").change(function(){
      $("div#step3").load("/mitsumori/step_06.html", wizard3a);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("グリップ");
      $("div#step4").load("/mitsumori/step_08.html", wizard4a);
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("シート");
      $("div#step5").load("/mitsumori/step_07.html", wizard5a);
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("バックサポート");
      $("div#step6").load("/mitsumori/step_09.html", wizard6a);
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("ヘッドサポート");
      $("div#step7").load("/mitsumori/step_10.html", wizard7a);
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("アームサポート");
      $("div#step8").load("/mitsumori/step_12.html", wizard8a);
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("アームパッド");
      $("div#step9").load("/mitsumori/step_11.html", wizard9a);
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("レッグサポート");
      $("div#step10").load("/mitsumori/step_13.html", wizard10a);
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("フットサポート");
      $("div#step11").load("/mitsumori/step_14.html", wizard11a);
      $("li#step11 a").attr("href", "#step11");
      $("li#step11 span").text("上肢サポート");
      $("div#step12").load("/mitsumori/step_15.html", wizard12a);
      $("li#step12 a").attr("href", "#step12");
      $("li#step12 span").text("テーブル");
      $("div#step13").load("/mitsumori/step_16.html", wizard13a);
      $("li#step13 a").attr("href", "#step13");
      $("li#step13 span").text("シートベルト");
      $("div#step14").load("/mitsumori/step_17.html", wizard14a);
      $("li#step14 a").attr("href", "#step14");
      $("li#step14 span").text("パッド");
      $("div#step15").load("/mitsumori/step_20.html", wizard15a);
      $("li#step15 a").attr("href", "#step15");
      $("li#step15 span").text("オプション");
      $("li#step16").hide();
      $("li#step17").hide();
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // リクライニング式選択
    $("input#2-COL5_1").change(function(){
      $("div#step3").load("/mitsumori/step_07.html", wizard3b);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("バックサポート");
      $("div#step4").load("/mitsumori/step_08.html", wizard4b);
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("シート");
      $("div#step5").load("/mitsumori/step_09.html", wizard5b);
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("ヘッドサポート");
      $("div#step6").load("/mitsumori/step_12.html", wizard6b);
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("アームパッド");
      $("div#step7").load("/mitsumori/step_14.html", wizard7b);
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("上肢サポート");
      $("div#step8").load("/mitsumori/step_15.html", wizard8b);
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("テーブル");
      $("div#step9").load("/mitsumori/step_16.html", wizard9b);
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("シートベルト");
      $("div#step10").load("/mitsumori/step_17.html", wizard10b);
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("パッド");
      $("div#step11").load("/mitsumori/step_18.html", wizard11b);
      $("li#step11 a").attr("href", "#step11");
      $("li#step11 span").text("オプション");
      $("li#step12").hide();
      $("li#step13").hide();
      $("li#step14").hide();
      $("li#step15").hide();
      $("li#step16").hide();
      $("li#step17").hide();
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // ティルト式選択
    $("input#3-COL5_1").change(function(){
      $("div#step3").load("/mitsumori/step_16.html", wizard3c);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("シートベルト");
      $("div#step4").load("/mitsumori/step_07.html", wizard4c);
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("パッド");
      $("div#step5").load("/mitsumori/step_04.html", wizard5c);
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("オプション");
      $("div#step6").load("/mitsumori/step_21.html", wizard6c);
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("オプション");
      $("li#step7").hide();
      $("li#step8").hide();
      $("li#step9").hide();
      $("li#step10").hide();
      $("li#step11").hide();
      $("li#step12").hide();
      $("li#step13").hide();
      $("li#step14").hide();
      $("li#step15").hide();
      $("li#step16").hide();
      $("li#step17").hide();
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // リクライニング・ティルト式選択
    $("input#4-COL5_1").change(function(){
      $("div#step3").load("/mitsumori/step_07.html", wizard3d);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("バックサポート");
      $("div#step4").load("/mitsumori/step_08.html", wizard4d);
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("シート");
      $("div#step5").load("/mitsumori/step_09.html", wizard5d);
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("ヘッドサポート");
      $("div#step6").load("/mitsumori/step_14.html", wizard6d);
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("上肢サポート");
      $("div#step7").load("/mitsumori/step_15.html", wizard7d);
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("テーブル");
      $("div#step8").load("/mitsumori/step_16.html", wizard8d);
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("シートベルト");
      $("div#step9").load("/mitsumori/step_17.html", wizard9d);
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("パッド");
      $("div#step10").load("/mitsumori/step_18.html", wizard10d);
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("オプション");
      $("li#step11").hide();
      $("li#step12").hide();
      $("li#step13").hide();
      $("li#step14").hide();
      $("li#step15").hide();
      $("li#step16").hide();
      $("li#step17").hide();
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step2");
  }

  // メインフレーム材質選定
  function wizard2e(){
    initNavi("2");
    // アルミニューム選択
    $("input#1-COL2_1").change(function(){
      $("div#step3").load("/mitsumori/step_03.html", wizard3e);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("機構");
      $("div#step4").load("/mitsumori/step_04.html", wizard4e);
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("使用場所");
      $("div#step5").load("/mitsumori/step_06.html", wizard5e);
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("グリップ");
      $("div#step6").load("/mitsumori/step_08.html", wizard6e);
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("シート");
      $("div#step7").load("/mitsumori/step_07.html", wizard7e);
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("バックサポート");
      $("div#step8").load("/mitsumori/step_09.html", wizard8e);
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("ヘッドサポート");
      $("div#step9").load("/mitsumori/step_10.html", wizard9e);
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("アームサポート");
      $("div#step10").load("/mitsumori/step_12.html", wizard10e);
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("アームパッド");
      $("div#step11").load("/mitsumori/step_11.html", wizard11e);
      $("li#step11 a").attr("href", "#step11");
      $("li#step11 span").text("レッグサポート");
      $("div#step12").load("/mitsumori/step_13.html", wizard12e);
      $("li#step12 a").attr("href", "#step12");
      $("li#step12 span").text("フットサポート");
      $("div#step13").load("/mitsumori/step_14.html", wizard13e);
      $("li#step13 a").attr("href", "#step13");
      $("li#step13 span").text("上肢サポート");
      $("div#step14").load("/mitsumori/step_15.html", wizard14e);
      $("li#step14 a").attr("href", "#step14");
      $("li#step14 span").text("テーブル");
      $("div#step15").load("/mitsumori/step_16.html", wizard15e);
      $("li#step15 a").attr("href", "#step15");
      $("li#step15 span").text("シートベルト");
      $("div#step16").load("/mitsumori/step_17.html", wizard16e);
      $("li#step16 a").attr("href", "#step16");
      $("li#step16 span").text("パッド");
      $("div#step17").load("/mitsumori/step_20.html", wizard17e);
      $("li#step17 a").attr("href", "#step17");
      $("li#step17 span").text("オプション");
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // ステンレス選択
    $("input#2-COL2_1").change(function(){
      $("div#step3").load("/mitsumori/step_03.html", wizard3e);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("機構");
      $("div#step4").load("/mitsumori/step_04.html", wizard4e);
      $("li#step4 a").attr("href", "#step4");
      $("li#step4 span").text("使用場所");
      $("div#step5").load("/mitsumori/step_06.html", wizard5e);
      $("li#step5 a").attr("href", "#step5");
      $("li#step5 span").text("グリップ");
      $("div#step6").load("/mitsumori/step_08.html", wizard6e);
      $("li#step6 a").attr("href", "#step6");
      $("li#step6 span").text("シート");
      $("div#step7").load("/mitsumori/step_07.html", wizard7e);
      $("li#step7 a").attr("href", "#step7");
      $("li#step7 span").text("バックサポート");
      $("div#step8").load("/mitsumori/step_09.html", wizard8e);
      $("li#step8 a").attr("href", "#step8");
      $("li#step8 span").text("ヘッドサポート");
      $("div#step9").load("/mitsumori/step_10.html", wizard9e);
      $("li#step9 a").attr("href", "#step9");
      $("li#step9 span").text("アームサポート");
      $("div#step10").load("/mitsumori/step_12.html", wizard10e);
      $("li#step10 a").attr("href", "#step10");
      $("li#step10 span").text("アームパッド");
      $("div#step11").load("/mitsumori/step_11.html", wizard11e);
      $("li#step11 a").attr("href", "#step11");
      $("li#step11 span").text("レッグサポート");
      $("div#step12").load("/mitsumori/step_13.html", wizard12e);
      $("li#step12 a").attr("href", "#step12");
      $("li#step12 span").text("フットサポート");
      $("div#step13").load("/mitsumori/step_14.html", wizard13e);
      $("li#step13 a").attr("href", "#step13");
      $("li#step13 span").text("上肢サポート");
      $("div#step14").load("/mitsumori/step_15.html", wizard14e);
      $("li#step14 a").attr("href", "#step14");
      $("li#step14 span").text("テーブル");
      $("div#step15").load("/mitsumori/step_16.html", wizard15e);
      $("li#step15 a").attr("href", "#step15");
      $("li#step15 span").text("シートベルト");
      $("div#step16").load("/mitsumori/step_17.html", wizard16e);
      $("li#step16 a").attr("href", "#step16");
      $("li#step16 span").text("パッド");
      $("div#step17").load("/mitsumori/step_20.html", wizard17e);
      $("li#step17 a").attr("href", "#step17");
      $("li#step17 span").text("オプション");
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 木製選択
    $("input#3-COL2_1").change(function(){
      //clearNavi("2");
      $("div#step3").load("/mitsumori/step_22.html", wizard3f);
      $("li#step3 a").attr("href", "#step3");
      $("li#step3 span").text("木製");
      $("li#step4").hide();
      $("li#step5").hide();
      $("li#step6").hide();
      $("li#step7").hide();
      $("li#step8").hide();
      $("li#step9").hide();
      $("li#step10").hide();
      $("li#step11").hide();
      $("li#step12").hide();
      $("li#step13").hide();
      $("li#step14").hide();
      $("li#step15").hide();
      $("li#step16").hide();
      $("li#step17").hide();
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step2");
  }

  // 既製品
  function wizard2g(){
    initNavi("2");
    // 単価を書き換え
    updateUnitPrice("step2");
  }