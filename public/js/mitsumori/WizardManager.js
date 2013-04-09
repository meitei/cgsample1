
  var WizardManager = function() {
    this.step = 1;
    this.mitsumoriData = {};
    this.productsData = {};
    // 見積情報保存
    this.addEstimate = function() {
      var m = $("#estimateForm").serializeArray();
      var data = {};
      $.each(m, function() {
        data[this.name] = this.value;
      });
      //console.log(data);
      this.mitsumoriData["step" + this.step] = data;
    }
  };