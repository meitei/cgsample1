  // フットサポート
  function wizard10a(){
    // STEPボタンクリック
    $("li#step10").click(function() {
      wm.step = 10;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#4-COL13_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    $("select#2-81_su").change(function() {
      var m_tanka = getSeihinInfo("81");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-81_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-81_kin").text(formatComma(kingaku));
      $("input#2-81_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-82_su").change(function() {
      var m_tanka = getSeihinInfo("82");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-82_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-82_kin").text(formatComma(kingaku));
      $("input#2-82_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-83_su").change(function() {
      var m_tanka = getSeihinInfo("83");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-83_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-83_kin").text(formatComma(kingaku));
      $("input#2-83_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-85_su").change(function() {
      var m_tanka = getSeihinInfo("85");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-85_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-85_kin").text(formatComma(kingaku));
      $("input#2-85_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#2-86_su").change(function() {
      var m_tanka = getSeihinInfo("86");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-86_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#2-86_kin").text(formatComma(kingaku));
      $("input#2-86_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-81_su").change(function() {
      var m_tanka = getSeihinInfo("81");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-81_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-81_kin").text(formatComma(kingaku));
      $("input#3-81_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-87_su").change(function() {
      var m_tanka = getSeihinInfo("87");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#3-87_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-87_kin").text(formatComma(kingaku));
      $("input#3-87_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-83_su").change(function() {
      var m_tanka = getSeihinInfo("83");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-83_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-83_kin").text(formatComma(kingaku));
      $("input#3-83_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-85_su").change(function() {
      var m_tanka = getSeihinInfo("85");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-85_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-85_kin").text(formatComma(kingaku));
      $("input#3-85_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#3-86_su").change(function() {
      var m_tanka = getSeihinInfo("86");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#2-86_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#3-86_kin").text(formatComma(kingaku));
      $("input#3-86_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-81_su").change(function() {
      var m_tanka = getSeihinInfo("81");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-81_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-81_kin").text(formatComma(kingaku));
      $("input#4-81_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-82_su").change(function() {
      var m_tanka = getSeihinInfo("82");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-82_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-82_kin").text(formatComma(kingaku));
      $("input#4-82_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-83_su").change(function() {
      var m_tanka = getSeihinInfo("83");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-83_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-83_kin").text(formatComma(kingaku));
      $("input#4-83_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-85_su").change(function() {
      var m_tanka = getSeihinInfo("85");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-85_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-85_kin").text(formatComma(kingaku));
      $("input#4-85_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-86_su").change(function() {
      var m_tanka = getSeihinInfo("86");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-86_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-86_kin").text(formatComma(kingaku));
      $("input#4-86_tax").val(formatComma(zeigaku));
      return false;
    });
    $("select#4-88_su").change(function() {
      var m_tanka = getSeihinInfo("88");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#4-88_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#4-88_kin").text(formatComma(kingaku));
      $("input#4-88_tax").val(formatComma(zeigaku));
      return false;
    });
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem13;

    if (wm.mitsumoriData["COL13_1"] == "1") {

      $("input#1-COL13_1").attr("checked", true);

    } else if (wm.mitsumoriData["COL13_1"] == "2"){

      $("input#2-COL13_1").attr("checked", true);

      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#2-COL13_2").attr("checked", true);
      }

      $("input#2-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#2-COL13_5").val(wm.mitsumoriData["COL13_5"]);

    } else if (wm.mitsumoriData["COL13_1"] == "3"){

      $("input#3-COL13_1").attr("checked", true);

      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#3-COL13_2").attr("checked", true);
      }

      if (wm.mitsumoriData["COL13_3"] == "1") {
        $("input#3-1-COL13_3").attr("checked", true);
      } else if (wm.mitsumoriData["COL13_3"] == "2") {
        $("input#3-2-COL13_3").attr("checked", true);
      }

      $("input#3-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#3-COL13_5").val(wm.mitsumoriData["COL13_5"]);

    } else if (wm.mitsumoriData["COL13_1"] == "4"){

      $("input#4-COL13_1").attr("checked", true);

      if (wm.mitsumoriData["COL13_2"] == "1") {
        $("input#4-COL13_2").attr("checked", true);
      }

      if (wm.mitsumoriData["COL13_3"] == "1") {
        $("input#4-1-COL13_3").attr("checked", true);
      } else if (wm.mitsumoriData["COL13_3"] == "2") {
        $("input#4-2-COL13_3").attr("checked", true);
      }

      $("input#4-COL13_4").val(wm.mitsumoriData["COL13_4"]);
      $("input#4-COL13_5").val(wm.mitsumoriData["COL13_5"]);
    }
    $("div#step11").load("/mitsumori/step_14.html", wizard11a);
  }

  // パッド
  function wizard10b(){
    // STEPボタンクリック
    $("li#step10").click(function() {
      wm.step = 10;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL17_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
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
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem17;

        if (wm.mitsumoriData["COL17_1"] == "1") {
      $("input#1-COL17_1").attr("checked", true);
    } else if (wm.mitsumoriData["COL17_1"] == "2") {
      $("input#2-COL17_1").attr("checked", true);
    }

    if (wm.mitsumoriData["COL17_2"] == "1") {
      $("input#2-COL17_2").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_3"] == "1") {
      $("input#2-COL17_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_4"] == "1") {
      $("input#2-COL17_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_5"] == "1") {
      $("input#2-COL17_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_6"] == "1") {
      $("input#2-COL17_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_7"] == "1") {
      $("input#2-COL17_7").attr("checked", true);
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
    }
    if (wm.mitsumoriData["COL17_13"] == "1") {
      $("input#2-COL17_13").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_14"] == "1") {
      $("input#2-COL17_14").attr("checked", true);
    }
    if (wm.mitsumoriData["COL17_15"] == "1") {
      $("input#2-COL17_15").attr("checked", true);
    }
    $("div#step11").load("/mitsumori/step_18.html", wizard11b);
  }

  // OP車椅子フレーム
  function wizard10d(){
    // STEPボタンクリック
    $("li#step10").click(function() {
      wm.step = 10;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });

    $("select#7-136_su").change(function() {
      var m_tanka = getSeihinInfo("136");
      var tanka = parseFloatEx(m_tanka["tanka"]);
      var tax = parseFloatEx(m_tanka["tax"]);
      var amount = parseFloatEx($("select#7-136_su").val());
      var kingaku = tanka * amount;
      var zeigaku = getFormatAmount(kingaku * tax, 1, 0);
      $("td#7-136_kin").text(formatComma(kingaku));
      $("input#7-136_tax").val(formatComma(zeigaku));
      return false;
    });

    $("button.jqwizard_next").removeAttr("disabled");
    // 単価を書き換え
    updateUnitPrice("step10");
    wm.submitItems[10] = submitItem19;

        // 更新時、DBの値をセット
    if (wm.mitsumoriData["COL19_1"] == "1") {
      $("input#1-COL19_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_2"] == "1") {
      $("input#2-COL19_1").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_3"] == "1") {
      $("input#3-COL19_3").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_4"] == "1") {
      $("input#4-COL19_4").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_5"] == "1") {
      $("input#5-COL19_5").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_6"] == "1") {
      $("input#6-COL19_6").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_7"] == "1") {
      $("input#7-COL19_7").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_8"] == "1") {
      $("input#8-COL19_8").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_9"] == "1") {
      $("input#9-COL19_9").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_10"] == "1") {
      $("input#10-COL19_10").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_11"] == "1") {
      $("input#11-COL19_11").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_12"] == "1") {
      $("input#12-COL20_12").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_13"] == "1") {
      $("input#13-COL20_13").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_14"] == "1") {
      $("input#14-COL20_14").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_15"] == "1") {
      $("input#15-COL20_15").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_16"] == "1") {
      $("input#16-COL20_16").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_17"] == "1") {
      $("input#17-COL20_17").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_18"] == "1") {
      $("input#18-COL20_18").attr("checked", true);
    }
    if (wm.mitsumoriData["COL19_19"] == "1") {
      $("input#19-COL20_19").attr("checked", true);
    }
  }

  // アームパッド
  function wizard10e(){
    // STEPボタンクリック
    $("li#step10").click(function() {
      wm.step = 10;
      $("div.statuslabel").html("<span>STEP " + wm.step + "</span>" + $("div#step" + wm.step + " > div#title").text());
      $("button#jqwizard_previous").show();
      $("button#jqwizard_next").show(); 
    });
    //
    $("input#1-COL12_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#2-COL12_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    //
    $("input#3-COL12_1").click(function(){
      $("button.jqwizard_next").removeAttr("disabled");
    });
    var tanka80 = getSeihinInfo("80");
    // 単価をセット
    var t = parseFloatEx(tanka80["tanka"]);
    var x = parseFloatEx(tanka80["tax"]);
    var a = parseFloatEx($("td#3-80_su").text());
    var k = t * a;
    var z = getFormatAmount(k * x, 1, 0);
    $("td#3-80_tan").text(formatComma(t));
    $("td#3-80_kin").text(formatComma(k));
    $("input#3-80_tax").val(formatComma(z));

    wm.submitItems[10] = submitItem12;

    // 更新時、DBの値をセット
    var col1Value = wm.mitsumoriData["COL12_1"];
    //$("input[name='COL1_1']").val(col1Value);
    // 不要
    if(col1Value == "1"){
      $("input#1-COL12_1").attr("checked", true);
    }
    // 車椅子
    if(col1Value == "2"){
      $("input#2-COL12_1").attr("checked", true);
    }
    // 横渡し
    if(col1Value == "3"){
      $("input#3-COL12_1").attr("checked", true);
    }
    $("div#step11").load("/mitsumori/step_11.html", wizard11e);
  }