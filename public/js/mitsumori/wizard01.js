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
        for(var i=1; i<18; i++) {
            $("li#step" + i).show();  
        }
        $("li#step3").hide();
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
        $("button#jqwizard_next").removeAttr("disabled");
      }
    });
    // 既製品選択/トイレットチェア
    $("input#2-COL1_2").change(function(){
      if($("input#3-COL1_1").attr("checked", "checked")) {
        $("div#step2").load("/mitsumori/step_24.html", wizard2h);
        $("li#step2 a").attr("href", "#step2");
        $("li#step2 span").text("トイレット");
        for(var i=1; i<18; i++) {
            $("li#step" + i).show();  
        }
        $("li#step3").hide();
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
        $("button#jqwizard_next").removeAttr("disabled");
      }
    });
    // 既製品選択/シャワーチェア
    $("input#3-COL1_2").change(function(){
      if($("input#3-COL1_1").attr("checked", "checked")) {
        $("div#step2").load("/mitsumori/step_25.html", wizard2i);
        $("li#step2 a").attr("href", "#step2");
        $("li#step2 span").text("シャワー");
        for(var i=1; i<18; i++) {
            $("li#step" + i).show();  
        }
        $("li#step3").hide();
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
        $("button#jqwizard_next").removeAttr("disabled");
      }
    });

    $("div.statuslabel").html("<span>STEP 1</span>" + $("div#step1 > div#title").text());
    $("button#jqwizard_next").attr("disabled", "disabled");
    wm.submitItems[1] = submitItem1;
  }

  function setWizard1(){
    var col1Value = wm.mitsumoriData["COL1_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // セミオーダーメイド選択
    if(col1Value == "1"){
        $("input#1-COL1_1").attr("checked", true);
      $("div#step2").load("/mitsumori/step_05.html", wizard2a);
      $("li#step2 a").attr("href", "#step2");
      $("li#step2 span").text("構造フレーム");
      //$("button#jqwizard_next").removeAttr("disabled");
    }
    // オーダーメイド選択
    if(col1Value == "2"){
      $("div#step2").load("/mitsumori/step_02.html", wizard2e);
      $("li#step2 a").attr("href", "#step2");
      $("li#step2 span").text("フレーム材質");
      //$("button#jqwizard_next").removeAttr("disabled");
    }

    $("div.statuslabel").html("<span>STEP 1</span>" + $("div#step1 > div#title").text());
    //$("button#jqwizard_next").attr("disabled", "disabled");
    //wm.submitItems[1] = submitItem1;
  }