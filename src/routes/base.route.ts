import { Router } from 'express';

import packageJason from '../../package.json';

export const baseRoutes = Router();

baseRoutes.get('/', (_, res) => {
    const { name, version, description, author } = packageJason;
    
    res.status(200).json({ name, version, description, author });
});