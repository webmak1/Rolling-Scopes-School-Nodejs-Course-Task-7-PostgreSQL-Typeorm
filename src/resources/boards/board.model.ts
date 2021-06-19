// @ts-check

import { v4 as uuidv4 } from 'uuid';
interface IBoardGeneral {
  title: string;
  columns: string;
}
export interface IBoard extends IBoardGeneral {
  id: number;
}

export interface IBoardInput extends IBoardGeneral {
  id: number | undefined;
}

export class Board implements IBoard {
  public id;
  public title;
  public columns;

  constructor({ id = +uuidv4(), title, columns }: IBoardInput) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
