import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { certifications } from "../config/certData";

// Sound effects
import correctSfx from "../assets/correct.wav";
import incorrectSfx from "../assets/incorrect.wav";
import tickSfx from "../assets/tick.wav";
import clickSfx from "../assets/click.wav";

// ----------------------
// Question Bank (36 total)
// We'll shuffle and pick 15 on mount,
// and also shuffle OPTIONS for each question.
// ----------------------
const questionBank = [
  {
    id: 1,
    question: "What is a Lakehouse used for?",
    options: [
      "Storing structured and unstructured data together",
      "Running only SQL queries",
      "Hosting website front-ends",
      "Storing only Power BI reports",
    ],
    answer: 0,
    domain: "Lakehouse & Architecture",
  },
  {
    id: 2,
    question: "Which Azure service provides AI capabilities?",
    options: [
      "Azure Cognitive Services",
      "Azure App Service",
      "Azure Functions",
      "Azure DevOps",
    ],
    answer: 0,
    domain: "AI & Cognitive Services",
  },
  {
    id: 3,
    question: "What is OneLake in Fabric?",
    options: [
      "A single unified data lake for all Fabric workloads",
      "A SQL-only analytics database",
      "A virtual machine service",
      "A tool for building websites",
    ],
    answer: 0,
    domain: "OneLake & Storage",
  },
  {
    id: 4,
    question: "What format do Fabric Lakehouse tables use?",
    options: ["Delta Lake", "CSV", "SQL Server MDF", "MongoDB BSON"],
    answer: 0,
    domain: "Delta Lake & Tables",
  },
  {
    id: 5,
    question: "What is a Semantic Model used for in Fabric?",
    options: [
      "Defining business-friendly data structures",
      "Training machine learning models",
      "Hosting user security roles",
      "Provisioning Azure subscriptions",
    ],
    answer: 0,
    domain: "Power BI & Semantic Models",
  },
  {
    id: 6,
    question: "Which Fabric engine provides Apache Spark compute?",
    options: ["Data Engineering", "Power BI", "SQL Database", "Azure DevOps"],
    answer: 0,
    domain: "Fabric Platform & Compute",
  },
  {
    id: 7,
    question: "What is Delta Lake?",
    options: [
      "A storage layer providing ACID transactions",
      "A streaming-only engine",
      "An OLTP database",
      "A Power BI visualization library",
    ],
    answer: 0,
    domain: "Delta Lake & Tables",
  },
  {
    id: 8,
    question: "Which Fabric component is used for ETL pipelines?",
    options: ["Data Factory", "Power BI Desktop", "Azure VM", "Purview"],
    answer: 0,
    domain: "Pipelines & Dataflows",
  },
  {
    id: 9,
    question: "Fabric supports which analytics types?",
    options: [
      "Batch, real-time, and interactive",
      "Batch only",
      "Streaming only",
      "Interactive only",
    ],
    answer: 0,
    domain: "Lakehouse & Architecture",
  },
  {
    id: 10,
    question: "What does a Warehouse in Fabric optimize for?",
    options: [
      "Large-scale SQL analytics",
      "Unstructured data storage only",
      "ML model training",
      "Hosting websites",
    ],
    answer: 0,
    domain: "Fabric Platform & Compute",
  },
  {
    id: 11,
    question: "What is the main role of Dataflows in Fabric?",
    options: [
      "Low-code data transformation",
      "Security policy assignment",
      "Power BI report sharing",
      "Managing compute clusters",
    ],
    answer: 0,
    domain: "Pipelines & Dataflows",
  },
  {
    id: 12,
    question: "What is the purpose of OneLake Shortcuts?",
    options: [
      "Virtualize data across clouds without copying it",
      "Encrypt data for ML",
      "Replace SQL databases",
      "Create web APIs automatically",
    ],
    answer: 0,
    domain: "OneLake & Storage",
  },
  {
    id: 13,
    question: "Notebooks in Fabric commonly use which language?",
    options: ["PySpark", "Java", "PHP", "COBOL"],
    answer: 0,
    domain: "Fabric Platform & Compute",
  },
  {
    id: 14,
    question: "Which format does Delta Lake use for transaction logs?",
    options: ["JSON", "CSV", "YAML", "Binary blob"],
    answer: 0,
    domain: "Delta Lake & Tables",
  },
  {
    id: 15,
    question: "Which Fabric workload is used to build dashboards?",
    options: ["Power BI", "GitHub", "Synapse Real-Time", "Azure Storage"],
    answer: 0,
    domain: "Power BI & Semantic Models",
  },
  {
    id: 16,
    question: "Fabric unifies which components?",
    options: [
      "Data Engineering, Warehousing, Real-Time, Power BI",
      "Only Data Warehousing",
      "Only Machine Learning",
      "Only Reporting Services",
    ],
    answer: 0,
    domain: "Lakehouse & Architecture",
  },
  {
    id: 17,
    question: "Which compute model does Fabric primarily use?",
    options: [
      "Serverless SaaS compute",
      "On-prem VM clusters",
      "Dedicated SQL servers only",
      "Manual Kubernetes containers",
    ],
    answer: 0,
    domain: "Fabric Platform & Compute",
  },
  {
    id: 18,
    question: "What type of data can a Lakehouse store?",
    options: [
      "Structured, semi-structured, and unstructured",
      "Only CSV files",
      "Only SQL tables",
      "Only JSON",
    ],
    answer: 0,
    domain: "Lakehouse & Architecture",
  },
  {
    id: 19,
    question: "Which tool do you use to explore OneLake?",
    options: ["OneLake Explorer", "Device Manager", "Azure DevOps", "Teams"],
    answer: 0,
    domain: "OneLake & Storage",
  },
  {
    id: 20,
    question: "Delta Lake provides:",
    options: [
      "ACID transactions",
      "No indexing",
      "File locking removal",
      "Virtual machines",
    ],
    answer: 0,
    domain: "Delta Lake & Tables",
  },
  {
    id: 21,
    question: "Which service powers low-latency real-time work in Fabric?",
    options: [
      "Synapse Real-Time",
      "Purview",
      "Azure Boards",
      "Windows Compute Emulator",
    ],
    answer: 0,
    domain: "Real-Time & Streaming",
  },
  {
    id: 22,
    question: "Fabric uses which storage system?",
    options: ["OneLake", "Azure Files", "MySQL", "S3 only"],
    answer: 0,
    domain: "OneLake & Storage",
  },
  {
    id: 23,
    question: "Which item is part of the Fabric experience?",
    options: [
      "Workspaces",
      "Storage accounts",
      "Virtual networks",
      "Docker containers",
    ],
    answer: 0,
    domain: "Power BI & Semantic Models",
  },
  {
    id: 24,
    question: "What is the benefit of the Fabric SaaS model?",
    options: [
      "Unified experience across all analytics workloads",
      "Manual compute provisioning",
      "Server patching",
      "Requires local installation",
    ],
    answer: 0,
    domain: "Fabric Platform & Compute",
  },
  {
    id: 25,
    question: "What is a Warehouse SQL endpoint used for?",
    options: [
      "Running SQL queries",
      "Hosting ML pipelines",
      "Delete OneLake storage",
      "Deploy web applications",
    ],
    answer: 0,
    domain: "Fabric Platform & Compute",
  },
  {
    id: 26,
    question: "Which file format does Delta Lake use for tables?",
    options: ["Parquet", "XML", "TXT", "YAML"],
    answer: 0,
    domain: "Delta Lake & Tables",
  },
  {
    id: 27,
    question: "Which service does NOT belong to Fabric?",
    options: ["GitHub Repos", "Power BI", "OneLake", "Data Factory"],
    answer: 0,
    domain: "Fabric Platform & Compute",
  },
  {
    id: 28,
    question: "Which Fabric item stores machine learning models?",
    options: ["ML experiments", "SQL endpoints", "Dashboards", "DevOps repos"],
    answer: 0,
    domain: "Fabric Platform & Compute",
  },
  {
    id: 29,
    question: "What is the default storage technology behind Fabric?",
    options: ["ADLS Gen2", "Blob hot tier only", "Cosmos DB", "MySQL"],
    answer: 0,
    domain: "OneLake & Storage",
  },
  {
    id: 30,
    question: "Fabric Warehouse is built on which underlying technology?",
    options: [
      "SQL-based distributed compute",
      "Local Excel compute engine",
      "Spark streaming cluster",
      "VM-based Hadoop nodes",
    ],
    answer: 0,
    domain: "Fabric Platform & Compute",
  },
  {
    id: 31,
    question: "What does Power BI use to create metrics?",
    options: ["Semantic Models", "Notebooks", "Dataflows only", "Spark Jobs"],
    answer: 0,
    domain: "Power BI & Semantic Models",
  },
  {
    id: 32,
    question: "Which feature allows you to schedule data refresh?",
    options: ["Data Pipelines", "Warehouse Views", "Notebooks", "Admin Center"],
    answer: 0,
    domain: "Pipelines & Dataflows",
  },
  {
    id: 33,
    question: "Which item is version-controlled automatically?",
    options: ["Delta Lake tables", "Power BI Reports", "VM Images", "CSV files"],
    answer: 0,
    domain: "Delta Lake & Tables",
  },
  {
    id: 34,
    question: "What does Fabric’s Real-Time Hub collect?",
    options: [
      "Streaming event data",
      "Static SQL tables",
      "Email messages",
      "Virtual machine logs",
    ],
    answer: 0,
    domain: "Real-Time & Streaming",
  },
  {
    id: 35,
    question: "Which component uses DAX?",
    options: ["Power BI", "Spark", "Delta Lake", "Notebooks"],
    answer: 0,
    domain: "Power BI & Semantic Models",
  },
  {
    id: 36,
    question: "Which item supports shortcuts?",
    options: ["OneLake", "Power BI Desktop", "Excel", "Azure DevOps"],
    answer: 0,
    domain: "OneLake & Storage",
  },
];

