var express = require('express');
var router = express.Router();

// var express=require('express')
// var router=express.Router();
// var product=require('../model/product')
// router.get('/product',(req,res)=>{
//   product.find({})
//   .then((data)=>res.json(data))
//   .catch((err)=>console.log(err))
// })

// router.post('/addproduct',(req,res)=>{
//   var newproduct=new product(req.body)
//   newproduct.save()
//   .then(()=>res.send("Data saved"))
//   .catch((err)=>console.log(err))
// })


module.exports = router;







// var express = require('express');
// var router = express.Router();
// const { v4: uuidv4 } = require('uuid');
// var formData =require('../model/formData')
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/saveFormData', (req, res) => {
//   const data = req.body;
//   const formDataInstance = new formData.FormDataModel(data)
//   formDataInstance.save()
//   .then((data)=>{
//     res.send('Form data saved successfully');
//   })
//   .catch((err)=>{res.send(err)})
  
// });
// let formStorage = {};

// router.post('/saveForm', (req, res) => {
//   const formData = req.body;
//   const formId = uuidv4();
//   formStorage[formId] = formData;
//   console.log('Saved Form Data:', formStorage);  // Debug log
//   const shareableLink = `http://localhost:4500/form/${formId}`; // Update to your frontend URL
//   res.send({ shareableLink });
// });
// router.post('/saveFormStructure', (req, res) => {
//   const formFields = req.body;
//   const formId = uuidv4();
//   formStorage[formId] = { formFields, submissions: [] };
//   console.log('Saved Form Structure:', formStorage[formId]);  // Debug log
//   const shareableLink = `http://localhost:4500/form/${formId}`; // Update to your frontend URL
//   res.send({ shareableLink });
// });
// router.get('/getFormStructure/:formId', (req, res) => {
//   const formId = req.params.formId;
//   const form = formStorage[formId];
//   if (form) {
//     res.send(form.formFields);
//   } else {
//     res.status(404).send({ error: 'Form structure not found' });
//   }
// });

// router.post('/submitFormData/:formId', (req, res) => {
//   const formId = req.params.formId;
//   const formData = req.body;
//   const form = formStorage[formId];
//   if (form) {
//     const formDataEntry = new FormDataModel({ formId, ...formData });
//     formDataEntry.save((err, savedData) => {
//       if (err) {
//         console.error('Error saving form data:', err);
//         res.status(500).send({ error: 'Failed to save form data' });
//       } else {
//         res.send({ message: 'Form data submitted successfully', data: savedData });
//       }
//     });
//   } else {
//     res.status(404).send({ error: 'Form not found' });
//   }
// });

// router.get('/getFormData/:formId', (req, res) => {
//   const formId = req.params.formId;
//   const formData = formStorage[formId];
//   if (formData) {
//     res.send(formData);
//     console.log(formData)
//   } else {
//     res.status(404).send({ error: 'Form data not found' });
//   }
// });



// module.exports = router;
