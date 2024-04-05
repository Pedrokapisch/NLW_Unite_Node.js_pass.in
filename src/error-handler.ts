import { FastifyInstance } from "fastify";
import { BadRequest } from "./routes/_errors/bad-request";
import { ZodError } from "zod";


type FastifyErrorHandler = FastifyInstance['errorHandler']

export const erorrHandler: FastifyErrorHandler = (error, request, reply) => {


  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Error during validation',
      errors: error.flatten().fieldErrors,
    })

  }

  return reply.status(500).send({message: 'Internal server error'})
}
