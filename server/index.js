const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DB = path.join(__dirname, 'users.json');

function readUsers() {
  try {
    const raw = fs.readFileSync(DB, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (e) {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(DB, JSON.stringify(users, null, 2), 'utf8');
}

app.post('/api/onboard', (req, res) => {
  const data = req.body;
  if (!data || !data.name || !data.email) {
    return res.status(400).json({ error: 'Missing required fields (name, email)' });
  }

  const users = readUsers();
  const id = (users.length ? users[users.length - 1].id + 1 : 1);
  const entry = Object.assign({ id, createdAt: new Date().toISOString() }, data);
  users.push(entry);
  writeUsers(users);

  return res.json({ ok: true, id });
});

app.get('/api/users', (req, res) => {
  res.json(readUsers());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`CRWN server listening on ${PORT}`));
