import express from 'express';
import helmet from 'helmet';
import router from './routes/v1/index';

const app: express.Express = express();

// JSONオブジェクトの受信設定
// app.use(express.json())
// 配列側のオブジェクトの受信設定
// app.use(express.urlencoded({ extended: true }))

app.use(helmet());
app.use(express.json());

// 3000ポートで受信
// const port = process.env.PORT || 3000

// ルーティング
app.use('/v1', router);

export default app;
