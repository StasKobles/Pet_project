import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return filled form', () => {
        const form = {
            age: 22,
            city: 'Batumi',
            country: Country.Georgia,
            currency: Currency.GEL,
            first: 'Stas',
            lastname: 'Kobles',
            username: 'admin_test',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
