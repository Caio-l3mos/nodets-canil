import {Request, Response} from 'express';

export const home = (req: Request, res: Response) => {
    res.send('Home Page');
}
export const dogs = (req: Request, res: Response) => {
    res.send('Dogs Page');
}

export const cats = (req: Request, res: Response) => {
    res.send('Cats Page');
}

export const fishes = (req: Request, res: Response) => {
    res.send('Fishes Page');
}



