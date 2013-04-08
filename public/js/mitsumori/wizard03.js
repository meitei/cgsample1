  // 介護用グリップ選定
  function wizard3a(){
    //
    $("input#1-COL6_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL6_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL6_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
    WizardManager.prototype.addProduct = submitItem6;
  }

  // バックサポート選定
  function wizard3b(){
    //
    $("input#1-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
    WizardManager.prototype.addProduct = submitItem7;
  }

  // シートベルト選定
  function wizard3c(){
    //
    $("input#1-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
  }

  // バックサポート選定
  function wizard3d(){
    //
    $("input#1-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL7_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
  }

  // メインフレーム機構選定
  function wizard3e(){
    //
    $("input#1-COL3_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL3_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL3_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL3_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
    WizardManager.prototype.addProduct = submitItem3;
  }

    // オーダー対応木製
  function wizard3f(){
    //
    $("input#1-COL22_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL22_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    // 単価を書き換え
    updateUnitPrice("step3");
  }