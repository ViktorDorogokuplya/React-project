export const required = value => (value ? undefined : 'Field is required')

export const maxLengthCreator = (maxLength) => (value) => (
    (value.length > maxLength) ? `Max Lenght is ${maxLength} symbols` : undefined
) 