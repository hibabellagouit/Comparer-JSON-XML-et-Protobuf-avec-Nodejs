# Comparaison des formats JSON, XML et Protobuf avec Node.js

Ce projet compare les performances et l'efficacité de trois formats de sérialisation de données populaires :
- **JSON** (JavaScript Object Notation)
- **XML** (eXtensible Markup Language)
- **Protobuf** (Protocol Buffers)

## 🚀 Fonctionnalités

- Sérialisation et désérialisation de données dans les trois formats
- Mesure des performances (temps d'exécution)
- Comparaison de la taille des données sérialisées
- Tests automatisés

## 📦 Installation

1. Clonez le dépôt :
   ```bash
   git clone [URL_DU_REPO]
   cd "Comparer JSON, XML et Protobuf avec Node.js"
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## 🧪 Exécution des tests

Pour exécuter les tests et voir les résultats de la comparaison :

```bash
npm test
```

<img width="1366" height="728" alt="Comparer JSON, XML et Protobuf avec Node js 12_01_2026 00_05_18" src="https://github.com/user-attachments/assets/84efa7d9-3f48-4158-ada3-d540023ac338" />



```

## 📝 Structure du projet

- `index.js` - Point d'entrée principal avec la logique de comparaison
- `test/formats.test.js` - Tests automatisés
- `employee.proto` - Définition du schéma Protobuf
- `data.json` - Exemple de données au format JSON
- `data.xml` - Exemple de données au format XML
- `data.proto` - Données encodées en Protobuf (binaire)
- `server.js` - Serveur gRPC pour la démonstration
- `client.js` - Client gRPC pour tester la communication

## 📚 Dépendances

- `protobufjs` - Pour la gestion des messages Protobuf
- `xml-js` - Pour la conversion entre XML et JSON
- `jest` - Pour les tests unitaires (dépendance de développement)
- `@grpc/grpc-js` - Pour la communication gRPC
- `@grpc/proto-loader` - Pour charger les fichiers .proto

## 🛠 Développement

Pour exécuter les tests en mode watch (rafraîchissement automatique) :

```bash
npm run test:watch
```

Pour générer un rapport de couverture des tests :

```bash
npm run test:coverage
```
<img width="1366" height="728" alt="Comparer JSON, XML et Protobuf avec Node js 12_01_2026 00_06_32" src="https://github.com/user-attachments/assets/9b99b6c2-2bab-43c1-b5e7-1a5f69d875cf" />

