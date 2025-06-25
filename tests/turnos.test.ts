// tests/turnos.test.ts
import { describe, test, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { app } from '../src/app';

describe('Turnos API', () => {
    beforeAll(async () => {
        await app.ready();
    });

    test('Deve criar novo usuário no login', async () => {
        const response = await request(app.server)
            .post('/login')
            .send({ codigo: 'test123' });

        expect(response.status).toBe(200);
        expect(response.body.usuarioId).toBeDefined();
    });
});