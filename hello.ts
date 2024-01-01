import { Hono } from 'https://deno.land/x/hono@v3.11.11/mod.ts'

const app = new Hono()

app.get('/', (c: any) => c.text('Hello Bryan!'))

Deno.serve(app.fetch)
