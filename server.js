const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postRoutes = require('./routes/posts');
const leaveRoutes = require('./routes/leave');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/posts', postRoutes);
app.use('/api/leave', leaveRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 


