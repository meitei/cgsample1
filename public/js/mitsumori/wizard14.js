  // パッド
  function wizard14a(){
    // STEPボタンクリック
    $("li#step14").click(function() {
      if ($("li#step14").hasClass('jqwizard_current')) {
        wm.step = 14;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show();
        if(wm.step < wm.lastStep) {
          $("#btnEstimateRegist").hide();
        }
      }
    });
    //
    $("input#1-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });

    // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL17_1"] == "1") {
      $("input#1-COL17_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL17_1"] == "2") {
      $("input#2-COL17_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_2"] == "1") {
      $("input#2-COL17_2").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(113);
      if(seihin != undefined) { $("select#2-113_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_3"] == "1") {
      $("input#2-COL17_3").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(115);
      if(seihin != undefined) { $("select#2-115_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_4"] == "1") {
      $("input#2-COL17_4").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(108);
      if(seihin != undefined) { $("select#2-108_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_5"] == "1") {
      $("input#2-COL17_5").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(109);
      if(seihin != undefined) { $("select#2-109_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_6"] == "1") {
      $("input#2-COL17_6").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(110);
      if(seihin != undefined) { $("select#2-110_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_7"] == "1") {
      $("input#2-COL17_7").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(111);
      if(seihin != undefined) { $("select#2-111_su").val(seihin["suryo"]); }
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
      // コンボボックス
      var seihin = getProduct(118);
      if(seihin != undefined) { $("select#2-118_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_13"] == "1") {
      $("input#2-COL17_13").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(119);
      if(seihin != undefined) { $("select#2-119_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_14"] == "1") {
      $("input#2-COL17_14").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(120);
      if(seihin != undefined) { $("select#2-120_su").val(seihin["suryo"]); }
    }
    if (wm.mitsumoriData["COL17_15"] == "1") {
      $("input#2-COL17_15").attr("checked", true);
      // コンボボックス
      var seihin = getProduct(121);
      if(seihin != undefined) { $("select#2-121_su").val(seihin["suryo"]); }
    }

    $("select#2-113_su").change(function() {
      var m_tanka = getSeihinInfo("113");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-113_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-113_kin").text(formatComma(kingaku));
      $("input#2-113_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-115_su").change(function() {
      var m_tanka = getSeihinInfo("115");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-115_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-115_kin").text(formatComma(kingaku));
      $("input#2-115_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-108_su").change(function() {
      var m_tanka = getSeihinInfo("108");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-108_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-108_kin").text(formatComma(kingaku));
      $("input#2-108_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-109_su").change(function() {
      var m_tanka = getSeihinInfo("109");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-109_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-109_kin").text(formatComma(kingaku));
      $("input#2-109_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-110_su").change(function() {
      var m_tanka = getSeihinInfo("110");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-110_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-110_kin").text(formatComma(kingaku));
      $("input#2-110_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-111_su").change(function() {
      var m_tanka = getSeihinInfo("111");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-111_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-111_kin").text(formatComma(kingaku));
      $("input#2-111_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-118_su").change(function() {
      var m_tanka = getSeihinInfo("118");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-118_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-118_kin").text(formatComma(kingaku));
      $("input#2-118_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-119_su").change(function() {
      var m_tanka = getSeihinInfo("119");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-119_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-119_kin").text(formatComma(kingaku));
      $("input#2-119_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-120_su").change(function() {
      var m_tanka = getSeihinInfo("120");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-120_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-120_kin").text(formatComma(kingaku));
      $("input#2-120_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-121_su").change(function() {
      var m_tanka = getSeihinInfo("121");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-121_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-121_kin").text(formatComma(kingaku));
      $("input#2-121_tax").val(formatComma(zeigaku));
      return false;
    });
    var tanka113 = getSeihinInfo("113");
    var tanka115 = getSeihinInfo("115");
    var tanka108 = getSeihinInfo("108");
    var tanka109 = getSeihinInfo("109");
    var tanka110 = getSeihinInfo("110");
    var tanka111 = getSeihinInfo("111");
    var tanka112 = getSeihinInfo("112");
    var tanka114 = getSeihinInfo("114");
    var tanka116 = getSeihinInfo("116");
    var tanka117 = getSeihinInfo("117");
    var tanka118 = getSeihinInfo("118");
    var tanka119 = getSeihinInfo("119");
    var tanka120 = getSeihinInfo("120");
    var tanka121 = getSeihinInfo("121");
    // 単価をセット
    var t = parseFloatEx(tanka113["tanka"]);
    var x = parseFloatEx(tanka113["tax"]);
    var a = parseFloatEx($("select#2-113_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-113_tan").text(formatComma(t));
    $("td#2-113_kin").text(formatComma(k));
    $("input#2-113_tax").val(formatComma(z));

    var t = parseFloatEx(tanka115["tanka"]);
    var x = parseFloatEx(tanka115["tax"]);
    var a = parseFloatEx($("select#2-115_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-115_tan").text(formatComma(t));
    $("td#2-115_kin").text(formatComma(k));
    $("input#2-115_tax").val(formatComma(z));

    var t = parseFloatEx(tanka108["tanka"]);
    var x = parseFloatEx(tanka108["tax"]);
    var a = parseFloatEx($("select#2-108_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-108_tan").text(formatComma(t));
    $("td#2-108_kin").text(formatComma(k));
    $("input#2-108_tax").val(formatComma(z));

    var t = parseFloatEx(tanka109["tanka"]);
    var x = parseFloatEx(tanka109["tax"]);
    var a = parseFloatEx($("select#2-109_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-109_tan").text(formatComma(t));
    $("td#2-109_kin").text(formatComma(k));
    $("input#2-109_tax").val(formatComma(z));

    var t = parseFloatEx(tanka110["tanka"]);
    var x = parseFloatEx(tanka110["tax"]);
    var a = parseFloatEx($("select#2-110_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-110_tan").text(formatComma(t));
    $("td#2-110_kin").text(formatComma(k));
    $("input#2-110_tax").val(formatComma(z));

    var t = parseFloatEx(tanka111["tanka"]);
    var x = parseFloatEx(tanka111["tax"]);
    var a = parseFloatEx($("select#2-111_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-111_tan").text(formatComma(t));
    $("td#2-111_kin").text(formatComma(k));
    $("input#2-111_tax").val(formatComma(z));

    var t = parseFloatEx(tanka112["tanka"]);
    var x = parseFloatEx(tanka112["tax"]);
    var a = parseFloatEx($("td#2-112_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-112_tan").text(formatComma(t));
    $("td#2-112_kin").text(formatComma(k));
    $("input#2-112_tax").val(formatComma(z));

    var t = parseFloatEx(tanka114["tanka"]);
    var x = parseFloatEx(tanka114["tax"]);
    var a = parseFloatEx($("td#2-114_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-114_tan").text(formatComma(t));
    $("td#2-114_kin").text(formatComma(k));
    $("input#2-114_tax").val(formatComma(z));

    var t = parseFloatEx(tanka116["tanka"]);
    var x = parseFloatEx(tanka116["tax"]);
    var a = parseFloatEx($("td#2-116_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-116_tan").text(formatComma(t));
    $("td#2-116_kin").text(formatComma(k));
    $("input#2-116_tax").val(formatComma(z));

    var t = parseFloatEx(tanka117["tanka"]);
    var x = parseFloatEx(tanka117["tax"]);
    var a = parseFloatEx($("td#2-117_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-117_tan").text(formatComma(t));
    $("td#2-117_kin").text(formatComma(k));
    $("input#2-117_tax").val(formatComma(z));

    var t = parseFloatEx(tanka118["tanka"]);
    var x = parseFloatEx(tanka118["tax"]);
    var a = parseFloatEx($("select#2-118_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-118_tan").text(formatComma(t));
    $("td#2-118_kin").text(formatComma(k));
    $("input#2-118_tax").val(formatComma(z));

    var t = parseFloatEx(tanka119["tanka"]);
    var x = parseFloatEx(tanka119["tax"]);
    var a = parseFloatEx($("select#2-119_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-119_tan").text(formatComma(t));
    $("td#2-119_kin").text(formatComma(k));
    $("input#2-119_tax").val(formatComma(z));

    var t = parseFloatEx(tanka120["tanka"]);
    var x = parseFloatEx(tanka120["tax"]);
    var a = parseFloatEx($("select#2-120_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-120_tan").text(formatComma(t));
    $("td#2-120_kin").text(formatComma(k));
    $("input#2-120_tax").val(formatComma(z));

    var t = parseFloatEx(tanka121["tanka"]);
    var x = parseFloatEx(tanka121["tax"]);
    var a = parseFloatEx($("select#2-121_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-121_tan").text(formatComma(t));
    $("td#2-121_kin").text(formatComma(k));
    $("input#2-121_tax").val(formatComma(z));
    
    wm.submitItems[14] = submitItem17;

    $("div#step15").load("/mitsumori/step_20.html", wizard15a);
  }

  // テーブル
  function wizard14e(){
    // STEPボタンクリック
    $("li#step14").click(function() {
      if ($("li#step14").hasClass('jqwizard_current')) {
        wm.step = 14;
        $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
        $("button#jqwizard_previous").show();
        $("button#jqwizard_next").show(); 
      }
    });
    //
    $("input#1-COL15_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL15_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL15_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL15_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    var tanka94 = getSeihinInfo("94");
    var tanka95 = getSeihinInfo("95");
    var tanka96 = getSeihinInfo("96");
    // 単価をセット
    var t = parseFloatEx(tanka94["tanka"]);
    var x = parseFloatEx(tanka94["tax"]);
    var a = parseFloatEx($("td#2-94_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-94_tan").text(formatComma(t));
    $("td#2-94_kin").text(formatComma(k));
    $("input#2-94_tax").val(formatComma(z));

    var t = parseFloatEx(tanka94["tanka"]);
    var x = parseFloatEx(tanka94["tax"]);
    var a = parseFloatEx($("td#3-94_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-94_tan").text(formatComma(t));
    $("td#3-94_kin").text(formatComma(k));
    $("input#3-94_tax").val(formatComma(z));

    var t = parseFloatEx(tanka95["tanka"]);
    var x = parseFloatEx(tanka95["tax"]);
    var a = parseFloatEx($("td#3-95_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-95_tan").text(formatComma(t));
    $("td#3-95_kin").text(formatComma(k));
    $("input#3-95_tax").val(formatComma(z));

    var t = parseFloatEx(tanka94["tanka"]);
    var x = parseFloatEx(tanka94["tax"]);
    var a = parseFloatEx($("td#4-94_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-94_tan").text(formatComma(t));
    $("td#4-94_kin").text(formatComma(k));
    $("input#4-94_tax").val(formatComma(z));

    var t = parseFloatEx(tanka95["tanka"]);
    var x = parseFloatEx(tanka95["tax"]);
    var a = parseFloatEx($("td#4-95_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-95_tan").text(formatComma(t));
    $("td#4-95_kin").text(formatComma(k));
    $("input#4-95_tax").val(formatComma(z));

    var t = parseFloatEx(tanka96["tanka"]);
    var x = parseFloatEx(tanka96["tax"]);
    var a = parseFloatEx($("td#4-96_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-96_tan").text(formatComma(t));
    $("td#4-96_kin").text(formatComma(k));
    $("input#4-96_tax").val(formatComma(z));

    wm.submitItems[14] = submitItem15;

    if (wm.mitsumoriData["COL15_1"] == "1"){
      $("input#1-COL15_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL15_1"] == "2"){
      $("input#2-COL15_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL15_1"] == "3"){
      $("input#3-COL15_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL15_1"] == "4"){
      $("input#4-COL15_1").attr("checked", true);
    }
    $("div#step15").load("/mitsumori/step_16.html", wizard15e);
  }