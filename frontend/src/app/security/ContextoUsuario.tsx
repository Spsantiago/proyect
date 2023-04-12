import { createContext } from "react";
import { propUsuario } from "../models/MisInterfases";

export const ContextoUsuario = createContext<propUsuario | null>(null);