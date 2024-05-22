import { CERTIFICATIONS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import CertificationDetails from '@/components/data-display/certification-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const CertificationSection = () => {
  return (
    <Container id="certifications" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Certifications" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Certifications I have achieved:
        </Typography>
      </div>

      <div className="flex gap-4 overflow-x-auto py-4 no-scrollbar">
        <div className="flex-shrink-0 flex gap-4">
          {CERTIFICATIONS?.map((certification, index) => (
            <CertificationDetails
              key={index}
              {...certification}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CertificationSection;
