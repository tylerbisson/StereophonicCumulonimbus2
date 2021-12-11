import React from 'react';
import Image from 'next/image';
import CONFIG from 'config';

const { staticAssets: { artBaseUrl, recordingBaseUrl } } = CONFIG;

const RecordingItem = ({ recording }) => (
  < Image width='100%' height='100%' alt={recording.title} src={`${artBaseUrl + recording.art}`} />
);

export default RecordingItem;

