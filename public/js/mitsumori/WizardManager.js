
  var WizardManager = function() {
    // ウィザードステップ数
    this.step = 1;
    // 見積データ
    this.mitsumoriData = {};
    // 見積製品データ
    this.productsData = {};
    // メソッド情報
    this.submitItems = {};

    // 見積情報保存
    //this.addEstimate = function() {
    //   var m = $("#estimateForm").serializeArray();
    //   var data = {};
    //   $.each(m, function() {
    //     data[this.name] = this.value;
    //   });
    //   //console.log(data);
    //   this.mitsumoriData["step" + this.step] = data;
    //  return;
    //};
  };