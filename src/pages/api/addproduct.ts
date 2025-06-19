import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const formula = formData.get("formula");
  const molarMass = formData.get("molarMass");
  const cas = formData.get("cas");
  const einecs = formData.get("einecs");
  const hsCode = formData.get("hsCode");
  const appearance = formData.get("appearance");
  const application = formData.get("application");
  const storage = formData.get("storage");

  const image = formData.get("image")?.toString() ?? "";
  const tagsRaw = formData.get("tags")?.toString() ?? "";
  const tags = [formData.get("tags")?.toString() || ""];


  const specNames = formData.getAll("spec-name");
  const specFoods = formData.getAll("spec-food");
  const specTechs = formData.getAll("spec-tech");

  const specifications = specNames.map((_, i) => ({
    name: specNames[i],
    food: specFoods[i],
    tech: specTechs[i],
  }));

  const filePath = path.resolve("src/data/products.json");
  let existing = [];

  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  const id = Date.now() + Math.floor(Math.random() * 10000);

  const newProduct = {
    id,
    name,
    formula,
    molarMass,
    cas,
    einecs,
    hsCode,
    appearance,
    application,
    storage,
    image,
    tags,
    specifications,
  };

  existing.push(newProduct);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  return new Response(null, {
    status: 303,
    headers: {
      Location: "/admin/addproduct?success=1",
    },
  });
};
