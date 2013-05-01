  // OPオーダー座位保持装置
  function wizard15a(){
    // STEPボタンクリック
    $("li#step15").click(function() {
      wm.step = 15;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show();
      if(wm.step < wm.lastStep) {
        $("#btnEstimateRegist").hide();
      }
    });
    $("button.jqwizard_next").removeAttr("disabled");
    
    var tanka149 = getSeihinInfo("149");
    var tanka150 = getSeihinInfo("150");
    var tanka151 = getSeihinInfo("151");
    var tanka152 = getSeihinInfo("152");
    var tanka153 = getSeihinInfo("153");
    var tanka154 = getSeihinInfo("154");
    var tanka155 = getSeihinInfo("155");
    var tanka156 = getSeihinInfo("156");
    var tanka157 = getSeihinInfo("157");
    var tanka158 = getSeihinInfo("158");
    var tanka159 = getSeihinInfo("159");
    var tanka160 = getSeihinInfo("160");
    // 単価をセット
    var t = parseFloatEx(tanka149["tanka"]);
    var x = parseFloatEx(tanka149["tax"]);
    var a = parseFloatEx($("td#1-149_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#1-149_tan").text(formatComma(t));
    $("td#1-149_kin").text(formatComma(k));
    $("td#1-149_tax_v").text((x * 100) + "%");
    $("input#1-149_tax").val(formatComma(z));

    var t = parseFloatEx(tanka150["tanka"]);
    var x = parseFloatEx(tanka150["tax"]);
    var a = parseFloatEx($("td#2-150_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-150_tan").text(formatComma(t));
    $("td#2-150_kin").text(formatComma(k));
    $("td#2-150_tax_v").text((x * 100) + "%");
    $("input#2-150_tax").val(formatComma(z));

    var t = parseFloatEx(tanka151["tanka"]);
    var x = parseFloatEx(tanka151["tax"]);
    var a = parseFloatEx($("td#3-151_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-151_tan").text(formatComma(t));
    $("td#3-151_kin").text(formatComma(k));
    $("td#3-151_tax_v").text((x * 100) + "%");
    $("input#3-151_tax").val(formatComma(z));

    var t = parseFloatEx(tanka152["tanka"]);
    var x = parseFloatEx(tanka152["tax"]);
    var a = parseFloatEx($("td#4-152_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#4-152_tan").text(formatComma(t));
    $("td#4-152_tax_v").text((x * 100) + "%");
    $("td#4-152_kin").text(formatComma(k));
    $("input#4-152_tax").val(formatComma(z));

    var t = parseFloatEx(tanka153["tanka"]);
    var x = parseFloatEx(tanka153["tax"]);
    var a = parseFloatEx($("td#5-153_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#5-153_tan").text(formatComma(t));
    $("td#5-153_tax_v").text((x * 100) + "%");
    $("td#5-153_kin").text(formatComma(k));
    $("input#5-153_tax").val(formatComma(z));

    var t = parseFloatEx(tanka154["tanka"]);
    var x = parseFloatEx(tanka154["tax"]);
    var a = parseFloatEx($("td#6-154_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#6-154_tan").text(formatComma(t));
    $("td#6-154_tax_v").text((x * 100) + "%");
    $("td#6-154_kin").text(formatComma(k));
    $("input#6-154_tax").val(formatComma(z));

    var t = parseFloatEx(tanka155["tanka"]);
    var x = parseFloatEx(tanka155["tax"]);
    var a = parseFloatEx($("td#7-155_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#7-155_tan").text(formatComma(t));
    $("td#7-155_tax_v").text((x * 100) + "%");
    $("td#7-155_kin").text(formatComma(k));
    $("input#7-155_tax").val(formatComma(z));

    var t = parseFloatEx(tanka156["tanka"]);
    var x = parseFloatEx(tanka156["tax"]);
    var a = parseFloatEx($("td#8-156_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#8-156_tan").text(formatComma(t));
    $("td#8-156_tax_v").text((x * 100) + "%");
    $("td#8-156_kin").text(formatComma(k));
    $("input#8-156_tax").val(formatComma(z));

    var t = parseFloatEx(tanka157["tanka"]);
    var x = parseFloatEx(tanka157["tax"]);
    var a = parseFloatEx($("td#9-157_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#9-157_tan").text(formatComma(t));
    $("td#9-157_tax_v").text((x * 100) + "%");
    $("td#9-157_kin").text(formatComma(k));
    $("input#9-157_tax").val(formatComma(z));

    var t = parseFloatEx(tanka158["tanka"]);
    var x = parseFloatEx(tanka158["tax"]);
    var a = parseFloatEx($("td#10-158_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#10-158_tan").text(formatComma(t));
    $("td#10-158_tax_v").text((x * 100) + "%");
    $("td#10-158_kin").text(formatComma(k));
    $("input#10-158_tax").val(formatComma(z));

    var t = parseFloatEx(tanka159["tanka"]);
    var x = parseFloatEx(tanka159["tax"]);
    var a = parseFloatEx($("td#11-159_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#11-159_tan").text(formatComma(t));
    $("td#11-159_tax_v").text((x * 100) + "%");
    $("td#11-159_kin").text(formatComma(k));
    $("input#11-159_tax").val(formatComma(z));

    var t = parseFloatEx(tanka160["tanka"]);
    var x = parseFloatEx(tanka160["tax"]);
    var a = parseFloatEx($("td#12-160_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#12-160_tan").text(formatComma(t));
    $("td#12-160_tax_v").text((x * 100) + "%");
    $("td#12-160_kin").text(formatComma(k));
    $("input#12-160_tax").val(formatComma(z));

    wm.submitItems[15] = submitItem20;

    if (wm.mitsumoriData["COL20_1"] == "1") {
      $("input#1-COL20_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_2"] == "1") {
      $("input#2-COL20_2").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_3"] == "1") {
      $("input#3-COL20_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_4"] == "1") {
      $("input#4-COL20_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_5"] == "1") {
      $("input#5-COL20_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_6"] == "1") {
      $("input#6-COL20_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_7"] == "1") {
      $("input#7-COL20_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_8"] == "1") {
      $("input#8-COL20_8").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_9"] == "1") {
      $("input#9-COL20_9").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_10"] == "1") {
      $("input#10-COL20_10").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_11"] == "1") {
      $("input#11-COL20_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_12"] == "1") {
      $("input#12-COL20_12").attr("checked", true);
    }
  }

  // シートベルト
  function wizard15e(){
    // STEPボタンクリック
    $("li#step15").click(function() {
      wm.step = 15;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL16_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    $("select#2-101_su").change(function() {
      var m_tanka = getSeihinInfo("101");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-101_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-101_kin").text(formatComma(kingaku));
      $("input#2-101_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-102_su").change(function() {
      var m_tanka = getSeihinInfo("102");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-102_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-102_kin").text(formatComma(kingaku));
      $("input#2-102_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-97_su").change(function() {
      var m_tanka = getSeihinInfo("97");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-97_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-97_kin").text(formatComma(kingaku));
      $("input#2-97_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-98_su").change(function() {
      var m_tanka = getSeihinInfo("98");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-98_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-98_kin").text(formatComma(kingaku));
      $("input#2-98_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-99_su").change(function() {
      var m_tanka = getSeihinInfo("99");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-99_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-99_kin").text(formatComma(kingaku));
      $("input#2-99_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-103_su").change(function() {
      var m_tanka = getSeihinInfo("103");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-103_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-103_kin").text(formatComma(kingaku));
      $("input#2-103_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-104_su").change(function() {
      var m_tanka = getSeihinInfo("104");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-104_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-104_kin").text(formatComma(kingaku));
      $("input#2-104_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-105_su").change(function() {
      var m_tanka = getSeihinInfo("105");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-105_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-105_kin").text(formatComma(kingaku));
      $("input#2-105_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-106_su").change(function() {
      var m_tanka = getSeihinInfo("106");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-106_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-106_kin").text(formatComma(kingaku));
      $("input#2-106_tax").val(formatComma(zeigaku));
      return false;
    });
    var tanka100 = getSeihinInfo("100");
    var tanka101 = getSeihinInfo("101");
    var tanka102 = getSeihinInfo("102");
    var tanka97 = getSeihinInfo("97");
    var tanka98 = getSeihinInfo("98");
    var tanka99 = getSeihinInfo("99");
    var tanka103 = getSeihinInfo("103");
    var tanka104 = getSeihinInfo("104");
    var tanka105 = getSeihinInfo("105");
    var tanka106 = getSeihinInfo("106");
    var tanka107 = getSeihinInfo("107");
    // 単価をセット
    var t = parseFloatEx(tanka100["tanka"]);
    var x = parseFloatEx(tanka100["tax"]);
    var a = parseFloatEx($("td#2-100_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-100_tan").text(formatComma(t));
    $("td#2-100_kin").text(formatComma(k));
    $("input#2-100_tax").val(formatComma(z));

    var t = parseFloatEx(tanka101["tanka"]);
    var x = parseFloatEx(tanka101["tax"]);
    var a = parseFloatEx($("select#2-101_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-101_tan").text(formatComma(t));
    $("td#2-101_kin").text(formatComma(k));
    $("input#2-101_tax").val(formatComma(z));

    var t = parseFloatEx(tanka102["tanka"]);
    var x = parseFloatEx(tanka102["tax"]);
    var a = parseFloatEx($("select#2-102_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-102_tan").text(formatComma(t));
    $("td#2-102_kin").text(formatComma(k));
    $("input#2-102_tax").val(formatComma(z));

    var t = parseFloatEx(tanka97["tanka"]);
    var x = parseFloatEx(tanka97["tax"]);
    var a = parseFloatEx($("select#2-97_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-97_tan").text(formatComma(t));
    $("td#2-97_kin").text(formatComma(k));
    $("input#2-97_tax").val(formatComma(z));

    var t = parseFloatEx(tanka98["tanka"]);
    var x = parseFloatEx(tanka98["tax"]);
    var a = parseFloatEx($("select#2-98_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-98_tan").text(formatComma(t));
    $("td#2-98_kin").text(formatComma(k));
    $("input#2-98_tax").val(formatComma(z));

    var t = parseFloatEx(tanka99["tanka"]);
    var x = parseFloatEx(tanka99["tax"]);
    var a = parseFloatEx($("select#2-99_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-99_tan").text(formatComma(t));
    $("td#2-99_kin").text(formatComma(k));
    $("input#2-99_tax").val(formatComma(z));

    var t = parseFloatEx(tanka103["tanka"]);
    var x = parseFloatEx(tanka103["tax"]);
    var a = parseFloatEx($("select#2-103_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-103_tan").text(formatComma(t));
    $("td#2-103_kin").text(formatComma(k));
    $("input#2-103_tax").val(formatComma(z));

    var t = parseFloatEx(tanka104["tanka"]);
    var x = parseFloatEx(tanka104["tax"]);
    var a = parseFloatEx($("select#2-104_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-104_tan").text(formatComma(t));
    $("td#2-104_kin").text(formatComma(k));
    $("input#2-104_tax").val(formatComma(z));

    var t = parseFloatEx(tanka105["tanka"]);
    var x = parseFloatEx(tanka105["tax"]);
    var a = parseFloatEx($("select#2-105_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-105_tan").text(formatComma(t));
    $("td#2-105_kin").text(formatComma(k));
    $("input#2-105_tax").val(formatComma(z));

    var t = parseFloatEx(tanka106["tanka"]);
    var x = parseFloatEx(tanka106["tax"]);
    var a = parseFloatEx($("select#2-106_su").val());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-106_tan").text(formatComma(t));
    $("td#2-106_kin").text(formatComma(k));
    $("input#2-106_tax").val(formatComma(z));

    var t = parseFloatEx(tanka107["tanka"]);
    var x = parseFloatEx(tanka107["tax"]);
    var a = parseFloatEx($("td#2-107_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#2-107_tan").text(formatComma(t));
    $("td#2-107_kin").text(formatComma(k));
    $("input#2-107_tax").val(formatComma(z));

    wm.submitItems[15] = submitItem16;

    if (wm.mitsumoriData["COL16_1"] == "1") {
      $("input#1-COL16_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL16_1"] == "2"){
      $("input#2-COL16_1").attr("checked", true);
    }

    if (wm.mitsumoriData["COL16_11"] == "1"){
      $("input#2-1-COL16_11").attr("checked", true);
    } else if (wm.mitsumoriData["COL16_11"] == "2"){
      $("input#2-2-COL16_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_3"] == "1") {
      $("input#2-COL16_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_4"] == "1") {
      $("input#2-COL16_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_13"] == "1") {
      $("input#2-COL16_13").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_5"] == "1") {
      $("input#2-COL16_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_6"] == "1") {
      $("input#2-COL16_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_7"] == "1") {
      $("input#2-COL16_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_8"] == "1") {
      $("input#2-COL16_8").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_9"] == "1") {
      $("input#2-COL16_9").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_10"] == "1") {
      $("input#2-COL16_10").attr("checked", true);
    }
    if (wm.mitsumoriData["COL16_12"] == "1") {
      $("input#2-COL16_12").attr("checked", true);
    }
    $("div#step16").load("/mitsumori/step_17.html", wizard16e);
  }