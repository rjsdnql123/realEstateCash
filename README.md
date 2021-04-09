# reaclApartment 

각 지역의 실제 부동산 거래 정보를 바탕으로 허의 매물에 현혹되지 않고 올바른 정보 전달 목적을 갖고 있습니다.

---

## 파일 실행

```
npm install
npm start
```
---

### 

styled-components와 media-query를 활용하여 모바일 환경 PC환경 반응형 제작

지도 이미지는 위키백과에서 지도 SVG파일을 갖고 직접 지역명 수정

AWS S3,SE2, EC2, route53을 활용해 배포 환경 구축

components와 container 컴포넌트로 나눠 역활 분리

typescript를 활용하여 정적타입 관리

redux를 활용하여 상태관리

배포링크 : http://realapatment.tk/

서버링크 : https://github.com/rjsdnql123/realestateServer



# reaclApartment 

---
## Index

[1. reaclApartment 란?](#reaclapartment-란)

[2. Reaclapartment-Page](#reaclapartment-page)

[3. Dev](#dev)

---

### reaclApartment 란?

다양한 부동산 웹,앱이 개발이 되면서 허위매물이 늘어나고 있습니다. 소비자가 허위매물에 속지 않게 자신의 동네에 최근에 판매된 주택 가격 정보를 담고 있습니다.

---

## reaclApartment-Page 

### Main Page

![스크린샷, 2021-04-09 13-25-26](https://user-images.githubusercontent.com/61114705/114128698-e50cbb80-9937-11eb-8f81-1e4e48c6d9c8.png)

지도 SVG를 활용해 클릭시 지역의 주택 판매 정보를 바로 알아볼 수 있습니다.

---

## Dev


- **Front-end:** React, Redux, typescript , styled-component, typescript, S3, Route53
- **Back-end**: express, Node.js, API, dotenv, Axios, EC2, PM2

#### Front
- 백지 상태의 지도 SVG파일을 수정하여 지역명을 붙여줘 사용자에게 좀더 편한 UI제공
- 효율적인 상태관리를 위해 상태관리 라이브러리 redux를 활용해 상태 관리
- Axios를 활용하여 클릭한 지역의 이름을 서버에 보내 실 거래 내역을 받아옴
- media-query를 활용해 모바일 환경에서 적합한 UI설계
- typescript를 활용한 타입 관리
- Route53을 이용해 링크 도메인 설정
- S3를 활용해 배포

#### Back
- node.js를 활용하여 RESTful하게 서버 route 구축
- 받아온 지역 이름을 갖고 지역번호로 변환하여 실 거래 가격을 검색 후 전송
- EC2, PM2를 활용하여 서버 배포 후 클라이언트와 연결

---



