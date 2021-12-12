/** @jsxImportSource theme-ui */
import RecordingItem from 'components/recordingItem';
import Image from 'next/image';
import Layout from 'components/layout';
import CONFIG from 'config';

const { appHost } = CONFIG;

const Splash = ({ splashRecordings }) => (
  <Layout>
    <section sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: ['12rem', '20rem', '40rem'],
      color: 'white',
      backgroundImage: "url('/images/hero.jpg')",
      backgroundSize: '100%',
      borderTop: 'solid',
      borderColor: 'scOrange',
      borderWidth: '4px'
    }}>
      <nav>
        <div sx={{
          display: 'flex',
          alignItems: 'center',
          fontStyle: 'italic',
          letterSpacing: '2px',
          marginLeft: '15px',
        }}>
          <Image width={92} height={50} alt="stereophonic cumulonimbus logo" src="/images/cloud_logo.png" />
          <span sx={{ textTransform: 'uppercase', fontSize: [16, 20], marginLeft: ['.25rem', '.5rem'] }}>stereophonic cumulonimbus</span>
        </div>
      </nav>
      <div sx={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
      }}>
        <div sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: [16, 30, 45],
          width: '80%',
        }}>
          <h1>What&apos;s next in music is first on Stereophonic Cumulonimbus</h1>
        </div>
      </div>
    </section>
    <section sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 sx={{
        textAlign: 'center',
        fontSize: ['1rem', '2rem'],
        marginBottom: '10px',
        paddingTop: '10px'
      }}>
        Hear what&apos;s trending for free in the cult of Stereophonic Cumulonimbus</h1>
      <ul sx={{
        display: 'grid',
        padding: '0 1rem 0 1rem',
        gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)'],
        gap: '1rem',
        margin: '1rem',
        width: '100%',
      }}>
        {splashRecordings.slice(0, 12).map((r) => <RecordingItem key={r.id} recording={r} />)}
      </ul>
    </section>
  </Layout >
);

export default Splash;

export async function getStaticProps() {
  const res = await fetch(`${appHost}/api/recordings`);
  const splashRecordings = await res.json();
  return {
    props: { splashRecordings }
  };
}