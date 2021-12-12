/** @jsxImportSource theme-ui */
import Image from 'next/image';
import CONFIG from 'config';

const { staticAssets: { artBaseUrl, recordingBaseUrl } } = CONFIG;

const RecordingItem = ({ recording }) => (
  < Image
    width='300' height='300' layout='responsive'
    alt={recording.title}
    src={`${artBaseUrl + recording.art}`}
  />
);

export default RecordingItem;

