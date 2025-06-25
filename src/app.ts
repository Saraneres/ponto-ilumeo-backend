// src/app.ts
import fastify from 'fastify';
import cors from '@fastify/cors';
import { turnoRoutes } from './routes/turnos';

export const app = fastify();

app.register(cors, {
    origin: true,
});

app.register(turnoRoutes);