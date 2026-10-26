/* 목업 전용 — 고도몰에서는 필요 없는 파일.
   고도몰 상품 진열 위젯은 서버에서 목록 템플릿(goods/list/list_01.html 등)으로 HTML 을 만든다.
   이 파일은 그 결과와 똑같은 마크업을 브라우저에서 만들어, main.js 가 실제 환경과 같은 조건에서 동작하는지 확인하는 용도다.
   필드 이름은 고도몰 템플릿 변수와 같다 (goodsNo, goodsNm, brandNm, goodsModelNo, shortDescription, goodsPrice, goodsPriceString).
   스펙은 상품의 '짧은 설명'(shortDescription)에 "항목: 값 / 항목: 값 / 항목: 값 / 항목: 값" 4개로 넣는다(카드 사양 4줄). 값은 2026-10-13 실제 상품명에서 옮긴 것. */
(function () {
  'use strict';

  var GOODS = {
    '1000000710': { goodsNm: 'ThinkStation P5 Tower Gen2', brandNm: 'Lenovo', goodsModelNo: '', image: 'p5.jpg',
      shortDescription: 'CPU: Xeon w3-2425 / 메모리: 16GB / 저장: 512GB + 2TB / GPU: NVIDIA RTX A400', goodsPrice: 4834000, goodsPriceString: '' },
    '1000000367': { goodsNm: 'ThinkStation P3 Ultra SFF', brandNm: 'Lenovo', goodsModelNo: '', image: 'p3-sff.jpg',
      shortDescription: 'CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB / OS: FreeDOS', goodsPrice: 3077000, goodsPriceString: '' },
    '1000000366': { goodsNm: 'ThinkStation P3 Tiny Gen2', brandNm: 'Lenovo', goodsModelNo: '', image: 'p3-tiny.jpg',
      shortDescription: 'CPU: Core Ultra 5 225 / 메모리: 8GB / 저장: 512GB / OS: FreeDOS', goodsPrice: 1678000, goodsPriceString: '' },
    '1000000365': { goodsNm: 'ThinkStation P2 Tower Gen2', brandNm: 'Lenovo', goodsModelNo: '', image: 'p2.jpg',
      shortDescription: 'CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 512GB / OS: FreeDOS', goodsPrice: 1780000, goodsPriceString: '' },
    '1000000073': { goodsNm: 'ThinkSystem SR650 V4', brandNm: 'Lenovo', goodsModelNo: '', image: 'sr650.jpg',
      shortDescription: 'CPU: Xeon 6507P 3.5GHz 8C / 형태: 2U 랙마운트 / 소켓: 2소켓 / 메모리: DDR5', goodsPrice: 0, goodsPriceString: '구성에 따라 견적' },
    '1000000072': { goodsNm: 'ThinkSystem SR630 V4', brandNm: 'Lenovo', goodsModelNo: '', image: 'sr630.jpg',
      shortDescription: 'CPU: Xeon 6507P 3.5GHz 8C / 형태: 1U 랙마운트 / 소켓: 2소켓 / 메모리: DDR5', goodsPrice: 0, goodsPriceString: '구성에 따라 견적' },
    '1000000071': { goodsNm: 'ThinkSystem SR250 V3', brandNm: 'Lenovo', goodsModelNo: '', image: 'sr250.jpg',
      shortDescription: 'CPU: Xeon 6353P 2.7GHz 8C / 형태: 1U 랙마운트 / 소켓: 1소켓 / 용도: 소규모 파일·업무 서버', goodsPrice: 0, goodsPriceString: '구성에 따라 견적' },
    '1000000057': { goodsNm: 'ExpertCenter D7 미니타워', brandNm: 'ASUS', goodsModelNo: 'D700MF-0052250990', image: 'asus-mt.jpg',
      shortDescription: 'CPU: Core Ultra 5 225 / 메모리: 32GB(16+16) / 저장: 512GB / OS: FreeDOS', goodsPrice: 1629000, goodsPriceString: '' },
    '1000000049': { goodsNm: 'ExpertCenter D7 SFF', brandNm: 'ASUS', goodsModelNo: 'D700SF-0052250460', image: 'asus-sff.jpg',
      shortDescription: 'CPU: Core Ultra 5 225 / 메모리: 32GB(16+16) / 저장: 512GB / OS: FreeDOS', goodsPrice: 1998750, goodsPriceString: '' },
    '1000000054': { goodsNm: 'ExpertCenter D7 SFF', brandNm: 'ASUS', goodsModelNo: 'D700SF-005225209X', image: 'asus-sff.jpg',
      shortDescription: 'CPU: Core Ultra 5 225 / 메모리: 32GB(16+16) / 저장: 512GB / OS: Windows 11 Pro', goodsPrice: 2248750, goodsPriceString: '' },
    '1000000069': { goodsNm: 'ThinkPad X1 Carbon Gen 13', brandNm: 'Lenovo', goodsModelNo: '21NSS0L700', image: 'x1.jpg',
      shortDescription: 'CPU: Core Ultra 5 226V / 메모리: 16GB / 저장: 1TB / OS: Windows 11 Pro', goodsPrice: 3449000, goodsPriceString: '' },
    '1000000059': { goodsNm: 'ThinkPad X1 Carbon Gen 13 OLED', brandNm: 'Lenovo', goodsModelNo: '21NSS02S00', image: 'x1.jpg',
      shortDescription: 'CPU: Core Ultra 7 258V / 메모리: 32GB / 저장: 512GB / OS: Windows 11 Pro', goodsPrice: 3179000, goodsPriceString: '' },
    '1000000062': { goodsNm: 'ThinkPad L16 Gen1', brandNm: 'Lenovo', goodsModelNo: '21L3003WKR', image: 'l16.jpg',
      shortDescription: 'CPU: Core Ultra 7 155H / 메모리: 16GB / 저장: 512GB / OS: Windows 11 Home', goodsPrice: 1569000, goodsPriceString: '' },
    '1000000077': { goodsNm: 'HCF-A5500 All-Flash', brandNm: 'HC', goodsModelNo: '', image: 'hcf-a5500.jpg',
      shortDescription: '방식: SAN + NAS / 디스크: All-Flash / 형태: 2U 랙마운트 / 용도: 파일 공유·가상화', goodsPrice: 0, goodsPriceString: '구성에 따라 견적' },
    '1000000075': { goodsNm: 'HCF-A2200 All-Flash', brandNm: 'HC', goodsModelNo: '', image: 'hcf-a2200.jpg',
      shortDescription: '방식: SAN / 디스크: All-Flash / 형태: 랙마운트 / 용도: 가상화·데이터베이스', goodsPrice: 0, goodsPriceString: '구성에 따라 견적' },
    // 운영 사이트 스토리지(cateCd=007) 4종 중 나머지 2종. 사진은 같은 시리즈 사진을 쓴다 (전용 사진이 생기면 교체)
    '1000000076': { goodsNm: 'HCF-A5300 All-Flash', brandNm: 'HC', goodsModelNo: '', image: 'hcf-a5500.jpg',
      shortDescription: '방식: SAN + NAS / 디스크: All-Flash / 형태: 2U·4U 랙마운트 / 용도: 파일 공유·가상화', goodsPrice: 0, goodsPriceString: '구성에 따라 견적' },
    '1000000074': { goodsNm: 'HCF-A2100 All-Flash', brandNm: 'HC', goodsModelNo: '', image: 'hcf-a2200.jpg',
      shortDescription: '방식: NAS / 디스크: All-Flash / 형태: 25-Bay 랙마운트 / 용도: 파일 공유', goodsPrice: 0, goodsPriceString: '구성에 따라 견적' }
  };

  // 관리자 '메인 상품 진열'에 등록할 상품 (진열 하나 = 화면의 상품 묶음 하나)
  var DISPLAYS = {
    'new': ['1000000710', '1000000367', '1000000366'],
    all: ['1000000710', '1000000073', '1000000367', '1000000069', '1000000057', '1000000077', '1000000365', '1000000062'],
    ws: ['1000000710', '1000000367', '1000000365', '1000000366'],
    server: ['1000000073', '1000000072', '1000000071'],
    desktop: ['1000000057', '1000000049', '1000000054'],
    notebook: ['1000000069', '1000000059', '1000000062'],
    storage: ['1000000077', '1000000076', '1000000075', '1000000074']
  };

  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var money = function (n) { return n.toLocaleString('ko-KR'); };
  // 시안 전용: 하위 폴더(pages/)의 페이지는 window.OC_ROOT = '../' 로, 상품 링크는 window.OC_VIEW(상품 상세 시안)로 바꾼다. 고도몰에서는 이 파일이 필요 없다
  var ROOT = window.OC_ROOT || '';
  var url = function (no) { return (window.OC_VIEW || 'pages/goods-view.html') + '?no=' + no; };

  /* 아래 문자열은 기획안 '10 고도몰 구현 검토'에 적은 목록 템플릿과 한 줄씩 대응한다.
     {..goodsImage} 는 고도몰이 <img> 태그 전체를 출력한다. 관리자 상품 아이콘({..goodsIcon})은 출력하지 않는다 — 운영 사이트에서 쓰지 않고, 스킨이 모양을 정할 수 없는 이미지라서 */
  function li(no) {
    var g = GOODS[no];
    var quoteOnly = g.goodsPriceString !== '';
    return '<li class="oc-card" data-goodsno="' + no + '" data-brand="' + esc(g.brandNm) + '">' +
      '<a class="oc-card-img" href="' + url(no) + '">' +
        '<img src="' + ROOT + 'img/' + g.image + '" width="347" alt="' + esc(g.goodsNm) + '" title="' + esc(g.goodsNm) + '" class="middle" loading="lazy">' +
        (quoteOnly ? '<span class="oc-badge oc-q">견적 전용</span>' : '') +
      '</a>' +
      '<div class="oc-card-body">' +
        '<em class="oc-brand">' + esc(g.brandNm) + '</em>' +
        '<h3 class="oc-card-name"><a href="' + url(no) + '">' + esc(g.goodsNm) + '</a></h3>' +
        // 품번 줄은 항상 출력한다 (카드마다 줄 수가 달라지지 않게). 고도몰 템플릿: 품번이 없을 때 { ? .goodsModelNo } 의 else 쪽에 '—' 출력
        '<p class="oc-card-mfg">제조사 품번 ' + (g.goodsModelNo ? esc(g.goodsModelNo) : '—') + '</p>' +
        '<ul class="oc-card-spec" data-spec="' + esc(g.shortDescription) + '"></ul>' +
        '<div class="oc-card-price">' + (quoteOnly
          ? '<b class="oc-q">' + esc(g.goodsPriceString) + '</b><small>CPU·메모리·디스크 맞춤 구성</small>'
          : '<b>' + money(g.goodsPrice) + '원</b><small>부가세 포함<span class="oc-more-note"> · 수량 구매 시 별도 견적</span></small>') +
        '</div>' +
        '<div class="oc-card-act"><button type="button" class="oc-btn oc-btn-d" data-quote>견적 요청</button><button type="button" class="oc-btn oc-btn-o oc-add" data-add>담기</button></div>' +
        '<label class="oc-chk"><input type="checkbox" data-cmp> 비교</label>' +
      '</div>' +
    '</li>';
  }

  window.OC_MOCK = { GOODS: GOODS, DISPLAYS: DISPLAYS, li: li, money: money };

  Array.prototype.forEach.call(document.querySelectorAll('[data-display]'), function (box) {
    var list = DISPLAYS[box.getAttribute('data-display')] || [];
    box.innerHTML = '<ul class="oc-cards">' + list.map(li).join('') + '</ul>';
  });
})();
