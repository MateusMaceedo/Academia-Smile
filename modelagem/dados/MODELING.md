Modelagem inicial para um sistema de educação musical e teológica usando **MongoDB**. A modelagem segue uma abordagem orientada a documentos, considerando os seguintes requisitos:

- **Usuários**: Aluno, Professor (Admin Educacional) e Admin do Sistema.
- **Cursos e Módulos**: Cursos podem ter vários módulos.
- **Conteúdos**: Vídeos, PDFs, Subsidios, materiais complementares.
- **Progresso do Aluno**: Rastreamento do aprendizado, com monitoramento e dashboardo para acompanhamento da evolução do aluno.
- **Avaliações e Certificados**: Testes e certificação ao final de cada curso.

1️⃣ Coleção `users` (Usuários)
```bash
{
  "_id": ObjectId(),
  "name": "Daiana da Silva Ferreira Souza",
  "email": "daiana-macedo@email.com",
  "passwordHash": "hash_senha",
  "role": "student",
  "profile": {
    "bio": "Apaixonado por música sacra",
    "instrument": "Violão"
  },
  "createdAt": ISODate("2025-03-02T10:00:00Z")
}
```

- `role`: Pode ser `"student"`, `"teacher"`, ou `"admin"`.
- `profile`: Informações adicionais do usuário (diferente para aluno/professor).

2️⃣ Coleção `courses` (Cursos)
```bash
{
  "_id": ObjectId(),
  "title": "Introdução à Teologia",
  "description": "Curso básico sobre teologia cristã",
  "category": "Teologia",
  "level": "Básico",
  "instructorId": ObjectId("id_do_professor"),
  "modules": [
    {
      "title": "Origem da Teologia",
      "description": "História e fundamentos da teologia",
      "contents": [
        { "type": "video", "url": "https://video.com/introducao.mp4" },
        { "type": "pdf", "url": "https://pdf.com/material.pdf" }
      ]
    }
  ],
  "createdAt": ISODate("2025-03-02T10:00:00Z")
}
```

- Um curso pode conter múltiplos módulos.
- Cada módulo pode conter diferentes tipos de materiais (vídeos, PDFs etc.).

3️⃣ Coleção `enrollments` (Matrículas)
```bash
{
  "_id": ObjectId(),
  "userId": ObjectId("id_do_aluno"),
  "courseId": ObjectId("id_do_curso"),
  "progress": 30,
  "completedModules": [ObjectId("id_do_modulo_1")],
  "createdAt": ISODate("2025-03-02T10:00:00Z")
}
```

- Registra a participação do aluno no curso.
- `progress`: Percentual de conclusão.

4️⃣ Coleção `assessments` (Avaliações)
```bash
{
  "_id": ObjectId(),
  "courseId": ObjectId("id_do_curso"),
  "moduleId": ObjectId("id_do_modulo"),
  "questions": [
    {
      "question": "O que é teologia?",
      "options": ["Estudo de Deus", "Filosofia", "História", "Matemática"],
      "answer": "Estudo de Deus"
    }
  ],
  "createdAt": ISODate("2025-03-02T10:00:00Z")
}
```

- Define questões para os alunos responderem.

5️⃣ Coleção `certificates` (Certificados)
```bash
{
  "_id": ObjectId(),
  "userId": ObjectId("id_do_aluno"),
  "courseId": ObjectId("id_do_curso"),
  "issuedAt": ISODate("2025-03-02T10:00:00Z"),
  "certificateUrl": "https://certificados.com/joao.pdf"
}
```

- Gera um certificado quando o aluno conclui um curso.

Administração
- O `Admin do Sistema` pode gerenciar usuários e cursos.
- O `Professor` pode criar e gerenciar seus cursos.
