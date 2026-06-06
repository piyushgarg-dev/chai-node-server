import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
  return res.json({
    message: 'server is healthy v4.1',
    status: 'Github Actions Docker 🐳',
  });
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
