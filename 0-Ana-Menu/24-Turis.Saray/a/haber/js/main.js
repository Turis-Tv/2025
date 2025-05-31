function getQue() {
var sira = 0;
for (let i = 0; i < $('.glide__slides > a').length; i++) {
    if($('.glide__slides > a').eq(i).attr('href') == window.location.pathname){
        checker = 1;
        $('.glide__slides > a').eq(i).find('div').eq(0).css("background-color", "#f3be19c7").css("border","none");
        sira = i
    }
}
return sira;
}
var startNum = getQue();
if ($_('.channel-list.glide')) {  let a = new Glide('.channel-list.glide', { type: 'carousel', startAt: startNum, perView: 6, gap: 10, breakpoints: { 480: { perView: 1 }, 768: { perView: 4 }, 1200: { perView: 6 } }, }).mount();
    $_('.channel-area .channel-left').addEventListener('click', () => a.go('<')), $_('.channel-area .channel-right').addEventListener('click', () => a.go('>')); }
if ($_('.matches-day.glide')) { let b = new Glide('.matches-day.glide', { type: 'carousel', startAt: 0, perView: 3, gap: 10, breakpoints: { 480: { perView: 1 }, 768: { perView: 4 }, 1200: { perView: 6 } }, }).mount();
    $_('.match-list-area .channel-left').addEventListener('click', () => b.go('<')), $_('.match-list-area .channel-right').addEventListener('click', () => { b.go('>'); }); }
let liveMatchList = (function() { return Array.from($$_('[data-tabbed="live"] .single-match')) })();
let nextMatchList = (function() { return Array.from($$_('[data-tabbed="next"] .single-match')) })();
let lightToggle = function() { if ($_('.body-light')) return $_('.body-light').remove(); let div = document.createElement('DIV');
    div.classList.add('body-light'); return document.body.append(div); };
