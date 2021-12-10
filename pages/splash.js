// import { logout, login } from '../actions/session_actions';
// import { openModal, closeModal } from '../actions/modal_actions';
// import { fetchSplashRecordings } from '../actions/recordings_actions';
// import RecordingItem from '../components/recordings/recording_item';
// import { receiveActiveRecording } from '../actions/active_recording_actions';
import Image from 'next/image'
import s from '../styles/Splash.module.css';
import Layout from '../components/layout';

const Splash = () => 
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
         <section className="splash-recordings">
           <h1 className={s.splashRecordingsHeader}>
             Hear what's trending for free in the cult of Stereophonic Cumulonimbus</h1>
           <ul className={s.splashRecordingsList}>
             {/* {recordingItems} */}
           </ul>
         </section>
       </Layout>
    )
;

// const mapStateToProps = ({ session, entities: { users, recordings }, ui }) => {
//     return {
//         recordings: recordings,
//         currentUser: users[session.id],
//         activeRecording: ui.activeRecording
//     };
// };

// const mapDispatchToProps = dispatch => ({
//     logout: () => dispatch(logout()),
//     openModal: modal => dispatch(openModal(modal)),
//     closeModal: () => dispatch(closeModal()),
//     demoLogin: demoUser => dispatch(login(demoUser)),
//     fetchSplashRecordings: () => dispatch(fetchSplashRecordings()),
//     receiveActiveRecording: args => dispatch(receiveActiveRecording(args))
// });

export default Splash;

