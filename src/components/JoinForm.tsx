"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Zoom = { src: string; alt: string } | null;

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "7b8d133b-678a-46b4-aaad-812b670f8bda";

const STEP_NAMES = ["應徵職位與制度說明", "基本資料", "聯絡與近況", "經歷與想法"];

const infoBlocks = [
  { num: "01", title: "設計師業績制度說明", src: "https://i.postimg.cc/RhKDksKJ/image.jpg", lazy: false },
  { num: "02", title: "實習師制度說明", src: "https://i.postimg.cc/KcMw3zwc/image.jpg", lazy: true },
  { num: "03", title: "實習師福利制度", src: "/images/join/intern-benefits.jpg", lazy: true },
  { num: "04", title: "GINS 店鋪位置", src: "https://i.postimg.cc/rmvHYX0L/map.jpg", lazy: true }
];

export function JoinForm({ instagramUrl, siteUrl }: { instagramUrl: string; siteUrl: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [zoom, setZoom] = useState<Zoom>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  const scrollToProgress = () => {
    const el = progressRef.current;
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
  };

  const validateStep = (index: number) => {
    const container = formRef.current?.querySelector<HTMLElement>(`[data-step="${index}"]`);
    if (!container) return true;
    const fields = Array.from(
      container.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea")
    );
    let firstBad: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null = null;
    fields.forEach((field) => {
      const bad = field.hasAttribute("required") && !field.checkValidity();
      field.classList.toggle("hasError", bad);
      if (bad && !firstBad) firstBad = field;
    });
    if (firstBad) {
      const target = firstBad as HTMLInputElement;
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => {
        target.focus({ preventScroll: true });
        target.reportValidity();
      }, 300);
      return false;
    }
    return true;
  };

  const goTo = (index: number) => {
    setStep(index);
    window.setTimeout(scrollToProgress, 0);
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    if (step < STEP_NAMES.length - 1) goTo(step + 1);
  };

  const handleClear = (event: React.FormEvent<HTMLFormElement>) => {
    const field = event.target as HTMLInputElement;
    if (field.classList?.contains("hasError") && field.checkValidity()) {
      field.classList.remove("hasError");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    if (!validateStep(step)) return;

    setSubmitting(true);
    // 轉成 JSON 送出，避免中文欄位名稱在後台變亂碼
    const payload: Record<string, FormDataEntryValue> = Object.fromEntries(new FormData(form));
    payload["送出時間(台灣)"] = new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei", hour12: false });

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json", Accept: "application/json" }
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success !== false) {
        setDone(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        console.error("Web3Forms 回應：", res.status, json);
        alert(
          `發送失敗（${res.status}）${json.message ? `：${json.message}` : ""}\n請稍後再試，或直接私訊 IG @gins_salon_`
        );
      }
    } catch (error) {
      console.error(error);
      alert("發送失敗，請確認網路後再試，或直接私訊 IG @gins_salon_");
    } finally {
      setSubmitting(false);
    }
  };

  const stepClass = (index: number) => (index === step ? "joinStep active" : "joinStep");

  return (
    <div className="joinPage">
      <div className="joinWrap">
        <div className="joinHeader">
          <div className="joinLogo">
            <Image src="/images/gins-logo-transparent.png" alt="GINS Logo" width={114} height={62} priority />
          </div>
          <p className="joinEyebrow">Recruitment</p>
          <h1>
            GINS 金倪斯髮廊
            <br />
            應徵表單
          </h1>
          <p className="joinGreet">
            很高興遇見你 ✨
            <br />
            我們正在尋找熱愛美感的你，
            <br />
            一起打造舒服又有質感的空間。
          </p>
          <div className="joinLinks">
            <a className="joinPill" href={instagramUrl} target="_blank" rel="noopener noreferrer">
              @gins_salon_
            </a>
            <a className="joinPill" href={siteUrl}>
              回官網
            </a>
          </div>
          <span className="joinNote">填完表單後，歡迎追蹤我們的 IG、逛逛官網</span>
        </div>
      </div>

      {!done ? (
        <div className="joinProgress" ref={progressRef}>
          <div className="joinWrap">
            <div className="joinProgressRow">
              <span>{STEP_NAMES[step]}</span>
              <span className="joinNum">
                0{step + 1} / 0{STEP_NAMES.length}
              </span>
            </div>
            <div className="joinTrack">
              <span style={{ width: `${((step + 1) / STEP_NAMES.length) * 100}%` }} />
            </div>
          </div>
        </div>
      ) : null}

      <div className="joinWrap joinMain">
        {!done ? (
          <form ref={formRef} onSubmit={handleSubmit} onInput={handleClear} onChange={handleClear} noValidate>
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="GINS 應徵表單 - 新的應徵通知" />
            <input type="hidden" name="from_name" value="GINS 應徵表單" />
            <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className={stepClass(0)} data-step="0">
              <div className="joinSectionTitle">
                <h2>制度說明</h2>
                <span>點圖片可放大</span>
              </div>
              {infoBlocks.map((block) => (
                <div className="joinInfo" key={block.num}>
                  <h3>
                    <span className="joinNum">{block.num}</span>
                    {block.title}
                  </h3>
                  <button type="button" onClick={() => setZoom({ src: block.src, alt: block.title })}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={block.src} alt={block.title} loading={block.lazy ? "lazy" : undefined} />
                  </button>
                </div>
              ))}

              <div className="joinCard">
                <div className="joinField">
                  <label htmlFor="position">
                    <span className="q">Q1</span>想應徵什麼職位呢？<span className="req">必填</span>
                  </label>
                  <select id="position" name="應徵職位" required defaultValue="">
                    <option value="">請選擇</option>
                    <option>設計師</option>
                    <option>實習師</option>
                  </select>
                </div>
                <div className="joinField">
                  <label htmlFor="name">
                    <span className="q">Q2</span>姓名<span className="req">必填</span>
                  </label>
                  <input type="text" id="name" name="姓名" required autoComplete="name" />
                </div>
                <div className="joinField">
                  <label htmlFor="nickname">
                    <span className="q">Q3</span>暱稱<span className="req">必填</span>
                  </label>
                  <input type="text" id="nickname" name="暱稱" required />
                </div>
              </div>

              <div className="joinActions">
                <button type="button" className="joinBtn" onClick={handleNext}>
                  下一步
                </button>
              </div>
            </div>

            <div className={stepClass(1)} data-step="1">
              <div className="joinCard">
                <div className="joinField">
                  <label htmlFor="gender">
                    <span className="q">Q4</span>性別<span className="req">必填</span>
                  </label>
                  <select id="gender" name="性別" required defaultValue="">
                    <option value="">請選擇</option>
                    <option>生理男（心理女）</option>
                    <option>生理男</option>
                    <option>生理女（心理男）</option>
                    <option>生理女</option>
                  </select>
                </div>
                <div className="joinField">
                  <label htmlFor="age">
                    <span className="q">Q5</span>年齡<span className="req">必填</span>
                  </label>
                  <input type="number" id="age" name="年齡" min={15} max={60} required inputMode="numeric" />
                </div>
                <div className="joinField">
                  <label htmlFor="phone">
                    <span className="q">Q6</span>聯絡電話<span className="req">必填</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="聯絡電話"
                    pattern="[0-9]{10}"
                    required
                    placeholder="例如：0912345678"
                    inputMode="numeric"
                    autoComplete="tel"
                  />
                </div>
                <div className="joinField">
                  <label htmlFor="birthday">
                    <span className="q">Q7</span>生日<span className="req">必填</span>
                  </label>
                  <input type="date" id="birthday" name="生日" required />
                </div>
                <div className="joinField">
                  <label htmlFor="email">
                    <span className="q">Q8</span>E-mail<span className="req">必填</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>
              </div>

              <div className="joinActions">
                <button type="button" className="joinBtn ghost" onClick={() => goTo(step - 1)}>
                  上一步
                </button>
                <button type="button" className="joinBtn" onClick={handleNext}>
                  下一步
                </button>
              </div>
            </div>

            <div className={stepClass(2)} data-step="2">
              <div className="joinCard">
                <div className="joinField">
                  <label htmlFor="line">
                    <span className="q">Q9</span>LINE ID<span className="req">必填</span>
                    <span className="hint">若沒有請填「無」</span>
                  </label>
                  <input type="text" id="line" name="LINE ID" required autoCapitalize="off" />
                </div>
                <div className="joinField">
                  <label htmlFor="location">
                    <span className="q">Q10</span>目前所在縣市<span className="req">必填</span>
                  </label>
                  <input type="text" id="location" name="目前所在縣市" required placeholder="例如：台中市" />
                </div>
                <div className="joinField">
                  <label htmlFor="student">
                    <span className="q">Q11</span>是否還在讀書呢？<span className="req">必填</span>
                  </label>
                  <select id="student" name="是否還在讀書" required defaultValue="">
                    <option value="">請選擇</option>
                    <option>是</option>
                    <option>否</option>
                  </select>
                </div>
                <div className="joinField">
                  <label htmlFor="finance">
                    <span className="q">Q12</span>目前是否有經濟壓力？<span className="req">必填</span>
                  </label>
                  <select id="finance" name="是否有經濟壓力" required defaultValue="">
                    <option value="">請選擇</option>
                    <option>是</option>
                    <option>否</option>
                  </select>
                </div>
              </div>

              <div className="joinActions">
                <button type="button" className="joinBtn ghost" onClick={() => goTo(step - 1)}>
                  上一步
                </button>
                <button type="button" className="joinBtn" onClick={handleNext}>
                  下一步
                </button>
              </div>
            </div>

            <div className={stepClass(3)} data-step="3">
              <div className="joinCard">
                <div className="joinField">
                  <label htmlFor="social">
                    <span className="q">Q13</span>目前經營的社群平台（IG 帳號）<span className="req">必填</span>
                  </label>
                  <input
                    type="text"
                    id="social"
                    name="經營社群平台(IG帳號)"
                    required
                    placeholder="@your_account"
                    autoCapitalize="off"
                  />
                </div>
                <div className="joinField">
                  <label htmlFor="experience">
                    <span className="q">Q14</span>已入行多久
                  </label>
                  <input type="text" id="experience" name="已入行多久" placeholder="例如：2 年／尚未入行" />
                </div>
                <div className="joinField">
                  <label htmlFor="pastwork">
                    <span className="q">Q15</span>曾任職地點（前三間）
                  </label>
                  <textarea id="pastwork" name="曾任職地點(前三間)" rows={3} />
                </div>
                <div className="joinField">
                  <label htmlFor="currentwork">
                    <span className="q">Q16</span>目前任職地點
                  </label>
                  <input type="text" id="currentwork" name="目前任職地點" />
                </div>
                <div className="joinField">
                  <label htmlFor="price">
                    <span className="q">Q17</span>目前剪髮價位
                  </label>
                  <select id="price" name="目前剪髮價位" defaultValue="">
                    <option value="">請選擇</option>
                    <option>無</option>
                    <option>300</option>
                    <option>500-700</option>
                    <option>700-1000</option>
                  </select>
                </div>
                <div className="joinField">
                  <label htmlFor="sales">
                    <span className="q">Q18</span>過往業績範圍<span className="req">必填</span>
                  </label>
                  <select id="sales" name="過往業績範圍" required defaultValue="">
                    <option value="">請選擇</option>
                    <option>1萬以下</option>
                    <option>1萬-4萬</option>
                    <option>4萬-8萬</option>
                    <option>8萬-12萬</option>
                    <option>12萬-18萬</option>
                    <option>20萬以上</option>
                  </select>
                </div>
                <div className="joinField">
                  <label htmlFor="reason">
                    <span className="q">Q19</span>為什麼想來應徵？
                  </label>
                  <textarea id="reason" name="為什麼想來應徵" rows={3} />
                </div>
                <div className="joinField">
                  <label htmlFor="source">
                    <span className="q">Q20</span>如何得知 GINS？
                  </label>
                  <select id="source" name="如何得知GINS" defaultValue="">
                    <option value="">請選擇</option>
                    <option>IG廣告</option>
                    <option>朋友推薦</option>
                    <option>在地搜尋</option>
                    <option>髮廊徵才網站</option>
                    <option>路過看到店面</option>
                    <option>本來就是設計師Carol的粉絲</option>
                  </select>
                </div>
                <div className="joinField">
                  <label htmlFor="leave">
                    <span className="q">Q21</span>想離開原工作環境的原因
                  </label>
                  <textarea id="leave" name="想離開原工作環境的原因" rows={3} />
                </div>

                <label className="joinCheck" htmlFor="final">
                  <input type="checkbox" id="final" name="確認資料正確" required />
                  <span>我已確認所有資料正確無誤</span>
                </label>
              </div>

              <div className="joinActions">
                <button type="button" className="joinBtn ghost" onClick={() => goTo(step - 1)}>
                  上一步
                </button>
                <button type="submit" className="joinBtn" disabled={submitting}>
                  {submitting ? "送出中，請稍候…" : "送出表單 ✨"}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="joinCard joinThanks">
            <div className="joinBig">Thank you</div>
            <h2>🎉 感謝您的填寫！</h2>
            <p>
              我們會盡快與您聯繫，
              <br />
              別忘了追蹤我們的 Instagram！
            </p>
            <div className="joinActions">
              <a className="joinBtn" href={instagramUrl} target="_blank" rel="noopener noreferrer">
                追蹤 @gins_salon_
              </a>
            </div>
          </div>
        )}
      </div>

      {zoom ? (
        <div className="joinLightbox" role="dialog" aria-label="圖片放大" onClick={() => setZoom(null)}>
          <button type="button" aria-label="關閉" onClick={() => setZoom(null)}>
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={zoom.src} alt={zoom.alt} />
        </div>
      ) : null}
    </div>
  );
}
