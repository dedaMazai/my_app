const express = require('express');
const app = express();
const userController = require ('./controllers/user-controller');
const { userValidator, loginValidator } = require ('./services/validators');
const { verifyToken } = require ('./services/auth-servise');

app.use(express.json());

app.use('/api/profile/*', verifyToken);

app.get('/hello', (req, res, next) => {
    console.log('1111111111');
    next();
}, (req, res) => {
    console.log('2222222222222')
    res.send('Hello');
});

app.post('/api/signup', userValidator, userController.create);
app.post('/api/login', loginValidator, userController.login);


app.listen(4000, () => {
    console.log('Server started 1')
})

