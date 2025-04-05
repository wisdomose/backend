import { Express, Request, Response } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import logger from "./logger";
import { generateSchema } from "@anatine/zod-openapi";
import userValidator from "../res/user/user.validator";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend API Documentation",
      version: "1.0.0",
      description: "API documentation for backend",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        user: {
          signup: generateSchema(userValidator.createUserValidator, true, "3.0")
            ?.properties?.body,
        },
      },
      parameters: {
        page: {
          in: "query",
          name: "page",
          required: false,
          schema: {
            type: "number",
          },
        },
        limit: {
          in: "query",
          name: "limit",
          required: false,
          description: "number of items per page",
          schema: {
            type: "number",
          },
        },
        perPage: {
          in: "query",
          name: "perPage",
          required: false,
          description: "number of items per page",
          schema: {
            type: "number",
          },
        },
        sort: {
          in: "query",
          name: "sort",
          required: false,
          description: "Sort Order",
          schema: {
            type: "string",
            enum: ["asc", "desc", undefined],
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/res/**/*.ts"],
};

const swaggerSpec = swaggerJsDoc(options);

export default function swaggerDocs(app: Express, _port: number) {
  app.use("/docs", swaggerUI.serve as unknown as Express);
  app.get("/docs", (req: Request, res: Response) => {
    res.send(swaggerUI.generateHTML(swaggerSpec));
  });

  app.get("/doc.json", (req: Request, res: Response) => {
    res.setHeader("content-type", "application/json");
    res.send(swaggerSpec);
  });

  logger.info("DOCS: /docs");
}
