import {Router} from 'express'
import {deleteEquipo, getJugador,geJugador, postJugador, putJugador, 
    getEquipo, geEquipo, postEquipo, deleteJugador, putEquipo, deleteArbitro, putArbitro, postArbitro, getArbitro} from '../controllers/employees.controllers.js';
const router = Router()
// JUGADOR
router.get('/Jugador', getJugador)
router.get('/Jugador/:id', geJugador)
router.post('/Jugador', postJugador)
router.delete('/Jugador/:id', deleteJugador)
router.put('/Jugador/:id', putJugador)
// EQUIPO
router.get('/Equipo', getEquipo)
router.get('/Equipo/:id', geEquipo)
router.post('/Equipo', postEquipo)
router.delete('/Equipo/:id', deleteEquipo)
router.put('/Equipo/:id', putEquipo)
// Arbitro
router.get('/Arbitro', getArbitro)
router.get('/Arbitro/:id', getArbitro)
router.post('/Arbitro', postArbitro)
router.delete('/Arbitro/:id', deleteArbitro)
router.put('/Arbitro/:id', putArbitro)






export default router;