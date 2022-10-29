import './App.css';
import ProfileImage from './assets/images/profile_img.svg';
import ShareBtn from './assets/images/share_btn.svg';
import ShareBtnMobile from './assets/images/share_btn_mobile.svg';

function App() {
  const handleClick = () => {
    console.log("click");
  }
  return (
    <div className="App">
      <main>
        <header>
          <img src={ProfileImage} alt="Profile" className="profile_img"  />
          <p className="name">Annette Black</p>
          <img src={ShareBtn} alt="Share button desktop" className="share_btn" />
          <img src={ShareBtnMobile} alt="Share button mobile" className="share_btn_mobile" />
        </header>
      </main>
    </div>
  );
}

export default App;
