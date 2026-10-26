/* 시안 검토용 막대 접기·펼치기 — 목업 전용(고도몰에 올리지 않음)
   - 모든 시안 페이지의 <head> 에서 불러온다. 그려지기 전에 접힘 상태(html.oc-rb-off)를 먼저 걸어 깜빡임을 막는다
   - 접힘 상태는 이 브라우저에만 저장되어 페이지를 옮겨도 유지된다 (저장이 막힌 창에서는 그 페이지에서만 동작)
   - 버튼은 막대 마크업(4곳)에 직접 넣지 않고 여기서 붙인다 */
(function () {
  'use strict';
  var KEY = 'oc-rb-off', root = document.documentElement;
  try { if (localStorage.getItem(KEY) === '1') root.classList.add('oc-rb-off'); } catch (e) {}

  function set(off) {
    root.classList.toggle('oc-rb-off', off);
    try { if (off) localStorage.setItem(KEY, '1'); else localStorage.removeItem(KEY); } catch (e) {}
  }
  var UP = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>';
  var DOWN = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

  document.addEventListener('DOMContentLoaded', function () {
    var bar = document.querySelector('.oc-review-bar'), inner = bar && bar.querySelector('.oc-rb-in');
    if (!inner) return;
    var fold = document.createElement('button');
    fold.type = 'button'; fold.className = 'oc-rb-fold'; fold.title = '검토 막대 접기';
    fold.innerHTML = UP + '<span>접기</span>';
    var open = document.createElement('button');
    open.type = 'button'; open.className = 'oc-rb-open'; open.title = '검토 막대 펼치기';
    open.setAttribute('aria-label', '검토 막대 펼치기'); /* 꼬리표는 화살표만 보이므로 */
    open.innerHTML = DOWN + '<span>펼치기</span>';
    inner.appendChild(fold);
    bar.appendChild(open);
    fold.addEventListener('click', function () { set(true); open.focus(); });
    open.addEventListener('click', function () { set(false); fold.focus(); });
  });
})();
