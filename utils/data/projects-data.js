export const projectsData = [
    {
        id: 1,
        name: 'Retail Forcasting ',
        description: 'Me and my team built an AI-powered retail sales forecasting system. I developed the API using FastAPI, Python, PostgreSQL. The model was trained on the Retail dataset using XGBoost and LightGBM with advanced feature engineering for improved accuracy. To ensure scalability, we optimized data processing with chunking and memory-efficient pipelines. Forecasts are served via a FastAPI endpoint, which supports future date queries. Weekly analysis and validation scripts were implemented to identify top-performing products and validate prediction trends.',
        tools: ['FastAPI', 'Python', 'PostgreSQL', 'XGBoost', 'LightGBM', 'Pandas', 'NumPy', 'Scikit-learn'],
        role: 'Data Analyst/Machine Learning Engineer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Nepika-AI App',
        description: "Me and my team designed and developed a  AI-powered application for Nepika AI, focusing on facial skin issue detection, analysis and recommend product based on the skin issue. The app supports multiple skin issues localization, displays results with annotated images, and provides recommendations. I developed the API using FastAPI, Python, PyTorch (YOLO), and PostgreSQL. The front-end is deployed on AWS Amplify, while the back-end AI services are hosted on AWS EC2 with S3 storage for image data.",
        tools: ["FastAPI", "Python", "PyTorch (YOLO)", "PostgreSQL", "OpenCV"],
        role: "AI Developer",
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Fraud Detection Model',
        description: "I designed and developed a machine learning model to detect fraudulent credit card transactions . The system analyzes transaction data, identifies anomalous patterns, and flags suspicious activities to prevent financial loss. I implemented data preprocessing, feature engineering, and trained classification models using supervised learning techniques. The project includes model evaluation using metrics like ROC-AUC, precision, recall, and F1-score. The backend API serves predictions for new transactions, enabling integration with banking systems.",
        tools: ["python", "Scikit-learn", "XGboost", "FastAPI", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
        code: '',
        role: 'Data Scientist / Machine Learning Engineer',
        demo: '',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },