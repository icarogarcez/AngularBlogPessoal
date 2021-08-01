import { Tema } from "./tema"
import { Usuario } from "./usuario"

export class Postagem {
    public id: number
    public titulo: string
    public texto: string
    public curtidas: number
    public data: Date
    public usuarios: Usuario
    public temas: Tema
}