// ----------------------
// Types
// ----------------------
type RawQuestion = (typeof questionBank)[number];

type GameQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: number; // index AFTER shuffle
  domain: string;
};

// ----------------------
// Get 15 random questions and shuffle options
// ----------------------
function getRandomQuestions(): GameQuestion[] {
  const bankCopy = [...questionBank];

  // Shuffle the question bank
  bankCopy.sort(() => Math.random() - 0.5);

  // Take first 15
  const selected = bankCopy.slice(0, 15);

  // For each question, shuffle options and compute the new correct index
  return selected.map((q: RawQuestion) => {
    const indexedOptions = q.options.map((opt, idx) => ({
      opt,
      originalIndex: idx,
    }));
    indexedOptions.sort(() => Math.random() - 0.5);

    const newOptions = indexedOptions.map((o) => o.opt);
    const newAnswerIndex = indexedOptions.findIndex(
      (o) => o.originalIndex === q.answer
    );

    return {
      id: q.id,
      question: q.question,
      options: newOptions,
      answer: newAnswerIndex,
      domain: q.domain,
    };
  });
}

// ----------------------
// Styled Components
// ----------------------

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;
  font-family: "Roboto";
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Title = styled.h1<{ color: string }>`
  font-size: 2rem;
  color: ${({ color }) => color};
`;

