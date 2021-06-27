const express = require('express');
const multer = require('multer');
const cors = require('cors');

const { PORT } = require('./config');
const userController = require('./controllers/user');
const machineController = require('./controllers/machine');
const unitController = require('./controllers/unit');
const companyController = require('./controllers/company');

const app = express();
const upload = multer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(upload.any());

app.get('/get/machines', machineController.getAllMachines);
app.post('/new/machine', machineController.newMachine);
app.put('/update/machine', machineController.updateMachine);
app.post('/upload/image', machineController.uploadImage);
app.put('/delete/machine', machineController.deleteMachine);

app.get('/get/companies', companyController.getAllCompanies);
app.post('/new/company', companyController.newCompany);
app.put('/update/company', companyController.updateCompany);
app.put('/delete/company', companyController.deleteCompany);

app.get('/get/units', unitController.getAllUnits);
app.post('/new/unit', unitController.newUnit);
app.put('/update/unit', unitController.updateUnit);
app.put('/delete/unit', unitController.deleteUnit);

app.get('/get/users', userController.getAllUsers);
app.post('/new/user', userController.newUser);
app.put('/update/user', userController.updateUser);
app.put('/delete/user', userController.deleteUser);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
