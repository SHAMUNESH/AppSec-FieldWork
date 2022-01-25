const app = require('express')()
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const Nexmo = require('nexmo')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
nunjucks.configure('views', { express: app })

const nexmo = new Nexmo({ 
  apiKey: '61dd7ccb',
  apiSecret: 'qNmFmljysp7JwKDC'
})

// Other code will go here
app.get('/', (req, res) => { 
    res.render('index.html', { message: 'Enter your mobile number' }) 
  })

app.post('/verify', (req, res) => {
    nexmo.verify.request({
        number: req.body.number,
        brand: 'Dataknights'
    }, (error, result) => {
        if(result.status != 0) {
        res.render('index.html', { message: result.error_text })
        } else {
        res.render('check.html', { requestId: result.request_id })
        }
    })
})

app.post('/check', (req, res) => {
    nexmo.verify.check({
      request_id: req.body.requestId,
      code: req.body.code
    }, (error, result) => {
      if(result.status != 0) {
        res.render('index.html', { message: result.error_text })
      } else {
        res.render('success.html')
      }
    })
  })
app.listen(3000)