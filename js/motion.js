/* 온코어 메인 — 모션 (GSAP + ScrollTrigger)
   - main.js 와 따로 둔다: GSAP 을 못 불러와도 이 파일만 멈추고 화면·기능은 그대로 동작한다 (처음 상태를 숨기는 CSS 가 없음).
   - 움직임 줄이기(prefers-reduced-motion)를 켠 사용자에게는 아무 효과도 넣지 않는다.
   - 히어로 배너는 첫 화면 표시 속도(LCP)를 늦추지 않도록 건드리지 않는다.
   - 고도몰: js/oncore/motion.js 로 두고 oncore.js 다음에 불러온다. 스킨 HTML 안에 직접 쓰면 템플릿 엔진이 중괄호를 해석하므로 반드시 별도 파일로. */
(function () {
  'use strict';
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var EASE = 'power3.out';
  var mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', function () {

    /* ── 1. 스크롤 등장: 섹션 제목 → 내용 순서로 아래에서 올라온다 ── */
    $$('.oc-sec-hd, .oc-final-txt').forEach(function (hd) {
      gsap.from(hd.children, {
        y: 24, autoAlpha: 0, duration: 0.7, ease: EASE, stagger: 0.08,
        scrollTrigger: { trigger: hd, start: 'top 85%', once: true }
      });
    });

    // 카드 묶음: 화면에 들어오는 것끼리 차례로
    function batch(sel, y) {
      var items = $$(sel); if (!items.length) return;
      gsap.set(items, { y: y, autoAlpha: 0 });
      ScrollTrigger.batch(items, {
        start: 'top 90%', once: true,
        onEnter: function (els) { gsap.to(els, { y: 0, autoAlpha: 1, duration: 0.7, ease: EASE, stagger: 0.08, overwrite: true }); }
      });
    }
    batch('.oc-trust li', 16);
    batch('.oc-types a', 24);
    batch('.oc-sol-tabs, .oc-sol', 24);
    batch('.oc-ftabs, .oc-display--best:not([hidden]) .oc-card', 32);
    batch('.oc-posts .oc-post', 32);

    // 마무리: 상담 카드는 오른쪽에서
    gsap.from('.oc-final-card', {
      x: 40, autoAlpha: 0, duration: 0.8, ease: EASE,
      scrollTrigger: { trigger: '.oc-final', start: 'top 75%', once: true }
    });

    /* ── 2. 업종별 추천 탭: 패널이 바뀔 때 소개 → 사양 → 제품 순서로 ── */
    var solTabs = $('.oc-sol-tabs');
    if (solTabs) solTabs.addEventListener('click', function (e) {
      var b = e.target.closest('[role=tab]'); if (!b) return;
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      if (panel) gsap.from(panel.children, { y: 16, autoAlpha: 0, duration: 0.5, ease: EASE, stagger: 0.07, overwrite: true });
    });

    /* ── 3. 견적함에 담기: 제품 사진이 견적함 버튼으로 날아간다 ──
       main.js 보다 먼저(캡처 단계) 상태를 읽어야 '새로 담는 클릭'인지 알 수 있다 (담긴 뒤 다시 누르면 견적함이 열림) */
    function onAdd(e) {
      var btn = e.target.closest('[data-add]'); if (!btn || btn.classList.contains('oc-on')) return;
      var card = btn.closest('.oc-card'), img = card && $('.oc-card-img img', card);
      var target = $$('.oc-qbtn, .oc-mbar-q').filter(function (el) { return el.getClientRects().length; })[0];
      if (!img || !target) return;
      var from = img.getBoundingClientRect(), to = target.getBoundingClientRect();
      var fly = img.cloneNode();
      fly.className = 'oc-fly'; fly.alt = '';
      gsap.set(fly, { left: from.left, top: from.top, width: from.width, height: from.height });
      document.body.appendChild(fly);
      var dx = to.left + to.width / 2 - (from.left + from.width / 2), dy = to.top + to.height / 2 - (from.top + from.height / 2);
      gsap.timeline({ onComplete: function () { fly.remove(); } })
        .to(fly, { x: dx, duration: 0.7, ease: 'power1.inOut' }, 0)
        .to(fly, { y: dy, duration: 0.7, ease: 'back.in(1.4)' }, 0) // 살짝 떠올랐다가 떨어지는 곡선
        .to(fly, { scale: 0.12, borderRadius: '50%', duration: 0.7, ease: 'power2.in' }, 0)
        .to(fly, { autoAlpha: 0, duration: 0.15 }, 0.6);
    }
    document.addEventListener('click', onAdd, true);

    return function () { document.removeEventListener('click', onAdd, true); };
  });

  // 탭 전환·이미지 로드로 높이가 바뀌면 트리거 위치를 다시 잰다
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  $$('.oc-ftabs [role=tab]').forEach(function (b) {
    b.addEventListener('click', function () { requestAnimationFrame(function () { ScrollTrigger.refresh(); }); });
  });
})();
