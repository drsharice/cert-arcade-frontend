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

// Question banks
import { dp900Questions }from "../arcade/questions/dp900";
import { ai102Questions } from "../arcade/questions/ai102";
import { googleMLQuestions } from "../arcade/questions/google-ml";
import { databricksQuestions } from "../arcade/questions/databricks";

// ----------------------
// Types
// ----------------------
type RawQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: number; // index before shuffling options
  domain: string;
};

type GameQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: number; // index AFTER shuffle
  domain: string;
};

// ----------------------
// Helpers — get question bank by cert
// ----------------------
function getQuestionBank(certId: string): RawQuestion[] {
  switch (certId) {
    case "ai102":
      return ai102Questions;
    case "gcp-ml":
      return googleMLQuestions;
    case "databricks":
      return databricksQuestions;
    case "dp900":
    default:
      return dp900Questions;
  }
}

// Shuffle + pick 15 questions + shuffle options
function buildGameQuestions(bank: RawQuestion[]): GameQuestion[] {
  const bankCopy = [...bank];
  bankCopy.sort(() => Math.random() - 0.5);

  const selected = bankCopy.slice(0, 15);

  return selected.map((q) => {
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
  const effectiveCertId = certId ?? "dp900";
  const cert = certifications[effectiveCertId as keyof typeof certifications];

  // Game state
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [coins, setCoins] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [showSummary, setShowSummary] = useState(false);
  const [correctFlags, setCorrectFlags] = useState<boolean[]>([]);
  const [runId, setRunId] = useState(0);

  // SFX instances
  const correctAudio = useMemo(() => new Audio(correctSfx), []);
  const incorrectAudio = useMemo(() => new Audio(incorrectSfx), []);
  const tickAudio = useMemo(() => new Audio(tickSfx), []);
  const clickAudio = useMemo(() => new Audio(clickSfx), []);

  // Base volumes
  useEffect(() => {
    correctAudio.volume = 0.7;
    incorrectAudio.volume = 0.6;
    tickAudio.volume = 0.4;
    clickAudio.volume = 0.5;
  }, [correctAudio, incorrectAudio, tickAudio, clickAudio]);

  function playSound(audio: HTMLAudioElement) {
    try {
      audio.currentTime = 0;
      audio.play();
    } catch {
      // ignore browser autoplay issues
    }
  }

  // Start / restart a run
  function startNewRun() {
    const rawBank = getQuestionBank(effectiveCertId);
    const gameQuestions = buildGameQuestions(rawBank);

    setQuestions(gameQuestions);
    setCorrectFlags(new Array(gameQuestions.length).fill(false));
    setCurrentQ(0);
    setSelected(null);
    setCoins(0);
    setTimeLeft(30 * 60);
    setShowSummary(false);
    setRunId((prev) => prev + 1);
  }

  // On initial mount
  useEffect(() => {
    startNewRun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer
  useEffect(() => {
    if (runId === 0) return;

    const t = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowSummary(true);
          clearInterval(t);
          return 0;
        }

        const nextVal = prev - 1;

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
    if (selected !== null) return;

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

  // Summary
  if (showSummary) {
    const totalCorrect = correctFlags.filter(Boolean).length;
    const overallPercent = Math.round(
      (totalCorrect / questions.length) * 100
    );

    const domainStats: Record<string, { correct: number; total: number }> = {};

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

  // Question view
  return (
    <Container>
      <Header>
        <div>
          <Title color={cert.primaryColor}>{cert.title} — Level 1</Title>
          <CoinCounter>Coins: {coins}</CoinCounter>
        </div>
        <Timer>⏱ {formattedTime}</Timer>
      </Header>

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
