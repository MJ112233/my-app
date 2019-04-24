import React from 'react';
import logo from './logo.svg';
import './App.css';
import section1img from './images/section1img.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="download">
              <img className='bgimage' src={section1img}/>
              <div className="btn-grp">
                <a href="http://tiantianzhongappxiazai.com/ttzcpys.apk" target="_blank" className="btn-down-android">
                      <i className="icon i-android"></i>
                      <text className="a-txt i-act">Android版下载</text>
                  </a>
                  <a href="https://itunes.apple.com/cn/app/id1439440743?mt=8" target="_blank"
                     className="btn-down-iphone mt20">
                      <i className="icon i-iphone"></i>
                      <text className="a-txt">iPhone版下载</text>
                  </a>
                  <a href="https://vnsr1007.com" target="_blank" className="pc">
                      <text>点击进入官方网站</text>
                  </a>
              </div>
              {/*<span className="qr-code"><img src="./天天中平台_files/ewm.png" width="166" height="166"></span>*/}
          </div>

      </header>
    </div>
  );
}

export default App;
