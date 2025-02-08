import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/events', (req, res) => {
  res.json([{ id: 1, name: 'Robotics Challenge', description: 'A competition for robotics enthusiasts.' }]);
});

app.listen(5000, () => console.log('Server running on port 5000'));
