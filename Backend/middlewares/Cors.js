import cors from 'cors';

const corsOptions = [{
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
},
{
  origin: "https://84b7-197-210-226-186.ngrok-free.app",
  optionsSuccessStatus: 200,
}];

export default cors(corsOptions);
