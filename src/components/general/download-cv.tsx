'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('https://drive.google.com/file/d/1p9bjrO05Vnm-bN9mP-NXQhF8w481Yrm_/view?usp=sharing', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
