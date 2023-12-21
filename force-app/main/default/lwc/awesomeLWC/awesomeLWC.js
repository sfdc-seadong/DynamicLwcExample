import { LightningElement, api } from "lwc";

export default class extends LightningElement {

    componentConstructor;
   @api strLWC ='c/default';

    async connectedCallback() {
        const { default: ctor } = await import(this.strLWC);
        this.componentConstructor = ctor;
      }
    }