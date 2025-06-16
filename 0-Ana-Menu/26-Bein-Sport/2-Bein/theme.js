document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("customIframe");
    let e = document.querySelectorAll(".tab-button"),
        t = document.querySelectorAll(".tab-content"),
        n = document.getElementById("searchForm"),
        l = document.getElementById("searchInput"),
        a = document.getElementById("cinemaModeButton"),
        r = document.getElementById("exitCinemaMode"),
        i = document.getElementById("mainVideoContainer"),
        c = document.getElementById("multi-screen-controls"),
        o = document.getElementById("apply-multi-screen"),
        s = document.getElementById("clear-multi-screen"),
        d = [],
        u = !1;

    function m() {
        document.body.classList.toggle("cinema-mode");
        let e = document.querySelector(".video-container"),
            t = [document.querySelector(".rnd-qwert"), document.querySelector(".ads-container"), document.querySelector(".point-table")];
        document.body.classList.contains("cinema-mode") ? (e.scrollIntoView({
            behavior: "smooth"
        }), t.forEach(e => {
            e && (e.style.display = "none")
        })) : t.forEach(e => {
            e && (e.classList.contains("ads-container") ? e.style.display = "flex" : e.style.display = "block")
        })
    }

    function h() {
        let e = new Date,
            t = e.getHours(),
            n = e.getMinutes(),
            l = 60 * t + n;
        document.querySelectorAll(".channel-item").forEach(e => {
            let t = e.querySelector(".channel-status");
            if (t) {
                let n = t.textContent.trim();
                if ("7/24" === n) {
                    if (!e.querySelector(".live-badge")) {
                        let a = document.createElement("span");
                        a.classList.add("live-badge"), a.textContent = "CANLI";
                        let r = document.createElement("div");
                        r.classList.add("channel-status-container");
                        let i = t.cloneNode(!0);
                        r.appendChild(i), r.appendChild(a), t.parentNode.replaceChild(r, t)
                    }
                    return
                }
                if (n.includes(":")) {
                    let [c, o] = n.split(":").map(Number),
                        s = 60 * c + o,
                        d = e.querySelector(".live-badge");
                    if (l >= s && l < s + 120) {
                        if (!d) {
                            let u = document.createElement("span");
                            u.classList.add("live-badge"), u.textContent = "CANLI";
                            let m = document.createElement("div");
                            m.classList.add("channel-status-container");
                            let h = t.cloneNode(!0);
                            m.appendChild(h), m.appendChild(u), t.parentNode.replaceChild(m, t)
                        }
                    } else if (d) {
                        let y = d.parentNode;
                        y.classList.contains("channel-status-container") && y.parentNode.replaceChild(t, y)
                    }
                }
            }
        })
    }

    function y() {
        u = !1, i.innerHTML = "";
        let e = document.createElement("iframe");
        e.id = "customIframe", e.className = "player", e.src = "/channel.html?id=yayinzirve", e.setAttribute("scrolling", "no"), e.setAttribute("width", "100%"), e.setAttribute("height", "450"), e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), i.appendChild(e), document.querySelector(".channel-title").textContent = "BEIN SPORTS 1"
    }

    function f() {
        d = [], document.querySelectorAll(".channel-item").forEach(e => {
            e.classList.remove("selected")
        })
    }
    a.addEventListener("click", m), r.addEventListener("click", m), e.forEach(n => {
        n.addEventListener("click", function() {
            e.forEach(e => e.classList.remove("active")), t.forEach(e => e.classList.remove("active")), this.classList.add("active");
            let n = this.getAttribute("data-tab");
            document.getElementById(`${n}-tab`).classList.add("active"), "multi-screen" === n ? (c.style.display = "flex", u = !0) : (c.style.display = "none", u = !1, i.querySelector(".multi-screen-container") && y(), f())
        })
    }), o.addEventListener("click", function() {
        if (0 === d.length) {
            alert("Lütfen en az bir kanal seçin.");
            return
        }
        let e = window.innerWidth <= 768 ? 2 : 4;
        if (d.length > e) {
            alert(`En fazla ${e} kanal seçebilirsiniz.`);
            return
        }(function e(t) {
            i.innerHTML = "";
            let n = document.createElement("div");
            n.className = "multi-screen-container", 1 === t.length ? n.classList.add("multi-screen-1") : 2 === t.length ? n.classList.add("multi-screen-2") : n.classList.add("multi-screen-4"), t.forEach((e, t) => {
                let l = document.createElement("div");
                l.className = "multi-screen-item";
                let a = document.createElement("iframe");
                a.src = e.id, a.setAttribute("scrolling", "no"), a.setAttribute("frameborder", "0"), a.setAttribute("allowfullscreen", "true");
                let r = document.createElement("button");
                r.className = "remove-screen", r.innerHTML = '<i class="fas fa-times"></i>', r.addEventListener("click", function(t) {
                    t.stopPropagation(), l.remove(), d = d.filter(t => t.id !== e.id), document.querySelectorAll(`.channel-item[href="${e.id}"]`).forEach(e => {
                        e.classList.remove("selected")
                    }), 0 === i.querySelectorAll(".multi-screen-item").length && y()
                }), l.appendChild(a), l.appendChild(r), n.appendChild(l)
            }), i.appendChild(n), function e(t) {
                let n = document.querySelector(".channel-title");
                n && (1 === t.length ? n.textContent = t[0].name : n.textContent = `Çoklu Ekran (${t.length} Kanal)`)
            }(t)
        })(d)
    }), s.addEventListener("click", function() {
        f(), y()
    }), n.addEventListener("submit", function(e) {
        e.preventDefault();
        let t = l.value.toLowerCase().trim();
        if (!t) return;
        let n = document.querySelector(".tab-button.active");
        if (!n) return;
        let a = n.getAttribute("data-tab"),
            r = document.getElementById(`${a}-tab`);
        if (!r) return;
        let c = r.querySelectorAll(".channel-item"),
            o = !1;
        c.forEach(e => {
            let n = e.querySelector(".channel-name").textContent.toLowerCase();
            if (n.includes(t)) {
                if (e.style.display = "block", !o && !u) {
                    let l = e.getAttribute("href");
                    if (l) {
                        i.querySelector(".multi-screen-container") && y();
                        let a = document.getElementById("customIframe");
                        a && (a.src = l.includes("http") ? l : `${l}`)
                    }
                    document.querySelector(".channel-title").textContent = e.querySelector(".channel-name").textContent, o = !0
                }
            } else e.style.display = "none"
        }), o || (alert("Aradığınız maç veya kanal bulunamadı."), c.forEach(e => {
            e.style.display = "block"
        }))
    }), l.addEventListener("input", function() {
        if ("" === this.value.trim()) {
            let e = document.querySelector(".tab-button.active").getAttribute("data-tab"),
                t = document.querySelectorAll(`#${e}-tab .channel-item`);
            t.forEach(e => {
                e.style.display = "block"
            })
        }
    }), function e() {
        let t = document.getElementById("matches-tab"),
            n = document.getElementById("24-7-tab"),
            l = document.getElementById("multi-screen-tab");
        l.innerHTML = '<p style="padding: 15px; color: var(--text-muted);">Çoklu ekran modunda izlemek istediğiniz maçları seçin ve "Uygula" butonuna basın.</p>';
        let a = t.querySelectorAll(".channel-item");
        a.forEach(e => {
            let t = e.cloneNode(!0);
            l.appendChild(t)
        });
        let r = n.querySelectorAll(".channel-item");
        r.forEach(e => {
            let t = e.cloneNode(!0);
            l.appendChild(t)
        })
    }(), h(), setInterval(h, 6e4), document.querySelectorAll(".channel-item").forEach(e => {
        let t = e.cloneNode(!0);
        e.parentNode.replaceChild(t, e), t.addEventListener("click", function(e) {
            e.preventDefault();
            let t = document.querySelector(".tab-button.active"),
                n = t && "multi-screen" === t.getAttribute("data-tab");
            if (n) {
                this.classList.toggle("selected");
                let l = this.getAttribute("href"),
                    a = this.querySelector(".channel-name").textContent;
                this.classList.contains("selected") ? d.push({
                    id: l,
                    name: a
                }) : d = d.filter(e => e.id !== l)
            } else {
                let r = this.getAttribute("href");
                if (r) {
                    i.querySelector(".multi-screen-container") && y();
                    let c = document.getElementById("customIframe");
                    c && (c.src = r.includes("http") ? r : `${r}`)
                }
                let o = this.querySelector(".channel-name").textContent,
                    s = document.querySelector(".channel-title");
                s && (s.textContent = o)
            }
        })
    });
    let p = document.querySelector("#24-7-tab .channel-item");
    if (p) {
        let b = document.querySelector('.tab-button[data-tab="24-7"]');
        if (b && b.click(), !u) {
            let g = p.getAttribute("href");
            if (g) {
                let E = document.getElementById("customIframe");
                E && (E.src = g.includes("http") ? g : `${g}`)
            }
            document.querySelector(".channel-title").textContent = p.querySelector(".channel-name").textContent
        }
    }
}), document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".channel-item").forEach(e => {
        e.addEventListener("click", () => {
            window.innerWidth <= 768 && window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
    })
}), document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 768) {
        let e = document.querySelector(".sidebar"),
            t = document.querySelector(".mini-content");
        e && t && e.appendChild(t)
    }
});
const reklam = ``;
document.addEventListener("DOMContentLoaded", function() {
    let e = document.querySelectorAll("#matches-tab a.channel-item");
    if (e.length >= 2) {
        let t = document.createRange().createContextualFragment(reklam),
            n = document.createRange().createContextualFragment(reklam),
            l = document.createRange().createContextualFragment(reklam);
        e[0].parentNode.insertBefore(t, e[0].nextSibling), e[1].parentNode.insertBefore(n, e[1].nextSibling), e[2].parentNode.insertBefore(l, e[2].nextSibling)
    }
});