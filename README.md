Backend - Sistema de Controle de Ponto

Este é o backend do sistema de controle de ponto desenvolvido para o processo seletivo da Ilumeo. A API permite login com código de usuário, início e término de turnos, e consulta dos registros.

Tecnologias e Ferramentas

- TypeScript
- Fastify
- Prisma ORM
- PostgreSQL
- Docker
- Vitest + Supertest (Testes automatizados)
- ESLint + Prettier

bash
Copiar
Editar

Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ponto-backend.git

# Acesse a pasta
cd ponto-backend

# Instale as dependências
npm install

# Rode as migrações e limpe o banco
npx prisma migrate reset

# Inicie o servidor
npm run dev
🧪 Testes
bash
Copiar
Editar
# Executar os testes
npm run test
🐳 Docker
bash
Copiar
Editar
docker-compose up --build
🔗 Deploy
Backend hospedado no Render.