const Timer = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const CoinCounter = styled.div`
  font-size: 1.2rem;
  margin-top: 5px;
`;

// Progress Bar
const ProgressContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const ProgressLabel = styled.div`
  font-size: 1rem;
  margin-bottom: 6px;
  font-weight: 500;
`;

const ProgressBarOuter = styled.div`
  width: 100%;
  height: 12px;
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

const ProgressBarInner = styled(motion.div)<{ color: string }>`
  height: 100%;
  background: ${({ color }) => color};
  border-radius: 8px;
`;

const Card = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  border: 1px solid #d0d0d0;
`;

const QuestionText = styled.h2`
  margin-bottom: 20px;
  font-size: 1.3rem;
`;

const OptionButton = styled(motion.button)<{
  isCorrect?: boolean;
  isWrong?: boolean;
}>`
  width: 100%;
  text-align: left;
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid
    ${({ isCorrect, isWrong }) =>
      isCorrect ? "#0E9F6E" : isWrong ? "#D64550" : "#d0d0d0"};
  background: ${({ isCorrect, isWrong }) =>
    isCorrect ? "#E7F8F0" : isWrong ? "#FCE9E9" : "#ffffff"};
  transition: 0.2s ease-in-out;
  font-size: 1rem;

  &:hover {
    border-color: ${({ isCorrect, isWrong }) =>
      isCorrect ? "#0E9F6E" : isWrong ? "#D64550" : "#0078d4"};
  }
`;

