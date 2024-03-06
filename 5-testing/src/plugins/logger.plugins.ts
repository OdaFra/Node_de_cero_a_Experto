
import winston, { format} from 'winston'

// const winston = require('winston');
const { combine, timestamp, json } = format;

const logger = winston.createLogger({
    level:'info',
    format: //winston.format.json(),
    combine(
        timestamp(), json()
    ),
    defaultMeta: {service: 'user-service'},
    transports:[
        new winston.transports.File({ filename:'error.log', level:'error' }),
        new winston.transports.File({ filename:'combined.log' })
    ]
})

export const  buildLogger= (service:string)=>{
    return {
        log:(message:string)=>{
            logger.log('info', {message, service})
        },
        error:(message:string)=>{
            logger.error('error', {message, service})

        }
    }
}