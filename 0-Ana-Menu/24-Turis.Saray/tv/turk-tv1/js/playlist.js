var PLAYER = PLAYER || {};
PLAYER.Playlist = function(e, i, t, o, a, l, s, d, n, p, r, v, m, y, h, u) {
  function _() {
    b.vimeoStatus.text("paused")
  }

  function c() {
    b.vimeoStatus.text("finished"), b.videoAdPlayed = !1, b.VIDEO.gaVideoEnded(), "Right playlist" == t.playlist || "Bottom playlist" == t.playlist || "Off" == t.playlist ? (b.videoid = parseInt(b.videoid) + 1, b.videos_array.length == b.videoid && (b.videoid = 0), "Play next video" == t.onFinish ? (b.VIDEO.shuffleBtnEnabled ? (b.VIDEO.generateRandomNumber(), b.videoid = b.VIDEO.rand, b.VIDEO.setPlaylistItem(b.videoid)) : b.VIDEO.setPlaylistItem(b.videoid), b.VIDEO.playVideoById(b.videoid)) : "Restart video" == t.onFinish ? b.vimeoPlayer.api("play") : "Stop video" == t.onFinish && "" != t.posterImgOnVideoFinish && b.VIDEO.showPoster2()) : "Restart video" == t.onFinish ? b.vimeoPlayer.api("play") : "Stop video" == t.onFinish
  }

  function I(e) {
    b.vimeo_time = Math.floor(e.seconds), b.vimeo_duration = Math.floor(e.duration), b.vimeoStatus.text(e.seconds + "s played"), 0 == b.vimeo_time && "yes" == b.videos_array[b.videoid].prerollAD && (b.VIDEO.videoAdStarted = !0, b.videoAdPlayed ? b.vimeoPlayer.api("play") : (b.vimeoPlayer.api("pause"), d.canPlayType && d.canPlayType("video/mp4").replace(/no/, "") && (this.canPlay = !0, b.video_pathAD = b.videos_array[b.videoid].preroll_mp4), b.VIDEO.loadAD(b.video_pathAD, "prerollActive"), b.VIDEO.openAD())), b.tim = setInterval(function() {
      if ("HTML5" != t.videos[b.videoid].videoType && "HTML5 (self-hosted)" != t.videoType) {
        if (b.VIDEO.secondsFormat(b.vimeo_time) == b.videos_array[b.videoid].midrollAD_displayTime) {
          if (b.VIDEO.midrollPlayed) return;
          b.VIDEO.midrollPlayed = !0, "yes" == b.videos_array[b.videoid].midrollAD && (d.canPlayType && d.canPlayType("video/mp4").replace(/no/, "") && (b.canPlay = !0, b.video_pathAD = b.videos_array[b.videoid].midroll_mp4), b.vimeoPlayer.api("pause"), b.VIDEO.loadAD(b.video_pathAD, "midrollActive"), b.VIDEO.openAD())
        }
        if (b.VIDEO.secondsFormat(b.vimeo_time) >= b.VIDEO.secondsFormat(b.vimeo_duration - 1) && b.vimeo_duration > 0) {
          if (b.VIDEO.postrollPlayed) return;
          b.VIDEO.postrollPlayed = !0, "yes" == b.videos_array[b.videoid].postrollAD && (d.canPlayType && d.canPlayType("video/mp4").replace(/no/, "") && (b.canPlay = !0, b.video_pathAD = b.videos_array[b.videoid].postroll_mp4), b.vimeoPlayer.api("pause"), b.VIDEO.loadAD(b.video_pathAD, "postrollActive"), b.VIDEO.openAD())
        }
      }
    }, 50), "yes" == b.videos_array[b.videoid].popupAdShow && b.VIDEO.enablePopup()
  }

  function D(e) {
    b.VIDEO.hideMutedBox()
  }

  function V() {
    b.vimeoIframe = e(b.vimeoWrapper).find("#" + b.options.instanceName), b.vimeoPlayer = $f(b.vimeoIframe[0]), b.vimeoStatus = e(".status"), b.vimeoPlayer.addEvent("ready", function() {
      b.vimeoPlayer.addEvent("pause", _), b.vimeoPlayer.addEvent("finish", c), b.vimeoPlayer.addEvent("playProgress", I), b.vimeoPlayer.addEvent("volumechange", D), v && "AD 5 sec + Pieces After Effects project" != b.options.videos[0].title && "Pieces After Effects project" != b.options.videos[0].title && "AD 5 sec + Space Odyssey After Effects Project" != b.options.videos[0].title && "AD 5 sec Swimwear Spring Summer" != b.options.videos[0].title && "i Create" != b.options.videos[0].title && "Swimwear Spring Summer" != b.options.videos[0].title && "PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM" != b.options.youtubePlaylistID && "Google drive video example" != b.options.videos[0].title && "Dropbox video example" != b.options.videos[0].title && "Livestream HLS m3u8 video example" != b.options.videos[0].title && "Openload video example" != b.options.videos[0].title && "Youtube 360 VR video" != b.options.videos[0].title && "Subtitles video example" != b.options.videos[0].title && "Live YouTube" != b.options.videos[0].title && "HTML5 Live video thumbnails" != b.options.videos[0].title && "HTML5 vtt video thumbnails" != b.options.videos[0].title && (b.VIDEO.pw(), b.vimeoWrapper.css({
        zIndex: 0
      }), e("iframe#" + b.options.instanceName).attr("src", ""))
    })
  }
  var b = this;
  switch (this.VIDEO = i, this.element = a, this.youtube_array = h, "" == t.youtubePlaylistID && "" == t.youtubeChannelID || (t.videos = b.youtube_array), this.canPlay = n, this.CLICK_EV = p, this.params = r, this.isMobile = u, this.preloader = l, this.preloaderAD = s, this.options = t, this.mainContainer = o, this.videoid = "VIDEOID", this.adStartTime = "ADSTARTTIME", this.videoAdPlayed = !1, this.rand = Math.floor(Math.random() * t.videos.length + 0), this.ytQuality = t.youtubeQuality, this.youtubeSTARTED = !1, this.deviceAgent = m, this.agentID = y, this.YTAPI_onPlayerReady = !1, this.vimeo_time, this.vimeo_duration, this.scrollingIsOn = !1, this.touchmove = !1, this.playlist = e("<div />"), this.playlistContent = e("<div />"), this.playlistContentOverlay = e("<div />").addClass("lite_vp_playlistContentOverlay").hide(), this.playlistBar = e("<div />"), this.playlistBar.addClass("lite_vp_bg lite_vp_lite_vp_" + this.options.instanceTheme), this.playlist.append(this.playlistBar), this.playlist.append(this.playlistContentOverlay), this.playlistBarInside = e("<div />"), this.playlistBarInside.addClass("lite_vp_playlistBarInside"), this.playlistBar.append(this.playlistBarInside), this.lastBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-lite").addClass("lite-icon-general").addClass("lite_vp_controlsColor lite_vp_" + this.options.instanceTheme).addClass("fa-lite-step-forward").attr("id", "lite_vp_lastBtn"), this.firstBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-lite").addClass("lite-icon-general").addClass("lite_vp_controlsColor lite_vp_" + this.options.instanceTheme).addClass("fa-lite-step-backward").attr("id", "lite_vp_firstBtn"), this.nextBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-lite").addClass("lite-icon-general").addClass("lite_vp_controlsColor lite_vp_" + this.options.instanceTheme).addClass("fa-lite-forward").attr("id", "lite_vp_nextBtn"), this.previousBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-lite").addClass("lite-icon-general").addClass("lite_vp_controlsColor lite_vp_" + this.options.instanceTheme).addClass("fa-lite-backward").attr("id", "lite_vp_previousBtn"), this.shuffleBtnIcon = e("<span />").attr("aria-hidden", "true").attr("id", "lite_vp_shuffleBtn").addClass("fa-lite").addClass("lite-icon-general").addClass("lite_vp_controlsColor lite_vp_" + this.options.instanceTheme).addClass("fa-lite-random").addClass("lite_vp_playerElement"), this.lastBtn = e("<div />").addClass("lite_vp_playlistBarBtn").addClass("lite_vp_playerElement"), this.lastBtn.append(this.lastBtnIcon), this.firstBtn = e("<div />").addClass("lite_vp_playlistBarBtn").addClass("lite_vp_playerElement"), this.firstBtn.append(this.firstBtnIcon), this.nextBtn = e("<div />").addClass("lite_vp_playlistBarBtn").addClass("lite_vp_playerElement"), this.nextBtn.append(this.nextBtnIcon), this.previousBtn = e("<div />").addClass("lite_vp_playlistBarBtn").addClass("lite_vp_playerElement"), this.previousBtn.append(this.previousBtnIcon), this.shuffleBtn = e("<div />").addClass("lite_vp_playlistBarBtn").addClass("lite_vp_playerElement"), this.shuffleBtn.append(this.shuffleBtnIcon), this.playlistBarInside.append(this.firstBtn), this.playlistBarInside.append(this.previousBtn), this.playlistBarInside.append(this.shuffleBtn), this.playlistBarInside.append(this.nextBtn), this.playlistBarInside.append(this.lastBtn), this.options.playlist) {
    case "Right playlist":
      this.playlist.attr("id", "lite_vp_playlist"), this.playlist.addClass("lite_vp_playlist lite_vp_" + this.options.instanceTheme), this.playlistContent.attr("id", b.options.instanceName + "lite_vp_playlistContent"), this.playlistBar.addClass("lite_vp_playlistBar");
      break;
    case "Bottom playlist":
      this.playlist.attr("id", "lite_vp_playlist_bottom"), this.playlist.addClass("lite_vp_playlist lite_vp_" + this.options.instanceTheme), this.playlistContent.attr("id", b.options.instanceName + "lite_vp_playlistContent_bottom"), this.playlistBar.addClass("lite_vp_playlistBar_bottom")
  }
  b.videos_array = new Array, b.item_array = new Array, this.vimeoWrapper = e("<div></div>"), this.vimeoWrapper.attr("id", "lite_vp_vimeoWrapper"), b.element && b.element.append(b.vimeoWrapper), e(this.vimeoWrapper).html('<iframe id="' + b.options.instanceName + '" src="" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  var E = 0,
    f = 0;
  this.onPlayerReady = function() {
    if (b.YTAPI_onPlayerReady = !0, "youtube" == t.videos[0].videoType || "YouTube" == t.videoType) {
      b.VIDEO.playButtonScreen.hide();
      var e = !1,
        i = window.navigator.userAgent,
        o = i.indexOf("MSIE "),
        a = i.indexOf("Trident/");
      (o > -1 || a > -1) && (e = !0), e ? "Yes" == t.loadRandomVideoOnStart ? b.VIDEO.youtubePlayer.cueVideoById(b.videos_array[b.rand].youtubeID) : b.VIDEO.youtubePlayer.cueVideoById(b.videos_array[b.videoid].youtubeID) : "Yes" == t.loadRandomVideoOnStart ? b.VIDEO.youtubePlayer.cueVideoById(b.videos_array[b.rand].youtubeID) : b.VIDEO.youtubePlayer.cueVideoById(b.videos_array[b.videoid].youtubeID), b.VIDEO.youtubePlayer.setPlaybackQuality(b.ytQuality), t.autoplay && (b.isMobile.any() || b.VIDEO.getViewportStatus() && b.VIDEO.youtubePlayer.playVideo()), b.VIDEO.resizeAll(), v && "AD 5 sec + Pieces After Effects project" != b.options.videos[0].title && "Pieces After Effects project" != b.options.videos[0].title && "AD 5 sec + Space Odyssey After Effects Project" != b.options.videos[0].title && "AD 5 sec Swimwear Spring Summer" != b.options.videos[0].title && "i Create" != b.options.videos[0].title && "Swimwear Spring Summer" != b.options.videos[0].title && "PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM" != b.options.youtubePlaylistID && "Google drive video example" != b.options.videos[0].title && "Dropbox video example" != b.options.videos[0].title && "Livestream HLS m3u8 video example" != b.options.videos[0].title && "Openload video example" != b.options.videos[0].title && "Youtube 360 VR video" != b.options.videos[0].title && "Subtitles video example" != b.options.videos[0].title && "Live YouTube" != b.options.videos[0].title && "HTML5 Live video thumbnails" != b.options.videos[0].title && "HTML5 vtt video thumbnails" != b.options.videos[0].title && (b.VIDEO.pw(), void 0 != b.VIDEO.youtubePlayer && (b.VIDEO.youtubePlayer.stopVideo(), b.VIDEO.youtubePlayer.clearVideo(), b.VIDEO.youtubePlayer.setSize(1, 1))), b.popupTimer = setInterval(function() {
        "yes" == b.videos_array[b.videoid].popupAdShow && b.VIDEO.enablePopup()
      }, 1e3)
    }
  }, this.onPlayerStateChange = function(e) {
    var o = Math.floor(b.VIDEO.youtubePlayer.getCurrentTime());
    b.VIDEO.calculateYoutubeTotalTime(b.VIDEO.youtubePlayer.getDuration()), b.VIDEO.youtubePlayer.getDuration() > 1200 && -1 === e.data && b.VIDEO.youtubePlayer.seekTo(0), b.VIDEO.resizeVideoTrack(), 1 === e.data && 0 == o && (b.youtubeSTARTED = !0), 1 === e.data ? (b.isMobile.any() && b.VIDEO.playButtonScreen.addClass("lite_vp_playButtonScreenHide"), a.removeClass("vp_paused"), a.addClass("lite_vp_playing"), i.change("lite_vp_playing"), b.VIDEO.play(), b._timer = setInterval(function() {
      if ("HTML5" != t.videos[b.videoid].videoType && "HTML5 (self-hosted)" != t.videoType) {
        if (b.progressWidth = b.VIDEO.youtubePlayer.getCurrentTime() / b.VIDEO.youtubePlayer.getDuration() * b.VIDEO.videoTrack.width(), b.VIDEO.videoTrackProgress.css("width", b.progressWidth), b.progressIdleWidth = b.VIDEO.youtubePlayer.getCurrentTime() / b.VIDEO.youtubePlayer.getDuration() * b.VIDEO.progressIdleTrack.width(), b.VIDEO.progressIdle.css("width", b.progressIdleWidth), b.VIDEO.calculateYoutubeElapsedTime(b.VIDEO.youtubePlayer.getCurrentTime()), b.buffered = b.VIDEO.youtubePlayer.getVideoLoadedFraction(), b.downloadWidth = b.buffered * b.VIDEO.videoTrack.width(), b.VIDEO.videoTrackDownload.css("width", b.downloadWidth), b.progressIdleDownloadWidth = b.buffered * b.VIDEO.progressIdleTrack.width(), b.VIDEO.progressIdleDownload.css("width", b.progressIdleDownloadWidth), b.VIDEO.secondsFormat(b.VIDEO.youtubePlayer.getCurrentTime()) == b.videos_array[b.videoid].midrollAD_displayTime) {
          if (b.VIDEO.midrollPlayed) return;
          b.VIDEO.midrollPlayed = !0, "yes" == b.videos_array[b.videoid].midrollAD && (d.canPlayType && d.canPlayType("video/mp4").replace(/no/, "") && (b.canPlay = !0, b.video_pathAD = b.videos_array[b.videoid].midroll_mp4), b.VIDEO.youtubePlayer.pauseVideo(), b.VIDEO.loadAD(b.video_pathAD, "midrollActive"), b.VIDEO.openAD())
        }
        if (b.VIDEO.secondsFormat(b.VIDEO.youtubePlayer.getCurrentTime()) == b.VIDEO.secondsFormat(b.VIDEO.youtubePlayer.getDuration() - 1) && b.VIDEO.youtubePlayer.getDuration() > 0) {
          if (b.VIDEO.postrollPlayed) return;
          b.VIDEO.postrollPlayed = !0, "yes" == b.videos_array[b.videoid].postrollAD && (d.canPlayType && d.canPlayType("video/mp4").replace(/no/, "") && (b.canPlay = !0, b.video_pathAD = b.videos_array[b.videoid].postroll_mp4), b.VIDEO.youtubePlayer.pauseVideo(), b.VIDEO.loadAD(b.video_pathAD, "postrollActive"), b.VIDEO.openAD())
        }
      }
    }, 50)) : 2 === e.data ? (clearInterval(b._timer), a.addClass("vp_paused"), a.removeClass("lite_vp_playing"), i.change("vp_paused"), b.VIDEO.pause()) : 0 === e.data ? (b.VIDEO.gaVideoEnded(), b.VIDEO.midrollPlayed = !1, b.VIDEO.postrollPlayed = !1, b.videoAdPlayed = !1, b.videoid = parseInt(b.videoid) + 1, b.videos_array.length == b.videoid && (b.videoid = 0), "Play next video" == t.onFinish ? (b.VIDEO.shuffleBtnEnabled ? (b.VIDEO.generateRandomNumber(), b.videoid = b.VIDEO.rand, b.VIDEO.setPlaylistItem(b.videoid)) : b.VIDEO.setPlaylistItem(b.videoid), b.VIDEO.playVideoById(b.videoid)) : "Restart video" == t.onFinish ? void 0 != b.VIDEO.youtubePlayer && (b.VIDEO.youtubePlayer.seekTo(0), b.VIDEO.youtubePlayer.playVideo()) : "Stop video" == t.onFinish && (b.VIDEO.pause(), b.VIDEO.state = "vp_paused", b.VIDEO.youtubePlayer.stopVideo(), "" != t.posterImgOnVideoFinish && (b.VIDEO.resetPlayer(), b.VIDEO.youtubePlayer.seekTo(0), b.VIDEO.youtubePlayer.pauseVideo(), b.VIDEO.showPoster2()))) : 5 === e.data && (b.VIDEO.resetPlayer(), b.VIDEO.playButtonScreen.hide()), 1 !== e.data || 0 != o || "yes" != b.videos_array[b.videoid].prerollAD && !b.options.showGlobalPrerollAds ? e.data != YT.PlayerState.PLAYING && e.data != YT.PlayerState.CUED || (b.youtubePLAYING = !0) : (b.VIDEO.videoAdStarted = !0, b.videoAdPlayed ? b.VIDEO.youtubePlayer.playVideo() : (b.VIDEO.youtubePlayer.pauseVideo(), d.canPlayType && d.canPlayType("video/mp4").replace(/no/, "") && (this.canPlay = !0, t.showGlobalPrerollAds ? b.video_pathAD = b.VIDEO.globalPrerollAds_arr[b.VIDEO.getGlobalPrerollRandomNumber()] : b.video_pathAD = b.videos_array[b.videoid].preroll_mp4), b.VIDEO.loadAD(b.video_pathAD, "prerollActive"), b.VIDEO.openAD()))
  };
  var O = -1;
  if (e(t.videos).each(function() {
      O += 1;
      var i = {
        id: O,
        title: this.title,
        videoType: this.videoType,
        youtubeID: this.youtubeID,
        vimeoID: this.vimeoID,
        video_path_url: this.url,
        video_path_urlsd: this.urlsd,
        mp4VideoThumbnails_vtt: this.mp4VideoThumbnails_vtt,
        mp4VideoThumbnails_img: this.mp4VideoThumbnails_img,
        ccUrl: this.ccUrl,
        enable_mp4_download: this.enable_mp4_download,
        imageUrl: this.imageUrl,
        imageTimer: this.imageTimer,
        prerollAD: this.prerollAD,
        prerollGotoLink: this.prerollGotoLink,
        preroll_mp4: this.preroll_mp4,
        prerollSkipTimer: this.prerollSkipTimer,
        midrollAD: this.midrollAD,
        midrollAD_displayTime: this.midrollAD_displayTime,
        midrollGotoLink: this.midrollGotoLink,
        midroll_mp4: this.midroll_mp4,
        midrollSkipTimer: this.midrollSkipTimer,
        postrollAD: this.postrollAD,
        postrollGotoLink: this.postrollGotoLink,
        postroll_mp4: this.postroll_mp4,
        postrollSkipTimer: this.postrollSkipTimer,
        popupImg: this.popupImg,
        popupAdShow: this.popupAdShow,
        popupAdStartTime: this.popupAdStartTime,
        popupAdEndTime: this.popupAdEndTime,
        popupAdGoToLink: this.popupAdGoToLink,
        description: this.description,
        thumbnail_image: this.thumbImg,
        info_text: this.info
      };
      if (i.title = i.title || "", i.info_text = i.info_text || "", i.description = i.description || "", i.thumbnail_image = i.thumbnail_image || "", b.videos_array.push(i), b.nowPlayingThumbnail = e("<div />"), b.nowPlayingThumbnail.addClass("lite_vp_nowPlayingThumbnail"), b.options.playlistShowOnlyThumbnails && b.nowPlayingThumbnail.addClass("lite_vp_onlyThumbnails"), b.nowPlayingThumbnail.text(b.options.nowPlayingTooltipTxt), b.nowPlayingThumbnail.hide(), b.itemLeft = e("<div />"), b.itemLeft.addClass("lite_vp_itemLeft"), b.options.playlistShowOnlyThumbnails && b.itemLeft.addClass("lite_vp_onlyThumbnails"), b.i = document.createElement("img"), b.i.onload = function() {
          b.thumbImageW = this.width, b.thumbImageH = this.height
        }, b.i.src = i.thumbnail_image, "youtube" != t.videos[O].videoType && "YouTube" != t.videoType || "auto" != i.thumbnail_image && "" != i.thumbnail_image && "undefined" != i.thumbnail_image || (b.options.playlistShowOnlyThumbnails ? b.i.src = "https://i.ytimg.com/vi/" + t.videos[O].youtubeID + "/mqdefault.jpg" : b.i.src = "http://img.youtube.com/vi/" + t.videos[O].youtubeID + "/1.jpg"), b.itemLeft.append(b.i), b.itemLeft.append(b.nowPlayingThumbnail), e(b.i).addClass("lite_vp_thumbnail_image lite_vp_themeColorThumbBorder"), !b.options.playlistShowOnlyThumbnails) var o = '<div class="lite_vp_itemRight"><div class="lite_vp_title lite_vp_themeColorText">' + i.title + '</div><div class="lite_vp_description lite_vp_controlsColor lite_vp_' + b.options.instanceTheme + '"> ' + i.description + "</div></div>",
        a = '<div class="lite_vp_itemRight_bottom"><div class="lite_vp_title lite_vp_themeColorText">' + i.title + '</div><div class="lite_vp_description lite_vp_controlsColor lite_vp_' + b.options.instanceTheme + '"> ' + i.description + "</div></div>";
      switch (t.playlist) {
        case "Right playlist":
          b.item = e("<div />"), b.item.addClass("lite_vp_item").css("top", String(f) + "px"), b.item_array.push(b.item), b.item.addClass("lite_vp_itemUnselected lite_vp_" + b.options.instanceTheme), b.item.append(b.itemLeft), b.item.append(o), f += b.options.playlistShowOnlyThumbnails ? 153 : 80;
          break;
        case "Bottom playlist":
          b.item = e("<div />"), b.item.addClass("lite_vp_item").css("left", String(E) + "px"), b.item_array.push(b.item), b.item.addClass("lite_vp_itemUnselected_bottom lite_vp_" + b.options.instanceTheme), b.item.css("display", "inline-flex"), b.item.append(b.itemLeft), b.item.append(a)
      }
      void 0 != b.item && (b.isMobile.any() || (b.item.mouseover(function() {
        e(this).addClass("lite_vp_playlistItem_hover")
      }), b.item.mouseout(function() {
        e(this).removeClass("lite_vp_playlistItem_hover")
      }))), b.options.playlistOrder = b.options.playlistOrder.toString(), "" != b.options.playlistOrder && "undefined" != b.options.playlistOrder || b.playlistContent.append(b.item), b.options.playlistShowOnlyThumbnails && e(b.item_array[O]).addClass("lite_vp_onlyThumbnails"), "Right playlist" != b.options.playlist && "Bottom playlist" != b.options.playlist || ("" == i.thumbnail_image || "thumbImg" == i.thumbnail_image || "undefined" == i.thumbnail_image ? (b.itemLeft.hide(), b.item.find(".lite_vp_itemRight").css({
        left: 7,
        paddingTop: 7,
        width: "240"
      }), "" == i.title) : "" === i.thumbnail_image && "thumbImg" === i.thumbnail_image && "undefined" === i.thumbnail_image || (b.itemLeft.show(), b.item.find(".lite_vp_itemRight").css({
        left: 76,
        paddingTop: 0,
        width: "176"
      }), "" == i.title)), void 0 != b.item && b.item.bind(b.CLICK_EV, function() {
        b.touchmove || b.scrollingIsOn && b.isMobile.any() || (b.preloader && b.preloader.stop().animate({
          opacity: 1
        }, 0, function() {
          e(this).show()
        }), b.videoid = i.id, b.VIDEO.setPlaylistItem(b.videoid), b.VIDEO.resetPlayer(), b.VIDEO.resetPlayerAD(), b.VIDEO.resizeAll(), V(), b.VIDEO.playVideoById(b.videoid), b.youtubeSTARTED = !1, v && "AD 5 sec + Pieces After Effects project" != b.options.videos[0].title && "Pieces After Effects project" != b.options.videos[0].title && "AD 5 sec + Space Odyssey After Effects Project" != b.options.videos[0].title && "AD 5 sec Swimwear Spring Summer" != b.options.videos[0].title && "i Create" != b.options.videos[0].title && "Swimwear Spring Summer" != b.options.videos[0].title && "PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM" != b.options.youtubePlaylistID && "Google drive video example" != b.options.videos[0].title && "Dropbox video example" != b.options.videos[0].title && "Livestream HLS m3u8 video example" != b.options.videos[0].title && "Openload video example" != b.options.videos[0].title && "Youtube 360 VR video" != b.options.videos[0].title && "Subtitles video example" != b.options.videos[0].title && "Live YouTube" != b.options.videos[0].title && "HTML5 Live video thumbnails" != b.options.videos[0].title && "HTML5 vtt video thumbnails" != b.options.videos[0].title && b.VIDEO.pw())
      })
    }), "Yes" == t.loadRandomVideoOnStart ? b.videoid = b.rand : b.videoid = 0, b.params.id && (b.videoid = b.rand = parseInt(b.params.id)), "" != b.options.playlistOrder && "undefined" != b.options.playlistOrder) {
    var g = t.playlistOrder.split(",");
    "Yes" == t.loadRandomVideoOnStart ? b.rand = parseInt(g[Math.floor(Math.random() * g.length)]) : b.videoid = parseInt(g[0]);
    for (var P = 0; P <= g.length - 1; P++)
      if (b.playlistContent.append(b.item_array[g[P]]), b.item_array.length - 1 < g[P]) {
        b.videoid = 0;
        for (var P = 0; P <= b.options.videos.length - 1; P++) b.playlistContent.append(b.item_array[P])
      }
  }
  switch (b.options.playlist) {
    case "Right playlist":
      "Yes" == t.loadRandomVideoOnStart ? (e(b.item_array[b.rand]).removeClass("lite_vp_itemUnselected lite_vp_" + this.options.instanceTheme).addClass("lite_vp_itemSelected lite_vp_" + this.options.instanceTheme), b.item_array[b.rand].find(".lite_vp_thumbnail_image").removeClass("lite_vp_thumbnail_image").addClass("lite_vp_thumbnail_imageSelected"), b.VIDEO.playedVideos.push(b.rand)) : (e(b.item_array[b.videoid]).removeClass("lite_vp_itemUnselected lite_vp_" + this.options.instanceTheme).addClass("lite_vp_itemSelected lite_vp_" + this.options.instanceTheme), b.item_array[b.videoid].find(".lite_vp_thumbnail_image").removeClass("lite_vp_thumbnail_image").addClass("lite_vp_thumbnail_imageSelected"), b.VIDEO.playedVideos.push(b.videoid));
      break;
    case "Bottom playlist":
      "Yes" == t.loadRandomVideoOnStart ? (e(b.item_array[b.rand]).removeClass("lite_vp_itemUnselected_bottom lite_vp_" + this.options.instanceTheme).addClass("lite_vp_itemSelected_bottom lite_vp_" + this.options.instanceTheme), b.item_array[b.rand].find(".lite_vp_thumbnail_image").removeClass("lite_vp_thumbnail_image").addClass("lite_vp_thumbnail_imageSelected"), b.VIDEO.playedVideos.push(b.rand)) : (e(b.item_array[b.videoid]).removeClass("lite_vp_itemUnselected_bottom lite_vp_" + this.options.instanceTheme).addClass("lite_vp_itemSelected_bottom lite_vp_" + this.options.instanceTheme), b.item_array[b.videoid].find(".lite_vp_thumbnail_image").removeClass("lite_vp_thumbnail_image").addClass("lite_vp_thumbnail_imageSelected"), b.VIDEO.playedVideos.push(b.videoid))
  }
  if (e(b.playlistContent).mCustomScrollbar("scrollTo", b.item_array[b.videoid]), "youtube" == t.videos[b.videoid].videoType || "YouTube" == t.videoType) b.VIDEO.imageWrapper.css({
    zIndex: 0
  }), b.VIDEO.imageWrapper.css({
    visibility: "none"
  }), b.VIDEO.hideVideoElements(), b.preloader.stop().animate({
    opacity: 0
  }, 0, function() {
    e(this).hide()
  }), b.VIDEO.ytWrapper.css({
    zIndex: 501
  }), b.VIDEO.ytWrapper.css({
    visibility: "visible"
  }), b.vimeoWrapper.css({
    zIndex: 0
  });
  else if ("HTML5" == t.videos[b.videoid].videoType || "HTML5 (self-hosted)" == t.videoType) {
    if (b.VIDEO.imageWrapper.css({
        zIndex: 0
      }), b.VIDEO.imageWrapper.css({
        visibility: "none"
      }), b.VIDEO.ytWrapper.css({
        zIndex: 0
      }), b.VIDEO.ytWrapper.css({
        visibility: "hidden"
      }), b.vimeoWrapper.css({
        zIndex: 0
      }), d.canPlayType && d.canPlayType("video/mp4").replace(/no/, ""))
      if (this.canPlay = !0, "Yes" == t.loadRandomVideoOnStart) {
        switch (t.HTML5VideoQuality) {
          case "HD":
            b.video_path = b.videos_array[b.rand].video_path_url;
            break;
          case "SD":
            b.video_path = b.videos_array[b.rand].video_path_urlsd
        }
        b.video_pathAD = b.videos_array[b.rand].preroll_mp4
      } else if ("No" == t.loadRandomVideoOnStart) {
      switch (t.HTML5VideoQuality) {
        case "HD":
          b.video_path = b.videos_array[b.videoid].video_path_url;
          break;
        case "SD":
          b.video_path = b.videos_array[b.videoid].video_path_urlsd
      }
      b.video_pathAD = b.videos_array[b.videoid].preroll_mp4
    }
    b.VIDEO.load(b.video_path, "0")
  } else "vimeo" == t.videos[b.videoid].videoType || "Vimeo" == t.videoType ? (b.VIDEO.imageWrapper.css({
    zIndex: 0
  }), b.VIDEO.imageWrapper.css({
    visibility: "none"
  }), b.VIDEO.hideCustomControls(), b.VIDEO.hideVideoElements(), b.preloader.stop().animate({
    opacity: 0
  }, 700, function() {
    e(this).hide()
  }), b.vimeoWrapper.css({
    zIndex: 501
  }), b.isMobile.any() ? "Yes" == t.loadRandomVideoOnStart ? e(b.vimeoWrapper).find("#" + b.options.instanceName).attr("src", "https://player.vimeo.com/video/" + b.videos_array[b.rand].vimeoID + "?autoplay=0?api=1&player_id=" + b.options.instanceName + "&color=" + t.vimeoColor) : e(b.vimeoWrapper).find("#" + b.options.instanceName).attr("src", "https://player.vimeo.com/video/" + b.videos_array[b.videoid].vimeoID + "?autoplay=0?api=1&player_id=" + b.options.instanceName + "&color=" + t.vimeoColor) : t.autoplay ? "Yes" == t.loadRandomVideoOnStart ? e(b.vimeoWrapper).find("#" + b.options.instanceName).attr("src", "https://player.vimeo.com/video/" + b.videos_array[b.rand].vimeoID + "?autoplay=1?api=1&player_id=" + b.options.instanceName + "&color=" + t.vimeoColor + "&muted=1") : e(b.vimeoWrapper).find("#" + b.options.instanceName).attr("src", "https://player.vimeo.com/video/" + b.videos_array[b.videoid].vimeoID + "?autoplay=1?api=1&player_id=" + b.options.instanceName + "&color=" + t.vimeoColor + "&muted=1") : "Yes" == t.loadRandomVideoOnStart ? e(b.vimeoWrapper).find("#" + b.options.instanceName).attr("src", "https://player.vimeo.com/video/" + b.videos_array[b.rand].vimeoID + "?autoplay=0?api=1&player_id=" + b.options.instanceName + "&color=" + t.vimeoColor) : e(b.vimeoWrapper).find("#" + b.options.instanceName).attr("src", "https://player.vimeo.com/video/" + b.videos_array[b.videoid].vimeoID + "?autoplay=0?api=1&player_id=" + b.options.instanceName + "&color=" + t.vimeoColor), V()) : "image" != t.videos[b.videoid].videoType && "Image" != t.videoType || (b.VIDEO.hideCustomControls(), b.VIDEO.hideVideoElements(), b.VIDEO.ytWrapper.css({
    zIndex: 0
  }), b.VIDEO.ytWrapper.css({
    visibility: "hidden"
  }), b.vimeoWrapper.css({
    zIndex: 0
  }), b.vimeoWrapper.css({
    visibility: "hidden"
  }), b.VIDEO.imageWrapper.css({
    zIndex: 502
  }), b.VIDEO.imageWrapper.css({
    visibility: "visible"
  }), b.VIDEO.imageDisplayed.src = b.videos_array[0].imageUrl, e(b.VIDEO.imageDisplayed).on("load", function() {
    t.autoplay && b.VIDEO.setImageTimer()
  }));
  b.nextBtn.bind(b.CLICK_EV, function() {
    b.VIDEO.shuffleBtnEnabled ? (b.VIDEO.generateRandomNumber(), b.videoid = b.VIDEO.rand, b.VIDEO.setPlaylistItem(b.videoid)) : (b.videoid = b.videoid + 1, b.videoid >= t.videos.length && (b.videoid = 0), b.VIDEO.setPlaylistItem(b.videoid)), b.VIDEO.playVideoById(b.videoid), V()
  }), b.previousBtn.bind(b.CLICK_EV, function() {
    b.VIDEO.shuffleBtnEnabled ? (b.VIDEO.generateRandomNumber(), b.videoid = b.VIDEO.rand, b.VIDEO.setPlaylistItem(b.videoid)) : (b.videoid = b.videoid - 1, b.videoid < 0 && (b.videoid = t.videos.length - 1), b.VIDEO.setPlaylistItem(b.videoid)), b.VIDEO.playVideoById(b.videoid), V()
  }), b.shuffleBtn.bind(b.CLICK_EV, function() {
    b.VIDEO.toggleShuffleBtn()
  }), b.lastBtn.bind(b.CLICK_EV, function() {
    e(b.playlistContent).mCustomScrollbar("scrollTo", "last")
  }), b.firstBtn.bind(b.CLICK_EV, function() {
    e(b.playlistContent).mCustomScrollbar("scrollTo", "first")
  }), b.totalWidth = t.videoPlayerWidth, b.totalHeight = t.videoPlayerHeight, "Right playlist" != t.playlist && "Bottom playlist" != t.playlist || b.element && (o.append(b.playlist), b.playlist.append(b.playlistContent)), this.playlistW = this.playlist.width(), this.playlistH = this.playlist.height(), "Right playlist" == t.playlist ? (b.playlistContent.css("height", String(f) + "px"), b.playerWidth = b.totalWidth - b.playlist.width(), b.playerHeight = b.totalHeight - b.playlist.height(), b.playlist.css({
    height: "100%",
    top: 0
  }), b.playlistContent.height(o.height() - 50), e(b.playlistContent).mCustomScrollbar({
    axis: "y",
    theme: b.options.playlistScrollType,
    scrollButtons: {
      enable: !0
    },
    snapOffset: 50,
    callbacks: {
      onScrollStart: function() {
        b.isMobile.any() && setTimeout(function() {
          b.scrollingIsOn = !0
        }, 50)
      },
      onScroll: function() {
        b.isMobile.any() && (b.scrollingIsOn = !1, b.touchmove = !1)
      },
      whileScrolling: function() {}
    }
  })) : "Bottom playlist" == t.playlist && (b.playlistContent.css("width", String(E) + "px"), b.playerWidth = b.totalWidth, b.playerHeight = b.totalHeight - b.playlist.height(), b.playlist.css({
    left: 0,
    width: "100%",
    bottom: 0
  }), b.playlistContent.width(o.width()), e(b.playlistContent).mCustomScrollbar({
    axis: "x",
    theme: b.options.playlistScrollType,
    scrollButtons: {
      enable: !0
    },
    callbacks: {
      onScrollStart: function() {
        b.isMobile.any() && setTimeout(function() {
          b.scrollingIsOn = !0
        }, 50)
      },
      onScroll: function() {
        b.isMobile.any() && (b.scrollingIsOn = !1, b.touchmove = !1)
      },
      whileScrolling: function() {}
    },
    advanced: {
      autoExpandHorizontalScroll: !0
    },
    setHeight: "auto",
    setWidth: "auto"
  })), e(b.playlistContent).mCustomScrollbar("scrollTo", b.item_array[b.videoid]), e("body").bind("touchmove", function() {
    b.touchmove = !0
  })
}, PLAYER.Playlist.prototype = {}, PLAYER.Playlist.prototype.hidePlaylist = function() {
  this.playlist.hide()
}, PLAYER.Playlist.prototype.showPlaylist = function() {
  this.playlist.show()
}, PLAYER.Playlist.prototype.resizePlaylist = function() {
  var e = this;
  switch (this.options.playlist) {
    case "Right playlist":
      this.playlist.css({
        right: 0,
        height: "100%"
      }), this.playlistContent.css({
        top: 0,
        height: e.mainContainer.height() - 50
      }), this.playlistContent.height(this.mainContainer.height() - this.playlistBar.height());
      break;
    case "Bottom playlist":
      this.playlist.css({
        left: 0,
        width: "100%",
        bottom: 0
      }), this.playlistContent.height(this.playlist.height() - this.playlistBar.height())
  }
  this.playlistBarInside.css({
    left: e.playlistBar.width() / 2 - this.playlistBarInside.width() / 2
  })
}, PLAYER.Playlist.prototype.playYoutube = function(e) {
  void 0 != this.VIDEO.youtubePlayer && (this.VIDEO.youtubePlayer.cueVideoById(this.videos_array[e].youtubeID), this.VIDEO.youtubePlayer.setPlaybackQuality(this.ytQuality), this.preloader.hide(), this.VIDEO.ytWrapper.css({
    zIndex: 501
  }), this.VIDEO.ytWrapper.css({
    visibility: "visible"
  }), this.VIDEO.youtubePlayer.playVideo()), this.VIDEO.resizeAll()
}, PLAYER.Playlist.prototype.playVimeo = function(e) {
  this.preloader.hide(), this.vimeoWrapper.css({
    zIndex: 501
  }), this.isMobile.any() ? $(self.vimeoWrapper).find("#" + self.options.instanceName).attr("src", "https://player.vimeo.com/video/" + this.videos_array[e].vimeoID + "?autoplay=0?api=1&player_id=" + self.options.instanceName + "&color=" + this.options.vimeoColor) : $(self.vimeoWrapper).find("#" + self.options.instanceName).attr("src", "https://player.vimeo.com/video/" + this.videos_array[e].vimeoID + "?autoplay=1?api=1&player_id=" + self.options.instanceName + "&color=" + this.options.vimeoColor)
};