window.addEventListener('click', function(a) {
    /*if (a.target.closest('[data-tabbed="next"] .single-match') && !$_('.next-match-splash')) { let div = document.createElement('DIV');
        div.classList.add('next-match-splash');
        div.innerHTML = '<div class="not"><strong>YAYINLANACAKLAR</strong> sekmesindeki maçlar, <u>başlama saatinden 10 dakika önce</u> <strong>CANLI</strong> sekmesinde aktif olup yayına başlayacaktır.</div><div class="close-splash"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" class=""></path></svg></div>'; return $_('.player-attributes').append(div) }
   */ if (a.target.closest('.single-channel[data-stream]')) {
        let el = a.target.closest('.single-channel[data-stream]');
        let streamid = el.dataset.stream;
        if ($_(`[data-tabbed="live"] [data-channel="${streamid}"][data-livecdn]`)) { return $_(`[data-tabbed="live"] [data-channel="${streamid}"][data-livecdn]`).click(); }
        if ($_(`[data-tabbed="live"] [data-stream="${streamid}"]`)) { return $_(`[data-tabbed="live"] [data-stream="${streamid}"]`).click(); }
    }
    if (a.target.closest('.bet-matches [data-stream]') && $_('.odds-container')) { let el = a.target.closest('.bet-matches [data-stream]');
        oddsYerlestir(el); return $_('.now-playing') && $_('.now-playing').remove(); }
    if (a.target.closest('.close-splash')) return $_('.next-match-splash').remove();
    if (a.target.closest('[data-tabbed="live"] .single-match') && $_('.next-match-splash'))
        return $_('.next-match-splash').remove();
    if (a.target.closest('[data-matchfilter]')) {
        let filterName = a.target.closest('[data-matchfilter]').dataset.matchfilter;
        let activeTab = $_('[data-focustab].active').dataset.focustab;
        let matches = activeTab == "live" ? Array.from($$_('[data-tabbed="live"] .single-match')) : Array.from($$_('[data-tabbed="next"] .single-match'));
        $_(`[data-tabbed="${activeTab}"] .list-tabbed .active`).classList.remove('active');
        a.target.closest('[data-matchfilter]').classList.add('active');
        if (filterName.length) {
            matches.forEach(item => item.classList.remove('show'))
            return matches.forEach(item => { if (item.dataset.matchtype == filterName && item.title.includes($_(`[data-tabbed="${activeTab}"] input`).value.trim().toLowerCase())) { item.classList.add('show') } })
        } else { return matches.forEach(item => item.classList.add('show')) }
    }
    if (a.target.closest('.search-toggle')) { let a = $_('[data-focustab].active').dataset.focustab; return ($_(`[data-tabbed="${a}"] .match-search`).classList.toggle('show'), setTimeout(() => { $_(`[data-tabbed="${a}"] .match-search input`).focus().setSelectionRange(0, 999); }, 10)); }
    if (a.target.closest('[data-plyr="wide"]'))
        return ($_('.player-grid').classList.toggle('wide'), (a.target.closest('[data-plyr="wide"]').querySelector('.plyr__tooltip').textContent = $_('.player-grid.wide') ? 'Daralt' : 'Genişlet'), $_('.live-player').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' }));
    if (a.target.closest('[data-news]')) { let { newstitle: e } = a.target.closest('[data-news]').dataset; return ($_('.news-show[data-active]').removeAttribute('data-active', 'true'), ($_('.picked-news-title').textContent = e), ($_(`.news-show[data-show="${e}"]`).dataset.active = !0), ($_(`.news-show[data-show="${e}"]`).querySelector('img').src = $_(`.news-show[data-show="${e}"]`).querySelector('[data-src]').dataset.src), $_('.news-content').scrollTo(0, 0), $_('.news-content').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })); }
    if (a.target.closest('[data-focustab]')) { let e = a.target.closest('[data-focustab]').dataset.focustab; return ($_('[data-focustab].active').classList.remove('active'), $_('[data-tabbed].active').classList.remove('active'), $_(`[data-tabbed="${e}"]`).classList.add('active'), $_(`[data-focustab="${e}"]`).classList.add('active')); }
    if (a.target.closest('[data-showradar]')) { let e = a.target.closest('[data-showradar]').dataset.showradar; return ($_('[data-radarblock].active').classList.remove('active'), $_('[data-showradar].active').classList.remove('active'), a.target.closest('[data-showradar]').classList.add('active'), $_(`[data-radarblock="${e}"]`).classList.add('active')); }
    if (a.target.closest('.sr-switcher__live')) { $_('.sr-scrollbars__container').classList.toggle('unlimit') }
    if (a.target.closest('[data-focusw]')) { let id = a.target.closest('[data-focusw]').dataset.focusw;
        $_('.widget-content .active').classList.remove('active');
        $_('.score-sports .active').classList.remove('active');
        a.target.closest('[data-focusw]').classList.add('active'); return $_(`.widget-content #${id}`).classList.add('active') }
    if (a.target.closest('.sr-bb')) { Array.from(document.querySelectorAll('.sr-match-bahisyap')).forEach(item => item.remove()); let bahisControl = setInterval(() => { if (!document.querySelector('.sr-match-bahisyap')) { Array.from(document.querySelectorAll('.sr-match-default__match')).forEach(item => { item.innerHTML += `<a href="${$_('[data-siteOriginal]').dataset.siteoriginal}" target="_blank" class="sr-match-bahisyap">Bahis Yap</a>`; }) } else { clearInterval(bahisControl) } }, 50) }
});
window.addEventListener('submit', function(a) { a.preventDefault(); });
window.addEventListener('input', function(a) { if (a.target.closest('[data-searchmatch]')) { let e = a.target.closest('[data-searchmatch]').value.trim().toLowerCase(),
            t = $_('[data-focustab].active').dataset.focustab,
            s = 'live' == t ? liveMatchList : nextMatchList; if ($_(`[data-tabbed="${t}"] [data-matchfilter].active`).dataset.matchfilter.length) {
            ($_('[data-tabbed].active .list-area .real-matches').innerHTML = s.filter(a => a.title.toLowerCase().includes(e) && !a.dataset.stream.includes("betlivematch") && a.dataset.matchtype == $_(`[data-tabbed="${t}"] [data-matchfilter].active`).dataset.matchfilter).map(a => a.outerHTML).join(''));
            ($_('[data-tabbed].active .list-area .bet-matches').innerHTML = s.filter(a => a.title.toLowerCase().includes(e) && a.dataset.stream.includes("betlivematch") && a.dataset.matchtype == $_(`[data-tabbed="${t}"] [data-matchfilter].active`).dataset.matchfilter).map(a => a.outerHTML).join('')) } else {
            ($_('[data-tabbed].active .list-area .real-matches').innerHTML = s.filter(a => a.title.toLowerCase().includes(e) && a.dataset.radarapi).map(a => a.outerHTML).join(''));
            ($_('[data-tabbed].active .list-area .bet-matches').innerHTML = s.filter(a => a.title.toLowerCase().includes(e) && a.dataset.stream.includes('betlivematch')).map(a => a.outerHTML).join('')); } } });
