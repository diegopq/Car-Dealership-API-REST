//nel nombre no lleva la palabra entity porque al momento de usar un
//orm el nombre de la clase se convierte en el nombre de la tabla
export class Brand {
  id: string;
  name: string;

  createdAt: number;
  updatedAt?: number;
}
