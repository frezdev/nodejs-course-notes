const { log } = require('node:console');
const os = require('node:os');

log('Información del sistema operativo:');
log('----------------------------------');
log('Nombre del sistema operativo:', os.platform());
log('Version del sistema operativo:', os.version());
log('Arquitectura:', os.arch());
log('CPUs:', os.cpus());
log('Memoria libre:', os.freemem());
log('Memoria total:', os.totalmem());
log('Uptime:', os.uptime());
