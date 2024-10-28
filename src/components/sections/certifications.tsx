import { CERTIFICATIONS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import CertificationDetails from '@/components/data-display/certification-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Image from 'next/image';
import { useState } from 'react';

const CertificationsList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < CERTIFICATIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Container>
      <Typography variant="h2" className="text-center mb-6">
        Certifications
      </Typography>
      <div className="relative">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleScroll('left')}
            disabled={currentIndex === 0}
            className="p-2 text-xl"
          >
            ←
          </button>
          <div className="w-full flex items-center overflow-hidden">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={cert.certification}
                className={`mx-4 transition-transform duration-300 ${
                  index === currentIndex
                    ? 'scale-105 opacity-100'
                    : 'scale-95 opacity-50'
                }`}
              >
                <CertificationDetails
                  organisationName={cert.organisationName}
                  organisationAvatar={cert.organisationAvatar}
                  certification={cert.certification}
                  issueDate={cert.issueDate}
                  url={cert.url}
                  certificatePic={cert.certificatePic}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll('right')}
            disabled={currentIndex === CERTIFICATIONS.length - 1}
            className="p-2 text-xl"
          >
            →
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CertificationsList;
