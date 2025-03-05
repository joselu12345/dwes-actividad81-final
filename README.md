# Solución a Prueba DWES Temas 5 y 6

[Enunciado de la prueba](Enunciado_Prueba.pdf)


## INSTRUCCIONES

1. Crear base de datos `pizzeria` vacía en MySQL.
   
2. Renombrar .env.example -> .env y revisar DATABASE_URL
   ```
   mv  .env.example  .env
   ```
 
3. Instalar dependencias
   ```sh
   npm install
   ```
   
4. Crear tablas a partir del esquema de prisma
   ```sh
   npx  prisma  db  push
   ```

5. Sembrar las tablas (seed) con datos iniciales 
   ```sh
   npm  run  seed
   ```

5. Iniciar servidor de desarrollo
   ```
   npm  run dev
   ```
