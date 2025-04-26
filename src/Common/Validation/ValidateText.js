import _ from 'lodash';

const emptyMessage = 'Please enter the username!';
const invalidMessage = 'Please enter valid username!';

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ValidateInputText = (changevalue) => {
        if (_.isEmpty(changevalue)){
            return emptyMessage;
        }
        else if (!regex.test(changevalue)){
            return invalidMessage
        }
        else {
            return;
        }
    };