"use client";

import { useEffect, useRef } from "react";
import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./new-design.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const SHOPEE_URL =
  "https://shopee.com.my/kuah-kacang-Resepi-Bonda-500g-i.172612676.6879853482";

const THICK_LABELS: Record<number, string> = {
  1: "Cair sikit",
  2: "Sederhana",
  3: "Pekat sedap",
  4: "Pekat gila",
  5: "PEKAT MELETUP 🔥",
};

export default function NewDesign() {
  const pickRef = useRef<HTMLDivElement>(null);
  const emoRef = useRef<HTMLSpanElement>(null);
  const splatRef = useRef<HTMLDivElement>(null);
  const pourRef = useRef<HTMLDivElement>(null);
  const reactionRef = useRef<HTMLDivElement>(null);
  const thickRef = useRef<HTMLInputElement>(null);
  const thickLabelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const pick = pickRef.current;
    const emo = emoRef.current;
    const splat = splatRef.current;
    const pour = pourRef.current;
    const reaction = reactionRef.current;
    const thick = thickRef.current;
    const thickLabel = thickLabelRef.current;
    if (!pick || !emo || !splat || !pour || !reaction || !thick || !thickLabel)
      return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function applyThick() {
      const v = +thick!.value;
      thickLabel!.textContent = THICK_LABELS[v];
      splat!.style.width = 90 + v * 22 + "px";
      splat!.style.height = 70 + v * 20 + "px";
      pour!.style.width = 10 + v * 4 + "px";
      splat!.style.filter = "saturate(" + (0.8 + v * 0.12) + ")";
    }

    function pourAnim(react: string) {
      splat!.classList.remove("show");
      pour!.style.height = "0px";
      reaction!.classList.remove("show");
      void pour!.offsetWidth;
      timeouts.push(
        setTimeout(() => {
          pour!.style.height = "90px";
        }, 40),
      );
      timeouts.push(
        setTimeout(() => {
          splat!.classList.add("show");
        }, 360),
      );
      timeouts.push(
        setTimeout(() => {
          reaction!.textContent = react;
          reaction!.classList.add("show");
          pour!.style.height = "0px";
        }, 560),
      );
    }

    function onPick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const b = target.closest<HTMLElement>(".dish-btn");
      if (!b) return;
      pick!
        .querySelectorAll(".dish-btn")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      emo!.textContent = b.dataset.emo ?? "";
      applyThick();
      pourAnim(b.dataset.react ?? "");
    }

    pick.addEventListener("click", onPick);
    thick.addEventListener("input", applyThick);

    // initial state
    applyThick();
    timeouts.push(
      setTimeout(() => {
        splat.classList.add("show");
        reaction.classList.add("show");
      }, 300),
    );

    return () => {
      pick.removeEventListener("click", onPick);
      thick.removeEventListener("input", applyThick);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className={`nd ${baloo.variable} ${jakarta.variable}`}>
      <nav>
        <div className="wrap">
          <div className="logo">
            <span className="dot">🥜</span> Resepi Bonda
          </div>
          <div className="navlinks">
            <a href="#play">Padanan</a>
            <a href="#story">Kisah Kami</a>
            <a href="#testi">Ulasan</a>
          </div>
          <a href="#buy" className="nav-cta">
            Beli RM15.90
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="wrap">
          <div>
            <span className="eyebrow">Resepi turun-temurun · Melaka</span>
            <h1>
              Kuah kacang yang <span className="pop">menjadi</span> setiap kali.
            </h1>
            <p className="lead">
              Pekat, creamy, penuh rasa kampung. Resepi nenek yang dimasak
              tangan — tiada pengawet, tiada tipu.
            </p>
            <div className="cta-row">
              <a href="#buy" className="btn">
                Beli di Shopee →
              </a>
              <a href="#play" className="btn ghost">
                Tengok padanan ↓
              </a>
            </div>
            <div className="trust">
              <span className="chip">
                <span className="stars">★★★★★</span> 5.0
              </span>
              <span className="chip">💚 397 ulasan</span>
              <span className="chip">✓ Halal</span>
            </div>
          </div>
          <div className="jarwrap">
            <div className="jar">
              <div className="lid" />
              <div className="body">
                <div className="sauce" />
              </div>
              <div className="label">
                <div className="nm">Resepi Bonda</div>
                <div className="sub">KUAH KACANG ASLI</div>
              </div>
              <div className="wt">
                500
                <br />g
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="track">
          <span>
            🥜 Tanpa pengawet &nbsp;•&nbsp; <b>Pekat &amp; creamy</b>{" "}
            &nbsp;•&nbsp; Resepi 7 tahun &nbsp;•&nbsp; <b>Santan asli</b>{" "}
            &nbsp;•&nbsp; Buatan Melaka &nbsp;•&nbsp; <b>Halal ✓</b> &nbsp;•&nbsp;
            🥜 Tanpa pengawet &nbsp;•&nbsp; <b>Pekat &amp; creamy</b>{" "}
            &nbsp;•&nbsp; Resepi 7 tahun &nbsp;•&nbsp; <b>Santan asli</b>{" "}
            &nbsp;•&nbsp; Buatan Melaka &nbsp;•&nbsp; <b>Halal ✓</b> &nbsp;•&nbsp;
          </span>
        </div>
      </div>

      {/* SIGNATURE: PAIRING PLAYGROUND */}
      <section className="play" id="play">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Cuba dulu</span>
            <h2>Padankan &amp; curah!</h2>
            <p>
              Pilih hidangan, tarik slider untuk laras kepekatan, dan tengok
              kuah kacang Bonda buat kerjanya.
            </p>
          </div>
          <div className="playgrid">
            <div className="dishpick" id="dishpick" ref={pickRef}>
              <button
                className="dish-btn active"
                data-emo="🍢"
                data-name="Satay"
                data-react="Celup! 😋"
              >
                <span className="emo">🍢</span>
                <span className="lab">Satay</span>
              </button>
              <button
                className="dish-btn"
                data-emo="🍚"
                data-name="Nasi Lemak"
                data-react="Sedap! 🤤"
              >
                <span className="emo">🍚</span>
                <span className="lab">Nasi Lemak</span>
              </button>
              <button
                className="dish-btn"
                data-emo="🍜"
                data-name="Laksa"
                data-react="Pekat! 🔥"
              >
                <span className="emo">🍜</span>
                <span className="lab">Laksa</span>
              </button>
              <button
                className="dish-btn"
                data-emo="🫓"
                data-name="Roti"
                data-react="Cicah! 👌"
              >
                <span className="emo">🫓</span>
                <span className="lab">Roti / Celup</span>
              </button>
            </div>
            <div className="stage">
              <div className="reaction" id="reaction" ref={reactionRef}>
                Celup! 😋
              </div>
              <div className="plate">
                <div className="pour" id="pour" ref={pourRef} />
                <div className="splat" id="splat" ref={splatRef} />
                <span
                  id="dishEmo"
                  ref={emoRef}
                  style={{ position: "relative", zIndex: 2 }}
                >
                  🍢
                </span>
              </div>
              <div className="thick">
                <label>
                  Kepekatan{" "}
                  <b id="thickLabel" ref={thickLabelRef}>
                    Pekat sedap
                  </b>
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  defaultValue="3"
                  id="thick"
                  ref={thickRef}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="story" id="story">
        <div className="wrap storygrid">
          <div className="story-card">
            <span className="pin">📍 Dapur nenek, Melaka</span>
            <div className="quote">&quot;Rasa macam mak masak.&quot;</div>
            <p>
              Setiap kuali dimasak tangan dengan kacang tanah segar, rempah
              ratus pilihan dan santan asli. Tiada pengawet. Tiada perisa tiruan.
              Hanya rasa yang anda ingat.
            </p>
          </div>
          <div className="txt">
            <span className="eyebrow">Kisah di sebalik resepi</span>
            <h2>Diwarisi, bukan dicipta.</h2>
            <p>
              Resepi Bonda diwarisi daripada nenek kami di kampung Melaka —
              resipi keluarga yang dijaga turun-temurun selama lebih 7 tahun
              dijual.
            </p>
            <p>
              Kami percaya kuah kacang yang sedap bermula dari bahan berkualiti.
              Hasilnya kuah yang pekat, creamy dan penuh rasa tradisional yang
              sukar dilupakan.
            </p>
            <a href="#buy" className="btn green" style={{ marginTop: 10 }}>
              Rasai sendiri →
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi" id="testi">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow" style={{ color: "var(--pandan)" }}>
              Apa kata mereka
            </span>
            <h2>397+ keluarga dah jatuh cinta 💚</h2>
          </div>
          <div className="chats">
            <div className="bubble">
              <div className="who">
                <div className="av">A</div>
                <div>
                  <div className="nm">Aminah H.</div>
                  <div className="st">★★★★★</div>
                </div>
              </div>
              <div className="msg">
                Paling sedap! Dah order 3 kali. Memang rasa macam mak masak. 🥹
              </div>
              <div className="time">terbeli · 09:14</div>
            </div>
            <div className="bubble">
              <div className="who">
                <div className="av">S</div>
                <div>
                  <div className="nm">Siti N.</div>
                  <div className="st">★★★★★</div>
                </div>
              </div>
              <div className="msg">
                Pekat dan creamy. Anak-anak saya pun suka. Order lagi nanti!
              </div>
              <div className="time">terbeli · 18:42</div>
            </div>
            <div className="bubble">
              <div className="who">
                <div className="av">F</div>
                <div>
                  <div className="nm">Faris I.</div>
                  <div className="st">★★★★★</div>
                </div>
              </div>
              <div className="msg">
                Sampai cepat. Pembungkusan kemas. Rasa pun terbaik! 👌
              </div>
              <div className="time">terbeli · 11:05</div>
            </div>
          </div>
        </div>
      </section>

      {/* BUY */}
      <section className="buy" id="buy">
        <div className="blob" />
        <div className="wrap">
          <span className="eyebrow">Sedia untuk merasa?</span>
          <h2>
            Cuba <span className="pop">sendiri</span> hari ini.
          </h2>
          <p>
            Penghantaran ke seluruh Malaysia · Halal ✓ · Simpan beku tahan 6
            bulan
          </p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <a href={SHOPEE_URL} className="btn">
              Beli di Shopee →
            </a>
            <a href={SHOPEE_URL} className="btn ghost">
              ★ 397 ulasan
            </a>
          </div>
          <div className="price">
            <span className="rm">RM</span>
            <span className="big">15.90</span>
            <span style={{ fontSize: 14, color: "var(--shell)" }}>/ 500g</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="grid">
            <div style={{ maxWidth: 300 }}>
              <h3>🥜 Resepi Bonda</h3>
              <p>
                Rasa kampung, dalam setiap suapan. Resepi turun-temurun yang
                pekat, creamy dan penuh rasa.
              </p>
            </div>
            <div className="col">
              <h4>BELI</h4>
              <p>
                <a href={SHOPEE_URL}>Shopee Malaysia →</a>
              </p>
            </div>
            <div className="col">
              <h4>HUBUNGI</h4>
              <p>
                📍 Melaka, Malaysia
                <br />✉️ kuahkacangbonda@gmail.com
              </p>
            </div>
          </div>
          <div className="base">
            © 2026 Kuah Kacang Resepi Bonda · Dibuat dengan ❤️ di Melaka
          </div>
        </div>
      </footer>

      <div className="stickybar">
        <div className="p">
          <b>RM15.90</b> · 500g · Halal ✓
        </div>
        <a href={SHOPEE_URL} className="btn">
          Beli →
        </a>
      </div>
    </div>
  );
}
