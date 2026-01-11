const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Charger le proto
const packageDefinition = protoLoader.loadSync('employee_service.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const client = new protoDescriptor.EmployeeService(
  '127.0.0.1:50051',
  grpc.credentials.createInsecure()
);

// Appel du service
client.GetEmployees({}, (err, response) => {
  if (err) {
    console.error('Erreur gRPC:', err);
  } else {
    console.log('Liste des employés reçue via gRPC:', response);
  }
});
