/* 서브 페이지 시안 — 고객지원·회원 묶음 동작 (목업 전용. 고도몰에서는 쓰지 않는다)
   ① join: 전체 동의 ↔ 개별 동의 연동, 기업/개인에 따라 사업자등록번호 칸 표시
   ② cs : 자주 묻는 질문 분류 칩으로 걸러 보기
   서식 제출은 시안이라 막는다. 전체를 즉시 실행 함수로 감싼 ES5 문법 (main.js 와 같은 규칙) */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // 시안: 서식 제출은 막는다. data-mock-go 가 있으면 그 화면으로만 넘어간다 (견적 비밀번호 확인 → 견적 상세)
  $$('form[data-mock]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var go = f.getAttribute('data-mock-go');
      if (go) location.href = go;
    });
  });

  // ① 회원가입
  var all = $('[data-agree-all]');
  if (all) {
    var items = $$('[data-agree]');
    all.addEventListener('change', function () { items.forEach(function (i) { i.checked = all.checked; }); });
    items.forEach(function (i) {
      i.addEventListener('change', function () { all.checked = items.every(function (x) { return x.checked; }); });
    });
  }
  var types = $$('input[name="oc-mtype"]');
  if (types.length) {
    var biz = $$('[data-biz]');
    var sync = function () {
      var isBiz = types.filter(function (t) { return t.checked; })[0].value === 'biz';
      biz.forEach(function (b) {
        b.hidden = !isBiz;
        $$('input', b).forEach(function (i) { i.disabled = !isBiz; });
      });
    };
    types.forEach(function (t) { t.addEventListener('change', sync); });
    sync();
  }

  // ② 고객센터 FAQ 걸러 보기
  var chips = $('[data-faq-filter]');
  if (chips) {
    var rows = $$('[data-faq-cat]');
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-cat]'); if (!b) return;
      $$('button', chips).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var cat = b.getAttribute('data-cat');
      rows.forEach(function (r) { r.hidden = cat !== 'all' && r.getAttribute('data-faq-cat') !== cat; });
    });
  }
})();
