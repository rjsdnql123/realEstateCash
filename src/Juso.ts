import axios from "axios";

function Juso() {
  axios
    .get(
      "https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDIwMTIxMDE3NDg1NzExMDUzNDg=&currentPage=1&countPerPage=10&resultType=json&keyword=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%A7%88%ED%8F%AC%EA%B5%AC"
    )
    .then((res) => {
      console.log(res.data.results.juso[0]);
    });
}

export default Juso;
