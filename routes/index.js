const axios = require('axios');
BASE_URL = 'https://jsonplaceholder.typicode.com';

module.exports = (app) => {
  app.get('/user/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const { status, data } = await axios.get(`${BASE_URL}/users/${id}`);

      if (status !== 200) {
        return res.status(404).send({ status: 'failed', message: 'User not found' });
      }

      return res.send({ status: 'success', data });
    } catch (e) {
      return res.status(400).send({ status: 'failed', message: e.message });
    }
  });
}