/*let CDNURI = $_('[data-cdn]').dataset.cdn;
let SOCKETURI = $_('[data-socket]').dataset.socket;
let socket = io.connect(SOCKETURI, { transports: ['websocket'], reconnectionAttempts: 1, reconnectionDelay: 10000, timeout: 10000 });
socket.on('connect_error', (data) => { console.error('NLive Stream Socket Hatası: ' + new Date().toISOString()); });
socket.on("maclar", (maclar) => {
    let sitedekiMaclar = Array.from($$_('[data-tabbed="live"] [data-stream]')).map(item => item.dataset.stream);
    let veriDBMaclar = [];
    let dbSEOMaclar = maclar["matches"].map(item => item.seoUrl);
    maclar["betMatches"].forEach(item => veriDBMaclar.push("betlivematch-" + item.id));
    maclar["matches"].forEach(item => veriDBMaclar.push(item.channel.seoUrl));
    sitedekiMaclar.forEach(item => { if (!veriDBMaclar.includes(item) && $_(`.live-list [data-stream="${item}"]`)) { $$_(`.live-list [data-stream="${item}"]`).forEach(item => item.remove()); } });
    let realMatchList = Array.from($$_('.real-matches .single-match')).map(item => item.dataset.matchid);
    let dbOlanNormalMaclar = maclar["matches"].filter(item => !realMatchList.includes(item._id));
    dbOlanNormalMaclar.forEach(item => {
        let div = document.createElement('a');
        div.href = `/maci-canli-izle/${item.seoUrl}`;
        div.className = "single-match show";
        div.dataset.matchid = item._id;
        div.dataset.matchtype = item.type;
        div.dataset.seolink = item.seoUrl;
        if (item.is_facebook) { div.dataset.stream = `${item._id}`;
            div.dataset.freecdn = ""; } else { div.dataset.stream = `${item.channel.seoUrl}`; }
        div.dataset = { matchtype: item.type, stream: `${item.channel.seoUrl}`, name: `${item.home} - ${item.away}` }
        if (item.API) {
            div.dataset.radarapi = item.betradarID
            div.dataset.radartype = item.type
        }
        div.title = `${item.event} : ${item.home} - ${item.away}`
        if (item.API) { if (item.favorite) { div.innerHTML = `<img src="${CDNURI}/team/${item.API.match.teams.home.uid}.png" alt="${item.home}" width="24" height="24" loading="lazy"><div class="match-detail"><div class="date"><span class="favorite-match">Günün Maçı Birazdan</span>${item.time} / ${item.type}</div><div class="event">${item.event}</div><div class="teams"><div class="home">${item.home}</div><div class="away">${item.away}</div></div></div><img src="${CDNURI}/team/${item.API.match.teams.away.uid}.png" alt="${item.away}" width="24" height="24" loading="lazy" >` } else { div.innerHTML = `<img src="${CDNURI}/team/${item.API.match.teams.home.uid}.png" alt="${item.home}" width="24" height="24"  loading="lazy"><div class="match-detail"><div class="date">${item.time} / ${item.type}</div><div class="event">${item.event}</div><div class="teams"><div class="home">${item.home}</div><div class="away">${item.away}</div></div></div><img src="${CDNURI}/team/${item.API.match.teams.away.uid}.png" alt="${item.away}"  width="24" height="24" loading="lazy">` } } else { if (item.favorite) { div.innerHTML = `<img src="/file/no-image-team.png" alt="${item.home}"  width="24" height="24" loading="lazy"><div class="match-detail"><div class="date"><span class="favorite-match">Günün Maçı Birazdan</span>${item.time} / ${item.type}</div><div class="event">${item.event}</div><div class="teams"><div class="home">${item.home}</div><div class="away">${item.away}</div></div></div><img src="/file/no-image-team.png" alt="${item.away}"  width="24" height="24"  loading="lazy">` } else { div.innerHTML = `<img src="/file/no-image-team.png" alt="${item.home}"  width="24" height="24" loading="lazy"><div class="match-detail"><div class="date">${item.time} / ${item.type}</div><div class="event">${item.event}</div><div class="teams"><div class="home">${item.home}</div><div class="away">${item.away}</div></div></div><img src="/file/no-image-team.png" alt="${item.away}"  width="24" height="24" loading="lazy">` } }
        if (item.favorite) { $_('[data-tabbed="live"] .list-area .real-matches').prepend(div) } else { $_('[data-tabbed="live"] .list-area .real-matches').append(div) }
    });
    let sitedekiNormalMaclarID = Array.from($$_('.real-matches .single-match')).map(item => item.dataset.matchid);
    let dbdekiNormalMaclarID = maclar.matches.map(item => item._id);
    sitedekiNormalMaclarID.forEach(item => { if (!dbdekiNormalMaclarID.includes(item) && $_(`.real-matches [data-matchid="${item}"]`)) { $_(`.real-matches [data-matchid="${item}"]`).remove() } });
    let dbOlanBetler = maclar["betMatches"].filter(item => !sitedekiMaclar.includes("betlivematch-" + item.id));
    dbOlanBetler.forEach(item => { $_('[data-tabbed="live"] .list-area .bet-matches').innerHTML += `<a href="/maci-canli-izle/${item.seoUrl}" class="single-match show" data-matchtype="${item.type}" data-stream="betlivematch-${item.id}" data-name="${item.home.name} - ${item.away.name}" title="${item.event} : ${item.home.name} - ${item.away.name}"><img src="${CDNURI}/match/${item.home.image}" alt="${item.home.name}"  width="24" height="24" loading="lazy"><div class="match-detail"><div class="date">${item.type}</div><div class="event">${item.event}</div><div class="teams"><div class="home">${item.home.name}</div><div class="away">${item.away.name}</div></div></div><img src="${CDNURI}/match/${item.away.image}" alt="${item.away.name}"  width="24" height="24" loading="lazy"></a>` });
    Array.from($$_('[data-tabbed="live"] [data-matchfilter]')).forEach(item => { let type = item.dataset.matchfilter; let count = Array.from($$_(`[data-tabbed="live"] [data-matchtype="${type}"]`)).length;
        $_(`[data-tabbed="live"] [data-matchfilter="${type}"] .list-count`).textContent = `${count} Maç`; });
    $_('[data-tabbed="live"] [data-matchfilter] .list-count').textContent = `${Array.from($$_('[data-tabbed="live"] [data-stream]')).length} Maç`;
    liveMatchList = Array.from($$_('[data-tabbed="live"] .single-match'));
    nextMatchList = Array.from($$_('[data-tabbed="next"] .single-match'));
});
if ($_('.live-results')) {
    socket.on("liveticker", (data) => {
        let e = data;
        if (1 == e.status)
            if ((Object.keys(e.canliSkorlar).length ? $_('.live-results').classList.remove('hidden') : $_('.live-results').classList.add('hidden'), $_('.live-results.loaded'))) {
                let a = Array.from($$_('[data-sportur]'));
                a = a.map(a => a.dataset.sportur);
                let t = Array.from($$_('[data-turnuva]'));
                (t = t.map(a => `${a.parentElement.dataset.sportur}-${a.dataset.turnuva}`)), (t = Array.from(new Set(t)));
                let s = Array.from($$_('[data-livescore]'));
                s = s.map(a => a.dataset.livescore);
                let r = Object.keys(e.canliSkorlar),
                    i = [],
                    d = [],
                    l = [],
                    c = [],
                    o = [];
                r.forEach(a => { e.canliSkorlar[a].forEach(a => { d.push(a.mac._id), i.push(a), l.push(`${a.spor}-${a.ulke}`), c.push({ name: a.ulke, spor: a.spor }), o.push(a.spor); }); }), a.forEach(a => { e.canliSkorlar.hasOwnProperty(a) || $_(`[data-sportur="${a}"]`).remove(); }), t.forEach(a => { let e = a.split('-')[0],
                        t = a.split('-')[1];
                    l.includes(a) || ($_(`[data-sportur="${e}"] [data-turnuva="${t}"]`) && $_(`[data-sportur="${e}"] [data-turnuva="${t}"]`).remove()); }), s.forEach(a => { d.includes(Number(a)) || ($_(`[data-livescore="${Number(a)}"]`) && $_(`[data-livescore="${Number(a)}"]`).remove()); }), o.forEach(a => { if (!$_(`[data-sportur="${a}"]`)) { let e = document.createElement('DIV');
                        e.classList.add('sportur'), e.classList.add(`spor${a}`), (e.dataset.sportur = a), (e.innerHTML = `<div class="sporBaslik">${a}</div>`), $_('.results .inner').append(e); } }), c.forEach(a => { if (!$_(`[data-sportur="${a.spor}"] [data-turnuva="${a.name}"]`)) { let e = document.createElement('DIV');
                        e.classList.add('single-turnuva'), (e.dataset.turnuva = a.name), (e.innerHTML = `<div class="turnuvaBaslik">${a.name}</div>`), $_(`[data-sportur="${a.spor}"]`).append(e); } }), i.forEach(a => {
                    if ($_(`[data-livescore="${a.mac._id}"]`))
                        $_(`[data-livescore="${a.mac._id}"] .score-point`).innerHTML != `${a.mac.result.home} : ${a.mac.result.away}` && (($_(`[data-livescore="${a.mac._id}"] .score-point`).innerHTML = `${a.mac.result.home} : ${a.mac.result.away}`), $_(`[data-livescore="${a.mac._id}"] .score-point`).classList.add('score-goal'), setTimeout(() => { $_(`[data-livescore="${a.mac._id}"] .score-point`).classList.remove('score-goal'); }, 4e4));
                    else { let e = document.createElement('DIV');
                        e.classList.add('live-score-match'), (e.dataset.livescore = a.mac._id), (e.innerHTML = `<div class="teams">${a.mac.teams.home.name} <span class="score-point">${a.mac.result.home} : ${a.mac.result.away}</span> ${a.mac.teams.away.name}</div> ${a.mac.status.name}`), $_(`[data-sportur="${a.spor}"] [data-turnuva="${a.ulke}"]`).append(e); }
                }), ($_('.live-results .inner').style.animationDuration = 10 * $_('.live-results .inner').offsetWidth + 'ms');
            } else { let a = document.createElement('DIV');
                a.classList.add('results'), (a.innerHTML = '<div class="inner"></div>'), $_('.live-results').append(a), Object.keys(e.canliSkorlar).forEach(a => { let t = document.createElement('DIV');
                    t.classList.add('spor' + a), t.classList.add('sportur'), (t.dataset.sportur = a), $_('.live-results .results .inner').append(t), ($_(`.live-results .results .inner .spor${a}`).innerHTML += `<div class="sporBaslik">${a}</div>`); let s = e.canliSkorlar[a].map(a => a.ulke);
                    (s = Array.from(new Set(s))).forEach(e => { let t = document.createElement('DIV');
                        t.classList.add('single-turnuva'), (t.dataset.turnuva = e), (t.innerHTML = `<div class="turnuvaBaslik">${e}</div>`), $_(`.live-results .results .inner .spor${a}`).append(t); }), e.canliSkorlar[a].forEach(a => { $_(`.inner [data-turnuva="${a.ulke}"]`).innerHTML += `<div class="live-score-match" data-livescore="${a.mac._id}"> <div class="teams">${a.mac.teams.home.name} <span class="score-point">${a.mac.result.home} : ${a.mac.result.away}</span> ${a.mac.teams.away.name}</div> ${a.mac.status.name}</div>`; }); }), $_('.live-results').classList.add('loaded'), ($_('.live-results .inner').style.animationDuration = 10 * $_('.live-results .inner').offsetWidth + 'ms'); }
    });
}*/
//window.addEventListener('DOMContentLoaded', function(e) { if ($_('a[data-fancybox]')) { $('a[data-fancybox]').fancybox({ 'width': 1000, 'height': 600, 'transitionIn': 'elastic', 'transitionOut': 'elastic', 'type': 'iframe', 'fitToView': true }); } });
