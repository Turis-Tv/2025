		$(document).ready(function($)
		{
			videoPlayer = $("#VideoPlayer").Video({   //ALL PLUGIN OPTIONS
				//(how may times video is played, downloaded, etc.)
                instanceName:"player1",                      //name of the player instance
				instanceTheme:"dark",                        //choose video player theme: "dark", "light"
				autohideControls:5,                          //autohide HTML5 player controls
				hideControlsOnMouseOut:"No",                 //hide HTML5 player controls on mouse out of the player: "Yes","No"
				playerLayout: "fixedSize",                   //Select player layout: "fitToContainer" (responsive mode), "fixedSize" (fixed mode), "fitToBrowser" (fill the browser mode)
				videoPlayerWidth:1100,                       //fixed total player width (only for playerLayout: "fixedSize")
				videoPlayerHeight:580,                       //fixed total player height (only for playerLayout: "fixedSize")
				videoRatio: 16/9,                            //set your video ratio (calculate video width/video height)
                videoRatioStretch: false,                    //adjust video ratio for case when playlist is "opened" : true/false
				iOSPlaysinline: true,                        //on iOS device: play videos inline (like on desktop) or in Fullscreen by default: true/false
                floatPlayerOutsideViewport: false,           //show Sticky player if video player is not in viewport when scrolling through page
				pauseStickyOutsideViewport: false,           //pause sticky player if video player is not in viewport when scrolling through page
                lightBox:false,                              //lightbox mode :true/false
				lightBoxAutoplay: false,                     //autoplay video when lightbox opens: true/false
				lightBoxThumbnail:"images/preview_images/poster.jpg", //lightbox thumbnail image
				lightBoxThumbnailWidth: 400,                 //lightbox thumbnail image width
				lightBoxThumbnailHeight: 220,                //lightbox thumbnail image height
				lightBoxCloseOnOutsideClick: true,           //close lightbox when clicked outside of player area
				playlist:"Right playlist",                   //choose playlist type: "Right playlist", "Bottom playlist", "Off"
                playlistShowOnlyThumbnails:false,            //show thumbnails only in playlist
				playlistOrder:"",                            //choose order of videos in playlist, choose which videos will show ("0,1,2" will show first three videos from playlist)
                playlistScrollType:"light",                  //choose scrollbar type: "light","minimal","light-2","light-3","light-thick","light-thin","inset","inset-2","inset-3","rounded","rounded-dots","3d","dark","minimal-dark","dark-2","dark-3","dark-thick","dark-thin","inset-dark","inset-2-dark","inset-3-dark","rounded-dark","rounded-dots-dark","3d-dark","3d-thick-dark"
				playlistBehaviourOnPageload:"opened (default)",//choose playlist behaviour when webpage loads: "closed", "opened (default)" (not apply to Vimeo player)
				autoplay:true,                              //autoplay when webpage loads: true/false (youtube autoplay - not supported on mobile)
				colorAccent:"#767676",  

				videoPlayerShadow:"effect1",                 //choose player shadow:  "effect1" , "effect2", "effect3", "effect4", "effect5", "effect6", "off"
				loadRandomVideoOnStart:"No",                 //choose to load random video when webpage loads: "Yes", "No"
				shuffle:"No",				                 //choose to shuffle videos when playing one after another: "Yes", "No" (shuffle button enabled/disabled on start)
				posterImgOnVideoFinish:"",                   //player poster image on video finish (if enabled onFinish:"Stop video")
				onFinish:"Play next video",                  //"Play next video","Restart video", "Stop video",
				nowPlayingText:"Yes",                        //enable disable now playing title: "Yes","No"
				HTML5VideoQuality:"HD",                      //choose HTML5 video quality (HD, SD)
                
                preloadSelfHosted:"none",                    //choose preload buffer for self hosted mp4 videos (video type HTML5): "none", "auto"
				rightClickMenu:true,                         //enable/disable right click over HTML5 player: true/false
				hideVideoSource:true,						 //option to hide self hosted video sources (to prevent users from download/steal your videos): true/false
				showAllControls:true,						 //enable/disable all HTML5 player controls: true/false

				rewindShow: "Yes", 							 //enable/disable rewind option: "Yes","No"
                qualityShow: "Yes",                          //enable/disable quality video option: "Yes","No"
				infoShow:"No",                              //enable/disable info option: "Yes","No"
				shareShow:"No",                             //enable/disable all share options: "Yes","No"
				facebookShow:"No",                          //enable/disable facebook option individually: "Yes","No"
				twitterShow:"No",                           //enable/disable twitter option individually: "Yes","No"
				
				logoShow:"Yes",                              //"Yes","No"
				logoClickable:"Yes",                         //"Yes","No"
				logoPath:"images/logo/logo.png",             //path to logo image
				logoGoToLink:"",                                //redirect to page when logo clicked
				logoPosition:"bottom-left",                  //choose logo position: "bottom-right","bottom-left","top-right"
				embedShow:"No",                             //enable/disable embed option: "Yes","No"

                mutedNotificationText:"Video has no sound",  //translate "Video has no sound" button to your language
				playBtnTooltipTxt:"Play",                    //translate "Play" to your language
				pauseBtnTooltipTxt:"Pause",                  //translate "Pause" to your language
				rewindBtnTooltipTxt:"Rewind",                //translate "Rewind" to your language
				downloadVideoBtnTooltipTxt:"Download video", //translate "Download video" to your language
				qualityBtnOpenedTooltipTxt:"Close settings", //translate "Close settings" to your language
				qualityBtnClosedTooltipTxt:"Settings",       //translate "Settings" to your language
				ccShowOnHTML5Videos: true,                   //enable/disable mp4 captions antalyaly for all HTML5 videos
                ccShowOnVideoLoad: true,                     //enable/disable mp4 captions to display on HTML5 video load (if ccUrl is defined)
                ccBtnOpenedTooltipTxt:"Hide captions",       //translate "Hide captions" to your language
				ccBtnClosedTooltipTxt:"Show captions",       //translate "Show captions" to your language
                muteBtnTooltipTxt:"Mute",                    //translate "Mute" to your language
				unmuteBtnTooltipTxt:"Unmute",                //translate "Unmute" to your language
				fullscreenBtnTooltipTxt:"Fullscreen",        //translate "Fullscreen" to your language
				exitFullscreenBtnTooltipTxt:"Exit fullscreen",//translate "Exit fullscreen" to your language
				infoBtnTooltipTxt:"Show info",				 //translate "Show info" to your language
				embedBtnTooltipTxt:"Embed",                  //translate "Embed" to your language
				shareBtnTooltipTxt:"Share",                  //translate "Share" to your language
				volumeTooltipTxt:"Volume",                   //translate "Volume" to your language
				playlistBtnClosedTooltipTxt:"Show playlist", //translate "Show playlist" to your language
				playlistBtnOpenedTooltipTxt:"Hide playlist", //translate "Exit fullscreen" to your language
				facebookBtnTooltipTxt:"Share on Facebook",   //translate "Share on Facebook" to your language
				twitterBtnTooltipTxt:"Share on Twitter",     //translate "Share on Twitter" to your language
				lastBtnTooltipTxt:"Go to last video",        //translate "Go to last video" to your language
				firstBtnTooltipTxt:"Go to first video",      //translate "Go to first video" to your language
				nextBtnTooltipTxt:"Play next video",         //translate "Play next video" to your language
				previousBtnTooltipTxt:"Play previous video", //translate "Play previous video" to your language
				shuffleBtnOnTooltipTxt:"Shuffle on",         //translate "Shuffle on" to your language
				shuffleBtnOffTooltipTxt:"Shuffle off",       //translate "Shuffle off" to your language
				nowPlayingTooltipTxt:"PLAYING",          //translate "PLAYING" to your language


				//manual playlist
				videos:[
					
					{
						videoType:"HTML5",
                       title:"TRT 1" ,
                       url:"https://live.euromediacenter.com/kanal19/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/trt1.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ATV" ,
                       url:"https://x.canlitvapp.com/aytv/index.m3u8",	
                       thumbImg:"image/atv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ATV AVRUPA" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-atvavrupa/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/atvavrupa.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"SHOW TV" ,
                       url:"https://stream.tvcdn.net/ulusal/show-tv.m3u8",	
                       thumbImg:"image/showtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"SHOWTURK TV" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-showtvturk/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/showturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL D" ,
                       url:"https://stream.tvcdn.net/ulusal/kanal-d.m3u8",	
                       thumbImg:"image/kanald.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"EURO D" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-eurod/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/eurod.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"STAR TV" ,
                       url:"https://tgn.bozztv.com/trn03/gt-startv/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/startv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"EURO STAR" ,
                       url:"https://tgn.bozztv.com/trn03/gt-eurostar/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/eurostar.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"NOW TV" ,
                       url:"https://uycyyuuzyh.turknet.ercdn.net/nphindgytw/nowtv/nowtv_720p.m3u8",	
                       thumbImg:"image/now.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV8" ,
                       url:"https://c.fulltvizle.com/kanal8/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/tv8.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV8-int" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-tv8int/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/tv8int.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV8-5" ,
                       url:"https://yayin2.canlitv.fun/livetv/tv8-5.stream/playlist.m3u8",	
                       thumbImg:"image/tv85.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL 7" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-kanal7/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/kanal7.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"A2 TV" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-atva2/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/a2.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TEVE 2" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-tv2tv/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/teve2.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"BEYAZ TV" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-beyaztv/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/beyaztv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"360 TV" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-sky360/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/360tv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TLC" ,
                       url:"https://dogus-live.daioncdn.net/tlc/tlc_720p.m3u8",	
                       thumbImg:"image/tlc.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"DMAX" ,
                       url:"https://dogus-live.daioncdn.net/dmax/dmax_720p.m3u8",	
                       thumbImg:"image/dmax.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT 2" ,
                       url:"https://stream.tvcdn.net/eglence/trt-2.m3u8",	
                       thumbImg:"image/trt2.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT TÜRK" ,
                       url:"https://tgn.bozztv.com/trn03/gt-trtturk/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/trtturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT AVAZ" ,
                       url:"https://tgn.bozztv.com/trn03/gt-trtavaz/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/trtavaz.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"HALK TV" ,
                       url:"https://tgn.bozztv.com/trn03/gt-halktv/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/halktv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KRT TV" ,
                       url:"https://tgn.bozztv.com/trn03/gt-krttv/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/krt.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TELE 1" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-tele1/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/tele1.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"SÖZCÜ TV" ,
                       url:"https://tgn.bozztv.com/trn03/gt-sozcutv/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/sozcutv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"FLASH HABER" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-flashtv/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/flashhaber.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"NTV" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-ntvtv/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/ntv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"HABER TÜRK" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-haberturk/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/haberturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"CNN TÜRK" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-cnnturk/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/cnnturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"BLOOMBERG HT" ,
                       url:"https://ciner-live.daioncdn.net/bloomberght/bloomberght_720p.m3u8",	
                       thumbImg:"image/bloomberght.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"HABER GLOBAL" ,
                       url:"https://tgn.bozztv.com/trn03/gt-haberglobal/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/haberglobal.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT HABER" ,
                       url:"https://tgn.bozztv.com/trn03/gt-trthaber/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/trthaber.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ULUSAL KANAL" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-ulusalkanal/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/ulusalkanal.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TGRT HABER" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-tgrthaber/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/tgrthaber.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TGRT EU" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-tgrteu/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/tgrteu.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TBMM" ,
                       url:"https://meclistv-live.ercdn.net/meclistv/meclistv.m3u8",	
                       thumbImg:"image/tbmmtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV100" ,
                       url:"https://tgn.bozztv.com/trn03/gt-tv100/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/tv100.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TURK HABER" ,
                       url:"https://edge1.socialsmart.tv/turkhaber/bant1/playlist.m3u8",	
                       thumbImg:"image/turkhaber.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT BELGESEL" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-trtbelgesel/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/trtbelgesel.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Belgesel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TGRT BELGESEL" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-tgrtbelgesel/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/tgrtbelgesel.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Belgesel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT ÇOCUK" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-trt4cocuk/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/trtcocuk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"MINIKA GO" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-minikago/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/minikago.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"MINIKA ÇOCUK" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-minikacocuk/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/minikacocuk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT MÜZIK" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-trtmusiclive/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/trtmuzik.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"DREAM TURK" ,
                       url:"https://tgn.bozztv.com/trn03/gt-dreamturk/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/dreamtvturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TATLISES TV" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-powerturk/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/tatlisestv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KRAL POP TV" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-kralpop/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/kralpoptv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"BEINSPORT HABER" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-beinsportshaber/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/beinsportshaber.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT SPOR" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-trtspor/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/trtspor.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT SPOR YILDIZ" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-trtspor2/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/trtspor-yildiz.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"A SPOR" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-aspor/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/aspor.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"CBC SPORT" ,
                       url:"https://tgn.bozztv.com/dvrfl05/gin-cbcs/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/cbcsport.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"SPORTS TV" ,
                       url:"https://live.sportstv.com.tr/hls/low/sportstv_fhd/index.m3u8",	
                       thumbImg:"image/sportstv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"FB TV" ,
                       url:"https://tgn.bozztv.com/trn03/gt-fbtv/tracks-v1a1/mono.m3u8",	
                       thumbImg:"image/fbtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					}


				]
			});
		});