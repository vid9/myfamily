let router = require('express').Router();
let requestHandler = require('../controllers/esController');

router.get('/', requestHandler.naslovnaStran);

router.post('/prijava', requestHandler.prijaviUporabnika);

router.post('/registracija', requestHandler.ustvariUporabnika);

router.post('/ustvari_nalogo', requestHandler.ustvariNalogo);

router.post('/prikazi_naloge', requestHandler.prikaziNaloge);
/*
router.get('/uredi_cilj', requestHandler.urersdiCilj);
*/
router.post('/ustvari_cilj', requestHandler.ustvariCilj);

router.get('/koledar/:koledarId', requestHandler.prikaziKoledar);

router.get('/odjava', requestHandler.odjava);
/*
// BAZA

router.get("/db", krmilnikNavigacija.upravljajZBazo);

router.post("/db/napolni", krmilnikNavigacija.napolniPodatke);

router.post("/db/izbrisi", krmilnikNavigacija.izbrisiPodatke);

router.get("/db/test", krmilnikNavigacija.testirajBazo);

router.post("/db/dodaj", krmilnikNavigacija.dodajPodatek);
*/

module.exports = router;