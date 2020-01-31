import React, { Component } from 'react';
import './App.css';
import StackGrid, { transitions } from "react-stack-grid";
import sizeMe from 'react-sizeme';

const { flip } = transitions;

class App extends Component {
    
  render() {


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">#lushkorea</h1>
        </header>
        <StackGrid
         columnWidth={305}
         gutterWidth="20"
         appear={flip.appear}
         appeared={flip.appeared}
         enter={flip.enter}
         entered={flip.entered}
         leaved={flip.leaved}
         duration={1000}
        >
        <div key="key1">
          <div className="sns_header">
            <span><img src="https://jungma.github.io/img/logo_insta.png" alt="" /></span>
            <span className="time">5시간전</span>
          </div>
          <img src="https://jungma.github.io/img/img_insta.jpg" alt="" />
          <div className="sns_profile">
            <span><img src="https://jungma.github.io/img/profile_insta.png" alt="" /></span>
            <span>러쉬코리아</span>
          </div>
          <div className="sns_text">
          포장 쓰레기를 재사용해 만든 #네이키드지구본 !
          4월 22일, 네이키드데이에서 만나요! 
          자세히 보기 : https://goo.gl/bxjl3V
          #고네이키드 #포장을벗자 #네이키드워리어2기 #러쉬 #러쉬코리아 #GoNaked #NakedDay #LUSH #LUSHKOREAlushkorea나의 뮤즈, 온전한 사랑. 엄마 고마워. #마더스에디션 으로 마음을 전하세요. 
          _
          #러쉬에디션 #러쉬마더스에디션 #LushMothersEdition #LUSH #LUSHKOREA
          minyeongisminyeong스크러비 추천합니당
          </div>
        </div>
        <div key="key2">
        <div className="sns_header">
        <span><img src="https://jungma.github.io/img/logo_insta.png" alt="" /></span>
        <span className="time">5시간전</span>
      </div>
      <img src="https://jungma.github.io/img/img_insta.jpg" alt="" />
      <div className="sns_profile">
        <span><img src="https://jungma.github.io/img/profile_insta.png" alt="" /></span>
        <span>러쉬코리아</span>
      </div>
      <div className="sns_text">
      포장 쓰레기를 재사용해 만든 #네이키드지구본 !
LUSH #LUSHKOREAlushkorea나의 뮤즈, 온전한 사랑. 엄마 고마워. #마더스에디션 으로 마음을 전하세요. 
      _
      #러쉬에디션 #러쉬마더스에디션 #LushMothersEdition #LUSH #LUSHKOREA
      minyeongisminyeong스크러비 추천합니당
      </div>
        </div>
        <div key="key3">
        <div className="sns_header">
        <span><img src="https://jungma.github.io/img/logo_insta.png" alt="" /></span>
        <span className="time">5시간전</span>
      </div>
      <img src="https://jungma.github.io/img/img_insta.jpg" alt="" />
      <div className="sns_profile">
        <span><img src="https://jungma.github.io/img/profile_insta.png" alt="" /></span>
        <span>러쉬코리아</span>
      </div>
      <div className="sns_text">
      포장 쓰레기를 재사용해 만든 #네이키드지구본 !
      4월 22일, 네이키드데이에서 만나요! 
      자세히 보기 : https://goo.gl/bxjl3V
      #고네이키드 #포장을벗자 #네이키드워리어2기 #러쉬 #러쉬코리아 #GoNaked #NakedDay #LUSH #LUSHKOREAlushkorea나의 뮤즈, 온전한 사랑. 엄마 고마워. #마더스에디션 으로 마음을 전하세요. 
      _
      #러쉬에디션 #러쉬마더스에디션 #LushMothersEdition #LUSH #LUSHKOREA
      minyeongisminyeong스크러비 추천합니당
      </div>
      
        </div>
        <div key="key4">
        <div className="sns_header">
        <span><img src="https://jungma.github.io/img/logo_insta.png" alt="" /></span>
        <span className="time">5시간전</span>
      </div>
      <img src="https://jungma.github.io/img/img_insta.jpg" alt="" />
      <div className="sns_profile">
        <span><img src="https://jungma.github.io/img/profile_insta.png" alt="" /></span>
        <span>러쉬코리아</span>
      </div>
      <div className="sns_text">
      포장 쓰레기를 재사용해 만든 #네이키드지구본 !

      </div>       
        </div>
        <div key="key5">
        <div className="sns_header">
        <span><img src="https://jungma.github.io/img/logo_insta.png" alt="" /></span>
        <span className="time">5시간전</span>
      </div>
      <img src="https://jungma.github.io/img/img_insta.jpg" alt="" />
      <div className="sns_profile">
        <span><img src="https://jungma.github.io/img/profile_insta.png" alt="" /></span>
        <span>러쉬코리아</span>
      </div>
      <div className="sns_text">
      포장 쓰레기를 재사용해 만든 #네이키드지구본 !

      #러쉬에디션 #러쉬마더스에디션 #LushMothersEdition #LUSH #LUSHKOREA
      minyeongisminyeong스크러비 추천합니당
      </div>     
        </div>
      </StackGrid>
      </div>
    );
  }
}

export default App;

