import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import "dotenv/config";
import { User } from "./schemas/User";
import { Role } from "./schemas/Role";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import { CartItem } from "./schemas/CartItem";
import { OrderItem } from "./schemas/OrderItem";
import { Order } from "./schemas/Order";
import { insertSeedData } from "./seed-data";
import { sendPasswordResetEmail } from "./lib/mail";
import { extendGraphqlSchema } from "./mutations";
import { permissionsList } from "./schemas/fields";

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
      async onConnect(keystone) {
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      CartItem,
      OrderItem,
      Order,
      User,
      Product,
      ProductImage,
      Role,
    }),
    graphql: {
      queryLimits: { maxTotalResults: 100 },
      apolloConfig: {
        introspection: true,
      },
    },
    extendGraphqlSchema,
    ui: {
      // TODO: change this for roles
      isAccessAllowed: ({ session }) => {
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email role { ${permissionsList.join(" ")}}`,
    }),
  })
);
