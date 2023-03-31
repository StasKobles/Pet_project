import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return same array', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
