import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('QuestForge backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});