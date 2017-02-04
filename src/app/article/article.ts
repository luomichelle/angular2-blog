export class Article {
  constructor(
    public id: number,
    public _id: string,
    public author_id: string,
    public updated: Date,
    public title: string,
    public content: string,
    public images: string[],
    public tags: string[],
    public visit_count: number,
    public comment_count: number,
    public love_count: number
  ) {  }
}
