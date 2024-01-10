## Installation

```bash
$ npm install
```

## Running the app

```bash
# with docker
$ docker-compose up -d

# without docker
$ npm run start:dev
```

## Utilisation 
Donnée pour une marque de voiture nécéssaire : 
```ts
{
"nom": "Marque de voiture" // String
"yearCreation": 0000 // Number
"country": "Pays" // String
}
```

### Endpoint
**GET** : 
- http://localhost:3500/marque-voiture/
- http://localhost:3500/marque-voiture/:id

**PUT** :
- http://localhost:3500/marque-voiture/:id

**DEL** :
- http://localhost:3500/marque-voiture/:id

**POST** :
- http://localhost:3500/marque-voiture/
