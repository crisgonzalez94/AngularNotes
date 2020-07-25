/* This is the model of the notes */
export class Note{
    constructor(
        public title: string,
        public description: string,
        public works: Array<string>,
        public date: string
    ){}
}