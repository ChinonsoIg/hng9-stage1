import './App.css';
import ProfileImage from './assets/images/profile_img.svg';
import ShareBtn from './assets/images/share_btn.svg';
import ShareBtnMobile from './assets/images/share_btn_mobile.svg';
import SlackIcon from './assets/images/slack_icon.svg';
import GithubIcon from './assets/images/github_icon.svg';
import I4GLogo from "./assets/images/I4G_logo.svg";
import ZuriInternship from "./assets/images/zuri_internship.svg";

function App() {
  
  
  return (
    <div className="App">
      <main>
        <header>
          <img src={ProfileImage} alt="Profile" className="profile_img"  />
          <p className="name">Annette Black</p>
          <img src={ShareBtn} alt="Share button desktop" className="share_btn" />
          <img src={ShareBtnMobile} alt="Share button mobile" className="share_btn_mobile" />
        </header>
        <section className="links">
          <a href="https://training.zuri.team/" target="_blank" rel="noreferrer" id="btn__zuri">Zuri Training</a>
          <a href="http://books.zuri.team" target="_blank" rel="noreferrer" id="books">Zuri Team</a>
          <a href="https://background.zuri.team/python-for-beginners?ref_id=Chinonso" target="_blank" rel="noreferrer" id="book__python">Python Book</a>
          <a href="https://background.zuri.team" target="_blank" rel="noreferrer" id="pitch">Pitch</a>
          <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" id="book__design">Design Book</a>
          <div className="social_icons">
            <img src={SlackIcon} alt="Slack icon" className="social_icon" />
            <img src={GithubIcon} alt="Github icon" className="social_icon" />
          </div>
        </section>
      </main>
      <footer>
        <div className="footer_box">
          <img src={ZuriInternship} alt="Zuri internship logo" className="zuri_internship_logo" />
          <p className="light_text">HNG Internship 9 Frontend Task</p>
          <img src={I4GLogo} alt="I4G icon" className="I4G_logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
