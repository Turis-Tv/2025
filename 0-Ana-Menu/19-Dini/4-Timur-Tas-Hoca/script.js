function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

  var listAudio = [
    {
      name:"♫ Allah_Icin_Kurban_Kesmek ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Allah_Icin_Kurban_Kesmek.mp3 ",
      duration:""
    },

    {
      name:"♫ Kendine-Gel ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Ey-Musluman-Kendine-Gel.mp3  ",
      duration:""
    },


    {
      name:"♫ Fatihin_Istanbulu_Fethi ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Fatihin_Istanbulu_Fethi.mp3 ",
      duration:""
    },
 {
      name:"♫ Haram-ve-isyan ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Haram-ve-isyan-Timurtas-Ucar.mp3 ",
      duration:""
    },
 {
      name:"♫ Insan-Esya-Ahiret-1 ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Insan-Esya-Ahiret-1.mp3",
      duration:""
    },
 {
      name:"♫ Islam-Bir-Butundur ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Islam_Bir_Butundur_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Istanbulun_Fethi-1 ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Istanbulun_Fethi-1.mp3",
      duration:""
    },
 {
      name:"♫ Kabeye-Suikast ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Kabeye-Suikast_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Katil-Amerika  ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Katil-Amerika.mp3  ",
      duration:""
    },
 {
      name:"♫ Kuran-i-Bilmeyen-ALLAH-i-Taniyamaz  ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Kuran-i_Bilmeyen_ALLAH-i_Taniyamaz.mp3 ",
      duration:""
    },
 {
      name:"♫ Kuran-in-Bildirdikleri-Ortaya-Cikiyor ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Kuran-in-Bildirdikleri-Ortaya-Cikiyor.mp3",
      duration:""
    },
 {
      name:"♫ Kuran-ve-Islamiyette-Kusur-Ariyorlar ",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Kuran_ve_Islamiyette_Kusur_Ariyorlar_64kb.mp3",
      duration:""
    },

 {
      name:"♫ Kurban-Bayrami ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Kurban_Bayrami_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Kutlu-Dogum-Haftasi  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Kutlu_Dogum_Haftasi.mp3 ",
      duration:""
    },
 {
      name:"♫ Lut-Kavmi-ve-Lutilik ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Lut_Kavmi_ve_Lutilik.mp3 ",
      duration:""
    },
 {
      name:"♫ Muslumanin-Gayesi-Allah-in-Rizasidir ",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Muslumanin_Gayesi_Allah_in_Rizasidir.mp3 ",
      duration:""
    },
 {
      name:"♫ Nasilsiniz-Sorusu",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Nasilsiniz-Sorusu.mp3  ",
      duration:""
    },
 {
      name:"♫ Omrumuz-Tukeniyor ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Omrumuz_Tukeniyor_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Peygamber-Efendimiz-SAV-Ne-Getirdi ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Peygamber_Efendimiz_SAV_Ne_Getirdi_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Regaib-Sabahi ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Regaib-Sabahi_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Sakin-Namazi-Terketme ",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Sakin_Namazi_Terketme_64kb.mp3",
      duration:""
    },
 {
      name:"♫ Tabii-Afetler",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Tabii-Afetler_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Tebbet-Suresi-Tefsiri ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Tebbet_Suresi_Tefsiri_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Timurtas-Ucar-30_Gun ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-30_Gun_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ TimurtasUcar-3-Aylar ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-3_Aylar_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ 3-Aylarin-Onemi-Ve-Zekat ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-3_Aylarin_Onemi_Ve_Zekat_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Evler_Sunnet_Merasimi ",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-500_Evler_Sunnet_Merasimi_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ 5_Kitada_da_Islam_Gundem ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-5_Kitada_da_Islam_Gundem_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Islam_Ve_Turkiye  ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Alem-i_Islam_Ve_Turkiye_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah-Nizamini-Hakli-Kilin ",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-Nizamini-Hakli-Kilin_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Allah-a_Daima_Hamd_Etmeliyiz ",
      file:"   https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-a_Daima_Hamd_Etmeliyiz_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah-a_Iman  ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-a_Iman_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Allah-i_Tanimak ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-i_Tanimak-1_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Allah-i_Tanimak-2   ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-i_Tanimak-2_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Allah-i_Unutanlar_Gibi_Olma ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-i_Unutanlar_Gibi_Olma_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah-in_Emanetler  ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-in_Emanetleri_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah-in_Muhataplari",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-in_Muhataplari_64kb.mp3",
      duration:""
    },
 {
      name:"♫ Allah-in_Rahmetini_Devamli ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-in_Rahmetini_Devamli_Ummaliyiz_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah-in_Rizasini_Kazanmak ",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-in_Rizasini_Kazanmak.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah-in_Ve_Peygamber-in_Sunneti ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-in_Ve_Peygamber-in_Sunneti_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah-la_Aramiz_Nasil ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah-la_Aramiz_Nasil_64kb.mp3",
      duration:""
    },
 {
      name:"♫ Allah_Adaletle_Emredendir-1 ",
      file:"   https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah_Adaletle_Emredendir-1_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah_Adaletle_Emredendir-2  ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah_Adaletle_Emredendir-2_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Allah_Hesabi_Tastamam ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah_Hesabi_Tastamam_Gorendir_64kb.mp3",
      duration:""
    },
 {
      name:"♫ Allah_Ve_Ahiret_Korkusu  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah_Ve_Ahiret_Korkusu_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah_Yolunda_Edep  ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allah_Yolunda_Edep_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Allaha_Teslimiyet_Ve_Feth-i_Istanbul ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allaha_Teslimiyet_Ve_Feth-i_Istanbul_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Allahin_Rahmeti  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allahin_Rahmeti.mp3  ",
      duration:""
    },
 {
      name:"♫ Allahin_Rahmetini_Devamli ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Allahin_Rahmetini_Devamli_Ummaliyiz.mp3  ",
      duration:""
    },
 {
      name:"♫ Almanya_Hristyan_Avrupa-da_Musluman  ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Almanya_Hristyan_Avrupa-da_Musluman_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Amel-i_Salih  ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Amel-i_Salih.mp3   ",
      duration:""
    },
 {
      name:"♫ Amel_Ve_Iman ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Amel_Ve_Iman_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Amerika-nin_Fethi  ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Amerika-nin_Fethi_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Anneler_Gunu  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Anneler_Gunu_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Arafe_Gunu_Vaazi ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Arafe_Gunu_Vaazi_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Araplar_Harap_Olacak ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Araplar_Harap_Olacak.mp3 ",
      duration:""
    },
 {
      name:"♫ Ashab-i_Kehf  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Ashab-i_Kehf_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Asiri_Dinciler_Ve_Islam   ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Asiri_Dinciler_Ve_Islam_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Asrin_Firavunu_Amerika",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Asrin_Firavunu_Amerika.mp3  ",
      duration:""
    },
 {
      name:"♫ Ateizm ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Ateizm.mp3  ",
      duration:""
    },
 {
      name:"♫ Ates_Cukurunun_Kenarindayiz  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Ates_Cukurunun_Kenarindayiz_64kb.mp3",
      duration:""
    },
 {
      name:"♫ Ayetleri_Bilerek_Soylemeyenler ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Ayetleri_Bilerek_Soylemeyenler_64kb.mp3",
      duration:""
    },
 {
      name:"♫ Basimiza_Gelen_Belalar_Ve",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Basimiza_Gelen_Belalar_Ve_Alinacak_Dersler_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Basin_Milleti_Yaniltiyor ",
      file:"    https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Basin_Milleti_Yaniltiyor_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Bayram-i_Haketmek ",
      file:"   https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Bayram-i_Haketmek_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Bayram_Degerlendirmesi  ",
      file:"   https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Bayram_Degerlendirmesi_64kb.mp3",
      duration:""
    },
 {
      name:"♫ Biz_Muslumanmiyiz  ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Biz_Muslumanmiyiz_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Bizi_Birbirimize_Vurduruyorlar  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Bizi_Birbirimize_Vurduruyorlar_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Bugun_Allah_Icin_Ne_Yaptin ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Bugun_Allah_Icin_Ne_Yaptin_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Ramazan_Konusmasi",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Bursa_Ramazan_Konusmasi_Kadinlara_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Buyuk_Gunahlar ",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Buyuk_Gunahlar.mp3",
      duration:""
    },
 {
      name:"♫ Devletin_SIkIntisi_Imansiz",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Devletin_SIkIntisi_Imansizliktandir_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Din_Ve_Iman_Duygusu",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Din_Ve_Iman_Duygusu_Olmayan_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Dinsiz_Inancsiz_Yasanmaz  ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Dinsiz_Inancsiz_Yasanmaz.mp3  ",
      duration:""
    },
 {
      name:"♫ Dinsizlik  ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Dinsizlik_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Dunya_Ve_Ahiret  ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Dunya_Ve_Ahiret_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Erkek_Kadin_Tesettur ",
      file:"   https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Erkek_Kadin_Tesettur.mp3 ",
      duration:""
    },
 {
      name:"♫ Fatih-in_Istanbul-u_Fethi  ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Fatih-in_Istanbul-u_Fethi_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Fitne  ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Fitne_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Fitneler_Cogaldi ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Fitneler_Cogaldi.mp3 ",
      duration:""
    },
 {
      name:"♫ Gecmis_Kavimlerden_Ibret",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Gecmis_Kavimlerden_Ibret_Almak_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Gunahlar_ve_Gunahkarlar  ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Gunahlar_ve_Gunahkarlar.mp3 ",
      duration:""
    },
 {
      name:"♫ Gunahlarimizin_Sebebi  ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Gunahlarimizin_Sebebi_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Hayirli_Amel ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Hayirli_Amel_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Hicret_Yilbasi_Adetleri  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Hicret_Yilbasi_Adetleri_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Hz._Adem_ve_Insanin",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Hz._Adem_ve_Insanin_Yaratilisi_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Iman_ve_Seytan  ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Iman_ve_Seytan_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Insanlarin_En_Hayirlilari  ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Insanlarin_En_Hayirlilari_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Irkcilik ",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Irkcilik_64kb.mp3   ",
      duration:""
    },
 {
      name:"♫ Islam-da_Evlilik ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Islam-da_Evlilik_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Islam-da_Kadin_ve_Erkek ",
      file:"   https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Islam-da_Kadin_ve_Erkek_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Insan_Ve_Hayvan_Fitrati   ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Insan_Ve_Hayvan_Fitrati_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Kadin-Sus_ve_Moda  ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Kadin-Sus_ve_Moda_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Olen_Insanin_Kabir_Hali  ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Olen_Insanin_Kabir_Hali_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Olum_Ve_Otesi   ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Olum_Ve_Otesi_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Oruc_Icki_Ve_Kumar  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Oruc_Icki_Ve_Kumar_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Pislik_Ve_Musrik  ",
      file:"  https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Pislik_Ve_Musrik_64kb.mp3 ",
      duration:""
    },
 {
      name:"♫ Zulum ",
      file:"  https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-Zulum_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ Vasiyetname   ",
      file:"https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Vasiyetname.mp3  ",
      duration:""
    },
 {
      name:"♫ Vatan-Hainleri  ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Vatan-Hainleri.mp3  ",
      duration:""
    },
 {
      name:"♫ insan_Yalniz_Yasayamaz  ",
      file:" https://ia601603.us.archive.org/10/items/Timurtas-Ucar-Hoca/insan_Yalniz_Yasayamaz.mp3 ",
      duration:""
    },
 {
      name:"♫ insan_Yalniz_Yasayamaz  ",
      file:" https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/insan_Yalniz_Yasayamaz_64kb.mp3  ",
      duration:""
    },
 {
      name:"♫ 3-Aylar-Ve_Ummet-i-Muhammed ",
      file:"https://ia801603.us.archive.org/10/items/Timurtas-Ucar-Hoca/Timurtas_Ucar-3_Aylar_Ve_Ummet-i_Muhammed_64kb.mp3 ",
      duration:""
    }


  ]

  for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {
        document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
  }.bind(this);

  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }


  function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  function getMinutes(t){
    var min = parseInt(parseInt(t)/60);
    var sec = parseInt(t%60);
    if (sec < 10) {
      sec = "0"+sec
    }
    if (min < 10) {
      min = "0"+min
    }
    return min+":"+sec
  }

  var progressbar = document.querySelector('#myProgress')
  progressbar.addEventListener("click", seek.bind(this));


  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }

  function forward(){
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
  }

  function rewind(){
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }