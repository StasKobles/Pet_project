import { Country } from 'entities/Country';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Georgia, content: Country.Georgia },
    { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = memo((props:CountrySelectProps) => {
    const {
        className, onChange, value, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value:string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Your country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
