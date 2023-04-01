import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article, ArticleType } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data: Article = {
    id: '1',
    title: 'subtitle',
    blocks: [],
    createdAt: ' ',
    img: ' ',
    subtitle: ' ',
    type: [ArticleType.IT],
    views: 2,
};

describe('articleDetailsSlice.test', () => {
    test('test update profile server pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false, error: 'error' };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true, error: undefined,
        });
    });

    test('test update profile server fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, ' ', ' '),
        )).toEqual({
            isLoading: false,
            data,
        });
    });
});
