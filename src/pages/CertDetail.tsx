import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { certifications } from "../config/certData";

// ----------------------
// Styled Components
// ----------------------

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;
  font-family: "Roboto";
`;

const TopNav = styled.div`
  margin-bottom: 25px;
`;

const HomeButton = styled.button`
  padding: 8px 18px;
  background: #0078d4;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 0.95rem;

  &:hover {
    background: #006bb3;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Logo = styled.img`
  width: 55px;
  height: auto;
`;

const Title = styled.h1<{ color: string }>`
  font-size: 2.2rem;
  color: ${({ color }) => color};
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 15px 0 30px 0;
`;

const LevelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const LevelCard = styled(motion.div)<{ color: string }>`
  background: #ffffff;
  border: 2px solid ${({ color }) => color};
  padding: 20px;
  border-radius: 12px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  }
`;

const LevelTitle = styled.h3<{ color: string }>`
  font-size: 1.25rem;
  color: ${({ color }) => color};
  margin-bottom: 8px;
`;

const LockText = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;

// ----------------------
// Component
// ----------------------

export default function CertDetail() {
  const { certId } = useParams();
  const navigate = useNavigate();

  const cert = certifications[certId as keyof typeof certifications];

  if (!cert) return <p>Certification not found.</p>;

  return (
    <Container>
      {/* Top Navigation Row */}
      <TopNav>
        <HomeButton onClick={() => navigate("/")}>Home</HomeButton>
      </TopNav>

      <TitleRow>
        <Logo src={cert.logo} alt={cert.title} />
        <Title color={cert.primaryColor}>{cert.title}</Title>
      </TitleRow>

      <Description>{cert.description}</Description>

      <LevelGrid>
        <Link to={`/cert/${certId}/level1`} style={{ textDecoration: "none" }}>
          <LevelCard
            color={cert.primaryColor}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <LevelTitle color={cert.primaryColor}>Level 1: Fundamentals</LevelTitle>
            <p>Multiple-choice, 30-minute timer, gain coins to unlock Level 2.</p>
          </LevelCard>
        </Link>

        <LevelCard color={cert.primaryColor}>
          <LevelTitle color={cert.primaryColor}>Level 2: Applied Skills</LevelTitle>
          <LockText>Locked — earn enough coins in Level 1</LockText>
        </LevelCard>

        <LevelCard color={cert.primaryColor}>
          <LevelTitle color={cert.primaryColor}>Level 3: Coding & Pipelines</LevelTitle>
          <LockText>Locked — complete Level 2</LockText>
        </LevelCard>
      </LevelGrid>
    </Container>
  );
}
