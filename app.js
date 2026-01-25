(() => {
  // ----- flags/tabs (mock) -----
  const flags = Array.from(document.querySelectorAll(".flag"));
  const tabs = Array.from(document.querySelectorAll(".tab"));

  flags.forEach(btn => {
    btn.addEventListener("click", () => {
      flags.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // ----- text search behavior (stack results) -----
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const body = document.getElementById("textSearchBody");
  const resultsList = document.getElementById("resultsList");

  let hasShownOnce = false;

  const makeResultButton = (name, thumbSrc) => {
    const btn = document.createElement("button");
    btn.className = "result";
    btn.type = "button";

    btn.innerHTML = `
      <div class="thumb"><img src="${thumbSrc}" alt=""></div>
      <div class="rname">${name}</div>
      <div class="pin" aria-hidden="true">📍</div>
      <div class="chev" aria-hidden="true">›</div>
    `;

    return btn;
  };

  const prependBatch = () => {
    if (!resultsList) return;

    const thumb = "./assets/sample_thumb_2.jpg";
    const names = ["たけのこのさと", "チョコもなかジャンボ", "やきいも"];

    // 3件を上に積む（順序は上から names[0], names[1], names[2]）
    // prependの性質上、逆順にinsertすると表示順が綺麗に揃う
    const nodes = names.map(n => makeResultButton(n, thumb));
    for (let i = nodes.length - 1; i >= 0; i--) {
      resultsList.insertBefore(nodes[i], resultsList.firstChild);
    }

    // 追加後はリストの先頭を見せたい（上に積んだ3件がすぐ見える）
    resultsList.scrollTop = 0;
  };

  const showResultsAreaIfNeeded = () => {
    if (!body) return;
    body.hidden = false;
  };

  const onSearch = () => {
    showResultsAreaIfNeeded();

    // 1回目は「既存の3件を表示する」だけ（＝追加はしない）
    // 2回目以降は上に3件追加
    if (hasShownOnce) {
      prependBatch();
    } else {
      hasShownOnce = true;
      // 初回はリストの先頭に合わせるだけ（見え方安定）
      if (resultsList) resultsList.scrollTop = 0;
    }

    if (searchInput) searchInput.blur();
  };

  if (searchBtn) {
    searchBtn.addEventListener("click", onSearch);
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSearch();
      }
    });
  }

  const uploadBtn = document.querySelector(".upload-btn");
  const mapBtn = document.querySelector(".map-btn");

  if (uploadBtn) uploadBtn.addEventListener("click", () => alert("（モック）画像アップロード"));
  if (mapBtn) mapBtn.addEventListener("click", () => alert("（モック）フロアマップ表示"));

  // ----- reco auto slide (1 sec / infinite) -----
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
