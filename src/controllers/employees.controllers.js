import {pool} from '../db.js';

// Jugador
export const getJugador = async(req,res)=> {
    
    const [rows] =await pool.query('SELECT * FROM jugador')
    res.json(rows)
}

export const geJugador = async (req,res)=>{
    const [rows]= await pool.query('SELECT * FROM jugador WHERE idjugador = ?', [req.params.id])
    
    if(rows.length <= 0 ) 
    return res.status(404).json({
        message:'no existe el Jugador'
    })
res.json(rows[0])
}
// Equipo
export const getEquipo = async(req,res)=> {
    
    const [rows] =await pool.query('SELECT * FROM Equipos')
    res.json(rows)
}

export const geEquipo = async (req,res)=>{
    const [rows]= await pool.query('SELECT * FROM Equipos WHERE idequipo = ?', [req.params.id])
    
    if(rows.length <= 0 ) 
    return res.status(404).json({
        message:'no existe el Equipo'
    })
res.json(rows[0])
}
// Mostrar Arbitro
export const getArbitro = async (req,res)=>{
    const [rows] =await pool.query('SELECT * FROM arbitro')
    res.json(rows)
}
// Mostrar arbitro por id
export const geArbitro = async (req,res)=>{
    const [rows]= await pool.query('SELECT * FROM arbitro WHERE idarbitro = ?', [req.params.id])
    
    if(rows.length <= 0 ) 
    return res.status(404).json({
        message:'no existe el Arbitro'
    })
res.json(rows[0])
}
// Agregar Jugador
export const postJugador = async (req,res)=> {
    const { nombre, apellido ,Edad,Ncamiseta,Tarjetas }  =  req.body
    const [rows] = await pool.query('INSERT INTO jugador(nombre,apellido,Edad,Ncamiseta,Tarjetas) VALUES (?,?,?,?,?)', 
    [nombre,apellido,Edad,Ncamiseta,Tarjetas])
    res.send({
        id: rows.insertId,
        nombre,
        apellido,
        Edad,
        Ncamiseta,
        Tarjetas
    }
    )
}
// agregar Equipo
export const postEquipo = async (req,res)=> {
    const { nombreEquipo, jugadores ,Zona, Dia ,PJ ,PG ,PE, PP, GF, GC, PTS }  =  req.body
    const [rows] = await pool.query('INSERT INTO Equipos(nombreEquipo, jugadores ,Zona,Dia,PJ,PG,PE,PP,GF,GC,PTS) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 
    [nombreEquipo, jugadores ,Zona, Dia,PJ,PG,PE,PP, GF, GC, PTS])
    res.send({
        id: rows.insertId,
        nombreEquipo,
         jugadores,
         Zona,
         Dia,
         PJ,
         PG,
         PE,
         PP,
         GF,
         GC,
         PTS
    }
    )
}
// Agregar Arbitro
export const postArbitro = async (req,res)=> {
    const { nombre, apellido,Edad,Dia,Fecha,Hora }  =  req.body
    const [rows] = await pool.query('INSERT INTO arbitro(nombre, apellido,Edad,Dia,Fecha,Hora) VALUES (?,?,?,?,?,?)', 
    [nombre, apellido,Edad,Dia,Fecha,Hora])
    res.send({
        id: rows.insertId,
        nombre,
         apellido,
         Edad,
         Dia,
         Fecha,
         Hora,
    }
    )
}

// Eliminar jugador
export const deleteJugador= async(req,res)=> {
const result= await pool.query('DELETE FROM jugador WHERE idjugador= ?',[req.params.id])

if(result.affectedRows<=0)return res.status(404).json({
    mensaje : 'El Jugador no se encuentra registrado'
})
res.sendStatus(204)
}
// Eliminar Equipo
export const deleteEquipo= async(req,res)=> {
    const result= await pool.query('DELETE FROM Equipos WHERE idequipo= ?',[req.params.id])
    
    if(result.affectedRows<=0)return res.status(404).json({
        mensaje : 'El Equipo no se encuentra registrado'
    })
    res.sendStatus(204)
    }

    // Eliminar Arbitro
    export const deleteArbitro= async(req,res)=> {
        const result= await pool.query('DELETE FROM arbitro WHERE idarbitro= ?',[req.params.id])
        
        if(result.affectedRows<=0)return res.status(404).json({
            mensaje : 'El arbitro no se encuentra registrado'
        })
        res.sendStatus(204)
        }
//  Actualizar Jugador
export const putJugador= async(req,res)=>{
    const {id} = req.params
    const { nombre, apellido ,Edad,Ncamiseta,Tarjetas } = req.body
   
    const [result]=await pool.query('UPDATE jugador SET nombre = ?, apellido = ?, Edad = ? , Ncamiseta = ?, Tarjetas = ?  WHERE idjugador= ?',[nombre, apellido ,Edad,Ncamiseta,Tarjetas, id])
    if(result.affectedRows===0)return res.status(404).json({
        mensaje : `El Jugador con ID ${id}, no fue encontrada`
    })

    const [rows]= await pool.query('SELECT * FROM jugador WHERE idjugador= ?',[id])
    res.json(rows[0])
}
// Actualizar Equipos
export const putEquipo= async(req,res)=>{
    const {id} = req.params
    const { nombreEquipo, jugadores ,Zona, Dia ,PJ ,PG ,PE, PP, GF, GC, PTS } = req.body
   
    const [result]=await pool.query('UPDATE equipos SET nombreEquipo = ?,jugadores = ?, Zona =  ?,Dia = ?,PJ = ?,PG = ?,PE = ?,PP = ?,GF = ?,GC = ?,PTS = ?  WHERE idequipo= ?',[nombreEquipo, jugadores ,Zona, Dia ,PJ ,PG ,PE, PP, GF, GC, PTS, id ])
    if(result.affectedRows===0)return res.status(404).json({
        mensaje : `El Equipo con ID ${id}, no fue encontrada`
    })

    const [rows]= await pool.query('SELECT * FROM equipos WHERE idequipo= ?',[id])
    res.json(rows[0])
}

// Actualizar arbitro
export const putArbitro= async(req,res)=>{
    const {id} = req.params
    const { nombre, apellido,Edad,Dia,Fecha,Hora} = req.body
   
    const [result]=await pool.query('UPDATE arbitro SET nombre = ?,apellido = ?, Edad =  ?,Dia = ?,Fecha = ?,Hora = ? WHERE idequipo= ?',[nombre, apellido,Edad,Dia,Fecha,Hora, id ])
    if(result.affectedRows===0)return res.status(404).json({
        mensaje : `El arbitro con ID ${id}, no fue encontrada`
    })

    const [rows]= await pool.query('SELECT * FROM arbitro WHERE idarbitro= ?',[id])
    res.json(rows[0])
}