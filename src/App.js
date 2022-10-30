import './App.css';
import Passport from './assets/images/passport.jpeg';
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
          <img src={Passport} alt="Profile" id="profile__img" />
          <p id="twitter">Chinonso_ig</p>
          <p id="slack">ojononso</p>
          <img src={ShareBtn} alt="Share button desktop" className="share_btn" />
          <img src={ShareBtnMobile} alt="Share button mobile" className="share_btn_mobile" />
        </header>
        <section className="links">
          <a href="https://training.zuri.team/" target="_blank" rel="noreferrer" id="btn__zuri">
            Zuri Training
            <sub>Join the Zuri team.</sub>
          </a>
          <a href="http://books.zuri.team" target="_blank" rel="noreferrer" id="books">
            Zuri Team
            <sub>Find books about design and coding.</sub>
          </a>
          <a href="https://background.zuri.team/python-for-beginners?ref_id=Chinonso" target="_blank" rel="noreferrer" id="book__python">
            Python Book
            <sub>Best books on Python from beginners to expert.</sub>
          </a>
          <a href="https://background.zuri.team" target="_blank" rel="noreferrer" id="pitch">
            Background checks on Coders
          <sub>We help you verify coders.</sub>
          </a>
          <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" id="book__design">
            Design Book
            <sub>To understand design rules better, get our book for free.</sub>
          </a>
          <div className="social_icons">
            <a href="https://hng9.slack.com" className="exclude_link" target="_blank" rel="noreferrer">
              <img src={SlackIcon} alt="Slack icon" className="social_icon" />
            </a>
            <a href="https://github.com/ChinonsoIg" className="exclude_link" target="_blank" rel="noreferrer">
              <img src={GithubIcon} alt="Github icon" className="social_icon" />
            </a>
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
