export const googleMLQuestions = [
  // -----------------------------------------
  // DOMAIN 1 — ML PROBLEM FRAMING
  // -----------------------------------------
  {
    id: 1,
    question: "What is the first step in framing an ML problem?",
    options: [
      "Define the business objective",
      "Train a baseline model",
      "Collect evaluation metrics",
      "Deploy the model to production",
    ],
    answer: 0,
    domain: "ML Problem Framing",
  },
  {
    id: 2,
    question: "Which problem type predicts a continuous numerical value?",
    options: ["Regression", "Classification", "Clustering", "Ranking"],
    answer: 0,
    domain: "ML Problem Framing",
  },
  {
    id: 3,
    question: "Which metric is best for a binary classification problem?",
    options: ["AUC", "MAE", "RMSE", "Silhouette score"],
    answer: 0,
    domain: "ML Problem Framing",
  },
  {
    id: 4,
    question: "What type of problem is customer segmentation?",
    options: ["Unsupervised learning", "Regression", "Reinforcement learning", "Forecasting"],
    answer: 0,
    domain: "ML Problem Framing",
  },
  {
    id: 5,
    question: "Which ML task aims to rank items for relevance?",
    options: ["Ranking", "Regression", "Imputation", "Outlier detection"],
    answer: 0,
    domain: "ML Problem Framing",
  },
  {
    id: 6,
    question: "What should be identified before choosing model architecture?",
    options: [
      "Key business constraints and success metrics",
      "GPU availability",
      "File naming conventions",
      "Notebook kernel version",
    ],
    answer: 0,
    domain: "ML Problem Framing",
  },

  // -----------------------------------------
  // DOMAIN 2 — DATA PREPARATION & PROCESSING
  // -----------------------------------------
  {
    id: 7,
    question: "What is the purpose of train/validation/test splits?",
    options: [
      "To prevent overfitting and enable unbiased evaluation",
      "To reduce model size",
      "To ensure deterministic training",
      "To reduce number of features",
    ],
    answer: 0,
    domain: "Data Preparation",
  },
  {
    id: 8,
    question: "Which technique handles missing numerical data?",
    options: [
      "Mean imputation",
      "Label encoding",
      "PCA",
      "Min-max scaling",
    ],
    answer: 0,
    domain: "Data Preparation",
  },
  {
    id: 9,
    question: "One-hot encoding is used for:",
    options: ["Categorical features", "Time-series forecasting", "Batch normalization", "Vector databases"],
    answer: 0,
    domain: "Data Preparation",
  },
  {
    id: 10,
    question: "Which tool provides scalable data prep on Google Cloud?",
    options: [
      "Dataflow",
      "Cloud Armor",
      "Cloud Scheduler",
      "BigQuery ML Admin",
    ],
    answer: 0,
    domain: "Data Preparation",
  },
  {
    id: 11,
    question: "BigQuery ML allows data preprocessing using:",
    options: [
      "SQL statements",
      "Terraform",
      "GKE manifests",
      "Dockerfiles",
    ],
    answer: 0,
    domain: "Data Preparation",
  },
  {
    id: 12,
    question: "What is normalization used for?",
    options: [
      "Scaling numerical features for stable training",
      "Encoding categorical labels",
      "Detecting anomalies",
      "Generating embeddings",
    ],
    answer: 0,
    domain: "Data Preparation",
  },

  // -----------------------------------------
  // DOMAIN 3 — MODELING (TRAINING & TUNING)
  // -----------------------------------------
  {
    id: 13,
    question: "Which service trains custom ML models on Google Cloud?",
    options: [
      "Vertex AI Custom Training",
      "Cloud CDN",
      "Secret Manager",
      "Cloud IAM",
    ],
    answer: 0,
    domain: "Modeling",
  },
  {
    id: 14,
    question: "AutoML helps with:",
    options: [
      "Automatically selecting architectures and hyperparameters",
      "Managing IAM keys",
      "Deploying Kubernetes clusters",
      "Encrypting Cloud Storage buckets",
    ],
    answer: 0,
    domain: "Modeling",
  },
  {
    id: 15,
    question: "Which metric is used for regression?",
    options: ["RMSE", "AUC", "Precision", "Recall"],
    answer: 0,
    domain: "Modeling",
  },
  {
    id: 16,
    question: "Early stopping helps prevent:",
    options: [
      "Overfitting",
      "Data drift",
      "Model pruning",
      "Cold starts",
    ],
    answer: 0,
    domain: "Modeling",
  },
  {
    id: 17,
    question: "Hyperparameter tuning can be performed using:",
    options: [
      "Vertex AI Vizier",
      "Pub/Sub",
      "Compute Engine",
      "Cloud Interconnect",
    ],
    answer: 0,
    domain: "Modeling",
  },
  {
    id: 18,
    question: "Transfer learning is best used when:",
    options: [
      "Limited labeled training data is available",
      "Data is completely unstructured",
      "Training must be done without GPUs",
      "Data must not leave on-prem",
    ],
    answer: 0,
    domain: "Modeling",
  },

  // -----------------------------------------
  // DOMAIN 4 — OPTIMIZATION & TROUBLESHOOTING
  // -----------------------------------------
  {
    id: 19,
    question: "Which issue is indicated by high training accuracy but low validation accuracy?",
    options: [
      "Overfitting",
      "Underfitting",
      "Label leakage",
      "Concept drift",
    ],
    answer: 0,
    domain: "Optimization",
  },
  {
    id: 20,
    question: "Which technique fixes underfitting?",
    options: [
      "Increase model complexity",
      "Reduce dataset size",
      "Lower learning rate",
      "Disable regularization",
    ],
    answer: 0,
    domain: "Optimization",
  },
  {
    id: 21,
    question: "Which technique fixes overfitting?",
    options: [
      "Regularization or dropout",
      "Use fewer features",
      "Lower batch size",
      "Switch to K-means",
    ],
    answer: 0,
    domain: "Optimization",
  },
  {
    id: 22,
    question: "Data leakage occurs when:",
    options: [
      "Training data contains information from the test set",
      "Schema changes occur",
      "GPU is misconfigured",
      "Batch size is too small",
    ],
    answer: 0,
    domain: "Optimization",
  },
  {
    id: 23,
    question: "Which method helps detect concept drift?",
    options: [
      "Monitoring model performance over time",
      "Adding more GPUs",
      "Encrypting the dataset",
      "Using a different optimizer",
    ],
    answer: 0,
    domain: "Optimization",
  },
  {
    id: 24,
    question: "Gradient explosion can be mitigated with:",
    options: ["Gradient clipping", "More epochs", "More layers", "Random forest"],
    answer: 0,
    domain: "Optimization",
  },

  // -----------------------------------------
  // DOMAIN 5 — DEPLOYMENT & MLOPS
  // -----------------------------------------
  {
    id: 25,
    question: "Which Google Cloud service deploys ML models as managed endpoints?",
    options: [
      "Vertex AI Endpoints",
      "Cloud Functions",
      "Cloud Shell",
      "Data Catalog",
    ],
    answer: 0,
    domain: "Deployment & MLOps",
  },
  {
    id: 26,
    question: "CI/CD for ML pipelines is commonly implemented using:",
    options: ["Vertex Pipelines", "Cloud CDN", "Cloud Spanner", "Memorystore"],
    answer: 0,
    domain: "Deployment & MLOps",
  },
  {
    id: 27,
    question: "What is model versioning used for?",
    options: [
      "Tracking different model iterations safely",
      "Increasing GPU utilization",
      "Encrypting training data",
      "Caching inference requests",
    ],
    answer: 0,
    domain: "Deployment & MLOps",
  },
  {
    id: 28,
    question: "What is canary deployment?",
    options: [
      "Routing a small percentage of traffic to a new model version",
      "Encrypting inference logs",
      "Running inference only during off-peak hours",
      "Using only CPU-based deployment",
    ],
    answer: 0,
    domain: "Deployment & MLOps",
  },
  {
    id: 29,
    question: "Feature Stores help with:",
    options: [
      "Managing and reusing features consistently across ML workflows",
      "Serving static websites",
      "Autoscaling Kubernetes clusters",
      "Saving model checkpoints",
    ],
    answer: 0,
    domain: "Deployment & MLOps",
  },
  {
    id: 30,
    question: "What is a common metric for monitoring deployed models?",
    options: [
      "Prediction latency",
      "CORS headers",
      "Subnet masks",
      "Firewall rules",
    ],
    answer: 0,
    domain: "Deployment & MLOps",
  },

  // -----------------------------------------
  // DOMAIN 6 — RESPONSIBLE AI
  // -----------------------------------------
  {
    id: 31,
    question: "Which practice helps ensure fairness in ML models?",
    options: [
      "Checking for label imbalance",
      "Increasing batch size",
      "Reducing epochs",
      "Switching optimizers",
    ],
    answer: 0,
    domain: "Responsible AI",
  },
  {
    id: 32,
    question: "What is explainability in ML?",
    options: [
      "Understanding why a model makes certain predictions",
      "Encrypting model weights",
      "Reducing learning rate",
      "Optimizing GPU memory",
    ],
    answer: 0,
    domain: "Responsible AI",
  },
  {
    id: 33,
    question: "Which tool provides model interpretability on Google Cloud?",
    options: [
      "Explainable AI",
      "Artifact Registry",
      "Cloud DNS",
      "Traffic Director",
    ],
    answer: 0,
    domain: "Responsible AI",
  },
  {
    id: 34,
    question: "Which metric can help detect bias?",
    options: ["Demographic parity", "RMSE", "Perplexity", "Dropout rate"],
    answer: 0,
    domain: "Responsible AI",
  },
  {
    id: 35,
    question: "What is a common privacy technique in ML?",
    options: [
      "Differential privacy",
      "Batch normalization",
      "Stratified sampling",
      "Learning rate decay",
    ],
    answer: 0,
    domain: "Responsible AI",
  },
  {
    id: 36,
    question: "What is model drift?",
    options: [
      "Decline in model accuracy due to changing data patterns",
      "Overfitting after additional epochs",
      "Misconfigured learning rate",
      "Incorrect loss function",
    ],
    answer: 0,
    domain: "Responsible AI",
  },
];