const NextButton = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 1rem;
  background: #0078d4;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #006bb3;
  }
`;

const SummaryCard = styled.div`
  padding: 40px;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 12px;
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
`;

const SummaryTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.8rem;
`;

const OverallScore = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 10px;
`;

const SummaryText = styled.p`
  font-size: 1.1rem;
  margin-top: 4px;
`;

const DomainList = styled.div`
  margin-top: 24px;
  text-align: left;
`;

const DomainRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 0.96rem;
`;

const DomainName = styled.span``;

const DomainScore = styled.span`
  font-weight: 600;
`;

const SummaryButtonsRow = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

const SummaryButtonPrimary = styled.button`
  padding: 10px 22px;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #0078d4;
  color: #ffffff;

  &:hover {
    background: #006bb3;
  }
`;

const SummaryButtonSecondary = styled.button`
  padding: 10px 22px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #d0d0d0;
  cursor: pointer;
  background: #ffffff;
  color: #1b1b1b;

  &:hover {
    background: #f3f3f3;
  }
`;

// ----------------------
// Component
// ----------------------

export default function Level1() {
  const { certId } = useParams();
  const navigate = useNavigate();
  const cert = certifications[certId as keyof typeof certifications];

  // Game state
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [coins, setCoins] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [showSummary, setShowSummary] = useState(false);
  const [correctFlags, setCorrectFlags] = useState<boolean[]>([]);
  const [runId, setRunId] = useState(0);

  // SFX instances (memoized so we don't recreate each render)
  const correctAudio = useMemo(() => new Audio(correctSfx), []);
  const incorrectAudio = useMemo(() => new Audio(incorrectSfx), []);
  const tickAudio = useMemo(() => new Audio(tickSfx), []);
  const clickAudio = useMemo(() => new Audio(clickSfx), []);

  // Base volumes
  useEffect(() => {
    correctAudio.volume = 0.7; // coin ding
    incorrectAudio.volume = 0.6; // low thud
    tickAudio.volume = 0.4; // gentle ticking
    clickAudio.volume = 0.5; // soft UI click
  }, [correctAudio, incorrectAudio, tickAudio, clickAudio]);

  // Helper to safely play sound
  function playSound(audio: HTMLAudioElement) {
    try {
      audio.currentTime = 0;
      audio.play();
    } catch {
      // ignore play errors
    }
  }

  // Start / restart a run
  function startNewRun() {
    const randomQs = getRandomQuestions();
    setQuestions(randomQs);
    setCorrectFlags(new Array(randomQs.length).fill(false));
    setCurrentQ(0);
    setSelected(null);
    setCoins(0);
    setTimeLeft(30 * 60);
    setShowSummary(false);
    setRunId((prev) => prev + 1);
  }

  // On initial mount, start first run
  useEffect(() => {
    startNewRun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer countdown with ticking in last 60 seconds
  useEffect(() => {
    if (runId === 0) return; // don't start timer until run is initialized

    const t = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowSummary(true);
          clearInterval(t);
          return 0;
        }

        const nextVal = prev - 1;

        // gentle ticking in last 60 seconds (every 5 seconds)
        if (nextVal <= 60 && nextVal % 5 === 0) {
          playSound(tickAudio);
        }

        return nextVal;
      });
    }, 1000);

    return () => clearInterval(t);
  }, [tickAudio, runId]);

  if (!cert) return <p>Certification not found.</p>;
  if (questions.length === 0) return <p>Loading...</p>;

  const q = questions[currentQ];

  const formattedTime = `${Math.floor(timeLeft / 60)}:${String(
    timeLeft % 60
  ).padStart(2, "0")}`;

  // Answer selection
  function handleSelect(optionIndex: number) {
    if (selected !== null) return; // prevent changing answer

    setSelected(optionIndex);

    setCorrectFlags((prev) => {
      const copy = [...prev];
      copy[currentQ] = optionIndex === q.answer;
      return copy;
    });

    if (optionIndex === q.answer) {
      setCoins((c) => c + 10);
      playSound(correctAudio);
    } else {
      playSound(incorrectAudio);
    }
  }

  // Next question
  function nextQuestion() {
    playSound(clickAudio);

    if (currentQ + 1 === questions.length) {
      setShowSummary(true);
    } else {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
    }
  }

  // Summary helpers
  if (showSummary) {
    const totalCorrect = correctFlags.filter(Boolean).length;
    const overallPercent = Math.round(
      (totalCorrect / questions.length) * 100
    );

    const domainStats: Record<
      string,
      { correct: number; total: number }
    > = {};

    questions.forEach((question, idx) => {
      const d = question.domain;
      if (!domainStats[d]) {
        domainStats[d] = { correct: 0, total: 0 };
      }
      domainStats[d].total += 1;
      if (correctFlags[idx]) {
        domainStats[d].correct += 1;
      }
    });

    const handleRetry = () => {
      startNewRun();
    };

    const handleBack = () => {
      if (certId) {
        navigate(`/cert/${certId}`);
      } else {
        navigate("/");
      }
    };

    return (
      <Container>
        <SummaryCard>
          <SummaryTitle>Level 1 Summary</SummaryTitle>
          <OverallScore>Overall Score: {overallPercent}%</OverallScore>
          <SummaryText>You earned {coins} coins.</SummaryText>
          <SummaryText>
            {coins >= 120
              ? "🎉 Level 2 Unlocked!"
              : "💡 Earn 120 coins to unlock Level 2."}
          </SummaryText>

          <DomainList>
            <h3>Domain Breakdown</h3>
            {Object.entries(domainStats).map(([domain, stats]) => {
              const percent = Math.round(
                (stats.correct / stats.total) * 100
              );
              return (
                <DomainRow key={domain}>
                  <DomainName>{domain}</DomainName>
                  <DomainScore>
                    {stats.correct}/{stats.total} ({percent}%)
                  </DomainScore>
                </DomainRow>
              );
            })}
          </DomainList>

          <SummaryButtonsRow>
            <SummaryButtonPrimary onClick={handleRetry}>
              Retry Level 1
            </SummaryButtonPrimary>
            <SummaryButtonSecondary onClick={handleBack}>
              Back to Certification
            </SummaryButtonSecondary>
          </SummaryButtonsRow>
        </SummaryCard>
      </Container>
    );
  }

  // Normal question view
  return (
    <Container>
      <Header>
        <div>
          <Title color={cert.primaryColor}>{cert.title} — Level 1</Title>
          <CoinCounter>Coins: {coins}</CoinCounter>
        </div>
        <Timer>⏱ {formattedTime}</Timer>
      </Header>

      {/* Progress Bar */}
      <ProgressContainer>
        <ProgressLabel>
          Question {currentQ + 1} of {questions.length}
        </ProgressLabel>

        <ProgressBarOuter>
          <ProgressBarInner
            color={cert.primaryColor}
            initial={{ width: 0 }}
            animate={{
              width: `${((currentQ + 1) / questions.length) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
          />
        </ProgressBarOuter>
      </ProgressContainer>

      <Card
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <QuestionText>{q.question}</QuestionText>

        {q.options.map((opt, index) => (
          <OptionButton
            key={index}
            onClick={() => handleSelect(index)}
            isCorrect={selected !== null && index === q.answer}
            isWrong={selected === index && index !== q.answer}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
          >
            {opt}
          </OptionButton>
        ))}

        {selected !== null && (
          <NextButton onClick={nextQuestion}>Next Question</NextButton>
        )}
      </Card>
    </Container>
  );
}
