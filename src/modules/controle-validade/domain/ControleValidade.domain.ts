import differenceInDays from "date-fns/differenceInDays";
import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";

export interface IControleValidadeProps {
  produtoID: number;
  dataValidade: Date;
  alertaEmDias: number;
}

export class ControleValidade extends AggregateRoot<IControleValidadeProps> {

  private constructor(props: IControleValidadeProps, id?: UniqueEntityID){
    super(props, id);
  }

  get produtoID(): number {
    return this.props.produtoID;
  }

  get dataValidade(): Date {
    return this.props.dataValidade;
  }

  get alertaEmDias(): number {
    return this.props.alertaEmDias;
  }

  private alertaDeVencimento(){
    if(differenceInDays(this.props.dataValidade, new Date()) <= this.props.alertaEmDias) {
      console.log("Diferença em dias => ", differenceInDays(this.props.dataValidade, new Date()))
    }
  }

  public static create(props: IControleValidadeProps, id?: UniqueEntityID) {

    const controleValidade = new ControleValidade(props, id);

    controleValidade.alertaDeVencimento()

  }

}