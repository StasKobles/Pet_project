import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('getArticleDetailsData.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return isLoading false', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});

describe('getArticleDetailsError.test', () => {
    test('should return field error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});
