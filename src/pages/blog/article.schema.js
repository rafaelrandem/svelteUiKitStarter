export class ArticleSchema {

    constructor( _schema ){
       this.header  = _schema.header ;
       this.autor   = _schema.autor || '' ;
       this.date    = _schema.date ;
       this.content = _schema.content ;

    }

}
