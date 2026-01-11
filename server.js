const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');

// Charger le proto
const packageDefinition = protoLoader.loadSync('employee_service.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const employeeService = protoDescriptor.EmployeeService;

// Charger les données
const employees = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// Implémentation du service gRPC
function getEmployees(call, callback) {
  callback(null, employees); // renvoie la liste des employés
}

// Créer le serveur gRPC
const server = new grpc.Server();
server.addService(employeeService.service, { GetEmployees: getEmployees });

const PORT = '0.0.0.0:50051';
server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Erreur lors du démarrage du serveur gRPC:', err);
    return;
  }
  console.log(`Serveur gRPC démarré sur ${PORT}`);
});
