'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('https://drive.google.com/file/d/12eKMt7ZKmEv_WMBzvigoIn7UWM83o53s/view?usp=sharing', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
