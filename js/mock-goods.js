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

  // 상세 설명(goodsDescription) 이미지 — 운영 사이트 같은 상품의 상세 이미지 주소(2026-10-27 옮김). 고도몰은 관리자 상품 등록의 '상세 설명'을 그대로 출력하므로 필요 없다
  var DESC = {
    '1000000710': [
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_06.jpg'
    ],
    '1000000367': [
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Ultra-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_30J5S08M00.jpg'
    ],
    '1000000366': [
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg' // 운영 사이트의 두 번째 이미지(P3-Tiny-G2_spec_30K5S0BW00.jpg)는 404 — 빼 둠
    ],
    '1000000365': [
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/spec/P2-Tower-Gen2_spec_30JQS0B900.jpg'
    ],
    '1000000073': [
      'https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR650-V4_6507P.jpg'
    ],
    '1000000072': [
      'https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR630-V4_6507P.jpg'
    ],
    '1000000071': [
      'https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR250-V3_6353P.jpg'
    ],
    '1000000057': [
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_01.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_02.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_03.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_04.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_05.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_06.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_07.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_08.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_09.jpg'
    ],
    '1000000049': [
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20SFF/D700SF-0052250460/D700SF-0052250460.jpg'
    ],
    '1000000054': [
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20SFF/D700SF-005225209X/D700SF-005225209X.jpg'
    ],
    '1000000069': [
      'https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/LENOVO/ThinkPad%20X1%20%EC%B9%B4%EB%B3%B8%20Gen%2013/21NSS02M00.jpg'
    ],
    '1000000059': [
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/X1%20%EC%B9%B4%EB%B3%B8%20G13%2021NSS02S00.jpg'
    ],
    '1000000062': [
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2001.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2002.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2003.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2004.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2005.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2006.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2007.jpg',
      'https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2008.jpg'
    ],
    '1000000077': [
      'https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/detail/HCF-A5500.jpg'
    ],
    '1000000075': [
      'https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/detail/HCF-A2200.jpg'
    ],
    '1000000076': [
      'https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/detail/HCF-A5300.jpg'
    ],
    '1000000074': [
      'https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/detail/HCF-A2100.jpg'
    ]
  };

  window.OC_MOCK = { GOODS: GOODS, DISPLAYS: DISPLAYS, DESC: DESC, li: li, money: money };

  Array.prototype.forEach.call(document.querySelectorAll('[data-display]'), function (box) {
    var list = DISPLAYS[box.getAttribute('data-display')] || [];
    box.innerHTML = '<ul class="oc-cards">' + list.map(li).join('') + '</ul>';
  });
})();
