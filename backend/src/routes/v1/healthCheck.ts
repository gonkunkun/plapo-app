import express from 'express'

const router = express.Router()

// GETリクエスト
router.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send({ status: 'ok' })
  const e = (test: number) => 1 + test
  console.log(e(5))
})

export default router
