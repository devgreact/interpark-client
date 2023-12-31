import Header from "./components/Header";
import Recommend from "./components/Recommend";
import Visual from "./components/Visual";

function App() {
  // 안녕하세요. js 자리입니다.
  /* 여러 줄 설명이에요 */
  return (
    <div className="wrap">
      {/* <!-- 상단 영역 --> */}
      <Header />
      {/* <!-- 메인 영역 --> */}
      <div className="main">
        <Visual />
        <Recommend />
      </div>
      {/* <!-- 하단 영역 --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
