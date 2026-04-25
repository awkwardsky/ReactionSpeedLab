(function () {
  const config = window.REACTION_ADSENSE_CONFIG || {};
  const publisherId = String(config.publisherId || "").trim();
  const slots = config.slots || {};
  const adContainers = Array.from(document.querySelectorAll("[data-adsense-unit]"));
  const publisherIdPattern = /^ca-pub-\d{16}$/;
  const slotIdPattern = /^\d{6,20}$/;
  const scriptId = "adsense-script";

  if (!adContainers.length) {
    return;
  }

  function isConfiguredPublisherId(value) {
    return publisherIdPattern.test(value);
  }

  function isConfiguredSlotId(value) {
    return slotIdPattern.test(value) && !/^0+$/.test(value);
  }

  function markContainer(container, status) {
    container.dataset.adsenseStatus = status;
  }

  function createAdUnit(container, slotId) {
    const adUnit = document.createElement("ins");
    adUnit.className = "adsbygoogle";
    adUnit.style.display = "block";
    adUnit.dataset.adClient = publisherId;
    adUnit.dataset.adSlot = slotId;
    adUnit.dataset.adFormat = container.dataset.adFormat || "auto";

    if (container.dataset.fullWidthResponsive !== "false") {
      adUnit.dataset.fullWidthResponsive = "true";
    }

    return adUnit;
  }

  function pushAdRequests(adUnits) {
    window.adsbygoogle = window.adsbygoogle || [];

    adUnits.forEach(() => {
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.warn("AdSense request failed.", error);
      }
    });
  }

  if (!isConfiguredPublisherId(publisherId)) {
    adContainers.forEach((container) => markContainer(container, "placeholder"));
    return;
  }

  const adUnits = [];

  adContainers.forEach((container) => {
    const unitName = container.dataset.adsenseUnit;
    const slotId = String(slots[unitName] || "").trim();

    if (!isConfiguredSlotId(slotId)) {
      markContainer(container, "placeholder");
      return;
    }

    const adUnit = createAdUnit(container, slotId);
    container.append(adUnit);
    markContainer(container, "ready");
    adUnits.push(adUnit);
  });

  if (!adUnits.length) {
    return;
  }

  const existingScript = document.querySelector(`#${scriptId}`);

  if (existingScript) {
    existingScript.addEventListener("load", () => pushAdRequests(adUnits), { once: true });
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`;
  script.addEventListener("load", () => pushAdRequests(adUnits), { once: true });
  script.addEventListener(
    "error",
    () => {
      adContainers.forEach((container) => markContainer(container, "error"));
      console.warn("AdSense script could not be loaded.");
    },
    { once: true }
  );

  document.head.append(script);
})();
