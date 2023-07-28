import schemas from "@/sanity/schemas";
import { colorInput } from "@sanity/color-input";
import { deskTool } from "sanity/desk";

export const projectId = "efsrq7y0";
export const dataset = "production";
export const title = "codexpand";
export const apiVersion = "2023-07-17";
export const basePath = "/admin";
export const plugins = [deskTool(), colorInput()];
export const schema = { types: schemas };
