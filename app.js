(() => {
  // ===== i18n data (embedded JSON) =====
  const I18N = {
    "ja": {
      "lang_title": "表示する言語を選択",
      "upload_title": "商品の画像をアップロードして商品を探す",
      "upload_button": "画像をアップロード",
      "text_title": "テキスト検索で商品を探す",
      "mode_quick": "クイック検索",
      "mode_ai": "AI検索",
      "tab_all": "全て",
      "tab_food": "食品",
      "tab_nonfood": "非食品",
      "tab_alcohol": "酒・薬品",
      "tab_code": "商品コード",
      "search_placeholder": "探している商品名などを入力してください",
      "search_button": "検索",
      "hint_strong": "お探しの商品に近い物はこちらです",
      "hint_sub": "商品名をタップすると商品の場所が表示されます",
      "hint_warn": "在庫が無い場合がございます",
      "map_text": "フロアマップ全体を見る",
      "reco_title": "おすすめ商品はこちら",
      "modal_title": "免責事項 / プライバシーポリシー",
      "modal_line1": "1: 本サービスは、アップロードされた画像に基づいて情報を提供しますが、提供される結果の正確性、完全性、信頼性について一切保証しません。",
      "modal_line2": "2: 提供される情報は参考情報であり、店舗の実際の状況や在庫状況を保証するものではありません。",
      "modal_line3": "3: ユーザーは自己の判断と責任において本サービスを利用してください。",
      "modal_line4": "4: 当社は、直接的・間接的・偶発的・特別・結果的損害について一切責任を負いません。",
      "modal_close": "閉じる",
      "alert_location": "（モック）商品の場所を表示",
      "alert_map": "（モック）フロアマップ表示"
    },
    "en": {
      "lang_title": "Select a language",
      "upload_title": "Search by uploading a product image",
      "upload_button": "Upload image",
      "text_title": "Search by text",
      "mode_quick": "Quick Search",
      "mode_ai": "AI Search",
      "tab_all": "All",
      "tab_food": "Food",
      "tab_nonfood": "Non-food",
      "tab_alcohol": "Alcohol / Medicine",
      "tab_code": "Product code",
      "search_placeholder": "Enter a product name or what you're looking for",
      "search_button": "Search",
      "hint_strong": "Here are items similar to what you're looking for",
      "hint_sub": "Tap a product name to see its location",
      "hint_warn": "Items may be out of stock",
      "map_text": "View full floor map",
      "reco_title": "Recommended items",
      "modal_title": "Disclaimer / Privacy Policy",
      "modal_line1": "1: This service provides information based on uploaded images, but does not guarantee the accuracy, completeness, or reliability of the results.",
      "modal_line2": "2: The information provided is for reference only and does not guarantee actual in-store conditions or stock availability.",
      "modal_line3": "3: Please use this service at your own discretion and responsibility.",
      "modal_line4": "4: We are not liable for any direct, indirect, incidental, special, or consequential damages.",
      "modal_close": "Close",
      "alert_location": "(Mock) Show product location",
      "alert_map": "(Mock) Show floor map"
    },
    "zh-hans": {
      "lang_title": "选择显示语言",
      "upload_title": "上传商品图片搜索",
      "upload_button": "上传图片",
      "text_title": "文本搜索商品",
      "mode_quick": "快速搜索",
      "mode_ai": "AI搜索",
      "tab_all": "全部",
      "tab_food": "食品",
      "tab_nonfood": "非食品",
      "tab_alcohol": "酒类/药品",
      "tab_code": "商品编码",
      "search_placeholder": "请输入商品名称或想找的商品",
      "search_button": "搜索",
      "hint_strong": "以下是与您要找的商品相近的结果",
      "hint_sub": "点击商品名即可显示位置",
      "hint_warn": "可能会出现无库存的情况",
      "map_text": "查看全楼层地图",
      "reco_title": "推荐商品如下",
      "modal_title": "免责声明 / 隐私政策",
      "modal_line1": "1: 本服务基于您上传的图片提供信息，但不对结果的准确性、完整性或可靠性作任何保证。",
      "modal_line2": "2: 提供的信息仅供参考，并不保证门店实际情况或库存状况。",
      "modal_line3": "3: 用户须自行判断并承担使用本服务的责任。",
      "modal_line4": "4: 对任何直接、间接、偶发、特殊或结果性损害，本公司概不负责。",
      "modal_close": "关闭",
      "alert_location": "（模拟）显示商品位置",
      "alert_map": "（模拟）显示楼层地图"
    },
    "zh-hant": {
      "lang_title": "選擇顯示語言",
      "upload_title": "上傳商品圖片搜尋",
      "upload_button": "上傳圖片",
      "text_title": "文字搜尋商品",
      "mode_quick": "快速搜尋",
      "mode_ai": "AI搜尋",
      "tab_all": "全部",
      "tab_food": "食品",
      "tab_nonfood": "非食品",
      "tab_alcohol": "酒類/藥品",
      "tab_code": "商品代碼",
      "search_placeholder": "請輸入商品名稱或想找的商品",
      "search_button": "搜尋",
      "hint_strong": "以下是與您要找的商品相近的結果",
      "hint_sub": "點選商品名稱即可顯示位置",
      "hint_warn": "可能會出現缺貨情況",
      "map_text": "查看全樓層地圖",
      "reco_title": "推薦商品如下",
      "modal_title": "免責聲明 / 隱私權政策",
      "modal_line1": "1: 本服務依據您上傳的圖片提供資訊，但不保證結果之正確性、完整性或可靠性。",
      "modal_line2": "2: 所提供資訊僅供參考，並不保證門市實際狀況或庫存情況。",
      "modal_line3": "3: 使用者應自行判斷並負責使用本服務。",
      "modal_line4": "4: 對任何直接、間接、偶發、特殊或結果性損害，本公司概不負責。",
      "modal_close": "關閉",
      "alert_location": "（模擬）顯示商品位置",
      "alert_map": "（模擬）顯示樓層地圖"
    },
    "ko": {
      "lang_title": "표시할 언어 선택",
      "upload_title": "상품 이미지를 업로드하여 상품 찾기",
      "upload_button": "이미지 업로드",
      "text_title": "텍스트로 상품 찾기",
      "mode_quick": "빠른 검색",
      "mode_ai": "AI 검색",
      "tab_all": "전체",
      "tab_food": "식품",
      "tab_nonfood": "비식품",
      "tab_alcohol": "주류/의약품",
      "tab_code": "상품코드",
      "search_placeholder": "상품명 또는 찾는 상품을 입력하세요",
      "search_button": "검색",
      "hint_strong": "찾으시는 상품과 비슷한 항목은 아래와 같습니다",
      "hint_sub": "상품명을 탭하면 위치가 표시됩니다",
      "hint_warn": "재고가 없을 수 있습니다",
      "map_text": "전체 플로어 맵 보기",
      "reco_title": "추천 상품입니다",
      "modal_title": "면책사항 / 개인정보처리방침",
      "modal_line1": "1: 본 서비스는 업로드된 이미지에 기반하여 정보를 제공하나, 제공 결과의 정확성·완전성·신뢰성을 보장하지 않습니다.",
      "modal_line2": "2: 제공 정보는 참고용이며, 매장의 실제 상황이나 재고 상태를 보장하지 않습니다.",
      "modal_line3": "3: 사용자는 본 서비스를 본인의 판단과 책임 하에 이용해야 합니다.",
      "modal_line4": "4: 당사는 직접·간접·부수적·특별·결과적 손해에 대해 어떠한 책임도 지지 않습니다.",
      "modal_close": "닫기",
      "alert_location": "（모의）상품 위치 표시",
      "alert_map": "（모의）플로어 맵 표시"
    }
  };

  const SAMPLE_DATA = {
    "ja": {
      textQuick: [
        { cat: "チョコレート", name: "きのこの山", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "輸入菓子", name: "キットカット", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "輸入菓子", name: "地球グミ", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      textAi: [
        { cat: "チョコレート", name: "たけのこの里", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "アイス", name: "チョコもなかジャンボ", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "焼き芋", name: "やきいも", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      image: [
        { cat: "画像検索", name: "類似商品A", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "画像検索", name: "類似商品B", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "画像検索", name: "類似商品C", thumb: "./assets/sample_thumb_3.jpg" }
      ]
    },
    "en": {
      textQuick: [
        { cat: "Chocolate", name: "Kinoko no Yama", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "Imported Snacks", name: "KitKat", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "Imported Snacks", name: "Earth Gummies", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      textAi: [
        { cat: "Chocolate", name: "Takenoko no Sato", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "Ice Cream", name: "Choco Monaka Jumbo", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "Roasted Sweet Potato", name: "Yakiimo", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      image: [
        { cat: "Image Search", name: "Similar item A", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "Image Search", name: "Similar item B", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "Image Search", name: "Similar item C", thumb: "./assets/sample_thumb_3.jpg" }
      ]
    },
    "zh-hans": {
      textQuick: [
        { cat: "巧克力", name: "蘑菇山巧克力饼干", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "进口零食", name: "奇巧（KitKat）", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "进口零食", name: "地球软糖", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      textAi: [
        { cat: "巧克力", name: "竹笋里巧克力饼干", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "冰淇淋", name: "巧克力夹心糯米冰淇淋", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "烤红薯", name: "烤红薯", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      image: [
        { cat: "图片搜索", name: "相似商品A", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "图片搜索", name: "相似商品B", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "图片搜索", name: "相似商品C", thumb: "./assets/sample_thumb_3.jpg" }
      ]
    },
    "zh-hant": {
      textQuick: [
        { cat: "巧克力", name: "蘑菇山巧克力餅乾", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "進口零食", name: "奇巧（KitKat）", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "進口零食", name: "地球軟糖", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      textAi: [
        { cat: "巧克力", name: "竹筍里巧克力餅乾", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "冰淇淋", name: "巧克力夾心糯米冰淇淋", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "烤地瓜", name: "烤地瓜", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      image: [
        { cat: "圖片搜尋", name: "相似商品A", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "圖片搜尋", name: "相似商品B", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "圖片搜尋", name: "相似商品C", thumb: "./assets/sample_thumb_3.jpg" }
      ]
    },
    "ko": {
      textQuick: [
        { cat: "초콜릿", name: "키노코노야마", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "수입과자", name: "킷캣(KitKat)", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "수입과자", name: "지구 젤리", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      textAi: [
        { cat: "초콜릿", name: "타케노코노사토", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "아이스", name: "초코 모나카 점보", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "군고구마", name: "야키이모", thumb: "./assets/sample_thumb_3.jpg" }
      ],
      image: [
        { cat: "이미지 검색", name: "유사 상품 A", thumb: "./assets/sample_thumb_1.jpg" },
        { cat: "이미지 검색", name: "유사 상품 B", thumb: "./assets/sample_thumb_2.jpg" },
        { cat: "이미지 검색", name: "유사 상품 C", thumb: "./assets/sample_thumb_3.jpg" }
      ]
    }
  };

  const LANG_STORAGE_KEY = "donki_ui_lang";
  const supportedLangs = ["ja", "en", "zh-hans", "zh-hant", "ko"];

  const getLangFromStorage = () => {
    const v = (localStorage.getItem(LANG_STORAGE_KEY) || "").toLowerCase();
    return supportedLangs.includes(v) ? v : "ja";
  };

  let currentLang = getLangFromStorage();

  const t = (key) => {
    const pack = I18N[currentLang] || I18N["ja"];
    return (pack && pack[key]) ? pack[key] : (I18N["ja"][key] || "");
  };

  const applyI18n = () => {
    // update document lang
    const html = document.documentElement;
    if (html) {
      if (currentLang === "zh-hans") html.lang = "zh-Hans";
      else if (currentLang === "zh-hant") html.lang = "zh-Hant";
      else html.lang = currentLang;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      el.setAttribute("placeholder", t(key));
    });

    // update active flag UI
    const flags = Array.from(document.querySelectorAll(".lang-flags .flag"));
    flags.forEach((btn) => {
      const lang = (btn.getAttribute("data-lang") || "").toLowerCase();
      btn.classList.toggle("active", lang === currentLang);
    });
  };

  const setLang = (lang) => {
    const normalized = (lang || "").toLowerCase();
    if (!supportedLangs.includes(normalized)) return;
    currentLang = normalized;
    localStorage.setItem(LANG_STORAGE_KEY, currentLang);
    applyI18n();
  };

  // ===== bind language buttons =====
  const flagButtons = Array.from(document.querySelectorAll(".lang-flags .flag"));
  flagButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLang(lang);
    });
  });

  applyI18n();

  // ===== category tabs (active state) =====
  const tabs = Array.from(document.querySelectorAll(".tab"));
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // ===== info modal =====
  const infoBtn = document.getElementById("infoBtn");
  const infoModal = document.getElementById("infoModal");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");

  const openModal = () => {
    if (!infoModal) return;
    infoModal.hidden = false;
    infoModal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    if (!infoModal) return;
    infoModal.hidden = true;
    infoModal.setAttribute("aria-hidden", "true");
  };

  if (infoBtn) infoBtn.addEventListener("click", openModal);
  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  // ===== search overlay =====
  const overlay = document.getElementById("searchOverlay");
  let overlayTimer = null;

  const showSearchingFor2s = () => {
    if (!overlay) return Promise.resolve();

    if (overlayTimer) {
      clearTimeout(overlayTimer);
      overlayTimer = null;
    }

    overlay.hidden = false;

    return new Promise((resolve) => {
      overlayTimer = setTimeout(() => {
        overlay.hidden = true;
        overlayTimer = null;
        resolve();
      }, 2000);
    });
  };

  // ===== AI mode switch =====
  const modeSwitch = document.getElementById("modeSwitch");
  let isAiMode = false;

  const setAiMode = (on) => {
    isAiMode = !!on;
    if (!modeSwitch) return;
    modeSwitch.classList.toggle("ai-on", isAiMode);
    modeSwitch.setAttribute("aria-checked", isAiMode ? "true" : "false");
  };

  if (modeSwitch) {
    modeSwitch.addEventListener("click", () => setAiMode(!isAiMode));
  }

  // ===== elements =====
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const body = document.getElementById("textSearchBody");
  const resultsList = document.getElementById("resultsList");

  const uploadBtn = document.getElementById("uploadBtn");
  const imageInput = document.getElementById("imageInput");

  // ===== results (accumulate; do not reset) =====
  const results = [];

  const makeResultButton = (category, name, thumbSrc) => {
    const btn = document.createElement("button");
    btn.className = "result";
    btn.type = "button";
    btn.innerHTML = `
      <div class="thumb"><img src="${thumbSrc}" alt=""></div>
      <div class="name-wrap">
        <div class="cat">${category}</div>
        <div class="rname">${name}</div>
      </div>
      <div class="pin" aria-hidden="true">📍</div>
      <div class="chev" aria-hidden="true">›</div>
    `;
    btn.addEventListener("click", () => alert(t("alert_location")));
    return btn;
  };

  const renderResults = () => {
    if (!resultsList) return;
    resultsList.innerHTML = "";
    results.forEach((it) => {
      resultsList.appendChild(makeResultButton(it.cat, it.name, it.thumb));
    });
  };

  const addResults = (items) => {
    // newest should appear on top
    for (let i = items.length - 1; i >= 0; i--) {
      results.unshift(items[i]);
    }
    renderResults();
    if (resultsList) resultsList.scrollTop = 0;
  };

  const showResultsAreaIfNeeded = () => {
    if (!body) return;
    body.hidden = false;
  };

  const getActiveTabText = () => {
    const active = document.querySelector(".tab.active");
    return active ? (active.textContent || "").trim() : "";
  };

  let textCounter = 0;
  let imageCounter = 0;

  const getSample = () => SAMPLE_DATA[currentLang] || SAMPLE_DATA["ja"];

  const pickTextResults = () => {
    const q = (searchInput ? searchInput.value : "").trim();
    const activeTab = getActiveTabText();
    const s = getSample();
    const allTabLabel = t("tab_all");

    const baseArr = isAiMode ? s.textAi : s.textQuick;

    const out = [];
    for (let i = 0; i < 3; i++) {
      const base = baseArr[(textCounter + i) % baseArr.length];
      const cat = (activeTab && activeTab !== allTabLabel) ? activeTab : base.cat;
      const name = (i === 0 && q) ? q : base.name;
      out.push({ cat, name, thumb: base.thumb });
    }
    textCounter += 3;
    return out;
  };

  const pickImageResults = (fileName) => {
    const s = getSample();
    const baseArr = s.image;

    const out = [];

    let firstName = baseArr[imageCounter % baseArr.length].name;
    if (fileName) {
      const withoutExt = fileName.replace(/\.[^/.]+$/, "");
      firstName = withoutExt.length > 22 ? withoutExt.slice(0, 22) + "…" : withoutExt;
    }

    for (let i = 0; i < 3; i++) {
      const base = baseArr[(imageCounter + i) % baseArr.length];
      const name = (i === 0) ? firstName : base.name;
      out.push({ cat: base.cat, name, thumb: base.thumb });
    }

    imageCounter += 3;
    return out;
  };

  // ===== search flow =====
  let isSearching = false;

  const setControlsDisabled = (disabled) => {
    if (searchBtn) searchBtn.disabled = disabled;
    if (uploadBtn) uploadBtn.disabled = disabled;
  };

  const runSearchFlow = async (resultItems) => {
    if (isSearching) return;
    isSearching = true;

    setControlsDisabled(true);
    await showSearchingFor2s();
    setControlsDisabled(false);

    showResultsAreaIfNeeded();
    addResults(resultItems);

    if (searchInput) searchInput.blur();

    isSearching = false;
  };

  if (searchBtn) {
    searchBtn.addEventListener("click", () => runSearchFlow(pickTextResults()));
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        runSearchFlow(pickTextResults());
      }
    });
  }

  if (uploadBtn && imageInput) {
    uploadBtn.addEventListener("click", () => imageInput.click());

    imageInput.addEventListener("change", () => {
      const file = imageInput.files && imageInput.files[0];
      if (!file) return;

      runSearchFlow(pickImageResults(file.name));
      imageInput.value = "";
    });
  }

  // ===== map =====
  const mapBtn = document.querySelector(".map-btn");
  if (mapBtn) mapBtn.addEventListener("click", () => alert(t("alert_map")));

  // ===== recommended carousel =====
  const track = document.querySelector(".reco-track");
  if (!track) return;

  let isAnimating = false;

  const getStep = () => {
    const first = track.querySelector(".reco-card");
    if (!first) return 0;
    const style = window.getComputedStyle(track);
    const gapStr = style.columnGap || style.gap || "0px";
    const gap = Number.parseFloat(gapStr) || 0;
    return first.getBoundingClientRect().width + gap;
  };

  const slideOnce = () => {
    if (isAnimating) return;
    const step = getStep();
    if (!step) return;

    isAnimating = true;

    track.style.transition = "transform 380ms ease";
    track.style.transform = `translateX(${-step}px)`;

    const onEnd = () => {
      track.removeEventListener("transitionend", onEnd);

      const first = track.querySelector(".reco-card");
      if (first) track.appendChild(first);

      track.style.transition = "none";
      track.style.transform = "translateX(0px)";
      void track.offsetWidth;

      isAnimating = false;
    };

    track.addEventListener("transitionend", onEnd);
  };

  track.style.transform = "translateX(0px)";
  setInterval(slideOnce, 1000);

  window.addEventListener("resize", () => {
    if (isAnimating) return;
    track.style.transition = "none";
    track.style.transform = "translateX(0px)";
    void track.offsetWidth;
  });
})();