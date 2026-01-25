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

  // ----- search overlay -----
  const overlay = document.getElementById("searchOverlay");
  let overlayTimer = null;

  const showSearchingFor2s = () => {
    if (!overlay) return Promise.resolve();

    // 連打対策：タイマーが残ってたらリセット
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

    const nodes = names.map(n => makeResultButton(n, thumb));
    for (let i = nodes.length - 1; i >= 0; i--) {
      resultsList.insertBefore(nodes[i], resultsList.firstChild);
    }

    resultsList.scrollTop = 0;
  };

  const showResultsAreaIfNeeded = () => {
    if (!body) return;
    body.hidden = false;
  };

  const runSearchFlow = async () => {
    // 2秒「検索中」演出
    if (searchBtn) searchBtn.disabled = true;
    await showSearchingFor2s();
    if (searchBtn) searchBtn.disabled = false;

    // 演出後に結果更新（見た目確認用）
    showResultsAreaIfNeeded();

    if (hasShownOnce) {
      prependBatch();
    } else {
      hasShownOnce = true;
      if (resultsList) resultsList.scrollTop = 0;
    }

    if (searchInput) searchInput.blur();
  };

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      runSearchFlow();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        runSearchFlow();
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
