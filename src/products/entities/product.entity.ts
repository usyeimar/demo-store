export class ProductEntity {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public brand: string,
        public stock: number,
        public image: string
    ) {
    }

}