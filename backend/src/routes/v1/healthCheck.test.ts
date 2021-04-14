import request from 'supertest'
import app from '../../index'

describe('http status test', () => {
  it('healthcheck', async () => {
    const res: request.Response = await request(app).get('/v1/healthcheck')
    expect(res.status).toEqual(200)
    expect(res.body).toEqual({ status: 'ok' })
  })
})
