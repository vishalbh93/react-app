import _ from 'lodash';

const emptyMessage = 'Please enter the {0}';
const invalidMessage = 'Please enter the valid {0}!';

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stringify = (template, ...values) => {
    return template.replace(/{(\d+)}/g, (match, index) => values[index]);
};

export const ValidateInputText = (changeValue, fieldName) => {
    if (_.isEmpty(changeValue))
    {
        return stringify(emptyMessage, fieldName);
    }
    return;
};

export const ValidateEmailText = (changevalue, fieldName) => {
    if (_.isEmpty(changevalue)){
        return stringify(emptyMessage, fieldName);
    }
    else if (!regex.test(changevalue)){
        return stringify(invalidMessage, fieldName);
    }
    else {
        return;
    }
};