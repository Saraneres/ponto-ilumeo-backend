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

    app.listen({ port: 3333 }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Servidor rodando em ${address}`);
    });
}

start();

