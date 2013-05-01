  // OPオーダー座位保持装置
  function wizard17e(){
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

    wm.submitItems[17] = submitItem20;

    // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL20_1"] == "1") {
      $("input#1-COL20_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL20_2"] == "1") {
      $("input#2-COL20_1").attr("checked", true);
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