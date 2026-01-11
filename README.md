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

## 📊 Résultats des tests

Les tests comparent :
- La taille des données sérialisées (en octets)
- Le temps de sérialisation (en millisecondes)
- Le temps de désérialisation (en millisecondes)

### Exemple de sortie :

```
JSON - Taille des données: 129 octets
JSON - Sérialisation: 0.06ms
JSON - Désérialisation: 0.04ms

XML - Taille des données: 187 octets
XML - Sérialisation: 1.44ms
XML - Désérialisation: 5.07ms

Protobuf - Taille des données: 43 octets
Protobuf - Sérialisation: 12.90ms
Protobuf - Désérialisation: 0.94ms
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

## 📊 Analyse des résultats

1. **Taille des données** :
   - Protobuf est le plus compact (43 octets)
   - Suivi de JSON (129 octets)
   - Puis XML (187 octets)

2. **Performance** :
   - JSON est le plus rapide pour la sérialisation et la désérialisation
   - Protobuf est plus lent à sérialiser mais rapide à désérialiser
   - XML est le plus lent des trois formats

## 📄 Licence

Ce projet est sous licence MIT.
