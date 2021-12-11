const CONFIG = {
  appHost: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'TODO: Add production appHost',
  staticAssets: {
    artBaseUrl: 'https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/',
    recordingBaseUrl: 'https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/'
  }
};

export default CONFIG;