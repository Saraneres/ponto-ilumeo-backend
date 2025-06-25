import Fastify from 'fastify';
import dotenv from 'dotenv';
import { turnoRoutes } from './routes/turnos';

dotenv.config();

async function start() {
    const app = Fastify();

    // ⚠️ CORS configurado explicitamente com os métodos permitidos
    await app.register(import('@fastify/cors'), {
        origin: '*',
        methods: ['GET', 'POST', 'PATCH'], // 💥 ESSENCIAL!
    });

    app.register(turnoRoutes);

    app.listen({
        port: Number(process.env.PORT) || 3333,
        host: '0.0.0.0', // ESSENCIAL para Railway
    }).then(() => {
        console.log('🚀 HTTP Server Running!');
    })
}
start();

