import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

jest.mock('axios');

const data = {
    age: 22,
    city: 'Batumi',
    country: Country.Georgia,
    currency: Currency.GEL,
    first: 'Stas',
    lastname: 'Kobles',
    username: 'admin_test',
};

describe('validateProfileData.test', () => {
    test('with full data', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without lastname and firstname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('all errors', async () => {
        const result = validateProfileData({ });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
