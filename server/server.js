const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const authRouter = require('./routes/authRouter');
const apiRouter = require('./routes/apiRouter');
const { default: axios } = require('axios');

const app = express();
const PORT = 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.post('/coordinates', async (req, res) => {
  try {
    const { address } = req.body;
    const token = '8abf2516c963dfbfe7e8033ee347b1a9420b60e8';
    const secret = 'b54649db1261aab4bfc4c828656fa8670a524bac';
    const query = address ?? 'москва сухонская 11';

    const options = {
      url: 'https://cleaner.dadata.ru/api/v1/clean/address',
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
        'X-Secret': secret,
      },
      data: JSON.stringify([query]),
    };

    const response = await axios(options);
    res.json({ lat: response.data[0].geo_lat, lon: response.data[0].geo_lon });
  } catch (err) {
    console.log(err);
  }
});

app.use(session({
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use('/auth', authRouter);
app.use('/api/v1', apiRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
