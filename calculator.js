const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//Permite ler as solicitaçoes enviadas pelo metodo post
//é possivel ler em bodyParser.text() .json() tambem
// .urlencoded é para ler o dados do formulario em HTML postado no servidor ( formdata no browser)
// E ENVIADO COMO STRING
app.use(bodyParser.urlencoded({extended: true}))


app.listen(3000, function(){
  console.log('running 3000')
})

//--------------HOME
app.get('/', function(req, res){
  res.sendFile(__dirname +'/index.html')
})
app.post('/', function(req, res){
  //buscando o valor no atributo name="" no index
  let num1 = Number(req.body.n1)
  let num2 = Number(req.body.n2)

  let result = num1 +  num2

  res.send('The result of the sum is: ' + result)
})
//----------------BMI Calculator
app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname +'/bmiCalculator.html')
})
app.post('/bmicalculator', function(req, res){
  let weight = parseFloat(req.body.weight)
  let height = parseFloat(req.body.height)

  let bmi = (weight / (height * height)).toFixed(2)

  res.send('Your BMI is: '+ bmi)

})
