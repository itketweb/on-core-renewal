/* 서브 페이지 시안 — 기업 구매 묶음 동작 (목업 전용, 고도몰에서는 필요 없다). main.js 보다 먼저 불러온다(jspre).
   1) [data-goods="번호,번호"] 에 목업 상품 카드를 채운다 → main.js 가 사양·담기를 붙인다
   2) 필터 칩 [data-filter-for="목록id"] 버튼 [data-filter="값"] ↔ 항목 [data-cat="값"]
   3) 상세 페이지: ?no=번호 로 [data-view="번호"] 블록 하나만 보이고 제목·경로·설명이 따라 바뀐다 */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* 1) 상품 카드 */
  $$('[data-goods]').forEach(function (box) {
    var M = window.OC_MOCK; if (!M) return;
    box.innerHTML = '<ul class="oc-cards oc-biz-cards oc-cards--etc">' + box.getAttribute('data-goods').split(',').map(function (n) { return n.trim(); }).filter(function (n) { return M.GOODS[n]; }).map(function (n) { return M.li(n); }).join('') + '</ul>';
  });

  /* 2) 필터
     모바일(768 미만)에서 필터 틀(분절형)이 화면 폭을 넘치면 필터 줄을 숨기고 도구줄('총 N건' 옆)의 선택 상자로 바꾼다(규칙 9-5).
     선택 상자는 칩에서 만들어 main.js 보다 먼저 넣어 두므로 main.js 가 다른 선택 상자처럼 꾸민다. 칩과 상자는 같은 값을 공유한다.
     고도몰: 같은 말머리 목록을 칩(링크)과 선택 상자 두 번 출력한다 */
  $$('[data-filter-for]').forEach(function (bar) {
    var list = document.getElementById(bar.getAttribute('data-filter-for')); if (!list) return;
    var items = $$('[data-cat]', list), count = $('[data-count]'), chips = $$('[data-filter]', bar);
    var tool = $('.oc-toolbar', bar.parentNode), box = null, sel = null;
    if (tool) {
      box = document.createElement('span');
      box.className = 'oc-fsel';
      sel = document.createElement('select');
      sel.className = 'oc-select';
      sel.setAttribute('aria-label', bar.getAttribute('aria-label') || '분류');
      sel.innerHTML = chips.map(function (c) { return '<option value="' + c.getAttribute('data-filter') + '">' + c.textContent + '</option>'; }).join('');
      box.appendChild(sel);
      tool.appendChild(box);
      sel.addEventListener('change', function () { apply(sel.value); });
    }
    function apply(v) {
      var n = 0;
      chips.forEach(function (x) { x.setAttribute('aria-pressed', String(x.getAttribute('data-filter') === v)); });
      if (sel && sel.value !== v) { sel.value = v; sel.dispatchEvent(new Event('change')); return; } // 꾸민 상자(main.js)도 글자가 따라 바뀐다
      items.forEach(function (it) { var show = v === 'all' || it.getAttribute('data-cat') === v; it.hidden = !show; if (show) n++; });
      if (count) count.textContent = n;
    }
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-filter]'); if (b) apply(b.getAttribute('data-filter'));
    });
    // 틀이 넘치는지 재려면 필터가 보여야 하므로 잠깐 펼친 뒤 정한다 (분절형이라 줄을 바꾸지 않고 틀 안에서 넘친다)
    function fit() {
      if (!box) return;
      bar.classList.remove('oc-is-compact');
      var compact = window.innerWidth < 768 && bar.scrollWidth > bar.clientWidth + 1;
      bar.classList.toggle('oc-is-compact', compact);
      box.classList.toggle('oc-is-on', compact);
    }
    var raf;
    window.addEventListener('resize', function () { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); });
    window.addEventListener('load', fit); // 웹폰트가 늦게 오면 칩 폭이 바뀐다
    fit();
  });

  /* 3) 상세 블록 전환 */
  var views = $$('[data-view]');
  if (views.length) {
    var m = location.search.match(/[?&]no=(\d+)/), no = m ? m[1] : '1';
    var cur = views.filter(function (v) { return v.getAttribute('data-view') === no; })[0] || views[0];
    views.forEach(function (v) { v.hidden = v !== cur; });
    var t = cur.getAttribute('data-title');
    if (t) {
      var h1 = $('[data-view-h1]'), bc = $('[data-view-bc]'), lead = $('[data-view-lead]');
      if (h1) h1.textContent = t;
      if (bc) bc.textContent = t;
      if (lead && cur.getAttribute('data-lead')) lead.textContent = cur.getAttribute('data-lead');
      document.title = t + ' | 온코어';
    }
  }
})();
