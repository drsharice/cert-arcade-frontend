import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import logos
import msLogo from "../assets/microsoft.png";
import azureLogo from "../assets/azure.png";
import googleLogo from "../assets/google.png";
import dbLogo from "../assets/databricks.png";

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  padding: 40px;
  font-family: 'Roboto';
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  max-width: 650px;
  margin-bottom: 30px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const CertCard = styled(motion.div)<{ borderColor: string }>`
  background: ${({ theme }) => theme.cardBg};
  padding: 22px;
  border-radius: 12px;
  border: 2px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
  transition: 0.25s ease;
  position: relative;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    transform: translateY(-3px);
  }
`;

const Logo = styled.img`
  width: 45px;
  height: auto;
  position: absolute;
  top: 12px;
  right: 12px;
  opacity: 0.9;
`;

const CardTitle = styled.h3<{ color: string }>`
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({ color }) => color};
`;

const CardDesc = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.92rem;
  opacity: 0.85;
`;

export default function Home() {
  return (
    <Container>
      <Title>Certification Arcade</Title>

      <Subtitle>
        Choose your certification track to begin. Each track includes multi-level
        interactive arcade challenges designed to strengthen your skills and prepare
        you for real-world exam scenarios.
      </Subtitle>

      <CardGrid>

        {/* Microsoft Fabric (DP-900) */}
        <Link to="/cert/dp900" style={{ textDecoration: "none" }}>
        <CertCard
          borderColor="#0078D4"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >   
          <Logo src={msLogo} alt="Microsoft Fabric Logo" />
          <CardTitle color="#0078D4">Microsoft Fabric DP-900</CardTitle>
          <CardDesc>
            Data Fundamentals for Microsoft Fabric — core concepts, lakehouses,
            analytics, and modern data engineering.
          </CardDesc>
        </CertCard>
        </Link>
        {/* Azure AI Engineer (AI-102) */}
        <Link to="/cert/ai102" style={{ textDecoration: "none" }}>
        <CertCard
          borderColor="#0078D4"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Logo src={azureLogo} alt="Azure AI Logo" />
          <CardTitle color="#0078D4">Azure AI Engineer (AI-102)</CardTitle>
          <CardDesc>
            AI solutions, cognitive services, prompt engineering, computer vision,
            and Azure AI Studio workflows.
          </CardDesc>
        </CertCard>
   </Link>
        {/* Google ML Engineer */}
        <Link to="/cert/gcp-ml" style={{ textDecoration: "none" }}>
        <CertCard
          borderColor="#4285F4"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Logo src={googleLogo} alt="Google Cloud Logo" />
          <CardTitle color="#4285F4">Google ML Engineer</CardTitle>
          <CardDesc>
            TensorFlow models, ML pipelines, Vertex AI, hyperparameter tuning,
            and production ML operations.
          </CardDesc>
        </CertCard>
        </Link>
        {/* Databricks Fundamentals + Architect */}
        <Link to="/cert/databricks" style={{ textDecoration: "none" }}> 
        <CertCard
          borderColor="#FF3621"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Logo src={dbLogo} alt="Databricks Logo" />
          <CardTitle color="#FF3621">Databricks Fundamentals & Architect</CardTitle>
          <CardDesc>
            Lakehouse fundamentals, Spark coding, Delta Lake, Unity Catalog,
            and Databricks architectural patterns.
          </CardDesc>
        </CertCard>
        </Link> 
      </CardGrid>
    </Container>
  );
}
