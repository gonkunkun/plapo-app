import app from './index';

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
  console.log(`PID ${process.pid} is running`);
  console.log(`app listening ap ${port}`);
});
