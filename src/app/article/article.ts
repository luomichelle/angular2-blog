export class Article {
  constructor(
    public id: number,
    public author: string,
    public date: Date,
    public title: string,
    public content: string,
    public read: number,
    public comment: number,
    public love: number
  ) {  }
}