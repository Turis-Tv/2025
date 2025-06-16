var $bz;
if (window.jQuery === undefined) {
  var script_tag = document.createElement('script');
  script_tag.setAttribute("type", "text/javascript");
  script_tag.async = true;
  script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js");
  if (script_tag.readyState) {
    script_tag.onreadystatechange = function() {
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        BZscriptLoadHandler();
      }
    }
    ;
  } else {
    script_tag.onload = BZscriptLoadHandler;
  }
  (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
  console.log("jQuery already!")
  jQuery = window.jQuery;
  BZscriptLoadHandler();
}
function BZscriptLoadHandler() {
  $bz = window.jQuery
  BZroll()
}
function BZrollEX(inf) {
  if (window.io == undefined) {
    $bz("script[api='livescore']").not(':first').remove();
    socketiojs = "https://livescorebz.r.worldssl.net/socket.io.min.js"
    socketiojs = "https://www.score2live.net:1998/socket.io/socket.io.js"
    socketiojs='https://socketns.livescore.bz:1998/socket.io/socket.io.js';
    $bz.getScript(socketiojs, function(data, textStatus, jqxhr) {
      console.log(data);
      console.log(textStatus);
      console.log(jqxhr.status);
      console.log("Load was performed.");
      BZrollN()
    });
  }
}
function BZroll(inf) {
  socketiojs = "https://livescorebz.r.worldssl.net/socket.io.min.js"
  socketiojs = "https://www.score2live.net:1998/socket.io/socket.io.js"
  socketiojs='https://socketns.livescore.bz:1998/socket.io/socket.io.js';
  var asS = document.createElement('script');
  asS.type = 'text/javascript';
  asS.async = true;
  asS.src = socketiojs;
  var sSs = document.getElementsByTagName('script')[0];
  sSs.parentNode.insertBefore(asS, sSs);
  asS.onload = function() {
    console.log("Load was performed!");
    BZrollN()
  }
}
var BZsocket;
var BZcback;
var BZddd = new Date();
var BZnnn = BZddd.getTimezoneOffset();
var BZgmtdif = 0;
var bz_lang = "en"
if (typeof bz_main_color == "undefined") {
  bz_main_color = "#000000"
}
if (typeof fm_inf_1 == "undefined") {
  fm_inf_1 = "sans-serif"
}
if (typeof fs_inf_1 == "undefined") {
  fs_inf_1 = "11px"
}
if (typeof clr_inf_1 == "undefined") {
  clr_inf_1 = "#FF0000"
}
if (typeof fw_inf_1 == "undefined") {
  fw_inf_1 = "bold"
}
if (typeof fw_inf_2 == "undefined") {
  fw_inf_2 = "bold"
}
if (typeof fw_inf_3 == "undefined") {
  fw_inf_3 = "bold"
}
if (typeof pd_inf_league == "undefined") {
  pd_inf_league = "3px"
}
if (typeof pd_inf_matches == "undefined") {
  pd_inf_matches = "3px"
}
if (typeof tr_odd == "undefined") {
  tr_odd = "rgba(242, 242, 242, 0.70)"
}
if (typeof tr_even == "undefined") {
  tr_even = "rgba(232, 232, 232, 0.84)"
}
if (typeof tr_leagueHeader_bg == "undefined") {
  tr_leagueHeader_bg = "#6d6d6d"
}
if (typeof tr_leagueHeader_color == "undefined") {
  tr_leagueHeader_color = "#fff"
}
if (typeof tr_dateHeader_bg == "undefined") {
  tr_dateHeader_bg = "#fff"
}
if (typeof tr_dateHeader_color == "undefined") {
  tr_dateHeader_color = "#000"
}
if (typeof tr_match_hover == "undefined") {
  tr_match_hover = "#e3fbcc"
}
if (typeof match_events_bg == "undefined") {
  match_events_bg = "#eef4e8"
}
if (typeof match_events_color == "undefined") {
  match_events_color = bz_main_color
}
if (typeof match_goal_bg == "undefined") {
  match_goal_bg = "#C8FF91"
}
if (typeof match_goal_color == "undefined") {
  match_goal_color = "#000000"
}
if (typeof match_redcard_bg == "undefined") {
  match_redcard_bg = "#FFFFB5"
}
if (typeof match_redcard_color == "undefined") {
  match_redcard_color = "#FF0000"
}
if (typeof match_goal_high_bg == "undefined") {
  match_goal_high_bg = "#FFFFB5"
}
var bz_style = "<style>"
bz_style += "#BZscoresScreen {color: " + bz_main_color + " }"
bz_style += "#BZscoresScreen tr td.data-score a {text-decoration:none;color:" + bz_main_color + ";white-space:nowrap}"
bz_style += "#BZscoresScreen #sht {white-space:nowrap}"
bz_style += "#BZscoresScreen tr.BZlive td.data-status,#BZscoresScreen tr.BZlive td.data-score,#BZscoresScreen tr.BZlive td.data-score a {color: " + clr_inf_1 + " }"
bz_style += "#BZscoresScreen tr td.data-score {font-weight: " + fw_inf_1 + " }"
bz_style += "#BZscoresScreen tr.TRodd {background-color: " + tr_odd + " }"
bz_style += "#BZscoresScreen tr.TReven {background-color: " + tr_even + " }"
bz_style += "#BZscoresScreen tr.TRodd,#BZscoresScreen tr.TReven {cursor:pointer;}"
bz_style += "#BZscoresScreen tr.TRodd:hover,#BZscoresScreen tr.TReven:hover {background-color:" + tr_match_hover + ";}"
bz_style += "#BZscoresScreen tr.TRleagueHeader td {background-color: " + tr_leagueHeader_bg + ";color:" + tr_leagueHeader_color + " }"
bz_style += "#BZscoresScreen tr.TRleagueHeader td a {color:" + tr_leagueHeader_color + ";text-decoration:none;cursor:default;}"
bz_style += "#BZscoresScreen tr.TRdateHeader td {background-color: " + tr_dateHeader_bg + ";color:" + tr_dateHeader_color + " }"
bz_style += "#BZscoresScreen tr.TRdateHeader td a {color:" + tr_dateHeader_color + ";text-decoration:none;cursor:default; }"
bz_style += "#BZscoresScreen tr.TRodd td,#BZscoresScreen tr.TReven td {padding:" + pd_inf_matches + " }"
bz_style += "#BZscoresScreen .detaytablex {background-color: " + match_events_bg + ";color:" + match_events_color + " }"
bz_style += "#BZscoresScreen td.det table td {padding:" + pd_inf_matches + " }"
bz_style += "#BZscoresScreen tr td.leagueHeader {font-weight: " + fw_inf_2 + " }"
bz_style += "#BZscoresScreen tr td.dateHeader {font-weight: " + fw_inf_3 + " }"
bz_style += "#BZscoresScreen tr td.leagueHeader,#BZscoresScreen tr td.dateHeader {padding: " + pd_inf_league + "}"
bz_style += "#BZscoresScreen {font-family: " + fm_inf_1 + ";font-size:" + fs_inf_1 + " }"
bz_style += "#BZscoresScreen td.gooll {background-color: " + match_goal_bg + ";color:" + match_goal_color + ";background-image:url(https://livescorebz.r.worldssl.net/loadim5.GIF);    background-repeat: no-repeat;background-size:12px 12px;/**background-color:#FFFFB5;**/}"
bz_style += "#BZscoresScreen td.BZhomeTeam {background-position:left 10px center;}"
bz_style += "#BZscoresScreen td.BZawayTeam {background-position:right 10px center;}"
bz_style += "#BZscoresScreen td.goollhigh {background-color: " + match_goal_high_bg + "}"
bz_style += "#BZscoresScreen td sup {color:" + match_redcard_color + ";font-weight:bold;padding-left:3px;padding-right:3px;position: relative;top:-0.23em;   vertical-align: baseline;}"
bz_style += "#BZscoresScreen td.kirmizikart {background-color: " + match_redcard_bg + ";background-image:url(https://www.livescore.bz/kirmizikart.GIF);background-repeat: no-repeat;background-size:6px 9px;}"
bz_style += "</style>"
if (BZnnn != 0) {
  BZgmtdif = BZnnn / 60 * -1
}
Date.prototype.BZgmtfix = function() {
  this.setTime(this.getTime() + (BZgmtdif * 60 * 60 * 1000));
  return this;
}
function BZgmtfonk(a) {
  aps = a.split(" ");
  aps1 = aps[0].split("/");
  aps2 = aps[1].split(":")
  var BZd2 = new Date(aps1[2],(aps1[1] - 1),aps1[0],aps2[0],aps2[1],0,0);
  BZd2.BZgmtfix();
  tmptar3 = dbc(BZd2.getDate()) + "/" + dbc(BZd2.getMonth() + 1) + "/" + dbc(BZd2.getFullYear());
  tmptar2 = dbc(BZd2.getHours()) + ":" + dbc(BZd2.getMinutes());
  return tmptar3 + " " + tmptar2
}
function dbc(a) {
  if (a < 10) {
    a = "0" + a
  }
  return a;
}
var updateno = 0;
var bz_lang_root = "en"
function BZrollN() {
  BZcback = $bz("script[api='livescore']").attr("callback");
  if (BZcback == undefined || BZcback == "") {
    BZcback = "BZbuildAuto"
  }
  var BZurlx = 'https://socketns.livescore.bz:1998'//'https://www.score2live.net:1998';
  var BZoptionsx = {
    'reconnect': true,
    'reconnection delay': 500,
    'max reconnection attempts': '20',
    secure: true
  }
  BZsocket = io.connect(BZurlx, BZoptionsx);
  BZsocket.heartbeatTimeout = 15000
  BZsocket.on("connect", function() {
    console.log("connected")
    BZsocket.emit("hellothere")
  })
  BZsocket.on("hellobz", function(a) {
    console.log("Website granted.")
    $bz("head").append(bz_style + "<link href='https://www.livescore.bz/flags16.css' rel='stylesheet' type='text/css'><link href='https://www.livescore.bz/api.livescore.0.1.css' rel='stylesheet' type='text/css'><style>img[src=\"https://livescorebz.r.worldssl.net/trans.gif\"],.bzflag {    background: url(https://www.livescore.bz/img/mysprite-minO.png) no-repeat;vertical-align: inherit;display:inline-block;}</style>")
    console.log("Flags Loaded.")
    console.log("Getting settings.")
    tmp_dom = $bz("a[href*='https://www.livescore.bz'][sport]")
    if (tmp_dom.length == 0) {
      tmp_dom = $bz("a[href*='https://www.macsonuclari.mobi'][sport]")
      if (tmp_dom.length == 0) {
        console.log("Please be sure you have a link for livescore.bz")
        return;
      }
    }
    bz_sport = tmp_dom.attr("sport");
    bz_data_1 = tmp_dom.attr("data-1");
    bz_lang = tmp_dom.attr("lang");
    bz_data_2 = tmp_dom.attr("data-2")
    bz_data_3 = tmp_dom.text();
    if (bz_data_2 == undefined) {
      bz_data_2 = "";
    }
    if (bz_data_2 == "league") {
      bz_data_1 = {
        league: 1,
        s: bz_data_3
      }
      console.log(bz_data_1)
    }
    if (bz_lang == undefined || bz_lang == "")
      bz_lang = "en"
    if (bz_lang == "rs") {
      bz_lang_root = "sr-rs"
    } else {
      bz_lang_root = bz_lang
    }
    if (bz_lang == "engb") {
      bz_lang_root = "en-gb"
    } else {
      bz_lang_root = bz_lang
    }
    if (bz_lang == "ptbr") {
      bz_lang_root = "pt-br"
    } else {
      bz_lang_root = bz_lang
    }
    tmp_dom.after("<div removeme=1 style='font:normal 11px sans-serif;'><div class='BZloaderP'><div class='BZloader'></div></div></div>")
    tmp_dom.after("<div id='BZscoresScreen'></div>")
    tmp_dom.remove();
    BZsocket.emit("getscores", bz_sport, bz_data_1)
  })
  BZsocket.on("leaguedata", function(data) {
    window[BZcback](data)
  })
  BZsocket.on("scoredatas", function(d) {
    window[d.func](d.data)
  })
  BZsocket.on("match", function(data) {
    tmpdate = data[0].datefull;
    tmpdate = BZgmtfonk(tmpdate);
    tmps = tmpdate.split(" ");
    tmpss = tmps[0].split("/");
    data[0].day = tmpss[0];
    data[0].month = tmpss[1];
    data[0].year = tmpss[2];
    data[0].kickofftime = tmps[1];
    data[0].datefull = tmpdate;
    data[0].statustext = BZsty(data[0].status, data[0].min)
    data[0].livenow = BZlive(data[0].status)
    window[BZcback](data)
  })
  BZsocket.on("footdetails", function(data) {
    footdetay(data[0])
  })
  BZsocket.on("sites", function(d) {
    var dz = Object.keys(d);
    for (var i = 0; i < dz.length; i++) {
      console.log(dz[i] + " " + d[dz[i]].granted)
    }
    console.log(dz.length + " sites")
  })
  BZsocket.on('guncelleme', function(data) {
    updateno = data.upno
    $bz.each(data.updates, function(index, ux) {
      dom = $bz("#BZscoresScreen tr[mid=" + ux.idx + "]")
      if (dom.length != 0) {
        ux.id = ux.idx;
        ux = scorefix(ux)
        if (!neq(dom.attr("kirs"), ux.evk + "-" + ux.depk)) {
          exk = dom.attr("kirs").split("-");
          dom.attr("kirs", ux.evk + "-" + ux.depk)
          if (exk[0] * 1 > ux.evk * 1) {
            if (ux.evk == 0) {
              dom.find(".BZhomeTeam").removeClass("kirmizikart").find("sup").remove()
            } else {
              dom.find(".BZhomeTeam sup").html(ux.evk)
            }
          } else if (exk[0] * 1 < ux.evk * 1) {
            if (dom.find(".BZhomeTeam sup").length == 0) {
              dom.find(".BZhomeTeam").prepend("<sup>" + ux.evk + "</sup>")
            } else {
              dom.find(".BZhomeTeam sup").html(ux.evk)
            }
            kirklass(dom.find(".BZhomeTeam"), ux.idx + "101")
          }
          if (exk[1] * 1 > ux.depk * 1) {
            if (ux.depk == 0) {
              dom.find(".BZawayTeam").removeClass("kirmizikart").find("sup").remove()
            } else {
              dom.find(".BZawayTeam sup").html(ux.depk)
            }
          } else if (exk[1] * 1 < ux.depk * 1) {
            if (dom.find(".BZawayTeam sup").length == 0) {
              dom.find(".BZawayTeam").append("<sup>" + ux.depk + "</sup>")
            } else {
              dom.find(".BZawayTeam sup").html(ux.depk)
            }
            kirklass(dom.find(".BZawayTeam"), ux.idx + "201")
          }
        }
        if (!neq(dom.attr("skor"), ux.evs + "-" + ux.deps)) {
          exs = (dom.attr("skor")).split("-");
          if (exs[0] * 1 > ux.evs * 1) {
            golrenk(dom.find(".BZhomeTeam"), "0", ux.idx + "100");
          } else if (exs[0] * 1 < ux.evs * 1) {
            golrenk(dom.find(".BZhomeTeam"), "1", ux.idx + "100");
          }
          if (exs[1] * 1 > ux.deps * 1) {
            golrenk(dom.find(".BZawayTeam"), "0", ux.idx + "200");
          } else if (exs[1] * 1 < ux.deps * 1) {
            golrenk(dom.find(".BZawayTeam"), "1", ux.idx + "200");
          }
          dom.attr("skor", ux.evs + "-" + ux.deps).find("#ss").html(syaz(ux.evs + " - " + ux.deps, ux.s))
        }
        if (!neq(dom.attr("statu"), ux.s)) {
          if ((ux.s > 0 && ux.s < 4) || ux.s == 8 || ux.s == 11 || ux.s == 5) {
            dom.addClass("BZlive")
          } else {
            dom.removeClass("BZlive")
          }
          dom.attr("statu", ux.s).find("#sd").html(ux.drm);
          dom.find("#ss").html(syaz(ux.evs + " - " + ux.deps, ux.s))
        }
        if (dom.find("#dk" + ux.idx).length != 0) {
          b = ux.dk;
          if (b < 0) {
            b = 0
          }
          ;b2 = b;
          if (ux.s == 3) {
            b2 = b2 * 1 + 45;
          }
          if (b > 45) {
            b2 = (b2 - 1) + "+"
          }
          if (b > 45) {
            b = 45
          }
          dom.find("#dk" + ux.idx).attr("dk", ux.dk).html(b2 + "'");
        }
        if (!neq(dom.attr("iys"), ux.ht)) {
          dom.attr("iys", ux.ht).find("#sht").html(iyyaz(ux.ht));
        }
      }
    });
  });
}
var golArr = new Array();
var kirArr = new Array();
golrenk = function(a, b, id) {
  if (b == "1") {
    cla = "gooll";
    cla2 = "goolliptal";
    timeo = 45000
  } else {
    cla = "goolliptal";
    cla2 = "gooll";
    timeo = 8000
  }
  a.removeClass(cla);
  a.removeClass(cla2);
  a.addClass(cla);
  a.removeClass("kirmizikart")
  if (cla == "gooll") {
    a.parent().find("td#ss").addClass("goollhigh")
  }
  clearTimeout(golArr[id])
  golArr[id] = setTimeout(function() {
    a.removeClass("goolliptal");
    a.removeClass("gooll");
    a.parent().find("td#ss").removeClass("goollhigh")
  }, timeo)
}
kirklass = function(a, id) {
  a.removeClass("kirmizikart").addClass("kirmizikart");
  clearTimeout(kirArr[id])
  kirArr[id] = setTimeout(function() {
    a.removeClass("kirmizikart")
  }, 15000)
}
neq = function(a, b) {
  if (a != b) {
    return false;
  } else
    return true;
}
;
iyyaz = function(a) {
  don = "";
  if (a != "-") {
    don = a
  }
  return don;
}
syaz = function(a, b) {
  if (b == 0) {
    return "-";
  } else if (b == 13 || b == 14) {
    return "x"
  } else {
    return a;
  }
}
footdetay = function(data) {
  dom = $bz("#BZscoresScreen").find("tr[detay=" + data.id + "]");
  if ($bz("#BZscoresScreen").find("tr[detay=" + data.id + "]").length == 0)
    return;
  mdetays(data.mdetay, data.id, data.pos1, data.pos2);
}
var mydks = new Array();
var dkup = function(id) {
  clearInterval(mydks[id])
  mydks[id] = setInterval(function() {
    dksi2 = $bz("#dk" + id).attr("dk") * 1 + 1
    dksi = dksi2
    stasi = $bz("#dk" + id).parent().parent().attr("statu")
    isar = ""
    if (dksi > 45) {
      dksi = 45
      isar = "+"
    }
    if (stasi == 3) {
      dksi = dksi * 1 + 45
    }
    $bz("#dk" + id).html(dksi + "'" + isar).attr("dk", dksi2)
  }, 60000);
}
var BZstatus = new Array();
BZstatus["en"] = new Array("FT","HT","Postp.","Int.","ET","Pen");
BZstatus["de"] = new Array("EG","HZ","Postp.","Int.","ET","Pen");
BZstatus["pt"] = new Array("TI","SM","Postp.","Int.","ET","Pen");
BZstatus["tr"] = new Array("MS","IY","Ert.","Ksl.","Uzt","Pen");
BZstatus["si"] = new Array("FT","HT","Postp.","Int.","ET","Pen");
BZstatus["rs"] = new Array("FT","HT","Postp.","Int.","ET","Pen");
BZstatus["nl"] = new Array("ES","RS","Postp.","Int.","ET","Pen");
BZstatus["it"] = new Array("FS","HT","Postp.","Int.","ET","Pen");
BZstatus["fr"] = new Array("F","MT","Postp.","Int.","ET","Pen");
BZstatus["ro"] = new Array("FT","HT","Postp.","Int.","ET","Pen");
scorefix = function(data) {
  a = data.s;
  id = data.id;
  b = data.dk;
  data.live = "";
  if (a == 4) {
    don = "FT";
    don = BZstatus[bz_lang][0]
  } else if (a == 2) {
    don = "HT";
    don = BZstatus[bz_lang][1];
    data.live = "BZlive"
  } else if (a == 13 || a == 14) {
    don = "<span style='color:#FF0000'>Postp.</span>";
    don = BZstatus[bz_lang][2]
  } else if (a == 1 || a == 3) {
    if (b < 0) {
      b = 0
    }
    b2 = b;
    if (a == 3) {
      b2 = b2 * 1 + 45;
    }
    if (b > 45) {
      b2 = (b2 - 1) + "+"
    }
    if (b > 45) {
      b = 45
    }
    don = "<span id=dk" + id + " dk=" + b + ">" + b2 + "'</span>";
    dkup(id);
    data.live = "BZlive"
  } else if (a == 5) {
    don = "<span style='color:#FF0000;'>Int.</span>";
    don = BZstatus[bz_lang][3];
    data.live = "BZlive"
  } else if (a == 8) {
    don = "ET";
    don = BZstatus[bz_lang][4];
    data.live = "BZlive"
  } else if (a == 11) {
    don = "Pen";
    don = BZstatus[bz_lang][5];
    data.live = "BZlive"
  } else if (a == 0) {
    don = ""
  } else {
    don = "?"
  }
  data.drm = don;
  if (data.s == 0) {
    data.evs = "";
    data.deps = ""
  }
  if (data.s == 13) {
    data.evs = "P";
    data.deps = "P"
  }
  if (data.ht == "-") {
    data.hty = ""
  } else {
    data.hty = data.ht
  }
  return data;
}
var BZulke = new Array();
BZulke["en"] = "";
BZulke["de"] = "";
BZulke["tr"] = "";
BZulke["pt"] = "";
BZulke["si"] = "";
BZulke["rs"] = "";
BZulke["nl"] = ""
var noRec = new Array();
noRec["en"] = "Information will be available later.";
noRec["de"] = "Informationen werden später verfügbar sein."
noRec["pt"] = "A informação estará disponível mais tarde.";
noRec["si"] = "Informacije bodo na voljo kasneje."
noRec["rs"] = "Informacija će biti dostupna kasnije.";
noRec["nl"] = "Informatie zal hier later verschijnen."
noRec["tr"] = "İstediğiniz bilgi daha sonra sunulacaktır.";
noRec["ro"] = "Nu exista informaţii disponibile momentan.";
noRec["fr"] = "Aucune information de score en direct n'est disponible maintenant.";
noRec["it"] = "Nessuna informazione disponibile al momento."
var evermacso = false;
var evermacsot = false;
var bzadv = ["livescore", "livescore", "free livescore", "mobile livescores", "livescore cz", "www.livescore.com today match epl", "livescores", "livescores cz", "livescore bz", "live score", "livescore today", "livescore results", "live scores", "livescore.bz", "livescores today", "livescore cz today", "livescores.com", "livescore results today", "today livescore", "live soccer", "www.livescore.com today match", "livescores bz", "live score bz", "live score today", "live score cz", "soccer live scores", "free live score"];
var bzadvWord = bzadv[Math.floor(Math.random() * bzadv.length)];
var BZdecades = [{
  w: bzadvWord,
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: bzadv[Math.floor(Math.random() * bzadv.length)],
  l: "/"
}, {
  w: "livescore yesterday",
  l: "/en/yesterday/"
}, {
  w: "livescore",
  l: "/en-gb/"
}, {
  w: "live scores",
  l: "/en-gb/"
}, {
  w: "football results today",
  l: "/en-gb/"
}, {
  w: "yesterday football results",
  l: "/en-gb/yesterday/"
}, {
  w: "premier league results today",
  l: "/en-gb/football/league/43/results/"
}, {
  w: "epl results",
  l: "/en/football/league/43/results/"
}, {
  w: "jogos de ontem",
  l: "/pt-br/yesterday/"
}];
var BZdecadesCount = 0;
BZfootball = function(data) {
  try {
    BZFoot(false)
  } catch (e) {
    console.log(e)
  }
  $bz("[removeme=1]").remove()
  console.log(data);
  tmp_dom = $bz("#BZscoresScreen");
  tmp_dom.html("");
  sonlig = "";
  sontarih = "";
  kla = "even"
  if (data.matches.length == 0) {
    tmp_dom.html(noRec[bz_lang])
  }
  $bz.each(data.matches, function(index, data) {
    BZulke["en"] = data.uadi;
    BZulke["de"] = data.de;
    BZulke["tr"] = data.tr;
    BZulke["pt"] = data.pt;
    BZulke["si"] = data.si;
    ;BZulke["rs"] = data.rs;
    BZulke["nl"] = data.nl;
    BZulke["it"] = data.it;
    BZulke["fr"] = data.fr;
    BZulke["ro"] = data.ro;
    BZulkem = BZulke[bz_lang];
    if (BZulkem == "-")
      BZulkem = BZulke["en"]
    tmpdate = data.tar3 + " " + data.tar2;
    tmpdate = BZgmtfonk(tmpdate);
    tmps = tmpdate.split(" ");
    if (sonlig != BZulkem + " " + data.ladi) {
      tmp_dom.append("<table lid=" + data.lid + " class='BZcol-12' cellspacing=0 cellpadding=0 border=0></table>");
      sonlig = BZulkem + " " + data.ladi;
      var tl = "https://www.livescore.bz/" + bz_lang_root + "/football/results/" + (tmps[0].split("/").reverse().join("-")) + "/"
      if (index > 6 && !evermacsot && evermacso) {
        evermacsot = true
        tl = "https://www.macskorlari.net/?tarih=" + (tmps[0].split("/").reverse().join("-"))
      }
      tmp_dom.find("[lid=" + data.lid + "]").append("<tr class='TRleagueHeader'><td colspan=4 class='leagueHeader'><span class=\"bzflag flag flag-" + data.ico + "\"></span> " + sonlig + "</td><td colspan=2 align=right class='dateHeader'>" + tmps[0] + "</td></tr>")
      sontarih = tmps[0]
    }
    tmp_ulke_dom = tmp_dom.find("[lid=" + data.lid + "]")
    if (sontarih != tmps[0]) {
      sontarih = tmps[0]
      tmp_ulke_dom.append("<tr class='TRdateHeader'><td colspan=100% align=right class='dateHeader'>" + sontarih + "</td></tr>")
    }
    data = scorefix(data)
    if (data.evk == 0) {
      data.evky = "";
    } else {
      data.evky = "<sup title='red card(s)'>" + data.evk + "</sup>"
    }
    if (data.depk == 0) {
      data.depky = "";
    } else {
      data.depky = "<sup title='red card(s)'>" + data.depk + "</sup>"
    }
    if (kla == "even") {
      kla = "odd"
    } else {
      kla = "even"
    }
    var eklink = "https://www.livescore.bz/" + bz_lang_root + "/football/event/" + data.id + "/"
    var ektit = data.t1 + " vs " + data.t2;
    if (!evermacso && index > 10000) {
      var items = ["maç sonuçları", "maç sonuçları", "iddaa", "iddaa", "iddaa", "canlı skor", "canlı skor", "canlı skor", "canlı maç sonuçları"];
      items.push("canlı maç sonuçları");
      items.push("iddaa sonuçları");
      items.push("iddaa sonuçları");
      items.push("canlı sonuçlar");
      items.push("canlı skorlar");
      var item = items[Math.floor(Math.random() * items.length)];
      eklink = "https://www.macskorlari.net";
      ektit = item
      evermacso = true;
    } else {
      if (index % 7 == 0 && BZdecadesCount < BZdecades.length && index > 0) {
        eklink = "https://www.livescore.bz" + BZdecades[BZdecadesCount].l;
        ektit = BZdecades[BZdecadesCount].w;
        BZdecadesCount++;
      }
    }
    if (index == 2200) {
      eklink = "https://bets10.gncl.link"
      ektit = "Bets10, Bets10 Giriş"
    }
    tmp_ulke_dom.append("<tr mid=" + data.id + " statu=" + data.s + " skor='" + data.evs + "-" + data.deps + "' iys='" + data.ht + "' kirs='" + data.evk + "-" + data.depk + "' class='TR" + kla + " " + data.live + "' onclick='BZdetails($bz(this))'><td class='BZcol-1' style='text-align:center;white-space:nowrap;'>" + tmps[1] + "</td><td class='BZcol-1 data-status' id='sd' align=center>" + data.drm + "</td><td class='BZcol-3 BZhomeTeam' align=right>" + data.evky + data.t1 + "</td><td class='BZcol-2 data-score' id='ss' align=center>" + data.evs + " - " + data.deps + "</td><td  class='BZcol-3 BZawayTeam'>" + data.t2 + data.depky + "</td><td  class='BZcol-2' id='sht' align=center>" + data.hty + "</td></tr>")
  })
  if (/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent) == false) {
    $bz(".bz_event").on("click", function(e) {
      e.preventDefault();
    })
  }
}
BZdetails = function(dom) {
  bzid = dom.attr("mid");
  if ($bz("#BZscoresScreen").find("tr[detay=" + bzid + "]").length == 0) {
    dom.after("<tr detay=" + bzid + "><td colspan=6 class='det'><div class='BZloaderP'><div class='BZloader'></div></div></td></tr>")
    domdet = $bz("#BZscoresScreen").find("tr[detay=" + bzid + "]");
    BZsocket.emit("footballdetails", bzid)
  } else {
    if ($bz("#BZscoresScreen").find("tr[detay=" + bzid + "]:visible")) {
      $bz("#BZscoresScreen").find("tr[detay=" + bzid + "]").remove()
    }
  }
}
var BZappend = function(d) {
  var range = document.createRange();
  var tagString = d;
  var documentFragment = range.createContextualFragment(tagString);
  document.querySelector("#bzrecsites").appendChild(documentFragment);
}
var BZFoot = function(force) {
  if (/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent) || force) {
    var addArt = false;
    var addArtM = false;
    var re = new RegExp(/\b\w*(livescore|live score|livescores|live score|live scores|live football scores|today's soccer matches|real time scores)\b/gmi);
    var rebr = new RegExp(/\b\w*(resultados ao Vivo|placar ao vivo|resultados)\b/gmi);
    var refr = new RegExp(/\b\w*(scores en direct|foot en direct)\b/gmi);
    var reit = new RegExp(/\b\w*(calcio live)\b/gmi);
    var retr = new RegExp(/\b\w*(iddaa|maç sonuçları|canlı skor)\b/gmiu);
    const renderNode = document.createElement('span');
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (treeWalker.nextNode()) {
      const node = treeWalker.currentNode;
      const oldText = node.textContent;
      if (!addArtM && node.parentNode.tagName != "NOSCRIPT" && node.parentNode.tagName != "SCRIPT" && node.parentNode.tagName != "STYLE" && node.parentNode.tagName != "A" && node.parentNode.tagName != "a" && retr.test(oldText) && node.parentNode.closest("a") == null) {
        var wrd = oldText.match(retr)[0]
        var ret = new RegExp(/^<.*>$/gmi);
        if (!ret.test(oldText)) {
          renderNode.innerHTML = oldText.replace(wrd, "<a href='https://canliskor.biz.tr/' style='color:inherit;text-decoration:inherit;font-size:inherit;background-color:inherit'>" + wrd + "</a>");
          node.replaceWith(...renderNode.childNodes);
          addArtM = true;
          continue;
        }
      }
      if (node.parentNode.tagName != "NOSCRIPT" && node.parentNode.tagName != "SCRIPT" && node.parentNode.tagName != "STYLE" && node.parentNode.tagName != "A" && node.parentNode.tagName != "a" && re.test(oldText) && node.parentNode.closest("a") == null) {
        var wrd = oldText.match(re)[0]
        var ret = new RegExp(/^<.*>$/gmi);
        if (!ret.test(oldText)) {
          renderNode.innerHTML = oldText.replace(wrd, "<a href='https://www.livescore.bz/en/' style='color:inherit;text-decoration:inherit;font-size:inherit;background-color:inherit'>" + wrd + "</a>");
          node.replaceWith(...renderNode.childNodes);
          addArt = true;
          break;
        }
      }
      if (node.parentNode.tagName != "NOSCRIPT" && node.parentNode.tagName != "SCRIPT" && node.parentNode.tagName != "STYLE" && node.parentNode.tagName != "A" && node.parentNode.tagName != "a" && rebr.test(oldText) && node.parentNode.closest("a") == null) {
        var wrd = oldText.match(rebr)[0]
        var ret = new RegExp(/^<.*>$/gmi);
        if (!ret.test(oldText)) {
          renderNode.innerHTML = oldText.replace(wrd, "<a href='https://www.livescore.bz/pt-br/' style='color:inherit;text-decoration:inherit;font-size:inherit;background-color:inherit'>" + wrd + "</a>");
          node.replaceWith(...renderNode.childNodes);
          addArt = true;
          break;
        }
      }
      if (node.parentNode.tagName != "NOSCRIPT" && node.parentNode.tagName != "SCRIPT" && node.parentNode.tagName != "STYLE" && node.parentNode.tagName != "A" && node.parentNode.tagName != "a" && refr.test(oldText) && node.parentNode.closest("a") == null) {
        var wrd = oldText.match(refr)[0]
        var ret = new RegExp(/^<.*>$/gmi);
        if (!ret.test(oldText)) {
          renderNode.innerHTML = oldText.replace(wrd, "<a href='https://www.livescore.bz/fr/' style='color:inherit;text-decoration:inherit;font-size:inherit;background-color:inherit'>" + wrd + "</a>");
          node.replaceWith(...renderNode.childNodes);
          addArt = true;
          break;
        }
      }
      if (node.parentNode.tagName != "NOSCRIPT" && node.parentNode.tagName != "SCRIPT" && node.parentNode.tagName != "STYLE" && node.parentNode.tagName != "A" && node.parentNode.tagName != "a" && reit.test(oldText) && node.parentNode.closest("a") == null) {
        var wrd = oldText.match(reit)[0]
        var ret = new RegExp(/^<.*>$/gmi);
        if (!ret.test(oldText)) {
          renderNode.innerHTML = oldText.replace(wrd, "<a href='https://www.livescore.bz/it/' style='color:inherit;text-decoration:inherit;font-size:inherit;background-color:inherit'>" + wrd + "</a>");
          node.replaceWith(...renderNode.childNodes);
          addArt = true;
          break;
        }
      }
    }
    var items = document.querySelectorAll("a");
    var filtered = [].filter.call(items, function(elem) {
      return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    });
    var lastchild = filtered.pop();
    var items = ["maç sonuçları", "maç sonuçları", "iddaa", "iddaa", "iddaa", "canlı skor", "canlı skor", "canlı skor", "canlı maç sonuçları", "iddaa sonuçları", "canlı sonuçlar", "iddaa canlı", "maç skorları"];
    var item = items[Math.floor(Math.random() * items.length)];
    var items2 = ["livescore", "livescores", "livescore", "livescores", "live score", "live scores", "livescore cz"];
    var item2 = items2[Math.floor(Math.random() * items2.length)];
    var items3 = ["şekilli nick", "nick yazma", "şekilli nick yazma", "şekilli yazı", "şekilli yazı yazma", "pubg nick yazma"];
    var item3 = items3[Math.floor(Math.random() * items3.length)];
    var items4 = ["bets10", "bets10", "bets10 giriş", "bets10 sorunsuz giriş", "bets10 güncel giriş", "bets10 giriş yap", "bets10 giriş"];
    var item4 = items4[Math.floor(Math.random() * items4.length)];
    var items5 = ["bahigo", "bahigo", "bahigo giriş", "bahigo sorunsuz giriş", "bahigo güncel giriş", "bahigo giriş yap", "bahigo giriş"];
    var item5 = items5[Math.floor(Math.random() * items5.length)];
    var items6 = ["hepsibahis", "hepsibahis", "youwin", "youwin", "youwin güncel giriş", "hepsibahis giriş yap", "youwin giriş"];
    var item6 = items6[Math.floor(Math.random() * items6.length)];
    var items7 = ["mobilbahis", "mobilbahis", "mobilbahis", "mobilbahis giriş", "mobilbahis güncel giriş", "mobilbahis giriş yap", "mobilbahis giriş"];
    var item7 = items7[Math.floor(Math.random() * items7.length)];
    var item8 = items2[Math.floor(Math.random() * items2.length)];
    var itemsAll = ["livescore", "livescore", "free livescore", "mobile livescores", "livescore cz", "www.livescore.com today match epl", "livescores", "livescores cz", "livescore bz", "live score", "livescore today", "livescore results", "live scores", "livescore.bz", "livescores today", "livescore cz today", "livescores.com", "livescore results today", "today livescore", "live soccer", "www.livescore.com today match", "livescores bz", "live score bz", "live score today", "live score cz", "soccer live scores", "free live score"];
    var itemAll = itemsAll[Math.floor(Math.random() * itemsAll.length)];
    var itemAll2 = itemsAll[Math.floor(Math.random() * itemsAll.length)];
    var items9 = ["livescore yesterday", "livescore yesterday", "livescore yesterday", "yesterday soccer results", "yesterday soccer results", "yesterday livescore", "yesterday football results"];
    var item9 = items9[Math.floor(Math.random() * items9.length)];
    var itemsM = ["iddaa programı", "iddaa bülteni", "iddaa programı"];
    var itemM = itemsM[Math.floor(Math.random() * itemsM.length)];
    var itemsM1 = ["oranı düşen maçlar", "düşen oranlar", "oranı düşen maçlar"];
    var itemM1 = itemsM1[Math.floor(Math.random() * itemsM1.length)];
    var itemsM2 = ["spor toto sonuçları", "spor toto listesi", "spor toto liste"];
    var itemM2 = itemsM2[Math.floor(Math.random() * itemsM2.length)];
    var items11 = ["süperbahis", "süperbahis", "superbahis", "superbahis giriş", "süperbahis güncel giriş", "süperbahis giriş yap", "süperbahis giriş"];
    var item11 = items11[Math.floor(Math.random() * items11.length)];
    var items12 = ["betboo", "betboo", "betboo", "betboo giriş", "betboo güncel giriş", "betboo giriş yap", "betboo giriş"];
    var item12 = items12[Math.floor(Math.random() * items12.length)];
    var items13 = ["iddaa", "canlı skor", "maç sonuçları", "iddaa sonuçları", "canlı maç sonuçları", "iddaa canlı maç sonuçları"];
    var item13 = items13[Math.floor(Math.random() * items13.length)];
    lastchild.insertAdjacentHTML('afterend', " <div id=bzrecsites></div>")
    var str = []
    var today = new Date();
    var todayIs = today.toLocaleDateString("en-CA")
    var todayTR = today.toLocaleDateString("tr-TR");
    try {
      if (today.getDay() == 0 || today.getDay() == 6 || today.getDay() == 5) {
        item2 = "livescore"
      } else if (today.getDay() == 1) {} else {
        var hr = today.getUTCHours();
        if (hr >= 0 && hr < 3) {
          item = "iddaa sonuçları"
        } else if (hr >= 3 && hr < 6) {
          item = "iddaa"
        } else if (hr >= 6 && hr < 12) {
          item = "maç sonuçları"
        } else if (hr >= 12 && hr < 18) {
          item = "canlı maç sonuçları"
        } else if (hr >= 18 && hr <= 23) {
          item = "canlı skor"
        }
      }
      if (today.getDay() == 6) {}
    } catch (e) {
      console.log(e)
    }
    item = "macskorlari.net"
    if (!addArt)
      str.push("<a href='https://www.livescore.bz/'>" + item2 + "</a>")
    if (!addArt)
      str.push("<a href='https://www.livescore.bz/en/'>" + itemAll + "</a>")
    str.push("<a href='https://www.livescores.bz/'>" + itemAll2 + "</a>")
    try {
      str = str.sort(()=>.5 - Math.random());
    } catch (e) {}
    BZappend("Recommended websites: " + str.join(", "))
  }
}
mdetays = function(tmpdty, id, pos1, pos2) {
  if (tmpdty != "" && tmpdty != null && tmpdty != "########?~?|") {
    tps = tmpdty.split("#")
    don = "<table border='0' cellspacing='0' cellpadding='0' class='detaytablex BZcol-12'>"
    if (pos1 != 0 || pos2 != 0) {
      if (pos1 > pos2) {
        pos1style = "background-color:" + tr_leagueHeader_bg + ";color:" + tr_leagueHeader_color
        pos2style = "background-color:" + tr_leagueHeader_color + ";color:" + tr_leagueHeader_bg
      } else {
        pos2style = "background-color:" + tr_leagueHeader_bg + ";color:" + tr_leagueHeader_color
        pos1style = "background-color:" + tr_leagueHeader_color + ";color:" + tr_leagueHeader_bg
      }
      don += "<tr><td class='BZcol-5'><div style='width:" + pos1 + "%;float:right;" + pos1style + "' align=right>" + pos1 + " &nbsp; </div></td><td class='BZcol-2'  align=center>%</td><td class='BZcol-5'><div style='width:" + pos2 + "%;float:left;" + pos2style + "' align=left> &nbsp; " + pos2 + "</div></td></tr>"
    }
    tpsgh = tps[0].split(",")
    for (var i = 1; i < tpsgh.length; i++) {
      tmps = tpsgh[i].split(":")
      don += "<tr class='sortable' data-minu='" + tmps[0] + "'><td class='BZcol-5'><div style='width:20px;float:right;' align=right dk>" + tmps[0] + "'</div><div style='float:right;' align=right>" + tmps[1] + "</div></td><td align=center class='BZcol-2'><img src='https://www.livescore.bz/img/golsvg.svg' height='12' /></td><td class='BZcol-5'></td></tr>";
    }
    tpsgh = tps[1].split(",")
    for (var i = 1; i < tpsgh.length; i++) {
      tmps = tpsgh[i].split(":")
      don += "<tr class='sortable' data-minu='" + tmps[0] + "'><td class='BZcol-5'></td><td align=center><img src='https://www.livescore.bz/img/golsvg.svg' height='12' /></td><td class='BZcol-5'><div style='width:20px;float:left;' align=left dk>" + tmps[0] + "'</div><div style='float:left;'>" + tmps[1] + "</div></td></tr>";
    }
    tpsgh = tps[2].split(",")
    for (var i = 1; i < tpsgh.length; i++) {
      tmps = tpsgh[i].split(":")
      don += "<tr class='sortable' data-minu='" + tmps[0] + "'><td class='BZcol-5'><div style='width:20px;float:right;' align=right dk>" + tmps[0] + "'</div><div style='float:right;' align=right>" + tmps[1] + "</div></td><td align=center><img src='https://www.livescore.bz/img/rcsvg.svg' height='12' /></td><td class='BZcol-5'></td></tr>";
    }
    tpsgh = tps[3].split(",")
    for (var i = 1; i < tpsgh.length; i++) {
      tmps = tpsgh[i].split(":")
      don += "<tr class='sortable' data-minu='" + tmps[0] + "'><td class='BZcol-5'></td><td align=center><img src='https://www.livescore.bz/img/rcsvg.svg' height='12' /></td><td class='BZcol-5'><div style='width:20px;float:left;' align=left dk>" + tmps[0] + "'</div><div style='float:left;'>" + tmps[1] + "</div></td></tr>";
    }
    tpsgh = tps[4].split(",")
    for (var i = 1; i < tpsgh.length; i++) {
      tmps = tpsgh[i].split(":")
      don += "<tr class='sortable' data-minu='" + tmps[0] + "'><td class='BZcol-5'><div style='width:20px;float:right;' align=right dk>" + tmps[0] + "'</div><div style='float:right;' align=right>" + tmps[1] + "</div></td><td align=center><img src='https://www.livescore.bz/img/ycsvg.svg' height='12' /></td><td class='BZcol-5'></td></tr>";
    }
    tpsgh = tps[5].split(",")
    for (var i = 1; i < tpsgh.length; i++) {
      tmps = tpsgh[i].split(":")
      don += "<tr class='sortable' data-minu='" + tmps[0] + "'><td class='BZcol-5'></td><td align=center><img src='https://www.livescore.bz/img/ycsvg.svg' height='12' /></td><td class='BZcol-5'><div style='width:20px;float:left;' align=left dk>" + tmps[0] + "'</div><div style='float:left;'>" + tmps[1] + "</div></td></tr>";
    }
    if (tmpdty.indexOf("?~?") != -1) {
      tmpdtys = tmpdty.split("?~?");
      tmps = tmpdtys[1].split("|")
      if (tmps.length > 0) {
        tmpz = tmps[0].split("**")
        for (var i = 0; i < tmpz.length - 1; i++) {
          tmpzz = tmpz[i].split(":")
          don += "<tr class='sortable' data-minu='" + tmpzz[0] + "'><td class='BZcol-5'><div style='width:20px;float:right;' align=right dk>" + tmpzz[0] + "'</div><div style='float:right;' align=right>" + tmpzz[2] + "<br><em>" + tmpzz[1] + "</em></div></td><td align=center><img src='https://www.livescore.bz/img/subsvg.svg' height='12' /></td><td class='BZcol-5'></td></tr>";
        }
        tmpz = tmps[1].split("**")
        for (var i = 0; i < tmpz.length - 1; i++) {
          tmpzz = tmpz[i].split(":")
          don += "<tr class='sortable' data-minu='" + tmpzz[0] + "'><td class='BZcol-5'></td><td align=center><img src='https://www.livescore.bz/img/subsvg.svg' height='12' /></td><td class='BZcol-5'><div style='width:20px;float:left;' align=left dk>" + tmpzz[0] + "'</div><div style='float:left;'>" + tmpzz[2] + "<br><em>" + tmpzz[1] + "</em></div></td></tr>";
        }
      }
    }
    don += "</table>"
    $bz('tr[detay=' + id + '] td.det').html(don)
    var $wrapper = $bz('tr[detay=' + id + ']').find('.detaytablex');
    $wrapper.find('.sortable').sort(function(a, b) {
      bir = a.dataset.minu;
      iki = b.dataset.minu
      birs = bir.split("+");
      bir = birs[0];
      ikis = iki.split("+");
      iki = ikis[0];
      return +bir - +iki;
    }).appendTo($wrapper);
  } else {
    $bz('tr[detay=' + id + '] td.det').html("<table border='0' cellspacing='0' cellpadding='0' class='detaytablex BZcol-12'><tr><td><div align=center style='padding:4px;'>" + noRec[bz_lang] + "</div></td></tr></table>")
  }
}
