const fs = require('fs');
const convert = require('xml-js');
const protobuf = require('protobufjs');
const { performance } = require('perf_hooks');

// Charger la définition Protobuf
const root = protobuf.loadSync('employee.proto');
const EmployeeList = root.lookupType('Employees');

// Données de test
const testData = {
  employee: [
    {
      id: 1,
      name: 'Test User',
      salary: 50000,
      email: 'test@example.com',
      emp_date: '2023-01-01',
      departement: 'TEST'
    }
  ]
};

describe('Format Comparison Tests', () => {
  // Test JSON
  test('JSON serialization/deserialization', () => {
    // Test de sérialisation
    const jsonStart = performance.now();
    const jsonString = JSON.stringify(testData);
    const jsonEnd = performance.now();
    
    // Test de désérialisation
    const parseStart = performance.now();
    const parsedJson = JSON.parse(jsonString);
    const parseEnd = performance.now();
    
    // Vérification
    expect(parsedJson).toEqual(testData);
    
    console.log('JSON - Taille des données:', jsonString.length, 'octets');
    console.log(`JSON - Sérialisation: ${(jsonEnd - jsonStart).toFixed(4)}ms`);
    console.log(`JSON - Désérialisation: ${(parseEnd - parseStart).toFixed(4)}ms`);
  });

  // Test XML
  test('XML serialization/deserialization', () => {
    // Test de sérialisation
    const xmlStart = performance.now();
    const xmlString = convert.json2xml(testData, {compact: true, spaces: 2});
    const xmlEnd = performance.now();
    
    // Test de désérialisation
    const parseStart = performance.now();
    const parsedXml = convert.xml2js(xmlString, {compact: true});
    const parseEnd = performance.now();
    
    // Vérification de la structure XML
    expect(parsedXml).toHaveProperty('employee');
    // Vérifier que les données de base sont présentes
    expect(parsedXml.employee).toMatchObject({
      name: { _text: 'Test User' },
      email: { _text: 'test@example.com' },
      departement: { _text: 'TEST' },
      id: { _text: '1' },
      salary: { _text: '50000' },
      emp_date: { _text: '2023-01-01' }
    });
    
    console.log('XML - Taille des données:', xmlString.length, 'octets');
    console.log(`XML - Sérialisation: ${(xmlEnd - xmlStart).toFixed(4)}ms`);
    console.log(`XML - Désérialisation: ${(parseEnd - parseStart).toFixed(4)}ms`);
  });

  // Test Protobuf
  test('Protobuf serialization/deserialization', () => {
    // Créer un message Protobuf
    const message = EmployeeList.create({ employee: testData.employee });
    
    // Test de sérialisation
    const protoStart = performance.now();
    const buffer = EmployeeList.encode(message).finish();
    const protoEnd = performance.now();
    
    // Test de désérialisation
    const parseStart = performance.now();
    const decoded = EmployeeList.decode(buffer);
    const parseEnd = performance.now();
    
    // Vérification - comparer les champs un par un
    const expected = testData.employee[0];
    const actual = decoded.employee[0];
    
    expect(actual).toMatchObject({
      id: expected.id,
      name: expected.name,
      salary: expected.salary,
      email: expected.email,
      departement: expected.departement
    });
    // Note: emp_date n'est pas inclus car il n'est pas défini dans le schéma Protobuf
    
    console.log('Protobuf - Taille des données:', buffer.length, 'octets');
    console.log(`Protobuf - Sérialisation: ${(protoEnd - protoStart).toFixed(4)}ms`);
    console.log(`Protobuf - Désérialisation: ${(parseEnd - parseStart).toFixed(4)}ms`);
  });
});
