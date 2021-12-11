import RecordingItem from 'components/recordingItem';
import Image from 'next/image';
import s from 'styles/splash.module.css';
import Layout from 'components/layout';
import CONFIG from 'config';

const { appHost } = CONFIG;

const Splash = ({ splashRecordings }) =>
// useEffect(() => {
//     props.fetchSplashRecordings();
// }, [])

// CANT REMEMBER WHAT THE POINT OF THIS IS 2/6/20
// useEffect(() => {
//     if (prevProps.currentUser !== props.currentUser && !props.currentUser) {
//         props.fetchSplashRecordings();
//     }
// })

// const handleDemoLogin = () => {
//     props.demoLogin({ username: "Tyler Bisson", password: 'password' })
//         .then(data => {
//             props.history.push(`/discover`)
//         });
// }

// let recordingItems = Object.values(props.recordings);
// if (Object.keys(props.recordings).length < 1) {
//     recordingItems = null;
// } else {
//     let recordings = Object.values(props.recordings);

//     recordingItems = recordings.map(recording =>
//         <RecordingItem recording={recording} key={recording.id}
//             receiveActiveRecording={props.receiveActiveRecording}
//             activeRecording={props.activeRecording} />)
// }

(
  <Layout>
    <section className={s.greetingHero} style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <nav className={s.loginSignup}>
        <div className="nav-buttonbox-left-splash">
          <Image width='100%' height='100%' alt="stereophonic cumulonimbus logo" className={s.logo} src="/images/cloud_logo.png" />
          <h1>STEREOPHONIC CUMULONIMBUS</h1>
        </div>
        <div className={s.navButtonboxRight}>
          <button className={s.navLogin} type="button">Sign in</button>
          &nbsp;&nbsp;
          <button className={s.navSignup} type="button">Create account</button>
        </div>
      </nav>
      <div className={s.heroSlogan}>
        <h1>What's next in music is first on Stereophonic Cumulonimbus</h1>
        <button className={s.demoButton} type="button">Login as Demo User</button>
      </div>
    </section>
    <section className={s.splashRecordings}>
      <h1 className={s.splashRecordingsHeader}>
        Hear what's trending for free in the cult of Stereophonic Cumulonimbus</h1>
      <ul className={s.splashRecordingsList}>
        {splashRecordings.map((r) => <RecordingItem key={r.id} recording={r} />)}
      </ul>
    </section>
  </Layout>
)
  ;

export default Splash;

export async function getStaticProps() {
  const res = await fetch(`${appHost}/api/recordings`);
  const splashRecordings = await res.json();
  return {
    props: { splashRecordings }
  };
}