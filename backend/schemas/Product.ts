import { list } from "@keystone-next/keystone/schema";
import { integer, relationship, select, text } from "@keystone-next/fields";
import { isSignedIn, rules } from "../access";
import { User } from "./User";

export const Product = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: rules.canManageProducts,
    delete: rules.canManageProducts,
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    photo: relationship({
      ref: "ProductImage.product",
      ui: {
        displayMode: "card",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
    status: select({
      options: [
        { label: "Brouillon", value: "BROUILLON" },
        { label: "Disponible", value: "DISPONIBLE" },
        { label: "Indisponible", value: "INDISPONIBLE" },
      ],
      defaultValue: "BROUILLON",
      ui: {
        displayMode: "segmented-control",
        createView: {
          fieldMode: "hidden",
        },
      },
    }),
    price: integer(),
    user: relationship({
      ref: "User.products",
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
  },
});
