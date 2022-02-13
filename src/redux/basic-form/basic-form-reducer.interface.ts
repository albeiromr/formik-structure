import { BasicFormEnum } from "../../enums/basic-form-status.enum";
import { BasicFormInterface } from "../../interfaces/basic-form.interface";

export interface BasicFormReducerInterface {
  status: BasicFormEnum;
  value: BasicFormInterface;
}
