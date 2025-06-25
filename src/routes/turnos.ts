import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export async function turnoRoutes(app: FastifyInstance) {
    // LOGIN
    app.post('/login', async (request) => {
        const bodySchema = z.object({
            codigo: z.string(),
        });

        const { codigo } = bodySchema.parse(request.body);
        const codigoNormalizado = codigo.toLowerCase();


        let usuario = await prisma.usuario.findUnique({
            where: { codigo: codigoNormalizado },
        });

        if (!usuario) {
            usuario = await prisma.usuario.create({
                data: { codigo: codigoNormalizado },
            });
        }

        return { usuarioId: usuario.id };
    });

    // LISTAR TURNOS
    app.get('/turnos', async () => {
        const turnos = await prisma.turno.findMany({
            orderBy: { criadoEm: 'desc' },
        });
        return turnos;
    });

    // INICIAR TURNO COM USUARIO
    app.post('/turnos/inicio', async (request) => {
        const bodySchema = z.object({
            usuarioId: z.number(),
        });

        const { usuarioId } = bodySchema.parse(request.body);

        const turno = await prisma.turno.create({
            data: {
                inicio: new Date(),
                usuarioId,
            },
        });

        return turno;
    });

    // FINALIZAR TURNO
    app.patch('/turnos/fim/:id', async (request) => {
        const paramsSchema = z.object({
            id: z.string(),
        });

        const { id } = paramsSchema.parse(request.params);
        const turno = await prisma.turno.update({
            where: { id: Number(id) },
            data: { fim: new Date() },
        });

        return turno;
    });
}

